//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
/** Module is the config object for the auth module. */
export interface Module {
  /** bech32_prefix is the bech32 account prefix for the app. */
  bech32Prefix: string;
  /** module_account_permissions are module account permissions. */
  moduleAccountPermissions: ModuleAccountPermission[];
  /** authority defines the custom module authority. If not set, defaults to the governance module. */
  authority: string;
}
export interface ModuleProtoMsg {
  typeUrl: "/cosmos.auth.module.v1.Module";
  value: Uint8Array;
}
/** Module is the config object for the auth module. */
export interface ModuleAmino {
  /** bech32_prefix is the bech32 account prefix for the app. */
  bech32_prefix?: string;
  /** module_account_permissions are module account permissions. */
  module_account_permissions?: ModuleAccountPermissionAmino[];
  /** authority defines the custom module authority. If not set, defaults to the governance module. */
  authority?: string;
}
export interface ModuleAminoMsg {
  type: "cosmos-sdk/Module";
  value: ModuleAmino;
}
/** Module is the config object for the auth module. */
export interface ModuleSDKType {
  bech32_prefix: string;
  module_account_permissions: ModuleAccountPermissionSDKType[];
  authority: string;
}
/** ModuleAccountPermission represents permissions for a module account. */
export interface ModuleAccountPermission {
  /** account is the name of the module. */
  account: string;
  /**
   * permissions are the permissions this module has. Currently recognized
   * values are minter, burner and staking.
   */
  permissions: string[];
}
export interface ModuleAccountPermissionProtoMsg {
  typeUrl: "/cosmos.auth.module.v1.ModuleAccountPermission";
  value: Uint8Array;
}
/** ModuleAccountPermission represents permissions for a module account. */
export interface ModuleAccountPermissionAmino {
  /** account is the name of the module. */
  account?: string;
  /**
   * permissions are the permissions this module has. Currently recognized
   * values are minter, burner and staking.
   */
  permissions?: string[];
}
export interface ModuleAccountPermissionAminoMsg {
  type: "cosmos-sdk/ModuleAccountPermission";
  value: ModuleAccountPermissionAmino;
}
/** ModuleAccountPermission represents permissions for a module account. */
export interface ModuleAccountPermissionSDKType {
  account: string;
  permissions: string[];
}
function createBaseModule(): Module {
  return {
    bech32Prefix: "",
    moduleAccountPermissions: [],
    authority: ""
  };
}
export const Module = {
  typeUrl: "/cosmos.auth.module.v1.Module",
  aminoType: "cosmos-sdk/Module",
  is(o: any): o is Module {
    return o && (o.$typeUrl === Module.typeUrl || typeof o.bech32Prefix === "string" && Array.isArray(o.moduleAccountPermissions) && (!o.moduleAccountPermissions.length || ModuleAccountPermission.is(o.moduleAccountPermissions[0])) && typeof o.authority === "string");
  },
  isSDK(o: any): o is ModuleSDKType {
    return o && (o.$typeUrl === Module.typeUrl || typeof o.bech32_prefix === "string" && Array.isArray(o.module_account_permissions) && (!o.module_account_permissions.length || ModuleAccountPermission.isSDK(o.module_account_permissions[0])) && typeof o.authority === "string");
  },
  isAmino(o: any): o is ModuleAmino {
    return o && (o.$typeUrl === Module.typeUrl || typeof o.bech32_prefix === "string" && Array.isArray(o.module_account_permissions) && (!o.module_account_permissions.length || ModuleAccountPermission.isAmino(o.module_account_permissions[0])) && typeof o.authority === "string");
  },
  encode(message: Module, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bech32Prefix !== "") {
      writer.uint32(10).string(message.bech32Prefix);
    }
    for (const v of message.moduleAccountPermissions) {
      ModuleAccountPermission.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.authority !== "") {
      writer.uint32(26).string(message.authority);
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
          message.bech32Prefix = reader.string();
          break;
        case 2:
          message.moduleAccountPermissions.push(ModuleAccountPermission.decode(reader, reader.uint32()));
          break;
        case 3:
          message.authority = reader.string();
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
    message.bech32Prefix = object.bech32Prefix ?? "";
    message.moduleAccountPermissions = object.moduleAccountPermissions?.map(e => ModuleAccountPermission.fromPartial(e)) || [];
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object: ModuleAmino): Module {
    const message = createBaseModule();
    if (object.bech32_prefix !== undefined && object.bech32_prefix !== null) {
      message.bech32Prefix = object.bech32_prefix;
    }
    message.moduleAccountPermissions = object.module_account_permissions?.map(e => ModuleAccountPermission.fromAmino(e)) || [];
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message: Module): ModuleAmino {
    const obj: any = {};
    obj.bech32_prefix = message.bech32Prefix === "" ? undefined : message.bech32Prefix;
    if (message.moduleAccountPermissions) {
      obj.module_account_permissions = message.moduleAccountPermissions.map(e => e ? ModuleAccountPermission.toAmino(e) : undefined);
    } else {
      obj.module_account_permissions = message.moduleAccountPermissions;
    }
    obj.authority = message.authority === "" ? undefined : message.authority;
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
      typeUrl: "/cosmos.auth.module.v1.Module",
      value: Module.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Module.typeUrl, Module);
GlobalDecoderRegistry.registerAminoProtoMapping(Module.aminoType, Module.typeUrl);
function createBaseModuleAccountPermission(): ModuleAccountPermission {
  return {
    account: "",
    permissions: []
  };
}
export const ModuleAccountPermission = {
  typeUrl: "/cosmos.auth.module.v1.ModuleAccountPermission",
  aminoType: "cosmos-sdk/ModuleAccountPermission",
  is(o: any): o is ModuleAccountPermission {
    return o && (o.$typeUrl === ModuleAccountPermission.typeUrl || typeof o.account === "string" && Array.isArray(o.permissions) && (!o.permissions.length || typeof o.permissions[0] === "string"));
  },
  isSDK(o: any): o is ModuleAccountPermissionSDKType {
    return o && (o.$typeUrl === ModuleAccountPermission.typeUrl || typeof o.account === "string" && Array.isArray(o.permissions) && (!o.permissions.length || typeof o.permissions[0] === "string"));
  },
  isAmino(o: any): o is ModuleAccountPermissionAmino {
    return o && (o.$typeUrl === ModuleAccountPermission.typeUrl || typeof o.account === "string" && Array.isArray(o.permissions) && (!o.permissions.length || typeof o.permissions[0] === "string"));
  },
  encode(message: ModuleAccountPermission, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    for (const v of message.permissions) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ModuleAccountPermission {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleAccountPermission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.permissions.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ModuleAccountPermission>): ModuleAccountPermission {
    const message = createBaseModuleAccountPermission();
    message.account = object.account ?? "";
    message.permissions = object.permissions?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ModuleAccountPermissionAmino): ModuleAccountPermission {
    const message = createBaseModuleAccountPermission();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    message.permissions = object.permissions?.map(e => e) || [];
    return message;
  },
  toAmino(message: ModuleAccountPermission): ModuleAccountPermissionAmino {
    const obj: any = {};
    obj.account = message.account === "" ? undefined : message.account;
    if (message.permissions) {
      obj.permissions = message.permissions.map(e => e);
    } else {
      obj.permissions = message.permissions;
    }
    return obj;
  },
  fromAminoMsg(object: ModuleAccountPermissionAminoMsg): ModuleAccountPermission {
    return ModuleAccountPermission.fromAmino(object.value);
  },
  toAminoMsg(message: ModuleAccountPermission): ModuleAccountPermissionAminoMsg {
    return {
      type: "cosmos-sdk/ModuleAccountPermission",
      value: ModuleAccountPermission.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleAccountPermissionProtoMsg): ModuleAccountPermission {
    return ModuleAccountPermission.decode(message.value);
  },
  toProto(message: ModuleAccountPermission): Uint8Array {
    return ModuleAccountPermission.encode(message).finish();
  },
  toProtoMsg(message: ModuleAccountPermission): ModuleAccountPermissionProtoMsg {
    return {
      typeUrl: "/cosmos.auth.module.v1.ModuleAccountPermission",
      value: ModuleAccountPermission.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ModuleAccountPermission.typeUrl, ModuleAccountPermission);
GlobalDecoderRegistry.registerAminoProtoMapping(ModuleAccountPermission.aminoType, ModuleAccountPermission.typeUrl);