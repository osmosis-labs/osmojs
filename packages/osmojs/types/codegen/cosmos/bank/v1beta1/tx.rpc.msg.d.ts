import { Rpc } from "@osmonauts/helpers";
import { MsgSend, MsgSendResponseSDKType, MsgMultiSend, MsgMultiSendResponseSDKType } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    send(request: MsgSend): Promise<MsgSendResponseSDKType>;
    multiSend(request: MsgMultiSend): Promise<MsgMultiSendResponseSDKType>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    send(request: MsgSend): Promise<MsgSendResponseSDKType>;
    multiSend(request: MsgMultiSend): Promise<MsgMultiSendResponseSDKType>;
}
