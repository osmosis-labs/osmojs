import * as _100 from "./wasm/v1/authz";
import * as _101 from "./wasm/v1/genesis";
import * as _102 from "./wasm/v1/ibc";
import * as _103 from "./wasm/v1/proposal";
import * as _104 from "./wasm/v1/query";
import * as _105 from "./wasm/v1/tx";
import * as _106 from "./wasm/v1/types";
import * as _263 from "./wasm/v1/query.lcd";
import * as _264 from "./wasm/v1/query.rpc.Query";
import * as _265 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _265.MsgClientImpl;
            QueryClientImpl: typeof _264.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _104.QueryContractInfoRequest): Promise<_104.QueryContractInfoResponse>;
                contractHistory(request: _104.QueryContractHistoryRequest): Promise<_104.QueryContractHistoryResponse>;
                contractsByCode(request: _104.QueryContractsByCodeRequest): Promise<_104.QueryContractsByCodeResponse>;
                allContractState(request: _104.QueryAllContractStateRequest): Promise<_104.QueryAllContractStateResponse>;
                rawContractState(request: _104.QueryRawContractStateRequest): Promise<_104.QueryRawContractStateResponse>;
                smartContractState(request: _104.QuerySmartContractStateRequest): Promise<_104.QuerySmartContractStateResponse>;
                code(request: _104.QueryCodeRequest): Promise<_104.QueryCodeResponse>;
                codes(request?: _104.QueryCodesRequest): Promise<_104.QueryCodesResponse>;
                pinnedCodes(request?: _104.QueryPinnedCodesRequest): Promise<_104.QueryPinnedCodesResponse>;
                params(request?: _104.QueryParamsRequest): Promise<_104.QueryParamsResponse>;
                contractsByCreator(request: _104.QueryContractsByCreatorRequest): Promise<_104.QueryContractsByCreatorResponse>;
            };
            LCDQueryClient: typeof _263.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _105.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _105.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _105.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _105.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _105.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _105.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _105.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateInstantiateConfig(value: _105.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _105.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sudoContract(value: _105.MsgSudoContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pinCodes(value: _105.MsgPinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unpinCodes(value: _105.MsgUnpinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndInstantiateContract(value: _105.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _105.MsgStoreCode): {
                        typeUrl: string;
                        value: _105.MsgStoreCode;
                    };
                    instantiateContract(value: _105.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _105.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _105.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _105.MsgInstantiateContract2;
                    };
                    executeContract(value: _105.MsgExecuteContract): {
                        typeUrl: string;
                        value: _105.MsgExecuteContract;
                    };
                    migrateContract(value: _105.MsgMigrateContract): {
                        typeUrl: string;
                        value: _105.MsgMigrateContract;
                    };
                    updateAdmin(value: _105.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _105.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _105.MsgClearAdmin): {
                        typeUrl: string;
                        value: _105.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _105.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _105.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _105.MsgUpdateParams): {
                        typeUrl: string;
                        value: _105.MsgUpdateParams;
                    };
                    sudoContract(value: _105.MsgSudoContract): {
                        typeUrl: string;
                        value: _105.MsgSudoContract;
                    };
                    pinCodes(value: _105.MsgPinCodes): {
                        typeUrl: string;
                        value: _105.MsgPinCodes;
                    };
                    unpinCodes(value: _105.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _105.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _105.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _105.MsgStoreAndInstantiateContract;
                    };
                };
                fromPartial: {
                    storeCode(value: _105.MsgStoreCode): {
                        typeUrl: string;
                        value: _105.MsgStoreCode;
                    };
                    instantiateContract(value: _105.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _105.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _105.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _105.MsgInstantiateContract2;
                    };
                    executeContract(value: _105.MsgExecuteContract): {
                        typeUrl: string;
                        value: _105.MsgExecuteContract;
                    };
                    migrateContract(value: _105.MsgMigrateContract): {
                        typeUrl: string;
                        value: _105.MsgMigrateContract;
                    };
                    updateAdmin(value: _105.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _105.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _105.MsgClearAdmin): {
                        typeUrl: string;
                        value: _105.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _105.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _105.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _105.MsgUpdateParams): {
                        typeUrl: string;
                        value: _105.MsgUpdateParams;
                    };
                    sudoContract(value: _105.MsgSudoContract): {
                        typeUrl: string;
                        value: _105.MsgSudoContract;
                    };
                    pinCodes(value: _105.MsgPinCodes): {
                        typeUrl: string;
                        value: _105.MsgPinCodes;
                    };
                    unpinCodes(value: _105.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _105.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _105.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _105.MsgStoreAndInstantiateContract;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _105.MsgStoreCode) => _105.MsgStoreCodeAmino;
                    fromAmino: (object: _105.MsgStoreCodeAmino) => _105.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _105.MsgInstantiateContract) => _105.MsgInstantiateContractAmino;
                    fromAmino: (object: _105.MsgInstantiateContractAmino) => _105.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: (message: _105.MsgInstantiateContract2) => _105.MsgInstantiateContract2Amino;
                    fromAmino: (object: _105.MsgInstantiateContract2Amino) => _105.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _105.MsgExecuteContract) => _105.MsgExecuteContractAmino;
                    fromAmino: (object: _105.MsgExecuteContractAmino) => _105.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _105.MsgMigrateContract) => _105.MsgMigrateContractAmino;
                    fromAmino: (object: _105.MsgMigrateContractAmino) => _105.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _105.MsgUpdateAdmin) => _105.MsgUpdateAdminAmino;
                    fromAmino: (object: _105.MsgUpdateAdminAmino) => _105.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _105.MsgClearAdmin) => _105.MsgClearAdminAmino;
                    fromAmino: (object: _105.MsgClearAdminAmino) => _105.MsgClearAdmin;
                };
                "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
                    aminoType: string;
                    toAmino: (message: _105.MsgUpdateInstantiateConfig) => _105.MsgUpdateInstantiateConfigAmino;
                    fromAmino: (object: _105.MsgUpdateInstantiateConfigAmino) => _105.MsgUpdateInstantiateConfig;
                };
                "/cosmwasm.wasm.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _105.MsgUpdateParams) => _105.MsgUpdateParamsAmino;
                    fromAmino: (object: _105.MsgUpdateParamsAmino) => _105.MsgUpdateParams;
                };
                "/cosmwasm.wasm.v1.MsgSudoContract": {
                    aminoType: string;
                    toAmino: (message: _105.MsgSudoContract) => _105.MsgSudoContractAmino;
                    fromAmino: (object: _105.MsgSudoContractAmino) => _105.MsgSudoContract;
                };
                "/cosmwasm.wasm.v1.MsgPinCodes": {
                    aminoType: string;
                    toAmino: (message: _105.MsgPinCodes) => _105.MsgPinCodesAmino;
                    fromAmino: (object: _105.MsgPinCodesAmino) => _105.MsgPinCodes;
                };
                "/cosmwasm.wasm.v1.MsgUnpinCodes": {
                    aminoType: string;
                    toAmino: (message: _105.MsgUnpinCodes) => _105.MsgUnpinCodesAmino;
                    fromAmino: (object: _105.MsgUnpinCodesAmino) => _105.MsgUnpinCodes;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _105.MsgStoreAndInstantiateContract) => _105.MsgStoreAndInstantiateContractAmino;
                    fromAmino: (object: _105.MsgStoreAndInstantiateContractAmino) => _105.MsgStoreAndInstantiateContract;
                };
            };
            accessTypeFromJSON(object: any): _106.AccessType;
            accessTypeToJSON(object: _106.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _106.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _106.ContractCodeHistoryOperationType): string;
            AccessType: typeof _106.AccessType;
            AccessTypeSDKType: typeof _106.AccessType;
            AccessTypeAmino: typeof _106.AccessType;
            ContractCodeHistoryOperationType: typeof _106.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _106.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _106.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                typeUrl: string;
                encode(message: _106.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.AccessTypeParam;
                fromPartial(object: Partial<_106.AccessTypeParam>): _106.AccessTypeParam;
                fromAmino(object: _106.AccessTypeParamAmino): _106.AccessTypeParam;
                toAmino(message: _106.AccessTypeParam): _106.AccessTypeParamAmino;
                fromAminoMsg(object: _106.AccessTypeParamAminoMsg): _106.AccessTypeParam;
                toAminoMsg(message: _106.AccessTypeParam): _106.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _106.AccessTypeParamProtoMsg): _106.AccessTypeParam;
                toProto(message: _106.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _106.AccessTypeParam): _106.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                typeUrl: string;
                encode(message: _106.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.AccessConfig;
                fromPartial(object: Partial<_106.AccessConfig>): _106.AccessConfig;
                fromAmino(object: _106.AccessConfigAmino): _106.AccessConfig;
                toAmino(message: _106.AccessConfig): _106.AccessConfigAmino;
                fromAminoMsg(object: _106.AccessConfigAminoMsg): _106.AccessConfig;
                toAminoMsg(message: _106.AccessConfig): _106.AccessConfigAminoMsg;
                fromProtoMsg(message: _106.AccessConfigProtoMsg): _106.AccessConfig;
                toProto(message: _106.AccessConfig): Uint8Array;
                toProtoMsg(message: _106.AccessConfig): _106.AccessConfigProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _106.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Params;
                fromPartial(object: Partial<_106.Params>): _106.Params;
                fromAmino(object: _106.ParamsAmino): _106.Params;
                toAmino(message: _106.Params): _106.ParamsAmino;
                fromAminoMsg(object: _106.ParamsAminoMsg): _106.Params;
                toAminoMsg(message: _106.Params): _106.ParamsAminoMsg;
                fromProtoMsg(message: _106.ParamsProtoMsg): _106.Params;
                toProto(message: _106.Params): Uint8Array;
                toProtoMsg(message: _106.Params): _106.ParamsProtoMsg;
            };
            CodeInfo: {
                typeUrl: string;
                encode(message: _106.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.CodeInfo;
                fromPartial(object: Partial<_106.CodeInfo>): _106.CodeInfo;
                fromAmino(object: _106.CodeInfoAmino): _106.CodeInfo;
                toAmino(message: _106.CodeInfo): _106.CodeInfoAmino;
                fromAminoMsg(object: _106.CodeInfoAminoMsg): _106.CodeInfo;
                toAminoMsg(message: _106.CodeInfo): _106.CodeInfoAminoMsg;
                fromProtoMsg(message: _106.CodeInfoProtoMsg): _106.CodeInfo;
                toProto(message: _106.CodeInfo): Uint8Array;
                toProtoMsg(message: _106.CodeInfo): _106.CodeInfoProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                encode(message: _106.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ContractInfo;
                fromPartial(object: Partial<_106.ContractInfo>): _106.ContractInfo;
                fromAmino(object: _106.ContractInfoAmino): _106.ContractInfo;
                toAmino(message: _106.ContractInfo): _106.ContractInfoAmino;
                fromAminoMsg(object: _106.ContractInfoAminoMsg): _106.ContractInfo;
                toAminoMsg(message: _106.ContractInfo): _106.ContractInfoAminoMsg;
                fromProtoMsg(message: _106.ContractInfoProtoMsg): _106.ContractInfo;
                toProto(message: _106.ContractInfo): Uint8Array;
                toProtoMsg(message: _106.ContractInfo): _106.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                typeUrl: string;
                encode(message: _106.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ContractCodeHistoryEntry;
                fromPartial(object: Partial<_106.ContractCodeHistoryEntry>): _106.ContractCodeHistoryEntry;
                fromAmino(object: _106.ContractCodeHistoryEntryAmino): _106.ContractCodeHistoryEntry;
                toAmino(message: _106.ContractCodeHistoryEntry): _106.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _106.ContractCodeHistoryEntryAminoMsg): _106.ContractCodeHistoryEntry;
                toAminoMsg(message: _106.ContractCodeHistoryEntry): _106.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _106.ContractCodeHistoryEntryProtoMsg): _106.ContractCodeHistoryEntry;
                toProto(message: _106.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _106.ContractCodeHistoryEntry): _106.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                typeUrl: string;
                encode(message: _106.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.AbsoluteTxPosition;
                fromPartial(object: Partial<_106.AbsoluteTxPosition>): _106.AbsoluteTxPosition;
                fromAmino(object: _106.AbsoluteTxPositionAmino): _106.AbsoluteTxPosition;
                toAmino(message: _106.AbsoluteTxPosition): _106.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _106.AbsoluteTxPositionAminoMsg): _106.AbsoluteTxPosition;
                toAminoMsg(message: _106.AbsoluteTxPosition): _106.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _106.AbsoluteTxPositionProtoMsg): _106.AbsoluteTxPosition;
                toProto(message: _106.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _106.AbsoluteTxPosition): _106.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                typeUrl: string;
                encode(message: _106.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Model;
                fromPartial(object: Partial<_106.Model>): _106.Model;
                fromAmino(object: _106.ModelAmino): _106.Model;
                toAmino(message: _106.Model): _106.ModelAmino;
                fromAminoMsg(object: _106.ModelAminoMsg): _106.Model;
                toAminoMsg(message: _106.Model): _106.ModelAminoMsg;
                fromProtoMsg(message: _106.ModelProtoMsg): _106.Model;
                toProto(message: _106.Model): Uint8Array;
                toProtoMsg(message: _106.Model): _106.ModelProtoMsg;
            };
            Cosmwasm_wasmv1ContractInfoExtension_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            MsgStoreCode: {
                typeUrl: string;
                encode(message: _105.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgStoreCode;
                fromPartial(object: Partial<_105.MsgStoreCode>): _105.MsgStoreCode;
                fromAmino(object: _105.MsgStoreCodeAmino): _105.MsgStoreCode;
                toAmino(message: _105.MsgStoreCode): _105.MsgStoreCodeAmino;
                fromAminoMsg(object: _105.MsgStoreCodeAminoMsg): _105.MsgStoreCode;
                toAminoMsg(message: _105.MsgStoreCode): _105.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _105.MsgStoreCodeProtoMsg): _105.MsgStoreCode;
                toProto(message: _105.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _105.MsgStoreCode): _105.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                encode(message: _105.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgStoreCodeResponse;
                fromPartial(object: Partial<_105.MsgStoreCodeResponse>): _105.MsgStoreCodeResponse;
                fromAmino(object: _105.MsgStoreCodeResponseAmino): _105.MsgStoreCodeResponse;
                toAmino(message: _105.MsgStoreCodeResponse): _105.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _105.MsgStoreCodeResponseAminoMsg): _105.MsgStoreCodeResponse;
                toAminoMsg(message: _105.MsgStoreCodeResponse): _105.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _105.MsgStoreCodeResponseProtoMsg): _105.MsgStoreCodeResponse;
                toProto(message: _105.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _105.MsgStoreCodeResponse): _105.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                encode(message: _105.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgInstantiateContract;
                fromPartial(object: Partial<_105.MsgInstantiateContract>): _105.MsgInstantiateContract;
                fromAmino(object: _105.MsgInstantiateContractAmino): _105.MsgInstantiateContract;
                toAmino(message: _105.MsgInstantiateContract): _105.MsgInstantiateContractAmino;
                fromAminoMsg(object: _105.MsgInstantiateContractAminoMsg): _105.MsgInstantiateContract;
                toAminoMsg(message: _105.MsgInstantiateContract): _105.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _105.MsgInstantiateContractProtoMsg): _105.MsgInstantiateContract;
                toProto(message: _105.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _105.MsgInstantiateContract): _105.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _105.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgInstantiateContractResponse;
                fromPartial(object: Partial<_105.MsgInstantiateContractResponse>): _105.MsgInstantiateContractResponse;
                fromAmino(object: _105.MsgInstantiateContractResponseAmino): _105.MsgInstantiateContractResponse;
                toAmino(message: _105.MsgInstantiateContractResponse): _105.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _105.MsgInstantiateContractResponseAminoMsg): _105.MsgInstantiateContractResponse;
                toAminoMsg(message: _105.MsgInstantiateContractResponse): _105.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _105.MsgInstantiateContractResponseProtoMsg): _105.MsgInstantiateContractResponse;
                toProto(message: _105.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _105.MsgInstantiateContractResponse): _105.MsgInstantiateContractResponseProtoMsg;
            };
            MsgInstantiateContract2: {
                typeUrl: string;
                encode(message: _105.MsgInstantiateContract2, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgInstantiateContract2;
                fromPartial(object: Partial<_105.MsgInstantiateContract2>): _105.MsgInstantiateContract2;
                fromAmino(object: _105.MsgInstantiateContract2Amino): _105.MsgInstantiateContract2;
                toAmino(message: _105.MsgInstantiateContract2): _105.MsgInstantiateContract2Amino;
                fromAminoMsg(object: _105.MsgInstantiateContract2AminoMsg): _105.MsgInstantiateContract2;
                toAminoMsg(message: _105.MsgInstantiateContract2): _105.MsgInstantiateContract2AminoMsg;
                fromProtoMsg(message: _105.MsgInstantiateContract2ProtoMsg): _105.MsgInstantiateContract2;
                toProto(message: _105.MsgInstantiateContract2): Uint8Array;
                toProtoMsg(message: _105.MsgInstantiateContract2): _105.MsgInstantiateContract2ProtoMsg;
            };
            MsgInstantiateContract2Response: {
                typeUrl: string;
                encode(message: _105.MsgInstantiateContract2Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgInstantiateContract2Response;
                fromPartial(object: Partial<_105.MsgInstantiateContract2Response>): _105.MsgInstantiateContract2Response;
                fromAmino(object: _105.MsgInstantiateContract2ResponseAmino): _105.MsgInstantiateContract2Response;
                toAmino(message: _105.MsgInstantiateContract2Response): _105.MsgInstantiateContract2ResponseAmino;
                fromAminoMsg(object: _105.MsgInstantiateContract2ResponseAminoMsg): _105.MsgInstantiateContract2Response;
                toAminoMsg(message: _105.MsgInstantiateContract2Response): _105.MsgInstantiateContract2ResponseAminoMsg;
                fromProtoMsg(message: _105.MsgInstantiateContract2ResponseProtoMsg): _105.MsgInstantiateContract2Response;
                toProto(message: _105.MsgInstantiateContract2Response): Uint8Array;
                toProtoMsg(message: _105.MsgInstantiateContract2Response): _105.MsgInstantiateContract2ResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                encode(message: _105.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgExecuteContract;
                fromPartial(object: Partial<_105.MsgExecuteContract>): _105.MsgExecuteContract;
                fromAmino(object: _105.MsgExecuteContractAmino): _105.MsgExecuteContract;
                toAmino(message: _105.MsgExecuteContract): _105.MsgExecuteContractAmino;
                fromAminoMsg(object: _105.MsgExecuteContractAminoMsg): _105.MsgExecuteContract;
                toAminoMsg(message: _105.MsgExecuteContract): _105.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _105.MsgExecuteContractProtoMsg): _105.MsgExecuteContract;
                toProto(message: _105.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _105.MsgExecuteContract): _105.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                encode(message: _105.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgExecuteContractResponse;
                fromPartial(object: Partial<_105.MsgExecuteContractResponse>): _105.MsgExecuteContractResponse;
                fromAmino(object: _105.MsgExecuteContractResponseAmino): _105.MsgExecuteContractResponse;
                toAmino(message: _105.MsgExecuteContractResponse): _105.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _105.MsgExecuteContractResponseAminoMsg): _105.MsgExecuteContractResponse;
                toAminoMsg(message: _105.MsgExecuteContractResponse): _105.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _105.MsgExecuteContractResponseProtoMsg): _105.MsgExecuteContractResponse;
                toProto(message: _105.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _105.MsgExecuteContractResponse): _105.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                typeUrl: string;
                encode(message: _105.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgMigrateContract;
                fromPartial(object: Partial<_105.MsgMigrateContract>): _105.MsgMigrateContract;
                fromAmino(object: _105.MsgMigrateContractAmino): _105.MsgMigrateContract;
                toAmino(message: _105.MsgMigrateContract): _105.MsgMigrateContractAmino;
                fromAminoMsg(object: _105.MsgMigrateContractAminoMsg): _105.MsgMigrateContract;
                toAminoMsg(message: _105.MsgMigrateContract): _105.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _105.MsgMigrateContractProtoMsg): _105.MsgMigrateContract;
                toProto(message: _105.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _105.MsgMigrateContract): _105.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                typeUrl: string;
                encode(message: _105.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgMigrateContractResponse;
                fromPartial(object: Partial<_105.MsgMigrateContractResponse>): _105.MsgMigrateContractResponse;
                fromAmino(object: _105.MsgMigrateContractResponseAmino): _105.MsgMigrateContractResponse;
                toAmino(message: _105.MsgMigrateContractResponse): _105.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _105.MsgMigrateContractResponseAminoMsg): _105.MsgMigrateContractResponse;
                toAminoMsg(message: _105.MsgMigrateContractResponse): _105.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _105.MsgMigrateContractResponseProtoMsg): _105.MsgMigrateContractResponse;
                toProto(message: _105.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _105.MsgMigrateContractResponse): _105.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                typeUrl: string;
                encode(message: _105.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgUpdateAdmin;
                fromPartial(object: Partial<_105.MsgUpdateAdmin>): _105.MsgUpdateAdmin;
                fromAmino(object: _105.MsgUpdateAdminAmino): _105.MsgUpdateAdmin;
                toAmino(message: _105.MsgUpdateAdmin): _105.MsgUpdateAdminAmino;
                fromAminoMsg(object: _105.MsgUpdateAdminAminoMsg): _105.MsgUpdateAdmin;
                toAminoMsg(message: _105.MsgUpdateAdmin): _105.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _105.MsgUpdateAdminProtoMsg): _105.MsgUpdateAdmin;
                toProto(message: _105.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _105.MsgUpdateAdmin): _105.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                typeUrl: string;
                encode(_: _105.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgUpdateAdminResponse;
                fromPartial(_: Partial<_105.MsgUpdateAdminResponse>): _105.MsgUpdateAdminResponse;
                fromAmino(_: _105.MsgUpdateAdminResponseAmino): _105.MsgUpdateAdminResponse;
                toAmino(_: _105.MsgUpdateAdminResponse): _105.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _105.MsgUpdateAdminResponseAminoMsg): _105.MsgUpdateAdminResponse;
                toAminoMsg(message: _105.MsgUpdateAdminResponse): _105.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _105.MsgUpdateAdminResponseProtoMsg): _105.MsgUpdateAdminResponse;
                toProto(message: _105.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _105.MsgUpdateAdminResponse): _105.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                typeUrl: string;
                encode(message: _105.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgClearAdmin;
                fromPartial(object: Partial<_105.MsgClearAdmin>): _105.MsgClearAdmin;
                fromAmino(object: _105.MsgClearAdminAmino): _105.MsgClearAdmin;
                toAmino(message: _105.MsgClearAdmin): _105.MsgClearAdminAmino;
                fromAminoMsg(object: _105.MsgClearAdminAminoMsg): _105.MsgClearAdmin;
                toAminoMsg(message: _105.MsgClearAdmin): _105.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _105.MsgClearAdminProtoMsg): _105.MsgClearAdmin;
                toProto(message: _105.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _105.MsgClearAdmin): _105.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                typeUrl: string;
                encode(_: _105.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgClearAdminResponse;
                fromPartial(_: Partial<_105.MsgClearAdminResponse>): _105.MsgClearAdminResponse;
                fromAmino(_: _105.MsgClearAdminResponseAmino): _105.MsgClearAdminResponse;
                toAmino(_: _105.MsgClearAdminResponse): _105.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _105.MsgClearAdminResponseAminoMsg): _105.MsgClearAdminResponse;
                toAminoMsg(message: _105.MsgClearAdminResponse): _105.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _105.MsgClearAdminResponseProtoMsg): _105.MsgClearAdminResponse;
                toProto(message: _105.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _105.MsgClearAdminResponse): _105.MsgClearAdminResponseProtoMsg;
            };
            MsgUpdateInstantiateConfig: {
                typeUrl: string;
                encode(message: _105.MsgUpdateInstantiateConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgUpdateInstantiateConfig;
                fromPartial(object: Partial<_105.MsgUpdateInstantiateConfig>): _105.MsgUpdateInstantiateConfig;
                fromAmino(object: _105.MsgUpdateInstantiateConfigAmino): _105.MsgUpdateInstantiateConfig;
                toAmino(message: _105.MsgUpdateInstantiateConfig): _105.MsgUpdateInstantiateConfigAmino;
                fromAminoMsg(object: _105.MsgUpdateInstantiateConfigAminoMsg): _105.MsgUpdateInstantiateConfig;
                toAminoMsg(message: _105.MsgUpdateInstantiateConfig): _105.MsgUpdateInstantiateConfigAminoMsg;
                fromProtoMsg(message: _105.MsgUpdateInstantiateConfigProtoMsg): _105.MsgUpdateInstantiateConfig;
                toProto(message: _105.MsgUpdateInstantiateConfig): Uint8Array;
                toProtoMsg(message: _105.MsgUpdateInstantiateConfig): _105.MsgUpdateInstantiateConfigProtoMsg;
            };
            MsgUpdateInstantiateConfigResponse: {
                typeUrl: string;
                encode(_: _105.MsgUpdateInstantiateConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgUpdateInstantiateConfigResponse;
                fromPartial(_: Partial<_105.MsgUpdateInstantiateConfigResponse>): _105.MsgUpdateInstantiateConfigResponse;
                fromAmino(_: _105.MsgUpdateInstantiateConfigResponseAmino): _105.MsgUpdateInstantiateConfigResponse;
                toAmino(_: _105.MsgUpdateInstantiateConfigResponse): _105.MsgUpdateInstantiateConfigResponseAmino;
                fromAminoMsg(object: _105.MsgUpdateInstantiateConfigResponseAminoMsg): _105.MsgUpdateInstantiateConfigResponse;
                toAminoMsg(message: _105.MsgUpdateInstantiateConfigResponse): _105.MsgUpdateInstantiateConfigResponseAminoMsg;
                fromProtoMsg(message: _105.MsgUpdateInstantiateConfigResponseProtoMsg): _105.MsgUpdateInstantiateConfigResponse;
                toProto(message: _105.MsgUpdateInstantiateConfigResponse): Uint8Array;
                toProtoMsg(message: _105.MsgUpdateInstantiateConfigResponse): _105.MsgUpdateInstantiateConfigResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _105.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgUpdateParams;
                fromPartial(object: Partial<_105.MsgUpdateParams>): _105.MsgUpdateParams;
                fromAmino(object: _105.MsgUpdateParamsAmino): _105.MsgUpdateParams;
                toAmino(message: _105.MsgUpdateParams): _105.MsgUpdateParamsAmino;
                fromAminoMsg(object: _105.MsgUpdateParamsAminoMsg): _105.MsgUpdateParams;
                toAminoMsg(message: _105.MsgUpdateParams): _105.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _105.MsgUpdateParamsProtoMsg): _105.MsgUpdateParams;
                toProto(message: _105.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _105.MsgUpdateParams): _105.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _105.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_105.MsgUpdateParamsResponse>): _105.MsgUpdateParamsResponse;
                fromAmino(_: _105.MsgUpdateParamsResponseAmino): _105.MsgUpdateParamsResponse;
                toAmino(_: _105.MsgUpdateParamsResponse): _105.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _105.MsgUpdateParamsResponseAminoMsg): _105.MsgUpdateParamsResponse;
                toAminoMsg(message: _105.MsgUpdateParamsResponse): _105.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _105.MsgUpdateParamsResponseProtoMsg): _105.MsgUpdateParamsResponse;
                toProto(message: _105.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _105.MsgUpdateParamsResponse): _105.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSudoContract: {
                typeUrl: string;
                encode(message: _105.MsgSudoContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgSudoContract;
                fromPartial(object: Partial<_105.MsgSudoContract>): _105.MsgSudoContract;
                fromAmino(object: _105.MsgSudoContractAmino): _105.MsgSudoContract;
                toAmino(message: _105.MsgSudoContract): _105.MsgSudoContractAmino;
                fromAminoMsg(object: _105.MsgSudoContractAminoMsg): _105.MsgSudoContract;
                toAminoMsg(message: _105.MsgSudoContract): _105.MsgSudoContractAminoMsg;
                fromProtoMsg(message: _105.MsgSudoContractProtoMsg): _105.MsgSudoContract;
                toProto(message: _105.MsgSudoContract): Uint8Array;
                toProtoMsg(message: _105.MsgSudoContract): _105.MsgSudoContractProtoMsg;
            };
            MsgSudoContractResponse: {
                typeUrl: string;
                encode(message: _105.MsgSudoContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgSudoContractResponse;
                fromPartial(object: Partial<_105.MsgSudoContractResponse>): _105.MsgSudoContractResponse;
                fromAmino(object: _105.MsgSudoContractResponseAmino): _105.MsgSudoContractResponse;
                toAmino(message: _105.MsgSudoContractResponse): _105.MsgSudoContractResponseAmino;
                fromAminoMsg(object: _105.MsgSudoContractResponseAminoMsg): _105.MsgSudoContractResponse;
                toAminoMsg(message: _105.MsgSudoContractResponse): _105.MsgSudoContractResponseAminoMsg;
                fromProtoMsg(message: _105.MsgSudoContractResponseProtoMsg): _105.MsgSudoContractResponse;
                toProto(message: _105.MsgSudoContractResponse): Uint8Array;
                toProtoMsg(message: _105.MsgSudoContractResponse): _105.MsgSudoContractResponseProtoMsg;
            };
            MsgPinCodes: {
                typeUrl: string;
                encode(message: _105.MsgPinCodes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgPinCodes;
                fromPartial(object: Partial<_105.MsgPinCodes>): _105.MsgPinCodes;
                fromAmino(object: _105.MsgPinCodesAmino): _105.MsgPinCodes;
                toAmino(message: _105.MsgPinCodes): _105.MsgPinCodesAmino;
                fromAminoMsg(object: _105.MsgPinCodesAminoMsg): _105.MsgPinCodes;
                toAminoMsg(message: _105.MsgPinCodes): _105.MsgPinCodesAminoMsg;
                fromProtoMsg(message: _105.MsgPinCodesProtoMsg): _105.MsgPinCodes;
                toProto(message: _105.MsgPinCodes): Uint8Array;
                toProtoMsg(message: _105.MsgPinCodes): _105.MsgPinCodesProtoMsg;
            };
            MsgPinCodesResponse: {
                typeUrl: string;
                encode(_: _105.MsgPinCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgPinCodesResponse;
                fromPartial(_: Partial<_105.MsgPinCodesResponse>): _105.MsgPinCodesResponse;
                fromAmino(_: _105.MsgPinCodesResponseAmino): _105.MsgPinCodesResponse;
                toAmino(_: _105.MsgPinCodesResponse): _105.MsgPinCodesResponseAmino;
                fromAminoMsg(object: _105.MsgPinCodesResponseAminoMsg): _105.MsgPinCodesResponse;
                toAminoMsg(message: _105.MsgPinCodesResponse): _105.MsgPinCodesResponseAminoMsg;
                fromProtoMsg(message: _105.MsgPinCodesResponseProtoMsg): _105.MsgPinCodesResponse;
                toProto(message: _105.MsgPinCodesResponse): Uint8Array;
                toProtoMsg(message: _105.MsgPinCodesResponse): _105.MsgPinCodesResponseProtoMsg;
            };
            MsgUnpinCodes: {
                typeUrl: string;
                encode(message: _105.MsgUnpinCodes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgUnpinCodes;
                fromPartial(object: Partial<_105.MsgUnpinCodes>): _105.MsgUnpinCodes;
                fromAmino(object: _105.MsgUnpinCodesAmino): _105.MsgUnpinCodes;
                toAmino(message: _105.MsgUnpinCodes): _105.MsgUnpinCodesAmino;
                fromAminoMsg(object: _105.MsgUnpinCodesAminoMsg): _105.MsgUnpinCodes;
                toAminoMsg(message: _105.MsgUnpinCodes): _105.MsgUnpinCodesAminoMsg;
                fromProtoMsg(message: _105.MsgUnpinCodesProtoMsg): _105.MsgUnpinCodes;
                toProto(message: _105.MsgUnpinCodes): Uint8Array;
                toProtoMsg(message: _105.MsgUnpinCodes): _105.MsgUnpinCodesProtoMsg;
            };
            MsgUnpinCodesResponse: {
                typeUrl: string;
                encode(_: _105.MsgUnpinCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgUnpinCodesResponse;
                fromPartial(_: Partial<_105.MsgUnpinCodesResponse>): _105.MsgUnpinCodesResponse;
                fromAmino(_: _105.MsgUnpinCodesResponseAmino): _105.MsgUnpinCodesResponse;
                toAmino(_: _105.MsgUnpinCodesResponse): _105.MsgUnpinCodesResponseAmino;
                fromAminoMsg(object: _105.MsgUnpinCodesResponseAminoMsg): _105.MsgUnpinCodesResponse;
                toAminoMsg(message: _105.MsgUnpinCodesResponse): _105.MsgUnpinCodesResponseAminoMsg;
                fromProtoMsg(message: _105.MsgUnpinCodesResponseProtoMsg): _105.MsgUnpinCodesResponse;
                toProto(message: _105.MsgUnpinCodesResponse): Uint8Array;
                toProtoMsg(message: _105.MsgUnpinCodesResponse): _105.MsgUnpinCodesResponseProtoMsg;
            };
            MsgStoreAndInstantiateContract: {
                typeUrl: string;
                encode(message: _105.MsgStoreAndInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgStoreAndInstantiateContract;
                fromPartial(object: Partial<_105.MsgStoreAndInstantiateContract>): _105.MsgStoreAndInstantiateContract;
                fromAmino(object: _105.MsgStoreAndInstantiateContractAmino): _105.MsgStoreAndInstantiateContract;
                toAmino(message: _105.MsgStoreAndInstantiateContract): _105.MsgStoreAndInstantiateContractAmino;
                fromAminoMsg(object: _105.MsgStoreAndInstantiateContractAminoMsg): _105.MsgStoreAndInstantiateContract;
                toAminoMsg(message: _105.MsgStoreAndInstantiateContract): _105.MsgStoreAndInstantiateContractAminoMsg;
                fromProtoMsg(message: _105.MsgStoreAndInstantiateContractProtoMsg): _105.MsgStoreAndInstantiateContract;
                toProto(message: _105.MsgStoreAndInstantiateContract): Uint8Array;
                toProtoMsg(message: _105.MsgStoreAndInstantiateContract): _105.MsgStoreAndInstantiateContractProtoMsg;
            };
            MsgStoreAndInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _105.MsgStoreAndInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgStoreAndInstantiateContractResponse;
                fromPartial(object: Partial<_105.MsgStoreAndInstantiateContractResponse>): _105.MsgStoreAndInstantiateContractResponse;
                fromAmino(object: _105.MsgStoreAndInstantiateContractResponseAmino): _105.MsgStoreAndInstantiateContractResponse;
                toAmino(message: _105.MsgStoreAndInstantiateContractResponse): _105.MsgStoreAndInstantiateContractResponseAmino;
                fromAminoMsg(object: _105.MsgStoreAndInstantiateContractResponseAminoMsg): _105.MsgStoreAndInstantiateContractResponse;
                toAminoMsg(message: _105.MsgStoreAndInstantiateContractResponse): _105.MsgStoreAndInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _105.MsgStoreAndInstantiateContractResponseProtoMsg): _105.MsgStoreAndInstantiateContractResponse;
                toProto(message: _105.MsgStoreAndInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _105.MsgStoreAndInstantiateContractResponse): _105.MsgStoreAndInstantiateContractResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                typeUrl: string;
                encode(message: _104.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryContractInfoRequest;
                fromPartial(object: Partial<_104.QueryContractInfoRequest>): _104.QueryContractInfoRequest;
                fromAmino(object: _104.QueryContractInfoRequestAmino): _104.QueryContractInfoRequest;
                toAmino(message: _104.QueryContractInfoRequest): _104.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _104.QueryContractInfoRequestAminoMsg): _104.QueryContractInfoRequest;
                toAminoMsg(message: _104.QueryContractInfoRequest): _104.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _104.QueryContractInfoRequestProtoMsg): _104.QueryContractInfoRequest;
                toProto(message: _104.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _104.QueryContractInfoRequest): _104.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                typeUrl: string;
                encode(message: _104.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryContractInfoResponse;
                fromPartial(object: Partial<_104.QueryContractInfoResponse>): _104.QueryContractInfoResponse;
                fromAmino(object: _104.QueryContractInfoResponseAmino): _104.QueryContractInfoResponse;
                toAmino(message: _104.QueryContractInfoResponse): _104.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _104.QueryContractInfoResponseAminoMsg): _104.QueryContractInfoResponse;
                toAminoMsg(message: _104.QueryContractInfoResponse): _104.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _104.QueryContractInfoResponseProtoMsg): _104.QueryContractInfoResponse;
                toProto(message: _104.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _104.QueryContractInfoResponse): _104.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                typeUrl: string;
                encode(message: _104.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryContractHistoryRequest;
                fromPartial(object: Partial<_104.QueryContractHistoryRequest>): _104.QueryContractHistoryRequest;
                fromAmino(object: _104.QueryContractHistoryRequestAmino): _104.QueryContractHistoryRequest;
                toAmino(message: _104.QueryContractHistoryRequest): _104.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _104.QueryContractHistoryRequestAminoMsg): _104.QueryContractHistoryRequest;
                toAminoMsg(message: _104.QueryContractHistoryRequest): _104.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _104.QueryContractHistoryRequestProtoMsg): _104.QueryContractHistoryRequest;
                toProto(message: _104.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _104.QueryContractHistoryRequest): _104.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                typeUrl: string;
                encode(message: _104.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryContractHistoryResponse;
                fromPartial(object: Partial<_104.QueryContractHistoryResponse>): _104.QueryContractHistoryResponse;
                fromAmino(object: _104.QueryContractHistoryResponseAmino): _104.QueryContractHistoryResponse;
                toAmino(message: _104.QueryContractHistoryResponse): _104.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _104.QueryContractHistoryResponseAminoMsg): _104.QueryContractHistoryResponse;
                toAminoMsg(message: _104.QueryContractHistoryResponse): _104.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _104.QueryContractHistoryResponseProtoMsg): _104.QueryContractHistoryResponse;
                toProto(message: _104.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _104.QueryContractHistoryResponse): _104.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                typeUrl: string;
                encode(message: _104.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryContractsByCodeRequest;
                fromPartial(object: Partial<_104.QueryContractsByCodeRequest>): _104.QueryContractsByCodeRequest;
                fromAmino(object: _104.QueryContractsByCodeRequestAmino): _104.QueryContractsByCodeRequest;
                toAmino(message: _104.QueryContractsByCodeRequest): _104.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _104.QueryContractsByCodeRequestAminoMsg): _104.QueryContractsByCodeRequest;
                toAminoMsg(message: _104.QueryContractsByCodeRequest): _104.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _104.QueryContractsByCodeRequestProtoMsg): _104.QueryContractsByCodeRequest;
                toProto(message: _104.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _104.QueryContractsByCodeRequest): _104.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                typeUrl: string;
                encode(message: _104.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryContractsByCodeResponse;
                fromPartial(object: Partial<_104.QueryContractsByCodeResponse>): _104.QueryContractsByCodeResponse;
                fromAmino(object: _104.QueryContractsByCodeResponseAmino): _104.QueryContractsByCodeResponse;
                toAmino(message: _104.QueryContractsByCodeResponse): _104.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _104.QueryContractsByCodeResponseAminoMsg): _104.QueryContractsByCodeResponse;
                toAminoMsg(message: _104.QueryContractsByCodeResponse): _104.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _104.QueryContractsByCodeResponseProtoMsg): _104.QueryContractsByCodeResponse;
                toProto(message: _104.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _104.QueryContractsByCodeResponse): _104.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                typeUrl: string;
                encode(message: _104.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryAllContractStateRequest;
                fromPartial(object: Partial<_104.QueryAllContractStateRequest>): _104.QueryAllContractStateRequest;
                fromAmino(object: _104.QueryAllContractStateRequestAmino): _104.QueryAllContractStateRequest;
                toAmino(message: _104.QueryAllContractStateRequest): _104.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _104.QueryAllContractStateRequestAminoMsg): _104.QueryAllContractStateRequest;
                toAminoMsg(message: _104.QueryAllContractStateRequest): _104.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _104.QueryAllContractStateRequestProtoMsg): _104.QueryAllContractStateRequest;
                toProto(message: _104.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _104.QueryAllContractStateRequest): _104.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                typeUrl: string;
                encode(message: _104.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryAllContractStateResponse;
                fromPartial(object: Partial<_104.QueryAllContractStateResponse>): _104.QueryAllContractStateResponse;
                fromAmino(object: _104.QueryAllContractStateResponseAmino): _104.QueryAllContractStateResponse;
                toAmino(message: _104.QueryAllContractStateResponse): _104.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _104.QueryAllContractStateResponseAminoMsg): _104.QueryAllContractStateResponse;
                toAminoMsg(message: _104.QueryAllContractStateResponse): _104.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _104.QueryAllContractStateResponseProtoMsg): _104.QueryAllContractStateResponse;
                toProto(message: _104.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _104.QueryAllContractStateResponse): _104.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                typeUrl: string;
                encode(message: _104.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryRawContractStateRequest;
                fromPartial(object: Partial<_104.QueryRawContractStateRequest>): _104.QueryRawContractStateRequest;
                fromAmino(object: _104.QueryRawContractStateRequestAmino): _104.QueryRawContractStateRequest;
                toAmino(message: _104.QueryRawContractStateRequest): _104.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _104.QueryRawContractStateRequestAminoMsg): _104.QueryRawContractStateRequest;
                toAminoMsg(message: _104.QueryRawContractStateRequest): _104.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _104.QueryRawContractStateRequestProtoMsg): _104.QueryRawContractStateRequest;
                toProto(message: _104.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _104.QueryRawContractStateRequest): _104.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                typeUrl: string;
                encode(message: _104.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryRawContractStateResponse;
                fromPartial(object: Partial<_104.QueryRawContractStateResponse>): _104.QueryRawContractStateResponse;
                fromAmino(object: _104.QueryRawContractStateResponseAmino): _104.QueryRawContractStateResponse;
                toAmino(message: _104.QueryRawContractStateResponse): _104.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _104.QueryRawContractStateResponseAminoMsg): _104.QueryRawContractStateResponse;
                toAminoMsg(message: _104.QueryRawContractStateResponse): _104.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _104.QueryRawContractStateResponseProtoMsg): _104.QueryRawContractStateResponse;
                toProto(message: _104.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _104.QueryRawContractStateResponse): _104.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                typeUrl: string;
                encode(message: _104.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QuerySmartContractStateRequest;
                fromPartial(object: Partial<_104.QuerySmartContractStateRequest>): _104.QuerySmartContractStateRequest;
                fromAmino(object: _104.QuerySmartContractStateRequestAmino): _104.QuerySmartContractStateRequest;
                toAmino(message: _104.QuerySmartContractStateRequest): _104.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _104.QuerySmartContractStateRequestAminoMsg): _104.QuerySmartContractStateRequest;
                toAminoMsg(message: _104.QuerySmartContractStateRequest): _104.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _104.QuerySmartContractStateRequestProtoMsg): _104.QuerySmartContractStateRequest;
                toProto(message: _104.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _104.QuerySmartContractStateRequest): _104.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                typeUrl: string;
                encode(message: _104.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QuerySmartContractStateResponse;
                fromPartial(object: Partial<_104.QuerySmartContractStateResponse>): _104.QuerySmartContractStateResponse;
                fromAmino(object: _104.QuerySmartContractStateResponseAmino): _104.QuerySmartContractStateResponse;
                toAmino(message: _104.QuerySmartContractStateResponse): _104.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _104.QuerySmartContractStateResponseAminoMsg): _104.QuerySmartContractStateResponse;
                toAminoMsg(message: _104.QuerySmartContractStateResponse): _104.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _104.QuerySmartContractStateResponseProtoMsg): _104.QuerySmartContractStateResponse;
                toProto(message: _104.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _104.QuerySmartContractStateResponse): _104.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                encode(message: _104.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryCodeRequest;
                fromPartial(object: Partial<_104.QueryCodeRequest>): _104.QueryCodeRequest;
                fromAmino(object: _104.QueryCodeRequestAmino): _104.QueryCodeRequest;
                toAmino(message: _104.QueryCodeRequest): _104.QueryCodeRequestAmino;
                fromAminoMsg(object: _104.QueryCodeRequestAminoMsg): _104.QueryCodeRequest;
                toAminoMsg(message: _104.QueryCodeRequest): _104.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _104.QueryCodeRequestProtoMsg): _104.QueryCodeRequest;
                toProto(message: _104.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _104.QueryCodeRequest): _104.QueryCodeRequestProtoMsg;
            };
            CodeInfoResponse: {
                typeUrl: string;
                encode(message: _104.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.CodeInfoResponse;
                fromPartial(object: Partial<_104.CodeInfoResponse>): _104.CodeInfoResponse;
                fromAmino(object: _104.CodeInfoResponseAmino): _104.CodeInfoResponse;
                toAmino(message: _104.CodeInfoResponse): _104.CodeInfoResponseAmino;
                fromAminoMsg(object: _104.CodeInfoResponseAminoMsg): _104.CodeInfoResponse;
                toAminoMsg(message: _104.CodeInfoResponse): _104.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _104.CodeInfoResponseProtoMsg): _104.CodeInfoResponse;
                toProto(message: _104.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _104.CodeInfoResponse): _104.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                encode(message: _104.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryCodeResponse;
                fromPartial(object: Partial<_104.QueryCodeResponse>): _104.QueryCodeResponse;
                fromAmino(object: _104.QueryCodeResponseAmino): _104.QueryCodeResponse;
                toAmino(message: _104.QueryCodeResponse): _104.QueryCodeResponseAmino;
                fromAminoMsg(object: _104.QueryCodeResponseAminoMsg): _104.QueryCodeResponse;
                toAminoMsg(message: _104.QueryCodeResponse): _104.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _104.QueryCodeResponseProtoMsg): _104.QueryCodeResponse;
                toProto(message: _104.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _104.QueryCodeResponse): _104.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                typeUrl: string;
                encode(message: _104.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryCodesRequest;
                fromPartial(object: Partial<_104.QueryCodesRequest>): _104.QueryCodesRequest;
                fromAmino(object: _104.QueryCodesRequestAmino): _104.QueryCodesRequest;
                toAmino(message: _104.QueryCodesRequest): _104.QueryCodesRequestAmino;
                fromAminoMsg(object: _104.QueryCodesRequestAminoMsg): _104.QueryCodesRequest;
                toAminoMsg(message: _104.QueryCodesRequest): _104.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _104.QueryCodesRequestProtoMsg): _104.QueryCodesRequest;
                toProto(message: _104.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _104.QueryCodesRequest): _104.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                typeUrl: string;
                encode(message: _104.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryCodesResponse;
                fromPartial(object: Partial<_104.QueryCodesResponse>): _104.QueryCodesResponse;
                fromAmino(object: _104.QueryCodesResponseAmino): _104.QueryCodesResponse;
                toAmino(message: _104.QueryCodesResponse): _104.QueryCodesResponseAmino;
                fromAminoMsg(object: _104.QueryCodesResponseAminoMsg): _104.QueryCodesResponse;
                toAminoMsg(message: _104.QueryCodesResponse): _104.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _104.QueryCodesResponseProtoMsg): _104.QueryCodesResponse;
                toProto(message: _104.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _104.QueryCodesResponse): _104.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                typeUrl: string;
                encode(message: _104.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryPinnedCodesRequest;
                fromPartial(object: Partial<_104.QueryPinnedCodesRequest>): _104.QueryPinnedCodesRequest;
                fromAmino(object: _104.QueryPinnedCodesRequestAmino): _104.QueryPinnedCodesRequest;
                toAmino(message: _104.QueryPinnedCodesRequest): _104.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _104.QueryPinnedCodesRequestAminoMsg): _104.QueryPinnedCodesRequest;
                toAminoMsg(message: _104.QueryPinnedCodesRequest): _104.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _104.QueryPinnedCodesRequestProtoMsg): _104.QueryPinnedCodesRequest;
                toProto(message: _104.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _104.QueryPinnedCodesRequest): _104.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                typeUrl: string;
                encode(message: _104.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryPinnedCodesResponse;
                fromPartial(object: Partial<_104.QueryPinnedCodesResponse>): _104.QueryPinnedCodesResponse;
                fromAmino(object: _104.QueryPinnedCodesResponseAmino): _104.QueryPinnedCodesResponse;
                toAmino(message: _104.QueryPinnedCodesResponse): _104.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _104.QueryPinnedCodesResponseAminoMsg): _104.QueryPinnedCodesResponse;
                toAminoMsg(message: _104.QueryPinnedCodesResponse): _104.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _104.QueryPinnedCodesResponseProtoMsg): _104.QueryPinnedCodesResponse;
                toProto(message: _104.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _104.QueryPinnedCodesResponse): _104.QueryPinnedCodesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _104.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryParamsRequest;
                fromPartial(_: Partial<_104.QueryParamsRequest>): _104.QueryParamsRequest;
                fromAmino(_: _104.QueryParamsRequestAmino): _104.QueryParamsRequest;
                toAmino(_: _104.QueryParamsRequest): _104.QueryParamsRequestAmino;
                fromAminoMsg(object: _104.QueryParamsRequestAminoMsg): _104.QueryParamsRequest;
                toAminoMsg(message: _104.QueryParamsRequest): _104.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _104.QueryParamsRequestProtoMsg): _104.QueryParamsRequest;
                toProto(message: _104.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _104.QueryParamsRequest): _104.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _104.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryParamsResponse;
                fromPartial(object: Partial<_104.QueryParamsResponse>): _104.QueryParamsResponse;
                fromAmino(object: _104.QueryParamsResponseAmino): _104.QueryParamsResponse;
                toAmino(message: _104.QueryParamsResponse): _104.QueryParamsResponseAmino;
                fromAminoMsg(object: _104.QueryParamsResponseAminoMsg): _104.QueryParamsResponse;
                toAminoMsg(message: _104.QueryParamsResponse): _104.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _104.QueryParamsResponseProtoMsg): _104.QueryParamsResponse;
                toProto(message: _104.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _104.QueryParamsResponse): _104.QueryParamsResponseProtoMsg;
            };
            QueryContractsByCreatorRequest: {
                typeUrl: string;
                encode(message: _104.QueryContractsByCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryContractsByCreatorRequest;
                fromPartial(object: Partial<_104.QueryContractsByCreatorRequest>): _104.QueryContractsByCreatorRequest;
                fromAmino(object: _104.QueryContractsByCreatorRequestAmino): _104.QueryContractsByCreatorRequest;
                toAmino(message: _104.QueryContractsByCreatorRequest): _104.QueryContractsByCreatorRequestAmino;
                fromAminoMsg(object: _104.QueryContractsByCreatorRequestAminoMsg): _104.QueryContractsByCreatorRequest;
                toAminoMsg(message: _104.QueryContractsByCreatorRequest): _104.QueryContractsByCreatorRequestAminoMsg;
                fromProtoMsg(message: _104.QueryContractsByCreatorRequestProtoMsg): _104.QueryContractsByCreatorRequest;
                toProto(message: _104.QueryContractsByCreatorRequest): Uint8Array;
                toProtoMsg(message: _104.QueryContractsByCreatorRequest): _104.QueryContractsByCreatorRequestProtoMsg;
            };
            QueryContractsByCreatorResponse: {
                typeUrl: string;
                encode(message: _104.QueryContractsByCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryContractsByCreatorResponse;
                fromPartial(object: Partial<_104.QueryContractsByCreatorResponse>): _104.QueryContractsByCreatorResponse;
                fromAmino(object: _104.QueryContractsByCreatorResponseAmino): _104.QueryContractsByCreatorResponse;
                toAmino(message: _104.QueryContractsByCreatorResponse): _104.QueryContractsByCreatorResponseAmino;
                fromAminoMsg(object: _104.QueryContractsByCreatorResponseAminoMsg): _104.QueryContractsByCreatorResponse;
                toAminoMsg(message: _104.QueryContractsByCreatorResponse): _104.QueryContractsByCreatorResponseAminoMsg;
                fromProtoMsg(message: _104.QueryContractsByCreatorResponseProtoMsg): _104.QueryContractsByCreatorResponse;
                toProto(message: _104.QueryContractsByCreatorResponse): Uint8Array;
                toProtoMsg(message: _104.QueryContractsByCreatorResponse): _104.QueryContractsByCreatorResponseProtoMsg;
            };
            StoreCodeProposal: {
                typeUrl: string;
                encode(message: _103.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.StoreCodeProposal;
                fromPartial(object: Partial<_103.StoreCodeProposal>): _103.StoreCodeProposal;
                fromAmino(object: _103.StoreCodeProposalAmino): _103.StoreCodeProposal;
                toAmino(message: _103.StoreCodeProposal): _103.StoreCodeProposalAmino;
                fromAminoMsg(object: _103.StoreCodeProposalAminoMsg): _103.StoreCodeProposal;
                toAminoMsg(message: _103.StoreCodeProposal): _103.StoreCodeProposalAminoMsg;
                fromProtoMsg(message: _103.StoreCodeProposalProtoMsg): _103.StoreCodeProposal;
                toProto(message: _103.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _103.StoreCodeProposal): _103.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                typeUrl: string;
                encode(message: _103.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.InstantiateContractProposal;
                fromPartial(object: Partial<_103.InstantiateContractProposal>): _103.InstantiateContractProposal;
                fromAmino(object: _103.InstantiateContractProposalAmino): _103.InstantiateContractProposal;
                toAmino(message: _103.InstantiateContractProposal): _103.InstantiateContractProposalAmino;
                fromAminoMsg(object: _103.InstantiateContractProposalAminoMsg): _103.InstantiateContractProposal;
                toAminoMsg(message: _103.InstantiateContractProposal): _103.InstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _103.InstantiateContractProposalProtoMsg): _103.InstantiateContractProposal;
                toProto(message: _103.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _103.InstantiateContractProposal): _103.InstantiateContractProposalProtoMsg;
            };
            InstantiateContract2Proposal: {
                typeUrl: string;
                encode(message: _103.InstantiateContract2Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.InstantiateContract2Proposal;
                fromPartial(object: Partial<_103.InstantiateContract2Proposal>): _103.InstantiateContract2Proposal;
                fromAmino(object: _103.InstantiateContract2ProposalAmino): _103.InstantiateContract2Proposal;
                toAmino(message: _103.InstantiateContract2Proposal): _103.InstantiateContract2ProposalAmino;
                fromAminoMsg(object: _103.InstantiateContract2ProposalAminoMsg): _103.InstantiateContract2Proposal;
                toAminoMsg(message: _103.InstantiateContract2Proposal): _103.InstantiateContract2ProposalAminoMsg;
                fromProtoMsg(message: _103.InstantiateContract2ProposalProtoMsg): _103.InstantiateContract2Proposal;
                toProto(message: _103.InstantiateContract2Proposal): Uint8Array;
                toProtoMsg(message: _103.InstantiateContract2Proposal): _103.InstantiateContract2ProposalProtoMsg;
            };
            MigrateContractProposal: {
                typeUrl: string;
                encode(message: _103.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.MigrateContractProposal;
                fromPartial(object: Partial<_103.MigrateContractProposal>): _103.MigrateContractProposal;
                fromAmino(object: _103.MigrateContractProposalAmino): _103.MigrateContractProposal;
                toAmino(message: _103.MigrateContractProposal): _103.MigrateContractProposalAmino;
                fromAminoMsg(object: _103.MigrateContractProposalAminoMsg): _103.MigrateContractProposal;
                toAminoMsg(message: _103.MigrateContractProposal): _103.MigrateContractProposalAminoMsg;
                fromProtoMsg(message: _103.MigrateContractProposalProtoMsg): _103.MigrateContractProposal;
                toProto(message: _103.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _103.MigrateContractProposal): _103.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                typeUrl: string;
                encode(message: _103.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.SudoContractProposal;
                fromPartial(object: Partial<_103.SudoContractProposal>): _103.SudoContractProposal;
                fromAmino(object: _103.SudoContractProposalAmino): _103.SudoContractProposal;
                toAmino(message: _103.SudoContractProposal): _103.SudoContractProposalAmino;
                fromAminoMsg(object: _103.SudoContractProposalAminoMsg): _103.SudoContractProposal;
                toAminoMsg(message: _103.SudoContractProposal): _103.SudoContractProposalAminoMsg;
                fromProtoMsg(message: _103.SudoContractProposalProtoMsg): _103.SudoContractProposal;
                toProto(message: _103.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _103.SudoContractProposal): _103.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                typeUrl: string;
                encode(message: _103.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ExecuteContractProposal;
                fromPartial(object: Partial<_103.ExecuteContractProposal>): _103.ExecuteContractProposal;
                fromAmino(object: _103.ExecuteContractProposalAmino): _103.ExecuteContractProposal;
                toAmino(message: _103.ExecuteContractProposal): _103.ExecuteContractProposalAmino;
                fromAminoMsg(object: _103.ExecuteContractProposalAminoMsg): _103.ExecuteContractProposal;
                toAminoMsg(message: _103.ExecuteContractProposal): _103.ExecuteContractProposalAminoMsg;
                fromProtoMsg(message: _103.ExecuteContractProposalProtoMsg): _103.ExecuteContractProposal;
                toProto(message: _103.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _103.ExecuteContractProposal): _103.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                typeUrl: string;
                encode(message: _103.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.UpdateAdminProposal;
                fromPartial(object: Partial<_103.UpdateAdminProposal>): _103.UpdateAdminProposal;
                fromAmino(object: _103.UpdateAdminProposalAmino): _103.UpdateAdminProposal;
                toAmino(message: _103.UpdateAdminProposal): _103.UpdateAdminProposalAmino;
                fromAminoMsg(object: _103.UpdateAdminProposalAminoMsg): _103.UpdateAdminProposal;
                toAminoMsg(message: _103.UpdateAdminProposal): _103.UpdateAdminProposalAminoMsg;
                fromProtoMsg(message: _103.UpdateAdminProposalProtoMsg): _103.UpdateAdminProposal;
                toProto(message: _103.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _103.UpdateAdminProposal): _103.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                typeUrl: string;
                encode(message: _103.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ClearAdminProposal;
                fromPartial(object: Partial<_103.ClearAdminProposal>): _103.ClearAdminProposal;
                fromAmino(object: _103.ClearAdminProposalAmino): _103.ClearAdminProposal;
                toAmino(message: _103.ClearAdminProposal): _103.ClearAdminProposalAmino;
                fromAminoMsg(object: _103.ClearAdminProposalAminoMsg): _103.ClearAdminProposal;
                toAminoMsg(message: _103.ClearAdminProposal): _103.ClearAdminProposalAminoMsg;
                fromProtoMsg(message: _103.ClearAdminProposalProtoMsg): _103.ClearAdminProposal;
                toProto(message: _103.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _103.ClearAdminProposal): _103.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                typeUrl: string;
                encode(message: _103.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.PinCodesProposal;
                fromPartial(object: Partial<_103.PinCodesProposal>): _103.PinCodesProposal;
                fromAmino(object: _103.PinCodesProposalAmino): _103.PinCodesProposal;
                toAmino(message: _103.PinCodesProposal): _103.PinCodesProposalAmino;
                fromAminoMsg(object: _103.PinCodesProposalAminoMsg): _103.PinCodesProposal;
                toAminoMsg(message: _103.PinCodesProposal): _103.PinCodesProposalAminoMsg;
                fromProtoMsg(message: _103.PinCodesProposalProtoMsg): _103.PinCodesProposal;
                toProto(message: _103.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _103.PinCodesProposal): _103.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                typeUrl: string;
                encode(message: _103.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.UnpinCodesProposal;
                fromPartial(object: Partial<_103.UnpinCodesProposal>): _103.UnpinCodesProposal;
                fromAmino(object: _103.UnpinCodesProposalAmino): _103.UnpinCodesProposal;
                toAmino(message: _103.UnpinCodesProposal): _103.UnpinCodesProposalAmino;
                fromAminoMsg(object: _103.UnpinCodesProposalAminoMsg): _103.UnpinCodesProposal;
                toAminoMsg(message: _103.UnpinCodesProposal): _103.UnpinCodesProposalAminoMsg;
                fromProtoMsg(message: _103.UnpinCodesProposalProtoMsg): _103.UnpinCodesProposal;
                toProto(message: _103.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _103.UnpinCodesProposal): _103.UnpinCodesProposalProtoMsg;
            };
            AccessConfigUpdate: {
                typeUrl: string;
                encode(message: _103.AccessConfigUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.AccessConfigUpdate;
                fromPartial(object: Partial<_103.AccessConfigUpdate>): _103.AccessConfigUpdate;
                fromAmino(object: _103.AccessConfigUpdateAmino): _103.AccessConfigUpdate;
                toAmino(message: _103.AccessConfigUpdate): _103.AccessConfigUpdateAmino;
                fromAminoMsg(object: _103.AccessConfigUpdateAminoMsg): _103.AccessConfigUpdate;
                toAminoMsg(message: _103.AccessConfigUpdate): _103.AccessConfigUpdateAminoMsg;
                fromProtoMsg(message: _103.AccessConfigUpdateProtoMsg): _103.AccessConfigUpdate;
                toProto(message: _103.AccessConfigUpdate): Uint8Array;
                toProtoMsg(message: _103.AccessConfigUpdate): _103.AccessConfigUpdateProtoMsg;
            };
            UpdateInstantiateConfigProposal: {
                typeUrl: string;
                encode(message: _103.UpdateInstantiateConfigProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.UpdateInstantiateConfigProposal;
                fromPartial(object: Partial<_103.UpdateInstantiateConfigProposal>): _103.UpdateInstantiateConfigProposal;
                fromAmino(object: _103.UpdateInstantiateConfigProposalAmino): _103.UpdateInstantiateConfigProposal;
                toAmino(message: _103.UpdateInstantiateConfigProposal): _103.UpdateInstantiateConfigProposalAmino;
                fromAminoMsg(object: _103.UpdateInstantiateConfigProposalAminoMsg): _103.UpdateInstantiateConfigProposal;
                toAminoMsg(message: _103.UpdateInstantiateConfigProposal): _103.UpdateInstantiateConfigProposalAminoMsg;
                fromProtoMsg(message: _103.UpdateInstantiateConfigProposalProtoMsg): _103.UpdateInstantiateConfigProposal;
                toProto(message: _103.UpdateInstantiateConfigProposal): Uint8Array;
                toProtoMsg(message: _103.UpdateInstantiateConfigProposal): _103.UpdateInstantiateConfigProposalProtoMsg;
            };
            StoreAndInstantiateContractProposal: {
                typeUrl: string;
                encode(message: _103.StoreAndInstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.StoreAndInstantiateContractProposal;
                fromPartial(object: Partial<_103.StoreAndInstantiateContractProposal>): _103.StoreAndInstantiateContractProposal;
                fromAmino(object: _103.StoreAndInstantiateContractProposalAmino): _103.StoreAndInstantiateContractProposal;
                toAmino(message: _103.StoreAndInstantiateContractProposal): _103.StoreAndInstantiateContractProposalAmino;
                fromAminoMsg(object: _103.StoreAndInstantiateContractProposalAminoMsg): _103.StoreAndInstantiateContractProposal;
                toAminoMsg(message: _103.StoreAndInstantiateContractProposal): _103.StoreAndInstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _103.StoreAndInstantiateContractProposalProtoMsg): _103.StoreAndInstantiateContractProposal;
                toProto(message: _103.StoreAndInstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _103.StoreAndInstantiateContractProposal): _103.StoreAndInstantiateContractProposalProtoMsg;
            };
            MsgIBCSend: {
                typeUrl: string;
                encode(message: _102.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgIBCSend;
                fromPartial(object: Partial<_102.MsgIBCSend>): _102.MsgIBCSend;
                fromAmino(object: _102.MsgIBCSendAmino): _102.MsgIBCSend;
                toAmino(message: _102.MsgIBCSend): _102.MsgIBCSendAmino;
                fromAminoMsg(object: _102.MsgIBCSendAminoMsg): _102.MsgIBCSend;
                toAminoMsg(message: _102.MsgIBCSend): _102.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _102.MsgIBCSendProtoMsg): _102.MsgIBCSend;
                toProto(message: _102.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _102.MsgIBCSend): _102.MsgIBCSendProtoMsg;
            };
            MsgIBCSendResponse: {
                typeUrl: string;
                encode(message: _102.MsgIBCSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgIBCSendResponse;
                fromPartial(object: Partial<_102.MsgIBCSendResponse>): _102.MsgIBCSendResponse;
                fromAmino(object: _102.MsgIBCSendResponseAmino): _102.MsgIBCSendResponse;
                toAmino(message: _102.MsgIBCSendResponse): _102.MsgIBCSendResponseAmino;
                fromAminoMsg(object: _102.MsgIBCSendResponseAminoMsg): _102.MsgIBCSendResponse;
                toAminoMsg(message: _102.MsgIBCSendResponse): _102.MsgIBCSendResponseAminoMsg;
                fromProtoMsg(message: _102.MsgIBCSendResponseProtoMsg): _102.MsgIBCSendResponse;
                toProto(message: _102.MsgIBCSendResponse): Uint8Array;
                toProtoMsg(message: _102.MsgIBCSendResponse): _102.MsgIBCSendResponseProtoMsg;
            };
            MsgIBCCloseChannel: {
                typeUrl: string;
                encode(message: _102.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgIBCCloseChannel;
                fromPartial(object: Partial<_102.MsgIBCCloseChannel>): _102.MsgIBCCloseChannel;
                fromAmino(object: _102.MsgIBCCloseChannelAmino): _102.MsgIBCCloseChannel;
                toAmino(message: _102.MsgIBCCloseChannel): _102.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _102.MsgIBCCloseChannelAminoMsg): _102.MsgIBCCloseChannel;
                toAminoMsg(message: _102.MsgIBCCloseChannel): _102.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _102.MsgIBCCloseChannelProtoMsg): _102.MsgIBCCloseChannel;
                toProto(message: _102.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _102.MsgIBCCloseChannel): _102.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _101.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.GenesisState;
                fromPartial(object: Partial<_101.GenesisState>): _101.GenesisState;
                fromAmino(object: _101.GenesisStateAmino): _101.GenesisState;
                toAmino(message: _101.GenesisState): _101.GenesisStateAmino;
                fromAminoMsg(object: _101.GenesisStateAminoMsg): _101.GenesisState;
                toAminoMsg(message: _101.GenesisState): _101.GenesisStateAminoMsg;
                fromProtoMsg(message: _101.GenesisStateProtoMsg): _101.GenesisState;
                toProto(message: _101.GenesisState): Uint8Array;
                toProtoMsg(message: _101.GenesisState): _101.GenesisStateProtoMsg;
            };
            Code: {
                typeUrl: string;
                encode(message: _101.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Code;
                fromPartial(object: Partial<_101.Code>): _101.Code;
                fromAmino(object: _101.CodeAmino): _101.Code;
                toAmino(message: _101.Code): _101.CodeAmino;
                fromAminoMsg(object: _101.CodeAminoMsg): _101.Code;
                toAminoMsg(message: _101.Code): _101.CodeAminoMsg;
                fromProtoMsg(message: _101.CodeProtoMsg): _101.Code;
                toProto(message: _101.Code): Uint8Array;
                toProtoMsg(message: _101.Code): _101.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                encode(message: _101.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Contract;
                fromPartial(object: Partial<_101.Contract>): _101.Contract;
                fromAmino(object: _101.ContractAmino): _101.Contract;
                toAmino(message: _101.Contract): _101.ContractAmino;
                fromAminoMsg(object: _101.ContractAminoMsg): _101.Contract;
                toAminoMsg(message: _101.Contract): _101.ContractAminoMsg;
                fromProtoMsg(message: _101.ContractProtoMsg): _101.Contract;
                toProto(message: _101.Contract): Uint8Array;
                toProtoMsg(message: _101.Contract): _101.ContractProtoMsg;
            };
            Sequence: {
                typeUrl: string;
                encode(message: _101.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Sequence;
                fromPartial(object: Partial<_101.Sequence>): _101.Sequence;
                fromAmino(object: _101.SequenceAmino): _101.Sequence;
                toAmino(message: _101.Sequence): _101.SequenceAmino;
                fromAminoMsg(object: _101.SequenceAminoMsg): _101.Sequence;
                toAminoMsg(message: _101.Sequence): _101.SequenceAminoMsg;
                fromProtoMsg(message: _101.SequenceProtoMsg): _101.Sequence;
                toProto(message: _101.Sequence): Uint8Array;
                toProtoMsg(message: _101.Sequence): _101.SequenceProtoMsg;
            };
            ContractExecutionAuthorization: {
                typeUrl: string;
                encode(message: _100.ContractExecutionAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.ContractExecutionAuthorization;
                fromPartial(object: Partial<_100.ContractExecutionAuthorization>): _100.ContractExecutionAuthorization;
                fromAmino(object: _100.ContractExecutionAuthorizationAmino): _100.ContractExecutionAuthorization;
                toAmino(message: _100.ContractExecutionAuthorization): _100.ContractExecutionAuthorizationAmino;
                fromAminoMsg(object: _100.ContractExecutionAuthorizationAminoMsg): _100.ContractExecutionAuthorization;
                toAminoMsg(message: _100.ContractExecutionAuthorization): _100.ContractExecutionAuthorizationAminoMsg;
                fromProtoMsg(message: _100.ContractExecutionAuthorizationProtoMsg): _100.ContractExecutionAuthorization;
                toProto(message: _100.ContractExecutionAuthorization): Uint8Array;
                toProtoMsg(message: _100.ContractExecutionAuthorization): _100.ContractExecutionAuthorizationProtoMsg;
            };
            ContractMigrationAuthorization: {
                typeUrl: string;
                encode(message: _100.ContractMigrationAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.ContractMigrationAuthorization;
                fromPartial(object: Partial<_100.ContractMigrationAuthorization>): _100.ContractMigrationAuthorization;
                fromAmino(object: _100.ContractMigrationAuthorizationAmino): _100.ContractMigrationAuthorization;
                toAmino(message: _100.ContractMigrationAuthorization): _100.ContractMigrationAuthorizationAmino;
                fromAminoMsg(object: _100.ContractMigrationAuthorizationAminoMsg): _100.ContractMigrationAuthorization;
                toAminoMsg(message: _100.ContractMigrationAuthorization): _100.ContractMigrationAuthorizationAminoMsg;
                fromProtoMsg(message: _100.ContractMigrationAuthorizationProtoMsg): _100.ContractMigrationAuthorization;
                toProto(message: _100.ContractMigrationAuthorization): Uint8Array;
                toProtoMsg(message: _100.ContractMigrationAuthorization): _100.ContractMigrationAuthorizationProtoMsg;
            };
            ContractGrant: {
                typeUrl: string;
                encode(message: _100.ContractGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.ContractGrant;
                fromPartial(object: Partial<_100.ContractGrant>): _100.ContractGrant;
                fromAmino(object: _100.ContractGrantAmino): _100.ContractGrant;
                toAmino(message: _100.ContractGrant): _100.ContractGrantAmino;
                fromAminoMsg(object: _100.ContractGrantAminoMsg): _100.ContractGrant;
                toAminoMsg(message: _100.ContractGrant): _100.ContractGrantAminoMsg;
                fromProtoMsg(message: _100.ContractGrantProtoMsg): _100.ContractGrant;
                toProto(message: _100.ContractGrant): Uint8Array;
                toProtoMsg(message: _100.ContractGrant): _100.ContractGrantProtoMsg;
            };
            MaxCallsLimit: {
                typeUrl: string;
                encode(message: _100.MaxCallsLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MaxCallsLimit;
                fromPartial(object: Partial<_100.MaxCallsLimit>): _100.MaxCallsLimit;
                fromAmino(object: _100.MaxCallsLimitAmino): _100.MaxCallsLimit;
                toAmino(message: _100.MaxCallsLimit): _100.MaxCallsLimitAmino;
                fromAminoMsg(object: _100.MaxCallsLimitAminoMsg): _100.MaxCallsLimit;
                toAminoMsg(message: _100.MaxCallsLimit): _100.MaxCallsLimitAminoMsg;
                fromProtoMsg(message: _100.MaxCallsLimitProtoMsg): _100.MaxCallsLimit;
                toProto(message: _100.MaxCallsLimit): Uint8Array;
                toProtoMsg(message: _100.MaxCallsLimit): _100.MaxCallsLimitProtoMsg;
            };
            MaxFundsLimit: {
                typeUrl: string;
                encode(message: _100.MaxFundsLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MaxFundsLimit;
                fromPartial(object: Partial<_100.MaxFundsLimit>): _100.MaxFundsLimit;
                fromAmino(object: _100.MaxFundsLimitAmino): _100.MaxFundsLimit;
                toAmino(message: _100.MaxFundsLimit): _100.MaxFundsLimitAmino;
                fromAminoMsg(object: _100.MaxFundsLimitAminoMsg): _100.MaxFundsLimit;
                toAminoMsg(message: _100.MaxFundsLimit): _100.MaxFundsLimitAminoMsg;
                fromProtoMsg(message: _100.MaxFundsLimitProtoMsg): _100.MaxFundsLimit;
                toProto(message: _100.MaxFundsLimit): Uint8Array;
                toProtoMsg(message: _100.MaxFundsLimit): _100.MaxFundsLimitProtoMsg;
            };
            CombinedLimit: {
                typeUrl: string;
                encode(message: _100.CombinedLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.CombinedLimit;
                fromPartial(object: Partial<_100.CombinedLimit>): _100.CombinedLimit;
                fromAmino(object: _100.CombinedLimitAmino): _100.CombinedLimit;
                toAmino(message: _100.CombinedLimit): _100.CombinedLimitAmino;
                fromAminoMsg(object: _100.CombinedLimitAminoMsg): _100.CombinedLimit;
                toAminoMsg(message: _100.CombinedLimit): _100.CombinedLimitAminoMsg;
                fromProtoMsg(message: _100.CombinedLimitProtoMsg): _100.CombinedLimit;
                toProto(message: _100.CombinedLimit): Uint8Array;
                toProtoMsg(message: _100.CombinedLimit): _100.CombinedLimitProtoMsg;
            };
            AllowAllMessagesFilter: {
                typeUrl: string;
                encode(_: _100.AllowAllMessagesFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.AllowAllMessagesFilter;
                fromPartial(_: Partial<_100.AllowAllMessagesFilter>): _100.AllowAllMessagesFilter;
                fromAmino(_: _100.AllowAllMessagesFilterAmino): _100.AllowAllMessagesFilter;
                toAmino(_: _100.AllowAllMessagesFilter): _100.AllowAllMessagesFilterAmino;
                fromAminoMsg(object: _100.AllowAllMessagesFilterAminoMsg): _100.AllowAllMessagesFilter;
                toAminoMsg(message: _100.AllowAllMessagesFilter): _100.AllowAllMessagesFilterAminoMsg;
                fromProtoMsg(message: _100.AllowAllMessagesFilterProtoMsg): _100.AllowAllMessagesFilter;
                toProto(message: _100.AllowAllMessagesFilter): Uint8Array;
                toProtoMsg(message: _100.AllowAllMessagesFilter): _100.AllowAllMessagesFilterProtoMsg;
            };
            AcceptedMessageKeysFilter: {
                typeUrl: string;
                encode(message: _100.AcceptedMessageKeysFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.AcceptedMessageKeysFilter;
                fromPartial(object: Partial<_100.AcceptedMessageKeysFilter>): _100.AcceptedMessageKeysFilter;
                fromAmino(object: _100.AcceptedMessageKeysFilterAmino): _100.AcceptedMessageKeysFilter;
                toAmino(message: _100.AcceptedMessageKeysFilter): _100.AcceptedMessageKeysFilterAmino;
                fromAminoMsg(object: _100.AcceptedMessageKeysFilterAminoMsg): _100.AcceptedMessageKeysFilter;
                toAminoMsg(message: _100.AcceptedMessageKeysFilter): _100.AcceptedMessageKeysFilterAminoMsg;
                fromProtoMsg(message: _100.AcceptedMessageKeysFilterProtoMsg): _100.AcceptedMessageKeysFilter;
                toProto(message: _100.AcceptedMessageKeysFilter): Uint8Array;
                toProtoMsg(message: _100.AcceptedMessageKeysFilter): _100.AcceptedMessageKeysFilterProtoMsg;
            };
            AcceptedMessagesFilter: {
                typeUrl: string;
                encode(message: _100.AcceptedMessagesFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.AcceptedMessagesFilter;
                fromPartial(object: Partial<_100.AcceptedMessagesFilter>): _100.AcceptedMessagesFilter;
                fromAmino(object: _100.AcceptedMessagesFilterAmino): _100.AcceptedMessagesFilter;
                toAmino(message: _100.AcceptedMessagesFilter): _100.AcceptedMessagesFilterAmino;
                fromAminoMsg(object: _100.AcceptedMessagesFilterAminoMsg): _100.AcceptedMessagesFilter;
                toAminoMsg(message: _100.AcceptedMessagesFilter): _100.AcceptedMessagesFilterAminoMsg;
                fromProtoMsg(message: _100.AcceptedMessagesFilterProtoMsg): _100.AcceptedMessagesFilter;
                toProto(message: _100.AcceptedMessagesFilter): Uint8Array;
                toProtoMsg(message: _100.AcceptedMessagesFilter): _100.AcceptedMessagesFilterProtoMsg;
            };
            Cosmwasm_wasmv1ContractAuthzLimitX_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _100.MaxCallsLimit | _100.MaxFundsLimit | _100.CombinedLimit;
            Cosmwasm_wasmv1ContractAuthzLimitX_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractAuthzLimitX_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmwasm_wasmv1ContractAuthzFilterX_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _100.AllowAllMessagesFilter | _100.AcceptedMessageKeysFilter | _100.AcceptedMessagesFilter;
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
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
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
                    v1: _265.MsgClientImpl;
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
                        contractInfo(request: _104.QueryContractInfoRequest): Promise<_104.QueryContractInfoResponse>;
                        contractHistory(request: _104.QueryContractHistoryRequest): Promise<_104.QueryContractHistoryResponse>;
                        contractsByCode(request: _104.QueryContractsByCodeRequest): Promise<_104.QueryContractsByCodeResponse>;
                        allContractState(request: _104.QueryAllContractStateRequest): Promise<_104.QueryAllContractStateResponse>;
                        rawContractState(request: _104.QueryRawContractStateRequest): Promise<_104.QueryRawContractStateResponse>;
                        smartContractState(request: _104.QuerySmartContractStateRequest): Promise<_104.QuerySmartContractStateResponse>;
                        code(request: _104.QueryCodeRequest): Promise<_104.QueryCodeResponse>;
                        codes(request?: _104.QueryCodesRequest): Promise<_104.QueryCodesResponse>;
                        pinnedCodes(request?: _104.QueryPinnedCodesRequest): Promise<_104.QueryPinnedCodesResponse>;
                        params(request?: _104.QueryParamsRequest): Promise<_104.QueryParamsResponse>;
                        contractsByCreator(request: _104.QueryContractsByCreatorRequest): Promise<_104.QueryContractsByCreatorResponse>;
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
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
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
                    v1: _263.LCDQueryClient;
                };
            };
        }>;
    };
}
