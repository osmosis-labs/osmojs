//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, LastTransferHeightRequest, LastTransferHeightResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.lastTransferHeight = this.lastTransferHeight.bind(this);
  }
  /* Params returns x/bridge module params. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `osmosis/bridge/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* LastTransferHeight returns the height of the external chain at which
   the last transfer with the given asset was successfully completed
   (finalized). */
  async lastTransferHeight(params: LastTransferHeightRequest): Promise<LastTransferHeightResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.assetId !== "undefined") {
      options.params.asset_id = params.assetId;
    }
    const endpoint = `osmosis/bridge/v1beta1/last-transfer-height`;
    return await this.req.get<LastTransferHeightResponseSDKType>(endpoint, options);
  }
}