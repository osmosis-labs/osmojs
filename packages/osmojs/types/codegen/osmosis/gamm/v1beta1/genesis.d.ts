import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { MigrationRecords, MigrationRecordsAmino, MigrationRecordsSDKType } from "./shared";
import { Pool as Pool1 } from "../../concentrated-liquidity/pool";
import { PoolProtoMsg as Pool1ProtoMsg } from "../../concentrated-liquidity/pool";
import { PoolSDKType as Pool1SDKType } from "../../concentrated-liquidity/pool";
import { CosmWasmPool, CosmWasmPoolProtoMsg, CosmWasmPoolSDKType } from "../../cosmwasmpool/v1beta1/model/pool";
import { Pool as Pool2 } from "../pool-models/balancer/balancerPool";
import { PoolProtoMsg as Pool2ProtoMsg } from "../pool-models/balancer/balancerPool";
import { PoolSDKType as Pool2SDKType } from "../pool-models/balancer/balancerPool";
import { Pool as Pool3 } from "../pool-models/stableswap/stableswap_pool";
import { PoolProtoMsg as Pool3ProtoMsg } from "../pool-models/stableswap/stableswap_pool";
import { PoolSDKType as Pool3SDKType } from "../pool-models/stableswap/stableswap_pool";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** Params holds parameters for the incentives module */
export interface Params {
    poolCreationFee: Coin[];
}
export interface ParamsProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.Params";
    value: Uint8Array;
}
/** Params holds parameters for the incentives module */
export interface ParamsAmino {
    pool_creation_fee: CoinAmino[];
}
export interface ParamsAminoMsg {
    type: "osmosis/gamm/params";
    value: ParamsAmino;
}
/** Params holds parameters for the incentives module */
export interface ParamsSDKType {
    pool_creation_fee: CoinSDKType[];
}
/** GenesisState defines the gamm module's genesis state. */
export interface GenesisState {
    pools: (Pool1 & CosmWasmPool & Pool2 & Pool3 & Any)[] | Any[];
    /** will be renamed to next_pool_id in an upcoming version */
    nextPoolNumber: bigint;
    params: Params;
    migrationRecords: MigrationRecords;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.GenesisState";
    value: Uint8Array;
}
export declare type GenesisStateEncoded = Omit<GenesisState, "pools"> & {
    pools: (Pool1ProtoMsg | CosmWasmPoolProtoMsg | Pool2ProtoMsg | Pool3ProtoMsg | AnyProtoMsg)[];
};
/** GenesisState defines the gamm module's genesis state. */
export interface GenesisStateAmino {
    pools: AnyAmino[];
    /** will be renamed to next_pool_id in an upcoming version */
    next_pool_number: string;
    params?: ParamsAmino;
    migration_records?: MigrationRecordsAmino;
}
export interface GenesisStateAminoMsg {
    type: "osmosis/gamm/genesis-state";
    value: GenesisStateAmino;
}
/** GenesisState defines the gamm module's genesis state. */
export interface GenesisStateSDKType {
    pools: (Pool1SDKType | CosmWasmPoolSDKType | Pool2SDKType | Pool3SDKType | AnySDKType)[];
    next_pool_number: bigint;
    params: ParamsSDKType;
    migration_records: MigrationRecordsSDKType;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
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
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    toAminoMsg(message: GenesisState): GenesisStateAminoMsg;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const PoolI_InterfaceDecoder: (input: BinaryReader | Uint8Array) => Pool1 | CosmWasmPool | Pool2 | Pool3 | Any;
export declare const PoolI_FromAmino: (content: AnyAmino) => Any;
export declare const PoolI_ToAmino: (content: Any) => AnyAmino;
