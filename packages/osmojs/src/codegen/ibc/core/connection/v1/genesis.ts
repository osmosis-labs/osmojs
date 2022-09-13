import { IdentifiedConnection, ConnectionPaths, Params } from "./connection";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";

/** GenesisState defines the ibc connection submodule's genesis state. */
export interface GenesisState {
  connections: IdentifiedConnection[];
  client_connection_paths: ConnectionPaths[];

  /** the sequence for the next generated connection identifier */
  next_connection_sequence: Long;
  params: Params;
}

function createBaseGenesisState(): GenesisState {
  return {
    connections: [],
    client_connection_paths: [],
    next_connection_sequence: Long.UZERO,
    params: undefined
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.connections) {
      IdentifiedConnection.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.client_connection_paths) {
      ConnectionPaths.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (!message.next_connection_sequence.isZero()) {
      writer.uint32(24).uint64(message.next_connection_sequence);
    }

    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.connections.push(IdentifiedConnection.decode(reader, reader.uint32()));
          break;

        case 2:
          message.client_connection_paths.push(ConnectionPaths.decode(reader, reader.uint32()));
          break;

        case 3:
          message.next_connection_sequence = (reader.uint64() as Long);
          break;

        case 4:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      connections: Array.isArray(object?.connections) ? object.connections.map((e: any) => IdentifiedConnection.fromJSON(e)) : [],
      client_connection_paths: Array.isArray(object?.client_connection_paths) ? object.client_connection_paths.map((e: any) => ConnectionPaths.fromJSON(e)) : [],
      next_connection_sequence: isSet(object.next_connection_sequence) ? Long.fromString(object.next_connection_sequence) : Long.UZERO,
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};

    if (message.connections) {
      obj.connections = message.connections.map(e => e ? IdentifiedConnection.toJSON(e) : undefined);
    } else {
      obj.connections = [];
    }

    if (message.client_connection_paths) {
      obj.client_connection_paths = message.client_connection_paths.map(e => e ? ConnectionPaths.toJSON(e) : undefined);
    } else {
      obj.client_connection_paths = [];
    }

    message.next_connection_sequence !== undefined && (obj.next_connection_sequence = (message.next_connection_sequence || Long.UZERO).toString());
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.connections = object.connections?.map(e => IdentifiedConnection.fromPartial(e)) || [];
    message.client_connection_paths = object.client_connection_paths?.map(e => ConnectionPaths.fromPartial(e)) || [];
    message.next_connection_sequence = object.next_connection_sequence !== undefined && object.next_connection_sequence !== null ? Long.fromValue(object.next_connection_sequence) : Long.UZERO;
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};