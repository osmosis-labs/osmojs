import { Rpc } from "@osmonauts/helpers";
import { MsgCreateClient, MsgCreateClientResponseSDKType, MsgUpdateClient, MsgUpdateClientResponseSDKType, MsgUpgradeClient, MsgUpgradeClientResponseSDKType, MsgSubmitMisbehaviour, MsgSubmitMisbehaviourResponseSDKType } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    createClient(request: MsgCreateClient): Promise<MsgCreateClientResponseSDKType>;
    updateClient(request: MsgUpdateClient): Promise<MsgUpdateClientResponseSDKType>;
    upgradeClient(request: MsgUpgradeClient): Promise<MsgUpgradeClientResponseSDKType>;
    submitMisbehaviour(request: MsgSubmitMisbehaviour): Promise<MsgSubmitMisbehaviourResponseSDKType>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createClient(request: MsgCreateClient): Promise<MsgCreateClientResponseSDKType>;
    updateClient(request: MsgUpdateClient): Promise<MsgUpdateClientResponseSDKType>;
    upgradeClient(request: MsgUpgradeClient): Promise<MsgUpgradeClientResponseSDKType>;
    submitMisbehaviour(request: MsgSubmitMisbehaviour): Promise<MsgSubmitMisbehaviourResponseSDKType>;
}
