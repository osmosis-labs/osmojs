import { Asset } from "@chain-registry/types";
import { Pool } from "osmojs/dist/codegen/osmosis/gamm/v1beta1/balancerPool";
import { Coin } from "osmojs/dist/codegen/cosmos/base/v1beta1/coin";
import {
  PriceHash,
  CoinValue,
  PoolPretty,
  CoinBalance,
  PoolAssetPretty,
  PrettyPair,
} from "./types";
import BigNumber from "bignumber.js";
import {
  baseUnitsToDisplayUnits,
  baseUnitsToDollarValue,
  dollarValueToDenomUnits,
  getExponentByDenom,
  osmoDenomToSymbol,
  noDecimals,
  getOsmoAssetByDenom,
} from "./utils";

export const calcPoolLiquidity = (assets: Asset[], pool: Pool, prices: PriceHash): string => {
  return pool.poolAssets
    .reduce((res, { token }) => {
      const liquidity = new BigNumber(token.amount)
        .shiftedBy(-getExponentByDenom(assets, token.denom))
        .multipliedBy(prices[token.denom]);
      return res.plus(liquidity);
    }, new BigNumber(0))
    .toString();
};

export const getPoolByGammName = (pools: Pool[], gammId: string): Pool => {
  return pools.find(({ totalShares: { denom } }) => denom === gammId);
};

export const convertGammTokenToDollarValue = (
  assets: Asset[],
  coin: Coin,
  pool: Pool,
  prices: PriceHash
): string => {
  const { amount } = coin;
  const liquidity = calcPoolLiquidity(assets, pool, prices);

  return new BigNumber(liquidity)
    .multipliedBy(amount)
    .dividedBy(pool.totalShares!.amount)
    .toString();
};

export const convertDollarValueToCoins = (
  assets: Asset[],
  value: string | number,
  pool: Pool,
  prices: PriceHash
): CoinValue[] => {
  const tokens = pool.poolAssets.map(({ token: { denom }, weight }) => {
    const ratio = new BigNumber(weight).dividedBy(pool.totalWeight);
    const valueByRatio = new BigNumber(value).multipliedBy(ratio);
    const displayAmount = valueByRatio.dividedBy(prices[denom]).toString();
    const amount = new BigNumber(displayAmount)
      .shiftedBy(getExponentByDenom(assets, denom))
      .toString();
    const symbol = osmoDenomToSymbol(assets, denom);

    return {
      denom,
      symbol,
      amount,
      displayAmount,
      value: valueByRatio.toString(),
    };
  });
  return tokens;
};

export const convertDollarValueToShares = (
  assets: Asset[],
  value: string | number,
  pool: Pool,
  prices: PriceHash
) => {
  const liquidity = calcPoolLiquidity(assets, pool, prices);

  return new BigNumber(value)
    .multipliedBy(pool.totalShares.amount)
    .dividedBy(liquidity)
    .shiftedBy(-18)
    .toString();
};

export const prettyPool = (
  assets: Asset[],
  pool: Pool,
  { includeDetails = false } = {}
): PoolPretty => {
  const assetHashMap = assets.reduce((res, asset) => {
    return { ...res, [asset.base]: asset };
  }, {});

  const totalWeight = new BigNumber(pool.totalWeight);
  const tokens = pool.poolAssets.map(({ token, weight }) => {
    const asset = assetHashMap?.[token.denom];
    const symbol = asset?.symbol ?? token.denom;
    const ratio = new BigNumber(weight).dividedBy(totalWeight).toString();
    const obj = {
      symbol,
      denom: token.denom,
      amount: token.amount,
      ratio,
      info: undefined,
    };
    if (includeDetails) {
      obj.info = asset;
    }
    return obj;
  });
  const value = {
    nickname: tokens.map((t) => t.symbol).join("/"),
    images: undefined,
  };
  if (includeDetails) {
    value.images = tokens
      .map((t) => {
        const imgs = t?.info?.logo_URIs;
        if (imgs) {
          return {
            token: t.symbol,
            images: imgs,
          };
        }
      })
      .filter(Boolean);
  }
  return {
    ...value,
    ...pool,
    poolAssetsPretty: tokens,
  };
};

export const calcCoinsNeededForValue = (
  assets: Asset[],
  prices: PriceHash,
  poolInfo: PoolPretty,
  value: string | number
) => {
  const val = new BigNumber(value);
  const coinsNeeded = poolInfo.poolAssetsPretty.map(
    ({ symbol, amount, denom, ratio }) => {
      const valueByRatio = val.multipliedBy(ratio).toString();
      const amountNeeded = dollarValueToDenomUnits(
        assets,
        prices,
        symbol,
        valueByRatio
      );
      const unitRatio = new BigNumber(amountNeeded)
        .dividedBy(amount)
        .toString();

      return {
        denom: denom,
        symbol: symbol,
        amount: noDecimals(amountNeeded),
        shareTotalValue: valueByRatio,
        displayAmount: baseUnitsToDisplayUnits(assets, symbol, amountNeeded),
        totalDollarValue: baseUnitsToDollarValue(assets, prices, symbol, amount),
        unitRatio,
      };
    }
  );
  return coinsNeeded;
};

export const getCoinBalance = (
  assets: Asset[],
  prices: PriceHash,
  balances: Coin[],
  prettyAsset: PoolAssetPretty
): CoinBalance => {
  const coinBalance = balances.find((coin) => coin.denom == prettyAsset.denom);

  if (!coinBalance || !coinBalance.amount) {
    // console.log({ coinBalance });
    // throw new Error("not enough " + prettyAsset.symbol);
    return { ...coinBalance, displayValue: 0 };
  }

  const displayValue = baseUnitsToDollarValue(
    assets,
    prices,
    prettyAsset.symbol,
    coinBalance.amount
  );

  return { ...coinBalance, displayValue };
};

export const calcMaxCoinsForPool = (
  assets: Asset[],
  prices: PriceHash,
  poolInfo: PoolPretty,
  balances: Coin[]
) => {
  const smallestTotalDollarValue = poolInfo.poolAssetsPretty
    .map((prettyAsset) => {
      const { displayValue } = getCoinBalance(assets, prices, balances, prettyAsset);
      return new BigNumber(displayValue).dividedBy(prettyAsset.ratio);
    })
    .sort((a, b) => a.minus(b).toNumber())[0]
    .toString();

  const coinsNeeded = poolInfo.poolAssetsPretty.map((asset) => {
    const coinValue = new BigNumber(smallestTotalDollarValue)
      .multipliedBy(asset.ratio)
      .toString();
    const amount = dollarValueToDenomUnits(assets, prices, asset.symbol, coinValue);

    return {
      denom: asset.denom,
      amount: noDecimals(amount),
    };
  });

  return coinsNeeded;
};

export const calcShareOutAmount = (
  poolInfo: Pool,
  coinsNeeded: Coin[]
): string => {
  return poolInfo.poolAssets
    .map(({ token }, i) => {
      const tokenInAmount = new BigNumber(coinsNeeded[i].amount);
      const totalShare = new BigNumber(poolInfo.totalShares.amount);
      const totalShareExp = totalShare.shiftedBy(-18);
      const poolAssetAmount = new BigNumber(token.amount);

      return tokenInAmount
        .multipliedBy(totalShareExp)
        .dividedBy(poolAssetAmount)
        .shiftedBy(18)
        .decimalPlaces(0, BigNumber.ROUND_HALF_UP)
        .toString();
    })
    .sort()[0];
};

export const makePoolPairs = (
  assets: Asset[],
  pools: Pool[],
  prices: PriceHash,
  liquidityLimit = 100_000
): PrettyPair[] => {
  return pools
    .filter(
      (pool) =>
        pool.poolAssets.length === 2 &&
        pool.poolAssets.every(({ token }) => !token.denom.startsWith("gamm")) &&
        new BigNumber(calcPoolLiquidity(assets, pool, prices)).gte(liquidityLimit)
    )
    .map((pool) => {
      const assetA = pool.poolAssets[0].token;
      const assetAinfo = getOsmoAssetByDenom(assets, assetA.denom);
      const assetB = pool.poolAssets[1].token;
      const assetBinfo = getOsmoAssetByDenom(assets, assetB.denom);

      if (!assetAinfo || !assetBinfo) return;

      return {
        poolId: typeof pool.id === "string" ? pool.id : pool.id.toString(),
        poolAddress: pool.address,
        baseName: assetAinfo.display,
        baseSymbol: assetAinfo.symbol,
        baseAddress: assetAinfo.base,
        quoteName: assetBinfo.display,
        quoteSymbol: assetBinfo.symbol,
        quoteAddress: assetBinfo.base,
      };
    })
    .filter(Boolean);
};
