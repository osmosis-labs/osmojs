import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryBalanceRequest, QueryBalanceResponseSDKType, QueryAllBalancesRequest, QueryAllBalancesResponseSDKType, QueryTotalSupplyRequest, QueryTotalSupplyResponseSDKType, QuerySupplyOfRequest, QuerySupplyOfResponseSDKType, QueryTotalSupplyWithoutOffsetRequest, QueryTotalSupplyWithoutOffsetResponseSDKType, QuerySupplyOfWithoutOffsetRequest, QuerySupplyOfWithoutOffsetResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryDenomMetadataRequest, QueryDenomMetadataResponseSDKType, QueryDenomsMetadataRequest, QueryDenomsMetadataResponseSDKType, QueryBaseDenomRequest, QueryBaseDenomResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.balance = this.balance.bind(this);
    this.allBalances = this.allBalances.bind(this);
    this.totalSupply = this.totalSupply.bind(this);
    this.supplyOf = this.supplyOf.bind(this);
    this.totalSupplyWithoutOffset = this.totalSupplyWithoutOffset.bind(this);
    this.supplyOfWithoutOffset = this.supplyOfWithoutOffset.bind(this);
    this.params = this.params.bind(this);
    this.denomMetadata = this.denomMetadata.bind(this);
    this.denomsMetadata = this.denomsMetadata.bind(this);
    this.baseDenom = this.baseDenom.bind(this);
  }
  /* Balance queries the balance of a single coin for a single account. */


  async balance(params: QueryBalanceRequest): Promise<QueryBalanceResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `cosmos/bank/v1beta1/balances/${params.address}/by_denom`;
    return await this.req.get<QueryBalanceResponseSDKType>(endpoint, options);
  }
  /* AllBalances queries the balance of all coins for a single account. */


  async allBalances(params: QueryAllBalancesRequest): Promise<QueryAllBalancesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/bank/v1beta1/balances/${params.address}`;
    return await this.req.get<QueryAllBalancesResponseSDKType>(endpoint, options);
  }
  /* TotalSupply queries the total supply of all coins. */


  async totalSupply(params: QueryTotalSupplyRequest = {
    pagination: undefined
  }): Promise<QueryTotalSupplyResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/bank/v1beta1/supply`;
    return await this.req.get<QueryTotalSupplyResponseSDKType>(endpoint, options);
  }
  /* SupplyOf queries the supply of a single coin. */


  async supplyOf(params: QuerySupplyOfRequest): Promise<QuerySupplyOfResponseSDKType> {
    const endpoint = `cosmos/bank/v1beta1/supply/${params.denom}`;
    return await this.req.get<QuerySupplyOfResponseSDKType>(endpoint);
  }
  /* TotalSupplyWithoutOffset queries the total supply of all coins. */


  async totalSupplyWithoutOffset(params: QueryTotalSupplyWithoutOffsetRequest = {
    pagination: undefined
  }): Promise<QueryTotalSupplyWithoutOffsetResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/bank/v1beta1/supply_without_offset`;
    return await this.req.get<QueryTotalSupplyWithoutOffsetResponseSDKType>(endpoint, options);
  }
  /* SupplyOf queries the supply of a single coin. */


  async supplyOfWithoutOffset(params: QuerySupplyOfWithoutOffsetRequest): Promise<QuerySupplyOfWithoutOffsetResponseSDKType> {
    const endpoint = `cosmos/bank/v1beta1/supply_without_offset/${params.denom}`;
    return await this.req.get<QuerySupplyOfWithoutOffsetResponseSDKType>(endpoint);
  }
  /* Params queries the parameters of x/bank module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `cosmos/bank/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* DenomsMetadata queries the client metadata of a given coin denomination. */


  async denomMetadata(params: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponseSDKType> {
    const endpoint = `cosmos/bank/v1beta1/denoms_metadata/${params.denom}`;
    return await this.req.get<QueryDenomMetadataResponseSDKType>(endpoint);
  }
  /* DenomsMetadata queries the client metadata for all registered coin denominations. */


  async denomsMetadata(params: QueryDenomsMetadataRequest = {
    pagination: undefined
  }): Promise<QueryDenomsMetadataResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/bank/v1beta1/denoms_metadata`;
    return await this.req.get<QueryDenomsMetadataResponseSDKType>(endpoint, options);
  }
  /* BaseDenom queries for a base denomination given a denom that can either be
   the base denom itself or a metadata denom unit that maps to the base denom. */


  async baseDenom(params: QueryBaseDenomRequest): Promise<QueryBaseDenomResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `cosmos/bank/v1beta1/base_denom`;
    return await this.req.get<QueryBaseDenomResponseSDKType>(endpoint, options);
  }

}