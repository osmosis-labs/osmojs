import {
  CoinGeckoToken,
  CoinDenom,
  Exponent,
  CoinSymbol,
  PriceHash,
  CoinGeckoUSDResponse,
} from "./types";
import { Asset as OsmosisAsset } from "@chain-registry/types";
import {
  getAssetByDenom,
  getDenomByCoinGeckoId,
  getSymbolByChainDenom,
  getChainDenomBySymbol,
  getExponentByDenom as _getExponentByDenom,
  convertCoinGeckoPricesToDenomPriceMap,
  noDecimals as _noDecimals,
  convertBaseUnitsToDollarValue,
  convertDollarValueToDenomUnits,
  convertBaseUnitsToDisplayUnits
} from "@chain-registry/utils";

export const getOsmoAssetByDenom = (osmosisAssets: OsmosisAsset[], denom: CoinDenom): OsmosisAsset => {
  return getAssetByDenom(osmosisAssets, denom);
};

export const getDenomForCoinGeckoId = (
  osmosisAssets: OsmosisAsset[],
  coinGeckoId: CoinGeckoToken
): CoinDenom => {
  return getDenomByCoinGeckoId(osmosisAssets, coinGeckoId);
};

export const osmoDenomToSymbol = (osmosisAssets: OsmosisAsset[], denom: CoinDenom): CoinSymbol => {
  return getSymbolByChainDenom(osmosisAssets, denom);
};

export const symbolToOsmoDenom = (osmosisAssets: OsmosisAsset[], token: CoinSymbol): CoinDenom => {
  return getChainDenomBySymbol(osmosisAssets, token);
};

export const getExponentByDenom = (osmosisAssets: OsmosisAsset[], denom: CoinDenom): Exponent => {
  return _getExponentByDenom(osmosisAssets, denom);
};

export const convertGeckoPricesToDenomPriceHash = (
  osmosisAssets: OsmosisAsset[],
  prices: CoinGeckoUSDResponse
): PriceHash => {
  return convertCoinGeckoPricesToDenomPriceMap(osmosisAssets, prices);
};

export const noDecimals = (num: number | string) => {
  return _noDecimals(num);
};

export const baseUnitsToDollarValue = (
  osmosisAssets: OsmosisAsset[],
  prices: PriceHash,
  symbol: string,
  amount: string | number
) => {
  return convertBaseUnitsToDollarValue(osmosisAssets, prices, symbol, amount);
};

export const dollarValueToDenomUnits = (
  osmosisAssets: OsmosisAsset[],
  prices: PriceHash,
  symbol: string,
  value: string | number
) => {
  return convertDollarValueToDenomUnits(osmosisAssets, prices, symbol, value);
};

export const baseUnitsToDisplayUnits = (
  osmosisAssets: OsmosisAsset[],
  symbol: string,
  amount: string | number
) => {
  return convertBaseUnitsToDisplayUnits(osmosisAssets, symbol, amount);
};
