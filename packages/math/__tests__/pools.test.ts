import { getOsmoAssetByDenom } from "../src/utils";
import priceResponse from "../../../__fixtures__/coingecko/api/v3/simple/price/data.json";
import poolResponse from "../../../__fixtures__/rpc/osmosis/gamm/v1beta1/pools/data.json";
import {
  calcPoolLiquidity,
  convertGammTokenToDollarValue,
  convertDollarValueToCoins,
  convertDollarValueToShares,
  calcCoinsNeededForValue,
  calcMaxCoinsForPool,
  calcShareOutAmount,
  prettyPool,
  makePoolPairs,
} from "../src/pool";
import cases from "jest-in-case";
import { noDecimals, convertGeckoPricesToDenomPriceHash } from "../src/utils";

const fakeBalances = [
  {
    denom: "gamm/pool/1",
    amount: "3971711067183317356",
  },
  {
    denom: "gamm/pool/497",
    amount: "349025380200104928",
  },
  {
    denom: "gamm/pool/604",
    amount: "35696235433901",
  },
  {
    denom: "gamm/pool/795",
    amount: "6240168637927540325",
  },
  {
    denom:
      "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
    amount: "838542",
  },
  {
    denom:
      "ibc/2DA9C149E9AD2BD27FEFA635458FB37093C256C1A940392634A16BEA45262604",
    amount: "2887086",
  },
  {
    denom:
      "ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED",
    amount: "35409600",
  },
  {
    denom:
      "ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4",
    amount: "232663227",
  },
  {
    denom: "uosmo",
    amount: "5283728",
  },
];

export const omit = (obj, ...props) => {
  const result = { ...obj };
  props.forEach((prop) => {
    delete result[prop];
  });
  return result;
};

const pools = poolResponse.pools.map((p) => omit(p, "@type"));
const prices = convertGeckoPricesToDenomPriceHash(priceResponse);

describe("Test pool calculations", () => {
  cases(
    "calcPoolLiquidity",
    (opts) => {
      const pool = pools.find((pool) => pool.id === opts.poolId);
      const liquidity = calcPoolLiquidity(pool, prices);
      expect(noDecimals(liquidity)).toEqual(opts.liquidity);
    },
    [
      {
        name: "pool#1",
        poolId: "1",
        liquidity: "446862602",
      },
      {
        name: "pool#497",
        poolId: "497",
        liquidity: "65709813",
      },
      {
        name: "pool#604",
        poolId: "604",
        liquidity: "24905046",
      },
    ]
  );

  cases(
    "convertGammTokenToDollarValue",
    (opts) => {
      const pool = pools.find((pool) => pool.id === opts.poolId);
      const value = convertGammTokenToDollarValue(opts.coin, pool, prices);
      expect(noDecimals(value)).toEqual(opts.value);
    },
    [
      { poolId: "1", coin: fakeBalances[0], value: "5" },
      { poolId: "497", coin: fakeBalances[1], value: "14" },
      { poolId: "604", coin: fakeBalances[2], value: "6" },
    ]
  );

  cases(
    "convertDollarValueToCoins",
    (opts) => {
      const pool = pools.find(
        (pool) => pool.poolAssets.length === opts.poolLength
      );
      const coins = convertDollarValueToCoins(opts.value, pool, prices);
      expect(coins).toMatchSnapshot();
    },
    [
      {
        name: "2 token pool",
        value: 10,
        poolLength: 2,
      },
      {
        name: "3 token pool",
        value: 10,
        poolLength: 3,
      },
      {
        name: "4 token pool",
        value: 10,
        poolLength: 4,
      },
      {
        name: "0 dollar",
        value: 0,
        poolLength: 2,
      },
    ]
  );

  cases(
    "convertDollarValueToShares",
    (opts) => {
      const pool = pools.find((pool) => pool.id === opts.poolId);
      const shares = convertDollarValueToShares(opts.value, pool, prices);
      expect(noDecimals(shares)).toEqual(opts.shares);
    },
    [
      { name: "10 usd for pool#1", value: 10, poolId: "1", shares: "7" },
      { name: "100 usd for pool#497", value: 100, poolId: "497", shares: "2" },
      { name: "0 usd for pool#1", value: 0, poolId: "1", shares: "0" },
    ]
  );

  cases(
    "calcCoinsNeededForValue",
    (opts) => {
      const pool = pools.find((pool) => pool.id === opts.poolId);
      const prettiedPool = prettyPool(pool);
      const coinsNeeded = calcCoinsNeededForValue(
        prices,
        prettiedPool,
        opts.value
      );
      expect(coinsNeeded).toMatchSnapshot();
    },
    [
      { name: "10 for pool#1", poolId: "1", value: 10 },
      { name: "10 for pool#497", poolId: "497", value: 10 },
      { name: "10 for pool#604", poolId: "604", value: 10 },
      { name: "0 for pool#1", poolId: "1", value: 0 },
    ]
  );

  cases(
    "calcMaxCoinsForPool",
    (opts) => {
      const pool = pools.find((pool) => pool.id === opts.poolId);
      const prettiedPool = prettyPool(pool);
      const coinsNeeded = calcMaxCoinsForPool(
        prices,
        prettiedPool,
        fakeBalances
      );
      expect(coinsNeeded).toMatchSnapshot();
    },
    [
      { name: "pool#1", poolId: "1" },
      { name: "pool#604", poolId: "604" },
      { name: "pool#25", poolId: "25" },
    ]
  );

  cases(
    "calcShareOutAmount",
    (opts) => {
      const pool = pools.find((pool) => pool.id === opts.poolId);
      const prettiedPool = prettyPool(pool);
      const coinsNeeded = opts.useMaxCoins
        ? calcMaxCoinsForPool(prices, prettiedPool, fakeBalances)
        : calcCoinsNeededForValue(prices, prettiedPool, opts.value as number);
      const shareOutAmount = calcShareOutAmount(pool, coinsNeeded);
      expect(shareOutAmount).toEqual(opts.amount);
    },
    [
      {
        name: "pool#1",
        poolId: "1",
        useMaxCoins: true,
        amount: "44690927353631068872",
      },
      {
        name: "pool#604",
        poolId: "604",
        useMaxCoins: false,
        value: 10,
        amount: "51864273176244",
      },
      {
        name: "pool#497",
        poolId: "497",
        useMaxCoins: true,
        amount: "2222110943246410615",
      },
    ]
  );

  test("makePoolPairs", () => {
    const poolsFiltered = pools.filter((pool) =>
      pool.poolAssets.every(({ token }) => {
        try {
          return !!getOsmoAssetByDenom(token.denom);
        } catch (error) {
          return false;
        }
      })
    );
    const LIQUIDITY_LIMIT = 50000000;
    const poolPairs = makePoolPairs(poolsFiltered, prices, LIQUIDITY_LIMIT);
    expect(poolPairs).toMatchSnapshot();
  });
});
