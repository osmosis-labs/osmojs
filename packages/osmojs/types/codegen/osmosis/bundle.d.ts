import * as _135 from "./epochs/genesis";
import * as _136 from "./epochs/query";
import * as _137 from "./gamm/pool-models/balancer/balancerPool";
import * as _138 from "./gamm/v1beta1/genesis";
import * as _139 from "./gamm/v1beta1/query";
import * as _140 from "./gamm/v1beta1/tx";
import * as _141 from "./gamm/pool-models/balancer/tx";
import * as _142 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _143 from "./gamm/pool-models/stableswap/tx";
import * as _144 from "./incentives/gauge";
import * as _145 from "./incentives/genesis";
import * as _146 from "./incentives/params";
import * as _147 from "./incentives/query";
import * as _148 from "./incentives/tx";
import * as _149 from "./lockup/genesis";
import * as _150 from "./lockup/lock";
import * as _151 from "./lockup/query";
import * as _152 from "./lockup/tx";
import * as _153 from "./mint/v1beta1/genesis";
import * as _154 from "./mint/v1beta1/mint";
import * as _155 from "./mint/v1beta1/query";
import * as _156 from "./pool-incentives/v1beta1/genesis";
import * as _157 from "./pool-incentives/v1beta1/gov";
import * as _158 from "./pool-incentives/v1beta1/incentives";
import * as _159 from "./pool-incentives/v1beta1/query";
import * as _160 from "./store/v1beta1/tree";
import * as _161 from "./superfluid/genesis";
import * as _162 from "./superfluid/params";
import * as _163 from "./superfluid/query";
import * as _164 from "./superfluid/superfluid";
import * as _165 from "./superfluid/tx";
import * as _166 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _167 from "./tokenfactory/v1beta1/genesis";
import * as _168 from "./tokenfactory/v1beta1/params";
import * as _169 from "./tokenfactory/v1beta1/query";
import * as _170 from "./tokenfactory/v1beta1/tx";
import * as _171 from "./txfees/v1beta1/feetoken";
import * as _172 from "./txfees/v1beta1/genesis";
import * as _173 from "./txfees/v1beta1/gov";
import * as _174 from "./txfees/v1beta1/query";
import * as _291 from "./epochs/query.lcd";
import * as _292 from "./gamm/v1beta1/query.lcd";
import * as _293 from "./incentives/query.lcd";
import * as _294 from "./lockup/query.lcd";
import * as _295 from "./mint/v1beta1/query.lcd";
import * as _296 from "./pool-incentives/v1beta1/query.lcd";
import * as _297 from "./superfluid/query.lcd";
import * as _298 from "./tokenfactory/v1beta1/query.lcd";
import * as _299 from "./txfees/v1beta1/query.lcd";
import * as _300 from "./epochs/query.rpc.query";
import * as _301 from "./gamm/v1beta1/query.rpc.query";
import * as _302 from "./incentives/query.rpc.query";
import * as _303 from "./lockup/query.rpc.query";
import * as _304 from "./mint/v1beta1/query.rpc.query";
import * as _305 from "./pool-incentives/v1beta1/query.rpc.query";
import * as _306 from "./superfluid/query.rpc.query";
import * as _307 from "./tokenfactory/v1beta1/query.rpc.query";
import * as _308 from "./txfees/v1beta1/query.rpc.query";
import * as _309 from "./gamm/pool-models/balancer/tx.rpc.msg";
import * as _310 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _311 from "./gamm/v1beta1/tx.rpc.msg";
import * as _312 from "./incentives/tx.rpc.msg";
import * as _313 from "./lockup/tx.rpc.msg";
import * as _314 from "./superfluid/tx.rpc.msg";
import * as _315 from "./tokenfactory/v1beta1/tx.rpc.msg";
export declare namespace osmosis {
    namespace epochs {
        const v1beta1: {
            QueryClientImpl: typeof _300.QueryClientImpl;
            LCDQueryClient: typeof _291.LCDQueryClient;
            QueryEpochsInfoRequest: {
                encode(_: _136.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryEpochsInfoRequest;
                fromJSON(_: any): _136.QueryEpochsInfoRequest;
                toJSON(_: _136.QueryEpochsInfoRequest): unknown;
                fromPartial(_: {}): _136.QueryEpochsInfoRequest;
            };
            QueryEpochsInfoResponse: {
                encode(message: _136.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryEpochsInfoResponse;
                fromJSON(object: any): _136.QueryEpochsInfoResponse;
                toJSON(message: _136.QueryEpochsInfoResponse): unknown;
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
                }): _136.QueryEpochsInfoResponse;
            };
            QueryCurrentEpochRequest: {
                encode(message: _136.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryCurrentEpochRequest;
                fromJSON(object: any): _136.QueryCurrentEpochRequest;
                toJSON(message: _136.QueryCurrentEpochRequest): unknown;
                fromPartial(object: {
                    identifier?: string;
                }): _136.QueryCurrentEpochRequest;
            };
            QueryCurrentEpochResponse: {
                encode(message: _136.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryCurrentEpochResponse;
                fromJSON(object: any): _136.QueryCurrentEpochResponse;
                toJSON(message: _136.QueryCurrentEpochResponse): unknown;
                fromPartial(object: {
                    current_epoch?: any;
                }): _136.QueryCurrentEpochResponse;
            };
            EpochInfo: {
                encode(message: _135.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.EpochInfo;
                fromJSON(object: any): _135.EpochInfo;
                toJSON(message: _135.EpochInfo): unknown;
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
                }): _135.EpochInfo;
            };
            GenesisState: {
                encode(message: _135.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.GenesisState;
                fromJSON(object: any): _135.GenesisState;
                toJSON(message: _135.GenesisState): unknown;
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
                }): _135.GenesisState;
            };
        };
    }
    namespace gamm {
        const v1beta1: {
            MsgClientImpl: typeof _311.MsgClientImpl;
            QueryClientImpl: typeof _301.QueryClientImpl;
            LCDQueryClient: typeof _292.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    joinPool(value: _140.MsgJoinPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitPool(value: _140.MsgExitPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountIn(value: _140.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _140.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapExternAmountIn(value: _140.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapShareAmountOut(value: _140.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapExternAmountOut(value: _140.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapShareAmountIn(value: _140.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    joinPool(value: _140.MsgJoinPool): {
                        typeUrl: string;
                        value: _140.MsgJoinPool;
                    };
                    exitPool(value: _140.MsgExitPool): {
                        typeUrl: string;
                        value: _140.MsgExitPool;
                    };
                    swapExactAmountIn(value: _140.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _140.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _140.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _140.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _140.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _140.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _140.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _140.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _140.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _140.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _140.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _140.MsgExitSwapShareAmountIn;
                    };
                };
                toJSON: {
                    joinPool(value: _140.MsgJoinPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitPool(value: _140.MsgExitPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapExactAmountIn(value: _140.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapExactAmountOut(value: _140.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    joinSwapExternAmountIn(value: _140.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    joinSwapShareAmountOut(value: _140.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitSwapExternAmountOut(value: _140.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitSwapShareAmountIn(value: _140.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    joinPool(value: any): {
                        typeUrl: string;
                        value: _140.MsgJoinPool;
                    };
                    exitPool(value: any): {
                        typeUrl: string;
                        value: _140.MsgExitPool;
                    };
                    swapExactAmountIn(value: any): {
                        typeUrl: string;
                        value: _140.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: any): {
                        typeUrl: string;
                        value: _140.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: any): {
                        typeUrl: string;
                        value: _140.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: any): {
                        typeUrl: string;
                        value: _140.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: any): {
                        typeUrl: string;
                        value: _140.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: any): {
                        typeUrl: string;
                        value: _140.MsgExitSwapShareAmountIn;
                    };
                };
                fromPartial: {
                    joinPool(value: _140.MsgJoinPool): {
                        typeUrl: string;
                        value: _140.MsgJoinPool;
                    };
                    exitPool(value: _140.MsgExitPool): {
                        typeUrl: string;
                        value: _140.MsgExitPool;
                    };
                    swapExactAmountIn(value: _140.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _140.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _140.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _140.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _140.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _140.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _140.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _140.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _140.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _140.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _140.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _140.MsgExitSwapShareAmountIn;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareOutAmount, tokenInMaxs }: _140.MsgJoinPool) => {
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
                    }) => _140.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareInAmount, tokenOutMins }: _140.MsgExitPool) => {
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
                    }) => _140.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: _140.MsgSwapExactAmountIn) => {
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
                    }) => _140.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: _140.MsgSwapExactAmountOut) => {
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
                    }) => _140.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenIn, shareOutMinAmount }: _140.MsgJoinSwapExternAmountIn) => {
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
                    }) => _140.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenInDenom, shareOutAmount, tokenInMaxAmount }: _140.MsgJoinSwapShareAmountOut) => {
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
                    }) => _140.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOut, shareInMaxAmount }: _140.MsgExitSwapExternAmountOut) => {
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
                    }) => _140.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOutDenom, shareInAmount, tokenOutMinAmount }: _140.MsgExitSwapShareAmountIn) => {
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
                    }) => _140.MsgExitSwapShareAmountIn;
                };
            };
            MsgJoinPool: {
                encode(message: _140.MsgJoinPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgJoinPool;
                fromJSON(object: any): _140.MsgJoinPool;
                toJSON(message: _140.MsgJoinPool): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    shareOutAmount?: string;
                    tokenInMaxs?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _140.MsgJoinPool;
            };
            MsgJoinPoolResponse: {
                encode(_: _140.MsgJoinPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgJoinPoolResponse;
                fromJSON(_: any): _140.MsgJoinPoolResponse;
                toJSON(_: _140.MsgJoinPoolResponse): unknown;
                fromPartial(_: {}): _140.MsgJoinPoolResponse;
            };
            MsgExitPool: {
                encode(message: _140.MsgExitPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgExitPool;
                fromJSON(object: any): _140.MsgExitPool;
                toJSON(message: _140.MsgExitPool): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    shareInAmount?: string;
                    tokenOutMins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _140.MsgExitPool;
            };
            MsgExitPoolResponse: {
                encode(_: _140.MsgExitPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgExitPoolResponse;
                fromJSON(_: any): _140.MsgExitPoolResponse;
                toJSON(_: _140.MsgExitPoolResponse): unknown;
                fromPartial(_: {}): _140.MsgExitPoolResponse;
            };
            SwapAmountInRoute: {
                encode(message: _140.SwapAmountInRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.SwapAmountInRoute;
                fromJSON(object: any): _140.SwapAmountInRoute;
                toJSON(message: _140.SwapAmountInRoute): unknown;
                fromPartial(object: {
                    poolId?: any;
                    tokenOutDenom?: string;
                }): _140.SwapAmountInRoute;
            };
            MsgSwapExactAmountIn: {
                encode(message: _140.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgSwapExactAmountIn;
                fromJSON(object: any): _140.MsgSwapExactAmountIn;
                toJSON(message: _140.MsgSwapExactAmountIn): unknown;
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
                }): _140.MsgSwapExactAmountIn;
            };
            MsgSwapExactAmountInResponse: {
                encode(message: _140.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgSwapExactAmountInResponse;
                fromJSON(object: any): _140.MsgSwapExactAmountInResponse;
                toJSON(message: _140.MsgSwapExactAmountInResponse): unknown;
                fromPartial(object: {
                    tokenOutAmount?: string;
                }): _140.MsgSwapExactAmountInResponse;
            };
            SwapAmountOutRoute: {
                encode(message: _140.SwapAmountOutRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.SwapAmountOutRoute;
                fromJSON(object: any): _140.SwapAmountOutRoute;
                toJSON(message: _140.SwapAmountOutRoute): unknown;
                fromPartial(object: {
                    poolId?: any;
                    tokenInDenom?: string;
                }): _140.SwapAmountOutRoute;
            };
            MsgSwapExactAmountOut: {
                encode(message: _140.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgSwapExactAmountOut;
                fromJSON(object: any): _140.MsgSwapExactAmountOut;
                toJSON(message: _140.MsgSwapExactAmountOut): unknown;
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
                }): _140.MsgSwapExactAmountOut;
            };
            MsgSwapExactAmountOutResponse: {
                encode(message: _140.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgSwapExactAmountOutResponse;
                fromJSON(object: any): _140.MsgSwapExactAmountOutResponse;
                toJSON(message: _140.MsgSwapExactAmountOutResponse): unknown;
                fromPartial(object: {
                    tokenInAmount?: string;
                }): _140.MsgSwapExactAmountOutResponse;
            };
            MsgJoinSwapExternAmountIn: {
                encode(message: _140.MsgJoinSwapExternAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgJoinSwapExternAmountIn;
                fromJSON(object: any): _140.MsgJoinSwapExternAmountIn;
                toJSON(message: _140.MsgJoinSwapExternAmountIn): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    tokenIn?: {
                        denom?: string;
                        amount?: string;
                    };
                    shareOutMinAmount?: string;
                }): _140.MsgJoinSwapExternAmountIn;
            };
            MsgJoinSwapExternAmountInResponse: {
                encode(message: _140.MsgJoinSwapExternAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgJoinSwapExternAmountInResponse;
                fromJSON(object: any): _140.MsgJoinSwapExternAmountInResponse;
                toJSON(message: _140.MsgJoinSwapExternAmountInResponse): unknown;
                fromPartial(object: {
                    shareOutAmount?: string;
                }): _140.MsgJoinSwapExternAmountInResponse;
            };
            MsgJoinSwapShareAmountOut: {
                encode(message: _140.MsgJoinSwapShareAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgJoinSwapShareAmountOut;
                fromJSON(object: any): _140.MsgJoinSwapShareAmountOut;
                toJSON(message: _140.MsgJoinSwapShareAmountOut): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    tokenInDenom?: string;
                    shareOutAmount?: string;
                    tokenInMaxAmount?: string;
                }): _140.MsgJoinSwapShareAmountOut;
            };
            MsgJoinSwapShareAmountOutResponse: {
                encode(message: _140.MsgJoinSwapShareAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgJoinSwapShareAmountOutResponse;
                fromJSON(object: any): _140.MsgJoinSwapShareAmountOutResponse;
                toJSON(message: _140.MsgJoinSwapShareAmountOutResponse): unknown;
                fromPartial(object: {
                    tokenInAmount?: string;
                }): _140.MsgJoinSwapShareAmountOutResponse;
            };
            MsgExitSwapShareAmountIn: {
                encode(message: _140.MsgExitSwapShareAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgExitSwapShareAmountIn;
                fromJSON(object: any): _140.MsgExitSwapShareAmountIn;
                toJSON(message: _140.MsgExitSwapShareAmountIn): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    tokenOutDenom?: string;
                    shareInAmount?: string;
                    tokenOutMinAmount?: string;
                }): _140.MsgExitSwapShareAmountIn;
            };
            MsgExitSwapShareAmountInResponse: {
                encode(message: _140.MsgExitSwapShareAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgExitSwapShareAmountInResponse;
                fromJSON(object: any): _140.MsgExitSwapShareAmountInResponse;
                toJSON(message: _140.MsgExitSwapShareAmountInResponse): unknown;
                fromPartial(object: {
                    tokenOutAmount?: string;
                }): _140.MsgExitSwapShareAmountInResponse;
            };
            MsgExitSwapExternAmountOut: {
                encode(message: _140.MsgExitSwapExternAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgExitSwapExternAmountOut;
                fromJSON(object: any): _140.MsgExitSwapExternAmountOut;
                toJSON(message: _140.MsgExitSwapExternAmountOut): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    tokenOut?: {
                        denom?: string;
                        amount?: string;
                    };
                    shareInMaxAmount?: string;
                }): _140.MsgExitSwapExternAmountOut;
            };
            MsgExitSwapExternAmountOutResponse: {
                encode(message: _140.MsgExitSwapExternAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgExitSwapExternAmountOutResponse;
                fromJSON(object: any): _140.MsgExitSwapExternAmountOutResponse;
                toJSON(message: _140.MsgExitSwapExternAmountOutResponse): unknown;
                fromPartial(object: {
                    shareInAmount?: string;
                }): _140.MsgExitSwapExternAmountOutResponse;
            };
            QueryPoolRequest: {
                encode(message: _139.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryPoolRequest;
                fromJSON(object: any): _139.QueryPoolRequest;
                toJSON(message: _139.QueryPoolRequest): unknown;
                fromPartial(object: {
                    poolId?: any;
                }): _139.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _139.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryPoolResponse;
                fromJSON(object: any): _139.QueryPoolResponse;
                toJSON(message: _139.QueryPoolResponse): unknown;
                fromPartial(object: {
                    pool?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                }): _139.QueryPoolResponse;
            };
            QueryPoolsRequest: {
                encode(message: _139.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryPoolsRequest;
                fromJSON(object: any): _139.QueryPoolsRequest;
                toJSON(message: _139.QueryPoolsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _139.QueryPoolsRequest;
            };
            QueryPoolsResponse: {
                encode(message: _139.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryPoolsResponse;
                fromJSON(object: any): _139.QueryPoolsResponse;
                toJSON(message: _139.QueryPoolsResponse): unknown;
                fromPartial(object: {
                    pools?: {
                        type_url?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _139.QueryPoolsResponse;
            };
            QueryNumPoolsRequest: {
                encode(_: _139.QueryNumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryNumPoolsRequest;
                fromJSON(_: any): _139.QueryNumPoolsRequest;
                toJSON(_: _139.QueryNumPoolsRequest): unknown;
                fromPartial(_: {}): _139.QueryNumPoolsRequest;
            };
            QueryNumPoolsResponse: {
                encode(message: _139.QueryNumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryNumPoolsResponse;
                fromJSON(object: any): _139.QueryNumPoolsResponse;
                toJSON(message: _139.QueryNumPoolsResponse): unknown;
                fromPartial(object: {
                    numPools?: any;
                }): _139.QueryNumPoolsResponse;
            };
            QueryPoolParamsRequest: {
                encode(message: _139.QueryPoolParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryPoolParamsRequest;
                fromJSON(object: any): _139.QueryPoolParamsRequest;
                toJSON(message: _139.QueryPoolParamsRequest): unknown;
                fromPartial(object: {
                    poolId?: any;
                }): _139.QueryPoolParamsRequest;
            };
            QueryPoolParamsResponse: {
                encode(message: _139.QueryPoolParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryPoolParamsResponse;
                fromJSON(object: any): _139.QueryPoolParamsResponse;
                toJSON(message: _139.QueryPoolParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                }): _139.QueryPoolParamsResponse;
            };
            QueryTotalPoolLiquidityRequest: {
                encode(message: _139.QueryTotalPoolLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryTotalPoolLiquidityRequest;
                fromJSON(object: any): _139.QueryTotalPoolLiquidityRequest;
                toJSON(message: _139.QueryTotalPoolLiquidityRequest): unknown;
                fromPartial(object: {
                    poolId?: any;
                }): _139.QueryTotalPoolLiquidityRequest;
            };
            QueryTotalPoolLiquidityResponse: {
                encode(message: _139.QueryTotalPoolLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryTotalPoolLiquidityResponse;
                fromJSON(object: any): _139.QueryTotalPoolLiquidityResponse;
                toJSON(message: _139.QueryTotalPoolLiquidityResponse): unknown;
                fromPartial(object: {
                    liquidity?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _139.QueryTotalPoolLiquidityResponse;
            };
            QueryTotalSharesRequest: {
                encode(message: _139.QueryTotalSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryTotalSharesRequest;
                fromJSON(object: any): _139.QueryTotalSharesRequest;
                toJSON(message: _139.QueryTotalSharesRequest): unknown;
                fromPartial(object: {
                    poolId?: any;
                }): _139.QueryTotalSharesRequest;
            };
            QueryTotalSharesResponse: {
                encode(message: _139.QueryTotalSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryTotalSharesResponse;
                fromJSON(object: any): _139.QueryTotalSharesResponse;
                toJSON(message: _139.QueryTotalSharesResponse): unknown;
                fromPartial(object: {
                    totalShares?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _139.QueryTotalSharesResponse;
            };
            QuerySpotPriceRequest: {
                encode(message: _139.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QuerySpotPriceRequest;
                fromJSON(object: any): _139.QuerySpotPriceRequest;
                toJSON(message: _139.QuerySpotPriceRequest): unknown;
                fromPartial(object: {
                    poolId?: any;
                    base_asset_denom?: string;
                    quote_asset_denom?: string;
                }): _139.QuerySpotPriceRequest;
            };
            QuerySpotPriceResponse: {
                encode(message: _139.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QuerySpotPriceResponse;
                fromJSON(object: any): _139.QuerySpotPriceResponse;
                toJSON(message: _139.QuerySpotPriceResponse): unknown;
                fromPartial(object: {
                    spotPrice?: string;
                }): _139.QuerySpotPriceResponse;
            };
            QuerySwapExactAmountInRequest: {
                encode(message: _139.QuerySwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QuerySwapExactAmountInRequest;
                fromJSON(object: any): _139.QuerySwapExactAmountInRequest;
                toJSON(message: _139.QuerySwapExactAmountInRequest): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    tokenIn?: string;
                    routes?: {
                        poolId?: any;
                        tokenOutDenom?: string;
                    }[];
                }): _139.QuerySwapExactAmountInRequest;
            };
            QuerySwapExactAmountInResponse: {
                encode(message: _139.QuerySwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QuerySwapExactAmountInResponse;
                fromJSON(object: any): _139.QuerySwapExactAmountInResponse;
                toJSON(message: _139.QuerySwapExactAmountInResponse): unknown;
                fromPartial(object: {
                    tokenOutAmount?: string;
                }): _139.QuerySwapExactAmountInResponse;
            };
            QuerySwapExactAmountOutRequest: {
                encode(message: _139.QuerySwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QuerySwapExactAmountOutRequest;
                fromJSON(object: any): _139.QuerySwapExactAmountOutRequest;
                toJSON(message: _139.QuerySwapExactAmountOutRequest): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    routes?: {
                        poolId?: any;
                        tokenInDenom?: string;
                    }[];
                    tokenOut?: string;
                }): _139.QuerySwapExactAmountOutRequest;
            };
            QuerySwapExactAmountOutResponse: {
                encode(message: _139.QuerySwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QuerySwapExactAmountOutResponse;
                fromJSON(object: any): _139.QuerySwapExactAmountOutResponse;
                toJSON(message: _139.QuerySwapExactAmountOutResponse): unknown;
                fromPartial(object: {
                    tokenInAmount?: string;
                }): _139.QuerySwapExactAmountOutResponse;
            };
            QueryTotalLiquidityRequest: {
                encode(_: _139.QueryTotalLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryTotalLiquidityRequest;
                fromJSON(_: any): _139.QueryTotalLiquidityRequest;
                toJSON(_: _139.QueryTotalLiquidityRequest): unknown;
                fromPartial(_: {}): _139.QueryTotalLiquidityRequest;
            };
            QueryTotalLiquidityResponse: {
                encode(message: _139.QueryTotalLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryTotalLiquidityResponse;
                fromJSON(object: any): _139.QueryTotalLiquidityResponse;
                toJSON(message: _139.QueryTotalLiquidityResponse): unknown;
                fromPartial(object: {
                    liquidity?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _139.QueryTotalLiquidityResponse;
            };
            Params: {
                encode(message: _138.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.Params;
                fromJSON(object: any): _138.Params;
                toJSON(message: _138.Params): unknown;
                fromPartial(object: {
                    pool_creation_fee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _138.Params;
            };
            GenesisState: {
                encode(message: _138.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.GenesisState;
                fromJSON(object: any): _138.GenesisState;
                toJSON(message: _138.GenesisState): unknown;
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
                }): _138.GenesisState;
            };
            SmoothWeightChangeParams: {
                encode(message: _137.SmoothWeightChangeParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.SmoothWeightChangeParams;
                fromJSON(object: any): _137.SmoothWeightChangeParams;
                toJSON(message: _137.SmoothWeightChangeParams): unknown;
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
                }): _137.SmoothWeightChangeParams;
            };
            PoolParams: {
                encode(message: _137.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.PoolParams;
                fromJSON(object: any): _137.PoolParams;
                toJSON(message: _137.PoolParams): unknown;
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
                }): _137.PoolParams;
            };
            PoolAsset: {
                encode(message: _137.PoolAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.PoolAsset;
                fromJSON(object: any): _137.PoolAsset;
                toJSON(message: _137.PoolAsset): unknown;
                fromPartial(object: {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }): _137.PoolAsset;
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
                }): _137.Pool;
            };
        };
        namespace poolmodels {
            namespace balancer {
                const v1beta1: {
                    MsgClientImpl: typeof _309.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createBalancerPool(value: _141.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createBalancerPool(value: _141.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _141.MsgCreateBalancerPool;
                            };
                        };
                        toJSON: {
                            createBalancerPool(value: _141.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            createBalancerPool(value: any): {
                                typeUrl: string;
                                value: _141.MsgCreateBalancerPool;
                            };
                        };
                        fromPartial: {
                            createBalancerPool(value: _141.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _141.MsgCreateBalancerPool;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
                            aminoType: string;
                            toAmino: ({ sender, poolParams, poolAssets, future_pool_governor }: _141.MsgCreateBalancerPool) => {
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
                            }) => _141.MsgCreateBalancerPool;
                        };
                    };
                    MsgCreateBalancerPool: {
                        encode(message: _141.MsgCreateBalancerPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.MsgCreateBalancerPool;
                        fromJSON(object: any): _141.MsgCreateBalancerPool;
                        toJSON(message: _141.MsgCreateBalancerPool): unknown;
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
                        }): _141.MsgCreateBalancerPool;
                    };
                    MsgCreateBalancerPoolResponse: {
                        encode(message: _141.MsgCreateBalancerPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.MsgCreateBalancerPoolResponse;
                        fromJSON(object: any): _141.MsgCreateBalancerPoolResponse;
                        toJSON(message: _141.MsgCreateBalancerPoolResponse): unknown;
                        fromPartial(object: {
                            pool_id?: any;
                        }): _141.MsgCreateBalancerPoolResponse;
                    };
                };
            }
            namespace stableswap {
                const v1beta1: {
                    MsgClientImpl: typeof _310.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createStableswapPool(value: _143.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            stableSwapAdjustScalingFactors(value: _143.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createStableswapPool(value: _143.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _143.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _143.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _143.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        toJSON: {
                            createStableswapPool(value: _143.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: unknown;
                            };
                            stableSwapAdjustScalingFactors(value: _143.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            createStableswapPool(value: any): {
                                typeUrl: string;
                                value: _143.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: any): {
                                typeUrl: string;
                                value: _143.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        fromPartial: {
                            createStableswapPool(value: _143.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _143.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _143.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _143.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
                            aminoType: string;
                            toAmino: ({ sender, poolParams, initial_pool_liquidity, future_pool_governor }: _143.MsgCreateStableswapPool) => {
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
                            }) => _143.MsgCreateStableswapPool;
                        };
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
                            aminoType: string;
                            toAmino: ({ sender, pool_id, scaling_factors }: _143.MsgStableSwapAdjustScalingFactors) => {
                                sender: string;
                                pool_id: string;
                                scaling_factors: Long[];
                            };
                            fromAmino: ({ sender, pool_id, scaling_factors }: {
                                sender: string;
                                pool_id: string;
                                scaling_factors: Long[];
                            }) => _143.MsgStableSwapAdjustScalingFactors;
                        };
                    };
                    MsgCreateStableswapPool: {
                        encode(message: _143.MsgCreateStableswapPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgCreateStableswapPool;
                        fromJSON(object: any): _143.MsgCreateStableswapPool;
                        toJSON(message: _143.MsgCreateStableswapPool): unknown;
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
                        }): _143.MsgCreateStableswapPool;
                    };
                    MsgCreateStableswapPoolResponse: {
                        encode(message: _143.MsgCreateStableswapPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgCreateStableswapPoolResponse;
                        fromJSON(object: any): _143.MsgCreateStableswapPoolResponse;
                        toJSON(message: _143.MsgCreateStableswapPoolResponse): unknown;
                        fromPartial(object: {
                            pool_id?: any;
                        }): _143.MsgCreateStableswapPoolResponse;
                    };
                    MsgStableSwapAdjustScalingFactors: {
                        encode(message: _143.MsgStableSwapAdjustScalingFactors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgStableSwapAdjustScalingFactors;
                        fromJSON(object: any): _143.MsgStableSwapAdjustScalingFactors;
                        toJSON(message: _143.MsgStableSwapAdjustScalingFactors): unknown;
                        fromPartial(object: {
                            sender?: string;
                            pool_id?: any;
                            scaling_factors?: any[];
                        }): _143.MsgStableSwapAdjustScalingFactors;
                    };
                    MsgStableSwapAdjustScalingFactorsResponse: {
                        encode(_: _143.MsgStableSwapAdjustScalingFactorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgStableSwapAdjustScalingFactorsResponse;
                        fromJSON(_: any): _143.MsgStableSwapAdjustScalingFactorsResponse;
                        toJSON(_: _143.MsgStableSwapAdjustScalingFactorsResponse): unknown;
                        fromPartial(_: {}): _143.MsgStableSwapAdjustScalingFactorsResponse;
                    };
                    PoolParams: {
                        encode(message: _142.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.PoolParams;
                        fromJSON(object: any): _142.PoolParams;
                        toJSON(message: _142.PoolParams): unknown;
                        fromPartial(object: {
                            swapFee?: string;
                            exitFee?: string;
                        }): _142.PoolParams;
                    };
                    Pool: {
                        encode(message: _142.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.Pool;
                        fromJSON(object: any): _142.Pool;
                        toJSON(message: _142.Pool): unknown;
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
                        }): _142.Pool;
                    };
                };
            }
        }
    }
    const incentives: {
        MsgClientImpl: typeof _312.MsgClientImpl;
        QueryClientImpl: typeof _302.QueryClientImpl;
        LCDQueryClient: typeof _293.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                createGauge(value: _148.MsgCreateGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addToGauge(value: _148.MsgAddToGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createGauge(value: _148.MsgCreateGauge): {
                    typeUrl: string;
                    value: _148.MsgCreateGauge;
                };
                addToGauge(value: _148.MsgAddToGauge): {
                    typeUrl: string;
                    value: _148.MsgAddToGauge;
                };
            };
            toJSON: {
                createGauge(value: _148.MsgCreateGauge): {
                    typeUrl: string;
                    value: unknown;
                };
                addToGauge(value: _148.MsgAddToGauge): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                createGauge(value: any): {
                    typeUrl: string;
                    value: _148.MsgCreateGauge;
                };
                addToGauge(value: any): {
                    typeUrl: string;
                    value: _148.MsgAddToGauge;
                };
            };
            fromPartial: {
                createGauge(value: _148.MsgCreateGauge): {
                    typeUrl: string;
                    value: _148.MsgCreateGauge;
                };
                addToGauge(value: _148.MsgAddToGauge): {
                    typeUrl: string;
                    value: _148.MsgAddToGauge;
                };
            };
        };
        AminoConverter: {
            "/osmosis.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: ({ is_perpetual, owner, distribute_to, coins, start_time, num_epochs_paid_over }: _148.MsgCreateGauge) => {
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
                }) => _148.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: ({ owner, gauge_id, rewards }: _148.MsgAddToGauge) => {
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
                }) => _148.MsgAddToGauge;
            };
        };
        MsgCreateGauge: {
            encode(message: _148.MsgCreateGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgCreateGauge;
            fromJSON(object: any): _148.MsgCreateGauge;
            toJSON(message: _148.MsgCreateGauge): unknown;
            fromPartial(object: {
                is_perpetual?: boolean;
                owner?: string;
                distribute_to?: {
                    lock_query_type?: _150.LockQueryType;
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
            }): _148.MsgCreateGauge;
        };
        MsgCreateGaugeResponse: {
            encode(_: _148.MsgCreateGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgCreateGaugeResponse;
            fromJSON(_: any): _148.MsgCreateGaugeResponse;
            toJSON(_: _148.MsgCreateGaugeResponse): unknown;
            fromPartial(_: {}): _148.MsgCreateGaugeResponse;
        };
        MsgAddToGauge: {
            encode(message: _148.MsgAddToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgAddToGauge;
            fromJSON(object: any): _148.MsgAddToGauge;
            toJSON(message: _148.MsgAddToGauge): unknown;
            fromPartial(object: {
                owner?: string;
                gauge_id?: any;
                rewards?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _148.MsgAddToGauge;
        };
        MsgAddToGaugeResponse: {
            encode(_: _148.MsgAddToGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgAddToGaugeResponse;
            fromJSON(_: any): _148.MsgAddToGaugeResponse;
            toJSON(_: _148.MsgAddToGaugeResponse): unknown;
            fromPartial(_: {}): _148.MsgAddToGaugeResponse;
        };
        ModuleToDistributeCoinsRequest: {
            encode(_: _147.ModuleToDistributeCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.ModuleToDistributeCoinsRequest;
            fromJSON(_: any): _147.ModuleToDistributeCoinsRequest;
            toJSON(_: _147.ModuleToDistributeCoinsRequest): unknown;
            fromPartial(_: {}): _147.ModuleToDistributeCoinsRequest;
        };
        ModuleToDistributeCoinsResponse: {
            encode(message: _147.ModuleToDistributeCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.ModuleToDistributeCoinsResponse;
            fromJSON(object: any): _147.ModuleToDistributeCoinsResponse;
            toJSON(message: _147.ModuleToDistributeCoinsResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _147.ModuleToDistributeCoinsResponse;
        };
        ModuleDistributedCoinsRequest: {
            encode(_: _147.ModuleDistributedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.ModuleDistributedCoinsRequest;
            fromJSON(_: any): _147.ModuleDistributedCoinsRequest;
            toJSON(_: _147.ModuleDistributedCoinsRequest): unknown;
            fromPartial(_: {}): _147.ModuleDistributedCoinsRequest;
        };
        ModuleDistributedCoinsResponse: {
            encode(message: _147.ModuleDistributedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.ModuleDistributedCoinsResponse;
            fromJSON(object: any): _147.ModuleDistributedCoinsResponse;
            toJSON(message: _147.ModuleDistributedCoinsResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _147.ModuleDistributedCoinsResponse;
        };
        GaugeByIDRequest: {
            encode(message: _147.GaugeByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.GaugeByIDRequest;
            fromJSON(object: any): _147.GaugeByIDRequest;
            toJSON(message: _147.GaugeByIDRequest): unknown;
            fromPartial(object: {
                id?: any;
            }): _147.GaugeByIDRequest;
        };
        GaugeByIDResponse: {
            encode(message: _147.GaugeByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.GaugeByIDResponse;
            fromJSON(object: any): _147.GaugeByIDResponse;
            toJSON(message: _147.GaugeByIDResponse): unknown;
            fromPartial(object: {
                gauge?: {
                    id?: any;
                    is_perpetual?: boolean;
                    distribute_to?: {
                        lock_query_type?: _150.LockQueryType;
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
            }): _147.GaugeByIDResponse;
        };
        GaugesRequest: {
            encode(message: _147.GaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.GaugesRequest;
            fromJSON(object: any): _147.GaugesRequest;
            toJSON(message: _147.GaugesRequest): unknown;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    count_total?: boolean;
                    reverse?: boolean;
                };
            }): _147.GaugesRequest;
        };
        GaugesResponse: {
            encode(message: _147.GaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.GaugesResponse;
            fromJSON(object: any): _147.GaugesResponse;
            toJSON(message: _147.GaugesResponse): unknown;
            fromPartial(object: {
                data?: {
                    id?: any;
                    is_perpetual?: boolean;
                    distribute_to?: {
                        lock_query_type?: _150.LockQueryType;
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
            }): _147.GaugesResponse;
        };
        ActiveGaugesRequest: {
            encode(message: _147.ActiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.ActiveGaugesRequest;
            fromJSON(object: any): _147.ActiveGaugesRequest;
            toJSON(message: _147.ActiveGaugesRequest): unknown;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    count_total?: boolean;
                    reverse?: boolean;
                };
            }): _147.ActiveGaugesRequest;
        };
        ActiveGaugesResponse: {
            encode(message: _147.ActiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.ActiveGaugesResponse;
            fromJSON(object: any): _147.ActiveGaugesResponse;
            toJSON(message: _147.ActiveGaugesResponse): unknown;
            fromPartial(object: {
                data?: {
                    id?: any;
                    is_perpetual?: boolean;
                    distribute_to?: {
                        lock_query_type?: _150.LockQueryType;
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
            }): _147.ActiveGaugesResponse;
        };
        ActiveGaugesPerDenomRequest: {
            encode(message: _147.ActiveGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.ActiveGaugesPerDenomRequest;
            fromJSON(object: any): _147.ActiveGaugesPerDenomRequest;
            toJSON(message: _147.ActiveGaugesPerDenomRequest): unknown;
            fromPartial(object: {
                denom?: string;
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    count_total?: boolean;
                    reverse?: boolean;
                };
            }): _147.ActiveGaugesPerDenomRequest;
        };
        ActiveGaugesPerDenomResponse: {
            encode(message: _147.ActiveGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.ActiveGaugesPerDenomResponse;
            fromJSON(object: any): _147.ActiveGaugesPerDenomResponse;
            toJSON(message: _147.ActiveGaugesPerDenomResponse): unknown;
            fromPartial(object: {
                data?: {
                    id?: any;
                    is_perpetual?: boolean;
                    distribute_to?: {
                        lock_query_type?: _150.LockQueryType;
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
            }): _147.ActiveGaugesPerDenomResponse;
        };
        UpcomingGaugesRequest: {
            encode(message: _147.UpcomingGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.UpcomingGaugesRequest;
            fromJSON(object: any): _147.UpcomingGaugesRequest;
            toJSON(message: _147.UpcomingGaugesRequest): unknown;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    count_total?: boolean;
                    reverse?: boolean;
                };
            }): _147.UpcomingGaugesRequest;
        };
        UpcomingGaugesResponse: {
            encode(message: _147.UpcomingGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.UpcomingGaugesResponse;
            fromJSON(object: any): _147.UpcomingGaugesResponse;
            toJSON(message: _147.UpcomingGaugesResponse): unknown;
            fromPartial(object: {
                data?: {
                    id?: any;
                    is_perpetual?: boolean;
                    distribute_to?: {
                        lock_query_type?: _150.LockQueryType;
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
            }): _147.UpcomingGaugesResponse;
        };
        UpcomingGaugesPerDenomRequest: {
            encode(message: _147.UpcomingGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.UpcomingGaugesPerDenomRequest;
            fromJSON(object: any): _147.UpcomingGaugesPerDenomRequest;
            toJSON(message: _147.UpcomingGaugesPerDenomRequest): unknown;
            fromPartial(object: {
                denom?: string;
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    count_total?: boolean;
                    reverse?: boolean;
                };
            }): _147.UpcomingGaugesPerDenomRequest;
        };
        UpcomingGaugesPerDenomResponse: {
            encode(message: _147.UpcomingGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.UpcomingGaugesPerDenomResponse;
            fromJSON(object: any): _147.UpcomingGaugesPerDenomResponse;
            toJSON(message: _147.UpcomingGaugesPerDenomResponse): unknown;
            fromPartial(object: {
                upcoming_gauges?: {
                    id?: any;
                    is_perpetual?: boolean;
                    distribute_to?: {
                        lock_query_type?: _150.LockQueryType;
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
            }): _147.UpcomingGaugesPerDenomResponse;
        };
        RewardsEstRequest: {
            encode(message: _147.RewardsEstRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.RewardsEstRequest;
            fromJSON(object: any): _147.RewardsEstRequest;
            toJSON(message: _147.RewardsEstRequest): unknown;
            fromPartial(object: {
                owner?: string;
                lock_ids?: any[];
                end_epoch?: any;
            }): _147.RewardsEstRequest;
        };
        RewardsEstResponse: {
            encode(message: _147.RewardsEstResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.RewardsEstResponse;
            fromJSON(object: any): _147.RewardsEstResponse;
            toJSON(message: _147.RewardsEstResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _147.RewardsEstResponse;
        };
        QueryLockableDurationsRequest: {
            encode(_: _147.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryLockableDurationsRequest;
            fromJSON(_: any): _147.QueryLockableDurationsRequest;
            toJSON(_: _147.QueryLockableDurationsRequest): unknown;
            fromPartial(_: {}): _147.QueryLockableDurationsRequest;
        };
        QueryLockableDurationsResponse: {
            encode(message: _147.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryLockableDurationsResponse;
            fromJSON(object: any): _147.QueryLockableDurationsResponse;
            toJSON(message: _147.QueryLockableDurationsResponse): unknown;
            fromPartial(object: {
                lockable_durations?: {
                    seconds?: any;
                    nanos?: number;
                }[];
            }): _147.QueryLockableDurationsResponse;
        };
        Params: {
            encode(message: _146.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.Params;
            fromJSON(object: any): _146.Params;
            toJSON(message: _146.Params): unknown;
            fromPartial(object: {
                distr_epoch_identifier?: string;
            }): _146.Params;
        };
        GenesisState: {
            encode(message: _145.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.GenesisState;
            fromJSON(object: any): _145.GenesisState;
            toJSON(message: _145.GenesisState): unknown;
            fromPartial(object: {
                params?: {
                    distr_epoch_identifier?: string;
                };
                gauges?: {
                    id?: any;
                    is_perpetual?: boolean;
                    distribute_to?: {
                        lock_query_type?: _150.LockQueryType;
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
            }): _145.GenesisState;
        };
        Gauge: {
            encode(message: _144.Gauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Gauge;
            fromJSON(object: any): _144.Gauge;
            toJSON(message: _144.Gauge): unknown;
            fromPartial(object: {
                id?: any;
                is_perpetual?: boolean;
                distribute_to?: {
                    lock_query_type?: _150.LockQueryType;
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
            }): _144.Gauge;
        };
        LockableDurationsInfo: {
            encode(message: _144.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.LockableDurationsInfo;
            fromJSON(object: any): _144.LockableDurationsInfo;
            toJSON(message: _144.LockableDurationsInfo): unknown;
            fromPartial(object: {
                lockable_durations?: {
                    seconds?: any;
                    nanos?: number;
                }[];
            }): _144.LockableDurationsInfo;
        };
    };
    const lockup: {
        MsgClientImpl: typeof _313.MsgClientImpl;
        QueryClientImpl: typeof _303.QueryClientImpl;
        LCDQueryClient: typeof _294.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                lockTokens(value: _152.MsgLockTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlockingAll(value: _152.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlocking(value: _152.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                extendLockup(value: _152.MsgExtendLockup): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                lockTokens(value: _152.MsgLockTokens): {
                    typeUrl: string;
                    value: _152.MsgLockTokens;
                };
                beginUnlockingAll(value: _152.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _152.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _152.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _152.MsgBeginUnlocking;
                };
                extendLockup(value: _152.MsgExtendLockup): {
                    typeUrl: string;
                    value: _152.MsgExtendLockup;
                };
            };
            toJSON: {
                lockTokens(value: _152.MsgLockTokens): {
                    typeUrl: string;
                    value: unknown;
                };
                beginUnlockingAll(value: _152.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: unknown;
                };
                beginUnlocking(value: _152.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: unknown;
                };
                extendLockup(value: _152.MsgExtendLockup): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                lockTokens(value: any): {
                    typeUrl: string;
                    value: _152.MsgLockTokens;
                };
                beginUnlockingAll(value: any): {
                    typeUrl: string;
                    value: _152.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: any): {
                    typeUrl: string;
                    value: _152.MsgBeginUnlocking;
                };
                extendLockup(value: any): {
                    typeUrl: string;
                    value: _152.MsgExtendLockup;
                };
            };
            fromPartial: {
                lockTokens(value: _152.MsgLockTokens): {
                    typeUrl: string;
                    value: _152.MsgLockTokens;
                };
                beginUnlockingAll(value: _152.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _152.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _152.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _152.MsgBeginUnlocking;
                };
                extendLockup(value: _152.MsgExtendLockup): {
                    typeUrl: string;
                    value: _152.MsgExtendLockup;
                };
            };
        };
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: ({ owner, duration, coins }: _152.MsgLockTokens) => {
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
                }) => _152.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: ({ owner }: _152.MsgBeginUnlockingAll) => {
                    owner: string;
                };
                fromAmino: ({ owner }: {
                    owner: string;
                }) => _152.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: ({ owner, ID, coins }: _152.MsgBeginUnlocking) => {
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
                }) => _152.MsgBeginUnlocking;
            };
            "/osmosis.lockup.MsgExtendLockup": {
                aminoType: string;
                toAmino: ({ owner, ID, duration }: _152.MsgExtendLockup) => {
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
                }) => _152.MsgExtendLockup;
            };
        };
        MsgLockTokens: {
            encode(message: _152.MsgLockTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgLockTokens;
            fromJSON(object: any): _152.MsgLockTokens;
            toJSON(message: _152.MsgLockTokens): unknown;
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
            }): _152.MsgLockTokens;
        };
        MsgLockTokensResponse: {
            encode(message: _152.MsgLockTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgLockTokensResponse;
            fromJSON(object: any): _152.MsgLockTokensResponse;
            toJSON(message: _152.MsgLockTokensResponse): unknown;
            fromPartial(object: {
                ID?: any;
            }): _152.MsgLockTokensResponse;
        };
        MsgBeginUnlockingAll: {
            encode(message: _152.MsgBeginUnlockingAll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgBeginUnlockingAll;
            fromJSON(object: any): _152.MsgBeginUnlockingAll;
            toJSON(message: _152.MsgBeginUnlockingAll): unknown;
            fromPartial(object: {
                owner?: string;
            }): _152.MsgBeginUnlockingAll;
        };
        MsgBeginUnlockingAllResponse: {
            encode(message: _152.MsgBeginUnlockingAllResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgBeginUnlockingAllResponse;
            fromJSON(object: any): _152.MsgBeginUnlockingAllResponse;
            toJSON(message: _152.MsgBeginUnlockingAllResponse): unknown;
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
            }): _152.MsgBeginUnlockingAllResponse;
        };
        MsgBeginUnlocking: {
            encode(message: _152.MsgBeginUnlocking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgBeginUnlocking;
            fromJSON(object: any): _152.MsgBeginUnlocking;
            toJSON(message: _152.MsgBeginUnlocking): unknown;
            fromPartial(object: {
                owner?: string;
                ID?: any;
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _152.MsgBeginUnlocking;
        };
        MsgBeginUnlockingResponse: {
            encode(message: _152.MsgBeginUnlockingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgBeginUnlockingResponse;
            fromJSON(object: any): _152.MsgBeginUnlockingResponse;
            toJSON(message: _152.MsgBeginUnlockingResponse): unknown;
            fromPartial(object: {
                success?: boolean;
            }): _152.MsgBeginUnlockingResponse;
        };
        MsgExtendLockup: {
            encode(message: _152.MsgExtendLockup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgExtendLockup;
            fromJSON(object: any): _152.MsgExtendLockup;
            toJSON(message: _152.MsgExtendLockup): unknown;
            fromPartial(object: {
                owner?: string;
                ID?: any;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _152.MsgExtendLockup;
        };
        MsgExtendLockupResponse: {
            encode(message: _152.MsgExtendLockupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgExtendLockupResponse;
            fromJSON(object: any): _152.MsgExtendLockupResponse;
            toJSON(message: _152.MsgExtendLockupResponse): unknown;
            fromPartial(object: {
                success?: boolean;
            }): _152.MsgExtendLockupResponse;
        };
        ModuleBalanceRequest: {
            encode(_: _151.ModuleBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.ModuleBalanceRequest;
            fromJSON(_: any): _151.ModuleBalanceRequest;
            toJSON(_: _151.ModuleBalanceRequest): unknown;
            fromPartial(_: {}): _151.ModuleBalanceRequest;
        };
        ModuleBalanceResponse: {
            encode(message: _151.ModuleBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.ModuleBalanceResponse;
            fromJSON(object: any): _151.ModuleBalanceResponse;
            toJSON(message: _151.ModuleBalanceResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _151.ModuleBalanceResponse;
        };
        ModuleLockedAmountRequest: {
            encode(_: _151.ModuleLockedAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.ModuleLockedAmountRequest;
            fromJSON(_: any): _151.ModuleLockedAmountRequest;
            toJSON(_: _151.ModuleLockedAmountRequest): unknown;
            fromPartial(_: {}): _151.ModuleLockedAmountRequest;
        };
        ModuleLockedAmountResponse: {
            encode(message: _151.ModuleLockedAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.ModuleLockedAmountResponse;
            fromJSON(object: any): _151.ModuleLockedAmountResponse;
            toJSON(message: _151.ModuleLockedAmountResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _151.ModuleLockedAmountResponse;
        };
        AccountUnlockableCoinsRequest: {
            encode(message: _151.AccountUnlockableCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.AccountUnlockableCoinsRequest;
            fromJSON(object: any): _151.AccountUnlockableCoinsRequest;
            toJSON(message: _151.AccountUnlockableCoinsRequest): unknown;
            fromPartial(object: {
                owner?: string;
            }): _151.AccountUnlockableCoinsRequest;
        };
        AccountUnlockableCoinsResponse: {
            encode(message: _151.AccountUnlockableCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.AccountUnlockableCoinsResponse;
            fromJSON(object: any): _151.AccountUnlockableCoinsResponse;
            toJSON(message: _151.AccountUnlockableCoinsResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _151.AccountUnlockableCoinsResponse;
        };
        AccountUnlockingCoinsRequest: {
            encode(message: _151.AccountUnlockingCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.AccountUnlockingCoinsRequest;
            fromJSON(object: any): _151.AccountUnlockingCoinsRequest;
            toJSON(message: _151.AccountUnlockingCoinsRequest): unknown;
            fromPartial(object: {
                owner?: string;
            }): _151.AccountUnlockingCoinsRequest;
        };
        AccountUnlockingCoinsResponse: {
            encode(message: _151.AccountUnlockingCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.AccountUnlockingCoinsResponse;
            fromJSON(object: any): _151.AccountUnlockingCoinsResponse;
            toJSON(message: _151.AccountUnlockingCoinsResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _151.AccountUnlockingCoinsResponse;
        };
        AccountLockedCoinsRequest: {
            encode(message: _151.AccountLockedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.AccountLockedCoinsRequest;
            fromJSON(object: any): _151.AccountLockedCoinsRequest;
            toJSON(message: _151.AccountLockedCoinsRequest): unknown;
            fromPartial(object: {
                owner?: string;
            }): _151.AccountLockedCoinsRequest;
        };
        AccountLockedCoinsResponse: {
            encode(message: _151.AccountLockedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.AccountLockedCoinsResponse;
            fromJSON(object: any): _151.AccountLockedCoinsResponse;
            toJSON(message: _151.AccountLockedCoinsResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _151.AccountLockedCoinsResponse;
        };
        AccountLockedPastTimeRequest: {
            encode(message: _151.AccountLockedPastTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.AccountLockedPastTimeRequest;
            fromJSON(object: any): _151.AccountLockedPastTimeRequest;
            toJSON(message: _151.AccountLockedPastTimeRequest): unknown;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
            }): _151.AccountLockedPastTimeRequest;
        };
        AccountLockedPastTimeResponse: {
            encode(message: _151.AccountLockedPastTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.AccountLockedPastTimeResponse;
            fromJSON(object: any): _151.AccountLockedPastTimeResponse;
            toJSON(message: _151.AccountLockedPastTimeResponse): unknown;
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
            }): _151.AccountLockedPastTimeResponse;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            encode(message: _151.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromJSON(object: any): _151.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toJSON(message: _151.AccountLockedPastTimeNotUnlockingOnlyRequest): unknown;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
            }): _151.AccountLockedPastTimeNotUnlockingOnlyRequest;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            encode(message: _151.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromJSON(object: any): _151.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toJSON(message: _151.AccountLockedPastTimeNotUnlockingOnlyResponse): unknown;
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
            }): _151.AccountLockedPastTimeNotUnlockingOnlyResponse;
        };
        AccountUnlockedBeforeTimeRequest: {
            encode(message: _151.AccountUnlockedBeforeTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.AccountUnlockedBeforeTimeRequest;
            fromJSON(object: any): _151.AccountUnlockedBeforeTimeRequest;
            toJSON(message: _151.AccountUnlockedBeforeTimeRequest): unknown;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
            }): _151.AccountUnlockedBeforeTimeRequest;
        };
        AccountUnlockedBeforeTimeResponse: {
            encode(message: _151.AccountUnlockedBeforeTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.AccountUnlockedBeforeTimeResponse;
            fromJSON(object: any): _151.AccountUnlockedBeforeTimeResponse;
            toJSON(message: _151.AccountUnlockedBeforeTimeResponse): unknown;
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
            }): _151.AccountUnlockedBeforeTimeResponse;
        };
        AccountLockedPastTimeDenomRequest: {
            encode(message: _151.AccountLockedPastTimeDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.AccountLockedPastTimeDenomRequest;
            fromJSON(object: any): _151.AccountLockedPastTimeDenomRequest;
            toJSON(message: _151.AccountLockedPastTimeDenomRequest): unknown;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
                denom?: string;
            }): _151.AccountLockedPastTimeDenomRequest;
        };
        AccountLockedPastTimeDenomResponse: {
            encode(message: _151.AccountLockedPastTimeDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.AccountLockedPastTimeDenomResponse;
            fromJSON(object: any): _151.AccountLockedPastTimeDenomResponse;
            toJSON(message: _151.AccountLockedPastTimeDenomResponse): unknown;
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
            }): _151.AccountLockedPastTimeDenomResponse;
        };
        LockedDenomRequest: {
            encode(message: _151.LockedDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.LockedDenomRequest;
            fromJSON(object: any): _151.LockedDenomRequest;
            toJSON(message: _151.LockedDenomRequest): unknown;
            fromPartial(object: {
                denom?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _151.LockedDenomRequest;
        };
        LockedDenomResponse: {
            encode(message: _151.LockedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.LockedDenomResponse;
            fromJSON(object: any): _151.LockedDenomResponse;
            toJSON(message: _151.LockedDenomResponse): unknown;
            fromPartial(object: {
                amount?: string;
            }): _151.LockedDenomResponse;
        };
        LockedRequest: {
            encode(message: _151.LockedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.LockedRequest;
            fromJSON(object: any): _151.LockedRequest;
            toJSON(message: _151.LockedRequest): unknown;
            fromPartial(object: {
                lock_id?: any;
            }): _151.LockedRequest;
        };
        LockedResponse: {
            encode(message: _151.LockedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.LockedResponse;
            fromJSON(object: any): _151.LockedResponse;
            toJSON(message: _151.LockedResponse): unknown;
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
            }): _151.LockedResponse;
        };
        SyntheticLockupsByLockupIDRequest: {
            encode(message: _151.SyntheticLockupsByLockupIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.SyntheticLockupsByLockupIDRequest;
            fromJSON(object: any): _151.SyntheticLockupsByLockupIDRequest;
            toJSON(message: _151.SyntheticLockupsByLockupIDRequest): unknown;
            fromPartial(object: {
                lock_id?: any;
            }): _151.SyntheticLockupsByLockupIDRequest;
        };
        SyntheticLockupsByLockupIDResponse: {
            encode(message: _151.SyntheticLockupsByLockupIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.SyntheticLockupsByLockupIDResponse;
            fromJSON(object: any): _151.SyntheticLockupsByLockupIDResponse;
            toJSON(message: _151.SyntheticLockupsByLockupIDResponse): unknown;
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
            }): _151.SyntheticLockupsByLockupIDResponse;
        };
        AccountLockedLongerDurationRequest: {
            encode(message: _151.AccountLockedLongerDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.AccountLockedLongerDurationRequest;
            fromJSON(object: any): _151.AccountLockedLongerDurationRequest;
            toJSON(message: _151.AccountLockedLongerDurationRequest): unknown;
            fromPartial(object: {
                owner?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _151.AccountLockedLongerDurationRequest;
        };
        AccountLockedLongerDurationResponse: {
            encode(message: _151.AccountLockedLongerDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.AccountLockedLongerDurationResponse;
            fromJSON(object: any): _151.AccountLockedLongerDurationResponse;
            toJSON(message: _151.AccountLockedLongerDurationResponse): unknown;
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
            }): _151.AccountLockedLongerDurationResponse;
        };
        AccountLockedDurationRequest: {
            encode(message: _151.AccountLockedDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.AccountLockedDurationRequest;
            fromJSON(object: any): _151.AccountLockedDurationRequest;
            toJSON(message: _151.AccountLockedDurationRequest): unknown;
            fromPartial(object: {
                owner?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _151.AccountLockedDurationRequest;
        };
        AccountLockedDurationResponse: {
            encode(message: _151.AccountLockedDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.AccountLockedDurationResponse;
            fromJSON(object: any): _151.AccountLockedDurationResponse;
            toJSON(message: _151.AccountLockedDurationResponse): unknown;
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
            }): _151.AccountLockedDurationResponse;
        };
        AccountLockedLongerDurationNotUnlockingOnlyRequest: {
            encode(message: _151.AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromJSON(object: any): _151.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toJSON(message: _151.AccountLockedLongerDurationNotUnlockingOnlyRequest): unknown;
            fromPartial(object: {
                owner?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _151.AccountLockedLongerDurationNotUnlockingOnlyRequest;
        };
        AccountLockedLongerDurationNotUnlockingOnlyResponse: {
            encode(message: _151.AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromJSON(object: any): _151.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toJSON(message: _151.AccountLockedLongerDurationNotUnlockingOnlyResponse): unknown;
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
            }): _151.AccountLockedLongerDurationNotUnlockingOnlyResponse;
        };
        AccountLockedLongerDurationDenomRequest: {
            encode(message: _151.AccountLockedLongerDurationDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.AccountLockedLongerDurationDenomRequest;
            fromJSON(object: any): _151.AccountLockedLongerDurationDenomRequest;
            toJSON(message: _151.AccountLockedLongerDurationDenomRequest): unknown;
            fromPartial(object: {
                owner?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
                denom?: string;
            }): _151.AccountLockedLongerDurationDenomRequest;
        };
        AccountLockedLongerDurationDenomResponse: {
            encode(message: _151.AccountLockedLongerDurationDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.AccountLockedLongerDurationDenomResponse;
            fromJSON(object: any): _151.AccountLockedLongerDurationDenomResponse;
            toJSON(message: _151.AccountLockedLongerDurationDenomResponse): unknown;
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
            }): _151.AccountLockedLongerDurationDenomResponse;
        };
        lockQueryTypeFromJSON(object: any): _150.LockQueryType;
        lockQueryTypeToJSON(object: _150.LockQueryType): string;
        LockQueryType: typeof _150.LockQueryType;
        PeriodLock: {
            encode(message: _150.PeriodLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.PeriodLock;
            fromJSON(object: any): _150.PeriodLock;
            toJSON(message: _150.PeriodLock): unknown;
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
            }): _150.PeriodLock;
        };
        QueryCondition: {
            encode(message: _150.QueryCondition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryCondition;
            fromJSON(object: any): _150.QueryCondition;
            toJSON(message: _150.QueryCondition): unknown;
            fromPartial(object: {
                lock_query_type?: _150.LockQueryType;
                denom?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
                timestamp?: Date;
            }): _150.QueryCondition;
        };
        SyntheticLock: {
            encode(message: _150.SyntheticLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.SyntheticLock;
            fromJSON(object: any): _150.SyntheticLock;
            toJSON(message: _150.SyntheticLock): unknown;
            fromPartial(object: {
                underlying_lock_id?: any;
                synth_denom?: string;
                end_time?: Date;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _150.SyntheticLock;
        };
        GenesisState: {
            encode(message: _149.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.GenesisState;
            fromJSON(object: any): _149.GenesisState;
            toJSON(message: _149.GenesisState): unknown;
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
            }): _149.GenesisState;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _304.QueryClientImpl;
            LCDQueryClient: typeof _295.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _155.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QueryParamsRequest;
                fromJSON(_: any): _155.QueryParamsRequest;
                toJSON(_: _155.QueryParamsRequest): unknown;
                fromPartial(_: {}): _155.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _155.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QueryParamsResponse;
                fromJSON(object: any): _155.QueryParamsResponse;
                toJSON(message: _155.QueryParamsResponse): unknown;
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
                }): _155.QueryParamsResponse;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _155.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QueryEpochProvisionsRequest;
                fromJSON(_: any): _155.QueryEpochProvisionsRequest;
                toJSON(_: _155.QueryEpochProvisionsRequest): unknown;
                fromPartial(_: {}): _155.QueryEpochProvisionsRequest;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _155.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QueryEpochProvisionsResponse;
                fromJSON(object: any): _155.QueryEpochProvisionsResponse;
                toJSON(message: _155.QueryEpochProvisionsResponse): unknown;
                fromPartial(object: {
                    epoch_provisions?: Uint8Array;
                }): _155.QueryEpochProvisionsResponse;
            };
            Minter: {
                encode(message: _154.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.Minter;
                fromJSON(object: any): _154.Minter;
                toJSON(message: _154.Minter): unknown;
                fromPartial(object: {
                    epoch_provisions?: string;
                }): _154.Minter;
            };
            WeightedAddress: {
                encode(message: _154.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.WeightedAddress;
                fromJSON(object: any): _154.WeightedAddress;
                toJSON(message: _154.WeightedAddress): unknown;
                fromPartial(object: {
                    address?: string;
                    weight?: string;
                }): _154.WeightedAddress;
            };
            DistributionProportions: {
                encode(message: _154.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.DistributionProportions;
                fromJSON(object: any): _154.DistributionProportions;
                toJSON(message: _154.DistributionProportions): unknown;
                fromPartial(object: {
                    staking?: string;
                    pool_incentives?: string;
                    developer_rewards?: string;
                    community_pool?: string;
                }): _154.DistributionProportions;
            };
            Params: {
                encode(message: _154.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.Params;
                fromJSON(object: any): _154.Params;
                toJSON(message: _154.Params): unknown;
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
                }): _154.Params;
            };
            GenesisState: {
                encode(message: _153.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.GenesisState;
                fromJSON(object: any): _153.GenesisState;
                toJSON(message: _153.GenesisState): unknown;
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
                }): _153.GenesisState;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            QueryClientImpl: typeof _305.QueryClientImpl;
            LCDQueryClient: typeof _296.LCDQueryClient;
            QueryGaugeIdsRequest: {
                encode(message: _159.QueryGaugeIdsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryGaugeIdsRequest;
                fromJSON(object: any): _159.QueryGaugeIdsRequest;
                toJSON(message: _159.QueryGaugeIdsRequest): unknown;
                fromPartial(object: {
                    pool_id?: any;
                }): _159.QueryGaugeIdsRequest;
            };
            QueryGaugeIdsResponse: {
                encode(message: _159.QueryGaugeIdsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryGaugeIdsResponse;
                fromJSON(object: any): _159.QueryGaugeIdsResponse;
                toJSON(message: _159.QueryGaugeIdsResponse): unknown;
                fromPartial(object: {
                    gauge_ids_with_duration?: {
                        gauge_id?: any;
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                }): _159.QueryGaugeIdsResponse;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                encode(message: _159.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromJSON(object: any): _159.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toJSON(message: _159.QueryGaugeIdsResponse_GaugeIdWithDuration): unknown;
                fromPartial(object: {
                    gauge_id?: any;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _159.QueryGaugeIdsResponse_GaugeIdWithDuration;
            };
            QueryDistrInfoRequest: {
                encode(_: _159.QueryDistrInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryDistrInfoRequest;
                fromJSON(_: any): _159.QueryDistrInfoRequest;
                toJSON(_: _159.QueryDistrInfoRequest): unknown;
                fromPartial(_: {}): _159.QueryDistrInfoRequest;
            };
            QueryDistrInfoResponse: {
                encode(message: _159.QueryDistrInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryDistrInfoResponse;
                fromJSON(object: any): _159.QueryDistrInfoResponse;
                toJSON(message: _159.QueryDistrInfoResponse): unknown;
                fromPartial(object: {
                    distr_info?: {
                        total_weight?: string;
                        records?: {
                            gauge_id?: any;
                            weight?: string;
                        }[];
                    };
                }): _159.QueryDistrInfoResponse;
            };
            QueryParamsRequest: {
                encode(_: _159.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryParamsRequest;
                fromJSON(_: any): _159.QueryParamsRequest;
                toJSON(_: _159.QueryParamsRequest): unknown;
                fromPartial(_: {}): _159.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _159.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryParamsResponse;
                fromJSON(object: any): _159.QueryParamsResponse;
                toJSON(message: _159.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        minted_denom?: string;
                    };
                }): _159.QueryParamsResponse;
            };
            QueryLockableDurationsRequest: {
                encode(_: _159.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryLockableDurationsRequest;
                fromJSON(_: any): _159.QueryLockableDurationsRequest;
                toJSON(_: _159.QueryLockableDurationsRequest): unknown;
                fromPartial(_: {}): _159.QueryLockableDurationsRequest;
            };
            QueryLockableDurationsResponse: {
                encode(message: _159.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryLockableDurationsResponse;
                fromJSON(object: any): _159.QueryLockableDurationsResponse;
                toJSON(message: _159.QueryLockableDurationsResponse): unknown;
                fromPartial(object: {
                    lockable_durations?: {
                        seconds?: any;
                        nanos?: number;
                    }[];
                }): _159.QueryLockableDurationsResponse;
            };
            QueryIncentivizedPoolsRequest: {
                encode(_: _159.QueryIncentivizedPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryIncentivizedPoolsRequest;
                fromJSON(_: any): _159.QueryIncentivizedPoolsRequest;
                toJSON(_: _159.QueryIncentivizedPoolsRequest): unknown;
                fromPartial(_: {}): _159.QueryIncentivizedPoolsRequest;
            };
            IncentivizedPool: {
                encode(message: _159.IncentivizedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.IncentivizedPool;
                fromJSON(object: any): _159.IncentivizedPool;
                toJSON(message: _159.IncentivizedPool): unknown;
                fromPartial(object: {
                    pool_id?: any;
                    lockable_duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    gauge_id?: any;
                }): _159.IncentivizedPool;
            };
            QueryIncentivizedPoolsResponse: {
                encode(message: _159.QueryIncentivizedPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryIncentivizedPoolsResponse;
                fromJSON(object: any): _159.QueryIncentivizedPoolsResponse;
                toJSON(message: _159.QueryIncentivizedPoolsResponse): unknown;
                fromPartial(object: {
                    incentivized_pools?: {
                        pool_id?: any;
                        lockable_duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        gauge_id?: any;
                    }[];
                }): _159.QueryIncentivizedPoolsResponse;
            };
            QueryExternalIncentiveGaugesRequest: {
                encode(_: _159.QueryExternalIncentiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryExternalIncentiveGaugesRequest;
                fromJSON(_: any): _159.QueryExternalIncentiveGaugesRequest;
                toJSON(_: _159.QueryExternalIncentiveGaugesRequest): unknown;
                fromPartial(_: {}): _159.QueryExternalIncentiveGaugesRequest;
            };
            QueryExternalIncentiveGaugesResponse: {
                encode(message: _159.QueryExternalIncentiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryExternalIncentiveGaugesResponse;
                fromJSON(object: any): _159.QueryExternalIncentiveGaugesResponse;
                toJSON(message: _159.QueryExternalIncentiveGaugesResponse): unknown;
                fromPartial(object: {
                    data?: {
                        id?: any;
                        is_perpetual?: boolean;
                        distribute_to?: {
                            lock_query_type?: _150.LockQueryType;
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
                }): _159.QueryExternalIncentiveGaugesResponse;
            };
            Params: {
                encode(message: _158.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.Params;
                fromJSON(object: any): _158.Params;
                toJSON(message: _158.Params): unknown;
                fromPartial(object: {
                    minted_denom?: string;
                }): _158.Params;
            };
            LockableDurationsInfo: {
                encode(message: _158.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.LockableDurationsInfo;
                fromJSON(object: any): _158.LockableDurationsInfo;
                toJSON(message: _158.LockableDurationsInfo): unknown;
                fromPartial(object: {
                    lockable_durations?: {
                        seconds?: any;
                        nanos?: number;
                    }[];
                }): _158.LockableDurationsInfo;
            };
            DistrInfo: {
                encode(message: _158.DistrInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.DistrInfo;
                fromJSON(object: any): _158.DistrInfo;
                toJSON(message: _158.DistrInfo): unknown;
                fromPartial(object: {
                    total_weight?: string;
                    records?: {
                        gauge_id?: any;
                        weight?: string;
                    }[];
                }): _158.DistrInfo;
            };
            DistrRecord: {
                encode(message: _158.DistrRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.DistrRecord;
                fromJSON(object: any): _158.DistrRecord;
                toJSON(message: _158.DistrRecord): unknown;
                fromPartial(object: {
                    gauge_id?: any;
                    weight?: string;
                }): _158.DistrRecord;
            };
            ReplacePoolIncentivesProposal: {
                encode(message: _157.ReplacePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ReplacePoolIncentivesProposal;
                fromJSON(object: any): _157.ReplacePoolIncentivesProposal;
                toJSON(message: _157.ReplacePoolIncentivesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    records?: {
                        gauge_id?: any;
                        weight?: string;
                    }[];
                }): _157.ReplacePoolIncentivesProposal;
            };
            UpdatePoolIncentivesProposal: {
                encode(message: _157.UpdatePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.UpdatePoolIncentivesProposal;
                fromJSON(object: any): _157.UpdatePoolIncentivesProposal;
                toJSON(message: _157.UpdatePoolIncentivesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    records?: {
                        gauge_id?: any;
                        weight?: string;
                    }[];
                }): _157.UpdatePoolIncentivesProposal;
            };
            GenesisState: {
                encode(message: _156.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.GenesisState;
                fromJSON(object: any): _156.GenesisState;
                toJSON(message: _156.GenesisState): unknown;
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
                }): _156.GenesisState;
            };
        };
    }
    namespace store {
        const v1beta1: {
            Node: {
                encode(message: _160.Node, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.Node;
                fromJSON(object: any): _160.Node;
                toJSON(message: _160.Node): unknown;
                fromPartial(object: {
                    children?: {
                        index?: Uint8Array;
                        accumulation?: string;
                    }[];
                }): _160.Node;
            };
            Child: {
                encode(message: _160.Child, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.Child;
                fromJSON(object: any): _160.Child;
                toJSON(message: _160.Child): unknown;
                fromPartial(object: {
                    index?: Uint8Array;
                    accumulation?: string;
                }): _160.Child;
            };
            Leaf: {
                encode(message: _160.Leaf, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.Leaf;
                fromJSON(object: any): _160.Leaf;
                toJSON(message: _160.Leaf): unknown;
                fromPartial(object: {
                    leaf?: {
                        index?: Uint8Array;
                        accumulation?: string;
                    };
                }): _160.Leaf;
            };
        };
    }
    const superfluid: {
        MsgClientImpl: typeof _314.MsgClientImpl;
        QueryClientImpl: typeof _306.QueryClientImpl;
        LCDQueryClient: typeof _297.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                superfluidDelegate(value: _165.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegate(value: _165.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUnbondLock(value: _165.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lockAndSuperfluidDelegate(value: _165.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unPoolWhitelistedPool(value: _165.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                superfluidDelegate(value: _165.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _165.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _165.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _165.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _165.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _165.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _165.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _165.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _165.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _165.MsgUnPoolWhitelistedPool;
                };
            };
            toJSON: {
                superfluidDelegate(value: _165.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                superfluidUndelegate(value: _165.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                superfluidUnbondLock(value: _165.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: unknown;
                };
                lockAndSuperfluidDelegate(value: _165.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                unPoolWhitelistedPool(value: _165.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                superfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _165.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: any): {
                    typeUrl: string;
                    value: _165.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: any): {
                    typeUrl: string;
                    value: _165.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _165.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: any): {
                    typeUrl: string;
                    value: _165.MsgUnPoolWhitelistedPool;
                };
            };
            fromPartial: {
                superfluidDelegate(value: _165.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _165.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _165.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _165.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _165.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _165.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _165.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _165.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _165.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _165.MsgUnPoolWhitelistedPool;
                };
            };
        };
        AminoConverter: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, lock_id, val_addr }: _165.MsgSuperfluidDelegate) => {
                    sender: string;
                    lock_id: string;
                    val_addr: string;
                };
                fromAmino: ({ sender, lock_id, val_addr }: {
                    sender: string;
                    lock_id: string;
                    val_addr: string;
                }) => _165.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                aminoType: string;
                toAmino: ({ sender, lock_id }: _165.MsgSuperfluidUndelegate) => {
                    sender: string;
                    lock_id: string;
                };
                fromAmino: ({ sender, lock_id }: {
                    sender: string;
                    lock_id: string;
                }) => _165.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                aminoType: string;
                toAmino: ({ sender, lock_id }: _165.MsgSuperfluidUnbondLock) => {
                    sender: string;
                    lock_id: string;
                };
                fromAmino: ({ sender, lock_id }: {
                    sender: string;
                    lock_id: string;
                }) => _165.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, coins, val_addr }: _165.MsgLockAndSuperfluidDelegate) => {
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
                }) => _165.MsgLockAndSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
                aminoType: string;
                toAmino: ({ sender, pool_id }: _165.MsgUnPoolWhitelistedPool) => {
                    sender: string;
                    pool_id: string;
                };
                fromAmino: ({ sender, pool_id }: {
                    sender: string;
                    pool_id: string;
                }) => _165.MsgUnPoolWhitelistedPool;
            };
        };
        MsgSuperfluidDelegate: {
            encode(message: _165.MsgSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgSuperfluidDelegate;
            fromJSON(object: any): _165.MsgSuperfluidDelegate;
            toJSON(message: _165.MsgSuperfluidDelegate): unknown;
            fromPartial(object: {
                sender?: string;
                lock_id?: any;
                val_addr?: string;
            }): _165.MsgSuperfluidDelegate;
        };
        MsgSuperfluidDelegateResponse: {
            encode(_: _165.MsgSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgSuperfluidDelegateResponse;
            fromJSON(_: any): _165.MsgSuperfluidDelegateResponse;
            toJSON(_: _165.MsgSuperfluidDelegateResponse): unknown;
            fromPartial(_: {}): _165.MsgSuperfluidDelegateResponse;
        };
        MsgSuperfluidUndelegate: {
            encode(message: _165.MsgSuperfluidUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgSuperfluidUndelegate;
            fromJSON(object: any): _165.MsgSuperfluidUndelegate;
            toJSON(message: _165.MsgSuperfluidUndelegate): unknown;
            fromPartial(object: {
                sender?: string;
                lock_id?: any;
            }): _165.MsgSuperfluidUndelegate;
        };
        MsgSuperfluidUndelegateResponse: {
            encode(_: _165.MsgSuperfluidUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgSuperfluidUndelegateResponse;
            fromJSON(_: any): _165.MsgSuperfluidUndelegateResponse;
            toJSON(_: _165.MsgSuperfluidUndelegateResponse): unknown;
            fromPartial(_: {}): _165.MsgSuperfluidUndelegateResponse;
        };
        MsgSuperfluidUnbondLock: {
            encode(message: _165.MsgSuperfluidUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgSuperfluidUnbondLock;
            fromJSON(object: any): _165.MsgSuperfluidUnbondLock;
            toJSON(message: _165.MsgSuperfluidUnbondLock): unknown;
            fromPartial(object: {
                sender?: string;
                lock_id?: any;
            }): _165.MsgSuperfluidUnbondLock;
        };
        MsgSuperfluidUnbondLockResponse: {
            encode(_: _165.MsgSuperfluidUnbondLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgSuperfluidUnbondLockResponse;
            fromJSON(_: any): _165.MsgSuperfluidUnbondLockResponse;
            toJSON(_: _165.MsgSuperfluidUnbondLockResponse): unknown;
            fromPartial(_: {}): _165.MsgSuperfluidUnbondLockResponse;
        };
        MsgLockAndSuperfluidDelegate: {
            encode(message: _165.MsgLockAndSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgLockAndSuperfluidDelegate;
            fromJSON(object: any): _165.MsgLockAndSuperfluidDelegate;
            toJSON(message: _165.MsgLockAndSuperfluidDelegate): unknown;
            fromPartial(object: {
                sender?: string;
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
                val_addr?: string;
            }): _165.MsgLockAndSuperfluidDelegate;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            encode(message: _165.MsgLockAndSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgLockAndSuperfluidDelegateResponse;
            fromJSON(object: any): _165.MsgLockAndSuperfluidDelegateResponse;
            toJSON(message: _165.MsgLockAndSuperfluidDelegateResponse): unknown;
            fromPartial(object: {
                ID?: any;
            }): _165.MsgLockAndSuperfluidDelegateResponse;
        };
        MsgUnPoolWhitelistedPool: {
            encode(message: _165.MsgUnPoolWhitelistedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgUnPoolWhitelistedPool;
            fromJSON(object: any): _165.MsgUnPoolWhitelistedPool;
            toJSON(message: _165.MsgUnPoolWhitelistedPool): unknown;
            fromPartial(object: {
                sender?: string;
                pool_id?: any;
            }): _165.MsgUnPoolWhitelistedPool;
        };
        MsgUnPoolWhitelistedPoolResponse: {
            encode(message: _165.MsgUnPoolWhitelistedPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgUnPoolWhitelistedPoolResponse;
            fromJSON(object: any): _165.MsgUnPoolWhitelistedPoolResponse;
            toJSON(message: _165.MsgUnPoolWhitelistedPoolResponse): unknown;
            fromPartial(object: {
                exitedLockIds?: any[];
            }): _165.MsgUnPoolWhitelistedPoolResponse;
        };
        superfluidAssetTypeFromJSON(object: any): _164.SuperfluidAssetType;
        superfluidAssetTypeToJSON(object: _164.SuperfluidAssetType): string;
        SuperfluidAssetType: typeof _164.SuperfluidAssetType;
        SuperfluidAsset: {
            encode(message: _164.SuperfluidAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.SuperfluidAsset;
            fromJSON(object: any): _164.SuperfluidAsset;
            toJSON(message: _164.SuperfluidAsset): unknown;
            fromPartial(object: {
                denom?: string;
                asset_type?: _164.SuperfluidAssetType;
            }): _164.SuperfluidAsset;
        };
        SuperfluidIntermediaryAccount: {
            encode(message: _164.SuperfluidIntermediaryAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.SuperfluidIntermediaryAccount;
            fromJSON(object: any): _164.SuperfluidIntermediaryAccount;
            toJSON(message: _164.SuperfluidIntermediaryAccount): unknown;
            fromPartial(object: {
                denom?: string;
                val_addr?: string;
                gauge_id?: any;
            }): _164.SuperfluidIntermediaryAccount;
        };
        OsmoEquivalentMultiplierRecord: {
            encode(message: _164.OsmoEquivalentMultiplierRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.OsmoEquivalentMultiplierRecord;
            fromJSON(object: any): _164.OsmoEquivalentMultiplierRecord;
            toJSON(message: _164.OsmoEquivalentMultiplierRecord): unknown;
            fromPartial(object: {
                epoch_number?: any;
                denom?: string;
                multiplier?: string;
            }): _164.OsmoEquivalentMultiplierRecord;
        };
        SuperfluidDelegationRecord: {
            encode(message: _164.SuperfluidDelegationRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.SuperfluidDelegationRecord;
            fromJSON(object: any): _164.SuperfluidDelegationRecord;
            toJSON(message: _164.SuperfluidDelegationRecord): unknown;
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
            }): _164.SuperfluidDelegationRecord;
        };
        LockIdIntermediaryAccountConnection: {
            encode(message: _164.LockIdIntermediaryAccountConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.LockIdIntermediaryAccountConnection;
            fromJSON(object: any): _164.LockIdIntermediaryAccountConnection;
            toJSON(message: _164.LockIdIntermediaryAccountConnection): unknown;
            fromPartial(object: {
                lock_id?: any;
                intermediary_account?: string;
            }): _164.LockIdIntermediaryAccountConnection;
        };
        UnpoolWhitelistedPools: {
            encode(message: _164.UnpoolWhitelistedPools, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.UnpoolWhitelistedPools;
            fromJSON(object: any): _164.UnpoolWhitelistedPools;
            toJSON(message: _164.UnpoolWhitelistedPools): unknown;
            fromPartial(object: {
                ids?: any[];
            }): _164.UnpoolWhitelistedPools;
        };
        QueryParamsRequest: {
            encode(_: _163.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryParamsRequest;
            fromJSON(_: any): _163.QueryParamsRequest;
            toJSON(_: _163.QueryParamsRequest): unknown;
            fromPartial(_: {}): _163.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _163.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryParamsResponse;
            fromJSON(object: any): _163.QueryParamsResponse;
            toJSON(message: _163.QueryParamsResponse): unknown;
            fromPartial(object: {
                params?: {
                    minimum_risk_factor?: string;
                };
            }): _163.QueryParamsResponse;
        };
        AssetTypeRequest: {
            encode(message: _163.AssetTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.AssetTypeRequest;
            fromJSON(object: any): _163.AssetTypeRequest;
            toJSON(message: _163.AssetTypeRequest): unknown;
            fromPartial(object: {
                denom?: string;
            }): _163.AssetTypeRequest;
        };
        AssetTypeResponse: {
            encode(message: _163.AssetTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.AssetTypeResponse;
            fromJSON(object: any): _163.AssetTypeResponse;
            toJSON(message: _163.AssetTypeResponse): unknown;
            fromPartial(object: {
                asset_type?: _164.SuperfluidAssetType;
            }): _163.AssetTypeResponse;
        };
        AllAssetsRequest: {
            encode(_: _163.AllAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.AllAssetsRequest;
            fromJSON(_: any): _163.AllAssetsRequest;
            toJSON(_: _163.AllAssetsRequest): unknown;
            fromPartial(_: {}): _163.AllAssetsRequest;
        };
        AllAssetsResponse: {
            encode(message: _163.AllAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.AllAssetsResponse;
            fromJSON(object: any): _163.AllAssetsResponse;
            toJSON(message: _163.AllAssetsResponse): unknown;
            fromPartial(object: {
                assets?: {
                    denom?: string;
                    asset_type?: _164.SuperfluidAssetType;
                }[];
            }): _163.AllAssetsResponse;
        };
        AssetMultiplierRequest: {
            encode(message: _163.AssetMultiplierRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.AssetMultiplierRequest;
            fromJSON(object: any): _163.AssetMultiplierRequest;
            toJSON(message: _163.AssetMultiplierRequest): unknown;
            fromPartial(object: {
                denom?: string;
            }): _163.AssetMultiplierRequest;
        };
        AssetMultiplierResponse: {
            encode(message: _163.AssetMultiplierResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.AssetMultiplierResponse;
            fromJSON(object: any): _163.AssetMultiplierResponse;
            toJSON(message: _163.AssetMultiplierResponse): unknown;
            fromPartial(object: {
                osmo_equivalent_multiplier?: {
                    epoch_number?: any;
                    denom?: string;
                    multiplier?: string;
                };
            }): _163.AssetMultiplierResponse;
        };
        SuperfluidIntermediaryAccountInfo: {
            encode(message: _163.SuperfluidIntermediaryAccountInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.SuperfluidIntermediaryAccountInfo;
            fromJSON(object: any): _163.SuperfluidIntermediaryAccountInfo;
            toJSON(message: _163.SuperfluidIntermediaryAccountInfo): unknown;
            fromPartial(object: {
                denom?: string;
                val_addr?: string;
                gauge_id?: any;
                address?: string;
            }): _163.SuperfluidIntermediaryAccountInfo;
        };
        AllIntermediaryAccountsRequest: {
            encode(message: _163.AllIntermediaryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.AllIntermediaryAccountsRequest;
            fromJSON(object: any): _163.AllIntermediaryAccountsRequest;
            toJSON(message: _163.AllIntermediaryAccountsRequest): unknown;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    count_total?: boolean;
                    reverse?: boolean;
                };
            }): _163.AllIntermediaryAccountsRequest;
        };
        AllIntermediaryAccountsResponse: {
            encode(message: _163.AllIntermediaryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.AllIntermediaryAccountsResponse;
            fromJSON(object: any): _163.AllIntermediaryAccountsResponse;
            toJSON(message: _163.AllIntermediaryAccountsResponse): unknown;
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
            }): _163.AllIntermediaryAccountsResponse;
        };
        ConnectedIntermediaryAccountRequest: {
            encode(message: _163.ConnectedIntermediaryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.ConnectedIntermediaryAccountRequest;
            fromJSON(object: any): _163.ConnectedIntermediaryAccountRequest;
            toJSON(message: _163.ConnectedIntermediaryAccountRequest): unknown;
            fromPartial(object: {
                lock_id?: any;
            }): _163.ConnectedIntermediaryAccountRequest;
        };
        ConnectedIntermediaryAccountResponse: {
            encode(message: _163.ConnectedIntermediaryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.ConnectedIntermediaryAccountResponse;
            fromJSON(object: any): _163.ConnectedIntermediaryAccountResponse;
            toJSON(message: _163.ConnectedIntermediaryAccountResponse): unknown;
            fromPartial(object: {
                account?: {
                    denom?: string;
                    val_addr?: string;
                    gauge_id?: any;
                    address?: string;
                };
            }): _163.ConnectedIntermediaryAccountResponse;
        };
        TotalSuperfluidDelegationsRequest: {
            encode(_: _163.TotalSuperfluidDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.TotalSuperfluidDelegationsRequest;
            fromJSON(_: any): _163.TotalSuperfluidDelegationsRequest;
            toJSON(_: _163.TotalSuperfluidDelegationsRequest): unknown;
            fromPartial(_: {}): _163.TotalSuperfluidDelegationsRequest;
        };
        TotalSuperfluidDelegationsResponse: {
            encode(message: _163.TotalSuperfluidDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.TotalSuperfluidDelegationsResponse;
            fromJSON(object: any): _163.TotalSuperfluidDelegationsResponse;
            toJSON(message: _163.TotalSuperfluidDelegationsResponse): unknown;
            fromPartial(object: {
                totalDelegations?: string;
            }): _163.TotalSuperfluidDelegationsResponse;
        };
        SuperfluidDelegationAmountRequest: {
            encode(message: _163.SuperfluidDelegationAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.SuperfluidDelegationAmountRequest;
            fromJSON(object: any): _163.SuperfluidDelegationAmountRequest;
            toJSON(message: _163.SuperfluidDelegationAmountRequest): unknown;
            fromPartial(object: {
                delegator_address?: string;
                validator_address?: string;
                denom?: string;
            }): _163.SuperfluidDelegationAmountRequest;
        };
        SuperfluidDelegationAmountResponse: {
            encode(message: _163.SuperfluidDelegationAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.SuperfluidDelegationAmountResponse;
            fromJSON(object: any): _163.SuperfluidDelegationAmountResponse;
            toJSON(message: _163.SuperfluidDelegationAmountResponse): unknown;
            fromPartial(object: {
                amount?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _163.SuperfluidDelegationAmountResponse;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            encode(message: _163.SuperfluidDelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.SuperfluidDelegationsByDelegatorRequest;
            fromJSON(object: any): _163.SuperfluidDelegationsByDelegatorRequest;
            toJSON(message: _163.SuperfluidDelegationsByDelegatorRequest): unknown;
            fromPartial(object: {
                delegator_address?: string;
            }): _163.SuperfluidDelegationsByDelegatorRequest;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            encode(message: _163.SuperfluidDelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.SuperfluidDelegationsByDelegatorResponse;
            fromJSON(object: any): _163.SuperfluidDelegationsByDelegatorResponse;
            toJSON(message: _163.SuperfluidDelegationsByDelegatorResponse): unknown;
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
            }): _163.SuperfluidDelegationsByDelegatorResponse;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            encode(message: _163.SuperfluidUndelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.SuperfluidUndelegationsByDelegatorRequest;
            fromJSON(object: any): _163.SuperfluidUndelegationsByDelegatorRequest;
            toJSON(message: _163.SuperfluidUndelegationsByDelegatorRequest): unknown;
            fromPartial(object: {
                delegator_address?: string;
                denom?: string;
            }): _163.SuperfluidUndelegationsByDelegatorRequest;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            encode(message: _163.SuperfluidUndelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.SuperfluidUndelegationsByDelegatorResponse;
            fromJSON(object: any): _163.SuperfluidUndelegationsByDelegatorResponse;
            toJSON(message: _163.SuperfluidUndelegationsByDelegatorResponse): unknown;
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
            }): _163.SuperfluidUndelegationsByDelegatorResponse;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            encode(message: _163.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.SuperfluidDelegationsByValidatorDenomRequest;
            fromJSON(object: any): _163.SuperfluidDelegationsByValidatorDenomRequest;
            toJSON(message: _163.SuperfluidDelegationsByValidatorDenomRequest): unknown;
            fromPartial(object: {
                validator_address?: string;
                denom?: string;
            }): _163.SuperfluidDelegationsByValidatorDenomRequest;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            encode(message: _163.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.SuperfluidDelegationsByValidatorDenomResponse;
            fromJSON(object: any): _163.SuperfluidDelegationsByValidatorDenomResponse;
            toJSON(message: _163.SuperfluidDelegationsByValidatorDenomResponse): unknown;
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
            }): _163.SuperfluidDelegationsByValidatorDenomResponse;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            encode(message: _163.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromJSON(object: any): _163.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toJSON(message: _163.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): unknown;
            fromPartial(object: {
                validator_address?: string;
                denom?: string;
            }): _163.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            encode(message: _163.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromJSON(object: any): _163.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toJSON(message: _163.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): unknown;
            fromPartial(object: {
                total_delegated_coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _163.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
        };
        Params: {
            encode(message: _162.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.Params;
            fromJSON(object: any): _162.Params;
            toJSON(message: _162.Params): unknown;
            fromPartial(object: {
                minimum_risk_factor?: string;
            }): _162.Params;
        };
        GenesisState: {
            encode(message: _161.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.GenesisState;
            fromJSON(object: any): _161.GenesisState;
            toJSON(message: _161.GenesisState): unknown;
            fromPartial(object: {
                params?: {
                    minimum_risk_factor?: string;
                };
                superfluid_assets?: {
                    denom?: string;
                    asset_type?: _164.SuperfluidAssetType;
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
            }): _161.GenesisState;
        };
    };
    namespace tokenfactory {
        const v1beta1: {
            MsgClientImpl: typeof _315.MsgClientImpl;
            QueryClientImpl: typeof _307.QueryClientImpl;
            LCDQueryClient: typeof _298.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _170.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _170.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _170.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _170.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _170.MsgCreateDenom): {
                        typeUrl: string;
                        value: _170.MsgCreateDenom;
                    };
                    mint(value: _170.MsgMint): {
                        typeUrl: string;
                        value: _170.MsgMint;
                    };
                    burn(value: _170.MsgBurn): {
                        typeUrl: string;
                        value: _170.MsgBurn;
                    };
                    changeAdmin(value: _170.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _170.MsgChangeAdmin;
                    };
                };
                toJSON: {
                    createDenom(value: _170.MsgCreateDenom): {
                        typeUrl: string;
                        value: unknown;
                    };
                    mint(value: _170.MsgMint): {
                        typeUrl: string;
                        value: unknown;
                    };
                    burn(value: _170.MsgBurn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    changeAdmin(value: _170.MsgChangeAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createDenom(value: any): {
                        typeUrl: string;
                        value: _170.MsgCreateDenom;
                    };
                    mint(value: any): {
                        typeUrl: string;
                        value: _170.MsgMint;
                    };
                    burn(value: any): {
                        typeUrl: string;
                        value: _170.MsgBurn;
                    };
                    changeAdmin(value: any): {
                        typeUrl: string;
                        value: _170.MsgChangeAdmin;
                    };
                };
                fromPartial: {
                    createDenom(value: _170.MsgCreateDenom): {
                        typeUrl: string;
                        value: _170.MsgCreateDenom;
                    };
                    mint(value: _170.MsgMint): {
                        typeUrl: string;
                        value: _170.MsgMint;
                    };
                    burn(value: _170.MsgBurn): {
                        typeUrl: string;
                        value: _170.MsgBurn;
                    };
                    changeAdmin(value: _170.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _170.MsgChangeAdmin;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: ({ sender, subdenom }: _170.MsgCreateDenom) => {
                        sender: string;
                        subdenom: string;
                    };
                    fromAmino: ({ sender, subdenom }: {
                        sender: string;
                        subdenom: string;
                    }) => _170.MsgCreateDenom;
                };
                "/osmosis.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _170.MsgMint) => {
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
                    }) => _170.MsgMint;
                };
                "/osmosis.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _170.MsgBurn) => {
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
                    }) => _170.MsgBurn;
                };
                "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, denom, newAdmin }: _170.MsgChangeAdmin) => {
                        sender: string;
                        denom: string;
                        newAdmin: string;
                    };
                    fromAmino: ({ sender, denom, newAdmin }: {
                        sender: string;
                        denom: string;
                        newAdmin: string;
                    }) => _170.MsgChangeAdmin;
                };
            };
            MsgCreateDenom: {
                encode(message: _170.MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgCreateDenom;
                fromJSON(object: any): _170.MsgCreateDenom;
                toJSON(message: _170.MsgCreateDenom): unknown;
                fromPartial(object: {
                    sender?: string;
                    subdenom?: string;
                }): _170.MsgCreateDenom;
            };
            MsgCreateDenomResponse: {
                encode(message: _170.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgCreateDenomResponse;
                fromJSON(object: any): _170.MsgCreateDenomResponse;
                toJSON(message: _170.MsgCreateDenomResponse): unknown;
                fromPartial(object: {
                    new_token_denom?: string;
                }): _170.MsgCreateDenomResponse;
            };
            MsgMint: {
                encode(message: _170.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgMint;
                fromJSON(object: any): _170.MsgMint;
                toJSON(message: _170.MsgMint): unknown;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _170.MsgMint;
            };
            MsgMintResponse: {
                encode(_: _170.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgMintResponse;
                fromJSON(_: any): _170.MsgMintResponse;
                toJSON(_: _170.MsgMintResponse): unknown;
                fromPartial(_: {}): _170.MsgMintResponse;
            };
            MsgBurn: {
                encode(message: _170.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgBurn;
                fromJSON(object: any): _170.MsgBurn;
                toJSON(message: _170.MsgBurn): unknown;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _170.MsgBurn;
            };
            MsgBurnResponse: {
                encode(_: _170.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgBurnResponse;
                fromJSON(_: any): _170.MsgBurnResponse;
                toJSON(_: _170.MsgBurnResponse): unknown;
                fromPartial(_: {}): _170.MsgBurnResponse;
            };
            MsgChangeAdmin: {
                encode(message: _170.MsgChangeAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgChangeAdmin;
                fromJSON(object: any): _170.MsgChangeAdmin;
                toJSON(message: _170.MsgChangeAdmin): unknown;
                fromPartial(object: {
                    sender?: string;
                    denom?: string;
                    newAdmin?: string;
                }): _170.MsgChangeAdmin;
            };
            MsgChangeAdminResponse: {
                encode(_: _170.MsgChangeAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgChangeAdminResponse;
                fromJSON(_: any): _170.MsgChangeAdminResponse;
                toJSON(_: _170.MsgChangeAdminResponse): unknown;
                fromPartial(_: {}): _170.MsgChangeAdminResponse;
            };
            QueryParamsRequest: {
                encode(_: _169.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryParamsRequest;
                fromJSON(_: any): _169.QueryParamsRequest;
                toJSON(_: _169.QueryParamsRequest): unknown;
                fromPartial(_: {}): _169.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _169.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryParamsResponse;
                fromJSON(object: any): _169.QueryParamsResponse;
                toJSON(message: _169.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        denom_creation_fee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _169.QueryParamsResponse;
            };
            QueryDenomAuthorityMetadataRequest: {
                encode(message: _169.QueryDenomAuthorityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryDenomAuthorityMetadataRequest;
                fromJSON(object: any): _169.QueryDenomAuthorityMetadataRequest;
                toJSON(message: _169.QueryDenomAuthorityMetadataRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _169.QueryDenomAuthorityMetadataRequest;
            };
            QueryDenomAuthorityMetadataResponse: {
                encode(message: _169.QueryDenomAuthorityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryDenomAuthorityMetadataResponse;
                fromJSON(object: any): _169.QueryDenomAuthorityMetadataResponse;
                toJSON(message: _169.QueryDenomAuthorityMetadataResponse): unknown;
                fromPartial(object: {
                    authority_metadata?: {
                        Admin?: string;
                    };
                }): _169.QueryDenomAuthorityMetadataResponse;
            };
            QueryDenomsFromCreatorRequest: {
                encode(message: _169.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryDenomsFromCreatorRequest;
                fromJSON(object: any): _169.QueryDenomsFromCreatorRequest;
                toJSON(message: _169.QueryDenomsFromCreatorRequest): unknown;
                fromPartial(object: {
                    creator?: string;
                }): _169.QueryDenomsFromCreatorRequest;
            };
            QueryDenomsFromCreatorResponse: {
                encode(message: _169.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryDenomsFromCreatorResponse;
                fromJSON(object: any): _169.QueryDenomsFromCreatorResponse;
                toJSON(message: _169.QueryDenomsFromCreatorResponse): unknown;
                fromPartial(object: {
                    denoms?: string[];
                }): _169.QueryDenomsFromCreatorResponse;
            };
            Params: {
                encode(message: _168.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.Params;
                fromJSON(object: any): _168.Params;
                toJSON(message: _168.Params): unknown;
                fromPartial(object: {
                    denom_creation_fee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _168.Params;
            };
            GenesisState: {
                encode(message: _167.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.GenesisState;
                fromJSON(object: any): _167.GenesisState;
                toJSON(message: _167.GenesisState): unknown;
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
                }): _167.GenesisState;
            };
            GenesisDenom: {
                encode(message: _167.GenesisDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.GenesisDenom;
                fromJSON(object: any): _167.GenesisDenom;
                toJSON(message: _167.GenesisDenom): unknown;
                fromPartial(object: {
                    denom?: string;
                    authority_metadata?: {
                        Admin?: string;
                    };
                }): _167.GenesisDenom;
            };
            DenomAuthorityMetadata: {
                encode(message: _166.DenomAuthorityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.DenomAuthorityMetadata;
                fromJSON(object: any): _166.DenomAuthorityMetadata;
                toJSON(message: _166.DenomAuthorityMetadata): unknown;
                fromPartial(object: {
                    Admin?: string;
                }): _166.DenomAuthorityMetadata;
            };
        };
    }
    namespace txfees {
        const v1beta1: {
            QueryClientImpl: typeof _308.QueryClientImpl;
            LCDQueryClient: typeof _299.LCDQueryClient;
            QueryFeeTokensRequest: {
                encode(_: _174.QueryFeeTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.QueryFeeTokensRequest;
                fromJSON(_: any): _174.QueryFeeTokensRequest;
                toJSON(_: _174.QueryFeeTokensRequest): unknown;
                fromPartial(_: {}): _174.QueryFeeTokensRequest;
            };
            QueryFeeTokensResponse: {
                encode(message: _174.QueryFeeTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.QueryFeeTokensResponse;
                fromJSON(object: any): _174.QueryFeeTokensResponse;
                toJSON(message: _174.QueryFeeTokensResponse): unknown;
                fromPartial(object: {
                    fee_tokens?: {
                        denom?: string;
                        poolID?: any;
                    }[];
                }): _174.QueryFeeTokensResponse;
            };
            QueryDenomSpotPriceRequest: {
                encode(message: _174.QueryDenomSpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.QueryDenomSpotPriceRequest;
                fromJSON(object: any): _174.QueryDenomSpotPriceRequest;
                toJSON(message: _174.QueryDenomSpotPriceRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _174.QueryDenomSpotPriceRequest;
            };
            QueryDenomSpotPriceResponse: {
                encode(message: _174.QueryDenomSpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.QueryDenomSpotPriceResponse;
                fromJSON(object: any): _174.QueryDenomSpotPriceResponse;
                toJSON(message: _174.QueryDenomSpotPriceResponse): unknown;
                fromPartial(object: {
                    poolID?: any;
                    spot_price?: string;
                }): _174.QueryDenomSpotPriceResponse;
            };
            QueryDenomPoolIdRequest: {
                encode(message: _174.QueryDenomPoolIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.QueryDenomPoolIdRequest;
                fromJSON(object: any): _174.QueryDenomPoolIdRequest;
                toJSON(message: _174.QueryDenomPoolIdRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _174.QueryDenomPoolIdRequest;
            };
            QueryDenomPoolIdResponse: {
                encode(message: _174.QueryDenomPoolIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.QueryDenomPoolIdResponse;
                fromJSON(object: any): _174.QueryDenomPoolIdResponse;
                toJSON(message: _174.QueryDenomPoolIdResponse): unknown;
                fromPartial(object: {
                    poolID?: any;
                }): _174.QueryDenomPoolIdResponse;
            };
            QueryBaseDenomRequest: {
                encode(_: _174.QueryBaseDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.QueryBaseDenomRequest;
                fromJSON(_: any): _174.QueryBaseDenomRequest;
                toJSON(_: _174.QueryBaseDenomRequest): unknown;
                fromPartial(_: {}): _174.QueryBaseDenomRequest;
            };
            QueryBaseDenomResponse: {
                encode(message: _174.QueryBaseDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.QueryBaseDenomResponse;
                fromJSON(object: any): _174.QueryBaseDenomResponse;
                toJSON(message: _174.QueryBaseDenomResponse): unknown;
                fromPartial(object: {
                    base_denom?: string;
                }): _174.QueryBaseDenomResponse;
            };
            UpdateFeeTokenProposal: {
                encode(message: _173.UpdateFeeTokenProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.UpdateFeeTokenProposal;
                fromJSON(object: any): _173.UpdateFeeTokenProposal;
                toJSON(message: _173.UpdateFeeTokenProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    feetoken?: {
                        denom?: string;
                        poolID?: any;
                    };
                }): _173.UpdateFeeTokenProposal;
            };
            GenesisState: {
                encode(message: _172.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.GenesisState;
                fromJSON(object: any): _172.GenesisState;
                toJSON(message: _172.GenesisState): unknown;
                fromPartial(object: {
                    basedenom?: string;
                    feetokens?: {
                        denom?: string;
                        poolID?: any;
                    }[];
                }): _172.GenesisState;
            };
            FeeToken: {
                encode(message: _171.FeeToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.FeeToken;
                fromJSON(object: any): _171.FeeToken;
                toJSON(message: _171.FeeToken): unknown;
                fromPartial(object: {
                    denom?: string;
                    poolID?: any;
                }): _171.FeeToken;
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
                            v1beta1: _309.MsgClientImpl;
                        };
                        stableswap: {
                            v1beta1: _310.MsgClientImpl;
                        };
                    };
                    v1beta1: _311.MsgClientImpl;
                };
                incentives: _312.MsgClientImpl;
                lockup: _313.MsgClientImpl;
                superfluid: _314.MsgClientImpl;
                tokenfactory: {
                    v1beta1: _315.MsgClientImpl;
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
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.rpc.query").QueryClientImpl;
                };
            };
            osmosis: {
                epochs: {
                    v1beta1: _300.QueryClientImpl;
                };
                gamm: {
                    v1beta1: _301.QueryClientImpl;
                };
                incentives: _302.QueryClientImpl;
                lockup: _303.QueryClientImpl;
                mint: {
                    v1beta1: _304.QueryClientImpl;
                };
                poolincentives: {
                    v1beta1: _305.QueryClientImpl;
                };
                superfluid: _306.QueryClientImpl;
                tokenfactory: {
                    v1beta1: _307.QueryClientImpl;
                };
                txfees: {
                    v1beta1: _308.QueryClientImpl;
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
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            osmosis: {
                epochs: {
                    v1beta1: _291.LCDQueryClient;
                };
                gamm: {
                    v1beta1: _292.LCDQueryClient;
                };
                incentives: _293.LCDQueryClient;
                lockup: _294.LCDQueryClient;
                mint: {
                    v1beta1: _295.LCDQueryClient;
                };
                poolincentives: {
                    v1beta1: _296.LCDQueryClient;
                };
                superfluid: _297.LCDQueryClient;
                tokenfactory: {
                    v1beta1: _298.LCDQueryClient;
                };
                txfees: {
                    v1beta1: _299.LCDQueryClient;
                };
            };
        }>;
    };
}
