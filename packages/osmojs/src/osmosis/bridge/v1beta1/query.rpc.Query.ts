//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, LastTransferHeightRequest, LastTransferHeightResponse } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
  /** Params returns x/bridge module params. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * LastTransferHeight returns the height of the external chain at which
   * the last transfer with the given asset was successfully completed
   * (finalized).
   */
  lastTransferHeight(request: LastTransferHeightRequest): Promise<LastTransferHeightResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.lastTransferHeight = this.lastTransferHeight.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.bridge.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  lastTransferHeight(request: LastTransferHeightRequest): Promise<LastTransferHeightResponse> {
    const data = LastTransferHeightRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.bridge.v1beta1.Query", "LastTransferHeight", data);
    return promise.then(data => LastTransferHeightResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    lastTransferHeight(request: LastTransferHeightRequest): Promise<LastTransferHeightResponse> {
      return queryService.lastTransferHeight(request);
    }
  };
};