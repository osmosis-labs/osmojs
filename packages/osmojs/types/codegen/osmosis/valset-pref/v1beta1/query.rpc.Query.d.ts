import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { UserValidatorPreferencesRequest, UserValidatorPreferencesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Returns the list of ValidatorPreferences for the user. */
    userValidatorPreferences(request: UserValidatorPreferencesRequest): Promise<UserValidatorPreferencesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    userValidatorPreferences(request: UserValidatorPreferencesRequest): Promise<UserValidatorPreferencesResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    userValidatorPreferences(request: UserValidatorPreferencesRequest): Promise<UserValidatorPreferencesResponse>;
};
