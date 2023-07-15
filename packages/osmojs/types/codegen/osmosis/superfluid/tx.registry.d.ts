import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSuperfluidDelegate, MsgSuperfluidUndelegate, MsgSuperfluidUnbondLock, MsgSuperfluidUndelegateAndUnbondLock, MsgLockAndSuperfluidDelegate, MsgCreateFullRangePositionAndSuperfluidDelegate, MsgUnPoolWhitelistedPool, MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition, MsgAddToConcentratedLiquiditySuperfluidPosition } from "./tx";
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
        superfluidUndelegateAndUnbondLock(value: MsgSuperfluidUndelegateAndUnbondLock): {
            typeUrl: string;
            value: Uint8Array;
        };
        lockAndSuperfluidDelegate(value: MsgLockAndSuperfluidDelegate): {
            typeUrl: string;
            value: Uint8Array;
        };
        createFullRangePositionAndSuperfluidDelegate(value: MsgCreateFullRangePositionAndSuperfluidDelegate): {
            typeUrl: string;
            value: Uint8Array;
        };
        unPoolWhitelistedPool(value: MsgUnPoolWhitelistedPool): {
            typeUrl: string;
            value: Uint8Array;
        };
        unlockAndMigrateSharesToFullRangeConcentratedPosition(value: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): {
            typeUrl: string;
            value: Uint8Array;
        };
        addToConcentratedLiquiditySuperfluidPosition(value: MsgAddToConcentratedLiquiditySuperfluidPosition): {
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
        superfluidUndelegateAndUnbondLock(value: MsgSuperfluidUndelegateAndUnbondLock): {
            typeUrl: string;
            value: MsgSuperfluidUndelegateAndUnbondLock;
        };
        lockAndSuperfluidDelegate(value: MsgLockAndSuperfluidDelegate): {
            typeUrl: string;
            value: MsgLockAndSuperfluidDelegate;
        };
        createFullRangePositionAndSuperfluidDelegate(value: MsgCreateFullRangePositionAndSuperfluidDelegate): {
            typeUrl: string;
            value: MsgCreateFullRangePositionAndSuperfluidDelegate;
        };
        unPoolWhitelistedPool(value: MsgUnPoolWhitelistedPool): {
            typeUrl: string;
            value: MsgUnPoolWhitelistedPool;
        };
        unlockAndMigrateSharesToFullRangeConcentratedPosition(value: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): {
            typeUrl: string;
            value: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
        };
        addToConcentratedLiquiditySuperfluidPosition(value: MsgAddToConcentratedLiquiditySuperfluidPosition): {
            typeUrl: string;
            value: MsgAddToConcentratedLiquiditySuperfluidPosition;
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
        superfluidUndelegateAndUnbondLock(value: MsgSuperfluidUndelegateAndUnbondLock): {
            typeUrl: string;
            value: MsgSuperfluidUndelegateAndUnbondLock;
        };
        lockAndSuperfluidDelegate(value: MsgLockAndSuperfluidDelegate): {
            typeUrl: string;
            value: MsgLockAndSuperfluidDelegate;
        };
        createFullRangePositionAndSuperfluidDelegate(value: MsgCreateFullRangePositionAndSuperfluidDelegate): {
            typeUrl: string;
            value: MsgCreateFullRangePositionAndSuperfluidDelegate;
        };
        unPoolWhitelistedPool(value: MsgUnPoolWhitelistedPool): {
            typeUrl: string;
            value: MsgUnPoolWhitelistedPool;
        };
        unlockAndMigrateSharesToFullRangeConcentratedPosition(value: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): {
            typeUrl: string;
            value: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
        };
        addToConcentratedLiquiditySuperfluidPosition(value: MsgAddToConcentratedLiquiditySuperfluidPosition): {
            typeUrl: string;
            value: MsgAddToConcentratedLiquiditySuperfluidPosition;
        };
    };
};
