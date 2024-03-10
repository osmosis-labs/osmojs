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
/** GenesisState defines the cosmwasmpool module's genesis state. */
export interface GenesisState {
  /** params is the container of cosmwasmpool parameters. */
  params: Params;
  pools: (Pool1 | CosmWasmPool | Pool2 | Pool3 | Any)[] | Any[];
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
  pools?: AnyAmino[];
}
export interface GenesisStateAminoMsg {
  type: "osmosis/cosmwasmpool/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the cosmwasmpool module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  pools: (Pool1SDKType | CosmWasmPoolSDKType | Pool2SDKType | Pool3SDKType | AnySDKType)[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    pools: []
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.GenesisState",
  aminoType: "osmosis/cosmwasmpool/genesis-state",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.pools) && (!o.pools.length || Pool1.is(o.pools[0]) || CosmWasmPool.is(o.pools[0]) || Pool2.is(o.pools[0]) || Pool3.is(o.pools[0]) || Any.is(o.pools[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.pools) && (!o.pools.length || Pool1.isSDK(o.pools[0]) || CosmWasmPool.isSDK(o.pools[0]) || Pool2.isSDK(o.pools[0]) || Pool3.isSDK(o.pools[0]) || Any.isSDK(o.pools[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.pools) && (!o.pools.length || Pool1.isAmino(o.pools[0]) || CosmWasmPool.isAmino(o.pools[0]) || Pool2.isAmino(o.pools[0]) || Pool3.isAmino(o.pools[0]) || Any.isAmino(o.pools[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.pools) {
      Any.encode(GlobalDecoderRegistry.wrapAny(v!), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.pools.push(GlobalDecoderRegistry.unwrapAny(reader));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.pools = object.pools?.map(e => (GlobalDecoderRegistry.fromPartial(e) as any)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.pools = object.pools?.map(e => GlobalDecoderRegistry.fromAminoMsg(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined);
    } else {
      obj.pools = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "osmosis/cosmwasmpool/genesis-state",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/osmosis.cosmwasmpool.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState.aminoType, GenesisState.typeUrl);