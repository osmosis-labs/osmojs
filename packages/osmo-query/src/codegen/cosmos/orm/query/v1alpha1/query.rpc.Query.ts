import { Rpc } from "../../../../helpers";
import { BinaryReader } from "../../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { GetRequest, GetResponse, ListRequest, ListResponse } from "./query";
/** Query is a generic gRPC service for querying ORM data. */
export interface Query {
  /** Get queries an ORM table against an unique index. */
  get(request: GetRequest): Promise<GetResponse>;
  /** List queries an ORM table against an index. */
  list(request: ListRequest): Promise<ListResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.get = this.get.bind(this);
    this.list = this.list.bind(this);
  }
  get(request: GetRequest): Promise<GetResponse> {
    const data = GetRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.orm.query.v1alpha1.Query", "Get", data);
    return promise.then(data => GetResponse.decode(new BinaryReader(data)));
  }
  list(request: ListRequest): Promise<ListResponse> {
    const data = ListRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.orm.query.v1alpha1.Query", "List", data);
    return promise.then(data => ListResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    get(request: GetRequest): Promise<GetResponse> {
      return queryService.get(request);
    },
    list(request: ListRequest): Promise<ListResponse> {
      return queryService.list(request);
    }
  };
};
export interface UseGetQuery<TData> extends ReactQueryParams<GetResponse, TData> {
  request: GetRequest;
}
export interface UseListQuery<TData> extends ReactQueryParams<ListResponse, TData> {
  request: ListRequest;
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
  const useGet = <TData = GetResponse,>({
    request,
    options
  }: UseGetQuery<TData>) => {
    return useQuery<GetResponse, Error, TData>(["getQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.get(request);
    }, options);
  };
  const useList = <TData = ListResponse,>({
    request,
    options
  }: UseListQuery<TData>) => {
    return useQuery<ListResponse, Error, TData>(["listQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.list(request);
    }, options);
  };
  return {
    /** Get queries an ORM table against an unique index. */useGet,
    /** List queries an ORM table against an index. */useList
  };
};