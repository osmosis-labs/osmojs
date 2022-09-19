import { Rpc } from "@osmonauts/helpers";
import { MsgSoftwareUpgrade, MsgSoftwareUpgradeResponseSDKType, MsgCancelUpgrade, MsgCancelUpgradeResponseSDKType } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    softwareUpgrade(request: MsgSoftwareUpgrade): Promise<MsgSoftwareUpgradeResponseSDKType>;
    cancelUpgrade(request: MsgCancelUpgrade): Promise<MsgCancelUpgradeResponseSDKType>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    softwareUpgrade(request: MsgSoftwareUpgrade): Promise<MsgSoftwareUpgradeResponseSDKType>;
    cancelUpgrade(request: MsgCancelUpgrade): Promise<MsgCancelUpgradeResponseSDKType>;
}
