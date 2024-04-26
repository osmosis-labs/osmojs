//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, GetAuthenticatorsRequest, GetAuthenticatorsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.getAuthenticators = this.getAuthenticators.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `osmosis/smartaccount/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* GetAuthenticators */
  async getAuthenticators(params: GetAuthenticatorsRequest): Promise<GetAuthenticatorsResponseSDKType> {
    const endpoint = `osmosis/smartaccount/authenticators/${params.account}`;
    return await this.req.get<GetAuthenticatorsResponseSDKType>(endpoint);
  }
}