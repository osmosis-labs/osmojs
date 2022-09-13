import { PoolParams, PoolAsset } from "./balancerPool";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "@osmonauts/helpers";

/** ===================== MsgCreatePool */
export interface MsgCreateBalancerPool {
  sender: string;
  poolParams: PoolParams;
  poolAssets: PoolAsset[];
  future_pool_governor: string;
}
export interface MsgCreateBalancerPoolResponse {
  pool_id: Long;
}

function createBaseMsgCreateBalancerPool(): MsgCreateBalancerPool {
  return {
    sender: "",
    poolParams: undefined,
    poolAssets: [],
    future_pool_governor: ""
  };
}

export const MsgCreateBalancerPool = {
  encode(message: MsgCreateBalancerPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.poolParams !== undefined) {
      PoolParams.encode(message.poolParams, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.poolAssets) {
      PoolAsset.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.future_pool_governor !== "") {
      writer.uint32(34).string(message.future_pool_governor);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBalancerPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBalancerPool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.poolParams = PoolParams.decode(reader, reader.uint32());
          break;

        case 3:
          message.poolAssets.push(PoolAsset.decode(reader, reader.uint32()));
          break;

        case 4:
          message.future_pool_governor = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateBalancerPool {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      poolParams: isSet(object.poolParams) ? PoolParams.fromJSON(object.poolParams) : undefined,
      poolAssets: Array.isArray(object?.poolAssets) ? object.poolAssets.map((e: any) => PoolAsset.fromJSON(e)) : [],
      future_pool_governor: isSet(object.future_pool_governor) ? String(object.future_pool_governor) : ""
    };
  },

  toJSON(message: MsgCreateBalancerPool): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.poolParams !== undefined && (obj.poolParams = message.poolParams ? PoolParams.toJSON(message.poolParams) : undefined);

    if (message.poolAssets) {
      obj.poolAssets = message.poolAssets.map(e => e ? PoolAsset.toJSON(e) : undefined);
    } else {
      obj.poolAssets = [];
    }

    message.future_pool_governor !== undefined && (obj.future_pool_governor = message.future_pool_governor);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateBalancerPool>): MsgCreateBalancerPool {
    const message = createBaseMsgCreateBalancerPool();
    message.sender = object.sender ?? "";
    message.poolParams = object.poolParams !== undefined && object.poolParams !== null ? PoolParams.fromPartial(object.poolParams) : undefined;
    message.poolAssets = object.poolAssets?.map(e => PoolAsset.fromPartial(e)) || [];
    message.future_pool_governor = object.future_pool_governor ?? "";
    return message;
  }

};

function createBaseMsgCreateBalancerPoolResponse(): MsgCreateBalancerPoolResponse {
  return {
    pool_id: Long.UZERO
  };
}

export const MsgCreateBalancerPoolResponse = {
  encode(message: MsgCreateBalancerPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.pool_id.isZero()) {
      writer.uint32(8).uint64(message.pool_id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBalancerPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBalancerPoolResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pool_id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateBalancerPoolResponse {
    return {
      pool_id: isSet(object.pool_id) ? Long.fromString(object.pool_id) : Long.UZERO
    };
  },

  toJSON(message: MsgCreateBalancerPoolResponse): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateBalancerPoolResponse>): MsgCreateBalancerPoolResponse {
    const message = createBaseMsgCreateBalancerPoolResponse();
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? Long.fromValue(object.pool_id) : Long.UZERO;
    return message;
  }

};