import * as _181 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _181.ScalarType;
    scalarTypeToJSON(object: _181.ScalarType): string;
    ScalarType: typeof _181.ScalarType;
    ScalarTypeSDKType: typeof _181.ScalarType;
    ScalarTypeAmino: typeof _181.ScalarType;
    InterfaceDescriptor: {
        typeUrl: string;
        encode(message: _181.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.InterfaceDescriptor;
        fromPartial(object: Partial<_181.InterfaceDescriptor>): _181.InterfaceDescriptor;
        fromAmino(object: _181.InterfaceDescriptorAmino): _181.InterfaceDescriptor;
        toAmino(message: _181.InterfaceDescriptor): _181.InterfaceDescriptorAmino;
        fromAminoMsg(object: _181.InterfaceDescriptorAminoMsg): _181.InterfaceDescriptor;
        fromProtoMsg(message: _181.InterfaceDescriptorProtoMsg): _181.InterfaceDescriptor;
        toProto(message: _181.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _181.InterfaceDescriptor): _181.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        typeUrl: string;
        encode(message: _181.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.ScalarDescriptor;
        fromPartial(object: Partial<_181.ScalarDescriptor>): _181.ScalarDescriptor;
        fromAmino(object: _181.ScalarDescriptorAmino): _181.ScalarDescriptor;
        toAmino(message: _181.ScalarDescriptor): _181.ScalarDescriptorAmino;
        fromAminoMsg(object: _181.ScalarDescriptorAminoMsg): _181.ScalarDescriptor;
        fromProtoMsg(message: _181.ScalarDescriptorProtoMsg): _181.ScalarDescriptor;
        toProto(message: _181.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _181.ScalarDescriptor): _181.ScalarDescriptorProtoMsg;
    };
};
