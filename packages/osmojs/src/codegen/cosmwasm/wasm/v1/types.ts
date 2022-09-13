import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";

/** AccessType permission types */
export enum AccessType {
  /** ACCESS_TYPE_UNSPECIFIED - AccessTypeUnspecified placeholder for empty value */
  ACCESS_TYPE_UNSPECIFIED = 0,

  /** ACCESS_TYPE_NOBODY - AccessTypeNobody forbidden */
  ACCESS_TYPE_NOBODY = 1,

  /** ACCESS_TYPE_ONLY_ADDRESS - AccessTypeOnlyAddress restricted to an address */
  ACCESS_TYPE_ONLY_ADDRESS = 2,

  /** ACCESS_TYPE_EVERYBODY - AccessTypeEverybody unrestricted */
  ACCESS_TYPE_EVERYBODY = 3,
  UNRECOGNIZED = -1,
}
export function accessTypeFromJSON(object: any): AccessType {
  switch (object) {
    case 0:
    case "ACCESS_TYPE_UNSPECIFIED":
      return AccessType.ACCESS_TYPE_UNSPECIFIED;

    case 1:
    case "ACCESS_TYPE_NOBODY":
      return AccessType.ACCESS_TYPE_NOBODY;

    case 2:
    case "ACCESS_TYPE_ONLY_ADDRESS":
      return AccessType.ACCESS_TYPE_ONLY_ADDRESS;

    case 3:
    case "ACCESS_TYPE_EVERYBODY":
      return AccessType.ACCESS_TYPE_EVERYBODY;

    case -1:
    case "UNRECOGNIZED":
    default:
      return AccessType.UNRECOGNIZED;
  }
}
export function accessTypeToJSON(object: AccessType): string {
  switch (object) {
    case AccessType.ACCESS_TYPE_UNSPECIFIED:
      return "ACCESS_TYPE_UNSPECIFIED";

    case AccessType.ACCESS_TYPE_NOBODY:
      return "ACCESS_TYPE_NOBODY";

    case AccessType.ACCESS_TYPE_ONLY_ADDRESS:
      return "ACCESS_TYPE_ONLY_ADDRESS";

    case AccessType.ACCESS_TYPE_EVERYBODY:
      return "ACCESS_TYPE_EVERYBODY";

    default:
      return "UNKNOWN";
  }
}

/** ContractCodeHistoryOperationType actions that caused a code change */
export enum ContractCodeHistoryOperationType {
  /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED - ContractCodeHistoryOperationTypeUnspecified placeholder for empty value */
  CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED = 0,

  /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT - ContractCodeHistoryOperationTypeInit on chain contract instantiation */
  CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT = 1,

  /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE - ContractCodeHistoryOperationTypeMigrate code migration */
  CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE = 2,

  /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS - ContractCodeHistoryOperationTypeGenesis based on genesis data */
  CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS = 3,
  UNRECOGNIZED = -1,
}
export function contractCodeHistoryOperationTypeFromJSON(object: any): ContractCodeHistoryOperationType {
  switch (object) {
    case 0:
    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED":
      return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED;

    case 1:
    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT":
      return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT;

    case 2:
    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE":
      return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE;

    case 3:
    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS":
      return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ContractCodeHistoryOperationType.UNRECOGNIZED;
  }
}
export function contractCodeHistoryOperationTypeToJSON(object: ContractCodeHistoryOperationType): string {
  switch (object) {
    case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED:
      return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED";

    case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT:
      return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT";

    case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE:
      return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE";

    case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS:
      return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS";

    default:
      return "UNKNOWN";
  }
}

/** AccessTypeParam */
export interface AccessTypeParam {
  value: AccessType;
}

/** AccessConfig access control type. */
export interface AccessConfig {
  permission: AccessType;
  address: string;
}

/** Params defines the set of wasm parameters. */
export interface Params {
  code_upload_access: AccessConfig;
  instantiate_default_permission: AccessType;
  max_wasm_code_size: Long;
}

/** CodeInfo is data for the uploaded contract WASM code */
export interface CodeInfo {
  /** CodeHash is the unique identifier created by wasmvm */
  code_hash: Uint8Array;

  /** Creator address who initially stored the code */
  creator: string;

  /** InstantiateConfig access control to apply on contract creation, optional */
  instantiate_config: AccessConfig;
}

/** ContractInfo stores a WASM contract instance */
export interface ContractInfo {
  /** CodeID is the reference to the stored Wasm code */
  code_id: Long;

  /** Creator address who initially instantiated the contract */
  creator: string;

  /** Admin is an optional address that can execute migrations */
  admin: string;

  /** Label is optional metadata to be stored with a contract instance. */
  label: string;

  /**
   * Created Tx position when the contract was instantiated.
   * This data should kept internal and not be exposed via query results. Just
   * use for sorting
   */
  created: AbsoluteTxPosition;
  ibc_port_id: string;

  /**
   * Extension is an extension point to store custom metadata within the
   * persistence model.
   */
  extension: Any;
}

/** ContractCodeHistoryEntry metadata to a contract. */
export interface ContractCodeHistoryEntry {
  operation: ContractCodeHistoryOperationType;

  /** CodeID is the reference to the stored WASM code */
  code_id: Long;

  /** Updated Tx position when the operation was executed. */
  updated: AbsoluteTxPosition;
  msg: Uint8Array;
}

/**
 * AbsoluteTxPosition is a unique transaction position that allows for global
 * ordering of transactions.
 */
export interface AbsoluteTxPosition {
  /** BlockHeight is the block the contract was created at */
  block_height: Long;

  /**
   * TxIndex is a monotonic counter within the block (actual transaction index,
   * or gas consumed)
   */
  tx_index: Long;
}

/** Model is a struct that holds a KV pair */
export interface Model {
  /** hex-encode key to read it better (this is often ascii) */
  key: Uint8Array;

  /** base64-encode raw value */
  value: Uint8Array;
}

function createBaseAccessTypeParam(): AccessTypeParam {
  return {
    value: 0
  };
}

export const AccessTypeParam = {
  encode(message: AccessTypeParam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(8).int32(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessTypeParam {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessTypeParam();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.value = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccessTypeParam {
    return {
      value: isSet(object.value) ? accessTypeFromJSON(object.value) : 0
    };
  },

  toJSON(message: AccessTypeParam): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = accessTypeToJSON(message.value));
    return obj;
  },

  fromPartial(object: DeepPartial<AccessTypeParam>): AccessTypeParam {
    const message = createBaseAccessTypeParam();
    message.value = object.value ?? 0;
    return message;
  }

};

function createBaseAccessConfig(): AccessConfig {
  return {
    permission: 0,
    address: ""
  };
}

export const AccessConfig = {
  encode(message: AccessConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.permission !== 0) {
      writer.uint32(8).int32(message.permission);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessConfig();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.permission = (reader.int32() as any);
          break;

        case 2:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccessConfig {
    return {
      permission: isSet(object.permission) ? accessTypeFromJSON(object.permission) : 0,
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: AccessConfig): unknown {
    const obj: any = {};
    message.permission !== undefined && (obj.permission = accessTypeToJSON(message.permission));
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<AccessConfig>): AccessConfig {
    const message = createBaseAccessConfig();
    message.permission = object.permission ?? 0;
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseParams(): Params {
  return {
    code_upload_access: undefined,
    instantiate_default_permission: 0,
    max_wasm_code_size: Long.UZERO
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code_upload_access !== undefined) {
      AccessConfig.encode(message.code_upload_access, writer.uint32(10).fork()).ldelim();
    }

    if (message.instantiate_default_permission !== 0) {
      writer.uint32(16).int32(message.instantiate_default_permission);
    }

    if (!message.max_wasm_code_size.isZero()) {
      writer.uint32(24).uint64(message.max_wasm_code_size);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.code_upload_access = AccessConfig.decode(reader, reader.uint32());
          break;

        case 2:
          message.instantiate_default_permission = (reader.int32() as any);
          break;

        case 3:
          message.max_wasm_code_size = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      code_upload_access: isSet(object.code_upload_access) ? AccessConfig.fromJSON(object.code_upload_access) : undefined,
      instantiate_default_permission: isSet(object.instantiate_default_permission) ? accessTypeFromJSON(object.instantiate_default_permission) : 0,
      max_wasm_code_size: isSet(object.max_wasm_code_size) ? Long.fromString(object.max_wasm_code_size) : Long.UZERO
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.code_upload_access !== undefined && (obj.code_upload_access = message.code_upload_access ? AccessConfig.toJSON(message.code_upload_access) : undefined);
    message.instantiate_default_permission !== undefined && (obj.instantiate_default_permission = accessTypeToJSON(message.instantiate_default_permission));
    message.max_wasm_code_size !== undefined && (obj.max_wasm_code_size = (message.max_wasm_code_size || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.code_upload_access = object.code_upload_access !== undefined && object.code_upload_access !== null ? AccessConfig.fromPartial(object.code_upload_access) : undefined;
    message.instantiate_default_permission = object.instantiate_default_permission ?? 0;
    message.max_wasm_code_size = object.max_wasm_code_size !== undefined && object.max_wasm_code_size !== null ? Long.fromValue(object.max_wasm_code_size) : Long.UZERO;
    return message;
  }

};

function createBaseCodeInfo(): CodeInfo {
  return {
    code_hash: new Uint8Array(),
    creator: "",
    instantiate_config: undefined
  };
}

export const CodeInfo = {
  encode(message: CodeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code_hash.length !== 0) {
      writer.uint32(10).bytes(message.code_hash);
    }

    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }

    if (message.instantiate_config !== undefined) {
      AccessConfig.encode(message.instantiate_config, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CodeInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodeInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.code_hash = reader.bytes();
          break;

        case 2:
          message.creator = reader.string();
          break;

        case 5:
          message.instantiate_config = AccessConfig.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CodeInfo {
    return {
      code_hash: isSet(object.code_hash) ? bytesFromBase64(object.code_hash) : new Uint8Array(),
      creator: isSet(object.creator) ? String(object.creator) : "",
      instantiate_config: isSet(object.instantiate_config) ? AccessConfig.fromJSON(object.instantiate_config) : undefined
    };
  },

  toJSON(message: CodeInfo): unknown {
    const obj: any = {};
    message.code_hash !== undefined && (obj.code_hash = base64FromBytes(message.code_hash !== undefined ? message.code_hash : new Uint8Array()));
    message.creator !== undefined && (obj.creator = message.creator);
    message.instantiate_config !== undefined && (obj.instantiate_config = message.instantiate_config ? AccessConfig.toJSON(message.instantiate_config) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<CodeInfo>): CodeInfo {
    const message = createBaseCodeInfo();
    message.code_hash = object.code_hash ?? new Uint8Array();
    message.creator = object.creator ?? "";
    message.instantiate_config = object.instantiate_config !== undefined && object.instantiate_config !== null ? AccessConfig.fromPartial(object.instantiate_config) : undefined;
    return message;
  }

};

function createBaseContractInfo(): ContractInfo {
  return {
    code_id: Long.UZERO,
    creator: "",
    admin: "",
    label: "",
    created: undefined,
    ibc_port_id: "",
    extension: undefined
  };
}

export const ContractInfo = {
  encode(message: ContractInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.code_id.isZero()) {
      writer.uint32(8).uint64(message.code_id);
    }

    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }

    if (message.admin !== "") {
      writer.uint32(26).string(message.admin);
    }

    if (message.label !== "") {
      writer.uint32(34).string(message.label);
    }

    if (message.created !== undefined) {
      AbsoluteTxPosition.encode(message.created, writer.uint32(42).fork()).ldelim();
    }

    if (message.ibc_port_id !== "") {
      writer.uint32(50).string(message.ibc_port_id);
    }

    if (message.extension !== undefined) {
      Any.encode(message.extension, writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.code_id = (reader.uint64() as Long);
          break;

        case 2:
          message.creator = reader.string();
          break;

        case 3:
          message.admin = reader.string();
          break;

        case 4:
          message.label = reader.string();
          break;

        case 5:
          message.created = AbsoluteTxPosition.decode(reader, reader.uint32());
          break;

        case 6:
          message.ibc_port_id = reader.string();
          break;

        case 7:
          message.extension = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ContractInfo {
    return {
      code_id: isSet(object.code_id) ? Long.fromString(object.code_id) : Long.UZERO,
      creator: isSet(object.creator) ? String(object.creator) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      label: isSet(object.label) ? String(object.label) : "",
      created: isSet(object.created) ? AbsoluteTxPosition.fromJSON(object.created) : undefined,
      ibc_port_id: isSet(object.ibc_port_id) ? String(object.ibc_port_id) : "",
      extension: isSet(object.extension) ? Any.fromJSON(object.extension) : undefined
    };
  },

  toJSON(message: ContractInfo): unknown {
    const obj: any = {};
    message.code_id !== undefined && (obj.code_id = (message.code_id || Long.UZERO).toString());
    message.creator !== undefined && (obj.creator = message.creator);
    message.admin !== undefined && (obj.admin = message.admin);
    message.label !== undefined && (obj.label = message.label);
    message.created !== undefined && (obj.created = message.created ? AbsoluteTxPosition.toJSON(message.created) : undefined);
    message.ibc_port_id !== undefined && (obj.ibc_port_id = message.ibc_port_id);
    message.extension !== undefined && (obj.extension = message.extension ? Any.toJSON(message.extension) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ContractInfo>): ContractInfo {
    const message = createBaseContractInfo();
    message.code_id = object.code_id !== undefined && object.code_id !== null ? Long.fromValue(object.code_id) : Long.UZERO;
    message.creator = object.creator ?? "";
    message.admin = object.admin ?? "";
    message.label = object.label ?? "";
    message.created = object.created !== undefined && object.created !== null ? AbsoluteTxPosition.fromPartial(object.created) : undefined;
    message.ibc_port_id = object.ibc_port_id ?? "";
    message.extension = object.extension !== undefined && object.extension !== null ? Any.fromPartial(object.extension) : undefined;
    return message;
  }

};

function createBaseContractCodeHistoryEntry(): ContractCodeHistoryEntry {
  return {
    operation: 0,
    code_id: Long.UZERO,
    updated: undefined,
    msg: new Uint8Array()
  };
}

export const ContractCodeHistoryEntry = {
  encode(message: ContractCodeHistoryEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operation !== 0) {
      writer.uint32(8).int32(message.operation);
    }

    if (!message.code_id.isZero()) {
      writer.uint32(16).uint64(message.code_id);
    }

    if (message.updated !== undefined) {
      AbsoluteTxPosition.encode(message.updated, writer.uint32(26).fork()).ldelim();
    }

    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractCodeHistoryEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractCodeHistoryEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.operation = (reader.int32() as any);
          break;

        case 2:
          message.code_id = (reader.uint64() as Long);
          break;

        case 3:
          message.updated = AbsoluteTxPosition.decode(reader, reader.uint32());
          break;

        case 4:
          message.msg = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ContractCodeHistoryEntry {
    return {
      operation: isSet(object.operation) ? contractCodeHistoryOperationTypeFromJSON(object.operation) : 0,
      code_id: isSet(object.code_id) ? Long.fromString(object.code_id) : Long.UZERO,
      updated: isSet(object.updated) ? AbsoluteTxPosition.fromJSON(object.updated) : undefined,
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
    };
  },

  toJSON(message: ContractCodeHistoryEntry): unknown {
    const obj: any = {};
    message.operation !== undefined && (obj.operation = contractCodeHistoryOperationTypeToJSON(message.operation));
    message.code_id !== undefined && (obj.code_id = (message.code_id || Long.UZERO).toString());
    message.updated !== undefined && (obj.updated = message.updated ? AbsoluteTxPosition.toJSON(message.updated) : undefined);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<ContractCodeHistoryEntry>): ContractCodeHistoryEntry {
    const message = createBaseContractCodeHistoryEntry();
    message.operation = object.operation ?? 0;
    message.code_id = object.code_id !== undefined && object.code_id !== null ? Long.fromValue(object.code_id) : Long.UZERO;
    message.updated = object.updated !== undefined && object.updated !== null ? AbsoluteTxPosition.fromPartial(object.updated) : undefined;
    message.msg = object.msg ?? new Uint8Array();
    return message;
  }

};

function createBaseAbsoluteTxPosition(): AbsoluteTxPosition {
  return {
    block_height: Long.UZERO,
    tx_index: Long.UZERO
  };
}

export const AbsoluteTxPosition = {
  encode(message: AbsoluteTxPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.block_height.isZero()) {
      writer.uint32(8).uint64(message.block_height);
    }

    if (!message.tx_index.isZero()) {
      writer.uint32(16).uint64(message.tx_index);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AbsoluteTxPosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAbsoluteTxPosition();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.block_height = (reader.uint64() as Long);
          break;

        case 2:
          message.tx_index = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AbsoluteTxPosition {
    return {
      block_height: isSet(object.block_height) ? Long.fromString(object.block_height) : Long.UZERO,
      tx_index: isSet(object.tx_index) ? Long.fromString(object.tx_index) : Long.UZERO
    };
  },

  toJSON(message: AbsoluteTxPosition): unknown {
    const obj: any = {};
    message.block_height !== undefined && (obj.block_height = (message.block_height || Long.UZERO).toString());
    message.tx_index !== undefined && (obj.tx_index = (message.tx_index || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<AbsoluteTxPosition>): AbsoluteTxPosition {
    const message = createBaseAbsoluteTxPosition();
    message.block_height = object.block_height !== undefined && object.block_height !== null ? Long.fromValue(object.block_height) : Long.UZERO;
    message.tx_index = object.tx_index !== undefined && object.tx_index !== null ? Long.fromValue(object.tx_index) : Long.UZERO;
    return message;
  }

};

function createBaseModel(): Model {
  return {
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}

export const Model = {
  encode(message: Model, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }

    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Model {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModel();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        case 2:
          message.value = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Model {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },

  toJSON(message: Model): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<Model>): Model {
    const message = createBaseModel();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  }

};