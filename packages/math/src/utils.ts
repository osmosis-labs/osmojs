import {
  CoinGeckoToken,
  CoinDenom,
  Exponent,
  CoinSymbol,
  PriceHash,
  CoinGeckoUSDResponse,
} from "./types";
import { Asset } from "@chain-registry/types";
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

export const getOsmoAssetByDenom = (assets: Asset[], denom: CoinDenom): Asset => {
  return getAssetByDenom(assets, denom);
};

export const getDenomForCoinGeckoId = (assets: Asset[], coinGeckoId: CoinGeckoToken): CoinDenom => {
  return getDenomByCoinGeckoId(assets, coinGeckoId);
};

export const osmoDenomToSymbol = (assets: Asset[], denom: CoinDenom): CoinSymbol => {
  return getSymbolByChainDenom(assets, denom);
};

export const symbolToOsmoDenom = (assets: Asset[], token: CoinSymbol): CoinDenom => {
  return getChainDenomBySymbol(assets, token);
};

export const getExponentByDenom = (assets: Asset[], denom: CoinDenom): Exponent => {
  return _getExponentByDenom(assets, denom);
};

export const convertGeckoPricesToDenomPriceHash = (
  assets: Asset[],
  prices: CoinGeckoUSDResponse
): PriceHash => {
  return convertCoinGeckoPricesToDenomPriceMap(assets, prices);
};

export const noDecimals = (num: number | string) => {
  return _noDecimals(num);
};

export const baseUnitsToDollarValue = (
  assets: Asset[],
  prices: PriceHash,
  symbol: string,
  amount: string | number
) => {
  return convertBaseUnitsToDollarValue(assets, prices, symbol, amount);
};

export const dollarValueToDenomUnits = (
  assets: Asset[],
  prices: PriceHash,
  symbol: string,
  value: string | number
) => {
  return convertDollarValueToDenomUnits(assets, prices, symbol, value);
};

export const baseUnitsToDisplayUnits = (
  assets: Asset[],
  symbol: string,
  amount: string | number
) => {
  return convertBaseUnitsToDisplayUnits(assets, symbol, amount);
};
