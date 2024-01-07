import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Pool as Pool1 } from "../../concentratedliquidity/v1beta1/pool";
import { PoolProtoMsg as Pool1ProtoMsg } from "../../concentratedliquidity/v1beta1/pool";
import { PoolSDKType as Pool1SDKType } from "../../concentratedliquidity/v1beta1/pool";
import { CosmWasmPool, CosmWasmPoolProtoMsg, CosmWasmPoolSDKType } from "./model/pool";
import { Pool as Pool2 } from "../../gamm/poolmodels/stableswap/v1beta1/stableswap_pool";
import { PoolProtoMsg as Pool2ProtoMsg } from "../../gamm/poolmodels/stableswap/v1beta1/stableswap_pool";
import { PoolSDKType as Pool2SDKType } from "../../gamm/poolmodels/stableswap/v1beta1/stableswap_pool";
import { Pool as Pool3 } from "../../gamm/v1beta1/balancerPool";
import { PoolProtoMsg as Pool3ProtoMsg } from "../../gamm/v1beta1/balancerPool";
import { PoolSDKType as Pool3SDKType } from "../../gamm/v1beta1/balancerPool";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet } from "../../../helpers";
/** =============================== ContractInfoByPoolId */
export interface ParamsRequest {}
export interface ParamsRequestProtoMsg {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.ParamsRequest";
  value: Uint8Array;
}
/** =============================== ContractInfoByPoolId */
export interface ParamsRequestAmino {}
export interface ParamsRequestAminoMsg {
  type: "osmosis/cosmwasmpool/params-request";
  value: ParamsRequestAmino;
}
/** =============================== ContractInfoByPoolId */
export interface ParamsRequestSDKType {}
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
  pagination?: PageRequest;
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
  pagination?: PageRequestSDKType;
}
export interface PoolsResponse {
  pools: (Pool1 | CosmWasmPool | Pool2 | Pool3 | Any)[] | Any[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface PoolsResponseProtoMsg {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.PoolsResponse";
  value: Uint8Array;
}
export type PoolsResponseEncoded = Omit<PoolsResponse, "pools"> & {
  pools: (Pool1ProtoMsg | CosmWasmPoolProtoMsg | Pool2ProtoMsg | Pool3ProtoMsg | AnyProtoMsg)[];
};
export interface PoolsResponseAmino {
  pools?: AnyAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface PoolsResponseAminoMsg {
  type: "osmosis/cosmwasmpool/pools-response";
  value: PoolsResponseAmino;
}
export interface PoolsResponseSDKType {
  pools: (Pool1SDKType | CosmWasmPoolSDKType | Pool2SDKType | Pool3SDKType | AnySDKType)[];
  pagination?: PageResponseSDKType;
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
  pool_id?: string;
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
  contract_address?: string;
  /** code_id is the code id of the requested pool id. */
  code_id?: string;
}
export interface ContractInfoByPoolIdResponseAminoMsg {
  type: "osmosis/cosmwasmpool/contract-info-by-pool-id-response";
  value: ContractInfoByPoolIdResponseAmino;
}
export interface ContractInfoByPoolIdResponseSDKType {
  contract_address: string;
  code_id: bigint;
}
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.ParamsRequest",
  aminoType: "osmosis/cosmwasmpool/params-request",
  is(o: any): o is ParamsRequest {
    return o && o.$typeUrl === ParamsRequest.typeUrl;
  },
  isSDK(o: any): o is ParamsRequestSDKType {
    return o && o.$typeUrl === ParamsRequest.typeUrl;
  },
  isAmino(o: any): o is ParamsRequestAmino {
    return o && o.$typeUrl === ParamsRequest.typeUrl;
  },
  encode(_: ParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): ParamsRequest {
    return {};
  },
  toJSON(_: ParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<ParamsRequest>): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
  fromAmino(_: ParamsRequestAmino): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
  toAmino(_: ParamsRequest): ParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ParamsRequestAminoMsg): ParamsRequest {
    return ParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ParamsRequest): ParamsRequestAminoMsg {
    return {
      type: "osmosis/cosmwasmpool/params-request",
      value: ParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsRequestProtoMsg): ParamsRequest {
    return ParamsRequest.decode(message.value);
  },
  toProto(message: ParamsRequest): Uint8Array {
    return ParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: ParamsRequest): ParamsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.cosmwasmpool.v1beta1.ParamsRequest",
      value: ParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ParamsRequest.typeUrl, ParamsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ParamsRequest.aminoType, ParamsRequest.typeUrl);
function createBaseParamsResponse(): ParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const ParamsResponse = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.ParamsResponse",
  aminoType: "osmosis/cosmwasmpool/params-response",
  is(o: any): o is ParamsResponse {
    return o && (o.$typeUrl === ParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is ParamsResponseSDKType {
    return o && (o.$typeUrl === ParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is ParamsResponseAmino {
    return o && (o.$typeUrl === ParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: ParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: ParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ParamsResponse>): ParamsResponse {
    const message = createBaseParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: ParamsResponseAmino): ParamsResponse {
    const message = createBaseParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: ParamsResponse): ParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsResponseAminoMsg): ParamsResponse {
    return ParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ParamsResponse): ParamsResponseAminoMsg {
    return {
      type: "osmosis/cosmwasmpool/params-response",
      value: ParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsResponseProtoMsg): ParamsResponse {
    return ParamsResponse.decode(message.value);
  },
  toProto(message: ParamsResponse): Uint8Array {
    return ParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: ParamsResponse): ParamsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.cosmwasmpool.v1beta1.ParamsResponse",
      value: ParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ParamsResponse.typeUrl, ParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ParamsResponse.aminoType, ParamsResponse.typeUrl);
function createBasePoolsRequest(): PoolsRequest {
  return {
    pagination: undefined
  };
}
export const PoolsRequest = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.PoolsRequest",
  aminoType: "osmosis/cosmwasmpool/pools-request",
  is(o: any): o is PoolsRequest {
    return o && o.$typeUrl === PoolsRequest.typeUrl;
  },
  isSDK(o: any): o is PoolsRequestSDKType {
    return o && o.$typeUrl === PoolsRequest.typeUrl;
  },
  isAmino(o: any): o is PoolsRequestAmino {
    return o && o.$typeUrl === PoolsRequest.typeUrl;
  },
  encode(message: PoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: PoolsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<PoolsRequest>): PoolsRequest {
    const message = createBasePoolsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: PoolsRequestAmino): PoolsRequest {
    const message = createBasePoolsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: PoolsRequest): PoolsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolsRequestAminoMsg): PoolsRequest {
    return PoolsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: PoolsRequest): PoolsRequestAminoMsg {
    return {
      type: "osmosis/cosmwasmpool/pools-request",
      value: PoolsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: PoolsRequestProtoMsg): PoolsRequest {
    return PoolsRequest.decode(message.value);
  },
  toProto(message: PoolsRequest): Uint8Array {
    return PoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: PoolsRequest): PoolsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.cosmwasmpool.v1beta1.PoolsRequest",
      value: PoolsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PoolsRequest.typeUrl, PoolsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(PoolsRequest.aminoType, PoolsRequest.typeUrl);
function createBasePoolsResponse(): PoolsResponse {
  return {
    pools: [],
    pagination: undefined
  };
}
export const PoolsResponse = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.PoolsResponse",
  aminoType: "osmosis/cosmwasmpool/pools-response",
  is(o: any): o is PoolsResponse {
    return o && (o.$typeUrl === PoolsResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || Pool1.is(o.pools[0]) || CosmWasmPool.is(o.pools[0]) || Pool2.is(o.pools[0]) || Pool3.is(o.pools[0]) || Any.is(o.pools[0])));
  },
  isSDK(o: any): o is PoolsResponseSDKType {
    return o && (o.$typeUrl === PoolsResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || Pool1.isSDK(o.pools[0]) || CosmWasmPool.isSDK(o.pools[0]) || Pool2.isSDK(o.pools[0]) || Pool3.isSDK(o.pools[0]) || Any.isSDK(o.pools[0])));
  },
  isAmino(o: any): o is PoolsResponseAmino {
    return o && (o.$typeUrl === PoolsResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || Pool1.isAmino(o.pools[0]) || CosmWasmPool.isAmino(o.pools[0]) || Pool2.isAmino(o.pools[0]) || Pool3.isAmino(o.pools[0]) || Any.isAmino(o.pools[0])));
  },
  encode(message: PoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      Any.encode(GlobalDecoderRegistry.wrapAny(v!), writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(GlobalDecoderRegistry.unwrapAny(reader));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolsResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => GlobalDecoderRegistry.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: PoolsResponse): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? GlobalDecoderRegistry.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<PoolsResponse>): PoolsResponse {
    const message = createBasePoolsResponse();
    message.pools = object.pools?.map(e => (Any.fromPartial(e) as any)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: PoolsResponseAmino): PoolsResponse {
    const message = createBasePoolsResponse();
    message.pools = object.pools?.map(e => GlobalDecoderRegistry.fromAminoMsg(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: PoolsResponse): PoolsResponseAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined);
    } else {
      obj.pools = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolsResponseAminoMsg): PoolsResponse {
    return PoolsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: PoolsResponse): PoolsResponseAminoMsg {
    return {
      type: "osmosis/cosmwasmpool/pools-response",
      value: PoolsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: PoolsResponseProtoMsg): PoolsResponse {
    return PoolsResponse.decode(message.value);
  },
  toProto(message: PoolsResponse): Uint8Array {
    return PoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: PoolsResponse): PoolsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.cosmwasmpool.v1beta1.PoolsResponse",
      value: PoolsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PoolsResponse.typeUrl, PoolsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(PoolsResponse.aminoType, PoolsResponse.typeUrl);
function createBaseContractInfoByPoolIdRequest(): ContractInfoByPoolIdRequest {
  return {
    poolId: BigInt(0)
  };
}
export const ContractInfoByPoolIdRequest = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.ContractInfoByPoolIdRequest",
  aminoType: "osmosis/cosmwasmpool/contract-info-by-pool-id-request",
  is(o: any): o is ContractInfoByPoolIdRequest {
    return o && (o.$typeUrl === ContractInfoByPoolIdRequest.typeUrl || typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is ContractInfoByPoolIdRequestSDKType {
    return o && (o.$typeUrl === ContractInfoByPoolIdRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is ContractInfoByPoolIdRequestAmino {
    return o && (o.$typeUrl === ContractInfoByPoolIdRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  encode(message: ContractInfoByPoolIdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContractInfoByPoolIdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractInfoByPoolIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ContractInfoByPoolIdRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: ContractInfoByPoolIdRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<ContractInfoByPoolIdRequest>): ContractInfoByPoolIdRequest {
    const message = createBaseContractInfoByPoolIdRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ContractInfoByPoolIdRequestAmino): ContractInfoByPoolIdRequest {
    const message = createBaseContractInfoByPoolIdRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: ContractInfoByPoolIdRequest): ContractInfoByPoolIdRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ContractInfoByPoolIdRequestAminoMsg): ContractInfoByPoolIdRequest {
    return ContractInfoByPoolIdRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ContractInfoByPoolIdRequest): ContractInfoByPoolIdRequestAminoMsg {
    return {
      type: "osmosis/cosmwasmpool/contract-info-by-pool-id-request",
      value: ContractInfoByPoolIdRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ContractInfoByPoolIdRequestProtoMsg): ContractInfoByPoolIdRequest {
    return ContractInfoByPoolIdRequest.decode(message.value);
  },
  toProto(message: ContractInfoByPoolIdRequest): Uint8Array {
    return ContractInfoByPoolIdRequest.encode(message).finish();
  },
  toProtoMsg(message: ContractInfoByPoolIdRequest): ContractInfoByPoolIdRequestProtoMsg {
    return {
      typeUrl: "/osmosis.cosmwasmpool.v1beta1.ContractInfoByPoolIdRequest",
      value: ContractInfoByPoolIdRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ContractInfoByPoolIdRequest.typeUrl, ContractInfoByPoolIdRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ContractInfoByPoolIdRequest.aminoType, ContractInfoByPoolIdRequest.typeUrl);
function createBaseContractInfoByPoolIdResponse(): ContractInfoByPoolIdResponse {
  return {
    contractAddress: "",
    codeId: BigInt(0)
  };
}
export const ContractInfoByPoolIdResponse = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.ContractInfoByPoolIdResponse",
  aminoType: "osmosis/cosmwasmpool/contract-info-by-pool-id-response",
  is(o: any): o is ContractInfoByPoolIdResponse {
    return o && (o.$typeUrl === ContractInfoByPoolIdResponse.typeUrl || typeof o.contractAddress === "string" && typeof o.codeId === "bigint");
  },
  isSDK(o: any): o is ContractInfoByPoolIdResponseSDKType {
    return o && (o.$typeUrl === ContractInfoByPoolIdResponse.typeUrl || typeof o.contract_address === "string" && typeof o.code_id === "bigint");
  },
  isAmino(o: any): o is ContractInfoByPoolIdResponseAmino {
    return o && (o.$typeUrl === ContractInfoByPoolIdResponse.typeUrl || typeof o.contract_address === "string" && typeof o.code_id === "bigint");
  },
  encode(message: ContractInfoByPoolIdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(16).uint64(message.codeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContractInfoByPoolIdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractInfoByPoolIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.codeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ContractInfoByPoolIdResponse {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0)
    };
  },
  toJSON(message: ContractInfoByPoolIdResponse): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<ContractInfoByPoolIdResponse>): ContractInfoByPoolIdResponse {
    const message = createBaseContractInfoByPoolIdResponse();
    message.contractAddress = object.contractAddress ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ContractInfoByPoolIdResponseAmino): ContractInfoByPoolIdResponse {
    const message = createBaseContractInfoByPoolIdResponse();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    return message;
  },
  toAmino(message: ContractInfoByPoolIdResponse): ContractInfoByPoolIdResponseAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ContractInfoByPoolIdResponseAminoMsg): ContractInfoByPoolIdResponse {
    return ContractInfoByPoolIdResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ContractInfoByPoolIdResponse): ContractInfoByPoolIdResponseAminoMsg {
    return {
      type: "osmosis/cosmwasmpool/contract-info-by-pool-id-response",
      value: ContractInfoByPoolIdResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ContractInfoByPoolIdResponseProtoMsg): ContractInfoByPoolIdResponse {
    return ContractInfoByPoolIdResponse.decode(message.value);
  },
  toProto(message: ContractInfoByPoolIdResponse): Uint8Array {
    return ContractInfoByPoolIdResponse.encode(message).finish();
  },
  toProtoMsg(message: ContractInfoByPoolIdResponse): ContractInfoByPoolIdResponseProtoMsg {
    return {
      typeUrl: "/osmosis.cosmwasmpool.v1beta1.ContractInfoByPoolIdResponse",
      value: ContractInfoByPoolIdResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ContractInfoByPoolIdResponse.typeUrl, ContractInfoByPoolIdResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ContractInfoByPoolIdResponse.aminoType, ContractInfoByPoolIdResponse.typeUrl);