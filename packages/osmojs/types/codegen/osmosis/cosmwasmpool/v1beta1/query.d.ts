import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
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
import { BinaryReader, BinaryWriter } from "../../../binary";
/** =============================== ContractInfoByPoolId */
export interface ParamsRequest {
}
export interface ParamsRequestProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.ParamsRequest";
    value: Uint8Array;
}
/** =============================== ContractInfoByPoolId */
export interface ParamsRequestAmino {
}
export interface ParamsRequestAminoMsg {
    type: "osmosis/cosmwasmpool/params-request";
    value: ParamsRequestAmino;
}
/** =============================== ContractInfoByPoolId */
export interface ParamsRequestSDKType {
}
export interface ParamsResponse {
    params: Params;
}
export interface ParamsResponseProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.ParamsResponse";
    value: Uint8Array;
}
export interface ParamsResponseAmino {
    params?: ParamsAmino;
}
export interface ParamsResponseAminoMsg {
    type: "osmosis/cosmwasmpool/params-response";
    value: ParamsResponseAmino;
}
export interface ParamsResponseSDKType {
    params: ParamsSDKType;
}
/** =============================== Pools */
export interface PoolsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
export interface PoolsRequestProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.PoolsRequest";
    value: Uint8Array;
}
/** =============================== Pools */
export interface PoolsRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface PoolsRequestAminoMsg {
    type: "osmosis/cosmwasmpool/pools-request";
    value: PoolsRequestAmino;
}
/** =============================== Pools */
export interface PoolsRequestSDKType {
    pagination: PageRequestSDKType;
}
export interface PoolsResponse {
    pools: (Pool1 & CosmWasmPool & Pool2 & Pool3 & Any)[] | Any[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface PoolsResponseProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.PoolsResponse";
    value: Uint8Array;
}
export declare type PoolsResponseEncoded = Omit<PoolsResponse, "pools"> & {
    pools: (Pool1ProtoMsg | CosmWasmPoolProtoMsg | Pool2ProtoMsg | Pool3ProtoMsg | AnyProtoMsg)[];
};
export interface PoolsResponseAmino {
    pools: AnyAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface PoolsResponseAminoMsg {
    type: "osmosis/cosmwasmpool/pools-response";
    value: PoolsResponseAmino;
}
export interface PoolsResponseSDKType {
    pools: (Pool1SDKType | CosmWasmPoolSDKType | Pool2SDKType | Pool3SDKType | AnySDKType)[];
    pagination: PageResponseSDKType;
}
/** =============================== ContractInfoByPoolId */
export interface ContractInfoByPoolIdRequest {
    /** pool_id is the pool id of the requested pool. */
    poolId: bigint;
}
export interface ContractInfoByPoolIdRequestProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.ContractInfoByPoolIdRequest";
    value: Uint8Array;
}
/** =============================== ContractInfoByPoolId */
export interface ContractInfoByPoolIdRequestAmino {
    /** pool_id is the pool id of the requested pool. */
    pool_id: string;
}
export interface ContractInfoByPoolIdRequestAminoMsg {
    type: "osmosis/cosmwasmpool/contract-info-by-pool-id-request";
    value: ContractInfoByPoolIdRequestAmino;
}
/** =============================== ContractInfoByPoolId */
export interface ContractInfoByPoolIdRequestSDKType {
    pool_id: bigint;
}
export interface ContractInfoByPoolIdResponse {
    /**
     * contract_address is the pool address and contract address
     * of the requested pool id.
     */
    contractAddress: string;
    /** code_id is the code id of the requested pool id. */
    codeId: bigint;
}
export interface ContractInfoByPoolIdResponseProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.ContractInfoByPoolIdResponse";
    value: Uint8Array;
}
export interface ContractInfoByPoolIdResponseAmino {
    /**
     * contract_address is the pool address and contract address
     * of the requested pool id.
     */
    contract_address: string;
    /** code_id is the code id of the requested pool id. */
    code_id: string;
}
export interface ContractInfoByPoolIdResponseAminoMsg {
    type: "osmosis/cosmwasmpool/contract-info-by-pool-id-response";
    value: ContractInfoByPoolIdResponseAmino;
}
export interface ContractInfoByPoolIdResponseSDKType {
    contract_address: string;
    code_id: bigint;
}
export declare const ParamsRequest: {
    typeUrl: string;
    encode(_: ParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ParamsRequest;
    fromPartial(_: Partial<ParamsRequest>): ParamsRequest;
    fromAmino(_: ParamsRequestAmino): ParamsRequest;
    toAmino(_: ParamsRequest): ParamsRequestAmino;
    fromAminoMsg(object: ParamsRequestAminoMsg): ParamsRequest;
    toAminoMsg(message: ParamsRequest): ParamsRequestAminoMsg;
    fromProtoMsg(message: ParamsRequestProtoMsg): ParamsRequest;
    toProto(message: ParamsRequest): Uint8Array;
    toProtoMsg(message: ParamsRequest): ParamsRequestProtoMsg;
};
export declare const ParamsResponse: {
    typeUrl: string;
    encode(message: ParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ParamsResponse;
    fromPartial(object: Partial<ParamsResponse>): ParamsResponse;
    fromAmino(object: ParamsResponseAmino): ParamsResponse;
    toAmino(message: ParamsResponse): ParamsResponseAmino;
    fromAminoMsg(object: ParamsResponseAminoMsg): ParamsResponse;
    toAminoMsg(message: ParamsResponse): ParamsResponseAminoMsg;
    fromProtoMsg(message: ParamsResponseProtoMsg): ParamsResponse;
    toProto(message: ParamsResponse): Uint8Array;
    toProtoMsg(message: ParamsResponse): ParamsResponseProtoMsg;
};
export declare const PoolsRequest: {
    typeUrl: string;
    encode(message: PoolsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolsRequest;
    fromPartial(object: Partial<PoolsRequest>): PoolsRequest;
    fromAmino(object: PoolsRequestAmino): PoolsRequest;
    toAmino(message: PoolsRequest): PoolsRequestAmino;
    fromAminoMsg(object: PoolsRequestAminoMsg): PoolsRequest;
    toAminoMsg(message: PoolsRequest): PoolsRequestAminoMsg;
    fromProtoMsg(message: PoolsRequestProtoMsg): PoolsRequest;
    toProto(message: PoolsRequest): Uint8Array;
    toProtoMsg(message: PoolsRequest): PoolsRequestProtoMsg;
};
export declare const PoolsResponse: {
    typeUrl: string;
    encode(message: PoolsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolsResponse;
    fromPartial(object: Partial<PoolsResponse>): PoolsResponse;
    fromAmino(object: PoolsResponseAmino): PoolsResponse;
    toAmino(message: PoolsResponse): PoolsResponseAmino;
    fromAminoMsg(object: PoolsResponseAminoMsg): PoolsResponse;
    toAminoMsg(message: PoolsResponse): PoolsResponseAminoMsg;
    fromProtoMsg(message: PoolsResponseProtoMsg): PoolsResponse;
    toProto(message: PoolsResponse): Uint8Array;
    toProtoMsg(message: PoolsResponse): PoolsResponseProtoMsg;
};
export declare const ContractInfoByPoolIdRequest: {
    typeUrl: string;
    encode(message: ContractInfoByPoolIdRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ContractInfoByPoolIdRequest;
    fromPartial(object: Partial<ContractInfoByPoolIdRequest>): ContractInfoByPoolIdRequest;
    fromAmino(object: ContractInfoByPoolIdRequestAmino): ContractInfoByPoolIdRequest;
    toAmino(message: ContractInfoByPoolIdRequest): ContractInfoByPoolIdRequestAmino;
    fromAminoMsg(object: ContractInfoByPoolIdRequestAminoMsg): ContractInfoByPoolIdRequest;
    toAminoMsg(message: ContractInfoByPoolIdRequest): ContractInfoByPoolIdRequestAminoMsg;
    fromProtoMsg(message: ContractInfoByPoolIdRequestProtoMsg): ContractInfoByPoolIdRequest;
    toProto(message: ContractInfoByPoolIdRequest): Uint8Array;
    toProtoMsg(message: ContractInfoByPoolIdRequest): ContractInfoByPoolIdRequestProtoMsg;
};
export declare const ContractInfoByPoolIdResponse: {
    typeUrl: string;
    encode(message: ContractInfoByPoolIdResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ContractInfoByPoolIdResponse;
    fromPartial(object: Partial<ContractInfoByPoolIdResponse>): ContractInfoByPoolIdResponse;
    fromAmino(object: ContractInfoByPoolIdResponseAmino): ContractInfoByPoolIdResponse;
    toAmino(message: ContractInfoByPoolIdResponse): ContractInfoByPoolIdResponseAmino;
    fromAminoMsg(object: ContractInfoByPoolIdResponseAminoMsg): ContractInfoByPoolIdResponse;
    toAminoMsg(message: ContractInfoByPoolIdResponse): ContractInfoByPoolIdResponseAminoMsg;
    fromProtoMsg(message: ContractInfoByPoolIdResponseProtoMsg): ContractInfoByPoolIdResponse;
    toProto(message: ContractInfoByPoolIdResponse): Uint8Array;
    toProtoMsg(message: ContractInfoByPoolIdResponse): ContractInfoByPoolIdResponseProtoMsg;
};
export declare const PoolI_InterfaceDecoder: (input: BinaryReader | Uint8Array) => Pool1 | CosmWasmPool | Pool2 | Pool3 | Any;
export declare const PoolI_FromAmino: (content: AnyAmino) => Any;
export declare const PoolI_ToAmino: (content: Any) => AnyAmino;
