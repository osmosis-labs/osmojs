import * as _86 from "./wasm/v1/authz";
import * as _87 from "./wasm/v1/genesis";
import * as _88 from "./wasm/v1/ibc";
import * as _89 from "./wasm/v1/proposal";
import * as _90 from "./wasm/v1/query";
import * as _91 from "./wasm/v1/tx";
import * as _92 from "./wasm/v1/types";
import * as _227 from "./wasm/v1/query.lcd";
import * as _228 from "./wasm/v1/query.rpc.Query";
import * as _229 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _229.MsgClientImpl;
            QueryClientImpl: typeof _228.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _90.QueryContractInfoRequest): Promise<_90.QueryContractInfoResponse>;
                contractHistory(request: _90.QueryContractHistoryRequest): Promise<_90.QueryContractHistoryResponse>;
                contractsByCode(request: _90.QueryContractsByCodeRequest): Promise<_90.QueryContractsByCodeResponse>;
                allContractState(request: _90.QueryAllContractStateRequest): Promise<_90.QueryAllContractStateResponse>;
                rawContractState(request: _90.QueryRawContractStateRequest): Promise<_90.QueryRawContractStateResponse>;
                smartContractState(request: _90.QuerySmartContractStateRequest): Promise<_90.QuerySmartContractStateResponse>;
                code(request: _90.QueryCodeRequest): Promise<_90.QueryCodeResponse>;
                codes(request?: _90.QueryCodesRequest): Promise<_90.QueryCodesResponse>;
                pinnedCodes(request?: _90.QueryPinnedCodesRequest): Promise<_90.QueryPinnedCodesResponse>;
                params(request?: _90.QueryParamsRequest): Promise<_90.QueryParamsResponse>;
                contractsByCreator(request: _90.QueryContractsByCreatorRequest): Promise<_90.QueryContractsByCreatorResponse>;
            };
            LCDQueryClient: typeof _227.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _91.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _91.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _91.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _91.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _91.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _91.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _91.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateInstantiateConfig(value: _91.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _91.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sudoContract(value: _91.MsgSudoContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pinCodes(value: _91.MsgPinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unpinCodes(value: _91.MsgUnpinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndInstantiateContract(value: _91.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _91.MsgStoreCode): {
                        typeUrl: string;
                        value: _91.MsgStoreCode;
                    };
                    instantiateContract(value: _91.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _91.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _91.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _91.MsgInstantiateContract2;
                    };
                    executeContract(value: _91.MsgExecuteContract): {
                        typeUrl: string;
                        value: _91.MsgExecuteContract;
                    };
                    migrateContract(value: _91.MsgMigrateContract): {
                        typeUrl: string;
                        value: _91.MsgMigrateContract;
                    };
                    updateAdmin(value: _91.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _91.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _91.MsgClearAdmin): {
                        typeUrl: string;
                        value: _91.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _91.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _91.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _91.MsgUpdateParams): {
                        typeUrl: string;
                        value: _91.MsgUpdateParams;
                    };
                    sudoContract(value: _91.MsgSudoContract): {
                        typeUrl: string;
                        value: _91.MsgSudoContract;
                    };
                    pinCodes(value: _91.MsgPinCodes): {
                        typeUrl: string;
                        value: _91.MsgPinCodes;
                    };
                    unpinCodes(value: _91.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _91.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _91.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _91.MsgStoreAndInstantiateContract;
                    };
                };
                fromPartial: {
                    storeCode(value: _91.MsgStoreCode): {
                        typeUrl: string;
                        value: _91.MsgStoreCode;
                    };
                    instantiateContract(value: _91.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _91.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _91.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _91.MsgInstantiateContract2;
                    };
                    executeContract(value: _91.MsgExecuteContract): {
                        typeUrl: string;
                        value: _91.MsgExecuteContract;
                    };
                    migrateContract(value: _91.MsgMigrateContract): {
                        typeUrl: string;
                        value: _91.MsgMigrateContract;
                    };
                    updateAdmin(value: _91.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _91.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _91.MsgClearAdmin): {
                        typeUrl: string;
                        value: _91.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _91.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _91.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _91.MsgUpdateParams): {
                        typeUrl: string;
                        value: _91.MsgUpdateParams;
                    };
                    sudoContract(value: _91.MsgSudoContract): {
                        typeUrl: string;
                        value: _91.MsgSudoContract;
                    };
                    pinCodes(value: _91.MsgPinCodes): {
                        typeUrl: string;
                        value: _91.MsgPinCodes;
                    };
                    unpinCodes(value: _91.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _91.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _91.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _91.MsgStoreAndInstantiateContract;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _91.MsgStoreCode) => _91.MsgStoreCodeAmino;
                    fromAmino: (object: _91.MsgStoreCodeAmino) => _91.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _91.MsgInstantiateContract) => _91.MsgInstantiateContractAmino;
                    fromAmino: (object: _91.MsgInstantiateContractAmino) => _91.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: (message: _91.MsgInstantiateContract2) => _91.MsgInstantiateContract2Amino;
                    fromAmino: (object: _91.MsgInstantiateContract2Amino) => _91.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _91.MsgExecuteContract) => _91.MsgExecuteContractAmino;
                    fromAmino: (object: _91.MsgExecuteContractAmino) => _91.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _91.MsgMigrateContract) => _91.MsgMigrateContractAmino;
                    fromAmino: (object: _91.MsgMigrateContractAmino) => _91.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _91.MsgUpdateAdmin) => _91.MsgUpdateAdminAmino;
                    fromAmino: (object: _91.MsgUpdateAdminAmino) => _91.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _91.MsgClearAdmin) => _91.MsgClearAdminAmino;
                    fromAmino: (object: _91.MsgClearAdminAmino) => _91.MsgClearAdmin;
                };
                "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
                    aminoType: string;
                    toAmino: (message: _91.MsgUpdateInstantiateConfig) => _91.MsgUpdateInstantiateConfigAmino;
                    fromAmino: (object: _91.MsgUpdateInstantiateConfigAmino) => _91.MsgUpdateInstantiateConfig;
                };
                "/cosmwasm.wasm.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _91.MsgUpdateParams) => _91.MsgUpdateParamsAmino;
                    fromAmino: (object: _91.MsgUpdateParamsAmino) => _91.MsgUpdateParams;
                };
                "/cosmwasm.wasm.v1.MsgSudoContract": {
                    aminoType: string;
                    toAmino: (message: _91.MsgSudoContract) => _91.MsgSudoContractAmino;
                    fromAmino: (object: _91.MsgSudoContractAmino) => _91.MsgSudoContract;
                };
                "/cosmwasm.wasm.v1.MsgPinCodes": {
                    aminoType: string;
                    toAmino: (message: _91.MsgPinCodes) => _91.MsgPinCodesAmino;
                    fromAmino: (object: _91.MsgPinCodesAmino) => _91.MsgPinCodes;
                };
                "/cosmwasm.wasm.v1.MsgUnpinCodes": {
                    aminoType: string;
                    toAmino: (message: _91.MsgUnpinCodes) => _91.MsgUnpinCodesAmino;
                    fromAmino: (object: _91.MsgUnpinCodesAmino) => _91.MsgUnpinCodes;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _91.MsgStoreAndInstantiateContract) => _91.MsgStoreAndInstantiateContractAmino;
                    fromAmino: (object: _91.MsgStoreAndInstantiateContractAmino) => _91.MsgStoreAndInstantiateContract;
                };
            };
            accessTypeFromJSON(object: any): _92.AccessType;
            accessTypeToJSON(object: _92.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _92.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _92.ContractCodeHistoryOperationType): string;
            AccessType: typeof _92.AccessType;
            AccessTypeSDKType: typeof _92.AccessType;
            AccessTypeAmino: typeof _92.AccessType;
            ContractCodeHistoryOperationType: typeof _92.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _92.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _92.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                encode(message: _92.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.AccessTypeParam;
                fromPartial(object: Partial<_92.AccessTypeParam>): _92.AccessTypeParam;
                fromAmino(object: _92.AccessTypeParamAmino): _92.AccessTypeParam;
                toAmino(message: _92.AccessTypeParam): _92.AccessTypeParamAmino;
                fromAminoMsg(object: _92.AccessTypeParamAminoMsg): _92.AccessTypeParam;
                toAminoMsg(message: _92.AccessTypeParam): _92.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _92.AccessTypeParamProtoMsg): _92.AccessTypeParam;
                toProto(message: _92.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _92.AccessTypeParam): _92.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                encode(message: _92.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.AccessConfig;
                fromPartial(object: Partial<_92.AccessConfig>): _92.AccessConfig;
                fromAmino(object: _92.AccessConfigAmino): _92.AccessConfig;
                toAmino(message: _92.AccessConfig): _92.AccessConfigAmino;
                fromAminoMsg(object: _92.AccessConfigAminoMsg): _92.AccessConfig;
                toAminoMsg(message: _92.AccessConfig): _92.AccessConfigAminoMsg;
                fromProtoMsg(message: _92.AccessConfigProtoMsg): _92.AccessConfig;
                toProto(message: _92.AccessConfig): Uint8Array;
                toProtoMsg(message: _92.AccessConfig): _92.AccessConfigProtoMsg;
            };
            Params: {
                encode(message: _92.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Params;
                fromPartial(object: Partial<_92.Params>): _92.Params;
                fromAmino(object: _92.ParamsAmino): _92.Params;
                toAmino(message: _92.Params): _92.ParamsAmino;
                fromAminoMsg(object: _92.ParamsAminoMsg): _92.Params;
                toAminoMsg(message: _92.Params): _92.ParamsAminoMsg;
                fromProtoMsg(message: _92.ParamsProtoMsg): _92.Params;
                toProto(message: _92.Params): Uint8Array;
                toProtoMsg(message: _92.Params): _92.ParamsProtoMsg;
            };
            CodeInfo: {
                encode(message: _92.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.CodeInfo;
                fromPartial(object: Partial<_92.CodeInfo>): _92.CodeInfo;
                fromAmino(object: _92.CodeInfoAmino): _92.CodeInfo;
                toAmino(message: _92.CodeInfo): _92.CodeInfoAmino;
                fromAminoMsg(object: _92.CodeInfoAminoMsg): _92.CodeInfo;
                toAminoMsg(message: _92.CodeInfo): _92.CodeInfoAminoMsg;
                fromProtoMsg(message: _92.CodeInfoProtoMsg): _92.CodeInfo;
                toProto(message: _92.CodeInfo): Uint8Array;
                toProtoMsg(message: _92.CodeInfo): _92.CodeInfoProtoMsg;
            };
            ContractInfo: {
                encode(message: _92.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ContractInfo;
                fromPartial(object: Partial<_92.ContractInfo>): _92.ContractInfo;
                fromAmino(object: _92.ContractInfoAmino): _92.ContractInfo;
                toAmino(message: _92.ContractInfo): _92.ContractInfoAmino;
                fromAminoMsg(object: _92.ContractInfoAminoMsg): _92.ContractInfo;
                toAminoMsg(message: _92.ContractInfo): _92.ContractInfoAminoMsg;
                fromProtoMsg(message: _92.ContractInfoProtoMsg): _92.ContractInfo;
                toProto(message: _92.ContractInfo): Uint8Array;
                toProtoMsg(message: _92.ContractInfo): _92.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                encode(message: _92.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ContractCodeHistoryEntry;
                fromPartial(object: Partial<_92.ContractCodeHistoryEntry>): _92.ContractCodeHistoryEntry;
                fromAmino(object: _92.ContractCodeHistoryEntryAmino): _92.ContractCodeHistoryEntry;
                toAmino(message: _92.ContractCodeHistoryEntry): _92.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _92.ContractCodeHistoryEntryAminoMsg): _92.ContractCodeHistoryEntry;
                toAminoMsg(message: _92.ContractCodeHistoryEntry): _92.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _92.ContractCodeHistoryEntryProtoMsg): _92.ContractCodeHistoryEntry;
                toProto(message: _92.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _92.ContractCodeHistoryEntry): _92.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                encode(message: _92.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.AbsoluteTxPosition;
                fromPartial(object: Partial<_92.AbsoluteTxPosition>): _92.AbsoluteTxPosition;
                fromAmino(object: _92.AbsoluteTxPositionAmino): _92.AbsoluteTxPosition;
                toAmino(message: _92.AbsoluteTxPosition): _92.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _92.AbsoluteTxPositionAminoMsg): _92.AbsoluteTxPosition;
                toAminoMsg(message: _92.AbsoluteTxPosition): _92.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _92.AbsoluteTxPositionProtoMsg): _92.AbsoluteTxPosition;
                toProto(message: _92.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _92.AbsoluteTxPosition): _92.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                encode(message: _92.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Model;
                fromPartial(object: Partial<_92.Model>): _92.Model;
                fromAmino(object: _92.ModelAmino): _92.Model;
                toAmino(message: _92.Model): _92.ModelAmino;
                fromAminoMsg(object: _92.ModelAminoMsg): _92.Model;
                toAminoMsg(message: _92.Model): _92.ModelAminoMsg;
                fromProtoMsg(message: _92.ModelProtoMsg): _92.Model;
                toProto(message: _92.Model): Uint8Array;
                toProtoMsg(message: _92.Model): _92.ModelProtoMsg;
            };
            Cosmwasm_wasmv1ContractInfoExtension_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            MsgStoreCode: {
                encode(message: _91.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgStoreCode;
                fromPartial(object: Partial<_91.MsgStoreCode>): _91.MsgStoreCode;
                fromAmino(object: _91.MsgStoreCodeAmino): _91.MsgStoreCode;
                toAmino(message: _91.MsgStoreCode): _91.MsgStoreCodeAmino;
                fromAminoMsg(object: _91.MsgStoreCodeAminoMsg): _91.MsgStoreCode;
                toAminoMsg(message: _91.MsgStoreCode): _91.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _91.MsgStoreCodeProtoMsg): _91.MsgStoreCode;
                toProto(message: _91.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _91.MsgStoreCode): _91.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                encode(message: _91.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgStoreCodeResponse;
                fromPartial(object: Partial<_91.MsgStoreCodeResponse>): _91.MsgStoreCodeResponse;
                fromAmino(object: _91.MsgStoreCodeResponseAmino): _91.MsgStoreCodeResponse;
                toAmino(message: _91.MsgStoreCodeResponse): _91.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _91.MsgStoreCodeResponseAminoMsg): _91.MsgStoreCodeResponse;
                toAminoMsg(message: _91.MsgStoreCodeResponse): _91.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _91.MsgStoreCodeResponseProtoMsg): _91.MsgStoreCodeResponse;
                toProto(message: _91.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _91.MsgStoreCodeResponse): _91.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                encode(message: _91.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgInstantiateContract;
                fromPartial(object: Partial<_91.MsgInstantiateContract>): _91.MsgInstantiateContract;
                fromAmino(object: _91.MsgInstantiateContractAmino): _91.MsgInstantiateContract;
                toAmino(message: _91.MsgInstantiateContract): _91.MsgInstantiateContractAmino;
                fromAminoMsg(object: _91.MsgInstantiateContractAminoMsg): _91.MsgInstantiateContract;
                toAminoMsg(message: _91.MsgInstantiateContract): _91.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _91.MsgInstantiateContractProtoMsg): _91.MsgInstantiateContract;
                toProto(message: _91.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _91.MsgInstantiateContract): _91.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContractResponse: {
                encode(message: _91.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgInstantiateContractResponse;
                fromPartial(object: Partial<_91.MsgInstantiateContractResponse>): _91.MsgInstantiateContractResponse;
                fromAmino(object: _91.MsgInstantiateContractResponseAmino): _91.MsgInstantiateContractResponse;
                toAmino(message: _91.MsgInstantiateContractResponse): _91.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _91.MsgInstantiateContractResponseAminoMsg): _91.MsgInstantiateContractResponse;
                toAminoMsg(message: _91.MsgInstantiateContractResponse): _91.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _91.MsgInstantiateContractResponseProtoMsg): _91.MsgInstantiateContractResponse;
                toProto(message: _91.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _91.MsgInstantiateContractResponse): _91.MsgInstantiateContractResponseProtoMsg;
            };
            MsgInstantiateContract2: {
                encode(message: _91.MsgInstantiateContract2, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgInstantiateContract2;
                fromPartial(object: Partial<_91.MsgInstantiateContract2>): _91.MsgInstantiateContract2;
                fromAmino(object: _91.MsgInstantiateContract2Amino): _91.MsgInstantiateContract2;
                toAmino(message: _91.MsgInstantiateContract2): _91.MsgInstantiateContract2Amino;
                fromAminoMsg(object: _91.MsgInstantiateContract2AminoMsg): _91.MsgInstantiateContract2;
                toAminoMsg(message: _91.MsgInstantiateContract2): _91.MsgInstantiateContract2AminoMsg;
                fromProtoMsg(message: _91.MsgInstantiateContract2ProtoMsg): _91.MsgInstantiateContract2;
                toProto(message: _91.MsgInstantiateContract2): Uint8Array;
                toProtoMsg(message: _91.MsgInstantiateContract2): _91.MsgInstantiateContract2ProtoMsg;
            };
            MsgInstantiateContract2Response: {
                encode(message: _91.MsgInstantiateContract2Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgInstantiateContract2Response;
                fromPartial(object: Partial<_91.MsgInstantiateContract2Response>): _91.MsgInstantiateContract2Response;
                fromAmino(object: _91.MsgInstantiateContract2ResponseAmino): _91.MsgInstantiateContract2Response;
                toAmino(message: _91.MsgInstantiateContract2Response): _91.MsgInstantiateContract2ResponseAmino;
                fromAminoMsg(object: _91.MsgInstantiateContract2ResponseAminoMsg): _91.MsgInstantiateContract2Response;
                toAminoMsg(message: _91.MsgInstantiateContract2Response): _91.MsgInstantiateContract2ResponseAminoMsg;
                fromProtoMsg(message: _91.MsgInstantiateContract2ResponseProtoMsg): _91.MsgInstantiateContract2Response;
                toProto(message: _91.MsgInstantiateContract2Response): Uint8Array;
                toProtoMsg(message: _91.MsgInstantiateContract2Response): _91.MsgInstantiateContract2ResponseProtoMsg;
            };
            MsgExecuteContract: {
                encode(message: _91.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgExecuteContract;
                fromPartial(object: Partial<_91.MsgExecuteContract>): _91.MsgExecuteContract;
                fromAmino(object: _91.MsgExecuteContractAmino): _91.MsgExecuteContract;
                toAmino(message: _91.MsgExecuteContract): _91.MsgExecuteContractAmino;
                fromAminoMsg(object: _91.MsgExecuteContractAminoMsg): _91.MsgExecuteContract;
                toAminoMsg(message: _91.MsgExecuteContract): _91.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _91.MsgExecuteContractProtoMsg): _91.MsgExecuteContract;
                toProto(message: _91.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _91.MsgExecuteContract): _91.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                encode(message: _91.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgExecuteContractResponse;
                fromPartial(object: Partial<_91.MsgExecuteContractResponse>): _91.MsgExecuteContractResponse;
                fromAmino(object: _91.MsgExecuteContractResponseAmino): _91.MsgExecuteContractResponse;
                toAmino(message: _91.MsgExecuteContractResponse): _91.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _91.MsgExecuteContractResponseAminoMsg): _91.MsgExecuteContractResponse;
                toAminoMsg(message: _91.MsgExecuteContractResponse): _91.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _91.MsgExecuteContractResponseProtoMsg): _91.MsgExecuteContractResponse;
                toProto(message: _91.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _91.MsgExecuteContractResponse): _91.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                encode(message: _91.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgMigrateContract;
                fromPartial(object: Partial<_91.MsgMigrateContract>): _91.MsgMigrateContract;
                fromAmino(object: _91.MsgMigrateContractAmino): _91.MsgMigrateContract;
                toAmino(message: _91.MsgMigrateContract): _91.MsgMigrateContractAmino;
                fromAminoMsg(object: _91.MsgMigrateContractAminoMsg): _91.MsgMigrateContract;
                toAminoMsg(message: _91.MsgMigrateContract): _91.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _91.MsgMigrateContractProtoMsg): _91.MsgMigrateContract;
                toProto(message: _91.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _91.MsgMigrateContract): _91.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                encode(message: _91.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgMigrateContractResponse;
                fromPartial(object: Partial<_91.MsgMigrateContractResponse>): _91.MsgMigrateContractResponse;
                fromAmino(object: _91.MsgMigrateContractResponseAmino): _91.MsgMigrateContractResponse;
                toAmino(message: _91.MsgMigrateContractResponse): _91.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _91.MsgMigrateContractResponseAminoMsg): _91.MsgMigrateContractResponse;
                toAminoMsg(message: _91.MsgMigrateContractResponse): _91.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _91.MsgMigrateContractResponseProtoMsg): _91.MsgMigrateContractResponse;
                toProto(message: _91.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _91.MsgMigrateContractResponse): _91.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                encode(message: _91.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgUpdateAdmin;
                fromPartial(object: Partial<_91.MsgUpdateAdmin>): _91.MsgUpdateAdmin;
                fromAmino(object: _91.MsgUpdateAdminAmino): _91.MsgUpdateAdmin;
                toAmino(message: _91.MsgUpdateAdmin): _91.MsgUpdateAdminAmino;
                fromAminoMsg(object: _91.MsgUpdateAdminAminoMsg): _91.MsgUpdateAdmin;
                toAminoMsg(message: _91.MsgUpdateAdmin): _91.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _91.MsgUpdateAdminProtoMsg): _91.MsgUpdateAdmin;
                toProto(message: _91.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _91.MsgUpdateAdmin): _91.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                encode(_: _91.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgUpdateAdminResponse;
                fromPartial(_: Partial<_91.MsgUpdateAdminResponse>): _91.MsgUpdateAdminResponse;
                fromAmino(_: _91.MsgUpdateAdminResponseAmino): _91.MsgUpdateAdminResponse;
                toAmino(_: _91.MsgUpdateAdminResponse): _91.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _91.MsgUpdateAdminResponseAminoMsg): _91.MsgUpdateAdminResponse;
                toAminoMsg(message: _91.MsgUpdateAdminResponse): _91.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _91.MsgUpdateAdminResponseProtoMsg): _91.MsgUpdateAdminResponse;
                toProto(message: _91.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _91.MsgUpdateAdminResponse): _91.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                encode(message: _91.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgClearAdmin;
                fromPartial(object: Partial<_91.MsgClearAdmin>): _91.MsgClearAdmin;
                fromAmino(object: _91.MsgClearAdminAmino): _91.MsgClearAdmin;
                toAmino(message: _91.MsgClearAdmin): _91.MsgClearAdminAmino;
                fromAminoMsg(object: _91.MsgClearAdminAminoMsg): _91.MsgClearAdmin;
                toAminoMsg(message: _91.MsgClearAdmin): _91.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _91.MsgClearAdminProtoMsg): _91.MsgClearAdmin;
                toProto(message: _91.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _91.MsgClearAdmin): _91.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                encode(_: _91.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgClearAdminResponse;
                fromPartial(_: Partial<_91.MsgClearAdminResponse>): _91.MsgClearAdminResponse;
                fromAmino(_: _91.MsgClearAdminResponseAmino): _91.MsgClearAdminResponse;
                toAmino(_: _91.MsgClearAdminResponse): _91.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _91.MsgClearAdminResponseAminoMsg): _91.MsgClearAdminResponse;
                toAminoMsg(message: _91.MsgClearAdminResponse): _91.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _91.MsgClearAdminResponseProtoMsg): _91.MsgClearAdminResponse;
                toProto(message: _91.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _91.MsgClearAdminResponse): _91.MsgClearAdminResponseProtoMsg;
            };
            MsgUpdateInstantiateConfig: {
                encode(message: _91.MsgUpdateInstantiateConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgUpdateInstantiateConfig;
                fromPartial(object: Partial<_91.MsgUpdateInstantiateConfig>): _91.MsgUpdateInstantiateConfig;
                fromAmino(object: _91.MsgUpdateInstantiateConfigAmino): _91.MsgUpdateInstantiateConfig;
                toAmino(message: _91.MsgUpdateInstantiateConfig): _91.MsgUpdateInstantiateConfigAmino;
                fromAminoMsg(object: _91.MsgUpdateInstantiateConfigAminoMsg): _91.MsgUpdateInstantiateConfig;
                toAminoMsg(message: _91.MsgUpdateInstantiateConfig): _91.MsgUpdateInstantiateConfigAminoMsg;
                fromProtoMsg(message: _91.MsgUpdateInstantiateConfigProtoMsg): _91.MsgUpdateInstantiateConfig;
                toProto(message: _91.MsgUpdateInstantiateConfig): Uint8Array;
                toProtoMsg(message: _91.MsgUpdateInstantiateConfig): _91.MsgUpdateInstantiateConfigProtoMsg;
            };
            MsgUpdateInstantiateConfigResponse: {
                encode(_: _91.MsgUpdateInstantiateConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgUpdateInstantiateConfigResponse;
                fromPartial(_: Partial<_91.MsgUpdateInstantiateConfigResponse>): _91.MsgUpdateInstantiateConfigResponse;
                fromAmino(_: _91.MsgUpdateInstantiateConfigResponseAmino): _91.MsgUpdateInstantiateConfigResponse;
                toAmino(_: _91.MsgUpdateInstantiateConfigResponse): _91.MsgUpdateInstantiateConfigResponseAmino;
                fromAminoMsg(object: _91.MsgUpdateInstantiateConfigResponseAminoMsg): _91.MsgUpdateInstantiateConfigResponse;
                toAminoMsg(message: _91.MsgUpdateInstantiateConfigResponse): _91.MsgUpdateInstantiateConfigResponseAminoMsg;
                fromProtoMsg(message: _91.MsgUpdateInstantiateConfigResponseProtoMsg): _91.MsgUpdateInstantiateConfigResponse;
                toProto(message: _91.MsgUpdateInstantiateConfigResponse): Uint8Array;
                toProtoMsg(message: _91.MsgUpdateInstantiateConfigResponse): _91.MsgUpdateInstantiateConfigResponseProtoMsg;
            };
            MsgUpdateParams: {
                encode(message: _91.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgUpdateParams;
                fromPartial(object: Partial<_91.MsgUpdateParams>): _91.MsgUpdateParams;
                fromAmino(object: _91.MsgUpdateParamsAmino): _91.MsgUpdateParams;
                toAmino(message: _91.MsgUpdateParams): _91.MsgUpdateParamsAmino;
                fromAminoMsg(object: _91.MsgUpdateParamsAminoMsg): _91.MsgUpdateParams;
                toAminoMsg(message: _91.MsgUpdateParams): _91.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _91.MsgUpdateParamsProtoMsg): _91.MsgUpdateParams;
                toProto(message: _91.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _91.MsgUpdateParams): _91.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                encode(_: _91.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_91.MsgUpdateParamsResponse>): _91.MsgUpdateParamsResponse;
                fromAmino(_: _91.MsgUpdateParamsResponseAmino): _91.MsgUpdateParamsResponse;
                toAmino(_: _91.MsgUpdateParamsResponse): _91.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _91.MsgUpdateParamsResponseAminoMsg): _91.MsgUpdateParamsResponse;
                toAminoMsg(message: _91.MsgUpdateParamsResponse): _91.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _91.MsgUpdateParamsResponseProtoMsg): _91.MsgUpdateParamsResponse;
                toProto(message: _91.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _91.MsgUpdateParamsResponse): _91.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSudoContract: {
                encode(message: _91.MsgSudoContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgSudoContract;
                fromPartial(object: Partial<_91.MsgSudoContract>): _91.MsgSudoContract;
                fromAmino(object: _91.MsgSudoContractAmino): _91.MsgSudoContract;
                toAmino(message: _91.MsgSudoContract): _91.MsgSudoContractAmino;
                fromAminoMsg(object: _91.MsgSudoContractAminoMsg): _91.MsgSudoContract;
                toAminoMsg(message: _91.MsgSudoContract): _91.MsgSudoContractAminoMsg;
                fromProtoMsg(message: _91.MsgSudoContractProtoMsg): _91.MsgSudoContract;
                toProto(message: _91.MsgSudoContract): Uint8Array;
                toProtoMsg(message: _91.MsgSudoContract): _91.MsgSudoContractProtoMsg;
            };
            MsgSudoContractResponse: {
                encode(message: _91.MsgSudoContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgSudoContractResponse;
                fromPartial(object: Partial<_91.MsgSudoContractResponse>): _91.MsgSudoContractResponse;
                fromAmino(object: _91.MsgSudoContractResponseAmino): _91.MsgSudoContractResponse;
                toAmino(message: _91.MsgSudoContractResponse): _91.MsgSudoContractResponseAmino;
                fromAminoMsg(object: _91.MsgSudoContractResponseAminoMsg): _91.MsgSudoContractResponse;
                toAminoMsg(message: _91.MsgSudoContractResponse): _91.MsgSudoContractResponseAminoMsg;
                fromProtoMsg(message: _91.MsgSudoContractResponseProtoMsg): _91.MsgSudoContractResponse;
                toProto(message: _91.MsgSudoContractResponse): Uint8Array;
                toProtoMsg(message: _91.MsgSudoContractResponse): _91.MsgSudoContractResponseProtoMsg;
            };
            MsgPinCodes: {
                encode(message: _91.MsgPinCodes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgPinCodes;
                fromPartial(object: Partial<_91.MsgPinCodes>): _91.MsgPinCodes;
                fromAmino(object: _91.MsgPinCodesAmino): _91.MsgPinCodes;
                toAmino(message: _91.MsgPinCodes): _91.MsgPinCodesAmino;
                fromAminoMsg(object: _91.MsgPinCodesAminoMsg): _91.MsgPinCodes;
                toAminoMsg(message: _91.MsgPinCodes): _91.MsgPinCodesAminoMsg;
                fromProtoMsg(message: _91.MsgPinCodesProtoMsg): _91.MsgPinCodes;
                toProto(message: _91.MsgPinCodes): Uint8Array;
                toProtoMsg(message: _91.MsgPinCodes): _91.MsgPinCodesProtoMsg;
            };
            MsgPinCodesResponse: {
                encode(_: _91.MsgPinCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgPinCodesResponse;
                fromPartial(_: Partial<_91.MsgPinCodesResponse>): _91.MsgPinCodesResponse;
                fromAmino(_: _91.MsgPinCodesResponseAmino): _91.MsgPinCodesResponse;
                toAmino(_: _91.MsgPinCodesResponse): _91.MsgPinCodesResponseAmino;
                fromAminoMsg(object: _91.MsgPinCodesResponseAminoMsg): _91.MsgPinCodesResponse;
                toAminoMsg(message: _91.MsgPinCodesResponse): _91.MsgPinCodesResponseAminoMsg;
                fromProtoMsg(message: _91.MsgPinCodesResponseProtoMsg): _91.MsgPinCodesResponse;
                toProto(message: _91.MsgPinCodesResponse): Uint8Array;
                toProtoMsg(message: _91.MsgPinCodesResponse): _91.MsgPinCodesResponseProtoMsg;
            };
            MsgUnpinCodes: {
                encode(message: _91.MsgUnpinCodes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgUnpinCodes;
                fromPartial(object: Partial<_91.MsgUnpinCodes>): _91.MsgUnpinCodes;
                fromAmino(object: _91.MsgUnpinCodesAmino): _91.MsgUnpinCodes;
                toAmino(message: _91.MsgUnpinCodes): _91.MsgUnpinCodesAmino;
                fromAminoMsg(object: _91.MsgUnpinCodesAminoMsg): _91.MsgUnpinCodes;
                toAminoMsg(message: _91.MsgUnpinCodes): _91.MsgUnpinCodesAminoMsg;
                fromProtoMsg(message: _91.MsgUnpinCodesProtoMsg): _91.MsgUnpinCodes;
                toProto(message: _91.MsgUnpinCodes): Uint8Array;
                toProtoMsg(message: _91.MsgUnpinCodes): _91.MsgUnpinCodesProtoMsg;
            };
            MsgUnpinCodesResponse: {
                encode(_: _91.MsgUnpinCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgUnpinCodesResponse;
                fromPartial(_: Partial<_91.MsgUnpinCodesResponse>): _91.MsgUnpinCodesResponse;
                fromAmino(_: _91.MsgUnpinCodesResponseAmino): _91.MsgUnpinCodesResponse;
                toAmino(_: _91.MsgUnpinCodesResponse): _91.MsgUnpinCodesResponseAmino;
                fromAminoMsg(object: _91.MsgUnpinCodesResponseAminoMsg): _91.MsgUnpinCodesResponse;
                toAminoMsg(message: _91.MsgUnpinCodesResponse): _91.MsgUnpinCodesResponseAminoMsg;
                fromProtoMsg(message: _91.MsgUnpinCodesResponseProtoMsg): _91.MsgUnpinCodesResponse;
                toProto(message: _91.MsgUnpinCodesResponse): Uint8Array;
                toProtoMsg(message: _91.MsgUnpinCodesResponse): _91.MsgUnpinCodesResponseProtoMsg;
            };
            MsgStoreAndInstantiateContract: {
                encode(message: _91.MsgStoreAndInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgStoreAndInstantiateContract;
                fromPartial(object: Partial<_91.MsgStoreAndInstantiateContract>): _91.MsgStoreAndInstantiateContract;
                fromAmino(object: _91.MsgStoreAndInstantiateContractAmino): _91.MsgStoreAndInstantiateContract;
                toAmino(message: _91.MsgStoreAndInstantiateContract): _91.MsgStoreAndInstantiateContractAmino;
                fromAminoMsg(object: _91.MsgStoreAndInstantiateContractAminoMsg): _91.MsgStoreAndInstantiateContract;
                toAminoMsg(message: _91.MsgStoreAndInstantiateContract): _91.MsgStoreAndInstantiateContractAminoMsg;
                fromProtoMsg(message: _91.MsgStoreAndInstantiateContractProtoMsg): _91.MsgStoreAndInstantiateContract;
                toProto(message: _91.MsgStoreAndInstantiateContract): Uint8Array;
                toProtoMsg(message: _91.MsgStoreAndInstantiateContract): _91.MsgStoreAndInstantiateContractProtoMsg;
            };
            MsgStoreAndInstantiateContractResponse: {
                encode(message: _91.MsgStoreAndInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgStoreAndInstantiateContractResponse;
                fromPartial(object: Partial<_91.MsgStoreAndInstantiateContractResponse>): _91.MsgStoreAndInstantiateContractResponse;
                fromAmino(object: _91.MsgStoreAndInstantiateContractResponseAmino): _91.MsgStoreAndInstantiateContractResponse;
                toAmino(message: _91.MsgStoreAndInstantiateContractResponse): _91.MsgStoreAndInstantiateContractResponseAmino;
                fromAminoMsg(object: _91.MsgStoreAndInstantiateContractResponseAminoMsg): _91.MsgStoreAndInstantiateContractResponse;
                toAminoMsg(message: _91.MsgStoreAndInstantiateContractResponse): _91.MsgStoreAndInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _91.MsgStoreAndInstantiateContractResponseProtoMsg): _91.MsgStoreAndInstantiateContractResponse;
                toProto(message: _91.MsgStoreAndInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _91.MsgStoreAndInstantiateContractResponse): _91.MsgStoreAndInstantiateContractResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                encode(message: _90.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryContractInfoRequest;
                fromPartial(object: Partial<_90.QueryContractInfoRequest>): _90.QueryContractInfoRequest;
                fromAmino(object: _90.QueryContractInfoRequestAmino): _90.QueryContractInfoRequest;
                toAmino(message: _90.QueryContractInfoRequest): _90.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _90.QueryContractInfoRequestAminoMsg): _90.QueryContractInfoRequest;
                toAminoMsg(message: _90.QueryContractInfoRequest): _90.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _90.QueryContractInfoRequestProtoMsg): _90.QueryContractInfoRequest;
                toProto(message: _90.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _90.QueryContractInfoRequest): _90.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                encode(message: _90.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryContractInfoResponse;
                fromPartial(object: Partial<_90.QueryContractInfoResponse>): _90.QueryContractInfoResponse;
                fromAmino(object: _90.QueryContractInfoResponseAmino): _90.QueryContractInfoResponse;
                toAmino(message: _90.QueryContractInfoResponse): _90.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _90.QueryContractInfoResponseAminoMsg): _90.QueryContractInfoResponse;
                toAminoMsg(message: _90.QueryContractInfoResponse): _90.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _90.QueryContractInfoResponseProtoMsg): _90.QueryContractInfoResponse;
                toProto(message: _90.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _90.QueryContractInfoResponse): _90.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                encode(message: _90.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryContractHistoryRequest;
                fromPartial(object: Partial<_90.QueryContractHistoryRequest>): _90.QueryContractHistoryRequest;
                fromAmino(object: _90.QueryContractHistoryRequestAmino): _90.QueryContractHistoryRequest;
                toAmino(message: _90.QueryContractHistoryRequest): _90.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _90.QueryContractHistoryRequestAminoMsg): _90.QueryContractHistoryRequest;
                toAminoMsg(message: _90.QueryContractHistoryRequest): _90.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _90.QueryContractHistoryRequestProtoMsg): _90.QueryContractHistoryRequest;
                toProto(message: _90.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _90.QueryContractHistoryRequest): _90.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                encode(message: _90.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryContractHistoryResponse;
                fromPartial(object: Partial<_90.QueryContractHistoryResponse>): _90.QueryContractHistoryResponse;
                fromAmino(object: _90.QueryContractHistoryResponseAmino): _90.QueryContractHistoryResponse;
                toAmino(message: _90.QueryContractHistoryResponse): _90.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _90.QueryContractHistoryResponseAminoMsg): _90.QueryContractHistoryResponse;
                toAminoMsg(message: _90.QueryContractHistoryResponse): _90.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _90.QueryContractHistoryResponseProtoMsg): _90.QueryContractHistoryResponse;
                toProto(message: _90.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _90.QueryContractHistoryResponse): _90.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                encode(message: _90.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryContractsByCodeRequest;
                fromPartial(object: Partial<_90.QueryContractsByCodeRequest>): _90.QueryContractsByCodeRequest;
                fromAmino(object: _90.QueryContractsByCodeRequestAmino): _90.QueryContractsByCodeRequest;
                toAmino(message: _90.QueryContractsByCodeRequest): _90.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _90.QueryContractsByCodeRequestAminoMsg): _90.QueryContractsByCodeRequest;
                toAminoMsg(message: _90.QueryContractsByCodeRequest): _90.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _90.QueryContractsByCodeRequestProtoMsg): _90.QueryContractsByCodeRequest;
                toProto(message: _90.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _90.QueryContractsByCodeRequest): _90.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                encode(message: _90.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryContractsByCodeResponse;
                fromPartial(object: Partial<_90.QueryContractsByCodeResponse>): _90.QueryContractsByCodeResponse;
                fromAmino(object: _90.QueryContractsByCodeResponseAmino): _90.QueryContractsByCodeResponse;
                toAmino(message: _90.QueryContractsByCodeResponse): _90.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _90.QueryContractsByCodeResponseAminoMsg): _90.QueryContractsByCodeResponse;
                toAminoMsg(message: _90.QueryContractsByCodeResponse): _90.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _90.QueryContractsByCodeResponseProtoMsg): _90.QueryContractsByCodeResponse;
                toProto(message: _90.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _90.QueryContractsByCodeResponse): _90.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                encode(message: _90.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryAllContractStateRequest;
                fromPartial(object: Partial<_90.QueryAllContractStateRequest>): _90.QueryAllContractStateRequest;
                fromAmino(object: _90.QueryAllContractStateRequestAmino): _90.QueryAllContractStateRequest;
                toAmino(message: _90.QueryAllContractStateRequest): _90.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _90.QueryAllContractStateRequestAminoMsg): _90.QueryAllContractStateRequest;
                toAminoMsg(message: _90.QueryAllContractStateRequest): _90.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _90.QueryAllContractStateRequestProtoMsg): _90.QueryAllContractStateRequest;
                toProto(message: _90.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _90.QueryAllContractStateRequest): _90.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                encode(message: _90.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryAllContractStateResponse;
                fromPartial(object: Partial<_90.QueryAllContractStateResponse>): _90.QueryAllContractStateResponse;
                fromAmino(object: _90.QueryAllContractStateResponseAmino): _90.QueryAllContractStateResponse;
                toAmino(message: _90.QueryAllContractStateResponse): _90.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _90.QueryAllContractStateResponseAminoMsg): _90.QueryAllContractStateResponse;
                toAminoMsg(message: _90.QueryAllContractStateResponse): _90.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _90.QueryAllContractStateResponseProtoMsg): _90.QueryAllContractStateResponse;
                toProto(message: _90.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _90.QueryAllContractStateResponse): _90.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                encode(message: _90.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryRawContractStateRequest;
                fromPartial(object: Partial<_90.QueryRawContractStateRequest>): _90.QueryRawContractStateRequest;
                fromAmino(object: _90.QueryRawContractStateRequestAmino): _90.QueryRawContractStateRequest;
                toAmino(message: _90.QueryRawContractStateRequest): _90.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _90.QueryRawContractStateRequestAminoMsg): _90.QueryRawContractStateRequest;
                toAminoMsg(message: _90.QueryRawContractStateRequest): _90.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _90.QueryRawContractStateRequestProtoMsg): _90.QueryRawContractStateRequest;
                toProto(message: _90.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _90.QueryRawContractStateRequest): _90.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                encode(message: _90.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryRawContractStateResponse;
                fromPartial(object: Partial<_90.QueryRawContractStateResponse>): _90.QueryRawContractStateResponse;
                fromAmino(object: _90.QueryRawContractStateResponseAmino): _90.QueryRawContractStateResponse;
                toAmino(message: _90.QueryRawContractStateResponse): _90.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _90.QueryRawContractStateResponseAminoMsg): _90.QueryRawContractStateResponse;
                toAminoMsg(message: _90.QueryRawContractStateResponse): _90.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _90.QueryRawContractStateResponseProtoMsg): _90.QueryRawContractStateResponse;
                toProto(message: _90.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _90.QueryRawContractStateResponse): _90.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                encode(message: _90.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QuerySmartContractStateRequest;
                fromPartial(object: Partial<_90.QuerySmartContractStateRequest>): _90.QuerySmartContractStateRequest;
                fromAmino(object: _90.QuerySmartContractStateRequestAmino): _90.QuerySmartContractStateRequest;
                toAmino(message: _90.QuerySmartContractStateRequest): _90.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _90.QuerySmartContractStateRequestAminoMsg): _90.QuerySmartContractStateRequest;
                toAminoMsg(message: _90.QuerySmartContractStateRequest): _90.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _90.QuerySmartContractStateRequestProtoMsg): _90.QuerySmartContractStateRequest;
                toProto(message: _90.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _90.QuerySmartContractStateRequest): _90.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                encode(message: _90.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QuerySmartContractStateResponse;
                fromPartial(object: Partial<_90.QuerySmartContractStateResponse>): _90.QuerySmartContractStateResponse;
                fromAmino(object: _90.QuerySmartContractStateResponseAmino): _90.QuerySmartContractStateResponse;
                toAmino(message: _90.QuerySmartContractStateResponse): _90.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _90.QuerySmartContractStateResponseAminoMsg): _90.QuerySmartContractStateResponse;
                toAminoMsg(message: _90.QuerySmartContractStateResponse): _90.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _90.QuerySmartContractStateResponseProtoMsg): _90.QuerySmartContractStateResponse;
                toProto(message: _90.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _90.QuerySmartContractStateResponse): _90.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                encode(message: _90.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryCodeRequest;
                fromPartial(object: Partial<_90.QueryCodeRequest>): _90.QueryCodeRequest;
                fromAmino(object: _90.QueryCodeRequestAmino): _90.QueryCodeRequest;
                toAmino(message: _90.QueryCodeRequest): _90.QueryCodeRequestAmino;
                fromAminoMsg(object: _90.QueryCodeRequestAminoMsg): _90.QueryCodeRequest;
                toAminoMsg(message: _90.QueryCodeRequest): _90.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _90.QueryCodeRequestProtoMsg): _90.QueryCodeRequest;
                toProto(message: _90.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _90.QueryCodeRequest): _90.QueryCodeRequestProtoMsg;
            };
            CodeInfoResponse: {
                encode(message: _90.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.CodeInfoResponse;
                fromPartial(object: Partial<_90.CodeInfoResponse>): _90.CodeInfoResponse;
                fromAmino(object: _90.CodeInfoResponseAmino): _90.CodeInfoResponse;
                toAmino(message: _90.CodeInfoResponse): _90.CodeInfoResponseAmino;
                fromAminoMsg(object: _90.CodeInfoResponseAminoMsg): _90.CodeInfoResponse;
                toAminoMsg(message: _90.CodeInfoResponse): _90.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _90.CodeInfoResponseProtoMsg): _90.CodeInfoResponse;
                toProto(message: _90.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _90.CodeInfoResponse): _90.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                encode(message: _90.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryCodeResponse;
                fromPartial(object: Partial<_90.QueryCodeResponse>): _90.QueryCodeResponse;
                fromAmino(object: _90.QueryCodeResponseAmino): _90.QueryCodeResponse;
                toAmino(message: _90.QueryCodeResponse): _90.QueryCodeResponseAmino;
                fromAminoMsg(object: _90.QueryCodeResponseAminoMsg): _90.QueryCodeResponse;
                toAminoMsg(message: _90.QueryCodeResponse): _90.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _90.QueryCodeResponseProtoMsg): _90.QueryCodeResponse;
                toProto(message: _90.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _90.QueryCodeResponse): _90.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                encode(message: _90.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryCodesRequest;
                fromPartial(object: Partial<_90.QueryCodesRequest>): _90.QueryCodesRequest;
                fromAmino(object: _90.QueryCodesRequestAmino): _90.QueryCodesRequest;
                toAmino(message: _90.QueryCodesRequest): _90.QueryCodesRequestAmino;
                fromAminoMsg(object: _90.QueryCodesRequestAminoMsg): _90.QueryCodesRequest;
                toAminoMsg(message: _90.QueryCodesRequest): _90.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _90.QueryCodesRequestProtoMsg): _90.QueryCodesRequest;
                toProto(message: _90.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _90.QueryCodesRequest): _90.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                encode(message: _90.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryCodesResponse;
                fromPartial(object: Partial<_90.QueryCodesResponse>): _90.QueryCodesResponse;
                fromAmino(object: _90.QueryCodesResponseAmino): _90.QueryCodesResponse;
                toAmino(message: _90.QueryCodesResponse): _90.QueryCodesResponseAmino;
                fromAminoMsg(object: _90.QueryCodesResponseAminoMsg): _90.QueryCodesResponse;
                toAminoMsg(message: _90.QueryCodesResponse): _90.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _90.QueryCodesResponseProtoMsg): _90.QueryCodesResponse;
                toProto(message: _90.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _90.QueryCodesResponse): _90.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                encode(message: _90.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryPinnedCodesRequest;
                fromPartial(object: Partial<_90.QueryPinnedCodesRequest>): _90.QueryPinnedCodesRequest;
                fromAmino(object: _90.QueryPinnedCodesRequestAmino): _90.QueryPinnedCodesRequest;
                toAmino(message: _90.QueryPinnedCodesRequest): _90.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _90.QueryPinnedCodesRequestAminoMsg): _90.QueryPinnedCodesRequest;
                toAminoMsg(message: _90.QueryPinnedCodesRequest): _90.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _90.QueryPinnedCodesRequestProtoMsg): _90.QueryPinnedCodesRequest;
                toProto(message: _90.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _90.QueryPinnedCodesRequest): _90.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                encode(message: _90.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryPinnedCodesResponse;
                fromPartial(object: Partial<_90.QueryPinnedCodesResponse>): _90.QueryPinnedCodesResponse;
                fromAmino(object: _90.QueryPinnedCodesResponseAmino): _90.QueryPinnedCodesResponse;
                toAmino(message: _90.QueryPinnedCodesResponse): _90.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _90.QueryPinnedCodesResponseAminoMsg): _90.QueryPinnedCodesResponse;
                toAminoMsg(message: _90.QueryPinnedCodesResponse): _90.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _90.QueryPinnedCodesResponseProtoMsg): _90.QueryPinnedCodesResponse;
                toProto(message: _90.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _90.QueryPinnedCodesResponse): _90.QueryPinnedCodesResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _90.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryParamsRequest;
                fromPartial(_: Partial<_90.QueryParamsRequest>): _90.QueryParamsRequest;
                fromAmino(_: _90.QueryParamsRequestAmino): _90.QueryParamsRequest;
                toAmino(_: _90.QueryParamsRequest): _90.QueryParamsRequestAmino;
                fromAminoMsg(object: _90.QueryParamsRequestAminoMsg): _90.QueryParamsRequest;
                toAminoMsg(message: _90.QueryParamsRequest): _90.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _90.QueryParamsRequestProtoMsg): _90.QueryParamsRequest;
                toProto(message: _90.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _90.QueryParamsRequest): _90.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _90.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryParamsResponse;
                fromPartial(object: Partial<_90.QueryParamsResponse>): _90.QueryParamsResponse;
                fromAmino(object: _90.QueryParamsResponseAmino): _90.QueryParamsResponse;
                toAmino(message: _90.QueryParamsResponse): _90.QueryParamsResponseAmino;
                fromAminoMsg(object: _90.QueryParamsResponseAminoMsg): _90.QueryParamsResponse;
                toAminoMsg(message: _90.QueryParamsResponse): _90.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _90.QueryParamsResponseProtoMsg): _90.QueryParamsResponse;
                toProto(message: _90.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _90.QueryParamsResponse): _90.QueryParamsResponseProtoMsg;
            };
            QueryContractsByCreatorRequest: {
                encode(message: _90.QueryContractsByCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryContractsByCreatorRequest;
                fromPartial(object: Partial<_90.QueryContractsByCreatorRequest>): _90.QueryContractsByCreatorRequest;
                fromAmino(object: _90.QueryContractsByCreatorRequestAmino): _90.QueryContractsByCreatorRequest;
                toAmino(message: _90.QueryContractsByCreatorRequest): _90.QueryContractsByCreatorRequestAmino;
                fromAminoMsg(object: _90.QueryContractsByCreatorRequestAminoMsg): _90.QueryContractsByCreatorRequest;
                toAminoMsg(message: _90.QueryContractsByCreatorRequest): _90.QueryContractsByCreatorRequestAminoMsg;
                fromProtoMsg(message: _90.QueryContractsByCreatorRequestProtoMsg): _90.QueryContractsByCreatorRequest;
                toProto(message: _90.QueryContractsByCreatorRequest): Uint8Array;
                toProtoMsg(message: _90.QueryContractsByCreatorRequest): _90.QueryContractsByCreatorRequestProtoMsg;
            };
            QueryContractsByCreatorResponse: {
                encode(message: _90.QueryContractsByCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryContractsByCreatorResponse;
                fromPartial(object: Partial<_90.QueryContractsByCreatorResponse>): _90.QueryContractsByCreatorResponse;
                fromAmino(object: _90.QueryContractsByCreatorResponseAmino): _90.QueryContractsByCreatorResponse;
                toAmino(message: _90.QueryContractsByCreatorResponse): _90.QueryContractsByCreatorResponseAmino;
                fromAminoMsg(object: _90.QueryContractsByCreatorResponseAminoMsg): _90.QueryContractsByCreatorResponse;
                toAminoMsg(message: _90.QueryContractsByCreatorResponse): _90.QueryContractsByCreatorResponseAminoMsg;
                fromProtoMsg(message: _90.QueryContractsByCreatorResponseProtoMsg): _90.QueryContractsByCreatorResponse;
                toProto(message: _90.QueryContractsByCreatorResponse): Uint8Array;
                toProtoMsg(message: _90.QueryContractsByCreatorResponse): _90.QueryContractsByCreatorResponseProtoMsg;
            };
            StoreCodeProposal: {
                encode(message: _89.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.StoreCodeProposal;
                fromPartial(object: Partial<_89.StoreCodeProposal>): _89.StoreCodeProposal;
                fromAmino(object: _89.StoreCodeProposalAmino): _89.StoreCodeProposal;
                toAmino(message: _89.StoreCodeProposal): _89.StoreCodeProposalAmino;
                fromAminoMsg(object: _89.StoreCodeProposalAminoMsg): _89.StoreCodeProposal;
                toAminoMsg(message: _89.StoreCodeProposal): _89.StoreCodeProposalAminoMsg;
                fromProtoMsg(message: _89.StoreCodeProposalProtoMsg): _89.StoreCodeProposal;
                toProto(message: _89.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _89.StoreCodeProposal): _89.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                encode(message: _89.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.InstantiateContractProposal;
                fromPartial(object: Partial<_89.InstantiateContractProposal>): _89.InstantiateContractProposal;
                fromAmino(object: _89.InstantiateContractProposalAmino): _89.InstantiateContractProposal;
                toAmino(message: _89.InstantiateContractProposal): _89.InstantiateContractProposalAmino;
                fromAminoMsg(object: _89.InstantiateContractProposalAminoMsg): _89.InstantiateContractProposal;
                toAminoMsg(message: _89.InstantiateContractProposal): _89.InstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _89.InstantiateContractProposalProtoMsg): _89.InstantiateContractProposal;
                toProto(message: _89.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _89.InstantiateContractProposal): _89.InstantiateContractProposalProtoMsg;
            };
            InstantiateContract2Proposal: {
                encode(message: _89.InstantiateContract2Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.InstantiateContract2Proposal;
                fromPartial(object: Partial<_89.InstantiateContract2Proposal>): _89.InstantiateContract2Proposal;
                fromAmino(object: _89.InstantiateContract2ProposalAmino): _89.InstantiateContract2Proposal;
                toAmino(message: _89.InstantiateContract2Proposal): _89.InstantiateContract2ProposalAmino;
                fromAminoMsg(object: _89.InstantiateContract2ProposalAminoMsg): _89.InstantiateContract2Proposal;
                toAminoMsg(message: _89.InstantiateContract2Proposal): _89.InstantiateContract2ProposalAminoMsg;
                fromProtoMsg(message: _89.InstantiateContract2ProposalProtoMsg): _89.InstantiateContract2Proposal;
                toProto(message: _89.InstantiateContract2Proposal): Uint8Array;
                toProtoMsg(message: _89.InstantiateContract2Proposal): _89.InstantiateContract2ProposalProtoMsg;
            };
            MigrateContractProposal: {
                encode(message: _89.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MigrateContractProposal;
                fromPartial(object: Partial<_89.MigrateContractProposal>): _89.MigrateContractProposal;
                fromAmino(object: _89.MigrateContractProposalAmino): _89.MigrateContractProposal;
                toAmino(message: _89.MigrateContractProposal): _89.MigrateContractProposalAmino;
                fromAminoMsg(object: _89.MigrateContractProposalAminoMsg): _89.MigrateContractProposal;
                toAminoMsg(message: _89.MigrateContractProposal): _89.MigrateContractProposalAminoMsg;
                fromProtoMsg(message: _89.MigrateContractProposalProtoMsg): _89.MigrateContractProposal;
                toProto(message: _89.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _89.MigrateContractProposal): _89.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                encode(message: _89.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.SudoContractProposal;
                fromPartial(object: Partial<_89.SudoContractProposal>): _89.SudoContractProposal;
                fromAmino(object: _89.SudoContractProposalAmino): _89.SudoContractProposal;
                toAmino(message: _89.SudoContractProposal): _89.SudoContractProposalAmino;
                fromAminoMsg(object: _89.SudoContractProposalAminoMsg): _89.SudoContractProposal;
                toAminoMsg(message: _89.SudoContractProposal): _89.SudoContractProposalAminoMsg;
                fromProtoMsg(message: _89.SudoContractProposalProtoMsg): _89.SudoContractProposal;
                toProto(message: _89.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _89.SudoContractProposal): _89.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                encode(message: _89.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ExecuteContractProposal;
                fromPartial(object: Partial<_89.ExecuteContractProposal>): _89.ExecuteContractProposal;
                fromAmino(object: _89.ExecuteContractProposalAmino): _89.ExecuteContractProposal;
                toAmino(message: _89.ExecuteContractProposal): _89.ExecuteContractProposalAmino;
                fromAminoMsg(object: _89.ExecuteContractProposalAminoMsg): _89.ExecuteContractProposal;
                toAminoMsg(message: _89.ExecuteContractProposal): _89.ExecuteContractProposalAminoMsg;
                fromProtoMsg(message: _89.ExecuteContractProposalProtoMsg): _89.ExecuteContractProposal;
                toProto(message: _89.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _89.ExecuteContractProposal): _89.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                encode(message: _89.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.UpdateAdminProposal;
                fromPartial(object: Partial<_89.UpdateAdminProposal>): _89.UpdateAdminProposal;
                fromAmino(object: _89.UpdateAdminProposalAmino): _89.UpdateAdminProposal;
                toAmino(message: _89.UpdateAdminProposal): _89.UpdateAdminProposalAmino;
                fromAminoMsg(object: _89.UpdateAdminProposalAminoMsg): _89.UpdateAdminProposal;
                toAminoMsg(message: _89.UpdateAdminProposal): _89.UpdateAdminProposalAminoMsg;
                fromProtoMsg(message: _89.UpdateAdminProposalProtoMsg): _89.UpdateAdminProposal;
                toProto(message: _89.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _89.UpdateAdminProposal): _89.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                encode(message: _89.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ClearAdminProposal;
                fromPartial(object: Partial<_89.ClearAdminProposal>): _89.ClearAdminProposal;
                fromAmino(object: _89.ClearAdminProposalAmino): _89.ClearAdminProposal;
                toAmino(message: _89.ClearAdminProposal): _89.ClearAdminProposalAmino;
                fromAminoMsg(object: _89.ClearAdminProposalAminoMsg): _89.ClearAdminProposal;
                toAminoMsg(message: _89.ClearAdminProposal): _89.ClearAdminProposalAminoMsg;
                fromProtoMsg(message: _89.ClearAdminProposalProtoMsg): _89.ClearAdminProposal;
                toProto(message: _89.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _89.ClearAdminProposal): _89.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                encode(message: _89.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.PinCodesProposal;
                fromPartial(object: Partial<_89.PinCodesProposal>): _89.PinCodesProposal;
                fromAmino(object: _89.PinCodesProposalAmino): _89.PinCodesProposal;
                toAmino(message: _89.PinCodesProposal): _89.PinCodesProposalAmino;
                fromAminoMsg(object: _89.PinCodesProposalAminoMsg): _89.PinCodesProposal;
                toAminoMsg(message: _89.PinCodesProposal): _89.PinCodesProposalAminoMsg;
                fromProtoMsg(message: _89.PinCodesProposalProtoMsg): _89.PinCodesProposal;
                toProto(message: _89.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _89.PinCodesProposal): _89.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                encode(message: _89.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.UnpinCodesProposal;
                fromPartial(object: Partial<_89.UnpinCodesProposal>): _89.UnpinCodesProposal;
                fromAmino(object: _89.UnpinCodesProposalAmino): _89.UnpinCodesProposal;
                toAmino(message: _89.UnpinCodesProposal): _89.UnpinCodesProposalAmino;
                fromAminoMsg(object: _89.UnpinCodesProposalAminoMsg): _89.UnpinCodesProposal;
                toAminoMsg(message: _89.UnpinCodesProposal): _89.UnpinCodesProposalAminoMsg;
                fromProtoMsg(message: _89.UnpinCodesProposalProtoMsg): _89.UnpinCodesProposal;
                toProto(message: _89.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _89.UnpinCodesProposal): _89.UnpinCodesProposalProtoMsg;
            };
            AccessConfigUpdate: {
                encode(message: _89.AccessConfigUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.AccessConfigUpdate;
                fromPartial(object: Partial<_89.AccessConfigUpdate>): _89.AccessConfigUpdate;
                fromAmino(object: _89.AccessConfigUpdateAmino): _89.AccessConfigUpdate;
                toAmino(message: _89.AccessConfigUpdate): _89.AccessConfigUpdateAmino;
                fromAminoMsg(object: _89.AccessConfigUpdateAminoMsg): _89.AccessConfigUpdate;
                toAminoMsg(message: _89.AccessConfigUpdate): _89.AccessConfigUpdateAminoMsg;
                fromProtoMsg(message: _89.AccessConfigUpdateProtoMsg): _89.AccessConfigUpdate;
                toProto(message: _89.AccessConfigUpdate): Uint8Array;
                toProtoMsg(message: _89.AccessConfigUpdate): _89.AccessConfigUpdateProtoMsg;
            };
            UpdateInstantiateConfigProposal: {
                encode(message: _89.UpdateInstantiateConfigProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.UpdateInstantiateConfigProposal;
                fromPartial(object: Partial<_89.UpdateInstantiateConfigProposal>): _89.UpdateInstantiateConfigProposal;
                fromAmino(object: _89.UpdateInstantiateConfigProposalAmino): _89.UpdateInstantiateConfigProposal;
                toAmino(message: _89.UpdateInstantiateConfigProposal): _89.UpdateInstantiateConfigProposalAmino;
                fromAminoMsg(object: _89.UpdateInstantiateConfigProposalAminoMsg): _89.UpdateInstantiateConfigProposal;
                toAminoMsg(message: _89.UpdateInstantiateConfigProposal): _89.UpdateInstantiateConfigProposalAminoMsg;
                fromProtoMsg(message: _89.UpdateInstantiateConfigProposalProtoMsg): _89.UpdateInstantiateConfigProposal;
                toProto(message: _89.UpdateInstantiateConfigProposal): Uint8Array;
                toProtoMsg(message: _89.UpdateInstantiateConfigProposal): _89.UpdateInstantiateConfigProposalProtoMsg;
            };
            StoreAndInstantiateContractProposal: {
                encode(message: _89.StoreAndInstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.StoreAndInstantiateContractProposal;
                fromPartial(object: Partial<_89.StoreAndInstantiateContractProposal>): _89.StoreAndInstantiateContractProposal;
                fromAmino(object: _89.StoreAndInstantiateContractProposalAmino): _89.StoreAndInstantiateContractProposal;
                toAmino(message: _89.StoreAndInstantiateContractProposal): _89.StoreAndInstantiateContractProposalAmino;
                fromAminoMsg(object: _89.StoreAndInstantiateContractProposalAminoMsg): _89.StoreAndInstantiateContractProposal;
                toAminoMsg(message: _89.StoreAndInstantiateContractProposal): _89.StoreAndInstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _89.StoreAndInstantiateContractProposalProtoMsg): _89.StoreAndInstantiateContractProposal;
                toProto(message: _89.StoreAndInstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _89.StoreAndInstantiateContractProposal): _89.StoreAndInstantiateContractProposalProtoMsg;
            };
            MsgIBCSend: {
                encode(message: _88.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MsgIBCSend;
                fromPartial(object: Partial<_88.MsgIBCSend>): _88.MsgIBCSend;
                fromAmino(object: _88.MsgIBCSendAmino): _88.MsgIBCSend;
                toAmino(message: _88.MsgIBCSend): _88.MsgIBCSendAmino;
                fromAminoMsg(object: _88.MsgIBCSendAminoMsg): _88.MsgIBCSend;
                toAminoMsg(message: _88.MsgIBCSend): _88.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _88.MsgIBCSendProtoMsg): _88.MsgIBCSend;
                toProto(message: _88.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _88.MsgIBCSend): _88.MsgIBCSendProtoMsg;
            };
            MsgIBCSendResponse: {
                encode(message: _88.MsgIBCSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MsgIBCSendResponse;
                fromPartial(object: Partial<_88.MsgIBCSendResponse>): _88.MsgIBCSendResponse;
                fromAmino(object: _88.MsgIBCSendResponseAmino): _88.MsgIBCSendResponse;
                toAmino(message: _88.MsgIBCSendResponse): _88.MsgIBCSendResponseAmino;
                fromAminoMsg(object: _88.MsgIBCSendResponseAminoMsg): _88.MsgIBCSendResponse;
                toAminoMsg(message: _88.MsgIBCSendResponse): _88.MsgIBCSendResponseAminoMsg;
                fromProtoMsg(message: _88.MsgIBCSendResponseProtoMsg): _88.MsgIBCSendResponse;
                toProto(message: _88.MsgIBCSendResponse): Uint8Array;
                toProtoMsg(message: _88.MsgIBCSendResponse): _88.MsgIBCSendResponseProtoMsg;
            };
            MsgIBCCloseChannel: {
                encode(message: _88.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MsgIBCCloseChannel;
                fromPartial(object: Partial<_88.MsgIBCCloseChannel>): _88.MsgIBCCloseChannel;
                fromAmino(object: _88.MsgIBCCloseChannelAmino): _88.MsgIBCCloseChannel;
                toAmino(message: _88.MsgIBCCloseChannel): _88.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _88.MsgIBCCloseChannelAminoMsg): _88.MsgIBCCloseChannel;
                toAminoMsg(message: _88.MsgIBCCloseChannel): _88.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _88.MsgIBCCloseChannelProtoMsg): _88.MsgIBCCloseChannel;
                toProto(message: _88.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _88.MsgIBCCloseChannel): _88.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                encode(message: _87.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.GenesisState;
                fromPartial(object: Partial<_87.GenesisState>): _87.GenesisState;
                fromAmino(object: _87.GenesisStateAmino): _87.GenesisState;
                toAmino(message: _87.GenesisState): _87.GenesisStateAmino;
                fromAminoMsg(object: _87.GenesisStateAminoMsg): _87.GenesisState;
                toAminoMsg(message: _87.GenesisState): _87.GenesisStateAminoMsg;
                fromProtoMsg(message: _87.GenesisStateProtoMsg): _87.GenesisState;
                toProto(message: _87.GenesisState): Uint8Array;
                toProtoMsg(message: _87.GenesisState): _87.GenesisStateProtoMsg;
            };
            Code: {
                encode(message: _87.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Code;
                fromPartial(object: Partial<_87.Code>): _87.Code;
                fromAmino(object: _87.CodeAmino): _87.Code;
                toAmino(message: _87.Code): _87.CodeAmino;
                fromAminoMsg(object: _87.CodeAminoMsg): _87.Code;
                toAminoMsg(message: _87.Code): _87.CodeAminoMsg;
                fromProtoMsg(message: _87.CodeProtoMsg): _87.Code;
                toProto(message: _87.Code): Uint8Array;
                toProtoMsg(message: _87.Code): _87.CodeProtoMsg;
            };
            Contract: {
                encode(message: _87.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Contract;
                fromPartial(object: Partial<_87.Contract>): _87.Contract;
                fromAmino(object: _87.ContractAmino): _87.Contract;
                toAmino(message: _87.Contract): _87.ContractAmino;
                fromAminoMsg(object: _87.ContractAminoMsg): _87.Contract;
                toAminoMsg(message: _87.Contract): _87.ContractAminoMsg;
                fromProtoMsg(message: _87.ContractProtoMsg): _87.Contract;
                toProto(message: _87.Contract): Uint8Array;
                toProtoMsg(message: _87.Contract): _87.ContractProtoMsg;
            };
            Sequence: {
                encode(message: _87.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Sequence;
                fromPartial(object: Partial<_87.Sequence>): _87.Sequence;
                fromAmino(object: _87.SequenceAmino): _87.Sequence;
                toAmino(message: _87.Sequence): _87.SequenceAmino;
                fromAminoMsg(object: _87.SequenceAminoMsg): _87.Sequence;
                toAminoMsg(message: _87.Sequence): _87.SequenceAminoMsg;
                fromProtoMsg(message: _87.SequenceProtoMsg): _87.Sequence;
                toProto(message: _87.Sequence): Uint8Array;
                toProtoMsg(message: _87.Sequence): _87.SequenceProtoMsg;
            };
            ContractExecutionAuthorization: {
                encode(message: _86.ContractExecutionAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ContractExecutionAuthorization;
                fromPartial(object: Partial<_86.ContractExecutionAuthorization>): _86.ContractExecutionAuthorization;
                fromAmino(object: _86.ContractExecutionAuthorizationAmino): _86.ContractExecutionAuthorization;
                toAmino(message: _86.ContractExecutionAuthorization): _86.ContractExecutionAuthorizationAmino;
                fromAminoMsg(object: _86.ContractExecutionAuthorizationAminoMsg): _86.ContractExecutionAuthorization;
                toAminoMsg(message: _86.ContractExecutionAuthorization): _86.ContractExecutionAuthorizationAminoMsg;
                fromProtoMsg(message: _86.ContractExecutionAuthorizationProtoMsg): _86.ContractExecutionAuthorization;
                toProto(message: _86.ContractExecutionAuthorization): Uint8Array;
                toProtoMsg(message: _86.ContractExecutionAuthorization): _86.ContractExecutionAuthorizationProtoMsg;
            };
            ContractMigrationAuthorization: {
                encode(message: _86.ContractMigrationAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ContractMigrationAuthorization;
                fromPartial(object: Partial<_86.ContractMigrationAuthorization>): _86.ContractMigrationAuthorization;
                fromAmino(object: _86.ContractMigrationAuthorizationAmino): _86.ContractMigrationAuthorization;
                toAmino(message: _86.ContractMigrationAuthorization): _86.ContractMigrationAuthorizationAmino;
                fromAminoMsg(object: _86.ContractMigrationAuthorizationAminoMsg): _86.ContractMigrationAuthorization;
                toAminoMsg(message: _86.ContractMigrationAuthorization): _86.ContractMigrationAuthorizationAminoMsg;
                fromProtoMsg(message: _86.ContractMigrationAuthorizationProtoMsg): _86.ContractMigrationAuthorization;
                toProto(message: _86.ContractMigrationAuthorization): Uint8Array;
                toProtoMsg(message: _86.ContractMigrationAuthorization): _86.ContractMigrationAuthorizationProtoMsg;
            };
            ContractGrant: {
                encode(message: _86.ContractGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ContractGrant;
                fromPartial(object: Partial<_86.ContractGrant>): _86.ContractGrant;
                fromAmino(object: _86.ContractGrantAmino): _86.ContractGrant;
                toAmino(message: _86.ContractGrant): _86.ContractGrantAmino;
                fromAminoMsg(object: _86.ContractGrantAminoMsg): _86.ContractGrant;
                toAminoMsg(message: _86.ContractGrant): _86.ContractGrantAminoMsg;
                fromProtoMsg(message: _86.ContractGrantProtoMsg): _86.ContractGrant;
                toProto(message: _86.ContractGrant): Uint8Array;
                toProtoMsg(message: _86.ContractGrant): _86.ContractGrantProtoMsg;
            };
            MaxCallsLimit: {
                encode(message: _86.MaxCallsLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MaxCallsLimit;
                fromPartial(object: Partial<_86.MaxCallsLimit>): _86.MaxCallsLimit;
                fromAmino(object: _86.MaxCallsLimitAmino): _86.MaxCallsLimit;
                toAmino(message: _86.MaxCallsLimit): _86.MaxCallsLimitAmino;
                fromAminoMsg(object: _86.MaxCallsLimitAminoMsg): _86.MaxCallsLimit;
                toAminoMsg(message: _86.MaxCallsLimit): _86.MaxCallsLimitAminoMsg;
                fromProtoMsg(message: _86.MaxCallsLimitProtoMsg): _86.MaxCallsLimit;
                toProto(message: _86.MaxCallsLimit): Uint8Array;
                toProtoMsg(message: _86.MaxCallsLimit): _86.MaxCallsLimitProtoMsg;
            };
            MaxFundsLimit: {
                encode(message: _86.MaxFundsLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MaxFundsLimit;
                fromPartial(object: Partial<_86.MaxFundsLimit>): _86.MaxFundsLimit;
                fromAmino(object: _86.MaxFundsLimitAmino): _86.MaxFundsLimit;
                toAmino(message: _86.MaxFundsLimit): _86.MaxFundsLimitAmino;
                fromAminoMsg(object: _86.MaxFundsLimitAminoMsg): _86.MaxFundsLimit;
                toAminoMsg(message: _86.MaxFundsLimit): _86.MaxFundsLimitAminoMsg;
                fromProtoMsg(message: _86.MaxFundsLimitProtoMsg): _86.MaxFundsLimit;
                toProto(message: _86.MaxFundsLimit): Uint8Array;
                toProtoMsg(message: _86.MaxFundsLimit): _86.MaxFundsLimitProtoMsg;
            };
            CombinedLimit: {
                encode(message: _86.CombinedLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.CombinedLimit;
                fromPartial(object: Partial<_86.CombinedLimit>): _86.CombinedLimit;
                fromAmino(object: _86.CombinedLimitAmino): _86.CombinedLimit;
                toAmino(message: _86.CombinedLimit): _86.CombinedLimitAmino;
                fromAminoMsg(object: _86.CombinedLimitAminoMsg): _86.CombinedLimit;
                toAminoMsg(message: _86.CombinedLimit): _86.CombinedLimitAminoMsg;
                fromProtoMsg(message: _86.CombinedLimitProtoMsg): _86.CombinedLimit;
                toProto(message: _86.CombinedLimit): Uint8Array;
                toProtoMsg(message: _86.CombinedLimit): _86.CombinedLimitProtoMsg;
            };
            AllowAllMessagesFilter: {
                encode(_: _86.AllowAllMessagesFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.AllowAllMessagesFilter;
                fromPartial(_: Partial<_86.AllowAllMessagesFilter>): _86.AllowAllMessagesFilter;
                fromAmino(_: _86.AllowAllMessagesFilterAmino): _86.AllowAllMessagesFilter;
                toAmino(_: _86.AllowAllMessagesFilter): _86.AllowAllMessagesFilterAmino;
                fromAminoMsg(object: _86.AllowAllMessagesFilterAminoMsg): _86.AllowAllMessagesFilter;
                toAminoMsg(message: _86.AllowAllMessagesFilter): _86.AllowAllMessagesFilterAminoMsg;
                fromProtoMsg(message: _86.AllowAllMessagesFilterProtoMsg): _86.AllowAllMessagesFilter;
                toProto(message: _86.AllowAllMessagesFilter): Uint8Array;
                toProtoMsg(message: _86.AllowAllMessagesFilter): _86.AllowAllMessagesFilterProtoMsg;
            };
            AcceptedMessageKeysFilter: {
                encode(message: _86.AcceptedMessageKeysFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.AcceptedMessageKeysFilter;
                fromPartial(object: Partial<_86.AcceptedMessageKeysFilter>): _86.AcceptedMessageKeysFilter;
                fromAmino(object: _86.AcceptedMessageKeysFilterAmino): _86.AcceptedMessageKeysFilter;
                toAmino(message: _86.AcceptedMessageKeysFilter): _86.AcceptedMessageKeysFilterAmino;
                fromAminoMsg(object: _86.AcceptedMessageKeysFilterAminoMsg): _86.AcceptedMessageKeysFilter;
                toAminoMsg(message: _86.AcceptedMessageKeysFilter): _86.AcceptedMessageKeysFilterAminoMsg;
                fromProtoMsg(message: _86.AcceptedMessageKeysFilterProtoMsg): _86.AcceptedMessageKeysFilter;
                toProto(message: _86.AcceptedMessageKeysFilter): Uint8Array;
                toProtoMsg(message: _86.AcceptedMessageKeysFilter): _86.AcceptedMessageKeysFilterProtoMsg;
            };
            AcceptedMessagesFilter: {
                encode(message: _86.AcceptedMessagesFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.AcceptedMessagesFilter;
                fromPartial(object: Partial<_86.AcceptedMessagesFilter>): _86.AcceptedMessagesFilter;
                fromAmino(object: _86.AcceptedMessagesFilterAmino): _86.AcceptedMessagesFilter;
                toAmino(message: _86.AcceptedMessagesFilter): _86.AcceptedMessagesFilterAmino;
                fromAminoMsg(object: _86.AcceptedMessagesFilterAminoMsg): _86.AcceptedMessagesFilter;
                toAminoMsg(message: _86.AcceptedMessagesFilter): _86.AcceptedMessagesFilterAminoMsg;
                fromProtoMsg(message: _86.AcceptedMessagesFilterProtoMsg): _86.AcceptedMessagesFilter;
                toProto(message: _86.AcceptedMessagesFilter): Uint8Array;
                toProtoMsg(message: _86.AcceptedMessagesFilter): _86.AcceptedMessagesFilterProtoMsg;
            };
            Cosmwasm_wasmv1ContractAuthzLimitX_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _86.MaxCallsLimit | _86.MaxFundsLimit | _86.CombinedLimit;
            Cosmwasm_wasmv1ContractAuthzLimitX_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractAuthzLimitX_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmwasm_wasmv1ContractAuthzFilterX_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _86.AllowAllMessagesFilter | _86.AcceptedMessageKeysFilter | _86.AcceptedMessagesFilter;
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
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            cosmwasm: {
                wasm: {
                    v1: _229.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
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
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
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
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
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
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                        };
                    };
                };
            };
            cosmwasm: {
                wasm: {
                    v1: {
                        contractInfo(request: _90.QueryContractInfoRequest): Promise<_90.QueryContractInfoResponse>;
                        contractHistory(request: _90.QueryContractHistoryRequest): Promise<_90.QueryContractHistoryResponse>;
                        contractsByCode(request: _90.QueryContractsByCodeRequest): Promise<_90.QueryContractsByCodeResponse>;
                        allContractState(request: _90.QueryAllContractStateRequest): Promise<_90.QueryAllContractStateResponse>;
                        rawContractState(request: _90.QueryRawContractStateRequest): Promise<_90.QueryRawContractStateResponse>;
                        smartContractState(request: _90.QuerySmartContractStateRequest): Promise<_90.QuerySmartContractStateResponse>;
                        code(request: _90.QueryCodeRequest): Promise<_90.QueryCodeResponse>;
                        codes(request?: _90.QueryCodesRequest): Promise<_90.QueryCodesResponse>;
                        pinnedCodes(request?: _90.QueryPinnedCodesRequest): Promise<_90.QueryPinnedCodesResponse>;
                        params(request?: _90.QueryParamsRequest): Promise<_90.QueryParamsResponse>;
                        contractsByCreator(request: _90.QueryContractsByCreatorRequest): Promise<_90.QueryContractsByCreatorResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
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
                base: {
                    node: {
                        v1beta1: import("../cosmos/base/node/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
            };
            cosmwasm: {
                wasm: {
                    v1: _227.LCDQueryClient;
                };
            };
        }>;
    };
}
