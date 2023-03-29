import * as _45 from "./wasm/v1/genesis";
import * as _46 from "./wasm/v1/ibc";
import * as _47 from "./wasm/v1/proposal";
import * as _48 from "./wasm/v1/query";
import * as _49 from "./wasm/v1/tx";
import * as _50 from "./wasm/v1/types";
import * as _196 from "./wasm/v1/query.lcd";
import * as _197 from "./wasm/v1/query.rpc.Query";
import * as _198 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _198.MsgClientImpl;
            QueryClientImpl: typeof _197.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _48.QueryContractInfoRequest): Promise<_48.QueryContractInfoResponse>;
                contractHistory(request: _48.QueryContractHistoryRequest): Promise<_48.QueryContractHistoryResponse>;
                contractsByCode(request: _48.QueryContractsByCodeRequest): Promise<_48.QueryContractsByCodeResponse>;
                allContractState(request: _48.QueryAllContractStateRequest): Promise<_48.QueryAllContractStateResponse>;
                rawContractState(request: _48.QueryRawContractStateRequest): Promise<_48.QueryRawContractStateResponse>;
                smartContractState(request: _48.QuerySmartContractStateRequest): Promise<_48.QuerySmartContractStateResponse>;
                code(request: _48.QueryCodeRequest): Promise<_48.QueryCodeResponse>;
                codes(request?: _48.QueryCodesRequest): Promise<_48.QueryCodesResponse>;
                pinnedCodes(request?: _48.QueryPinnedCodesRequest): Promise<_48.QueryPinnedCodesResponse>;
            };
            LCDQueryClient: typeof _196.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _49.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _49.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _49.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _49.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _49.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _49.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _49.MsgStoreCode): {
                        typeUrl: string;
                        value: _49.MsgStoreCode;
                    };
                    instantiateContract(value: _49.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _49.MsgInstantiateContract;
                    };
                    executeContract(value: _49.MsgExecuteContract): {
                        typeUrl: string;
                        value: _49.MsgExecuteContract;
                    };
                    migrateContract(value: _49.MsgMigrateContract): {
                        typeUrl: string;
                        value: _49.MsgMigrateContract;
                    };
                    updateAdmin(value: _49.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _49.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _49.MsgClearAdmin): {
                        typeUrl: string;
                        value: _49.MsgClearAdmin;
                    };
                };
                fromPartial: {
                    storeCode(value: _49.MsgStoreCode): {
                        typeUrl: string;
                        value: _49.MsgStoreCode;
                    };
                    instantiateContract(value: _49.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _49.MsgInstantiateContract;
                    };
                    executeContract(value: _49.MsgExecuteContract): {
                        typeUrl: string;
                        value: _49.MsgExecuteContract;
                    };
                    migrateContract(value: _49.MsgMigrateContract): {
                        typeUrl: string;
                        value: _49.MsgMigrateContract;
                    };
                    updateAdmin(value: _49.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _49.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _49.MsgClearAdmin): {
                        typeUrl: string;
                        value: _49.MsgClearAdmin;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: ({ sender, wasmByteCode, instantiatePermission }: _49.MsgStoreCode) => {
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
                    }) => _49.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds }: _49.MsgInstantiateContract) => {
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
                    }) => _49.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, msg, funds }: _49.MsgExecuteContract) => {
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
                    }) => _49.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, codeId, msg }: _49.MsgMigrateContract) => {
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
                    }) => _49.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, newAdmin, contract }: _49.MsgUpdateAdmin) => {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, new_admin, contract }: {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    }) => _49.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, contract }: _49.MsgClearAdmin) => {
                        sender: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, contract }: {
                        sender: string;
                        contract: string;
                    }) => _49.MsgClearAdmin;
                };
            };
            accessTypeFromJSON(object: any): _50.AccessType;
            accessTypeToJSON(object: _50.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _50.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _50.ContractCodeHistoryOperationType): string;
            AccessType: typeof _50.AccessType;
            AccessTypeSDKType: typeof _50.AccessTypeSDKType;
            ContractCodeHistoryOperationType: typeof _50.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _50.ContractCodeHistoryOperationTypeSDKType;
            AccessTypeParam: {
                encode(message: _50.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.AccessTypeParam;
                fromPartial(object: Partial<_50.AccessTypeParam>): _50.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _50.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.AccessConfig;
                fromPartial(object: Partial<_50.AccessConfig>): _50.AccessConfig;
            };
            Params: {
                encode(message: _50.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.Params;
                fromPartial(object: Partial<_50.Params>): _50.Params;
            };
            CodeInfo: {
                encode(message: _50.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.CodeInfo;
                fromPartial(object: Partial<_50.CodeInfo>): _50.CodeInfo;
            };
            ContractInfo: {
                encode(message: _50.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.ContractInfo;
                fromPartial(object: Partial<_50.ContractInfo>): _50.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _50.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.ContractCodeHistoryEntry;
                fromPartial(object: Partial<_50.ContractCodeHistoryEntry>): _50.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _50.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.AbsoluteTxPosition;
                fromPartial(object: Partial<_50.AbsoluteTxPosition>): _50.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _50.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.Model;
                fromPartial(object: Partial<_50.Model>): _50.Model;
            };
            MsgStoreCode: {
                encode(message: _49.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgStoreCode;
                fromPartial(object: Partial<_49.MsgStoreCode>): _49.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _49.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgStoreCodeResponse;
                fromPartial(object: Partial<_49.MsgStoreCodeResponse>): _49.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _49.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgInstantiateContract;
                fromPartial(object: Partial<_49.MsgInstantiateContract>): _49.MsgInstantiateContract;
            };
            MsgInstantiateContractResponse: {
                encode(message: _49.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgInstantiateContractResponse;
                fromPartial(object: Partial<_49.MsgInstantiateContractResponse>): _49.MsgInstantiateContractResponse;
            };
            MsgExecuteContract: {
                encode(message: _49.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgExecuteContract;
                fromPartial(object: Partial<_49.MsgExecuteContract>): _49.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _49.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgExecuteContractResponse;
                fromPartial(object: Partial<_49.MsgExecuteContractResponse>): _49.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _49.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgMigrateContract;
                fromPartial(object: Partial<_49.MsgMigrateContract>): _49.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _49.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgMigrateContractResponse;
                fromPartial(object: Partial<_49.MsgMigrateContractResponse>): _49.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _49.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgUpdateAdmin;
                fromPartial(object: Partial<_49.MsgUpdateAdmin>): _49.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _49.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgUpdateAdminResponse;
                fromPartial(_: Partial<_49.MsgUpdateAdminResponse>): _49.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _49.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgClearAdmin;
                fromPartial(object: Partial<_49.MsgClearAdmin>): _49.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _49.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgClearAdminResponse;
                fromPartial(_: Partial<_49.MsgClearAdminResponse>): _49.MsgClearAdminResponse;
            };
            QueryContractInfoRequest: {
                encode(message: _48.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryContractInfoRequest;
                fromPartial(object: Partial<_48.QueryContractInfoRequest>): _48.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _48.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryContractInfoResponse;
                fromPartial(object: Partial<_48.QueryContractInfoResponse>): _48.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _48.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryContractHistoryRequest;
                fromPartial(object: Partial<_48.QueryContractHistoryRequest>): _48.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _48.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryContractHistoryResponse;
                fromPartial(object: Partial<_48.QueryContractHistoryResponse>): _48.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _48.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryContractsByCodeRequest;
                fromPartial(object: Partial<_48.QueryContractsByCodeRequest>): _48.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _48.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryContractsByCodeResponse;
                fromPartial(object: Partial<_48.QueryContractsByCodeResponse>): _48.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _48.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllContractStateRequest;
                fromPartial(object: Partial<_48.QueryAllContractStateRequest>): _48.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _48.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllContractStateResponse;
                fromPartial(object: Partial<_48.QueryAllContractStateResponse>): _48.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _48.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryRawContractStateRequest;
                fromPartial(object: Partial<_48.QueryRawContractStateRequest>): _48.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _48.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryRawContractStateResponse;
                fromPartial(object: Partial<_48.QueryRawContractStateResponse>): _48.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _48.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QuerySmartContractStateRequest;
                fromPartial(object: Partial<_48.QuerySmartContractStateRequest>): _48.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _48.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QuerySmartContractStateResponse;
                fromPartial(object: Partial<_48.QuerySmartContractStateResponse>): _48.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _48.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryCodeRequest;
                fromPartial(object: Partial<_48.QueryCodeRequest>): _48.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _48.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.CodeInfoResponse;
                fromPartial(object: Partial<_48.CodeInfoResponse>): _48.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _48.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryCodeResponse;
                fromPartial(object: Partial<_48.QueryCodeResponse>): _48.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _48.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryCodesRequest;
                fromPartial(object: Partial<_48.QueryCodesRequest>): _48.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _48.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryCodesResponse;
                fromPartial(object: Partial<_48.QueryCodesResponse>): _48.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _48.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryPinnedCodesRequest;
                fromPartial(object: Partial<_48.QueryPinnedCodesRequest>): _48.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _48.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryPinnedCodesResponse;
                fromPartial(object: Partial<_48.QueryPinnedCodesResponse>): _48.QueryPinnedCodesResponse;
            };
            StoreCodeProposal: {
                encode(message: _47.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.StoreCodeProposal;
                fromPartial(object: Partial<_47.StoreCodeProposal>): _47.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _47.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.InstantiateContractProposal;
                fromPartial(object: Partial<_47.InstantiateContractProposal>): _47.InstantiateContractProposal;
            };
            MigrateContractProposal: {
                encode(message: _47.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MigrateContractProposal;
                fromPartial(object: Partial<_47.MigrateContractProposal>): _47.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _47.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.SudoContractProposal;
                fromPartial(object: Partial<_47.SudoContractProposal>): _47.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _47.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.ExecuteContractProposal;
                fromPartial(object: Partial<_47.ExecuteContractProposal>): _47.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _47.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.UpdateAdminProposal;
                fromPartial(object: Partial<_47.UpdateAdminProposal>): _47.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _47.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.ClearAdminProposal;
                fromPartial(object: Partial<_47.ClearAdminProposal>): _47.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _47.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.PinCodesProposal;
                fromPartial(object: Partial<_47.PinCodesProposal>): _47.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _47.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.UnpinCodesProposal;
                fromPartial(object: Partial<_47.UnpinCodesProposal>): _47.UnpinCodesProposal;
            };
            MsgIBCSend: {
                encode(message: _46.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.MsgIBCSend;
                fromPartial(object: Partial<_46.MsgIBCSend>): _46.MsgIBCSend;
            };
            MsgIBCCloseChannel: {
                encode(message: _46.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.MsgIBCCloseChannel;
                fromPartial(object: Partial<_46.MsgIBCCloseChannel>): _46.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _45.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.GenesisState;
                fromPartial(object: Partial<_45.GenesisState>): _45.GenesisState;
            };
            GenesisState_GenMsgs: {
                encode(message: _45.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.GenesisState_GenMsgs;
                fromPartial(object: Partial<_45.GenesisState_GenMsgs>): _45.GenesisState_GenMsgs;
            };
            Code: {
                encode(message: _45.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Code;
                fromPartial(object: Partial<_45.Code>): _45.Code;
            };
            Contract: {
                encode(message: _45.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Contract;
                fromPartial(object: Partial<_45.Contract>): _45.Contract;
            };
            Sequence: {
                encode(message: _45.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Sequence;
                fromPartial(object: Partial<_45.Sequence>): _45.Sequence;
            };
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
                    v1: _198.MsgClientImpl;
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
            };
            cosmwasm: {
                wasm: {
                    v1: {
                        contractInfo(request: _48.QueryContractInfoRequest): Promise<_48.QueryContractInfoResponse>;
                        contractHistory(request: _48.QueryContractHistoryRequest): Promise<_48.QueryContractHistoryResponse>;
                        contractsByCode(request: _48.QueryContractsByCodeRequest): Promise<_48.QueryContractsByCodeResponse>;
                        allContractState(request: _48.QueryAllContractStateRequest): Promise<_48.QueryAllContractStateResponse>;
                        rawContractState(request: _48.QueryRawContractStateRequest): Promise<_48.QueryRawContractStateResponse>;
                        smartContractState(request: _48.QuerySmartContractStateRequest): Promise<_48.QuerySmartContractStateResponse>;
                        code(request: _48.QueryCodeRequest): Promise<_48.QueryCodeResponse>;
                        codes(request?: _48.QueryCodesRequest): Promise<_48.QueryCodesResponse>;
                        pinnedCodes(request?: _48.QueryPinnedCodesRequest): Promise<_48.QueryPinnedCodesResponse>;
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
            };
            cosmwasm: {
                wasm: {
                    v1: _196.LCDQueryClient;
                };
            };
        }>;
    };
}
