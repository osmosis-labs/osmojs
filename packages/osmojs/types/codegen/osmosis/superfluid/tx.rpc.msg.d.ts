import { Rpc } from "../../helpers";
import { MsgSuperfluidDelegate, MsgSuperfluidDelegateResponse, MsgSuperfluidUndelegate, MsgSuperfluidUndelegateResponse, MsgSuperfluidUnbondLock, MsgSuperfluidUnbondLockResponse, MsgLockAndSuperfluidDelegate, MsgLockAndSuperfluidDelegateResponse, MsgUnPoolWhitelistedPool, MsgUnPoolWhitelistedPoolResponse } from "./tx";
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
    /** Execute lockup lock and superfluid delegation in a single msg */
    lockAndSuperfluidDelegate(request: MsgLockAndSuperfluidDelegate): Promise<MsgLockAndSuperfluidDelegateResponse>;
    unPoolWhitelistedPool(request: MsgUnPoolWhitelistedPool): Promise<MsgUnPoolWhitelistedPoolResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    superfluidDelegate(request: MsgSuperfluidDelegate): Promise<MsgSuperfluidDelegateResponse>;
    superfluidUndelegate(request: MsgSuperfluidUndelegate): Promise<MsgSuperfluidUndelegateResponse>;
    superfluidUnbondLock(request: MsgSuperfluidUnbondLock): Promise<MsgSuperfluidUnbondLockResponse>;
    lockAndSuperfluidDelegate(request: MsgLockAndSuperfluidDelegate): Promise<MsgLockAndSuperfluidDelegateResponse>;
    unPoolWhitelistedPool(request: MsgUnPoolWhitelistedPool): Promise<MsgUnPoolWhitelistedPoolResponse>;
}
