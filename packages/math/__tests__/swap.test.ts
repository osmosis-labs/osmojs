// @ts-nocheck
import cases from "jest-in-case";
import { assets } from 'chain-registry';
import { asset_lists } from '@chain-registry/assets';
import { makePoolPairs } from "../src/pool-utils";
import {
  convertGeckoPricesToDenomPriceHash,
  getOsmoAssetByDenom,
  noDecimals,
  symbolToOsmoDenom,
} from "../src/utils";
import {
  calcAmountWithSlippage,
  calcInGivenOut,
  calcOutGivenIn,
  calcPriceImpactGivenIn,
  calcPriceImpactGivenOut,
  getRoutesForTrade,
} from "./../src/swap";
import priceResponse from "../../../__fixtures__/coingecko/api/v3/simple/price/data.json";
import poolResponse from "../../../__fixtures__/rpc/osmosis/gamm/v1beta1/pools/data.json";
import { omit } from "./pool-utils.test";
import BigNumber from "bignumber.js";

const osmosisAssets = assets.filter(a => a.chain_name === 'osmosis')

describe("Test swap calculations", () => {
  let pools, prices;
  beforeAll(() => {
    pools = poolResponse.pools.map((p) => omit(p, "@type"));
    prices = convertGeckoPricesToDenomPriceHash([...assets, ...asset_lists], priceResponse);
  });

  cases(
    "getRoutesForTrade",
    (opts) => {
      const poolsFiltered = pools.filter((pool) =>
        pool.poolAssets.every(({ token }) => {
          try {
            return !!getOsmoAssetByDenom(osmosisAssets, token.denom);
          } catch (error) {
            return false;
          }
        })
      );
      const pairs = makePoolPairs(osmosisAssets, poolsFiltered, prices);
      const routes = getRoutesForTrade(osmosisAssets, { trade: opts.trade, pairs });
      expect(routes).toMatchSnapshot();
    },
    [
      {
        name: "OSMO to ATOM",
        trade: {
          sell: {
            denom: symbolToOsmoDenom(osmosisAssets, "OSMO"),
            amount: "10000",
          },
          buy: {
            denom: symbolToOsmoDenom(osmosisAssets, "ATOM"),
            amount: "10000",
          },
        },
      },
      {
        name: "STARS to JUNO",
        trade: {
          sell: {
            denom: symbolToOsmoDenom(osmosisAssets, "STARS"),
            amount: "10000",
          },
          buy: {
            denom: symbolToOsmoDenom(osmosisAssets, "JUNO"),
            amount: "10000",
          },
        },
      },
      {
        name: "LUNC to STARS",
        trade: {
          sell: {
            denom: symbolToOsmoDenom(osmosisAssets, "LUNC"),
            amount: "10000",
          },
          buy: {
            denom: symbolToOsmoDenom(osmosisAssets, "STARS"),
            amount: "10000",
          },
        },
      },
      {
        name: "AKT to JUNO",
        trade: {
          sell: {
            denom: symbolToOsmoDenom(osmosisAssets, "AKT"),
            amount: "10000",
          },
          buy: {
            denom: symbolToOsmoDenom(osmosisAssets, "JUNO"),
            amount: "10000",
          },
        },
      },
      {
        name: "CNTO to SOMM",
        trade: {
          sell: {
            denom: symbolToOsmoDenom(osmosisAssets, "CNTO"),
            amount: "10000",
          },
          buy: {
            denom: symbolToOsmoDenom(osmosisAssets, "SOMM"),
            amount: "10000",
          },
        },
      },
    ]
  );

  cases(
    "calcAmountWithSlippage",
    (opts) => {
      const amount = calcAmountWithSlippage(opts.amount, opts.slippage);
      expect(noDecimals(amount)).toEqual(opts.result);
    },
    [
      { name: "1", amount: "10000", slippage: 1, result: "9900" },
      {
        name: "1",
        amount: "100000000000000000000",
        slippage: 2.5,
        result: "97500000000000000000",
      },
      { name: "2", amount: "9999", slippage: 2.5, result: "9749" },
      { name: "3", amount: "0", slippage: 3, result: "0" },
    ]
  );

  cases(
    "calcPriceImpactGivenIn",
    (opts) => {
      const pool = pools
        .filter((pool) => pool.id === opts.poolId)
        .map((pool) => ({
          ...pool,
          poolParams: {
            ...pool.poolParams,
            swapFee: new BigNumber(pool.poolParams.swapFee)
              .shiftedBy(18)
              .toString(),
          },
        }))[0];

      const priceImpact = calcPriceImpactGivenIn(
        opts.tokenIn,
        opts.tokenOutDenom,
        pool
      );
      expect(new BigNumber(priceImpact).decimalPlaces(6).toString()).toEqual(
        opts.result
      );
    },
    [
      {
        name: "case 1",
        tokenIn: {
          amount: "100000000",
          denom: symbolToOsmoDenom(osmosisAssets, "ATOM"),
        },
        tokenOutDenom: symbolToOsmoDenom(osmosisAssets, "OSMO"),
        poolId: "1",
        result: "0.000016",
      },
      {
        name: "case 2",
        tokenIn: {
          amount: "100000000",
          denom: symbolToOsmoDenom(osmosisAssets, "JUNO"),
        },
        tokenOutDenom: symbolToOsmoDenom(osmosisAssets, "OSMO"),
        poolId: "497",
        result: "0.000054",
      },
      {
        name: "case 3",
        tokenIn: {
          amount: "100000000",
          denom: symbolToOsmoDenom(osmosisAssets, "DVPN"),
        },
        tokenOutDenom: symbolToOsmoDenom(osmosisAssets, "OSMO"),
        poolId: "5",
        result: "0.000003",
      },
    ]
  );

  cases(
    "calcPriceImpactGivenOut",
    (opts) => {
      const pool = pools
        .filter((pool) => pool.id === opts.poolId)
        .map((pool) => ({
          ...pool,
          poolParams: {
            ...pool.poolParams,
            swapFee: new BigNumber(pool.poolParams.swapFee)
              .shiftedBy(18)
              .toString(),
          },
        }))[0];

      const priceImpact = calcPriceImpactGivenOut(
        opts.tokenOut,
        opts.tokenInDenom,
        pool
      );

      expect(new BigNumber(priceImpact).decimalPlaces(6).toString()).toEqual(
        opts.result
      );
    },
    [
      {
        name: "case 1",
        tokenOut: {
          amount: "100000000",
          denom: symbolToOsmoDenom(osmosisAssets, "ATOM"),
        },
        tokenInDenom: symbolToOsmoDenom(osmosisAssets, "OSMO"),
        poolId: "1",
        result: "0.000016",
      },
      {
        name: "case 2",
        tokenOut: {
          amount: "100000000",
          denom: symbolToOsmoDenom(osmosisAssets, "JUNO"),
        },
        tokenInDenom: symbolToOsmoDenom(osmosisAssets, "OSMO"),
        poolId: "497",
        result: "0.000054",
      },
      {
        name: "case 3",
        tokenOut: {
          amount: "1000000000000",
          denom: symbolToOsmoDenom(osmosisAssets, "DVPN"),
        },
        tokenInDenom: symbolToOsmoDenom(osmosisAssets, "OSMO"),
        poolId: "5",
        result: "0.001686",
      },
    ]
  );

  cases('calcOutGivenIn', opts => {
    const result = calcOutGivenIn(
      new BigNumber(opts.tokenBalanceIn),
      new BigNumber(opts.tokenWeightIn),
      new BigNumber(opts.tokenBalanceOut),
      new BigNumber(opts.tokenWeightOut),
      new BigNumber(opts.tokenAmountIn),
      new BigNumber(opts.swapFee)
    );
    expect(result.toNumber()).toBeCloseTo(new BigNumber(opts.expected).toNumber(), 5);
  }, {
    "Exponent not an integer(0.5)": {
      tokenBalanceIn: '1000',
      tokenWeightIn: '10',
      tokenBalanceOut: '500',
      tokenWeightOut: '20',
      tokenAmountIn: '100',
      swapFee: '0.01',
      expected: '23.051861474872545'
    },
    "Exponent not an integer(1.5)": {
      tokenBalanceIn: '1500',
      tokenWeightIn: '30',
      tokenBalanceOut: '700',
      tokenWeightOut: '20',
      tokenAmountIn: '200',
      swapFee: '0',
      expected: '119.8216126711115'
    },
    "regular": {
      tokenBalanceIn: '2000',
      tokenWeightIn: '40',
      tokenBalanceOut: '1000',
      tokenWeightOut: '10',
      tokenAmountIn: '300',
      swapFee: '0.05',
      expected: '413.0850595232377'
    }
  });

  cases('calcInGivenOut', opts => {
    const result = calcInGivenOut(
      new BigNumber(opts.tokenBalanceIn),
      new BigNumber(opts.tokenWeightIn),
      new BigNumber(opts.tokenBalanceOut),
      new BigNumber(opts.tokenWeightOut),
      new BigNumber(opts.tokenAmountOut),
      new BigNumber(opts.swapFee)
    );
    expect(result.toNumber()).toBeCloseTo(new BigNumber(opts.expected).toNumber(), 5);
  }, {
    "Exponent not an integer(0.5)": {
      tokenBalanceIn: '1000',
      tokenWeightIn: '20',
      tokenBalanceOut: '500',
      tokenWeightOut: '10',
      tokenAmountOut: '100',
      swapFee: '0.01',
      expected: '119.22625126252005'
    },
    "Exponent not an integer(1.5)": {
      tokenBalanceIn: '1500',
      tokenWeightIn: '20',
      tokenBalanceOut: '700',
      tokenWeightOut: '30',
      tokenAmountOut: '200',
      swapFee: '0',
      expected: '984.7535089018387'
    },
    "regular": {
      tokenBalanceIn: '2000',
      tokenWeightIn: '10',
      tokenBalanceOut: '1000',
      tokenWeightOut: '40',
      tokenAmountOut: '300',
      swapFee: '0.05',
      expected: '6663.013218176637'
    }
  });
});
