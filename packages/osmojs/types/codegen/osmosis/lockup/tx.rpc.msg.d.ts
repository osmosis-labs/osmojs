import { Rpc } from "../../helpers";
import { MsgLockTokens, MsgLockTokensResponse, MsgBeginUnlockingAll, MsgBeginUnlockingAllResponse, MsgBeginUnlocking, MsgBeginUnlockingResponse, MsgExtendLockup, MsgExtendLockupResponse, MsgForceUnlock, MsgForceUnlockResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    /** LockTokens lock tokens */
    lockTokens(request: MsgLockTokens): Promise<MsgLockTokensResponse>;
    /** BeginUnlockingAll begin unlocking all tokens */
    beginUnlockingAll(request: MsgBeginUnlockingAll): Promise<MsgBeginUnlockingAllResponse>;
    /** MsgBeginUnlocking begins unlocking tokens by lock ID */
    beginUnlocking(request: MsgBeginUnlocking): Promise<MsgBeginUnlockingResponse>;
    /** MsgEditLockup edits the existing lockups by lock ID */
    extendLockup(request: MsgExtendLockup): Promise<MsgExtendLockupResponse>;
    forceUnlock(request: MsgForceUnlock): Promise<MsgForceUnlockResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    lockTokens(request: MsgLockTokens): Promise<MsgLockTokensResponse>;
    beginUnlockingAll(request: MsgBeginUnlockingAll): Promise<MsgBeginUnlockingAllResponse>;
    beginUnlocking(request: MsgBeginUnlocking): Promise<MsgBeginUnlockingResponse>;
    extendLockup(request: MsgExtendLockup): Promise<MsgExtendLockupResponse>;
    forceUnlock(request: MsgForceUnlock): Promise<MsgForceUnlockResponse>;
}
