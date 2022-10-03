import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QuerySales, QuerySalesResponse, QuerySale, QuerySaleResponse, QueryUserPosition, QueryUserPositionResponse } from "./query";
/** Query defines the RPC service */

export interface Query {
  sales(request?: QuerySales): Promise<QuerySalesResponse>;
  /*Returns list of Sales ordered by the creation time*/

  sale(request: QuerySale): Promise<QuerySaleResponse>;
  /*Returns the specific Sale object*/

  userPosition(request: QueryUserPosition): Promise<QueryUserPositionResponse>;
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
  }): Promise<QuerySalesResponse> {
    const data = QuerySales.encode(request).finish();
    const promise = this.rpc.request("osmosis.streamswap.v1.Query", "Sales", data);
    return promise.then(data => QuerySalesResponse.decode(new _m0.Reader(data)));
  }

  sale(request: QuerySale): Promise<QuerySaleResponse> {
    const data = QuerySale.encode(request).finish();
    const promise = this.rpc.request("osmosis.streamswap.v1.Query", "Sale", data);
    return promise.then(data => QuerySaleResponse.decode(new _m0.Reader(data)));
  }

  userPosition(request: QueryUserPosition): Promise<QueryUserPositionResponse> {
    const data = QueryUserPosition.encode(request).finish();
    const promise = this.rpc.request("osmosis.streamswap.v1.Query", "UserPosition", data);
    return promise.then(data => QueryUserPositionResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    sales(request?: QuerySales): Promise<QuerySalesResponse> {
      return queryService.sales(request);
    },

    sale(request: QuerySale): Promise<QuerySaleResponse> {
      return queryService.sale(request);
    },

    userPosition(request: QueryUserPosition): Promise<QueryUserPositionResponse> {
      return queryService.userPosition(request);
    }

  };
};