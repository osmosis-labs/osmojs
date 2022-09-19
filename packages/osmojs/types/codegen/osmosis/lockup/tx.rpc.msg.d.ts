import { Rpc } from "@osmonauts/helpers";
import { MsgLockTokens, MsgLockTokensResponseSDKType, MsgBeginUnlockingAll, MsgBeginUnlockingAllResponseSDKType, MsgBeginUnlocking, MsgBeginUnlockingResponseSDKType, MsgExtendLockup, MsgExtendLockupResponseSDKType } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    lockTokens(request: MsgLockTokens): Promise<MsgLockTokensResponseSDKType>;
    beginUnlockingAll(request: MsgBeginUnlockingAll): Promise<MsgBeginUnlockingAllResponseSDKType>;
    beginUnlocking(request: MsgBeginUnlocking): Promise<MsgBeginUnlockingResponseSDKType>;
    extendLockup(request: MsgExtendLockup): Promise<MsgExtendLockupResponseSDKType>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    lockTokens(request: MsgLockTokens): Promise<MsgLockTokensResponseSDKType>;
    beginUnlockingAll(request: MsgBeginUnlockingAll): Promise<MsgBeginUnlockingAllResponseSDKType>;
    beginUnlocking(request: MsgBeginUnlocking): Promise<MsgBeginUnlockingResponseSDKType>;
    extendLockup(request: MsgExtendLockup): Promise<MsgExtendLockupResponseSDKType>;
}
