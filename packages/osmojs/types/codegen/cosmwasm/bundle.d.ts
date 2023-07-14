import * as _82 from "./wasm/v1/authz";
import * as _83 from "./wasm/v1/genesis";
import * as _84 from "./wasm/v1/ibc";
import * as _85 from "./wasm/v1/proposal";
import * as _86 from "./wasm/v1/query";
import * as _87 from "./wasm/v1/tx";
import * as _88 from "./wasm/v1/types";
import * as _257 from "./wasm/v1/query.lcd";
import * as _258 from "./wasm/v1/query.rpc.Query";
import * as _259 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _259.MsgClientImpl;
            QueryClientImpl: typeof _258.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _86.QueryContractInfoRequest): Promise<_86.QueryContractInfoResponse>;
                contractHistory(request: _86.QueryContractHistoryRequest): Promise<_86.QueryContractHistoryResponse>;
                contractsByCode(request: _86.QueryContractsByCodeRequest): Promise<_86.QueryContractsByCodeResponse>;
                allContractState(request: _86.QueryAllContractStateRequest): Promise<_86.QueryAllContractStateResponse>;
                rawContractState(request: _86.QueryRawContractStateRequest): Promise<_86.QueryRawContractStateResponse>;
                smartContractState(request: _86.QuerySmartContractStateRequest): Promise<_86.QuerySmartContractStateResponse>;
                code(request: _86.QueryCodeRequest): Promise<_86.QueryCodeResponse>;
                codes(request?: _86.QueryCodesRequest): Promise<_86.QueryCodesResponse>;
                pinnedCodes(request?: _86.QueryPinnedCodesRequest): Promise<_86.QueryPinnedCodesResponse>;
                params(request?: _86.QueryParamsRequest): Promise<_86.QueryParamsResponse>;
                contractsByCreator(request: _86.QueryContractsByCreatorRequest): Promise<_86.QueryContractsByCreatorResponse>;
            };
            LCDQueryClient: typeof _257.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _87.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _87.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _87.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _87.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _87.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _87.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _87.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateInstantiateConfig(value: _87.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _87.MsgStoreCode): {
                        typeUrl: string;
                        value: _87.MsgStoreCode;
                    };
                    instantiateContract(value: _87.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _87.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _87.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _87.MsgInstantiateContract2;
                    };
                    executeContract(value: _87.MsgExecuteContract): {
                        typeUrl: string;
                        value: _87.MsgExecuteContract;
                    };
                    migrateContract(value: _87.MsgMigrateContract): {
                        typeUrl: string;
                        value: _87.MsgMigrateContract;
                    };
                    updateAdmin(value: _87.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _87.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _87.MsgClearAdmin): {
                        typeUrl: string;
                        value: _87.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _87.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _87.MsgUpdateInstantiateConfig;
                    };
                };
                fromPartial: {
                    storeCode(value: _87.MsgStoreCode): {
                        typeUrl: string;
                        value: _87.MsgStoreCode;
                    };
                    instantiateContract(value: _87.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _87.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _87.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _87.MsgInstantiateContract2;
                    };
                    executeContract(value: _87.MsgExecuteContract): {
                        typeUrl: string;
                        value: _87.MsgExecuteContract;
                    };
                    migrateContract(value: _87.MsgMigrateContract): {
                        typeUrl: string;
                        value: _87.MsgMigrateContract;
                    };
                    updateAdmin(value: _87.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _87.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _87.MsgClearAdmin): {
                        typeUrl: string;
                        value: _87.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _87.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _87.MsgUpdateInstantiateConfig;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _87.MsgStoreCode) => _87.MsgStoreCodeAmino;
                    fromAmino: (object: _87.MsgStoreCodeAmino) => _87.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _87.MsgInstantiateContract) => _87.MsgInstantiateContractAmino;
                    fromAmino: (object: _87.MsgInstantiateContractAmino) => _87.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: (message: _87.MsgInstantiateContract2) => _87.MsgInstantiateContract2Amino;
                    fromAmino: (object: _87.MsgInstantiateContract2Amino) => _87.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _87.MsgExecuteContract) => _87.MsgExecuteContractAmino;
                    fromAmino: (object: _87.MsgExecuteContractAmino) => _87.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _87.MsgMigrateContract) => _87.MsgMigrateContractAmino;
                    fromAmino: (object: _87.MsgMigrateContractAmino) => _87.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _87.MsgUpdateAdmin) => _87.MsgUpdateAdminAmino;
                    fromAmino: (object: _87.MsgUpdateAdminAmino) => _87.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _87.MsgClearAdmin) => _87.MsgClearAdminAmino;
                    fromAmino: (object: _87.MsgClearAdminAmino) => _87.MsgClearAdmin;
                };
                "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
                    aminoType: string;
                    toAmino: (message: _87.MsgUpdateInstantiateConfig) => _87.MsgUpdateInstantiateConfigAmino;
                    fromAmino: (object: _87.MsgUpdateInstantiateConfigAmino) => _87.MsgUpdateInstantiateConfig;
                };
            };
            accessTypeFromJSON(object: any): _88.AccessType;
            accessTypeToJSON(object: _88.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _88.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _88.ContractCodeHistoryOperationType): string;
            AccessType: typeof _88.AccessType;
            AccessTypeSDKType: typeof _88.AccessType;
            AccessTypeAmino: typeof _88.AccessType;
            ContractCodeHistoryOperationType: typeof _88.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _88.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _88.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                typeUrl: string;
                encode(message: _88.AccessTypeParam, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.AccessTypeParam;
                fromPartial(object: Partial<_88.AccessTypeParam>): _88.AccessTypeParam;
                fromAmino(object: _88.AccessTypeParamAmino): _88.AccessTypeParam;
                toAmino(message: _88.AccessTypeParam): _88.AccessTypeParamAmino;
                fromAminoMsg(object: _88.AccessTypeParamAminoMsg): _88.AccessTypeParam;
                toAminoMsg(message: _88.AccessTypeParam): _88.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _88.AccessTypeParamProtoMsg): _88.AccessTypeParam;
                toProto(message: _88.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _88.AccessTypeParam): _88.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                typeUrl: string;
                encode(message: _88.AccessConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.AccessConfig;
                fromPartial(object: Partial<_88.AccessConfig>): _88.AccessConfig;
                fromAmino(object: _88.AccessConfigAmino): _88.AccessConfig;
                toAmino(message: _88.AccessConfig): _88.AccessConfigAmino;
                fromAminoMsg(object: _88.AccessConfigAminoMsg): _88.AccessConfig;
                toAminoMsg(message: _88.AccessConfig): _88.AccessConfigAminoMsg;
                fromProtoMsg(message: _88.AccessConfigProtoMsg): _88.AccessConfig;
                toProto(message: _88.AccessConfig): Uint8Array;
                toProtoMsg(message: _88.AccessConfig): _88.AccessConfigProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _88.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.Params;
                fromPartial(object: Partial<_88.Params>): _88.Params;
                fromAmino(object: _88.ParamsAmino): _88.Params;
                toAmino(message: _88.Params): _88.ParamsAmino;
                fromAminoMsg(object: _88.ParamsAminoMsg): _88.Params;
                toAminoMsg(message: _88.Params): _88.ParamsAminoMsg;
                fromProtoMsg(message: _88.ParamsProtoMsg): _88.Params;
                toProto(message: _88.Params): Uint8Array;
                toProtoMsg(message: _88.Params): _88.ParamsProtoMsg;
            };
            CodeInfo: {
                typeUrl: string;
                encode(message: _88.CodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.CodeInfo;
                fromPartial(object: Partial<_88.CodeInfo>): _88.CodeInfo;
                fromAmino(object: _88.CodeInfoAmino): _88.CodeInfo;
                toAmino(message: _88.CodeInfo): _88.CodeInfoAmino;
                fromAminoMsg(object: _88.CodeInfoAminoMsg): _88.CodeInfo;
                toAminoMsg(message: _88.CodeInfo): _88.CodeInfoAminoMsg;
                fromProtoMsg(message: _88.CodeInfoProtoMsg): _88.CodeInfo;
                toProto(message: _88.CodeInfo): Uint8Array;
                toProtoMsg(message: _88.CodeInfo): _88.CodeInfoProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                encode(message: _88.ContractInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.ContractInfo;
                fromPartial(object: Partial<_88.ContractInfo>): _88.ContractInfo;
                fromAmino(object: _88.ContractInfoAmino): _88.ContractInfo;
                toAmino(message: _88.ContractInfo): _88.ContractInfoAmino;
                fromAminoMsg(object: _88.ContractInfoAminoMsg): _88.ContractInfo;
                toAminoMsg(message: _88.ContractInfo): _88.ContractInfoAminoMsg;
                fromProtoMsg(message: _88.ContractInfoProtoMsg): _88.ContractInfo;
                toProto(message: _88.ContractInfo): Uint8Array;
                toProtoMsg(message: _88.ContractInfo): _88.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                typeUrl: string;
                encode(message: _88.ContractCodeHistoryEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.ContractCodeHistoryEntry;
                fromPartial(object: Partial<_88.ContractCodeHistoryEntry>): _88.ContractCodeHistoryEntry;
                fromAmino(object: _88.ContractCodeHistoryEntryAmino): _88.ContractCodeHistoryEntry;
                toAmino(message: _88.ContractCodeHistoryEntry): _88.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _88.ContractCodeHistoryEntryAminoMsg): _88.ContractCodeHistoryEntry;
                toAminoMsg(message: _88.ContractCodeHistoryEntry): _88.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _88.ContractCodeHistoryEntryProtoMsg): _88.ContractCodeHistoryEntry;
                toProto(message: _88.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _88.ContractCodeHistoryEntry): _88.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                typeUrl: string;
                encode(message: _88.AbsoluteTxPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.AbsoluteTxPosition;
                fromPartial(object: Partial<_88.AbsoluteTxPosition>): _88.AbsoluteTxPosition;
                fromAmino(object: _88.AbsoluteTxPositionAmino): _88.AbsoluteTxPosition;
                toAmino(message: _88.AbsoluteTxPosition): _88.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _88.AbsoluteTxPositionAminoMsg): _88.AbsoluteTxPosition;
                toAminoMsg(message: _88.AbsoluteTxPosition): _88.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _88.AbsoluteTxPositionProtoMsg): _88.AbsoluteTxPosition;
                toProto(message: _88.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _88.AbsoluteTxPosition): _88.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                typeUrl: string;
                encode(message: _88.Model, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.Model;
                fromPartial(object: Partial<_88.Model>): _88.Model;
                fromAmino(object: _88.ModelAmino): _88.Model;
                toAmino(message: _88.Model): _88.ModelAmino;
                fromAminoMsg(object: _88.ModelAminoMsg): _88.Model;
                toAminoMsg(message: _88.Model): _88.ModelAminoMsg;
                fromProtoMsg(message: _88.ModelProtoMsg): _88.Model;
                toProto(message: _88.Model): Uint8Array;
                toProtoMsg(message: _88.Model): _88.ModelProtoMsg;
            };
            Cosmwasm_wasmv1ContractInfoExtension_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            MsgStoreCode: {
                typeUrl: string;
                encode(message: _87.MsgStoreCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.MsgStoreCode;
                fromPartial(object: Partial<_87.MsgStoreCode>): _87.MsgStoreCode;
                fromAmino(object: _87.MsgStoreCodeAmino): _87.MsgStoreCode;
                toAmino(message: _87.MsgStoreCode): _87.MsgStoreCodeAmino;
                fromAminoMsg(object: _87.MsgStoreCodeAminoMsg): _87.MsgStoreCode;
                toAminoMsg(message: _87.MsgStoreCode): _87.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _87.MsgStoreCodeProtoMsg): _87.MsgStoreCode;
                toProto(message: _87.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _87.MsgStoreCode): _87.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                encode(message: _87.MsgStoreCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.MsgStoreCodeResponse;
                fromPartial(object: Partial<_87.MsgStoreCodeResponse>): _87.MsgStoreCodeResponse;
                fromAmino(object: _87.MsgStoreCodeResponseAmino): _87.MsgStoreCodeResponse;
                toAmino(message: _87.MsgStoreCodeResponse): _87.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _87.MsgStoreCodeResponseAminoMsg): _87.MsgStoreCodeResponse;
                toAminoMsg(message: _87.MsgStoreCodeResponse): _87.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _87.MsgStoreCodeResponseProtoMsg): _87.MsgStoreCodeResponse;
                toProto(message: _87.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _87.MsgStoreCodeResponse): _87.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                encode(message: _87.MsgInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.MsgInstantiateContract;
                fromPartial(object: Partial<_87.MsgInstantiateContract>): _87.MsgInstantiateContract;
                fromAmino(object: _87.MsgInstantiateContractAmino): _87.MsgInstantiateContract;
                toAmino(message: _87.MsgInstantiateContract): _87.MsgInstantiateContractAmino;
                fromAminoMsg(object: _87.MsgInstantiateContractAminoMsg): _87.MsgInstantiateContract;
                toAminoMsg(message: _87.MsgInstantiateContract): _87.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _87.MsgInstantiateContractProtoMsg): _87.MsgInstantiateContract;
                toProto(message: _87.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _87.MsgInstantiateContract): _87.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContract2: {
                typeUrl: string;
                encode(message: _87.MsgInstantiateContract2, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.MsgInstantiateContract2;
                fromPartial(object: Partial<_87.MsgInstantiateContract2>): _87.MsgInstantiateContract2;
                fromAmino(object: _87.MsgInstantiateContract2Amino): _87.MsgInstantiateContract2;
                toAmino(message: _87.MsgInstantiateContract2): _87.MsgInstantiateContract2Amino;
                fromAminoMsg(object: _87.MsgInstantiateContract2AminoMsg): _87.MsgInstantiateContract2;
                toAminoMsg(message: _87.MsgInstantiateContract2): _87.MsgInstantiateContract2AminoMsg;
                fromProtoMsg(message: _87.MsgInstantiateContract2ProtoMsg): _87.MsgInstantiateContract2;
                toProto(message: _87.MsgInstantiateContract2): Uint8Array;
                toProtoMsg(message: _87.MsgInstantiateContract2): _87.MsgInstantiateContract2ProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _87.MsgInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.MsgInstantiateContractResponse;
                fromPartial(object: Partial<_87.MsgInstantiateContractResponse>): _87.MsgInstantiateContractResponse;
                fromAmino(object: _87.MsgInstantiateContractResponseAmino): _87.MsgInstantiateContractResponse;
                toAmino(message: _87.MsgInstantiateContractResponse): _87.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _87.MsgInstantiateContractResponseAminoMsg): _87.MsgInstantiateContractResponse;
                toAminoMsg(message: _87.MsgInstantiateContractResponse): _87.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _87.MsgInstantiateContractResponseProtoMsg): _87.MsgInstantiateContractResponse;
                toProto(message: _87.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _87.MsgInstantiateContractResponse): _87.MsgInstantiateContractResponseProtoMsg;
            };
            MsgInstantiateContract2Response: {
                typeUrl: string;
                encode(message: _87.MsgInstantiateContract2Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.MsgInstantiateContract2Response;
                fromPartial(object: Partial<_87.MsgInstantiateContract2Response>): _87.MsgInstantiateContract2Response;
                fromAmino(object: _87.MsgInstantiateContract2ResponseAmino): _87.MsgInstantiateContract2Response;
                toAmino(message: _87.MsgInstantiateContract2Response): _87.MsgInstantiateContract2ResponseAmino;
                fromAminoMsg(object: _87.MsgInstantiateContract2ResponseAminoMsg): _87.MsgInstantiateContract2Response;
                toAminoMsg(message: _87.MsgInstantiateContract2Response): _87.MsgInstantiateContract2ResponseAminoMsg;
                fromProtoMsg(message: _87.MsgInstantiateContract2ResponseProtoMsg): _87.MsgInstantiateContract2Response;
                toProto(message: _87.MsgInstantiateContract2Response): Uint8Array;
                toProtoMsg(message: _87.MsgInstantiateContract2Response): _87.MsgInstantiateContract2ResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                encode(message: _87.MsgExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.MsgExecuteContract;
                fromPartial(object: Partial<_87.MsgExecuteContract>): _87.MsgExecuteContract;
                fromAmino(object: _87.MsgExecuteContractAmino): _87.MsgExecuteContract;
                toAmino(message: _87.MsgExecuteContract): _87.MsgExecuteContractAmino;
                fromAminoMsg(object: _87.MsgExecuteContractAminoMsg): _87.MsgExecuteContract;
                toAminoMsg(message: _87.MsgExecuteContract): _87.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _87.MsgExecuteContractProtoMsg): _87.MsgExecuteContract;
                toProto(message: _87.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _87.MsgExecuteContract): _87.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                encode(message: _87.MsgExecuteContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.MsgExecuteContractResponse;
                fromPartial(object: Partial<_87.MsgExecuteContractResponse>): _87.MsgExecuteContractResponse;
                fromAmino(object: _87.MsgExecuteContractResponseAmino): _87.MsgExecuteContractResponse;
                toAmino(message: _87.MsgExecuteContractResponse): _87.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _87.MsgExecuteContractResponseAminoMsg): _87.MsgExecuteContractResponse;
                toAminoMsg(message: _87.MsgExecuteContractResponse): _87.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _87.MsgExecuteContractResponseProtoMsg): _87.MsgExecuteContractResponse;
                toProto(message: _87.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _87.MsgExecuteContractResponse): _87.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                typeUrl: string;
                encode(message: _87.MsgMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.MsgMigrateContract;
                fromPartial(object: Partial<_87.MsgMigrateContract>): _87.MsgMigrateContract;
                fromAmino(object: _87.MsgMigrateContractAmino): _87.MsgMigrateContract;
                toAmino(message: _87.MsgMigrateContract): _87.MsgMigrateContractAmino;
                fromAminoMsg(object: _87.MsgMigrateContractAminoMsg): _87.MsgMigrateContract;
                toAminoMsg(message: _87.MsgMigrateContract): _87.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _87.MsgMigrateContractProtoMsg): _87.MsgMigrateContract;
                toProto(message: _87.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _87.MsgMigrateContract): _87.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                typeUrl: string;
                encode(message: _87.MsgMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.MsgMigrateContractResponse;
                fromPartial(object: Partial<_87.MsgMigrateContractResponse>): _87.MsgMigrateContractResponse;
                fromAmino(object: _87.MsgMigrateContractResponseAmino): _87.MsgMigrateContractResponse;
                toAmino(message: _87.MsgMigrateContractResponse): _87.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _87.MsgMigrateContractResponseAminoMsg): _87.MsgMigrateContractResponse;
                toAminoMsg(message: _87.MsgMigrateContractResponse): _87.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _87.MsgMigrateContractResponseProtoMsg): _87.MsgMigrateContractResponse;
                toProto(message: _87.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _87.MsgMigrateContractResponse): _87.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                typeUrl: string;
                encode(message: _87.MsgUpdateAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.MsgUpdateAdmin;
                fromPartial(object: Partial<_87.MsgUpdateAdmin>): _87.MsgUpdateAdmin;
                fromAmino(object: _87.MsgUpdateAdminAmino): _87.MsgUpdateAdmin;
                toAmino(message: _87.MsgUpdateAdmin): _87.MsgUpdateAdminAmino;
                fromAminoMsg(object: _87.MsgUpdateAdminAminoMsg): _87.MsgUpdateAdmin;
                toAminoMsg(message: _87.MsgUpdateAdmin): _87.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _87.MsgUpdateAdminProtoMsg): _87.MsgUpdateAdmin;
                toProto(message: _87.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _87.MsgUpdateAdmin): _87.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                typeUrl: string;
                encode(_: _87.MsgUpdateAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.MsgUpdateAdminResponse;
                fromPartial(_: Partial<_87.MsgUpdateAdminResponse>): _87.MsgUpdateAdminResponse;
                fromAmino(_: _87.MsgUpdateAdminResponseAmino): _87.MsgUpdateAdminResponse;
                toAmino(_: _87.MsgUpdateAdminResponse): _87.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _87.MsgUpdateAdminResponseAminoMsg): _87.MsgUpdateAdminResponse;
                toAminoMsg(message: _87.MsgUpdateAdminResponse): _87.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _87.MsgUpdateAdminResponseProtoMsg): _87.MsgUpdateAdminResponse;
                toProto(message: _87.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _87.MsgUpdateAdminResponse): _87.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                typeUrl: string;
                encode(message: _87.MsgClearAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.MsgClearAdmin;
                fromPartial(object: Partial<_87.MsgClearAdmin>): _87.MsgClearAdmin;
                fromAmino(object: _87.MsgClearAdminAmino): _87.MsgClearAdmin;
                toAmino(message: _87.MsgClearAdmin): _87.MsgClearAdminAmino;
                fromAminoMsg(object: _87.MsgClearAdminAminoMsg): _87.MsgClearAdmin;
                toAminoMsg(message: _87.MsgClearAdmin): _87.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _87.MsgClearAdminProtoMsg): _87.MsgClearAdmin;
                toProto(message: _87.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _87.MsgClearAdmin): _87.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                typeUrl: string;
                encode(_: _87.MsgClearAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.MsgClearAdminResponse;
                fromPartial(_: Partial<_87.MsgClearAdminResponse>): _87.MsgClearAdminResponse;
                fromAmino(_: _87.MsgClearAdminResponseAmino): _87.MsgClearAdminResponse;
                toAmino(_: _87.MsgClearAdminResponse): _87.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _87.MsgClearAdminResponseAminoMsg): _87.MsgClearAdminResponse;
                toAminoMsg(message: _87.MsgClearAdminResponse): _87.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _87.MsgClearAdminResponseProtoMsg): _87.MsgClearAdminResponse;
                toProto(message: _87.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _87.MsgClearAdminResponse): _87.MsgClearAdminResponseProtoMsg;
            };
            MsgUpdateInstantiateConfig: {
                typeUrl: string;
                encode(message: _87.MsgUpdateInstantiateConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.MsgUpdateInstantiateConfig;
                fromPartial(object: Partial<_87.MsgUpdateInstantiateConfig>): _87.MsgUpdateInstantiateConfig;
                fromAmino(object: _87.MsgUpdateInstantiateConfigAmino): _87.MsgUpdateInstantiateConfig;
                toAmino(message: _87.MsgUpdateInstantiateConfig): _87.MsgUpdateInstantiateConfigAmino;
                fromAminoMsg(object: _87.MsgUpdateInstantiateConfigAminoMsg): _87.MsgUpdateInstantiateConfig;
                toAminoMsg(message: _87.MsgUpdateInstantiateConfig): _87.MsgUpdateInstantiateConfigAminoMsg;
                fromProtoMsg(message: _87.MsgUpdateInstantiateConfigProtoMsg): _87.MsgUpdateInstantiateConfig;
                toProto(message: _87.MsgUpdateInstantiateConfig): Uint8Array;
                toProtoMsg(message: _87.MsgUpdateInstantiateConfig): _87.MsgUpdateInstantiateConfigProtoMsg;
            };
            MsgUpdateInstantiateConfigResponse: {
                typeUrl: string;
                encode(_: _87.MsgUpdateInstantiateConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.MsgUpdateInstantiateConfigResponse;
                fromPartial(_: Partial<_87.MsgUpdateInstantiateConfigResponse>): _87.MsgUpdateInstantiateConfigResponse;
                fromAmino(_: _87.MsgUpdateInstantiateConfigResponseAmino): _87.MsgUpdateInstantiateConfigResponse;
                toAmino(_: _87.MsgUpdateInstantiateConfigResponse): _87.MsgUpdateInstantiateConfigResponseAmino;
                fromAminoMsg(object: _87.MsgUpdateInstantiateConfigResponseAminoMsg): _87.MsgUpdateInstantiateConfigResponse;
                toAminoMsg(message: _87.MsgUpdateInstantiateConfigResponse): _87.MsgUpdateInstantiateConfigResponseAminoMsg;
                fromProtoMsg(message: _87.MsgUpdateInstantiateConfigResponseProtoMsg): _87.MsgUpdateInstantiateConfigResponse;
                toProto(message: _87.MsgUpdateInstantiateConfigResponse): Uint8Array;
                toProtoMsg(message: _87.MsgUpdateInstantiateConfigResponse): _87.MsgUpdateInstantiateConfigResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                typeUrl: string;
                encode(message: _86.QueryContractInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.QueryContractInfoRequest;
                fromPartial(object: Partial<_86.QueryContractInfoRequest>): _86.QueryContractInfoRequest;
                fromAmino(object: _86.QueryContractInfoRequestAmino): _86.QueryContractInfoRequest;
                toAmino(message: _86.QueryContractInfoRequest): _86.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _86.QueryContractInfoRequestAminoMsg): _86.QueryContractInfoRequest;
                toAminoMsg(message: _86.QueryContractInfoRequest): _86.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _86.QueryContractInfoRequestProtoMsg): _86.QueryContractInfoRequest;
                toProto(message: _86.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _86.QueryContractInfoRequest): _86.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                typeUrl: string;
                encode(message: _86.QueryContractInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.QueryContractInfoResponse;
                fromPartial(object: Partial<_86.QueryContractInfoResponse>): _86.QueryContractInfoResponse;
                fromAmino(object: _86.QueryContractInfoResponseAmino): _86.QueryContractInfoResponse;
                toAmino(message: _86.QueryContractInfoResponse): _86.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _86.QueryContractInfoResponseAminoMsg): _86.QueryContractInfoResponse;
                toAminoMsg(message: _86.QueryContractInfoResponse): _86.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _86.QueryContractInfoResponseProtoMsg): _86.QueryContractInfoResponse;
                toProto(message: _86.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _86.QueryContractInfoResponse): _86.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                typeUrl: string;
                encode(message: _86.QueryContractHistoryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.QueryContractHistoryRequest;
                fromPartial(object: Partial<_86.QueryContractHistoryRequest>): _86.QueryContractHistoryRequest;
                fromAmino(object: _86.QueryContractHistoryRequestAmino): _86.QueryContractHistoryRequest;
                toAmino(message: _86.QueryContractHistoryRequest): _86.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _86.QueryContractHistoryRequestAminoMsg): _86.QueryContractHistoryRequest;
                toAminoMsg(message: _86.QueryContractHistoryRequest): _86.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _86.QueryContractHistoryRequestProtoMsg): _86.QueryContractHistoryRequest;
                toProto(message: _86.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _86.QueryContractHistoryRequest): _86.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                typeUrl: string;
                encode(message: _86.QueryContractHistoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.QueryContractHistoryResponse;
                fromPartial(object: Partial<_86.QueryContractHistoryResponse>): _86.QueryContractHistoryResponse;
                fromAmino(object: _86.QueryContractHistoryResponseAmino): _86.QueryContractHistoryResponse;
                toAmino(message: _86.QueryContractHistoryResponse): _86.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _86.QueryContractHistoryResponseAminoMsg): _86.QueryContractHistoryResponse;
                toAminoMsg(message: _86.QueryContractHistoryResponse): _86.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _86.QueryContractHistoryResponseProtoMsg): _86.QueryContractHistoryResponse;
                toProto(message: _86.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _86.QueryContractHistoryResponse): _86.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                typeUrl: string;
                encode(message: _86.QueryContractsByCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.QueryContractsByCodeRequest;
                fromPartial(object: Partial<_86.QueryContractsByCodeRequest>): _86.QueryContractsByCodeRequest;
                fromAmino(object: _86.QueryContractsByCodeRequestAmino): _86.QueryContractsByCodeRequest;
                toAmino(message: _86.QueryContractsByCodeRequest): _86.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _86.QueryContractsByCodeRequestAminoMsg): _86.QueryContractsByCodeRequest;
                toAminoMsg(message: _86.QueryContractsByCodeRequest): _86.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _86.QueryContractsByCodeRequestProtoMsg): _86.QueryContractsByCodeRequest;
                toProto(message: _86.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _86.QueryContractsByCodeRequest): _86.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                typeUrl: string;
                encode(message: _86.QueryContractsByCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.QueryContractsByCodeResponse;
                fromPartial(object: Partial<_86.QueryContractsByCodeResponse>): _86.QueryContractsByCodeResponse;
                fromAmino(object: _86.QueryContractsByCodeResponseAmino): _86.QueryContractsByCodeResponse;
                toAmino(message: _86.QueryContractsByCodeResponse): _86.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _86.QueryContractsByCodeResponseAminoMsg): _86.QueryContractsByCodeResponse;
                toAminoMsg(message: _86.QueryContractsByCodeResponse): _86.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _86.QueryContractsByCodeResponseProtoMsg): _86.QueryContractsByCodeResponse;
                toProto(message: _86.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _86.QueryContractsByCodeResponse): _86.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                typeUrl: string;
                encode(message: _86.QueryAllContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.QueryAllContractStateRequest;
                fromPartial(object: Partial<_86.QueryAllContractStateRequest>): _86.QueryAllContractStateRequest;
                fromAmino(object: _86.QueryAllContractStateRequestAmino): _86.QueryAllContractStateRequest;
                toAmino(message: _86.QueryAllContractStateRequest): _86.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _86.QueryAllContractStateRequestAminoMsg): _86.QueryAllContractStateRequest;
                toAminoMsg(message: _86.QueryAllContractStateRequest): _86.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _86.QueryAllContractStateRequestProtoMsg): _86.QueryAllContractStateRequest;
                toProto(message: _86.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _86.QueryAllContractStateRequest): _86.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                typeUrl: string;
                encode(message: _86.QueryAllContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.QueryAllContractStateResponse;
                fromPartial(object: Partial<_86.QueryAllContractStateResponse>): _86.QueryAllContractStateResponse;
                fromAmino(object: _86.QueryAllContractStateResponseAmino): _86.QueryAllContractStateResponse;
                toAmino(message: _86.QueryAllContractStateResponse): _86.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _86.QueryAllContractStateResponseAminoMsg): _86.QueryAllContractStateResponse;
                toAminoMsg(message: _86.QueryAllContractStateResponse): _86.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _86.QueryAllContractStateResponseProtoMsg): _86.QueryAllContractStateResponse;
                toProto(message: _86.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _86.QueryAllContractStateResponse): _86.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                typeUrl: string;
                encode(message: _86.QueryRawContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.QueryRawContractStateRequest;
                fromPartial(object: Partial<_86.QueryRawContractStateRequest>): _86.QueryRawContractStateRequest;
                fromAmino(object: _86.QueryRawContractStateRequestAmino): _86.QueryRawContractStateRequest;
                toAmino(message: _86.QueryRawContractStateRequest): _86.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _86.QueryRawContractStateRequestAminoMsg): _86.QueryRawContractStateRequest;
                toAminoMsg(message: _86.QueryRawContractStateRequest): _86.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _86.QueryRawContractStateRequestProtoMsg): _86.QueryRawContractStateRequest;
                toProto(message: _86.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _86.QueryRawContractStateRequest): _86.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                typeUrl: string;
                encode(message: _86.QueryRawContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.QueryRawContractStateResponse;
                fromPartial(object: Partial<_86.QueryRawContractStateResponse>): _86.QueryRawContractStateResponse;
                fromAmino(object: _86.QueryRawContractStateResponseAmino): _86.QueryRawContractStateResponse;
                toAmino(message: _86.QueryRawContractStateResponse): _86.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _86.QueryRawContractStateResponseAminoMsg): _86.QueryRawContractStateResponse;
                toAminoMsg(message: _86.QueryRawContractStateResponse): _86.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _86.QueryRawContractStateResponseProtoMsg): _86.QueryRawContractStateResponse;
                toProto(message: _86.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _86.QueryRawContractStateResponse): _86.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                typeUrl: string;
                encode(message: _86.QuerySmartContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.QuerySmartContractStateRequest;
                fromPartial(object: Partial<_86.QuerySmartContractStateRequest>): _86.QuerySmartContractStateRequest;
                fromAmino(object: _86.QuerySmartContractStateRequestAmino): _86.QuerySmartContractStateRequest;
                toAmino(message: _86.QuerySmartContractStateRequest): _86.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _86.QuerySmartContractStateRequestAminoMsg): _86.QuerySmartContractStateRequest;
                toAminoMsg(message: _86.QuerySmartContractStateRequest): _86.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _86.QuerySmartContractStateRequestProtoMsg): _86.QuerySmartContractStateRequest;
                toProto(message: _86.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _86.QuerySmartContractStateRequest): _86.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                typeUrl: string;
                encode(message: _86.QuerySmartContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.QuerySmartContractStateResponse;
                fromPartial(object: Partial<_86.QuerySmartContractStateResponse>): _86.QuerySmartContractStateResponse;
                fromAmino(object: _86.QuerySmartContractStateResponseAmino): _86.QuerySmartContractStateResponse;
                toAmino(message: _86.QuerySmartContractStateResponse): _86.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _86.QuerySmartContractStateResponseAminoMsg): _86.QuerySmartContractStateResponse;
                toAminoMsg(message: _86.QuerySmartContractStateResponse): _86.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _86.QuerySmartContractStateResponseProtoMsg): _86.QuerySmartContractStateResponse;
                toProto(message: _86.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _86.QuerySmartContractStateResponse): _86.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                encode(message: _86.QueryCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.QueryCodeRequest;
                fromPartial(object: Partial<_86.QueryCodeRequest>): _86.QueryCodeRequest;
                fromAmino(object: _86.QueryCodeRequestAmino): _86.QueryCodeRequest;
                toAmino(message: _86.QueryCodeRequest): _86.QueryCodeRequestAmino;
                fromAminoMsg(object: _86.QueryCodeRequestAminoMsg): _86.QueryCodeRequest;
                toAminoMsg(message: _86.QueryCodeRequest): _86.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _86.QueryCodeRequestProtoMsg): _86.QueryCodeRequest;
                toProto(message: _86.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _86.QueryCodeRequest): _86.QueryCodeRequestProtoMsg;
            };
            CodeInfoResponse: {
                typeUrl: string;
                encode(message: _86.CodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.CodeInfoResponse;
                fromPartial(object: Partial<_86.CodeInfoResponse>): _86.CodeInfoResponse;
                fromAmino(object: _86.CodeInfoResponseAmino): _86.CodeInfoResponse;
                toAmino(message: _86.CodeInfoResponse): _86.CodeInfoResponseAmino;
                fromAminoMsg(object: _86.CodeInfoResponseAminoMsg): _86.CodeInfoResponse;
                toAminoMsg(message: _86.CodeInfoResponse): _86.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _86.CodeInfoResponseProtoMsg): _86.CodeInfoResponse;
                toProto(message: _86.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _86.CodeInfoResponse): _86.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                encode(message: _86.QueryCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.QueryCodeResponse;
                fromPartial(object: Partial<_86.QueryCodeResponse>): _86.QueryCodeResponse;
                fromAmino(object: _86.QueryCodeResponseAmino): _86.QueryCodeResponse;
                toAmino(message: _86.QueryCodeResponse): _86.QueryCodeResponseAmino;
                fromAminoMsg(object: _86.QueryCodeResponseAminoMsg): _86.QueryCodeResponse;
                toAminoMsg(message: _86.QueryCodeResponse): _86.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _86.QueryCodeResponseProtoMsg): _86.QueryCodeResponse;
                toProto(message: _86.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _86.QueryCodeResponse): _86.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                typeUrl: string;
                encode(message: _86.QueryCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.QueryCodesRequest;
                fromPartial(object: Partial<_86.QueryCodesRequest>): _86.QueryCodesRequest;
                fromAmino(object: _86.QueryCodesRequestAmino): _86.QueryCodesRequest;
                toAmino(message: _86.QueryCodesRequest): _86.QueryCodesRequestAmino;
                fromAminoMsg(object: _86.QueryCodesRequestAminoMsg): _86.QueryCodesRequest;
                toAminoMsg(message: _86.QueryCodesRequest): _86.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _86.QueryCodesRequestProtoMsg): _86.QueryCodesRequest;
                toProto(message: _86.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _86.QueryCodesRequest): _86.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                typeUrl: string;
                encode(message: _86.QueryCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.QueryCodesResponse;
                fromPartial(object: Partial<_86.QueryCodesResponse>): _86.QueryCodesResponse;
                fromAmino(object: _86.QueryCodesResponseAmino): _86.QueryCodesResponse;
                toAmino(message: _86.QueryCodesResponse): _86.QueryCodesResponseAmino;
                fromAminoMsg(object: _86.QueryCodesResponseAminoMsg): _86.QueryCodesResponse;
                toAminoMsg(message: _86.QueryCodesResponse): _86.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _86.QueryCodesResponseProtoMsg): _86.QueryCodesResponse;
                toProto(message: _86.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _86.QueryCodesResponse): _86.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                typeUrl: string;
                encode(message: _86.QueryPinnedCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.QueryPinnedCodesRequest;
                fromPartial(object: Partial<_86.QueryPinnedCodesRequest>): _86.QueryPinnedCodesRequest;
                fromAmino(object: _86.QueryPinnedCodesRequestAmino): _86.QueryPinnedCodesRequest;
                toAmino(message: _86.QueryPinnedCodesRequest): _86.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _86.QueryPinnedCodesRequestAminoMsg): _86.QueryPinnedCodesRequest;
                toAminoMsg(message: _86.QueryPinnedCodesRequest): _86.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _86.QueryPinnedCodesRequestProtoMsg): _86.QueryPinnedCodesRequest;
                toProto(message: _86.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _86.QueryPinnedCodesRequest): _86.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                typeUrl: string;
                encode(message: _86.QueryPinnedCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.QueryPinnedCodesResponse;
                fromPartial(object: Partial<_86.QueryPinnedCodesResponse>): _86.QueryPinnedCodesResponse;
                fromAmino(object: _86.QueryPinnedCodesResponseAmino): _86.QueryPinnedCodesResponse;
                toAmino(message: _86.QueryPinnedCodesResponse): _86.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _86.QueryPinnedCodesResponseAminoMsg): _86.QueryPinnedCodesResponse;
                toAminoMsg(message: _86.QueryPinnedCodesResponse): _86.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _86.QueryPinnedCodesResponseProtoMsg): _86.QueryPinnedCodesResponse;
                toProto(message: _86.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _86.QueryPinnedCodesResponse): _86.QueryPinnedCodesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _86.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.QueryParamsRequest;
                fromPartial(_: Partial<_86.QueryParamsRequest>): _86.QueryParamsRequest;
                fromAmino(_: _86.QueryParamsRequestAmino): _86.QueryParamsRequest;
                toAmino(_: _86.QueryParamsRequest): _86.QueryParamsRequestAmino;
                fromAminoMsg(object: _86.QueryParamsRequestAminoMsg): _86.QueryParamsRequest;
                toAminoMsg(message: _86.QueryParamsRequest): _86.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _86.QueryParamsRequestProtoMsg): _86.QueryParamsRequest;
                toProto(message: _86.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _86.QueryParamsRequest): _86.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _86.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.QueryParamsResponse;
                fromPartial(object: Partial<_86.QueryParamsResponse>): _86.QueryParamsResponse;
                fromAmino(object: _86.QueryParamsResponseAmino): _86.QueryParamsResponse;
                toAmino(message: _86.QueryParamsResponse): _86.QueryParamsResponseAmino;
                fromAminoMsg(object: _86.QueryParamsResponseAminoMsg): _86.QueryParamsResponse;
                toAminoMsg(message: _86.QueryParamsResponse): _86.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _86.QueryParamsResponseProtoMsg): _86.QueryParamsResponse;
                toProto(message: _86.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _86.QueryParamsResponse): _86.QueryParamsResponseProtoMsg;
            };
            QueryContractsByCreatorRequest: {
                typeUrl: string;
                encode(message: _86.QueryContractsByCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.QueryContractsByCreatorRequest;
                fromPartial(object: Partial<_86.QueryContractsByCreatorRequest>): _86.QueryContractsByCreatorRequest;
                fromAmino(object: _86.QueryContractsByCreatorRequestAmino): _86.QueryContractsByCreatorRequest;
                toAmino(message: _86.QueryContractsByCreatorRequest): _86.QueryContractsByCreatorRequestAmino;
                fromAminoMsg(object: _86.QueryContractsByCreatorRequestAminoMsg): _86.QueryContractsByCreatorRequest;
                toAminoMsg(message: _86.QueryContractsByCreatorRequest): _86.QueryContractsByCreatorRequestAminoMsg;
                fromProtoMsg(message: _86.QueryContractsByCreatorRequestProtoMsg): _86.QueryContractsByCreatorRequest;
                toProto(message: _86.QueryContractsByCreatorRequest): Uint8Array;
                toProtoMsg(message: _86.QueryContractsByCreatorRequest): _86.QueryContractsByCreatorRequestProtoMsg;
            };
            QueryContractsByCreatorResponse: {
                typeUrl: string;
                encode(message: _86.QueryContractsByCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.QueryContractsByCreatorResponse;
                fromPartial(object: Partial<_86.QueryContractsByCreatorResponse>): _86.QueryContractsByCreatorResponse;
                fromAmino(object: _86.QueryContractsByCreatorResponseAmino): _86.QueryContractsByCreatorResponse;
                toAmino(message: _86.QueryContractsByCreatorResponse): _86.QueryContractsByCreatorResponseAmino;
                fromAminoMsg(object: _86.QueryContractsByCreatorResponseAminoMsg): _86.QueryContractsByCreatorResponse;
                toAminoMsg(message: _86.QueryContractsByCreatorResponse): _86.QueryContractsByCreatorResponseAminoMsg;
                fromProtoMsg(message: _86.QueryContractsByCreatorResponseProtoMsg): _86.QueryContractsByCreatorResponse;
                toProto(message: _86.QueryContractsByCreatorResponse): Uint8Array;
                toProtoMsg(message: _86.QueryContractsByCreatorResponse): _86.QueryContractsByCreatorResponseProtoMsg;
            };
            StoreCodeProposal: {
                typeUrl: string;
                encode(message: _85.StoreCodeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.StoreCodeProposal;
                fromPartial(object: Partial<_85.StoreCodeProposal>): _85.StoreCodeProposal;
                fromAmino(object: _85.StoreCodeProposalAmino): _85.StoreCodeProposal;
                toAmino(message: _85.StoreCodeProposal): _85.StoreCodeProposalAmino;
                fromAminoMsg(object: _85.StoreCodeProposalAminoMsg): _85.StoreCodeProposal;
                toAminoMsg(message: _85.StoreCodeProposal): _85.StoreCodeProposalAminoMsg;
                fromProtoMsg(message: _85.StoreCodeProposalProtoMsg): _85.StoreCodeProposal;
                toProto(message: _85.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _85.StoreCodeProposal): _85.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                typeUrl: string;
                encode(message: _85.InstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.InstantiateContractProposal;
                fromPartial(object: Partial<_85.InstantiateContractProposal>): _85.InstantiateContractProposal;
                fromAmino(object: _85.InstantiateContractProposalAmino): _85.InstantiateContractProposal;
                toAmino(message: _85.InstantiateContractProposal): _85.InstantiateContractProposalAmino;
                fromAminoMsg(object: _85.InstantiateContractProposalAminoMsg): _85.InstantiateContractProposal;
                toAminoMsg(message: _85.InstantiateContractProposal): _85.InstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _85.InstantiateContractProposalProtoMsg): _85.InstantiateContractProposal;
                toProto(message: _85.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _85.InstantiateContractProposal): _85.InstantiateContractProposalProtoMsg;
            };
            InstantiateContract2Proposal: {
                typeUrl: string;
                encode(message: _85.InstantiateContract2Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.InstantiateContract2Proposal;
                fromPartial(object: Partial<_85.InstantiateContract2Proposal>): _85.InstantiateContract2Proposal;
                fromAmino(object: _85.InstantiateContract2ProposalAmino): _85.InstantiateContract2Proposal;
                toAmino(message: _85.InstantiateContract2Proposal): _85.InstantiateContract2ProposalAmino;
                fromAminoMsg(object: _85.InstantiateContract2ProposalAminoMsg): _85.InstantiateContract2Proposal;
                toAminoMsg(message: _85.InstantiateContract2Proposal): _85.InstantiateContract2ProposalAminoMsg;
                fromProtoMsg(message: _85.InstantiateContract2ProposalProtoMsg): _85.InstantiateContract2Proposal;
                toProto(message: _85.InstantiateContract2Proposal): Uint8Array;
                toProtoMsg(message: _85.InstantiateContract2Proposal): _85.InstantiateContract2ProposalProtoMsg;
            };
            MigrateContractProposal: {
                typeUrl: string;
                encode(message: _85.MigrateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.MigrateContractProposal;
                fromPartial(object: Partial<_85.MigrateContractProposal>): _85.MigrateContractProposal;
                fromAmino(object: _85.MigrateContractProposalAmino): _85.MigrateContractProposal;
                toAmino(message: _85.MigrateContractProposal): _85.MigrateContractProposalAmino;
                fromAminoMsg(object: _85.MigrateContractProposalAminoMsg): _85.MigrateContractProposal;
                toAminoMsg(message: _85.MigrateContractProposal): _85.MigrateContractProposalAminoMsg;
                fromProtoMsg(message: _85.MigrateContractProposalProtoMsg): _85.MigrateContractProposal;
                toProto(message: _85.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _85.MigrateContractProposal): _85.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                typeUrl: string;
                encode(message: _85.SudoContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.SudoContractProposal;
                fromPartial(object: Partial<_85.SudoContractProposal>): _85.SudoContractProposal;
                fromAmino(object: _85.SudoContractProposalAmino): _85.SudoContractProposal;
                toAmino(message: _85.SudoContractProposal): _85.SudoContractProposalAmino;
                fromAminoMsg(object: _85.SudoContractProposalAminoMsg): _85.SudoContractProposal;
                toAminoMsg(message: _85.SudoContractProposal): _85.SudoContractProposalAminoMsg;
                fromProtoMsg(message: _85.SudoContractProposalProtoMsg): _85.SudoContractProposal;
                toProto(message: _85.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _85.SudoContractProposal): _85.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                typeUrl: string;
                encode(message: _85.ExecuteContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.ExecuteContractProposal;
                fromPartial(object: Partial<_85.ExecuteContractProposal>): _85.ExecuteContractProposal;
                fromAmino(object: _85.ExecuteContractProposalAmino): _85.ExecuteContractProposal;
                toAmino(message: _85.ExecuteContractProposal): _85.ExecuteContractProposalAmino;
                fromAminoMsg(object: _85.ExecuteContractProposalAminoMsg): _85.ExecuteContractProposal;
                toAminoMsg(message: _85.ExecuteContractProposal): _85.ExecuteContractProposalAminoMsg;
                fromProtoMsg(message: _85.ExecuteContractProposalProtoMsg): _85.ExecuteContractProposal;
                toProto(message: _85.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _85.ExecuteContractProposal): _85.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                typeUrl: string;
                encode(message: _85.UpdateAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.UpdateAdminProposal;
                fromPartial(object: Partial<_85.UpdateAdminProposal>): _85.UpdateAdminProposal;
                fromAmino(object: _85.UpdateAdminProposalAmino): _85.UpdateAdminProposal;
                toAmino(message: _85.UpdateAdminProposal): _85.UpdateAdminProposalAmino;
                fromAminoMsg(object: _85.UpdateAdminProposalAminoMsg): _85.UpdateAdminProposal;
                toAminoMsg(message: _85.UpdateAdminProposal): _85.UpdateAdminProposalAminoMsg;
                fromProtoMsg(message: _85.UpdateAdminProposalProtoMsg): _85.UpdateAdminProposal;
                toProto(message: _85.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _85.UpdateAdminProposal): _85.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                typeUrl: string;
                encode(message: _85.ClearAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.ClearAdminProposal;
                fromPartial(object: Partial<_85.ClearAdminProposal>): _85.ClearAdminProposal;
                fromAmino(object: _85.ClearAdminProposalAmino): _85.ClearAdminProposal;
                toAmino(message: _85.ClearAdminProposal): _85.ClearAdminProposalAmino;
                fromAminoMsg(object: _85.ClearAdminProposalAminoMsg): _85.ClearAdminProposal;
                toAminoMsg(message: _85.ClearAdminProposal): _85.ClearAdminProposalAminoMsg;
                fromProtoMsg(message: _85.ClearAdminProposalProtoMsg): _85.ClearAdminProposal;
                toProto(message: _85.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _85.ClearAdminProposal): _85.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                typeUrl: string;
                encode(message: _85.PinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.PinCodesProposal;
                fromPartial(object: Partial<_85.PinCodesProposal>): _85.PinCodesProposal;
                fromAmino(object: _85.PinCodesProposalAmino): _85.PinCodesProposal;
                toAmino(message: _85.PinCodesProposal): _85.PinCodesProposalAmino;
                fromAminoMsg(object: _85.PinCodesProposalAminoMsg): _85.PinCodesProposal;
                toAminoMsg(message: _85.PinCodesProposal): _85.PinCodesProposalAminoMsg;
                fromProtoMsg(message: _85.PinCodesProposalProtoMsg): _85.PinCodesProposal;
                toProto(message: _85.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _85.PinCodesProposal): _85.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                typeUrl: string;
                encode(message: _85.UnpinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.UnpinCodesProposal;
                fromPartial(object: Partial<_85.UnpinCodesProposal>): _85.UnpinCodesProposal;
                fromAmino(object: _85.UnpinCodesProposalAmino): _85.UnpinCodesProposal;
                toAmino(message: _85.UnpinCodesProposal): _85.UnpinCodesProposalAmino;
                fromAminoMsg(object: _85.UnpinCodesProposalAminoMsg): _85.UnpinCodesProposal;
                toAminoMsg(message: _85.UnpinCodesProposal): _85.UnpinCodesProposalAminoMsg;
                fromProtoMsg(message: _85.UnpinCodesProposalProtoMsg): _85.UnpinCodesProposal;
                toProto(message: _85.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _85.UnpinCodesProposal): _85.UnpinCodesProposalProtoMsg;
            };
            AccessConfigUpdate: {
                typeUrl: string;
                encode(message: _85.AccessConfigUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.AccessConfigUpdate;
                fromPartial(object: Partial<_85.AccessConfigUpdate>): _85.AccessConfigUpdate;
                fromAmino(object: _85.AccessConfigUpdateAmino): _85.AccessConfigUpdate;
                toAmino(message: _85.AccessConfigUpdate): _85.AccessConfigUpdateAmino;
                fromAminoMsg(object: _85.AccessConfigUpdateAminoMsg): _85.AccessConfigUpdate;
                toAminoMsg(message: _85.AccessConfigUpdate): _85.AccessConfigUpdateAminoMsg;
                fromProtoMsg(message: _85.AccessConfigUpdateProtoMsg): _85.AccessConfigUpdate;
                toProto(message: _85.AccessConfigUpdate): Uint8Array;
                toProtoMsg(message: _85.AccessConfigUpdate): _85.AccessConfigUpdateProtoMsg;
            };
            UpdateInstantiateConfigProposal: {
                typeUrl: string;
                encode(message: _85.UpdateInstantiateConfigProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.UpdateInstantiateConfigProposal;
                fromPartial(object: Partial<_85.UpdateInstantiateConfigProposal>): _85.UpdateInstantiateConfigProposal;
                fromAmino(object: _85.UpdateInstantiateConfigProposalAmino): _85.UpdateInstantiateConfigProposal;
                toAmino(message: _85.UpdateInstantiateConfigProposal): _85.UpdateInstantiateConfigProposalAmino;
                fromAminoMsg(object: _85.UpdateInstantiateConfigProposalAminoMsg): _85.UpdateInstantiateConfigProposal;
                toAminoMsg(message: _85.UpdateInstantiateConfigProposal): _85.UpdateInstantiateConfigProposalAminoMsg;
                fromProtoMsg(message: _85.UpdateInstantiateConfigProposalProtoMsg): _85.UpdateInstantiateConfigProposal;
                toProto(message: _85.UpdateInstantiateConfigProposal): Uint8Array;
                toProtoMsg(message: _85.UpdateInstantiateConfigProposal): _85.UpdateInstantiateConfigProposalProtoMsg;
            };
            StoreAndInstantiateContractProposal: {
                typeUrl: string;
                encode(message: _85.StoreAndInstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.StoreAndInstantiateContractProposal;
                fromPartial(object: Partial<_85.StoreAndInstantiateContractProposal>): _85.StoreAndInstantiateContractProposal;
                fromAmino(object: _85.StoreAndInstantiateContractProposalAmino): _85.StoreAndInstantiateContractProposal;
                toAmino(message: _85.StoreAndInstantiateContractProposal): _85.StoreAndInstantiateContractProposalAmino;
                fromAminoMsg(object: _85.StoreAndInstantiateContractProposalAminoMsg): _85.StoreAndInstantiateContractProposal;
                toAminoMsg(message: _85.StoreAndInstantiateContractProposal): _85.StoreAndInstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _85.StoreAndInstantiateContractProposalProtoMsg): _85.StoreAndInstantiateContractProposal;
                toProto(message: _85.StoreAndInstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _85.StoreAndInstantiateContractProposal): _85.StoreAndInstantiateContractProposalProtoMsg;
            };
            MsgIBCSend: {
                typeUrl: string;
                encode(message: _84.MsgIBCSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.MsgIBCSend;
                fromPartial(object: Partial<_84.MsgIBCSend>): _84.MsgIBCSend;
                fromAmino(object: _84.MsgIBCSendAmino): _84.MsgIBCSend;
                toAmino(message: _84.MsgIBCSend): _84.MsgIBCSendAmino;
                fromAminoMsg(object: _84.MsgIBCSendAminoMsg): _84.MsgIBCSend;
                toAminoMsg(message: _84.MsgIBCSend): _84.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _84.MsgIBCSendProtoMsg): _84.MsgIBCSend;
                toProto(message: _84.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _84.MsgIBCSend): _84.MsgIBCSendProtoMsg;
            };
            MsgIBCSendResponse: {
                typeUrl: string;
                encode(message: _84.MsgIBCSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.MsgIBCSendResponse;
                fromPartial(object: Partial<_84.MsgIBCSendResponse>): _84.MsgIBCSendResponse;
                fromAmino(object: _84.MsgIBCSendResponseAmino): _84.MsgIBCSendResponse;
                toAmino(message: _84.MsgIBCSendResponse): _84.MsgIBCSendResponseAmino;
                fromAminoMsg(object: _84.MsgIBCSendResponseAminoMsg): _84.MsgIBCSendResponse;
                toAminoMsg(message: _84.MsgIBCSendResponse): _84.MsgIBCSendResponseAminoMsg;
                fromProtoMsg(message: _84.MsgIBCSendResponseProtoMsg): _84.MsgIBCSendResponse;
                toProto(message: _84.MsgIBCSendResponse): Uint8Array;
                toProtoMsg(message: _84.MsgIBCSendResponse): _84.MsgIBCSendResponseProtoMsg;
            };
            MsgIBCCloseChannel: {
                typeUrl: string;
                encode(message: _84.MsgIBCCloseChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.MsgIBCCloseChannel;
                fromPartial(object: Partial<_84.MsgIBCCloseChannel>): _84.MsgIBCCloseChannel;
                fromAmino(object: _84.MsgIBCCloseChannelAmino): _84.MsgIBCCloseChannel;
                toAmino(message: _84.MsgIBCCloseChannel): _84.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _84.MsgIBCCloseChannelAminoMsg): _84.MsgIBCCloseChannel;
                toAminoMsg(message: _84.MsgIBCCloseChannel): _84.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _84.MsgIBCCloseChannelProtoMsg): _84.MsgIBCCloseChannel;
                toProto(message: _84.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _84.MsgIBCCloseChannel): _84.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _83.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.GenesisState;
                fromPartial(object: Partial<_83.GenesisState>): _83.GenesisState;
                fromAmino(object: _83.GenesisStateAmino): _83.GenesisState;
                toAmino(message: _83.GenesisState): _83.GenesisStateAmino;
                fromAminoMsg(object: _83.GenesisStateAminoMsg): _83.GenesisState;
                toAminoMsg(message: _83.GenesisState): _83.GenesisStateAminoMsg;
                fromProtoMsg(message: _83.GenesisStateProtoMsg): _83.GenesisState;
                toProto(message: _83.GenesisState): Uint8Array;
                toProtoMsg(message: _83.GenesisState): _83.GenesisStateProtoMsg;
            };
            Code: {
                typeUrl: string;
                encode(message: _83.Code, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.Code;
                fromPartial(object: Partial<_83.Code>): _83.Code;
                fromAmino(object: _83.CodeAmino): _83.Code;
                toAmino(message: _83.Code): _83.CodeAmino;
                fromAminoMsg(object: _83.CodeAminoMsg): _83.Code;
                toAminoMsg(message: _83.Code): _83.CodeAminoMsg;
                fromProtoMsg(message: _83.CodeProtoMsg): _83.Code;
                toProto(message: _83.Code): Uint8Array;
                toProtoMsg(message: _83.Code): _83.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                encode(message: _83.Contract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.Contract;
                fromPartial(object: Partial<_83.Contract>): _83.Contract;
                fromAmino(object: _83.ContractAmino): _83.Contract;
                toAmino(message: _83.Contract): _83.ContractAmino;
                fromAminoMsg(object: _83.ContractAminoMsg): _83.Contract;
                toAminoMsg(message: _83.Contract): _83.ContractAminoMsg;
                fromProtoMsg(message: _83.ContractProtoMsg): _83.Contract;
                toProto(message: _83.Contract): Uint8Array;
                toProtoMsg(message: _83.Contract): _83.ContractProtoMsg;
            };
            Sequence: {
                typeUrl: string;
                encode(message: _83.Sequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.Sequence;
                fromPartial(object: Partial<_83.Sequence>): _83.Sequence;
                fromAmino(object: _83.SequenceAmino): _83.Sequence;
                toAmino(message: _83.Sequence): _83.SequenceAmino;
                fromAminoMsg(object: _83.SequenceAminoMsg): _83.Sequence;
                toAminoMsg(message: _83.Sequence): _83.SequenceAminoMsg;
                fromProtoMsg(message: _83.SequenceProtoMsg): _83.Sequence;
                toProto(message: _83.Sequence): Uint8Array;
                toProtoMsg(message: _83.Sequence): _83.SequenceProtoMsg;
            };
            ContractExecutionAuthorization: {
                typeUrl: string;
                encode(message: _82.ContractExecutionAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.ContractExecutionAuthorization;
                fromPartial(object: Partial<_82.ContractExecutionAuthorization>): _82.ContractExecutionAuthorization;
                fromAmino(object: _82.ContractExecutionAuthorizationAmino): _82.ContractExecutionAuthorization;
                toAmino(message: _82.ContractExecutionAuthorization): _82.ContractExecutionAuthorizationAmino;
                fromAminoMsg(object: _82.ContractExecutionAuthorizationAminoMsg): _82.ContractExecutionAuthorization;
                toAminoMsg(message: _82.ContractExecutionAuthorization): _82.ContractExecutionAuthorizationAminoMsg;
                fromProtoMsg(message: _82.ContractExecutionAuthorizationProtoMsg): _82.ContractExecutionAuthorization;
                toProto(message: _82.ContractExecutionAuthorization): Uint8Array;
                toProtoMsg(message: _82.ContractExecutionAuthorization): _82.ContractExecutionAuthorizationProtoMsg;
            };
            ContractMigrationAuthorization: {
                typeUrl: string;
                encode(message: _82.ContractMigrationAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.ContractMigrationAuthorization;
                fromPartial(object: Partial<_82.ContractMigrationAuthorization>): _82.ContractMigrationAuthorization;
                fromAmino(object: _82.ContractMigrationAuthorizationAmino): _82.ContractMigrationAuthorization;
                toAmino(message: _82.ContractMigrationAuthorization): _82.ContractMigrationAuthorizationAmino;
                fromAminoMsg(object: _82.ContractMigrationAuthorizationAminoMsg): _82.ContractMigrationAuthorization;
                toAminoMsg(message: _82.ContractMigrationAuthorization): _82.ContractMigrationAuthorizationAminoMsg;
                fromProtoMsg(message: _82.ContractMigrationAuthorizationProtoMsg): _82.ContractMigrationAuthorization;
                toProto(message: _82.ContractMigrationAuthorization): Uint8Array;
                toProtoMsg(message: _82.ContractMigrationAuthorization): _82.ContractMigrationAuthorizationProtoMsg;
            };
            ContractGrant: {
                typeUrl: string;
                encode(message: _82.ContractGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.ContractGrant;
                fromPartial(object: Partial<_82.ContractGrant>): _82.ContractGrant;
                fromAmino(object: _82.ContractGrantAmino): _82.ContractGrant;
                toAmino(message: _82.ContractGrant): _82.ContractGrantAmino;
                fromAminoMsg(object: _82.ContractGrantAminoMsg): _82.ContractGrant;
                toAminoMsg(message: _82.ContractGrant): _82.ContractGrantAminoMsg;
                fromProtoMsg(message: _82.ContractGrantProtoMsg): _82.ContractGrant;
                toProto(message: _82.ContractGrant): Uint8Array;
                toProtoMsg(message: _82.ContractGrant): _82.ContractGrantProtoMsg;
            };
            MaxCallsLimit: {
                typeUrl: string;
                encode(message: _82.MaxCallsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.MaxCallsLimit;
                fromPartial(object: Partial<_82.MaxCallsLimit>): _82.MaxCallsLimit;
                fromAmino(object: _82.MaxCallsLimitAmino): _82.MaxCallsLimit;
                toAmino(message: _82.MaxCallsLimit): _82.MaxCallsLimitAmino;
                fromAminoMsg(object: _82.MaxCallsLimitAminoMsg): _82.MaxCallsLimit;
                toAminoMsg(message: _82.MaxCallsLimit): _82.MaxCallsLimitAminoMsg;
                fromProtoMsg(message: _82.MaxCallsLimitProtoMsg): _82.MaxCallsLimit;
                toProto(message: _82.MaxCallsLimit): Uint8Array;
                toProtoMsg(message: _82.MaxCallsLimit): _82.MaxCallsLimitProtoMsg;
            };
            MaxFundsLimit: {
                typeUrl: string;
                encode(message: _82.MaxFundsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.MaxFundsLimit;
                fromPartial(object: Partial<_82.MaxFundsLimit>): _82.MaxFundsLimit;
                fromAmino(object: _82.MaxFundsLimitAmino): _82.MaxFundsLimit;
                toAmino(message: _82.MaxFundsLimit): _82.MaxFundsLimitAmino;
                fromAminoMsg(object: _82.MaxFundsLimitAminoMsg): _82.MaxFundsLimit;
                toAminoMsg(message: _82.MaxFundsLimit): _82.MaxFundsLimitAminoMsg;
                fromProtoMsg(message: _82.MaxFundsLimitProtoMsg): _82.MaxFundsLimit;
                toProto(message: _82.MaxFundsLimit): Uint8Array;
                toProtoMsg(message: _82.MaxFundsLimit): _82.MaxFundsLimitProtoMsg;
            };
            CombinedLimit: {
                typeUrl: string;
                encode(message: _82.CombinedLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.CombinedLimit;
                fromPartial(object: Partial<_82.CombinedLimit>): _82.CombinedLimit;
                fromAmino(object: _82.CombinedLimitAmino): _82.CombinedLimit;
                toAmino(message: _82.CombinedLimit): _82.CombinedLimitAmino;
                fromAminoMsg(object: _82.CombinedLimitAminoMsg): _82.CombinedLimit;
                toAminoMsg(message: _82.CombinedLimit): _82.CombinedLimitAminoMsg;
                fromProtoMsg(message: _82.CombinedLimitProtoMsg): _82.CombinedLimit;
                toProto(message: _82.CombinedLimit): Uint8Array;
                toProtoMsg(message: _82.CombinedLimit): _82.CombinedLimitProtoMsg;
            };
            AllowAllMessagesFilter: {
                typeUrl: string;
                encode(_: _82.AllowAllMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.AllowAllMessagesFilter;
                fromPartial(_: Partial<_82.AllowAllMessagesFilter>): _82.AllowAllMessagesFilter;
                fromAmino(_: _82.AllowAllMessagesFilterAmino): _82.AllowAllMessagesFilter;
                toAmino(_: _82.AllowAllMessagesFilter): _82.AllowAllMessagesFilterAmino;
                fromAminoMsg(object: _82.AllowAllMessagesFilterAminoMsg): _82.AllowAllMessagesFilter;
                toAminoMsg(message: _82.AllowAllMessagesFilter): _82.AllowAllMessagesFilterAminoMsg;
                fromProtoMsg(message: _82.AllowAllMessagesFilterProtoMsg): _82.AllowAllMessagesFilter;
                toProto(message: _82.AllowAllMessagesFilter): Uint8Array;
                toProtoMsg(message: _82.AllowAllMessagesFilter): _82.AllowAllMessagesFilterProtoMsg;
            };
            AcceptedMessageKeysFilter: {
                typeUrl: string;
                encode(message: _82.AcceptedMessageKeysFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.AcceptedMessageKeysFilter;
                fromPartial(object: Partial<_82.AcceptedMessageKeysFilter>): _82.AcceptedMessageKeysFilter;
                fromAmino(object: _82.AcceptedMessageKeysFilterAmino): _82.AcceptedMessageKeysFilter;
                toAmino(message: _82.AcceptedMessageKeysFilter): _82.AcceptedMessageKeysFilterAmino;
                fromAminoMsg(object: _82.AcceptedMessageKeysFilterAminoMsg): _82.AcceptedMessageKeysFilter;
                toAminoMsg(message: _82.AcceptedMessageKeysFilter): _82.AcceptedMessageKeysFilterAminoMsg;
                fromProtoMsg(message: _82.AcceptedMessageKeysFilterProtoMsg): _82.AcceptedMessageKeysFilter;
                toProto(message: _82.AcceptedMessageKeysFilter): Uint8Array;
                toProtoMsg(message: _82.AcceptedMessageKeysFilter): _82.AcceptedMessageKeysFilterProtoMsg;
            };
            AcceptedMessagesFilter: {
                typeUrl: string;
                encode(message: _82.AcceptedMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.AcceptedMessagesFilter;
                fromPartial(object: Partial<_82.AcceptedMessagesFilter>): _82.AcceptedMessagesFilter;
                fromAmino(object: _82.AcceptedMessagesFilterAmino): _82.AcceptedMessagesFilter;
                toAmino(message: _82.AcceptedMessagesFilter): _82.AcceptedMessagesFilterAmino;
                fromAminoMsg(object: _82.AcceptedMessagesFilterAminoMsg): _82.AcceptedMessagesFilter;
                toAminoMsg(message: _82.AcceptedMessagesFilter): _82.AcceptedMessagesFilterAminoMsg;
                fromProtoMsg(message: _82.AcceptedMessagesFilterProtoMsg): _82.AcceptedMessagesFilter;
                toProto(message: _82.AcceptedMessagesFilter): Uint8Array;
                toProtoMsg(message: _82.AcceptedMessagesFilter): _82.AcceptedMessagesFilterProtoMsg;
            };
            Cosmwasm_wasmv1ContractAuthzLimitX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _82.MaxCallsLimit | _82.MaxFundsLimit | _82.CombinedLimit;
            Cosmwasm_wasmv1ContractAuthzLimitX_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractAuthzLimitX_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmwasm_wasmv1ContractAuthzFilterX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _82.AllowAllMessagesFilter | _82.AcceptedMessageKeysFilter | _82.AcceptedMessagesFilter;
            Cosmwasm_wasmv1ContractAuthzFilterX_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractAuthzFilterX_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            cosmwasm: {
                wasm: {
                    v1: _259.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        totalSupplyWithoutOffset(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyWithoutOffsetRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyWithoutOffsetResponse>;
                        supplyOfWithoutOffset(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfWithoutOffsetRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfWithoutOffsetResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        baseDenom(request: import("../cosmos/bank/v1beta1/query").QueryBaseDenomRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBaseDenomResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                    };
                };
            };
            cosmwasm: {
                wasm: {
                    v1: {
                        contractInfo(request: _86.QueryContractInfoRequest): Promise<_86.QueryContractInfoResponse>;
                        contractHistory(request: _86.QueryContractHistoryRequest): Promise<_86.QueryContractHistoryResponse>;
                        contractsByCode(request: _86.QueryContractsByCodeRequest): Promise<_86.QueryContractsByCodeResponse>;
                        allContractState(request: _86.QueryAllContractStateRequest): Promise<_86.QueryAllContractStateResponse>;
                        rawContractState(request: _86.QueryRawContractStateRequest): Promise<_86.QueryRawContractStateResponse>;
                        smartContractState(request: _86.QuerySmartContractStateRequest): Promise<_86.QuerySmartContractStateResponse>;
                        code(request: _86.QueryCodeRequest): Promise<_86.QueryCodeResponse>;
                        codes(request?: _86.QueryCodesRequest): Promise<_86.QueryCodesResponse>;
                        pinnedCodes(request?: _86.QueryPinnedCodesRequest): Promise<_86.QueryPinnedCodesResponse>;
                        params(request?: _86.QueryParamsRequest): Promise<_86.QueryParamsResponse>;
                        contractsByCreator(request: _86.QueryContractsByCreatorRequest): Promise<_86.QueryContractsByCreatorResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: import("../cosmos/base/node/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            cosmwasm: {
                wasm: {
                    v1: _257.LCDQueryClient;
                };
            };
        }>;
    };
}
