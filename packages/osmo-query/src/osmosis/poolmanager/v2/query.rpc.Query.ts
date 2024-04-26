//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { SpotPriceRequest, SpotPriceResponse } from "./query";
export interface Query {
  /**
   * SpotPriceV2 defines a gRPC query handler that returns the spot price given
   * a base denomination and a quote denomination.
   * The returned spot price has 36 decimal places. However, some of
   * modules perform sig fig rounding so most of the rightmost decimals can be
   * zeroes.
   */
  spotPriceV2(request: SpotPriceRequest): Promise<SpotPriceResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.spotPriceV2 = this.spotPriceV2.bind(this);
  }
  spotPriceV2(request: SpotPriceRequest): Promise<SpotPriceResponse> {
    const data = SpotPriceRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v2.Query", "SpotPriceV2", data);
    return promise.then(data => SpotPriceResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    spotPriceV2(request: SpotPriceRequest): Promise<SpotPriceResponse> {
      return queryService.spotPriceV2(request);
    }
  };
};
export interface UseSpotPriceV2Query<TData> extends ReactQueryParams<SpotPriceResponse, TData> {
  request: SpotPriceRequest;
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
  const useSpotPriceV2 = <TData = SpotPriceResponse,>({
    request,
    options
  }: UseSpotPriceV2Query<TData>) => {
    return useQuery<SpotPriceResponse, Error, TData>(["spotPriceV2Query", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.spotPriceV2(request);
    }, options);
  };
  return {
    /**
     * SpotPriceV2 defines a gRPC query handler that returns the spot price given
     * a base denomination and a quote denomination.
     * The returned spot price has 36 decimal places. However, some of
     * modules perform sig fig rounding so most of the rightmost decimals can be
     * zeroes.
     */
    useSpotPriceV2
  };
};