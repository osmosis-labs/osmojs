import cases from "jest-in-case";
import { makePoolPairs } from "../src/pool";
import { noDecimals, symbolToOsmoDenom } from "../src/utils";
import { calcAmountWithSlippage, getRoutesForTrade } from "./../src/swap";
import poolResponse from "../../../__fixtures__/rpc/osmosis/gamm/v1beta1/pools/data.json";
import { omit } from "./pools.test";
import Long from "long";

const pools = poolResponse.pools.map((p) => ({
  ...omit(p, "@type"),
  id: Long.fromString(p.id),
}));

describe("Test swap calculations", () => {
  cases(
    "getRoutesForTrade",
    (opts) => {
      const pairs = makePoolPairs(pools);
      const routes = getRoutesForTrade({ trade: opts.trade, pairs });
      expect(routes).toMatchSnapshot();
    },
    [
      {
        name: "OSMO to ATOM",
        trade: {
          sell: {
            denom: symbolToOsmoDenom("OSMO"),
            amount: "10000",
          },
          buy: {
            denom: symbolToOsmoDenom("ATOM"),
            amount: "10000",
          },
        },
      },
      {
        name: "STARS to JUNO",
        trade: {
          sell: {
            denom: symbolToOsmoDenom("STARS"),
            amount: "10000",
          },
          buy: {
            denom: symbolToOsmoDenom("JUNO"),
            amount: "10000",
          },
        },
      },
      {
        name: "LUNC to STARS",
        trade: {
          sell: {
            denom: symbolToOsmoDenom("LUNC"),
            amount: "10000",
          },
          buy: {
            denom: symbolToOsmoDenom("STARS"),
            amount: "10000",
          },
        },
      },
      {
        name: "AKT to JUNO",
        trade: {
          sell: {
            denom: symbolToOsmoDenom("AKT"),
            amount: "10000",
          },
          buy: {
            denom: symbolToOsmoDenom("JUNO"),
            amount: "10000",
          },
        },
      },
      {
        name: "CNTO to SOMM",
        trade: {
          sell: {
            denom: symbolToOsmoDenom("CNTO"),
            amount: "10000",
          },
          buy: {
            denom: symbolToOsmoDenom("SOMM"),
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
});
