//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { UserValidatorPreferencesRequest, UserValidatorPreferencesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Returns the list of ValidatorPreferences for the user. */
  userValidatorPreferences(request: UserValidatorPreferencesRequest): Promise<UserValidatorPreferencesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.userValidatorPreferences = this.userValidatorPreferences.bind(this);
  }
  userValidatorPreferences(request: UserValidatorPreferencesRequest): Promise<UserValidatorPreferencesResponse> {
    const data = UserValidatorPreferencesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Query", "UserValidatorPreferences", data);
    return promise.then(data => UserValidatorPreferencesResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    userValidatorPreferences(request: UserValidatorPreferencesRequest): Promise<UserValidatorPreferencesResponse> {
      return queryService.userValidatorPreferences(request);
    }
  };
};
export interface UseUserValidatorPreferencesQuery<TData> extends ReactQueryParams<UserValidatorPreferencesResponse, TData> {
  request: UserValidatorPreferencesRequest;
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
  const useUserValidatorPreferences = <TData = UserValidatorPreferencesResponse,>({
    request,
    options
  }: UseUserValidatorPreferencesQuery<TData>) => {
    return useQuery<UserValidatorPreferencesResponse, Error, TData>(["userValidatorPreferencesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.userValidatorPreferences(request);
    }, options);
  };
  return {
    /** Returns the list of ValidatorPreferences for the user. */useUserValidatorPreferences
  };
};