import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { ModuleRoute, ModuleRouteAmino, ModuleRouteSDKType } from "./module_route";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params holds parameters for the poolmanager module */
export interface Params {
    poolCreationFee: Coin[];
}
export interface ParamsProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.Params";
    value: Uint8Array;
}
/** Params holds parameters for the poolmanager module */
export interface ParamsAmino {
    pool_creation_fee: CoinAmino[];
}
export interface ParamsAminoMsg {
    type: "osmosis/poolmanager/params";
    value: ParamsAmino;
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
export interface GenesisStateProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the poolmanager module's genesis state. */
export interface GenesisStateAmino {
    /** the next_pool_id */
    next_pool_id: string;
    /** params is the container of poolmanager parameters. */
    params?: ParamsAmino;
    /** pool_routes is the container of the mappings from pool id to pool type. */
    pool_routes: ModuleRouteAmino[];
}
export interface GenesisStateAminoMsg {
    type: "osmosis/poolmanager/genesis-state";
    value: GenesisStateAmino;
}
/** GenesisState defines the poolmanager module's genesis state. */
export interface GenesisStateSDKType {
    next_pool_id: Long;
    params?: ParamsSDKType;
    pool_routes: ModuleRouteSDKType[];
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    toAminoMsg(message: Params): ParamsAminoMsg;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    toAminoMsg(message: GenesisState): GenesisStateAminoMsg;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
