//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export interface TrackedVolume {
  amount: Coin[];
}
export interface TrackedVolumeProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.TrackedVolume";
  value: Uint8Array;
}
export interface TrackedVolumeAmino {
  amount?: CoinAmino[];
}
export interface TrackedVolumeAminoMsg {
  type: "osmosis/poolmanager/tracked-volume";
  value: TrackedVolumeAmino;
}
export interface TrackedVolumeSDKType {
  amount: CoinSDKType[];
}
function createBaseTrackedVolume(): TrackedVolume {
  return {
    amount: []
  };
}
export const TrackedVolume = {
  typeUrl: "/osmosis.poolmanager.v1beta1.TrackedVolume",
  aminoType: "osmosis/poolmanager/tracked-volume",
  is(o: any): o is TrackedVolume {
    return o && (o.$typeUrl === TrackedVolume.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])));
  },
  isSDK(o: any): o is TrackedVolumeSDKType {
    return o && (o.$typeUrl === TrackedVolume.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.isSDK(o.amount[0])));
  },
  isAmino(o: any): o is TrackedVolumeAmino {
    return o && (o.$typeUrl === TrackedVolume.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.isAmino(o.amount[0])));
  },
  encode(message: TrackedVolume, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TrackedVolume {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrackedVolume();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TrackedVolume>): TrackedVolume {
    const message = createBaseTrackedVolume();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TrackedVolumeAmino): TrackedVolume {
    const message = createBaseTrackedVolume();
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TrackedVolume): TrackedVolumeAmino {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: TrackedVolumeAminoMsg): TrackedVolume {
    return TrackedVolume.fromAmino(object.value);
  },
  toAminoMsg(message: TrackedVolume): TrackedVolumeAminoMsg {
    return {
      type: "osmosis/poolmanager/tracked-volume",
      value: TrackedVolume.toAmino(message)
    };
  },
  fromProtoMsg(message: TrackedVolumeProtoMsg): TrackedVolume {
    return TrackedVolume.decode(message.value);
  },
  toProto(message: TrackedVolume): Uint8Array {
    return TrackedVolume.encode(message).finish();
  },
  toProtoMsg(message: TrackedVolume): TrackedVolumeProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.TrackedVolume",
      value: TrackedVolume.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TrackedVolume.typeUrl, TrackedVolume);
GlobalDecoderRegistry.registerAminoProtoMapping(TrackedVolume.aminoType, TrackedVolume.typeUrl);