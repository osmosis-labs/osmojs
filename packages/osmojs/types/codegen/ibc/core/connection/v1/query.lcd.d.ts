import { LCDClient } from "@osmonauts/lcd";
import { QueryConnectionRequest, QueryConnectionResponse, QueryConnectionsRequest, QueryConnectionsResponse, QueryClientConnectionsRequest, QueryClientConnectionsResponse, QueryConnectionClientStateRequest, QueryConnectionClientStateResponse, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    connection(params: QueryConnectionRequest): Promise<QueryConnectionResponse>;
    connections(params?: QueryConnectionsRequest): Promise<QueryConnectionsResponse>;
    clientConnections(params: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponse>;
    connectionClientState(params: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponse>;
    connectionConsensusState(params: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponse>;
}
