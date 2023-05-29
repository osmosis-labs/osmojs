import { Rpc } from "../../../helpers";
import { MsgSend, MsgSendResponse, MsgMultiSend, MsgMultiSendResponse } from "./tx";
/** Msg defines the bank Msg service. */
export interface Msg {
    /**
     * Send defines a method for sending coins from one account to another
     * account.
     */
    send(request: MsgSend): Promise<MsgSendResponse>;
    /**
     * MultiSend defines a method for sending coins from a single account to
     * multiple accounts. It can be seen as a single message representation of
     * multiple individual MsgSend messages.
     */
    multiSend(request: MsgMultiSend): Promise<MsgMultiSendResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    send(request: MsgSend): Promise<MsgSendResponse>;
    multiSend(request: MsgMultiSend): Promise<MsgMultiSendResponse>;
}
