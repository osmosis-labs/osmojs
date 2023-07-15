import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Pool as Pool1 } from "../../concentrated-liquidity/pool";
import { PoolProtoMsg as Pool1ProtoMsg } from "../../concentrated-liquidity/pool";
import { PoolSDKType as Pool1SDKType } from "../../concentrated-liquidity/pool";
import { CosmWasmPool, CosmWasmPoolProtoMsg, CosmWasmPoolSDKType } from "./model/pool";
import { Pool as Pool2 } from "../../gamm/pool-models/balancer/balancerPool";
import { PoolProtoMsg as Pool2ProtoMsg } from "../../gamm/pool-models/balancer/balancerPool";
import { PoolSDKType as Pool2SDKType } from "../../gamm/pool-models/balancer/balancerPool";
import { Pool as Pool3 } from "../../gamm/pool-models/stableswap/stableswap_pool";
import { PoolProtoMsg as Pool3ProtoMsg } from "../../gamm/pool-models/stableswap/stableswap_pool";
import { PoolSDKType as Pool3SDKType } from "../../gamm/pool-models/stableswap/stableswap_pool";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the cosmwasmpool module's genesis state. */
export interface GenesisState {
    /** params is the container of cosmwasmpool parameters. */
    params?: Params;
    pools: (Pool1 & CosmWasmPool & Pool2 & Pool3 & Any)[] | Any[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.GenesisState";
    value: Uint8Array;
}
export type GenesisStateEncoded = Omit<GenesisState, "pools"> & {
    pools: (Pool1ProtoMsg | CosmWasmPoolProtoMsg | Pool2ProtoMsg | Pool3ProtoMsg | AnyProtoMsg)[];
};
/** GenesisState defines the cosmwasmpool module's genesis state. */
export interface GenesisStateAmino {
    /** params is the container of cosmwasmpool parameters. */
    params?: ParamsAmino;
    pools: AnyAmino[];
}
export interface GenesisStateAminoMsg {
    type: "osmosis/cosmwasmpool/genesis-state";
    value: GenesisStateAmino;
}
/** GenesisState defines the cosmwasmpool module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    pools: (Pool1SDKType | CosmWasmPoolSDKType | Pool2SDKType | Pool3SDKType | AnySDKType)[];
}
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
export declare const PoolI_InterfaceDecoder: (input: _m0.Reader | Uint8Array) => Pool1 | CosmWasmPool | Pool2 | Pool3 | Any;
export declare const PoolI_FromAmino: (content: AnyAmino) => Any;
export declare const PoolI_ToAmino: (content: Any) => AnyAmino;
