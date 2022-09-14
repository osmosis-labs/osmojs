import * as _85 from "./wasm/v1/genesis";
import * as _86 from "./wasm/v1/ibc";
import * as _87 from "./wasm/v1/proposal";
import * as _88 from "./wasm/v1/query";
import * as _89 from "./wasm/v1/tx";
import * as _90 from "./wasm/v1/types";
import * as _246 from "./wasm/v1/query.lcd";
import * as _247 from "./wasm/v1/query.rpc.query";
import * as _248 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _248.MsgClientImpl;
            QueryClientImpl: typeof _247.QueryClientImpl;
            LCDQueryClient: typeof _246.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _89.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _89.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _89.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _89.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _89.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _89.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _89.MsgStoreCode): {
                        typeUrl: string;
                        value: _89.MsgStoreCode;
                    };
                    instantiateContract(value: _89.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _89.MsgInstantiateContract;
                    };
                    executeContract(value: _89.MsgExecuteContract): {
                        typeUrl: string;
                        value: _89.MsgExecuteContract;
                    };
                    migrateContract(value: _89.MsgMigrateContract): {
                        typeUrl: string;
                        value: _89.MsgMigrateContract;
                    };
                    updateAdmin(value: _89.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _89.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _89.MsgClearAdmin): {
                        typeUrl: string;
                        value: _89.MsgClearAdmin;
                    };
                };
                toJSON: {
                    storeCode(value: _89.MsgStoreCode): {
                        typeUrl: string;
                        value: unknown;
                    };
                    instantiateContract(value: _89.MsgInstantiateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    executeContract(value: _89.MsgExecuteContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    migrateContract(value: _89.MsgMigrateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateAdmin(value: _89.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    clearAdmin(value: _89.MsgClearAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _89.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _89.MsgInstantiateContract;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _89.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _89.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _89.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _89.MsgClearAdmin;
                    };
                };
                fromPartial: {
                    storeCode(value: _89.MsgStoreCode): {
                        typeUrl: string;
                        value: _89.MsgStoreCode;
                    };
                    instantiateContract(value: _89.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _89.MsgInstantiateContract;
                    };
                    executeContract(value: _89.MsgExecuteContract): {
                        typeUrl: string;
                        value: _89.MsgExecuteContract;
                    };
                    migrateContract(value: _89.MsgMigrateContract): {
                        typeUrl: string;
                        value: _89.MsgMigrateContract;
                    };
                    updateAdmin(value: _89.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _89.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _89.MsgClearAdmin): {
                        typeUrl: string;
                        value: _89.MsgClearAdmin;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: ({ sender, wasm_byte_code, instantiate_permission }: _89.MsgStoreCode) => {
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
                    }) => _89.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ sender, admin, code_id, label, msg, funds }: _89.MsgInstantiateContract) => {
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
                    }) => _89.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, msg, funds }: _89.MsgExecuteContract) => {
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
                    }) => _89.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, code_id, msg }: _89.MsgMigrateContract) => {
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
                    }) => _89.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, new_admin, contract }: _89.MsgUpdateAdmin) => {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, new_admin, contract }: {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    }) => _89.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, contract }: _89.MsgClearAdmin) => {
                        sender: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, contract }: {
                        sender: string;
                        contract: string;
                    }) => _89.MsgClearAdmin;
                };
            };
            accessTypeFromJSON(object: any): _90.AccessType;
            accessTypeToJSON(object: _90.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _90.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _90.ContractCodeHistoryOperationType): string;
            AccessType: typeof _90.AccessType;
            ContractCodeHistoryOperationType: typeof _90.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                encode(message: _90.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.AccessTypeParam;
                fromJSON(object: any): _90.AccessTypeParam;
                toJSON(message: _90.AccessTypeParam): unknown;
                fromPartial(object: {
                    value?: _90.AccessType;
                }): _90.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _90.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.AccessConfig;
                fromJSON(object: any): _90.AccessConfig;
                toJSON(message: _90.AccessConfig): unknown;
                fromPartial(object: {
                    permission?: _90.AccessType;
                    address?: string;
                }): _90.AccessConfig;
            };
            Params: {
                encode(message: _90.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Params;
                fromJSON(object: any): _90.Params;
                toJSON(message: _90.Params): unknown;
                fromPartial(object: {
                    code_upload_access?: {
                        permission?: _90.AccessType;
                        address?: string;
                    };
                    instantiate_default_permission?: _90.AccessType;
                    max_wasm_code_size?: any;
                }): _90.Params;
            };
            CodeInfo: {
                encode(message: _90.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.CodeInfo;
                fromJSON(object: any): _90.CodeInfo;
                toJSON(message: _90.CodeInfo): unknown;
                fromPartial(object: {
                    code_hash?: Uint8Array;
                    creator?: string;
                    instantiate_config?: {
                        permission?: _90.AccessType;
                        address?: string;
                    };
                }): _90.CodeInfo;
            };
            ContractInfo: {
                encode(message: _90.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ContractInfo;
                fromJSON(object: any): _90.ContractInfo;
                toJSON(message: _90.ContractInfo): unknown;
                fromPartial(object: {
                    code_id?: any;
                    creator?: string;
                    admin?: string;
                    label?: string;
                    created?: {
                        block_height?: any;
                        tx_index?: any;
                    };
                    ibc_port_id?: string;
                    extension?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                }): _90.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _90.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ContractCodeHistoryEntry;
                fromJSON(object: any): _90.ContractCodeHistoryEntry;
                toJSON(message: _90.ContractCodeHistoryEntry): unknown;
                fromPartial(object: {
                    operation?: _90.ContractCodeHistoryOperationType;
                    code_id?: any;
                    updated?: {
                        block_height?: any;
                        tx_index?: any;
                    };
                    msg?: Uint8Array;
                }): _90.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _90.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.AbsoluteTxPosition;
                fromJSON(object: any): _90.AbsoluteTxPosition;
                toJSON(message: _90.AbsoluteTxPosition): unknown;
                fromPartial(object: {
                    block_height?: any;
                    tx_index?: any;
                }): _90.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _90.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Model;
                fromJSON(object: any): _90.Model;
                toJSON(message: _90.Model): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                }): _90.Model;
            };
            MsgStoreCode: {
                encode(message: _89.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgStoreCode;
                fromJSON(object: any): _89.MsgStoreCode;
                toJSON(message: _89.MsgStoreCode): unknown;
                fromPartial(object: {
                    sender?: string;
                    wasm_byte_code?: Uint8Array;
                    instantiate_permission?: {
                        permission?: _90.AccessType;
                        address?: string;
                    };
                }): _89.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _89.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgStoreCodeResponse;
                fromJSON(object: any): _89.MsgStoreCodeResponse;
                toJSON(message: _89.MsgStoreCodeResponse): unknown;
                fromPartial(object: {
                    code_id?: any;
                }): _89.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _89.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgInstantiateContract;
                fromJSON(object: any): _89.MsgInstantiateContract;
                toJSON(message: _89.MsgInstantiateContract): unknown;
                fromPartial(object: {
                    sender?: string;
                    admin?: string;
                    code_id?: any;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _89.MsgInstantiateContract;
            };
            MsgInstantiateContractResponse: {
                encode(message: _89.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgInstantiateContractResponse;
                fromJSON(object: any): _89.MsgInstantiateContractResponse;
                toJSON(message: _89.MsgInstantiateContractResponse): unknown;
                fromPartial(object: {
                    address?: string;
                    data?: Uint8Array;
                }): _89.MsgInstantiateContractResponse;
            };
            MsgExecuteContract: {
                encode(message: _89.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgExecuteContract;
                fromJSON(object: any): _89.MsgExecuteContract;
                toJSON(message: _89.MsgExecuteContract): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _89.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _89.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgExecuteContractResponse;
                fromJSON(object: any): _89.MsgExecuteContractResponse;
                toJSON(message: _89.MsgExecuteContractResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _89.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _89.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgMigrateContract;
                fromJSON(object: any): _89.MsgMigrateContract;
                toJSON(message: _89.MsgMigrateContract): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    code_id?: any;
                    msg?: Uint8Array;
                }): _89.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _89.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgMigrateContractResponse;
                fromJSON(object: any): _89.MsgMigrateContractResponse;
                toJSON(message: _89.MsgMigrateContractResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _89.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _89.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgUpdateAdmin;
                fromJSON(object: any): _89.MsgUpdateAdmin;
                toJSON(message: _89.MsgUpdateAdmin): unknown;
                fromPartial(object: {
                    sender?: string;
                    new_admin?: string;
                    contract?: string;
                }): _89.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _89.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgUpdateAdminResponse;
                fromJSON(_: any): _89.MsgUpdateAdminResponse;
                toJSON(_: _89.MsgUpdateAdminResponse): unknown;
                fromPartial(_: {}): _89.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _89.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgClearAdmin;
                fromJSON(object: any): _89.MsgClearAdmin;
                toJSON(message: _89.MsgClearAdmin): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                }): _89.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _89.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgClearAdminResponse;
                fromJSON(_: any): _89.MsgClearAdminResponse;
                toJSON(_: _89.MsgClearAdminResponse): unknown;
                fromPartial(_: {}): _89.MsgClearAdminResponse;
            };
            QueryContractInfoRequest: {
                encode(message: _88.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryContractInfoRequest;
                fromJSON(object: any): _88.QueryContractInfoRequest;
                toJSON(message: _88.QueryContractInfoRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _88.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _88.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryContractInfoResponse;
                fromJSON(object: any): _88.QueryContractInfoResponse;
                toJSON(message: _88.QueryContractInfoResponse): unknown;
                fromPartial(object: {
                    address?: string;
                    contract_info?: {
                        code_id?: any;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            block_height?: any;
                            tx_index?: any;
                        };
                        ibc_port_id?: string;
                        extension?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _88.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _88.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryContractHistoryRequest;
                fromJSON(object: any): _88.QueryContractHistoryRequest;
                toJSON(message: _88.QueryContractHistoryRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _88.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _88.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryContractHistoryResponse;
                fromJSON(object: any): _88.QueryContractHistoryResponse;
                toJSON(message: _88.QueryContractHistoryResponse): unknown;
                fromPartial(object: {
                    entries?: {
                        operation?: _90.ContractCodeHistoryOperationType;
                        code_id?: any;
                        updated?: {
                            block_height?: any;
                            tx_index?: any;
                        };
                        msg?: Uint8Array;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _88.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _88.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryContractsByCodeRequest;
                fromJSON(object: any): _88.QueryContractsByCodeRequest;
                toJSON(message: _88.QueryContractsByCodeRequest): unknown;
                fromPartial(object: {
                    code_id?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _88.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _88.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryContractsByCodeResponse;
                fromJSON(object: any): _88.QueryContractsByCodeResponse;
                toJSON(message: _88.QueryContractsByCodeResponse): unknown;
                fromPartial(object: {
                    contracts?: string[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _88.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _88.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryAllContractStateRequest;
                fromJSON(object: any): _88.QueryAllContractStateRequest;
                toJSON(message: _88.QueryAllContractStateRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _88.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _88.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryAllContractStateResponse;
                fromJSON(object: any): _88.QueryAllContractStateResponse;
                toJSON(message: _88.QueryAllContractStateResponse): unknown;
                fromPartial(object: {
                    models?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _88.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _88.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryRawContractStateRequest;
                fromJSON(object: any): _88.QueryRawContractStateRequest;
                toJSON(message: _88.QueryRawContractStateRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    query_data?: Uint8Array;
                }): _88.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _88.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryRawContractStateResponse;
                fromJSON(object: any): _88.QueryRawContractStateResponse;
                toJSON(message: _88.QueryRawContractStateResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _88.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _88.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QuerySmartContractStateRequest;
                fromJSON(object: any): _88.QuerySmartContractStateRequest;
                toJSON(message: _88.QuerySmartContractStateRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    query_data?: Uint8Array;
                }): _88.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _88.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QuerySmartContractStateResponse;
                fromJSON(object: any): _88.QuerySmartContractStateResponse;
                toJSON(message: _88.QuerySmartContractStateResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _88.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _88.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryCodeRequest;
                fromJSON(object: any): _88.QueryCodeRequest;
                toJSON(message: _88.QueryCodeRequest): unknown;
                fromPartial(object: {
                    code_id?: any;
                }): _88.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _88.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.CodeInfoResponse;
                fromJSON(object: any): _88.CodeInfoResponse;
                toJSON(message: _88.CodeInfoResponse): unknown;
                fromPartial(object: {
                    code_id?: any;
                    creator?: string;
                    data_hash?: Uint8Array;
                }): _88.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _88.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryCodeResponse;
                fromJSON(object: any): _88.QueryCodeResponse;
                toJSON(message: _88.QueryCodeResponse): unknown;
                fromPartial(object: {
                    code_info?: {
                        code_id?: any;
                        creator?: string;
                        data_hash?: Uint8Array;
                    };
                    data?: Uint8Array;
                }): _88.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _88.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryCodesRequest;
                fromJSON(object: any): _88.QueryCodesRequest;
                toJSON(message: _88.QueryCodesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _88.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _88.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryCodesResponse;
                fromJSON(object: any): _88.QueryCodesResponse;
                toJSON(message: _88.QueryCodesResponse): unknown;
                fromPartial(object: {
                    code_infos?: {
                        code_id?: any;
                        creator?: string;
                        data_hash?: Uint8Array;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _88.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _88.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryPinnedCodesRequest;
                fromJSON(object: any): _88.QueryPinnedCodesRequest;
                toJSON(message: _88.QueryPinnedCodesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _88.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _88.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryPinnedCodesResponse;
                fromJSON(object: any): _88.QueryPinnedCodesResponse;
                toJSON(message: _88.QueryPinnedCodesResponse): unknown;
                fromPartial(object: {
                    code_ids?: any[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _88.QueryPinnedCodesResponse;
            };
            StoreCodeProposal: {
                encode(message: _87.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.StoreCodeProposal;
                fromJSON(object: any): _87.StoreCodeProposal;
                toJSON(message: _87.StoreCodeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    run_as?: string;
                    wasm_byte_code?: Uint8Array;
                    instantiate_permission?: {
                        permission?: _90.AccessType;
                        address?: string;
                    };
                }): _87.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _87.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.InstantiateContractProposal;
                fromJSON(object: any): _87.InstantiateContractProposal;
                toJSON(message: _87.InstantiateContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    run_as?: string;
                    admin?: string;
                    code_id?: any;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _87.InstantiateContractProposal;
            };
            MigrateContractProposal: {
                encode(message: _87.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MigrateContractProposal;
                fromJSON(object: any): _87.MigrateContractProposal;
                toJSON(message: _87.MigrateContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    code_id?: any;
                    msg?: Uint8Array;
                }): _87.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _87.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SudoContractProposal;
                fromJSON(object: any): _87.SudoContractProposal;
                toJSON(message: _87.SudoContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    msg?: Uint8Array;
                }): _87.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _87.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ExecuteContractProposal;
                fromJSON(object: any): _87.ExecuteContractProposal;
                toJSON(message: _87.ExecuteContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    run_as?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _87.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _87.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.UpdateAdminProposal;
                fromJSON(object: any): _87.UpdateAdminProposal;
                toJSON(message: _87.UpdateAdminProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    new_admin?: string;
                    contract?: string;
                }): _87.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _87.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ClearAdminProposal;
                fromJSON(object: any): _87.ClearAdminProposal;
                toJSON(message: _87.ClearAdminProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                }): _87.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _87.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.PinCodesProposal;
                fromJSON(object: any): _87.PinCodesProposal;
                toJSON(message: _87.PinCodesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    code_ids?: any[];
                }): _87.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _87.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.UnpinCodesProposal;
                fromJSON(object: any): _87.UnpinCodesProposal;
                toJSON(message: _87.UnpinCodesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    code_ids?: any[];
                }): _87.UnpinCodesProposal;
            };
            MsgIBCSend: {
                encode(message: _86.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgIBCSend;
                fromJSON(object: any): _86.MsgIBCSend;
                toJSON(message: _86.MsgIBCSend): unknown;
                fromPartial(object: {
                    channel?: string;
                    timeout_height?: any;
                    timeout_timestamp?: any;
                    data?: Uint8Array;
                }): _86.MsgIBCSend;
            };
            MsgIBCCloseChannel: {
                encode(message: _86.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgIBCCloseChannel;
                fromJSON(object: any): _86.MsgIBCCloseChannel;
                toJSON(message: _86.MsgIBCCloseChannel): unknown;
                fromPartial(object: {
                    channel?: string;
                }): _86.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _85.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.GenesisState;
                fromJSON(object: any): _85.GenesisState;
                toJSON(message: _85.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        code_upload_access?: {
                            permission?: _90.AccessType;
                            address?: string;
                        };
                        instantiate_default_permission?: _90.AccessType;
                        max_wasm_code_size?: any;
                    };
                    codes?: {
                        code_id?: any;
                        code_info?: {
                            code_hash?: Uint8Array;
                            creator?: string;
                            instantiate_config?: {
                                permission?: _90.AccessType;
                                address?: string;
                            };
                        };
                        code_bytes?: Uint8Array;
                        pinned?: boolean;
                    }[];
                    contracts?: {
                        contract_address?: string;
                        contract_info?: {
                            code_id?: any;
                            creator?: string;
                            admin?: string;
                            label?: string;
                            created?: {
                                block_height?: any;
                                tx_index?: any;
                            };
                            ibc_port_id?: string;
                            extension?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        };
                        contract_state?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }[];
                    sequences?: {
                        id_key?: Uint8Array;
                        value?: any;
                    }[];
                    gen_msgs?: {
                        store_code?: {
                            sender?: string;
                            wasm_byte_code?: Uint8Array;
                            instantiate_permission?: {
                                permission?: _90.AccessType;
                                address?: string;
                            };
                        };
                        instantiate_contract?: {
                            sender?: string;
                            admin?: string;
                            code_id?: any;
                            label?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                        execute_contract?: {
                            sender?: string;
                            contract?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[];
                }): _85.GenesisState;
            };
            GenesisState_GenMsgs: {
                encode(message: _85.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.GenesisState_GenMsgs;
                fromJSON(object: any): _85.GenesisState_GenMsgs;
                toJSON(message: _85.GenesisState_GenMsgs): unknown;
                fromPartial(object: {
                    store_code?: {
                        sender?: string;
                        wasm_byte_code?: Uint8Array;
                        instantiate_permission?: {
                            permission?: _90.AccessType;
                            address?: string;
                        };
                    };
                    instantiate_contract?: {
                        sender?: string;
                        admin?: string;
                        code_id?: any;
                        label?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    execute_contract?: {
                        sender?: string;
                        contract?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _85.GenesisState_GenMsgs;
            };
            Code: {
                encode(message: _85.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Code;
                fromJSON(object: any): _85.Code;
                toJSON(message: _85.Code): unknown;
                fromPartial(object: {
                    code_id?: any;
                    code_info?: {
                        code_hash?: Uint8Array;
                        creator?: string;
                        instantiate_config?: {
                            permission?: _90.AccessType;
                            address?: string;
                        };
                    };
                    code_bytes?: Uint8Array;
                    pinned?: boolean;
                }): _85.Code;
            };
            Contract: {
                encode(message: _85.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Contract;
                fromJSON(object: any): _85.Contract;
                toJSON(message: _85.Contract): unknown;
                fromPartial(object: {
                    contract_address?: string;
                    contract_info?: {
                        code_id?: any;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            block_height?: any;
                            tx_index?: any;
                        };
                        ibc_port_id?: string;
                        extension?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    };
                    contract_state?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                }): _85.Contract;
            };
            Sequence: {
                encode(message: _85.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Sequence;
                fromJSON(object: any): _85.Sequence;
                toJSON(message: _85.Sequence): unknown;
                fromPartial(object: {
                    id_key?: Uint8Array;
                    value?: any;
                }): _85.Sequence;
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
                    v1: _248.MsgClientImpl;
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
                    v1: _247.QueryClientImpl;
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
                    v1: _246.LCDQueryClient;
                };
            };
        }>;
    };
}
