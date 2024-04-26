//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { PoolsRequest, PoolsResponse, ParamsRequest, ParamsResponse, ContractInfoByPoolIdRequest, ContractInfoByPoolIdResponse } from "./query";
export interface Query {
  /** Pools returns all cosmwasm pools */
  pools(request?: PoolsRequest): Promise<PoolsResponse>;
  /** Params returns the parameters of the x/cosmwasmpool module. */
  params(request?: ParamsRequest): Promise<ParamsResponse>;
  contractInfoByPoolId(request: ContractInfoByPoolIdRequest): Promise<ContractInfoByPoolIdResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.pools = this.pools.bind(this);
    this.params = this.params.bind(this);
    this.contractInfoByPoolId = this.contractInfoByPoolId.bind(this);
  }
  pools(request: PoolsRequest = {
    pagination: undefined
  }): Promise<PoolsResponse> {
    const data = PoolsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.cosmwasmpool.v1beta1.Query", "Pools", data);
    return promise.then(data => PoolsResponse.decode(new BinaryReader(data)));
  }
  params(request: ParamsRequest = {}): Promise<ParamsResponse> {
    const data = ParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.cosmwasmpool.v1beta1.Query", "Params", data);
    return promise.then(data => ParamsResponse.decode(new BinaryReader(data)));
  }
  contractInfoByPoolId(request: ContractInfoByPoolIdRequest): Promise<ContractInfoByPoolIdResponse> {
    const data = ContractInfoByPoolIdRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.cosmwasmpool.v1beta1.Query", "ContractInfoByPoolId", data);
    return promise.then(data => ContractInfoByPoolIdResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    pools(request?: PoolsRequest): Promise<PoolsResponse> {
      return queryService.pools(request);
    },
    params(request?: ParamsRequest): Promise<ParamsResponse> {
      return queryService.params(request);
    },
    contractInfoByPoolId(request: ContractInfoByPoolIdRequest): Promise<ContractInfoByPoolIdResponse> {
      return queryService.contractInfoByPoolId(request);
    }
  };
};
export interface UsePoolsQuery<TData> extends ReactQueryParams<PoolsResponse, TData> {
  request?: PoolsRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<ParamsResponse, TData> {
  request?: ParamsRequest;
}
export interface UseContractInfoByPoolIdQuery<TData> extends ReactQueryParams<ContractInfoByPoolIdResponse, TData> {
  request: ContractInfoByPoolIdRequest;
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
  const usePools = <TData = PoolsResponse,>({
    request,
    options
  }: UsePoolsQuery<TData>) => {
    return useQuery<PoolsResponse, Error, TData>(["poolsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.pools(request);
    }, options);
  };
  const useParams = <TData = ParamsResponse,>({
    request,
    options
  }: UseParamsQuery<TData>) => {
    return useQuery<ParamsResponse, Error, TData>(["paramsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };
  const useContractInfoByPoolId = <TData = ContractInfoByPoolIdResponse,>({
    request,
    options
  }: UseContractInfoByPoolIdQuery<TData>) => {
    return useQuery<ContractInfoByPoolIdResponse, Error, TData>(["contractInfoByPoolIdQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.contractInfoByPoolId(request);
    }, options);
  };
  return {
    /** Pools returns all cosmwasm pools */usePools,
    /** Params returns the parameters of the x/cosmwasmpool module. */useParams,
    useContractInfoByPoolId
  };
};