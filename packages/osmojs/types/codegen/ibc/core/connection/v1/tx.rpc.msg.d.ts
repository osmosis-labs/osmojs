import { Rpc } from "@osmonauts/helpers";
import { MsgConnectionOpenInit, MsgConnectionOpenInitResponseSDKType, MsgConnectionOpenTry, MsgConnectionOpenTryResponseSDKType, MsgConnectionOpenAck, MsgConnectionOpenAckResponseSDKType, MsgConnectionOpenConfirm, MsgConnectionOpenConfirmResponseSDKType } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    connectionOpenInit(request: MsgConnectionOpenInit): Promise<MsgConnectionOpenInitResponseSDKType>;
    connectionOpenTry(request: MsgConnectionOpenTry): Promise<MsgConnectionOpenTryResponseSDKType>;
    connectionOpenAck(request: MsgConnectionOpenAck): Promise<MsgConnectionOpenAckResponseSDKType>;
    connectionOpenConfirm(request: MsgConnectionOpenConfirm): Promise<MsgConnectionOpenConfirmResponseSDKType>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    connectionOpenInit(request: MsgConnectionOpenInit): Promise<MsgConnectionOpenInitResponseSDKType>;
    connectionOpenTry(request: MsgConnectionOpenTry): Promise<MsgConnectionOpenTryResponseSDKType>;
    connectionOpenAck(request: MsgConnectionOpenAck): Promise<MsgConnectionOpenAckResponseSDKType>;
    connectionOpenConfirm(request: MsgConnectionOpenConfirm): Promise<MsgConnectionOpenConfirmResponseSDKType>;
}
