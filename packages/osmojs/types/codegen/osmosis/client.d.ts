import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const osmosisAminoConverters: {
    "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference": {
        aminoType: string;
        toAmino: ({ delegator, preferences }: import("./valset-pref/v1beta1/tx").MsgSetValidatorSetPreference) => {
            delegator: string;
            preferences: {
                val_oper_address: string;
                weight: string;
            }[];
        };
        fromAmino: ({ delegator, preferences }: {
            delegator: string;
            preferences: {
                val_oper_address: string;
                weight: string;
            }[];
        }) => import("./valset-pref/v1beta1/tx").MsgSetValidatorSetPreference;
    };
    "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet": {
        aminoType: string;
        toAmino: ({ delegator, coin }: import("./valset-pref/v1beta1/tx").MsgDelegateToValidatorSet) => {
            delegator: string;
            coin: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ delegator, coin }: {
            delegator: string;
            coin: {
                denom: string;
                amount: string;
            };
        }) => import("./valset-pref/v1beta1/tx").MsgDelegateToValidatorSet;
    };
    "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet": {
        aminoType: string;
        toAmino: ({ delegator, coin }: import("./valset-pref/v1beta1/tx").MsgUndelegateFromValidatorSet) => {
            delegator: string;
            coin: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ delegator, coin }: {
            delegator: string;
            coin: {
                denom: string;
                amount: string;
            };
        }) => import("./valset-pref/v1beta1/tx").MsgUndelegateFromValidatorSet;
    };
    "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet": {
        aminoType: string;
        toAmino: ({ delegator, preferences }: import("./valset-pref/v1beta1/tx").MsgRedelegateValidatorSet) => {
            delegator: string;
            preferences: {
                val_oper_address: string;
                weight: string;
            }[];
        };
        fromAmino: ({ delegator, preferences }: {
            delegator: string;
            preferences: {
                val_oper_address: string;
                weight: string;
            }[];
        }) => import("./valset-pref/v1beta1/tx").MsgRedelegateValidatorSet;
    };
    "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards": {
        aminoType: string;
        toAmino: ({ delegator }: import("./valset-pref/v1beta1/tx").MsgWithdrawDelegationRewards) => {
            delegator: string;
        };
        fromAmino: ({ delegator }: {
            delegator: string;
        }) => import("./valset-pref/v1beta1/tx").MsgWithdrawDelegationRewards;
    };
    "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens": {
        aminoType: string;
        toAmino: ({ delegator, lockID }: import("./valset-pref/v1beta1/tx").MsgDelegateBondedTokens) => {
            delegator: string;
            lockID: string;
        };
        fromAmino: ({ delegator, lockID }: {
            delegator: string;
            lockID: string;
        }) => import("./valset-pref/v1beta1/tx").MsgDelegateBondedTokens;
    };
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
            new_admin: string;
        };
        fromAmino: ({ sender, denom, new_admin }: {
            sender: string;
            denom: string;
            new_admin: string;
        }) => import("./tokenfactory/v1beta1/tx").MsgChangeAdmin;
    };
    "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
        aminoType: string;
        toAmino: ({ sender, metadata }: import("./tokenfactory/v1beta1/tx").MsgSetDenomMetadata) => {
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
        }) => import("./tokenfactory/v1beta1/tx").MsgSetDenomMetadata;
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
    "/osmosis.protorev.v1beta1.MsgSetHotRoutes": {
        aminoType: string;
        toAmino: ({ admin, hotRoutes }: import("./protorev/v1beta1/tx").MsgSetHotRoutes) => {
            admin: string;
            hot_routes: {
                arb_routes: {
                    trades: {
                        pool: string;
                        token_in: string;
                        token_out: string;
                    }[];
                }[];
                token_in: string;
                token_out: string;
            }[];
        };
        fromAmino: ({ admin, hot_routes }: {
            admin: string;
            hot_routes: {
                arb_routes: {
                    trades: {
                        pool: string;
                        token_in: string;
                        token_out: string;
                    }[];
                }[];
                token_in: string;
                token_out: string;
            }[];
        }) => import("./protorev/v1beta1/tx").MsgSetHotRoutes;
    };
    "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount": {
        aminoType: string;
        toAmino: ({ admin, developerAccount }: import("./protorev/v1beta1/tx").MsgSetDeveloperAccount) => {
            admin: string;
            developer_account: string;
        };
        fromAmino: ({ admin, developer_account }: {
            admin: string;
            developer_account: string;
        }) => import("./protorev/v1beta1/tx").MsgSetDeveloperAccount;
    };
    "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn": {
        aminoType: string;
        toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: import("./poolmanager/v1beta1/tx").MsgSwapExactAmountIn) => {
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
        }) => import("./poolmanager/v1beta1/tx").MsgSwapExactAmountIn;
    };
    "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut": {
        aminoType: string;
        toAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: import("./poolmanager/v1beta1/tx").MsgSwapExactAmountOut) => {
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
        }) => import("./poolmanager/v1beta1/tx").MsgSwapExactAmountOut;
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
    "/osmosis.lockup.MsgForceUnlock": {
        aminoType: string;
        toAmino: ({ owner, ID, coins }: import("./lockup/tx").MsgForceUnlock) => {
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
        }) => import("./lockup/tx").MsgForceUnlock;
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
        }) => import("./gamm/v1beta1/tx").MsgJoinPool;
    };
    "/osmosis.gamm.v1beta1.MsgExitPool": {
        aminoType: string;
        toAmino: ({ sender, poolId, shareInAmount, tokenOutMins }: import("./gamm/v1beta1/tx").MsgExitPool) => {
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
        }) => import("./gamm/v1beta1/tx").MsgExitPool;
    };
    "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
        aminoType: string;
        toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: import("./gamm/v1beta1/tx").MsgSwapExactAmountIn) => {
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
        }) => import("./gamm/v1beta1/tx").MsgSwapExactAmountIn;
    };
    "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
        aminoType: string;
        toAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: import("./gamm/v1beta1/tx").MsgSwapExactAmountOut) => {
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
        }) => import("./gamm/v1beta1/tx").MsgSwapExactAmountOut;
    };
    "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
        aminoType: string;
        toAmino: ({ sender, poolId, tokenIn, shareOutMinAmount }: import("./gamm/v1beta1/tx").MsgJoinSwapExternAmountIn) => {
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
        }) => import("./gamm/v1beta1/tx").MsgJoinSwapExternAmountIn;
    };
    "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
        aminoType: string;
        toAmino: ({ sender, poolId, tokenInDenom, shareOutAmount, tokenInMaxAmount }: import("./gamm/v1beta1/tx").MsgJoinSwapShareAmountOut) => {
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
        }) => import("./gamm/v1beta1/tx").MsgJoinSwapShareAmountOut;
    };
    "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
        aminoType: string;
        toAmino: ({ sender, poolId, tokenOut, shareInMaxAmount }: import("./gamm/v1beta1/tx").MsgExitSwapExternAmountOut) => {
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
        }) => import("./gamm/v1beta1/tx").MsgExitSwapExternAmountOut;
    };
    "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
        aminoType: string;
        toAmino: ({ sender, poolId, tokenOutDenom, shareInAmount, tokenOutMinAmount }: import("./gamm/v1beta1/tx").MsgExitSwapShareAmountIn) => {
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
        }) => import("./gamm/v1beta1/tx").MsgExitSwapShareAmountIn;
    };
    "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
        aminoType: string;
        toAmino: ({ sender, poolParams, initialPoolLiquidity, scalingFactors, futurePoolGovernor, scalingFactorController }: import("./gamm/pool-models/stableswap/tx").MsgCreateStableswapPool) => {
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
        }) => import("./gamm/pool-models/stableswap/tx").MsgCreateStableswapPool;
    };
    "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
        aminoType: string;
        toAmino: ({ sender, poolId, scalingFactors }: import("./gamm/pool-models/stableswap/tx").MsgStableSwapAdjustScalingFactors) => {
            sender: string;
            pool_id: string;
            scaling_factors: import("long")[];
        };
        fromAmino: ({ sender, pool_id, scaling_factors }: {
            sender: string;
            pool_id: string;
            scaling_factors: import("long")[];
        }) => import("./gamm/pool-models/stableswap/tx").MsgStableSwapAdjustScalingFactors;
    };
    "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
        aminoType: string;
        toAmino: ({ sender, poolParams, poolAssets, futurePoolGovernor }: import("./gamm/pool-models/balancer/tx/tx").MsgCreateBalancerPool) => {
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
        }) => import("./gamm/pool-models/balancer/tx/tx").MsgCreateBalancerPool;
    };
    "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgMigrateSharesToFullRangeConcentratedPosition": {
        aminoType: string;
        toAmino: ({ sender, sharesToMigrate, poolIdEntering }: import("./gamm/pool-models/balancer/tx/tx").MsgMigrateSharesToFullRangeConcentratedPosition) => {
            sender: string;
            shares_to_migrate: {
                denom: string;
                amount: string;
            };
            pool_id_entering: string;
        };
        fromAmino: ({ sender, shares_to_migrate, pool_id_entering }: {
            sender: string;
            shares_to_migrate: {
                denom: string;
                amount: string;
            };
            pool_id_entering: string;
        }) => import("./gamm/pool-models/balancer/tx/tx").MsgMigrateSharesToFullRangeConcentratedPosition;
    };
    "/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition": {
        aminoType: string;
        toAmino: ({ poolId, sender, lowerTick, upperTick, tokenDesired0, tokenDesired1, tokenMinAmount0, tokenMinAmount1 }: import("./concentrated-liquidity/tx").MsgCreatePosition) => {
            pool_id: string;
            sender: string;
            lower_tick: string;
            upper_tick: string;
            token_desired0: {
                denom: string;
                amount: string;
            };
            token_desired1: {
                denom: string;
                amount: string;
            };
            token_min_amount0: string;
            token_min_amount1: string;
        };
        fromAmino: ({ pool_id, sender, lower_tick, upper_tick, token_desired0, token_desired1, token_min_amount0, token_min_amount1 }: {
            pool_id: string;
            sender: string;
            lower_tick: string;
            upper_tick: string;
            token_desired0: {
                denom: string;
                amount: string;
            };
            token_desired1: {
                denom: string;
                amount: string;
            };
            token_min_amount0: string;
            token_min_amount1: string;
        }) => import("./concentrated-liquidity/tx").MsgCreatePosition;
    };
    "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition": {
        aminoType: string;
        toAmino: ({ poolId, sender, lowerTick, upperTick, liquidityAmount }: import("./concentrated-liquidity/tx").MsgWithdrawPosition) => {
            pool_id: string;
            sender: string;
            lower_tick: string;
            upper_tick: string;
            liquidity_amount: string;
        };
        fromAmino: ({ pool_id, sender, lower_tick, upper_tick, liquidity_amount }: {
            pool_id: string;
            sender: string;
            lower_tick: string;
            upper_tick: string;
            liquidity_amount: string;
        }) => import("./concentrated-liquidity/tx").MsgWithdrawPosition;
    };
    "/osmosis.concentratedliquidity.v1beta1.MsgCollectFees": {
        aminoType: string;
        toAmino: ({ poolId, sender, lowerTick, upperTick }: import("./concentrated-liquidity/tx").MsgCollectFees) => {
            pool_id: string;
            sender: string;
            lower_tick: string;
            upper_tick: string;
        };
        fromAmino: ({ pool_id, sender, lower_tick, upper_tick }: {
            pool_id: string;
            sender: string;
            lower_tick: string;
            upper_tick: string;
        }) => import("./concentrated-liquidity/tx").MsgCollectFees;
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
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
