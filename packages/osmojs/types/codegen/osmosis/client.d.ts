import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
export declare const osmosisAminoConverters: {
    "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
        aminoType: string;
        toAmino: ({ sender, subdenom }: import("./tokenfactory/v1beta1/tx").MsgCreateDenom) => {
            sender: string;
            subdenom: string;
        };
        fromAmino: ({ sender, subdenom }: {
            sender: string;
            subdenom: string;
        }) => import("./tokenfactory/v1beta1/tx").MsgCreateDenom;
    };
    "/osmosis.tokenfactory.v1beta1.MsgMint": {
        aminoType: string;
        toAmino: ({ sender, amount }: import("./tokenfactory/v1beta1/tx").MsgMint) => {
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
        }) => import("./tokenfactory/v1beta1/tx").MsgMint;
    };
    "/osmosis.tokenfactory.v1beta1.MsgBurn": {
        aminoType: string;
        toAmino: ({ sender, amount }: import("./tokenfactory/v1beta1/tx").MsgBurn) => {
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
        }) => import("./tokenfactory/v1beta1/tx").MsgBurn;
    };
    "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
        aminoType: string;
        toAmino: ({ sender, denom, newAdmin }: import("./tokenfactory/v1beta1/tx").MsgChangeAdmin) => {
            sender: string;
            denom: string;
            newAdmin: string;
        };
        fromAmino: ({ sender, denom, newAdmin }: {
            sender: string;
            denom: string;
            newAdmin: string;
        }) => import("./tokenfactory/v1beta1/tx").MsgChangeAdmin;
    };
    "/osmosis.superfluid.MsgSuperfluidDelegate": {
        aminoType: string;
        toAmino: ({ sender, lockId, valAddr }: import("./superfluid/tx").MsgSuperfluidDelegate) => {
            sender: string;
            lock_id: string;
            val_addr: string;
        };
        fromAmino: ({ sender, lock_id, val_addr }: {
            sender: string;
            lock_id: string;
            val_addr: string;
        }) => import("./superfluid/tx").MsgSuperfluidDelegate;
    };
    "/osmosis.superfluid.MsgSuperfluidUndelegate": {
        aminoType: string;
        toAmino: ({ sender, lockId }: import("./superfluid/tx").MsgSuperfluidUndelegate) => {
            sender: string;
            lock_id: string;
        };
        fromAmino: ({ sender, lock_id }: {
            sender: string;
            lock_id: string;
        }) => import("./superfluid/tx").MsgSuperfluidUndelegate;
    };
    "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
        aminoType: string;
        toAmino: ({ sender, lockId }: import("./superfluid/tx").MsgSuperfluidUnbondLock) => {
            sender: string;
            lock_id: string;
        };
        fromAmino: ({ sender, lock_id }: {
            sender: string;
            lock_id: string;
        }) => import("./superfluid/tx").MsgSuperfluidUnbondLock;
    };
    "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
        aminoType: string;
        toAmino: ({ sender, coins, valAddr }: import("./superfluid/tx").MsgLockAndSuperfluidDelegate) => {
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
        }) => import("./superfluid/tx").MsgLockAndSuperfluidDelegate;
    };
    "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
        aminoType: string;
        toAmino: ({ sender, poolId }: import("./superfluid/tx").MsgUnPoolWhitelistedPool) => {
            sender: string;
            pool_id: string;
        };
        fromAmino: ({ sender, pool_id }: {
            sender: string;
            pool_id: string;
        }) => import("./superfluid/tx").MsgUnPoolWhitelistedPool;
    };
    "/osmosis.lockup.MsgLockTokens": {
        aminoType: string;
        toAmino: ({ owner, duration, coins }: import("./lockup/tx").MsgLockTokens) => {
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
        }) => import("./lockup/tx").MsgLockTokens;
    };
    "/osmosis.lockup.MsgBeginUnlockingAll": {
        aminoType: string;
        toAmino: ({ owner }: import("./lockup/tx").MsgBeginUnlockingAll) => {
            owner: string;
        };
        fromAmino: ({ owner }: {
            owner: string;
        }) => import("./lockup/tx").MsgBeginUnlockingAll;
    };
    "/osmosis.lockup.MsgBeginUnlocking": {
        aminoType: string;
        toAmino: ({ owner, ID, coins }: import("./lockup/tx").MsgBeginUnlocking) => {
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
        }) => import("./lockup/tx").MsgBeginUnlocking;
    };
    "/osmosis.lockup.MsgExtendLockup": {
        aminoType: string;
        toAmino: ({ owner, ID, duration }: import("./lockup/tx").MsgExtendLockup) => {
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
        }) => import("./lockup/tx").MsgExtendLockup;
    };
    "/osmosis.incentives.MsgCreateGauge": {
        aminoType: string;
        toAmino: ({ isPerpetual, owner, distributeTo, coins, startTime, numEpochsPaidOver }: import("./incentives/tx").MsgCreateGauge) => {
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
        }) => import("./incentives/tx").MsgCreateGauge;
    };
    "/osmosis.incentives.MsgAddToGauge": {
        aminoType: string;
        toAmino: ({ owner, gaugeId, rewards }: import("./incentives/tx").MsgAddToGauge) => {
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
        }) => import("./incentives/tx").MsgAddToGauge;
    };
    "/osmosis.gamm.v1beta1.MsgJoinPool": {
        aminoType: string;
        toAmino: ({ sender, poolId, shareOutAmount, tokenInMaxs }: import("./gamm/v1beta1/tx").MsgJoinPool) => {
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
        }) => import("./gamm/v1beta1/tx").MsgJoinPool;
    };
    "/osmosis.gamm.v1beta1.MsgExitPool": {
        aminoType: string;
        toAmino: ({ sender, poolId, shareInAmount, tokenOutMins }: import("./gamm/v1beta1/tx").MsgExitPool) => {
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
        }) => import("./gamm/v1beta1/tx").MsgExitPool;
    };
    "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
        aminoType: string;
        toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: import("./gamm/v1beta1/tx").MsgSwapExactAmountIn) => {
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
        }) => import("./gamm/v1beta1/tx").MsgSwapExactAmountIn;
    };
    "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
        aminoType: string;
        toAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: import("./gamm/v1beta1/tx").MsgSwapExactAmountOut) => {
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
        }) => import("./gamm/v1beta1/tx").MsgSwapExactAmountOut;
    };
    "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
        aminoType: string;
        toAmino: ({ sender, poolId, tokenIn, shareOutMinAmount }: import("./gamm/v1beta1/tx").MsgJoinSwapExternAmountIn) => {
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
        }) => import("./gamm/v1beta1/tx").MsgJoinSwapExternAmountIn;
    };
    "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
        aminoType: string;
        toAmino: ({ sender, poolId, tokenInDenom, shareOutAmount, tokenInMaxAmount }: import("./gamm/v1beta1/tx").MsgJoinSwapShareAmountOut) => {
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
        }) => import("./gamm/v1beta1/tx").MsgJoinSwapShareAmountOut;
    };
    "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
        aminoType: string;
        toAmino: ({ sender, poolId, tokenOut, shareInMaxAmount }: import("./gamm/v1beta1/tx").MsgExitSwapExternAmountOut) => {
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
        }) => import("./gamm/v1beta1/tx").MsgExitSwapExternAmountOut;
    };
    "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
        aminoType: string;
        toAmino: ({ sender, poolId, tokenOutDenom, shareInAmount, tokenOutMinAmount }: import("./gamm/v1beta1/tx").MsgExitSwapShareAmountIn) => {
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
        }) => import("./gamm/v1beta1/tx").MsgExitSwapShareAmountIn;
    };
    "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
        aminoType: string;
        toAmino: ({ sender, poolParams, initialPoolLiquidity, futurePoolGovernor }: import("./gamm/pool-models/stableswap/tx").MsgCreateStableswapPool) => {
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
        }) => import("./gamm/pool-models/stableswap/tx").MsgCreateStableswapPool;
    };
    "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
        aminoType: string;
        toAmino: ({ sender, poolId, scalingFactors }: import("./gamm/pool-models/stableswap/tx").MsgStableSwapAdjustScalingFactors) => {
            sender: string;
            pool_id: string;
            scaling_factors: Long[];
        };
        fromAmino: ({ sender, pool_id, scaling_factors }: {
            sender: string;
            pool_id: string;
            scaling_factors: Long[];
        }) => import("./gamm/pool-models/stableswap/tx").MsgStableSwapAdjustScalingFactors;
    };
    "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
        aminoType: string;
        toAmino: ({ sender, poolParams, poolAssets, futurePoolGovernor }: import("./gamm/pool-models/balancer/tx").MsgCreateBalancerPool) => {
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
        }) => import("./gamm/pool-models/balancer/tx").MsgCreateBalancerPool;
    };
};
export declare const osmosisProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningOsmosisClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningOsmosisClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
