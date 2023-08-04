import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** Params defines the parameters for the tokenfactory module. */
export interface Params {
  /**
   * DenomCreationFee defines the fee to be charged on the creation of a new
   * denom. The fee is drawn from the MsgCreateDenom's sender account, and
   * transferred to the community pool.
   */
  denomCreationFee: Coin[];
  /**
   * DenomCreationGasConsume defines the gas cost for creating a new denom.
   * This is intended as a spam deterrence mechanism.
   * 
   * See: https://github.com/CosmWasm/token-factory/issues/11
   */
  denomCreationGasConsume?: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the tokenfactory module. */
export interface ParamsAmino {
  /**
   * DenomCreationFee defines the fee to be charged on the creation of a new
   * denom. The fee is drawn from the MsgCreateDenom's sender account, and
   * transferred to the community pool.
   */
  denom_creation_fee: CoinAmino[];
  /**
   * DenomCreationGasConsume defines the gas cost for creating a new denom.
   * This is intended as a spam deterrence mechanism.
   * 
   * See: https://github.com/CosmWasm/token-factory/issues/11
   */
  denom_creation_gas_consume: string;
}
export interface ParamsAminoMsg {
  type: "osmosis/tokenfactory/params";
  value: ParamsAmino;
}
/** Params defines the parameters for the tokenfactory module. */
export interface ParamsSDKType {
  denom_creation_fee: CoinSDKType[];
  denom_creation_gas_consume?: bigint;
}
function createBaseParams(): Params {
  return {
    denomCreationFee: [],
    denomCreationGasConsume: undefined
  };
}
export const Params = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denomCreationFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.denomCreationGasConsume !== undefined) {
      writer.uint32(16).uint64(message.denomCreationGasConsume);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomCreationFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.denomCreationGasConsume = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.denomCreationFee = object.denomCreationFee?.map(e => Coin.fromPartial(e)) || [];
    message.denomCreationGasConsume = object.denomCreationGasConsume !== undefined && object.denomCreationGasConsume !== null ? BigInt(object.denomCreationGasConsume.toString()) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      denomCreationFee: Array.isArray(object?.denom_creation_fee) ? object.denom_creation_fee.map((e: any) => Coin.fromAmino(e)) : [],
      denomCreationGasConsume: object?.denom_creation_gas_consume ? BigInt(object.denom_creation_gas_consume) : undefined
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.denomCreationFee) {
      obj.denom_creation_fee = message.denomCreationFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.denom_creation_fee = [];
    }
    obj.denom_creation_gas_consume = message.denomCreationGasConsume ? message.denomCreationGasConsume.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "osmosis/tokenfactory/params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};