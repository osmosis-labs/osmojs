import { Height } from "../../../core/client/v1/client";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/**
 * ClientState defines a loopback (localhost) client. It requires (read-only)
 * access to keys outside the client prefix.
 */
export interface ClientState {
  /** self chain ID */
  chain_id: string;

  /** self latest block height */
  height: Height;
}

function createBaseClientState(): ClientState {
  return {
    chain_id: "",
    height: undefined
  };
}

export const ClientState = {
  encode(message: ClientState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain_id !== "") {
      writer.uint32(10).string(message.chain_id);
    }

    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chain_id = reader.string();
          break;

        case 2:
          message.height = Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ClientState {
    return {
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
    };
  },

  toJSON(message: ClientState): unknown {
    const obj: any = {};
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ClientState>): ClientState {
    const message = createBaseClientState();
    message.chain_id = object.chain_id ?? "";
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    return message;
  }

};