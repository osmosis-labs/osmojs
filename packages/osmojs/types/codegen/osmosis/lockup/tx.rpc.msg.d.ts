import { Rpc } from "@osmonauts/helpers";
import { MsgLockTokens, MsgLockTokensResponse, MsgBeginUnlockingAll, MsgBeginUnlockingAllResponse, MsgBeginUnlocking, MsgBeginUnlockingResponse, MsgExtendLockup, MsgExtendLockupResponse } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    lockTokens(request: MsgLockTokens): Promise<MsgLockTokensResponse>;
    beginUnlockingAll(request: MsgBeginUnlockingAll): Promise<MsgBeginUnlockingAllResponse>;
    beginUnlocking(request: MsgBeginUnlocking): Promise<MsgBeginUnlockingResponse>;
    extendLockup(request: MsgExtendLockup): Promise<MsgExtendLockupResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    lockTokens(request: MsgLockTokens): Promise<MsgLockTokensResponse>;
    beginUnlockingAll(request: MsgBeginUnlockingAll): Promise<MsgBeginUnlockingAllResponse>;
    beginUnlocking(request: MsgBeginUnlocking): Promise<MsgBeginUnlockingResponse>;
    extendLockup(request: MsgExtendLockup): Promise<MsgExtendLockupResponse>;
}
