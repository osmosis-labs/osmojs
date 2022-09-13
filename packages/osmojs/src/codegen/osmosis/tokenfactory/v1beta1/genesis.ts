import { Params } from "./params";
import { DenomAuthorityMetadata } from "./authorityMetadata";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisState {
  /** params defines the paramaters of the module. */
  params: Params;
  factory_denoms: GenesisDenom[];
}
export interface GenesisDenom {
  denom: string;
  authority_metadata: DenomAuthorityMetadata;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    factory_denoms: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.factory_denoms) {
      GenesisDenom.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.factory_denoms.push(GenesisDenom.decode(reader, reader.uint32()));
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
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      factory_denoms: Array.isArray(object?.factory_denoms) ? object.factory_denoms.map((e: any) => GenesisDenom.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.factory_denoms) {
      obj.factory_denoms = message.factory_denoms.map(e => e ? GenesisDenom.toJSON(e) : undefined);
    } else {
      obj.factory_denoms = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.factory_denoms = object.factory_denoms?.map(e => GenesisDenom.fromPartial(e)) || [];
    return message;
  }

};

function createBaseGenesisDenom(): GenesisDenom {
  return {
    denom: "",
    authority_metadata: undefined
  };
}

export const GenesisDenom = {
  encode(message: GenesisDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.authority_metadata !== undefined) {
      DenomAuthorityMetadata.encode(message.authority_metadata, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisDenom();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.authority_metadata = DenomAuthorityMetadata.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisDenom {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      authority_metadata: isSet(object.authority_metadata) ? DenomAuthorityMetadata.fromJSON(object.authority_metadata) : undefined
    };
  },

  toJSON(message: GenesisDenom): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.authority_metadata !== undefined && (obj.authority_metadata = message.authority_metadata ? DenomAuthorityMetadata.toJSON(message.authority_metadata) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisDenom>): GenesisDenom {
    const message = createBaseGenesisDenom();
    message.denom = object.denom ?? "";
    message.authority_metadata = object.authority_metadata !== undefined && object.authority_metadata !== null ? DenomAuthorityMetadata.fromPartial(object.authority_metadata) : undefined;
    return message;
  }

};