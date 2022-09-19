import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryConnectionRequest, QueryConnectionResponseSDKType, QueryConnectionsRequest, QueryConnectionsResponseSDKType, QueryClientConnectionsRequest, QueryClientConnectionsResponseSDKType, QueryConnectionClientStateRequest, QueryConnectionClientStateResponseSDKType, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    connection(request: QueryConnectionRequest): Promise<QueryConnectionResponseSDKType>;
    connections(request?: QueryConnectionsRequest): Promise<QueryConnectionsResponseSDKType>;
    clientConnections(request: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponseSDKType>;
    connectionClientState(request: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponseSDKType>;
    connectionConsensusState(request: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    connection(request: QueryConnectionRequest): Promise<QueryConnectionResponseSDKType>;
    connections(request?: QueryConnectionsRequest): Promise<QueryConnectionsResponseSDKType>;
    clientConnections(request: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponseSDKType>;
    connectionClientState(request: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponseSDKType>;
    connectionConsensusState(request: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponseSDKType>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    connection(request: QueryConnectionRequest): Promise<QueryConnectionResponseSDKType>;
    connections(request?: QueryConnectionsRequest): Promise<QueryConnectionsResponseSDKType>;
    clientConnections(request: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponseSDKType>;
    connectionClientState(request: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponseSDKType>;
    connectionConsensusState(request: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponseSDKType>;
};
