import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { GetTxRequest, GetTxResponseSDKType, GetTxsEventRequest, GetTxsEventResponseSDKType, GetBlockWithTxsRequest, GetBlockWithTxsResponseSDKType } from "./service";
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
  /* GetTx fetches a tx by hash. */


  async getTx(params: GetTxRequest): Promise<GetTxResponseSDKType> {
    const endpoint = `cosmos/tx/v1beta1/txs/${params.hash}`;
    return await this.get<GetTxResponseSDKType>(endpoint);
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
    return await this.get<GetTxsEventResponseSDKType>(endpoint, options);
  }
  /* GetBlockWithTxs fetches a block with decoded txs.
  
  Since: cosmos-sdk 0.45.2 */


  async getBlockWithTxs(params: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/tx/v1beta1/txs/block/${params.height}`;
    return await this.get<GetBlockWithTxsResponseSDKType>(endpoint, options);
  }

}