import { Rpc } from "../../../../helpers";
import { BinaryReader } from "../../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsResponse, QueryIncentivizedPacketRequest, QueryIncentivizedPacketResponse, QueryIncentivizedPacketsForChannelRequest, QueryIncentivizedPacketsForChannelResponse, QueryTotalRecvFeesRequest, QueryTotalRecvFeesResponse, QueryTotalAckFeesRequest, QueryTotalAckFeesResponse, QueryTotalTimeoutFeesRequest, QueryTotalTimeoutFeesResponse, QueryPayeeRequest, QueryPayeeResponse, QueryCounterpartyPayeeRequest, QueryCounterpartyPayeeResponse, QueryFeeEnabledChannelsRequest, QueryFeeEnabledChannelsResponse, QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelResponse } from "./query";
/** Query defines the ICS29 gRPC querier service. */
export interface Query {
  /** IncentivizedPackets returns all incentivized packets and their associated fees */
  incentivizedPackets(request: QueryIncentivizedPacketsRequest): Promise<QueryIncentivizedPacketsResponse>;
  /** IncentivizedPacket returns all packet fees for a packet given its identifier */
  incentivizedPacket(request: QueryIncentivizedPacketRequest): Promise<QueryIncentivizedPacketResponse>;
  /** Gets all incentivized packets for a specific channel */
  incentivizedPacketsForChannel(request: QueryIncentivizedPacketsForChannelRequest): Promise<QueryIncentivizedPacketsForChannelResponse>;
  /** TotalRecvFees returns the total receive fees for a packet given its identifier */
  totalRecvFees(request: QueryTotalRecvFeesRequest): Promise<QueryTotalRecvFeesResponse>;
  /** TotalAckFees returns the total acknowledgement fees for a packet given its identifier */
  totalAckFees(request: QueryTotalAckFeesRequest): Promise<QueryTotalAckFeesResponse>;
  /** TotalTimeoutFees returns the total timeout fees for a packet given its identifier */
  totalTimeoutFees(request: QueryTotalTimeoutFeesRequest): Promise<QueryTotalTimeoutFeesResponse>;
  /** Payee returns the registered payee address for a specific channel given the relayer address */
  payee(request: QueryPayeeRequest): Promise<QueryPayeeResponse>;
  /** CounterpartyPayee returns the registered counterparty payee for forward relaying */
  counterpartyPayee(request: QueryCounterpartyPayeeRequest): Promise<QueryCounterpartyPayeeResponse>;
  /** FeeEnabledChannels returns a list of all fee enabled channels */
  feeEnabledChannels(request: QueryFeeEnabledChannelsRequest): Promise<QueryFeeEnabledChannelsResponse>;
  /** FeeEnabledChannel returns true if the provided port and channel identifiers belong to a fee enabled channel */
  feeEnabledChannel(request: QueryFeeEnabledChannelRequest): Promise<QueryFeeEnabledChannelResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.incentivizedPackets = this.incentivizedPackets.bind(this);
    this.incentivizedPacket = this.incentivizedPacket.bind(this);
    this.incentivizedPacketsForChannel = this.incentivizedPacketsForChannel.bind(this);
    this.totalRecvFees = this.totalRecvFees.bind(this);
    this.totalAckFees = this.totalAckFees.bind(this);
    this.totalTimeoutFees = this.totalTimeoutFees.bind(this);
    this.payee = this.payee.bind(this);
    this.counterpartyPayee = this.counterpartyPayee.bind(this);
    this.feeEnabledChannels = this.feeEnabledChannels.bind(this);
    this.feeEnabledChannel = this.feeEnabledChannel.bind(this);
  }
  incentivizedPackets(request: QueryIncentivizedPacketsRequest): Promise<QueryIncentivizedPacketsResponse> {
    const data = QueryIncentivizedPacketsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "IncentivizedPackets", data);
    return promise.then(data => QueryIncentivizedPacketsResponse.decode(new BinaryReader(data)));
  }
  incentivizedPacket(request: QueryIncentivizedPacketRequest): Promise<QueryIncentivizedPacketResponse> {
    const data = QueryIncentivizedPacketRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "IncentivizedPacket", data);
    return promise.then(data => QueryIncentivizedPacketResponse.decode(new BinaryReader(data)));
  }
  incentivizedPacketsForChannel(request: QueryIncentivizedPacketsForChannelRequest): Promise<QueryIncentivizedPacketsForChannelResponse> {
    const data = QueryIncentivizedPacketsForChannelRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "IncentivizedPacketsForChannel", data);
    return promise.then(data => QueryIncentivizedPacketsForChannelResponse.decode(new BinaryReader(data)));
  }
  totalRecvFees(request: QueryTotalRecvFeesRequest): Promise<QueryTotalRecvFeesResponse> {
    const data = QueryTotalRecvFeesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "TotalRecvFees", data);
    return promise.then(data => QueryTotalRecvFeesResponse.decode(new BinaryReader(data)));
  }
  totalAckFees(request: QueryTotalAckFeesRequest): Promise<QueryTotalAckFeesResponse> {
    const data = QueryTotalAckFeesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "TotalAckFees", data);
    return promise.then(data => QueryTotalAckFeesResponse.decode(new BinaryReader(data)));
  }
  totalTimeoutFees(request: QueryTotalTimeoutFeesRequest): Promise<QueryTotalTimeoutFeesResponse> {
    const data = QueryTotalTimeoutFeesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "TotalTimeoutFees", data);
    return promise.then(data => QueryTotalTimeoutFeesResponse.decode(new BinaryReader(data)));
  }
  payee(request: QueryPayeeRequest): Promise<QueryPayeeResponse> {
    const data = QueryPayeeRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "Payee", data);
    return promise.then(data => QueryPayeeResponse.decode(new BinaryReader(data)));
  }
  counterpartyPayee(request: QueryCounterpartyPayeeRequest): Promise<QueryCounterpartyPayeeResponse> {
    const data = QueryCounterpartyPayeeRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "CounterpartyPayee", data);
    return promise.then(data => QueryCounterpartyPayeeResponse.decode(new BinaryReader(data)));
  }
  feeEnabledChannels(request: QueryFeeEnabledChannelsRequest): Promise<QueryFeeEnabledChannelsResponse> {
    const data = QueryFeeEnabledChannelsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "FeeEnabledChannels", data);
    return promise.then(data => QueryFeeEnabledChannelsResponse.decode(new BinaryReader(data)));
  }
  feeEnabledChannel(request: QueryFeeEnabledChannelRequest): Promise<QueryFeeEnabledChannelResponse> {
    const data = QueryFeeEnabledChannelRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "FeeEnabledChannel", data);
    return promise.then(data => QueryFeeEnabledChannelResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    incentivizedPackets(request: QueryIncentivizedPacketsRequest): Promise<QueryIncentivizedPacketsResponse> {
      return queryService.incentivizedPackets(request);
    },
    incentivizedPacket(request: QueryIncentivizedPacketRequest): Promise<QueryIncentivizedPacketResponse> {
      return queryService.incentivizedPacket(request);
    },
    incentivizedPacketsForChannel(request: QueryIncentivizedPacketsForChannelRequest): Promise<QueryIncentivizedPacketsForChannelResponse> {
      return queryService.incentivizedPacketsForChannel(request);
    },
    totalRecvFees(request: QueryTotalRecvFeesRequest): Promise<QueryTotalRecvFeesResponse> {
      return queryService.totalRecvFees(request);
    },
    totalAckFees(request: QueryTotalAckFeesRequest): Promise<QueryTotalAckFeesResponse> {
      return queryService.totalAckFees(request);
    },
    totalTimeoutFees(request: QueryTotalTimeoutFeesRequest): Promise<QueryTotalTimeoutFeesResponse> {
      return queryService.totalTimeoutFees(request);
    },
    payee(request: QueryPayeeRequest): Promise<QueryPayeeResponse> {
      return queryService.payee(request);
    },
    counterpartyPayee(request: QueryCounterpartyPayeeRequest): Promise<QueryCounterpartyPayeeResponse> {
      return queryService.counterpartyPayee(request);
    },
    feeEnabledChannels(request: QueryFeeEnabledChannelsRequest): Promise<QueryFeeEnabledChannelsResponse> {
      return queryService.feeEnabledChannels(request);
    },
    feeEnabledChannel(request: QueryFeeEnabledChannelRequest): Promise<QueryFeeEnabledChannelResponse> {
      return queryService.feeEnabledChannel(request);
    }
  };
};
export interface UseIncentivizedPacketsQuery<TData> extends ReactQueryParams<QueryIncentivizedPacketsResponse, TData> {
  request: QueryIncentivizedPacketsRequest;
}
export interface UseIncentivizedPacketQuery<TData> extends ReactQueryParams<QueryIncentivizedPacketResponse, TData> {
  request: QueryIncentivizedPacketRequest;
}
export interface UseIncentivizedPacketsForChannelQuery<TData> extends ReactQueryParams<QueryIncentivizedPacketsForChannelResponse, TData> {
  request: QueryIncentivizedPacketsForChannelRequest;
}
export interface UseTotalRecvFeesQuery<TData> extends ReactQueryParams<QueryTotalRecvFeesResponse, TData> {
  request: QueryTotalRecvFeesRequest;
}
export interface UseTotalAckFeesQuery<TData> extends ReactQueryParams<QueryTotalAckFeesResponse, TData> {
  request: QueryTotalAckFeesRequest;
}
export interface UseTotalTimeoutFeesQuery<TData> extends ReactQueryParams<QueryTotalTimeoutFeesResponse, TData> {
  request: QueryTotalTimeoutFeesRequest;
}
export interface UsePayeeQuery<TData> extends ReactQueryParams<QueryPayeeResponse, TData> {
  request: QueryPayeeRequest;
}
export interface UseCounterpartyPayeeQuery<TData> extends ReactQueryParams<QueryCounterpartyPayeeResponse, TData> {
  request: QueryCounterpartyPayeeRequest;
}
export interface UseFeeEnabledChannelsQuery<TData> extends ReactQueryParams<QueryFeeEnabledChannelsResponse, TData> {
  request: QueryFeeEnabledChannelsRequest;
}
export interface UseFeeEnabledChannelQuery<TData> extends ReactQueryParams<QueryFeeEnabledChannelResponse, TData> {
  request: QueryFeeEnabledChannelRequest;
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
  const useIncentivizedPackets = <TData = QueryIncentivizedPacketsResponse,>({
    request,
    options
  }: UseIncentivizedPacketsQuery<TData>) => {
    return useQuery<QueryIncentivizedPacketsResponse, Error, TData>(["incentivizedPacketsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.incentivizedPackets(request);
    }, options);
  };
  const useIncentivizedPacket = <TData = QueryIncentivizedPacketResponse,>({
    request,
    options
  }: UseIncentivizedPacketQuery<TData>) => {
    return useQuery<QueryIncentivizedPacketResponse, Error, TData>(["incentivizedPacketQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.incentivizedPacket(request);
    }, options);
  };
  const useIncentivizedPacketsForChannel = <TData = QueryIncentivizedPacketsForChannelResponse,>({
    request,
    options
  }: UseIncentivizedPacketsForChannelQuery<TData>) => {
    return useQuery<QueryIncentivizedPacketsForChannelResponse, Error, TData>(["incentivizedPacketsForChannelQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.incentivizedPacketsForChannel(request);
    }, options);
  };
  const useTotalRecvFees = <TData = QueryTotalRecvFeesResponse,>({
    request,
    options
  }: UseTotalRecvFeesQuery<TData>) => {
    return useQuery<QueryTotalRecvFeesResponse, Error, TData>(["totalRecvFeesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.totalRecvFees(request);
    }, options);
  };
  const useTotalAckFees = <TData = QueryTotalAckFeesResponse,>({
    request,
    options
  }: UseTotalAckFeesQuery<TData>) => {
    return useQuery<QueryTotalAckFeesResponse, Error, TData>(["totalAckFeesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.totalAckFees(request);
    }, options);
  };
  const useTotalTimeoutFees = <TData = QueryTotalTimeoutFeesResponse,>({
    request,
    options
  }: UseTotalTimeoutFeesQuery<TData>) => {
    return useQuery<QueryTotalTimeoutFeesResponse, Error, TData>(["totalTimeoutFeesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.totalTimeoutFees(request);
    }, options);
  };
  const usePayee = <TData = QueryPayeeResponse,>({
    request,
    options
  }: UsePayeeQuery<TData>) => {
    return useQuery<QueryPayeeResponse, Error, TData>(["payeeQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.payee(request);
    }, options);
  };
  const useCounterpartyPayee = <TData = QueryCounterpartyPayeeResponse,>({
    request,
    options
  }: UseCounterpartyPayeeQuery<TData>) => {
    return useQuery<QueryCounterpartyPayeeResponse, Error, TData>(["counterpartyPayeeQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.counterpartyPayee(request);
    }, options);
  };
  const useFeeEnabledChannels = <TData = QueryFeeEnabledChannelsResponse,>({
    request,
    options
  }: UseFeeEnabledChannelsQuery<TData>) => {
    return useQuery<QueryFeeEnabledChannelsResponse, Error, TData>(["feeEnabledChannelsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.feeEnabledChannels(request);
    }, options);
  };
  const useFeeEnabledChannel = <TData = QueryFeeEnabledChannelResponse,>({
    request,
    options
  }: UseFeeEnabledChannelQuery<TData>) => {
    return useQuery<QueryFeeEnabledChannelResponse, Error, TData>(["feeEnabledChannelQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.feeEnabledChannel(request);
    }, options);
  };
  return {
    /** IncentivizedPackets returns all incentivized packets and their associated fees */useIncentivizedPackets,
    /** IncentivizedPacket returns all packet fees for a packet given its identifier */useIncentivizedPacket,
    /** Gets all incentivized packets for a specific channel */useIncentivizedPacketsForChannel,
    /** TotalRecvFees returns the total receive fees for a packet given its identifier */useTotalRecvFees,
    /** TotalAckFees returns the total acknowledgement fees for a packet given its identifier */useTotalAckFees,
    /** TotalTimeoutFees returns the total timeout fees for a packet given its identifier */useTotalTimeoutFees,
    /** Payee returns the registered payee address for a specific channel given the relayer address */usePayee,
    /** CounterpartyPayee returns the registered counterparty payee for forward relaying */useCounterpartyPayee,
    /** FeeEnabledChannels returns a list of all fee enabled channels */useFeeEnabledChannels,
    /** FeeEnabledChannel returns true if the provided port and channel identifiers belong to a fee enabled channel */useFeeEnabledChannel
  };
};