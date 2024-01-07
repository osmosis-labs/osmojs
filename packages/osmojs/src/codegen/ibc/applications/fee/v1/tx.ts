import { Fee, FeeAmino, FeeSDKType, PacketFee, PacketFeeAmino, PacketFeeSDKType } from "./fee";
import { PacketId, PacketIdAmino, PacketIdSDKType } from "../../../core/channel/v1/channel";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
/** MsgRegisterPayee defines the request type for the RegisterPayee rpc */
export interface MsgRegisterPayee {
  /** unique port identifier */
  portId: string;
  /** unique channel identifier */
  channelId: string;
  /** the relayer address */
  relayer: string;
  /** the payee address */
  payee: string;
}
export interface MsgRegisterPayeeProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayee";
  value: Uint8Array;
}
/** MsgRegisterPayee defines the request type for the RegisterPayee rpc */
export interface MsgRegisterPayeeAmino {
  /** unique port identifier */
  port_id?: string;
  /** unique channel identifier */
  channel_id?: string;
  /** the relayer address */
  relayer?: string;
  /** the payee address */
  payee?: string;
}
export interface MsgRegisterPayeeAminoMsg {
  type: "cosmos-sdk/MsgRegisterPayee";
  value: MsgRegisterPayeeAmino;
}
/** MsgRegisterPayee defines the request type for the RegisterPayee rpc */
export interface MsgRegisterPayeeSDKType {
  port_id: string;
  channel_id: string;
  relayer: string;
  payee: string;
}
/** MsgRegisterPayeeResponse defines the response type for the RegisterPayee rpc */
export interface MsgRegisterPayeeResponse {}
export interface MsgRegisterPayeeResponseProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayeeResponse";
  value: Uint8Array;
}
/** MsgRegisterPayeeResponse defines the response type for the RegisterPayee rpc */
export interface MsgRegisterPayeeResponseAmino {}
export interface MsgRegisterPayeeResponseAminoMsg {
  type: "cosmos-sdk/MsgRegisterPayeeResponse";
  value: MsgRegisterPayeeResponseAmino;
}
/** MsgRegisterPayeeResponse defines the response type for the RegisterPayee rpc */
export interface MsgRegisterPayeeResponseSDKType {}
/** MsgRegisterCounterpartyPayee defines the request type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayee {
  /** unique port identifier */
  portId: string;
  /** unique channel identifier */
  channelId: string;
  /** the relayer address */
  relayer: string;
  /** the counterparty payee address */
  counterpartyPayee: string;
}
export interface MsgRegisterCounterpartyPayeeProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee";
  value: Uint8Array;
}
/** MsgRegisterCounterpartyPayee defines the request type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayeeAmino {
  /** unique port identifier */
  port_id?: string;
  /** unique channel identifier */
  channel_id?: string;
  /** the relayer address */
  relayer?: string;
  /** the counterparty payee address */
  counterparty_payee?: string;
}
export interface MsgRegisterCounterpartyPayeeAminoMsg {
  type: "cosmos-sdk/MsgRegisterCounterpartyPayee";
  value: MsgRegisterCounterpartyPayeeAmino;
}
/** MsgRegisterCounterpartyPayee defines the request type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayeeSDKType {
  port_id: string;
  channel_id: string;
  relayer: string;
  counterparty_payee: string;
}
/** MsgRegisterCounterpartyPayeeResponse defines the response type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayeeResponse {}
export interface MsgRegisterCounterpartyPayeeResponseProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayeeResponse";
  value: Uint8Array;
}
/** MsgRegisterCounterpartyPayeeResponse defines the response type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayeeResponseAmino {}
export interface MsgRegisterCounterpartyPayeeResponseAminoMsg {
  type: "cosmos-sdk/MsgRegisterCounterpartyPayeeResponse";
  value: MsgRegisterCounterpartyPayeeResponseAmino;
}
/** MsgRegisterCounterpartyPayeeResponse defines the response type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayeeResponseSDKType {}
/**
 * MsgPayPacketFee defines the request type for the PayPacketFee rpc
 * This Msg can be used to pay for a packet at the next sequence send & should be combined with the Msg that will be
 * paid for
 */
export interface MsgPayPacketFee {
  /** fee encapsulates the recv, ack and timeout fees associated with an IBC packet */
  fee: Fee;
  /** the source port unique identifier */
  sourcePortId: string;
  /** the source channel unique identifier */
  sourceChannelId: string;
  /** account address to refund fee if necessary */
  signer: string;
  /** optional list of relayers permitted to the receive packet fees */
  relayers: string[];
}
export interface MsgPayPacketFeeProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFee";
  value: Uint8Array;
}
/**
 * MsgPayPacketFee defines the request type for the PayPacketFee rpc
 * This Msg can be used to pay for a packet at the next sequence send & should be combined with the Msg that will be
 * paid for
 */
export interface MsgPayPacketFeeAmino {
  /** fee encapsulates the recv, ack and timeout fees associated with an IBC packet */
  fee: FeeAmino;
  /** the source port unique identifier */
  source_port_id?: string;
  /** the source channel unique identifier */
  source_channel_id?: string;
  /** account address to refund fee if necessary */
  signer?: string;
  /** optional list of relayers permitted to the receive packet fees */
  relayers?: string[];
}
export interface MsgPayPacketFeeAminoMsg {
  type: "cosmos-sdk/MsgPayPacketFee";
  value: MsgPayPacketFeeAmino;
}
/**
 * MsgPayPacketFee defines the request type for the PayPacketFee rpc
 * This Msg can be used to pay for a packet at the next sequence send & should be combined with the Msg that will be
 * paid for
 */
export interface MsgPayPacketFeeSDKType {
  fee: FeeSDKType;
  source_port_id: string;
  source_channel_id: string;
  signer: string;
  relayers: string[];
}
/** MsgPayPacketFeeResponse defines the response type for the PayPacketFee rpc */
export interface MsgPayPacketFeeResponse {}
export interface MsgPayPacketFeeResponseProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeResponse";
  value: Uint8Array;
}
/** MsgPayPacketFeeResponse defines the response type for the PayPacketFee rpc */
export interface MsgPayPacketFeeResponseAmino {}
export interface MsgPayPacketFeeResponseAminoMsg {
  type: "cosmos-sdk/MsgPayPacketFeeResponse";
  value: MsgPayPacketFeeResponseAmino;
}
/** MsgPayPacketFeeResponse defines the response type for the PayPacketFee rpc */
export interface MsgPayPacketFeeResponseSDKType {}
/**
 * MsgPayPacketFeeAsync defines the request type for the PayPacketFeeAsync rpc
 * This Msg can be used to pay for a packet at a specified sequence (instead of the next sequence send)
 */
export interface MsgPayPacketFeeAsync {
  /** unique packet identifier comprised of the channel ID, port ID and sequence */
  packetId: PacketId;
  /** the packet fee associated with a particular IBC packet */
  packetFee: PacketFee;
}
export interface MsgPayPacketFeeAsyncProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync";
  value: Uint8Array;
}
/**
 * MsgPayPacketFeeAsync defines the request type for the PayPacketFeeAsync rpc
 * This Msg can be used to pay for a packet at a specified sequence (instead of the next sequence send)
 */
export interface MsgPayPacketFeeAsyncAmino {
  /** unique packet identifier comprised of the channel ID, port ID and sequence */
  packet_id: PacketIdAmino;
  /** the packet fee associated with a particular IBC packet */
  packet_fee: PacketFeeAmino;
}
export interface MsgPayPacketFeeAsyncAminoMsg {
  type: "cosmos-sdk/MsgPayPacketFeeAsync";
  value: MsgPayPacketFeeAsyncAmino;
}
/**
 * MsgPayPacketFeeAsync defines the request type for the PayPacketFeeAsync rpc
 * This Msg can be used to pay for a packet at a specified sequence (instead of the next sequence send)
 */
export interface MsgPayPacketFeeAsyncSDKType {
  packet_id: PacketIdSDKType;
  packet_fee: PacketFeeSDKType;
}
/** MsgPayPacketFeeAsyncResponse defines the response type for the PayPacketFeeAsync rpc */
export interface MsgPayPacketFeeAsyncResponse {}
export interface MsgPayPacketFeeAsyncResponseProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsyncResponse";
  value: Uint8Array;
}
/** MsgPayPacketFeeAsyncResponse defines the response type for the PayPacketFeeAsync rpc */
export interface MsgPayPacketFeeAsyncResponseAmino {}
export interface MsgPayPacketFeeAsyncResponseAminoMsg {
  type: "cosmos-sdk/MsgPayPacketFeeAsyncResponse";
  value: MsgPayPacketFeeAsyncResponseAmino;
}
/** MsgPayPacketFeeAsyncResponse defines the response type for the PayPacketFeeAsync rpc */
export interface MsgPayPacketFeeAsyncResponseSDKType {}
function createBaseMsgRegisterPayee(): MsgRegisterPayee {
  return {
    portId: "",
    channelId: "",
    relayer: "",
    payee: ""
  };
}
export const MsgRegisterPayee = {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayee",
  aminoType: "cosmos-sdk/MsgRegisterPayee",
  is(o: any): o is MsgRegisterPayee {
    return o && (o.$typeUrl === MsgRegisterPayee.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && typeof o.relayer === "string" && typeof o.payee === "string");
  },
  isSDK(o: any): o is MsgRegisterPayeeSDKType {
    return o && (o.$typeUrl === MsgRegisterPayee.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.relayer === "string" && typeof o.payee === "string");
  },
  isAmino(o: any): o is MsgRegisterPayeeAmino {
    return o && (o.$typeUrl === MsgRegisterPayee.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.relayer === "string" && typeof o.payee === "string");
  },
  encode(message: MsgRegisterPayee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(26).string(message.relayer);
    }
    if (message.payee !== "") {
      writer.uint32(34).string(message.payee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterPayee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterPayee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.relayer = reader.string();
          break;
        case 4:
          message.payee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterPayee {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
      payee: isSet(object.payee) ? String(object.payee) : ""
    };
  },
  toJSON(message: MsgRegisterPayee): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    message.payee !== undefined && (obj.payee = message.payee);
    return obj;
  },
  fromPartial(object: Partial<MsgRegisterPayee>): MsgRegisterPayee {
    const message = createBaseMsgRegisterPayee();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    message.payee = object.payee ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterPayeeAmino): MsgRegisterPayee {
    const message = createBaseMsgRegisterPayee();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.relayer !== undefined && object.relayer !== null) {
      message.relayer = object.relayer;
    }
    if (object.payee !== undefined && object.payee !== null) {
      message.payee = object.payee;
    }
    return message;
  },
  toAmino(message: MsgRegisterPayee): MsgRegisterPayeeAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.relayer = message.relayer;
    obj.payee = message.payee;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterPayeeAminoMsg): MsgRegisterPayee {
    return MsgRegisterPayee.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterPayee): MsgRegisterPayeeAminoMsg {
    return {
      type: "cosmos-sdk/MsgRegisterPayee",
      value: MsgRegisterPayee.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRegisterPayeeProtoMsg): MsgRegisterPayee {
    return MsgRegisterPayee.decode(message.value);
  },
  toProto(message: MsgRegisterPayee): Uint8Array {
    return MsgRegisterPayee.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterPayee): MsgRegisterPayeeProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayee",
      value: MsgRegisterPayee.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRegisterPayee.typeUrl, MsgRegisterPayee);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRegisterPayee.aminoType, MsgRegisterPayee.typeUrl);
function createBaseMsgRegisterPayeeResponse(): MsgRegisterPayeeResponse {
  return {};
}
export const MsgRegisterPayeeResponse = {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayeeResponse",
  aminoType: "cosmos-sdk/MsgRegisterPayeeResponse",
  is(o: any): o is MsgRegisterPayeeResponse {
    return o && o.$typeUrl === MsgRegisterPayeeResponse.typeUrl;
  },
  isSDK(o: any): o is MsgRegisterPayeeResponseSDKType {
    return o && o.$typeUrl === MsgRegisterPayeeResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRegisterPayeeResponseAmino {
    return o && o.$typeUrl === MsgRegisterPayeeResponse.typeUrl;
  },
  encode(_: MsgRegisterPayeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterPayeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterPayeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgRegisterPayeeResponse {
    return {};
  },
  toJSON(_: MsgRegisterPayeeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgRegisterPayeeResponse>): MsgRegisterPayeeResponse {
    const message = createBaseMsgRegisterPayeeResponse();
    return message;
  },
  fromAmino(_: MsgRegisterPayeeResponseAmino): MsgRegisterPayeeResponse {
    const message = createBaseMsgRegisterPayeeResponse();
    return message;
  },
  toAmino(_: MsgRegisterPayeeResponse): MsgRegisterPayeeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterPayeeResponseAminoMsg): MsgRegisterPayeeResponse {
    return MsgRegisterPayeeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterPayeeResponse): MsgRegisterPayeeResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRegisterPayeeResponse",
      value: MsgRegisterPayeeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRegisterPayeeResponseProtoMsg): MsgRegisterPayeeResponse {
    return MsgRegisterPayeeResponse.decode(message.value);
  },
  toProto(message: MsgRegisterPayeeResponse): Uint8Array {
    return MsgRegisterPayeeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterPayeeResponse): MsgRegisterPayeeResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayeeResponse",
      value: MsgRegisterPayeeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRegisterPayeeResponse.typeUrl, MsgRegisterPayeeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRegisterPayeeResponse.aminoType, MsgRegisterPayeeResponse.typeUrl);
function createBaseMsgRegisterCounterpartyPayee(): MsgRegisterCounterpartyPayee {
  return {
    portId: "",
    channelId: "",
    relayer: "",
    counterpartyPayee: ""
  };
}
export const MsgRegisterCounterpartyPayee = {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee",
  aminoType: "cosmos-sdk/MsgRegisterCounterpartyPayee",
  is(o: any): o is MsgRegisterCounterpartyPayee {
    return o && (o.$typeUrl === MsgRegisterCounterpartyPayee.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && typeof o.relayer === "string" && typeof o.counterpartyPayee === "string");
  },
  isSDK(o: any): o is MsgRegisterCounterpartyPayeeSDKType {
    return o && (o.$typeUrl === MsgRegisterCounterpartyPayee.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.relayer === "string" && typeof o.counterparty_payee === "string");
  },
  isAmino(o: any): o is MsgRegisterCounterpartyPayeeAmino {
    return o && (o.$typeUrl === MsgRegisterCounterpartyPayee.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.relayer === "string" && typeof o.counterparty_payee === "string");
  },
  encode(message: MsgRegisterCounterpartyPayee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(26).string(message.relayer);
    }
    if (message.counterpartyPayee !== "") {
      writer.uint32(34).string(message.counterpartyPayee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterCounterpartyPayee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterCounterpartyPayee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.relayer = reader.string();
          break;
        case 4:
          message.counterpartyPayee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterCounterpartyPayee {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
      counterpartyPayee: isSet(object.counterpartyPayee) ? String(object.counterpartyPayee) : ""
    };
  },
  toJSON(message: MsgRegisterCounterpartyPayee): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    message.counterpartyPayee !== undefined && (obj.counterpartyPayee = message.counterpartyPayee);
    return obj;
  },
  fromPartial(object: Partial<MsgRegisterCounterpartyPayee>): MsgRegisterCounterpartyPayee {
    const message = createBaseMsgRegisterCounterpartyPayee();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    message.counterpartyPayee = object.counterpartyPayee ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterCounterpartyPayeeAmino): MsgRegisterCounterpartyPayee {
    const message = createBaseMsgRegisterCounterpartyPayee();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.relayer !== undefined && object.relayer !== null) {
      message.relayer = object.relayer;
    }
    if (object.counterparty_payee !== undefined && object.counterparty_payee !== null) {
      message.counterpartyPayee = object.counterparty_payee;
    }
    return message;
  },
  toAmino(message: MsgRegisterCounterpartyPayee): MsgRegisterCounterpartyPayeeAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.relayer = message.relayer;
    obj.counterparty_payee = message.counterpartyPayee;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterCounterpartyPayeeAminoMsg): MsgRegisterCounterpartyPayee {
    return MsgRegisterCounterpartyPayee.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterCounterpartyPayee): MsgRegisterCounterpartyPayeeAminoMsg {
    return {
      type: "cosmos-sdk/MsgRegisterCounterpartyPayee",
      value: MsgRegisterCounterpartyPayee.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRegisterCounterpartyPayeeProtoMsg): MsgRegisterCounterpartyPayee {
    return MsgRegisterCounterpartyPayee.decode(message.value);
  },
  toProto(message: MsgRegisterCounterpartyPayee): Uint8Array {
    return MsgRegisterCounterpartyPayee.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterCounterpartyPayee): MsgRegisterCounterpartyPayeeProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee",
      value: MsgRegisterCounterpartyPayee.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRegisterCounterpartyPayee.typeUrl, MsgRegisterCounterpartyPayee);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRegisterCounterpartyPayee.aminoType, MsgRegisterCounterpartyPayee.typeUrl);
function createBaseMsgRegisterCounterpartyPayeeResponse(): MsgRegisterCounterpartyPayeeResponse {
  return {};
}
export const MsgRegisterCounterpartyPayeeResponse = {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayeeResponse",
  aminoType: "cosmos-sdk/MsgRegisterCounterpartyPayeeResponse",
  is(o: any): o is MsgRegisterCounterpartyPayeeResponse {
    return o && o.$typeUrl === MsgRegisterCounterpartyPayeeResponse.typeUrl;
  },
  isSDK(o: any): o is MsgRegisterCounterpartyPayeeResponseSDKType {
    return o && o.$typeUrl === MsgRegisterCounterpartyPayeeResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRegisterCounterpartyPayeeResponseAmino {
    return o && o.$typeUrl === MsgRegisterCounterpartyPayeeResponse.typeUrl;
  },
  encode(_: MsgRegisterCounterpartyPayeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterCounterpartyPayeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterCounterpartyPayeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgRegisterCounterpartyPayeeResponse {
    return {};
  },
  toJSON(_: MsgRegisterCounterpartyPayeeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgRegisterCounterpartyPayeeResponse>): MsgRegisterCounterpartyPayeeResponse {
    const message = createBaseMsgRegisterCounterpartyPayeeResponse();
    return message;
  },
  fromAmino(_: MsgRegisterCounterpartyPayeeResponseAmino): MsgRegisterCounterpartyPayeeResponse {
    const message = createBaseMsgRegisterCounterpartyPayeeResponse();
    return message;
  },
  toAmino(_: MsgRegisterCounterpartyPayeeResponse): MsgRegisterCounterpartyPayeeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterCounterpartyPayeeResponseAminoMsg): MsgRegisterCounterpartyPayeeResponse {
    return MsgRegisterCounterpartyPayeeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterCounterpartyPayeeResponse): MsgRegisterCounterpartyPayeeResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRegisterCounterpartyPayeeResponse",
      value: MsgRegisterCounterpartyPayeeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRegisterCounterpartyPayeeResponseProtoMsg): MsgRegisterCounterpartyPayeeResponse {
    return MsgRegisterCounterpartyPayeeResponse.decode(message.value);
  },
  toProto(message: MsgRegisterCounterpartyPayeeResponse): Uint8Array {
    return MsgRegisterCounterpartyPayeeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterCounterpartyPayeeResponse): MsgRegisterCounterpartyPayeeResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayeeResponse",
      value: MsgRegisterCounterpartyPayeeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRegisterCounterpartyPayeeResponse.typeUrl, MsgRegisterCounterpartyPayeeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRegisterCounterpartyPayeeResponse.aminoType, MsgRegisterCounterpartyPayeeResponse.typeUrl);
function createBaseMsgPayPacketFee(): MsgPayPacketFee {
  return {
    fee: Fee.fromPartial({}),
    sourcePortId: "",
    sourceChannelId: "",
    signer: "",
    relayers: []
  };
}
export const MsgPayPacketFee = {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFee",
  aminoType: "cosmos-sdk/MsgPayPacketFee",
  is(o: any): o is MsgPayPacketFee {
    return o && (o.$typeUrl === MsgPayPacketFee.typeUrl || Fee.is(o.fee) && typeof o.sourcePortId === "string" && typeof o.sourceChannelId === "string" && typeof o.signer === "string" && Array.isArray(o.relayers) && (!o.relayers.length || typeof o.relayers[0] === "string"));
  },
  isSDK(o: any): o is MsgPayPacketFeeSDKType {
    return o && (o.$typeUrl === MsgPayPacketFee.typeUrl || Fee.isSDK(o.fee) && typeof o.source_port_id === "string" && typeof o.source_channel_id === "string" && typeof o.signer === "string" && Array.isArray(o.relayers) && (!o.relayers.length || typeof o.relayers[0] === "string"));
  },
  isAmino(o: any): o is MsgPayPacketFeeAmino {
    return o && (o.$typeUrl === MsgPayPacketFee.typeUrl || Fee.isAmino(o.fee) && typeof o.source_port_id === "string" && typeof o.source_channel_id === "string" && typeof o.signer === "string" && Array.isArray(o.relayers) && (!o.relayers.length || typeof o.relayers[0] === "string"));
  },
  encode(message: MsgPayPacketFee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }
    if (message.sourcePortId !== "") {
      writer.uint32(18).string(message.sourcePortId);
    }
    if (message.sourceChannelId !== "") {
      writer.uint32(26).string(message.sourceChannelId);
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    for (const v of message.relayers) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPayPacketFee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fee = Fee.decode(reader, reader.uint32());
          break;
        case 2:
          message.sourcePortId = reader.string();
          break;
        case 3:
          message.sourceChannelId = reader.string();
          break;
        case 4:
          message.signer = reader.string();
          break;
        case 5:
          message.relayers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgPayPacketFee {
    return {
      fee: isSet(object.fee) ? Fee.fromJSON(object.fee) : undefined,
      sourcePortId: isSet(object.sourcePortId) ? String(object.sourcePortId) : "",
      sourceChannelId: isSet(object.sourceChannelId) ? String(object.sourceChannelId) : "",
      signer: isSet(object.signer) ? String(object.signer) : "",
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: MsgPayPacketFee): unknown {
    const obj: any = {};
    message.fee !== undefined && (obj.fee = message.fee ? Fee.toJSON(message.fee) : undefined);
    message.sourcePortId !== undefined && (obj.sourcePortId = message.sourcePortId);
    message.sourceChannelId !== undefined && (obj.sourceChannelId = message.sourceChannelId);
    message.signer !== undefined && (obj.signer = message.signer);
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgPayPacketFee>): MsgPayPacketFee {
    const message = createBaseMsgPayPacketFee();
    message.fee = object.fee !== undefined && object.fee !== null ? Fee.fromPartial(object.fee) : undefined;
    message.sourcePortId = object.sourcePortId ?? "";
    message.sourceChannelId = object.sourceChannelId ?? "";
    message.signer = object.signer ?? "";
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgPayPacketFeeAmino): MsgPayPacketFee {
    const message = createBaseMsgPayPacketFee();
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Fee.fromAmino(object.fee);
    }
    if (object.source_port_id !== undefined && object.source_port_id !== null) {
      message.sourcePortId = object.source_port_id;
    }
    if (object.source_channel_id !== undefined && object.source_channel_id !== null) {
      message.sourceChannelId = object.source_channel_id;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgPayPacketFee): MsgPayPacketFeeAmino {
    const obj: any = {};
    obj.fee = message.fee ? Fee.toAmino(message.fee) : Fee.fromPartial({});
    obj.source_port_id = message.sourcePortId;
    obj.source_channel_id = message.sourceChannelId;
    obj.signer = message.signer;
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgPayPacketFeeAminoMsg): MsgPayPacketFee {
    return MsgPayPacketFee.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPayPacketFee): MsgPayPacketFeeAminoMsg {
    return {
      type: "cosmos-sdk/MsgPayPacketFee",
      value: MsgPayPacketFee.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgPayPacketFeeProtoMsg): MsgPayPacketFee {
    return MsgPayPacketFee.decode(message.value);
  },
  toProto(message: MsgPayPacketFee): Uint8Array {
    return MsgPayPacketFee.encode(message).finish();
  },
  toProtoMsg(message: MsgPayPacketFee): MsgPayPacketFeeProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFee",
      value: MsgPayPacketFee.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgPayPacketFee.typeUrl, MsgPayPacketFee);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgPayPacketFee.aminoType, MsgPayPacketFee.typeUrl);
function createBaseMsgPayPacketFeeResponse(): MsgPayPacketFeeResponse {
  return {};
}
export const MsgPayPacketFeeResponse = {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeResponse",
  aminoType: "cosmos-sdk/MsgPayPacketFeeResponse",
  is(o: any): o is MsgPayPacketFeeResponse {
    return o && o.$typeUrl === MsgPayPacketFeeResponse.typeUrl;
  },
  isSDK(o: any): o is MsgPayPacketFeeResponseSDKType {
    return o && o.$typeUrl === MsgPayPacketFeeResponse.typeUrl;
  },
  isAmino(o: any): o is MsgPayPacketFeeResponseAmino {
    return o && o.$typeUrl === MsgPayPacketFeeResponse.typeUrl;
  },
  encode(_: MsgPayPacketFeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPayPacketFeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgPayPacketFeeResponse {
    return {};
  },
  toJSON(_: MsgPayPacketFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgPayPacketFeeResponse>): MsgPayPacketFeeResponse {
    const message = createBaseMsgPayPacketFeeResponse();
    return message;
  },
  fromAmino(_: MsgPayPacketFeeResponseAmino): MsgPayPacketFeeResponse {
    const message = createBaseMsgPayPacketFeeResponse();
    return message;
  },
  toAmino(_: MsgPayPacketFeeResponse): MsgPayPacketFeeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgPayPacketFeeResponseAminoMsg): MsgPayPacketFeeResponse {
    return MsgPayPacketFeeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPayPacketFeeResponse): MsgPayPacketFeeResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgPayPacketFeeResponse",
      value: MsgPayPacketFeeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgPayPacketFeeResponseProtoMsg): MsgPayPacketFeeResponse {
    return MsgPayPacketFeeResponse.decode(message.value);
  },
  toProto(message: MsgPayPacketFeeResponse): Uint8Array {
    return MsgPayPacketFeeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPayPacketFeeResponse): MsgPayPacketFeeResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeResponse",
      value: MsgPayPacketFeeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgPayPacketFeeResponse.typeUrl, MsgPayPacketFeeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgPayPacketFeeResponse.aminoType, MsgPayPacketFeeResponse.typeUrl);
function createBaseMsgPayPacketFeeAsync(): MsgPayPacketFeeAsync {
  return {
    packetId: PacketId.fromPartial({}),
    packetFee: PacketFee.fromPartial({})
  };
}
export const MsgPayPacketFeeAsync = {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync",
  aminoType: "cosmos-sdk/MsgPayPacketFeeAsync",
  is(o: any): o is MsgPayPacketFeeAsync {
    return o && (o.$typeUrl === MsgPayPacketFeeAsync.typeUrl || PacketId.is(o.packetId) && PacketFee.is(o.packetFee));
  },
  isSDK(o: any): o is MsgPayPacketFeeAsyncSDKType {
    return o && (o.$typeUrl === MsgPayPacketFeeAsync.typeUrl || PacketId.isSDK(o.packet_id) && PacketFee.isSDK(o.packet_fee));
  },
  isAmino(o: any): o is MsgPayPacketFeeAsyncAmino {
    return o && (o.$typeUrl === MsgPayPacketFeeAsync.typeUrl || PacketId.isAmino(o.packet_id) && PacketFee.isAmino(o.packet_fee));
  },
  encode(message: MsgPayPacketFeeAsync, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    if (message.packetFee !== undefined) {
      PacketFee.encode(message.packetFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPayPacketFeeAsync {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFeeAsync();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        case 2:
          message.packetFee = PacketFee.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgPayPacketFeeAsync {
    return {
      packetId: isSet(object.packetId) ? PacketId.fromJSON(object.packetId) : undefined,
      packetFee: isSet(object.packetFee) ? PacketFee.fromJSON(object.packetFee) : undefined
    };
  },
  toJSON(message: MsgPayPacketFeeAsync): unknown {
    const obj: any = {};
    message.packetId !== undefined && (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : undefined);
    message.packetFee !== undefined && (obj.packetFee = message.packetFee ? PacketFee.toJSON(message.packetFee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgPayPacketFeeAsync>): MsgPayPacketFeeAsync {
    const message = createBaseMsgPayPacketFeeAsync();
    message.packetId = object.packetId !== undefined && object.packetId !== null ? PacketId.fromPartial(object.packetId) : undefined;
    message.packetFee = object.packetFee !== undefined && object.packetFee !== null ? PacketFee.fromPartial(object.packetFee) : undefined;
    return message;
  },
  fromAmino(object: MsgPayPacketFeeAsyncAmino): MsgPayPacketFeeAsync {
    const message = createBaseMsgPayPacketFeeAsync();
    if (object.packet_id !== undefined && object.packet_id !== null) {
      message.packetId = PacketId.fromAmino(object.packet_id);
    }
    if (object.packet_fee !== undefined && object.packet_fee !== null) {
      message.packetFee = PacketFee.fromAmino(object.packet_fee);
    }
    return message;
  },
  toAmino(message: MsgPayPacketFeeAsync): MsgPayPacketFeeAsyncAmino {
    const obj: any = {};
    obj.packet_id = message.packetId ? PacketId.toAmino(message.packetId) : PacketId.fromPartial({});
    obj.packet_fee = message.packetFee ? PacketFee.toAmino(message.packetFee) : PacketFee.fromPartial({});
    return obj;
  },
  fromAminoMsg(object: MsgPayPacketFeeAsyncAminoMsg): MsgPayPacketFeeAsync {
    return MsgPayPacketFeeAsync.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPayPacketFeeAsync): MsgPayPacketFeeAsyncAminoMsg {
    return {
      type: "cosmos-sdk/MsgPayPacketFeeAsync",
      value: MsgPayPacketFeeAsync.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgPayPacketFeeAsyncProtoMsg): MsgPayPacketFeeAsync {
    return MsgPayPacketFeeAsync.decode(message.value);
  },
  toProto(message: MsgPayPacketFeeAsync): Uint8Array {
    return MsgPayPacketFeeAsync.encode(message).finish();
  },
  toProtoMsg(message: MsgPayPacketFeeAsync): MsgPayPacketFeeAsyncProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync",
      value: MsgPayPacketFeeAsync.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgPayPacketFeeAsync.typeUrl, MsgPayPacketFeeAsync);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgPayPacketFeeAsync.aminoType, MsgPayPacketFeeAsync.typeUrl);
function createBaseMsgPayPacketFeeAsyncResponse(): MsgPayPacketFeeAsyncResponse {
  return {};
}
export const MsgPayPacketFeeAsyncResponse = {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsyncResponse",
  aminoType: "cosmos-sdk/MsgPayPacketFeeAsyncResponse",
  is(o: any): o is MsgPayPacketFeeAsyncResponse {
    return o && o.$typeUrl === MsgPayPacketFeeAsyncResponse.typeUrl;
  },
  isSDK(o: any): o is MsgPayPacketFeeAsyncResponseSDKType {
    return o && o.$typeUrl === MsgPayPacketFeeAsyncResponse.typeUrl;
  },
  isAmino(o: any): o is MsgPayPacketFeeAsyncResponseAmino {
    return o && o.$typeUrl === MsgPayPacketFeeAsyncResponse.typeUrl;
  },
  encode(_: MsgPayPacketFeeAsyncResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPayPacketFeeAsyncResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFeeAsyncResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgPayPacketFeeAsyncResponse {
    return {};
  },
  toJSON(_: MsgPayPacketFeeAsyncResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgPayPacketFeeAsyncResponse>): MsgPayPacketFeeAsyncResponse {
    const message = createBaseMsgPayPacketFeeAsyncResponse();
    return message;
  },
  fromAmino(_: MsgPayPacketFeeAsyncResponseAmino): MsgPayPacketFeeAsyncResponse {
    const message = createBaseMsgPayPacketFeeAsyncResponse();
    return message;
  },
  toAmino(_: MsgPayPacketFeeAsyncResponse): MsgPayPacketFeeAsyncResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgPayPacketFeeAsyncResponseAminoMsg): MsgPayPacketFeeAsyncResponse {
    return MsgPayPacketFeeAsyncResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPayPacketFeeAsyncResponse): MsgPayPacketFeeAsyncResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgPayPacketFeeAsyncResponse",
      value: MsgPayPacketFeeAsyncResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgPayPacketFeeAsyncResponseProtoMsg): MsgPayPacketFeeAsyncResponse {
    return MsgPayPacketFeeAsyncResponse.decode(message.value);
  },
  toProto(message: MsgPayPacketFeeAsyncResponse): Uint8Array {
    return MsgPayPacketFeeAsyncResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPayPacketFeeAsyncResponse): MsgPayPacketFeeAsyncResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsyncResponse",
      value: MsgPayPacketFeeAsyncResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgPayPacketFeeAsyncResponse.typeUrl, MsgPayPacketFeeAsyncResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgPayPacketFeeAsyncResponse.aminoType, MsgPayPacketFeeAsyncResponse.typeUrl);