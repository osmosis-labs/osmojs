import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgSuperfluidDelegate, MsgSuperfluidDelegateResponse, MsgSuperfluidUndelegate, MsgSuperfluidUndelegateResponse, MsgSuperfluidUnbondLock, MsgSuperfluidUnbondLockResponse, MsgSuperfluidUndelegateAndUnbondLock, MsgSuperfluidUndelegateAndUnbondLockResponse, MsgLockAndSuperfluidDelegate, MsgLockAndSuperfluidDelegateResponse, MsgCreateFullRangePositionAndSuperfluidDelegate, MsgCreateFullRangePositionAndSuperfluidDelegateResponse, MsgUnPoolWhitelistedPool, MsgUnPoolWhitelistedPoolResponse, MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition, MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse, MsgAddToConcentratedLiquiditySuperfluidPosition, MsgAddToConcentratedLiquiditySuperfluidPositionResponse, MsgUnbondConvertAndStake, MsgUnbondConvertAndStakeResponse } from "./tx";
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
  createFullRangePositionAndSuperfluidDelegate(request: MsgCreateFullRangePositionAndSuperfluidDelegate): Promise<MsgCreateFullRangePositionAndSuperfluidDelegateResponse>;
  unPoolWhitelistedPool(request: MsgUnPoolWhitelistedPool): Promise<MsgUnPoolWhitelistedPoolResponse>;
  unlockAndMigrateSharesToFullRangeConcentratedPosition(request: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): Promise<MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse>;
  addToConcentratedLiquiditySuperfluidPosition(request: MsgAddToConcentratedLiquiditySuperfluidPosition): Promise<MsgAddToConcentratedLiquiditySuperfluidPositionResponse>;
  /**
   * UnbondConvertAndStake breaks all locks / superfluid staked assets,
   * converts them to osmo then stakes the osmo to the designated validator.
   */
  unbondConvertAndStake(request: MsgUnbondConvertAndStake): Promise<MsgUnbondConvertAndStakeResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.superfluidDelegate = this.superfluidDelegate.bind(this);
    this.superfluidUndelegate = this.superfluidUndelegate.bind(this);
    this.superfluidUnbondLock = this.superfluidUnbondLock.bind(this);
    this.superfluidUndelegateAndUnbondLock = this.superfluidUndelegateAndUnbondLock.bind(this);
    this.lockAndSuperfluidDelegate = this.lockAndSuperfluidDelegate.bind(this);
    this.createFullRangePositionAndSuperfluidDelegate = this.createFullRangePositionAndSuperfluidDelegate.bind(this);
    this.unPoolWhitelistedPool = this.unPoolWhitelistedPool.bind(this);
    this.unlockAndMigrateSharesToFullRangeConcentratedPosition = this.unlockAndMigrateSharesToFullRangeConcentratedPosition.bind(this);
    this.addToConcentratedLiquiditySuperfluidPosition = this.addToConcentratedLiquiditySuperfluidPosition.bind(this);
    this.unbondConvertAndStake = this.unbondConvertAndStake.bind(this);
  }
  superfluidDelegate(request: MsgSuperfluidDelegate): Promise<MsgSuperfluidDelegateResponse> {
    const data = MsgSuperfluidDelegate.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Msg", "SuperfluidDelegate", data);
    return promise.then(data => MsgSuperfluidDelegateResponse.decode(new BinaryReader(data)));
  }
  superfluidUndelegate(request: MsgSuperfluidUndelegate): Promise<MsgSuperfluidUndelegateResponse> {
    const data = MsgSuperfluidUndelegate.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Msg", "SuperfluidUndelegate", data);
    return promise.then(data => MsgSuperfluidUndelegateResponse.decode(new BinaryReader(data)));
  }
  superfluidUnbondLock(request: MsgSuperfluidUnbondLock): Promise<MsgSuperfluidUnbondLockResponse> {
    const data = MsgSuperfluidUnbondLock.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Msg", "SuperfluidUnbondLock", data);
    return promise.then(data => MsgSuperfluidUnbondLockResponse.decode(new BinaryReader(data)));
  }
  superfluidUndelegateAndUnbondLock(request: MsgSuperfluidUndelegateAndUnbondLock): Promise<MsgSuperfluidUndelegateAndUnbondLockResponse> {
    const data = MsgSuperfluidUndelegateAndUnbondLock.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Msg", "SuperfluidUndelegateAndUnbondLock", data);
    return promise.then(data => MsgSuperfluidUndelegateAndUnbondLockResponse.decode(new BinaryReader(data)));
  }
  lockAndSuperfluidDelegate(request: MsgLockAndSuperfluidDelegate): Promise<MsgLockAndSuperfluidDelegateResponse> {
    const data = MsgLockAndSuperfluidDelegate.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Msg", "LockAndSuperfluidDelegate", data);
    return promise.then(data => MsgLockAndSuperfluidDelegateResponse.decode(new BinaryReader(data)));
  }
  createFullRangePositionAndSuperfluidDelegate(request: MsgCreateFullRangePositionAndSuperfluidDelegate): Promise<MsgCreateFullRangePositionAndSuperfluidDelegateResponse> {
    const data = MsgCreateFullRangePositionAndSuperfluidDelegate.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Msg", "CreateFullRangePositionAndSuperfluidDelegate", data);
    return promise.then(data => MsgCreateFullRangePositionAndSuperfluidDelegateResponse.decode(new BinaryReader(data)));
  }
  unPoolWhitelistedPool(request: MsgUnPoolWhitelistedPool): Promise<MsgUnPoolWhitelistedPoolResponse> {
    const data = MsgUnPoolWhitelistedPool.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Msg", "UnPoolWhitelistedPool", data);
    return promise.then(data => MsgUnPoolWhitelistedPoolResponse.decode(new BinaryReader(data)));
  }
  unlockAndMigrateSharesToFullRangeConcentratedPosition(request: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): Promise<MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse> {
    const data = MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Msg", "UnlockAndMigrateSharesToFullRangeConcentratedPosition", data);
    return promise.then(data => MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.decode(new BinaryReader(data)));
  }
  addToConcentratedLiquiditySuperfluidPosition(request: MsgAddToConcentratedLiquiditySuperfluidPosition): Promise<MsgAddToConcentratedLiquiditySuperfluidPositionResponse> {
    const data = MsgAddToConcentratedLiquiditySuperfluidPosition.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Msg", "AddToConcentratedLiquiditySuperfluidPosition", data);
    return promise.then(data => MsgAddToConcentratedLiquiditySuperfluidPositionResponse.decode(new BinaryReader(data)));
  }
  unbondConvertAndStake(request: MsgUnbondConvertAndStake): Promise<MsgUnbondConvertAndStakeResponse> {
    const data = MsgUnbondConvertAndStake.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Msg", "UnbondConvertAndStake", data);
    return promise.then(data => MsgUnbondConvertAndStakeResponse.decode(new BinaryReader(data)));
  }
}