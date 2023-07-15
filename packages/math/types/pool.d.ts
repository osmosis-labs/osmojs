import { Pool } from "osmojs/dist/codegen/osmosis/gamm/pool-models/balancer/balancerPool";
import { Coin } from "osmojs/dist/codegen/cosmos/base/v1beta1/coin";
import { PriceHash, CoinValue, PoolPretty, CoinBalance, PoolAssetPretty, PrettyPair } from "./types";
export declare const calcPoolLiquidity: (pool: Pool, prices: PriceHash) => string;
export declare const getPoolByGammName: (pools: Pool[], gammId: string) => Pool;
export declare const convertGammTokenToDollarValue: (coin: Coin, pool: Pool, prices: PriceHash) => string;
export declare const convertDollarValueToCoins: (value: string | number, pool: Pool, prices: PriceHash) => CoinValue[];
export declare const convertDollarValueToShares: (value: string | number, pool: Pool, prices: PriceHash) => string;
export declare const prettyPool: (pool: Pool, { includeDetails }?: {
    includeDetails?: boolean;
}) => PoolPretty;
export declare const calcCoinsNeededForValue: (prices: PriceHash, poolInfo: PoolPretty, value: string | number) => {
    denom: string;
    symbol: any;
    amount: string;
    shareTotalValue: string;
    displayAmount: string;
    totalDollarValue: string;
    unitRatio: string;
}[];
export declare const getCoinBalance: (prices: PriceHash, balances: Coin[], prettyAsset: PoolAssetPretty) => CoinBalance;
export declare const calcMaxCoinsForPool: (prices: PriceHash, poolInfo: PoolPretty, balances: Coin[]) => {
    denom: string;
    amount: string;
}[];
export declare const calcShareOutAmount: (poolInfo: Pool, coinsNeeded: Coin[]) => string;
export declare const makePoolPairs: (pools: Pool[], prices: PriceHash, liquidityLimit?: number) => PrettyPair[];
