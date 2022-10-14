import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
export interface MsgSuperfluidDelegate {
    sender: string;
    lockId: Long;
    valAddr: string;
}
export interface MsgSuperfluidDelegateSDKType {
    sender: string;
    lock_id: Long;
    val_addr: string;
}
export interface MsgSuperfluidDelegateResponse {
}
export interface MsgSuperfluidDelegateResponseSDKType {
}
export interface MsgSuperfluidUndelegate {
    sender: string;
    lockId: Long;
}
export interface MsgSuperfluidUndelegateSDKType {
    sender: string;
    lock_id: Long;
}
export interface MsgSuperfluidUndelegateResponse {
}
export interface MsgSuperfluidUndelegateResponseSDKType {
}
export interface MsgSuperfluidUnbondLock {
    sender: string;
    lockId: Long;
}
export interface MsgSuperfluidUnbondLockSDKType {
    sender: string;
    lock_id: Long;
}
export interface MsgSuperfluidUnbondLockResponse {
}
export interface MsgSuperfluidUnbondLockResponseSDKType {
}
/**
 * MsgLockAndSuperfluidDelegate locks coins with the unbonding period duration,
 * and then does a superfluid lock from the newly created lockup, to the
 * specified validator addr.
 */
export interface MsgLockAndSuperfluidDelegate {
    sender: string;
    coins: Coin[];
    valAddr: string;
}
/**
 * MsgLockAndSuperfluidDelegate locks coins with the unbonding period duration,
 * and then does a superfluid lock from the newly created lockup, to the
 * specified validator addr.
 */
export interface MsgLockAndSuperfluidDelegateSDKType {
    sender: string;
    coins: CoinSDKType[];
    val_addr: string;
}
export interface MsgLockAndSuperfluidDelegateResponse {
    ID: Long;
}
export interface MsgLockAndSuperfluidDelegateResponseSDKType {
    ID: Long;
}
/**
 * MsgUnPoolWhitelistedPool Unpools every lock the sender has, that is
 * associated with pool pool_id. If pool_id is not approved for unpooling by
 * governance, this is a no-op. Unpooling takes the locked gamm shares, and runs
 * "ExitPool" on it, to get the constituent tokens. e.g. z gamm/pool/1 tokens
 * ExitPools into constituent tokens x uatom, y uosmo. Then it creates a new
 * lock for every constituent token, with the duration associated with the lock.
 * If the lock was unbonding, the new lockup durations should be the time left
 * until unbond completion.
 */
export interface MsgUnPoolWhitelistedPool {
    sender: string;
    poolId: Long;
}
/**
 * MsgUnPoolWhitelistedPool Unpools every lock the sender has, that is
 * associated with pool pool_id. If pool_id is not approved for unpooling by
 * governance, this is a no-op. Unpooling takes the locked gamm shares, and runs
 * "ExitPool" on it, to get the constituent tokens. e.g. z gamm/pool/1 tokens
 * ExitPools into constituent tokens x uatom, y uosmo. Then it creates a new
 * lock for every constituent token, with the duration associated with the lock.
 * If the lock was unbonding, the new lockup durations should be the time left
 * until unbond completion.
 */
export interface MsgUnPoolWhitelistedPoolSDKType {
    sender: string;
    pool_id: Long;
}
export interface MsgUnPoolWhitelistedPoolResponse {
    exitedLockIds: Long[];
}
export interface MsgUnPoolWhitelistedPoolResponseSDKType {
    exited_lock_ids: Long[];
}
export declare const MsgSuperfluidDelegate: {
    encode(message: MsgSuperfluidDelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidDelegate;
    fromPartial(object: Partial<MsgSuperfluidDelegate>): MsgSuperfluidDelegate;
};
export declare const MsgSuperfluidDelegateResponse: {
    encode(_: MsgSuperfluidDelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidDelegateResponse;
    fromPartial(_: Partial<MsgSuperfluidDelegateResponse>): MsgSuperfluidDelegateResponse;
};
export declare const MsgSuperfluidUndelegate: {
    encode(message: MsgSuperfluidUndelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidUndelegate;
    fromPartial(object: Partial<MsgSuperfluidUndelegate>): MsgSuperfluidUndelegate;
};
export declare const MsgSuperfluidUndelegateResponse: {
    encode(_: MsgSuperfluidUndelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidUndelegateResponse;
    fromPartial(_: Partial<MsgSuperfluidUndelegateResponse>): MsgSuperfluidUndelegateResponse;
};
export declare const MsgSuperfluidUnbondLock: {
    encode(message: MsgSuperfluidUnbondLock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidUnbondLock;
    fromPartial(object: Partial<MsgSuperfluidUnbondLock>): MsgSuperfluidUnbondLock;
};
export declare const MsgSuperfluidUnbondLockResponse: {
    encode(_: MsgSuperfluidUnbondLockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidUnbondLockResponse;
    fromPartial(_: Partial<MsgSuperfluidUnbondLockResponse>): MsgSuperfluidUnbondLockResponse;
};
export declare const MsgLockAndSuperfluidDelegate: {
    encode(message: MsgLockAndSuperfluidDelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLockAndSuperfluidDelegate;
    fromPartial(object: Partial<MsgLockAndSuperfluidDelegate>): MsgLockAndSuperfluidDelegate;
};
export declare const MsgLockAndSuperfluidDelegateResponse: {
    encode(message: MsgLockAndSuperfluidDelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLockAndSuperfluidDelegateResponse;
    fromPartial(object: Partial<MsgLockAndSuperfluidDelegateResponse>): MsgLockAndSuperfluidDelegateResponse;
};
export declare const MsgUnPoolWhitelistedPool: {
    encode(message: MsgUnPoolWhitelistedPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnPoolWhitelistedPool;
    fromPartial(object: Partial<MsgUnPoolWhitelistedPool>): MsgUnPoolWhitelistedPool;
};
export declare const MsgUnPoolWhitelistedPoolResponse: {
    encode(message: MsgUnPoolWhitelistedPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnPoolWhitelistedPoolResponse;
    fromPartial(object: Partial<MsgUnPoolWhitelistedPoolResponse>): MsgUnPoolWhitelistedPoolResponse;
};
