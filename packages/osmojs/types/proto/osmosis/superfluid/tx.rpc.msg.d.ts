import { Rpc } from "@osmonauts/helpers";
import { MsgSuperfluidDelegate, MsgSuperfluidDelegateResponse, MsgSuperfluidUndelegate, MsgSuperfluidUndelegateResponse, MsgSuperfluidUnbondLock, MsgSuperfluidUnbondLockResponse, MsgLockAndSuperfluidDelegate, MsgLockAndSuperfluidDelegateResponse } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    superfluidDelegate(request: MsgSuperfluidDelegate): Promise<MsgSuperfluidDelegateResponse>;
    superfluidUndelegate(request: MsgSuperfluidUndelegate): Promise<MsgSuperfluidUndelegateResponse>;
    superfluidUnbondLock(request: MsgSuperfluidUnbondLock): Promise<MsgSuperfluidUnbondLockResponse>;
    lockAndSuperfluidDelegate(request: MsgLockAndSuperfluidDelegate): Promise<MsgLockAndSuperfluidDelegateResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    superfluidDelegate(request: MsgSuperfluidDelegate): Promise<MsgSuperfluidDelegateResponse>;
    superfluidUndelegate(request: MsgSuperfluidUndelegate): Promise<MsgSuperfluidUndelegateResponse>;
    superfluidUnbondLock(request: MsgSuperfluidUnbondLock): Promise<MsgSuperfluidUnbondLockResponse>;
    lockAndSuperfluidDelegate(request: MsgLockAndSuperfluidDelegate): Promise<MsgLockAndSuperfluidDelegateResponse>;
}
