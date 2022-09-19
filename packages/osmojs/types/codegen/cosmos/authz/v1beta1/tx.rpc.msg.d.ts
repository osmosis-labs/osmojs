import { Rpc } from "@osmonauts/helpers";
import { MsgGrant, MsgGrantResponseSDKType, MsgExec, MsgExecResponseSDKType, MsgRevoke, MsgRevokeResponseSDKType } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    grant(request: MsgGrant): Promise<MsgGrantResponseSDKType>;
    exec(request: MsgExec): Promise<MsgExecResponseSDKType>;
    revoke(request: MsgRevoke): Promise<MsgRevokeResponseSDKType>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    grant(request: MsgGrant): Promise<MsgGrantResponseSDKType>;
    exec(request: MsgExec): Promise<MsgExecResponseSDKType>;
    revoke(request: MsgRevoke): Promise<MsgRevokeResponseSDKType>;
}
