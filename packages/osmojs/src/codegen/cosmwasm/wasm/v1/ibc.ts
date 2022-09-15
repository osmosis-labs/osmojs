import * as _m0 from "protobufjs/minimal";
import { Long, isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "@osmonauts/helpers";

/** MsgIBCSend */
export interface MsgIBCSend {
  /** the channel by which the packet will be sent */
  channel: string;

  /**
   * Timeout height relative to the current block height.
   * The timeout is disabled when set to 0.
   */
  timeout_height: Long;

  /**
   * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
   * The timeout is disabled when set to 0.
   */
  timeout_timestamp: Long;

  /**
   * Data is the payload to transfer. We must not make assumption what format or
   * content is in here.
   */
  data: Uint8Array;
}

/** MsgIBCCloseChannel port and channel need to be owned by the contract */
export interface MsgIBCCloseChannel {
  channel: string;
}

function createBaseMsgIBCSend(): MsgIBCSend {
  return {
    channel: "",
    timeout_height: Long.UZERO,
    timeout_timestamp: Long.UZERO,
    data: new Uint8Array()
  };
}

export const MsgIBCSend = {
  encode(message: MsgIBCSend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }

    if (!message.timeout_height.isZero()) {
      writer.uint32(32).uint64(message.timeout_height);
    }

    if (!message.timeout_timestamp.isZero()) {
      writer.uint32(40).uint64(message.timeout_timestamp);
    }

    if (message.data.length !== 0) {
      writer.uint32(50).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIBCSend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIBCSend();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.channel = reader.string();
          break;

        case 4:
          message.timeout_height = (reader.uint64() as Long);
          break;

        case 5:
          message.timeout_timestamp = (reader.uint64() as Long);
          break;

        case 6:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgIBCSend {
    return {
      channel: isSet(object.channel) ? String(object.channel) : "",
      timeout_height: isSet(object.timeout_height) ? Long.fromString(object.timeout_height) : Long.UZERO,
      timeout_timestamp: isSet(object.timeout_timestamp) ? Long.fromString(object.timeout_timestamp) : Long.UZERO,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message: MsgIBCSend): unknown {
    const obj: any = {};
    message.channel !== undefined && (obj.channel = message.channel);
    message.timeout_height !== undefined && (obj.timeout_height = (message.timeout_height || Long.UZERO).toString());
    message.timeout_timestamp !== undefined && (obj.timeout_timestamp = (message.timeout_timestamp || Long.UZERO).toString());
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgIBCSend>): MsgIBCSend {
    const message = createBaseMsgIBCSend();
    message.channel = object.channel ?? "";
    message.timeout_height = object.timeout_height !== undefined && object.timeout_height !== null ? Long.fromValue(object.timeout_height) : Long.UZERO;
    message.timeout_timestamp = object.timeout_timestamp !== undefined && object.timeout_timestamp !== null ? Long.fromValue(object.timeout_timestamp) : Long.UZERO;
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgIBCCloseChannel(): MsgIBCCloseChannel {
  return {
    channel: ""
  };
}

export const MsgIBCCloseChannel = {
  encode(message: MsgIBCCloseChannel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIBCCloseChannel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIBCCloseChannel();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.channel = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgIBCCloseChannel {
    return {
      channel: isSet(object.channel) ? String(object.channel) : ""
    };
  },

  toJSON(message: MsgIBCCloseChannel): unknown {
    const obj: any = {};
    message.channel !== undefined && (obj.channel = message.channel);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgIBCCloseChannel>): MsgIBCCloseChannel {
    const message = createBaseMsgIBCCloseChannel();
    message.channel = object.channel ?? "";
    return message;
  }

};