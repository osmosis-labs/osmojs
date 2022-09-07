import { LCDClient } from "@osmonauts/lcd";
import { QueryClientStateRequest, QueryClientStateResponse, QueryClientStatesRequest, QueryClientStatesResponse, QueryConsensusStateRequest, QueryConsensusStateResponse, QueryConsensusStatesRequest, QueryConsensusStatesResponse, QueryClientStatusRequest, QueryClientStatusResponse, QueryClientParamsRequest, QueryClientParamsResponse, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    clientState(params: QueryClientStateRequest): Promise<QueryClientStateResponse>;
    clientStates(params?: QueryClientStatesRequest): Promise<QueryClientStatesResponse>;
    consensusState(params: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse>;
    consensusStates(params: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponse>;
    clientStatus(params: QueryClientStatusRequest): Promise<QueryClientStatusResponse>;
    clientParams(_params?: QueryClientParamsRequest): Promise<QueryClientParamsResponse>;
    upgradedClientState(_params?: QueryUpgradedClientStateRequest): Promise<QueryUpgradedClientStateResponse>;
    upgradedConsensusState(_params?: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse>;
}
