import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet } from "@osmonauts/helpers";
/** MsgUnjail defines the Msg/Unjail request type */

export interface MsgUnjail {
  validatorAddr: string;
}
/** MsgUnjail defines the Msg/Unjail request type */

export interface MsgUnjailSDKType {
  validator_addr: string;
}
/** MsgUnjailResponse defines the Msg/Unjail response type */

export interface MsgUnjailResponse {}
/** MsgUnjailResponse defines the Msg/Unjail response type */

export interface MsgUnjailResponseSDKType {}

function createBaseMsgUnjail(): MsgUnjail {
  return {
    validatorAddr: ""
  };
}

export const MsgUnjail = {
  encode(message: MsgUnjail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnjail {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnjail();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUnjail>): MsgUnjail {
    const message = createBaseMsgUnjail();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },

  fromSDK(object: MsgUnjailSDKType): MsgUnjail {
    return {
      validatorAddr: isSet(object.validator_addr) ? object.validator_addr : undefined
    };
  },

  toSDK(message: MsgUnjail): MsgUnjailSDKType {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validator_addr = message.validatorAddr);
    return obj;
  }

};

function createBaseMsgUnjailResponse(): MsgUnjailResponse {
  return {};
}

export const MsgUnjailResponse = {
  encode(_: MsgUnjailResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnjailResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnjailResponse();

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

  fromPartial(_: DeepPartial<MsgUnjailResponse>): MsgUnjailResponse {
    const message = createBaseMsgUnjailResponse();
    return message;
  },

  fromSDK(_: MsgUnjailResponseSDKType): MsgUnjailResponse {
    return {};
  },

  toSDK(_: MsgUnjailResponse): MsgUnjailResponseSDKType {
    const obj: any = {};
    return obj;
  }

};