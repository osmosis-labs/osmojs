import { assets } from 'chain-registry';
import { asset_lists } from '@chain-registry/assets';
import priceResponse from "../../../__fixtures__/coingecko/api/v3/simple/price/data.json";
import poolResponse from "../../../__fixtures__/rpc/osmosis/gamm/v1beta1/pools/data.json";
import activeGaugesResponse from "../../../__fixtures__/rpc/osmosis/incentives/v1beta1/active_gauges/data.json";
import lockup from "../../../__fixtures__/rpc/osmosis/pool-incentives/v1beta1/lockable_durations/data.json";
import superfluid from "../../../__fixtures__/rpc/osmosis/superfluid/v1beta1/all_assets/data.json";
import summary from "../../../__fixtures__/validator/pairs/v1/summary/data.json";
import cases from "jest-in-case";
import Long from "long";
import { omit } from "./pool-utils.test";
import { calcPoolAprs } from "../src/apr";
import { convertGeckoPricesToDenomPriceHash } from "../src/utils";

const toCamel = (str) => {
  return str.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace("-", "").replace("_", "");
  });
};

const isObject = (obj) => {
  return (
    obj === Object(obj) && !Array.isArray(obj) && typeof obj !== "function"
  );
};

const hasLongValue = (key: string) => {
  const keys = ["id", "filledEpochs", "numEpochsPaidOver", "duration"];
  return keys.includes(key);
};

const toLongValue = (val: string) => {
  if (val.endsWith("s"))
    return {
      seconds: BigInt(val.slice(0, val.length - 1)),
      nanos: 0,
    };
  return BigInt(val);
};

const keysToCamel = (obj) => {
  if (isObject(obj)) {
    const n = {};
    Object.keys(obj).forEach((k) => {
      n[toCamel(k)] = hasLongValue(toCamel(k))
        ? toLongValue(obj[k])
        : keysToCamel(obj[k]);
    });
    return n;
  } else if (Array.isArray(obj)) {
    return obj.map((i) => {
      return keysToCamel(i);
    });
  }
  return obj;
};

describe("Test APR calculations", () => {
  let osmosisAssets, pools, prices;
  beforeAll(() => {
    osmosisAssets = assets.find(({ chain_name }) => chain_name === 'osmosis');
    const osmosisAssetList = asset_lists.find(({ chain_name }) => chain_name === 'osmosis');
    osmosisAssets = [...(osmosisAssets?.assets || []), ...(osmosisAssetList?.assets || [])];
    pools = poolResponse.pools;
    prices = convertGeckoPricesToDenomPriceHash(osmosisAssets, priceResponse);
  });

  cases(
    "calcPoolAprs",
    (opts) => {
      const pool = omit(
        pools.find((pool) => pool.id === opts.poolId),
        "@type"
      );
      const activeGauges = activeGaugesResponse.data
        .filter(
          (gauge) => gauge.distribute_to.denom === pool.totalShares?.denom
        )
        .map(keysToCamel);
      const lockupDurations = lockup.lockable_durations.map((lockup) => ({
        seconds: BigInt(lockup.slice(0, lockup.length - 1)),
        nanos: 0,
      }));
      const superfluidPools = keysToCamel(superfluid.assets);
      const volume7d = summary.data.find(
        (item) => item.pool_id === pool.id
      )!.volume_7d;

      const aprs = calcPoolAprs(
        {
          activeGauges,
          lockupDurations,
          pool,
          assets: osmosisAssets,
          prices,
          superfluidPools,
          swapFee: pool.poolParams!.swapFee,
          volume7d,
          aprSuperfluid: 5.28,
          includeNonPerpetual: opts.includeNonPerpetual,
          lockup: opts.lockup,
        }
      );

      expect(aprs).toMatchSnapshot();
    },
    [
      {
        name: "pool#605",
        poolId: "605",
        lockup: "14",
      },
      {
        name: "pool#497",
        poolId: "497",
        lockup: "14",
      },
      {
        name: "pool#604 lockup-1",
        poolId: "604",
        lockup: "1",
      },
      {
        name: "pool#604 lockup-7",
        poolId: "604",
        lockup: "7",
      },
      {
        name: "pool#604 lockup-14 has-perpetual",
        poolId: "604",
        includeNonPerpetual: true,
        lockup: "14",
      },
      {
        name: "pool#604 lockup-14 no-perpetual",
        poolId: "604",
        includeNonPerpetual: false,
        lockup: "14",
      },
    ]
  );
});
