import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { RecoveredSinceDowntimeOfLengthRequest, RecoveredSinceDowntimeOfLengthResponse } from "./query";
export interface Query {
    recoveredSinceDowntimeOfLength(request: RecoveredSinceDowntimeOfLengthRequest): Promise<RecoveredSinceDowntimeOfLengthResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    recoveredSinceDowntimeOfLength(request: RecoveredSinceDowntimeOfLengthRequest): Promise<RecoveredSinceDowntimeOfLengthResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    recoveredSinceDowntimeOfLength(request: RecoveredSinceDowntimeOfLengthRequest): Promise<RecoveredSinceDowntimeOfLengthResponse>;
};
