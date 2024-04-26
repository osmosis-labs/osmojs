//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
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
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
}
export interface UseLastTransferHeightQuery<TData> extends ReactQueryParams<LastTransferHeightResponse, TData> {
  request: LastTransferHeightRequest;
}
const _queryClients: WeakMap<ProtobufRpcClient, QueryClientImpl> = new WeakMap();
const getQueryService = (rpc: ProtobufRpcClient | undefined): QueryClientImpl | undefined => {
  if (!rpc) return;
  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }
  const queryService = new QueryClientImpl(rpc);
  _queryClients.set(rpc, queryService);
  return queryService;
};
export const createRpcQueryHooks = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  const useParams = <TData = QueryParamsResponse,>({
    request,
    options
  }: UseParamsQuery<TData>) => {
    return useQuery<QueryParamsResponse, Error, TData>(["paramsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };
  const useLastTransferHeight = <TData = LastTransferHeightResponse,>({
    request,
    options
  }: UseLastTransferHeightQuery<TData>) => {
    return useQuery<LastTransferHeightResponse, Error, TData>(["lastTransferHeightQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.lastTransferHeight(request);
    }, options);
  };
  return {
    /** Params returns x/bridge module params. */useParams,
    /**
     * LastTransferHeight returns the height of the external chain at which
     * the last transfer with the given asset was successfully completed
     * (finalized).
     */
    useLastTransferHeight
  };
};