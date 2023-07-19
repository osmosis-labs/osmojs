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
  calcPriceImpactGivenIn,
  calcPriceImpactGivenOut,
  getRoutesForTrade,
} from "./../src/swap";
import priceResponse from "../../../__fixtures__/coingecko/api/v3/simple/price/data.json";
import poolResponse from "../../../__fixtures__/rpc/osmosis/gamm/v1beta1/pools/data.json";
import { omit } from "./pool-utils.test";
import BigNumber from "bignumber.js";

const osmosisAssets = [
  ...(assets.find(({ chain_name }) => chain_name === 'osmosis')?.assets || []),
  ...(asset_lists.find(({ chain_name }) => chain_name === 'osmosis')?.assets || [])
];

describe("Test swap calculations", () => {
  let pools, prices;
  beforeAll(() => {
    pools = poolResponse.pools.map((p) => omit(p, "@type"));
    prices = convertGeckoPricesToDenomPriceHash(osmosisAssets, priceResponse);
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
});
