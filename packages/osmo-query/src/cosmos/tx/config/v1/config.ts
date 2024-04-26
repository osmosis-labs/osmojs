//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
/** Config is the config object of the x/auth/tx package. */
export interface Config {
  /**
   * skip_ante_handler defines whether the ante handler registration should be skipped in case an app wants to override
   * this functionality.
   */
  skipAnteHandler: boolean;
  /**
   * skip_post_handler defines whether the post handler registration should be skipped in case an app wants to override
   * this functionality.
   */
  skipPostHandler: boolean;
}
export interface ConfigProtoMsg {
  typeUrl: "/cosmos.tx.config.v1.Config";
  value: Uint8Array;
}
/** Config is the config object of the x/auth/tx package. */
export interface ConfigAmino {
  /**
   * skip_ante_handler defines whether the ante handler registration should be skipped in case an app wants to override
   * this functionality.
   */
  skip_ante_handler?: boolean;
  /**
   * skip_post_handler defines whether the post handler registration should be skipped in case an app wants to override
   * this functionality.
   */
  skip_post_handler?: boolean;
}
export interface ConfigAminoMsg {
  type: "cosmos-sdk/Config";
  value: ConfigAmino;
}
/** Config is the config object of the x/auth/tx package. */
export interface ConfigSDKType {
  skip_ante_handler: boolean;
  skip_post_handler: boolean;
}
function createBaseConfig(): Config {
  return {
    skipAnteHandler: false,
    skipPostHandler: false
  };
}
export const Config = {
  typeUrl: "/cosmos.tx.config.v1.Config",
  aminoType: "cosmos-sdk/Config",
  is(o: any): o is Config {
    return o && (o.$typeUrl === Config.typeUrl || typeof o.skipAnteHandler === "boolean" && typeof o.skipPostHandler === "boolean");
  },
  isSDK(o: any): o is ConfigSDKType {
    return o && (o.$typeUrl === Config.typeUrl || typeof o.skip_ante_handler === "boolean" && typeof o.skip_post_handler === "boolean");
  },
  isAmino(o: any): o is ConfigAmino {
    return o && (o.$typeUrl === Config.typeUrl || typeof o.skip_ante_handler === "boolean" && typeof o.skip_post_handler === "boolean");
  },
  encode(message: Config, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.skipAnteHandler === true) {
      writer.uint32(8).bool(message.skipAnteHandler);
    }
    if (message.skipPostHandler === true) {
      writer.uint32(16).bool(message.skipPostHandler);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Config {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.skipAnteHandler = reader.bool();
          break;
        case 2:
          message.skipPostHandler = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Config>): Config {
    const message = createBaseConfig();
    message.skipAnteHandler = object.skipAnteHandler ?? false;
    message.skipPostHandler = object.skipPostHandler ?? false;
    return message;
  },
  fromAmino(object: ConfigAmino): Config {
    const message = createBaseConfig();
    if (object.skip_ante_handler !== undefined && object.skip_ante_handler !== null) {
      message.skipAnteHandler = object.skip_ante_handler;
    }
    if (object.skip_post_handler !== undefined && object.skip_post_handler !== null) {
      message.skipPostHandler = object.skip_post_handler;
    }
    return message;
  },
  toAmino(message: Config): ConfigAmino {
    const obj: any = {};
    obj.skip_ante_handler = message.skipAnteHandler === false ? undefined : message.skipAnteHandler;
    obj.skip_post_handler = message.skipPostHandler === false ? undefined : message.skipPostHandler;
    return obj;
  },
  fromAminoMsg(object: ConfigAminoMsg): Config {
    return Config.fromAmino(object.value);
  },
  toAminoMsg(message: Config): ConfigAminoMsg {
    return {
      type: "cosmos-sdk/Config",
      value: Config.toAmino(message)
    };
  },
  fromProtoMsg(message: ConfigProtoMsg): Config {
    return Config.decode(message.value);
  },
  toProto(message: Config): Uint8Array {
    return Config.encode(message).finish();
  },
  toProtoMsg(message: Config): ConfigProtoMsg {
    return {
      typeUrl: "/cosmos.tx.config.v1.Config",
      value: Config.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Config.typeUrl, Config);
GlobalDecoderRegistry.registerAminoProtoMapping(Config.aminoType, Config.typeUrl);