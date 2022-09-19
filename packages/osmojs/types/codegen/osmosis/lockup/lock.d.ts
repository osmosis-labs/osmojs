import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export declare enum LockQueryType {
    /** ByDuration - Queries for locks that are longer than a certain duration */
    ByDuration = 0,
    /** ByTime - Queries for lockups that started before a specific time */
    ByTime = 1,
    UNRECOGNIZED = -1
}
export declare enum LockQueryTypeSDKType {
    /** ByDuration - Queries for locks that are longer than a certain duration */
    ByDuration = 0,
    /** ByTime - Queries for lockups that started before a specific time */
    ByTime = 1,
    UNRECOGNIZED = -1
}
export declare function lockQueryTypeFromJSON(object: any): LockQueryType;
export declare function lockQueryTypeToJSON(object: LockQueryType): string;
/**
 * PeriodLock is a single unit of lock by period. It's a record of locked coin
 * at a specific time. It stores owner, duration, unlock time and the amount of
 * coins locked.
 */
export interface PeriodLock {
    ID: Long;
    owner: string;
    duration: Duration;
    endTime: Date;
    coins: Coin[];
}
/**
 * PeriodLock is a single unit of lock by period. It's a record of locked coin
 * at a specific time. It stores owner, duration, unlock time and the amount of
 * coins locked.
 */
export interface PeriodLockSDKType {
    ID: Long;
    owner: string;
    duration: DurationSDKType;
    end_time: Date;
    coins: CoinSDKType[];
}
export interface QueryCondition {
    /** type of lock query, ByLockDuration | ByLockTime */
    lockQueryType: LockQueryType;
    /** What token denomination are we looking for lockups of */
    denom: string;
    /** valid when query condition is ByDuration */
    duration: Duration;
    /** valid when query condition is ByTime */
    timestamp: Date;
}
export interface QueryConditionSDKType {
    /** type of lock query, ByLockDuration | ByLockTime */
    lock_query_type: LockQueryTypeSDKType;
    /** What token denomination are we looking for lockups of */
    denom: string;
    /** valid when query condition is ByDuration */
    duration: DurationSDKType;
    /** valid when query condition is ByTime */
    timestamp: Date;
}
/**
 * SyntheticLock is a single unit of synthetic lockup
 * TODO: Change this to have
 * * underlying_lock_id
 * * synthetic_coin
 * * end_time
 * * duration
 * * owner
 * We then index synthetic locks by the denom, just like we do with normal
 * locks. Ideally we even get an interface, so we can re-use that same logic.
 * I currently have no idea how reward distribution is supposed to be working...
 * EVENTUALLY
 * we make a "constrained_coin" field, which is what the current "coins" field
 * is. Constrained coin field can be a #post-v7 feature, since we aren't
 * allowing partial unlocks of synthetic lockups.
 */
export interface SyntheticLock {
    /** underlying native lockup id for this synthetic lockup */
    underlyingLockId: Long;
    synthDenom: string;
    /**
     * used for unbonding synthetic lockups, for active synthetic lockups, this
     * value is set to uninitialized value
     */
    endTime: Date;
    duration: Duration;
}
/**
 * SyntheticLock is a single unit of synthetic lockup
 * TODO: Change this to have
 * * underlying_lock_id
 * * synthetic_coin
 * * end_time
 * * duration
 * * owner
 * We then index synthetic locks by the denom, just like we do with normal
 * locks. Ideally we even get an interface, so we can re-use that same logic.
 * I currently have no idea how reward distribution is supposed to be working...
 * EVENTUALLY
 * we make a "constrained_coin" field, which is what the current "coins" field
 * is. Constrained coin field can be a #post-v7 feature, since we aren't
 * allowing partial unlocks of synthetic lockups.
 */
export interface SyntheticLockSDKType {
    /** underlying native lockup id for this synthetic lockup */
    underlying_lock_id: Long;
    synth_denom: string;
    /**
     * used for unbonding synthetic lockups, for active synthetic lockups, this
     * value is set to uninitialized value
     */
    end_time: Date;
    duration: DurationSDKType;
}
export declare const PeriodLock: {
    encode(message: PeriodLock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PeriodLock;
    fromPartial(object: DeepPartial<PeriodLock>): PeriodLock;
};
export declare const QueryCondition: {
    encode(message: QueryCondition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCondition;
    fromPartial(object: DeepPartial<QueryCondition>): QueryCondition;
};
export declare const SyntheticLock: {
    encode(message: SyntheticLock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SyntheticLock;
    fromPartial(object: DeepPartial<SyntheticLock>): SyntheticLock;
};
