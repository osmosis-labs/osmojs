import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgLockTokens, MsgBeginUnlockingAll, MsgBeginUnlocking, MsgExtendLockup } from "./tx";
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
    };
    toJSON: {
        lockTokens(value: MsgLockTokens): {
            typeUrl: string;
            value: any;
        };
        beginUnlockingAll(value: MsgBeginUnlockingAll): {
            typeUrl: string;
            value: any;
        };
        beginUnlocking(value: MsgBeginUnlocking): {
            typeUrl: string;
            value: any;
        };
        extendLockup(value: MsgExtendLockup): {
            typeUrl: string;
            value: any;
        };
    };
    fromJSON: {
        lockTokens(value: any): {
            typeUrl: string;
            value: any;
        };
        beginUnlockingAll(value: any): {
            typeUrl: string;
            value: any;
        };
        beginUnlocking(value: any): {
            typeUrl: string;
            value: any;
        };
        extendLockup(value: any): {
            typeUrl: string;
            value: any;
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
    };
};
