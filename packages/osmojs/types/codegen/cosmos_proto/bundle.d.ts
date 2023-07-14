import * as _172 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _172.ScalarType;
    scalarTypeToJSON(object: _172.ScalarType): string;
    ScalarType: typeof _172.ScalarType;
    ScalarTypeSDKType: typeof _172.ScalarType;
    ScalarTypeAmino: typeof _172.ScalarType;
    InterfaceDescriptor: {
        typeUrl: string;
        encode(message: _172.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.InterfaceDescriptor;
        fromPartial(object: Partial<_172.InterfaceDescriptor>): _172.InterfaceDescriptor;
        fromAmino(object: _172.InterfaceDescriptorAmino): _172.InterfaceDescriptor;
        toAmino(message: _172.InterfaceDescriptor): _172.InterfaceDescriptorAmino;
        fromAminoMsg(object: _172.InterfaceDescriptorAminoMsg): _172.InterfaceDescriptor;
        fromProtoMsg(message: _172.InterfaceDescriptorProtoMsg): _172.InterfaceDescriptor;
        toProto(message: _172.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _172.InterfaceDescriptor): _172.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        typeUrl: string;
        encode(message: _172.ScalarDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.ScalarDescriptor;
        fromPartial(object: Partial<_172.ScalarDescriptor>): _172.ScalarDescriptor;
        fromAmino(object: _172.ScalarDescriptorAmino): _172.ScalarDescriptor;
        toAmino(message: _172.ScalarDescriptor): _172.ScalarDescriptorAmino;
        fromAminoMsg(object: _172.ScalarDescriptorAminoMsg): _172.ScalarDescriptor;
        fromProtoMsg(message: _172.ScalarDescriptorProtoMsg): _172.ScalarDescriptor;
        toProto(message: _172.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _172.ScalarDescriptor): _172.ScalarDescriptorProtoMsg;
    };
};
