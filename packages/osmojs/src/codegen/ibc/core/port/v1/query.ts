import { Order, Counterparty, orderFromJSON, orderToJSON } from "../../channel/v1/channel";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/** QueryAppVersionRequest is the request type for the Query/AppVersion RPC method */
export interface QueryAppVersionRequest {
  /** port unique identifier */
  port_id: string;

  /** connection unique identifier */
  connection_id: string;

  /** whether the channel is ordered or unordered */
  ordering: Order;

  /** counterparty channel end */
  counterparty: Counterparty;

  /** proposed version */
  proposed_version: string;
}

/** QueryAppVersionResponse is the response type for the Query/AppVersion RPC method. */
export interface QueryAppVersionResponse {
  /** port id associated with the request identifiers */
  port_id: string;

  /** supported app version */
  version: string;
}

function createBaseQueryAppVersionRequest(): QueryAppVersionRequest {
  return {
    port_id: "",
    connection_id: "",
    ordering: 0,
    counterparty: undefined,
    proposed_version: ""
  };
}

export const QueryAppVersionRequest = {
  encode(message: QueryAppVersionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }

    if (message.connection_id !== "") {
      writer.uint32(18).string(message.connection_id);
    }

    if (message.ordering !== 0) {
      writer.uint32(24).int32(message.ordering);
    }

    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
    }

    if (message.proposed_version !== "") {
      writer.uint32(42).string(message.proposed_version);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAppVersionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAppVersionRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;

        case 2:
          message.connection_id = reader.string();
          break;

        case 3:
          message.ordering = (reader.int32() as any);
          break;

        case 4:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;

        case 5:
          message.proposed_version = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAppVersionRequest {
    return {
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      connection_id: isSet(object.connection_id) ? String(object.connection_id) : "",
      ordering: isSet(object.ordering) ? orderFromJSON(object.ordering) : 0,
      counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
      proposed_version: isSet(object.proposed_version) ? String(object.proposed_version) : ""
    };
  },

  toJSON(message: QueryAppVersionRequest): unknown {
    const obj: any = {};
    message.port_id !== undefined && (obj.port_id = message.port_id);
    message.connection_id !== undefined && (obj.connection_id = message.connection_id);
    message.ordering !== undefined && (obj.ordering = orderToJSON(message.ordering));
    message.counterparty !== undefined && (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : undefined);
    message.proposed_version !== undefined && (obj.proposed_version = message.proposed_version);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAppVersionRequest>): QueryAppVersionRequest {
    const message = createBaseQueryAppVersionRequest();
    message.port_id = object.port_id ?? "";
    message.connection_id = object.connection_id ?? "";
    message.ordering = object.ordering ?? 0;
    message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
    message.proposed_version = object.proposed_version ?? "";
    return message;
  }

};

function createBaseQueryAppVersionResponse(): QueryAppVersionResponse {
  return {
    port_id: "",
    version: ""
  };
}

export const QueryAppVersionResponse = {
  encode(message: QueryAppVersionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }

    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAppVersionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAppVersionResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;

        case 2:
          message.version = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAppVersionResponse {
    return {
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      version: isSet(object.version) ? String(object.version) : ""
    };
  },

  toJSON(message: QueryAppVersionResponse): unknown {
    const obj: any = {};
    message.port_id !== undefined && (obj.port_id = message.port_id);
    message.version !== undefined && (obj.version = message.version);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAppVersionResponse>): QueryAppVersionResponse {
    const message = createBaseQueryAppVersionResponse();
    message.port_id = object.port_id ?? "";
    message.version = object.version ?? "";
    return message;
  }

};