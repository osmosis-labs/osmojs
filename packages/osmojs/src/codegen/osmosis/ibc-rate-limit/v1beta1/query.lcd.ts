import { LCDClient } from "@osmonauts/lcd";
import { ParamsRequest, ParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
  }
  /* Params defines a gRPC query method that returns the ibc-rate-limit module's
   parameters. */


  async params(_params: ParamsRequest = {}): Promise<ParamsResponseSDKType> {
    const endpoint = `osmosis/ibc-rate-limit/v1beta1/params`;
    return await this.req.get<ParamsResponseSDKType>(endpoint);
  }

}