import { Asset } from '@chain-registry/types';
import { Pool } from "osmojs/osmosis/gamm/v1beta1/balancerPool";
import { Coin } from "osmojs/cosmos/base/v1beta1/coin";
import {
  PriceHash,
  CoinValue,
  PoolPretty,
  PoolAssetPretty,
  CoinBalance,
  PrettyPair
} from './types';
import {
  calcPoolLiquidity,
  getPoolByGammName,
  convertGammTokenToDollarValue,
  convertDollarValueToCoins,
  convertDollarValueToShares,
  prettyPool,
  calcCoinsNeededForValue,
  getCoinBalance,
  calcMaxCoinsForPool,
  calcShareOutAmount,
  makePoolPairs,
} from './pool-utils';

export interface LiquidityPoolCalculatorOptions {
  assets: Asset[];
}

export class LiquidityPoolCalculator {
  assets: Asset[];

  constructor(options: LiquidityPoolCalculatorOptions) {
    this.assets = options.assets;
  }

  calcPoolLiquidity(pool: Pool, prices: PriceHash): string {
    return calcPoolLiquidity(this.assets, pool, prices);
  }

  getPoolByGammName(pools: Pool[], gammId: string): Pool {
    return getPoolByGammName(pools, gammId);
  }

  convertGammTokenToDollarValue(coin: Coin, pool: Pool, prices: PriceHash): string {
    return convertGammTokenToDollarValue(this.assets, coin, pool, prices);
  }

  convertDollarValueToCoins(value: string | number, pool: Pool, prices: PriceHash): CoinValue[] {
    return convertDollarValueToCoins(this.assets, value, pool, prices);
  }

  convertDollarValueToShares(value: string | number, pool: Pool, prices: PriceHash) {
    return convertDollarValueToShares(this.assets, value, pool, prices);
  }

  prettyPool(pool: Pool, { includeDetails = false } = {}): PoolPretty {
    return prettyPool(this.assets, pool, { includeDetails });
  }

  calcCoinsNeededForValue(prices: PriceHash, poolInfo: PoolPretty, value: string | number) {
    return calcCoinsNeededForValue(this.assets, prices, poolInfo, value);
  }

  getCoinBalance(prices: PriceHash, balances: Coin[], prettyAsset: PoolAssetPretty): CoinBalance {
    return getCoinBalance(this.assets, prices, balances, prettyAsset);
  }

  calcMaxCoinsForPool(prices: PriceHash, poolInfo: PoolPretty, balances: Coin[]) {
    return calcMaxCoinsForPool(this.assets, prices, poolInfo, balances);
  }

  calcShareOutAmount(poolInfo: Pool, coinsNeeded: Coin[]): string {
    return calcShareOutAmount(poolInfo, coinsNeeded);
  }

  makePoolPairs(pools: Pool[], prices: PriceHash, liquidityLimit = 100_000): PrettyPair[] {
    return makePoolPairs(this.assets, pools, prices, liquidityLimit);
  }
}