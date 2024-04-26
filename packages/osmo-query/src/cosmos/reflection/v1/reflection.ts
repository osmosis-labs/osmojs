//@ts-nocheck
import { FileDescriptorProto, FileDescriptorProtoAmino, FileDescriptorProtoSDKType } from "../../../google/protobuf/descriptor";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** FileDescriptorsRequest is the Query/FileDescriptors request type. */
export interface FileDescriptorsRequest {}
export interface FileDescriptorsRequestProtoMsg {
  typeUrl: "/cosmos.reflection.v1.FileDescriptorsRequest";
  value: Uint8Array;
}
/** FileDescriptorsRequest is the Query/FileDescriptors request type. */
export interface FileDescriptorsRequestAmino {}
export interface FileDescriptorsRequestAminoMsg {
  type: "cosmos-sdk/FileDescriptorsRequest";
  value: FileDescriptorsRequestAmino;
}
/** FileDescriptorsRequest is the Query/FileDescriptors request type. */
export interface FileDescriptorsRequestSDKType {}
/** FileDescriptorsResponse is the Query/FileDescriptors response type. */
export interface FileDescriptorsResponse {
  /** files is the file descriptors. */
  files: FileDescriptorProto[];
}
export interface FileDescriptorsResponseProtoMsg {
  typeUrl: "/cosmos.reflection.v1.FileDescriptorsResponse";
  value: Uint8Array;
}
/** FileDescriptorsResponse is the Query/FileDescriptors response type. */
export interface FileDescriptorsResponseAmino {
  /** files is the file descriptors. */
  files?: FileDescriptorProtoAmino[];
}
export interface FileDescriptorsResponseAminoMsg {
  type: "cosmos-sdk/FileDescriptorsResponse";
  value: FileDescriptorsResponseAmino;
}
/** FileDescriptorsResponse is the Query/FileDescriptors response type. */
export interface FileDescriptorsResponseSDKType {
  files: FileDescriptorProtoSDKType[];
}
function createBaseFileDescriptorsRequest(): FileDescriptorsRequest {
  return {};
}
export const FileDescriptorsRequest = {
  typeUrl: "/cosmos.reflection.v1.FileDescriptorsRequest",
  aminoType: "cosmos-sdk/FileDescriptorsRequest",
  is(o: any): o is FileDescriptorsRequest {
    return o && o.$typeUrl === FileDescriptorsRequest.typeUrl;
  },
  isSDK(o: any): o is FileDescriptorsRequestSDKType {
    return o && o.$typeUrl === FileDescriptorsRequest.typeUrl;
  },
  isAmino(o: any): o is FileDescriptorsRequestAmino {
    return o && o.$typeUrl === FileDescriptorsRequest.typeUrl;
  },
  encode(_: FileDescriptorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FileDescriptorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileDescriptorsRequest();
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
  fromPartial(_: Partial<FileDescriptorsRequest>): FileDescriptorsRequest {
    const message = createBaseFileDescriptorsRequest();
    return message;
  },
  fromAmino(_: FileDescriptorsRequestAmino): FileDescriptorsRequest {
    const message = createBaseFileDescriptorsRequest();
    return message;
  },
  toAmino(_: FileDescriptorsRequest): FileDescriptorsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: FileDescriptorsRequestAminoMsg): FileDescriptorsRequest {
    return FileDescriptorsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: FileDescriptorsRequest): FileDescriptorsRequestAminoMsg {
    return {
      type: "cosmos-sdk/FileDescriptorsRequest",
      value: FileDescriptorsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: FileDescriptorsRequestProtoMsg): FileDescriptorsRequest {
    return FileDescriptorsRequest.decode(message.value);
  },
  toProto(message: FileDescriptorsRequest): Uint8Array {
    return FileDescriptorsRequest.encode(message).finish();
  },
  toProtoMsg(message: FileDescriptorsRequest): FileDescriptorsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.reflection.v1.FileDescriptorsRequest",
      value: FileDescriptorsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FileDescriptorsRequest.typeUrl, FileDescriptorsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(FileDescriptorsRequest.aminoType, FileDescriptorsRequest.typeUrl);
function createBaseFileDescriptorsResponse(): FileDescriptorsResponse {
  return {
    files: []
  };
}
export const FileDescriptorsResponse = {
  typeUrl: "/cosmos.reflection.v1.FileDescriptorsResponse",
  aminoType: "cosmos-sdk/FileDescriptorsResponse",
  is(o: any): o is FileDescriptorsResponse {
    return o && (o.$typeUrl === FileDescriptorsResponse.typeUrl || Array.isArray(o.files) && (!o.files.length || FileDescriptorProto.is(o.files[0])));
  },
  isSDK(o: any): o is FileDescriptorsResponseSDKType {
    return o && (o.$typeUrl === FileDescriptorsResponse.typeUrl || Array.isArray(o.files) && (!o.files.length || FileDescriptorProto.isSDK(o.files[0])));
  },
  isAmino(o: any): o is FileDescriptorsResponseAmino {
    return o && (o.$typeUrl === FileDescriptorsResponse.typeUrl || Array.isArray(o.files) && (!o.files.length || FileDescriptorProto.isAmino(o.files[0])));
  },
  encode(message: FileDescriptorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.files) {
      FileDescriptorProto.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FileDescriptorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileDescriptorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.files.push(FileDescriptorProto.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<FileDescriptorsResponse>): FileDescriptorsResponse {
    const message = createBaseFileDescriptorsResponse();
    message.files = object.files?.map(e => FileDescriptorProto.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: FileDescriptorsResponseAmino): FileDescriptorsResponse {
    const message = createBaseFileDescriptorsResponse();
    message.files = object.files?.map(e => FileDescriptorProto.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: FileDescriptorsResponse): FileDescriptorsResponseAmino {
    const obj: any = {};
    if (message.files) {
      obj.files = message.files.map(e => e ? FileDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.files = message.files;
    }
    return obj;
  },
  fromAminoMsg(object: FileDescriptorsResponseAminoMsg): FileDescriptorsResponse {
    return FileDescriptorsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: FileDescriptorsResponse): FileDescriptorsResponseAminoMsg {
    return {
      type: "cosmos-sdk/FileDescriptorsResponse",
      value: FileDescriptorsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: FileDescriptorsResponseProtoMsg): FileDescriptorsResponse {
    return FileDescriptorsResponse.decode(message.value);
  },
  toProto(message: FileDescriptorsResponse): Uint8Array {
    return FileDescriptorsResponse.encode(message).finish();
  },
  toProtoMsg(message: FileDescriptorsResponse): FileDescriptorsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.reflection.v1.FileDescriptorsResponse",
      value: FileDescriptorsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FileDescriptorsResponse.typeUrl, FileDescriptorsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(FileDescriptorsResponse.aminoType, FileDescriptorsResponse.typeUrl);