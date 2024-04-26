//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { PoolsRequest, PoolsResponseSDKType, ParamsRequest, ParamsResponseSDKType, ContractInfoByPoolIdRequest, ContractInfoByPoolIdResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.pools = this.pools.bind(this);
    this.params = this.params.bind(this);
    this.contractInfoByPoolId = this.contractInfoByPoolId.bind(this);
  }
  /* Pools returns all cosmwasm pools */
  async pools(params: PoolsRequest = {
    pagination: undefined
  }): Promise<PoolsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `osmosis/cosmwasmpool/v1beta1/pools`;
    return await this.req.get<PoolsResponseSDKType>(endpoint, options);
  }
  /* Params returns the parameters of the x/cosmwasmpool module. */
  async params(_params: ParamsRequest = {}): Promise<ParamsResponseSDKType> {
    const endpoint = `osmosis/cosmwasmpool/v1beta1/params`;
    return await this.req.get<ParamsResponseSDKType>(endpoint);
  }
  /* ContractInfoByPoolId */
  async contractInfoByPoolId(params: ContractInfoByPoolIdRequest): Promise<ContractInfoByPoolIdResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.poolId !== "undefined") {
      options.params.pool_id = params.poolId;
    }
    const endpoint = `osmosis/cosmwasmpool/v1beta1/contract_info`;
    return await this.req.get<ContractInfoByPoolIdResponseSDKType>(endpoint, options);
  }
}