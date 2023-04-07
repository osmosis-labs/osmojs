import * as _97 from "./wasm/v1/authz";
import * as _98 from "./wasm/v1/genesis";
import * as _99 from "./wasm/v1/ibc";
import * as _100 from "./wasm/v1/proposal";
import * as _101 from "./wasm/v1/query";
import * as _102 from "./wasm/v1/tx";
import * as _103 from "./wasm/v1/types";
import * as _258 from "./wasm/v1/query.lcd";
import * as _259 from "./wasm/v1/query.rpc.Query";
import * as _260 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _260.MsgClientImpl;
            QueryClientImpl: typeof _259.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _101.QueryContractInfoRequest): Promise<_101.QueryContractInfoResponse>;
                contractHistory(request: _101.QueryContractHistoryRequest): Promise<_101.QueryContractHistoryResponse>;
                contractsByCode(request: _101.QueryContractsByCodeRequest): Promise<_101.QueryContractsByCodeResponse>;
                allContractState(request: _101.QueryAllContractStateRequest): Promise<_101.QueryAllContractStateResponse>;
                rawContractState(request: _101.QueryRawContractStateRequest): Promise<_101.QueryRawContractStateResponse>;
                smartContractState(request: _101.QuerySmartContractStateRequest): Promise<_101.QuerySmartContractStateResponse>;
                code(request: _101.QueryCodeRequest): Promise<_101.QueryCodeResponse>;
                codes(request?: _101.QueryCodesRequest): Promise<_101.QueryCodesResponse>;
                pinnedCodes(request?: _101.QueryPinnedCodesRequest): Promise<_101.QueryPinnedCodesResponse>;
                params(request?: _101.QueryParamsRequest): Promise<_101.QueryParamsResponse>;
                contractsByCreator(request: _101.QueryContractsByCreatorRequest): Promise<_101.QueryContractsByCreatorResponse>;
            };
            LCDQueryClient: typeof _258.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _102.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _102.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _102.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _102.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _102.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _102.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _102.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateInstantiateConfig(value: _102.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _102.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sudoContract(value: _102.MsgSudoContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pinCodes(value: _102.MsgPinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unpinCodes(value: _102.MsgUnpinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndInstantiateContract(value: _102.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _102.MsgStoreCode): {
                        typeUrl: string;
                        value: _102.MsgStoreCode;
                    };
                    instantiateContract(value: _102.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _102.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _102.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _102.MsgInstantiateContract2;
                    };
                    executeContract(value: _102.MsgExecuteContract): {
                        typeUrl: string;
                        value: _102.MsgExecuteContract;
                    };
                    migrateContract(value: _102.MsgMigrateContract): {
                        typeUrl: string;
                        value: _102.MsgMigrateContract;
                    };
                    updateAdmin(value: _102.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _102.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _102.MsgClearAdmin): {
                        typeUrl: string;
                        value: _102.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _102.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _102.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _102.MsgUpdateParams): {
                        typeUrl: string;
                        value: _102.MsgUpdateParams;
                    };
                    sudoContract(value: _102.MsgSudoContract): {
                        typeUrl: string;
                        value: _102.MsgSudoContract;
                    };
                    pinCodes(value: _102.MsgPinCodes): {
                        typeUrl: string;
                        value: _102.MsgPinCodes;
                    };
                    unpinCodes(value: _102.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _102.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _102.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _102.MsgStoreAndInstantiateContract;
                    };
                };
                fromPartial: {
                    storeCode(value: _102.MsgStoreCode): {
                        typeUrl: string;
                        value: _102.MsgStoreCode;
                    };
                    instantiateContract(value: _102.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _102.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _102.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _102.MsgInstantiateContract2;
                    };
                    executeContract(value: _102.MsgExecuteContract): {
                        typeUrl: string;
                        value: _102.MsgExecuteContract;
                    };
                    migrateContract(value: _102.MsgMigrateContract): {
                        typeUrl: string;
                        value: _102.MsgMigrateContract;
                    };
                    updateAdmin(value: _102.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _102.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _102.MsgClearAdmin): {
                        typeUrl: string;
                        value: _102.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _102.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _102.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _102.MsgUpdateParams): {
                        typeUrl: string;
                        value: _102.MsgUpdateParams;
                    };
                    sudoContract(value: _102.MsgSudoContract): {
                        typeUrl: string;
                        value: _102.MsgSudoContract;
                    };
                    pinCodes(value: _102.MsgPinCodes): {
                        typeUrl: string;
                        value: _102.MsgPinCodes;
                    };
                    unpinCodes(value: _102.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _102.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _102.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _102.MsgStoreAndInstantiateContract;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _102.MsgStoreCode) => _102.MsgStoreCodeAmino;
                    fromAmino: (object: _102.MsgStoreCodeAmino) => _102.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _102.MsgInstantiateContract) => _102.MsgInstantiateContractAmino;
                    fromAmino: (object: _102.MsgInstantiateContractAmino) => _102.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: (message: _102.MsgInstantiateContract2) => _102.MsgInstantiateContract2Amino;
                    fromAmino: (object: _102.MsgInstantiateContract2Amino) => _102.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _102.MsgExecuteContract) => _102.MsgExecuteContractAmino;
                    fromAmino: (object: _102.MsgExecuteContractAmino) => _102.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _102.MsgMigrateContract) => _102.MsgMigrateContractAmino;
                    fromAmino: (object: _102.MsgMigrateContractAmino) => _102.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _102.MsgUpdateAdmin) => _102.MsgUpdateAdminAmino;
                    fromAmino: (object: _102.MsgUpdateAdminAmino) => _102.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _102.MsgClearAdmin) => _102.MsgClearAdminAmino;
                    fromAmino: (object: _102.MsgClearAdminAmino) => _102.MsgClearAdmin;
                };
                "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
                    aminoType: string;
                    toAmino: (message: _102.MsgUpdateInstantiateConfig) => _102.MsgUpdateInstantiateConfigAmino;
                    fromAmino: (object: _102.MsgUpdateInstantiateConfigAmino) => _102.MsgUpdateInstantiateConfig;
                };
                "/cosmwasm.wasm.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _102.MsgUpdateParams) => _102.MsgUpdateParamsAmino;
                    fromAmino: (object: _102.MsgUpdateParamsAmino) => _102.MsgUpdateParams;
                };
                "/cosmwasm.wasm.v1.MsgSudoContract": {
                    aminoType: string;
                    toAmino: (message: _102.MsgSudoContract) => _102.MsgSudoContractAmino;
                    fromAmino: (object: _102.MsgSudoContractAmino) => _102.MsgSudoContract;
                };
                "/cosmwasm.wasm.v1.MsgPinCodes": {
                    aminoType: string;
                    toAmino: (message: _102.MsgPinCodes) => _102.MsgPinCodesAmino;
                    fromAmino: (object: _102.MsgPinCodesAmino) => _102.MsgPinCodes;
                };
                "/cosmwasm.wasm.v1.MsgUnpinCodes": {
                    aminoType: string;
                    toAmino: (message: _102.MsgUnpinCodes) => _102.MsgUnpinCodesAmino;
                    fromAmino: (object: _102.MsgUnpinCodesAmino) => _102.MsgUnpinCodes;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _102.MsgStoreAndInstantiateContract) => _102.MsgStoreAndInstantiateContractAmino;
                    fromAmino: (object: _102.MsgStoreAndInstantiateContractAmino) => _102.MsgStoreAndInstantiateContract;
                };
            };
            accessTypeFromJSON(object: any): _103.AccessType;
            accessTypeToJSON(object: _103.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _103.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _103.ContractCodeHistoryOperationType): string;
            AccessType: typeof _103.AccessType;
            AccessTypeSDKType: typeof _103.AccessType;
            AccessTypeAmino: typeof _103.AccessType;
            ContractCodeHistoryOperationType: typeof _103.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _103.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _103.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                typeUrl: string;
                encode(message: _103.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.AccessTypeParam;
                fromPartial(object: Partial<_103.AccessTypeParam>): _103.AccessTypeParam;
                fromAmino(object: _103.AccessTypeParamAmino): _103.AccessTypeParam;
                toAmino(message: _103.AccessTypeParam): _103.AccessTypeParamAmino;
                fromAminoMsg(object: _103.AccessTypeParamAminoMsg): _103.AccessTypeParam;
                toAminoMsg(message: _103.AccessTypeParam): _103.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _103.AccessTypeParamProtoMsg): _103.AccessTypeParam;
                toProto(message: _103.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _103.AccessTypeParam): _103.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                typeUrl: string;
                encode(message: _103.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.AccessConfig;
                fromPartial(object: Partial<_103.AccessConfig>): _103.AccessConfig;
                fromAmino(object: _103.AccessConfigAmino): _103.AccessConfig;
                toAmino(message: _103.AccessConfig): _103.AccessConfigAmino;
                fromAminoMsg(object: _103.AccessConfigAminoMsg): _103.AccessConfig;
                toAminoMsg(message: _103.AccessConfig): _103.AccessConfigAminoMsg;
                fromProtoMsg(message: _103.AccessConfigProtoMsg): _103.AccessConfig;
                toProto(message: _103.AccessConfig): Uint8Array;
                toProtoMsg(message: _103.AccessConfig): _103.AccessConfigProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _103.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Params;
                fromPartial(object: Partial<_103.Params>): _103.Params;
                fromAmino(object: _103.ParamsAmino): _103.Params;
                toAmino(message: _103.Params): _103.ParamsAmino;
                fromAminoMsg(object: _103.ParamsAminoMsg): _103.Params;
                toAminoMsg(message: _103.Params): _103.ParamsAminoMsg;
                fromProtoMsg(message: _103.ParamsProtoMsg): _103.Params;
                toProto(message: _103.Params): Uint8Array;
                toProtoMsg(message: _103.Params): _103.ParamsProtoMsg;
            };
            CodeInfo: {
                typeUrl: string;
                encode(message: _103.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.CodeInfo;
                fromPartial(object: Partial<_103.CodeInfo>): _103.CodeInfo;
                fromAmino(object: _103.CodeInfoAmino): _103.CodeInfo;
                toAmino(message: _103.CodeInfo): _103.CodeInfoAmino;
                fromAminoMsg(object: _103.CodeInfoAminoMsg): _103.CodeInfo;
                toAminoMsg(message: _103.CodeInfo): _103.CodeInfoAminoMsg;
                fromProtoMsg(message: _103.CodeInfoProtoMsg): _103.CodeInfo;
                toProto(message: _103.CodeInfo): Uint8Array;
                toProtoMsg(message: _103.CodeInfo): _103.CodeInfoProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                encode(message: _103.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ContractInfo;
                fromPartial(object: Partial<_103.ContractInfo>): _103.ContractInfo;
                fromAmino(object: _103.ContractInfoAmino): _103.ContractInfo;
                toAmino(message: _103.ContractInfo): _103.ContractInfoAmino;
                fromAminoMsg(object: _103.ContractInfoAminoMsg): _103.ContractInfo;
                toAminoMsg(message: _103.ContractInfo): _103.ContractInfoAminoMsg;
                fromProtoMsg(message: _103.ContractInfoProtoMsg): _103.ContractInfo;
                toProto(message: _103.ContractInfo): Uint8Array;
                toProtoMsg(message: _103.ContractInfo): _103.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                typeUrl: string;
                encode(message: _103.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ContractCodeHistoryEntry;
                fromPartial(object: Partial<_103.ContractCodeHistoryEntry>): _103.ContractCodeHistoryEntry;
                fromAmino(object: _103.ContractCodeHistoryEntryAmino): _103.ContractCodeHistoryEntry;
                toAmino(message: _103.ContractCodeHistoryEntry): _103.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _103.ContractCodeHistoryEntryAminoMsg): _103.ContractCodeHistoryEntry;
                toAminoMsg(message: _103.ContractCodeHistoryEntry): _103.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _103.ContractCodeHistoryEntryProtoMsg): _103.ContractCodeHistoryEntry;
                toProto(message: _103.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _103.ContractCodeHistoryEntry): _103.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                typeUrl: string;
                encode(message: _103.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.AbsoluteTxPosition;
                fromPartial(object: Partial<_103.AbsoluteTxPosition>): _103.AbsoluteTxPosition;
                fromAmino(object: _103.AbsoluteTxPositionAmino): _103.AbsoluteTxPosition;
                toAmino(message: _103.AbsoluteTxPosition): _103.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _103.AbsoluteTxPositionAminoMsg): _103.AbsoluteTxPosition;
                toAminoMsg(message: _103.AbsoluteTxPosition): _103.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _103.AbsoluteTxPositionProtoMsg): _103.AbsoluteTxPosition;
                toProto(message: _103.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _103.AbsoluteTxPosition): _103.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                typeUrl: string;
                encode(message: _103.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Model;
                fromPartial(object: Partial<_103.Model>): _103.Model;
                fromAmino(object: _103.ModelAmino): _103.Model;
                toAmino(message: _103.Model): _103.ModelAmino;
                fromAminoMsg(object: _103.ModelAminoMsg): _103.Model;
                toAminoMsg(message: _103.Model): _103.ModelAminoMsg;
                fromProtoMsg(message: _103.ModelProtoMsg): _103.Model;
                toProto(message: _103.Model): Uint8Array;
                toProtoMsg(message: _103.Model): _103.ModelProtoMsg;
            };
            Cosmwasm_wasmv1ContractInfoExtension_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            MsgStoreCode: {
                typeUrl: string;
                encode(message: _102.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgStoreCode;
                fromPartial(object: Partial<_102.MsgStoreCode>): _102.MsgStoreCode;
                fromAmino(object: _102.MsgStoreCodeAmino): _102.MsgStoreCode;
                toAmino(message: _102.MsgStoreCode): _102.MsgStoreCodeAmino;
                fromAminoMsg(object: _102.MsgStoreCodeAminoMsg): _102.MsgStoreCode;
                toAminoMsg(message: _102.MsgStoreCode): _102.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _102.MsgStoreCodeProtoMsg): _102.MsgStoreCode;
                toProto(message: _102.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _102.MsgStoreCode): _102.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                encode(message: _102.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgStoreCodeResponse;
                fromPartial(object: Partial<_102.MsgStoreCodeResponse>): _102.MsgStoreCodeResponse;
                fromAmino(object: _102.MsgStoreCodeResponseAmino): _102.MsgStoreCodeResponse;
                toAmino(message: _102.MsgStoreCodeResponse): _102.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _102.MsgStoreCodeResponseAminoMsg): _102.MsgStoreCodeResponse;
                toAminoMsg(message: _102.MsgStoreCodeResponse): _102.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _102.MsgStoreCodeResponseProtoMsg): _102.MsgStoreCodeResponse;
                toProto(message: _102.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _102.MsgStoreCodeResponse): _102.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                encode(message: _102.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgInstantiateContract;
                fromPartial(object: Partial<_102.MsgInstantiateContract>): _102.MsgInstantiateContract;
                fromAmino(object: _102.MsgInstantiateContractAmino): _102.MsgInstantiateContract;
                toAmino(message: _102.MsgInstantiateContract): _102.MsgInstantiateContractAmino;
                fromAminoMsg(object: _102.MsgInstantiateContractAminoMsg): _102.MsgInstantiateContract;
                toAminoMsg(message: _102.MsgInstantiateContract): _102.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _102.MsgInstantiateContractProtoMsg): _102.MsgInstantiateContract;
                toProto(message: _102.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _102.MsgInstantiateContract): _102.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _102.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgInstantiateContractResponse;
                fromPartial(object: Partial<_102.MsgInstantiateContractResponse>): _102.MsgInstantiateContractResponse;
                fromAmino(object: _102.MsgInstantiateContractResponseAmino): _102.MsgInstantiateContractResponse;
                toAmino(message: _102.MsgInstantiateContractResponse): _102.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _102.MsgInstantiateContractResponseAminoMsg): _102.MsgInstantiateContractResponse;
                toAminoMsg(message: _102.MsgInstantiateContractResponse): _102.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _102.MsgInstantiateContractResponseProtoMsg): _102.MsgInstantiateContractResponse;
                toProto(message: _102.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _102.MsgInstantiateContractResponse): _102.MsgInstantiateContractResponseProtoMsg;
            };
            MsgInstantiateContract2: {
                typeUrl: string;
                encode(message: _102.MsgInstantiateContract2, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgInstantiateContract2;
                fromPartial(object: Partial<_102.MsgInstantiateContract2>): _102.MsgInstantiateContract2;
                fromAmino(object: _102.MsgInstantiateContract2Amino): _102.MsgInstantiateContract2;
                toAmino(message: _102.MsgInstantiateContract2): _102.MsgInstantiateContract2Amino;
                fromAminoMsg(object: _102.MsgInstantiateContract2AminoMsg): _102.MsgInstantiateContract2;
                toAminoMsg(message: _102.MsgInstantiateContract2): _102.MsgInstantiateContract2AminoMsg;
                fromProtoMsg(message: _102.MsgInstantiateContract2ProtoMsg): _102.MsgInstantiateContract2;
                toProto(message: _102.MsgInstantiateContract2): Uint8Array;
                toProtoMsg(message: _102.MsgInstantiateContract2): _102.MsgInstantiateContract2ProtoMsg;
            };
            MsgInstantiateContract2Response: {
                typeUrl: string;
                encode(message: _102.MsgInstantiateContract2Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgInstantiateContract2Response;
                fromPartial(object: Partial<_102.MsgInstantiateContract2Response>): _102.MsgInstantiateContract2Response;
                fromAmino(object: _102.MsgInstantiateContract2ResponseAmino): _102.MsgInstantiateContract2Response;
                toAmino(message: _102.MsgInstantiateContract2Response): _102.MsgInstantiateContract2ResponseAmino;
                fromAminoMsg(object: _102.MsgInstantiateContract2ResponseAminoMsg): _102.MsgInstantiateContract2Response;
                toAminoMsg(message: _102.MsgInstantiateContract2Response): _102.MsgInstantiateContract2ResponseAminoMsg;
                fromProtoMsg(message: _102.MsgInstantiateContract2ResponseProtoMsg): _102.MsgInstantiateContract2Response;
                toProto(message: _102.MsgInstantiateContract2Response): Uint8Array;
                toProtoMsg(message: _102.MsgInstantiateContract2Response): _102.MsgInstantiateContract2ResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                encode(message: _102.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgExecuteContract;
                fromPartial(object: Partial<_102.MsgExecuteContract>): _102.MsgExecuteContract;
                fromAmino(object: _102.MsgExecuteContractAmino): _102.MsgExecuteContract;
                toAmino(message: _102.MsgExecuteContract): _102.MsgExecuteContractAmino;
                fromAminoMsg(object: _102.MsgExecuteContractAminoMsg): _102.MsgExecuteContract;
                toAminoMsg(message: _102.MsgExecuteContract): _102.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _102.MsgExecuteContractProtoMsg): _102.MsgExecuteContract;
                toProto(message: _102.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _102.MsgExecuteContract): _102.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                encode(message: _102.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgExecuteContractResponse;
                fromPartial(object: Partial<_102.MsgExecuteContractResponse>): _102.MsgExecuteContractResponse;
                fromAmino(object: _102.MsgExecuteContractResponseAmino): _102.MsgExecuteContractResponse;
                toAmino(message: _102.MsgExecuteContractResponse): _102.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _102.MsgExecuteContractResponseAminoMsg): _102.MsgExecuteContractResponse;
                toAminoMsg(message: _102.MsgExecuteContractResponse): _102.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _102.MsgExecuteContractResponseProtoMsg): _102.MsgExecuteContractResponse;
                toProto(message: _102.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _102.MsgExecuteContractResponse): _102.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                typeUrl: string;
                encode(message: _102.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgMigrateContract;
                fromPartial(object: Partial<_102.MsgMigrateContract>): _102.MsgMigrateContract;
                fromAmino(object: _102.MsgMigrateContractAmino): _102.MsgMigrateContract;
                toAmino(message: _102.MsgMigrateContract): _102.MsgMigrateContractAmino;
                fromAminoMsg(object: _102.MsgMigrateContractAminoMsg): _102.MsgMigrateContract;
                toAminoMsg(message: _102.MsgMigrateContract): _102.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _102.MsgMigrateContractProtoMsg): _102.MsgMigrateContract;
                toProto(message: _102.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _102.MsgMigrateContract): _102.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                typeUrl: string;
                encode(message: _102.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgMigrateContractResponse;
                fromPartial(object: Partial<_102.MsgMigrateContractResponse>): _102.MsgMigrateContractResponse;
                fromAmino(object: _102.MsgMigrateContractResponseAmino): _102.MsgMigrateContractResponse;
                toAmino(message: _102.MsgMigrateContractResponse): _102.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _102.MsgMigrateContractResponseAminoMsg): _102.MsgMigrateContractResponse;
                toAminoMsg(message: _102.MsgMigrateContractResponse): _102.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _102.MsgMigrateContractResponseProtoMsg): _102.MsgMigrateContractResponse;
                toProto(message: _102.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _102.MsgMigrateContractResponse): _102.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                typeUrl: string;
                encode(message: _102.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgUpdateAdmin;
                fromPartial(object: Partial<_102.MsgUpdateAdmin>): _102.MsgUpdateAdmin;
                fromAmino(object: _102.MsgUpdateAdminAmino): _102.MsgUpdateAdmin;
                toAmino(message: _102.MsgUpdateAdmin): _102.MsgUpdateAdminAmino;
                fromAminoMsg(object: _102.MsgUpdateAdminAminoMsg): _102.MsgUpdateAdmin;
                toAminoMsg(message: _102.MsgUpdateAdmin): _102.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _102.MsgUpdateAdminProtoMsg): _102.MsgUpdateAdmin;
                toProto(message: _102.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _102.MsgUpdateAdmin): _102.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                typeUrl: string;
                encode(_: _102.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgUpdateAdminResponse;
                fromPartial(_: Partial<_102.MsgUpdateAdminResponse>): _102.MsgUpdateAdminResponse;
                fromAmino(_: _102.MsgUpdateAdminResponseAmino): _102.MsgUpdateAdminResponse;
                toAmino(_: _102.MsgUpdateAdminResponse): _102.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _102.MsgUpdateAdminResponseAminoMsg): _102.MsgUpdateAdminResponse;
                toAminoMsg(message: _102.MsgUpdateAdminResponse): _102.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _102.MsgUpdateAdminResponseProtoMsg): _102.MsgUpdateAdminResponse;
                toProto(message: _102.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _102.MsgUpdateAdminResponse): _102.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                typeUrl: string;
                encode(message: _102.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgClearAdmin;
                fromPartial(object: Partial<_102.MsgClearAdmin>): _102.MsgClearAdmin;
                fromAmino(object: _102.MsgClearAdminAmino): _102.MsgClearAdmin;
                toAmino(message: _102.MsgClearAdmin): _102.MsgClearAdminAmino;
                fromAminoMsg(object: _102.MsgClearAdminAminoMsg): _102.MsgClearAdmin;
                toAminoMsg(message: _102.MsgClearAdmin): _102.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _102.MsgClearAdminProtoMsg): _102.MsgClearAdmin;
                toProto(message: _102.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _102.MsgClearAdmin): _102.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                typeUrl: string;
                encode(_: _102.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgClearAdminResponse;
                fromPartial(_: Partial<_102.MsgClearAdminResponse>): _102.MsgClearAdminResponse;
                fromAmino(_: _102.MsgClearAdminResponseAmino): _102.MsgClearAdminResponse;
                toAmino(_: _102.MsgClearAdminResponse): _102.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _102.MsgClearAdminResponseAminoMsg): _102.MsgClearAdminResponse;
                toAminoMsg(message: _102.MsgClearAdminResponse): _102.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _102.MsgClearAdminResponseProtoMsg): _102.MsgClearAdminResponse;
                toProto(message: _102.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _102.MsgClearAdminResponse): _102.MsgClearAdminResponseProtoMsg;
            };
            MsgUpdateInstantiateConfig: {
                typeUrl: string;
                encode(message: _102.MsgUpdateInstantiateConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgUpdateInstantiateConfig;
                fromPartial(object: Partial<_102.MsgUpdateInstantiateConfig>): _102.MsgUpdateInstantiateConfig;
                fromAmino(object: _102.MsgUpdateInstantiateConfigAmino): _102.MsgUpdateInstantiateConfig;
                toAmino(message: _102.MsgUpdateInstantiateConfig): _102.MsgUpdateInstantiateConfigAmino;
                fromAminoMsg(object: _102.MsgUpdateInstantiateConfigAminoMsg): _102.MsgUpdateInstantiateConfig;
                toAminoMsg(message: _102.MsgUpdateInstantiateConfig): _102.MsgUpdateInstantiateConfigAminoMsg;
                fromProtoMsg(message: _102.MsgUpdateInstantiateConfigProtoMsg): _102.MsgUpdateInstantiateConfig;
                toProto(message: _102.MsgUpdateInstantiateConfig): Uint8Array;
                toProtoMsg(message: _102.MsgUpdateInstantiateConfig): _102.MsgUpdateInstantiateConfigProtoMsg;
            };
            MsgUpdateInstantiateConfigResponse: {
                typeUrl: string;
                encode(_: _102.MsgUpdateInstantiateConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgUpdateInstantiateConfigResponse;
                fromPartial(_: Partial<_102.MsgUpdateInstantiateConfigResponse>): _102.MsgUpdateInstantiateConfigResponse;
                fromAmino(_: _102.MsgUpdateInstantiateConfigResponseAmino): _102.MsgUpdateInstantiateConfigResponse;
                toAmino(_: _102.MsgUpdateInstantiateConfigResponse): _102.MsgUpdateInstantiateConfigResponseAmino;
                fromAminoMsg(object: _102.MsgUpdateInstantiateConfigResponseAminoMsg): _102.MsgUpdateInstantiateConfigResponse;
                toAminoMsg(message: _102.MsgUpdateInstantiateConfigResponse): _102.MsgUpdateInstantiateConfigResponseAminoMsg;
                fromProtoMsg(message: _102.MsgUpdateInstantiateConfigResponseProtoMsg): _102.MsgUpdateInstantiateConfigResponse;
                toProto(message: _102.MsgUpdateInstantiateConfigResponse): Uint8Array;
                toProtoMsg(message: _102.MsgUpdateInstantiateConfigResponse): _102.MsgUpdateInstantiateConfigResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _102.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgUpdateParams;
                fromPartial(object: Partial<_102.MsgUpdateParams>): _102.MsgUpdateParams;
                fromAmino(object: _102.MsgUpdateParamsAmino): _102.MsgUpdateParams;
                toAmino(message: _102.MsgUpdateParams): _102.MsgUpdateParamsAmino;
                fromAminoMsg(object: _102.MsgUpdateParamsAminoMsg): _102.MsgUpdateParams;
                toAminoMsg(message: _102.MsgUpdateParams): _102.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _102.MsgUpdateParamsProtoMsg): _102.MsgUpdateParams;
                toProto(message: _102.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _102.MsgUpdateParams): _102.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _102.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_102.MsgUpdateParamsResponse>): _102.MsgUpdateParamsResponse;
                fromAmino(_: _102.MsgUpdateParamsResponseAmino): _102.MsgUpdateParamsResponse;
                toAmino(_: _102.MsgUpdateParamsResponse): _102.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _102.MsgUpdateParamsResponseAminoMsg): _102.MsgUpdateParamsResponse;
                toAminoMsg(message: _102.MsgUpdateParamsResponse): _102.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _102.MsgUpdateParamsResponseProtoMsg): _102.MsgUpdateParamsResponse;
                toProto(message: _102.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _102.MsgUpdateParamsResponse): _102.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSudoContract: {
                typeUrl: string;
                encode(message: _102.MsgSudoContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgSudoContract;
                fromPartial(object: Partial<_102.MsgSudoContract>): _102.MsgSudoContract;
                fromAmino(object: _102.MsgSudoContractAmino): _102.MsgSudoContract;
                toAmino(message: _102.MsgSudoContract): _102.MsgSudoContractAmino;
                fromAminoMsg(object: _102.MsgSudoContractAminoMsg): _102.MsgSudoContract;
                toAminoMsg(message: _102.MsgSudoContract): _102.MsgSudoContractAminoMsg;
                fromProtoMsg(message: _102.MsgSudoContractProtoMsg): _102.MsgSudoContract;
                toProto(message: _102.MsgSudoContract): Uint8Array;
                toProtoMsg(message: _102.MsgSudoContract): _102.MsgSudoContractProtoMsg;
            };
            MsgSudoContractResponse: {
                typeUrl: string;
                encode(message: _102.MsgSudoContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgSudoContractResponse;
                fromPartial(object: Partial<_102.MsgSudoContractResponse>): _102.MsgSudoContractResponse;
                fromAmino(object: _102.MsgSudoContractResponseAmino): _102.MsgSudoContractResponse;
                toAmino(message: _102.MsgSudoContractResponse): _102.MsgSudoContractResponseAmino;
                fromAminoMsg(object: _102.MsgSudoContractResponseAminoMsg): _102.MsgSudoContractResponse;
                toAminoMsg(message: _102.MsgSudoContractResponse): _102.MsgSudoContractResponseAminoMsg;
                fromProtoMsg(message: _102.MsgSudoContractResponseProtoMsg): _102.MsgSudoContractResponse;
                toProto(message: _102.MsgSudoContractResponse): Uint8Array;
                toProtoMsg(message: _102.MsgSudoContractResponse): _102.MsgSudoContractResponseProtoMsg;
            };
            MsgPinCodes: {
                typeUrl: string;
                encode(message: _102.MsgPinCodes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgPinCodes;
                fromPartial(object: Partial<_102.MsgPinCodes>): _102.MsgPinCodes;
                fromAmino(object: _102.MsgPinCodesAmino): _102.MsgPinCodes;
                toAmino(message: _102.MsgPinCodes): _102.MsgPinCodesAmino;
                fromAminoMsg(object: _102.MsgPinCodesAminoMsg): _102.MsgPinCodes;
                toAminoMsg(message: _102.MsgPinCodes): _102.MsgPinCodesAminoMsg;
                fromProtoMsg(message: _102.MsgPinCodesProtoMsg): _102.MsgPinCodes;
                toProto(message: _102.MsgPinCodes): Uint8Array;
                toProtoMsg(message: _102.MsgPinCodes): _102.MsgPinCodesProtoMsg;
            };
            MsgPinCodesResponse: {
                typeUrl: string;
                encode(_: _102.MsgPinCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgPinCodesResponse;
                fromPartial(_: Partial<_102.MsgPinCodesResponse>): _102.MsgPinCodesResponse;
                fromAmino(_: _102.MsgPinCodesResponseAmino): _102.MsgPinCodesResponse;
                toAmino(_: _102.MsgPinCodesResponse): _102.MsgPinCodesResponseAmino;
                fromAminoMsg(object: _102.MsgPinCodesResponseAminoMsg): _102.MsgPinCodesResponse;
                toAminoMsg(message: _102.MsgPinCodesResponse): _102.MsgPinCodesResponseAminoMsg;
                fromProtoMsg(message: _102.MsgPinCodesResponseProtoMsg): _102.MsgPinCodesResponse;
                toProto(message: _102.MsgPinCodesResponse): Uint8Array;
                toProtoMsg(message: _102.MsgPinCodesResponse): _102.MsgPinCodesResponseProtoMsg;
            };
            MsgUnpinCodes: {
                typeUrl: string;
                encode(message: _102.MsgUnpinCodes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgUnpinCodes;
                fromPartial(object: Partial<_102.MsgUnpinCodes>): _102.MsgUnpinCodes;
                fromAmino(object: _102.MsgUnpinCodesAmino): _102.MsgUnpinCodes;
                toAmino(message: _102.MsgUnpinCodes): _102.MsgUnpinCodesAmino;
                fromAminoMsg(object: _102.MsgUnpinCodesAminoMsg): _102.MsgUnpinCodes;
                toAminoMsg(message: _102.MsgUnpinCodes): _102.MsgUnpinCodesAminoMsg;
                fromProtoMsg(message: _102.MsgUnpinCodesProtoMsg): _102.MsgUnpinCodes;
                toProto(message: _102.MsgUnpinCodes): Uint8Array;
                toProtoMsg(message: _102.MsgUnpinCodes): _102.MsgUnpinCodesProtoMsg;
            };
            MsgUnpinCodesResponse: {
                typeUrl: string;
                encode(_: _102.MsgUnpinCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgUnpinCodesResponse;
                fromPartial(_: Partial<_102.MsgUnpinCodesResponse>): _102.MsgUnpinCodesResponse;
                fromAmino(_: _102.MsgUnpinCodesResponseAmino): _102.MsgUnpinCodesResponse;
                toAmino(_: _102.MsgUnpinCodesResponse): _102.MsgUnpinCodesResponseAmino;
                fromAminoMsg(object: _102.MsgUnpinCodesResponseAminoMsg): _102.MsgUnpinCodesResponse;
                toAminoMsg(message: _102.MsgUnpinCodesResponse): _102.MsgUnpinCodesResponseAminoMsg;
                fromProtoMsg(message: _102.MsgUnpinCodesResponseProtoMsg): _102.MsgUnpinCodesResponse;
                toProto(message: _102.MsgUnpinCodesResponse): Uint8Array;
                toProtoMsg(message: _102.MsgUnpinCodesResponse): _102.MsgUnpinCodesResponseProtoMsg;
            };
            MsgStoreAndInstantiateContract: {
                typeUrl: string;
                encode(message: _102.MsgStoreAndInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgStoreAndInstantiateContract;
                fromPartial(object: Partial<_102.MsgStoreAndInstantiateContract>): _102.MsgStoreAndInstantiateContract;
                fromAmino(object: _102.MsgStoreAndInstantiateContractAmino): _102.MsgStoreAndInstantiateContract;
                toAmino(message: _102.MsgStoreAndInstantiateContract): _102.MsgStoreAndInstantiateContractAmino;
                fromAminoMsg(object: _102.MsgStoreAndInstantiateContractAminoMsg): _102.MsgStoreAndInstantiateContract;
                toAminoMsg(message: _102.MsgStoreAndInstantiateContract): _102.MsgStoreAndInstantiateContractAminoMsg;
                fromProtoMsg(message: _102.MsgStoreAndInstantiateContractProtoMsg): _102.MsgStoreAndInstantiateContract;
                toProto(message: _102.MsgStoreAndInstantiateContract): Uint8Array;
                toProtoMsg(message: _102.MsgStoreAndInstantiateContract): _102.MsgStoreAndInstantiateContractProtoMsg;
            };
            MsgStoreAndInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _102.MsgStoreAndInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgStoreAndInstantiateContractResponse;
                fromPartial(object: Partial<_102.MsgStoreAndInstantiateContractResponse>): _102.MsgStoreAndInstantiateContractResponse;
                fromAmino(object: _102.MsgStoreAndInstantiateContractResponseAmino): _102.MsgStoreAndInstantiateContractResponse;
                toAmino(message: _102.MsgStoreAndInstantiateContractResponse): _102.MsgStoreAndInstantiateContractResponseAmino;
                fromAminoMsg(object: _102.MsgStoreAndInstantiateContractResponseAminoMsg): _102.MsgStoreAndInstantiateContractResponse;
                toAminoMsg(message: _102.MsgStoreAndInstantiateContractResponse): _102.MsgStoreAndInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _102.MsgStoreAndInstantiateContractResponseProtoMsg): _102.MsgStoreAndInstantiateContractResponse;
                toProto(message: _102.MsgStoreAndInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _102.MsgStoreAndInstantiateContractResponse): _102.MsgStoreAndInstantiateContractResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                typeUrl: string;
                encode(message: _101.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryContractInfoRequest;
                fromPartial(object: Partial<_101.QueryContractInfoRequest>): _101.QueryContractInfoRequest;
                fromAmino(object: _101.QueryContractInfoRequestAmino): _101.QueryContractInfoRequest;
                toAmino(message: _101.QueryContractInfoRequest): _101.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _101.QueryContractInfoRequestAminoMsg): _101.QueryContractInfoRequest;
                toAminoMsg(message: _101.QueryContractInfoRequest): _101.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _101.QueryContractInfoRequestProtoMsg): _101.QueryContractInfoRequest;
                toProto(message: _101.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _101.QueryContractInfoRequest): _101.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                typeUrl: string;
                encode(message: _101.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryContractInfoResponse;
                fromPartial(object: Partial<_101.QueryContractInfoResponse>): _101.QueryContractInfoResponse;
                fromAmino(object: _101.QueryContractInfoResponseAmino): _101.QueryContractInfoResponse;
                toAmino(message: _101.QueryContractInfoResponse): _101.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _101.QueryContractInfoResponseAminoMsg): _101.QueryContractInfoResponse;
                toAminoMsg(message: _101.QueryContractInfoResponse): _101.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _101.QueryContractInfoResponseProtoMsg): _101.QueryContractInfoResponse;
                toProto(message: _101.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _101.QueryContractInfoResponse): _101.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                typeUrl: string;
                encode(message: _101.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryContractHistoryRequest;
                fromPartial(object: Partial<_101.QueryContractHistoryRequest>): _101.QueryContractHistoryRequest;
                fromAmino(object: _101.QueryContractHistoryRequestAmino): _101.QueryContractHistoryRequest;
                toAmino(message: _101.QueryContractHistoryRequest): _101.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _101.QueryContractHistoryRequestAminoMsg): _101.QueryContractHistoryRequest;
                toAminoMsg(message: _101.QueryContractHistoryRequest): _101.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _101.QueryContractHistoryRequestProtoMsg): _101.QueryContractHistoryRequest;
                toProto(message: _101.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _101.QueryContractHistoryRequest): _101.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                typeUrl: string;
                encode(message: _101.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryContractHistoryResponse;
                fromPartial(object: Partial<_101.QueryContractHistoryResponse>): _101.QueryContractHistoryResponse;
                fromAmino(object: _101.QueryContractHistoryResponseAmino): _101.QueryContractHistoryResponse;
                toAmino(message: _101.QueryContractHistoryResponse): _101.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _101.QueryContractHistoryResponseAminoMsg): _101.QueryContractHistoryResponse;
                toAminoMsg(message: _101.QueryContractHistoryResponse): _101.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _101.QueryContractHistoryResponseProtoMsg): _101.QueryContractHistoryResponse;
                toProto(message: _101.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _101.QueryContractHistoryResponse): _101.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                typeUrl: string;
                encode(message: _101.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryContractsByCodeRequest;
                fromPartial(object: Partial<_101.QueryContractsByCodeRequest>): _101.QueryContractsByCodeRequest;
                fromAmino(object: _101.QueryContractsByCodeRequestAmino): _101.QueryContractsByCodeRequest;
                toAmino(message: _101.QueryContractsByCodeRequest): _101.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _101.QueryContractsByCodeRequestAminoMsg): _101.QueryContractsByCodeRequest;
                toAminoMsg(message: _101.QueryContractsByCodeRequest): _101.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _101.QueryContractsByCodeRequestProtoMsg): _101.QueryContractsByCodeRequest;
                toProto(message: _101.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _101.QueryContractsByCodeRequest): _101.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                typeUrl: string;
                encode(message: _101.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryContractsByCodeResponse;
                fromPartial(object: Partial<_101.QueryContractsByCodeResponse>): _101.QueryContractsByCodeResponse;
                fromAmino(object: _101.QueryContractsByCodeResponseAmino): _101.QueryContractsByCodeResponse;
                toAmino(message: _101.QueryContractsByCodeResponse): _101.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _101.QueryContractsByCodeResponseAminoMsg): _101.QueryContractsByCodeResponse;
                toAminoMsg(message: _101.QueryContractsByCodeResponse): _101.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _101.QueryContractsByCodeResponseProtoMsg): _101.QueryContractsByCodeResponse;
                toProto(message: _101.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _101.QueryContractsByCodeResponse): _101.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                typeUrl: string;
                encode(message: _101.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryAllContractStateRequest;
                fromPartial(object: Partial<_101.QueryAllContractStateRequest>): _101.QueryAllContractStateRequest;
                fromAmino(object: _101.QueryAllContractStateRequestAmino): _101.QueryAllContractStateRequest;
                toAmino(message: _101.QueryAllContractStateRequest): _101.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _101.QueryAllContractStateRequestAminoMsg): _101.QueryAllContractStateRequest;
                toAminoMsg(message: _101.QueryAllContractStateRequest): _101.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _101.QueryAllContractStateRequestProtoMsg): _101.QueryAllContractStateRequest;
                toProto(message: _101.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _101.QueryAllContractStateRequest): _101.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                typeUrl: string;
                encode(message: _101.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryAllContractStateResponse;
                fromPartial(object: Partial<_101.QueryAllContractStateResponse>): _101.QueryAllContractStateResponse;
                fromAmino(object: _101.QueryAllContractStateResponseAmino): _101.QueryAllContractStateResponse;
                toAmino(message: _101.QueryAllContractStateResponse): _101.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _101.QueryAllContractStateResponseAminoMsg): _101.QueryAllContractStateResponse;
                toAminoMsg(message: _101.QueryAllContractStateResponse): _101.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _101.QueryAllContractStateResponseProtoMsg): _101.QueryAllContractStateResponse;
                toProto(message: _101.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _101.QueryAllContractStateResponse): _101.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                typeUrl: string;
                encode(message: _101.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryRawContractStateRequest;
                fromPartial(object: Partial<_101.QueryRawContractStateRequest>): _101.QueryRawContractStateRequest;
                fromAmino(object: _101.QueryRawContractStateRequestAmino): _101.QueryRawContractStateRequest;
                toAmino(message: _101.QueryRawContractStateRequest): _101.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _101.QueryRawContractStateRequestAminoMsg): _101.QueryRawContractStateRequest;
                toAminoMsg(message: _101.QueryRawContractStateRequest): _101.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _101.QueryRawContractStateRequestProtoMsg): _101.QueryRawContractStateRequest;
                toProto(message: _101.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _101.QueryRawContractStateRequest): _101.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                typeUrl: string;
                encode(message: _101.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryRawContractStateResponse;
                fromPartial(object: Partial<_101.QueryRawContractStateResponse>): _101.QueryRawContractStateResponse;
                fromAmino(object: _101.QueryRawContractStateResponseAmino): _101.QueryRawContractStateResponse;
                toAmino(message: _101.QueryRawContractStateResponse): _101.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _101.QueryRawContractStateResponseAminoMsg): _101.QueryRawContractStateResponse;
                toAminoMsg(message: _101.QueryRawContractStateResponse): _101.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _101.QueryRawContractStateResponseProtoMsg): _101.QueryRawContractStateResponse;
                toProto(message: _101.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _101.QueryRawContractStateResponse): _101.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                typeUrl: string;
                encode(message: _101.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QuerySmartContractStateRequest;
                fromPartial(object: Partial<_101.QuerySmartContractStateRequest>): _101.QuerySmartContractStateRequest;
                fromAmino(object: _101.QuerySmartContractStateRequestAmino): _101.QuerySmartContractStateRequest;
                toAmino(message: _101.QuerySmartContractStateRequest): _101.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _101.QuerySmartContractStateRequestAminoMsg): _101.QuerySmartContractStateRequest;
                toAminoMsg(message: _101.QuerySmartContractStateRequest): _101.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _101.QuerySmartContractStateRequestProtoMsg): _101.QuerySmartContractStateRequest;
                toProto(message: _101.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _101.QuerySmartContractStateRequest): _101.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                typeUrl: string;
                encode(message: _101.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QuerySmartContractStateResponse;
                fromPartial(object: Partial<_101.QuerySmartContractStateResponse>): _101.QuerySmartContractStateResponse;
                fromAmino(object: _101.QuerySmartContractStateResponseAmino): _101.QuerySmartContractStateResponse;
                toAmino(message: _101.QuerySmartContractStateResponse): _101.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _101.QuerySmartContractStateResponseAminoMsg): _101.QuerySmartContractStateResponse;
                toAminoMsg(message: _101.QuerySmartContractStateResponse): _101.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _101.QuerySmartContractStateResponseProtoMsg): _101.QuerySmartContractStateResponse;
                toProto(message: _101.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _101.QuerySmartContractStateResponse): _101.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                encode(message: _101.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryCodeRequest;
                fromPartial(object: Partial<_101.QueryCodeRequest>): _101.QueryCodeRequest;
                fromAmino(object: _101.QueryCodeRequestAmino): _101.QueryCodeRequest;
                toAmino(message: _101.QueryCodeRequest): _101.QueryCodeRequestAmino;
                fromAminoMsg(object: _101.QueryCodeRequestAminoMsg): _101.QueryCodeRequest;
                toAminoMsg(message: _101.QueryCodeRequest): _101.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _101.QueryCodeRequestProtoMsg): _101.QueryCodeRequest;
                toProto(message: _101.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _101.QueryCodeRequest): _101.QueryCodeRequestProtoMsg;
            };
            CodeInfoResponse: {
                typeUrl: string;
                encode(message: _101.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.CodeInfoResponse;
                fromPartial(object: Partial<_101.CodeInfoResponse>): _101.CodeInfoResponse;
                fromAmino(object: _101.CodeInfoResponseAmino): _101.CodeInfoResponse;
                toAmino(message: _101.CodeInfoResponse): _101.CodeInfoResponseAmino;
                fromAminoMsg(object: _101.CodeInfoResponseAminoMsg): _101.CodeInfoResponse;
                toAminoMsg(message: _101.CodeInfoResponse): _101.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _101.CodeInfoResponseProtoMsg): _101.CodeInfoResponse;
                toProto(message: _101.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _101.CodeInfoResponse): _101.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                encode(message: _101.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryCodeResponse;
                fromPartial(object: Partial<_101.QueryCodeResponse>): _101.QueryCodeResponse;
                fromAmino(object: _101.QueryCodeResponseAmino): _101.QueryCodeResponse;
                toAmino(message: _101.QueryCodeResponse): _101.QueryCodeResponseAmino;
                fromAminoMsg(object: _101.QueryCodeResponseAminoMsg): _101.QueryCodeResponse;
                toAminoMsg(message: _101.QueryCodeResponse): _101.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _101.QueryCodeResponseProtoMsg): _101.QueryCodeResponse;
                toProto(message: _101.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _101.QueryCodeResponse): _101.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                typeUrl: string;
                encode(message: _101.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryCodesRequest;
                fromPartial(object: Partial<_101.QueryCodesRequest>): _101.QueryCodesRequest;
                fromAmino(object: _101.QueryCodesRequestAmino): _101.QueryCodesRequest;
                toAmino(message: _101.QueryCodesRequest): _101.QueryCodesRequestAmino;
                fromAminoMsg(object: _101.QueryCodesRequestAminoMsg): _101.QueryCodesRequest;
                toAminoMsg(message: _101.QueryCodesRequest): _101.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _101.QueryCodesRequestProtoMsg): _101.QueryCodesRequest;
                toProto(message: _101.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _101.QueryCodesRequest): _101.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                typeUrl: string;
                encode(message: _101.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryCodesResponse;
                fromPartial(object: Partial<_101.QueryCodesResponse>): _101.QueryCodesResponse;
                fromAmino(object: _101.QueryCodesResponseAmino): _101.QueryCodesResponse;
                toAmino(message: _101.QueryCodesResponse): _101.QueryCodesResponseAmino;
                fromAminoMsg(object: _101.QueryCodesResponseAminoMsg): _101.QueryCodesResponse;
                toAminoMsg(message: _101.QueryCodesResponse): _101.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _101.QueryCodesResponseProtoMsg): _101.QueryCodesResponse;
                toProto(message: _101.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _101.QueryCodesResponse): _101.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                typeUrl: string;
                encode(message: _101.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryPinnedCodesRequest;
                fromPartial(object: Partial<_101.QueryPinnedCodesRequest>): _101.QueryPinnedCodesRequest;
                fromAmino(object: _101.QueryPinnedCodesRequestAmino): _101.QueryPinnedCodesRequest;
                toAmino(message: _101.QueryPinnedCodesRequest): _101.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _101.QueryPinnedCodesRequestAminoMsg): _101.QueryPinnedCodesRequest;
                toAminoMsg(message: _101.QueryPinnedCodesRequest): _101.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _101.QueryPinnedCodesRequestProtoMsg): _101.QueryPinnedCodesRequest;
                toProto(message: _101.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _101.QueryPinnedCodesRequest): _101.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                typeUrl: string;
                encode(message: _101.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryPinnedCodesResponse;
                fromPartial(object: Partial<_101.QueryPinnedCodesResponse>): _101.QueryPinnedCodesResponse;
                fromAmino(object: _101.QueryPinnedCodesResponseAmino): _101.QueryPinnedCodesResponse;
                toAmino(message: _101.QueryPinnedCodesResponse): _101.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _101.QueryPinnedCodesResponseAminoMsg): _101.QueryPinnedCodesResponse;
                toAminoMsg(message: _101.QueryPinnedCodesResponse): _101.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _101.QueryPinnedCodesResponseProtoMsg): _101.QueryPinnedCodesResponse;
                toProto(message: _101.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _101.QueryPinnedCodesResponse): _101.QueryPinnedCodesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _101.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryParamsRequest;
                fromPartial(_: Partial<_101.QueryParamsRequest>): _101.QueryParamsRequest;
                fromAmino(_: _101.QueryParamsRequestAmino): _101.QueryParamsRequest;
                toAmino(_: _101.QueryParamsRequest): _101.QueryParamsRequestAmino;
                fromAminoMsg(object: _101.QueryParamsRequestAminoMsg): _101.QueryParamsRequest;
                toAminoMsg(message: _101.QueryParamsRequest): _101.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _101.QueryParamsRequestProtoMsg): _101.QueryParamsRequest;
                toProto(message: _101.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _101.QueryParamsRequest): _101.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _101.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryParamsResponse;
                fromPartial(object: Partial<_101.QueryParamsResponse>): _101.QueryParamsResponse;
                fromAmino(object: _101.QueryParamsResponseAmino): _101.QueryParamsResponse;
                toAmino(message: _101.QueryParamsResponse): _101.QueryParamsResponseAmino;
                fromAminoMsg(object: _101.QueryParamsResponseAminoMsg): _101.QueryParamsResponse;
                toAminoMsg(message: _101.QueryParamsResponse): _101.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _101.QueryParamsResponseProtoMsg): _101.QueryParamsResponse;
                toProto(message: _101.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _101.QueryParamsResponse): _101.QueryParamsResponseProtoMsg;
            };
            QueryContractsByCreatorRequest: {
                typeUrl: string;
                encode(message: _101.QueryContractsByCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryContractsByCreatorRequest;
                fromPartial(object: Partial<_101.QueryContractsByCreatorRequest>): _101.QueryContractsByCreatorRequest;
                fromAmino(object: _101.QueryContractsByCreatorRequestAmino): _101.QueryContractsByCreatorRequest;
                toAmino(message: _101.QueryContractsByCreatorRequest): _101.QueryContractsByCreatorRequestAmino;
                fromAminoMsg(object: _101.QueryContractsByCreatorRequestAminoMsg): _101.QueryContractsByCreatorRequest;
                toAminoMsg(message: _101.QueryContractsByCreatorRequest): _101.QueryContractsByCreatorRequestAminoMsg;
                fromProtoMsg(message: _101.QueryContractsByCreatorRequestProtoMsg): _101.QueryContractsByCreatorRequest;
                toProto(message: _101.QueryContractsByCreatorRequest): Uint8Array;
                toProtoMsg(message: _101.QueryContractsByCreatorRequest): _101.QueryContractsByCreatorRequestProtoMsg;
            };
            QueryContractsByCreatorResponse: {
                typeUrl: string;
                encode(message: _101.QueryContractsByCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryContractsByCreatorResponse;
                fromPartial(object: Partial<_101.QueryContractsByCreatorResponse>): _101.QueryContractsByCreatorResponse;
                fromAmino(object: _101.QueryContractsByCreatorResponseAmino): _101.QueryContractsByCreatorResponse;
                toAmino(message: _101.QueryContractsByCreatorResponse): _101.QueryContractsByCreatorResponseAmino;
                fromAminoMsg(object: _101.QueryContractsByCreatorResponseAminoMsg): _101.QueryContractsByCreatorResponse;
                toAminoMsg(message: _101.QueryContractsByCreatorResponse): _101.QueryContractsByCreatorResponseAminoMsg;
                fromProtoMsg(message: _101.QueryContractsByCreatorResponseProtoMsg): _101.QueryContractsByCreatorResponse;
                toProto(message: _101.QueryContractsByCreatorResponse): Uint8Array;
                toProtoMsg(message: _101.QueryContractsByCreatorResponse): _101.QueryContractsByCreatorResponseProtoMsg;
            };
            StoreCodeProposal: {
                typeUrl: string;
                encode(message: _100.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.StoreCodeProposal;
                fromPartial(object: Partial<_100.StoreCodeProposal>): _100.StoreCodeProposal;
                fromAmino(object: _100.StoreCodeProposalAmino): _100.StoreCodeProposal;
                toAmino(message: _100.StoreCodeProposal): _100.StoreCodeProposalAmino;
                fromAminoMsg(object: _100.StoreCodeProposalAminoMsg): _100.StoreCodeProposal;
                toAminoMsg(message: _100.StoreCodeProposal): _100.StoreCodeProposalAminoMsg;
                fromProtoMsg(message: _100.StoreCodeProposalProtoMsg): _100.StoreCodeProposal;
                toProto(message: _100.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _100.StoreCodeProposal): _100.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                typeUrl: string;
                encode(message: _100.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.InstantiateContractProposal;
                fromPartial(object: Partial<_100.InstantiateContractProposal>): _100.InstantiateContractProposal;
                fromAmino(object: _100.InstantiateContractProposalAmino): _100.InstantiateContractProposal;
                toAmino(message: _100.InstantiateContractProposal): _100.InstantiateContractProposalAmino;
                fromAminoMsg(object: _100.InstantiateContractProposalAminoMsg): _100.InstantiateContractProposal;
                toAminoMsg(message: _100.InstantiateContractProposal): _100.InstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _100.InstantiateContractProposalProtoMsg): _100.InstantiateContractProposal;
                toProto(message: _100.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _100.InstantiateContractProposal): _100.InstantiateContractProposalProtoMsg;
            };
            InstantiateContract2Proposal: {
                typeUrl: string;
                encode(message: _100.InstantiateContract2Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.InstantiateContract2Proposal;
                fromPartial(object: Partial<_100.InstantiateContract2Proposal>): _100.InstantiateContract2Proposal;
                fromAmino(object: _100.InstantiateContract2ProposalAmino): _100.InstantiateContract2Proposal;
                toAmino(message: _100.InstantiateContract2Proposal): _100.InstantiateContract2ProposalAmino;
                fromAminoMsg(object: _100.InstantiateContract2ProposalAminoMsg): _100.InstantiateContract2Proposal;
                toAminoMsg(message: _100.InstantiateContract2Proposal): _100.InstantiateContract2ProposalAminoMsg;
                fromProtoMsg(message: _100.InstantiateContract2ProposalProtoMsg): _100.InstantiateContract2Proposal;
                toProto(message: _100.InstantiateContract2Proposal): Uint8Array;
                toProtoMsg(message: _100.InstantiateContract2Proposal): _100.InstantiateContract2ProposalProtoMsg;
            };
            MigrateContractProposal: {
                typeUrl: string;
                encode(message: _100.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MigrateContractProposal;
                fromPartial(object: Partial<_100.MigrateContractProposal>): _100.MigrateContractProposal;
                fromAmino(object: _100.MigrateContractProposalAmino): _100.MigrateContractProposal;
                toAmino(message: _100.MigrateContractProposal): _100.MigrateContractProposalAmino;
                fromAminoMsg(object: _100.MigrateContractProposalAminoMsg): _100.MigrateContractProposal;
                toAminoMsg(message: _100.MigrateContractProposal): _100.MigrateContractProposalAminoMsg;
                fromProtoMsg(message: _100.MigrateContractProposalProtoMsg): _100.MigrateContractProposal;
                toProto(message: _100.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _100.MigrateContractProposal): _100.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                typeUrl: string;
                encode(message: _100.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.SudoContractProposal;
                fromPartial(object: Partial<_100.SudoContractProposal>): _100.SudoContractProposal;
                fromAmino(object: _100.SudoContractProposalAmino): _100.SudoContractProposal;
                toAmino(message: _100.SudoContractProposal): _100.SudoContractProposalAmino;
                fromAminoMsg(object: _100.SudoContractProposalAminoMsg): _100.SudoContractProposal;
                toAminoMsg(message: _100.SudoContractProposal): _100.SudoContractProposalAminoMsg;
                fromProtoMsg(message: _100.SudoContractProposalProtoMsg): _100.SudoContractProposal;
                toProto(message: _100.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _100.SudoContractProposal): _100.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                typeUrl: string;
                encode(message: _100.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.ExecuteContractProposal;
                fromPartial(object: Partial<_100.ExecuteContractProposal>): _100.ExecuteContractProposal;
                fromAmino(object: _100.ExecuteContractProposalAmino): _100.ExecuteContractProposal;
                toAmino(message: _100.ExecuteContractProposal): _100.ExecuteContractProposalAmino;
                fromAminoMsg(object: _100.ExecuteContractProposalAminoMsg): _100.ExecuteContractProposal;
                toAminoMsg(message: _100.ExecuteContractProposal): _100.ExecuteContractProposalAminoMsg;
                fromProtoMsg(message: _100.ExecuteContractProposalProtoMsg): _100.ExecuteContractProposal;
                toProto(message: _100.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _100.ExecuteContractProposal): _100.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                typeUrl: string;
                encode(message: _100.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.UpdateAdminProposal;
                fromPartial(object: Partial<_100.UpdateAdminProposal>): _100.UpdateAdminProposal;
                fromAmino(object: _100.UpdateAdminProposalAmino): _100.UpdateAdminProposal;
                toAmino(message: _100.UpdateAdminProposal): _100.UpdateAdminProposalAmino;
                fromAminoMsg(object: _100.UpdateAdminProposalAminoMsg): _100.UpdateAdminProposal;
                toAminoMsg(message: _100.UpdateAdminProposal): _100.UpdateAdminProposalAminoMsg;
                fromProtoMsg(message: _100.UpdateAdminProposalProtoMsg): _100.UpdateAdminProposal;
                toProto(message: _100.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _100.UpdateAdminProposal): _100.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                typeUrl: string;
                encode(message: _100.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.ClearAdminProposal;
                fromPartial(object: Partial<_100.ClearAdminProposal>): _100.ClearAdminProposal;
                fromAmino(object: _100.ClearAdminProposalAmino): _100.ClearAdminProposal;
                toAmino(message: _100.ClearAdminProposal): _100.ClearAdminProposalAmino;
                fromAminoMsg(object: _100.ClearAdminProposalAminoMsg): _100.ClearAdminProposal;
                toAminoMsg(message: _100.ClearAdminProposal): _100.ClearAdminProposalAminoMsg;
                fromProtoMsg(message: _100.ClearAdminProposalProtoMsg): _100.ClearAdminProposal;
                toProto(message: _100.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _100.ClearAdminProposal): _100.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                typeUrl: string;
                encode(message: _100.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.PinCodesProposal;
                fromPartial(object: Partial<_100.PinCodesProposal>): _100.PinCodesProposal;
                fromAmino(object: _100.PinCodesProposalAmino): _100.PinCodesProposal;
                toAmino(message: _100.PinCodesProposal): _100.PinCodesProposalAmino;
                fromAminoMsg(object: _100.PinCodesProposalAminoMsg): _100.PinCodesProposal;
                toAminoMsg(message: _100.PinCodesProposal): _100.PinCodesProposalAminoMsg;
                fromProtoMsg(message: _100.PinCodesProposalProtoMsg): _100.PinCodesProposal;
                toProto(message: _100.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _100.PinCodesProposal): _100.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                typeUrl: string;
                encode(message: _100.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.UnpinCodesProposal;
                fromPartial(object: Partial<_100.UnpinCodesProposal>): _100.UnpinCodesProposal;
                fromAmino(object: _100.UnpinCodesProposalAmino): _100.UnpinCodesProposal;
                toAmino(message: _100.UnpinCodesProposal): _100.UnpinCodesProposalAmino;
                fromAminoMsg(object: _100.UnpinCodesProposalAminoMsg): _100.UnpinCodesProposal;
                toAminoMsg(message: _100.UnpinCodesProposal): _100.UnpinCodesProposalAminoMsg;
                fromProtoMsg(message: _100.UnpinCodesProposalProtoMsg): _100.UnpinCodesProposal;
                toProto(message: _100.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _100.UnpinCodesProposal): _100.UnpinCodesProposalProtoMsg;
            };
            AccessConfigUpdate: {
                typeUrl: string;
                encode(message: _100.AccessConfigUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.AccessConfigUpdate;
                fromPartial(object: Partial<_100.AccessConfigUpdate>): _100.AccessConfigUpdate;
                fromAmino(object: _100.AccessConfigUpdateAmino): _100.AccessConfigUpdate;
                toAmino(message: _100.AccessConfigUpdate): _100.AccessConfigUpdateAmino;
                fromAminoMsg(object: _100.AccessConfigUpdateAminoMsg): _100.AccessConfigUpdate;
                toAminoMsg(message: _100.AccessConfigUpdate): _100.AccessConfigUpdateAminoMsg;
                fromProtoMsg(message: _100.AccessConfigUpdateProtoMsg): _100.AccessConfigUpdate;
                toProto(message: _100.AccessConfigUpdate): Uint8Array;
                toProtoMsg(message: _100.AccessConfigUpdate): _100.AccessConfigUpdateProtoMsg;
            };
            UpdateInstantiateConfigProposal: {
                typeUrl: string;
                encode(message: _100.UpdateInstantiateConfigProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.UpdateInstantiateConfigProposal;
                fromPartial(object: Partial<_100.UpdateInstantiateConfigProposal>): _100.UpdateInstantiateConfigProposal;
                fromAmino(object: _100.UpdateInstantiateConfigProposalAmino): _100.UpdateInstantiateConfigProposal;
                toAmino(message: _100.UpdateInstantiateConfigProposal): _100.UpdateInstantiateConfigProposalAmino;
                fromAminoMsg(object: _100.UpdateInstantiateConfigProposalAminoMsg): _100.UpdateInstantiateConfigProposal;
                toAminoMsg(message: _100.UpdateInstantiateConfigProposal): _100.UpdateInstantiateConfigProposalAminoMsg;
                fromProtoMsg(message: _100.UpdateInstantiateConfigProposalProtoMsg): _100.UpdateInstantiateConfigProposal;
                toProto(message: _100.UpdateInstantiateConfigProposal): Uint8Array;
                toProtoMsg(message: _100.UpdateInstantiateConfigProposal): _100.UpdateInstantiateConfigProposalProtoMsg;
            };
            StoreAndInstantiateContractProposal: {
                typeUrl: string;
                encode(message: _100.StoreAndInstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.StoreAndInstantiateContractProposal;
                fromPartial(object: Partial<_100.StoreAndInstantiateContractProposal>): _100.StoreAndInstantiateContractProposal;
                fromAmino(object: _100.StoreAndInstantiateContractProposalAmino): _100.StoreAndInstantiateContractProposal;
                toAmino(message: _100.StoreAndInstantiateContractProposal): _100.StoreAndInstantiateContractProposalAmino;
                fromAminoMsg(object: _100.StoreAndInstantiateContractProposalAminoMsg): _100.StoreAndInstantiateContractProposal;
                toAminoMsg(message: _100.StoreAndInstantiateContractProposal): _100.StoreAndInstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _100.StoreAndInstantiateContractProposalProtoMsg): _100.StoreAndInstantiateContractProposal;
                toProto(message: _100.StoreAndInstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _100.StoreAndInstantiateContractProposal): _100.StoreAndInstantiateContractProposalProtoMsg;
            };
            MsgIBCSend: {
                typeUrl: string;
                encode(message: _99.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgIBCSend;
                fromPartial(object: Partial<_99.MsgIBCSend>): _99.MsgIBCSend;
                fromAmino(object: _99.MsgIBCSendAmino): _99.MsgIBCSend;
                toAmino(message: _99.MsgIBCSend): _99.MsgIBCSendAmino;
                fromAminoMsg(object: _99.MsgIBCSendAminoMsg): _99.MsgIBCSend;
                toAminoMsg(message: _99.MsgIBCSend): _99.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _99.MsgIBCSendProtoMsg): _99.MsgIBCSend;
                toProto(message: _99.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _99.MsgIBCSend): _99.MsgIBCSendProtoMsg;
            };
            MsgIBCSendResponse: {
                typeUrl: string;
                encode(message: _99.MsgIBCSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgIBCSendResponse;
                fromPartial(object: Partial<_99.MsgIBCSendResponse>): _99.MsgIBCSendResponse;
                fromAmino(object: _99.MsgIBCSendResponseAmino): _99.MsgIBCSendResponse;
                toAmino(message: _99.MsgIBCSendResponse): _99.MsgIBCSendResponseAmino;
                fromAminoMsg(object: _99.MsgIBCSendResponseAminoMsg): _99.MsgIBCSendResponse;
                toAminoMsg(message: _99.MsgIBCSendResponse): _99.MsgIBCSendResponseAminoMsg;
                fromProtoMsg(message: _99.MsgIBCSendResponseProtoMsg): _99.MsgIBCSendResponse;
                toProto(message: _99.MsgIBCSendResponse): Uint8Array;
                toProtoMsg(message: _99.MsgIBCSendResponse): _99.MsgIBCSendResponseProtoMsg;
            };
            MsgIBCCloseChannel: {
                typeUrl: string;
                encode(message: _99.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgIBCCloseChannel;
                fromPartial(object: Partial<_99.MsgIBCCloseChannel>): _99.MsgIBCCloseChannel;
                fromAmino(object: _99.MsgIBCCloseChannelAmino): _99.MsgIBCCloseChannel;
                toAmino(message: _99.MsgIBCCloseChannel): _99.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _99.MsgIBCCloseChannelAminoMsg): _99.MsgIBCCloseChannel;
                toAminoMsg(message: _99.MsgIBCCloseChannel): _99.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _99.MsgIBCCloseChannelProtoMsg): _99.MsgIBCCloseChannel;
                toProto(message: _99.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _99.MsgIBCCloseChannel): _99.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _98.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.GenesisState;
                fromPartial(object: Partial<_98.GenesisState>): _98.GenesisState;
                fromAmino(object: _98.GenesisStateAmino): _98.GenesisState;
                toAmino(message: _98.GenesisState): _98.GenesisStateAmino;
                fromAminoMsg(object: _98.GenesisStateAminoMsg): _98.GenesisState;
                toAminoMsg(message: _98.GenesisState): _98.GenesisStateAminoMsg;
                fromProtoMsg(message: _98.GenesisStateProtoMsg): _98.GenesisState;
                toProto(message: _98.GenesisState): Uint8Array;
                toProtoMsg(message: _98.GenesisState): _98.GenesisStateProtoMsg;
            };
            Code: {
                typeUrl: string;
                encode(message: _98.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Code;
                fromPartial(object: Partial<_98.Code>): _98.Code;
                fromAmino(object: _98.CodeAmino): _98.Code;
                toAmino(message: _98.Code): _98.CodeAmino;
                fromAminoMsg(object: _98.CodeAminoMsg): _98.Code;
                toAminoMsg(message: _98.Code): _98.CodeAminoMsg;
                fromProtoMsg(message: _98.CodeProtoMsg): _98.Code;
                toProto(message: _98.Code): Uint8Array;
                toProtoMsg(message: _98.Code): _98.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                encode(message: _98.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Contract;
                fromPartial(object: Partial<_98.Contract>): _98.Contract;
                fromAmino(object: _98.ContractAmino): _98.Contract;
                toAmino(message: _98.Contract): _98.ContractAmino;
                fromAminoMsg(object: _98.ContractAminoMsg): _98.Contract;
                toAminoMsg(message: _98.Contract): _98.ContractAminoMsg;
                fromProtoMsg(message: _98.ContractProtoMsg): _98.Contract;
                toProto(message: _98.Contract): Uint8Array;
                toProtoMsg(message: _98.Contract): _98.ContractProtoMsg;
            };
            Sequence: {
                typeUrl: string;
                encode(message: _98.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Sequence;
                fromPartial(object: Partial<_98.Sequence>): _98.Sequence;
                fromAmino(object: _98.SequenceAmino): _98.Sequence;
                toAmino(message: _98.Sequence): _98.SequenceAmino;
                fromAminoMsg(object: _98.SequenceAminoMsg): _98.Sequence;
                toAminoMsg(message: _98.Sequence): _98.SequenceAminoMsg;
                fromProtoMsg(message: _98.SequenceProtoMsg): _98.Sequence;
                toProto(message: _98.Sequence): Uint8Array;
                toProtoMsg(message: _98.Sequence): _98.SequenceProtoMsg;
            };
            ContractExecutionAuthorization: {
                typeUrl: string;
                encode(message: _97.ContractExecutionAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ContractExecutionAuthorization;
                fromPartial(object: Partial<_97.ContractExecutionAuthorization>): _97.ContractExecutionAuthorization;
                fromAmino(object: _97.ContractExecutionAuthorizationAmino): _97.ContractExecutionAuthorization;
                toAmino(message: _97.ContractExecutionAuthorization): _97.ContractExecutionAuthorizationAmino;
                fromAminoMsg(object: _97.ContractExecutionAuthorizationAminoMsg): _97.ContractExecutionAuthorization;
                toAminoMsg(message: _97.ContractExecutionAuthorization): _97.ContractExecutionAuthorizationAminoMsg;
                fromProtoMsg(message: _97.ContractExecutionAuthorizationProtoMsg): _97.ContractExecutionAuthorization;
                toProto(message: _97.ContractExecutionAuthorization): Uint8Array;
                toProtoMsg(message: _97.ContractExecutionAuthorization): _97.ContractExecutionAuthorizationProtoMsg;
            };
            ContractMigrationAuthorization: {
                typeUrl: string;
                encode(message: _97.ContractMigrationAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ContractMigrationAuthorization;
                fromPartial(object: Partial<_97.ContractMigrationAuthorization>): _97.ContractMigrationAuthorization;
                fromAmino(object: _97.ContractMigrationAuthorizationAmino): _97.ContractMigrationAuthorization;
                toAmino(message: _97.ContractMigrationAuthorization): _97.ContractMigrationAuthorizationAmino;
                fromAminoMsg(object: _97.ContractMigrationAuthorizationAminoMsg): _97.ContractMigrationAuthorization;
                toAminoMsg(message: _97.ContractMigrationAuthorization): _97.ContractMigrationAuthorizationAminoMsg;
                fromProtoMsg(message: _97.ContractMigrationAuthorizationProtoMsg): _97.ContractMigrationAuthorization;
                toProto(message: _97.ContractMigrationAuthorization): Uint8Array;
                toProtoMsg(message: _97.ContractMigrationAuthorization): _97.ContractMigrationAuthorizationProtoMsg;
            };
            ContractGrant: {
                typeUrl: string;
                encode(message: _97.ContractGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ContractGrant;
                fromPartial(object: Partial<_97.ContractGrant>): _97.ContractGrant;
                fromAmino(object: _97.ContractGrantAmino): _97.ContractGrant;
                toAmino(message: _97.ContractGrant): _97.ContractGrantAmino;
                fromAminoMsg(object: _97.ContractGrantAminoMsg): _97.ContractGrant;
                toAminoMsg(message: _97.ContractGrant): _97.ContractGrantAminoMsg;
                fromProtoMsg(message: _97.ContractGrantProtoMsg): _97.ContractGrant;
                toProto(message: _97.ContractGrant): Uint8Array;
                toProtoMsg(message: _97.ContractGrant): _97.ContractGrantProtoMsg;
            };
            MaxCallsLimit: {
                typeUrl: string;
                encode(message: _97.MaxCallsLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.MaxCallsLimit;
                fromPartial(object: Partial<_97.MaxCallsLimit>): _97.MaxCallsLimit;
                fromAmino(object: _97.MaxCallsLimitAmino): _97.MaxCallsLimit;
                toAmino(message: _97.MaxCallsLimit): _97.MaxCallsLimitAmino;
                fromAminoMsg(object: _97.MaxCallsLimitAminoMsg): _97.MaxCallsLimit;
                toAminoMsg(message: _97.MaxCallsLimit): _97.MaxCallsLimitAminoMsg;
                fromProtoMsg(message: _97.MaxCallsLimitProtoMsg): _97.MaxCallsLimit;
                toProto(message: _97.MaxCallsLimit): Uint8Array;
                toProtoMsg(message: _97.MaxCallsLimit): _97.MaxCallsLimitProtoMsg;
            };
            MaxFundsLimit: {
                typeUrl: string;
                encode(message: _97.MaxFundsLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.MaxFundsLimit;
                fromPartial(object: Partial<_97.MaxFundsLimit>): _97.MaxFundsLimit;
                fromAmino(object: _97.MaxFundsLimitAmino): _97.MaxFundsLimit;
                toAmino(message: _97.MaxFundsLimit): _97.MaxFundsLimitAmino;
                fromAminoMsg(object: _97.MaxFundsLimitAminoMsg): _97.MaxFundsLimit;
                toAminoMsg(message: _97.MaxFundsLimit): _97.MaxFundsLimitAminoMsg;
                fromProtoMsg(message: _97.MaxFundsLimitProtoMsg): _97.MaxFundsLimit;
                toProto(message: _97.MaxFundsLimit): Uint8Array;
                toProtoMsg(message: _97.MaxFundsLimit): _97.MaxFundsLimitProtoMsg;
            };
            CombinedLimit: {
                typeUrl: string;
                encode(message: _97.CombinedLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.CombinedLimit;
                fromPartial(object: Partial<_97.CombinedLimit>): _97.CombinedLimit;
                fromAmino(object: _97.CombinedLimitAmino): _97.CombinedLimit;
                toAmino(message: _97.CombinedLimit): _97.CombinedLimitAmino;
                fromAminoMsg(object: _97.CombinedLimitAminoMsg): _97.CombinedLimit;
                toAminoMsg(message: _97.CombinedLimit): _97.CombinedLimitAminoMsg;
                fromProtoMsg(message: _97.CombinedLimitProtoMsg): _97.CombinedLimit;
                toProto(message: _97.CombinedLimit): Uint8Array;
                toProtoMsg(message: _97.CombinedLimit): _97.CombinedLimitProtoMsg;
            };
            AllowAllMessagesFilter: {
                typeUrl: string;
                encode(_: _97.AllowAllMessagesFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.AllowAllMessagesFilter;
                fromPartial(_: Partial<_97.AllowAllMessagesFilter>): _97.AllowAllMessagesFilter;
                fromAmino(_: _97.AllowAllMessagesFilterAmino): _97.AllowAllMessagesFilter;
                toAmino(_: _97.AllowAllMessagesFilter): _97.AllowAllMessagesFilterAmino;
                fromAminoMsg(object: _97.AllowAllMessagesFilterAminoMsg): _97.AllowAllMessagesFilter;
                toAminoMsg(message: _97.AllowAllMessagesFilter): _97.AllowAllMessagesFilterAminoMsg;
                fromProtoMsg(message: _97.AllowAllMessagesFilterProtoMsg): _97.AllowAllMessagesFilter;
                toProto(message: _97.AllowAllMessagesFilter): Uint8Array;
                toProtoMsg(message: _97.AllowAllMessagesFilter): _97.AllowAllMessagesFilterProtoMsg;
            };
            AcceptedMessageKeysFilter: {
                typeUrl: string;
                encode(message: _97.AcceptedMessageKeysFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.AcceptedMessageKeysFilter;
                fromPartial(object: Partial<_97.AcceptedMessageKeysFilter>): _97.AcceptedMessageKeysFilter;
                fromAmino(object: _97.AcceptedMessageKeysFilterAmino): _97.AcceptedMessageKeysFilter;
                toAmino(message: _97.AcceptedMessageKeysFilter): _97.AcceptedMessageKeysFilterAmino;
                fromAminoMsg(object: _97.AcceptedMessageKeysFilterAminoMsg): _97.AcceptedMessageKeysFilter;
                toAminoMsg(message: _97.AcceptedMessageKeysFilter): _97.AcceptedMessageKeysFilterAminoMsg;
                fromProtoMsg(message: _97.AcceptedMessageKeysFilterProtoMsg): _97.AcceptedMessageKeysFilter;
                toProto(message: _97.AcceptedMessageKeysFilter): Uint8Array;
                toProtoMsg(message: _97.AcceptedMessageKeysFilter): _97.AcceptedMessageKeysFilterProtoMsg;
            };
            AcceptedMessagesFilter: {
                typeUrl: string;
                encode(message: _97.AcceptedMessagesFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.AcceptedMessagesFilter;
                fromPartial(object: Partial<_97.AcceptedMessagesFilter>): _97.AcceptedMessagesFilter;
                fromAmino(object: _97.AcceptedMessagesFilterAmino): _97.AcceptedMessagesFilter;
                toAmino(message: _97.AcceptedMessagesFilter): _97.AcceptedMessagesFilterAmino;
                fromAminoMsg(object: _97.AcceptedMessagesFilterAminoMsg): _97.AcceptedMessagesFilter;
                toAminoMsg(message: _97.AcceptedMessagesFilter): _97.AcceptedMessagesFilterAminoMsg;
                fromProtoMsg(message: _97.AcceptedMessagesFilterProtoMsg): _97.AcceptedMessagesFilter;
                toProto(message: _97.AcceptedMessagesFilter): Uint8Array;
                toProtoMsg(message: _97.AcceptedMessagesFilter): _97.AcceptedMessagesFilterProtoMsg;
            };
            Cosmwasm_wasmv1ContractAuthzLimitX_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _97.MaxCallsLimit | _97.MaxFundsLimit | _97.CombinedLimit;
            Cosmwasm_wasmv1ContractAuthzLimitX_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractAuthzLimitX_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmwasm_wasmv1ContractAuthzFilterX_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _97.AllowAllMessagesFilter | _97.AcceptedMessageKeysFilter | _97.AcceptedMessagesFilter;
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
                    v1: _260.MsgClientImpl;
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
                        contractInfo(request: _101.QueryContractInfoRequest): Promise<_101.QueryContractInfoResponse>;
                        contractHistory(request: _101.QueryContractHistoryRequest): Promise<_101.QueryContractHistoryResponse>;
                        contractsByCode(request: _101.QueryContractsByCodeRequest): Promise<_101.QueryContractsByCodeResponse>;
                        allContractState(request: _101.QueryAllContractStateRequest): Promise<_101.QueryAllContractStateResponse>;
                        rawContractState(request: _101.QueryRawContractStateRequest): Promise<_101.QueryRawContractStateResponse>;
                        smartContractState(request: _101.QuerySmartContractStateRequest): Promise<_101.QuerySmartContractStateResponse>;
                        code(request: _101.QueryCodeRequest): Promise<_101.QueryCodeResponse>;
                        codes(request?: _101.QueryCodesRequest): Promise<_101.QueryCodesResponse>;
                        pinnedCodes(request?: _101.QueryPinnedCodesRequest): Promise<_101.QueryPinnedCodesResponse>;
                        params(request?: _101.QueryParamsRequest): Promise<_101.QueryParamsResponse>;
                        contractsByCreator(request: _101.QueryContractsByCreatorRequest): Promise<_101.QueryContractsByCreatorResponse>;
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
                    v1: _258.LCDQueryClient;
                };
            };
        }>;
    };
}
