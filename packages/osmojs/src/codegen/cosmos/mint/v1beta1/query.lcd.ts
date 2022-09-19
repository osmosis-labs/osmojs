import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryInflationRequest, QueryInflationResponseSDKType, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponseSDKType } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }: {
    restEndpoint: string;
  }) {
    super({
      restEndpoint
    });
  }
  /* Params returns the total set of minting parameters. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `cosmos/mint/v1beta1/params`;
    return await this.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Inflation returns the current minting inflation value. */


  async inflation(_params: QueryInflationRequest = {}): Promise<QueryInflationResponseSDKType> {
    const endpoint = `cosmos/mint/v1beta1/inflation`;
    return await this.get<QueryInflationResponseSDKType>(endpoint);
  }
  /* AnnualProvisions current minting annual provisions value. */


  async annualProvisions(_params: QueryAnnualProvisionsRequest = {}): Promise<QueryAnnualProvisionsResponseSDKType> {
    const endpoint = `cosmos/mint/v1beta1/annual_provisions`;
    return await this.get<QueryAnnualProvisionsResponseSDKType>(endpoint);
  }

}