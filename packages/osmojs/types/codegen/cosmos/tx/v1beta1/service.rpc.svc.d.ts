import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { SimulateRequest, SimulateResponseSDKType, GetTxRequest, GetTxResponseSDKType, BroadcastTxRequest, BroadcastTxResponseSDKType, GetTxsEventRequest, GetTxsEventResponseSDKType, GetBlockWithTxsRequest, GetBlockWithTxsResponseSDKType } from "./service";
/** Service defines the RPC service */
export interface Service {
    simulate(request: SimulateRequest): Promise<SimulateResponseSDKType>;
    getTx(request: GetTxRequest): Promise<GetTxResponseSDKType>;
    broadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponseSDKType>;
    getTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponseSDKType>;
    getBlockWithTxs(request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponseSDKType>;
}
export declare class QueryClientImpl implements Service {
    private readonly rpc;
    constructor(rpc: Rpc);
    simulate(request: SimulateRequest): Promise<SimulateResponseSDKType>;
    getTx(request: GetTxRequest): Promise<GetTxResponseSDKType>;
    broadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponseSDKType>;
    getTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponseSDKType>;
    getBlockWithTxs(request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponseSDKType>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    simulate(request: SimulateRequest): Promise<SimulateResponseSDKType>;
    getTx(request: GetTxRequest): Promise<GetTxResponseSDKType>;
    broadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponseSDKType>;
    getTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponseSDKType>;
    getBlockWithTxs(request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponseSDKType>;
};
