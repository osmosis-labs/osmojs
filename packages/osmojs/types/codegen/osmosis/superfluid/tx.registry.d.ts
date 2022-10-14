import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSuperfluidDelegate, MsgSuperfluidUndelegate, MsgSuperfluidUnbondLock, MsgLockAndSuperfluidDelegate, MsgUnPoolWhitelistedPool } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        superfluidDelegate(value: MsgSuperfluidDelegate): {
            typeUrl: string;
            value: Uint8Array;
        };
        superfluidUndelegate(value: MsgSuperfluidUndelegate): {
            typeUrl: string;
            value: Uint8Array;
        };
        superfluidUnbondLock(value: MsgSuperfluidUnbondLock): {
            typeUrl: string;
            value: Uint8Array;
        };
        lockAndSuperfluidDelegate(value: MsgLockAndSuperfluidDelegate): {
            typeUrl: string;
            value: Uint8Array;
        };
        unPoolWhitelistedPool(value: MsgUnPoolWhitelistedPool): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        superfluidDelegate(value: MsgSuperfluidDelegate): {
            typeUrl: string;
            value: MsgSuperfluidDelegate;
        };
        superfluidUndelegate(value: MsgSuperfluidUndelegate): {
            typeUrl: string;
            value: MsgSuperfluidUndelegate;
        };
        superfluidUnbondLock(value: MsgSuperfluidUnbondLock): {
            typeUrl: string;
            value: MsgSuperfluidUnbondLock;
        };
        lockAndSuperfluidDelegate(value: MsgLockAndSuperfluidDelegate): {
            typeUrl: string;
            value: MsgLockAndSuperfluidDelegate;
        };
        unPoolWhitelistedPool(value: MsgUnPoolWhitelistedPool): {
            typeUrl: string;
            value: MsgUnPoolWhitelistedPool;
        };
    };
    fromPartial: {
        superfluidDelegate(value: MsgSuperfluidDelegate): {
            typeUrl: string;
            value: MsgSuperfluidDelegate;
        };
        superfluidUndelegate(value: MsgSuperfluidUndelegate): {
            typeUrl: string;
            value: MsgSuperfluidUndelegate;
        };
        superfluidUnbondLock(value: MsgSuperfluidUnbondLock): {
            typeUrl: string;
            value: MsgSuperfluidUnbondLock;
        };
        lockAndSuperfluidDelegate(value: MsgLockAndSuperfluidDelegate): {
            typeUrl: string;
            value: MsgLockAndSuperfluidDelegate;
        };
        unPoolWhitelistedPool(value: MsgUnPoolWhitelistedPool): {
            typeUrl: string;
            value: MsgUnPoolWhitelistedPool;
        };
    };
};
