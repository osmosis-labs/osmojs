import {
  CoinGeckoToken,
  CoinDenom,
  Exponent,
  CoinSymbol,
  PriceHash,
  CoinGeckoUSDResponse,
} from "./types";
import { Asset, AssetList } from "@chain-registry/types";
import {
  getAssetByDenom,
  getDenomByCoinGeckoId,
  getSymbolByDenom,
  getDenomBySymbol,
  getExponentByDenom as _getExponentByDenom,
  mapCoinGeckoPricesToDenoms,
  roundDown,
  convertBaseUnitToDollarValue,
  convertDollarValueToBaseUnit,
  convertBaseUnitToDisplayUnit,
} from "@chain-registry/utils";

export const getOsmoAssetByDenom = (assets: AssetList[], denom: CoinDenom): Asset => {
  return getAssetByDenom(assets, denom) as Asset
};

export const getDenomForCoinGeckoId = (assets: AssetList[], coinGeckoId: CoinGeckoToken): CoinDenom => {
  return getDenomByCoinGeckoId(assets, coinGeckoId);
};

export const osmoDenomToSymbol = (assets: AssetList[], denom: CoinDenom): CoinSymbol => {
  return getSymbolByDenom(assets, denom);
};

export const symbolToOsmoDenom = (assets: AssetList[], token: CoinSymbol): CoinDenom => {
  return getDenomBySymbol(assets, token);
};

export const getExponentByDenom = (assets: AssetList[], denom: CoinDenom): Exponent => {
  return _getExponentByDenom(assets, denom);
};

export const convertGeckoPricesToDenomPriceHash = (
  assets: AssetList[],
  prices: CoinGeckoUSDResponse
): PriceHash => {
  return mapCoinGeckoPricesToDenoms(assets, prices);
};

export const noDecimals = (num: number | string) => {
  return roundDown(num);
};

export const baseUnitsToDollarValue = (
  assets: AssetList[],
  prices: PriceHash,
  symbol: string,
  amount: string | number
) => {
  return convertBaseUnitToDollarValue(assets, prices, symbol, amount);
};

export const dollarValueToDenomUnits = (
  assets: AssetList[],
  prices: PriceHash,
  symbol: string,
  value: string | number
) => {
  return convertDollarValueToBaseUnit(assets, prices, symbol, value);
};

export const baseUnitsToDisplayUnits = (
  assets: AssetList[],
  symbol: string,
  amount: string | number
) => {
  return convertBaseUnitToDisplayUnit(assets, symbol, amount);
};
