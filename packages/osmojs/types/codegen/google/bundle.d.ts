import * as _97 from "./api/http";
import * as _98 from "./protobuf/any";
import * as _99 from "./protobuf/descriptor";
import * as _100 from "./protobuf/duration";
import * as _101 from "./protobuf/empty";
import * as _102 from "./protobuf/timestamp";
import * as _103 from "./protobuf/struct";
import * as _104 from "./protobuf/wrappers";
import * as _105 from "./protobuf/field_mask";
export declare namespace google {
    const api: {
        Http: {
            encode(message: _97.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.Http;
            fromPartial(object: {
                rules?: {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: any[];
                }[];
                fullyDecodeReservedExpansion?: boolean;
            }): _97.Http;
            fromSDK(object: _97.HttpSDKType): _97.Http;
            toSDK(message: _97.Http): _97.HttpSDKType;
        };
        HttpRule: {
            encode(message: _97.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.HttpRule;
            fromPartial(object: {
                selector?: string;
                get?: string;
                put?: string;
                post?: string;
                delete?: string;
                patch?: string;
                custom?: {
                    kind?: string;
                    path?: string;
                };
                body?: string;
                responseBody?: string;
                additionalBindings?: any[];
            }): _97.HttpRule;
            fromSDK(object: _97.HttpRuleSDKType): _97.HttpRule;
            toSDK(message: _97.HttpRule): _97.HttpRuleSDKType;
        };
        CustomHttpPattern: {
            encode(message: _97.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.CustomHttpPattern;
            fromPartial(object: {
                kind?: string;
                path?: string;
            }): _97.CustomHttpPattern;
            fromSDK(object: _97.CustomHttpPatternSDKType): _97.CustomHttpPattern;
            toSDK(message: _97.CustomHttpPattern): _97.CustomHttpPatternSDKType;
        };
    };
    const protobuf: {
        FieldMask: {
            encode(message: _105.FieldMask, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.FieldMask;
            fromPartial(object: {
                paths?: string[];
            }): _105.FieldMask;
            fromSDK(object: _105.FieldMaskSDKType): _105.FieldMask;
            toSDK(message: _105.FieldMask): _105.FieldMaskSDKType;
        };
        DoubleValue: {
            encode(message: _104.DoubleValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.DoubleValue;
            fromPartial(object: {
                value?: number;
            }): _104.DoubleValue;
            fromSDK(object: _104.DoubleValueSDKType): _104.DoubleValue;
            toSDK(message: _104.DoubleValue): _104.DoubleValueSDKType;
        };
        FloatValue: {
            encode(message: _104.FloatValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.FloatValue;
            fromPartial(object: {
                value?: number;
            }): _104.FloatValue;
            fromSDK(object: _104.FloatValueSDKType): _104.FloatValue;
            toSDK(message: _104.FloatValue): _104.FloatValueSDKType;
        };
        Int64Value: {
            encode(message: _104.Int64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Int64Value;
            fromPartial(object: {
                value?: any;
            }): _104.Int64Value;
            fromSDK(object: _104.Int64ValueSDKType): _104.Int64Value;
            toSDK(message: _104.Int64Value): _104.Int64ValueSDKType;
        };
        UInt64Value: {
            encode(message: _104.UInt64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.UInt64Value;
            fromPartial(object: {
                value?: any;
            }): _104.UInt64Value;
            fromSDK(object: _104.UInt64ValueSDKType): _104.UInt64Value;
            toSDK(message: _104.UInt64Value): _104.UInt64ValueSDKType;
        };
        Int32Value: {
            encode(message: _104.Int32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Int32Value;
            fromPartial(object: {
                value?: number;
            }): _104.Int32Value;
            fromSDK(object: _104.Int32ValueSDKType): _104.Int32Value;
            toSDK(message: _104.Int32Value): _104.Int32ValueSDKType;
        };
        UInt32Value: {
            encode(message: _104.UInt32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.UInt32Value;
            fromPartial(object: {
                value?: number;
            }): _104.UInt32Value;
            fromSDK(object: _104.UInt32ValueSDKType): _104.UInt32Value;
            toSDK(message: _104.UInt32Value): _104.UInt32ValueSDKType;
        };
        BoolValue: {
            encode(message: _104.BoolValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.BoolValue;
            fromPartial(object: {
                value?: boolean;
            }): _104.BoolValue;
            fromSDK(object: _104.BoolValueSDKType): _104.BoolValue;
            toSDK(message: _104.BoolValue): _104.BoolValueSDKType;
        };
        StringValue: {
            encode(message: _104.StringValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.StringValue;
            fromPartial(object: {
                value?: string;
            }): _104.StringValue;
            fromSDK(object: _104.StringValueSDKType): _104.StringValue;
            toSDK(message: _104.StringValue): _104.StringValueSDKType;
        };
        BytesValue: {
            encode(message: _104.BytesValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.BytesValue;
            fromPartial(object: {
                value?: Uint8Array;
            }): _104.BytesValue;
            fromSDK(object: _104.BytesValueSDKType): _104.BytesValue;
            toSDK(message: _104.BytesValue): _104.BytesValueSDKType;
        };
        nullValueFromJSON(object: any): _103.NullValue;
        nullValueToJSON(object: _103.NullValue): string;
        NullValue: typeof _103.NullValue;
        NullValueSDKType: typeof _103.NullValueSDKType;
        Struct_FieldsEntry: {
            encode(message: _103.Struct_FieldsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Struct_FieldsEntry;
            fromPartial(object: {
                key?: string;
                value?: {
                    nullValue?: _103.NullValue;
                    numberValue?: number;
                    stringValue?: string;
                    boolValue?: boolean;
                    structValue?: {
                        fields?: {
                            [x: string]: any;
                        };
                    };
                    listValue?: {
                        values?: any[];
                    };
                };
            }): _103.Struct_FieldsEntry;
            fromSDK(object: _103.Struct_FieldsEntrySDKType): _103.Struct_FieldsEntry;
            toSDK(message: _103.Struct_FieldsEntry): _103.Struct_FieldsEntrySDKType;
        };
        Struct: {
            encode(message: _103.Struct, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Struct;
            fromPartial(object: {
                fields?: {
                    [x: string]: any;
                };
            }): _103.Struct;
            fromSDK(object: _103.StructSDKType): _103.Struct;
            toSDK(message: _103.Struct): _103.StructSDKType;
        };
        Value: {
            encode(message: _103.Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Value;
            fromPartial(object: {
                nullValue?: _103.NullValue;
                numberValue?: number;
                stringValue?: string;
                boolValue?: boolean;
                structValue?: {
                    fields?: {
                        [x: string]: any;
                    };
                };
                listValue?: {
                    values?: any[];
                };
            }): _103.Value;
            fromSDK(object: _103.ValueSDKType): _103.Value;
            toSDK(message: _103.Value): _103.ValueSDKType;
        };
        ListValue: {
            encode(message: _103.ListValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ListValue;
            fromPartial(object: {
                values?: any[];
            }): _103.ListValue;
            fromSDK(object: _103.ListValueSDKType): _103.ListValue;
            toSDK(message: _103.ListValue): _103.ListValueSDKType;
        };
        Timestamp: {
            encode(message: _102.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Timestamp;
            fromPartial(object: {
                seconds?: any;
                nanos?: number;
            }): _102.Timestamp;
            fromSDK(object: _102.TimestampSDKType): _102.Timestamp;
            toSDK(message: _102.Timestamp): _102.TimestampSDKType;
        };
        Empty: {
            encode(_: _101.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Empty;
            fromPartial(_: {}): _101.Empty;
            fromSDK(_: _101.EmptySDKType): _101.Empty;
            toSDK(_: _101.Empty): _101.EmptySDKType;
        };
        Duration: {
            encode(message: _100.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Duration;
            fromPartial(object: {
                seconds?: any;
                nanos?: number;
            }): _100.Duration;
            fromSDK(object: _100.DurationSDKType): _100.Duration;
            toSDK(message: _100.Duration): _100.DurationSDKType;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _99.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _99.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _99.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _99.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _99.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _99.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _99.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _99.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _99.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _99.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _99.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _99.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _99.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _99.FieldDescriptorProto_TypeSDKType;
        FieldDescriptorProto_Label: typeof _99.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _99.FieldDescriptorProto_LabelSDKType;
        FileOptions_OptimizeMode: typeof _99.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _99.FileOptions_OptimizeModeSDKType;
        FieldOptions_CType: typeof _99.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _99.FieldOptions_CTypeSDKType;
        FieldOptions_JSType: typeof _99.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _99.FieldOptions_JSTypeSDKType;
        MethodOptions_IdempotencyLevel: typeof _99.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _99.MethodOptions_IdempotencyLevelSDKType;
        FileDescriptorSet: {
            encode(message: _99.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.FileDescriptorSet;
            fromPartial(object: {
                file?: {
                    name?: string;
                    package?: string;
                    dependency?: string[];
                    publicDependency?: number[];
                    weakDependency?: number[];
                    messageType?: {
                        name?: string;
                        field?: {
                            name?: string;
                            number?: number;
                            label?: _99.FieldDescriptorProto_Label;
                            type?: _99.FieldDescriptorProto_Type;
                            typeName?: string;
                            extendee?: string;
                            defaultValue?: string;
                            oneofIndex?: number;
                            jsonName?: string;
                            options?: {
                                ctype?: _99.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _99.FieldOptions_JSType;
                                lazy?: boolean;
                                deprecated?: boolean;
                                weak?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: any;
                                    negativeIntValue?: any;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        extension?: {
                            name?: string;
                            number?: number;
                            label?: _99.FieldDescriptorProto_Label;
                            type?: _99.FieldDescriptorProto_Type;
                            typeName?: string;
                            extendee?: string;
                            defaultValue?: string;
                            oneofIndex?: number;
                            jsonName?: string;
                            options?: {
                                ctype?: _99.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _99.FieldOptions_JSType;
                                lazy?: boolean;
                                deprecated?: boolean;
                                weak?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: any;
                                    negativeIntValue?: any;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        nestedType?: any[];
                        enumType?: {
                            name?: string;
                            value?: {
                                name?: string;
                                number?: number;
                                options?: {
                                    deprecated?: boolean;
                                    uninterpretedOption?: {
                                        name?: {
                                            namePart?: string;
                                            isExtension?: boolean;
                                        }[];
                                        identifierValue?: string;
                                        positiveIntValue?: any;
                                        negativeIntValue?: any;
                                        doubleValue?: number;
                                        stringValue?: Uint8Array;
                                        aggregateValue?: string;
                                    }[];
                                };
                            }[];
                            options?: {
                                allowAlias?: boolean;
                                deprecated?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: any;
                                    negativeIntValue?: any;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                            reservedRange?: {
                                start?: number;
                                end?: number;
                            }[];
                            reservedName?: string[];
                        }[];
                        extensionRange?: {
                            start?: number;
                            end?: number;
                            options?: {
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: any;
                                    negativeIntValue?: any;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        oneofDecl?: {
                            name?: string;
                            options?: {
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: any;
                                    negativeIntValue?: any;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            messageSetWireFormat?: boolean;
                            noStandardDescriptorAccessor?: boolean;
                            deprecated?: boolean;
                            mapEntry?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: any;
                                negativeIntValue?: any;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                        reservedRange?: {
                            start?: number;
                            end?: number;
                        }[];
                        reservedName?: string[];
                    }[];
                    enumType?: {
                        name?: string;
                        value?: {
                            name?: string;
                            number?: number;
                            options?: {
                                deprecated?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: any;
                                    negativeIntValue?: any;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            allowAlias?: boolean;
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: any;
                                negativeIntValue?: any;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                        reservedRange?: {
                            start?: number;
                            end?: number;
                        }[];
                        reservedName?: string[];
                    }[];
                    service?: {
                        name?: string;
                        method?: {
                            name?: string;
                            inputType?: string;
                            outputType?: string;
                            options?: {
                                deprecated?: boolean;
                                idempotencyLevel?: _99.MethodOptions_IdempotencyLevel;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: any;
                                    negativeIntValue?: any;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                            clientStreaming?: boolean;
                            serverStreaming?: boolean;
                        }[];
                        options?: {
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: any;
                                negativeIntValue?: any;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    extension?: {
                        name?: string;
                        number?: number;
                        label?: _99.FieldDescriptorProto_Label;
                        type?: _99.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _99.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _99.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: any;
                                negativeIntValue?: any;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        javaPackage?: string;
                        javaOuterClassname?: string;
                        javaMultipleFiles?: boolean;
                        javaGenerateEqualsAndHash?: boolean;
                        javaStringCheckUtf8?: boolean;
                        optimizeFor?: _99.FileOptions_OptimizeMode;
                        goPackage?: string;
                        ccGenericServices?: boolean;
                        javaGenericServices?: boolean;
                        pyGenericServices?: boolean;
                        phpGenericServices?: boolean;
                        deprecated?: boolean;
                        ccEnableArenas?: boolean;
                        objcClassPrefix?: string;
                        csharpNamespace?: string;
                        swiftPrefix?: string;
                        phpClassPrefix?: string;
                        phpNamespace?: string;
                        phpMetadataNamespace?: string;
                        rubyPackage?: string;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: any;
                            negativeIntValue?: any;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    sourceCodeInfo?: {
                        location?: {
                            path?: number[];
                            span?: number[];
                            leadingComments?: string;
                            trailingComments?: string;
                            leadingDetachedComments?: string[];
                        }[];
                    };
                    syntax?: string;
                }[];
            }): _99.FileDescriptorSet;
            fromSDK(object: _99.FileDescriptorSetSDKType): _99.FileDescriptorSet;
            toSDK(message: _99.FileDescriptorSet): _99.FileDescriptorSetSDKType;
        };
        FileDescriptorProto: {
            encode(message: _99.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.FileDescriptorProto;
            fromPartial(object: {
                name?: string;
                package?: string;
                dependency?: string[];
                publicDependency?: number[];
                weakDependency?: number[];
                messageType?: {
                    name?: string;
                    field?: {
                        name?: string;
                        number?: number;
                        label?: _99.FieldDescriptorProto_Label;
                        type?: _99.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _99.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _99.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: any;
                                negativeIntValue?: any;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    extension?: {
                        name?: string;
                        number?: number;
                        label?: _99.FieldDescriptorProto_Label;
                        type?: _99.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _99.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _99.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: any;
                                negativeIntValue?: any;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    nestedType?: any[];
                    enumType?: {
                        name?: string;
                        value?: {
                            name?: string;
                            number?: number;
                            options?: {
                                deprecated?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: any;
                                    negativeIntValue?: any;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            allowAlias?: boolean;
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: any;
                                negativeIntValue?: any;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                        reservedRange?: {
                            start?: number;
                            end?: number;
                        }[];
                        reservedName?: string[];
                    }[];
                    extensionRange?: {
                        start?: number;
                        end?: number;
                        options?: {
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: any;
                                negativeIntValue?: any;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    oneofDecl?: {
                        name?: string;
                        options?: {
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: any;
                                negativeIntValue?: any;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        messageSetWireFormat?: boolean;
                        noStandardDescriptorAccessor?: boolean;
                        deprecated?: boolean;
                        mapEntry?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: any;
                            negativeIntValue?: any;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    reservedRange?: {
                        start?: number;
                        end?: number;
                    }[];
                    reservedName?: string[];
                }[];
                enumType?: {
                    name?: string;
                    value?: {
                        name?: string;
                        number?: number;
                        options?: {
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: any;
                                negativeIntValue?: any;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        allowAlias?: boolean;
                        deprecated?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: any;
                            negativeIntValue?: any;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    reservedRange?: {
                        start?: number;
                        end?: number;
                    }[];
                    reservedName?: string[];
                }[];
                service?: {
                    name?: string;
                    method?: {
                        name?: string;
                        inputType?: string;
                        outputType?: string;
                        options?: {
                            deprecated?: boolean;
                            idempotencyLevel?: _99.MethodOptions_IdempotencyLevel;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: any;
                                negativeIntValue?: any;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                        clientStreaming?: boolean;
                        serverStreaming?: boolean;
                    }[];
                    options?: {
                        deprecated?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: any;
                            negativeIntValue?: any;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                extension?: {
                    name?: string;
                    number?: number;
                    label?: _99.FieldDescriptorProto_Label;
                    type?: _99.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _99.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _99.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: any;
                            negativeIntValue?: any;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                options?: {
                    javaPackage?: string;
                    javaOuterClassname?: string;
                    javaMultipleFiles?: boolean;
                    javaGenerateEqualsAndHash?: boolean;
                    javaStringCheckUtf8?: boolean;
                    optimizeFor?: _99.FileOptions_OptimizeMode;
                    goPackage?: string;
                    ccGenericServices?: boolean;
                    javaGenericServices?: boolean;
                    pyGenericServices?: boolean;
                    phpGenericServices?: boolean;
                    deprecated?: boolean;
                    ccEnableArenas?: boolean;
                    objcClassPrefix?: string;
                    csharpNamespace?: string;
                    swiftPrefix?: string;
                    phpClassPrefix?: string;
                    phpNamespace?: string;
                    phpMetadataNamespace?: string;
                    rubyPackage?: string;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: any;
                        negativeIntValue?: any;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
                sourceCodeInfo?: {
                    location?: {
                        path?: number[];
                        span?: number[];
                        leadingComments?: string;
                        trailingComments?: string;
                        leadingDetachedComments?: string[];
                    }[];
                };
                syntax?: string;
            }): _99.FileDescriptorProto;
            fromSDK(object: _99.FileDescriptorProtoSDKType): _99.FileDescriptorProto;
            toSDK(message: _99.FileDescriptorProto): _99.FileDescriptorProtoSDKType;
        };
        DescriptorProto: {
            encode(message: _99.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.DescriptorProto;
            fromPartial(object: {
                name?: string;
                field?: {
                    name?: string;
                    number?: number;
                    label?: _99.FieldDescriptorProto_Label;
                    type?: _99.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _99.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _99.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: any;
                            negativeIntValue?: any;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                extension?: {
                    name?: string;
                    number?: number;
                    label?: _99.FieldDescriptorProto_Label;
                    type?: _99.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _99.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _99.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: any;
                            negativeIntValue?: any;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                nestedType?: any[];
                enumType?: {
                    name?: string;
                    value?: {
                        name?: string;
                        number?: number;
                        options?: {
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: any;
                                negativeIntValue?: any;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        allowAlias?: boolean;
                        deprecated?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: any;
                            negativeIntValue?: any;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    reservedRange?: {
                        start?: number;
                        end?: number;
                    }[];
                    reservedName?: string[];
                }[];
                extensionRange?: {
                    start?: number;
                    end?: number;
                    options?: {
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: any;
                            negativeIntValue?: any;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                oneofDecl?: {
                    name?: string;
                    options?: {
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: any;
                            negativeIntValue?: any;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                options?: {
                    messageSetWireFormat?: boolean;
                    noStandardDescriptorAccessor?: boolean;
                    deprecated?: boolean;
                    mapEntry?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: any;
                        negativeIntValue?: any;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
                reservedRange?: {
                    start?: number;
                    end?: number;
                }[];
                reservedName?: string[];
            }): _99.DescriptorProto;
            fromSDK(object: _99.DescriptorProtoSDKType): _99.DescriptorProto;
            toSDK(message: _99.DescriptorProto): _99.DescriptorProtoSDKType;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _99.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.DescriptorProto_ExtensionRange;
            fromPartial(object: {
                start?: number;
                end?: number;
                options?: {
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: any;
                        negativeIntValue?: any;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _99.DescriptorProto_ExtensionRange;
            fromSDK(object: _99.DescriptorProto_ExtensionRangeSDKType): _99.DescriptorProto_ExtensionRange;
            toSDK(message: _99.DescriptorProto_ExtensionRange): _99.DescriptorProto_ExtensionRangeSDKType;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _99.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.DescriptorProto_ReservedRange;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _99.DescriptorProto_ReservedRange;
            fromSDK(object: _99.DescriptorProto_ReservedRangeSDKType): _99.DescriptorProto_ReservedRange;
            toSDK(message: _99.DescriptorProto_ReservedRange): _99.DescriptorProto_ReservedRangeSDKType;
        };
        ExtensionRangeOptions: {
            encode(message: _99.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ExtensionRangeOptions;
            fromPartial(object: {
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: any;
                    negativeIntValue?: any;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _99.ExtensionRangeOptions;
            fromSDK(object: _99.ExtensionRangeOptionsSDKType): _99.ExtensionRangeOptions;
            toSDK(message: _99.ExtensionRangeOptions): _99.ExtensionRangeOptionsSDKType;
        };
        FieldDescriptorProto: {
            encode(message: _99.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.FieldDescriptorProto;
            fromPartial(object: {
                name?: string;
                number?: number;
                label?: _99.FieldDescriptorProto_Label;
                type?: _99.FieldDescriptorProto_Type;
                typeName?: string;
                extendee?: string;
                defaultValue?: string;
                oneofIndex?: number;
                jsonName?: string;
                options?: {
                    ctype?: _99.FieldOptions_CType;
                    packed?: boolean;
                    jstype?: _99.FieldOptions_JSType;
                    lazy?: boolean;
                    deprecated?: boolean;
                    weak?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: any;
                        negativeIntValue?: any;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _99.FieldDescriptorProto;
            fromSDK(object: _99.FieldDescriptorProtoSDKType): _99.FieldDescriptorProto;
            toSDK(message: _99.FieldDescriptorProto): _99.FieldDescriptorProtoSDKType;
        };
        OneofDescriptorProto: {
            encode(message: _99.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.OneofDescriptorProto;
            fromPartial(object: {
                name?: string;
                options?: {
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: any;
                        negativeIntValue?: any;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _99.OneofDescriptorProto;
            fromSDK(object: _99.OneofDescriptorProtoSDKType): _99.OneofDescriptorProto;
            toSDK(message: _99.OneofDescriptorProto): _99.OneofDescriptorProtoSDKType;
        };
        EnumDescriptorProto: {
            encode(message: _99.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.EnumDescriptorProto;
            fromPartial(object: {
                name?: string;
                value?: {
                    name?: string;
                    number?: number;
                    options?: {
                        deprecated?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: any;
                            negativeIntValue?: any;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                options?: {
                    allowAlias?: boolean;
                    deprecated?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: any;
                        negativeIntValue?: any;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
                reservedRange?: {
                    start?: number;
                    end?: number;
                }[];
                reservedName?: string[];
            }): _99.EnumDescriptorProto;
            fromSDK(object: _99.EnumDescriptorProtoSDKType): _99.EnumDescriptorProto;
            toSDK(message: _99.EnumDescriptorProto): _99.EnumDescriptorProtoSDKType;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _99.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _99.EnumDescriptorProto_EnumReservedRange;
            fromSDK(object: _99.EnumDescriptorProto_EnumReservedRangeSDKType): _99.EnumDescriptorProto_EnumReservedRange;
            toSDK(message: _99.EnumDescriptorProto_EnumReservedRange): _99.EnumDescriptorProto_EnumReservedRangeSDKType;
        };
        EnumValueDescriptorProto: {
            encode(message: _99.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.EnumValueDescriptorProto;
            fromPartial(object: {
                name?: string;
                number?: number;
                options?: {
                    deprecated?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: any;
                        negativeIntValue?: any;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _99.EnumValueDescriptorProto;
            fromSDK(object: _99.EnumValueDescriptorProtoSDKType): _99.EnumValueDescriptorProto;
            toSDK(message: _99.EnumValueDescriptorProto): _99.EnumValueDescriptorProtoSDKType;
        };
        ServiceDescriptorProto: {
            encode(message: _99.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ServiceDescriptorProto;
            fromPartial(object: {
                name?: string;
                method?: {
                    name?: string;
                    inputType?: string;
                    outputType?: string;
                    options?: {
                        deprecated?: boolean;
                        idempotencyLevel?: _99.MethodOptions_IdempotencyLevel;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: any;
                            negativeIntValue?: any;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    clientStreaming?: boolean;
                    serverStreaming?: boolean;
                }[];
                options?: {
                    deprecated?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: any;
                        negativeIntValue?: any;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _99.ServiceDescriptorProto;
            fromSDK(object: _99.ServiceDescriptorProtoSDKType): _99.ServiceDescriptorProto;
            toSDK(message: _99.ServiceDescriptorProto): _99.ServiceDescriptorProtoSDKType;
        };
        MethodDescriptorProto: {
            encode(message: _99.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MethodDescriptorProto;
            fromPartial(object: {
                name?: string;
                inputType?: string;
                outputType?: string;
                options?: {
                    deprecated?: boolean;
                    idempotencyLevel?: _99.MethodOptions_IdempotencyLevel;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: any;
                        negativeIntValue?: any;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
                clientStreaming?: boolean;
                serverStreaming?: boolean;
            }): _99.MethodDescriptorProto;
            fromSDK(object: _99.MethodDescriptorProtoSDKType): _99.MethodDescriptorProto;
            toSDK(message: _99.MethodDescriptorProto): _99.MethodDescriptorProtoSDKType;
        };
        FileOptions: {
            encode(message: _99.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.FileOptions;
            fromPartial(object: {
                javaPackage?: string;
                javaOuterClassname?: string;
                javaMultipleFiles?: boolean;
                javaGenerateEqualsAndHash?: boolean;
                javaStringCheckUtf8?: boolean;
                optimizeFor?: _99.FileOptions_OptimizeMode;
                goPackage?: string;
                ccGenericServices?: boolean;
                javaGenericServices?: boolean;
                pyGenericServices?: boolean;
                phpGenericServices?: boolean;
                deprecated?: boolean;
                ccEnableArenas?: boolean;
                objcClassPrefix?: string;
                csharpNamespace?: string;
                swiftPrefix?: string;
                phpClassPrefix?: string;
                phpNamespace?: string;
                phpMetadataNamespace?: string;
                rubyPackage?: string;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: any;
                    negativeIntValue?: any;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _99.FileOptions;
            fromSDK(object: _99.FileOptionsSDKType): _99.FileOptions;
            toSDK(message: _99.FileOptions): _99.FileOptionsSDKType;
        };
        MessageOptions: {
            encode(message: _99.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MessageOptions;
            fromPartial(object: {
                messageSetWireFormat?: boolean;
                noStandardDescriptorAccessor?: boolean;
                deprecated?: boolean;
                mapEntry?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: any;
                    negativeIntValue?: any;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _99.MessageOptions;
            fromSDK(object: _99.MessageOptionsSDKType): _99.MessageOptions;
            toSDK(message: _99.MessageOptions): _99.MessageOptionsSDKType;
        };
        FieldOptions: {
            encode(message: _99.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.FieldOptions;
            fromPartial(object: {
                ctype?: _99.FieldOptions_CType;
                packed?: boolean;
                jstype?: _99.FieldOptions_JSType;
                lazy?: boolean;
                deprecated?: boolean;
                weak?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: any;
                    negativeIntValue?: any;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _99.FieldOptions;
            fromSDK(object: _99.FieldOptionsSDKType): _99.FieldOptions;
            toSDK(message: _99.FieldOptions): _99.FieldOptionsSDKType;
        };
        OneofOptions: {
            encode(message: _99.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.OneofOptions;
            fromPartial(object: {
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: any;
                    negativeIntValue?: any;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _99.OneofOptions;
            fromSDK(object: _99.OneofOptionsSDKType): _99.OneofOptions;
            toSDK(message: _99.OneofOptions): _99.OneofOptionsSDKType;
        };
        EnumOptions: {
            encode(message: _99.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.EnumOptions;
            fromPartial(object: {
                allowAlias?: boolean;
                deprecated?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: any;
                    negativeIntValue?: any;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _99.EnumOptions;
            fromSDK(object: _99.EnumOptionsSDKType): _99.EnumOptions;
            toSDK(message: _99.EnumOptions): _99.EnumOptionsSDKType;
        };
        EnumValueOptions: {
            encode(message: _99.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.EnumValueOptions;
            fromPartial(object: {
                deprecated?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: any;
                    negativeIntValue?: any;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _99.EnumValueOptions;
            fromSDK(object: _99.EnumValueOptionsSDKType): _99.EnumValueOptions;
            toSDK(message: _99.EnumValueOptions): _99.EnumValueOptionsSDKType;
        };
        ServiceOptions: {
            encode(message: _99.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ServiceOptions;
            fromPartial(object: {
                deprecated?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: any;
                    negativeIntValue?: any;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _99.ServiceOptions;
            fromSDK(object: _99.ServiceOptionsSDKType): _99.ServiceOptions;
            toSDK(message: _99.ServiceOptions): _99.ServiceOptionsSDKType;
        };
        MethodOptions: {
            encode(message: _99.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MethodOptions;
            fromPartial(object: {
                deprecated?: boolean;
                idempotencyLevel?: _99.MethodOptions_IdempotencyLevel;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: any;
                    negativeIntValue?: any;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _99.MethodOptions;
            fromSDK(object: _99.MethodOptionsSDKType): _99.MethodOptions;
            toSDK(message: _99.MethodOptions): _99.MethodOptionsSDKType;
        };
        UninterpretedOption: {
            encode(message: _99.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.UninterpretedOption;
            fromPartial(object: {
                name?: {
                    namePart?: string;
                    isExtension?: boolean;
                }[];
                identifierValue?: string;
                positiveIntValue?: any;
                negativeIntValue?: any;
                doubleValue?: number;
                stringValue?: Uint8Array;
                aggregateValue?: string;
            }): _99.UninterpretedOption;
            fromSDK(object: _99.UninterpretedOptionSDKType): _99.UninterpretedOption;
            toSDK(message: _99.UninterpretedOption): _99.UninterpretedOptionSDKType;
        };
        UninterpretedOption_NamePart: {
            encode(message: _99.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.UninterpretedOption_NamePart;
            fromPartial(object: {
                namePart?: string;
                isExtension?: boolean;
            }): _99.UninterpretedOption_NamePart;
            fromSDK(object: _99.UninterpretedOption_NamePartSDKType): _99.UninterpretedOption_NamePart;
            toSDK(message: _99.UninterpretedOption_NamePart): _99.UninterpretedOption_NamePartSDKType;
        };
        SourceCodeInfo: {
            encode(message: _99.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.SourceCodeInfo;
            fromPartial(object: {
                location?: {
                    path?: number[];
                    span?: number[];
                    leadingComments?: string;
                    trailingComments?: string;
                    leadingDetachedComments?: string[];
                }[];
            }): _99.SourceCodeInfo;
            fromSDK(object: _99.SourceCodeInfoSDKType): _99.SourceCodeInfo;
            toSDK(message: _99.SourceCodeInfo): _99.SourceCodeInfoSDKType;
        };
        SourceCodeInfo_Location: {
            encode(message: _99.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.SourceCodeInfo_Location;
            fromPartial(object: {
                path?: number[];
                span?: number[];
                leadingComments?: string;
                trailingComments?: string;
                leadingDetachedComments?: string[];
            }): _99.SourceCodeInfo_Location;
            fromSDK(object: _99.SourceCodeInfo_LocationSDKType): _99.SourceCodeInfo_Location;
            toSDK(message: _99.SourceCodeInfo_Location): _99.SourceCodeInfo_LocationSDKType;
        };
        GeneratedCodeInfo: {
            encode(message: _99.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.GeneratedCodeInfo;
            fromPartial(object: {
                annotation?: {
                    path?: number[];
                    sourceFile?: string;
                    begin?: number;
                    end?: number;
                }[];
            }): _99.GeneratedCodeInfo;
            fromSDK(object: _99.GeneratedCodeInfoSDKType): _99.GeneratedCodeInfo;
            toSDK(message: _99.GeneratedCodeInfo): _99.GeneratedCodeInfoSDKType;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _99.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.GeneratedCodeInfo_Annotation;
            fromPartial(object: {
                path?: number[];
                sourceFile?: string;
                begin?: number;
                end?: number;
            }): _99.GeneratedCodeInfo_Annotation;
            fromSDK(object: _99.GeneratedCodeInfo_AnnotationSDKType): _99.GeneratedCodeInfo_Annotation;
            toSDK(message: _99.GeneratedCodeInfo_Annotation): _99.GeneratedCodeInfo_AnnotationSDKType;
        };
        Any: {
            encode(message: _98.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Any;
            fromPartial(object: {
                typeUrl?: string;
                value?: Uint8Array;
            }): _98.Any;
            fromSDK(object: _98.AnySDKType): _98.Any;
            toSDK(message: _98.Any): _98.AnySDKType;
        };
    };
}
