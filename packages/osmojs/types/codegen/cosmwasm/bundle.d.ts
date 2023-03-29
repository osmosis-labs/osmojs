import * as _46 from "./wasm/v1/genesis";
import * as _47 from "./wasm/v1/ibc";
import * as _48 from "./wasm/v1/proposal";
import * as _49 from "./wasm/v1/query";
import * as _50 from "./wasm/v1/tx";
import * as _51 from "./wasm/v1/types";
import * as _206 from "./wasm/v1/query.lcd";
import * as _207 from "./wasm/v1/query.rpc.Query";
import * as _208 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _208.MsgClientImpl;
            QueryClientImpl: typeof _207.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _49.QueryContractInfoRequest): Promise<_49.QueryContractInfoResponse>;
                contractHistory(request: _49.QueryContractHistoryRequest): Promise<_49.QueryContractHistoryResponse>;
                contractsByCode(request: _49.QueryContractsByCodeRequest): Promise<_49.QueryContractsByCodeResponse>;
                allContractState(request: _49.QueryAllContractStateRequest): Promise<_49.QueryAllContractStateResponse>;
                rawContractState(request: _49.QueryRawContractStateRequest): Promise<_49.QueryRawContractStateResponse>;
                smartContractState(request: _49.QuerySmartContractStateRequest): Promise<_49.QuerySmartContractStateResponse>;
                code(request: _49.QueryCodeRequest): Promise<_49.QueryCodeResponse>;
                codes(request?: _49.QueryCodesRequest): Promise<_49.QueryCodesResponse>;
                pinnedCodes(request?: _49.QueryPinnedCodesRequest): Promise<_49.QueryPinnedCodesResponse>;
            };
            LCDQueryClient: typeof _206.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _50.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _50.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _50.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _50.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _50.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _50.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _50.MsgStoreCode): {
                        typeUrl: string;
                        value: _50.MsgStoreCode;
                    };
                    instantiateContract(value: _50.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _50.MsgInstantiateContract;
                    };
                    executeContract(value: _50.MsgExecuteContract): {
                        typeUrl: string;
                        value: _50.MsgExecuteContract;
                    };
                    migrateContract(value: _50.MsgMigrateContract): {
                        typeUrl: string;
                        value: _50.MsgMigrateContract;
                    };
                    updateAdmin(value: _50.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _50.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _50.MsgClearAdmin): {
                        typeUrl: string;
                        value: _50.MsgClearAdmin;
                    };
                };
                fromPartial: {
                    storeCode(value: _50.MsgStoreCode): {
                        typeUrl: string;
                        value: _50.MsgStoreCode;
                    };
                    instantiateContract(value: _50.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _50.MsgInstantiateContract;
                    };
                    executeContract(value: _50.MsgExecuteContract): {
                        typeUrl: string;
                        value: _50.MsgExecuteContract;
                    };
                    migrateContract(value: _50.MsgMigrateContract): {
                        typeUrl: string;
                        value: _50.MsgMigrateContract;
                    };
                    updateAdmin(value: _50.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _50.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _50.MsgClearAdmin): {
                        typeUrl: string;
                        value: _50.MsgClearAdmin;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: ({ sender, wasmByteCode, instantiatePermission }: _50.MsgStoreCode) => {
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
                    }) => _50.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds }: _50.MsgInstantiateContract) => {
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
                    }) => _50.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, msg, funds }: _50.MsgExecuteContract) => {
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
                    }) => _50.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, codeId, msg }: _50.MsgMigrateContract) => {
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
                    }) => _50.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, newAdmin, contract }: _50.MsgUpdateAdmin) => {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, new_admin, contract }: {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    }) => _50.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, contract }: _50.MsgClearAdmin) => {
                        sender: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, contract }: {
                        sender: string;
                        contract: string;
                    }) => _50.MsgClearAdmin;
                };
            };
            accessTypeFromJSON(object: any): _51.AccessType;
            accessTypeToJSON(object: _51.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _51.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _51.ContractCodeHistoryOperationType): string;
            AccessType: typeof _51.AccessType;
            AccessTypeSDKType: typeof _51.AccessTypeSDKType;
            ContractCodeHistoryOperationType: typeof _51.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _51.ContractCodeHistoryOperationTypeSDKType;
            AccessTypeParam: {
                encode(message: _51.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.AccessTypeParam;
                fromPartial(object: Partial<_51.AccessTypeParam>): _51.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _51.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.AccessConfig;
                fromPartial(object: Partial<_51.AccessConfig>): _51.AccessConfig;
            };
            Params: {
                encode(message: _51.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Params;
                fromPartial(object: Partial<_51.Params>): _51.Params;
            };
            CodeInfo: {
                encode(message: _51.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.CodeInfo;
                fromPartial(object: Partial<_51.CodeInfo>): _51.CodeInfo;
            };
            ContractInfo: {
                encode(message: _51.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ContractInfo;
                fromPartial(object: Partial<_51.ContractInfo>): _51.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _51.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ContractCodeHistoryEntry;
                fromPartial(object: Partial<_51.ContractCodeHistoryEntry>): _51.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _51.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.AbsoluteTxPosition;
                fromPartial(object: Partial<_51.AbsoluteTxPosition>): _51.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _51.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Model;
                fromPartial(object: Partial<_51.Model>): _51.Model;
            };
            MsgStoreCode: {
                encode(message: _50.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgStoreCode;
                fromPartial(object: Partial<_50.MsgStoreCode>): _50.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _50.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgStoreCodeResponse;
                fromPartial(object: Partial<_50.MsgStoreCodeResponse>): _50.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _50.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgInstantiateContract;
                fromPartial(object: Partial<_50.MsgInstantiateContract>): _50.MsgInstantiateContract;
            };
            MsgInstantiateContractResponse: {
                encode(message: _50.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgInstantiateContractResponse;
                fromPartial(object: Partial<_50.MsgInstantiateContractResponse>): _50.MsgInstantiateContractResponse;
            };
            MsgExecuteContract: {
                encode(message: _50.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgExecuteContract;
                fromPartial(object: Partial<_50.MsgExecuteContract>): _50.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _50.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgExecuteContractResponse;
                fromPartial(object: Partial<_50.MsgExecuteContractResponse>): _50.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _50.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgMigrateContract;
                fromPartial(object: Partial<_50.MsgMigrateContract>): _50.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _50.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgMigrateContractResponse;
                fromPartial(object: Partial<_50.MsgMigrateContractResponse>): _50.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _50.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgUpdateAdmin;
                fromPartial(object: Partial<_50.MsgUpdateAdmin>): _50.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _50.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgUpdateAdminResponse;
                fromPartial(_: Partial<_50.MsgUpdateAdminResponse>): _50.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _50.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgClearAdmin;
                fromPartial(object: Partial<_50.MsgClearAdmin>): _50.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _50.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgClearAdminResponse;
                fromPartial(_: Partial<_50.MsgClearAdminResponse>): _50.MsgClearAdminResponse;
            };
            QueryContractInfoRequest: {
                encode(message: _49.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryContractInfoRequest;
                fromPartial(object: Partial<_49.QueryContractInfoRequest>): _49.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _49.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryContractInfoResponse;
                fromPartial(object: Partial<_49.QueryContractInfoResponse>): _49.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _49.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryContractHistoryRequest;
                fromPartial(object: Partial<_49.QueryContractHistoryRequest>): _49.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _49.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryContractHistoryResponse;
                fromPartial(object: Partial<_49.QueryContractHistoryResponse>): _49.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _49.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryContractsByCodeRequest;
                fromPartial(object: Partial<_49.QueryContractsByCodeRequest>): _49.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _49.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryContractsByCodeResponse;
                fromPartial(object: Partial<_49.QueryContractsByCodeResponse>): _49.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _49.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryAllContractStateRequest;
                fromPartial(object: Partial<_49.QueryAllContractStateRequest>): _49.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _49.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryAllContractStateResponse;
                fromPartial(object: Partial<_49.QueryAllContractStateResponse>): _49.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _49.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryRawContractStateRequest;
                fromPartial(object: Partial<_49.QueryRawContractStateRequest>): _49.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _49.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryRawContractStateResponse;
                fromPartial(object: Partial<_49.QueryRawContractStateResponse>): _49.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _49.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QuerySmartContractStateRequest;
                fromPartial(object: Partial<_49.QuerySmartContractStateRequest>): _49.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _49.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QuerySmartContractStateResponse;
                fromPartial(object: Partial<_49.QuerySmartContractStateResponse>): _49.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _49.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryCodeRequest;
                fromPartial(object: Partial<_49.QueryCodeRequest>): _49.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _49.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.CodeInfoResponse;
                fromPartial(object: Partial<_49.CodeInfoResponse>): _49.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _49.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryCodeResponse;
                fromPartial(object: Partial<_49.QueryCodeResponse>): _49.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _49.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryCodesRequest;
                fromPartial(object: Partial<_49.QueryCodesRequest>): _49.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _49.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryCodesResponse;
                fromPartial(object: Partial<_49.QueryCodesResponse>): _49.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _49.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryPinnedCodesRequest;
                fromPartial(object: Partial<_49.QueryPinnedCodesRequest>): _49.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _49.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryPinnedCodesResponse;
                fromPartial(object: Partial<_49.QueryPinnedCodesResponse>): _49.QueryPinnedCodesResponse;
            };
            StoreCodeProposal: {
                encode(message: _48.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.StoreCodeProposal;
                fromPartial(object: Partial<_48.StoreCodeProposal>): _48.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _48.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.InstantiateContractProposal;
                fromPartial(object: Partial<_48.InstantiateContractProposal>): _48.InstantiateContractProposal;
            };
            MigrateContractProposal: {
                encode(message: _48.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MigrateContractProposal;
                fromPartial(object: Partial<_48.MigrateContractProposal>): _48.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _48.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.SudoContractProposal;
                fromPartial(object: Partial<_48.SudoContractProposal>): _48.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _48.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ExecuteContractProposal;
                fromPartial(object: Partial<_48.ExecuteContractProposal>): _48.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _48.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.UpdateAdminProposal;
                fromPartial(object: Partial<_48.UpdateAdminProposal>): _48.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _48.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ClearAdminProposal;
                fromPartial(object: Partial<_48.ClearAdminProposal>): _48.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _48.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.PinCodesProposal;
                fromPartial(object: Partial<_48.PinCodesProposal>): _48.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _48.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.UnpinCodesProposal;
                fromPartial(object: Partial<_48.UnpinCodesProposal>): _48.UnpinCodesProposal;
            };
            MsgIBCSend: {
                encode(message: _47.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgIBCSend;
                fromPartial(object: Partial<_47.MsgIBCSend>): _47.MsgIBCSend;
            };
            MsgIBCCloseChannel: {
                encode(message: _47.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgIBCCloseChannel;
                fromPartial(object: Partial<_47.MsgIBCCloseChannel>): _47.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _46.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.GenesisState;
                fromPartial(object: Partial<_46.GenesisState>): _46.GenesisState;
            };
            GenesisState_GenMsgs: {
                encode(message: _46.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.GenesisState_GenMsgs;
                fromPartial(object: Partial<_46.GenesisState_GenMsgs>): _46.GenesisState_GenMsgs;
            };
            Code: {
                encode(message: _46.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.Code;
                fromPartial(object: Partial<_46.Code>): _46.Code;
            };
            Contract: {
                encode(message: _46.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.Contract;
                fromPartial(object: Partial<_46.Contract>): _46.Contract;
            };
            Sequence: {
                encode(message: _46.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.Sequence;
                fromPartial(object: Partial<_46.Sequence>): _46.Sequence;
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
                    v1: _208.MsgClientImpl;
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
                        contractInfo(request: _49.QueryContractInfoRequest): Promise<_49.QueryContractInfoResponse>;
                        contractHistory(request: _49.QueryContractHistoryRequest): Promise<_49.QueryContractHistoryResponse>;
                        contractsByCode(request: _49.QueryContractsByCodeRequest): Promise<_49.QueryContractsByCodeResponse>;
                        allContractState(request: _49.QueryAllContractStateRequest): Promise<_49.QueryAllContractStateResponse>;
                        rawContractState(request: _49.QueryRawContractStateRequest): Promise<_49.QueryRawContractStateResponse>;
                        smartContractState(request: _49.QuerySmartContractStateRequest): Promise<_49.QuerySmartContractStateResponse>;
                        code(request: _49.QueryCodeRequest): Promise<_49.QueryCodeResponse>;
                        codes(request?: _49.QueryCodesRequest): Promise<_49.QueryCodesResponse>;
                        pinnedCodes(request?: _49.QueryPinnedCodesRequest): Promise<_49.QueryPinnedCodesResponse>;
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
                    v1: _206.LCDQueryClient;
                };
            };
        }>;
    };
}
