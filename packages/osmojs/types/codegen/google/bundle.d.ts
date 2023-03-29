import * as _53 from "./protobuf/any";
import * as _54 from "./protobuf/descriptor";
import * as _55 from "./protobuf/duration";
import * as _56 from "./protobuf/empty";
import * as _57 from "./protobuf/timestamp";
export declare namespace google {
    const protobuf: {
        Timestamp: {
            encode(message: _57.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Timestamp;
            fromPartial(object: Partial<_57.Timestamp>): _57.Timestamp;
        };
        Empty: {
            encode(_: _56.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.Empty;
            fromPartial(_: Partial<_56.Empty>): _56.Empty;
        };
        Duration: {
            encode(message: _55.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.Duration;
            fromPartial(object: Partial<_55.Duration>): _55.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _54.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _54.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _54.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _54.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _54.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _54.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _54.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _54.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _54.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _54.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _54.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _54.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _54.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _54.FieldDescriptorProto_TypeSDKType;
        FieldDescriptorProto_Label: typeof _54.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _54.FieldDescriptorProto_LabelSDKType;
        FileOptions_OptimizeMode: typeof _54.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _54.FileOptions_OptimizeModeSDKType;
        FieldOptions_CType: typeof _54.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _54.FieldOptions_CTypeSDKType;
        FieldOptions_JSType: typeof _54.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _54.FieldOptions_JSTypeSDKType;
        MethodOptions_IdempotencyLevel: typeof _54.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _54.MethodOptions_IdempotencyLevelSDKType;
        FileDescriptorSet: {
            encode(message: _54.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.FileDescriptorSet;
            fromPartial(object: Partial<_54.FileDescriptorSet>): _54.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _54.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.FileDescriptorProto;
            fromPartial(object: Partial<_54.FileDescriptorProto>): _54.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _54.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.DescriptorProto;
            fromPartial(object: Partial<_54.DescriptorProto>): _54.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _54.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_54.DescriptorProto_ExtensionRange>): _54.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _54.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_54.DescriptorProto_ReservedRange>): _54.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _54.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.ExtensionRangeOptions;
            fromPartial(object: Partial<_54.ExtensionRangeOptions>): _54.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _54.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.FieldDescriptorProto;
            fromPartial(object: Partial<_54.FieldDescriptorProto>): _54.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _54.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.OneofDescriptorProto;
            fromPartial(object: Partial<_54.OneofDescriptorProto>): _54.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _54.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.EnumDescriptorProto;
            fromPartial(object: Partial<_54.EnumDescriptorProto>): _54.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _54.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_54.EnumDescriptorProto_EnumReservedRange>): _54.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _54.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.EnumValueDescriptorProto;
            fromPartial(object: Partial<_54.EnumValueDescriptorProto>): _54.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _54.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.ServiceDescriptorProto;
            fromPartial(object: Partial<_54.ServiceDescriptorProto>): _54.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _54.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MethodDescriptorProto;
            fromPartial(object: Partial<_54.MethodDescriptorProto>): _54.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _54.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.FileOptions;
            fromPartial(object: Partial<_54.FileOptions>): _54.FileOptions;
        };
        MessageOptions: {
            encode(message: _54.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MessageOptions;
            fromPartial(object: Partial<_54.MessageOptions>): _54.MessageOptions;
        };
        FieldOptions: {
            encode(message: _54.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.FieldOptions;
            fromPartial(object: Partial<_54.FieldOptions>): _54.FieldOptions;
        };
        OneofOptions: {
            encode(message: _54.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.OneofOptions;
            fromPartial(object: Partial<_54.OneofOptions>): _54.OneofOptions;
        };
        EnumOptions: {
            encode(message: _54.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.EnumOptions;
            fromPartial(object: Partial<_54.EnumOptions>): _54.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _54.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.EnumValueOptions;
            fromPartial(object: Partial<_54.EnumValueOptions>): _54.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _54.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.ServiceOptions;
            fromPartial(object: Partial<_54.ServiceOptions>): _54.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _54.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MethodOptions;
            fromPartial(object: Partial<_54.MethodOptions>): _54.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _54.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.UninterpretedOption;
            fromPartial(object: Partial<_54.UninterpretedOption>): _54.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _54.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_54.UninterpretedOption_NamePart>): _54.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _54.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.SourceCodeInfo;
            fromPartial(object: Partial<_54.SourceCodeInfo>): _54.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _54.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.SourceCodeInfo_Location;
            fromPartial(object: Partial<_54.SourceCodeInfo_Location>): _54.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _54.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.GeneratedCodeInfo;
            fromPartial(object: Partial<_54.GeneratedCodeInfo>): _54.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _54.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_54.GeneratedCodeInfo_Annotation>): _54.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _53.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Any;
            fromPartial(object: Partial<_53.Any>): _53.Any;
        };
    };
}
