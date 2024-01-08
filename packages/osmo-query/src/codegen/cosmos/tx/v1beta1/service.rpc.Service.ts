import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { SimulateRequest, SimulateResponse, GetTxRequest, GetTxResponse, BroadcastTxRequest, BroadcastTxResponse, GetTxsEventRequest, GetTxsEventResponse, GetBlockWithTxsRequest, GetBlockWithTxsResponse, TxDecodeRequest, TxDecodeResponse, TxEncodeRequest, TxEncodeResponse, TxEncodeAminoRequest, TxEncodeAminoResponse, TxDecodeAminoRequest, TxDecodeAminoResponse } from "./service";
/** Service defines a gRPC service for interacting with transactions. */
export interface Service {
  /** Simulate simulates executing a transaction for estimating gas usage. */
  simulate(request: SimulateRequest): Promise<SimulateResponse>;
  /** GetTx fetches a tx by hash. */
  getTx(request: GetTxRequest): Promise<GetTxResponse>;
  /** BroadcastTx broadcast transaction. */
  broadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponse>;
  /** GetTxsEvent fetches txs by event. */
  getTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponse>;
  /**
   * GetBlockWithTxs fetches a block with decoded txs.
   * 
   * Since: cosmos-sdk 0.45.2
   */
  getBlockWithTxs(request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse>;
  /**
   * TxDecode decodes the transaction.
   * 
   * Since: cosmos-sdk 0.47
   */
  txDecode(request: TxDecodeRequest): Promise<TxDecodeResponse>;
  /**
   * TxEncode encodes the transaction.
   * 
   * Since: cosmos-sdk 0.47
   */
  txEncode(request: TxEncodeRequest): Promise<TxEncodeResponse>;
  /**
   * TxEncodeAmino encodes an Amino transaction from JSON to encoded bytes.
   * 
   * Since: cosmos-sdk 0.47
   */
  txEncodeAmino(request: TxEncodeAminoRequest): Promise<TxEncodeAminoResponse>;
  /**
   * TxDecodeAmino decodes an Amino transaction from encoded bytes to JSON.
   * 
   * Since: cosmos-sdk 0.47
   */
  txDecodeAmino(request: TxDecodeAminoRequest): Promise<TxDecodeAminoResponse>;
}
export class ServiceClientImpl implements Service {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.simulate = this.simulate.bind(this);
    this.getTx = this.getTx.bind(this);
    this.broadcastTx = this.broadcastTx.bind(this);
    this.getTxsEvent = this.getTxsEvent.bind(this);
    this.getBlockWithTxs = this.getBlockWithTxs.bind(this);
    this.txDecode = this.txDecode.bind(this);
    this.txEncode = this.txEncode.bind(this);
    this.txEncodeAmino = this.txEncodeAmino.bind(this);
    this.txDecodeAmino = this.txDecodeAmino.bind(this);
  }
  simulate(request: SimulateRequest): Promise<SimulateResponse> {
    const data = SimulateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "Simulate", data);
    return promise.then(data => SimulateResponse.decode(new BinaryReader(data)));
  }
  getTx(request: GetTxRequest): Promise<GetTxResponse> {
    const data = GetTxRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTx", data);
    return promise.then(data => GetTxResponse.decode(new BinaryReader(data)));
  }
  broadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponse> {
    const data = BroadcastTxRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "BroadcastTx", data);
    return promise.then(data => BroadcastTxResponse.decode(new BinaryReader(data)));
  }
  getTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponse> {
    const data = GetTxsEventRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTxsEvent", data);
    return promise.then(data => GetTxsEventResponse.decode(new BinaryReader(data)));
  }
  getBlockWithTxs(request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse> {
    const data = GetBlockWithTxsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetBlockWithTxs", data);
    return promise.then(data => GetBlockWithTxsResponse.decode(new BinaryReader(data)));
  }
  txDecode(request: TxDecodeRequest): Promise<TxDecodeResponse> {
    const data = TxDecodeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxDecode", data);
    return promise.then(data => TxDecodeResponse.decode(new BinaryReader(data)));
  }
  txEncode(request: TxEncodeRequest): Promise<TxEncodeResponse> {
    const data = TxEncodeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxEncode", data);
    return promise.then(data => TxEncodeResponse.decode(new BinaryReader(data)));
  }
  txEncodeAmino(request: TxEncodeAminoRequest): Promise<TxEncodeAminoResponse> {
    const data = TxEncodeAminoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxEncodeAmino", data);
    return promise.then(data => TxEncodeAminoResponse.decode(new BinaryReader(data)));
  }
  txDecodeAmino(request: TxDecodeAminoRequest): Promise<TxDecodeAminoResponse> {
    const data = TxDecodeAminoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxDecodeAmino", data);
    return promise.then(data => TxDecodeAminoResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new ServiceClientImpl(rpc);
  return {
    simulate(request: SimulateRequest): Promise<SimulateResponse> {
      return queryService.simulate(request);
    },
    getTx(request: GetTxRequest): Promise<GetTxResponse> {
      return queryService.getTx(request);
    },
    broadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponse> {
      return queryService.broadcastTx(request);
    },
    getTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponse> {
      return queryService.getTxsEvent(request);
    },
    getBlockWithTxs(request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse> {
      return queryService.getBlockWithTxs(request);
    },
    txDecode(request: TxDecodeRequest): Promise<TxDecodeResponse> {
      return queryService.txDecode(request);
    },
    txEncode(request: TxEncodeRequest): Promise<TxEncodeResponse> {
      return queryService.txEncode(request);
    },
    txEncodeAmino(request: TxEncodeAminoRequest): Promise<TxEncodeAminoResponse> {
      return queryService.txEncodeAmino(request);
    },
    txDecodeAmino(request: TxDecodeAminoRequest): Promise<TxDecodeAminoResponse> {
      return queryService.txDecodeAmino(request);
    }
  };
};
export interface UseSimulateQuery<TData> extends ReactQueryParams<SimulateResponse, TData> {
  request: SimulateRequest;
}
export interface UseGetTxQuery<TData> extends ReactQueryParams<GetTxResponse, TData> {
  request: GetTxRequest;
}
export interface UseBroadcastTxQuery<TData> extends ReactQueryParams<BroadcastTxResponse, TData> {
  request: BroadcastTxRequest;
}
export interface UseGetTxsEventQuery<TData> extends ReactQueryParams<GetTxsEventResponse, TData> {
  request: GetTxsEventRequest;
}
export interface UseGetBlockWithTxsQuery<TData> extends ReactQueryParams<GetBlockWithTxsResponse, TData> {
  request: GetBlockWithTxsRequest;
}
export interface UseTxDecodeQuery<TData> extends ReactQueryParams<TxDecodeResponse, TData> {
  request: TxDecodeRequest;
}
export interface UseTxEncodeQuery<TData> extends ReactQueryParams<TxEncodeResponse, TData> {
  request: TxEncodeRequest;
}
export interface UseTxEncodeAminoQuery<TData> extends ReactQueryParams<TxEncodeAminoResponse, TData> {
  request: TxEncodeAminoRequest;
}
export interface UseTxDecodeAminoQuery<TData> extends ReactQueryParams<TxDecodeAminoResponse, TData> {
  request: TxDecodeAminoRequest;
}
const _queryClients: WeakMap<ProtobufRpcClient, ServiceClientImpl> = new WeakMap();
const getQueryService = (rpc: ProtobufRpcClient | undefined): ServiceClientImpl | undefined => {
  if (!rpc) return;
  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }
  const queryService = new ServiceClientImpl(rpc);
  _queryClients.set(rpc, queryService);
  return queryService;
};
export const createRpcQueryHooks = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  const useSimulate = <TData = SimulateResponse,>({
    request,
    options
  }: UseSimulateQuery<TData>) => {
    return useQuery<SimulateResponse, Error, TData>(["simulateQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.simulate(request);
    }, options);
  };
  const useGetTx = <TData = GetTxResponse,>({
    request,
    options
  }: UseGetTxQuery<TData>) => {
    return useQuery<GetTxResponse, Error, TData>(["getTxQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getTx(request);
    }, options);
  };
  const useBroadcastTx = <TData = BroadcastTxResponse,>({
    request,
    options
  }: UseBroadcastTxQuery<TData>) => {
    return useQuery<BroadcastTxResponse, Error, TData>(["broadcastTxQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.broadcastTx(request);
    }, options);
  };
  const useGetTxsEvent = <TData = GetTxsEventResponse,>({
    request,
    options
  }: UseGetTxsEventQuery<TData>) => {
    return useQuery<GetTxsEventResponse, Error, TData>(["getTxsEventQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getTxsEvent(request);
    }, options);
  };
  const useGetBlockWithTxs = <TData = GetBlockWithTxsResponse,>({
    request,
    options
  }: UseGetBlockWithTxsQuery<TData>) => {
    return useQuery<GetBlockWithTxsResponse, Error, TData>(["getBlockWithTxsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getBlockWithTxs(request);
    }, options);
  };
  const useTxDecode = <TData = TxDecodeResponse,>({
    request,
    options
  }: UseTxDecodeQuery<TData>) => {
    return useQuery<TxDecodeResponse, Error, TData>(["txDecodeQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.txDecode(request);
    }, options);
  };
  const useTxEncode = <TData = TxEncodeResponse,>({
    request,
    options
  }: UseTxEncodeQuery<TData>) => {
    return useQuery<TxEncodeResponse, Error, TData>(["txEncodeQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.txEncode(request);
    }, options);
  };
  const useTxEncodeAmino = <TData = TxEncodeAminoResponse,>({
    request,
    options
  }: UseTxEncodeAminoQuery<TData>) => {
    return useQuery<TxEncodeAminoResponse, Error, TData>(["txEncodeAminoQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.txEncodeAmino(request);
    }, options);
  };
  const useTxDecodeAmino = <TData = TxDecodeAminoResponse,>({
    request,
    options
  }: UseTxDecodeAminoQuery<TData>) => {
    return useQuery<TxDecodeAminoResponse, Error, TData>(["txDecodeAminoQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.txDecodeAmino(request);
    }, options);
  };
  return {
    /** Simulate simulates executing a transaction for estimating gas usage. */useSimulate,
    /** GetTx fetches a tx by hash. */useGetTx,
    /** BroadcastTx broadcast transaction. */useBroadcastTx,
    /** GetTxsEvent fetches txs by event. */useGetTxsEvent,
    /**
     * GetBlockWithTxs fetches a block with decoded txs.
     * 
     * Since: cosmos-sdk 0.45.2
     */
    useGetBlockWithTxs,
    /**
     * TxDecode decodes the transaction.
     * 
     * Since: cosmos-sdk 0.47
     */
    useTxDecode,
    /**
     * TxEncode encodes the transaction.
     * 
     * Since: cosmos-sdk 0.47
     */
    useTxEncode,
    /**
     * TxEncodeAmino encodes an Amino transaction from JSON to encoded bytes.
     * 
     * Since: cosmos-sdk 0.47
     */
    useTxEncodeAmino,
    /**
     * TxDecodeAmino decodes an Amino transaction from encoded bytes to JSON.
     * 
     * Since: cosmos-sdk 0.47
     */
    useTxDecodeAmino
  };
};