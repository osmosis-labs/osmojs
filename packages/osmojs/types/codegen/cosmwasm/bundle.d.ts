import * as _89 from "./wasm/v1/genesis";
import * as _90 from "./wasm/v1/ibc";
import * as _91 from "./wasm/v1/proposal";
import * as _92 from "./wasm/v1/query";
import * as _93 from "./wasm/v1/tx";
import * as _94 from "./wasm/v1/types";
import * as _255 from "./wasm/v1/query.lcd";
import * as _256 from "./wasm/v1/query.rpc.query";
import * as _257 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _257.MsgClientImpl;
            QueryClientImpl: typeof _256.QueryClientImpl;
            LCDQueryClient: typeof _255.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _93.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _93.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _93.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _93.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _93.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _93.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _93.MsgStoreCode): {
                        typeUrl: string;
                        value: _93.MsgStoreCode;
                    };
                    instantiateContract(value: _93.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _93.MsgInstantiateContract;
                    };
                    executeContract(value: _93.MsgExecuteContract): {
                        typeUrl: string;
                        value: _93.MsgExecuteContract;
                    };
                    migrateContract(value: _93.MsgMigrateContract): {
                        typeUrl: string;
                        value: _93.MsgMigrateContract;
                    };
                    updateAdmin(value: _93.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _93.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _93.MsgClearAdmin): {
                        typeUrl: string;
                        value: _93.MsgClearAdmin;
                    };
                };
                toJSON: {
                    storeCode(value: _93.MsgStoreCode): {
                        typeUrl: string;
                        value: any;
                    };
                    instantiateContract(value: _93.MsgInstantiateContract): {
                        typeUrl: string;
                        value: any;
                    };
                    executeContract(value: _93.MsgExecuteContract): {
                        typeUrl: string;
                        value: any;
                    };
                    migrateContract(value: _93.MsgMigrateContract): {
                        typeUrl: string;
                        value: any;
                    };
                    updateAdmin(value: _93.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: any;
                    };
                    clearAdmin(value: _93.MsgClearAdmin): {
                        typeUrl: string;
                        value: any;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                };
                fromPartial: {
                    storeCode(value: _93.MsgStoreCode): {
                        typeUrl: string;
                        value: _93.MsgStoreCode;
                    };
                    instantiateContract(value: _93.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _93.MsgInstantiateContract;
                    };
                    executeContract(value: _93.MsgExecuteContract): {
                        typeUrl: string;
                        value: _93.MsgExecuteContract;
                    };
                    migrateContract(value: _93.MsgMigrateContract): {
                        typeUrl: string;
                        value: _93.MsgMigrateContract;
                    };
                    updateAdmin(value: _93.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _93.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _93.MsgClearAdmin): {
                        typeUrl: string;
                        value: _93.MsgClearAdmin;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: ({ sender, wasmByteCode, instantiatePermission }: _93.MsgStoreCode) => {
                        sender: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            address: string;
                        };
                    };
                    fromAmino: ({ sender, wasm_byte_code, instantiate_permission }: {
                        sender: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            address: string;
                        };
                    }) => _93.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds }: _93.MsgInstantiateContract) => {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, admin, code_id, label, msg, funds }: {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _93.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, msg, funds }: _93.MsgExecuteContract) => {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, contract, msg, funds }: {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _93.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, codeId, msg }: _93.MsgMigrateContract) => {
                        sender: string;
                        contract: string;
                        code_id: string;
                        msg: Uint8Array;
                    };
                    fromAmino: ({ sender, contract, code_id, msg }: {
                        sender: string;
                        contract: string;
                        code_id: string;
                        msg: Uint8Array;
                    }) => _93.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, newAdmin, contract }: _93.MsgUpdateAdmin) => {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, new_admin, contract }: {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    }) => _93.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, contract }: _93.MsgClearAdmin) => {
                        sender: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, contract }: {
                        sender: string;
                        contract: string;
                    }) => _93.MsgClearAdmin;
                };
            };
            accessTypeFromJSON(object: any): _94.AccessType;
            accessTypeToJSON(object: _94.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _94.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _94.ContractCodeHistoryOperationType): string;
            AccessType: typeof _94.AccessType;
            AccessTypeSDKType: typeof _94.AccessTypeSDKType;
            ContractCodeHistoryOperationType: typeof _94.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _94.ContractCodeHistoryOperationTypeSDKType;
            AccessTypeParam: {
                encode(message: _94.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.AccessTypeParam;
                fromPartial(object: {
                    value?: _94.AccessType;
                }): _94.AccessTypeParam;
                fromSDK(object: _94.AccessTypeParamSDKType): _94.AccessTypeParam;
                toSDK(message: _94.AccessTypeParam): _94.AccessTypeParamSDKType;
            };
            AccessConfig: {
                encode(message: _94.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.AccessConfig;
                fromPartial(object: {
                    permission?: _94.AccessType;
                    address?: string;
                }): _94.AccessConfig;
                fromSDK(object: _94.AccessConfigSDKType): _94.AccessConfig;
                toSDK(message: _94.AccessConfig): _94.AccessConfigSDKType;
            };
            Params: {
                encode(message: _94.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Params;
                fromPartial(object: {
                    codeUploadAccess?: {
                        permission?: _94.AccessType;
                        address?: string;
                    };
                    instantiateDefaultPermission?: _94.AccessType;
                    maxWasmCodeSize?: any;
                }): _94.Params;
                fromSDK(object: _94.ParamsSDKType): _94.Params;
                toSDK(message: _94.Params): _94.ParamsSDKType;
            };
            CodeInfo: {
                encode(message: _94.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.CodeInfo;
                fromPartial(object: {
                    codeHash?: Uint8Array;
                    creator?: string;
                    instantiateConfig?: {
                        permission?: _94.AccessType;
                        address?: string;
                    };
                }): _94.CodeInfo;
                fromSDK(object: _94.CodeInfoSDKType): _94.CodeInfo;
                toSDK(message: _94.CodeInfo): _94.CodeInfoSDKType;
            };
            ContractInfo: {
                encode(message: _94.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ContractInfo;
                fromPartial(object: {
                    codeId?: any;
                    creator?: string;
                    admin?: string;
                    label?: string;
                    created?: {
                        blockHeight?: any;
                        txIndex?: any;
                    };
                    ibcPortId?: string;
                    extension?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _94.ContractInfo;
                fromSDK(object: _94.ContractInfoSDKType): _94.ContractInfo;
                toSDK(message: _94.ContractInfo): _94.ContractInfoSDKType;
            };
            ContractCodeHistoryEntry: {
                encode(message: _94.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ContractCodeHistoryEntry;
                fromPartial(object: {
                    operation?: _94.ContractCodeHistoryOperationType;
                    codeId?: any;
                    updated?: {
                        blockHeight?: any;
                        txIndex?: any;
                    };
                    msg?: Uint8Array;
                }): _94.ContractCodeHistoryEntry;
                fromSDK(object: _94.ContractCodeHistoryEntrySDKType): _94.ContractCodeHistoryEntry;
                toSDK(message: _94.ContractCodeHistoryEntry): _94.ContractCodeHistoryEntrySDKType;
            };
            AbsoluteTxPosition: {
                encode(message: _94.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.AbsoluteTxPosition;
                fromPartial(object: {
                    blockHeight?: any;
                    txIndex?: any;
                }): _94.AbsoluteTxPosition;
                fromSDK(object: _94.AbsoluteTxPositionSDKType): _94.AbsoluteTxPosition;
                toSDK(message: _94.AbsoluteTxPosition): _94.AbsoluteTxPositionSDKType;
            };
            Model: {
                encode(message: _94.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Model;
                fromPartial(object: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                }): _94.Model;
                fromSDK(object: _94.ModelSDKType): _94.Model;
                toSDK(message: _94.Model): _94.ModelSDKType;
            };
            MsgStoreCode: {
                encode(message: _93.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgStoreCode;
                fromPartial(object: {
                    sender?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _94.AccessType;
                        address?: string;
                    };
                }): _93.MsgStoreCode;
                fromSDK(object: _93.MsgStoreCodeSDKType): _93.MsgStoreCode;
                toSDK(message: _93.MsgStoreCode): _93.MsgStoreCodeSDKType;
            };
            MsgStoreCodeResponse: {
                encode(message: _93.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgStoreCodeResponseSDKType;
                fromPartial(object: {
                    codeId?: any;
                }): _93.MsgStoreCodeResponse;
                fromSDK(object: _93.MsgStoreCodeResponseSDKType): _93.MsgStoreCodeResponse;
                toSDK(message: _93.MsgStoreCodeResponse): _93.MsgStoreCodeResponseSDKType;
            };
            MsgInstantiateContract: {
                encode(message: _93.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgInstantiateContract;
                fromPartial(object: {
                    sender?: string;
                    admin?: string;
                    codeId?: any;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _93.MsgInstantiateContract;
                fromSDK(object: _93.MsgInstantiateContractSDKType): _93.MsgInstantiateContract;
                toSDK(message: _93.MsgInstantiateContract): _93.MsgInstantiateContractSDKType;
            };
            MsgInstantiateContractResponse: {
                encode(message: _93.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgInstantiateContractResponseSDKType;
                fromPartial(object: {
                    address?: string;
                    data?: Uint8Array;
                }): _93.MsgInstantiateContractResponse;
                fromSDK(object: _93.MsgInstantiateContractResponseSDKType): _93.MsgInstantiateContractResponse;
                toSDK(message: _93.MsgInstantiateContractResponse): _93.MsgInstantiateContractResponseSDKType;
            };
            MsgExecuteContract: {
                encode(message: _93.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgExecuteContract;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _93.MsgExecuteContract;
                fromSDK(object: _93.MsgExecuteContractSDKType): _93.MsgExecuteContract;
                toSDK(message: _93.MsgExecuteContract): _93.MsgExecuteContractSDKType;
            };
            MsgExecuteContractResponse: {
                encode(message: _93.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgExecuteContractResponseSDKType;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _93.MsgExecuteContractResponse;
                fromSDK(object: _93.MsgExecuteContractResponseSDKType): _93.MsgExecuteContractResponse;
                toSDK(message: _93.MsgExecuteContractResponse): _93.MsgExecuteContractResponseSDKType;
            };
            MsgMigrateContract: {
                encode(message: _93.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgMigrateContract;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    codeId?: any;
                    msg?: Uint8Array;
                }): _93.MsgMigrateContract;
                fromSDK(object: _93.MsgMigrateContractSDKType): _93.MsgMigrateContract;
                toSDK(message: _93.MsgMigrateContract): _93.MsgMigrateContractSDKType;
            };
            MsgMigrateContractResponse: {
                encode(message: _93.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgMigrateContractResponseSDKType;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _93.MsgMigrateContractResponse;
                fromSDK(object: _93.MsgMigrateContractResponseSDKType): _93.MsgMigrateContractResponse;
                toSDK(message: _93.MsgMigrateContractResponse): _93.MsgMigrateContractResponseSDKType;
            };
            MsgUpdateAdmin: {
                encode(message: _93.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgUpdateAdmin;
                fromPartial(object: {
                    sender?: string;
                    newAdmin?: string;
                    contract?: string;
                }): _93.MsgUpdateAdmin;
                fromSDK(object: _93.MsgUpdateAdminSDKType): _93.MsgUpdateAdmin;
                toSDK(message: _93.MsgUpdateAdmin): _93.MsgUpdateAdminSDKType;
            };
            MsgUpdateAdminResponse: {
                encode(_: _93.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgUpdateAdminResponseSDKType;
                fromPartial(_: {}): _93.MsgUpdateAdminResponse;
                fromSDK(_: _93.MsgUpdateAdminResponseSDKType): _93.MsgUpdateAdminResponse;
                toSDK(_: _93.MsgUpdateAdminResponse): _93.MsgUpdateAdminResponseSDKType;
            };
            MsgClearAdmin: {
                encode(message: _93.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgClearAdmin;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                }): _93.MsgClearAdmin;
                fromSDK(object: _93.MsgClearAdminSDKType): _93.MsgClearAdmin;
                toSDK(message: _93.MsgClearAdmin): _93.MsgClearAdminSDKType;
            };
            MsgClearAdminResponse: {
                encode(_: _93.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgClearAdminResponseSDKType;
                fromPartial(_: {}): _93.MsgClearAdminResponse;
                fromSDK(_: _93.MsgClearAdminResponseSDKType): _93.MsgClearAdminResponse;
                toSDK(_: _93.MsgClearAdminResponse): _93.MsgClearAdminResponseSDKType;
            };
            QueryContractInfoRequest: {
                encode(message: _92.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryContractInfoRequest;
                fromPartial(object: {
                    address?: string;
                }): _92.QueryContractInfoRequest;
                fromSDK(object: _92.QueryContractInfoRequestSDKType): _92.QueryContractInfoRequest;
                toSDK(message: _92.QueryContractInfoRequest): _92.QueryContractInfoRequestSDKType;
            };
            QueryContractInfoResponse: {
                encode(message: _92.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryContractInfoResponseSDKType;
                fromPartial(object: {
                    address?: string;
                    contractInfo?: {
                        codeId?: any;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            blockHeight?: any;
                            txIndex?: any;
                        };
                        ibcPortId?: string;
                        extension?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _92.QueryContractInfoResponse;
                fromSDK(object: _92.QueryContractInfoResponseSDKType): _92.QueryContractInfoResponse;
                toSDK(message: _92.QueryContractInfoResponse): _92.QueryContractInfoResponseSDKType;
            };
            QueryContractHistoryRequest: {
                encode(message: _92.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryContractHistoryRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _92.QueryContractHistoryRequest;
                fromSDK(object: _92.QueryContractHistoryRequestSDKType): _92.QueryContractHistoryRequest;
                toSDK(message: _92.QueryContractHistoryRequest): _92.QueryContractHistoryRequestSDKType;
            };
            QueryContractHistoryResponse: {
                encode(message: _92.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryContractHistoryResponseSDKType;
                fromPartial(object: {
                    entries?: {
                        operation?: _94.ContractCodeHistoryOperationType;
                        codeId?: any;
                        updated?: {
                            blockHeight?: any;
                            txIndex?: any;
                        };
                        msg?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _92.QueryContractHistoryResponse;
                fromSDK(object: _92.QueryContractHistoryResponseSDKType): _92.QueryContractHistoryResponse;
                toSDK(message: _92.QueryContractHistoryResponse): _92.QueryContractHistoryResponseSDKType;
            };
            QueryContractsByCodeRequest: {
                encode(message: _92.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryContractsByCodeRequest;
                fromPartial(object: {
                    codeId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _92.QueryContractsByCodeRequest;
                fromSDK(object: _92.QueryContractsByCodeRequestSDKType): _92.QueryContractsByCodeRequest;
                toSDK(message: _92.QueryContractsByCodeRequest): _92.QueryContractsByCodeRequestSDKType;
            };
            QueryContractsByCodeResponse: {
                encode(message: _92.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryContractsByCodeResponseSDKType;
                fromPartial(object: {
                    contracts?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _92.QueryContractsByCodeResponse;
                fromSDK(object: _92.QueryContractsByCodeResponseSDKType): _92.QueryContractsByCodeResponse;
                toSDK(message: _92.QueryContractsByCodeResponse): _92.QueryContractsByCodeResponseSDKType;
            };
            QueryAllContractStateRequest: {
                encode(message: _92.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryAllContractStateRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _92.QueryAllContractStateRequest;
                fromSDK(object: _92.QueryAllContractStateRequestSDKType): _92.QueryAllContractStateRequest;
                toSDK(message: _92.QueryAllContractStateRequest): _92.QueryAllContractStateRequestSDKType;
            };
            QueryAllContractStateResponse: {
                encode(message: _92.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryAllContractStateResponseSDKType;
                fromPartial(object: {
                    models?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _92.QueryAllContractStateResponse;
                fromSDK(object: _92.QueryAllContractStateResponseSDKType): _92.QueryAllContractStateResponse;
                toSDK(message: _92.QueryAllContractStateResponse): _92.QueryAllContractStateResponseSDKType;
            };
            QueryRawContractStateRequest: {
                encode(message: _92.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryRawContractStateRequest;
                fromPartial(object: {
                    address?: string;
                    queryData?: Uint8Array;
                }): _92.QueryRawContractStateRequest;
                fromSDK(object: _92.QueryRawContractStateRequestSDKType): _92.QueryRawContractStateRequest;
                toSDK(message: _92.QueryRawContractStateRequest): _92.QueryRawContractStateRequestSDKType;
            };
            QueryRawContractStateResponse: {
                encode(message: _92.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryRawContractStateResponseSDKType;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _92.QueryRawContractStateResponse;
                fromSDK(object: _92.QueryRawContractStateResponseSDKType): _92.QueryRawContractStateResponse;
                toSDK(message: _92.QueryRawContractStateResponse): _92.QueryRawContractStateResponseSDKType;
            };
            QuerySmartContractStateRequest: {
                encode(message: _92.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QuerySmartContractStateRequest;
                fromPartial(object: {
                    address?: string;
                    queryData?: Uint8Array;
                }): _92.QuerySmartContractStateRequest;
                fromSDK(object: _92.QuerySmartContractStateRequestSDKType): _92.QuerySmartContractStateRequest;
                toSDK(message: _92.QuerySmartContractStateRequest): _92.QuerySmartContractStateRequestSDKType;
            };
            QuerySmartContractStateResponse: {
                encode(message: _92.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QuerySmartContractStateResponseSDKType;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _92.QuerySmartContractStateResponse;
                fromSDK(object: _92.QuerySmartContractStateResponseSDKType): _92.QuerySmartContractStateResponse;
                toSDK(message: _92.QuerySmartContractStateResponse): _92.QuerySmartContractStateResponseSDKType;
            };
            QueryCodeRequest: {
                encode(message: _92.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryCodeRequest;
                fromPartial(object: {
                    codeId?: any;
                }): _92.QueryCodeRequest;
                fromSDK(object: _92.QueryCodeRequestSDKType): _92.QueryCodeRequest;
                toSDK(message: _92.QueryCodeRequest): _92.QueryCodeRequestSDKType;
            };
            CodeInfoResponse: {
                encode(message: _92.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.CodeInfoResponse;
                fromPartial(object: {
                    codeId?: any;
                    creator?: string;
                    dataHash?: Uint8Array;
                }): _92.CodeInfoResponse;
                fromSDK(object: _92.CodeInfoResponseSDKType): _92.CodeInfoResponse;
                toSDK(message: _92.CodeInfoResponse): _92.CodeInfoResponseSDKType;
            };
            QueryCodeResponse: {
                encode(message: _92.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryCodeResponseSDKType;
                fromPartial(object: {
                    codeInfo?: {
                        codeId?: any;
                        creator?: string;
                        dataHash?: Uint8Array;
                    };
                    data?: Uint8Array;
                }): _92.QueryCodeResponse;
                fromSDK(object: _92.QueryCodeResponseSDKType): _92.QueryCodeResponse;
                toSDK(message: _92.QueryCodeResponse): _92.QueryCodeResponseSDKType;
            };
            QueryCodesRequest: {
                encode(message: _92.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryCodesRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _92.QueryCodesRequest;
                fromSDK(object: _92.QueryCodesRequestSDKType): _92.QueryCodesRequest;
                toSDK(message: _92.QueryCodesRequest): _92.QueryCodesRequestSDKType;
            };
            QueryCodesResponse: {
                encode(message: _92.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryCodesResponseSDKType;
                fromPartial(object: {
                    codeInfos?: {
                        codeId?: any;
                        creator?: string;
                        dataHash?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _92.QueryCodesResponse;
                fromSDK(object: _92.QueryCodesResponseSDKType): _92.QueryCodesResponse;
                toSDK(message: _92.QueryCodesResponse): _92.QueryCodesResponseSDKType;
            };
            QueryPinnedCodesRequest: {
                encode(message: _92.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryPinnedCodesRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _92.QueryPinnedCodesRequest;
                fromSDK(object: _92.QueryPinnedCodesRequestSDKType): _92.QueryPinnedCodesRequest;
                toSDK(message: _92.QueryPinnedCodesRequest): _92.QueryPinnedCodesRequestSDKType;
            };
            QueryPinnedCodesResponse: {
                encode(message: _92.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryPinnedCodesResponseSDKType;
                fromPartial(object: {
                    codeIds?: any[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _92.QueryPinnedCodesResponse;
                fromSDK(object: _92.QueryPinnedCodesResponseSDKType): _92.QueryPinnedCodesResponse;
                toSDK(message: _92.QueryPinnedCodesResponse): _92.QueryPinnedCodesResponseSDKType;
            };
            StoreCodeProposal: {
                encode(message: _91.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.StoreCodeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _94.AccessType;
                        address?: string;
                    };
                }): _91.StoreCodeProposal;
                fromSDK(object: _91.StoreCodeProposalSDKType): _91.StoreCodeProposal;
                toSDK(message: _91.StoreCodeProposal): _91.StoreCodeProposalSDKType;
            };
            InstantiateContractProposal: {
                encode(message: _91.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.InstantiateContractProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    admin?: string;
                    codeId?: any;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _91.InstantiateContractProposal;
                fromSDK(object: _91.InstantiateContractProposalSDKType): _91.InstantiateContractProposal;
                toSDK(message: _91.InstantiateContractProposal): _91.InstantiateContractProposalSDKType;
            };
            MigrateContractProposal: {
                encode(message: _91.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MigrateContractProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    codeId?: any;
                    msg?: Uint8Array;
                }): _91.MigrateContractProposal;
                fromSDK(object: _91.MigrateContractProposalSDKType): _91.MigrateContractProposal;
                toSDK(message: _91.MigrateContractProposal): _91.MigrateContractProposalSDKType;
            };
            SudoContractProposal: {
                encode(message: _91.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.SudoContractProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    msg?: Uint8Array;
                }): _91.SudoContractProposal;
                fromSDK(object: _91.SudoContractProposalSDKType): _91.SudoContractProposal;
                toSDK(message: _91.SudoContractProposal): _91.SudoContractProposalSDKType;
            };
            ExecuteContractProposal: {
                encode(message: _91.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.ExecuteContractProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _91.ExecuteContractProposal;
                fromSDK(object: _91.ExecuteContractProposalSDKType): _91.ExecuteContractProposal;
                toSDK(message: _91.ExecuteContractProposal): _91.ExecuteContractProposalSDKType;
            };
            UpdateAdminProposal: {
                encode(message: _91.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.UpdateAdminProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    newAdmin?: string;
                    contract?: string;
                }): _91.UpdateAdminProposal;
                fromSDK(object: _91.UpdateAdminProposalSDKType): _91.UpdateAdminProposal;
                toSDK(message: _91.UpdateAdminProposal): _91.UpdateAdminProposalSDKType;
            };
            ClearAdminProposal: {
                encode(message: _91.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.ClearAdminProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                }): _91.ClearAdminProposal;
                fromSDK(object: _91.ClearAdminProposalSDKType): _91.ClearAdminProposal;
                toSDK(message: _91.ClearAdminProposal): _91.ClearAdminProposalSDKType;
            };
            PinCodesProposal: {
                encode(message: _91.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.PinCodesProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    codeIds?: any[];
                }): _91.PinCodesProposal;
                fromSDK(object: _91.PinCodesProposalSDKType): _91.PinCodesProposal;
                toSDK(message: _91.PinCodesProposal): _91.PinCodesProposalSDKType;
            };
            UnpinCodesProposal: {
                encode(message: _91.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.UnpinCodesProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    codeIds?: any[];
                }): _91.UnpinCodesProposal;
                fromSDK(object: _91.UnpinCodesProposalSDKType): _91.UnpinCodesProposal;
                toSDK(message: _91.UnpinCodesProposal): _91.UnpinCodesProposalSDKType;
            };
            MsgIBCSend: {
                encode(message: _90.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgIBCSend;
                fromPartial(object: {
                    channel?: string;
                    timeoutHeight?: any;
                    timeoutTimestamp?: any;
                    data?: Uint8Array;
                }): _90.MsgIBCSend;
                fromSDK(object: _90.MsgIBCSendSDKType): _90.MsgIBCSend;
                toSDK(message: _90.MsgIBCSend): _90.MsgIBCSendSDKType;
            };
            MsgIBCCloseChannel: {
                encode(message: _90.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgIBCCloseChannel;
                fromPartial(object: {
                    channel?: string;
                }): _90.MsgIBCCloseChannel;
                fromSDK(object: _90.MsgIBCCloseChannelSDKType): _90.MsgIBCCloseChannel;
                toSDK(message: _90.MsgIBCCloseChannel): _90.MsgIBCCloseChannelSDKType;
            };
            GenesisState: {
                encode(message: _89.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.GenesisState;
                fromPartial(object: {
                    params?: {
                        codeUploadAccess?: {
                            permission?: _94.AccessType;
                            address?: string;
                        };
                        instantiateDefaultPermission?: _94.AccessType;
                        maxWasmCodeSize?: any;
                    };
                    codes?: {
                        codeId?: any;
                        codeInfo?: {
                            codeHash?: Uint8Array;
                            creator?: string;
                            instantiateConfig?: {
                                permission?: _94.AccessType;
                                address?: string;
                            };
                        };
                        codeBytes?: Uint8Array;
                        pinned?: boolean;
                    }[];
                    contracts?: {
                        contractAddress?: string;
                        contractInfo?: {
                            codeId?: any;
                            creator?: string;
                            admin?: string;
                            label?: string;
                            created?: {
                                blockHeight?: any;
                                txIndex?: any;
                            };
                            ibcPortId?: string;
                            extension?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        contractState?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }[];
                    sequences?: {
                        idKey?: Uint8Array;
                        value?: any;
                    }[];
                    genMsgs?: {
                        storeCode?: {
                            sender?: string;
                            wasmByteCode?: Uint8Array;
                            instantiatePermission?: {
                                permission?: _94.AccessType;
                                address?: string;
                            };
                        };
                        instantiateContract?: {
                            sender?: string;
                            admin?: string;
                            codeId?: any;
                            label?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                        executeContract?: {
                            sender?: string;
                            contract?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[];
                }): _89.GenesisState;
                fromSDK(object: _89.GenesisStateSDKType): _89.GenesisState;
                toSDK(message: _89.GenesisState): _89.GenesisStateSDKType;
            };
            GenesisState_GenMsgs: {
                encode(message: _89.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.GenesisState_GenMsgs;
                fromPartial(object: {
                    storeCode?: {
                        sender?: string;
                        wasmByteCode?: Uint8Array;
                        instantiatePermission?: {
                            permission?: _94.AccessType;
                            address?: string;
                        };
                    };
                    instantiateContract?: {
                        sender?: string;
                        admin?: string;
                        codeId?: any;
                        label?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    executeContract?: {
                        sender?: string;
                        contract?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _89.GenesisState_GenMsgs;
                fromSDK(object: _89.GenesisState_GenMsgsSDKType): _89.GenesisState_GenMsgs;
                toSDK(message: _89.GenesisState_GenMsgs): _89.GenesisState_GenMsgsSDKType;
            };
            Code: {
                encode(message: _89.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Code;
                fromPartial(object: {
                    codeId?: any;
                    codeInfo?: {
                        codeHash?: Uint8Array;
                        creator?: string;
                        instantiateConfig?: {
                            permission?: _94.AccessType;
                            address?: string;
                        };
                    };
                    codeBytes?: Uint8Array;
                    pinned?: boolean;
                }): _89.Code;
                fromSDK(object: _89.CodeSDKType): _89.Code;
                toSDK(message: _89.Code): _89.CodeSDKType;
            };
            Contract: {
                encode(message: _89.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Contract;
                fromPartial(object: {
                    contractAddress?: string;
                    contractInfo?: {
                        codeId?: any;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            blockHeight?: any;
                            txIndex?: any;
                        };
                        ibcPortId?: string;
                        extension?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                    contractState?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                }): _89.Contract;
                fromSDK(object: _89.ContractSDKType): _89.Contract;
                toSDK(message: _89.Contract): _89.ContractSDKType;
            };
            Sequence: {
                encode(message: _89.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Sequence;
                fromPartial(object: {
                    idKey?: Uint8Array;
                    value?: any;
                }): _89.Sequence;
                fromSDK(object: _89.SequenceSDKType): _89.Sequence;
                toSDK(message: _89.Sequence): _89.SequenceSDKType;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("@osmonauts/helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            cosmwasm: {
                wasm: {
                    v1: _257.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpc }: {
            rpc: import("@osmonauts/helpers").Rpc;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: import("../cosmos/app/v1alpha1/query.rpc.query").QueryClientImpl;
                };
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.rpc.query").QueryClientImpl;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.rpc.query").QueryClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.rpc.query").QueryClientImpl;
                };
                base: {
                    tendermint: {
                        v1beta1: any;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.rpc.query").QueryClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.rpc.query").QueryClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.rpc.query").QueryClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.rpc.query").QueryClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/query.rpc.query").QueryClientImpl;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.rpc.query").QueryClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.rpc.query").QueryClientImpl;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.rpc.query").QueryClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.rpc.query").QueryClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.rpc.query").QueryClientImpl;
                };
                tx: {
                    v1beta1: any;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.rpc.query").QueryClientImpl;
                };
            };
            cosmwasm: {
                wasm: {
                    v1: _256.QueryClientImpl;
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
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
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
                    v1: _255.LCDQueryClient;
                };
            };
        }>;
    };
}
