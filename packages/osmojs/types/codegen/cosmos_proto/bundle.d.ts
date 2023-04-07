import * as _178 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _178.ScalarType;
    scalarTypeToJSON(object: _178.ScalarType): string;
    ScalarType: typeof _178.ScalarType;
    ScalarTypeSDKType: typeof _178.ScalarType;
    ScalarTypeAmino: typeof _178.ScalarType;
    InterfaceDescriptor: {
        typeUrl: string;
        encode(message: _178.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.InterfaceDescriptor;
        fromPartial(object: Partial<_178.InterfaceDescriptor>): _178.InterfaceDescriptor;
        fromAmino(object: _178.InterfaceDescriptorAmino): _178.InterfaceDescriptor;
        toAmino(message: _178.InterfaceDescriptor): _178.InterfaceDescriptorAmino;
        fromAminoMsg(object: _178.InterfaceDescriptorAminoMsg): _178.InterfaceDescriptor;
        fromProtoMsg(message: _178.InterfaceDescriptorProtoMsg): _178.InterfaceDescriptor;
        toProto(message: _178.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _178.InterfaceDescriptor): _178.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        typeUrl: string;
        encode(message: _178.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.ScalarDescriptor;
        fromPartial(object: Partial<_178.ScalarDescriptor>): _178.ScalarDescriptor;
        fromAmino(object: _178.ScalarDescriptorAmino): _178.ScalarDescriptor;
        toAmino(message: _178.ScalarDescriptor): _178.ScalarDescriptorAmino;
        fromAminoMsg(object: _178.ScalarDescriptorAminoMsg): _178.ScalarDescriptor;
        fromProtoMsg(message: _178.ScalarDescriptorProtoMsg): _178.ScalarDescriptor;
        toProto(message: _178.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _178.ScalarDescriptor): _178.ScalarDescriptorProtoMsg;
    };
};
