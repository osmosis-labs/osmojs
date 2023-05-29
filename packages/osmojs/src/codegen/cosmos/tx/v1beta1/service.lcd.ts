import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { GetTxRequest, GetTxResponseSDKType, GetTxsEventRequest, GetTxsEventResponseSDKType } from "./service";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.getTx = this.getTx.bind(this);
    this.getTxsEvent = this.getTxsEvent.bind(this);
  }
  /* GetTx fetches a tx by hash. */


  async getTx(params: GetTxRequest): Promise<GetTxResponseSDKType> {
    const endpoint = `cosmos/tx/v1beta1/txs/${params.hash}`;
    return await this.req.get<GetTxResponseSDKType>(endpoint);
  }
  /* GetTxsEvent fetches txs by event. */


  async getTxsEvent(params: GetTxsEventRequest): Promise<GetTxsEventResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.events !== "undefined") {
      options.params.events = params.events;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    if (typeof params?.orderBy !== "undefined") {
      options.params.order_by = params.orderBy;
    }

    const endpoint = `cosmos/tx/v1beta1/txs`;
    return await this.req.get<GetTxsEventResponseSDKType>(endpoint, options);
  }

}