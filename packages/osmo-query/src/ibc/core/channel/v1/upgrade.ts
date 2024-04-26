//@ts-nocheck
import { Timeout, TimeoutAmino, TimeoutSDKType, Order } from "./channel";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
import { isSet } from "../../../../helpers";
/**
 * Upgrade is a verifiable type which contains the relevant information
 * for an attempted upgrade. It provides the proposed changes to the channel
 * end, the timeout for this upgrade attempt and the next packet sequence
 * which allows the counterparty to efficiently know the highest sequence it has received.
 * The next sequence send is used for pruning and upgrading from unordered to ordered channels.
 */
export interface Upgrade {
  fields: UpgradeFields;
  timeout: Timeout;
  nextSequenceSend: bigint;
}
export interface UpgradeProtoMsg {
  typeUrl: "/ibc.core.channel.v1.Upgrade";
  value: Uint8Array;
}
/**
 * Upgrade is a verifiable type which contains the relevant information
 * for an attempted upgrade. It provides the proposed changes to the channel
 * end, the timeout for this upgrade attempt and the next packet sequence
 * which allows the counterparty to efficiently know the highest sequence it has received.
 * The next sequence send is used for pruning and upgrading from unordered to ordered channels.
 */
export interface UpgradeAmino {
  fields?: UpgradeFieldsAmino;
  timeout?: TimeoutAmino;
  next_sequence_send?: string;
}
export interface UpgradeAminoMsg {
  type: "cosmos-sdk/Upgrade";
  value: UpgradeAmino;
}
/**
 * Upgrade is a verifiable type which contains the relevant information
 * for an attempted upgrade. It provides the proposed changes to the channel
 * end, the timeout for this upgrade attempt and the next packet sequence
 * which allows the counterparty to efficiently know the highest sequence it has received.
 * The next sequence send is used for pruning and upgrading from unordered to ordered channels.
 */
export interface UpgradeSDKType {
  fields: UpgradeFieldsSDKType;
  timeout: TimeoutSDKType;
  next_sequence_send: bigint;
}
/**
 * UpgradeFields are the fields in a channel end which may be changed
 * during a channel upgrade.
 */
export interface UpgradeFields {
  ordering: Order;
  connectionHops: string[];
  version: string;
}
export interface UpgradeFieldsProtoMsg {
  typeUrl: "/ibc.core.channel.v1.UpgradeFields";
  value: Uint8Array;
}
/**
 * UpgradeFields are the fields in a channel end which may be changed
 * during a channel upgrade.
 */
export interface UpgradeFieldsAmino {
  ordering?: Order;
  connection_hops?: string[];
  version?: string;
}
export interface UpgradeFieldsAminoMsg {
  type: "cosmos-sdk/UpgradeFields";
  value: UpgradeFieldsAmino;
}
/**
 * UpgradeFields are the fields in a channel end which may be changed
 * during a channel upgrade.
 */
export interface UpgradeFieldsSDKType {
  ordering: Order;
  connection_hops: string[];
  version: string;
}
/**
 * ErrorReceipt defines a type which encapsulates the upgrade sequence and error associated with the
 * upgrade handshake failure. When a channel upgrade handshake is aborted both chains are expected to increment to the
 * next sequence.
 */
export interface ErrorReceipt {
  /** the channel upgrade sequence */
  sequence: bigint;
  /** the error message detailing the cause of failure */
  message: string;
}
export interface ErrorReceiptProtoMsg {
  typeUrl: "/ibc.core.channel.v1.ErrorReceipt";
  value: Uint8Array;
}
/**
 * ErrorReceipt defines a type which encapsulates the upgrade sequence and error associated with the
 * upgrade handshake failure. When a channel upgrade handshake is aborted both chains are expected to increment to the
 * next sequence.
 */
export interface ErrorReceiptAmino {
  /** the channel upgrade sequence */
  sequence?: string;
  /** the error message detailing the cause of failure */
  message?: string;
}
export interface ErrorReceiptAminoMsg {
  type: "cosmos-sdk/ErrorReceipt";
  value: ErrorReceiptAmino;
}
/**
 * ErrorReceipt defines a type which encapsulates the upgrade sequence and error associated with the
 * upgrade handshake failure. When a channel upgrade handshake is aborted both chains are expected to increment to the
 * next sequence.
 */
export interface ErrorReceiptSDKType {
  sequence: bigint;
  message: string;
}
function createBaseUpgrade(): Upgrade {
  return {
    fields: UpgradeFields.fromPartial({}),
    timeout: Timeout.fromPartial({}),
    nextSequenceSend: BigInt(0)
  };
}
export const Upgrade = {
  typeUrl: "/ibc.core.channel.v1.Upgrade",
  aminoType: "cosmos-sdk/Upgrade",
  is(o: any): o is Upgrade {
    return o && (o.$typeUrl === Upgrade.typeUrl || UpgradeFields.is(o.fields) && Timeout.is(o.timeout) && typeof o.nextSequenceSend === "bigint");
  },
  isSDK(o: any): o is UpgradeSDKType {
    return o && (o.$typeUrl === Upgrade.typeUrl || UpgradeFields.isSDK(o.fields) && Timeout.isSDK(o.timeout) && typeof o.next_sequence_send === "bigint");
  },
  isAmino(o: any): o is UpgradeAmino {
    return o && (o.$typeUrl === Upgrade.typeUrl || UpgradeFields.isAmino(o.fields) && Timeout.isAmino(o.timeout) && typeof o.next_sequence_send === "bigint");
  },
  encode(message: Upgrade, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fields !== undefined) {
      UpgradeFields.encode(message.fields, writer.uint32(10).fork()).ldelim();
    }
    if (message.timeout !== undefined) {
      Timeout.encode(message.timeout, writer.uint32(18).fork()).ldelim();
    }
    if (message.nextSequenceSend !== BigInt(0)) {
      writer.uint32(24).uint64(message.nextSequenceSend);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Upgrade {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpgrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fields = UpgradeFields.decode(reader, reader.uint32());
          break;
        case 2:
          message.timeout = Timeout.decode(reader, reader.uint32());
          break;
        case 3:
          message.nextSequenceSend = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Upgrade>): Upgrade {
    const message = createBaseUpgrade();
    message.fields = object.fields !== undefined && object.fields !== null ? UpgradeFields.fromPartial(object.fields) : undefined;
    message.timeout = object.timeout !== undefined && object.timeout !== null ? Timeout.fromPartial(object.timeout) : undefined;
    message.nextSequenceSend = object.nextSequenceSend !== undefined && object.nextSequenceSend !== null ? BigInt(object.nextSequenceSend.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: UpgradeAmino): Upgrade {
    const message = createBaseUpgrade();
    if (object.fields !== undefined && object.fields !== null) {
      message.fields = UpgradeFields.fromAmino(object.fields);
    }
    if (object.timeout !== undefined && object.timeout !== null) {
      message.timeout = Timeout.fromAmino(object.timeout);
    }
    if (object.next_sequence_send !== undefined && object.next_sequence_send !== null) {
      message.nextSequenceSend = BigInt(object.next_sequence_send);
    }
    return message;
  },
  toAmino(message: Upgrade): UpgradeAmino {
    const obj: any = {};
    obj.fields = message.fields ? UpgradeFields.toAmino(message.fields) : undefined;
    obj.timeout = message.timeout ? Timeout.toAmino(message.timeout) : undefined;
    obj.next_sequence_send = message.nextSequenceSend !== BigInt(0) ? message.nextSequenceSend.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: UpgradeAminoMsg): Upgrade {
    return Upgrade.fromAmino(object.value);
  },
  toAminoMsg(message: Upgrade): UpgradeAminoMsg {
    return {
      type: "cosmos-sdk/Upgrade",
      value: Upgrade.toAmino(message)
    };
  },
  fromProtoMsg(message: UpgradeProtoMsg): Upgrade {
    return Upgrade.decode(message.value);
  },
  toProto(message: Upgrade): Uint8Array {
    return Upgrade.encode(message).finish();
  },
  toProtoMsg(message: Upgrade): UpgradeProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.Upgrade",
      value: Upgrade.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Upgrade.typeUrl, Upgrade);
GlobalDecoderRegistry.registerAminoProtoMapping(Upgrade.aminoType, Upgrade.typeUrl);
function createBaseUpgradeFields(): UpgradeFields {
  return {
    ordering: 0,
    connectionHops: [],
    version: ""
  };
}
export const UpgradeFields = {
  typeUrl: "/ibc.core.channel.v1.UpgradeFields",
  aminoType: "cosmos-sdk/UpgradeFields",
  is(o: any): o is UpgradeFields {
    return o && (o.$typeUrl === UpgradeFields.typeUrl || isSet(o.ordering) && Array.isArray(o.connectionHops) && (!o.connectionHops.length || typeof o.connectionHops[0] === "string") && typeof o.version === "string");
  },
  isSDK(o: any): o is UpgradeFieldsSDKType {
    return o && (o.$typeUrl === UpgradeFields.typeUrl || isSet(o.ordering) && Array.isArray(o.connection_hops) && (!o.connection_hops.length || typeof o.connection_hops[0] === "string") && typeof o.version === "string");
  },
  isAmino(o: any): o is UpgradeFieldsAmino {
    return o && (o.$typeUrl === UpgradeFields.typeUrl || isSet(o.ordering) && Array.isArray(o.connection_hops) && (!o.connection_hops.length || typeof o.connection_hops[0] === "string") && typeof o.version === "string");
  },
  encode(message: UpgradeFields, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ordering !== 0) {
      writer.uint32(8).int32(message.ordering);
    }
    for (const v of message.connectionHops) {
      writer.uint32(18).string(v!);
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpgradeFields {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpgradeFields();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ordering = (reader.int32() as any);
          break;
        case 2:
          message.connectionHops.push(reader.string());
          break;
        case 3:
          message.version = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UpgradeFields>): UpgradeFields {
    const message = createBaseUpgradeFields();
    message.ordering = object.ordering ?? 0;
    message.connectionHops = object.connectionHops?.map(e => e) || [];
    message.version = object.version ?? "";
    return message;
  },
  fromAmino(object: UpgradeFieldsAmino): UpgradeFields {
    const message = createBaseUpgradeFields();
    if (object.ordering !== undefined && object.ordering !== null) {
      message.ordering = object.ordering;
    }
    message.connectionHops = object.connection_hops?.map(e => e) || [];
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    return message;
  },
  toAmino(message: UpgradeFields): UpgradeFieldsAmino {
    const obj: any = {};
    obj.ordering = message.ordering === 0 ? undefined : message.ordering;
    if (message.connectionHops) {
      obj.connection_hops = message.connectionHops.map(e => e);
    } else {
      obj.connection_hops = message.connectionHops;
    }
    obj.version = message.version === "" ? undefined : message.version;
    return obj;
  },
  fromAminoMsg(object: UpgradeFieldsAminoMsg): UpgradeFields {
    return UpgradeFields.fromAmino(object.value);
  },
  toAminoMsg(message: UpgradeFields): UpgradeFieldsAminoMsg {
    return {
      type: "cosmos-sdk/UpgradeFields",
      value: UpgradeFields.toAmino(message)
    };
  },
  fromProtoMsg(message: UpgradeFieldsProtoMsg): UpgradeFields {
    return UpgradeFields.decode(message.value);
  },
  toProto(message: UpgradeFields): Uint8Array {
    return UpgradeFields.encode(message).finish();
  },
  toProtoMsg(message: UpgradeFields): UpgradeFieldsProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.UpgradeFields",
      value: UpgradeFields.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UpgradeFields.typeUrl, UpgradeFields);
GlobalDecoderRegistry.registerAminoProtoMapping(UpgradeFields.aminoType, UpgradeFields.typeUrl);
function createBaseErrorReceipt(): ErrorReceipt {
  return {
    sequence: BigInt(0),
    message: ""
  };
}
export const ErrorReceipt = {
  typeUrl: "/ibc.core.channel.v1.ErrorReceipt",
  aminoType: "cosmos-sdk/ErrorReceipt",
  is(o: any): o is ErrorReceipt {
    return o && (o.$typeUrl === ErrorReceipt.typeUrl || typeof o.sequence === "bigint" && typeof o.message === "string");
  },
  isSDK(o: any): o is ErrorReceiptSDKType {
    return o && (o.$typeUrl === ErrorReceipt.typeUrl || typeof o.sequence === "bigint" && typeof o.message === "string");
  },
  isAmino(o: any): o is ErrorReceiptAmino {
    return o && (o.$typeUrl === ErrorReceipt.typeUrl || typeof o.sequence === "bigint" && typeof o.message === "string");
  },
  encode(message: ErrorReceipt, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ErrorReceipt {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseErrorReceipt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;
        case 2:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ErrorReceipt>): ErrorReceipt {
    const message = createBaseErrorReceipt();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.message = object.message ?? "";
    return message;
  },
  fromAmino(object: ErrorReceiptAmino): ErrorReceipt {
    const message = createBaseErrorReceipt();
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    }
    return message;
  },
  toAmino(message: ErrorReceipt): ErrorReceiptAmino {
    const obj: any = {};
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence.toString() : undefined;
    obj.message = message.message === "" ? undefined : message.message;
    return obj;
  },
  fromAminoMsg(object: ErrorReceiptAminoMsg): ErrorReceipt {
    return ErrorReceipt.fromAmino(object.value);
  },
  toAminoMsg(message: ErrorReceipt): ErrorReceiptAminoMsg {
    return {
      type: "cosmos-sdk/ErrorReceipt",
      value: ErrorReceipt.toAmino(message)
    };
  },
  fromProtoMsg(message: ErrorReceiptProtoMsg): ErrorReceipt {
    return ErrorReceipt.decode(message.value);
  },
  toProto(message: ErrorReceipt): Uint8Array {
    return ErrorReceipt.encode(message).finish();
  },
  toProtoMsg(message: ErrorReceipt): ErrorReceiptProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.ErrorReceipt",
      value: ErrorReceipt.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ErrorReceipt.typeUrl, ErrorReceipt);
GlobalDecoderRegistry.registerAminoProtoMapping(ErrorReceipt.aminoType, ErrorReceipt.typeUrl);