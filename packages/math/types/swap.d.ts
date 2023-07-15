import { BigNumber } from "bignumber.js";
import { CoinDenom, Trade, PrettyPair } from "./types";
import { SwapAmountInRoute } from "osmojs/dist/codegen/osmosis/poolmanager/v1beta1/swap_route";
import { Pool } from "osmojs/dist/codegen/osmosis/gamm/pool-models/balancer/balancerPool";
import { Coin } from "osmojs/dist/codegen/cosmos/base/v1beta1/coin";
export declare const routesThroughPools: ({ denom, trade, pairs, }: {
    denom: CoinDenom;
    trade: Trade;
    pairs: PrettyPair[];
}) => SwapAmountInRoute[];
export declare const getRoutesForTrade: ({ trade, pairs, }: {
    trade: Trade;
    pairs: PrettyPair[];
}) => SwapAmountInRoute[];
export declare const calcAmountWithSlippage: (amount: string, slippage: number | string) => string;
export declare const calcSpotPrice: (tokenBalanceIn: BigNumber, tokenWeightIn: BigNumber, tokenBalanceOut: BigNumber, tokenWeightOut: BigNumber, swapFee: BigNumber) => BigNumber;
export declare const calcOutGivenIn: (tokenBalanceIn: BigNumber, tokenWeightIn: BigNumber, tokenBalanceOut: BigNumber, tokenWeightOut: BigNumber, tokenAmountIn: BigNumber, swapFee: BigNumber) => BigNumber;
export declare const calcInGivenOut: (tokenBalanceIn: BigNumber, tokenWeightIn: BigNumber, tokenBalanceOut: BigNumber, tokenWeightOut: BigNumber, tokenAmountOut: BigNumber, swapFee: BigNumber) => BigNumber;
export declare const calcPriceImpactGivenIn: (tokenIn: Coin, tokenOutDenom: string, pool: Pool) => string;
export declare const calcPriceImpactGivenOut: (tokenOut: Coin, tokenInDenom: string, pool: Pool) => string;
