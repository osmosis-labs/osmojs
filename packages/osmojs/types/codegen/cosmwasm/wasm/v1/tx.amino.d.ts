import { MsgStoreCode, MsgInstantiateContract, MsgInstantiateContract2, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin, MsgUpdateInstantiateConfig } from "./tx";
export declare const AminoConverter: {
    "/cosmwasm.wasm.v1.MsgStoreCode": {
        aminoType: string;
        toAmino: (message: MsgStoreCode) => import("./tx").MsgStoreCodeAmino;
        fromAmino: (object: import("./tx").MsgStoreCodeAmino) => MsgStoreCode;
    };
    "/cosmwasm.wasm.v1.MsgInstantiateContract": {
        aminoType: string;
        toAmino: (message: MsgInstantiateContract) => import("./tx").MsgInstantiateContractAmino;
        fromAmino: (object: import("./tx").MsgInstantiateContractAmino) => MsgInstantiateContract;
    };
    "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
        aminoType: string;
        toAmino: (message: MsgInstantiateContract2) => import("./tx").MsgInstantiateContract2Amino;
        fromAmino: (object: import("./tx").MsgInstantiateContract2Amino) => MsgInstantiateContract2;
    };
    "/cosmwasm.wasm.v1.MsgExecuteContract": {
        aminoType: string;
        toAmino: (message: MsgExecuteContract) => import("./tx").MsgExecuteContractAmino;
        fromAmino: (object: import("./tx").MsgExecuteContractAmino) => MsgExecuteContract;
    };
    "/cosmwasm.wasm.v1.MsgMigrateContract": {
        aminoType: string;
        toAmino: (message: MsgMigrateContract) => import("./tx").MsgMigrateContractAmino;
        fromAmino: (object: import("./tx").MsgMigrateContractAmino) => MsgMigrateContract;
    };
    "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
        aminoType: string;
        toAmino: (message: MsgUpdateAdmin) => import("./tx").MsgUpdateAdminAmino;
        fromAmino: (object: import("./tx").MsgUpdateAdminAmino) => MsgUpdateAdmin;
    };
    "/cosmwasm.wasm.v1.MsgClearAdmin": {
        aminoType: string;
        toAmino: (message: MsgClearAdmin) => import("./tx").MsgClearAdminAmino;
        fromAmino: (object: import("./tx").MsgClearAdminAmino) => MsgClearAdmin;
    };
    "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
        aminoType: string;
        toAmino: (message: MsgUpdateInstantiateConfig) => import("./tx").MsgUpdateInstantiateConfigAmino;
        fromAmino: (object: import("./tx").MsgUpdateInstantiateConfigAmino) => MsgUpdateInstantiateConfig;
    };
};
