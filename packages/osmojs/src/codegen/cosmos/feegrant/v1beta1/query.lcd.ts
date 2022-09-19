import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryAllowanceRequest, QueryAllowanceResponseSDKType, QueryAllowancesRequest, QueryAllowancesResponseSDKType, QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponseSDKType } from "./query";
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
  /* Allowance returns fee granted to the grantee by the granter. */


  async allowance(params: QueryAllowanceRequest): Promise<QueryAllowanceResponseSDKType> {
    const endpoint = `cosmos/feegrant/v1beta1/allowance/${params.granter}/${params.grantee}`;
    return await this.get<QueryAllowanceResponseSDKType>(endpoint);
  }
  /* Allowances returns all the grants for address. */


  async allowances(params: QueryAllowancesRequest): Promise<QueryAllowancesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/feegrant/v1beta1/allowances/${params.grantee}`;
    return await this.get<QueryAllowancesResponseSDKType>(endpoint, options);
  }
  /* AllowancesByGranter returns all the grants given by an address
  Since v0.46 */


  async allowancesByGranter(params: QueryAllowancesByGranterRequest): Promise<QueryAllowancesByGranterResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/feegrant/v1beta1/issued/${params.granter}`;
    return await this.get<QueryAllowancesByGranterResponseSDKType>(endpoint, options);
  }

}