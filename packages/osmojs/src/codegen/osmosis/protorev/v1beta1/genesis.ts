import { Params, ParamsSDKType } from "./params";
import { TokenPairArbRoutes, TokenPairArbRoutesSDKType } from "./protorev";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the protorev module's genesis state. */

export interface GenesisState {
  /** Module Parameters */
  params?: Params;
  /** Hot routes that are configured on genesis */

  tokenPairs: TokenPairArbRoutes[];
}
/** GenesisState defines the protorev module's genesis state. */

export interface GenesisStateSDKType {
  /** Module Parameters */
  params?: ParamsSDKType;
  /** Hot routes that are configured on genesis */

  token_pairs: TokenPairArbRoutesSDKType[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    tokenPairs: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.tokenPairs) {
      TokenPairArbRoutes.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.tokenPairs.push(TokenPairArbRoutes.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.tokenPairs = object.tokenPairs?.map(e => TokenPairArbRoutes.fromPartial(e)) || [];
    return message;
  }

};