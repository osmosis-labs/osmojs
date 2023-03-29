import { Rpc } from "../../helpers";
import { MsgSuperfluidDelegate, MsgSuperfluidDelegateResponse, MsgSuperfluidUndelegate, MsgSuperfluidUndelegateResponse, MsgSuperfluidUnbondLock, MsgSuperfluidUnbondLockResponse, MsgSuperfluidUndelegateAndUnbondLock, MsgSuperfluidUndelegateAndUnbondLockResponse, MsgLockAndSuperfluidDelegate, MsgLockAndSuperfluidDelegateResponse, MsgUnPoolWhitelistedPool, MsgUnPoolWhitelistedPoolResponse, MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition, MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    /** Execute superfluid delegation for a lockup */
    superfluidDelegate(request: MsgSuperfluidDelegate): Promise<MsgSuperfluidDelegateResponse>;
    /** Execute superfluid undelegation for a lockup */
    superfluidUndelegate(request: MsgSuperfluidUndelegate): Promise<MsgSuperfluidUndelegateResponse>;
    /**
     * For a given lock that is being superfluidly undelegated,
     * also unbond the underlying lock.
     */
    superfluidUnbondLock(request: MsgSuperfluidUnbondLock): Promise<MsgSuperfluidUnbondLockResponse>;
    /** Superfluid undelegate and unbond partial amount of the underlying lock. */
    superfluidUndelegateAndUnbondLock(request: MsgSuperfluidUndelegateAndUnbondLock): Promise<MsgSuperfluidUndelegateAndUnbondLockResponse>;
    /** Execute lockup lock and superfluid delegation in a single msg */
    lockAndSuperfluidDelegate(request: MsgLockAndSuperfluidDelegate): Promise<MsgLockAndSuperfluidDelegateResponse>;
    unPoolWhitelistedPool(request: MsgUnPoolWhitelistedPool): Promise<MsgUnPoolWhitelistedPoolResponse>;
    unlockAndMigrateSharesToFullRangeConcentratedPosition(request: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): Promise<MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    superfluidDelegate(request: MsgSuperfluidDelegate): Promise<MsgSuperfluidDelegateResponse>;
    superfluidUndelegate(request: MsgSuperfluidUndelegate): Promise<MsgSuperfluidUndelegateResponse>;
    superfluidUnbondLock(request: MsgSuperfluidUnbondLock): Promise<MsgSuperfluidUnbondLockResponse>;
    superfluidUndelegateAndUnbondLock(request: MsgSuperfluidUndelegateAndUnbondLock): Promise<MsgSuperfluidUndelegateAndUnbondLockResponse>;
    lockAndSuperfluidDelegate(request: MsgLockAndSuperfluidDelegate): Promise<MsgLockAndSuperfluidDelegateResponse>;
    unPoolWhitelistedPool(request: MsgUnPoolWhitelistedPool): Promise<MsgUnPoolWhitelistedPoolResponse>;
    unlockAndMigrateSharesToFullRangeConcentratedPosition(request: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): Promise<MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse>;
}
