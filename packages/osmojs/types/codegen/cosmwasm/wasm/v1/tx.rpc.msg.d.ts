import { Rpc } from "@osmonauts/helpers";
import { MsgStoreCode, MsgStoreCodeResponseSDKType, MsgInstantiateContract, MsgInstantiateContractResponseSDKType, MsgExecuteContract, MsgExecuteContractResponseSDKType, MsgMigrateContract, MsgMigrateContractResponseSDKType, MsgUpdateAdmin, MsgUpdateAdminResponseSDKType, MsgClearAdmin, MsgClearAdminResponseSDKType } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    storeCode(request: MsgStoreCode): Promise<MsgStoreCodeResponseSDKType>;
    instantiateContract(request: MsgInstantiateContract): Promise<MsgInstantiateContractResponseSDKType>;
    executeContract(request: MsgExecuteContract): Promise<MsgExecuteContractResponseSDKType>;
    migrateContract(request: MsgMigrateContract): Promise<MsgMigrateContractResponseSDKType>;
    updateAdmin(request: MsgUpdateAdmin): Promise<MsgUpdateAdminResponseSDKType>;
    clearAdmin(request: MsgClearAdmin): Promise<MsgClearAdminResponseSDKType>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    storeCode(request: MsgStoreCode): Promise<MsgStoreCodeResponseSDKType>;
    instantiateContract(request: MsgInstantiateContract): Promise<MsgInstantiateContractResponseSDKType>;
    executeContract(request: MsgExecuteContract): Promise<MsgExecuteContractResponseSDKType>;
    migrateContract(request: MsgMigrateContract): Promise<MsgMigrateContractResponseSDKType>;
    updateAdmin(request: MsgUpdateAdmin): Promise<MsgUpdateAdminResponseSDKType>;
    clearAdmin(request: MsgClearAdmin): Promise<MsgClearAdminResponseSDKType>;
}
