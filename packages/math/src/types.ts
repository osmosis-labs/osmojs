import { AssetDenomUnit, AssetList } from "@chain-registry/types";
import { Coin } from "osmojs/cosmos/base/v1beta1/coin";
import { Duration } from "osmojs/google/protobuf/duration";
import { Pool } from "osmojs/osmosis/gamm/v1beta1/balancerPool";
import { Gauge } from "osmojs/osmosis/incentives/gauge";
import { SuperfluidAsset } from "osmojs/osmosis/superfluid/superfluid";

export type CoinDenom = AssetDenomUnit["denom"];

export type Exponent = AssetDenomUnit["exponent"];

export type CoinSymbol = string;

export interface PriceHash {
  [key: CoinDenom]: number;
}

export type CoinGeckoToken = string;

export interface CoinGeckoUSD {
  usd: number;
}

export type CoinGeckoUSDResponse = Record<CoinGeckoToken, CoinGeckoUSD>;

export interface CoinValue {
  amount: string;
  denom: CoinDenom;
  displayAmount: string;
  value: string;
  symbol: CoinSymbol;
}

export type CoinBalance = Coin & { displayValue: string | number };

export interface PoolAssetPretty {
  symbol: any;
  denom: string;
  amount: string;
  ratio: string;
  info: any;
}

export interface PoolTokenImage {
  token: CoinSymbol;
  images: {
    png: string;
    svg: string;
  };
}

export interface PoolPretty extends Pool {
  nickname: string;
  images: PoolTokenImage[] | null;
  poolAssetsPretty: PoolAssetPretty[];
}

export interface CalcPoolAprsParams {
  activeGauges: Gauge[];
  pool: Pool;
  assets: AssetList[];
  prices: PriceHash;
  superfluidPools: SuperfluidAsset[];
  aprSuperfluid: string | number;
  lockupDurations: Duration[];
  volume7d: string | number;
  swapFee: string | number;
  lockup?: string;
  includeNonPerpetual?: boolean;
}

export interface Trade {
  sell: Coin;
  buy: Coin;
}

export interface PrettyPair {
  poolId: string;
  poolAddress: string;
  baseName: string;
  baseSymbol: string;
  baseAddress: string;
  quoteName: string;
  quoteSymbol: string;
  quoteAddress: string;
}
