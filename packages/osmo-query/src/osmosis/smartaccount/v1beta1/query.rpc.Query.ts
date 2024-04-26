//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryParamsRequest, QueryParamsResponse, GetAuthenticatorsRequest, GetAuthenticatorsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  getAuthenticators(request: GetAuthenticatorsRequest): Promise<GetAuthenticatorsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.getAuthenticators = this.getAuthenticators.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.smartaccount.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  getAuthenticators(request: GetAuthenticatorsRequest): Promise<GetAuthenticatorsResponse> {
    const data = GetAuthenticatorsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.smartaccount.v1beta1.Query", "GetAuthenticators", data);
    return promise.then(data => GetAuthenticatorsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    getAuthenticators(request: GetAuthenticatorsRequest): Promise<GetAuthenticatorsResponse> {
      return queryService.getAuthenticators(request);
    }
  };
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
}
export interface UseGetAuthenticatorsQuery<TData> extends ReactQueryParams<GetAuthenticatorsResponse, TData> {
  request: GetAuthenticatorsRequest;
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
  const useGetAuthenticators = <TData = GetAuthenticatorsResponse,>({
    request,
    options
  }: UseGetAuthenticatorsQuery<TData>) => {
    return useQuery<GetAuthenticatorsResponse, Error, TData>(["getAuthenticatorsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getAuthenticators(request);
    }, options);
  };
  return {
    /** Parameters queries the parameters of the module. */useParams,
    useGetAuthenticators
  };
};