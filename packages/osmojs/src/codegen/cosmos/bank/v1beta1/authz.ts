import { Coin } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";

/**
 * SendAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface SendAuthorization {
  spend_limit: Coin[];
}

function createBaseSendAuthorization(): SendAuthorization {
  return {
    spend_limit: []
  };
}

export const SendAuthorization = {
  encode(message: SendAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.spend_limit) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendAuthorization();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.spend_limit.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SendAuthorization {
    return {
      spend_limit: Array.isArray(object?.spend_limit) ? object.spend_limit.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: SendAuthorization): unknown {
    const obj: any = {};

    if (message.spend_limit) {
      obj.spend_limit = message.spend_limit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.spend_limit = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<SendAuthorization>): SendAuthorization {
    const message = createBaseSendAuthorization();
    message.spend_limit = object.spend_limit?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};