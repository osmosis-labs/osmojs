import * as _1 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _1.ScalarType;
    scalarTypeToJSON(object: _1.ScalarType): string;
    ScalarType: typeof _1.ScalarType;
    ScalarTypeSDKType: typeof _1.ScalarTypeSDKType;
    InterfaceDescriptor: {
        encode(message: _1.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.InterfaceDescriptor;
        fromPartial(object: {
            name?: string;
            description?: string;
        }): _1.InterfaceDescriptor;
        fromSDK(object: _1.InterfaceDescriptorSDKType): _1.InterfaceDescriptor;
        toSDK(message: _1.InterfaceDescriptor): _1.InterfaceDescriptorSDKType;
    };
    ScalarDescriptor: {
        encode(message: _1.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.ScalarDescriptor;
        fromPartial(object: {
            name?: string;
            description?: string;
            fieldType?: _1.ScalarType[];
        }): _1.ScalarDescriptor;
        fromSDK(object: _1.ScalarDescriptorSDKType): _1.ScalarDescriptor;
        toSDK(message: _1.ScalarDescriptor): _1.ScalarDescriptorSDKType;
    };
};
