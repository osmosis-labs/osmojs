import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QuerySales, QuerySalesResponse, QuerySalesResponseSDKType, QuerySale, QuerySaleResponse, QuerySaleResponseSDKType, QueryUserPosition, QueryUserPositionResponse, QueryUserPositionResponseSDKType } from "./query";
/** Query defines the RPC service */

export interface Query {
  sales(request?: QuerySales): Promise<QuerySalesResponseSDKType>;
  /*Returns list of Sales ordered by the creation time*/

  sale(request: QuerySale): Promise<QuerySaleResponseSDKType>;
  /*Returns the specific Sale object*/

  userPosition(request: QueryUserPosition): Promise<QueryUserPositionResponseSDKType>;
  /*null*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.sales = this.sales.bind(this);
    this.sale = this.sale.bind(this);
    this.userPosition = this.userPosition.bind(this);
  }

  sales(request: QuerySales = {
    pagination: undefined
  }): Promise<QuerySalesResponseSDKType> {
    const data = QuerySales.encode(request).finish();
    const promise = this.rpc.request("osmosis.streamswap.v1.Query", "Sales", data);
    return promise.then(data => QuerySalesResponse.decode(new _m0.Reader(data)));
  }

  sale(request: QuerySale): Promise<QuerySaleResponseSDKType> {
    const data = QuerySale.encode(request).finish();
    const promise = this.rpc.request("osmosis.streamswap.v1.Query", "Sale", data);
    return promise.then(data => QuerySaleResponse.decode(new _m0.Reader(data)));
  }

  userPosition(request: QueryUserPosition): Promise<QueryUserPositionResponseSDKType> {
    const data = QueryUserPosition.encode(request).finish();
    const promise = this.rpc.request("osmosis.streamswap.v1.Query", "UserPosition", data);
    return promise.then(data => QueryUserPositionResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    sales(request?: QuerySales): Promise<QuerySalesResponseSDKType> {
      return queryService.sales(request);
    },

    sale(request: QuerySale): Promise<QuerySaleResponseSDKType> {
      return queryService.sale(request);
    },

    userPosition(request: QueryUserPosition): Promise<QueryUserPositionResponseSDKType> {
      return queryService.userPosition(request);
    }

  };
};