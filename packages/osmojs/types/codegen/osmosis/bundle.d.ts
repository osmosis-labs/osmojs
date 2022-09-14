import * as _126 from "./epochs/genesis";
import * as _127 from "./epochs/query";
import * as _128 from "./gamm/pool-models/balancer/balancerPool";
import * as _129 from "./gamm/v1beta1/genesis";
import * as _130 from "./gamm/v1beta1/query";
import * as _131 from "./gamm/v1beta1/tx";
import * as _132 from "./gamm/pool-models/balancer/tx";
import * as _133 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _134 from "./gamm/pool-models/stableswap/tx";
import * as _135 from "./incentives/gauge";
import * as _136 from "./incentives/genesis";
import * as _137 from "./incentives/params";
import * as _138 from "./incentives/query";
import * as _139 from "./incentives/tx";
import * as _140 from "./lockup/genesis";
import * as _141 from "./lockup/lock";
import * as _142 from "./lockup/query";
import * as _143 from "./lockup/tx";
import * as _144 from "./mint/v1beta1/genesis";
import * as _145 from "./mint/v1beta1/mint";
import * as _146 from "./mint/v1beta1/query";
import * as _147 from "./pool-incentives/v1beta1/genesis";
import * as _148 from "./pool-incentives/v1beta1/gov";
import * as _149 from "./pool-incentives/v1beta1/incentives";
import * as _150 from "./pool-incentives/v1beta1/query";
import * as _151 from "./store/v1beta1/tree";
import * as _152 from "./superfluid/genesis";
import * as _153 from "./superfluid/params";
import * as _154 from "./superfluid/query";
import * as _155 from "./superfluid/superfluid";
import * as _156 from "./superfluid/tx";
import * as _157 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _158 from "./tokenfactory/v1beta1/genesis";
import * as _159 from "./tokenfactory/v1beta1/params";
import * as _160 from "./tokenfactory/v1beta1/query";
import * as _161 from "./tokenfactory/v1beta1/tx";
import * as _162 from "./txfees/v1beta1/feetoken";
import * as _163 from "./txfees/v1beta1/genesis";
import * as _164 from "./txfees/v1beta1/gov";
import * as _165 from "./txfees/v1beta1/query";
import * as _284 from "./epochs/query.lcd";
import * as _285 from "./gamm/v1beta1/query.lcd";
import * as _286 from "./incentives/query.lcd";
import * as _287 from "./lockup/query.lcd";
import * as _288 from "./mint/v1beta1/query.lcd";
import * as _289 from "./pool-incentives/v1beta1/query.lcd";
import * as _290 from "./superfluid/query.lcd";
import * as _291 from "./tokenfactory/v1beta1/query.lcd";
import * as _292 from "./txfees/v1beta1/query.lcd";
import * as _293 from "./epochs/query.rpc.query";
import * as _294 from "./gamm/v1beta1/query.rpc.query";
import * as _295 from "./incentives/query.rpc.query";
import * as _296 from "./lockup/query.rpc.query";
import * as _297 from "./mint/v1beta1/query.rpc.query";
import * as _298 from "./pool-incentives/v1beta1/query.rpc.query";
import * as _299 from "./superfluid/query.rpc.query";
import * as _300 from "./tokenfactory/v1beta1/query.rpc.query";
import * as _301 from "./txfees/v1beta1/query.rpc.query";
import * as _302 from "./gamm/pool-models/balancer/tx.rpc.msg";
import * as _303 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _304 from "./gamm/v1beta1/tx.rpc.msg";
import * as _305 from "./incentives/tx.rpc.msg";
import * as _306 from "./lockup/tx.rpc.msg";
import * as _307 from "./superfluid/tx.rpc.msg";
import * as _308 from "./tokenfactory/v1beta1/tx.rpc.msg";
export declare namespace osmosis {
    namespace epochs {
        const v1beta1: {
            QueryClientImpl: typeof _293.QueryClientImpl;
            LCDQueryClient: typeof _284.LCDQueryClient;
            QueryEpochsInfoRequest: {
                encode(_: _127.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.QueryEpochsInfoRequest;
                fromJSON(_: any): _127.QueryEpochsInfoRequest;
                toJSON(_: _127.QueryEpochsInfoRequest): unknown;
                fromPartial(_: {}): _127.QueryEpochsInfoRequest;
            };
            QueryEpochsInfoResponse: {
                encode(message: _127.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.QueryEpochsInfoResponse;
                fromJSON(object: any): _127.QueryEpochsInfoResponse;
                toJSON(message: _127.QueryEpochsInfoResponse): unknown;
                fromPartial(object: {
                    epochs?: {
                        identifier?: string;
                        start_time?: Date;
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        current_epoch?: any;
                        current_epoch_start_time?: Date;
                        epoch_counting_started?: boolean;
                        current_epoch_start_height?: any;
                    }[];
                }): _127.QueryEpochsInfoResponse;
            };
            QueryCurrentEpochRequest: {
                encode(message: _127.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.QueryCurrentEpochRequest;
                fromJSON(object: any): _127.QueryCurrentEpochRequest;
                toJSON(message: _127.QueryCurrentEpochRequest): unknown;
                fromPartial(object: {
                    identifier?: string;
                }): _127.QueryCurrentEpochRequest;
            };
            QueryCurrentEpochResponse: {
                encode(message: _127.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.QueryCurrentEpochResponse;
                fromJSON(object: any): _127.QueryCurrentEpochResponse;
                toJSON(message: _127.QueryCurrentEpochResponse): unknown;
                fromPartial(object: {
                    current_epoch?: any;
                }): _127.QueryCurrentEpochResponse;
            };
            EpochInfo: {
                encode(message: _126.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.EpochInfo;
                fromJSON(object: any): _126.EpochInfo;
                toJSON(message: _126.EpochInfo): unknown;
                fromPartial(object: {
                    identifier?: string;
                    start_time?: Date;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    current_epoch?: any;
                    current_epoch_start_time?: Date;
                    epoch_counting_started?: boolean;
                    current_epoch_start_height?: any;
                }): _126.EpochInfo;
            };
            GenesisState: {
                encode(message: _126.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.GenesisState;
                fromJSON(object: any): _126.GenesisState;
                toJSON(message: _126.GenesisState): unknown;
                fromPartial(object: {
                    epochs?: {
                        identifier?: string;
                        start_time?: Date;
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        current_epoch?: any;
                        current_epoch_start_time?: Date;
                        epoch_counting_started?: boolean;
                        current_epoch_start_height?: any;
                    }[];
                }): _126.GenesisState;
            };
        };
    }
    namespace gamm {
        const v1beta1: {
            MsgClientImpl: typeof _304.MsgClientImpl;
            QueryClientImpl: typeof _294.QueryClientImpl;
            LCDQueryClient: typeof _285.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    joinPool(value: _131.MsgJoinPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitPool(value: _131.MsgExitPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountIn(value: _131.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _131.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapExternAmountIn(value: _131.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapShareAmountOut(value: _131.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapExternAmountOut(value: _131.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapShareAmountIn(value: _131.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    joinPool(value: _131.MsgJoinPool): {
                        typeUrl: string;
                        value: _131.MsgJoinPool;
                    };
                    exitPool(value: _131.MsgExitPool): {
                        typeUrl: string;
                        value: _131.MsgExitPool;
                    };
                    swapExactAmountIn(value: _131.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _131.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _131.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _131.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _131.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _131.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _131.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _131.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _131.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _131.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _131.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _131.MsgExitSwapShareAmountIn;
                    };
                };
                toJSON: {
                    joinPool(value: _131.MsgJoinPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitPool(value: _131.MsgExitPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapExactAmountIn(value: _131.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapExactAmountOut(value: _131.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    joinSwapExternAmountIn(value: _131.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    joinSwapShareAmountOut(value: _131.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitSwapExternAmountOut(value: _131.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitSwapShareAmountIn(value: _131.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    joinPool(value: any): {
                        typeUrl: string;
                        value: _131.MsgJoinPool;
                    };
                    exitPool(value: any): {
                        typeUrl: string;
                        value: _131.MsgExitPool;
                    };
                    swapExactAmountIn(value: any): {
                        typeUrl: string;
                        value: _131.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: any): {
                        typeUrl: string;
                        value: _131.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: any): {
                        typeUrl: string;
                        value: _131.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: any): {
                        typeUrl: string;
                        value: _131.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: any): {
                        typeUrl: string;
                        value: _131.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: any): {
                        typeUrl: string;
                        value: _131.MsgExitSwapShareAmountIn;
                    };
                };
                fromPartial: {
                    joinPool(value: _131.MsgJoinPool): {
                        typeUrl: string;
                        value: _131.MsgJoinPool;
                    };
                    exitPool(value: _131.MsgExitPool): {
                        typeUrl: string;
                        value: _131.MsgExitPool;
                    };
                    swapExactAmountIn(value: _131.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _131.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _131.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _131.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _131.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _131.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _131.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _131.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _131.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _131.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _131.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _131.MsgExitSwapShareAmountIn;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareOutAmount, tokenInMaxs }: _131.MsgJoinPool) => {
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
                    }) => _131.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareInAmount, tokenOutMins }: _131.MsgExitPool) => {
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
                    }) => _131.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: _131.MsgSwapExactAmountIn) => {
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
                    }) => _131.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: _131.MsgSwapExactAmountOut) => {
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
                    }) => _131.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenIn, shareOutMinAmount }: _131.MsgJoinSwapExternAmountIn) => {
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
                    }) => _131.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenInDenom, shareOutAmount, tokenInMaxAmount }: _131.MsgJoinSwapShareAmountOut) => {
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
                    }) => _131.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOut, shareInMaxAmount }: _131.MsgExitSwapExternAmountOut) => {
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
                    }) => _131.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOutDenom, shareInAmount, tokenOutMinAmount }: _131.MsgExitSwapShareAmountIn) => {
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
                    }) => _131.MsgExitSwapShareAmountIn;
                };
            };
            MsgJoinPool: {
                encode(message: _131.MsgJoinPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgJoinPool;
                fromJSON(object: any): _131.MsgJoinPool;
                toJSON(message: _131.MsgJoinPool): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    shareOutAmount?: string;
                    tokenInMaxs?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _131.MsgJoinPool;
            };
            MsgJoinPoolResponse: {
                encode(_: _131.MsgJoinPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgJoinPoolResponse;
                fromJSON(_: any): _131.MsgJoinPoolResponse;
                toJSON(_: _131.MsgJoinPoolResponse): unknown;
                fromPartial(_: {}): _131.MsgJoinPoolResponse;
            };
            MsgExitPool: {
                encode(message: _131.MsgExitPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgExitPool;
                fromJSON(object: any): _131.MsgExitPool;
                toJSON(message: _131.MsgExitPool): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    shareInAmount?: string;
                    tokenOutMins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _131.MsgExitPool;
            };
            MsgExitPoolResponse: {
                encode(_: _131.MsgExitPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgExitPoolResponse;
                fromJSON(_: any): _131.MsgExitPoolResponse;
                toJSON(_: _131.MsgExitPoolResponse): unknown;
                fromPartial(_: {}): _131.MsgExitPoolResponse;
            };
            SwapAmountInRoute: {
                encode(message: _131.SwapAmountInRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.SwapAmountInRoute;
                fromJSON(object: any): _131.SwapAmountInRoute;
                toJSON(message: _131.SwapAmountInRoute): unknown;
                fromPartial(object: {
                    poolId?: any;
                    tokenOutDenom?: string;
                }): _131.SwapAmountInRoute;
            };
            MsgSwapExactAmountIn: {
                encode(message: _131.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgSwapExactAmountIn;
                fromJSON(object: any): _131.MsgSwapExactAmountIn;
                toJSON(message: _131.MsgSwapExactAmountIn): unknown;
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
                }): _131.MsgSwapExactAmountIn;
            };
            MsgSwapExactAmountInResponse: {
                encode(message: _131.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgSwapExactAmountInResponse;
                fromJSON(object: any): _131.MsgSwapExactAmountInResponse;
                toJSON(message: _131.MsgSwapExactAmountInResponse): unknown;
                fromPartial(object: {
                    tokenOutAmount?: string;
                }): _131.MsgSwapExactAmountInResponse;
            };
            SwapAmountOutRoute: {
                encode(message: _131.SwapAmountOutRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.SwapAmountOutRoute;
                fromJSON(object: any): _131.SwapAmountOutRoute;
                toJSON(message: _131.SwapAmountOutRoute): unknown;
                fromPartial(object: {
                    poolId?: any;
                    tokenInDenom?: string;
                }): _131.SwapAmountOutRoute;
            };
            MsgSwapExactAmountOut: {
                encode(message: _131.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgSwapExactAmountOut;
                fromJSON(object: any): _131.MsgSwapExactAmountOut;
                toJSON(message: _131.MsgSwapExactAmountOut): unknown;
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
                }): _131.MsgSwapExactAmountOut;
            };
            MsgSwapExactAmountOutResponse: {
                encode(message: _131.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgSwapExactAmountOutResponse;
                fromJSON(object: any): _131.MsgSwapExactAmountOutResponse;
                toJSON(message: _131.MsgSwapExactAmountOutResponse): unknown;
                fromPartial(object: {
                    tokenInAmount?: string;
                }): _131.MsgSwapExactAmountOutResponse;
            };
            MsgJoinSwapExternAmountIn: {
                encode(message: _131.MsgJoinSwapExternAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgJoinSwapExternAmountIn;
                fromJSON(object: any): _131.MsgJoinSwapExternAmountIn;
                toJSON(message: _131.MsgJoinSwapExternAmountIn): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    tokenIn?: {
                        denom?: string;
                        amount?: string;
                    };
                    shareOutMinAmount?: string;
                }): _131.MsgJoinSwapExternAmountIn;
            };
            MsgJoinSwapExternAmountInResponse: {
                encode(message: _131.MsgJoinSwapExternAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgJoinSwapExternAmountInResponse;
                fromJSON(object: any): _131.MsgJoinSwapExternAmountInResponse;
                toJSON(message: _131.MsgJoinSwapExternAmountInResponse): unknown;
                fromPartial(object: {
                    shareOutAmount?: string;
                }): _131.MsgJoinSwapExternAmountInResponse;
            };
            MsgJoinSwapShareAmountOut: {
                encode(message: _131.MsgJoinSwapShareAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgJoinSwapShareAmountOut;
                fromJSON(object: any): _131.MsgJoinSwapShareAmountOut;
                toJSON(message: _131.MsgJoinSwapShareAmountOut): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    tokenInDenom?: string;
                    shareOutAmount?: string;
                    tokenInMaxAmount?: string;
                }): _131.MsgJoinSwapShareAmountOut;
            };
            MsgJoinSwapShareAmountOutResponse: {
                encode(message: _131.MsgJoinSwapShareAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgJoinSwapShareAmountOutResponse;
                fromJSON(object: any): _131.MsgJoinSwapShareAmountOutResponse;
                toJSON(message: _131.MsgJoinSwapShareAmountOutResponse): unknown;
                fromPartial(object: {
                    tokenInAmount?: string;
                }): _131.MsgJoinSwapShareAmountOutResponse;
            };
            MsgExitSwapShareAmountIn: {
                encode(message: _131.MsgExitSwapShareAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgExitSwapShareAmountIn;
                fromJSON(object: any): _131.MsgExitSwapShareAmountIn;
                toJSON(message: _131.MsgExitSwapShareAmountIn): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    tokenOutDenom?: string;
                    shareInAmount?: string;
                    tokenOutMinAmount?: string;
                }): _131.MsgExitSwapShareAmountIn;
            };
            MsgExitSwapShareAmountInResponse: {
                encode(message: _131.MsgExitSwapShareAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgExitSwapShareAmountInResponse;
                fromJSON(object: any): _131.MsgExitSwapShareAmountInResponse;
                toJSON(message: _131.MsgExitSwapShareAmountInResponse): unknown;
                fromPartial(object: {
                    tokenOutAmount?: string;
                }): _131.MsgExitSwapShareAmountInResponse;
            };
            MsgExitSwapExternAmountOut: {
                encode(message: _131.MsgExitSwapExternAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgExitSwapExternAmountOut;
                fromJSON(object: any): _131.MsgExitSwapExternAmountOut;
                toJSON(message: _131.MsgExitSwapExternAmountOut): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    tokenOut?: {
                        denom?: string;
                        amount?: string;
                    };
                    shareInMaxAmount?: string;
                }): _131.MsgExitSwapExternAmountOut;
            };
            MsgExitSwapExternAmountOutResponse: {
                encode(message: _131.MsgExitSwapExternAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.MsgExitSwapExternAmountOutResponse;
                fromJSON(object: any): _131.MsgExitSwapExternAmountOutResponse;
                toJSON(message: _131.MsgExitSwapExternAmountOutResponse): unknown;
                fromPartial(object: {
                    shareInAmount?: string;
                }): _131.MsgExitSwapExternAmountOutResponse;
            };
            QueryPoolRequest: {
                encode(message: _130.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryPoolRequest;
                fromJSON(object: any): _130.QueryPoolRequest;
                toJSON(message: _130.QueryPoolRequest): unknown;
                fromPartial(object: {
                    poolId?: any;
                }): _130.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _130.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryPoolResponse;
                fromJSON(object: any): _130.QueryPoolResponse;
                toJSON(message: _130.QueryPoolResponse): unknown;
                fromPartial(object: {
                    pool?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                }): _130.QueryPoolResponse;
            };
            QueryPoolsRequest: {
                encode(message: _130.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryPoolsRequest;
                fromJSON(object: any): _130.QueryPoolsRequest;
                toJSON(message: _130.QueryPoolsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _130.QueryPoolsRequest;
            };
            QueryPoolsResponse: {
                encode(message: _130.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryPoolsResponse;
                fromJSON(object: any): _130.QueryPoolsResponse;
                toJSON(message: _130.QueryPoolsResponse): unknown;
                fromPartial(object: {
                    pools?: {
                        type_url?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _130.QueryPoolsResponse;
            };
            QueryNumPoolsRequest: {
                encode(_: _130.QueryNumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryNumPoolsRequest;
                fromJSON(_: any): _130.QueryNumPoolsRequest;
                toJSON(_: _130.QueryNumPoolsRequest): unknown;
                fromPartial(_: {}): _130.QueryNumPoolsRequest;
            };
            QueryNumPoolsResponse: {
                encode(message: _130.QueryNumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryNumPoolsResponse;
                fromJSON(object: any): _130.QueryNumPoolsResponse;
                toJSON(message: _130.QueryNumPoolsResponse): unknown;
                fromPartial(object: {
                    numPools?: any;
                }): _130.QueryNumPoolsResponse;
            };
            QueryPoolParamsRequest: {
                encode(message: _130.QueryPoolParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryPoolParamsRequest;
                fromJSON(object: any): _130.QueryPoolParamsRequest;
                toJSON(message: _130.QueryPoolParamsRequest): unknown;
                fromPartial(object: {
                    poolId?: any;
                }): _130.QueryPoolParamsRequest;
            };
            QueryPoolParamsResponse: {
                encode(message: _130.QueryPoolParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryPoolParamsResponse;
                fromJSON(object: any): _130.QueryPoolParamsResponse;
                toJSON(message: _130.QueryPoolParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                }): _130.QueryPoolParamsResponse;
            };
            QueryTotalPoolLiquidityRequest: {
                encode(message: _130.QueryTotalPoolLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryTotalPoolLiquidityRequest;
                fromJSON(object: any): _130.QueryTotalPoolLiquidityRequest;
                toJSON(message: _130.QueryTotalPoolLiquidityRequest): unknown;
                fromPartial(object: {
                    poolId?: any;
                }): _130.QueryTotalPoolLiquidityRequest;
            };
            QueryTotalPoolLiquidityResponse: {
                encode(message: _130.QueryTotalPoolLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryTotalPoolLiquidityResponse;
                fromJSON(object: any): _130.QueryTotalPoolLiquidityResponse;
                toJSON(message: _130.QueryTotalPoolLiquidityResponse): unknown;
                fromPartial(object: {
                    liquidity?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _130.QueryTotalPoolLiquidityResponse;
            };
            QueryTotalSharesRequest: {
                encode(message: _130.QueryTotalSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryTotalSharesRequest;
                fromJSON(object: any): _130.QueryTotalSharesRequest;
                toJSON(message: _130.QueryTotalSharesRequest): unknown;
                fromPartial(object: {
                    poolId?: any;
                }): _130.QueryTotalSharesRequest;
            };
            QueryTotalSharesResponse: {
                encode(message: _130.QueryTotalSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryTotalSharesResponse;
                fromJSON(object: any): _130.QueryTotalSharesResponse;
                toJSON(message: _130.QueryTotalSharesResponse): unknown;
                fromPartial(object: {
                    totalShares?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _130.QueryTotalSharesResponse;
            };
            QuerySpotPriceRequest: {
                encode(message: _130.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QuerySpotPriceRequest;
                fromJSON(object: any): _130.QuerySpotPriceRequest;
                toJSON(message: _130.QuerySpotPriceRequest): unknown;
                fromPartial(object: {
                    poolId?: any;
                    base_asset_denom?: string;
                    quote_asset_denom?: string;
                }): _130.QuerySpotPriceRequest;
            };
            QuerySpotPriceResponse: {
                encode(message: _130.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QuerySpotPriceResponse;
                fromJSON(object: any): _130.QuerySpotPriceResponse;
                toJSON(message: _130.QuerySpotPriceResponse): unknown;
                fromPartial(object: {
                    spotPrice?: string;
                }): _130.QuerySpotPriceResponse;
            };
            QuerySwapExactAmountInRequest: {
                encode(message: _130.QuerySwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QuerySwapExactAmountInRequest;
                fromJSON(object: any): _130.QuerySwapExactAmountInRequest;
                toJSON(message: _130.QuerySwapExactAmountInRequest): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    tokenIn?: string;
                    routes?: {
                        poolId?: any;
                        tokenOutDenom?: string;
                    }[];
                }): _130.QuerySwapExactAmountInRequest;
            };
            QuerySwapExactAmountInResponse: {
                encode(message: _130.QuerySwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QuerySwapExactAmountInResponse;
                fromJSON(object: any): _130.QuerySwapExactAmountInResponse;
                toJSON(message: _130.QuerySwapExactAmountInResponse): unknown;
                fromPartial(object: {
                    tokenOutAmount?: string;
                }): _130.QuerySwapExactAmountInResponse;
            };
            QuerySwapExactAmountOutRequest: {
                encode(message: _130.QuerySwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QuerySwapExactAmountOutRequest;
                fromJSON(object: any): _130.QuerySwapExactAmountOutRequest;
                toJSON(message: _130.QuerySwapExactAmountOutRequest): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    routes?: {
                        poolId?: any;
                        tokenInDenom?: string;
                    }[];
                    tokenOut?: string;
                }): _130.QuerySwapExactAmountOutRequest;
            };
            QuerySwapExactAmountOutResponse: {
                encode(message: _130.QuerySwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QuerySwapExactAmountOutResponse;
                fromJSON(object: any): _130.QuerySwapExactAmountOutResponse;
                toJSON(message: _130.QuerySwapExactAmountOutResponse): unknown;
                fromPartial(object: {
                    tokenInAmount?: string;
                }): _130.QuerySwapExactAmountOutResponse;
            };
            QueryTotalLiquidityRequest: {
                encode(_: _130.QueryTotalLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryTotalLiquidityRequest;
                fromJSON(_: any): _130.QueryTotalLiquidityRequest;
                toJSON(_: _130.QueryTotalLiquidityRequest): unknown;
                fromPartial(_: {}): _130.QueryTotalLiquidityRequest;
            };
            QueryTotalLiquidityResponse: {
                encode(message: _130.QueryTotalLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryTotalLiquidityResponse;
                fromJSON(object: any): _130.QueryTotalLiquidityResponse;
                toJSON(message: _130.QueryTotalLiquidityResponse): unknown;
                fromPartial(object: {
                    liquidity?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _130.QueryTotalLiquidityResponse;
            };
            Params: {
                encode(message: _129.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.Params;
                fromJSON(object: any): _129.Params;
                toJSON(message: _129.Params): unknown;
                fromPartial(object: {
                    pool_creation_fee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _129.Params;
            };
            GenesisState: {
                encode(message: _129.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.GenesisState;
                fromJSON(object: any): _129.GenesisState;
                toJSON(message: _129.GenesisState): unknown;
                fromPartial(object: {
                    pools?: {
                        type_url?: string;
                        value?: Uint8Array;
                    }[];
                    next_pool_number?: any;
                    params?: {
                        pool_creation_fee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _129.GenesisState;
            };
            SmoothWeightChangeParams: {
                encode(message: _128.SmoothWeightChangeParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.SmoothWeightChangeParams;
                fromJSON(object: any): _128.SmoothWeightChangeParams;
                toJSON(message: _128.SmoothWeightChangeParams): unknown;
                fromPartial(object: {
                    start_time?: Date;
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
                }): _128.SmoothWeightChangeParams;
            };
            PoolParams: {
                encode(message: _128.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.PoolParams;
                fromJSON(object: any): _128.PoolParams;
                toJSON(message: _128.PoolParams): unknown;
                fromPartial(object: {
                    swapFee?: string;
                    exitFee?: string;
                    smoothWeightChangeParams?: {
                        start_time?: Date;
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
                }): _128.PoolParams;
            };
            PoolAsset: {
                encode(message: _128.PoolAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.PoolAsset;
                fromJSON(object: any): _128.PoolAsset;
                toJSON(message: _128.PoolAsset): unknown;
                fromPartial(object: {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }): _128.PoolAsset;
            };
            Pool: {
                encode(message: _128.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.Pool;
                fromJSON(object: any): _128.Pool;
                toJSON(message: _128.Pool): unknown;
                fromPartial(object: {
                    address?: string;
                    id?: any;
                    poolParams?: {
                        swapFee?: string;
                        exitFee?: string;
                        smoothWeightChangeParams?: {
                            start_time?: Date;
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
                    future_pool_governor?: string;
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
                }): _128.Pool;
            };
        };
        namespace poolmodels {
            namespace balancer {
                const v1beta1: {
                    MsgClientImpl: typeof _302.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createBalancerPool(value: _132.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createBalancerPool(value: _132.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _132.MsgCreateBalancerPool;
                            };
                        };
                        toJSON: {
                            createBalancerPool(value: _132.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            createBalancerPool(value: any): {
                                typeUrl: string;
                                value: _132.MsgCreateBalancerPool;
                            };
                        };
                        fromPartial: {
                            createBalancerPool(value: _132.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _132.MsgCreateBalancerPool;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
                            aminoType: string;
                            toAmino: ({ sender, poolParams, poolAssets, future_pool_governor }: _132.MsgCreateBalancerPool) => {
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
                            }) => _132.MsgCreateBalancerPool;
                        };
                    };
                    MsgCreateBalancerPool: {
                        encode(message: _132.MsgCreateBalancerPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.MsgCreateBalancerPool;
                        fromJSON(object: any): _132.MsgCreateBalancerPool;
                        toJSON(message: _132.MsgCreateBalancerPool): unknown;
                        fromPartial(object: {
                            sender?: string;
                            poolParams?: {
                                swapFee?: string;
                                exitFee?: string;
                                smoothWeightChangeParams?: {
                                    start_time?: Date;
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
                            future_pool_governor?: string;
                        }): _132.MsgCreateBalancerPool;
                    };
                    MsgCreateBalancerPoolResponse: {
                        encode(message: _132.MsgCreateBalancerPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.MsgCreateBalancerPoolResponse;
                        fromJSON(object: any): _132.MsgCreateBalancerPoolResponse;
                        toJSON(message: _132.MsgCreateBalancerPoolResponse): unknown;
                        fromPartial(object: {
                            pool_id?: any;
                        }): _132.MsgCreateBalancerPoolResponse;
                    };
                };
            }
            namespace stableswap {
                const v1beta1: {
                    MsgClientImpl: typeof _303.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createStableswapPool(value: _134.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            stableSwapAdjustScalingFactors(value: _134.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createStableswapPool(value: _134.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _134.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _134.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _134.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        toJSON: {
                            createStableswapPool(value: _134.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: unknown;
                            };
                            stableSwapAdjustScalingFactors(value: _134.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            createStableswapPool(value: any): {
                                typeUrl: string;
                                value: _134.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: any): {
                                typeUrl: string;
                                value: _134.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        fromPartial: {
                            createStableswapPool(value: _134.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _134.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _134.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _134.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
                            aminoType: string;
                            toAmino: ({ sender, poolParams, initial_pool_liquidity, future_pool_governor }: _134.MsgCreateStableswapPool) => {
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
                            }) => _134.MsgCreateStableswapPool;
                        };
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
                            aminoType: string;
                            toAmino: ({ sender, pool_id, scaling_factors }: _134.MsgStableSwapAdjustScalingFactors) => {
                                sender: string;
                                pool_id: string;
                                scaling_factors: Long[];
                            };
                            fromAmino: ({ sender, pool_id, scaling_factors }: {
                                sender: string;
                                pool_id: string;
                                scaling_factors: Long[];
                            }) => _134.MsgStableSwapAdjustScalingFactors;
                        };
                    };
                    MsgCreateStableswapPool: {
                        encode(message: _134.MsgCreateStableswapPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgCreateStableswapPool;
                        fromJSON(object: any): _134.MsgCreateStableswapPool;
                        toJSON(message: _134.MsgCreateStableswapPool): unknown;
                        fromPartial(object: {
                            sender?: string;
                            poolParams?: {
                                swapFee?: string;
                                exitFee?: string;
                            };
                            initial_pool_liquidity?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            future_pool_governor?: string;
                        }): _134.MsgCreateStableswapPool;
                    };
                    MsgCreateStableswapPoolResponse: {
                        encode(message: _134.MsgCreateStableswapPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgCreateStableswapPoolResponse;
                        fromJSON(object: any): _134.MsgCreateStableswapPoolResponse;
                        toJSON(message: _134.MsgCreateStableswapPoolResponse): unknown;
                        fromPartial(object: {
                            pool_id?: any;
                        }): _134.MsgCreateStableswapPoolResponse;
                    };
                    MsgStableSwapAdjustScalingFactors: {
                        encode(message: _134.MsgStableSwapAdjustScalingFactors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgStableSwapAdjustScalingFactors;
                        fromJSON(object: any): _134.MsgStableSwapAdjustScalingFactors;
                        toJSON(message: _134.MsgStableSwapAdjustScalingFactors): unknown;
                        fromPartial(object: {
                            sender?: string;
                            pool_id?: any;
                            scaling_factors?: any[];
                        }): _134.MsgStableSwapAdjustScalingFactors;
                    };
                    MsgStableSwapAdjustScalingFactorsResponse: {
                        encode(_: _134.MsgStableSwapAdjustScalingFactorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgStableSwapAdjustScalingFactorsResponse;
                        fromJSON(_: any): _134.MsgStableSwapAdjustScalingFactorsResponse;
                        toJSON(_: _134.MsgStableSwapAdjustScalingFactorsResponse): unknown;
                        fromPartial(_: {}): _134.MsgStableSwapAdjustScalingFactorsResponse;
                    };
                    PoolParams: {
                        encode(message: _133.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.PoolParams;
                        fromJSON(object: any): _133.PoolParams;
                        toJSON(message: _133.PoolParams): unknown;
                        fromPartial(object: {
                            swapFee?: string;
                            exitFee?: string;
                        }): _133.PoolParams;
                    };
                    Pool: {
                        encode(message: _133.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.Pool;
                        fromJSON(object: any): _133.Pool;
                        toJSON(message: _133.Pool): unknown;
                        fromPartial(object: {
                            address?: string;
                            id?: any;
                            poolParams?: {
                                swapFee?: string;
                                exitFee?: string;
                            };
                            future_pool_governor?: string;
                            totalShares?: {
                                denom?: string;
                                amount?: string;
                            };
                            poolLiquidity?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            scaling_factor?: any[];
                            scaling_factor_governor?: string;
                        }): _133.Pool;
                    };
                };
            }
        }
    }
    const incentives: {
        MsgClientImpl: typeof _305.MsgClientImpl;
        QueryClientImpl: typeof _295.QueryClientImpl;
        LCDQueryClient: typeof _286.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                createGauge(value: _139.MsgCreateGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addToGauge(value: _139.MsgAddToGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createGauge(value: _139.MsgCreateGauge): {
                    typeUrl: string;
                    value: _139.MsgCreateGauge;
                };
                addToGauge(value: _139.MsgAddToGauge): {
                    typeUrl: string;
                    value: _139.MsgAddToGauge;
                };
            };
            toJSON: {
                createGauge(value: _139.MsgCreateGauge): {
                    typeUrl: string;
                    value: unknown;
                };
                addToGauge(value: _139.MsgAddToGauge): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                createGauge(value: any): {
                    typeUrl: string;
                    value: _139.MsgCreateGauge;
                };
                addToGauge(value: any): {
                    typeUrl: string;
                    value: _139.MsgAddToGauge;
                };
            };
            fromPartial: {
                createGauge(value: _139.MsgCreateGauge): {
                    typeUrl: string;
                    value: _139.MsgCreateGauge;
                };
                addToGauge(value: _139.MsgAddToGauge): {
                    typeUrl: string;
                    value: _139.MsgAddToGauge;
                };
            };
        };
        AminoConverter: {
            "/osmosis.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: ({ is_perpetual, owner, distribute_to, coins, start_time, num_epochs_paid_over }: _139.MsgCreateGauge) => {
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
                }) => _139.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: ({ owner, gauge_id, rewards }: _139.MsgAddToGauge) => {
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
                }) => _139.MsgAddToGauge;
            };
        };
        MsgCreateGauge: {
            encode(message: _139.MsgCreateGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgCreateGauge;
            fromJSON(object: any): _139.MsgCreateGauge;
            toJSON(message: _139.MsgCreateGauge): unknown;
            fromPartial(object: {
                is_perpetual?: boolean;
                owner?: string;
                distribute_to?: {
                    lock_query_type?: _141.LockQueryType;
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
                start_time?: Date;
                num_epochs_paid_over?: any;
            }): _139.MsgCreateGauge;
        };
        MsgCreateGaugeResponse: {
            encode(_: _139.MsgCreateGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgCreateGaugeResponse;
            fromJSON(_: any): _139.MsgCreateGaugeResponse;
            toJSON(_: _139.MsgCreateGaugeResponse): unknown;
            fromPartial(_: {}): _139.MsgCreateGaugeResponse;
        };
        MsgAddToGauge: {
            encode(message: _139.MsgAddToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgAddToGauge;
            fromJSON(object: any): _139.MsgAddToGauge;
            toJSON(message: _139.MsgAddToGauge): unknown;
            fromPartial(object: {
                owner?: string;
                gauge_id?: any;
                rewards?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _139.MsgAddToGauge;
        };
        MsgAddToGaugeResponse: {
            encode(_: _139.MsgAddToGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgAddToGaugeResponse;
            fromJSON(_: any): _139.MsgAddToGaugeResponse;
            toJSON(_: _139.MsgAddToGaugeResponse): unknown;
            fromPartial(_: {}): _139.MsgAddToGaugeResponse;
        };
        ModuleToDistributeCoinsRequest: {
            encode(_: _138.ModuleToDistributeCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ModuleToDistributeCoinsRequest;
            fromJSON(_: any): _138.ModuleToDistributeCoinsRequest;
            toJSON(_: _138.ModuleToDistributeCoinsRequest): unknown;
            fromPartial(_: {}): _138.ModuleToDistributeCoinsRequest;
        };
        ModuleToDistributeCoinsResponse: {
            encode(message: _138.ModuleToDistributeCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ModuleToDistributeCoinsResponse;
            fromJSON(object: any): _138.ModuleToDistributeCoinsResponse;
            toJSON(message: _138.ModuleToDistributeCoinsResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _138.ModuleToDistributeCoinsResponse;
        };
        ModuleDistributedCoinsRequest: {
            encode(_: _138.ModuleDistributedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ModuleDistributedCoinsRequest;
            fromJSON(_: any): _138.ModuleDistributedCoinsRequest;
            toJSON(_: _138.ModuleDistributedCoinsRequest): unknown;
            fromPartial(_: {}): _138.ModuleDistributedCoinsRequest;
        };
        ModuleDistributedCoinsResponse: {
            encode(message: _138.ModuleDistributedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ModuleDistributedCoinsResponse;
            fromJSON(object: any): _138.ModuleDistributedCoinsResponse;
            toJSON(message: _138.ModuleDistributedCoinsResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _138.ModuleDistributedCoinsResponse;
        };
        GaugeByIDRequest: {
            encode(message: _138.GaugeByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.GaugeByIDRequest;
            fromJSON(object: any): _138.GaugeByIDRequest;
            toJSON(message: _138.GaugeByIDRequest): unknown;
            fromPartial(object: {
                id?: any;
            }): _138.GaugeByIDRequest;
        };
        GaugeByIDResponse: {
            encode(message: _138.GaugeByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.GaugeByIDResponse;
            fromJSON(object: any): _138.GaugeByIDResponse;
            toJSON(message: _138.GaugeByIDResponse): unknown;
            fromPartial(object: {
                gauge?: {
                    id?: any;
                    is_perpetual?: boolean;
                    distribute_to?: {
                        lock_query_type?: _141.LockQueryType;
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
                    start_time?: Date;
                    num_epochs_paid_over?: any;
                    filled_epochs?: any;
                    distributed_coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                };
            }): _138.GaugeByIDResponse;
        };
        GaugesRequest: {
            encode(message: _138.GaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.GaugesRequest;
            fromJSON(object: any): _138.GaugesRequest;
            toJSON(message: _138.GaugesRequest): unknown;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    count_total?: boolean;
                    reverse?: boolean;
                };
            }): _138.GaugesRequest;
        };
        GaugesResponse: {
            encode(message: _138.GaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.GaugesResponse;
            fromJSON(object: any): _138.GaugesResponse;
            toJSON(message: _138.GaugesResponse): unknown;
            fromPartial(object: {
                data?: {
                    id?: any;
                    is_perpetual?: boolean;
                    distribute_to?: {
                        lock_query_type?: _141.LockQueryType;
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
                    start_time?: Date;
                    num_epochs_paid_over?: any;
                    filled_epochs?: any;
                    distributed_coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                pagination?: {
                    next_key?: Uint8Array;
                    total?: any;
                };
            }): _138.GaugesResponse;
        };
        ActiveGaugesRequest: {
            encode(message: _138.ActiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ActiveGaugesRequest;
            fromJSON(object: any): _138.ActiveGaugesRequest;
            toJSON(message: _138.ActiveGaugesRequest): unknown;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    count_total?: boolean;
                    reverse?: boolean;
                };
            }): _138.ActiveGaugesRequest;
        };
        ActiveGaugesResponse: {
            encode(message: _138.ActiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ActiveGaugesResponse;
            fromJSON(object: any): _138.ActiveGaugesResponse;
            toJSON(message: _138.ActiveGaugesResponse): unknown;
            fromPartial(object: {
                data?: {
                    id?: any;
                    is_perpetual?: boolean;
                    distribute_to?: {
                        lock_query_type?: _141.LockQueryType;
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
                    start_time?: Date;
                    num_epochs_paid_over?: any;
                    filled_epochs?: any;
                    distributed_coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                pagination?: {
                    next_key?: Uint8Array;
                    total?: any;
                };
            }): _138.ActiveGaugesResponse;
        };
        ActiveGaugesPerDenomRequest: {
            encode(message: _138.ActiveGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ActiveGaugesPerDenomRequest;
            fromJSON(object: any): _138.ActiveGaugesPerDenomRequest;
            toJSON(message: _138.ActiveGaugesPerDenomRequest): unknown;
            fromPartial(object: {
                denom?: string;
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    count_total?: boolean;
                    reverse?: boolean;
                };
            }): _138.ActiveGaugesPerDenomRequest;
        };
        ActiveGaugesPerDenomResponse: {
            encode(message: _138.ActiveGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ActiveGaugesPerDenomResponse;
            fromJSON(object: any): _138.ActiveGaugesPerDenomResponse;
            toJSON(message: _138.ActiveGaugesPerDenomResponse): unknown;
            fromPartial(object: {
                data?: {
                    id?: any;
                    is_perpetual?: boolean;
                    distribute_to?: {
                        lock_query_type?: _141.LockQueryType;
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
                    start_time?: Date;
                    num_epochs_paid_over?: any;
                    filled_epochs?: any;
                    distributed_coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                pagination?: {
                    next_key?: Uint8Array;
                    total?: any;
                };
            }): _138.ActiveGaugesPerDenomResponse;
        };
        UpcomingGaugesRequest: {
            encode(message: _138.UpcomingGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.UpcomingGaugesRequest;
            fromJSON(object: any): _138.UpcomingGaugesRequest;
            toJSON(message: _138.UpcomingGaugesRequest): unknown;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    count_total?: boolean;
                    reverse?: boolean;
                };
            }): _138.UpcomingGaugesRequest;
        };
        UpcomingGaugesResponse: {
            encode(message: _138.UpcomingGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.UpcomingGaugesResponse;
            fromJSON(object: any): _138.UpcomingGaugesResponse;
            toJSON(message: _138.UpcomingGaugesResponse): unknown;
            fromPartial(object: {
                data?: {
                    id?: any;
                    is_perpetual?: boolean;
                    distribute_to?: {
                        lock_query_type?: _141.LockQueryType;
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
                    start_time?: Date;
                    num_epochs_paid_over?: any;
                    filled_epochs?: any;
                    distributed_coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                pagination?: {
                    next_key?: Uint8Array;
                    total?: any;
                };
            }): _138.UpcomingGaugesResponse;
        };
        UpcomingGaugesPerDenomRequest: {
            encode(message: _138.UpcomingGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.UpcomingGaugesPerDenomRequest;
            fromJSON(object: any): _138.UpcomingGaugesPerDenomRequest;
            toJSON(message: _138.UpcomingGaugesPerDenomRequest): unknown;
            fromPartial(object: {
                denom?: string;
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    count_total?: boolean;
                    reverse?: boolean;
                };
            }): _138.UpcomingGaugesPerDenomRequest;
        };
        UpcomingGaugesPerDenomResponse: {
            encode(message: _138.UpcomingGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.UpcomingGaugesPerDenomResponse;
            fromJSON(object: any): _138.UpcomingGaugesPerDenomResponse;
            toJSON(message: _138.UpcomingGaugesPerDenomResponse): unknown;
            fromPartial(object: {
                upcoming_gauges?: {
                    id?: any;
                    is_perpetual?: boolean;
                    distribute_to?: {
                        lock_query_type?: _141.LockQueryType;
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
                    start_time?: Date;
                    num_epochs_paid_over?: any;
                    filled_epochs?: any;
                    distributed_coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                pagination?: {
                    next_key?: Uint8Array;
                    total?: any;
                };
            }): _138.UpcomingGaugesPerDenomResponse;
        };
        RewardsEstRequest: {
            encode(message: _138.RewardsEstRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.RewardsEstRequest;
            fromJSON(object: any): _138.RewardsEstRequest;
            toJSON(message: _138.RewardsEstRequest): unknown;
            fromPartial(object: {
                owner?: string;
                lock_ids?: any[];
                end_epoch?: any;
            }): _138.RewardsEstRequest;
        };
        RewardsEstResponse: {
            encode(message: _138.RewardsEstResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.RewardsEstResponse;
            fromJSON(object: any): _138.RewardsEstResponse;
            toJSON(message: _138.RewardsEstResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _138.RewardsEstResponse;
        };
        QueryLockableDurationsRequest: {
            encode(_: _138.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryLockableDurationsRequest;
            fromJSON(_: any): _138.QueryLockableDurationsRequest;
            toJSON(_: _138.QueryLockableDurationsRequest): unknown;
            fromPartial(_: {}): _138.QueryLockableDurationsRequest;
        };
        QueryLockableDurationsResponse: {
            encode(message: _138.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryLockableDurationsResponse;
            fromJSON(object: any): _138.QueryLockableDurationsResponse;
            toJSON(message: _138.QueryLockableDurationsResponse): unknown;
            fromPartial(object: {
                lockable_durations?: {
                    seconds?: any;
                    nanos?: number;
                }[];
            }): _138.QueryLockableDurationsResponse;
        };
        Params: {
            encode(message: _137.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Params;
            fromJSON(object: any): _137.Params;
            toJSON(message: _137.Params): unknown;
            fromPartial(object: {
                distr_epoch_identifier?: string;
            }): _137.Params;
        };
        GenesisState: {
            encode(message: _136.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.GenesisState;
            fromJSON(object: any): _136.GenesisState;
            toJSON(message: _136.GenesisState): unknown;
            fromPartial(object: {
                params?: {
                    distr_epoch_identifier?: string;
                };
                gauges?: {
                    id?: any;
                    is_perpetual?: boolean;
                    distribute_to?: {
                        lock_query_type?: _141.LockQueryType;
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
                    start_time?: Date;
                    num_epochs_paid_over?: any;
                    filled_epochs?: any;
                    distributed_coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                lockable_durations?: {
                    seconds?: any;
                    nanos?: number;
                }[];
                last_gauge_id?: any;
            }): _136.GenesisState;
        };
        Gauge: {
            encode(message: _135.Gauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.Gauge;
            fromJSON(object: any): _135.Gauge;
            toJSON(message: _135.Gauge): unknown;
            fromPartial(object: {
                id?: any;
                is_perpetual?: boolean;
                distribute_to?: {
                    lock_query_type?: _141.LockQueryType;
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
                start_time?: Date;
                num_epochs_paid_over?: any;
                filled_epochs?: any;
                distributed_coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _135.Gauge;
        };
        LockableDurationsInfo: {
            encode(message: _135.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.LockableDurationsInfo;
            fromJSON(object: any): _135.LockableDurationsInfo;
            toJSON(message: _135.LockableDurationsInfo): unknown;
            fromPartial(object: {
                lockable_durations?: {
                    seconds?: any;
                    nanos?: number;
                }[];
            }): _135.LockableDurationsInfo;
        };
    };
    const lockup: {
        MsgClientImpl: typeof _306.MsgClientImpl;
        QueryClientImpl: typeof _296.QueryClientImpl;
        LCDQueryClient: typeof _287.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                lockTokens(value: _143.MsgLockTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlockingAll(value: _143.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlocking(value: _143.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                extendLockup(value: _143.MsgExtendLockup): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                lockTokens(value: _143.MsgLockTokens): {
                    typeUrl: string;
                    value: _143.MsgLockTokens;
                };
                beginUnlockingAll(value: _143.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _143.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _143.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _143.MsgBeginUnlocking;
                };
                extendLockup(value: _143.MsgExtendLockup): {
                    typeUrl: string;
                    value: _143.MsgExtendLockup;
                };
            };
            toJSON: {
                lockTokens(value: _143.MsgLockTokens): {
                    typeUrl: string;
                    value: unknown;
                };
                beginUnlockingAll(value: _143.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: unknown;
                };
                beginUnlocking(value: _143.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: unknown;
                };
                extendLockup(value: _143.MsgExtendLockup): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                lockTokens(value: any): {
                    typeUrl: string;
                    value: _143.MsgLockTokens;
                };
                beginUnlockingAll(value: any): {
                    typeUrl: string;
                    value: _143.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: any): {
                    typeUrl: string;
                    value: _143.MsgBeginUnlocking;
                };
                extendLockup(value: any): {
                    typeUrl: string;
                    value: _143.MsgExtendLockup;
                };
            };
            fromPartial: {
                lockTokens(value: _143.MsgLockTokens): {
                    typeUrl: string;
                    value: _143.MsgLockTokens;
                };
                beginUnlockingAll(value: _143.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _143.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _143.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _143.MsgBeginUnlocking;
                };
                extendLockup(value: _143.MsgExtendLockup): {
                    typeUrl: string;
                    value: _143.MsgExtendLockup;
                };
            };
        };
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: ({ owner, duration, coins }: _143.MsgLockTokens) => {
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
                }) => _143.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: ({ owner }: _143.MsgBeginUnlockingAll) => {
                    owner: string;
                };
                fromAmino: ({ owner }: {
                    owner: string;
                }) => _143.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: ({ owner, ID, coins }: _143.MsgBeginUnlocking) => {
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
                }) => _143.MsgBeginUnlocking;
            };
            "/osmosis.lockup.MsgExtendLockup": {
                aminoType: string;
                toAmino: ({ owner, ID, duration }: _143.MsgExtendLockup) => {
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
                }) => _143.MsgExtendLockup;
            };
        };
        MsgLockTokens: {
            encode(message: _143.MsgLockTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgLockTokens;
            fromJSON(object: any): _143.MsgLockTokens;
            toJSON(message: _143.MsgLockTokens): unknown;
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
            }): _143.MsgLockTokens;
        };
        MsgLockTokensResponse: {
            encode(message: _143.MsgLockTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgLockTokensResponse;
            fromJSON(object: any): _143.MsgLockTokensResponse;
            toJSON(message: _143.MsgLockTokensResponse): unknown;
            fromPartial(object: {
                ID?: any;
            }): _143.MsgLockTokensResponse;
        };
        MsgBeginUnlockingAll: {
            encode(message: _143.MsgBeginUnlockingAll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgBeginUnlockingAll;
            fromJSON(object: any): _143.MsgBeginUnlockingAll;
            toJSON(message: _143.MsgBeginUnlockingAll): unknown;
            fromPartial(object: {
                owner?: string;
            }): _143.MsgBeginUnlockingAll;
        };
        MsgBeginUnlockingAllResponse: {
            encode(message: _143.MsgBeginUnlockingAllResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgBeginUnlockingAllResponse;
            fromJSON(object: any): _143.MsgBeginUnlockingAllResponse;
            toJSON(message: _143.MsgBeginUnlockingAllResponse): unknown;
            fromPartial(object: {
                unlocks?: {
                    ID?: any;
                    owner?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    end_time?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _143.MsgBeginUnlockingAllResponse;
        };
        MsgBeginUnlocking: {
            encode(message: _143.MsgBeginUnlocking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgBeginUnlocking;
            fromJSON(object: any): _143.MsgBeginUnlocking;
            toJSON(message: _143.MsgBeginUnlocking): unknown;
            fromPartial(object: {
                owner?: string;
                ID?: any;
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _143.MsgBeginUnlocking;
        };
        MsgBeginUnlockingResponse: {
            encode(message: _143.MsgBeginUnlockingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgBeginUnlockingResponse;
            fromJSON(object: any): _143.MsgBeginUnlockingResponse;
            toJSON(message: _143.MsgBeginUnlockingResponse): unknown;
            fromPartial(object: {
                success?: boolean;
            }): _143.MsgBeginUnlockingResponse;
        };
        MsgExtendLockup: {
            encode(message: _143.MsgExtendLockup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgExtendLockup;
            fromJSON(object: any): _143.MsgExtendLockup;
            toJSON(message: _143.MsgExtendLockup): unknown;
            fromPartial(object: {
                owner?: string;
                ID?: any;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _143.MsgExtendLockup;
        };
        MsgExtendLockupResponse: {
            encode(message: _143.MsgExtendLockupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgExtendLockupResponse;
            fromJSON(object: any): _143.MsgExtendLockupResponse;
            toJSON(message: _143.MsgExtendLockupResponse): unknown;
            fromPartial(object: {
                success?: boolean;
            }): _143.MsgExtendLockupResponse;
        };
        ModuleBalanceRequest: {
            encode(_: _142.ModuleBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.ModuleBalanceRequest;
            fromJSON(_: any): _142.ModuleBalanceRequest;
            toJSON(_: _142.ModuleBalanceRequest): unknown;
            fromPartial(_: {}): _142.ModuleBalanceRequest;
        };
        ModuleBalanceResponse: {
            encode(message: _142.ModuleBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.ModuleBalanceResponse;
            fromJSON(object: any): _142.ModuleBalanceResponse;
            toJSON(message: _142.ModuleBalanceResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _142.ModuleBalanceResponse;
        };
        ModuleLockedAmountRequest: {
            encode(_: _142.ModuleLockedAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.ModuleLockedAmountRequest;
            fromJSON(_: any): _142.ModuleLockedAmountRequest;
            toJSON(_: _142.ModuleLockedAmountRequest): unknown;
            fromPartial(_: {}): _142.ModuleLockedAmountRequest;
        };
        ModuleLockedAmountResponse: {
            encode(message: _142.ModuleLockedAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.ModuleLockedAmountResponse;
            fromJSON(object: any): _142.ModuleLockedAmountResponse;
            toJSON(message: _142.ModuleLockedAmountResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _142.ModuleLockedAmountResponse;
        };
        AccountUnlockableCoinsRequest: {
            encode(message: _142.AccountUnlockableCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.AccountUnlockableCoinsRequest;
            fromJSON(object: any): _142.AccountUnlockableCoinsRequest;
            toJSON(message: _142.AccountUnlockableCoinsRequest): unknown;
            fromPartial(object: {
                owner?: string;
            }): _142.AccountUnlockableCoinsRequest;
        };
        AccountUnlockableCoinsResponse: {
            encode(message: _142.AccountUnlockableCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.AccountUnlockableCoinsResponse;
            fromJSON(object: any): _142.AccountUnlockableCoinsResponse;
            toJSON(message: _142.AccountUnlockableCoinsResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _142.AccountUnlockableCoinsResponse;
        };
        AccountUnlockingCoinsRequest: {
            encode(message: _142.AccountUnlockingCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.AccountUnlockingCoinsRequest;
            fromJSON(object: any): _142.AccountUnlockingCoinsRequest;
            toJSON(message: _142.AccountUnlockingCoinsRequest): unknown;
            fromPartial(object: {
                owner?: string;
            }): _142.AccountUnlockingCoinsRequest;
        };
        AccountUnlockingCoinsResponse: {
            encode(message: _142.AccountUnlockingCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.AccountUnlockingCoinsResponse;
            fromJSON(object: any): _142.AccountUnlockingCoinsResponse;
            toJSON(message: _142.AccountUnlockingCoinsResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _142.AccountUnlockingCoinsResponse;
        };
        AccountLockedCoinsRequest: {
            encode(message: _142.AccountLockedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.AccountLockedCoinsRequest;
            fromJSON(object: any): _142.AccountLockedCoinsRequest;
            toJSON(message: _142.AccountLockedCoinsRequest): unknown;
            fromPartial(object: {
                owner?: string;
            }): _142.AccountLockedCoinsRequest;
        };
        AccountLockedCoinsResponse: {
            encode(message: _142.AccountLockedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.AccountLockedCoinsResponse;
            fromJSON(object: any): _142.AccountLockedCoinsResponse;
            toJSON(message: _142.AccountLockedCoinsResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _142.AccountLockedCoinsResponse;
        };
        AccountLockedPastTimeRequest: {
            encode(message: _142.AccountLockedPastTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.AccountLockedPastTimeRequest;
            fromJSON(object: any): _142.AccountLockedPastTimeRequest;
            toJSON(message: _142.AccountLockedPastTimeRequest): unknown;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
            }): _142.AccountLockedPastTimeRequest;
        };
        AccountLockedPastTimeResponse: {
            encode(message: _142.AccountLockedPastTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.AccountLockedPastTimeResponse;
            fromJSON(object: any): _142.AccountLockedPastTimeResponse;
            toJSON(message: _142.AccountLockedPastTimeResponse): unknown;
            fromPartial(object: {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    end_time?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _142.AccountLockedPastTimeResponse;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            encode(message: _142.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromJSON(object: any): _142.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toJSON(message: _142.AccountLockedPastTimeNotUnlockingOnlyRequest): unknown;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
            }): _142.AccountLockedPastTimeNotUnlockingOnlyRequest;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            encode(message: _142.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromJSON(object: any): _142.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toJSON(message: _142.AccountLockedPastTimeNotUnlockingOnlyResponse): unknown;
            fromPartial(object: {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    end_time?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _142.AccountLockedPastTimeNotUnlockingOnlyResponse;
        };
        AccountUnlockedBeforeTimeRequest: {
            encode(message: _142.AccountUnlockedBeforeTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.AccountUnlockedBeforeTimeRequest;
            fromJSON(object: any): _142.AccountUnlockedBeforeTimeRequest;
            toJSON(message: _142.AccountUnlockedBeforeTimeRequest): unknown;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
            }): _142.AccountUnlockedBeforeTimeRequest;
        };
        AccountUnlockedBeforeTimeResponse: {
            encode(message: _142.AccountUnlockedBeforeTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.AccountUnlockedBeforeTimeResponse;
            fromJSON(object: any): _142.AccountUnlockedBeforeTimeResponse;
            toJSON(message: _142.AccountUnlockedBeforeTimeResponse): unknown;
            fromPartial(object: {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    end_time?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _142.AccountUnlockedBeforeTimeResponse;
        };
        AccountLockedPastTimeDenomRequest: {
            encode(message: _142.AccountLockedPastTimeDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.AccountLockedPastTimeDenomRequest;
            fromJSON(object: any): _142.AccountLockedPastTimeDenomRequest;
            toJSON(message: _142.AccountLockedPastTimeDenomRequest): unknown;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
                denom?: string;
            }): _142.AccountLockedPastTimeDenomRequest;
        };
        AccountLockedPastTimeDenomResponse: {
            encode(message: _142.AccountLockedPastTimeDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.AccountLockedPastTimeDenomResponse;
            fromJSON(object: any): _142.AccountLockedPastTimeDenomResponse;
            toJSON(message: _142.AccountLockedPastTimeDenomResponse): unknown;
            fromPartial(object: {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    end_time?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _142.AccountLockedPastTimeDenomResponse;
        };
        LockedDenomRequest: {
            encode(message: _142.LockedDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.LockedDenomRequest;
            fromJSON(object: any): _142.LockedDenomRequest;
            toJSON(message: _142.LockedDenomRequest): unknown;
            fromPartial(object: {
                denom?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _142.LockedDenomRequest;
        };
        LockedDenomResponse: {
            encode(message: _142.LockedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.LockedDenomResponse;
            fromJSON(object: any): _142.LockedDenomResponse;
            toJSON(message: _142.LockedDenomResponse): unknown;
            fromPartial(object: {
                amount?: string;
            }): _142.LockedDenomResponse;
        };
        LockedRequest: {
            encode(message: _142.LockedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.LockedRequest;
            fromJSON(object: any): _142.LockedRequest;
            toJSON(message: _142.LockedRequest): unknown;
            fromPartial(object: {
                lock_id?: any;
            }): _142.LockedRequest;
        };
        LockedResponse: {
            encode(message: _142.LockedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.LockedResponse;
            fromJSON(object: any): _142.LockedResponse;
            toJSON(message: _142.LockedResponse): unknown;
            fromPartial(object: {
                lock?: {
                    ID?: any;
                    owner?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    end_time?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                };
            }): _142.LockedResponse;
        };
        SyntheticLockupsByLockupIDRequest: {
            encode(message: _142.SyntheticLockupsByLockupIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.SyntheticLockupsByLockupIDRequest;
            fromJSON(object: any): _142.SyntheticLockupsByLockupIDRequest;
            toJSON(message: _142.SyntheticLockupsByLockupIDRequest): unknown;
            fromPartial(object: {
                lock_id?: any;
            }): _142.SyntheticLockupsByLockupIDRequest;
        };
        SyntheticLockupsByLockupIDResponse: {
            encode(message: _142.SyntheticLockupsByLockupIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.SyntheticLockupsByLockupIDResponse;
            fromJSON(object: any): _142.SyntheticLockupsByLockupIDResponse;
            toJSON(message: _142.SyntheticLockupsByLockupIDResponse): unknown;
            fromPartial(object: {
                synthetic_locks?: {
                    underlying_lock_id?: any;
                    synth_denom?: string;
                    end_time?: Date;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }[];
            }): _142.SyntheticLockupsByLockupIDResponse;
        };
        AccountLockedLongerDurationRequest: {
            encode(message: _142.AccountLockedLongerDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.AccountLockedLongerDurationRequest;
            fromJSON(object: any): _142.AccountLockedLongerDurationRequest;
            toJSON(message: _142.AccountLockedLongerDurationRequest): unknown;
            fromPartial(object: {
                owner?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _142.AccountLockedLongerDurationRequest;
        };
        AccountLockedLongerDurationResponse: {
            encode(message: _142.AccountLockedLongerDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.AccountLockedLongerDurationResponse;
            fromJSON(object: any): _142.AccountLockedLongerDurationResponse;
            toJSON(message: _142.AccountLockedLongerDurationResponse): unknown;
            fromPartial(object: {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    end_time?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _142.AccountLockedLongerDurationResponse;
        };
        AccountLockedDurationRequest: {
            encode(message: _142.AccountLockedDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.AccountLockedDurationRequest;
            fromJSON(object: any): _142.AccountLockedDurationRequest;
            toJSON(message: _142.AccountLockedDurationRequest): unknown;
            fromPartial(object: {
                owner?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _142.AccountLockedDurationRequest;
        };
        AccountLockedDurationResponse: {
            encode(message: _142.AccountLockedDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.AccountLockedDurationResponse;
            fromJSON(object: any): _142.AccountLockedDurationResponse;
            toJSON(message: _142.AccountLockedDurationResponse): unknown;
            fromPartial(object: {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    end_time?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _142.AccountLockedDurationResponse;
        };
        AccountLockedLongerDurationNotUnlockingOnlyRequest: {
            encode(message: _142.AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromJSON(object: any): _142.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toJSON(message: _142.AccountLockedLongerDurationNotUnlockingOnlyRequest): unknown;
            fromPartial(object: {
                owner?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _142.AccountLockedLongerDurationNotUnlockingOnlyRequest;
        };
        AccountLockedLongerDurationNotUnlockingOnlyResponse: {
            encode(message: _142.AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromJSON(object: any): _142.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toJSON(message: _142.AccountLockedLongerDurationNotUnlockingOnlyResponse): unknown;
            fromPartial(object: {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    end_time?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _142.AccountLockedLongerDurationNotUnlockingOnlyResponse;
        };
        AccountLockedLongerDurationDenomRequest: {
            encode(message: _142.AccountLockedLongerDurationDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.AccountLockedLongerDurationDenomRequest;
            fromJSON(object: any): _142.AccountLockedLongerDurationDenomRequest;
            toJSON(message: _142.AccountLockedLongerDurationDenomRequest): unknown;
            fromPartial(object: {
                owner?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
                denom?: string;
            }): _142.AccountLockedLongerDurationDenomRequest;
        };
        AccountLockedLongerDurationDenomResponse: {
            encode(message: _142.AccountLockedLongerDurationDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.AccountLockedLongerDurationDenomResponse;
            fromJSON(object: any): _142.AccountLockedLongerDurationDenomResponse;
            toJSON(message: _142.AccountLockedLongerDurationDenomResponse): unknown;
            fromPartial(object: {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    end_time?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _142.AccountLockedLongerDurationDenomResponse;
        };
        lockQueryTypeFromJSON(object: any): _141.LockQueryType;
        lockQueryTypeToJSON(object: _141.LockQueryType): string;
        LockQueryType: typeof _141.LockQueryType;
        PeriodLock: {
            encode(message: _141.PeriodLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.PeriodLock;
            fromJSON(object: any): _141.PeriodLock;
            toJSON(message: _141.PeriodLock): unknown;
            fromPartial(object: {
                ID?: any;
                owner?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
                end_time?: Date;
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _141.PeriodLock;
        };
        QueryCondition: {
            encode(message: _141.QueryCondition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryCondition;
            fromJSON(object: any): _141.QueryCondition;
            toJSON(message: _141.QueryCondition): unknown;
            fromPartial(object: {
                lock_query_type?: _141.LockQueryType;
                denom?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
                timestamp?: Date;
            }): _141.QueryCondition;
        };
        SyntheticLock: {
            encode(message: _141.SyntheticLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.SyntheticLock;
            fromJSON(object: any): _141.SyntheticLock;
            toJSON(message: _141.SyntheticLock): unknown;
            fromPartial(object: {
                underlying_lock_id?: any;
                synth_denom?: string;
                end_time?: Date;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _141.SyntheticLock;
        };
        GenesisState: {
            encode(message: _140.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.GenesisState;
            fromJSON(object: any): _140.GenesisState;
            toJSON(message: _140.GenesisState): unknown;
            fromPartial(object: {
                last_lock_id?: any;
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    end_time?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                synthetic_locks?: {
                    underlying_lock_id?: any;
                    synth_denom?: string;
                    end_time?: Date;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }[];
            }): _140.GenesisState;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _297.QueryClientImpl;
            LCDQueryClient: typeof _288.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _146.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryParamsRequest;
                fromJSON(_: any): _146.QueryParamsRequest;
                toJSON(_: _146.QueryParamsRequest): unknown;
                fromPartial(_: {}): _146.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _146.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryParamsResponse;
                fromJSON(object: any): _146.QueryParamsResponse;
                toJSON(message: _146.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        mint_denom?: string;
                        genesis_epoch_provisions?: string;
                        epoch_identifier?: string;
                        reduction_period_in_epochs?: any;
                        reduction_factor?: string;
                        distribution_proportions?: {
                            staking?: string;
                            pool_incentives?: string;
                            developer_rewards?: string;
                            community_pool?: string;
                        };
                        weighted_developer_rewards_receivers?: {
                            address?: string;
                            weight?: string;
                        }[];
                        minting_rewards_distribution_start_epoch?: any;
                    };
                }): _146.QueryParamsResponse;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _146.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryEpochProvisionsRequest;
                fromJSON(_: any): _146.QueryEpochProvisionsRequest;
                toJSON(_: _146.QueryEpochProvisionsRequest): unknown;
                fromPartial(_: {}): _146.QueryEpochProvisionsRequest;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _146.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryEpochProvisionsResponse;
                fromJSON(object: any): _146.QueryEpochProvisionsResponse;
                toJSON(message: _146.QueryEpochProvisionsResponse): unknown;
                fromPartial(object: {
                    epoch_provisions?: Uint8Array;
                }): _146.QueryEpochProvisionsResponse;
            };
            Minter: {
                encode(message: _145.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.Minter;
                fromJSON(object: any): _145.Minter;
                toJSON(message: _145.Minter): unknown;
                fromPartial(object: {
                    epoch_provisions?: string;
                }): _145.Minter;
            };
            WeightedAddress: {
                encode(message: _145.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.WeightedAddress;
                fromJSON(object: any): _145.WeightedAddress;
                toJSON(message: _145.WeightedAddress): unknown;
                fromPartial(object: {
                    address?: string;
                    weight?: string;
                }): _145.WeightedAddress;
            };
            DistributionProportions: {
                encode(message: _145.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.DistributionProportions;
                fromJSON(object: any): _145.DistributionProportions;
                toJSON(message: _145.DistributionProportions): unknown;
                fromPartial(object: {
                    staking?: string;
                    pool_incentives?: string;
                    developer_rewards?: string;
                    community_pool?: string;
                }): _145.DistributionProportions;
            };
            Params: {
                encode(message: _145.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.Params;
                fromJSON(object: any): _145.Params;
                toJSON(message: _145.Params): unknown;
                fromPartial(object: {
                    mint_denom?: string;
                    genesis_epoch_provisions?: string;
                    epoch_identifier?: string;
                    reduction_period_in_epochs?: any;
                    reduction_factor?: string;
                    distribution_proportions?: {
                        staking?: string;
                        pool_incentives?: string;
                        developer_rewards?: string;
                        community_pool?: string;
                    };
                    weighted_developer_rewards_receivers?: {
                        address?: string;
                        weight?: string;
                    }[];
                    minting_rewards_distribution_start_epoch?: any;
                }): _145.Params;
            };
            GenesisState: {
                encode(message: _144.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.GenesisState;
                fromJSON(object: any): _144.GenesisState;
                toJSON(message: _144.GenesisState): unknown;
                fromPartial(object: {
                    minter?: {
                        epoch_provisions?: string;
                    };
                    params?: {
                        mint_denom?: string;
                        genesis_epoch_provisions?: string;
                        epoch_identifier?: string;
                        reduction_period_in_epochs?: any;
                        reduction_factor?: string;
                        distribution_proportions?: {
                            staking?: string;
                            pool_incentives?: string;
                            developer_rewards?: string;
                            community_pool?: string;
                        };
                        weighted_developer_rewards_receivers?: {
                            address?: string;
                            weight?: string;
                        }[];
                        minting_rewards_distribution_start_epoch?: any;
                    };
                    halven_started_epoch?: any;
                }): _144.GenesisState;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            QueryClientImpl: typeof _298.QueryClientImpl;
            LCDQueryClient: typeof _289.LCDQueryClient;
            QueryGaugeIdsRequest: {
                encode(message: _150.QueryGaugeIdsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryGaugeIdsRequest;
                fromJSON(object: any): _150.QueryGaugeIdsRequest;
                toJSON(message: _150.QueryGaugeIdsRequest): unknown;
                fromPartial(object: {
                    pool_id?: any;
                }): _150.QueryGaugeIdsRequest;
            };
            QueryGaugeIdsResponse: {
                encode(message: _150.QueryGaugeIdsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryGaugeIdsResponse;
                fromJSON(object: any): _150.QueryGaugeIdsResponse;
                toJSON(message: _150.QueryGaugeIdsResponse): unknown;
                fromPartial(object: {
                    gauge_ids_with_duration?: {
                        gauge_id?: any;
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                }): _150.QueryGaugeIdsResponse;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                encode(message: _150.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromJSON(object: any): _150.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toJSON(message: _150.QueryGaugeIdsResponse_GaugeIdWithDuration): unknown;
                fromPartial(object: {
                    gauge_id?: any;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _150.QueryGaugeIdsResponse_GaugeIdWithDuration;
            };
            QueryDistrInfoRequest: {
                encode(_: _150.QueryDistrInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryDistrInfoRequest;
                fromJSON(_: any): _150.QueryDistrInfoRequest;
                toJSON(_: _150.QueryDistrInfoRequest): unknown;
                fromPartial(_: {}): _150.QueryDistrInfoRequest;
            };
            QueryDistrInfoResponse: {
                encode(message: _150.QueryDistrInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryDistrInfoResponse;
                fromJSON(object: any): _150.QueryDistrInfoResponse;
                toJSON(message: _150.QueryDistrInfoResponse): unknown;
                fromPartial(object: {
                    distr_info?: {
                        total_weight?: string;
                        records?: {
                            gauge_id?: any;
                            weight?: string;
                        }[];
                    };
                }): _150.QueryDistrInfoResponse;
            };
            QueryParamsRequest: {
                encode(_: _150.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryParamsRequest;
                fromJSON(_: any): _150.QueryParamsRequest;
                toJSON(_: _150.QueryParamsRequest): unknown;
                fromPartial(_: {}): _150.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _150.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryParamsResponse;
                fromJSON(object: any): _150.QueryParamsResponse;
                toJSON(message: _150.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        minted_denom?: string;
                    };
                }): _150.QueryParamsResponse;
            };
            QueryLockableDurationsRequest: {
                encode(_: _150.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryLockableDurationsRequest;
                fromJSON(_: any): _150.QueryLockableDurationsRequest;
                toJSON(_: _150.QueryLockableDurationsRequest): unknown;
                fromPartial(_: {}): _150.QueryLockableDurationsRequest;
            };
            QueryLockableDurationsResponse: {
                encode(message: _150.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryLockableDurationsResponse;
                fromJSON(object: any): _150.QueryLockableDurationsResponse;
                toJSON(message: _150.QueryLockableDurationsResponse): unknown;
                fromPartial(object: {
                    lockable_durations?: {
                        seconds?: any;
                        nanos?: number;
                    }[];
                }): _150.QueryLockableDurationsResponse;
            };
            QueryIncentivizedPoolsRequest: {
                encode(_: _150.QueryIncentivizedPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryIncentivizedPoolsRequest;
                fromJSON(_: any): _150.QueryIncentivizedPoolsRequest;
                toJSON(_: _150.QueryIncentivizedPoolsRequest): unknown;
                fromPartial(_: {}): _150.QueryIncentivizedPoolsRequest;
            };
            IncentivizedPool: {
                encode(message: _150.IncentivizedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.IncentivizedPool;
                fromJSON(object: any): _150.IncentivizedPool;
                toJSON(message: _150.IncentivizedPool): unknown;
                fromPartial(object: {
                    pool_id?: any;
                    lockable_duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    gauge_id?: any;
                }): _150.IncentivizedPool;
            };
            QueryIncentivizedPoolsResponse: {
                encode(message: _150.QueryIncentivizedPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryIncentivizedPoolsResponse;
                fromJSON(object: any): _150.QueryIncentivizedPoolsResponse;
                toJSON(message: _150.QueryIncentivizedPoolsResponse): unknown;
                fromPartial(object: {
                    incentivized_pools?: {
                        pool_id?: any;
                        lockable_duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        gauge_id?: any;
                    }[];
                }): _150.QueryIncentivizedPoolsResponse;
            };
            QueryExternalIncentiveGaugesRequest: {
                encode(_: _150.QueryExternalIncentiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryExternalIncentiveGaugesRequest;
                fromJSON(_: any): _150.QueryExternalIncentiveGaugesRequest;
                toJSON(_: _150.QueryExternalIncentiveGaugesRequest): unknown;
                fromPartial(_: {}): _150.QueryExternalIncentiveGaugesRequest;
            };
            QueryExternalIncentiveGaugesResponse: {
                encode(message: _150.QueryExternalIncentiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryExternalIncentiveGaugesResponse;
                fromJSON(object: any): _150.QueryExternalIncentiveGaugesResponse;
                toJSON(message: _150.QueryExternalIncentiveGaugesResponse): unknown;
                fromPartial(object: {
                    data?: {
                        id?: any;
                        is_perpetual?: boolean;
                        distribute_to?: {
                            lock_query_type?: _141.LockQueryType;
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
                        start_time?: Date;
                        num_epochs_paid_over?: any;
                        filled_epochs?: any;
                        distributed_coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _150.QueryExternalIncentiveGaugesResponse;
            };
            Params: {
                encode(message: _149.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.Params;
                fromJSON(object: any): _149.Params;
                toJSON(message: _149.Params): unknown;
                fromPartial(object: {
                    minted_denom?: string;
                }): _149.Params;
            };
            LockableDurationsInfo: {
                encode(message: _149.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.LockableDurationsInfo;
                fromJSON(object: any): _149.LockableDurationsInfo;
                toJSON(message: _149.LockableDurationsInfo): unknown;
                fromPartial(object: {
                    lockable_durations?: {
                        seconds?: any;
                        nanos?: number;
                    }[];
                }): _149.LockableDurationsInfo;
            };
            DistrInfo: {
                encode(message: _149.DistrInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.DistrInfo;
                fromJSON(object: any): _149.DistrInfo;
                toJSON(message: _149.DistrInfo): unknown;
                fromPartial(object: {
                    total_weight?: string;
                    records?: {
                        gauge_id?: any;
                        weight?: string;
                    }[];
                }): _149.DistrInfo;
            };
            DistrRecord: {
                encode(message: _149.DistrRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.DistrRecord;
                fromJSON(object: any): _149.DistrRecord;
                toJSON(message: _149.DistrRecord): unknown;
                fromPartial(object: {
                    gauge_id?: any;
                    weight?: string;
                }): _149.DistrRecord;
            };
            ReplacePoolIncentivesProposal: {
                encode(message: _148.ReplacePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.ReplacePoolIncentivesProposal;
                fromJSON(object: any): _148.ReplacePoolIncentivesProposal;
                toJSON(message: _148.ReplacePoolIncentivesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    records?: {
                        gauge_id?: any;
                        weight?: string;
                    }[];
                }): _148.ReplacePoolIncentivesProposal;
            };
            UpdatePoolIncentivesProposal: {
                encode(message: _148.UpdatePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.UpdatePoolIncentivesProposal;
                fromJSON(object: any): _148.UpdatePoolIncentivesProposal;
                toJSON(message: _148.UpdatePoolIncentivesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    records?: {
                        gauge_id?: any;
                        weight?: string;
                    }[];
                }): _148.UpdatePoolIncentivesProposal;
            };
            GenesisState: {
                encode(message: _147.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.GenesisState;
                fromJSON(object: any): _147.GenesisState;
                toJSON(message: _147.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        minted_denom?: string;
                    };
                    lockable_durations?: {
                        seconds?: any;
                        nanos?: number;
                    }[];
                    distr_info?: {
                        total_weight?: string;
                        records?: {
                            gauge_id?: any;
                            weight?: string;
                        }[];
                    };
                }): _147.GenesisState;
            };
        };
    }
    namespace store {
        const v1beta1: {
            Node: {
                encode(message: _151.Node, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Node;
                fromJSON(object: any): _151.Node;
                toJSON(message: _151.Node): unknown;
                fromPartial(object: {
                    children?: {
                        index?: Uint8Array;
                        accumulation?: string;
                    }[];
                }): _151.Node;
            };
            Child: {
                encode(message: _151.Child, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Child;
                fromJSON(object: any): _151.Child;
                toJSON(message: _151.Child): unknown;
                fromPartial(object: {
                    index?: Uint8Array;
                    accumulation?: string;
                }): _151.Child;
            };
            Leaf: {
                encode(message: _151.Leaf, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Leaf;
                fromJSON(object: any): _151.Leaf;
                toJSON(message: _151.Leaf): unknown;
                fromPartial(object: {
                    leaf?: {
                        index?: Uint8Array;
                        accumulation?: string;
                    };
                }): _151.Leaf;
            };
        };
    }
    const superfluid: {
        MsgClientImpl: typeof _307.MsgClientImpl;
        QueryClientImpl: typeof _299.QueryClientImpl;
        LCDQueryClient: typeof _290.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                superfluidDelegate(value: _156.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegate(value: _156.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUnbondLock(value: _156.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lockAndSuperfluidDelegate(value: _156.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unPoolWhitelistedPool(value: _156.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                superfluidDelegate(value: _156.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _156.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _156.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _156.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _156.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _156.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _156.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _156.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _156.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _156.MsgUnPoolWhitelistedPool;
                };
            };
            toJSON: {
                superfluidDelegate(value: _156.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                superfluidUndelegate(value: _156.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                superfluidUnbondLock(value: _156.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: unknown;
                };
                lockAndSuperfluidDelegate(value: _156.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                unPoolWhitelistedPool(value: _156.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                superfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _156.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: any): {
                    typeUrl: string;
                    value: _156.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: any): {
                    typeUrl: string;
                    value: _156.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _156.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: any): {
                    typeUrl: string;
                    value: _156.MsgUnPoolWhitelistedPool;
                };
            };
            fromPartial: {
                superfluidDelegate(value: _156.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _156.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _156.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _156.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _156.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _156.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _156.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _156.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _156.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _156.MsgUnPoolWhitelistedPool;
                };
            };
        };
        AminoConverter: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, lock_id, val_addr }: _156.MsgSuperfluidDelegate) => {
                    sender: string;
                    lock_id: string;
                    val_addr: string;
                };
                fromAmino: ({ sender, lock_id, val_addr }: {
                    sender: string;
                    lock_id: string;
                    val_addr: string;
                }) => _156.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                aminoType: string;
                toAmino: ({ sender, lock_id }: _156.MsgSuperfluidUndelegate) => {
                    sender: string;
                    lock_id: string;
                };
                fromAmino: ({ sender, lock_id }: {
                    sender: string;
                    lock_id: string;
                }) => _156.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                aminoType: string;
                toAmino: ({ sender, lock_id }: _156.MsgSuperfluidUnbondLock) => {
                    sender: string;
                    lock_id: string;
                };
                fromAmino: ({ sender, lock_id }: {
                    sender: string;
                    lock_id: string;
                }) => _156.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, coins, val_addr }: _156.MsgLockAndSuperfluidDelegate) => {
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
                }) => _156.MsgLockAndSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
                aminoType: string;
                toAmino: ({ sender, pool_id }: _156.MsgUnPoolWhitelistedPool) => {
                    sender: string;
                    pool_id: string;
                };
                fromAmino: ({ sender, pool_id }: {
                    sender: string;
                    pool_id: string;
                }) => _156.MsgUnPoolWhitelistedPool;
            };
        };
        MsgSuperfluidDelegate: {
            encode(message: _156.MsgSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgSuperfluidDelegate;
            fromJSON(object: any): _156.MsgSuperfluidDelegate;
            toJSON(message: _156.MsgSuperfluidDelegate): unknown;
            fromPartial(object: {
                sender?: string;
                lock_id?: any;
                val_addr?: string;
            }): _156.MsgSuperfluidDelegate;
        };
        MsgSuperfluidDelegateResponse: {
            encode(_: _156.MsgSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgSuperfluidDelegateResponse;
            fromJSON(_: any): _156.MsgSuperfluidDelegateResponse;
            toJSON(_: _156.MsgSuperfluidDelegateResponse): unknown;
            fromPartial(_: {}): _156.MsgSuperfluidDelegateResponse;
        };
        MsgSuperfluidUndelegate: {
            encode(message: _156.MsgSuperfluidUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgSuperfluidUndelegate;
            fromJSON(object: any): _156.MsgSuperfluidUndelegate;
            toJSON(message: _156.MsgSuperfluidUndelegate): unknown;
            fromPartial(object: {
                sender?: string;
                lock_id?: any;
            }): _156.MsgSuperfluidUndelegate;
        };
        MsgSuperfluidUndelegateResponse: {
            encode(_: _156.MsgSuperfluidUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgSuperfluidUndelegateResponse;
            fromJSON(_: any): _156.MsgSuperfluidUndelegateResponse;
            toJSON(_: _156.MsgSuperfluidUndelegateResponse): unknown;
            fromPartial(_: {}): _156.MsgSuperfluidUndelegateResponse;
        };
        MsgSuperfluidUnbondLock: {
            encode(message: _156.MsgSuperfluidUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgSuperfluidUnbondLock;
            fromJSON(object: any): _156.MsgSuperfluidUnbondLock;
            toJSON(message: _156.MsgSuperfluidUnbondLock): unknown;
            fromPartial(object: {
                sender?: string;
                lock_id?: any;
            }): _156.MsgSuperfluidUnbondLock;
        };
        MsgSuperfluidUnbondLockResponse: {
            encode(_: _156.MsgSuperfluidUnbondLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgSuperfluidUnbondLockResponse;
            fromJSON(_: any): _156.MsgSuperfluidUnbondLockResponse;
            toJSON(_: _156.MsgSuperfluidUnbondLockResponse): unknown;
            fromPartial(_: {}): _156.MsgSuperfluidUnbondLockResponse;
        };
        MsgLockAndSuperfluidDelegate: {
            encode(message: _156.MsgLockAndSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgLockAndSuperfluidDelegate;
            fromJSON(object: any): _156.MsgLockAndSuperfluidDelegate;
            toJSON(message: _156.MsgLockAndSuperfluidDelegate): unknown;
            fromPartial(object: {
                sender?: string;
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
                val_addr?: string;
            }): _156.MsgLockAndSuperfluidDelegate;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            encode(message: _156.MsgLockAndSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgLockAndSuperfluidDelegateResponse;
            fromJSON(object: any): _156.MsgLockAndSuperfluidDelegateResponse;
            toJSON(message: _156.MsgLockAndSuperfluidDelegateResponse): unknown;
            fromPartial(object: {
                ID?: any;
            }): _156.MsgLockAndSuperfluidDelegateResponse;
        };
        MsgUnPoolWhitelistedPool: {
            encode(message: _156.MsgUnPoolWhitelistedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgUnPoolWhitelistedPool;
            fromJSON(object: any): _156.MsgUnPoolWhitelistedPool;
            toJSON(message: _156.MsgUnPoolWhitelistedPool): unknown;
            fromPartial(object: {
                sender?: string;
                pool_id?: any;
            }): _156.MsgUnPoolWhitelistedPool;
        };
        MsgUnPoolWhitelistedPoolResponse: {
            encode(message: _156.MsgUnPoolWhitelistedPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgUnPoolWhitelistedPoolResponse;
            fromJSON(object: any): _156.MsgUnPoolWhitelistedPoolResponse;
            toJSON(message: _156.MsgUnPoolWhitelistedPoolResponse): unknown;
            fromPartial(object: {
                exitedLockIds?: any[];
            }): _156.MsgUnPoolWhitelistedPoolResponse;
        };
        superfluidAssetTypeFromJSON(object: any): _155.SuperfluidAssetType;
        superfluidAssetTypeToJSON(object: _155.SuperfluidAssetType): string;
        SuperfluidAssetType: typeof _155.SuperfluidAssetType;
        SuperfluidAsset: {
            encode(message: _155.SuperfluidAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.SuperfluidAsset;
            fromJSON(object: any): _155.SuperfluidAsset;
            toJSON(message: _155.SuperfluidAsset): unknown;
            fromPartial(object: {
                denom?: string;
                asset_type?: _155.SuperfluidAssetType;
            }): _155.SuperfluidAsset;
        };
        SuperfluidIntermediaryAccount: {
            encode(message: _155.SuperfluidIntermediaryAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.SuperfluidIntermediaryAccount;
            fromJSON(object: any): _155.SuperfluidIntermediaryAccount;
            toJSON(message: _155.SuperfluidIntermediaryAccount): unknown;
            fromPartial(object: {
                denom?: string;
                val_addr?: string;
                gauge_id?: any;
            }): _155.SuperfluidIntermediaryAccount;
        };
        OsmoEquivalentMultiplierRecord: {
            encode(message: _155.OsmoEquivalentMultiplierRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.OsmoEquivalentMultiplierRecord;
            fromJSON(object: any): _155.OsmoEquivalentMultiplierRecord;
            toJSON(message: _155.OsmoEquivalentMultiplierRecord): unknown;
            fromPartial(object: {
                epoch_number?: any;
                denom?: string;
                multiplier?: string;
            }): _155.OsmoEquivalentMultiplierRecord;
        };
        SuperfluidDelegationRecord: {
            encode(message: _155.SuperfluidDelegationRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.SuperfluidDelegationRecord;
            fromJSON(object: any): _155.SuperfluidDelegationRecord;
            toJSON(message: _155.SuperfluidDelegationRecord): unknown;
            fromPartial(object: {
                delegator_address?: string;
                validator_address?: string;
                delegation_amount?: {
                    denom?: string;
                    amount?: string;
                };
                equivalent_staked_amount?: {
                    denom?: string;
                    amount?: string;
                };
            }): _155.SuperfluidDelegationRecord;
        };
        LockIdIntermediaryAccountConnection: {
            encode(message: _155.LockIdIntermediaryAccountConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.LockIdIntermediaryAccountConnection;
            fromJSON(object: any): _155.LockIdIntermediaryAccountConnection;
            toJSON(message: _155.LockIdIntermediaryAccountConnection): unknown;
            fromPartial(object: {
                lock_id?: any;
                intermediary_account?: string;
            }): _155.LockIdIntermediaryAccountConnection;
        };
        UnpoolWhitelistedPools: {
            encode(message: _155.UnpoolWhitelistedPools, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.UnpoolWhitelistedPools;
            fromJSON(object: any): _155.UnpoolWhitelistedPools;
            toJSON(message: _155.UnpoolWhitelistedPools): unknown;
            fromPartial(object: {
                ids?: any[];
            }): _155.UnpoolWhitelistedPools;
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
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryParamsResponse;
            fromJSON(object: any): _154.QueryParamsResponse;
            toJSON(message: _154.QueryParamsResponse): unknown;
            fromPartial(object: {
                params?: {
                    minimum_risk_factor?: string;
                };
            }): _154.QueryParamsResponse;
        };
        AssetTypeRequest: {
            encode(message: _154.AssetTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.AssetTypeRequest;
            fromJSON(object: any): _154.AssetTypeRequest;
            toJSON(message: _154.AssetTypeRequest): unknown;
            fromPartial(object: {
                denom?: string;
            }): _154.AssetTypeRequest;
        };
        AssetTypeResponse: {
            encode(message: _154.AssetTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.AssetTypeResponse;
            fromJSON(object: any): _154.AssetTypeResponse;
            toJSON(message: _154.AssetTypeResponse): unknown;
            fromPartial(object: {
                asset_type?: _155.SuperfluidAssetType;
            }): _154.AssetTypeResponse;
        };
        AllAssetsRequest: {
            encode(_: _154.AllAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.AllAssetsRequest;
            fromJSON(_: any): _154.AllAssetsRequest;
            toJSON(_: _154.AllAssetsRequest): unknown;
            fromPartial(_: {}): _154.AllAssetsRequest;
        };
        AllAssetsResponse: {
            encode(message: _154.AllAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.AllAssetsResponse;
            fromJSON(object: any): _154.AllAssetsResponse;
            toJSON(message: _154.AllAssetsResponse): unknown;
            fromPartial(object: {
                assets?: {
                    denom?: string;
                    asset_type?: _155.SuperfluidAssetType;
                }[];
            }): _154.AllAssetsResponse;
        };
        AssetMultiplierRequest: {
            encode(message: _154.AssetMultiplierRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.AssetMultiplierRequest;
            fromJSON(object: any): _154.AssetMultiplierRequest;
            toJSON(message: _154.AssetMultiplierRequest): unknown;
            fromPartial(object: {
                denom?: string;
            }): _154.AssetMultiplierRequest;
        };
        AssetMultiplierResponse: {
            encode(message: _154.AssetMultiplierResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.AssetMultiplierResponse;
            fromJSON(object: any): _154.AssetMultiplierResponse;
            toJSON(message: _154.AssetMultiplierResponse): unknown;
            fromPartial(object: {
                osmo_equivalent_multiplier?: {
                    epoch_number?: any;
                    denom?: string;
                    multiplier?: string;
                };
            }): _154.AssetMultiplierResponse;
        };
        SuperfluidIntermediaryAccountInfo: {
            encode(message: _154.SuperfluidIntermediaryAccountInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.SuperfluidIntermediaryAccountInfo;
            fromJSON(object: any): _154.SuperfluidIntermediaryAccountInfo;
            toJSON(message: _154.SuperfluidIntermediaryAccountInfo): unknown;
            fromPartial(object: {
                denom?: string;
                val_addr?: string;
                gauge_id?: any;
                address?: string;
            }): _154.SuperfluidIntermediaryAccountInfo;
        };
        AllIntermediaryAccountsRequest: {
            encode(message: _154.AllIntermediaryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.AllIntermediaryAccountsRequest;
            fromJSON(object: any): _154.AllIntermediaryAccountsRequest;
            toJSON(message: _154.AllIntermediaryAccountsRequest): unknown;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    count_total?: boolean;
                    reverse?: boolean;
                };
            }): _154.AllIntermediaryAccountsRequest;
        };
        AllIntermediaryAccountsResponse: {
            encode(message: _154.AllIntermediaryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.AllIntermediaryAccountsResponse;
            fromJSON(object: any): _154.AllIntermediaryAccountsResponse;
            toJSON(message: _154.AllIntermediaryAccountsResponse): unknown;
            fromPartial(object: {
                accounts?: {
                    denom?: string;
                    val_addr?: string;
                    gauge_id?: any;
                    address?: string;
                }[];
                pagination?: {
                    next_key?: Uint8Array;
                    total?: any;
                };
            }): _154.AllIntermediaryAccountsResponse;
        };
        ConnectedIntermediaryAccountRequest: {
            encode(message: _154.ConnectedIntermediaryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.ConnectedIntermediaryAccountRequest;
            fromJSON(object: any): _154.ConnectedIntermediaryAccountRequest;
            toJSON(message: _154.ConnectedIntermediaryAccountRequest): unknown;
            fromPartial(object: {
                lock_id?: any;
            }): _154.ConnectedIntermediaryAccountRequest;
        };
        ConnectedIntermediaryAccountResponse: {
            encode(message: _154.ConnectedIntermediaryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.ConnectedIntermediaryAccountResponse;
            fromJSON(object: any): _154.ConnectedIntermediaryAccountResponse;
            toJSON(message: _154.ConnectedIntermediaryAccountResponse): unknown;
            fromPartial(object: {
                account?: {
                    denom?: string;
                    val_addr?: string;
                    gauge_id?: any;
                    address?: string;
                };
            }): _154.ConnectedIntermediaryAccountResponse;
        };
        TotalSuperfluidDelegationsRequest: {
            encode(_: _154.TotalSuperfluidDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.TotalSuperfluidDelegationsRequest;
            fromJSON(_: any): _154.TotalSuperfluidDelegationsRequest;
            toJSON(_: _154.TotalSuperfluidDelegationsRequest): unknown;
            fromPartial(_: {}): _154.TotalSuperfluidDelegationsRequest;
        };
        TotalSuperfluidDelegationsResponse: {
            encode(message: _154.TotalSuperfluidDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.TotalSuperfluidDelegationsResponse;
            fromJSON(object: any): _154.TotalSuperfluidDelegationsResponse;
            toJSON(message: _154.TotalSuperfluidDelegationsResponse): unknown;
            fromPartial(object: {
                totalDelegations?: string;
            }): _154.TotalSuperfluidDelegationsResponse;
        };
        SuperfluidDelegationAmountRequest: {
            encode(message: _154.SuperfluidDelegationAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.SuperfluidDelegationAmountRequest;
            fromJSON(object: any): _154.SuperfluidDelegationAmountRequest;
            toJSON(message: _154.SuperfluidDelegationAmountRequest): unknown;
            fromPartial(object: {
                delegator_address?: string;
                validator_address?: string;
                denom?: string;
            }): _154.SuperfluidDelegationAmountRequest;
        };
        SuperfluidDelegationAmountResponse: {
            encode(message: _154.SuperfluidDelegationAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.SuperfluidDelegationAmountResponse;
            fromJSON(object: any): _154.SuperfluidDelegationAmountResponse;
            toJSON(message: _154.SuperfluidDelegationAmountResponse): unknown;
            fromPartial(object: {
                amount?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _154.SuperfluidDelegationAmountResponse;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            encode(message: _154.SuperfluidDelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.SuperfluidDelegationsByDelegatorRequest;
            fromJSON(object: any): _154.SuperfluidDelegationsByDelegatorRequest;
            toJSON(message: _154.SuperfluidDelegationsByDelegatorRequest): unknown;
            fromPartial(object: {
                delegator_address?: string;
            }): _154.SuperfluidDelegationsByDelegatorRequest;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            encode(message: _154.SuperfluidDelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.SuperfluidDelegationsByDelegatorResponse;
            fromJSON(object: any): _154.SuperfluidDelegationsByDelegatorResponse;
            toJSON(message: _154.SuperfluidDelegationsByDelegatorResponse): unknown;
            fromPartial(object: {
                superfluid_delegation_records?: {
                    delegator_address?: string;
                    validator_address?: string;
                    delegation_amount?: {
                        denom?: string;
                        amount?: string;
                    };
                    equivalent_staked_amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }[];
                total_delegated_coins?: {
                    denom?: string;
                    amount?: string;
                }[];
                total_equivalent_staked_amount?: {
                    denom?: string;
                    amount?: string;
                };
            }): _154.SuperfluidDelegationsByDelegatorResponse;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            encode(message: _154.SuperfluidUndelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.SuperfluidUndelegationsByDelegatorRequest;
            fromJSON(object: any): _154.SuperfluidUndelegationsByDelegatorRequest;
            toJSON(message: _154.SuperfluidUndelegationsByDelegatorRequest): unknown;
            fromPartial(object: {
                delegator_address?: string;
                denom?: string;
            }): _154.SuperfluidUndelegationsByDelegatorRequest;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            encode(message: _154.SuperfluidUndelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.SuperfluidUndelegationsByDelegatorResponse;
            fromJSON(object: any): _154.SuperfluidUndelegationsByDelegatorResponse;
            toJSON(message: _154.SuperfluidUndelegationsByDelegatorResponse): unknown;
            fromPartial(object: {
                superfluid_delegation_records?: {
                    delegator_address?: string;
                    validator_address?: string;
                    delegation_amount?: {
                        denom?: string;
                        amount?: string;
                    };
                    equivalent_staked_amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }[];
                total_undelegated_coins?: {
                    denom?: string;
                    amount?: string;
                }[];
                synthetic_locks?: {
                    underlying_lock_id?: any;
                    synth_denom?: string;
                    end_time?: Date;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }[];
            }): _154.SuperfluidUndelegationsByDelegatorResponse;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            encode(message: _154.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.SuperfluidDelegationsByValidatorDenomRequest;
            fromJSON(object: any): _154.SuperfluidDelegationsByValidatorDenomRequest;
            toJSON(message: _154.SuperfluidDelegationsByValidatorDenomRequest): unknown;
            fromPartial(object: {
                validator_address?: string;
                denom?: string;
            }): _154.SuperfluidDelegationsByValidatorDenomRequest;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            encode(message: _154.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.SuperfluidDelegationsByValidatorDenomResponse;
            fromJSON(object: any): _154.SuperfluidDelegationsByValidatorDenomResponse;
            toJSON(message: _154.SuperfluidDelegationsByValidatorDenomResponse): unknown;
            fromPartial(object: {
                superfluid_delegation_records?: {
                    delegator_address?: string;
                    validator_address?: string;
                    delegation_amount?: {
                        denom?: string;
                        amount?: string;
                    };
                    equivalent_staked_amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }[];
            }): _154.SuperfluidDelegationsByValidatorDenomResponse;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            encode(message: _154.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromJSON(object: any): _154.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toJSON(message: _154.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): unknown;
            fromPartial(object: {
                validator_address?: string;
                denom?: string;
            }): _154.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            encode(message: _154.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromJSON(object: any): _154.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toJSON(message: _154.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): unknown;
            fromPartial(object: {
                total_delegated_coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _154.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
        };
        Params: {
            encode(message: _153.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.Params;
            fromJSON(object: any): _153.Params;
            toJSON(message: _153.Params): unknown;
            fromPartial(object: {
                minimum_risk_factor?: string;
            }): _153.Params;
        };
        GenesisState: {
            encode(message: _152.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.GenesisState;
            fromJSON(object: any): _152.GenesisState;
            toJSON(message: _152.GenesisState): unknown;
            fromPartial(object: {
                params?: {
                    minimum_risk_factor?: string;
                };
                superfluid_assets?: {
                    denom?: string;
                    asset_type?: _155.SuperfluidAssetType;
                }[];
                osmo_equivalent_multipliers?: {
                    epoch_number?: any;
                    denom?: string;
                    multiplier?: string;
                }[];
                intermediary_accounts?: {
                    denom?: string;
                    val_addr?: string;
                    gauge_id?: any;
                }[];
                intemediary_account_connections?: {
                    lock_id?: any;
                    intermediary_account?: string;
                }[];
            }): _152.GenesisState;
        };
    };
    namespace tokenfactory {
        const v1beta1: {
            MsgClientImpl: typeof _308.MsgClientImpl;
            QueryClientImpl: typeof _300.QueryClientImpl;
            LCDQueryClient: typeof _291.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _161.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _161.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _161.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _161.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _161.MsgCreateDenom): {
                        typeUrl: string;
                        value: _161.MsgCreateDenom;
                    };
                    mint(value: _161.MsgMint): {
                        typeUrl: string;
                        value: _161.MsgMint;
                    };
                    burn(value: _161.MsgBurn): {
                        typeUrl: string;
                        value: _161.MsgBurn;
                    };
                    changeAdmin(value: _161.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _161.MsgChangeAdmin;
                    };
                };
                toJSON: {
                    createDenom(value: _161.MsgCreateDenom): {
                        typeUrl: string;
                        value: unknown;
                    };
                    mint(value: _161.MsgMint): {
                        typeUrl: string;
                        value: unknown;
                    };
                    burn(value: _161.MsgBurn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    changeAdmin(value: _161.MsgChangeAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createDenom(value: any): {
                        typeUrl: string;
                        value: _161.MsgCreateDenom;
                    };
                    mint(value: any): {
                        typeUrl: string;
                        value: _161.MsgMint;
                    };
                    burn(value: any): {
                        typeUrl: string;
                        value: _161.MsgBurn;
                    };
                    changeAdmin(value: any): {
                        typeUrl: string;
                        value: _161.MsgChangeAdmin;
                    };
                };
                fromPartial: {
                    createDenom(value: _161.MsgCreateDenom): {
                        typeUrl: string;
                        value: _161.MsgCreateDenom;
                    };
                    mint(value: _161.MsgMint): {
                        typeUrl: string;
                        value: _161.MsgMint;
                    };
                    burn(value: _161.MsgBurn): {
                        typeUrl: string;
                        value: _161.MsgBurn;
                    };
                    changeAdmin(value: _161.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _161.MsgChangeAdmin;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: ({ sender, subdenom }: _161.MsgCreateDenom) => {
                        sender: string;
                        subdenom: string;
                    };
                    fromAmino: ({ sender, subdenom }: {
                        sender: string;
                        subdenom: string;
                    }) => _161.MsgCreateDenom;
                };
                "/osmosis.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _161.MsgMint) => {
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
                    }) => _161.MsgMint;
                };
                "/osmosis.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _161.MsgBurn) => {
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
                    }) => _161.MsgBurn;
                };
                "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, denom, newAdmin }: _161.MsgChangeAdmin) => {
                        sender: string;
                        denom: string;
                        newAdmin: string;
                    };
                    fromAmino: ({ sender, denom, newAdmin }: {
                        sender: string;
                        denom: string;
                        newAdmin: string;
                    }) => _161.MsgChangeAdmin;
                };
            };
            MsgCreateDenom: {
                encode(message: _161.MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgCreateDenom;
                fromJSON(object: any): _161.MsgCreateDenom;
                toJSON(message: _161.MsgCreateDenom): unknown;
                fromPartial(object: {
                    sender?: string;
                    subdenom?: string;
                }): _161.MsgCreateDenom;
            };
            MsgCreateDenomResponse: {
                encode(message: _161.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgCreateDenomResponse;
                fromJSON(object: any): _161.MsgCreateDenomResponse;
                toJSON(message: _161.MsgCreateDenomResponse): unknown;
                fromPartial(object: {
                    new_token_denom?: string;
                }): _161.MsgCreateDenomResponse;
            };
            MsgMint: {
                encode(message: _161.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgMint;
                fromJSON(object: any): _161.MsgMint;
                toJSON(message: _161.MsgMint): unknown;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _161.MsgMint;
            };
            MsgMintResponse: {
                encode(_: _161.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgMintResponse;
                fromJSON(_: any): _161.MsgMintResponse;
                toJSON(_: _161.MsgMintResponse): unknown;
                fromPartial(_: {}): _161.MsgMintResponse;
            };
            MsgBurn: {
                encode(message: _161.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgBurn;
                fromJSON(object: any): _161.MsgBurn;
                toJSON(message: _161.MsgBurn): unknown;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _161.MsgBurn;
            };
            MsgBurnResponse: {
                encode(_: _161.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgBurnResponse;
                fromJSON(_: any): _161.MsgBurnResponse;
                toJSON(_: _161.MsgBurnResponse): unknown;
                fromPartial(_: {}): _161.MsgBurnResponse;
            };
            MsgChangeAdmin: {
                encode(message: _161.MsgChangeAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgChangeAdmin;
                fromJSON(object: any): _161.MsgChangeAdmin;
                toJSON(message: _161.MsgChangeAdmin): unknown;
                fromPartial(object: {
                    sender?: string;
                    denom?: string;
                    newAdmin?: string;
                }): _161.MsgChangeAdmin;
            };
            MsgChangeAdminResponse: {
                encode(_: _161.MsgChangeAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgChangeAdminResponse;
                fromJSON(_: any): _161.MsgChangeAdminResponse;
                toJSON(_: _161.MsgChangeAdminResponse): unknown;
                fromPartial(_: {}): _161.MsgChangeAdminResponse;
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
                        denom_creation_fee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _160.QueryParamsResponse;
            };
            QueryDenomAuthorityMetadataRequest: {
                encode(message: _160.QueryDenomAuthorityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryDenomAuthorityMetadataRequest;
                fromJSON(object: any): _160.QueryDenomAuthorityMetadataRequest;
                toJSON(message: _160.QueryDenomAuthorityMetadataRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _160.QueryDenomAuthorityMetadataRequest;
            };
            QueryDenomAuthorityMetadataResponse: {
                encode(message: _160.QueryDenomAuthorityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryDenomAuthorityMetadataResponse;
                fromJSON(object: any): _160.QueryDenomAuthorityMetadataResponse;
                toJSON(message: _160.QueryDenomAuthorityMetadataResponse): unknown;
                fromPartial(object: {
                    authority_metadata?: {
                        Admin?: string;
                    };
                }): _160.QueryDenomAuthorityMetadataResponse;
            };
            QueryDenomsFromCreatorRequest: {
                encode(message: _160.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryDenomsFromCreatorRequest;
                fromJSON(object: any): _160.QueryDenomsFromCreatorRequest;
                toJSON(message: _160.QueryDenomsFromCreatorRequest): unknown;
                fromPartial(object: {
                    creator?: string;
                }): _160.QueryDenomsFromCreatorRequest;
            };
            QueryDenomsFromCreatorResponse: {
                encode(message: _160.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryDenomsFromCreatorResponse;
                fromJSON(object: any): _160.QueryDenomsFromCreatorResponse;
                toJSON(message: _160.QueryDenomsFromCreatorResponse): unknown;
                fromPartial(object: {
                    denoms?: string[];
                }): _160.QueryDenomsFromCreatorResponse;
            };
            Params: {
                encode(message: _159.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.Params;
                fromJSON(object: any): _159.Params;
                toJSON(message: _159.Params): unknown;
                fromPartial(object: {
                    denom_creation_fee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _159.Params;
            };
            GenesisState: {
                encode(message: _158.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.GenesisState;
                fromJSON(object: any): _158.GenesisState;
                toJSON(message: _158.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        denom_creation_fee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    factory_denoms?: {
                        denom?: string;
                        authority_metadata?: {
                            Admin?: string;
                        };
                    }[];
                }): _158.GenesisState;
            };
            GenesisDenom: {
                encode(message: _158.GenesisDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.GenesisDenom;
                fromJSON(object: any): _158.GenesisDenom;
                toJSON(message: _158.GenesisDenom): unknown;
                fromPartial(object: {
                    denom?: string;
                    authority_metadata?: {
                        Admin?: string;
                    };
                }): _158.GenesisDenom;
            };
            DenomAuthorityMetadata: {
                encode(message: _157.DenomAuthorityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.DenomAuthorityMetadata;
                fromJSON(object: any): _157.DenomAuthorityMetadata;
                toJSON(message: _157.DenomAuthorityMetadata): unknown;
                fromPartial(object: {
                    Admin?: string;
                }): _157.DenomAuthorityMetadata;
            };
        };
    }
    namespace txfees {
        const v1beta1: {
            QueryClientImpl: typeof _301.QueryClientImpl;
            LCDQueryClient: typeof _292.LCDQueryClient;
            QueryFeeTokensRequest: {
                encode(_: _165.QueryFeeTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryFeeTokensRequest;
                fromJSON(_: any): _165.QueryFeeTokensRequest;
                toJSON(_: _165.QueryFeeTokensRequest): unknown;
                fromPartial(_: {}): _165.QueryFeeTokensRequest;
            };
            QueryFeeTokensResponse: {
                encode(message: _165.QueryFeeTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryFeeTokensResponse;
                fromJSON(object: any): _165.QueryFeeTokensResponse;
                toJSON(message: _165.QueryFeeTokensResponse): unknown;
                fromPartial(object: {
                    fee_tokens?: {
                        denom?: string;
                        poolID?: any;
                    }[];
                }): _165.QueryFeeTokensResponse;
            };
            QueryDenomSpotPriceRequest: {
                encode(message: _165.QueryDenomSpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryDenomSpotPriceRequest;
                fromJSON(object: any): _165.QueryDenomSpotPriceRequest;
                toJSON(message: _165.QueryDenomSpotPriceRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _165.QueryDenomSpotPriceRequest;
            };
            QueryDenomSpotPriceResponse: {
                encode(message: _165.QueryDenomSpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryDenomSpotPriceResponse;
                fromJSON(object: any): _165.QueryDenomSpotPriceResponse;
                toJSON(message: _165.QueryDenomSpotPriceResponse): unknown;
                fromPartial(object: {
                    poolID?: any;
                    spot_price?: string;
                }): _165.QueryDenomSpotPriceResponse;
            };
            QueryDenomPoolIdRequest: {
                encode(message: _165.QueryDenomPoolIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryDenomPoolIdRequest;
                fromJSON(object: any): _165.QueryDenomPoolIdRequest;
                toJSON(message: _165.QueryDenomPoolIdRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _165.QueryDenomPoolIdRequest;
            };
            QueryDenomPoolIdResponse: {
                encode(message: _165.QueryDenomPoolIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryDenomPoolIdResponse;
                fromJSON(object: any): _165.QueryDenomPoolIdResponse;
                toJSON(message: _165.QueryDenomPoolIdResponse): unknown;
                fromPartial(object: {
                    poolID?: any;
                }): _165.QueryDenomPoolIdResponse;
            };
            QueryBaseDenomRequest: {
                encode(_: _165.QueryBaseDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryBaseDenomRequest;
                fromJSON(_: any): _165.QueryBaseDenomRequest;
                toJSON(_: _165.QueryBaseDenomRequest): unknown;
                fromPartial(_: {}): _165.QueryBaseDenomRequest;
            };
            QueryBaseDenomResponse: {
                encode(message: _165.QueryBaseDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryBaseDenomResponse;
                fromJSON(object: any): _165.QueryBaseDenomResponse;
                toJSON(message: _165.QueryBaseDenomResponse): unknown;
                fromPartial(object: {
                    base_denom?: string;
                }): _165.QueryBaseDenomResponse;
            };
            UpdateFeeTokenProposal: {
                encode(message: _164.UpdateFeeTokenProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.UpdateFeeTokenProposal;
                fromJSON(object: any): _164.UpdateFeeTokenProposal;
                toJSON(message: _164.UpdateFeeTokenProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    feetoken?: {
                        denom?: string;
                        poolID?: any;
                    };
                }): _164.UpdateFeeTokenProposal;
            };
            GenesisState: {
                encode(message: _163.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.GenesisState;
                fromJSON(object: any): _163.GenesisState;
                toJSON(message: _163.GenesisState): unknown;
                fromPartial(object: {
                    basedenom?: string;
                    feetokens?: {
                        denom?: string;
                        poolID?: any;
                    }[];
                }): _163.GenesisState;
            };
            FeeToken: {
                encode(message: _162.FeeToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.FeeToken;
                fromJSON(object: any): _162.FeeToken;
                toJSON(message: _162.FeeToken): unknown;
                fromPartial(object: {
                    denom?: string;
                    poolID?: any;
                }): _162.FeeToken;
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
                            v1beta1: _302.MsgClientImpl;
                        };
                        stableswap: {
                            v1beta1: _303.MsgClientImpl;
                        };
                    };
                    v1beta1: _304.MsgClientImpl;
                };
                incentives: _305.MsgClientImpl;
                lockup: _306.MsgClientImpl;
                superfluid: _307.MsgClientImpl;
                tokenfactory: {
                    v1beta1: _308.MsgClientImpl;
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
                    v1beta1: _293.QueryClientImpl;
                };
                gamm: {
                    v1beta1: _294.QueryClientImpl;
                };
                incentives: _295.QueryClientImpl;
                lockup: _296.QueryClientImpl;
                mint: {
                    v1beta1: _297.QueryClientImpl;
                };
                poolincentives: {
                    v1beta1: _298.QueryClientImpl;
                };
                superfluid: _299.QueryClientImpl;
                tokenfactory: {
                    v1beta1: _300.QueryClientImpl;
                };
                txfees: {
                    v1beta1: _301.QueryClientImpl;
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
                        v1beta1: any;
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
                    v1beta1: any;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            osmosis: {
                epochs: {
                    v1beta1: _284.LCDQueryClient;
                };
                gamm: {
                    v1beta1: _285.LCDQueryClient;
                };
                incentives: _286.LCDQueryClient;
                lockup: _287.LCDQueryClient;
                mint: {
                    v1beta1: _288.LCDQueryClient;
                };
                poolincentives: {
                    v1beta1: _289.LCDQueryClient;
                };
                superfluid: _290.LCDQueryClient;
                tokenfactory: {
                    v1beta1: _291.LCDQueryClient;
                };
                txfees: {
                    v1beta1: _292.LCDQueryClient;
                };
            };
        }>;
    };
}
