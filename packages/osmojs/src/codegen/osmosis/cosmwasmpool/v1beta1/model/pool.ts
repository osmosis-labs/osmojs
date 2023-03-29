import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../helpers";
export interface CosmWasmPool {
  poolAddress: string;
  contractAddress: string;
  poolId: Long;
  codeId: Long;
}
export interface CosmWasmPoolSDKType {
  pool_address: string;
  contract_address: string;
  pool_id: Long;
  code_id: Long;
}

function createBaseCosmWasmPool(): CosmWasmPool {
  return {
    poolAddress: "",
    contractAddress: "",
    poolId: Long.UZERO,
    codeId: Long.UZERO
  };
}

export const CosmWasmPool = {
  encode(message: CosmWasmPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolAddress !== "") {
      writer.uint32(10).string(message.poolAddress);
    }

    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }

    if (!message.poolId.isZero()) {
      writer.uint32(24).uint64(message.poolId);
    }

    if (!message.codeId.isZero()) {
      writer.uint32(32).uint64(message.codeId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CosmWasmPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCosmWasmPool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolAddress = reader.string();
          break;

        case 2:
          message.contractAddress = reader.string();
          break;

        case 3:
          message.poolId = (reader.uint64() as Long);
          break;

        case 4:
          message.codeId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<CosmWasmPool>): CosmWasmPool {
    const message = createBaseCosmWasmPool();
    message.poolAddress = object.poolAddress ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    return message;
  }

};