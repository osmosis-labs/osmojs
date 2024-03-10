import { BinaryReader, BinaryWriter } from "../../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
/** MsgStoreCode defines the request type for the StoreCode rpc. */
export interface MsgStoreCode {
  /** signer address */
  signer: string;
  /** wasm byte code of light client contract. It can be raw or gzip compressed */
  wasmByteCode: Uint8Array;
}
export interface MsgStoreCodeProtoMsg {
  typeUrl: "/ibc.lightclients.wasm.v1.MsgStoreCode";
  value: Uint8Array;
}
/** MsgStoreCode defines the request type for the StoreCode rpc. */
export interface MsgStoreCodeAmino {
  /** signer address */
  signer?: string;
  /** wasm byte code of light client contract. It can be raw or gzip compressed */
  wasm_byte_code?: string;
}
export interface MsgStoreCodeAminoMsg {
  type: "cosmos-sdk/MsgStoreCode";
  value: MsgStoreCodeAmino;
}
/** MsgStoreCode defines the request type for the StoreCode rpc. */
export interface MsgStoreCodeSDKType {
  signer: string;
  wasm_byte_code: Uint8Array;
}
/** MsgStoreCodeResponse defines the response type for the StoreCode rpc */
export interface MsgStoreCodeResponse {
  /** checksum is the sha256 hash of the stored code */
  checksum: Uint8Array;
}
export interface MsgStoreCodeResponseProtoMsg {
  typeUrl: "/ibc.lightclients.wasm.v1.MsgStoreCodeResponse";
  value: Uint8Array;
}
/** MsgStoreCodeResponse defines the response type for the StoreCode rpc */
export interface MsgStoreCodeResponseAmino {
  /** checksum is the sha256 hash of the stored code */
  checksum?: string;
}
export interface MsgStoreCodeResponseAminoMsg {
  type: "cosmos-sdk/MsgStoreCodeResponse";
  value: MsgStoreCodeResponseAmino;
}
/** MsgStoreCodeResponse defines the response type for the StoreCode rpc */
export interface MsgStoreCodeResponseSDKType {
  checksum: Uint8Array;
}
/** MsgRemoveChecksum defines the request type for the MsgRemoveChecksum rpc. */
export interface MsgRemoveChecksum {
  /** signer address */
  signer: string;
  /** checksum is the sha256 hash to be removed from the store */
  checksum: Uint8Array;
}
export interface MsgRemoveChecksumProtoMsg {
  typeUrl: "/ibc.lightclients.wasm.v1.MsgRemoveChecksum";
  value: Uint8Array;
}
/** MsgRemoveChecksum defines the request type for the MsgRemoveChecksum rpc. */
export interface MsgRemoveChecksumAmino {
  /** signer address */
  signer?: string;
  /** checksum is the sha256 hash to be removed from the store */
  checksum?: string;
}
export interface MsgRemoveChecksumAminoMsg {
  type: "cosmos-sdk/MsgRemoveChecksum";
  value: MsgRemoveChecksumAmino;
}
/** MsgRemoveChecksum defines the request type for the MsgRemoveChecksum rpc. */
export interface MsgRemoveChecksumSDKType {
  signer: string;
  checksum: Uint8Array;
}
/** MsgStoreChecksumResponse defines the response type for the StoreCode rpc */
export interface MsgRemoveChecksumResponse {}
export interface MsgRemoveChecksumResponseProtoMsg {
  typeUrl: "/ibc.lightclients.wasm.v1.MsgRemoveChecksumResponse";
  value: Uint8Array;
}
/** MsgStoreChecksumResponse defines the response type for the StoreCode rpc */
export interface MsgRemoveChecksumResponseAmino {}
export interface MsgRemoveChecksumResponseAminoMsg {
  type: "cosmos-sdk/MsgRemoveChecksumResponse";
  value: MsgRemoveChecksumResponseAmino;
}
/** MsgStoreChecksumResponse defines the response type for the StoreCode rpc */
export interface MsgRemoveChecksumResponseSDKType {}
/** MsgMigrateContract defines the request type for the MigrateContract rpc. */
export interface MsgMigrateContract {
  /** signer address */
  signer: string;
  /** the client id of the contract */
  clientId: string;
  /** checksum is the sha256 hash of the new wasm byte code for the contract */
  checksum: Uint8Array;
  /** the json encoded message to be passed to the contract on migration */
  msg: Uint8Array;
}
export interface MsgMigrateContractProtoMsg {
  typeUrl: "/ibc.lightclients.wasm.v1.MsgMigrateContract";
  value: Uint8Array;
}
/** MsgMigrateContract defines the request type for the MigrateContract rpc. */
export interface MsgMigrateContractAmino {
  /** signer address */
  signer?: string;
  /** the client id of the contract */
  client_id?: string;
  /** checksum is the sha256 hash of the new wasm byte code for the contract */
  checksum?: string;
  /** the json encoded message to be passed to the contract on migration */
  msg?: string;
}
export interface MsgMigrateContractAminoMsg {
  type: "cosmos-sdk/MsgMigrateContract";
  value: MsgMigrateContractAmino;
}
/** MsgMigrateContract defines the request type for the MigrateContract rpc. */
export interface MsgMigrateContractSDKType {
  signer: string;
  client_id: string;
  checksum: Uint8Array;
  msg: Uint8Array;
}
/** MsgMigrateContractResponse defines the response type for the MigrateContract rpc */
export interface MsgMigrateContractResponse {}
export interface MsgMigrateContractResponseProtoMsg {
  typeUrl: "/ibc.lightclients.wasm.v1.MsgMigrateContractResponse";
  value: Uint8Array;
}
/** MsgMigrateContractResponse defines the response type for the MigrateContract rpc */
export interface MsgMigrateContractResponseAmino {}
export interface MsgMigrateContractResponseAminoMsg {
  type: "cosmos-sdk/MsgMigrateContractResponse";
  value: MsgMigrateContractResponseAmino;
}
/** MsgMigrateContractResponse defines the response type for the MigrateContract rpc */
export interface MsgMigrateContractResponseSDKType {}
function createBaseMsgStoreCode(): MsgStoreCode {
  return {
    signer: "",
    wasmByteCode: new Uint8Array()
  };
}
export const MsgStoreCode = {
  typeUrl: "/ibc.lightclients.wasm.v1.MsgStoreCode",
  aminoType: "cosmos-sdk/MsgStoreCode",
  is(o: any): o is MsgStoreCode {
    return o && (o.$typeUrl === MsgStoreCode.typeUrl || typeof o.signer === "string" && (o.wasmByteCode instanceof Uint8Array || typeof o.wasmByteCode === "string"));
  },
  isSDK(o: any): o is MsgStoreCodeSDKType {
    return o && (o.$typeUrl === MsgStoreCode.typeUrl || typeof o.signer === "string" && (o.wasm_byte_code instanceof Uint8Array || typeof o.wasm_byte_code === "string"));
  },
  isAmino(o: any): o is MsgStoreCodeAmino {
    return o && (o.$typeUrl === MsgStoreCode.typeUrl || typeof o.signer === "string" && (o.wasm_byte_code instanceof Uint8Array || typeof o.wasm_byte_code === "string"));
  },
  encode(message: MsgStoreCode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.wasmByteCode.length !== 0) {
      writer.uint32(18).bytes(message.wasmByteCode);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStoreCode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.wasmByteCode = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgStoreCode>): MsgStoreCode {
    const message = createBaseMsgStoreCode();
    message.signer = object.signer ?? "";
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgStoreCodeAmino): MsgStoreCode {
    const message = createBaseMsgStoreCode();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.wasm_byte_code !== undefined && object.wasm_byte_code !== null) {
      message.wasmByteCode = bytesFromBase64(object.wasm_byte_code);
    }
    return message;
  },
  toAmino(message: MsgStoreCode): MsgStoreCodeAmino {
    const obj: any = {};
    obj.signer = message.signer;
    obj.wasm_byte_code = message.wasmByteCode ? base64FromBytes(message.wasmByteCode) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgStoreCodeAminoMsg): MsgStoreCode {
    return MsgStoreCode.fromAmino(object.value);
  },
  toAminoMsg(message: MsgStoreCode): MsgStoreCodeAminoMsg {
    return {
      type: "cosmos-sdk/MsgStoreCode",
      value: MsgStoreCode.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgStoreCodeProtoMsg): MsgStoreCode {
    return MsgStoreCode.decode(message.value);
  },
  toProto(message: MsgStoreCode): Uint8Array {
    return MsgStoreCode.encode(message).finish();
  },
  toProtoMsg(message: MsgStoreCode): MsgStoreCodeProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.wasm.v1.MsgStoreCode",
      value: MsgStoreCode.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgStoreCode.typeUrl, MsgStoreCode);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgStoreCode.aminoType, MsgStoreCode.typeUrl);
function createBaseMsgStoreCodeResponse(): MsgStoreCodeResponse {
  return {
    checksum: new Uint8Array()
  };
}
export const MsgStoreCodeResponse = {
  typeUrl: "/ibc.lightclients.wasm.v1.MsgStoreCodeResponse",
  aminoType: "cosmos-sdk/MsgStoreCodeResponse",
  is(o: any): o is MsgStoreCodeResponse {
    return o && (o.$typeUrl === MsgStoreCodeResponse.typeUrl || o.checksum instanceof Uint8Array || typeof o.checksum === "string");
  },
  isSDK(o: any): o is MsgStoreCodeResponseSDKType {
    return o && (o.$typeUrl === MsgStoreCodeResponse.typeUrl || o.checksum instanceof Uint8Array || typeof o.checksum === "string");
  },
  isAmino(o: any): o is MsgStoreCodeResponseAmino {
    return o && (o.$typeUrl === MsgStoreCodeResponse.typeUrl || o.checksum instanceof Uint8Array || typeof o.checksum === "string");
  },
  encode(message: MsgStoreCodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.checksum.length !== 0) {
      writer.uint32(10).bytes(message.checksum);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStoreCodeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.checksum = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgStoreCodeResponse>): MsgStoreCodeResponse {
    const message = createBaseMsgStoreCodeResponse();
    message.checksum = object.checksum ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgStoreCodeResponseAmino): MsgStoreCodeResponse {
    const message = createBaseMsgStoreCodeResponse();
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = bytesFromBase64(object.checksum);
    }
    return message;
  },
  toAmino(message: MsgStoreCodeResponse): MsgStoreCodeResponseAmino {
    const obj: any = {};
    obj.checksum = message.checksum ? base64FromBytes(message.checksum) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgStoreCodeResponseAminoMsg): MsgStoreCodeResponse {
    return MsgStoreCodeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgStoreCodeResponse): MsgStoreCodeResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgStoreCodeResponse",
      value: MsgStoreCodeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgStoreCodeResponseProtoMsg): MsgStoreCodeResponse {
    return MsgStoreCodeResponse.decode(message.value);
  },
  toProto(message: MsgStoreCodeResponse): Uint8Array {
    return MsgStoreCodeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStoreCodeResponse): MsgStoreCodeResponseProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.wasm.v1.MsgStoreCodeResponse",
      value: MsgStoreCodeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgStoreCodeResponse.typeUrl, MsgStoreCodeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgStoreCodeResponse.aminoType, MsgStoreCodeResponse.typeUrl);
function createBaseMsgRemoveChecksum(): MsgRemoveChecksum {
  return {
    signer: "",
    checksum: new Uint8Array()
  };
}
export const MsgRemoveChecksum = {
  typeUrl: "/ibc.lightclients.wasm.v1.MsgRemoveChecksum",
  aminoType: "cosmos-sdk/MsgRemoveChecksum",
  is(o: any): o is MsgRemoveChecksum {
    return o && (o.$typeUrl === MsgRemoveChecksum.typeUrl || typeof o.signer === "string" && (o.checksum instanceof Uint8Array || typeof o.checksum === "string"));
  },
  isSDK(o: any): o is MsgRemoveChecksumSDKType {
    return o && (o.$typeUrl === MsgRemoveChecksum.typeUrl || typeof o.signer === "string" && (o.checksum instanceof Uint8Array || typeof o.checksum === "string"));
  },
  isAmino(o: any): o is MsgRemoveChecksumAmino {
    return o && (o.$typeUrl === MsgRemoveChecksum.typeUrl || typeof o.signer === "string" && (o.checksum instanceof Uint8Array || typeof o.checksum === "string"));
  },
  encode(message: MsgRemoveChecksum, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.checksum.length !== 0) {
      writer.uint32(18).bytes(message.checksum);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveChecksum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveChecksum();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.checksum = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRemoveChecksum>): MsgRemoveChecksum {
    const message = createBaseMsgRemoveChecksum();
    message.signer = object.signer ?? "";
    message.checksum = object.checksum ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgRemoveChecksumAmino): MsgRemoveChecksum {
    const message = createBaseMsgRemoveChecksum();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = bytesFromBase64(object.checksum);
    }
    return message;
  },
  toAmino(message: MsgRemoveChecksum): MsgRemoveChecksumAmino {
    const obj: any = {};
    obj.signer = message.signer;
    obj.checksum = message.checksum ? base64FromBytes(message.checksum) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveChecksumAminoMsg): MsgRemoveChecksum {
    return MsgRemoveChecksum.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRemoveChecksum): MsgRemoveChecksumAminoMsg {
    return {
      type: "cosmos-sdk/MsgRemoveChecksum",
      value: MsgRemoveChecksum.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRemoveChecksumProtoMsg): MsgRemoveChecksum {
    return MsgRemoveChecksum.decode(message.value);
  },
  toProto(message: MsgRemoveChecksum): Uint8Array {
    return MsgRemoveChecksum.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveChecksum): MsgRemoveChecksumProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.wasm.v1.MsgRemoveChecksum",
      value: MsgRemoveChecksum.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRemoveChecksum.typeUrl, MsgRemoveChecksum);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRemoveChecksum.aminoType, MsgRemoveChecksum.typeUrl);
function createBaseMsgRemoveChecksumResponse(): MsgRemoveChecksumResponse {
  return {};
}
export const MsgRemoveChecksumResponse = {
  typeUrl: "/ibc.lightclients.wasm.v1.MsgRemoveChecksumResponse",
  aminoType: "cosmos-sdk/MsgRemoveChecksumResponse",
  is(o: any): o is MsgRemoveChecksumResponse {
    return o && o.$typeUrl === MsgRemoveChecksumResponse.typeUrl;
  },
  isSDK(o: any): o is MsgRemoveChecksumResponseSDKType {
    return o && o.$typeUrl === MsgRemoveChecksumResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRemoveChecksumResponseAmino {
    return o && o.$typeUrl === MsgRemoveChecksumResponse.typeUrl;
  },
  encode(_: MsgRemoveChecksumResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveChecksumResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveChecksumResponse();
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
  fromPartial(_: Partial<MsgRemoveChecksumResponse>): MsgRemoveChecksumResponse {
    const message = createBaseMsgRemoveChecksumResponse();
    return message;
  },
  fromAmino(_: MsgRemoveChecksumResponseAmino): MsgRemoveChecksumResponse {
    const message = createBaseMsgRemoveChecksumResponse();
    return message;
  },
  toAmino(_: MsgRemoveChecksumResponse): MsgRemoveChecksumResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveChecksumResponseAminoMsg): MsgRemoveChecksumResponse {
    return MsgRemoveChecksumResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRemoveChecksumResponse): MsgRemoveChecksumResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRemoveChecksumResponse",
      value: MsgRemoveChecksumResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRemoveChecksumResponseProtoMsg): MsgRemoveChecksumResponse {
    return MsgRemoveChecksumResponse.decode(message.value);
  },
  toProto(message: MsgRemoveChecksumResponse): Uint8Array {
    return MsgRemoveChecksumResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveChecksumResponse): MsgRemoveChecksumResponseProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.wasm.v1.MsgRemoveChecksumResponse",
      value: MsgRemoveChecksumResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRemoveChecksumResponse.typeUrl, MsgRemoveChecksumResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRemoveChecksumResponse.aminoType, MsgRemoveChecksumResponse.typeUrl);
function createBaseMsgMigrateContract(): MsgMigrateContract {
  return {
    signer: "",
    clientId: "",
    checksum: new Uint8Array(),
    msg: new Uint8Array()
  };
}
export const MsgMigrateContract = {
  typeUrl: "/ibc.lightclients.wasm.v1.MsgMigrateContract",
  aminoType: "cosmos-sdk/MsgMigrateContract",
  is(o: any): o is MsgMigrateContract {
    return o && (o.$typeUrl === MsgMigrateContract.typeUrl || typeof o.signer === "string" && typeof o.clientId === "string" && (o.checksum instanceof Uint8Array || typeof o.checksum === "string") && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
  },
  isSDK(o: any): o is MsgMigrateContractSDKType {
    return o && (o.$typeUrl === MsgMigrateContract.typeUrl || typeof o.signer === "string" && typeof o.client_id === "string" && (o.checksum instanceof Uint8Array || typeof o.checksum === "string") && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
  },
  isAmino(o: any): o is MsgMigrateContractAmino {
    return o && (o.$typeUrl === MsgMigrateContract.typeUrl || typeof o.signer === "string" && typeof o.client_id === "string" && (o.checksum instanceof Uint8Array || typeof o.checksum === "string") && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
  },
  encode(message: MsgMigrateContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.clientId !== "") {
      writer.uint32(18).string(message.clientId);
    }
    if (message.checksum.length !== 0) {
      writer.uint32(26).bytes(message.checksum);
    }
    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMigrateContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.clientId = reader.string();
          break;
        case 3:
          message.checksum = reader.bytes();
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
  fromPartial(object: Partial<MsgMigrateContract>): MsgMigrateContract {
    const message = createBaseMsgMigrateContract();
    message.signer = object.signer ?? "";
    message.clientId = object.clientId ?? "";
    message.checksum = object.checksum ?? new Uint8Array();
    message.msg = object.msg ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgMigrateContractAmino): MsgMigrateContract {
    const message = createBaseMsgMigrateContract();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = bytesFromBase64(object.checksum);
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = bytesFromBase64(object.msg);
    }
    return message;
  },
  toAmino(message: MsgMigrateContract): MsgMigrateContractAmino {
    const obj: any = {};
    obj.signer = message.signer;
    obj.client_id = message.clientId;
    obj.checksum = message.checksum ? base64FromBytes(message.checksum) : undefined;
    obj.msg = message.msg ? base64FromBytes(message.msg) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgMigrateContractAminoMsg): MsgMigrateContract {
    return MsgMigrateContract.fromAmino(object.value);
  },
  toAminoMsg(message: MsgMigrateContract): MsgMigrateContractAminoMsg {
    return {
      type: "cosmos-sdk/MsgMigrateContract",
      value: MsgMigrateContract.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgMigrateContractProtoMsg): MsgMigrateContract {
    return MsgMigrateContract.decode(message.value);
  },
  toProto(message: MsgMigrateContract): Uint8Array {
    return MsgMigrateContract.encode(message).finish();
  },
  toProtoMsg(message: MsgMigrateContract): MsgMigrateContractProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.wasm.v1.MsgMigrateContract",
      value: MsgMigrateContract.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgMigrateContract.typeUrl, MsgMigrateContract);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgMigrateContract.aminoType, MsgMigrateContract.typeUrl);
function createBaseMsgMigrateContractResponse(): MsgMigrateContractResponse {
  return {};
}
export const MsgMigrateContractResponse = {
  typeUrl: "/ibc.lightclients.wasm.v1.MsgMigrateContractResponse",
  aminoType: "cosmos-sdk/MsgMigrateContractResponse",
  is(o: any): o is MsgMigrateContractResponse {
    return o && o.$typeUrl === MsgMigrateContractResponse.typeUrl;
  },
  isSDK(o: any): o is MsgMigrateContractResponseSDKType {
    return o && o.$typeUrl === MsgMigrateContractResponse.typeUrl;
  },
  isAmino(o: any): o is MsgMigrateContractResponseAmino {
    return o && o.$typeUrl === MsgMigrateContractResponse.typeUrl;
  },
  encode(_: MsgMigrateContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMigrateContractResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateContractResponse();
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
  fromPartial(_: Partial<MsgMigrateContractResponse>): MsgMigrateContractResponse {
    const message = createBaseMsgMigrateContractResponse();
    return message;
  },
  fromAmino(_: MsgMigrateContractResponseAmino): MsgMigrateContractResponse {
    const message = createBaseMsgMigrateContractResponse();
    return message;
  },
  toAmino(_: MsgMigrateContractResponse): MsgMigrateContractResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMigrateContractResponseAminoMsg): MsgMigrateContractResponse {
    return MsgMigrateContractResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgMigrateContractResponse): MsgMigrateContractResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgMigrateContractResponse",
      value: MsgMigrateContractResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgMigrateContractResponseProtoMsg): MsgMigrateContractResponse {
    return MsgMigrateContractResponse.decode(message.value);
  },
  toProto(message: MsgMigrateContractResponse): Uint8Array {
    return MsgMigrateContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMigrateContractResponse): MsgMigrateContractResponseProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.wasm.v1.MsgMigrateContractResponse",
      value: MsgMigrateContractResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgMigrateContractResponse.typeUrl, MsgMigrateContractResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgMigrateContractResponse.aminoType, MsgMigrateContractResponse.typeUrl);