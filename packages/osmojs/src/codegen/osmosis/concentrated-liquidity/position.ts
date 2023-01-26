import * as _m0 from "protobufjs/minimal";
export interface Position {
  liquidity: string;
}
export interface PositionSDKType {
  liquidity: string;
}

function createBasePosition(): Position {
  return {
    liquidity: ""
  };
}

export const Position = {
  encode(message: Position, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.liquidity !== "") {
      writer.uint32(10).string(message.liquidity);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Position {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePosition();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.liquidity = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<Position>): Position {
    const message = createBasePosition();
    message.liquidity = object.liquidity ?? "";
    return message;
  }

};