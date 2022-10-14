import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
/**
 * LockQueryType defines the type of the lock query that can
 * either be by duration or start time of the lock.
 */
export declare enum LockQueryType {
    ByDuration = 0,
    ByTime = 1,
    UNRECOGNIZED = -1
}
/**
 * LockQueryType defines the type of the lock query that can
 * either be by duration or start time of the lock.
 */
export declare enum LockQueryTypeSDKType {
    ByDuration = 0,
    ByTime = 1,
    UNRECOGNIZED = -1
}
export declare function lockQueryTypeFromJSON(object: any): LockQueryType;
export declare function lockQueryTypeToJSON(object: LockQueryType): string;
/**
 * PeriodLock is a single lock unit by period defined by the x/lockup module.
 * It's a record of a locked coin at a specific time. It stores owner, duration,
 * unlock time and the number of coins locked. A state of a period lock is
 * created upon lock creation, and deleted once the lock has been matured after
 * the `duration` has passed since unbonding started.
 */
export interface PeriodLock {
    /**
     * ID is the unique id of the lock.
     * The ID of the lock is decided upon lock creation, incrementing by 1 for
     * every lock.
     */
    ID: Long;
    /**
     * Owner is the account address of the lock owner.
     * Only the owner can modify the state of the lock.
     */
    owner: string;
    /**
     * Duration is the time needed for a lock to mature after unlocking has
     * started.
     */
    duration?: Duration;
    /**
     * EndTime refers to the time at which the lock would mature and get deleted.
     * This value is first initialized when an unlock has started for the lock,
     * end time being block time + duration.
     */
    endTime?: Date;
    /** Coins are the tokens locked within the lock, kept in the module account. */
    coins: Coin[];
}
/**
 * PeriodLock is a single lock unit by period defined by the x/lockup module.
 * It's a record of a locked coin at a specific time. It stores owner, duration,
 * unlock time and the number of coins locked. A state of a period lock is
 * created upon lock creation, and deleted once the lock has been matured after
 * the `duration` has passed since unbonding started.
 */
export interface PeriodLockSDKType {
    /**
     * ID is the unique id of the lock.
     * The ID of the lock is decided upon lock creation, incrementing by 1 for
     * every lock.
     */
    ID: Long;
    /**
     * Owner is the account address of the lock owner.
     * Only the owner can modify the state of the lock.
     */
    owner: string;
    /**
     * Duration is the time needed for a lock to mature after unlocking has
     * started.
     */
    duration?: DurationSDKType;
    /**
     * EndTime refers to the time at which the lock would mature and get deleted.
     * This value is first initialized when an unlock has started for the lock,
     * end time being block time + duration.
     */
    end_time?: Date;
    /** Coins are the tokens locked within the lock, kept in the module account. */
    coins: CoinSDKType[];
}
/**
 * QueryCondition is a struct used for querying locks upon different conditions.
 * Duration field and timestamp fields could be optional, depending on the
 * LockQueryType.
 */
export interface QueryCondition {
    /** LockQueryType is a type of lock query, ByLockDuration | ByLockTime */
    lockQueryType: LockQueryType;
    /** Denom represents the token denomination we are looking to lock up */
    denom: string;
    /**
     * Duration is used to query locks with longer duration than the specified
     * duration. Duration field must not be nil when the lock query type is
     * `ByLockDuration`.
     */
    duration?: Duration;
    /**
     * Timestamp is used by locks started before the specified duration.
     * Timestamp field must not be nil when the lock query type is `ByLockTime`.
     * Querying locks with timestamp is currently not implemented.
     */
    timestamp?: Date;
}
/**
 * QueryCondition is a struct used for querying locks upon different conditions.
 * Duration field and timestamp fields could be optional, depending on the
 * LockQueryType.
 */
export interface QueryConditionSDKType {
    /** LockQueryType is a type of lock query, ByLockDuration | ByLockTime */
    lock_query_type: LockQueryTypeSDKType;
    /** Denom represents the token denomination we are looking to lock up */
    denom: string;
    /**
     * Duration is used to query locks with longer duration than the specified
     * duration. Duration field must not be nil when the lock query type is
     * `ByLockDuration`.
     */
    duration?: DurationSDKType;
    /**
     * Timestamp is used by locks started before the specified duration.
     * Timestamp field must not be nil when the lock query type is `ByLockTime`.
     * Querying locks with timestamp is currently not implemented.
     */
    timestamp?: Date;
}
/**
 * SyntheticLock is creating virtual lockup where new denom is combination of
 * original denom and synthetic suffix. At the time of synthetic lockup creation
 * and deletion, accumulation store is also being updated and on querier side,
 * they can query as freely as native lockup.
 */
export interface SyntheticLock {
    /**
     * Underlying Lock ID is the underlying native lock's id for this synthetic
     * lockup. A synthetic lock MUST have an underlying lock.
     */
    underlyingLockId: Long;
    /**
     * SynthDenom is the synthetic denom that is a combination of
     * gamm share + bonding status + validator address.
     */
    synthDenom: string;
    /**
     * used for unbonding synthetic lockups, for active synthetic lockups, this
     * value is set to uninitialized value
     */
    endTime?: Date;
    /**
     * Duration is the duration for a synthetic lock to mature
     * at the point of unbonding has started.
     */
    duration?: Duration;
}
/**
 * SyntheticLock is creating virtual lockup where new denom is combination of
 * original denom and synthetic suffix. At the time of synthetic lockup creation
 * and deletion, accumulation store is also being updated and on querier side,
 * they can query as freely as native lockup.
 */
export interface SyntheticLockSDKType {
    /**
     * Underlying Lock ID is the underlying native lock's id for this synthetic
     * lockup. A synthetic lock MUST have an underlying lock.
     */
    underlying_lock_id: Long;
    /**
     * SynthDenom is the synthetic denom that is a combination of
     * gamm share + bonding status + validator address.
     */
    synth_denom: string;
    /**
     * used for unbonding synthetic lockups, for active synthetic lockups, this
     * value is set to uninitialized value
     */
    end_time?: Date;
    /**
     * Duration is the duration for a synthetic lock to mature
     * at the point of unbonding has started.
     */
    duration?: DurationSDKType;
}
export declare const PeriodLock: {
    encode(message: PeriodLock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PeriodLock;
    fromPartial(object: Partial<PeriodLock>): PeriodLock;
};
export declare const QueryCondition: {
    encode(message: QueryCondition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCondition;
    fromPartial(object: Partial<QueryCondition>): QueryCondition;
};
export declare const SyntheticLock: {
    encode(message: SyntheticLock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SyntheticLock;
    fromPartial(object: Partial<SyntheticLock>): SyntheticLock;
};
