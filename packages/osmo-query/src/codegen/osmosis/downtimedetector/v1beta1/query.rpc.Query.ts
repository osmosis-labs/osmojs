import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { RecoveredSinceDowntimeOfLengthRequest, RecoveredSinceDowntimeOfLengthResponse } from "./query";
export interface Query {
  recoveredSinceDowntimeOfLength(request: RecoveredSinceDowntimeOfLengthRequest): Promise<RecoveredSinceDowntimeOfLengthResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.recoveredSinceDowntimeOfLength = this.recoveredSinceDowntimeOfLength.bind(this);
  }
  recoveredSinceDowntimeOfLength(request: RecoveredSinceDowntimeOfLengthRequest): Promise<RecoveredSinceDowntimeOfLengthResponse> {
    const data = RecoveredSinceDowntimeOfLengthRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.downtimedetector.v1beta1.Query", "RecoveredSinceDowntimeOfLength", data);
    return promise.then(data => RecoveredSinceDowntimeOfLengthResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    recoveredSinceDowntimeOfLength(request: RecoveredSinceDowntimeOfLengthRequest): Promise<RecoveredSinceDowntimeOfLengthResponse> {
      return queryService.recoveredSinceDowntimeOfLength(request);
    }
  };
};
export interface UseRecoveredSinceDowntimeOfLengthQuery<TData> extends ReactQueryParams<RecoveredSinceDowntimeOfLengthResponse, TData> {
  request: RecoveredSinceDowntimeOfLengthRequest;
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
  const useRecoveredSinceDowntimeOfLength = <TData = RecoveredSinceDowntimeOfLengthResponse,>({
    request,
    options
  }: UseRecoveredSinceDowntimeOfLengthQuery<TData>) => {
    return useQuery<RecoveredSinceDowntimeOfLengthResponse, Error, TData>(["recoveredSinceDowntimeOfLengthQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.recoveredSinceDowntimeOfLength(request);
    }, options);
  };
  return {
    useRecoveredSinceDowntimeOfLength
  };
};