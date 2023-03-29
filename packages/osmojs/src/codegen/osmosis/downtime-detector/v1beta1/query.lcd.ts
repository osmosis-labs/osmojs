import { LCDClient } from "@osmonauts/lcd";
import { RecoveredSinceDowntimeOfLengthRequest, RecoveredSinceDowntimeOfLengthResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.recoveredSinceDowntimeOfLength = this.recoveredSinceDowntimeOfLength.bind(this);
  }
  /* RecoveredSinceDowntimeOfLength */


  async recoveredSinceDowntimeOfLength(params: RecoveredSinceDowntimeOfLengthRequest): Promise<RecoveredSinceDowntimeOfLengthResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.downtime !== "undefined") {
      options.params.downtime = params.downtime;
    }

    if (typeof params?.recovery !== "undefined") {
      options.params.recovery = params.recovery;
    }

    const endpoint = `osmosis/downtime-detector/v1beta1/RecoveredSinceDowntimeOfLength`;
    return await this.req.get<RecoveredSinceDowntimeOfLengthResponseSDKType>(endpoint, options);
  }

}