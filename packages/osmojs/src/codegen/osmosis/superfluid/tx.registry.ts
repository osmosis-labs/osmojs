//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSuperfluidDelegate, MsgSuperfluidUndelegate, MsgSuperfluidUnbondLock, MsgSuperfluidUndelegateAndUnbondLock, MsgLockAndSuperfluidDelegate, MsgCreateFullRangePositionAndSuperfluidDelegate, MsgUnPoolWhitelistedPool, MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition, MsgAddToConcentratedLiquiditySuperfluidPosition, MsgUnbondConvertAndStake } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/osmosis.superfluid.MsgSuperfluidDelegate", MsgSuperfluidDelegate], ["/osmosis.superfluid.MsgSuperfluidUndelegate", MsgSuperfluidUndelegate], ["/osmosis.superfluid.MsgSuperfluidUnbondLock", MsgSuperfluidUnbondLock], ["/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock", MsgSuperfluidUndelegateAndUnbondLock], ["/osmosis.superfluid.MsgLockAndSuperfluidDelegate", MsgLockAndSuperfluidDelegate], ["/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate", MsgCreateFullRangePositionAndSuperfluidDelegate], ["/osmosis.superfluid.MsgUnPoolWhitelistedPool", MsgUnPoolWhitelistedPool], ["/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition", MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition], ["/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition", MsgAddToConcentratedLiquiditySuperfluidPosition], ["/osmosis.superfluid.MsgUnbondConvertAndStake", MsgUnbondConvertAndStake]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    superfluidDelegate(value: MsgSuperfluidDelegate) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate",
        value: MsgSuperfluidDelegate.encode(value).finish()
      };
    },
    superfluidUndelegate(value: MsgSuperfluidUndelegate) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate",
        value: MsgSuperfluidUndelegate.encode(value).finish()
      };
    },
    superfluidUnbondLock(value: MsgSuperfluidUnbondLock) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock",
        value: MsgSuperfluidUnbondLock.encode(value).finish()
      };
    },
    superfluidUndelegateAndUnbondLock(value: MsgSuperfluidUndelegateAndUnbondLock) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock",
        value: MsgSuperfluidUndelegateAndUnbondLock.encode(value).finish()
      };
    },
    lockAndSuperfluidDelegate(value: MsgLockAndSuperfluidDelegate) {
      return {
        typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate",
        value: MsgLockAndSuperfluidDelegate.encode(value).finish()
      };
    },
    createFullRangePositionAndSuperfluidDelegate(value: MsgCreateFullRangePositionAndSuperfluidDelegate) {
      return {
        typeUrl: "/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate",
        value: MsgCreateFullRangePositionAndSuperfluidDelegate.encode(value).finish()
      };
    },
    unPoolWhitelistedPool(value: MsgUnPoolWhitelistedPool) {
      return {
        typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPool",
        value: MsgUnPoolWhitelistedPool.encode(value).finish()
      };
    },
    unlockAndMigrateSharesToFullRangeConcentratedPosition(value: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition) {
      return {
        typeUrl: "/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition",
        value: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.encode(value).finish()
      };
    },
    addToConcentratedLiquiditySuperfluidPosition(value: MsgAddToConcentratedLiquiditySuperfluidPosition) {
      return {
        typeUrl: "/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition",
        value: MsgAddToConcentratedLiquiditySuperfluidPosition.encode(value).finish()
      };
    },
    unbondConvertAndStake(value: MsgUnbondConvertAndStake) {
      return {
        typeUrl: "/osmosis.superfluid.MsgUnbondConvertAndStake",
        value: MsgUnbondConvertAndStake.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    superfluidDelegate(value: MsgSuperfluidDelegate) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate",
        value
      };
    },
    superfluidUndelegate(value: MsgSuperfluidUndelegate) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate",
        value
      };
    },
    superfluidUnbondLock(value: MsgSuperfluidUnbondLock) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock",
        value
      };
    },
    superfluidUndelegateAndUnbondLock(value: MsgSuperfluidUndelegateAndUnbondLock) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock",
        value
      };
    },
    lockAndSuperfluidDelegate(value: MsgLockAndSuperfluidDelegate) {
      return {
        typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate",
        value
      };
    },
    createFullRangePositionAndSuperfluidDelegate(value: MsgCreateFullRangePositionAndSuperfluidDelegate) {
      return {
        typeUrl: "/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate",
        value
      };
    },
    unPoolWhitelistedPool(value: MsgUnPoolWhitelistedPool) {
      return {
        typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPool",
        value
      };
    },
    unlockAndMigrateSharesToFullRangeConcentratedPosition(value: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition) {
      return {
        typeUrl: "/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition",
        value
      };
    },
    addToConcentratedLiquiditySuperfluidPosition(value: MsgAddToConcentratedLiquiditySuperfluidPosition) {
      return {
        typeUrl: "/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition",
        value
      };
    },
    unbondConvertAndStake(value: MsgUnbondConvertAndStake) {
      return {
        typeUrl: "/osmosis.superfluid.MsgUnbondConvertAndStake",
        value
      };
    }
  },
  toJSON: {
    superfluidDelegate(value: MsgSuperfluidDelegate) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate",
        value: MsgSuperfluidDelegate.toJSON(value)
      };
    },
    superfluidUndelegate(value: MsgSuperfluidUndelegate) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate",
        value: MsgSuperfluidUndelegate.toJSON(value)
      };
    },
    superfluidUnbondLock(value: MsgSuperfluidUnbondLock) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock",
        value: MsgSuperfluidUnbondLock.toJSON(value)
      };
    },
    superfluidUndelegateAndUnbondLock(value: MsgSuperfluidUndelegateAndUnbondLock) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock",
        value: MsgSuperfluidUndelegateAndUnbondLock.toJSON(value)
      };
    },
    lockAndSuperfluidDelegate(value: MsgLockAndSuperfluidDelegate) {
      return {
        typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate",
        value: MsgLockAndSuperfluidDelegate.toJSON(value)
      };
    },
    createFullRangePositionAndSuperfluidDelegate(value: MsgCreateFullRangePositionAndSuperfluidDelegate) {
      return {
        typeUrl: "/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate",
        value: MsgCreateFullRangePositionAndSuperfluidDelegate.toJSON(value)
      };
    },
    unPoolWhitelistedPool(value: MsgUnPoolWhitelistedPool) {
      return {
        typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPool",
        value: MsgUnPoolWhitelistedPool.toJSON(value)
      };
    },
    unlockAndMigrateSharesToFullRangeConcentratedPosition(value: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition) {
      return {
        typeUrl: "/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition",
        value: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.toJSON(value)
      };
    },
    addToConcentratedLiquiditySuperfluidPosition(value: MsgAddToConcentratedLiquiditySuperfluidPosition) {
      return {
        typeUrl: "/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition",
        value: MsgAddToConcentratedLiquiditySuperfluidPosition.toJSON(value)
      };
    },
    unbondConvertAndStake(value: MsgUnbondConvertAndStake) {
      return {
        typeUrl: "/osmosis.superfluid.MsgUnbondConvertAndStake",
        value: MsgUnbondConvertAndStake.toJSON(value)
      };
    }
  },
  fromJSON: {
    superfluidDelegate(value: any) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate",
        value: MsgSuperfluidDelegate.fromJSON(value)
      };
    },
    superfluidUndelegate(value: any) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate",
        value: MsgSuperfluidUndelegate.fromJSON(value)
      };
    },
    superfluidUnbondLock(value: any) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock",
        value: MsgSuperfluidUnbondLock.fromJSON(value)
      };
    },
    superfluidUndelegateAndUnbondLock(value: any) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock",
        value: MsgSuperfluidUndelegateAndUnbondLock.fromJSON(value)
      };
    },
    lockAndSuperfluidDelegate(value: any) {
      return {
        typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate",
        value: MsgLockAndSuperfluidDelegate.fromJSON(value)
      };
    },
    createFullRangePositionAndSuperfluidDelegate(value: any) {
      return {
        typeUrl: "/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate",
        value: MsgCreateFullRangePositionAndSuperfluidDelegate.fromJSON(value)
      };
    },
    unPoolWhitelistedPool(value: any) {
      return {
        typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPool",
        value: MsgUnPoolWhitelistedPool.fromJSON(value)
      };
    },
    unlockAndMigrateSharesToFullRangeConcentratedPosition(value: any) {
      return {
        typeUrl: "/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition",
        value: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.fromJSON(value)
      };
    },
    addToConcentratedLiquiditySuperfluidPosition(value: any) {
      return {
        typeUrl: "/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition",
        value: MsgAddToConcentratedLiquiditySuperfluidPosition.fromJSON(value)
      };
    },
    unbondConvertAndStake(value: any) {
      return {
        typeUrl: "/osmosis.superfluid.MsgUnbondConvertAndStake",
        value: MsgUnbondConvertAndStake.fromJSON(value)
      };
    }
  },
  fromPartial: {
    superfluidDelegate(value: MsgSuperfluidDelegate) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate",
        value: MsgSuperfluidDelegate.fromPartial(value)
      };
    },
    superfluidUndelegate(value: MsgSuperfluidUndelegate) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate",
        value: MsgSuperfluidUndelegate.fromPartial(value)
      };
    },
    superfluidUnbondLock(value: MsgSuperfluidUnbondLock) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock",
        value: MsgSuperfluidUnbondLock.fromPartial(value)
      };
    },
    superfluidUndelegateAndUnbondLock(value: MsgSuperfluidUndelegateAndUnbondLock) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock",
        value: MsgSuperfluidUndelegateAndUnbondLock.fromPartial(value)
      };
    },
    lockAndSuperfluidDelegate(value: MsgLockAndSuperfluidDelegate) {
      return {
        typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate",
        value: MsgLockAndSuperfluidDelegate.fromPartial(value)
      };
    },
    createFullRangePositionAndSuperfluidDelegate(value: MsgCreateFullRangePositionAndSuperfluidDelegate) {
      return {
        typeUrl: "/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate",
        value: MsgCreateFullRangePositionAndSuperfluidDelegate.fromPartial(value)
      };
    },
    unPoolWhitelistedPool(value: MsgUnPoolWhitelistedPool) {
      return {
        typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPool",
        value: MsgUnPoolWhitelistedPool.fromPartial(value)
      };
    },
    unlockAndMigrateSharesToFullRangeConcentratedPosition(value: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition) {
      return {
        typeUrl: "/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition",
        value: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.fromPartial(value)
      };
    },
    addToConcentratedLiquiditySuperfluidPosition(value: MsgAddToConcentratedLiquiditySuperfluidPosition) {
      return {
        typeUrl: "/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition",
        value: MsgAddToConcentratedLiquiditySuperfluidPosition.fromPartial(value)
      };
    },
    unbondConvertAndStake(value: MsgUnbondConvertAndStake) {
      return {
        typeUrl: "/osmosis.superfluid.MsgUnbondConvertAndStake",
        value: MsgUnbondConvertAndStake.fromPartial(value)
      };
    }
  }
};