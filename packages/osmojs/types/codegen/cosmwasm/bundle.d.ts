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
                        value: unknown;
                    };
                    instantiateContract(value: _93.MsgInstantiateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    executeContract(value: _93.MsgExecuteContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    migrateContract(value: _93.MsgMigrateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateAdmin(value: _93.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    clearAdmin(value: _93.MsgClearAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _93.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _93.MsgInstantiateContract;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _93.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _93.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _93.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _93.MsgClearAdmin;
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
                fromJSON(object: any): _94.AccessTypeParam;
                toJSON(message: _94.AccessTypeParam): unknown;
                fromPartial(object: {
                    value?: _94.AccessType;
                }): _94.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _94.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.AccessConfig;
                fromJSON(object: any): _94.AccessConfig;
                toJSON(message: _94.AccessConfig): unknown;
                fromPartial(object: {
                    permission?: _94.AccessType;
                    address?: string;
                }): _94.AccessConfig;
            };
            Params: {
                encode(message: _94.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Params;
                fromJSON(object: any): _94.Params;
                toJSON(message: _94.Params): unknown;
                fromPartial(object: {
                    codeUploadAccess?: {
                        permission?: _94.AccessType;
                        address?: string;
                    };
                    instantiateDefaultPermission?: _94.AccessType;
                    maxWasmCodeSize?: any;
                }): _94.Params;
            };
            CodeInfo: {
                encode(message: _94.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.CodeInfo;
                fromJSON(object: any): _94.CodeInfo;
                toJSON(message: _94.CodeInfo): unknown;
                fromPartial(object: {
                    codeHash?: Uint8Array;
                    creator?: string;
                    instantiateConfig?: {
                        permission?: _94.AccessType;
                        address?: string;
                    };
                }): _94.CodeInfo;
            };
            ContractInfo: {
                encode(message: _94.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ContractInfo;
                fromJSON(object: any): _94.ContractInfo;
                toJSON(message: _94.ContractInfo): unknown;
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
            };
            ContractCodeHistoryEntry: {
                encode(message: _94.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ContractCodeHistoryEntry;
                fromJSON(object: any): _94.ContractCodeHistoryEntry;
                toJSON(message: _94.ContractCodeHistoryEntry): unknown;
                fromPartial(object: {
                    operation?: _94.ContractCodeHistoryOperationType;
                    codeId?: any;
                    updated?: {
                        blockHeight?: any;
                        txIndex?: any;
                    };
                    msg?: Uint8Array;
                }): _94.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _94.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.AbsoluteTxPosition;
                fromJSON(object: any): _94.AbsoluteTxPosition;
                toJSON(message: _94.AbsoluteTxPosition): unknown;
                fromPartial(object: {
                    blockHeight?: any;
                    txIndex?: any;
                }): _94.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _94.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Model;
                fromJSON(object: any): _94.Model;
                toJSON(message: _94.Model): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                }): _94.Model;
            };
            MsgStoreCode: {
                encode(message: _93.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgStoreCode;
                fromJSON(object: any): _93.MsgStoreCode;
                toJSON(message: _93.MsgStoreCode): unknown;
                fromPartial(object: {
                    sender?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _94.AccessType;
                        address?: string;
                    };
                }): _93.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _93.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgStoreCodeResponseSDKType;
                fromJSON(object: any): _93.MsgStoreCodeResponse;
                toJSON(message: _93.MsgStoreCodeResponse): unknown;
                fromPartial(object: {
                    codeId?: any;
                }): _93.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _93.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgInstantiateContract;
                fromJSON(object: any): _93.MsgInstantiateContract;
                toJSON(message: _93.MsgInstantiateContract): unknown;
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
            };
            MsgInstantiateContractResponse: {
                encode(message: _93.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgInstantiateContractResponseSDKType;
                fromJSON(object: any): _93.MsgInstantiateContractResponse;
                toJSON(message: _93.MsgInstantiateContractResponse): unknown;
                fromPartial(object: {
                    address?: string;
                    data?: Uint8Array;
                }): _93.MsgInstantiateContractResponse;
            };
            MsgExecuteContract: {
                encode(message: _93.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgExecuteContract;
                fromJSON(object: any): _93.MsgExecuteContract;
                toJSON(message: _93.MsgExecuteContract): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _93.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _93.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgExecuteContractResponseSDKType;
                fromJSON(object: any): _93.MsgExecuteContractResponse;
                toJSON(message: _93.MsgExecuteContractResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _93.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _93.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgMigrateContract;
                fromJSON(object: any): _93.MsgMigrateContract;
                toJSON(message: _93.MsgMigrateContract): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    codeId?: any;
                    msg?: Uint8Array;
                }): _93.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _93.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgMigrateContractResponseSDKType;
                fromJSON(object: any): _93.MsgMigrateContractResponse;
                toJSON(message: _93.MsgMigrateContractResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _93.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _93.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgUpdateAdmin;
                fromJSON(object: any): _93.MsgUpdateAdmin;
                toJSON(message: _93.MsgUpdateAdmin): unknown;
                fromPartial(object: {
                    sender?: string;
                    newAdmin?: string;
                    contract?: string;
                }): _93.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _93.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgUpdateAdminResponseSDKType;
                fromJSON(_: any): _93.MsgUpdateAdminResponse;
                toJSON(_: _93.MsgUpdateAdminResponse): unknown;
                fromPartial(_: {}): _93.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _93.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgClearAdmin;
                fromJSON(object: any): _93.MsgClearAdmin;
                toJSON(message: _93.MsgClearAdmin): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                }): _93.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _93.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgClearAdminResponseSDKType;
                fromJSON(_: any): _93.MsgClearAdminResponse;
                toJSON(_: _93.MsgClearAdminResponse): unknown;
                fromPartial(_: {}): _93.MsgClearAdminResponse;
            };
            QueryContractInfoRequest: {
                encode(message: _92.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryContractInfoRequest;
                fromJSON(object: any): _92.QueryContractInfoRequest;
                toJSON(message: _92.QueryContractInfoRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _92.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _92.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryContractInfoResponseSDKType;
                fromJSON(object: any): _92.QueryContractInfoResponse;
                toJSON(message: _92.QueryContractInfoResponse): unknown;
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
            };
            QueryContractHistoryRequest: {
                encode(message: _92.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryContractHistoryRequest;
                fromJSON(object: any): _92.QueryContractHistoryRequest;
                toJSON(message: _92.QueryContractHistoryRequest): unknown;
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
            };
            QueryContractHistoryResponse: {
                encode(message: _92.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryContractHistoryResponseSDKType;
                fromJSON(object: any): _92.QueryContractHistoryResponse;
                toJSON(message: _92.QueryContractHistoryResponse): unknown;
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
            };
            QueryContractsByCodeRequest: {
                encode(message: _92.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryContractsByCodeRequest;
                fromJSON(object: any): _92.QueryContractsByCodeRequest;
                toJSON(message: _92.QueryContractsByCodeRequest): unknown;
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
            };
            QueryContractsByCodeResponse: {
                encode(message: _92.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryContractsByCodeResponseSDKType;
                fromJSON(object: any): _92.QueryContractsByCodeResponse;
                toJSON(message: _92.QueryContractsByCodeResponse): unknown;
                fromPartial(object: {
                    contracts?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _92.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _92.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryAllContractStateRequest;
                fromJSON(object: any): _92.QueryAllContractStateRequest;
                toJSON(message: _92.QueryAllContractStateRequest): unknown;
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
            };
            QueryAllContractStateResponse: {
                encode(message: _92.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryAllContractStateResponseSDKType;
                fromJSON(object: any): _92.QueryAllContractStateResponse;
                toJSON(message: _92.QueryAllContractStateResponse): unknown;
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
            };
            QueryRawContractStateRequest: {
                encode(message: _92.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryRawContractStateRequest;
                fromJSON(object: any): _92.QueryRawContractStateRequest;
                toJSON(message: _92.QueryRawContractStateRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    queryData?: Uint8Array;
                }): _92.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _92.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryRawContractStateResponseSDKType;
                fromJSON(object: any): _92.QueryRawContractStateResponse;
                toJSON(message: _92.QueryRawContractStateResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _92.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _92.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QuerySmartContractStateRequest;
                fromJSON(object: any): _92.QuerySmartContractStateRequest;
                toJSON(message: _92.QuerySmartContractStateRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    queryData?: Uint8Array;
                }): _92.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _92.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QuerySmartContractStateResponseSDKType;
                fromJSON(object: any): _92.QuerySmartContractStateResponse;
                toJSON(message: _92.QuerySmartContractStateResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _92.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _92.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryCodeRequest;
                fromJSON(object: any): _92.QueryCodeRequest;
                toJSON(message: _92.QueryCodeRequest): unknown;
                fromPartial(object: {
                    codeId?: any;
                }): _92.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _92.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.CodeInfoResponse;
                fromJSON(object: any): _92.CodeInfoResponse;
                toJSON(message: _92.CodeInfoResponse): unknown;
                fromPartial(object: {
                    codeId?: any;
                    creator?: string;
                    dataHash?: Uint8Array;
                }): _92.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _92.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryCodeResponseSDKType;
                fromJSON(object: any): _92.QueryCodeResponse;
                toJSON(message: _92.QueryCodeResponse): unknown;
                fromPartial(object: {
                    codeInfo?: {
                        codeId?: any;
                        creator?: string;
                        dataHash?: Uint8Array;
                    };
                    data?: Uint8Array;
                }): _92.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _92.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryCodesRequest;
                fromJSON(object: any): _92.QueryCodesRequest;
                toJSON(message: _92.QueryCodesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _92.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _92.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryCodesResponseSDKType;
                fromJSON(object: any): _92.QueryCodesResponse;
                toJSON(message: _92.QueryCodesResponse): unknown;
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
            };
            QueryPinnedCodesRequest: {
                encode(message: _92.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryPinnedCodesRequest;
                fromJSON(object: any): _92.QueryPinnedCodesRequest;
                toJSON(message: _92.QueryPinnedCodesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _92.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _92.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryPinnedCodesResponseSDKType;
                fromJSON(object: any): _92.QueryPinnedCodesResponse;
                toJSON(message: _92.QueryPinnedCodesResponse): unknown;
                fromPartial(object: {
                    codeIds?: any[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _92.QueryPinnedCodesResponse;
            };
            StoreCodeProposal: {
                encode(message: _91.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.StoreCodeProposal;
                fromJSON(object: any): _91.StoreCodeProposal;
                toJSON(message: _91.StoreCodeProposal): unknown;
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
            };
            InstantiateContractProposal: {
                encode(message: _91.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.InstantiateContractProposal;
                fromJSON(object: any): _91.InstantiateContractProposal;
                toJSON(message: _91.InstantiateContractProposal): unknown;
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
            };
            MigrateContractProposal: {
                encode(message: _91.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MigrateContractProposal;
                fromJSON(object: any): _91.MigrateContractProposal;
                toJSON(message: _91.MigrateContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    codeId?: any;
                    msg?: Uint8Array;
                }): _91.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _91.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.SudoContractProposal;
                fromJSON(object: any): _91.SudoContractProposal;
                toJSON(message: _91.SudoContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    msg?: Uint8Array;
                }): _91.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _91.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.ExecuteContractProposal;
                fromJSON(object: any): _91.ExecuteContractProposal;
                toJSON(message: _91.ExecuteContractProposal): unknown;
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
            };
            UpdateAdminProposal: {
                encode(message: _91.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.UpdateAdminProposal;
                fromJSON(object: any): _91.UpdateAdminProposal;
                toJSON(message: _91.UpdateAdminProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    newAdmin?: string;
                    contract?: string;
                }): _91.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _91.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.ClearAdminProposal;
                fromJSON(object: any): _91.ClearAdminProposal;
                toJSON(message: _91.ClearAdminProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                }): _91.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _91.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.PinCodesProposal;
                fromJSON(object: any): _91.PinCodesProposal;
                toJSON(message: _91.PinCodesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    codeIds?: any[];
                }): _91.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _91.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.UnpinCodesProposal;
                fromJSON(object: any): _91.UnpinCodesProposal;
                toJSON(message: _91.UnpinCodesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    codeIds?: any[];
                }): _91.UnpinCodesProposal;
            };
            MsgIBCSend: {
                encode(message: _90.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgIBCSend;
                fromJSON(object: any): _90.MsgIBCSend;
                toJSON(message: _90.MsgIBCSend): unknown;
                fromPartial(object: {
                    channel?: string;
                    timeoutHeight?: any;
                    timeoutTimestamp?: any;
                    data?: Uint8Array;
                }): _90.MsgIBCSend;
            };
            MsgIBCCloseChannel: {
                encode(message: _90.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgIBCCloseChannel;
                fromJSON(object: any): _90.MsgIBCCloseChannel;
                toJSON(message: _90.MsgIBCCloseChannel): unknown;
                fromPartial(object: {
                    channel?: string;
                }): _90.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _89.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.GenesisState;
                fromJSON(object: any): _89.GenesisState;
                toJSON(message: _89.GenesisState): unknown;
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
            };
            GenesisState_GenMsgs: {
                encode(message: _89.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.GenesisState_GenMsgs;
                fromJSON(object: any): _89.GenesisState_GenMsgs;
                toJSON(message: _89.GenesisState_GenMsgs): unknown;
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
            };
            Code: {
                encode(message: _89.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Code;
                fromJSON(object: any): _89.Code;
                toJSON(message: _89.Code): unknown;
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
            };
            Contract: {
                encode(message: _89.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Contract;
                fromJSON(object: any): _89.Contract;
                toJSON(message: _89.Contract): unknown;
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
            };
            Sequence: {
                encode(message: _89.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Sequence;
                fromJSON(object: any): _89.Sequence;
                toJSON(message: _89.Sequence): unknown;
                fromPartial(object: {
                    idKey?: Uint8Array;
                    value?: any;
                }): _89.Sequence;
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
