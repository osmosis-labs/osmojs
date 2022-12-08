import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgLockTokens, MsgBeginUnlockingAll, MsgBeginUnlocking, MsgExtendLockup, MsgForceUnlock } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        lockTokens(value: MsgLockTokens): {
            typeUrl: string;
            value: Uint8Array;
        };
        beginUnlockingAll(value: MsgBeginUnlockingAll): {
            typeUrl: string;
            value: Uint8Array;
        };
        beginUnlocking(value: MsgBeginUnlocking): {
            typeUrl: string;
            value: Uint8Array;
        };
        extendLockup(value: MsgExtendLockup): {
            typeUrl: string;
            value: Uint8Array;
        };
        forceUnlock(value: MsgForceUnlock): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        lockTokens(value: MsgLockTokens): {
            typeUrl: string;
            value: MsgLockTokens;
        };
        beginUnlockingAll(value: MsgBeginUnlockingAll): {
            typeUrl: string;
            value: MsgBeginUnlockingAll;
        };
        beginUnlocking(value: MsgBeginUnlocking): {
            typeUrl: string;
            value: MsgBeginUnlocking;
        };
        extendLockup(value: MsgExtendLockup): {
            typeUrl: string;
            value: MsgExtendLockup;
        };
        forceUnlock(value: MsgForceUnlock): {
            typeUrl: string;
            value: MsgForceUnlock;
        };
    };
    fromPartial: {
        lockTokens(value: MsgLockTokens): {
            typeUrl: string;
            value: MsgLockTokens;
        };
        beginUnlockingAll(value: MsgBeginUnlockingAll): {
            typeUrl: string;
            value: MsgBeginUnlockingAll;
        };
        beginUnlocking(value: MsgBeginUnlocking): {
            typeUrl: string;
            value: MsgBeginUnlocking;
        };
        extendLockup(value: MsgExtendLockup): {
            typeUrl: string;
            value: MsgExtendLockup;
        };
        forceUnlock(value: MsgForceUnlock): {
            typeUrl: string;
            value: MsgForceUnlock;
        };
    };
};
