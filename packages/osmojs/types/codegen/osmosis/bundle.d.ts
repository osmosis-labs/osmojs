import * as _79 from "./epochs/genesis";
import * as _80 from "./epochs/query";
import * as _81 from "./gamm/pool-models/balancer/balancerPool";
import * as _82 from "./gamm/v1beta1/genesis";
import * as _83 from "./gamm/v1beta1/query";
import * as _84 from "./gamm/v1beta1/tx";
import * as _85 from "./gamm/pool-models/balancer/tx/tx";
import * as _86 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _87 from "./gamm/pool-models/stableswap/tx";
import * as _88 from "./incentives/gauge";
import * as _89 from "./incentives/genesis";
import * as _90 from "./incentives/params";
import * as _91 from "./incentives/query";
import * as _92 from "./incentives/tx";
import * as _93 from "./lockup/genesis";
import * as _94 from "./lockup/lock";
import * as _95 from "./lockup/query";
import * as _96 from "./lockup/tx";
import * as _97 from "./mint/v1beta1/genesis";
import * as _98 from "./mint/v1beta1/mint";
import * as _99 from "./mint/v1beta1/query";
import * as _100 from "./pool-incentives/v1beta1/genesis";
import * as _101 from "./pool-incentives/v1beta1/gov";
import * as _102 from "./pool-incentives/v1beta1/incentives";
import * as _103 from "./pool-incentives/v1beta1/query";
import * as _104 from "./store/v1beta1/tree";
import * as _105 from "./streamswap/v1/event";
import * as _106 from "./streamswap/v1/genesis";
import * as _107 from "./streamswap/v1/params";
import * as _108 from "./streamswap/v1/query";
import * as _109 from "./streamswap/v1/state";
import * as _110 from "./streamswap/v1/tx";
import * as _111 from "./superfluid/genesis";
import * as _112 from "./superfluid/params";
import * as _113 from "./superfluid/query";
import * as _114 from "./superfluid/superfluid";
import * as _115 from "./superfluid/tx";
import * as _116 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _117 from "./tokenfactory/v1beta1/genesis";
import * as _118 from "./tokenfactory/v1beta1/params";
import * as _119 from "./tokenfactory/v1beta1/query";
import * as _120 from "./tokenfactory/v1beta1/tx";
import * as _121 from "./twap/v1beta1/genesis";
import * as _122 from "./twap/v1beta1/query";
import * as _123 from "./twap/v1beta1/twap_record";
import * as _124 from "./txfees/v1beta1/feetoken";
import * as _125 from "./txfees/v1beta1/genesis";
import * as _126 from "./txfees/v1beta1/gov";
import * as _127 from "./txfees/v1beta1/query";
import * as _217 from "./epochs/query.lcd";
import * as _218 from "./gamm/v1beta1/query.lcd";
import * as _219 from "./incentives/query.lcd";
import * as _220 from "./lockup/query.lcd";
import * as _221 from "./mint/v1beta1/query.lcd";
import * as _222 from "./pool-incentives/v1beta1/query.lcd";
import * as _223 from "./streamswap/v1/query.lcd";
import * as _224 from "./superfluid/query.lcd";
import * as _225 from "./tokenfactory/v1beta1/query.lcd";
import * as _226 from "./twap/v1beta1/query.lcd";
import * as _227 from "./txfees/v1beta1/query.lcd";
import * as _228 from "./epochs/query.rpc.Query";
import * as _229 from "./gamm/v1beta1/query.rpc.Query";
import * as _230 from "./incentives/query.rpc.Query";
import * as _231 from "./lockup/query.rpc.Query";
import * as _232 from "./mint/v1beta1/query.rpc.Query";
import * as _233 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _234 from "./streamswap/v1/query.rpc.Query";
import * as _235 from "./superfluid/query.rpc.Query";
import * as _236 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _237 from "./twap/v1beta1/query.rpc.Query";
import * as _238 from "./txfees/v1beta1/query.rpc.Query";
import * as _239 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _240 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _241 from "./gamm/v1beta1/tx.rpc.msg";
import * as _242 from "./incentives/tx.rpc.msg";
import * as _243 from "./lockup/tx.rpc.msg";
import * as _244 from "./streamswap/v1/tx.rpc.msg";
import * as _245 from "./superfluid/tx.rpc.msg";
import * as _246 from "./tokenfactory/v1beta1/tx.rpc.msg";
export declare namespace osmosis {
    namespace epochs {
        const v1beta1: {
            QueryClientImpl: typeof _228.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epochInfos(request?: _80.QueryEpochsInfoRequest): Promise<_80.QueryEpochsInfoResponse>;
                currentEpoch(request: _80.QueryCurrentEpochRequest): Promise<_80.QueryCurrentEpochResponse>;
            };
            LCDQueryClient: typeof _217.LCDQueryClient;
            QueryEpochsInfoRequest: {
                encode(_: _80.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryEpochsInfoRequest;
                fromPartial(_: Partial<_80.QueryEpochsInfoRequest>): _80.QueryEpochsInfoRequest;
            };
            QueryEpochsInfoResponse: {
                encode(message: _80.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryEpochsInfoResponse;
                fromPartial(object: Partial<_80.QueryEpochsInfoResponse>): _80.QueryEpochsInfoResponse;
            };
            QueryCurrentEpochRequest: {
                encode(message: _80.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryCurrentEpochRequest;
                fromPartial(object: Partial<_80.QueryCurrentEpochRequest>): _80.QueryCurrentEpochRequest;
            };
            QueryCurrentEpochResponse: {
                encode(message: _80.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryCurrentEpochResponse;
                fromPartial(object: Partial<_80.QueryCurrentEpochResponse>): _80.QueryCurrentEpochResponse;
            };
            EpochInfo: {
                encode(message: _79.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.EpochInfo;
                fromPartial(object: Partial<_79.EpochInfo>): _79.EpochInfo;
            };
            GenesisState: {
                encode(message: _79.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.GenesisState;
                fromPartial(object: Partial<_79.GenesisState>): _79.GenesisState;
            };
        };
    }
    namespace gamm {
        const v1beta1: {
            MsgClientImpl: typeof _241.MsgClientImpl;
            QueryClientImpl: typeof _229.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                pools(request?: _83.QueryPoolsRequest): Promise<_83.QueryPoolsResponse>;
                numPools(request?: _83.QueryNumPoolsRequest): Promise<_83.QueryNumPoolsResponse>;
                totalLiquidity(request?: _83.QueryTotalLiquidityRequest): Promise<_83.QueryTotalLiquidityResponse>;
                pool(request: _83.QueryPoolRequest): Promise<_83.QueryPoolResponse>;
                poolType(request: _83.QueryPoolTypeRequest): Promise<_83.QueryPoolTypeResponse>;
                poolParams(request: _83.QueryPoolParamsRequest): Promise<_83.QueryPoolParamsResponse>;
                totalPoolLiquidity(request: _83.QueryTotalPoolLiquidityRequest): Promise<_83.QueryTotalPoolLiquidityResponse>;
                totalShares(request: _83.QueryTotalSharesRequest): Promise<_83.QueryTotalSharesResponse>;
                spotPrice(request: _83.QuerySpotPriceRequest): Promise<_83.QuerySpotPriceResponse>;
                estimateSwapExactAmountIn(request: _83.QuerySwapExactAmountInRequest): Promise<_83.QuerySwapExactAmountInResponse>;
                estimateSwapExactAmountOut(request: _83.QuerySwapExactAmountOutRequest): Promise<_83.QuerySwapExactAmountOutResponse>;
            };
            LCDQueryClient: typeof _218.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    joinPool(value: _84.MsgJoinPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitPool(value: _84.MsgExitPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountIn(value: _84.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _84.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapExternAmountIn(value: _84.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapShareAmountOut(value: _84.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapExternAmountOut(value: _84.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapShareAmountIn(value: _84.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    joinPool(value: _84.MsgJoinPool): {
                        typeUrl: string;
                        value: _84.MsgJoinPool;
                    };
                    exitPool(value: _84.MsgExitPool): {
                        typeUrl: string;
                        value: _84.MsgExitPool;
                    };
                    swapExactAmountIn(value: _84.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _84.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _84.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _84.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _84.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _84.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _84.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _84.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _84.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _84.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _84.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _84.MsgExitSwapShareAmountIn;
                    };
                };
                fromPartial: {
                    joinPool(value: _84.MsgJoinPool): {
                        typeUrl: string;
                        value: _84.MsgJoinPool;
                    };
                    exitPool(value: _84.MsgExitPool): {
                        typeUrl: string;
                        value: _84.MsgExitPool;
                    };
                    swapExactAmountIn(value: _84.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _84.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _84.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _84.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _84.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _84.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _84.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _84.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _84.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _84.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _84.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _84.MsgExitSwapShareAmountIn;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareOutAmount, tokenInMaxs }: _84.MsgJoinPool) => {
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
                    }) => _84.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareInAmount, tokenOutMins }: _84.MsgExitPool) => {
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
                    }) => _84.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: _84.MsgSwapExactAmountIn) => {
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
                    }) => _84.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: _84.MsgSwapExactAmountOut) => {
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
                    }) => _84.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenIn, shareOutMinAmount }: _84.MsgJoinSwapExternAmountIn) => {
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
                    }) => _84.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenInDenom, shareOutAmount, tokenInMaxAmount }: _84.MsgJoinSwapShareAmountOut) => {
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
                    }) => _84.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOut, shareInMaxAmount }: _84.MsgExitSwapExternAmountOut) => {
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
                    }) => _84.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOutDenom, shareInAmount, tokenOutMinAmount }: _84.MsgExitSwapShareAmountIn) => {
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
                    }) => _84.MsgExitSwapShareAmountIn;
                };
            };
            MsgJoinPool: {
                encode(message: _84.MsgJoinPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgJoinPool;
                fromPartial(object: Partial<_84.MsgJoinPool>): _84.MsgJoinPool;
            };
            MsgJoinPoolResponse: {
                encode(message: _84.MsgJoinPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgJoinPoolResponse;
                fromPartial(object: Partial<_84.MsgJoinPoolResponse>): _84.MsgJoinPoolResponse;
            };
            MsgExitPool: {
                encode(message: _84.MsgExitPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgExitPool;
                fromPartial(object: Partial<_84.MsgExitPool>): _84.MsgExitPool;
            };
            MsgExitPoolResponse: {
                encode(message: _84.MsgExitPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgExitPoolResponse;
                fromPartial(object: Partial<_84.MsgExitPoolResponse>): _84.MsgExitPoolResponse;
            };
            SwapAmountInRoute: {
                encode(message: _84.SwapAmountInRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.SwapAmountInRoute;
                fromPartial(object: Partial<_84.SwapAmountInRoute>): _84.SwapAmountInRoute;
            };
            MsgSwapExactAmountIn: {
                encode(message: _84.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgSwapExactAmountIn;
                fromPartial(object: Partial<_84.MsgSwapExactAmountIn>): _84.MsgSwapExactAmountIn;
            };
            MsgSwapExactAmountInResponse: {
                encode(message: _84.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgSwapExactAmountInResponse;
                fromPartial(object: Partial<_84.MsgSwapExactAmountInResponse>): _84.MsgSwapExactAmountInResponse;
            };
            SwapAmountOutRoute: {
                encode(message: _84.SwapAmountOutRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.SwapAmountOutRoute;
                fromPartial(object: Partial<_84.SwapAmountOutRoute>): _84.SwapAmountOutRoute;
            };
            MsgSwapExactAmountOut: {
                encode(message: _84.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgSwapExactAmountOut;
                fromPartial(object: Partial<_84.MsgSwapExactAmountOut>): _84.MsgSwapExactAmountOut;
            };
            MsgSwapExactAmountOutResponse: {
                encode(message: _84.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgSwapExactAmountOutResponse;
                fromPartial(object: Partial<_84.MsgSwapExactAmountOutResponse>): _84.MsgSwapExactAmountOutResponse;
            };
            MsgJoinSwapExternAmountIn: {
                encode(message: _84.MsgJoinSwapExternAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgJoinSwapExternAmountIn;
                fromPartial(object: Partial<_84.MsgJoinSwapExternAmountIn>): _84.MsgJoinSwapExternAmountIn;
            };
            MsgJoinSwapExternAmountInResponse: {
                encode(message: _84.MsgJoinSwapExternAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgJoinSwapExternAmountInResponse;
                fromPartial(object: Partial<_84.MsgJoinSwapExternAmountInResponse>): _84.MsgJoinSwapExternAmountInResponse;
            };
            MsgJoinSwapShareAmountOut: {
                encode(message: _84.MsgJoinSwapShareAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgJoinSwapShareAmountOut;
                fromPartial(object: Partial<_84.MsgJoinSwapShareAmountOut>): _84.MsgJoinSwapShareAmountOut;
            };
            MsgJoinSwapShareAmountOutResponse: {
                encode(message: _84.MsgJoinSwapShareAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgJoinSwapShareAmountOutResponse;
                fromPartial(object: Partial<_84.MsgJoinSwapShareAmountOutResponse>): _84.MsgJoinSwapShareAmountOutResponse;
            };
            MsgExitSwapShareAmountIn: {
                encode(message: _84.MsgExitSwapShareAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgExitSwapShareAmountIn;
                fromPartial(object: Partial<_84.MsgExitSwapShareAmountIn>): _84.MsgExitSwapShareAmountIn;
            };
            MsgExitSwapShareAmountInResponse: {
                encode(message: _84.MsgExitSwapShareAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgExitSwapShareAmountInResponse;
                fromPartial(object: Partial<_84.MsgExitSwapShareAmountInResponse>): _84.MsgExitSwapShareAmountInResponse;
            };
            MsgExitSwapExternAmountOut: {
                encode(message: _84.MsgExitSwapExternAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgExitSwapExternAmountOut;
                fromPartial(object: Partial<_84.MsgExitSwapExternAmountOut>): _84.MsgExitSwapExternAmountOut;
            };
            MsgExitSwapExternAmountOutResponse: {
                encode(message: _84.MsgExitSwapExternAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgExitSwapExternAmountOutResponse;
                fromPartial(object: Partial<_84.MsgExitSwapExternAmountOutResponse>): _84.MsgExitSwapExternAmountOutResponse;
            };
            QueryPoolRequest: {
                encode(message: _83.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryPoolRequest;
                fromPartial(object: Partial<_83.QueryPoolRequest>): _83.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _83.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryPoolResponse;
                fromPartial(object: Partial<_83.QueryPoolResponse>): _83.QueryPoolResponse;
            };
            QueryPoolsRequest: {
                encode(message: _83.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryPoolsRequest;
                fromPartial(object: Partial<_83.QueryPoolsRequest>): _83.QueryPoolsRequest;
            };
            QueryPoolsResponse: {
                encode(message: _83.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryPoolsResponse;
                fromPartial(object: Partial<_83.QueryPoolsResponse>): _83.QueryPoolsResponse;
            };
            QueryNumPoolsRequest: {
                encode(_: _83.QueryNumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryNumPoolsRequest;
                fromPartial(_: Partial<_83.QueryNumPoolsRequest>): _83.QueryNumPoolsRequest;
            };
            QueryNumPoolsResponse: {
                encode(message: _83.QueryNumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryNumPoolsResponse;
                fromPartial(object: Partial<_83.QueryNumPoolsResponse>): _83.QueryNumPoolsResponse;
            };
            QueryPoolTypeRequest: {
                encode(message: _83.QueryPoolTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryPoolTypeRequest;
                fromPartial(object: Partial<_83.QueryPoolTypeRequest>): _83.QueryPoolTypeRequest;
            };
            QueryPoolTypeResponse: {
                encode(message: _83.QueryPoolTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryPoolTypeResponse;
                fromPartial(object: Partial<_83.QueryPoolTypeResponse>): _83.QueryPoolTypeResponse;
            };
            QueryPoolParamsRequest: {
                encode(message: _83.QueryPoolParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryPoolParamsRequest;
                fromPartial(object: Partial<_83.QueryPoolParamsRequest>): _83.QueryPoolParamsRequest;
            };
            QueryPoolParamsResponse: {
                encode(message: _83.QueryPoolParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryPoolParamsResponse;
                fromPartial(object: Partial<_83.QueryPoolParamsResponse>): _83.QueryPoolParamsResponse;
            };
            QueryTotalPoolLiquidityRequest: {
                encode(message: _83.QueryTotalPoolLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryTotalPoolLiquidityRequest;
                fromPartial(object: Partial<_83.QueryTotalPoolLiquidityRequest>): _83.QueryTotalPoolLiquidityRequest;
            };
            QueryTotalPoolLiquidityResponse: {
                encode(message: _83.QueryTotalPoolLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryTotalPoolLiquidityResponse;
                fromPartial(object: Partial<_83.QueryTotalPoolLiquidityResponse>): _83.QueryTotalPoolLiquidityResponse;
            };
            QueryTotalSharesRequest: {
                encode(message: _83.QueryTotalSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryTotalSharesRequest;
                fromPartial(object: Partial<_83.QueryTotalSharesRequest>): _83.QueryTotalSharesRequest;
            };
            QueryTotalSharesResponse: {
                encode(message: _83.QueryTotalSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryTotalSharesResponse;
                fromPartial(object: Partial<_83.QueryTotalSharesResponse>): _83.QueryTotalSharesResponse;
            };
            QuerySpotPriceRequest: {
                encode(message: _83.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QuerySpotPriceRequest;
                fromPartial(object: Partial<_83.QuerySpotPriceRequest>): _83.QuerySpotPriceRequest;
            };
            QuerySpotPriceResponse: {
                encode(message: _83.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QuerySpotPriceResponse;
                fromPartial(object: Partial<_83.QuerySpotPriceResponse>): _83.QuerySpotPriceResponse;
            };
            QuerySwapExactAmountInRequest: {
                encode(message: _83.QuerySwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QuerySwapExactAmountInRequest;
                fromPartial(object: Partial<_83.QuerySwapExactAmountInRequest>): _83.QuerySwapExactAmountInRequest;
            };
            QuerySwapExactAmountInResponse: {
                encode(message: _83.QuerySwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QuerySwapExactAmountInResponse;
                fromPartial(object: Partial<_83.QuerySwapExactAmountInResponse>): _83.QuerySwapExactAmountInResponse;
            };
            QuerySwapExactAmountOutRequest: {
                encode(message: _83.QuerySwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QuerySwapExactAmountOutRequest;
                fromPartial(object: Partial<_83.QuerySwapExactAmountOutRequest>): _83.QuerySwapExactAmountOutRequest;
            };
            QuerySwapExactAmountOutResponse: {
                encode(message: _83.QuerySwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QuerySwapExactAmountOutResponse;
                fromPartial(object: Partial<_83.QuerySwapExactAmountOutResponse>): _83.QuerySwapExactAmountOutResponse;
            };
            QueryTotalLiquidityRequest: {
                encode(_: _83.QueryTotalLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryTotalLiquidityRequest;
                fromPartial(_: Partial<_83.QueryTotalLiquidityRequest>): _83.QueryTotalLiquidityRequest;
            };
            QueryTotalLiquidityResponse: {
                encode(message: _83.QueryTotalLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryTotalLiquidityResponse;
                fromPartial(object: Partial<_83.QueryTotalLiquidityResponse>): _83.QueryTotalLiquidityResponse;
            };
            Params: {
                encode(message: _82.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Params;
                fromPartial(object: Partial<_82.Params>): _82.Params;
            };
            GenesisState: {
                encode(message: _82.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.GenesisState;
                fromPartial(object: Partial<_82.GenesisState>): _82.GenesisState;
            };
            SmoothWeightChangeParams: {
                encode(message: _81.SmoothWeightChangeParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.SmoothWeightChangeParams;
                fromPartial(object: Partial<_81.SmoothWeightChangeParams>): _81.SmoothWeightChangeParams;
            };
            PoolParams: {
                encode(message: _81.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.PoolParams;
                fromPartial(object: Partial<_81.PoolParams>): _81.PoolParams;
            };
            PoolAsset: {
                encode(message: _81.PoolAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.PoolAsset;
                fromPartial(object: Partial<_81.PoolAsset>): _81.PoolAsset;
            };
            Pool: {
                encode(message: _81.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.Pool;
                fromPartial(object: Partial<_81.Pool>): _81.Pool;
            };
        };
        namespace poolmodels {
            namespace balancer {
                const v1beta1: {
                    MsgClientImpl: typeof _239.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createBalancerPool(value: _85.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createBalancerPool(value: _85.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _85.MsgCreateBalancerPool;
                            };
                        };
                        fromPartial: {
                            createBalancerPool(value: _85.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _85.MsgCreateBalancerPool;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
                            aminoType: string;
                            toAmino: ({ sender, poolParams, poolAssets, futurePoolGovernor }: _85.MsgCreateBalancerPool) => {
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
                            }) => _85.MsgCreateBalancerPool;
                        };
                    };
                    MsgCreateBalancerPool: {
                        encode(message: _85.MsgCreateBalancerPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgCreateBalancerPool;
                        fromPartial(object: Partial<_85.MsgCreateBalancerPool>): _85.MsgCreateBalancerPool;
                    };
                    MsgCreateBalancerPoolResponse: {
                        encode(message: _85.MsgCreateBalancerPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgCreateBalancerPoolResponse;
                        fromPartial(object: Partial<_85.MsgCreateBalancerPoolResponse>): _85.MsgCreateBalancerPoolResponse;
                    };
                };
            }
            namespace stableswap {
                const v1beta1: {
                    MsgClientImpl: typeof _240.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createStableswapPool(value: _87.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            stableSwapAdjustScalingFactors(value: _87.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createStableswapPool(value: _87.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _87.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _87.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _87.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        fromPartial: {
                            createStableswapPool(value: _87.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _87.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _87.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _87.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
                            aminoType: string;
                            toAmino: ({ sender, poolParams, initialPoolLiquidity, scalingFactors, futurePoolGovernor }: _87.MsgCreateStableswapPool) => {
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
                                scaling_factors: import("long")[];
                                future_pool_governor: string;
                            }) => _87.MsgCreateStableswapPool;
                        };
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
                            aminoType: string;
                            toAmino: ({ sender, poolId, scalingFactors }: _87.MsgStableSwapAdjustScalingFactors) => {
                                sender: string;
                                pool_id: string;
                                scaling_factors: import("long")[];
                            };
                            fromAmino: ({ sender, pool_id, scaling_factors }: {
                                sender: string;
                                pool_id: string;
                                scaling_factors: import("long")[];
                            }) => _87.MsgStableSwapAdjustScalingFactors;
                        };
                    };
                    MsgCreateStableswapPool: {
                        encode(message: _87.MsgCreateStableswapPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgCreateStableswapPool;
                        fromPartial(object: Partial<_87.MsgCreateStableswapPool>): _87.MsgCreateStableswapPool;
                    };
                    MsgCreateStableswapPoolResponse: {
                        encode(message: _87.MsgCreateStableswapPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgCreateStableswapPoolResponse;
                        fromPartial(object: Partial<_87.MsgCreateStableswapPoolResponse>): _87.MsgCreateStableswapPoolResponse;
                    };
                    MsgStableSwapAdjustScalingFactors: {
                        encode(message: _87.MsgStableSwapAdjustScalingFactors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgStableSwapAdjustScalingFactors;
                        fromPartial(object: Partial<_87.MsgStableSwapAdjustScalingFactors>): _87.MsgStableSwapAdjustScalingFactors;
                    };
                    MsgStableSwapAdjustScalingFactorsResponse: {
                        encode(_: _87.MsgStableSwapAdjustScalingFactorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgStableSwapAdjustScalingFactorsResponse;
                        fromPartial(_: Partial<_87.MsgStableSwapAdjustScalingFactorsResponse>): _87.MsgStableSwapAdjustScalingFactorsResponse;
                    };
                    PoolParams: {
                        encode(message: _86.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.PoolParams;
                        fromPartial(object: Partial<_86.PoolParams>): _86.PoolParams;
                    };
                    Pool: {
                        encode(message: _86.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Pool;
                        fromPartial(object: Partial<_86.Pool>): _86.Pool;
                    };
                };
            }
        }
    }
    const incentives: {
        MsgClientImpl: typeof _242.MsgClientImpl;
        QueryClientImpl: typeof _230.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            moduleToDistributeCoins(request?: _91.ModuleToDistributeCoinsRequest): Promise<_91.ModuleToDistributeCoinsResponse>;
            moduleDistributedCoins(request?: _91.ModuleDistributedCoinsRequest): Promise<_91.ModuleDistributedCoinsResponse>;
            gaugeByID(request: _91.GaugeByIDRequest): Promise<_91.GaugeByIDResponse>;
            gauges(request?: _91.GaugesRequest): Promise<_91.GaugesResponse>;
            activeGauges(request?: _91.ActiveGaugesRequest): Promise<_91.ActiveGaugesResponse>;
            activeGaugesPerDenom(request: _91.ActiveGaugesPerDenomRequest): Promise<_91.ActiveGaugesPerDenomResponse>;
            upcomingGauges(request?: _91.UpcomingGaugesRequest): Promise<_91.UpcomingGaugesResponse>;
            upcomingGaugesPerDenom(request: _91.UpcomingGaugesPerDenomRequest): Promise<_91.UpcomingGaugesPerDenomResponse>;
            rewardsEst(request: _91.RewardsEstRequest): Promise<_91.RewardsEstResponse>;
            lockableDurations(request?: _91.QueryLockableDurationsRequest): Promise<_91.QueryLockableDurationsResponse>;
        };
        LCDQueryClient: typeof _219.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                createGauge(value: _92.MsgCreateGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addToGauge(value: _92.MsgAddToGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createGauge(value: _92.MsgCreateGauge): {
                    typeUrl: string;
                    value: _92.MsgCreateGauge;
                };
                addToGauge(value: _92.MsgAddToGauge): {
                    typeUrl: string;
                    value: _92.MsgAddToGauge;
                };
            };
            fromPartial: {
                createGauge(value: _92.MsgCreateGauge): {
                    typeUrl: string;
                    value: _92.MsgCreateGauge;
                };
                addToGauge(value: _92.MsgAddToGauge): {
                    typeUrl: string;
                    value: _92.MsgAddToGauge;
                };
            };
        };
        AminoConverter: {
            "/osmosis.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: ({ isPerpetual, owner, distributeTo, coins, startTime, numEpochsPaidOver }: _92.MsgCreateGauge) => {
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
                }) => _92.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: ({ owner, gaugeId, rewards }: _92.MsgAddToGauge) => {
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
                }) => _92.MsgAddToGauge;
            };
        };
        MsgCreateGauge: {
            encode(message: _92.MsgCreateGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.MsgCreateGauge;
            fromPartial(object: Partial<_92.MsgCreateGauge>): _92.MsgCreateGauge;
        };
        MsgCreateGaugeResponse: {
            encode(_: _92.MsgCreateGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.MsgCreateGaugeResponse;
            fromPartial(_: Partial<_92.MsgCreateGaugeResponse>): _92.MsgCreateGaugeResponse;
        };
        MsgAddToGauge: {
            encode(message: _92.MsgAddToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.MsgAddToGauge;
            fromPartial(object: Partial<_92.MsgAddToGauge>): _92.MsgAddToGauge;
        };
        MsgAddToGaugeResponse: {
            encode(_: _92.MsgAddToGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.MsgAddToGaugeResponse;
            fromPartial(_: Partial<_92.MsgAddToGaugeResponse>): _92.MsgAddToGaugeResponse;
        };
        ModuleToDistributeCoinsRequest: {
            encode(_: _91.ModuleToDistributeCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.ModuleToDistributeCoinsRequest;
            fromPartial(_: Partial<_91.ModuleToDistributeCoinsRequest>): _91.ModuleToDistributeCoinsRequest;
        };
        ModuleToDistributeCoinsResponse: {
            encode(message: _91.ModuleToDistributeCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.ModuleToDistributeCoinsResponse;
            fromPartial(object: Partial<_91.ModuleToDistributeCoinsResponse>): _91.ModuleToDistributeCoinsResponse;
        };
        ModuleDistributedCoinsRequest: {
            encode(_: _91.ModuleDistributedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.ModuleDistributedCoinsRequest;
            fromPartial(_: Partial<_91.ModuleDistributedCoinsRequest>): _91.ModuleDistributedCoinsRequest;
        };
        ModuleDistributedCoinsResponse: {
            encode(message: _91.ModuleDistributedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.ModuleDistributedCoinsResponse;
            fromPartial(object: Partial<_91.ModuleDistributedCoinsResponse>): _91.ModuleDistributedCoinsResponse;
        };
        GaugeByIDRequest: {
            encode(message: _91.GaugeByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.GaugeByIDRequest;
            fromPartial(object: Partial<_91.GaugeByIDRequest>): _91.GaugeByIDRequest;
        };
        GaugeByIDResponse: {
            encode(message: _91.GaugeByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.GaugeByIDResponse;
            fromPartial(object: Partial<_91.GaugeByIDResponse>): _91.GaugeByIDResponse;
        };
        GaugesRequest: {
            encode(message: _91.GaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.GaugesRequest;
            fromPartial(object: Partial<_91.GaugesRequest>): _91.GaugesRequest;
        };
        GaugesResponse: {
            encode(message: _91.GaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.GaugesResponse;
            fromPartial(object: Partial<_91.GaugesResponse>): _91.GaugesResponse;
        };
        ActiveGaugesRequest: {
            encode(message: _91.ActiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.ActiveGaugesRequest;
            fromPartial(object: Partial<_91.ActiveGaugesRequest>): _91.ActiveGaugesRequest;
        };
        ActiveGaugesResponse: {
            encode(message: _91.ActiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.ActiveGaugesResponse;
            fromPartial(object: Partial<_91.ActiveGaugesResponse>): _91.ActiveGaugesResponse;
        };
        ActiveGaugesPerDenomRequest: {
            encode(message: _91.ActiveGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.ActiveGaugesPerDenomRequest;
            fromPartial(object: Partial<_91.ActiveGaugesPerDenomRequest>): _91.ActiveGaugesPerDenomRequest;
        };
        ActiveGaugesPerDenomResponse: {
            encode(message: _91.ActiveGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.ActiveGaugesPerDenomResponse;
            fromPartial(object: Partial<_91.ActiveGaugesPerDenomResponse>): _91.ActiveGaugesPerDenomResponse;
        };
        UpcomingGaugesRequest: {
            encode(message: _91.UpcomingGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.UpcomingGaugesRequest;
            fromPartial(object: Partial<_91.UpcomingGaugesRequest>): _91.UpcomingGaugesRequest;
        };
        UpcomingGaugesResponse: {
            encode(message: _91.UpcomingGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.UpcomingGaugesResponse;
            fromPartial(object: Partial<_91.UpcomingGaugesResponse>): _91.UpcomingGaugesResponse;
        };
        UpcomingGaugesPerDenomRequest: {
            encode(message: _91.UpcomingGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.UpcomingGaugesPerDenomRequest;
            fromPartial(object: Partial<_91.UpcomingGaugesPerDenomRequest>): _91.UpcomingGaugesPerDenomRequest;
        };
        UpcomingGaugesPerDenomResponse: {
            encode(message: _91.UpcomingGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.UpcomingGaugesPerDenomResponse;
            fromPartial(object: Partial<_91.UpcomingGaugesPerDenomResponse>): _91.UpcomingGaugesPerDenomResponse;
        };
        RewardsEstRequest: {
            encode(message: _91.RewardsEstRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.RewardsEstRequest;
            fromPartial(object: Partial<_91.RewardsEstRequest>): _91.RewardsEstRequest;
        };
        RewardsEstResponse: {
            encode(message: _91.RewardsEstResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.RewardsEstResponse;
            fromPartial(object: Partial<_91.RewardsEstResponse>): _91.RewardsEstResponse;
        };
        QueryLockableDurationsRequest: {
            encode(_: _91.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryLockableDurationsRequest;
            fromPartial(_: Partial<_91.QueryLockableDurationsRequest>): _91.QueryLockableDurationsRequest;
        };
        QueryLockableDurationsResponse: {
            encode(message: _91.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryLockableDurationsResponse;
            fromPartial(object: Partial<_91.QueryLockableDurationsResponse>): _91.QueryLockableDurationsResponse;
        };
        Params: {
            encode(message: _90.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Params;
            fromPartial(object: Partial<_90.Params>): _90.Params;
        };
        GenesisState: {
            encode(message: _89.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.GenesisState;
            fromPartial(object: Partial<_89.GenesisState>): _89.GenesisState;
        };
        Gauge: {
            encode(message: _88.Gauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Gauge;
            fromPartial(object: Partial<_88.Gauge>): _88.Gauge;
        };
        LockableDurationsInfo: {
            encode(message: _88.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.LockableDurationsInfo;
            fromPartial(object: Partial<_88.LockableDurationsInfo>): _88.LockableDurationsInfo;
        };
    };
    const lockup: {
        MsgClientImpl: typeof _243.MsgClientImpl;
        QueryClientImpl: typeof _231.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            moduleBalance(request?: _95.ModuleBalanceRequest): Promise<_95.ModuleBalanceResponse>;
            moduleLockedAmount(request?: _95.ModuleLockedAmountRequest): Promise<_95.ModuleLockedAmountResponse>;
            accountUnlockableCoins(request: _95.AccountUnlockableCoinsRequest): Promise<_95.AccountUnlockableCoinsResponse>;
            accountUnlockingCoins(request: _95.AccountUnlockingCoinsRequest): Promise<_95.AccountUnlockingCoinsResponse>;
            accountLockedCoins(request: _95.AccountLockedCoinsRequest): Promise<_95.AccountLockedCoinsResponse>;
            accountLockedPastTime(request: _95.AccountLockedPastTimeRequest): Promise<_95.AccountLockedPastTimeResponse>;
            accountLockedPastTimeNotUnlockingOnly(request: _95.AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<_95.AccountLockedPastTimeNotUnlockingOnlyResponse>;
            accountUnlockedBeforeTime(request: _95.AccountUnlockedBeforeTimeRequest): Promise<_95.AccountUnlockedBeforeTimeResponse>;
            accountLockedPastTimeDenom(request: _95.AccountLockedPastTimeDenomRequest): Promise<_95.AccountLockedPastTimeDenomResponse>;
            lockedDenom(request: _95.LockedDenomRequest): Promise<_95.LockedDenomResponse>;
            lockedByID(request: _95.LockedRequest): Promise<_95.LockedResponse>;
            syntheticLockupsByLockupID(request: _95.SyntheticLockupsByLockupIDRequest): Promise<_95.SyntheticLockupsByLockupIDResponse>;
            accountLockedLongerDuration(request: _95.AccountLockedLongerDurationRequest): Promise<_95.AccountLockedLongerDurationResponse>;
            accountLockedDuration(request: _95.AccountLockedDurationRequest): Promise<_95.AccountLockedDurationResponse>;
            accountLockedLongerDurationNotUnlockingOnly(request: _95.AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<_95.AccountLockedLongerDurationNotUnlockingOnlyResponse>;
            accountLockedLongerDurationDenom(request: _95.AccountLockedLongerDurationDenomRequest): Promise<_95.AccountLockedLongerDurationDenomResponse>;
        };
        LCDQueryClient: typeof _220.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                lockTokens(value: _96.MsgLockTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlockingAll(value: _96.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlocking(value: _96.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                extendLockup(value: _96.MsgExtendLockup): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                lockTokens(value: _96.MsgLockTokens): {
                    typeUrl: string;
                    value: _96.MsgLockTokens;
                };
                beginUnlockingAll(value: _96.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _96.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _96.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _96.MsgBeginUnlocking;
                };
                extendLockup(value: _96.MsgExtendLockup): {
                    typeUrl: string;
                    value: _96.MsgExtendLockup;
                };
            };
            fromPartial: {
                lockTokens(value: _96.MsgLockTokens): {
                    typeUrl: string;
                    value: _96.MsgLockTokens;
                };
                beginUnlockingAll(value: _96.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _96.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _96.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _96.MsgBeginUnlocking;
                };
                extendLockup(value: _96.MsgExtendLockup): {
                    typeUrl: string;
                    value: _96.MsgExtendLockup;
                };
            };
        };
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: ({ owner, duration, coins }: _96.MsgLockTokens) => {
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
                }) => _96.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: ({ owner }: _96.MsgBeginUnlockingAll) => {
                    owner: string;
                };
                fromAmino: ({ owner }: {
                    owner: string;
                }) => _96.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: ({ owner, ID, coins }: _96.MsgBeginUnlocking) => {
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
                }) => _96.MsgBeginUnlocking;
            };
            "/osmosis.lockup.MsgExtendLockup": {
                aminoType: string;
                toAmino: ({ owner, ID, duration }: _96.MsgExtendLockup) => {
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
                }) => _96.MsgExtendLockup;
            };
        };
        MsgLockTokens: {
            encode(message: _96.MsgLockTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgLockTokens;
            fromPartial(object: Partial<_96.MsgLockTokens>): _96.MsgLockTokens;
        };
        MsgLockTokensResponse: {
            encode(message: _96.MsgLockTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgLockTokensResponse;
            fromPartial(object: Partial<_96.MsgLockTokensResponse>): _96.MsgLockTokensResponse;
        };
        MsgBeginUnlockingAll: {
            encode(message: _96.MsgBeginUnlockingAll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgBeginUnlockingAll;
            fromPartial(object: Partial<_96.MsgBeginUnlockingAll>): _96.MsgBeginUnlockingAll;
        };
        MsgBeginUnlockingAllResponse: {
            encode(message: _96.MsgBeginUnlockingAllResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgBeginUnlockingAllResponse;
            fromPartial(object: Partial<_96.MsgBeginUnlockingAllResponse>): _96.MsgBeginUnlockingAllResponse;
        };
        MsgBeginUnlocking: {
            encode(message: _96.MsgBeginUnlocking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgBeginUnlocking;
            fromPartial(object: Partial<_96.MsgBeginUnlocking>): _96.MsgBeginUnlocking;
        };
        MsgBeginUnlockingResponse: {
            encode(message: _96.MsgBeginUnlockingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgBeginUnlockingResponse;
            fromPartial(object: Partial<_96.MsgBeginUnlockingResponse>): _96.MsgBeginUnlockingResponse;
        };
        MsgExtendLockup: {
            encode(message: _96.MsgExtendLockup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgExtendLockup;
            fromPartial(object: Partial<_96.MsgExtendLockup>): _96.MsgExtendLockup;
        };
        MsgExtendLockupResponse: {
            encode(message: _96.MsgExtendLockupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgExtendLockupResponse;
            fromPartial(object: Partial<_96.MsgExtendLockupResponse>): _96.MsgExtendLockupResponse;
        };
        ModuleBalanceRequest: {
            encode(_: _95.ModuleBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ModuleBalanceRequest;
            fromPartial(_: Partial<_95.ModuleBalanceRequest>): _95.ModuleBalanceRequest;
        };
        ModuleBalanceResponse: {
            encode(message: _95.ModuleBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ModuleBalanceResponse;
            fromPartial(object: Partial<_95.ModuleBalanceResponse>): _95.ModuleBalanceResponse;
        };
        ModuleLockedAmountRequest: {
            encode(_: _95.ModuleLockedAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ModuleLockedAmountRequest;
            fromPartial(_: Partial<_95.ModuleLockedAmountRequest>): _95.ModuleLockedAmountRequest;
        };
        ModuleLockedAmountResponse: {
            encode(message: _95.ModuleLockedAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ModuleLockedAmountResponse;
            fromPartial(object: Partial<_95.ModuleLockedAmountResponse>): _95.ModuleLockedAmountResponse;
        };
        AccountUnlockableCoinsRequest: {
            encode(message: _95.AccountUnlockableCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.AccountUnlockableCoinsRequest;
            fromPartial(object: Partial<_95.AccountUnlockableCoinsRequest>): _95.AccountUnlockableCoinsRequest;
        };
        AccountUnlockableCoinsResponse: {
            encode(message: _95.AccountUnlockableCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.AccountUnlockableCoinsResponse;
            fromPartial(object: Partial<_95.AccountUnlockableCoinsResponse>): _95.AccountUnlockableCoinsResponse;
        };
        AccountUnlockingCoinsRequest: {
            encode(message: _95.AccountUnlockingCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.AccountUnlockingCoinsRequest;
            fromPartial(object: Partial<_95.AccountUnlockingCoinsRequest>): _95.AccountUnlockingCoinsRequest;
        };
        AccountUnlockingCoinsResponse: {
            encode(message: _95.AccountUnlockingCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.AccountUnlockingCoinsResponse;
            fromPartial(object: Partial<_95.AccountUnlockingCoinsResponse>): _95.AccountUnlockingCoinsResponse;
        };
        AccountLockedCoinsRequest: {
            encode(message: _95.AccountLockedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.AccountLockedCoinsRequest;
            fromPartial(object: Partial<_95.AccountLockedCoinsRequest>): _95.AccountLockedCoinsRequest;
        };
        AccountLockedCoinsResponse: {
            encode(message: _95.AccountLockedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.AccountLockedCoinsResponse;
            fromPartial(object: Partial<_95.AccountLockedCoinsResponse>): _95.AccountLockedCoinsResponse;
        };
        AccountLockedPastTimeRequest: {
            encode(message: _95.AccountLockedPastTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.AccountLockedPastTimeRequest;
            fromPartial(object: Partial<_95.AccountLockedPastTimeRequest>): _95.AccountLockedPastTimeRequest;
        };
        AccountLockedPastTimeResponse: {
            encode(message: _95.AccountLockedPastTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.AccountLockedPastTimeResponse;
            fromPartial(object: Partial<_95.AccountLockedPastTimeResponse>): _95.AccountLockedPastTimeResponse;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            encode(message: _95.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromPartial(object: Partial<_95.AccountLockedPastTimeNotUnlockingOnlyRequest>): _95.AccountLockedPastTimeNotUnlockingOnlyRequest;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            encode(message: _95.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromPartial(object: Partial<_95.AccountLockedPastTimeNotUnlockingOnlyResponse>): _95.AccountLockedPastTimeNotUnlockingOnlyResponse;
        };
        AccountUnlockedBeforeTimeRequest: {
            encode(message: _95.AccountUnlockedBeforeTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.AccountUnlockedBeforeTimeRequest;
            fromPartial(object: Partial<_95.AccountUnlockedBeforeTimeRequest>): _95.AccountUnlockedBeforeTimeRequest;
        };
        AccountUnlockedBeforeTimeResponse: {
            encode(message: _95.AccountUnlockedBeforeTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.AccountUnlockedBeforeTimeResponse;
            fromPartial(object: Partial<_95.AccountUnlockedBeforeTimeResponse>): _95.AccountUnlockedBeforeTimeResponse;
        };
        AccountLockedPastTimeDenomRequest: {
            encode(message: _95.AccountLockedPastTimeDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.AccountLockedPastTimeDenomRequest;
            fromPartial(object: Partial<_95.AccountLockedPastTimeDenomRequest>): _95.AccountLockedPastTimeDenomRequest;
        };
        AccountLockedPastTimeDenomResponse: {
            encode(message: _95.AccountLockedPastTimeDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.AccountLockedPastTimeDenomResponse;
            fromPartial(object: Partial<_95.AccountLockedPastTimeDenomResponse>): _95.AccountLockedPastTimeDenomResponse;
        };
        LockedDenomRequest: {
            encode(message: _95.LockedDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.LockedDenomRequest;
            fromPartial(object: Partial<_95.LockedDenomRequest>): _95.LockedDenomRequest;
        };
        LockedDenomResponse: {
            encode(message: _95.LockedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.LockedDenomResponse;
            fromPartial(object: Partial<_95.LockedDenomResponse>): _95.LockedDenomResponse;
        };
        LockedRequest: {
            encode(message: _95.LockedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.LockedRequest;
            fromPartial(object: Partial<_95.LockedRequest>): _95.LockedRequest;
        };
        LockedResponse: {
            encode(message: _95.LockedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.LockedResponse;
            fromPartial(object: Partial<_95.LockedResponse>): _95.LockedResponse;
        };
        SyntheticLockupsByLockupIDRequest: {
            encode(message: _95.SyntheticLockupsByLockupIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.SyntheticLockupsByLockupIDRequest;
            fromPartial(object: Partial<_95.SyntheticLockupsByLockupIDRequest>): _95.SyntheticLockupsByLockupIDRequest;
        };
        SyntheticLockupsByLockupIDResponse: {
            encode(message: _95.SyntheticLockupsByLockupIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.SyntheticLockupsByLockupIDResponse;
            fromPartial(object: Partial<_95.SyntheticLockupsByLockupIDResponse>): _95.SyntheticLockupsByLockupIDResponse;
        };
        AccountLockedLongerDurationRequest: {
            encode(message: _95.AccountLockedLongerDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.AccountLockedLongerDurationRequest;
            fromPartial(object: Partial<_95.AccountLockedLongerDurationRequest>): _95.AccountLockedLongerDurationRequest;
        };
        AccountLockedLongerDurationResponse: {
            encode(message: _95.AccountLockedLongerDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.AccountLockedLongerDurationResponse;
            fromPartial(object: Partial<_95.AccountLockedLongerDurationResponse>): _95.AccountLockedLongerDurationResponse;
        };
        AccountLockedDurationRequest: {
            encode(message: _95.AccountLockedDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.AccountLockedDurationRequest;
            fromPartial(object: Partial<_95.AccountLockedDurationRequest>): _95.AccountLockedDurationRequest;
        };
        AccountLockedDurationResponse: {
            encode(message: _95.AccountLockedDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.AccountLockedDurationResponse;
            fromPartial(object: Partial<_95.AccountLockedDurationResponse>): _95.AccountLockedDurationResponse;
        };
        AccountLockedLongerDurationNotUnlockingOnlyRequest: {
            encode(message: _95.AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromPartial(object: Partial<_95.AccountLockedLongerDurationNotUnlockingOnlyRequest>): _95.AccountLockedLongerDurationNotUnlockingOnlyRequest;
        };
        AccountLockedLongerDurationNotUnlockingOnlyResponse: {
            encode(message: _95.AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromPartial(object: Partial<_95.AccountLockedLongerDurationNotUnlockingOnlyResponse>): _95.AccountLockedLongerDurationNotUnlockingOnlyResponse;
        };
        AccountLockedLongerDurationDenomRequest: {
            encode(message: _95.AccountLockedLongerDurationDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.AccountLockedLongerDurationDenomRequest;
            fromPartial(object: Partial<_95.AccountLockedLongerDurationDenomRequest>): _95.AccountLockedLongerDurationDenomRequest;
        };
        AccountLockedLongerDurationDenomResponse: {
            encode(message: _95.AccountLockedLongerDurationDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.AccountLockedLongerDurationDenomResponse;
            fromPartial(object: Partial<_95.AccountLockedLongerDurationDenomResponse>): _95.AccountLockedLongerDurationDenomResponse;
        };
        lockQueryTypeFromJSON(object: any): _94.LockQueryType;
        lockQueryTypeToJSON(object: _94.LockQueryType): string;
        LockQueryType: typeof _94.LockQueryType;
        LockQueryTypeSDKType: typeof _94.LockQueryTypeSDKType;
        PeriodLock: {
            encode(message: _94.PeriodLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.PeriodLock;
            fromPartial(object: Partial<_94.PeriodLock>): _94.PeriodLock;
        };
        QueryCondition: {
            encode(message: _94.QueryCondition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryCondition;
            fromPartial(object: Partial<_94.QueryCondition>): _94.QueryCondition;
        };
        SyntheticLock: {
            encode(message: _94.SyntheticLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.SyntheticLock;
            fromPartial(object: Partial<_94.SyntheticLock>): _94.SyntheticLock;
        };
        GenesisState: {
            encode(message: _93.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.GenesisState;
            fromPartial(object: Partial<_93.GenesisState>): _93.GenesisState;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _232.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _99.QueryParamsRequest): Promise<_99.QueryParamsResponse>;
                epochProvisions(request?: _99.QueryEpochProvisionsRequest): Promise<_99.QueryEpochProvisionsResponse>;
            };
            LCDQueryClient: typeof _221.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _99.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryParamsRequest;
                fromPartial(_: Partial<_99.QueryParamsRequest>): _99.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _99.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryParamsResponse;
                fromPartial(object: Partial<_99.QueryParamsResponse>): _99.QueryParamsResponse;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _99.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryEpochProvisionsRequest;
                fromPartial(_: Partial<_99.QueryEpochProvisionsRequest>): _99.QueryEpochProvisionsRequest;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _99.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryEpochProvisionsResponse;
                fromPartial(object: Partial<_99.QueryEpochProvisionsResponse>): _99.QueryEpochProvisionsResponse;
            };
            Minter: {
                encode(message: _98.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Minter;
                fromPartial(object: Partial<_98.Minter>): _98.Minter;
            };
            WeightedAddress: {
                encode(message: _98.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.WeightedAddress;
                fromPartial(object: Partial<_98.WeightedAddress>): _98.WeightedAddress;
            };
            DistributionProportions: {
                encode(message: _98.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.DistributionProportions;
                fromPartial(object: Partial<_98.DistributionProportions>): _98.DistributionProportions;
            };
            Params: {
                encode(message: _98.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Params;
                fromPartial(object: Partial<_98.Params>): _98.Params;
            };
            GenesisState: {
                encode(message: _97.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.GenesisState;
                fromPartial(object: Partial<_97.GenesisState>): _97.GenesisState;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            QueryClientImpl: typeof _233.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                gaugeIds(request: _103.QueryGaugeIdsRequest): Promise<_103.QueryGaugeIdsResponse>;
                distrInfo(request?: _103.QueryDistrInfoRequest): Promise<_103.QueryDistrInfoResponse>;
                params(request?: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                lockableDurations(request?: _103.QueryLockableDurationsRequest): Promise<_103.QueryLockableDurationsResponse>;
                incentivizedPools(request?: _103.QueryIncentivizedPoolsRequest): Promise<_103.QueryIncentivizedPoolsResponse>;
                externalIncentiveGauges(request?: _103.QueryExternalIncentiveGaugesRequest): Promise<_103.QueryExternalIncentiveGaugesResponse>;
            };
            LCDQueryClient: typeof _222.LCDQueryClient;
            QueryGaugeIdsRequest: {
                encode(message: _103.QueryGaugeIdsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryGaugeIdsRequest;
                fromPartial(object: Partial<_103.QueryGaugeIdsRequest>): _103.QueryGaugeIdsRequest;
            };
            QueryGaugeIdsResponse: {
                encode(message: _103.QueryGaugeIdsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryGaugeIdsResponse;
                fromPartial(object: Partial<_103.QueryGaugeIdsResponse>): _103.QueryGaugeIdsResponse;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                encode(message: _103.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromPartial(object: Partial<_103.QueryGaugeIdsResponse_GaugeIdWithDuration>): _103.QueryGaugeIdsResponse_GaugeIdWithDuration;
            };
            QueryDistrInfoRequest: {
                encode(_: _103.QueryDistrInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryDistrInfoRequest;
                fromPartial(_: Partial<_103.QueryDistrInfoRequest>): _103.QueryDistrInfoRequest;
            };
            QueryDistrInfoResponse: {
                encode(message: _103.QueryDistrInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryDistrInfoResponse;
                fromPartial(object: Partial<_103.QueryDistrInfoResponse>): _103.QueryDistrInfoResponse;
            };
            QueryParamsRequest: {
                encode(_: _103.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryParamsRequest;
                fromPartial(_: Partial<_103.QueryParamsRequest>): _103.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _103.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryParamsResponse;
                fromPartial(object: Partial<_103.QueryParamsResponse>): _103.QueryParamsResponse;
            };
            QueryLockableDurationsRequest: {
                encode(_: _103.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryLockableDurationsRequest;
                fromPartial(_: Partial<_103.QueryLockableDurationsRequest>): _103.QueryLockableDurationsRequest;
            };
            QueryLockableDurationsResponse: {
                encode(message: _103.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryLockableDurationsResponse;
                fromPartial(object: Partial<_103.QueryLockableDurationsResponse>): _103.QueryLockableDurationsResponse;
            };
            QueryIncentivizedPoolsRequest: {
                encode(_: _103.QueryIncentivizedPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryIncentivizedPoolsRequest;
                fromPartial(_: Partial<_103.QueryIncentivizedPoolsRequest>): _103.QueryIncentivizedPoolsRequest;
            };
            IncentivizedPool: {
                encode(message: _103.IncentivizedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.IncentivizedPool;
                fromPartial(object: Partial<_103.IncentivizedPool>): _103.IncentivizedPool;
            };
            QueryIncentivizedPoolsResponse: {
                encode(message: _103.QueryIncentivizedPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryIncentivizedPoolsResponse;
                fromPartial(object: Partial<_103.QueryIncentivizedPoolsResponse>): _103.QueryIncentivizedPoolsResponse;
            };
            QueryExternalIncentiveGaugesRequest: {
                encode(_: _103.QueryExternalIncentiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryExternalIncentiveGaugesRequest;
                fromPartial(_: Partial<_103.QueryExternalIncentiveGaugesRequest>): _103.QueryExternalIncentiveGaugesRequest;
            };
            QueryExternalIncentiveGaugesResponse: {
                encode(message: _103.QueryExternalIncentiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryExternalIncentiveGaugesResponse;
                fromPartial(object: Partial<_103.QueryExternalIncentiveGaugesResponse>): _103.QueryExternalIncentiveGaugesResponse;
            };
            Params: {
                encode(message: _102.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Params;
                fromPartial(object: Partial<_102.Params>): _102.Params;
            };
            LockableDurationsInfo: {
                encode(message: _102.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.LockableDurationsInfo;
                fromPartial(object: Partial<_102.LockableDurationsInfo>): _102.LockableDurationsInfo;
            };
            DistrInfo: {
                encode(message: _102.DistrInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.DistrInfo;
                fromPartial(object: Partial<_102.DistrInfo>): _102.DistrInfo;
            };
            DistrRecord: {
                encode(message: _102.DistrRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.DistrRecord;
                fromPartial(object: Partial<_102.DistrRecord>): _102.DistrRecord;
            };
            PoolToGauge: {
                encode(message: _102.PoolToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.PoolToGauge;
                fromPartial(object: Partial<_102.PoolToGauge>): _102.PoolToGauge;
            };
            PoolToGauges: {
                encode(message: _102.PoolToGauges, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.PoolToGauges;
                fromPartial(object: Partial<_102.PoolToGauges>): _102.PoolToGauges;
            };
            ReplacePoolIncentivesProposal: {
                encode(message: _101.ReplacePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.ReplacePoolIncentivesProposal;
                fromPartial(object: Partial<_101.ReplacePoolIncentivesProposal>): _101.ReplacePoolIncentivesProposal;
            };
            UpdatePoolIncentivesProposal: {
                encode(message: _101.UpdatePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.UpdatePoolIncentivesProposal;
                fromPartial(object: Partial<_101.UpdatePoolIncentivesProposal>): _101.UpdatePoolIncentivesProposal;
            };
            GenesisState: {
                encode(message: _100.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.GenesisState;
                fromPartial(object: Partial<_100.GenesisState>): _100.GenesisState;
            };
        };
    }
    namespace store {
        const v1beta1: {
            Node: {
                encode(message: _104.Node, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Node;
                fromPartial(object: Partial<_104.Node>): _104.Node;
            };
            Child: {
                encode(message: _104.Child, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Child;
                fromPartial(object: Partial<_104.Child>): _104.Child;
            };
            Leaf: {
                encode(message: _104.Leaf, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Leaf;
                fromPartial(object: Partial<_104.Leaf>): _104.Leaf;
            };
        };
    }
    namespace streamswap {
        const v1: {
            MsgClientImpl: typeof _244.MsgClientImpl;
            QueryClientImpl: typeof _234.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                sales(request?: _108.QuerySales): Promise<_108.QuerySalesResponse>;
                sale(request: _108.QuerySale): Promise<_108.QuerySaleResponse>;
                userPosition(request: _108.QueryUserPosition): Promise<_108.QueryUserPositionResponse>;
            };
            LCDQueryClient: typeof _223.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createSale(value: _110.MsgCreateSale): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    subscribe(value: _110.MsgSubscribe): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _110.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSale(value: _110.MsgExitSale): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    finalizeSale(value: _110.MsgFinalizeSale): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createSale(value: _110.MsgCreateSale): {
                        typeUrl: string;
                        value: _110.MsgCreateSale;
                    };
                    subscribe(value: _110.MsgSubscribe): {
                        typeUrl: string;
                        value: _110.MsgSubscribe;
                    };
                    withdraw(value: _110.MsgWithdraw): {
                        typeUrl: string;
                        value: _110.MsgWithdraw;
                    };
                    exitSale(value: _110.MsgExitSale): {
                        typeUrl: string;
                        value: _110.MsgExitSale;
                    };
                    finalizeSale(value: _110.MsgFinalizeSale): {
                        typeUrl: string;
                        value: _110.MsgFinalizeSale;
                    };
                };
                fromPartial: {
                    createSale(value: _110.MsgCreateSale): {
                        typeUrl: string;
                        value: _110.MsgCreateSale;
                    };
                    subscribe(value: _110.MsgSubscribe): {
                        typeUrl: string;
                        value: _110.MsgSubscribe;
                    };
                    withdraw(value: _110.MsgWithdraw): {
                        typeUrl: string;
                        value: _110.MsgWithdraw;
                    };
                    exitSale(value: _110.MsgExitSale): {
                        typeUrl: string;
                        value: _110.MsgExitSale;
                    };
                    finalizeSale(value: _110.MsgFinalizeSale): {
                        typeUrl: string;
                        value: _110.MsgFinalizeSale;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.streamswap.v1.MsgCreateSale": {
                    aminoType: string;
                    toAmino: ({ creator, tokenIn, tokenOut, maxFee, startTime, duration, recipient, name, url }: _110.MsgCreateSale) => {
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
                    }) => _110.MsgCreateSale;
                };
                "/osmosis.streamswap.v1.MsgSubscribe": {
                    aminoType: string;
                    toAmino: ({ sender, saleId, amount }: _110.MsgSubscribe) => {
                        sender: string;
                        sale_id: string;
                        amount: string;
                    };
                    fromAmino: ({ sender, sale_id, amount }: {
                        sender: string;
                        sale_id: string;
                        amount: string;
                    }) => _110.MsgSubscribe;
                };
                "/osmosis.streamswap.v1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: ({ sender, saleId, amount }: _110.MsgWithdraw) => {
                        sender: string;
                        sale_id: string;
                        amount: string;
                    };
                    fromAmino: ({ sender, sale_id, amount }: {
                        sender: string;
                        sale_id: string;
                        amount: string;
                    }) => _110.MsgWithdraw;
                };
                "/osmosis.streamswap.v1.MsgExitSale": {
                    aminoType: string;
                    toAmino: ({ sender, saleId }: _110.MsgExitSale) => {
                        sender: string;
                        sale_id: string;
                    };
                    fromAmino: ({ sender, sale_id }: {
                        sender: string;
                        sale_id: string;
                    }) => _110.MsgExitSale;
                };
                "/osmosis.streamswap.v1.MsgFinalizeSale": {
                    aminoType: string;
                    toAmino: ({ sender, saleId }: _110.MsgFinalizeSale) => {
                        sender: string;
                        sale_id: string;
                    };
                    fromAmino: ({ sender, sale_id }: {
                        sender: string;
                        sale_id: string;
                    }) => _110.MsgFinalizeSale;
                };
            };
            MsgCreateSale: {
                encode(message: _110.MsgCreateSale, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgCreateSale;
                fromPartial(object: Partial<_110.MsgCreateSale>): _110.MsgCreateSale;
            };
            MsgCreateSaleResponse: {
                encode(message: _110.MsgCreateSaleResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgCreateSaleResponse;
                fromPartial(object: Partial<_110.MsgCreateSaleResponse>): _110.MsgCreateSaleResponse;
            };
            MsgSubscribe: {
                encode(message: _110.MsgSubscribe, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgSubscribe;
                fromPartial(object: Partial<_110.MsgSubscribe>): _110.MsgSubscribe;
            };
            MsgWithdraw: {
                encode(message: _110.MsgWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgWithdraw;
                fromPartial(object: Partial<_110.MsgWithdraw>): _110.MsgWithdraw;
            };
            MsgExitSale: {
                encode(message: _110.MsgExitSale, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgExitSale;
                fromPartial(object: Partial<_110.MsgExitSale>): _110.MsgExitSale;
            };
            MsgExitSaleResponse: {
                encode(message: _110.MsgExitSaleResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgExitSaleResponse;
                fromPartial(object: Partial<_110.MsgExitSaleResponse>): _110.MsgExitSaleResponse;
            };
            MsgFinalizeSale: {
                encode(message: _110.MsgFinalizeSale, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgFinalizeSale;
                fromPartial(object: Partial<_110.MsgFinalizeSale>): _110.MsgFinalizeSale;
            };
            MsgFinalizeSaleResponse: {
                encode(message: _110.MsgFinalizeSaleResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgFinalizeSaleResponse;
                fromPartial(object: Partial<_110.MsgFinalizeSaleResponse>): _110.MsgFinalizeSaleResponse;
            };
            Sale: {
                encode(message: _109.Sale, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.Sale;
                fromPartial(object: Partial<_109.Sale>): _109.Sale;
            };
            UserPosition: {
                encode(message: _109.UserPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.UserPosition;
                fromPartial(object: Partial<_109.UserPosition>): _109.UserPosition;
            };
            QuerySales: {
                encode(message: _108.QuerySales, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QuerySales;
                fromPartial(object: Partial<_108.QuerySales>): _108.QuerySales;
            };
            QuerySalesResponse: {
                encode(message: _108.QuerySalesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QuerySalesResponse;
                fromPartial(object: Partial<_108.QuerySalesResponse>): _108.QuerySalesResponse;
            };
            QuerySale: {
                encode(message: _108.QuerySale, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QuerySale;
                fromPartial(object: Partial<_108.QuerySale>): _108.QuerySale;
            };
            QuerySaleResponse: {
                encode(message: _108.QuerySaleResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QuerySaleResponse;
                fromPartial(object: Partial<_108.QuerySaleResponse>): _108.QuerySaleResponse;
            };
            QueryUserPosition: {
                encode(message: _108.QueryUserPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryUserPosition;
                fromPartial(object: Partial<_108.QueryUserPosition>): _108.QueryUserPosition;
            };
            QueryUserPositionResponse: {
                encode(message: _108.QueryUserPositionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryUserPositionResponse;
                fromPartial(object: Partial<_108.QueryUserPositionResponse>): _108.QueryUserPositionResponse;
            };
            Params: {
                encode(message: _107.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Params;
                fromPartial(object: Partial<_107.Params>): _107.Params;
            };
            GenesisState: {
                encode(message: _106.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.GenesisState;
                fromPartial(object: Partial<_106.GenesisState>): _106.GenesisState;
            };
            UserPositionKV: {
                encode(message: _106.UserPositionKV, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.UserPositionKV;
                fromPartial(object: Partial<_106.UserPositionKV>): _106.UserPositionKV;
            };
            EventCreateSale: {
                encode(message: _105.EventCreateSale, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.EventCreateSale;
                fromPartial(object: Partial<_105.EventCreateSale>): _105.EventCreateSale;
            };
            EventSubscribe: {
                encode(message: _105.EventSubscribe, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.EventSubscribe;
                fromPartial(object: Partial<_105.EventSubscribe>): _105.EventSubscribe;
            };
            EventWithdraw: {
                encode(message: _105.EventWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.EventWithdraw;
                fromPartial(object: Partial<_105.EventWithdraw>): _105.EventWithdraw;
            };
            EventExit: {
                encode(message: _105.EventExit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.EventExit;
                fromPartial(object: Partial<_105.EventExit>): _105.EventExit;
            };
            EventFinalizeSale: {
                encode(message: _105.EventFinalizeSale, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.EventFinalizeSale;
                fromPartial(object: Partial<_105.EventFinalizeSale>): _105.EventFinalizeSale;
            };
        };
    }
    const superfluid: {
        MsgClientImpl: typeof _245.MsgClientImpl;
        QueryClientImpl: typeof _235.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _113.QueryParamsRequest): Promise<_113.QueryParamsResponse>;
            assetType(request: _113.AssetTypeRequest): Promise<_113.AssetTypeResponse>;
            allAssets(request?: _113.AllAssetsRequest): Promise<_113.AllAssetsResponse>;
            assetMultiplier(request: _113.AssetMultiplierRequest): Promise<_113.AssetMultiplierResponse>;
            allIntermediaryAccounts(request?: _113.AllIntermediaryAccountsRequest): Promise<_113.AllIntermediaryAccountsResponse>;
            connectedIntermediaryAccount(request: _113.ConnectedIntermediaryAccountRequest): Promise<_113.ConnectedIntermediaryAccountResponse>;
            totalSuperfluidDelegations(request?: _113.TotalSuperfluidDelegationsRequest): Promise<_113.TotalSuperfluidDelegationsResponse>;
            superfluidDelegationAmount(request: _113.SuperfluidDelegationAmountRequest): Promise<_113.SuperfluidDelegationAmountResponse>;
            superfluidDelegationsByDelegator(request: _113.SuperfluidDelegationsByDelegatorRequest): Promise<_113.SuperfluidDelegationsByDelegatorResponse>;
            superfluidUndelegationsByDelegator(request: _113.SuperfluidUndelegationsByDelegatorRequest): Promise<_113.SuperfluidUndelegationsByDelegatorResponse>;
            superfluidDelegationsByValidatorDenom(request: _113.SuperfluidDelegationsByValidatorDenomRequest): Promise<_113.SuperfluidDelegationsByValidatorDenomResponse>;
            estimateSuperfluidDelegatedAmountByValidatorDenom(request: _113.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<_113.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
            totalDelegationByDelegator(request: _113.QueryTotalDelegationByDelegatorRequest): Promise<_113.QueryTotalDelegationByDelegatorResponse>;
        };
        LCDQueryClient: typeof _224.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                superfluidDelegate(value: _115.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegate(value: _115.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUnbondLock(value: _115.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lockAndSuperfluidDelegate(value: _115.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unPoolWhitelistedPool(value: _115.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                superfluidDelegate(value: _115.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _115.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _115.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _115.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _115.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _115.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _115.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _115.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _115.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _115.MsgUnPoolWhitelistedPool;
                };
            };
            fromPartial: {
                superfluidDelegate(value: _115.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _115.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _115.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _115.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _115.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _115.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _115.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _115.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _115.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _115.MsgUnPoolWhitelistedPool;
                };
            };
        };
        AminoConverter: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId, valAddr }: _115.MsgSuperfluidDelegate) => {
                    sender: string;
                    lock_id: string;
                    val_addr: string;
                };
                fromAmino: ({ sender, lock_id, val_addr }: {
                    sender: string;
                    lock_id: string;
                    val_addr: string;
                }) => _115.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _115.MsgSuperfluidUndelegate) => {
                    sender: string;
                    lock_id: string;
                };
                fromAmino: ({ sender, lock_id }: {
                    sender: string;
                    lock_id: string;
                }) => _115.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _115.MsgSuperfluidUnbondLock) => {
                    sender: string;
                    lock_id: string;
                };
                fromAmino: ({ sender, lock_id }: {
                    sender: string;
                    lock_id: string;
                }) => _115.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, coins, valAddr }: _115.MsgLockAndSuperfluidDelegate) => {
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
                }) => _115.MsgLockAndSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
                aminoType: string;
                toAmino: ({ sender, poolId }: _115.MsgUnPoolWhitelistedPool) => {
                    sender: string;
                    pool_id: string;
                };
                fromAmino: ({ sender, pool_id }: {
                    sender: string;
                    pool_id: string;
                }) => _115.MsgUnPoolWhitelistedPool;
            };
        };
        MsgSuperfluidDelegate: {
            encode(message: _115.MsgSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgSuperfluidDelegate;
            fromPartial(object: Partial<_115.MsgSuperfluidDelegate>): _115.MsgSuperfluidDelegate;
        };
        MsgSuperfluidDelegateResponse: {
            encode(_: _115.MsgSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgSuperfluidDelegateResponse;
            fromPartial(_: Partial<_115.MsgSuperfluidDelegateResponse>): _115.MsgSuperfluidDelegateResponse;
        };
        MsgSuperfluidUndelegate: {
            encode(message: _115.MsgSuperfluidUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgSuperfluidUndelegate;
            fromPartial(object: Partial<_115.MsgSuperfluidUndelegate>): _115.MsgSuperfluidUndelegate;
        };
        MsgSuperfluidUndelegateResponse: {
            encode(_: _115.MsgSuperfluidUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgSuperfluidUndelegateResponse;
            fromPartial(_: Partial<_115.MsgSuperfluidUndelegateResponse>): _115.MsgSuperfluidUndelegateResponse;
        };
        MsgSuperfluidUnbondLock: {
            encode(message: _115.MsgSuperfluidUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgSuperfluidUnbondLock;
            fromPartial(object: Partial<_115.MsgSuperfluidUnbondLock>): _115.MsgSuperfluidUnbondLock;
        };
        MsgSuperfluidUnbondLockResponse: {
            encode(_: _115.MsgSuperfluidUnbondLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgSuperfluidUnbondLockResponse;
            fromPartial(_: Partial<_115.MsgSuperfluidUnbondLockResponse>): _115.MsgSuperfluidUnbondLockResponse;
        };
        MsgLockAndSuperfluidDelegate: {
            encode(message: _115.MsgLockAndSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgLockAndSuperfluidDelegate;
            fromPartial(object: Partial<_115.MsgLockAndSuperfluidDelegate>): _115.MsgLockAndSuperfluidDelegate;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            encode(message: _115.MsgLockAndSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgLockAndSuperfluidDelegateResponse;
            fromPartial(object: Partial<_115.MsgLockAndSuperfluidDelegateResponse>): _115.MsgLockAndSuperfluidDelegateResponse;
        };
        MsgUnPoolWhitelistedPool: {
            encode(message: _115.MsgUnPoolWhitelistedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgUnPoolWhitelistedPool;
            fromPartial(object: Partial<_115.MsgUnPoolWhitelistedPool>): _115.MsgUnPoolWhitelistedPool;
        };
        MsgUnPoolWhitelistedPoolResponse: {
            encode(message: _115.MsgUnPoolWhitelistedPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgUnPoolWhitelistedPoolResponse;
            fromPartial(object: Partial<_115.MsgUnPoolWhitelistedPoolResponse>): _115.MsgUnPoolWhitelistedPoolResponse;
        };
        superfluidAssetTypeFromJSON(object: any): _114.SuperfluidAssetType;
        superfluidAssetTypeToJSON(object: _114.SuperfluidAssetType): string;
        SuperfluidAssetType: typeof _114.SuperfluidAssetType;
        SuperfluidAssetTypeSDKType: typeof _114.SuperfluidAssetTypeSDKType;
        SuperfluidAsset: {
            encode(message: _114.SuperfluidAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.SuperfluidAsset;
            fromPartial(object: Partial<_114.SuperfluidAsset>): _114.SuperfluidAsset;
        };
        SuperfluidIntermediaryAccount: {
            encode(message: _114.SuperfluidIntermediaryAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.SuperfluidIntermediaryAccount;
            fromPartial(object: Partial<_114.SuperfluidIntermediaryAccount>): _114.SuperfluidIntermediaryAccount;
        };
        OsmoEquivalentMultiplierRecord: {
            encode(message: _114.OsmoEquivalentMultiplierRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.OsmoEquivalentMultiplierRecord;
            fromPartial(object: Partial<_114.OsmoEquivalentMultiplierRecord>): _114.OsmoEquivalentMultiplierRecord;
        };
        SuperfluidDelegationRecord: {
            encode(message: _114.SuperfluidDelegationRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.SuperfluidDelegationRecord;
            fromPartial(object: Partial<_114.SuperfluidDelegationRecord>): _114.SuperfluidDelegationRecord;
        };
        LockIdIntermediaryAccountConnection: {
            encode(message: _114.LockIdIntermediaryAccountConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.LockIdIntermediaryAccountConnection;
            fromPartial(object: Partial<_114.LockIdIntermediaryAccountConnection>): _114.LockIdIntermediaryAccountConnection;
        };
        UnpoolWhitelistedPools: {
            encode(message: _114.UnpoolWhitelistedPools, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.UnpoolWhitelistedPools;
            fromPartial(object: Partial<_114.UnpoolWhitelistedPools>): _114.UnpoolWhitelistedPools;
        };
        QueryParamsRequest: {
            encode(_: _113.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryParamsRequest;
            fromPartial(_: Partial<_113.QueryParamsRequest>): _113.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _113.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryParamsResponse;
            fromPartial(object: Partial<_113.QueryParamsResponse>): _113.QueryParamsResponse;
        };
        AssetTypeRequest: {
            encode(message: _113.AssetTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.AssetTypeRequest;
            fromPartial(object: Partial<_113.AssetTypeRequest>): _113.AssetTypeRequest;
        };
        AssetTypeResponse: {
            encode(message: _113.AssetTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.AssetTypeResponse;
            fromPartial(object: Partial<_113.AssetTypeResponse>): _113.AssetTypeResponse;
        };
        AllAssetsRequest: {
            encode(_: _113.AllAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.AllAssetsRequest;
            fromPartial(_: Partial<_113.AllAssetsRequest>): _113.AllAssetsRequest;
        };
        AllAssetsResponse: {
            encode(message: _113.AllAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.AllAssetsResponse;
            fromPartial(object: Partial<_113.AllAssetsResponse>): _113.AllAssetsResponse;
        };
        AssetMultiplierRequest: {
            encode(message: _113.AssetMultiplierRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.AssetMultiplierRequest;
            fromPartial(object: Partial<_113.AssetMultiplierRequest>): _113.AssetMultiplierRequest;
        };
        AssetMultiplierResponse: {
            encode(message: _113.AssetMultiplierResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.AssetMultiplierResponse;
            fromPartial(object: Partial<_113.AssetMultiplierResponse>): _113.AssetMultiplierResponse;
        };
        SuperfluidIntermediaryAccountInfo: {
            encode(message: _113.SuperfluidIntermediaryAccountInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.SuperfluidIntermediaryAccountInfo;
            fromPartial(object: Partial<_113.SuperfluidIntermediaryAccountInfo>): _113.SuperfluidIntermediaryAccountInfo;
        };
        AllIntermediaryAccountsRequest: {
            encode(message: _113.AllIntermediaryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.AllIntermediaryAccountsRequest;
            fromPartial(object: Partial<_113.AllIntermediaryAccountsRequest>): _113.AllIntermediaryAccountsRequest;
        };
        AllIntermediaryAccountsResponse: {
            encode(message: _113.AllIntermediaryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.AllIntermediaryAccountsResponse;
            fromPartial(object: Partial<_113.AllIntermediaryAccountsResponse>): _113.AllIntermediaryAccountsResponse;
        };
        ConnectedIntermediaryAccountRequest: {
            encode(message: _113.ConnectedIntermediaryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.ConnectedIntermediaryAccountRequest;
            fromPartial(object: Partial<_113.ConnectedIntermediaryAccountRequest>): _113.ConnectedIntermediaryAccountRequest;
        };
        ConnectedIntermediaryAccountResponse: {
            encode(message: _113.ConnectedIntermediaryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.ConnectedIntermediaryAccountResponse;
            fromPartial(object: Partial<_113.ConnectedIntermediaryAccountResponse>): _113.ConnectedIntermediaryAccountResponse;
        };
        TotalSuperfluidDelegationsRequest: {
            encode(_: _113.TotalSuperfluidDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.TotalSuperfluidDelegationsRequest;
            fromPartial(_: Partial<_113.TotalSuperfluidDelegationsRequest>): _113.TotalSuperfluidDelegationsRequest;
        };
        TotalSuperfluidDelegationsResponse: {
            encode(message: _113.TotalSuperfluidDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.TotalSuperfluidDelegationsResponse;
            fromPartial(object: Partial<_113.TotalSuperfluidDelegationsResponse>): _113.TotalSuperfluidDelegationsResponse;
        };
        SuperfluidDelegationAmountRequest: {
            encode(message: _113.SuperfluidDelegationAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.SuperfluidDelegationAmountRequest;
            fromPartial(object: Partial<_113.SuperfluidDelegationAmountRequest>): _113.SuperfluidDelegationAmountRequest;
        };
        SuperfluidDelegationAmountResponse: {
            encode(message: _113.SuperfluidDelegationAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.SuperfluidDelegationAmountResponse;
            fromPartial(object: Partial<_113.SuperfluidDelegationAmountResponse>): _113.SuperfluidDelegationAmountResponse;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            encode(message: _113.SuperfluidDelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.SuperfluidDelegationsByDelegatorRequest;
            fromPartial(object: Partial<_113.SuperfluidDelegationsByDelegatorRequest>): _113.SuperfluidDelegationsByDelegatorRequest;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            encode(message: _113.SuperfluidDelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.SuperfluidDelegationsByDelegatorResponse;
            fromPartial(object: Partial<_113.SuperfluidDelegationsByDelegatorResponse>): _113.SuperfluidDelegationsByDelegatorResponse;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            encode(message: _113.SuperfluidUndelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.SuperfluidUndelegationsByDelegatorRequest;
            fromPartial(object: Partial<_113.SuperfluidUndelegationsByDelegatorRequest>): _113.SuperfluidUndelegationsByDelegatorRequest;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            encode(message: _113.SuperfluidUndelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.SuperfluidUndelegationsByDelegatorResponse;
            fromPartial(object: Partial<_113.SuperfluidUndelegationsByDelegatorResponse>): _113.SuperfluidUndelegationsByDelegatorResponse;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            encode(message: _113.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.SuperfluidDelegationsByValidatorDenomRequest;
            fromPartial(object: Partial<_113.SuperfluidDelegationsByValidatorDenomRequest>): _113.SuperfluidDelegationsByValidatorDenomRequest;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            encode(message: _113.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.SuperfluidDelegationsByValidatorDenomResponse;
            fromPartial(object: Partial<_113.SuperfluidDelegationsByValidatorDenomResponse>): _113.SuperfluidDelegationsByValidatorDenomResponse;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            encode(message: _113.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromPartial(object: Partial<_113.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>): _113.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            encode(message: _113.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromPartial(object: Partial<_113.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>): _113.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
        };
        QueryTotalDelegationByDelegatorRequest: {
            encode(message: _113.QueryTotalDelegationByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryTotalDelegationByDelegatorRequest;
            fromPartial(object: Partial<_113.QueryTotalDelegationByDelegatorRequest>): _113.QueryTotalDelegationByDelegatorRequest;
        };
        QueryTotalDelegationByDelegatorResponse: {
            encode(message: _113.QueryTotalDelegationByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryTotalDelegationByDelegatorResponse;
            fromPartial(object: Partial<_113.QueryTotalDelegationByDelegatorResponse>): _113.QueryTotalDelegationByDelegatorResponse;
        };
        Params: {
            encode(message: _112.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Params;
            fromPartial(object: Partial<_112.Params>): _112.Params;
        };
        GenesisState: {
            encode(message: _111.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.GenesisState;
            fromPartial(object: Partial<_111.GenesisState>): _111.GenesisState;
        };
    };
    namespace tokenfactory {
        const v1beta1: {
            MsgClientImpl: typeof _246.MsgClientImpl;
            QueryClientImpl: typeof _236.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _119.QueryParamsRequest): Promise<_119.QueryParamsResponse>;
                denomAuthorityMetadata(request: _119.QueryDenomAuthorityMetadataRequest): Promise<_119.QueryDenomAuthorityMetadataResponse>;
                denomsFromCreator(request: _119.QueryDenomsFromCreatorRequest): Promise<_119.QueryDenomsFromCreatorResponse>;
            };
            LCDQueryClient: typeof _225.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _120.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _120.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _120.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _120.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _120.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _120.MsgCreateDenom): {
                        typeUrl: string;
                        value: _120.MsgCreateDenom;
                    };
                    mint(value: _120.MsgMint): {
                        typeUrl: string;
                        value: _120.MsgMint;
                    };
                    burn(value: _120.MsgBurn): {
                        typeUrl: string;
                        value: _120.MsgBurn;
                    };
                    changeAdmin(value: _120.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _120.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _120.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _120.MsgSetDenomMetadata;
                    };
                };
                fromPartial: {
                    createDenom(value: _120.MsgCreateDenom): {
                        typeUrl: string;
                        value: _120.MsgCreateDenom;
                    };
                    mint(value: _120.MsgMint): {
                        typeUrl: string;
                        value: _120.MsgMint;
                    };
                    burn(value: _120.MsgBurn): {
                        typeUrl: string;
                        value: _120.MsgBurn;
                    };
                    changeAdmin(value: _120.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _120.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _120.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _120.MsgSetDenomMetadata;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: ({ sender, subdenom }: _120.MsgCreateDenom) => {
                        sender: string;
                        subdenom: string;
                    };
                    fromAmino: ({ sender, subdenom }: {
                        sender: string;
                        subdenom: string;
                    }) => _120.MsgCreateDenom;
                };
                "/osmosis.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _120.MsgMint) => {
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
                    }) => _120.MsgMint;
                };
                "/osmosis.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _120.MsgBurn) => {
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
                    }) => _120.MsgBurn;
                };
                "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, denom, newAdmin }: _120.MsgChangeAdmin) => {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    };
                    fromAmino: ({ sender, denom, new_admin }: {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    }) => _120.MsgChangeAdmin;
                };
                "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: ({ sender, metadata }: _120.MsgSetDenomMetadata) => {
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
                    }) => _120.MsgSetDenomMetadata;
                };
            };
            MsgCreateDenom: {
                encode(message: _120.MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgCreateDenom;
                fromPartial(object: Partial<_120.MsgCreateDenom>): _120.MsgCreateDenom;
            };
            MsgCreateDenomResponse: {
                encode(message: _120.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgCreateDenomResponse;
                fromPartial(object: Partial<_120.MsgCreateDenomResponse>): _120.MsgCreateDenomResponse;
            };
            MsgMint: {
                encode(message: _120.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgMint;
                fromPartial(object: Partial<_120.MsgMint>): _120.MsgMint;
            };
            MsgMintResponse: {
                encode(_: _120.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgMintResponse;
                fromPartial(_: Partial<_120.MsgMintResponse>): _120.MsgMintResponse;
            };
            MsgBurn: {
                encode(message: _120.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgBurn;
                fromPartial(object: Partial<_120.MsgBurn>): _120.MsgBurn;
            };
            MsgBurnResponse: {
                encode(_: _120.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgBurnResponse;
                fromPartial(_: Partial<_120.MsgBurnResponse>): _120.MsgBurnResponse;
            };
            MsgChangeAdmin: {
                encode(message: _120.MsgChangeAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgChangeAdmin;
                fromPartial(object: Partial<_120.MsgChangeAdmin>): _120.MsgChangeAdmin;
            };
            MsgChangeAdminResponse: {
                encode(_: _120.MsgChangeAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgChangeAdminResponse;
                fromPartial(_: Partial<_120.MsgChangeAdminResponse>): _120.MsgChangeAdminResponse;
            };
            MsgSetDenomMetadata: {
                encode(message: _120.MsgSetDenomMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgSetDenomMetadata;
                fromPartial(object: Partial<_120.MsgSetDenomMetadata>): _120.MsgSetDenomMetadata;
            };
            MsgSetDenomMetadataResponse: {
                encode(_: _120.MsgSetDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgSetDenomMetadataResponse;
                fromPartial(_: Partial<_120.MsgSetDenomMetadataResponse>): _120.MsgSetDenomMetadataResponse;
            };
            QueryParamsRequest: {
                encode(_: _119.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryParamsRequest;
                fromPartial(_: Partial<_119.QueryParamsRequest>): _119.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _119.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryParamsResponse;
                fromPartial(object: Partial<_119.QueryParamsResponse>): _119.QueryParamsResponse;
            };
            QueryDenomAuthorityMetadataRequest: {
                encode(message: _119.QueryDenomAuthorityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryDenomAuthorityMetadataRequest;
                fromPartial(object: Partial<_119.QueryDenomAuthorityMetadataRequest>): _119.QueryDenomAuthorityMetadataRequest;
            };
            QueryDenomAuthorityMetadataResponse: {
                encode(message: _119.QueryDenomAuthorityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryDenomAuthorityMetadataResponse;
                fromPartial(object: Partial<_119.QueryDenomAuthorityMetadataResponse>): _119.QueryDenomAuthorityMetadataResponse;
            };
            QueryDenomsFromCreatorRequest: {
                encode(message: _119.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryDenomsFromCreatorRequest;
                fromPartial(object: Partial<_119.QueryDenomsFromCreatorRequest>): _119.QueryDenomsFromCreatorRequest;
            };
            QueryDenomsFromCreatorResponse: {
                encode(message: _119.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryDenomsFromCreatorResponse;
                fromPartial(object: Partial<_119.QueryDenomsFromCreatorResponse>): _119.QueryDenomsFromCreatorResponse;
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
            GenesisDenom: {
                encode(message: _117.GenesisDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.GenesisDenom;
                fromPartial(object: Partial<_117.GenesisDenom>): _117.GenesisDenom;
            };
            DenomAuthorityMetadata: {
                encode(message: _116.DenomAuthorityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.DenomAuthorityMetadata;
                fromPartial(object: Partial<_116.DenomAuthorityMetadata>): _116.DenomAuthorityMetadata;
            };
        };
    }
    namespace twap {
        const v1beta1: {
            QueryClientImpl: typeof _237.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _122.ParamsRequest): Promise<_122.ParamsResponse>;
                arithmeticTwap(request: _122.ArithmeticTwapRequest): Promise<_122.ArithmeticTwapResponse>;
                arithmeticTwapToNow(request: _122.ArithmeticTwapToNowRequest): Promise<_122.ArithmeticTwapToNowResponse>;
            };
            LCDQueryClient: typeof _226.LCDQueryClient;
            TwapRecord: {
                encode(message: _123.TwapRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.TwapRecord;
                fromPartial(object: Partial<_123.TwapRecord>): _123.TwapRecord;
            };
            ArithmeticTwapRequest: {
                encode(message: _122.ArithmeticTwapRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ArithmeticTwapRequest;
                fromPartial(object: Partial<_122.ArithmeticTwapRequest>): _122.ArithmeticTwapRequest;
            };
            ArithmeticTwapResponse: {
                encode(message: _122.ArithmeticTwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ArithmeticTwapResponse;
                fromPartial(object: Partial<_122.ArithmeticTwapResponse>): _122.ArithmeticTwapResponse;
            };
            ArithmeticTwapToNowRequest: {
                encode(message: _122.ArithmeticTwapToNowRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ArithmeticTwapToNowRequest;
                fromPartial(object: Partial<_122.ArithmeticTwapToNowRequest>): _122.ArithmeticTwapToNowRequest;
            };
            ArithmeticTwapToNowResponse: {
                encode(message: _122.ArithmeticTwapToNowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ArithmeticTwapToNowResponse;
                fromPartial(object: Partial<_122.ArithmeticTwapToNowResponse>): _122.ArithmeticTwapToNowResponse;
            };
            ParamsRequest: {
                encode(_: _122.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ParamsRequest;
                fromPartial(_: Partial<_122.ParamsRequest>): _122.ParamsRequest;
            };
            ParamsResponse: {
                encode(message: _122.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ParamsResponse;
                fromPartial(object: Partial<_122.ParamsResponse>): _122.ParamsResponse;
            };
            Params: {
                encode(message: _121.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.Params;
                fromPartial(object: Partial<_121.Params>): _121.Params;
            };
            GenesisState: {
                encode(message: _121.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.GenesisState;
                fromPartial(object: Partial<_121.GenesisState>): _121.GenesisState;
            };
        };
    }
    namespace txfees {
        const v1beta1: {
            QueryClientImpl: typeof _238.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                feeTokens(request?: _127.QueryFeeTokensRequest): Promise<_127.QueryFeeTokensResponse>;
                denomSpotPrice(request: _127.QueryDenomSpotPriceRequest): Promise<_127.QueryDenomSpotPriceResponse>;
                denomPoolId(request: _127.QueryDenomPoolIdRequest): Promise<_127.QueryDenomPoolIdResponse>;
                baseDenom(request?: _127.QueryBaseDenomRequest): Promise<_127.QueryBaseDenomResponse>;
            };
            LCDQueryClient: typeof _227.LCDQueryClient;
            QueryFeeTokensRequest: {
                encode(_: _127.QueryFeeTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.QueryFeeTokensRequest;
                fromPartial(_: Partial<_127.QueryFeeTokensRequest>): _127.QueryFeeTokensRequest;
            };
            QueryFeeTokensResponse: {
                encode(message: _127.QueryFeeTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.QueryFeeTokensResponse;
                fromPartial(object: Partial<_127.QueryFeeTokensResponse>): _127.QueryFeeTokensResponse;
            };
            QueryDenomSpotPriceRequest: {
                encode(message: _127.QueryDenomSpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.QueryDenomSpotPriceRequest;
                fromPartial(object: Partial<_127.QueryDenomSpotPriceRequest>): _127.QueryDenomSpotPriceRequest;
            };
            QueryDenomSpotPriceResponse: {
                encode(message: _127.QueryDenomSpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.QueryDenomSpotPriceResponse;
                fromPartial(object: Partial<_127.QueryDenomSpotPriceResponse>): _127.QueryDenomSpotPriceResponse;
            };
            QueryDenomPoolIdRequest: {
                encode(message: _127.QueryDenomPoolIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.QueryDenomPoolIdRequest;
                fromPartial(object: Partial<_127.QueryDenomPoolIdRequest>): _127.QueryDenomPoolIdRequest;
            };
            QueryDenomPoolIdResponse: {
                encode(message: _127.QueryDenomPoolIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.QueryDenomPoolIdResponse;
                fromPartial(object: Partial<_127.QueryDenomPoolIdResponse>): _127.QueryDenomPoolIdResponse;
            };
            QueryBaseDenomRequest: {
                encode(_: _127.QueryBaseDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.QueryBaseDenomRequest;
                fromPartial(_: Partial<_127.QueryBaseDenomRequest>): _127.QueryBaseDenomRequest;
            };
            QueryBaseDenomResponse: {
                encode(message: _127.QueryBaseDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.QueryBaseDenomResponse;
                fromPartial(object: Partial<_127.QueryBaseDenomResponse>): _127.QueryBaseDenomResponse;
            };
            UpdateFeeTokenProposal: {
                encode(message: _126.UpdateFeeTokenProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.UpdateFeeTokenProposal;
                fromPartial(object: Partial<_126.UpdateFeeTokenProposal>): _126.UpdateFeeTokenProposal;
            };
            GenesisState: {
                encode(message: _125.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.GenesisState;
                fromPartial(object: Partial<_125.GenesisState>): _125.GenesisState;
            };
            FeeToken: {
                encode(message: _124.FeeToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.FeeToken;
                fromPartial(object: Partial<_124.FeeToken>): _124.FeeToken;
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
                gamm: {
                    poolmodels: {
                        balancer: {
                            v1beta1: _239.MsgClientImpl;
                        };
                        stableswap: {
                            v1beta1: _240.MsgClientImpl;
                        };
                    };
                    v1beta1: _241.MsgClientImpl;
                };
                incentives: _242.MsgClientImpl;
                lockup: _243.MsgClientImpl;
                streamswap: {
                    v1: _244.MsgClientImpl;
                };
                superfluid: _245.MsgClientImpl;
                tokenfactory: {
                    v1beta1: _246.MsgClientImpl;
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
                        epochInfos(request?: _80.QueryEpochsInfoRequest): Promise<_80.QueryEpochsInfoResponse>;
                        currentEpoch(request: _80.QueryCurrentEpochRequest): Promise<_80.QueryCurrentEpochResponse>;
                    };
                };
                gamm: {
                    v1beta1: {
                        pools(request?: _83.QueryPoolsRequest): Promise<_83.QueryPoolsResponse>;
                        numPools(request?: _83.QueryNumPoolsRequest): Promise<_83.QueryNumPoolsResponse>;
                        totalLiquidity(request?: _83.QueryTotalLiquidityRequest): Promise<_83.QueryTotalLiquidityResponse>;
                        pool(request: _83.QueryPoolRequest): Promise<_83.QueryPoolResponse>;
                        poolType(request: _83.QueryPoolTypeRequest): Promise<_83.QueryPoolTypeResponse>;
                        poolParams(request: _83.QueryPoolParamsRequest): Promise<_83.QueryPoolParamsResponse>;
                        totalPoolLiquidity(request: _83.QueryTotalPoolLiquidityRequest): Promise<_83.QueryTotalPoolLiquidityResponse>;
                        totalShares(request: _83.QueryTotalSharesRequest): Promise<_83.QueryTotalSharesResponse>;
                        spotPrice(request: _83.QuerySpotPriceRequest): Promise<_83.QuerySpotPriceResponse>;
                        estimateSwapExactAmountIn(request: _83.QuerySwapExactAmountInRequest): Promise<_83.QuerySwapExactAmountInResponse>;
                        estimateSwapExactAmountOut(request: _83.QuerySwapExactAmountOutRequest): Promise<_83.QuerySwapExactAmountOutResponse>;
                    };
                };
                incentives: {
                    moduleToDistributeCoins(request?: _91.ModuleToDistributeCoinsRequest): Promise<_91.ModuleToDistributeCoinsResponse>;
                    moduleDistributedCoins(request?: _91.ModuleDistributedCoinsRequest): Promise<_91.ModuleDistributedCoinsResponse>;
                    gaugeByID(request: _91.GaugeByIDRequest): Promise<_91.GaugeByIDResponse>;
                    gauges(request?: _91.GaugesRequest): Promise<_91.GaugesResponse>;
                    activeGauges(request?: _91.ActiveGaugesRequest): Promise<_91.ActiveGaugesResponse>;
                    activeGaugesPerDenom(request: _91.ActiveGaugesPerDenomRequest): Promise<_91.ActiveGaugesPerDenomResponse>;
                    upcomingGauges(request?: _91.UpcomingGaugesRequest): Promise<_91.UpcomingGaugesResponse>;
                    upcomingGaugesPerDenom(request: _91.UpcomingGaugesPerDenomRequest): Promise<_91.UpcomingGaugesPerDenomResponse>;
                    rewardsEst(request: _91.RewardsEstRequest): Promise<_91.RewardsEstResponse>;
                    lockableDurations(request?: _91.QueryLockableDurationsRequest): Promise<_91.QueryLockableDurationsResponse>;
                };
                lockup: {
                    moduleBalance(request?: _95.ModuleBalanceRequest): Promise<_95.ModuleBalanceResponse>;
                    moduleLockedAmount(request?: _95.ModuleLockedAmountRequest): Promise<_95.ModuleLockedAmountResponse>;
                    accountUnlockableCoins(request: _95.AccountUnlockableCoinsRequest): Promise<_95.AccountUnlockableCoinsResponse>;
                    accountUnlockingCoins(request: _95.AccountUnlockingCoinsRequest): Promise<_95.AccountUnlockingCoinsResponse>;
                    accountLockedCoins(request: _95.AccountLockedCoinsRequest): Promise<_95.AccountLockedCoinsResponse>;
                    accountLockedPastTime(request: _95.AccountLockedPastTimeRequest): Promise<_95.AccountLockedPastTimeResponse>;
                    accountLockedPastTimeNotUnlockingOnly(request: _95.AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<_95.AccountLockedPastTimeNotUnlockingOnlyResponse>;
                    accountUnlockedBeforeTime(request: _95.AccountUnlockedBeforeTimeRequest): Promise<_95.AccountUnlockedBeforeTimeResponse>;
                    accountLockedPastTimeDenom(request: _95.AccountLockedPastTimeDenomRequest): Promise<_95.AccountLockedPastTimeDenomResponse>;
                    lockedDenom(request: _95.LockedDenomRequest): Promise<_95.LockedDenomResponse>;
                    lockedByID(request: _95.LockedRequest): Promise<_95.LockedResponse>;
                    syntheticLockupsByLockupID(request: _95.SyntheticLockupsByLockupIDRequest): Promise<_95.SyntheticLockupsByLockupIDResponse>;
                    accountLockedLongerDuration(request: _95.AccountLockedLongerDurationRequest): Promise<_95.AccountLockedLongerDurationResponse>;
                    accountLockedDuration(request: _95.AccountLockedDurationRequest): Promise<_95.AccountLockedDurationResponse>;
                    accountLockedLongerDurationNotUnlockingOnly(request: _95.AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<_95.AccountLockedLongerDurationNotUnlockingOnlyResponse>;
                    accountLockedLongerDurationDenom(request: _95.AccountLockedLongerDurationDenomRequest): Promise<_95.AccountLockedLongerDurationDenomResponse>;
                };
                mint: {
                    v1beta1: {
                        params(request?: _99.QueryParamsRequest): Promise<_99.QueryParamsResponse>;
                        epochProvisions(request?: _99.QueryEpochProvisionsRequest): Promise<_99.QueryEpochProvisionsResponse>;
                    };
                };
                poolincentives: {
                    v1beta1: {
                        gaugeIds(request: _103.QueryGaugeIdsRequest): Promise<_103.QueryGaugeIdsResponse>;
                        distrInfo(request?: _103.QueryDistrInfoRequest): Promise<_103.QueryDistrInfoResponse>;
                        params(request?: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                        lockableDurations(request?: _103.QueryLockableDurationsRequest): Promise<_103.QueryLockableDurationsResponse>;
                        incentivizedPools(request?: _103.QueryIncentivizedPoolsRequest): Promise<_103.QueryIncentivizedPoolsResponse>;
                        externalIncentiveGauges(request?: _103.QueryExternalIncentiveGaugesRequest): Promise<_103.QueryExternalIncentiveGaugesResponse>;
                    };
                };
                streamswap: {
                    v1: {
                        sales(request?: _108.QuerySales): Promise<_108.QuerySalesResponse>;
                        sale(request: _108.QuerySale): Promise<_108.QuerySaleResponse>;
                        userPosition(request: _108.QueryUserPosition): Promise<_108.QueryUserPositionResponse>;
                    };
                };
                superfluid: {
                    params(request?: _113.QueryParamsRequest): Promise<_113.QueryParamsResponse>;
                    assetType(request: _113.AssetTypeRequest): Promise<_113.AssetTypeResponse>;
                    allAssets(request?: _113.AllAssetsRequest): Promise<_113.AllAssetsResponse>;
                    assetMultiplier(request: _113.AssetMultiplierRequest): Promise<_113.AssetMultiplierResponse>;
                    allIntermediaryAccounts(request?: _113.AllIntermediaryAccountsRequest): Promise<_113.AllIntermediaryAccountsResponse>;
                    connectedIntermediaryAccount(request: _113.ConnectedIntermediaryAccountRequest): Promise<_113.ConnectedIntermediaryAccountResponse>;
                    totalSuperfluidDelegations(request?: _113.TotalSuperfluidDelegationsRequest): Promise<_113.TotalSuperfluidDelegationsResponse>;
                    superfluidDelegationAmount(request: _113.SuperfluidDelegationAmountRequest): Promise<_113.SuperfluidDelegationAmountResponse>;
                    superfluidDelegationsByDelegator(request: _113.SuperfluidDelegationsByDelegatorRequest): Promise<_113.SuperfluidDelegationsByDelegatorResponse>;
                    superfluidUndelegationsByDelegator(request: _113.SuperfluidUndelegationsByDelegatorRequest): Promise<_113.SuperfluidUndelegationsByDelegatorResponse>;
                    superfluidDelegationsByValidatorDenom(request: _113.SuperfluidDelegationsByValidatorDenomRequest): Promise<_113.SuperfluidDelegationsByValidatorDenomResponse>;
                    estimateSuperfluidDelegatedAmountByValidatorDenom(request: _113.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<_113.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
                    totalDelegationByDelegator(request: _113.QueryTotalDelegationByDelegatorRequest): Promise<_113.QueryTotalDelegationByDelegatorResponse>;
                };
                tokenfactory: {
                    v1beta1: {
                        params(request?: _119.QueryParamsRequest): Promise<_119.QueryParamsResponse>;
                        denomAuthorityMetadata(request: _119.QueryDenomAuthorityMetadataRequest): Promise<_119.QueryDenomAuthorityMetadataResponse>;
                        denomsFromCreator(request: _119.QueryDenomsFromCreatorRequest): Promise<_119.QueryDenomsFromCreatorResponse>;
                    };
                };
                twap: {
                    v1beta1: {
                        params(request?: _122.ParamsRequest): Promise<_122.ParamsResponse>;
                        arithmeticTwap(request: _122.ArithmeticTwapRequest): Promise<_122.ArithmeticTwapResponse>;
                        arithmeticTwapToNow(request: _122.ArithmeticTwapToNowRequest): Promise<_122.ArithmeticTwapToNowResponse>;
                    };
                };
                txfees: {
                    v1beta1: {
                        feeTokens(request?: _127.QueryFeeTokensRequest): Promise<_127.QueryFeeTokensResponse>;
                        denomSpotPrice(request: _127.QueryDenomSpotPriceRequest): Promise<_127.QueryDenomSpotPriceResponse>;
                        denomPoolId(request: _127.QueryDenomPoolIdRequest): Promise<_127.QueryDenomPoolIdResponse>;
                        baseDenom(request?: _127.QueryBaseDenomRequest): Promise<_127.QueryBaseDenomResponse>;
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
                    v1beta1: _217.LCDQueryClient;
                };
                gamm: {
                    v1beta1: _218.LCDQueryClient;
                };
                incentives: _219.LCDQueryClient;
                lockup: _220.LCDQueryClient;
                mint: {
                    v1beta1: _221.LCDQueryClient;
                };
                poolincentives: {
                    v1beta1: _222.LCDQueryClient;
                };
                streamswap: {
                    v1: _223.LCDQueryClient;
                };
                superfluid: _224.LCDQueryClient;
                tokenfactory: {
                    v1beta1: _225.LCDQueryClient;
                };
                twap: {
                    v1beta1: _226.LCDQueryClient;
                };
                txfees: {
                    v1beta1: _227.LCDQueryClient;
                };
            };
        }>;
    };
}
