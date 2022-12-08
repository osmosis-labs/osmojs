import * as _90 from "./epochs/genesis";
import * as _91 from "./epochs/query";
import * as _92 from "./gamm/pool-models/balancer/balancerPool";
import * as _93 from "./gamm/v1beta1/genesis";
import * as _94 from "./gamm/v1beta1/query";
import * as _95 from "./gamm/v1beta1/tx";
import * as _96 from "./gamm/pool-models/balancer/tx/tx";
import * as _97 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _98 from "./gamm/pool-models/stableswap/tx";
import * as _99 from "./gamm/v2/query";
import * as _100 from "./ibc-rate-limit/v1beta1/params";
import * as _101 from "./ibc-rate-limit/v1beta1/query";
import * as _102 from "./incentives/gauge";
import * as _103 from "./incentives/genesis";
import * as _104 from "./incentives/params";
import * as _105 from "./incentives/query";
import * as _106 from "./incentives/tx";
import * as _107 from "./lockup/genesis";
import * as _108 from "./lockup/lock";
import * as _109 from "./lockup/params";
import * as _110 from "./lockup/query";
import * as _111 from "./lockup/tx";
import * as _112 from "./mint/v1beta1/genesis";
import * as _113 from "./mint/v1beta1/mint";
import * as _114 from "./mint/v1beta1/query";
import * as _115 from "./pool-incentives/v1beta1/genesis";
import * as _116 from "./pool-incentives/v1beta1/gov";
import * as _117 from "./pool-incentives/v1beta1/incentives";
import * as _118 from "./pool-incentives/v1beta1/query";
import * as _119 from "./sumtree/v1beta1/tree";
import * as _120 from "./superfluid/genesis";
import * as _121 from "./superfluid/params";
import * as _122 from "./superfluid/query";
import * as _123 from "./superfluid/superfluid";
import * as _124 from "./superfluid/tx";
import * as _125 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _126 from "./tokenfactory/v1beta1/genesis";
import * as _127 from "./tokenfactory/v1beta1/params";
import * as _128 from "./tokenfactory/v1beta1/query";
import * as _129 from "./tokenfactory/v1beta1/tx";
import * as _130 from "./twap/v1beta1/genesis";
import * as _131 from "./twap/v1beta1/query";
import * as _132 from "./twap/v1beta1/twap_record";
import * as _133 from "./txfees/v1beta1/feetoken";
import * as _134 from "./txfees/v1beta1/genesis";
import * as _135 from "./txfees/v1beta1/gov";
import * as _136 from "./txfees/v1beta1/query";
import * as _213 from "./epochs/query.lcd";
import * as _214 from "./gamm/v1beta1/query.lcd";
import * as _215 from "./gamm/v2/query.lcd";
import * as _216 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _217 from "./incentives/query.lcd";
import * as _218 from "./lockup/query.lcd";
import * as _219 from "./mint/v1beta1/query.lcd";
import * as _220 from "./pool-incentives/v1beta1/query.lcd";
import * as _221 from "./superfluid/query.lcd";
import * as _222 from "./tokenfactory/v1beta1/query.lcd";
import * as _223 from "./twap/v1beta1/query.lcd";
import * as _224 from "./txfees/v1beta1/query.lcd";
import * as _225 from "./epochs/query.rpc.Query";
import * as _226 from "./gamm/v1beta1/query.rpc.Query";
import * as _227 from "./gamm/v2/query.rpc.Query";
import * as _228 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _229 from "./incentives/query.rpc.Query";
import * as _230 from "./lockup/query.rpc.Query";
import * as _231 from "./mint/v1beta1/query.rpc.Query";
import * as _232 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _233 from "./superfluid/query.rpc.Query";
import * as _234 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _235 from "./twap/v1beta1/query.rpc.Query";
import * as _236 from "./txfees/v1beta1/query.rpc.Query";
import * as _237 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _238 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _239 from "./gamm/v1beta1/tx.rpc.msg";
import * as _240 from "./incentives/tx.rpc.msg";
import * as _241 from "./lockup/tx.rpc.msg";
import * as _242 from "./superfluid/tx.rpc.msg";
import * as _243 from "./tokenfactory/v1beta1/tx.rpc.msg";
export declare namespace osmosis {
    namespace epochs {
        const v1beta1: {
            QueryClientImpl: typeof _225.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epochInfos(request?: _91.QueryEpochsInfoRequest): Promise<_91.QueryEpochsInfoResponse>;
                currentEpoch(request: _91.QueryCurrentEpochRequest): Promise<_91.QueryCurrentEpochResponse>;
            };
            LCDQueryClient: typeof _213.LCDQueryClient;
            QueryEpochsInfoRequest: {
                encode(_: _91.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryEpochsInfoRequest;
                fromPartial(_: Partial<_91.QueryEpochsInfoRequest>): _91.QueryEpochsInfoRequest;
            };
            QueryEpochsInfoResponse: {
                encode(message: _91.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryEpochsInfoResponse;
                fromPartial(object: Partial<_91.QueryEpochsInfoResponse>): _91.QueryEpochsInfoResponse;
            };
            QueryCurrentEpochRequest: {
                encode(message: _91.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryCurrentEpochRequest;
                fromPartial(object: Partial<_91.QueryCurrentEpochRequest>): _91.QueryCurrentEpochRequest;
            };
            QueryCurrentEpochResponse: {
                encode(message: _91.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryCurrentEpochResponse;
                fromPartial(object: Partial<_91.QueryCurrentEpochResponse>): _91.QueryCurrentEpochResponse;
            };
            EpochInfo: {
                encode(message: _90.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.EpochInfo;
                fromPartial(object: Partial<_90.EpochInfo>): _90.EpochInfo;
            };
            GenesisState: {
                encode(message: _90.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.GenesisState;
                fromPartial(object: Partial<_90.GenesisState>): _90.GenesisState;
            };
        };
    }
    namespace gamm {
        const v1beta1: {
            MsgClientImpl: typeof _239.MsgClientImpl;
            QueryClientImpl: typeof _226.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                pools(request?: _94.QueryPoolsRequest): Promise<_94.QueryPoolsResponse>;
                numPools(request?: _94.QueryNumPoolsRequest): Promise<_94.QueryNumPoolsResponse>;
                totalLiquidity(request?: _94.QueryTotalLiquidityRequest): Promise<_94.QueryTotalLiquidityResponse>;
                poolsWithFilter(request: _94.QueryPoolsWithFilterRequest): Promise<_94.QueryPoolsWithFilterResponse>;
                pool(request: _94.QueryPoolRequest): Promise<_94.QueryPoolResponse>;
                poolType(request: _94.QueryPoolTypeRequest): Promise<_94.QueryPoolTypeResponse>;
                calcJoinPoolNoSwapShares(request: _94.QueryCalcJoinPoolNoSwapSharesRequest): Promise<_94.QueryCalcJoinPoolNoSwapSharesResponse>;
                calcJoinPoolShares(request: _94.QueryCalcJoinPoolSharesRequest): Promise<_94.QueryCalcJoinPoolSharesResponse>;
                calcExitPoolCoinsFromShares(request: _94.QueryCalcExitPoolCoinsFromSharesRequest): Promise<_94.QueryCalcExitPoolCoinsFromSharesResponse>;
                poolParams(request: _94.QueryPoolParamsRequest): Promise<_94.QueryPoolParamsResponse>;
                totalPoolLiquidity(request: _94.QueryTotalPoolLiquidityRequest): Promise<_94.QueryTotalPoolLiquidityResponse>;
                totalShares(request: _94.QueryTotalSharesRequest): Promise<_94.QueryTotalSharesResponse>;
                spotPrice(request: _94.QuerySpotPriceRequest): Promise<_94.QuerySpotPriceResponse>;
                estimateSwapExactAmountIn(request: _94.QuerySwapExactAmountInRequest): Promise<_94.QuerySwapExactAmountInResponse>;
                estimateSwapExactAmountOut(request: _94.QuerySwapExactAmountOutRequest): Promise<_94.QuerySwapExactAmountOutResponse>;
            };
            LCDQueryClient: typeof _214.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    joinPool(value: _95.MsgJoinPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitPool(value: _95.MsgExitPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountIn(value: _95.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _95.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapExternAmountIn(value: _95.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapShareAmountOut(value: _95.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapExternAmountOut(value: _95.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapShareAmountIn(value: _95.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    joinPool(value: _95.MsgJoinPool): {
                        typeUrl: string;
                        value: _95.MsgJoinPool;
                    };
                    exitPool(value: _95.MsgExitPool): {
                        typeUrl: string;
                        value: _95.MsgExitPool;
                    };
                    swapExactAmountIn(value: _95.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _95.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _95.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _95.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _95.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _95.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _95.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _95.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _95.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _95.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _95.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _95.MsgExitSwapShareAmountIn;
                    };
                };
                fromPartial: {
                    joinPool(value: _95.MsgJoinPool): {
                        typeUrl: string;
                        value: _95.MsgJoinPool;
                    };
                    exitPool(value: _95.MsgExitPool): {
                        typeUrl: string;
                        value: _95.MsgExitPool;
                    };
                    swapExactAmountIn(value: _95.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _95.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _95.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _95.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _95.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _95.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _95.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _95.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _95.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _95.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _95.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _95.MsgExitSwapShareAmountIn;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareOutAmount, tokenInMaxs }: _95.MsgJoinPool) => {
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
                    }) => _95.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareInAmount, tokenOutMins }: _95.MsgExitPool) => {
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
                    }) => _95.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: _95.MsgSwapExactAmountIn) => {
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
                    }) => _95.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: _95.MsgSwapExactAmountOut) => {
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
                    }) => _95.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenIn, shareOutMinAmount }: _95.MsgJoinSwapExternAmountIn) => {
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
                    }) => _95.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenInDenom, shareOutAmount, tokenInMaxAmount }: _95.MsgJoinSwapShareAmountOut) => {
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
                    }) => _95.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOut, shareInMaxAmount }: _95.MsgExitSwapExternAmountOut) => {
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
                    }) => _95.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOutDenom, shareInAmount, tokenOutMinAmount }: _95.MsgExitSwapShareAmountIn) => {
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
                    }) => _95.MsgExitSwapShareAmountIn;
                };
            };
            MsgJoinPool: {
                encode(message: _95.MsgJoinPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgJoinPool;
                fromPartial(object: Partial<_95.MsgJoinPool>): _95.MsgJoinPool;
            };
            MsgJoinPoolResponse: {
                encode(message: _95.MsgJoinPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgJoinPoolResponse;
                fromPartial(object: Partial<_95.MsgJoinPoolResponse>): _95.MsgJoinPoolResponse;
            };
            MsgExitPool: {
                encode(message: _95.MsgExitPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgExitPool;
                fromPartial(object: Partial<_95.MsgExitPool>): _95.MsgExitPool;
            };
            MsgExitPoolResponse: {
                encode(message: _95.MsgExitPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgExitPoolResponse;
                fromPartial(object: Partial<_95.MsgExitPoolResponse>): _95.MsgExitPoolResponse;
            };
            SwapAmountInRoute: {
                encode(message: _95.SwapAmountInRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.SwapAmountInRoute;
                fromPartial(object: Partial<_95.SwapAmountInRoute>): _95.SwapAmountInRoute;
            };
            MsgSwapExactAmountIn: {
                encode(message: _95.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgSwapExactAmountIn;
                fromPartial(object: Partial<_95.MsgSwapExactAmountIn>): _95.MsgSwapExactAmountIn;
            };
            MsgSwapExactAmountInResponse: {
                encode(message: _95.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgSwapExactAmountInResponse;
                fromPartial(object: Partial<_95.MsgSwapExactAmountInResponse>): _95.MsgSwapExactAmountInResponse;
            };
            SwapAmountOutRoute: {
                encode(message: _95.SwapAmountOutRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.SwapAmountOutRoute;
                fromPartial(object: Partial<_95.SwapAmountOutRoute>): _95.SwapAmountOutRoute;
            };
            MsgSwapExactAmountOut: {
                encode(message: _95.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgSwapExactAmountOut;
                fromPartial(object: Partial<_95.MsgSwapExactAmountOut>): _95.MsgSwapExactAmountOut;
            };
            MsgSwapExactAmountOutResponse: {
                encode(message: _95.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgSwapExactAmountOutResponse;
                fromPartial(object: Partial<_95.MsgSwapExactAmountOutResponse>): _95.MsgSwapExactAmountOutResponse;
            };
            MsgJoinSwapExternAmountIn: {
                encode(message: _95.MsgJoinSwapExternAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgJoinSwapExternAmountIn;
                fromPartial(object: Partial<_95.MsgJoinSwapExternAmountIn>): _95.MsgJoinSwapExternAmountIn;
            };
            MsgJoinSwapExternAmountInResponse: {
                encode(message: _95.MsgJoinSwapExternAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgJoinSwapExternAmountInResponse;
                fromPartial(object: Partial<_95.MsgJoinSwapExternAmountInResponse>): _95.MsgJoinSwapExternAmountInResponse;
            };
            MsgJoinSwapShareAmountOut: {
                encode(message: _95.MsgJoinSwapShareAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgJoinSwapShareAmountOut;
                fromPartial(object: Partial<_95.MsgJoinSwapShareAmountOut>): _95.MsgJoinSwapShareAmountOut;
            };
            MsgJoinSwapShareAmountOutResponse: {
                encode(message: _95.MsgJoinSwapShareAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgJoinSwapShareAmountOutResponse;
                fromPartial(object: Partial<_95.MsgJoinSwapShareAmountOutResponse>): _95.MsgJoinSwapShareAmountOutResponse;
            };
            MsgExitSwapShareAmountIn: {
                encode(message: _95.MsgExitSwapShareAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgExitSwapShareAmountIn;
                fromPartial(object: Partial<_95.MsgExitSwapShareAmountIn>): _95.MsgExitSwapShareAmountIn;
            };
            MsgExitSwapShareAmountInResponse: {
                encode(message: _95.MsgExitSwapShareAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgExitSwapShareAmountInResponse;
                fromPartial(object: Partial<_95.MsgExitSwapShareAmountInResponse>): _95.MsgExitSwapShareAmountInResponse;
            };
            MsgExitSwapExternAmountOut: {
                encode(message: _95.MsgExitSwapExternAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgExitSwapExternAmountOut;
                fromPartial(object: Partial<_95.MsgExitSwapExternAmountOut>): _95.MsgExitSwapExternAmountOut;
            };
            MsgExitSwapExternAmountOutResponse: {
                encode(message: _95.MsgExitSwapExternAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgExitSwapExternAmountOutResponse;
                fromPartial(object: Partial<_95.MsgExitSwapExternAmountOutResponse>): _95.MsgExitSwapExternAmountOutResponse;
            };
            QueryPoolRequest: {
                encode(message: _94.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryPoolRequest;
                fromPartial(object: Partial<_94.QueryPoolRequest>): _94.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _94.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryPoolResponse;
                fromPartial(object: Partial<_94.QueryPoolResponse>): _94.QueryPoolResponse;
            };
            QueryPoolsRequest: {
                encode(message: _94.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryPoolsRequest;
                fromPartial(object: Partial<_94.QueryPoolsRequest>): _94.QueryPoolsRequest;
            };
            QueryPoolsResponse: {
                encode(message: _94.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryPoolsResponse;
                fromPartial(object: Partial<_94.QueryPoolsResponse>): _94.QueryPoolsResponse;
            };
            QueryNumPoolsRequest: {
                encode(_: _94.QueryNumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryNumPoolsRequest;
                fromPartial(_: Partial<_94.QueryNumPoolsRequest>): _94.QueryNumPoolsRequest;
            };
            QueryNumPoolsResponse: {
                encode(message: _94.QueryNumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryNumPoolsResponse;
                fromPartial(object: Partial<_94.QueryNumPoolsResponse>): _94.QueryNumPoolsResponse;
            };
            QueryPoolTypeRequest: {
                encode(message: _94.QueryPoolTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryPoolTypeRequest;
                fromPartial(object: Partial<_94.QueryPoolTypeRequest>): _94.QueryPoolTypeRequest;
            };
            QueryPoolTypeResponse: {
                encode(message: _94.QueryPoolTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryPoolTypeResponse;
                fromPartial(object: Partial<_94.QueryPoolTypeResponse>): _94.QueryPoolTypeResponse;
            };
            QueryCalcJoinPoolSharesRequest: {
                encode(message: _94.QueryCalcJoinPoolSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryCalcJoinPoolSharesRequest;
                fromPartial(object: Partial<_94.QueryCalcJoinPoolSharesRequest>): _94.QueryCalcJoinPoolSharesRequest;
            };
            QueryCalcJoinPoolSharesResponse: {
                encode(message: _94.QueryCalcJoinPoolSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryCalcJoinPoolSharesResponse;
                fromPartial(object: Partial<_94.QueryCalcJoinPoolSharesResponse>): _94.QueryCalcJoinPoolSharesResponse;
            };
            QueryCalcExitPoolCoinsFromSharesRequest: {
                encode(message: _94.QueryCalcExitPoolCoinsFromSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryCalcExitPoolCoinsFromSharesRequest;
                fromPartial(object: Partial<_94.QueryCalcExitPoolCoinsFromSharesRequest>): _94.QueryCalcExitPoolCoinsFromSharesRequest;
            };
            QueryCalcExitPoolCoinsFromSharesResponse: {
                encode(message: _94.QueryCalcExitPoolCoinsFromSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryCalcExitPoolCoinsFromSharesResponse;
                fromPartial(object: Partial<_94.QueryCalcExitPoolCoinsFromSharesResponse>): _94.QueryCalcExitPoolCoinsFromSharesResponse;
            };
            QueryPoolParamsRequest: {
                encode(message: _94.QueryPoolParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryPoolParamsRequest;
                fromPartial(object: Partial<_94.QueryPoolParamsRequest>): _94.QueryPoolParamsRequest;
            };
            QueryPoolParamsResponse: {
                encode(message: _94.QueryPoolParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryPoolParamsResponse;
                fromPartial(object: Partial<_94.QueryPoolParamsResponse>): _94.QueryPoolParamsResponse;
            };
            QueryTotalPoolLiquidityRequest: {
                encode(message: _94.QueryTotalPoolLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryTotalPoolLiquidityRequest;
                fromPartial(object: Partial<_94.QueryTotalPoolLiquidityRequest>): _94.QueryTotalPoolLiquidityRequest;
            };
            QueryTotalPoolLiquidityResponse: {
                encode(message: _94.QueryTotalPoolLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryTotalPoolLiquidityResponse;
                fromPartial(object: Partial<_94.QueryTotalPoolLiquidityResponse>): _94.QueryTotalPoolLiquidityResponse;
            };
            QueryTotalSharesRequest: {
                encode(message: _94.QueryTotalSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryTotalSharesRequest;
                fromPartial(object: Partial<_94.QueryTotalSharesRequest>): _94.QueryTotalSharesRequest;
            };
            QueryTotalSharesResponse: {
                encode(message: _94.QueryTotalSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryTotalSharesResponse;
                fromPartial(object: Partial<_94.QueryTotalSharesResponse>): _94.QueryTotalSharesResponse;
            };
            QueryCalcJoinPoolNoSwapSharesRequest: {
                encode(message: _94.QueryCalcJoinPoolNoSwapSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryCalcJoinPoolNoSwapSharesRequest;
                fromPartial(object: Partial<_94.QueryCalcJoinPoolNoSwapSharesRequest>): _94.QueryCalcJoinPoolNoSwapSharesRequest;
            };
            QueryCalcJoinPoolNoSwapSharesResponse: {
                encode(message: _94.QueryCalcJoinPoolNoSwapSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryCalcJoinPoolNoSwapSharesResponse;
                fromPartial(object: Partial<_94.QueryCalcJoinPoolNoSwapSharesResponse>): _94.QueryCalcJoinPoolNoSwapSharesResponse;
            };
            QuerySpotPriceRequest: {
                encode(message: _94.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QuerySpotPriceRequest;
                fromPartial(object: Partial<_94.QuerySpotPriceRequest>): _94.QuerySpotPriceRequest;
            };
            QueryPoolsWithFilterRequest: {
                encode(message: _94.QueryPoolsWithFilterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryPoolsWithFilterRequest;
                fromPartial(object: Partial<_94.QueryPoolsWithFilterRequest>): _94.QueryPoolsWithFilterRequest;
            };
            QueryPoolsWithFilterResponse: {
                encode(message: _94.QueryPoolsWithFilterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryPoolsWithFilterResponse;
                fromPartial(object: Partial<_94.QueryPoolsWithFilterResponse>): _94.QueryPoolsWithFilterResponse;
            };
            QuerySpotPriceResponse: {
                encode(message: _94.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QuerySpotPriceResponse;
                fromPartial(object: Partial<_94.QuerySpotPriceResponse>): _94.QuerySpotPriceResponse;
            };
            QuerySwapExactAmountInRequest: {
                encode(message: _94.QuerySwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QuerySwapExactAmountInRequest;
                fromPartial(object: Partial<_94.QuerySwapExactAmountInRequest>): _94.QuerySwapExactAmountInRequest;
            };
            QuerySwapExactAmountInResponse: {
                encode(message: _94.QuerySwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QuerySwapExactAmountInResponse;
                fromPartial(object: Partial<_94.QuerySwapExactAmountInResponse>): _94.QuerySwapExactAmountInResponse;
            };
            QuerySwapExactAmountOutRequest: {
                encode(message: _94.QuerySwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QuerySwapExactAmountOutRequest;
                fromPartial(object: Partial<_94.QuerySwapExactAmountOutRequest>): _94.QuerySwapExactAmountOutRequest;
            };
            QuerySwapExactAmountOutResponse: {
                encode(message: _94.QuerySwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QuerySwapExactAmountOutResponse;
                fromPartial(object: Partial<_94.QuerySwapExactAmountOutResponse>): _94.QuerySwapExactAmountOutResponse;
            };
            QueryTotalLiquidityRequest: {
                encode(_: _94.QueryTotalLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryTotalLiquidityRequest;
                fromPartial(_: Partial<_94.QueryTotalLiquidityRequest>): _94.QueryTotalLiquidityRequest;
            };
            QueryTotalLiquidityResponse: {
                encode(message: _94.QueryTotalLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryTotalLiquidityResponse;
                fromPartial(object: Partial<_94.QueryTotalLiquidityResponse>): _94.QueryTotalLiquidityResponse;
            };
            Params: {
                encode(message: _93.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Params;
                fromPartial(object: Partial<_93.Params>): _93.Params;
            };
            GenesisState: {
                encode(message: _93.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.GenesisState;
                fromPartial(object: Partial<_93.GenesisState>): _93.GenesisState;
            };
            SmoothWeightChangeParams: {
                encode(message: _92.SmoothWeightChangeParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.SmoothWeightChangeParams;
                fromPartial(object: Partial<_92.SmoothWeightChangeParams>): _92.SmoothWeightChangeParams;
            };
            PoolParams: {
                encode(message: _92.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.PoolParams;
                fromPartial(object: Partial<_92.PoolParams>): _92.PoolParams;
            };
            PoolAsset: {
                encode(message: _92.PoolAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.PoolAsset;
                fromPartial(object: Partial<_92.PoolAsset>): _92.PoolAsset;
            };
            Pool: {
                encode(message: _92.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Pool;
                fromPartial(object: Partial<_92.Pool>): _92.Pool;
            };
        };
        namespace poolmodels {
            namespace balancer {
                const v1beta1: {
                    MsgClientImpl: typeof _237.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createBalancerPool(value: _96.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createBalancerPool(value: _96.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _96.MsgCreateBalancerPool;
                            };
                        };
                        fromPartial: {
                            createBalancerPool(value: _96.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _96.MsgCreateBalancerPool;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
                            aminoType: string;
                            toAmino: ({ sender, poolParams, poolAssets, futurePoolGovernor }: _96.MsgCreateBalancerPool) => {
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
                            }) => _96.MsgCreateBalancerPool;
                        };
                    };
                    MsgCreateBalancerPool: {
                        encode(message: _96.MsgCreateBalancerPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgCreateBalancerPool;
                        fromPartial(object: Partial<_96.MsgCreateBalancerPool>): _96.MsgCreateBalancerPool;
                    };
                    MsgCreateBalancerPoolResponse: {
                        encode(message: _96.MsgCreateBalancerPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgCreateBalancerPoolResponse;
                        fromPartial(object: Partial<_96.MsgCreateBalancerPoolResponse>): _96.MsgCreateBalancerPoolResponse;
                    };
                };
            }
            namespace stableswap {
                const v1beta1: {
                    MsgClientImpl: typeof _238.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createStableswapPool(value: _98.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            stableSwapAdjustScalingFactors(value: _98.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createStableswapPool(value: _98.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _98.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _98.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _98.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        fromPartial: {
                            createStableswapPool(value: _98.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _98.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _98.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _98.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
                            aminoType: string;
                            toAmino: ({ sender, poolParams, initialPoolLiquidity, scalingFactors, futurePoolGovernor, scalingFactorController }: _98.MsgCreateStableswapPool) => {
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
                            }) => _98.MsgCreateStableswapPool;
                        };
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
                            aminoType: string;
                            toAmino: ({ sender, poolId, scalingFactors }: _98.MsgStableSwapAdjustScalingFactors) => {
                                sender: string;
                                pool_id: string;
                                scaling_factors: import("long")[];
                            };
                            fromAmino: ({ sender, pool_id, scaling_factors }: {
                                sender: string;
                                pool_id: string;
                                scaling_factors: import("long")[];
                            }) => _98.MsgStableSwapAdjustScalingFactors;
                        };
                    };
                    MsgCreateStableswapPool: {
                        encode(message: _98.MsgCreateStableswapPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgCreateStableswapPool;
                        fromPartial(object: Partial<_98.MsgCreateStableswapPool>): _98.MsgCreateStableswapPool;
                    };
                    MsgCreateStableswapPoolResponse: {
                        encode(message: _98.MsgCreateStableswapPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgCreateStableswapPoolResponse;
                        fromPartial(object: Partial<_98.MsgCreateStableswapPoolResponse>): _98.MsgCreateStableswapPoolResponse;
                    };
                    MsgStableSwapAdjustScalingFactors: {
                        encode(message: _98.MsgStableSwapAdjustScalingFactors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgStableSwapAdjustScalingFactors;
                        fromPartial(object: Partial<_98.MsgStableSwapAdjustScalingFactors>): _98.MsgStableSwapAdjustScalingFactors;
                    };
                    MsgStableSwapAdjustScalingFactorsResponse: {
                        encode(_: _98.MsgStableSwapAdjustScalingFactorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgStableSwapAdjustScalingFactorsResponse;
                        fromPartial(_: Partial<_98.MsgStableSwapAdjustScalingFactorsResponse>): _98.MsgStableSwapAdjustScalingFactorsResponse;
                    };
                    PoolParams: {
                        encode(message: _97.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.PoolParams;
                        fromPartial(object: Partial<_97.PoolParams>): _97.PoolParams;
                    };
                    Pool: {
                        encode(message: _97.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.Pool;
                        fromPartial(object: Partial<_97.Pool>): _97.Pool;
                    };
                };
            }
        }
        const v2: {
            QueryClientImpl: typeof _227.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                spotPrice(request: _99.QuerySpotPriceRequest): Promise<_99.QuerySpotPriceResponse>;
            };
            LCDQueryClient: typeof _215.LCDQueryClient;
            QuerySpotPriceRequest: {
                encode(message: _99.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QuerySpotPriceRequest;
                fromPartial(object: Partial<_99.QuerySpotPriceRequest>): _99.QuerySpotPriceRequest;
            };
            QuerySpotPriceResponse: {
                encode(message: _99.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QuerySpotPriceResponse;
                fromPartial(object: Partial<_99.QuerySpotPriceResponse>): _99.QuerySpotPriceResponse;
            };
        };
    }
    namespace ibcratelimit {
        const v1beta1: {
            QueryClientImpl: typeof _228.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _101.QueryParamsRequest): Promise<_101.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _216.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _101.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryParamsRequest;
                fromPartial(_: Partial<_101.QueryParamsRequest>): _101.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _101.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryParamsResponse;
                fromPartial(object: Partial<_101.QueryParamsResponse>): _101.QueryParamsResponse;
            };
            Params: {
                encode(message: _100.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Params;
                fromPartial(object: Partial<_100.Params>): _100.Params;
            };
        };
    }
    const incentives: {
        MsgClientImpl: typeof _240.MsgClientImpl;
        QueryClientImpl: typeof _229.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            moduleToDistributeCoins(request?: _105.ModuleToDistributeCoinsRequest): Promise<_105.ModuleToDistributeCoinsResponse>;
            gaugeByID(request: _105.GaugeByIDRequest): Promise<_105.GaugeByIDResponse>;
            gauges(request?: _105.GaugesRequest): Promise<_105.GaugesResponse>;
            activeGauges(request?: _105.ActiveGaugesRequest): Promise<_105.ActiveGaugesResponse>;
            activeGaugesPerDenom(request: _105.ActiveGaugesPerDenomRequest): Promise<_105.ActiveGaugesPerDenomResponse>;
            upcomingGauges(request?: _105.UpcomingGaugesRequest): Promise<_105.UpcomingGaugesResponse>;
            upcomingGaugesPerDenom(request: _105.UpcomingGaugesPerDenomRequest): Promise<_105.UpcomingGaugesPerDenomResponse>;
            rewardsEst(request: _105.RewardsEstRequest): Promise<_105.RewardsEstResponse>;
            lockableDurations(request?: _105.QueryLockableDurationsRequest): Promise<_105.QueryLockableDurationsResponse>;
        };
        LCDQueryClient: typeof _217.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                createGauge(value: _106.MsgCreateGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addToGauge(value: _106.MsgAddToGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createGauge(value: _106.MsgCreateGauge): {
                    typeUrl: string;
                    value: _106.MsgCreateGauge;
                };
                addToGauge(value: _106.MsgAddToGauge): {
                    typeUrl: string;
                    value: _106.MsgAddToGauge;
                };
            };
            fromPartial: {
                createGauge(value: _106.MsgCreateGauge): {
                    typeUrl: string;
                    value: _106.MsgCreateGauge;
                };
                addToGauge(value: _106.MsgAddToGauge): {
                    typeUrl: string;
                    value: _106.MsgAddToGauge;
                };
            };
        };
        AminoConverter: {
            "/osmosis.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: ({ isPerpetual, owner, distributeTo, coins, startTime, numEpochsPaidOver }: _106.MsgCreateGauge) => {
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
                }) => _106.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: ({ owner, gaugeId, rewards }: _106.MsgAddToGauge) => {
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
                }) => _106.MsgAddToGauge;
            };
        };
        MsgCreateGauge: {
            encode(message: _106.MsgCreateGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgCreateGauge;
            fromPartial(object: Partial<_106.MsgCreateGauge>): _106.MsgCreateGauge;
        };
        MsgCreateGaugeResponse: {
            encode(_: _106.MsgCreateGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgCreateGaugeResponse;
            fromPartial(_: Partial<_106.MsgCreateGaugeResponse>): _106.MsgCreateGaugeResponse;
        };
        MsgAddToGauge: {
            encode(message: _106.MsgAddToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgAddToGauge;
            fromPartial(object: Partial<_106.MsgAddToGauge>): _106.MsgAddToGauge;
        };
        MsgAddToGaugeResponse: {
            encode(_: _106.MsgAddToGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgAddToGaugeResponse;
            fromPartial(_: Partial<_106.MsgAddToGaugeResponse>): _106.MsgAddToGaugeResponse;
        };
        ModuleToDistributeCoinsRequest: {
            encode(_: _105.ModuleToDistributeCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.ModuleToDistributeCoinsRequest;
            fromPartial(_: Partial<_105.ModuleToDistributeCoinsRequest>): _105.ModuleToDistributeCoinsRequest;
        };
        ModuleToDistributeCoinsResponse: {
            encode(message: _105.ModuleToDistributeCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.ModuleToDistributeCoinsResponse;
            fromPartial(object: Partial<_105.ModuleToDistributeCoinsResponse>): _105.ModuleToDistributeCoinsResponse;
        };
        GaugeByIDRequest: {
            encode(message: _105.GaugeByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.GaugeByIDRequest;
            fromPartial(object: Partial<_105.GaugeByIDRequest>): _105.GaugeByIDRequest;
        };
        GaugeByIDResponse: {
            encode(message: _105.GaugeByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.GaugeByIDResponse;
            fromPartial(object: Partial<_105.GaugeByIDResponse>): _105.GaugeByIDResponse;
        };
        GaugesRequest: {
            encode(message: _105.GaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.GaugesRequest;
            fromPartial(object: Partial<_105.GaugesRequest>): _105.GaugesRequest;
        };
        GaugesResponse: {
            encode(message: _105.GaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.GaugesResponse;
            fromPartial(object: Partial<_105.GaugesResponse>): _105.GaugesResponse;
        };
        ActiveGaugesRequest: {
            encode(message: _105.ActiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.ActiveGaugesRequest;
            fromPartial(object: Partial<_105.ActiveGaugesRequest>): _105.ActiveGaugesRequest;
        };
        ActiveGaugesResponse: {
            encode(message: _105.ActiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.ActiveGaugesResponse;
            fromPartial(object: Partial<_105.ActiveGaugesResponse>): _105.ActiveGaugesResponse;
        };
        ActiveGaugesPerDenomRequest: {
            encode(message: _105.ActiveGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.ActiveGaugesPerDenomRequest;
            fromPartial(object: Partial<_105.ActiveGaugesPerDenomRequest>): _105.ActiveGaugesPerDenomRequest;
        };
        ActiveGaugesPerDenomResponse: {
            encode(message: _105.ActiveGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.ActiveGaugesPerDenomResponse;
            fromPartial(object: Partial<_105.ActiveGaugesPerDenomResponse>): _105.ActiveGaugesPerDenomResponse;
        };
        UpcomingGaugesRequest: {
            encode(message: _105.UpcomingGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.UpcomingGaugesRequest;
            fromPartial(object: Partial<_105.UpcomingGaugesRequest>): _105.UpcomingGaugesRequest;
        };
        UpcomingGaugesResponse: {
            encode(message: _105.UpcomingGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.UpcomingGaugesResponse;
            fromPartial(object: Partial<_105.UpcomingGaugesResponse>): _105.UpcomingGaugesResponse;
        };
        UpcomingGaugesPerDenomRequest: {
            encode(message: _105.UpcomingGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.UpcomingGaugesPerDenomRequest;
            fromPartial(object: Partial<_105.UpcomingGaugesPerDenomRequest>): _105.UpcomingGaugesPerDenomRequest;
        };
        UpcomingGaugesPerDenomResponse: {
            encode(message: _105.UpcomingGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.UpcomingGaugesPerDenomResponse;
            fromPartial(object: Partial<_105.UpcomingGaugesPerDenomResponse>): _105.UpcomingGaugesPerDenomResponse;
        };
        RewardsEstRequest: {
            encode(message: _105.RewardsEstRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.RewardsEstRequest;
            fromPartial(object: Partial<_105.RewardsEstRequest>): _105.RewardsEstRequest;
        };
        RewardsEstResponse: {
            encode(message: _105.RewardsEstResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.RewardsEstResponse;
            fromPartial(object: Partial<_105.RewardsEstResponse>): _105.RewardsEstResponse;
        };
        QueryLockableDurationsRequest: {
            encode(_: _105.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryLockableDurationsRequest;
            fromPartial(_: Partial<_105.QueryLockableDurationsRequest>): _105.QueryLockableDurationsRequest;
        };
        QueryLockableDurationsResponse: {
            encode(message: _105.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryLockableDurationsResponse;
            fromPartial(object: Partial<_105.QueryLockableDurationsResponse>): _105.QueryLockableDurationsResponse;
        };
        Params: {
            encode(message: _104.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Params;
            fromPartial(object: Partial<_104.Params>): _104.Params;
        };
        GenesisState: {
            encode(message: _103.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.GenesisState;
            fromPartial(object: Partial<_103.GenesisState>): _103.GenesisState;
        };
        Gauge: {
            encode(message: _102.Gauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Gauge;
            fromPartial(object: Partial<_102.Gauge>): _102.Gauge;
        };
        LockableDurationsInfo: {
            encode(message: _102.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.LockableDurationsInfo;
            fromPartial(object: Partial<_102.LockableDurationsInfo>): _102.LockableDurationsInfo;
        };
    };
    const lockup: {
        MsgClientImpl: typeof _241.MsgClientImpl;
        QueryClientImpl: typeof _230.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            moduleBalance(request?: _110.ModuleBalanceRequest): Promise<_110.ModuleBalanceResponse>;
            moduleLockedAmount(request?: _110.ModuleLockedAmountRequest): Promise<_110.ModuleLockedAmountResponse>;
            accountUnlockableCoins(request: _110.AccountUnlockableCoinsRequest): Promise<_110.AccountUnlockableCoinsResponse>;
            accountUnlockingCoins(request: _110.AccountUnlockingCoinsRequest): Promise<_110.AccountUnlockingCoinsResponse>;
            accountLockedCoins(request: _110.AccountLockedCoinsRequest): Promise<_110.AccountLockedCoinsResponse>;
            accountLockedPastTime(request: _110.AccountLockedPastTimeRequest): Promise<_110.AccountLockedPastTimeResponse>;
            accountLockedPastTimeNotUnlockingOnly(request: _110.AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<_110.AccountLockedPastTimeNotUnlockingOnlyResponse>;
            accountUnlockedBeforeTime(request: _110.AccountUnlockedBeforeTimeRequest): Promise<_110.AccountUnlockedBeforeTimeResponse>;
            accountLockedPastTimeDenom(request: _110.AccountLockedPastTimeDenomRequest): Promise<_110.AccountLockedPastTimeDenomResponse>;
            lockedDenom(request: _110.LockedDenomRequest): Promise<_110.LockedDenomResponse>;
            lockedByID(request: _110.LockedRequest): Promise<_110.LockedResponse>;
            syntheticLockupsByLockupID(request: _110.SyntheticLockupsByLockupIDRequest): Promise<_110.SyntheticLockupsByLockupIDResponse>;
            accountLockedLongerDuration(request: _110.AccountLockedLongerDurationRequest): Promise<_110.AccountLockedLongerDurationResponse>;
            accountLockedDuration(request: _110.AccountLockedDurationRequest): Promise<_110.AccountLockedDurationResponse>;
            accountLockedLongerDurationNotUnlockingOnly(request: _110.AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<_110.AccountLockedLongerDurationNotUnlockingOnlyResponse>;
            accountLockedLongerDurationDenom(request: _110.AccountLockedLongerDurationDenomRequest): Promise<_110.AccountLockedLongerDurationDenomResponse>;
            params(request?: _110.QueryParamsRequest): Promise<_110.QueryParamsResponse>;
        };
        LCDQueryClient: typeof _218.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                lockTokens(value: _111.MsgLockTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlockingAll(value: _111.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlocking(value: _111.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                extendLockup(value: _111.MsgExtendLockup): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                forceUnlock(value: _111.MsgForceUnlock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                lockTokens(value: _111.MsgLockTokens): {
                    typeUrl: string;
                    value: _111.MsgLockTokens;
                };
                beginUnlockingAll(value: _111.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _111.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _111.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _111.MsgBeginUnlocking;
                };
                extendLockup(value: _111.MsgExtendLockup): {
                    typeUrl: string;
                    value: _111.MsgExtendLockup;
                };
                forceUnlock(value: _111.MsgForceUnlock): {
                    typeUrl: string;
                    value: _111.MsgForceUnlock;
                };
            };
            fromPartial: {
                lockTokens(value: _111.MsgLockTokens): {
                    typeUrl: string;
                    value: _111.MsgLockTokens;
                };
                beginUnlockingAll(value: _111.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _111.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _111.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _111.MsgBeginUnlocking;
                };
                extendLockup(value: _111.MsgExtendLockup): {
                    typeUrl: string;
                    value: _111.MsgExtendLockup;
                };
                forceUnlock(value: _111.MsgForceUnlock): {
                    typeUrl: string;
                    value: _111.MsgForceUnlock;
                };
            };
        };
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: ({ owner, duration, coins }: _111.MsgLockTokens) => {
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
                }) => _111.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: ({ owner }: _111.MsgBeginUnlockingAll) => {
                    owner: string;
                };
                fromAmino: ({ owner }: {
                    owner: string;
                }) => _111.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: ({ owner, ID, coins }: _111.MsgBeginUnlocking) => {
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
                }) => _111.MsgBeginUnlocking;
            };
            "/osmosis.lockup.MsgExtendLockup": {
                aminoType: string;
                toAmino: ({ owner, ID, duration }: _111.MsgExtendLockup) => {
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
                }) => _111.MsgExtendLockup;
            };
            "/osmosis.lockup.MsgForceUnlock": {
                aminoType: string;
                toAmino: ({ owner, ID, coins }: _111.MsgForceUnlock) => {
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
                }) => _111.MsgForceUnlock;
            };
        };
        MsgLockTokens: {
            encode(message: _111.MsgLockTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgLockTokens;
            fromPartial(object: Partial<_111.MsgLockTokens>): _111.MsgLockTokens;
        };
        MsgLockTokensResponse: {
            encode(message: _111.MsgLockTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgLockTokensResponse;
            fromPartial(object: Partial<_111.MsgLockTokensResponse>): _111.MsgLockTokensResponse;
        };
        MsgBeginUnlockingAll: {
            encode(message: _111.MsgBeginUnlockingAll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgBeginUnlockingAll;
            fromPartial(object: Partial<_111.MsgBeginUnlockingAll>): _111.MsgBeginUnlockingAll;
        };
        MsgBeginUnlockingAllResponse: {
            encode(message: _111.MsgBeginUnlockingAllResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgBeginUnlockingAllResponse;
            fromPartial(object: Partial<_111.MsgBeginUnlockingAllResponse>): _111.MsgBeginUnlockingAllResponse;
        };
        MsgBeginUnlocking: {
            encode(message: _111.MsgBeginUnlocking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgBeginUnlocking;
            fromPartial(object: Partial<_111.MsgBeginUnlocking>): _111.MsgBeginUnlocking;
        };
        MsgBeginUnlockingResponse: {
            encode(message: _111.MsgBeginUnlockingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgBeginUnlockingResponse;
            fromPartial(object: Partial<_111.MsgBeginUnlockingResponse>): _111.MsgBeginUnlockingResponse;
        };
        MsgExtendLockup: {
            encode(message: _111.MsgExtendLockup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgExtendLockup;
            fromPartial(object: Partial<_111.MsgExtendLockup>): _111.MsgExtendLockup;
        };
        MsgExtendLockupResponse: {
            encode(message: _111.MsgExtendLockupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgExtendLockupResponse;
            fromPartial(object: Partial<_111.MsgExtendLockupResponse>): _111.MsgExtendLockupResponse;
        };
        MsgForceUnlock: {
            encode(message: _111.MsgForceUnlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgForceUnlock;
            fromPartial(object: Partial<_111.MsgForceUnlock>): _111.MsgForceUnlock;
        };
        MsgForceUnlockResponse: {
            encode(message: _111.MsgForceUnlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgForceUnlockResponse;
            fromPartial(object: Partial<_111.MsgForceUnlockResponse>): _111.MsgForceUnlockResponse;
        };
        ModuleBalanceRequest: {
            encode(_: _110.ModuleBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.ModuleBalanceRequest;
            fromPartial(_: Partial<_110.ModuleBalanceRequest>): _110.ModuleBalanceRequest;
        };
        ModuleBalanceResponse: {
            encode(message: _110.ModuleBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.ModuleBalanceResponse;
            fromPartial(object: Partial<_110.ModuleBalanceResponse>): _110.ModuleBalanceResponse;
        };
        ModuleLockedAmountRequest: {
            encode(_: _110.ModuleLockedAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.ModuleLockedAmountRequest;
            fromPartial(_: Partial<_110.ModuleLockedAmountRequest>): _110.ModuleLockedAmountRequest;
        };
        ModuleLockedAmountResponse: {
            encode(message: _110.ModuleLockedAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.ModuleLockedAmountResponse;
            fromPartial(object: Partial<_110.ModuleLockedAmountResponse>): _110.ModuleLockedAmountResponse;
        };
        AccountUnlockableCoinsRequest: {
            encode(message: _110.AccountUnlockableCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.AccountUnlockableCoinsRequest;
            fromPartial(object: Partial<_110.AccountUnlockableCoinsRequest>): _110.AccountUnlockableCoinsRequest;
        };
        AccountUnlockableCoinsResponse: {
            encode(message: _110.AccountUnlockableCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.AccountUnlockableCoinsResponse;
            fromPartial(object: Partial<_110.AccountUnlockableCoinsResponse>): _110.AccountUnlockableCoinsResponse;
        };
        AccountUnlockingCoinsRequest: {
            encode(message: _110.AccountUnlockingCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.AccountUnlockingCoinsRequest;
            fromPartial(object: Partial<_110.AccountUnlockingCoinsRequest>): _110.AccountUnlockingCoinsRequest;
        };
        AccountUnlockingCoinsResponse: {
            encode(message: _110.AccountUnlockingCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.AccountUnlockingCoinsResponse;
            fromPartial(object: Partial<_110.AccountUnlockingCoinsResponse>): _110.AccountUnlockingCoinsResponse;
        };
        AccountLockedCoinsRequest: {
            encode(message: _110.AccountLockedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.AccountLockedCoinsRequest;
            fromPartial(object: Partial<_110.AccountLockedCoinsRequest>): _110.AccountLockedCoinsRequest;
        };
        AccountLockedCoinsResponse: {
            encode(message: _110.AccountLockedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.AccountLockedCoinsResponse;
            fromPartial(object: Partial<_110.AccountLockedCoinsResponse>): _110.AccountLockedCoinsResponse;
        };
        AccountLockedPastTimeRequest: {
            encode(message: _110.AccountLockedPastTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.AccountLockedPastTimeRequest;
            fromPartial(object: Partial<_110.AccountLockedPastTimeRequest>): _110.AccountLockedPastTimeRequest;
        };
        AccountLockedPastTimeResponse: {
            encode(message: _110.AccountLockedPastTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.AccountLockedPastTimeResponse;
            fromPartial(object: Partial<_110.AccountLockedPastTimeResponse>): _110.AccountLockedPastTimeResponse;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            encode(message: _110.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromPartial(object: Partial<_110.AccountLockedPastTimeNotUnlockingOnlyRequest>): _110.AccountLockedPastTimeNotUnlockingOnlyRequest;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            encode(message: _110.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromPartial(object: Partial<_110.AccountLockedPastTimeNotUnlockingOnlyResponse>): _110.AccountLockedPastTimeNotUnlockingOnlyResponse;
        };
        AccountUnlockedBeforeTimeRequest: {
            encode(message: _110.AccountUnlockedBeforeTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.AccountUnlockedBeforeTimeRequest;
            fromPartial(object: Partial<_110.AccountUnlockedBeforeTimeRequest>): _110.AccountUnlockedBeforeTimeRequest;
        };
        AccountUnlockedBeforeTimeResponse: {
            encode(message: _110.AccountUnlockedBeforeTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.AccountUnlockedBeforeTimeResponse;
            fromPartial(object: Partial<_110.AccountUnlockedBeforeTimeResponse>): _110.AccountUnlockedBeforeTimeResponse;
        };
        AccountLockedPastTimeDenomRequest: {
            encode(message: _110.AccountLockedPastTimeDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.AccountLockedPastTimeDenomRequest;
            fromPartial(object: Partial<_110.AccountLockedPastTimeDenomRequest>): _110.AccountLockedPastTimeDenomRequest;
        };
        AccountLockedPastTimeDenomResponse: {
            encode(message: _110.AccountLockedPastTimeDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.AccountLockedPastTimeDenomResponse;
            fromPartial(object: Partial<_110.AccountLockedPastTimeDenomResponse>): _110.AccountLockedPastTimeDenomResponse;
        };
        LockedDenomRequest: {
            encode(message: _110.LockedDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.LockedDenomRequest;
            fromPartial(object: Partial<_110.LockedDenomRequest>): _110.LockedDenomRequest;
        };
        LockedDenomResponse: {
            encode(message: _110.LockedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.LockedDenomResponse;
            fromPartial(object: Partial<_110.LockedDenomResponse>): _110.LockedDenomResponse;
        };
        LockedRequest: {
            encode(message: _110.LockedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.LockedRequest;
            fromPartial(object: Partial<_110.LockedRequest>): _110.LockedRequest;
        };
        LockedResponse: {
            encode(message: _110.LockedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.LockedResponse;
            fromPartial(object: Partial<_110.LockedResponse>): _110.LockedResponse;
        };
        SyntheticLockupsByLockupIDRequest: {
            encode(message: _110.SyntheticLockupsByLockupIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.SyntheticLockupsByLockupIDRequest;
            fromPartial(object: Partial<_110.SyntheticLockupsByLockupIDRequest>): _110.SyntheticLockupsByLockupIDRequest;
        };
        SyntheticLockupsByLockupIDResponse: {
            encode(message: _110.SyntheticLockupsByLockupIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.SyntheticLockupsByLockupIDResponse;
            fromPartial(object: Partial<_110.SyntheticLockupsByLockupIDResponse>): _110.SyntheticLockupsByLockupIDResponse;
        };
        AccountLockedLongerDurationRequest: {
            encode(message: _110.AccountLockedLongerDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.AccountLockedLongerDurationRequest;
            fromPartial(object: Partial<_110.AccountLockedLongerDurationRequest>): _110.AccountLockedLongerDurationRequest;
        };
        AccountLockedLongerDurationResponse: {
            encode(message: _110.AccountLockedLongerDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.AccountLockedLongerDurationResponse;
            fromPartial(object: Partial<_110.AccountLockedLongerDurationResponse>): _110.AccountLockedLongerDurationResponse;
        };
        AccountLockedDurationRequest: {
            encode(message: _110.AccountLockedDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.AccountLockedDurationRequest;
            fromPartial(object: Partial<_110.AccountLockedDurationRequest>): _110.AccountLockedDurationRequest;
        };
        AccountLockedDurationResponse: {
            encode(message: _110.AccountLockedDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.AccountLockedDurationResponse;
            fromPartial(object: Partial<_110.AccountLockedDurationResponse>): _110.AccountLockedDurationResponse;
        };
        AccountLockedLongerDurationNotUnlockingOnlyRequest: {
            encode(message: _110.AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromPartial(object: Partial<_110.AccountLockedLongerDurationNotUnlockingOnlyRequest>): _110.AccountLockedLongerDurationNotUnlockingOnlyRequest;
        };
        AccountLockedLongerDurationNotUnlockingOnlyResponse: {
            encode(message: _110.AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromPartial(object: Partial<_110.AccountLockedLongerDurationNotUnlockingOnlyResponse>): _110.AccountLockedLongerDurationNotUnlockingOnlyResponse;
        };
        AccountLockedLongerDurationDenomRequest: {
            encode(message: _110.AccountLockedLongerDurationDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.AccountLockedLongerDurationDenomRequest;
            fromPartial(object: Partial<_110.AccountLockedLongerDurationDenomRequest>): _110.AccountLockedLongerDurationDenomRequest;
        };
        AccountLockedLongerDurationDenomResponse: {
            encode(message: _110.AccountLockedLongerDurationDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.AccountLockedLongerDurationDenomResponse;
            fromPartial(object: Partial<_110.AccountLockedLongerDurationDenomResponse>): _110.AccountLockedLongerDurationDenomResponse;
        };
        QueryParamsRequest: {
            encode(_: _110.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryParamsRequest;
            fromPartial(_: Partial<_110.QueryParamsRequest>): _110.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _110.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryParamsResponse;
            fromPartial(object: Partial<_110.QueryParamsResponse>): _110.QueryParamsResponse;
        };
        Params: {
            encode(message: _109.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.Params;
            fromPartial(object: Partial<_109.Params>): _109.Params;
        };
        lockQueryTypeFromJSON(object: any): _108.LockQueryType;
        lockQueryTypeToJSON(object: _108.LockQueryType): string;
        LockQueryType: typeof _108.LockQueryType;
        LockQueryTypeSDKType: typeof _108.LockQueryTypeSDKType;
        PeriodLock: {
            encode(message: _108.PeriodLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.PeriodLock;
            fromPartial(object: Partial<_108.PeriodLock>): _108.PeriodLock;
        };
        QueryCondition: {
            encode(message: _108.QueryCondition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryCondition;
            fromPartial(object: Partial<_108.QueryCondition>): _108.QueryCondition;
        };
        SyntheticLock: {
            encode(message: _108.SyntheticLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.SyntheticLock;
            fromPartial(object: Partial<_108.SyntheticLock>): _108.SyntheticLock;
        };
        GenesisState: {
            encode(message: _107.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.GenesisState;
            fromPartial(object: Partial<_107.GenesisState>): _107.GenesisState;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _231.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _114.QueryParamsRequest): Promise<_114.QueryParamsResponse>;
                epochProvisions(request?: _114.QueryEpochProvisionsRequest): Promise<_114.QueryEpochProvisionsResponse>;
            };
            LCDQueryClient: typeof _219.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _114.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryParamsRequest;
                fromPartial(_: Partial<_114.QueryParamsRequest>): _114.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _114.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryParamsResponse;
                fromPartial(object: Partial<_114.QueryParamsResponse>): _114.QueryParamsResponse;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _114.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryEpochProvisionsRequest;
                fromPartial(_: Partial<_114.QueryEpochProvisionsRequest>): _114.QueryEpochProvisionsRequest;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _114.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryEpochProvisionsResponse;
                fromPartial(object: Partial<_114.QueryEpochProvisionsResponse>): _114.QueryEpochProvisionsResponse;
            };
            Minter: {
                encode(message: _113.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Minter;
                fromPartial(object: Partial<_113.Minter>): _113.Minter;
            };
            WeightedAddress: {
                encode(message: _113.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.WeightedAddress;
                fromPartial(object: Partial<_113.WeightedAddress>): _113.WeightedAddress;
            };
            DistributionProportions: {
                encode(message: _113.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.DistributionProportions;
                fromPartial(object: Partial<_113.DistributionProportions>): _113.DistributionProportions;
            };
            Params: {
                encode(message: _113.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Params;
                fromPartial(object: Partial<_113.Params>): _113.Params;
            };
            GenesisState: {
                encode(message: _112.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.GenesisState;
                fromPartial(object: Partial<_112.GenesisState>): _112.GenesisState;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            QueryClientImpl: typeof _232.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                gaugeIds(request: _118.QueryGaugeIdsRequest): Promise<_118.QueryGaugeIdsResponse>;
                distrInfo(request?: _118.QueryDistrInfoRequest): Promise<_118.QueryDistrInfoResponse>;
                params(request?: _118.QueryParamsRequest): Promise<_118.QueryParamsResponse>;
                lockableDurations(request?: _118.QueryLockableDurationsRequest): Promise<_118.QueryLockableDurationsResponse>;
                incentivizedPools(request?: _118.QueryIncentivizedPoolsRequest): Promise<_118.QueryIncentivizedPoolsResponse>;
                externalIncentiveGauges(request?: _118.QueryExternalIncentiveGaugesRequest): Promise<_118.QueryExternalIncentiveGaugesResponse>;
            };
            LCDQueryClient: typeof _220.LCDQueryClient;
            QueryGaugeIdsRequest: {
                encode(message: _118.QueryGaugeIdsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryGaugeIdsRequest;
                fromPartial(object: Partial<_118.QueryGaugeIdsRequest>): _118.QueryGaugeIdsRequest;
            };
            QueryGaugeIdsResponse: {
                encode(message: _118.QueryGaugeIdsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryGaugeIdsResponse;
                fromPartial(object: Partial<_118.QueryGaugeIdsResponse>): _118.QueryGaugeIdsResponse;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                encode(message: _118.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromPartial(object: Partial<_118.QueryGaugeIdsResponse_GaugeIdWithDuration>): _118.QueryGaugeIdsResponse_GaugeIdWithDuration;
            };
            QueryDistrInfoRequest: {
                encode(_: _118.QueryDistrInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryDistrInfoRequest;
                fromPartial(_: Partial<_118.QueryDistrInfoRequest>): _118.QueryDistrInfoRequest;
            };
            QueryDistrInfoResponse: {
                encode(message: _118.QueryDistrInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryDistrInfoResponse;
                fromPartial(object: Partial<_118.QueryDistrInfoResponse>): _118.QueryDistrInfoResponse;
            };
            QueryParamsRequest: {
                encode(_: _118.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryParamsRequest;
                fromPartial(_: Partial<_118.QueryParamsRequest>): _118.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _118.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryParamsResponse;
                fromPartial(object: Partial<_118.QueryParamsResponse>): _118.QueryParamsResponse;
            };
            QueryLockableDurationsRequest: {
                encode(_: _118.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryLockableDurationsRequest;
                fromPartial(_: Partial<_118.QueryLockableDurationsRequest>): _118.QueryLockableDurationsRequest;
            };
            QueryLockableDurationsResponse: {
                encode(message: _118.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryLockableDurationsResponse;
                fromPartial(object: Partial<_118.QueryLockableDurationsResponse>): _118.QueryLockableDurationsResponse;
            };
            QueryIncentivizedPoolsRequest: {
                encode(_: _118.QueryIncentivizedPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryIncentivizedPoolsRequest;
                fromPartial(_: Partial<_118.QueryIncentivizedPoolsRequest>): _118.QueryIncentivizedPoolsRequest;
            };
            IncentivizedPool: {
                encode(message: _118.IncentivizedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.IncentivizedPool;
                fromPartial(object: Partial<_118.IncentivizedPool>): _118.IncentivizedPool;
            };
            QueryIncentivizedPoolsResponse: {
                encode(message: _118.QueryIncentivizedPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryIncentivizedPoolsResponse;
                fromPartial(object: Partial<_118.QueryIncentivizedPoolsResponse>): _118.QueryIncentivizedPoolsResponse;
            };
            QueryExternalIncentiveGaugesRequest: {
                encode(_: _118.QueryExternalIncentiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryExternalIncentiveGaugesRequest;
                fromPartial(_: Partial<_118.QueryExternalIncentiveGaugesRequest>): _118.QueryExternalIncentiveGaugesRequest;
            };
            QueryExternalIncentiveGaugesResponse: {
                encode(message: _118.QueryExternalIncentiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryExternalIncentiveGaugesResponse;
                fromPartial(object: Partial<_118.QueryExternalIncentiveGaugesResponse>): _118.QueryExternalIncentiveGaugesResponse;
            };
            Params: {
                encode(message: _117.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.Params;
                fromPartial(object: Partial<_117.Params>): _117.Params;
            };
            LockableDurationsInfo: {
                encode(message: _117.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.LockableDurationsInfo;
                fromPartial(object: Partial<_117.LockableDurationsInfo>): _117.LockableDurationsInfo;
            };
            DistrInfo: {
                encode(message: _117.DistrInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.DistrInfo;
                fromPartial(object: Partial<_117.DistrInfo>): _117.DistrInfo;
            };
            DistrRecord: {
                encode(message: _117.DistrRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.DistrRecord;
                fromPartial(object: Partial<_117.DistrRecord>): _117.DistrRecord;
            };
            PoolToGauge: {
                encode(message: _117.PoolToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.PoolToGauge;
                fromPartial(object: Partial<_117.PoolToGauge>): _117.PoolToGauge;
            };
            PoolToGauges: {
                encode(message: _117.PoolToGauges, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.PoolToGauges;
                fromPartial(object: Partial<_117.PoolToGauges>): _117.PoolToGauges;
            };
            ReplacePoolIncentivesProposal: {
                encode(message: _116.ReplacePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.ReplacePoolIncentivesProposal;
                fromPartial(object: Partial<_116.ReplacePoolIncentivesProposal>): _116.ReplacePoolIncentivesProposal;
            };
            UpdatePoolIncentivesProposal: {
                encode(message: _116.UpdatePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.UpdatePoolIncentivesProposal;
                fromPartial(object: Partial<_116.UpdatePoolIncentivesProposal>): _116.UpdatePoolIncentivesProposal;
            };
            GenesisState: {
                encode(message: _115.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.GenesisState;
                fromPartial(object: Partial<_115.GenesisState>): _115.GenesisState;
            };
        };
    }
    namespace store {
        const v1beta1: {
            Node: {
                encode(message: _119.Node, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Node;
                fromPartial(object: Partial<_119.Node>): _119.Node;
            };
            Child: {
                encode(message: _119.Child, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Child;
                fromPartial(object: Partial<_119.Child>): _119.Child;
            };
            Leaf: {
                encode(message: _119.Leaf, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Leaf;
                fromPartial(object: Partial<_119.Leaf>): _119.Leaf;
            };
        };
    }
    const superfluid: {
        MsgClientImpl: typeof _242.MsgClientImpl;
        QueryClientImpl: typeof _233.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _122.QueryParamsRequest): Promise<_122.QueryParamsResponse>;
            assetType(request: _122.AssetTypeRequest): Promise<_122.AssetTypeResponse>;
            allAssets(request?: _122.AllAssetsRequest): Promise<_122.AllAssetsResponse>;
            assetMultiplier(request: _122.AssetMultiplierRequest): Promise<_122.AssetMultiplierResponse>;
            allIntermediaryAccounts(request?: _122.AllIntermediaryAccountsRequest): Promise<_122.AllIntermediaryAccountsResponse>;
            connectedIntermediaryAccount(request: _122.ConnectedIntermediaryAccountRequest): Promise<_122.ConnectedIntermediaryAccountResponse>;
            totalDelegationByValidatorForDenom(request: _122.QueryTotalDelegationByValidatorForDenomRequest): Promise<_122.QueryTotalDelegationByValidatorForDenomResponse>;
            totalSuperfluidDelegations(request?: _122.TotalSuperfluidDelegationsRequest): Promise<_122.TotalSuperfluidDelegationsResponse>;
            superfluidDelegationAmount(request: _122.SuperfluidDelegationAmountRequest): Promise<_122.SuperfluidDelegationAmountResponse>;
            superfluidDelegationsByDelegator(request: _122.SuperfluidDelegationsByDelegatorRequest): Promise<_122.SuperfluidDelegationsByDelegatorResponse>;
            superfluidUndelegationsByDelegator(request: _122.SuperfluidUndelegationsByDelegatorRequest): Promise<_122.SuperfluidUndelegationsByDelegatorResponse>;
            superfluidDelegationsByValidatorDenom(request: _122.SuperfluidDelegationsByValidatorDenomRequest): Promise<_122.SuperfluidDelegationsByValidatorDenomResponse>;
            estimateSuperfluidDelegatedAmountByValidatorDenom(request: _122.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<_122.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
            totalDelegationByDelegator(request: _122.QueryTotalDelegationByDelegatorRequest): Promise<_122.QueryTotalDelegationByDelegatorResponse>;
            unpoolWhitelist(request?: _122.QueryUnpoolWhitelistRequest): Promise<_122.QueryUnpoolWhitelistResponse>;
        };
        LCDQueryClient: typeof _221.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                superfluidDelegate(value: _124.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegate(value: _124.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUnbondLock(value: _124.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lockAndSuperfluidDelegate(value: _124.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unPoolWhitelistedPool(value: _124.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                superfluidDelegate(value: _124.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _124.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _124.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _124.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _124.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _124.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _124.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _124.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _124.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _124.MsgUnPoolWhitelistedPool;
                };
            };
            fromPartial: {
                superfluidDelegate(value: _124.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _124.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _124.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _124.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _124.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _124.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _124.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _124.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _124.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _124.MsgUnPoolWhitelistedPool;
                };
            };
        };
        AminoConverter: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId, valAddr }: _124.MsgSuperfluidDelegate) => {
                    sender: string;
                    lock_id: string;
                    val_addr: string;
                };
                fromAmino: ({ sender, lock_id, val_addr }: {
                    sender: string;
                    lock_id: string;
                    val_addr: string;
                }) => _124.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _124.MsgSuperfluidUndelegate) => {
                    sender: string;
                    lock_id: string;
                };
                fromAmino: ({ sender, lock_id }: {
                    sender: string;
                    lock_id: string;
                }) => _124.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _124.MsgSuperfluidUnbondLock) => {
                    sender: string;
                    lock_id: string;
                };
                fromAmino: ({ sender, lock_id }: {
                    sender: string;
                    lock_id: string;
                }) => _124.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, coins, valAddr }: _124.MsgLockAndSuperfluidDelegate) => {
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
                }) => _124.MsgLockAndSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
                aminoType: string;
                toAmino: ({ sender, poolId }: _124.MsgUnPoolWhitelistedPool) => {
                    sender: string;
                    pool_id: string;
                };
                fromAmino: ({ sender, pool_id }: {
                    sender: string;
                    pool_id: string;
                }) => _124.MsgUnPoolWhitelistedPool;
            };
        };
        MsgSuperfluidDelegate: {
            encode(message: _124.MsgSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.MsgSuperfluidDelegate;
            fromPartial(object: Partial<_124.MsgSuperfluidDelegate>): _124.MsgSuperfluidDelegate;
        };
        MsgSuperfluidDelegateResponse: {
            encode(_: _124.MsgSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.MsgSuperfluidDelegateResponse;
            fromPartial(_: Partial<_124.MsgSuperfluidDelegateResponse>): _124.MsgSuperfluidDelegateResponse;
        };
        MsgSuperfluidUndelegate: {
            encode(message: _124.MsgSuperfluidUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.MsgSuperfluidUndelegate;
            fromPartial(object: Partial<_124.MsgSuperfluidUndelegate>): _124.MsgSuperfluidUndelegate;
        };
        MsgSuperfluidUndelegateResponse: {
            encode(_: _124.MsgSuperfluidUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.MsgSuperfluidUndelegateResponse;
            fromPartial(_: Partial<_124.MsgSuperfluidUndelegateResponse>): _124.MsgSuperfluidUndelegateResponse;
        };
        MsgSuperfluidUnbondLock: {
            encode(message: _124.MsgSuperfluidUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.MsgSuperfluidUnbondLock;
            fromPartial(object: Partial<_124.MsgSuperfluidUnbondLock>): _124.MsgSuperfluidUnbondLock;
        };
        MsgSuperfluidUnbondLockResponse: {
            encode(_: _124.MsgSuperfluidUnbondLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.MsgSuperfluidUnbondLockResponse;
            fromPartial(_: Partial<_124.MsgSuperfluidUnbondLockResponse>): _124.MsgSuperfluidUnbondLockResponse;
        };
        MsgLockAndSuperfluidDelegate: {
            encode(message: _124.MsgLockAndSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.MsgLockAndSuperfluidDelegate;
            fromPartial(object: Partial<_124.MsgLockAndSuperfluidDelegate>): _124.MsgLockAndSuperfluidDelegate;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            encode(message: _124.MsgLockAndSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.MsgLockAndSuperfluidDelegateResponse;
            fromPartial(object: Partial<_124.MsgLockAndSuperfluidDelegateResponse>): _124.MsgLockAndSuperfluidDelegateResponse;
        };
        MsgUnPoolWhitelistedPool: {
            encode(message: _124.MsgUnPoolWhitelistedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.MsgUnPoolWhitelistedPool;
            fromPartial(object: Partial<_124.MsgUnPoolWhitelistedPool>): _124.MsgUnPoolWhitelistedPool;
        };
        MsgUnPoolWhitelistedPoolResponse: {
            encode(message: _124.MsgUnPoolWhitelistedPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.MsgUnPoolWhitelistedPoolResponse;
            fromPartial(object: Partial<_124.MsgUnPoolWhitelistedPoolResponse>): _124.MsgUnPoolWhitelistedPoolResponse;
        };
        superfluidAssetTypeFromJSON(object: any): _123.SuperfluidAssetType;
        superfluidAssetTypeToJSON(object: _123.SuperfluidAssetType): string;
        SuperfluidAssetType: typeof _123.SuperfluidAssetType;
        SuperfluidAssetTypeSDKType: typeof _123.SuperfluidAssetTypeSDKType;
        SuperfluidAsset: {
            encode(message: _123.SuperfluidAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.SuperfluidAsset;
            fromPartial(object: Partial<_123.SuperfluidAsset>): _123.SuperfluidAsset;
        };
        SuperfluidIntermediaryAccount: {
            encode(message: _123.SuperfluidIntermediaryAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.SuperfluidIntermediaryAccount;
            fromPartial(object: Partial<_123.SuperfluidIntermediaryAccount>): _123.SuperfluidIntermediaryAccount;
        };
        OsmoEquivalentMultiplierRecord: {
            encode(message: _123.OsmoEquivalentMultiplierRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.OsmoEquivalentMultiplierRecord;
            fromPartial(object: Partial<_123.OsmoEquivalentMultiplierRecord>): _123.OsmoEquivalentMultiplierRecord;
        };
        SuperfluidDelegationRecord: {
            encode(message: _123.SuperfluidDelegationRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.SuperfluidDelegationRecord;
            fromPartial(object: Partial<_123.SuperfluidDelegationRecord>): _123.SuperfluidDelegationRecord;
        };
        LockIdIntermediaryAccountConnection: {
            encode(message: _123.LockIdIntermediaryAccountConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.LockIdIntermediaryAccountConnection;
            fromPartial(object: Partial<_123.LockIdIntermediaryAccountConnection>): _123.LockIdIntermediaryAccountConnection;
        };
        UnpoolWhitelistedPools: {
            encode(message: _123.UnpoolWhitelistedPools, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.UnpoolWhitelistedPools;
            fromPartial(object: Partial<_123.UnpoolWhitelistedPools>): _123.UnpoolWhitelistedPools;
        };
        QueryParamsRequest: {
            encode(_: _122.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryParamsRequest;
            fromPartial(_: Partial<_122.QueryParamsRequest>): _122.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _122.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryParamsResponse;
            fromPartial(object: Partial<_122.QueryParamsResponse>): _122.QueryParamsResponse;
        };
        AssetTypeRequest: {
            encode(message: _122.AssetTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.AssetTypeRequest;
            fromPartial(object: Partial<_122.AssetTypeRequest>): _122.AssetTypeRequest;
        };
        AssetTypeResponse: {
            encode(message: _122.AssetTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.AssetTypeResponse;
            fromPartial(object: Partial<_122.AssetTypeResponse>): _122.AssetTypeResponse;
        };
        AllAssetsRequest: {
            encode(_: _122.AllAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.AllAssetsRequest;
            fromPartial(_: Partial<_122.AllAssetsRequest>): _122.AllAssetsRequest;
        };
        AllAssetsResponse: {
            encode(message: _122.AllAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.AllAssetsResponse;
            fromPartial(object: Partial<_122.AllAssetsResponse>): _122.AllAssetsResponse;
        };
        AssetMultiplierRequest: {
            encode(message: _122.AssetMultiplierRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.AssetMultiplierRequest;
            fromPartial(object: Partial<_122.AssetMultiplierRequest>): _122.AssetMultiplierRequest;
        };
        AssetMultiplierResponse: {
            encode(message: _122.AssetMultiplierResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.AssetMultiplierResponse;
            fromPartial(object: Partial<_122.AssetMultiplierResponse>): _122.AssetMultiplierResponse;
        };
        SuperfluidIntermediaryAccountInfo: {
            encode(message: _122.SuperfluidIntermediaryAccountInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.SuperfluidIntermediaryAccountInfo;
            fromPartial(object: Partial<_122.SuperfluidIntermediaryAccountInfo>): _122.SuperfluidIntermediaryAccountInfo;
        };
        AllIntermediaryAccountsRequest: {
            encode(message: _122.AllIntermediaryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.AllIntermediaryAccountsRequest;
            fromPartial(object: Partial<_122.AllIntermediaryAccountsRequest>): _122.AllIntermediaryAccountsRequest;
        };
        AllIntermediaryAccountsResponse: {
            encode(message: _122.AllIntermediaryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.AllIntermediaryAccountsResponse;
            fromPartial(object: Partial<_122.AllIntermediaryAccountsResponse>): _122.AllIntermediaryAccountsResponse;
        };
        ConnectedIntermediaryAccountRequest: {
            encode(message: _122.ConnectedIntermediaryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ConnectedIntermediaryAccountRequest;
            fromPartial(object: Partial<_122.ConnectedIntermediaryAccountRequest>): _122.ConnectedIntermediaryAccountRequest;
        };
        ConnectedIntermediaryAccountResponse: {
            encode(message: _122.ConnectedIntermediaryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ConnectedIntermediaryAccountResponse;
            fromPartial(object: Partial<_122.ConnectedIntermediaryAccountResponse>): _122.ConnectedIntermediaryAccountResponse;
        };
        QueryTotalDelegationByValidatorForDenomRequest: {
            encode(message: _122.QueryTotalDelegationByValidatorForDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryTotalDelegationByValidatorForDenomRequest;
            fromPartial(object: Partial<_122.QueryTotalDelegationByValidatorForDenomRequest>): _122.QueryTotalDelegationByValidatorForDenomRequest;
        };
        QueryTotalDelegationByValidatorForDenomResponse: {
            encode(message: _122.QueryTotalDelegationByValidatorForDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryTotalDelegationByValidatorForDenomResponse;
            fromPartial(object: Partial<_122.QueryTotalDelegationByValidatorForDenomResponse>): _122.QueryTotalDelegationByValidatorForDenomResponse;
        };
        Delegations: {
            encode(message: _122.Delegations, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.Delegations;
            fromPartial(object: Partial<_122.Delegations>): _122.Delegations;
        };
        TotalSuperfluidDelegationsRequest: {
            encode(_: _122.TotalSuperfluidDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.TotalSuperfluidDelegationsRequest;
            fromPartial(_: Partial<_122.TotalSuperfluidDelegationsRequest>): _122.TotalSuperfluidDelegationsRequest;
        };
        TotalSuperfluidDelegationsResponse: {
            encode(message: _122.TotalSuperfluidDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.TotalSuperfluidDelegationsResponse;
            fromPartial(object: Partial<_122.TotalSuperfluidDelegationsResponse>): _122.TotalSuperfluidDelegationsResponse;
        };
        SuperfluidDelegationAmountRequest: {
            encode(message: _122.SuperfluidDelegationAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.SuperfluidDelegationAmountRequest;
            fromPartial(object: Partial<_122.SuperfluidDelegationAmountRequest>): _122.SuperfluidDelegationAmountRequest;
        };
        SuperfluidDelegationAmountResponse: {
            encode(message: _122.SuperfluidDelegationAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.SuperfluidDelegationAmountResponse;
            fromPartial(object: Partial<_122.SuperfluidDelegationAmountResponse>): _122.SuperfluidDelegationAmountResponse;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            encode(message: _122.SuperfluidDelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.SuperfluidDelegationsByDelegatorRequest;
            fromPartial(object: Partial<_122.SuperfluidDelegationsByDelegatorRequest>): _122.SuperfluidDelegationsByDelegatorRequest;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            encode(message: _122.SuperfluidDelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.SuperfluidDelegationsByDelegatorResponse;
            fromPartial(object: Partial<_122.SuperfluidDelegationsByDelegatorResponse>): _122.SuperfluidDelegationsByDelegatorResponse;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            encode(message: _122.SuperfluidUndelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.SuperfluidUndelegationsByDelegatorRequest;
            fromPartial(object: Partial<_122.SuperfluidUndelegationsByDelegatorRequest>): _122.SuperfluidUndelegationsByDelegatorRequest;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            encode(message: _122.SuperfluidUndelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.SuperfluidUndelegationsByDelegatorResponse;
            fromPartial(object: Partial<_122.SuperfluidUndelegationsByDelegatorResponse>): _122.SuperfluidUndelegationsByDelegatorResponse;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            encode(message: _122.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.SuperfluidDelegationsByValidatorDenomRequest;
            fromPartial(object: Partial<_122.SuperfluidDelegationsByValidatorDenomRequest>): _122.SuperfluidDelegationsByValidatorDenomRequest;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            encode(message: _122.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.SuperfluidDelegationsByValidatorDenomResponse;
            fromPartial(object: Partial<_122.SuperfluidDelegationsByValidatorDenomResponse>): _122.SuperfluidDelegationsByValidatorDenomResponse;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            encode(message: _122.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromPartial(object: Partial<_122.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>): _122.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            encode(message: _122.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromPartial(object: Partial<_122.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>): _122.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
        };
        QueryTotalDelegationByDelegatorRequest: {
            encode(message: _122.QueryTotalDelegationByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryTotalDelegationByDelegatorRequest;
            fromPartial(object: Partial<_122.QueryTotalDelegationByDelegatorRequest>): _122.QueryTotalDelegationByDelegatorRequest;
        };
        QueryTotalDelegationByDelegatorResponse: {
            encode(message: _122.QueryTotalDelegationByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryTotalDelegationByDelegatorResponse;
            fromPartial(object: Partial<_122.QueryTotalDelegationByDelegatorResponse>): _122.QueryTotalDelegationByDelegatorResponse;
        };
        QueryUnpoolWhitelistRequest: {
            encode(_: _122.QueryUnpoolWhitelistRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryUnpoolWhitelistRequest;
            fromPartial(_: Partial<_122.QueryUnpoolWhitelistRequest>): _122.QueryUnpoolWhitelistRequest;
        };
        QueryUnpoolWhitelistResponse: {
            encode(message: _122.QueryUnpoolWhitelistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryUnpoolWhitelistResponse;
            fromPartial(object: Partial<_122.QueryUnpoolWhitelistResponse>): _122.QueryUnpoolWhitelistResponse;
        };
        Params: {
            encode(message: _121.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.Params;
            fromPartial(object: Partial<_121.Params>): _121.Params;
        };
        GenesisState: {
            encode(message: _120.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.GenesisState;
            fromPartial(object: Partial<_120.GenesisState>): _120.GenesisState;
        };
    };
    namespace tokenfactory {
        const v1beta1: {
            MsgClientImpl: typeof _243.MsgClientImpl;
            QueryClientImpl: typeof _234.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _128.QueryParamsRequest): Promise<_128.QueryParamsResponse>;
                denomAuthorityMetadata(request: _128.QueryDenomAuthorityMetadataRequest): Promise<_128.QueryDenomAuthorityMetadataResponse>;
                denomsFromCreator(request: _128.QueryDenomsFromCreatorRequest): Promise<_128.QueryDenomsFromCreatorResponse>;
            };
            LCDQueryClient: typeof _222.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _129.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _129.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _129.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _129.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _129.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _129.MsgCreateDenom): {
                        typeUrl: string;
                        value: _129.MsgCreateDenom;
                    };
                    mint(value: _129.MsgMint): {
                        typeUrl: string;
                        value: _129.MsgMint;
                    };
                    burn(value: _129.MsgBurn): {
                        typeUrl: string;
                        value: _129.MsgBurn;
                    };
                    changeAdmin(value: _129.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _129.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _129.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _129.MsgSetDenomMetadata;
                    };
                };
                fromPartial: {
                    createDenom(value: _129.MsgCreateDenom): {
                        typeUrl: string;
                        value: _129.MsgCreateDenom;
                    };
                    mint(value: _129.MsgMint): {
                        typeUrl: string;
                        value: _129.MsgMint;
                    };
                    burn(value: _129.MsgBurn): {
                        typeUrl: string;
                        value: _129.MsgBurn;
                    };
                    changeAdmin(value: _129.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _129.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _129.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _129.MsgSetDenomMetadata;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: ({ sender, subdenom }: _129.MsgCreateDenom) => {
                        sender: string;
                        subdenom: string;
                    };
                    fromAmino: ({ sender, subdenom }: {
                        sender: string;
                        subdenom: string;
                    }) => _129.MsgCreateDenom;
                };
                "/osmosis.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _129.MsgMint) => {
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
                    }) => _129.MsgMint;
                };
                "/osmosis.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _129.MsgBurn) => {
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
                    }) => _129.MsgBurn;
                };
                "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, denom, newAdmin }: _129.MsgChangeAdmin) => {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    };
                    fromAmino: ({ sender, denom, new_admin }: {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    }) => _129.MsgChangeAdmin;
                };
                "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: ({ sender, metadata }: _129.MsgSetDenomMetadata) => {
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
                    }) => _129.MsgSetDenomMetadata;
                };
            };
            MsgCreateDenom: {
                encode(message: _129.MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgCreateDenom;
                fromPartial(object: Partial<_129.MsgCreateDenom>): _129.MsgCreateDenom;
            };
            MsgCreateDenomResponse: {
                encode(message: _129.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgCreateDenomResponse;
                fromPartial(object: Partial<_129.MsgCreateDenomResponse>): _129.MsgCreateDenomResponse;
            };
            MsgMint: {
                encode(message: _129.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgMint;
                fromPartial(object: Partial<_129.MsgMint>): _129.MsgMint;
            };
            MsgMintResponse: {
                encode(_: _129.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgMintResponse;
                fromPartial(_: Partial<_129.MsgMintResponse>): _129.MsgMintResponse;
            };
            MsgBurn: {
                encode(message: _129.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgBurn;
                fromPartial(object: Partial<_129.MsgBurn>): _129.MsgBurn;
            };
            MsgBurnResponse: {
                encode(_: _129.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgBurnResponse;
                fromPartial(_: Partial<_129.MsgBurnResponse>): _129.MsgBurnResponse;
            };
            MsgChangeAdmin: {
                encode(message: _129.MsgChangeAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgChangeAdmin;
                fromPartial(object: Partial<_129.MsgChangeAdmin>): _129.MsgChangeAdmin;
            };
            MsgChangeAdminResponse: {
                encode(_: _129.MsgChangeAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgChangeAdminResponse;
                fromPartial(_: Partial<_129.MsgChangeAdminResponse>): _129.MsgChangeAdminResponse;
            };
            MsgSetDenomMetadata: {
                encode(message: _129.MsgSetDenomMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgSetDenomMetadata;
                fromPartial(object: Partial<_129.MsgSetDenomMetadata>): _129.MsgSetDenomMetadata;
            };
            MsgSetDenomMetadataResponse: {
                encode(_: _129.MsgSetDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgSetDenomMetadataResponse;
                fromPartial(_: Partial<_129.MsgSetDenomMetadataResponse>): _129.MsgSetDenomMetadataResponse;
            };
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
            QueryDenomAuthorityMetadataRequest: {
                encode(message: _128.QueryDenomAuthorityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryDenomAuthorityMetadataRequest;
                fromPartial(object: Partial<_128.QueryDenomAuthorityMetadataRequest>): _128.QueryDenomAuthorityMetadataRequest;
            };
            QueryDenomAuthorityMetadataResponse: {
                encode(message: _128.QueryDenomAuthorityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryDenomAuthorityMetadataResponse;
                fromPartial(object: Partial<_128.QueryDenomAuthorityMetadataResponse>): _128.QueryDenomAuthorityMetadataResponse;
            };
            QueryDenomsFromCreatorRequest: {
                encode(message: _128.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryDenomsFromCreatorRequest;
                fromPartial(object: Partial<_128.QueryDenomsFromCreatorRequest>): _128.QueryDenomsFromCreatorRequest;
            };
            QueryDenomsFromCreatorResponse: {
                encode(message: _128.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryDenomsFromCreatorResponse;
                fromPartial(object: Partial<_128.QueryDenomsFromCreatorResponse>): _128.QueryDenomsFromCreatorResponse;
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
            GenesisDenom: {
                encode(message: _126.GenesisDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.GenesisDenom;
                fromPartial(object: Partial<_126.GenesisDenom>): _126.GenesisDenom;
            };
            DenomAuthorityMetadata: {
                encode(message: _125.DenomAuthorityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.DenomAuthorityMetadata;
                fromPartial(object: Partial<_125.DenomAuthorityMetadata>): _125.DenomAuthorityMetadata;
            };
        };
    }
    namespace twap {
        const v1beta1: {
            QueryClientImpl: typeof _235.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _131.ParamsRequest): Promise<_131.ParamsResponse>;
                arithmeticTwap(request: _131.ArithmeticTwapRequest): Promise<_131.ArithmeticTwapResponse>;
                arithmeticTwapToNow(request: _131.ArithmeticTwapToNowRequest): Promise<_131.ArithmeticTwapToNowResponse>;
            };
            LCDQueryClient: typeof _223.LCDQueryClient;
            TwapRecord: {
                encode(message: _132.TwapRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.TwapRecord;
                fromPartial(object: Partial<_132.TwapRecord>): _132.TwapRecord;
            };
            ArithmeticTwapRequest: {
                encode(message: _131.ArithmeticTwapRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ArithmeticTwapRequest;
                fromPartial(object: Partial<_131.ArithmeticTwapRequest>): _131.ArithmeticTwapRequest;
            };
            ArithmeticTwapResponse: {
                encode(message: _131.ArithmeticTwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ArithmeticTwapResponse;
                fromPartial(object: Partial<_131.ArithmeticTwapResponse>): _131.ArithmeticTwapResponse;
            };
            ArithmeticTwapToNowRequest: {
                encode(message: _131.ArithmeticTwapToNowRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ArithmeticTwapToNowRequest;
                fromPartial(object: Partial<_131.ArithmeticTwapToNowRequest>): _131.ArithmeticTwapToNowRequest;
            };
            ArithmeticTwapToNowResponse: {
                encode(message: _131.ArithmeticTwapToNowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ArithmeticTwapToNowResponse;
                fromPartial(object: Partial<_131.ArithmeticTwapToNowResponse>): _131.ArithmeticTwapToNowResponse;
            };
            ParamsRequest: {
                encode(_: _131.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ParamsRequest;
                fromPartial(_: Partial<_131.ParamsRequest>): _131.ParamsRequest;
            };
            ParamsResponse: {
                encode(message: _131.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ParamsResponse;
                fromPartial(object: Partial<_131.ParamsResponse>): _131.ParamsResponse;
            };
            Params: {
                encode(message: _130.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.Params;
                fromPartial(object: Partial<_130.Params>): _130.Params;
            };
            GenesisState: {
                encode(message: _130.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.GenesisState;
                fromPartial(object: Partial<_130.GenesisState>): _130.GenesisState;
            };
        };
    }
    namespace txfees {
        const v1beta1: {
            QueryClientImpl: typeof _236.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                feeTokens(request?: _136.QueryFeeTokensRequest): Promise<_136.QueryFeeTokensResponse>;
                denomSpotPrice(request: _136.QueryDenomSpotPriceRequest): Promise<_136.QueryDenomSpotPriceResponse>;
                denomPoolId(request: _136.QueryDenomPoolIdRequest): Promise<_136.QueryDenomPoolIdResponse>;
                baseDenom(request?: _136.QueryBaseDenomRequest): Promise<_136.QueryBaseDenomResponse>;
            };
            LCDQueryClient: typeof _224.LCDQueryClient;
            QueryFeeTokensRequest: {
                encode(_: _136.QueryFeeTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryFeeTokensRequest;
                fromPartial(_: Partial<_136.QueryFeeTokensRequest>): _136.QueryFeeTokensRequest;
            };
            QueryFeeTokensResponse: {
                encode(message: _136.QueryFeeTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryFeeTokensResponse;
                fromPartial(object: Partial<_136.QueryFeeTokensResponse>): _136.QueryFeeTokensResponse;
            };
            QueryDenomSpotPriceRequest: {
                encode(message: _136.QueryDenomSpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryDenomSpotPriceRequest;
                fromPartial(object: Partial<_136.QueryDenomSpotPriceRequest>): _136.QueryDenomSpotPriceRequest;
            };
            QueryDenomSpotPriceResponse: {
                encode(message: _136.QueryDenomSpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryDenomSpotPriceResponse;
                fromPartial(object: Partial<_136.QueryDenomSpotPriceResponse>): _136.QueryDenomSpotPriceResponse;
            };
            QueryDenomPoolIdRequest: {
                encode(message: _136.QueryDenomPoolIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryDenomPoolIdRequest;
                fromPartial(object: Partial<_136.QueryDenomPoolIdRequest>): _136.QueryDenomPoolIdRequest;
            };
            QueryDenomPoolIdResponse: {
                encode(message: _136.QueryDenomPoolIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryDenomPoolIdResponse;
                fromPartial(object: Partial<_136.QueryDenomPoolIdResponse>): _136.QueryDenomPoolIdResponse;
            };
            QueryBaseDenomRequest: {
                encode(_: _136.QueryBaseDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryBaseDenomRequest;
                fromPartial(_: Partial<_136.QueryBaseDenomRequest>): _136.QueryBaseDenomRequest;
            };
            QueryBaseDenomResponse: {
                encode(message: _136.QueryBaseDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryBaseDenomResponse;
                fromPartial(object: Partial<_136.QueryBaseDenomResponse>): _136.QueryBaseDenomResponse;
            };
            UpdateFeeTokenProposal: {
                encode(message: _135.UpdateFeeTokenProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.UpdateFeeTokenProposal;
                fromPartial(object: Partial<_135.UpdateFeeTokenProposal>): _135.UpdateFeeTokenProposal;
            };
            GenesisState: {
                encode(message: _134.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.GenesisState;
                fromPartial(object: Partial<_134.GenesisState>): _134.GenesisState;
            };
            FeeToken: {
                encode(message: _133.FeeToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.FeeToken;
                fromPartial(object: Partial<_133.FeeToken>): _133.FeeToken;
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
                            v1beta1: _237.MsgClientImpl;
                        };
                        stableswap: {
                            v1beta1: _238.MsgClientImpl;
                        };
                    };
                    v1beta1: _239.MsgClientImpl;
                };
                incentives: _240.MsgClientImpl;
                lockup: _241.MsgClientImpl;
                superfluid: _242.MsgClientImpl;
                tokenfactory: {
                    v1beta1: _243.MsgClientImpl;
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
                epochs: {
                    v1beta1: {
                        epochInfos(request?: _91.QueryEpochsInfoRequest): Promise<_91.QueryEpochsInfoResponse>;
                        currentEpoch(request: _91.QueryCurrentEpochRequest): Promise<_91.QueryCurrentEpochResponse>;
                    };
                };
                gamm: {
                    v1beta1: {
                        pools(request?: _94.QueryPoolsRequest): Promise<_94.QueryPoolsResponse>;
                        numPools(request?: _94.QueryNumPoolsRequest): Promise<_94.QueryNumPoolsResponse>;
                        totalLiquidity(request?: _94.QueryTotalLiquidityRequest): Promise<_94.QueryTotalLiquidityResponse>;
                        poolsWithFilter(request: _94.QueryPoolsWithFilterRequest): Promise<_94.QueryPoolsWithFilterResponse>;
                        pool(request: _94.QueryPoolRequest): Promise<_94.QueryPoolResponse>;
                        poolType(request: _94.QueryPoolTypeRequest): Promise<_94.QueryPoolTypeResponse>;
                        calcJoinPoolNoSwapShares(request: _94.QueryCalcJoinPoolNoSwapSharesRequest): Promise<_94.QueryCalcJoinPoolNoSwapSharesResponse>;
                        calcJoinPoolShares(request: _94.QueryCalcJoinPoolSharesRequest): Promise<_94.QueryCalcJoinPoolSharesResponse>;
                        calcExitPoolCoinsFromShares(request: _94.QueryCalcExitPoolCoinsFromSharesRequest): Promise<_94.QueryCalcExitPoolCoinsFromSharesResponse>;
                        poolParams(request: _94.QueryPoolParamsRequest): Promise<_94.QueryPoolParamsResponse>;
                        totalPoolLiquidity(request: _94.QueryTotalPoolLiquidityRequest): Promise<_94.QueryTotalPoolLiquidityResponse>;
                        totalShares(request: _94.QueryTotalSharesRequest): Promise<_94.QueryTotalSharesResponse>;
                        spotPrice(request: _94.QuerySpotPriceRequest): Promise<_94.QuerySpotPriceResponse>;
                        estimateSwapExactAmountIn(request: _94.QuerySwapExactAmountInRequest): Promise<_94.QuerySwapExactAmountInResponse>;
                        estimateSwapExactAmountOut(request: _94.QuerySwapExactAmountOutRequest): Promise<_94.QuerySwapExactAmountOutResponse>;
                    };
                    v2: {
                        spotPrice(request: _99.QuerySpotPriceRequest): Promise<_99.QuerySpotPriceResponse>;
                    };
                };
                ibcratelimit: {
                    v1beta1: {
                        params(request?: _101.QueryParamsRequest): Promise<_101.QueryParamsResponse>;
                    };
                };
                incentives: {
                    moduleToDistributeCoins(request?: _105.ModuleToDistributeCoinsRequest): Promise<_105.ModuleToDistributeCoinsResponse>;
                    gaugeByID(request: _105.GaugeByIDRequest): Promise<_105.GaugeByIDResponse>;
                    gauges(request?: _105.GaugesRequest): Promise<_105.GaugesResponse>;
                    activeGauges(request?: _105.ActiveGaugesRequest): Promise<_105.ActiveGaugesResponse>;
                    activeGaugesPerDenom(request: _105.ActiveGaugesPerDenomRequest): Promise<_105.ActiveGaugesPerDenomResponse>;
                    upcomingGauges(request?: _105.UpcomingGaugesRequest): Promise<_105.UpcomingGaugesResponse>;
                    upcomingGaugesPerDenom(request: _105.UpcomingGaugesPerDenomRequest): Promise<_105.UpcomingGaugesPerDenomResponse>;
                    rewardsEst(request: _105.RewardsEstRequest): Promise<_105.RewardsEstResponse>;
                    lockableDurations(request?: _105.QueryLockableDurationsRequest): Promise<_105.QueryLockableDurationsResponse>;
                };
                lockup: {
                    moduleBalance(request?: _110.ModuleBalanceRequest): Promise<_110.ModuleBalanceResponse>;
                    moduleLockedAmount(request?: _110.ModuleLockedAmountRequest): Promise<_110.ModuleLockedAmountResponse>;
                    accountUnlockableCoins(request: _110.AccountUnlockableCoinsRequest): Promise<_110.AccountUnlockableCoinsResponse>;
                    accountUnlockingCoins(request: _110.AccountUnlockingCoinsRequest): Promise<_110.AccountUnlockingCoinsResponse>;
                    accountLockedCoins(request: _110.AccountLockedCoinsRequest): Promise<_110.AccountLockedCoinsResponse>;
                    accountLockedPastTime(request: _110.AccountLockedPastTimeRequest): Promise<_110.AccountLockedPastTimeResponse>;
                    accountLockedPastTimeNotUnlockingOnly(request: _110.AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<_110.AccountLockedPastTimeNotUnlockingOnlyResponse>;
                    accountUnlockedBeforeTime(request: _110.AccountUnlockedBeforeTimeRequest): Promise<_110.AccountUnlockedBeforeTimeResponse>;
                    accountLockedPastTimeDenom(request: _110.AccountLockedPastTimeDenomRequest): Promise<_110.AccountLockedPastTimeDenomResponse>;
                    lockedDenom(request: _110.LockedDenomRequest): Promise<_110.LockedDenomResponse>;
                    lockedByID(request: _110.LockedRequest): Promise<_110.LockedResponse>;
                    syntheticLockupsByLockupID(request: _110.SyntheticLockupsByLockupIDRequest): Promise<_110.SyntheticLockupsByLockupIDResponse>;
                    accountLockedLongerDuration(request: _110.AccountLockedLongerDurationRequest): Promise<_110.AccountLockedLongerDurationResponse>;
                    accountLockedDuration(request: _110.AccountLockedDurationRequest): Promise<_110.AccountLockedDurationResponse>;
                    accountLockedLongerDurationNotUnlockingOnly(request: _110.AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<_110.AccountLockedLongerDurationNotUnlockingOnlyResponse>;
                    accountLockedLongerDurationDenom(request: _110.AccountLockedLongerDurationDenomRequest): Promise<_110.AccountLockedLongerDurationDenomResponse>;
                    params(request?: _110.QueryParamsRequest): Promise<_110.QueryParamsResponse>;
                };
                mint: {
                    v1beta1: {
                        params(request?: _114.QueryParamsRequest): Promise<_114.QueryParamsResponse>;
                        epochProvisions(request?: _114.QueryEpochProvisionsRequest): Promise<_114.QueryEpochProvisionsResponse>;
                    };
                };
                poolincentives: {
                    v1beta1: {
                        gaugeIds(request: _118.QueryGaugeIdsRequest): Promise<_118.QueryGaugeIdsResponse>;
                        distrInfo(request?: _118.QueryDistrInfoRequest): Promise<_118.QueryDistrInfoResponse>;
                        params(request?: _118.QueryParamsRequest): Promise<_118.QueryParamsResponse>;
                        lockableDurations(request?: _118.QueryLockableDurationsRequest): Promise<_118.QueryLockableDurationsResponse>;
                        incentivizedPools(request?: _118.QueryIncentivizedPoolsRequest): Promise<_118.QueryIncentivizedPoolsResponse>;
                        externalIncentiveGauges(request?: _118.QueryExternalIncentiveGaugesRequest): Promise<_118.QueryExternalIncentiveGaugesResponse>;
                    };
                };
                superfluid: {
                    params(request?: _122.QueryParamsRequest): Promise<_122.QueryParamsResponse>;
                    assetType(request: _122.AssetTypeRequest): Promise<_122.AssetTypeResponse>;
                    allAssets(request?: _122.AllAssetsRequest): Promise<_122.AllAssetsResponse>;
                    assetMultiplier(request: _122.AssetMultiplierRequest): Promise<_122.AssetMultiplierResponse>;
                    allIntermediaryAccounts(request?: _122.AllIntermediaryAccountsRequest): Promise<_122.AllIntermediaryAccountsResponse>;
                    connectedIntermediaryAccount(request: _122.ConnectedIntermediaryAccountRequest): Promise<_122.ConnectedIntermediaryAccountResponse>;
                    totalDelegationByValidatorForDenom(request: _122.QueryTotalDelegationByValidatorForDenomRequest): Promise<_122.QueryTotalDelegationByValidatorForDenomResponse>;
                    totalSuperfluidDelegations(request?: _122.TotalSuperfluidDelegationsRequest): Promise<_122.TotalSuperfluidDelegationsResponse>;
                    superfluidDelegationAmount(request: _122.SuperfluidDelegationAmountRequest): Promise<_122.SuperfluidDelegationAmountResponse>;
                    superfluidDelegationsByDelegator(request: _122.SuperfluidDelegationsByDelegatorRequest): Promise<_122.SuperfluidDelegationsByDelegatorResponse>;
                    superfluidUndelegationsByDelegator(request: _122.SuperfluidUndelegationsByDelegatorRequest): Promise<_122.SuperfluidUndelegationsByDelegatorResponse>;
                    superfluidDelegationsByValidatorDenom(request: _122.SuperfluidDelegationsByValidatorDenomRequest): Promise<_122.SuperfluidDelegationsByValidatorDenomResponse>;
                    estimateSuperfluidDelegatedAmountByValidatorDenom(request: _122.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<_122.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
                    totalDelegationByDelegator(request: _122.QueryTotalDelegationByDelegatorRequest): Promise<_122.QueryTotalDelegationByDelegatorResponse>;
                    unpoolWhitelist(request?: _122.QueryUnpoolWhitelistRequest): Promise<_122.QueryUnpoolWhitelistResponse>;
                };
                tokenfactory: {
                    v1beta1: {
                        params(request?: _128.QueryParamsRequest): Promise<_128.QueryParamsResponse>;
                        denomAuthorityMetadata(request: _128.QueryDenomAuthorityMetadataRequest): Promise<_128.QueryDenomAuthorityMetadataResponse>;
                        denomsFromCreator(request: _128.QueryDenomsFromCreatorRequest): Promise<_128.QueryDenomsFromCreatorResponse>;
                    };
                };
                twap: {
                    v1beta1: {
                        params(request?: _131.ParamsRequest): Promise<_131.ParamsResponse>;
                        arithmeticTwap(request: _131.ArithmeticTwapRequest): Promise<_131.ArithmeticTwapResponse>;
                        arithmeticTwapToNow(request: _131.ArithmeticTwapToNowRequest): Promise<_131.ArithmeticTwapToNowResponse>;
                    };
                };
                txfees: {
                    v1beta1: {
                        feeTokens(request?: _136.QueryFeeTokensRequest): Promise<_136.QueryFeeTokensResponse>;
                        denomSpotPrice(request: _136.QueryDenomSpotPriceRequest): Promise<_136.QueryDenomSpotPriceResponse>;
                        denomPoolId(request: _136.QueryDenomPoolIdRequest): Promise<_136.QueryDenomPoolIdResponse>;
                        baseDenom(request?: _136.QueryBaseDenomRequest): Promise<_136.QueryBaseDenomResponse>;
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
                    v1beta1: _213.LCDQueryClient;
                };
                gamm: {
                    v1beta1: _214.LCDQueryClient;
                    v2: _215.LCDQueryClient;
                };
                ibcratelimit: {
                    v1beta1: _216.LCDQueryClient;
                };
                incentives: _217.LCDQueryClient;
                lockup: _218.LCDQueryClient;
                mint: {
                    v1beta1: _219.LCDQueryClient;
                };
                poolincentives: {
                    v1beta1: _220.LCDQueryClient;
                };
                superfluid: _221.LCDQueryClient;
                tokenfactory: {
                    v1beta1: _222.LCDQueryClient;
                };
                twap: {
                    v1beta1: _223.LCDQueryClient;
                };
                txfees: {
                    v1beta1: _224.LCDQueryClient;
                };
            };
        }>;
    };
}
