import { Rpc } from "@osmonauts/helpers";
import { MsgTransfer, MsgTransferResponseSDKType } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    transfer(request: MsgTransfer): Promise<MsgTransferResponseSDKType>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    transfer(request: MsgTransfer): Promise<MsgTransferResponseSDKType>;
}
