import { Rpc } from "@osmonauts/helpers";
import { MsgSend, MsgSendResponseSDKType } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    send(request: MsgSend): Promise<MsgSendResponseSDKType>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    send(request: MsgSend): Promise<MsgSendResponseSDKType>;
}
