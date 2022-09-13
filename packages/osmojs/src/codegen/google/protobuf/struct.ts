import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, isObject } from "@osmonauts/helpers";

/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 * 
 * The JSON representation for `NullValue` is JSON `null`.
 */
export enum NullValue {
  /** NULL_VALUE - Null value. */
  NULL_VALUE = 0,
  UNRECOGNIZED = -1,
}
export function nullValueFromJSON(object: any): NullValue {
  switch (object) {
    case 0:
    case "NULL_VALUE":
      return NullValue.NULL_VALUE;

    case -1:
    case "UNRECOGNIZED":
    default:
      return NullValue.UNRECOGNIZED;
  }
}
export function nullValueToJSON(object: NullValue): string {
  switch (object) {
    case NullValue.NULL_VALUE:
      return "NULL_VALUE";

    default:
      return "UNKNOWN";
  }
}
export interface Struct_FieldsEntry {
  key: string;
  value: Value;
}

/**
 * `Struct` represents a structured data value, consisting of fields
 * which map to dynamically typed values. In some languages, `Struct`
 * might be supported by a native representation. For example, in
 * scripting languages like JS a struct is represented as an
 * object. The details of that representation are described together
 * with the proto support for the language.
 * 
 * The JSON representation for `Struct` is JSON object.
 */
export interface Struct {
  /** Unordered map of dynamically typed values. */
  fields: {
    [key: string]: Value;
  };
}

/**
 * `Value` represents a dynamically typed value which can be either
 * null, a number, a string, a boolean, a recursive struct value, or a
 * list of values. A producer of value is expected to set one of that
 * variants, absence of any variant indicates an error.
 * 
 * The JSON representation for `Value` is JSON value.
 */
export interface Value {
  /** Represents a null value. */
  null_value?: NullValue;

  /** Represents a double value. */
  number_value?: number;

  /** Represents a string value. */
  string_value?: string;

  /** Represents a boolean value. */
  bool_value?: boolean;

  /** Represents a structured value. */
  struct_value?: Struct;

  /** Represents a repeated `Value`. */
  list_value?: ListValue;
}

/**
 * `ListValue` is a wrapper around a repeated field of values.
 * 
 * The JSON representation for `ListValue` is JSON array.
 */
export interface ListValue {
  /** Repeated field of dynamically typed values. */
  values: Value[];
}

function createBaseStruct_FieldsEntry(): Struct_FieldsEntry {
  return {
    key: "",
    value: undefined
  };
}

export const Struct_FieldsEntry = {
  encode(message: Struct_FieldsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== undefined) {
      Value.encode(message.value, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Struct_FieldsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStruct_FieldsEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = Value.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Struct_FieldsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Value.fromJSON(object.value) : undefined
    };
  },

  toJSON(message: Struct_FieldsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? Value.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Struct_FieldsEntry>): Struct_FieldsEntry {
    const message = createBaseStruct_FieldsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? Value.fromPartial(object.value) : undefined;
    return message;
  }

};

function createBaseStruct(): Struct {
  return {
    fields: {}
  };
}

export const Struct = {
  encode(message: Struct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.fields).forEach(([key, value]) => {
      Struct_FieldsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Struct {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStruct();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          const entry1 = Struct_FieldsEntry.decode(reader, reader.uint32());

          if (entry1.value !== undefined) {
            message.fields[entry1.key] = entry1.value;
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Struct {
    return {
      fields: isObject(object.fields) ? Object.entries(object.fields).reduce<{
        [key: string]: Value;
      }>((acc, [key, value]) => {
        acc[key] = Value.fromJSON(value);
        return acc;
      }, {}) : {}
    };
  },

  toJSON(message: Struct): unknown {
    const obj: any = {};
    obj.fields = {};

    if (message.fields) {
      Object.entries(message.fields).forEach(([k, v]) => {
        obj.fields[k] = Value.toJSON(v);
      });
    }

    return obj;
  },

  fromPartial(object: DeepPartial<Struct>): Struct {
    const message = createBaseStruct();
    message.fields = Object.entries(object.fields ?? {}).reduce<{
      [key: string]: Value;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Value.fromPartial(value);
      }

      return acc;
    }, {});
    return message;
  }

};

function createBaseValue(): Value {
  return {
    null_value: undefined,
    number_value: undefined,
    string_value: undefined,
    bool_value: undefined,
    struct_value: undefined,
    list_value: undefined
  };
}

export const Value = {
  encode(message: Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.null_value !== undefined) {
      writer.uint32(8).int32(message.null_value);
    }

    if (message.number_value !== undefined) {
      writer.uint32(17).double(message.number_value);
    }

    if (message.string_value !== undefined) {
      writer.uint32(26).string(message.string_value);
    }

    if (message.bool_value !== undefined) {
      writer.uint32(32).bool(message.bool_value);
    }

    if (message.struct_value !== undefined) {
      Struct.encode(message.struct_value, writer.uint32(42).fork()).ldelim();
    }

    if (message.list_value !== undefined) {
      ListValue.encode(message.list_value, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Value {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.null_value = (reader.int32() as any);
          break;

        case 2:
          message.number_value = reader.double();
          break;

        case 3:
          message.string_value = reader.string();
          break;

        case 4:
          message.bool_value = reader.bool();
          break;

        case 5:
          message.struct_value = Struct.decode(reader, reader.uint32());
          break;

        case 6:
          message.list_value = ListValue.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Value {
    return {
      null_value: isSet(object.null_value) ? nullValueFromJSON(object.null_value) : undefined,
      number_value: isSet(object.number_value) ? Number(object.number_value) : undefined,
      string_value: isSet(object.string_value) ? String(object.string_value) : undefined,
      bool_value: isSet(object.bool_value) ? Boolean(object.bool_value) : undefined,
      struct_value: isSet(object.struct_value) ? Struct.fromJSON(object.struct_value) : undefined,
      list_value: isSet(object.list_value) ? ListValue.fromJSON(object.list_value) : undefined
    };
  },

  toJSON(message: Value): unknown {
    const obj: any = {};
    message.null_value !== undefined && (obj.null_value = nullValueToJSON(message.null_value));
    message.number_value !== undefined && (obj.number_value = message.number_value);
    message.string_value !== undefined && (obj.string_value = message.string_value);
    message.bool_value !== undefined && (obj.bool_value = message.bool_value);
    message.struct_value !== undefined && (obj.struct_value = message.struct_value ? Struct.toJSON(message.struct_value) : undefined);
    message.list_value !== undefined && (obj.list_value = message.list_value ? ListValue.toJSON(message.list_value) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Value>): Value {
    const message = createBaseValue();
    message.null_value = object.null_value ?? undefined;
    message.number_value = object.number_value ?? undefined;
    message.string_value = object.string_value ?? undefined;
    message.bool_value = object.bool_value ?? undefined;
    message.struct_value = object.struct_value !== undefined && object.struct_value !== null ? Struct.fromPartial(object.struct_value) : undefined;
    message.list_value = object.list_value !== undefined && object.list_value !== null ? ListValue.fromPartial(object.list_value) : undefined;
    return message;
  }

};

function createBaseListValue(): ListValue {
  return {
    values: []
  };
}

export const ListValue = {
  encode(message: ListValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.values) {
      Value.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.values.push(Value.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListValue {
    return {
      values: Array.isArray(object?.values) ? object.values.map((e: any) => Value.fromJSON(e)) : []
    };
  },

  toJSON(message: ListValue): unknown {
    const obj: any = {};

    if (message.values) {
      obj.values = message.values.map(e => e ? Value.toJSON(e) : undefined);
    } else {
      obj.values = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<ListValue>): ListValue {
    const message = createBaseListValue();
    message.values = object.values?.map(e => Value.fromPartial(e)) || [];
    return message;
  }

};