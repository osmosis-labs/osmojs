import { Rpc } from "../../../../helpers";
import { BinaryReader } from "../../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryChecksumsRequest, QueryChecksumsResponse, QueryCodeRequest, QueryCodeResponse } from "./query";
/** Query service for wasm module */
export interface Query {
  /** Get all Wasm checksums */
  checksums(request?: QueryChecksumsRequest): Promise<QueryChecksumsResponse>;
  /** Get Wasm code for given checksum */
  code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.checksums = this.checksums.bind(this);
    this.code = this.code.bind(this);
  }
  checksums(request: QueryChecksumsRequest = {
    pagination: undefined
  }): Promise<QueryChecksumsResponse> {
    const data = QueryChecksumsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.lightclients.wasm.v1.Query", "Checksums", data);
    return promise.then(data => QueryChecksumsResponse.decode(new BinaryReader(data)));
  }
  code(request: QueryCodeRequest): Promise<QueryCodeResponse> {
    const data = QueryCodeRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.lightclients.wasm.v1.Query", "Code", data);
    return promise.then(data => QueryCodeResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    checksums(request?: QueryChecksumsRequest): Promise<QueryChecksumsResponse> {
      return queryService.checksums(request);
    },
    code(request: QueryCodeRequest): Promise<QueryCodeResponse> {
      return queryService.code(request);
    }
  };
};
export interface UseChecksumsQuery<TData> extends ReactQueryParams<QueryChecksumsResponse, TData> {
  request?: QueryChecksumsRequest;
}
export interface UseCodeQuery<TData> extends ReactQueryParams<QueryCodeResponse, TData> {
  request: QueryCodeRequest;
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
  const useChecksums = <TData = QueryChecksumsResponse,>({
    request,
    options
  }: UseChecksumsQuery<TData>) => {
    return useQuery<QueryChecksumsResponse, Error, TData>(["checksumsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.checksums(request);
    }, options);
  };
  const useCode = <TData = QueryCodeResponse,>({
    request,
    options
  }: UseCodeQuery<TData>) => {
    return useQuery<QueryCodeResponse, Error, TData>(["codeQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.code(request);
    }, options);
  };
  return {
    /** Get all Wasm checksums */useChecksums,
    /** Get Wasm code for given checksum */useCode
  };
};