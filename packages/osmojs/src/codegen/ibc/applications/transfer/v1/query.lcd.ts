import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryDenomTraceRequest, QueryDenomTraceResponseSDKType, QueryDenomTracesRequest, QueryDenomTracesResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
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
  /* DenomTrace queries a denomination trace information. */


  async denomTrace(params: QueryDenomTraceRequest): Promise<QueryDenomTraceResponseSDKType> {
    const endpoint = `ibc/apps/transfer/v1/denom_traces/${params.hash}`;
    return await this.get<QueryDenomTraceResponseSDKType>(endpoint);
  }
  /* DenomTraces queries all denomination traces. */


  async denomTraces(params: QueryDenomTracesRequest = {
    pagination: undefined
  }): Promise<QueryDenomTracesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ibc/apps/transfer/v1/denom_traces`;
    return await this.get<QueryDenomTracesResponseSDKType>(endpoint, options);
  }
  /* Params queries all parameters of the ibc-transfer module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `ibc/apps/transfer/v1/params`;
    return await this.get<QueryParamsResponseSDKType>(endpoint);
  }

}