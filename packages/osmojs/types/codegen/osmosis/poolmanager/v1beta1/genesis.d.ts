import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { ModuleRoute, ModuleRouteSDKType } from "./module_route";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** Params holds parameters for the poolmanager module */
export interface Params {
    poolCreationFee: Coin[];
}
/** Params holds parameters for the poolmanager module */
export interface ParamsSDKType {
    pool_creation_fee: CoinSDKType[];
}
/** GenesisState defines the poolmanager module's genesis state. */
export interface GenesisState {
    /** the next_pool_id */
    nextPoolId: Long;
    /** params is the container of poolmanager parameters. */
    params?: Params;
    /** pool_routes is the container of the mappings from pool id to pool type. */
    poolRoutes: ModuleRoute[];
}
/** GenesisState defines the poolmanager module's genesis state. */
export interface GenesisStateSDKType {
    /** the next_pool_id */
    next_pool_id: Long;
    /** params is the container of poolmanager parameters. */
    params?: ParamsSDKType;
    /** pool_routes is the container of the mappings from pool id to pool type. */
    pool_routes: ModuleRouteSDKType[];
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
