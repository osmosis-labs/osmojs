//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
/** ===================== InstantiateMsg */
export interface InstantiateMsg {
  /**
   * pool_asset_denoms is the list of asset denoms that are initialized
   * at pool creation time.
   */
  poolAssetDenoms: string[];
}
export interface InstantiateMsgProtoMsg {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.InstantiateMsg";
  value: Uint8Array;
}
/** ===================== InstantiateMsg */
export interface InstantiateMsgAmino {
  /**
   * pool_asset_denoms is the list of asset denoms that are initialized
   * at pool creation time.
   */
  pool_asset_denoms?: string[];
}
export interface InstantiateMsgAminoMsg {
  type: "osmosis/cosmwasmpool/instantiate-msg";
  value: InstantiateMsgAmino;
}
/** ===================== InstantiateMsg */
export interface InstantiateMsgSDKType {
  pool_asset_denoms: string[];
}
function createBaseInstantiateMsg(): InstantiateMsg {
  return {
    poolAssetDenoms: []
  };
}
export const InstantiateMsg = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.InstantiateMsg",
  aminoType: "osmosis/cosmwasmpool/instantiate-msg",
  is(o: any): o is InstantiateMsg {
    return o && (o.$typeUrl === InstantiateMsg.typeUrl || Array.isArray(o.poolAssetDenoms) && (!o.poolAssetDenoms.length || typeof o.poolAssetDenoms[0] === "string"));
  },
  isSDK(o: any): o is InstantiateMsgSDKType {
    return o && (o.$typeUrl === InstantiateMsg.typeUrl || Array.isArray(o.pool_asset_denoms) && (!o.pool_asset_denoms.length || typeof o.pool_asset_denoms[0] === "string"));
  },
  isAmino(o: any): o is InstantiateMsgAmino {
    return o && (o.$typeUrl === InstantiateMsg.typeUrl || Array.isArray(o.pool_asset_denoms) && (!o.pool_asset_denoms.length || typeof o.pool_asset_denoms[0] === "string"));
  },
  encode(message: InstantiateMsg, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.poolAssetDenoms) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InstantiateMsg {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstantiateMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolAssetDenoms.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<InstantiateMsg>): InstantiateMsg {
    const message = createBaseInstantiateMsg();
    message.poolAssetDenoms = object.poolAssetDenoms?.map(e => e) || [];
    return message;
  },
  fromAmino(object: InstantiateMsgAmino): InstantiateMsg {
    const message = createBaseInstantiateMsg();
    message.poolAssetDenoms = object.pool_asset_denoms?.map(e => e) || [];
    return message;
  },
  toAmino(message: InstantiateMsg): InstantiateMsgAmino {
    const obj: any = {};
    if (message.poolAssetDenoms) {
      obj.pool_asset_denoms = message.poolAssetDenoms.map(e => e);
    } else {
      obj.pool_asset_denoms = message.poolAssetDenoms;
    }
    return obj;
  },
  fromAminoMsg(object: InstantiateMsgAminoMsg): InstantiateMsg {
    return InstantiateMsg.fromAmino(object.value);
  },
  toAminoMsg(message: InstantiateMsg): InstantiateMsgAminoMsg {
    return {
      type: "osmosis/cosmwasmpool/instantiate-msg",
      value: InstantiateMsg.toAmino(message)
    };
  },
  fromProtoMsg(message: InstantiateMsgProtoMsg): InstantiateMsg {
    return InstantiateMsg.decode(message.value);
  },
  toProto(message: InstantiateMsg): Uint8Array {
    return InstantiateMsg.encode(message).finish();
  },
  toProtoMsg(message: InstantiateMsg): InstantiateMsgProtoMsg {
    return {
      typeUrl: "/osmosis.cosmwasmpool.v1beta1.InstantiateMsg",
      value: InstantiateMsg.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(InstantiateMsg.typeUrl, InstantiateMsg);
GlobalDecoderRegistry.registerAminoProtoMapping(InstantiateMsg.aminoType, InstantiateMsg.typeUrl);