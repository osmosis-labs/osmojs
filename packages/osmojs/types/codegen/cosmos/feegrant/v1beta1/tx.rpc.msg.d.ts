import { Rpc } from "@osmonauts/helpers";
import { MsgGrantAllowance, MsgGrantAllowanceResponseSDKType, MsgRevokeAllowance, MsgRevokeAllowanceResponseSDKType } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    grantAllowance(request: MsgGrantAllowance): Promise<MsgGrantAllowanceResponseSDKType>;
    revokeAllowance(request: MsgRevokeAllowance): Promise<MsgRevokeAllowanceResponseSDKType>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    grantAllowance(request: MsgGrantAllowance): Promise<MsgGrantAllowanceResponseSDKType>;
    revokeAllowance(request: MsgRevokeAllowance): Promise<MsgRevokeAllowanceResponseSDKType>;
}
