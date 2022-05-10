import * as _m0 from "protobuf/minimal";
import { isSet, bytesFromBase64, base64FromBytes, Exact, DeepPartial } from "@osmonauts/helpers";
export interface ModuleSchemaDescriptor {
  schemaFile: ModuleSchemaDescriptor_FileEntry[];
  prefix: Uint8Array;
}

function createBaseModuleSchemaDescriptor(): ModuleSchemaDescriptor {
  return {
    schemaFile: [],
    prefix: new Uint8Array()
  };
}

export const ModuleSchemaDescriptor = {
  encode(message: ModuleSchemaDescriptor, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.schemaFile) {
      ModuleSchemaDescriptor_FileEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.prefix.length !== 0) {
      writer.uint32(18).bytes(message.prefix);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleSchemaDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleSchemaDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.schemaFile.push(ModuleSchemaDescriptor_FileEntry.decode(reader, reader.uint32()));
          break;

        case 2:
          message.prefix = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ModuleSchemaDescriptor {
    return {
      schemaFile: Array.isArray(object?.schemaFile) ? object.schemaFile.map((e: any) => ModuleSchemaDescriptor_FileEntry.fromJSON(e)) : [],
      prefix: isSet(object.prefix) ? bytesFromBase64(object.prefix) : new Uint8Array()
    };
  },

  toJSON(message: ModuleSchemaDescriptor): unknown {
    const obj: any = {};

    if (message.schemaFile) {
      obj.schemaFile = message.schemaFile.map(e => e ? ModuleSchemaDescriptor_FileEntry.toJSON(e) : undefined);
    } else {
      obj.schemaFile = [];
    }

    message.prefix !== undefined && (obj.prefix = base64FromBytes(message.prefix !== undefined ? message.prefix : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ModuleSchemaDescriptor>, I>>(object: I): ModuleSchemaDescriptor {
    const message = createBaseModuleSchemaDescriptor();
    message.schemaFile = object.schemaFile?.map(e => ModuleSchemaDescriptor_FileEntry.fromPartial(e)) || [];
    message.prefix = object.prefix ?? new Uint8Array();
    return message;
  }

};
export interface ModuleSchemaDescriptor_FileEntry {
  id: number;
  protoFileName: string;
  storageType: StorageType;
}

function createBaseModuleSchemaDescriptor_FileEntry(): ModuleSchemaDescriptor_FileEntry {
  return {
    id: 0,
    protoFileName: "",
    storageType: undefined
  };
}

export const ModuleSchemaDescriptor_FileEntry = {
  encode(message: ModuleSchemaDescriptor_FileEntry, writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }

    if (message.protoFileName !== "") {
      writer.uint32(18).string(message.protoFileName);
    }

    if (message.storageType !== 0) {
      writer.uint32(24).int32(message.storageType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleSchemaDescriptor_FileEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleSchemaDescriptor_FileEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;

        case 2:
          message.protoFileName = reader.string();
          break;

        case 3:
          message.storageType = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ModuleSchemaDescriptor_FileEntry {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      protoFileName: isSet(object.protoFileName) ? String(object.protoFileName) : "",
      storageType: isSet(object.storageType) ? storageTypeFromJSON(object.storageType) : 0
    };
  },

  toJSON(message: ModuleSchemaDescriptor_FileEntry): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.protoFileName !== undefined && (obj.protoFileName = message.protoFileName);
    message.storageType !== undefined && (obj.storageType = storageTypeToJSON(message.storageType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ModuleSchemaDescriptor_FileEntry>, I>>(object: I): ModuleSchemaDescriptor_FileEntry {
    const message = createBaseModuleSchemaDescriptor_FileEntry();
    message.id = object.id ?? 0;
    message.protoFileName = object.protoFileName ?? "";
    message.storageType = object.storageType ?? undefined;
    return message;
  }

};
export enum StorageType {
  /*STORAGE_TYPE_DEFAULT_UNSPECIFIED indicates the persistent
  KV-storage where primary key entries are stored in merkle-tree
  backed commitment storage and indexes and seqs are stored in
  fast index storage. Note that the Cosmos SDK before store/v2alpha1
  does not support this.*/
  STORAGE_TYPE_DEFAULT_UNSPECIFIED = 0,

  /*STORAGE_TYPE_MEMORY indicates in-memory storage that will be
  reloaded every time an app restarts. Tables with this type of storage
  will by default be ignored when importing and exporting a module's
  state from JSON.*/
  STORAGE_TYPE_MEMORY = 1,

  /*STORAGE_TYPE_TRANSIENT indicates transient storage that is reset
  at the end of every block. Tables with this type of storage
  will by default be ignored when importing and exporting a module's
  state from JSON.*/
  STORAGE_TYPE_TRANSIENT = 2,

  /*STORAGE_TYPE_INDEX indicates persistent storage which is not backed
  by a merkle-tree and won't affect the app hash. Note that the Cosmos SDK
  before store/v2alpha1 does not support this.*/
  STORAGE_TYPE_INDEX = 3,

  /*STORAGE_TYPE_INDEX indicates persistent storage which is backed by
  a merkle-tree. With this type of storage, both primary and index keys
  will affect the app hash and this is generally less efficient
  than using STORAGE_TYPE_DEFAULT_UNSPECIFIED which separates index
  keys into index storage. Note that modules built with the
  Cosmos SDK before store/v2alpha1 must specify STORAGE_TYPE_COMMITMENT
  instead of STORAGE_TYPE_DEFAULT_UNSPECIFIED or STORAGE_TYPE_INDEX
  because this is the only type of persistent storage available.*/
  STORAGE_TYPE_COMMITMENT = 4,
  UNRECOGNIZED = -1,
}
export function storageTypeFromJSON(object: any): StorageType {
  switch (object) {
    case "STORAGE_TYPE_DEFAULT_UNSPECIFIED":
      return StorageType.STORAGE_TYPE_DEFAULT_UNSPECIFIED;

    case "STORAGE_TYPE_MEMORY":
      return StorageType.STORAGE_TYPE_MEMORY;

    case "STORAGE_TYPE_TRANSIENT":
      return StorageType.STORAGE_TYPE_TRANSIENT;

    case "STORAGE_TYPE_INDEX":
      return StorageType.STORAGE_TYPE_INDEX;

    case "STORAGE_TYPE_COMMITMENT":
      return StorageType.STORAGE_TYPE_COMMITMENT;

    case -1:
    case "UNRECOGNIZED":
    default:
      return StorageType.UNRECOGNIZED;
  }
}
export function storageTypeToJSON(object: StorageType): string {
  switch (object) {
    case StorageType.STORAGE_TYPE_DEFAULT_UNSPECIFIED:
      return "STORAGE_TYPE_DEFAULT_UNSPECIFIED";

    case StorageType.STORAGE_TYPE_MEMORY:
      return "STORAGE_TYPE_MEMORY";

    case StorageType.STORAGE_TYPE_TRANSIENT:
      return "STORAGE_TYPE_TRANSIENT";

    case StorageType.STORAGE_TYPE_INDEX:
      return "STORAGE_TYPE_INDEX";

    case StorageType.STORAGE_TYPE_COMMITMENT:
      return "STORAGE_TYPE_COMMITMENT";

    default:
      return "UNKNOWN";
  }
}