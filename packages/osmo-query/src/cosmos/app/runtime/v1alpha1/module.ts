//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
/** Module is the config object for the runtime module. */
export interface Module {
  /** app_name is the name of the app. */
  appName: string;
  /**
   * begin_blockers specifies the module names of begin blockers
   * to call in the order in which they should be called. If this is left empty
   * no begin blocker will be registered.
   */
  beginBlockers: string[];
  /**
   * end_blockers specifies the module names of the end blockers
   * to call in the order in which they should be called. If this is left empty
   * no end blocker will be registered.
   */
  endBlockers: string[];
  /**
   * init_genesis specifies the module names of init genesis functions
   * to call in the order in which they should be called. If this is left empty
   * no init genesis function will be registered.
   */
  initGenesis: string[];
  /**
   * export_genesis specifies the order in which to export module genesis data.
   * If this is left empty, the init_genesis order will be used for export genesis
   * if it is specified.
   */
  exportGenesis: string[];
  /**
   * override_store_keys is an optional list of overrides for the module store keys
   * to be used in keeper construction.
   */
  overrideStoreKeys: StoreKeyConfig[];
}
export interface ModuleProtoMsg {
  typeUrl: "/cosmos.app.runtime.v1alpha1.Module";
  value: Uint8Array;
}
/** Module is the config object for the runtime module. */
export interface ModuleAmino {
  /** app_name is the name of the app. */
  app_name?: string;
  /**
   * begin_blockers specifies the module names of begin blockers
   * to call in the order in which they should be called. If this is left empty
   * no begin blocker will be registered.
   */
  begin_blockers?: string[];
  /**
   * end_blockers specifies the module names of the end blockers
   * to call in the order in which they should be called. If this is left empty
   * no end blocker will be registered.
   */
  end_blockers?: string[];
  /**
   * init_genesis specifies the module names of init genesis functions
   * to call in the order in which they should be called. If this is left empty
   * no init genesis function will be registered.
   */
  init_genesis?: string[];
  /**
   * export_genesis specifies the order in which to export module genesis data.
   * If this is left empty, the init_genesis order will be used for export genesis
   * if it is specified.
   */
  export_genesis?: string[];
  /**
   * override_store_keys is an optional list of overrides for the module store keys
   * to be used in keeper construction.
   */
  override_store_keys?: StoreKeyConfigAmino[];
}
export interface ModuleAminoMsg {
  type: "cosmos-sdk/Module";
  value: ModuleAmino;
}
/** Module is the config object for the runtime module. */
export interface ModuleSDKType {
  app_name: string;
  begin_blockers: string[];
  end_blockers: string[];
  init_genesis: string[];
  export_genesis: string[];
  override_store_keys: StoreKeyConfigSDKType[];
}
/**
 * StoreKeyConfig may be supplied to override the default module store key, which
 * is the module name.
 */
export interface StoreKeyConfig {
  /** name of the module to override the store key of */
  moduleName: string;
  /** the kv store key to use instead of the module name. */
  kvStoreKey: string;
}
export interface StoreKeyConfigProtoMsg {
  typeUrl: "/cosmos.app.runtime.v1alpha1.StoreKeyConfig";
  value: Uint8Array;
}
/**
 * StoreKeyConfig may be supplied to override the default module store key, which
 * is the module name.
 */
export interface StoreKeyConfigAmino {
  /** name of the module to override the store key of */
  module_name?: string;
  /** the kv store key to use instead of the module name. */
  kv_store_key?: string;
}
export interface StoreKeyConfigAminoMsg {
  type: "cosmos-sdk/StoreKeyConfig";
  value: StoreKeyConfigAmino;
}
/**
 * StoreKeyConfig may be supplied to override the default module store key, which
 * is the module name.
 */
export interface StoreKeyConfigSDKType {
  module_name: string;
  kv_store_key: string;
}
function createBaseModule(): Module {
  return {
    appName: "",
    beginBlockers: [],
    endBlockers: [],
    initGenesis: [],
    exportGenesis: [],
    overrideStoreKeys: []
  };
}
export const Module = {
  typeUrl: "/cosmos.app.runtime.v1alpha1.Module",
  aminoType: "cosmos-sdk/Module",
  is(o: any): o is Module {
    return o && (o.$typeUrl === Module.typeUrl || typeof o.appName === "string" && Array.isArray(o.beginBlockers) && (!o.beginBlockers.length || typeof o.beginBlockers[0] === "string") && Array.isArray(o.endBlockers) && (!o.endBlockers.length || typeof o.endBlockers[0] === "string") && Array.isArray(o.initGenesis) && (!o.initGenesis.length || typeof o.initGenesis[0] === "string") && Array.isArray(o.exportGenesis) && (!o.exportGenesis.length || typeof o.exportGenesis[0] === "string") && Array.isArray(o.overrideStoreKeys) && (!o.overrideStoreKeys.length || StoreKeyConfig.is(o.overrideStoreKeys[0])));
  },
  isSDK(o: any): o is ModuleSDKType {
    return o && (o.$typeUrl === Module.typeUrl || typeof o.app_name === "string" && Array.isArray(o.begin_blockers) && (!o.begin_blockers.length || typeof o.begin_blockers[0] === "string") && Array.isArray(o.end_blockers) && (!o.end_blockers.length || typeof o.end_blockers[0] === "string") && Array.isArray(o.init_genesis) && (!o.init_genesis.length || typeof o.init_genesis[0] === "string") && Array.isArray(o.export_genesis) && (!o.export_genesis.length || typeof o.export_genesis[0] === "string") && Array.isArray(o.override_store_keys) && (!o.override_store_keys.length || StoreKeyConfig.isSDK(o.override_store_keys[0])));
  },
  isAmino(o: any): o is ModuleAmino {
    return o && (o.$typeUrl === Module.typeUrl || typeof o.app_name === "string" && Array.isArray(o.begin_blockers) && (!o.begin_blockers.length || typeof o.begin_blockers[0] === "string") && Array.isArray(o.end_blockers) && (!o.end_blockers.length || typeof o.end_blockers[0] === "string") && Array.isArray(o.init_genesis) && (!o.init_genesis.length || typeof o.init_genesis[0] === "string") && Array.isArray(o.export_genesis) && (!o.export_genesis.length || typeof o.export_genesis[0] === "string") && Array.isArray(o.override_store_keys) && (!o.override_store_keys.length || StoreKeyConfig.isAmino(o.override_store_keys[0])));
  },
  encode(message: Module, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.appName !== "") {
      writer.uint32(10).string(message.appName);
    }
    for (const v of message.beginBlockers) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.endBlockers) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.initGenesis) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.exportGenesis) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.overrideStoreKeys) {
      StoreKeyConfig.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Module {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appName = reader.string();
          break;
        case 2:
          message.beginBlockers.push(reader.string());
          break;
        case 3:
          message.endBlockers.push(reader.string());
          break;
        case 4:
          message.initGenesis.push(reader.string());
          break;
        case 5:
          message.exportGenesis.push(reader.string());
          break;
        case 6:
          message.overrideStoreKeys.push(StoreKeyConfig.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Module>): Module {
    const message = createBaseModule();
    message.appName = object.appName ?? "";
    message.beginBlockers = object.beginBlockers?.map(e => e) || [];
    message.endBlockers = object.endBlockers?.map(e => e) || [];
    message.initGenesis = object.initGenesis?.map(e => e) || [];
    message.exportGenesis = object.exportGenesis?.map(e => e) || [];
    message.overrideStoreKeys = object.overrideStoreKeys?.map(e => StoreKeyConfig.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ModuleAmino): Module {
    const message = createBaseModule();
    if (object.app_name !== undefined && object.app_name !== null) {
      message.appName = object.app_name;
    }
    message.beginBlockers = object.begin_blockers?.map(e => e) || [];
    message.endBlockers = object.end_blockers?.map(e => e) || [];
    message.initGenesis = object.init_genesis?.map(e => e) || [];
    message.exportGenesis = object.export_genesis?.map(e => e) || [];
    message.overrideStoreKeys = object.override_store_keys?.map(e => StoreKeyConfig.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Module): ModuleAmino {
    const obj: any = {};
    obj.app_name = message.appName === "" ? undefined : message.appName;
    if (message.beginBlockers) {
      obj.begin_blockers = message.beginBlockers.map(e => e);
    } else {
      obj.begin_blockers = message.beginBlockers;
    }
    if (message.endBlockers) {
      obj.end_blockers = message.endBlockers.map(e => e);
    } else {
      obj.end_blockers = message.endBlockers;
    }
    if (message.initGenesis) {
      obj.init_genesis = message.initGenesis.map(e => e);
    } else {
      obj.init_genesis = message.initGenesis;
    }
    if (message.exportGenesis) {
      obj.export_genesis = message.exportGenesis.map(e => e);
    } else {
      obj.export_genesis = message.exportGenesis;
    }
    if (message.overrideStoreKeys) {
      obj.override_store_keys = message.overrideStoreKeys.map(e => e ? StoreKeyConfig.toAmino(e) : undefined);
    } else {
      obj.override_store_keys = message.overrideStoreKeys;
    }
    return obj;
  },
  fromAminoMsg(object: ModuleAminoMsg): Module {
    return Module.fromAmino(object.value);
  },
  toAminoMsg(message: Module): ModuleAminoMsg {
    return {
      type: "cosmos-sdk/Module",
      value: Module.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleProtoMsg): Module {
    return Module.decode(message.value);
  },
  toProto(message: Module): Uint8Array {
    return Module.encode(message).finish();
  },
  toProtoMsg(message: Module): ModuleProtoMsg {
    return {
      typeUrl: "/cosmos.app.runtime.v1alpha1.Module",
      value: Module.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Module.typeUrl, Module);
GlobalDecoderRegistry.registerAminoProtoMapping(Module.aminoType, Module.typeUrl);
function createBaseStoreKeyConfig(): StoreKeyConfig {
  return {
    moduleName: "",
    kvStoreKey: ""
  };
}
export const StoreKeyConfig = {
  typeUrl: "/cosmos.app.runtime.v1alpha1.StoreKeyConfig",
  aminoType: "cosmos-sdk/StoreKeyConfig",
  is(o: any): o is StoreKeyConfig {
    return o && (o.$typeUrl === StoreKeyConfig.typeUrl || typeof o.moduleName === "string" && typeof o.kvStoreKey === "string");
  },
  isSDK(o: any): o is StoreKeyConfigSDKType {
    return o && (o.$typeUrl === StoreKeyConfig.typeUrl || typeof o.module_name === "string" && typeof o.kv_store_key === "string");
  },
  isAmino(o: any): o is StoreKeyConfigAmino {
    return o && (o.$typeUrl === StoreKeyConfig.typeUrl || typeof o.module_name === "string" && typeof o.kv_store_key === "string");
  },
  encode(message: StoreKeyConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    if (message.kvStoreKey !== "") {
      writer.uint32(18).string(message.kvStoreKey);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StoreKeyConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreKeyConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
          break;
        case 2:
          message.kvStoreKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StoreKeyConfig>): StoreKeyConfig {
    const message = createBaseStoreKeyConfig();
    message.moduleName = object.moduleName ?? "";
    message.kvStoreKey = object.kvStoreKey ?? "";
    return message;
  },
  fromAmino(object: StoreKeyConfigAmino): StoreKeyConfig {
    const message = createBaseStoreKeyConfig();
    if (object.module_name !== undefined && object.module_name !== null) {
      message.moduleName = object.module_name;
    }
    if (object.kv_store_key !== undefined && object.kv_store_key !== null) {
      message.kvStoreKey = object.kv_store_key;
    }
    return message;
  },
  toAmino(message: StoreKeyConfig): StoreKeyConfigAmino {
    const obj: any = {};
    obj.module_name = message.moduleName === "" ? undefined : message.moduleName;
    obj.kv_store_key = message.kvStoreKey === "" ? undefined : message.kvStoreKey;
    return obj;
  },
  fromAminoMsg(object: StoreKeyConfigAminoMsg): StoreKeyConfig {
    return StoreKeyConfig.fromAmino(object.value);
  },
  toAminoMsg(message: StoreKeyConfig): StoreKeyConfigAminoMsg {
    return {
      type: "cosmos-sdk/StoreKeyConfig",
      value: StoreKeyConfig.toAmino(message)
    };
  },
  fromProtoMsg(message: StoreKeyConfigProtoMsg): StoreKeyConfig {
    return StoreKeyConfig.decode(message.value);
  },
  toProto(message: StoreKeyConfig): Uint8Array {
    return StoreKeyConfig.encode(message).finish();
  },
  toProtoMsg(message: StoreKeyConfig): StoreKeyConfigProtoMsg {
    return {
      typeUrl: "/cosmos.app.runtime.v1alpha1.StoreKeyConfig",
      value: StoreKeyConfig.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StoreKeyConfig.typeUrl, StoreKeyConfig);
GlobalDecoderRegistry.registerAminoProtoMapping(StoreKeyConfig.aminoType, StoreKeyConfig.typeUrl);