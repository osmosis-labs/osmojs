import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
/**
 * SuperfluidAssetType indicates whether the superfluid asset is
 * a native token itself or the lp share of a pool.
 */
export declare enum SuperfluidAssetType {
    SuperfluidAssetTypeNative = 0,
    SuperfluidAssetTypeLPShare = 1,
    UNRECOGNIZED = -1
}
/**
 * SuperfluidAssetType indicates whether the superfluid asset is
 * a native token itself or the lp share of a pool.
 */
export declare enum SuperfluidAssetTypeSDKType {
    SuperfluidAssetTypeNative = 0,
    SuperfluidAssetTypeLPShare = 1,
    UNRECOGNIZED = -1
}
export declare function superfluidAssetTypeFromJSON(object: any): SuperfluidAssetType;
export declare function superfluidAssetTypeToJSON(object: SuperfluidAssetType): string;
/** SuperfluidAsset stores the pair of superfluid asset type and denom pair */
export interface SuperfluidAsset {
    denom: string;
    /**
     * AssetType indicates whether the superfluid asset is a native token or an lp
     * share
     */
    assetType: SuperfluidAssetType;
}
/** SuperfluidAsset stores the pair of superfluid asset type and denom pair */
export interface SuperfluidAssetSDKType {
    denom: string;
    /**
     * AssetType indicates whether the superfluid asset is a native token or an lp
     * share
     */
    asset_type: SuperfluidAssetTypeSDKType;
}
/**
 * SuperfluidIntermediaryAccount takes the role of intermediary between LP token
 * and OSMO tokens for superfluid staking. The intermediary account is the
 * actual account responsible for delegation, not the validator account itself.
 */
export interface SuperfluidIntermediaryAccount {
    /** Denom indicates the denom of the superfluid asset. */
    denom: string;
    valAddr: string;
    /** perpetual gauge for rewards distribution */
    gaugeId: Long;
}
/**
 * SuperfluidIntermediaryAccount takes the role of intermediary between LP token
 * and OSMO tokens for superfluid staking. The intermediary account is the
 * actual account responsible for delegation, not the validator account itself.
 */
export interface SuperfluidIntermediaryAccountSDKType {
    /** Denom indicates the denom of the superfluid asset. */
    denom: string;
    val_addr: string;
    /** perpetual gauge for rewards distribution */
    gauge_id: Long;
}
/**
 * The Osmo-Equivalent-Multiplier Record for epoch N refers to the osmo worth we
 * treat an LP share as having, for all of epoch N. Eventually this is intended
 * to be set as the Time-weighted-average-osmo-backing for the entire duration
 * of epoch N-1. (Thereby locking whats in use for epoch N as based on the prior
 * epochs rewards) However for now, this is not the TWAP but instead the spot
 * price at the boundary. For different types of assets in the future, it could
 * change.
 */
export interface OsmoEquivalentMultiplierRecord {
    epochNumber: Long;
    /** superfluid asset denom, can be LP token or native token */
    denom: string;
    multiplier: string;
}
/**
 * The Osmo-Equivalent-Multiplier Record for epoch N refers to the osmo worth we
 * treat an LP share as having, for all of epoch N. Eventually this is intended
 * to be set as the Time-weighted-average-osmo-backing for the entire duration
 * of epoch N-1. (Thereby locking whats in use for epoch N as based on the prior
 * epochs rewards) However for now, this is not the TWAP but instead the spot
 * price at the boundary. For different types of assets in the future, it could
 * change.
 */
export interface OsmoEquivalentMultiplierRecordSDKType {
    epoch_number: Long;
    /** superfluid asset denom, can be LP token or native token */
    denom: string;
    multiplier: string;
}
/**
 * SuperfluidDelegationRecord is a struct used to indicate superfluid
 * delegations of an account in the state machine in a user friendly form.
 */
export interface SuperfluidDelegationRecord {
    delegatorAddress: string;
    validatorAddress: string;
    delegationAmount?: Coin;
    equivalentStakedAmount?: Coin;
}
/**
 * SuperfluidDelegationRecord is a struct used to indicate superfluid
 * delegations of an account in the state machine in a user friendly form.
 */
export interface SuperfluidDelegationRecordSDKType {
    delegator_address: string;
    validator_address: string;
    delegation_amount?: CoinSDKType;
    equivalent_staked_amount?: CoinSDKType;
}
/**
 * LockIdIntermediaryAccountConnection is a struct used to indicate the
 * relationship between the underlying lock id and superfluid delegation done
 * via lp shares.
 */
export interface LockIdIntermediaryAccountConnection {
    lockId: Long;
    intermediaryAccount: string;
}
/**
 * LockIdIntermediaryAccountConnection is a struct used to indicate the
 * relationship between the underlying lock id and superfluid delegation done
 * via lp shares.
 */
export interface LockIdIntermediaryAccountConnectionSDKType {
    lock_id: Long;
    intermediary_account: string;
}
export interface UnpoolWhitelistedPools {
    ids: Long[];
}
export interface UnpoolWhitelistedPoolsSDKType {
    ids: Long[];
}
export declare const SuperfluidAsset: {
    encode(message: SuperfluidAsset, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidAsset;
    fromPartial(object: Partial<SuperfluidAsset>): SuperfluidAsset;
};
export declare const SuperfluidIntermediaryAccount: {
    encode(message: SuperfluidIntermediaryAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidIntermediaryAccount;
    fromPartial(object: Partial<SuperfluidIntermediaryAccount>): SuperfluidIntermediaryAccount;
};
export declare const OsmoEquivalentMultiplierRecord: {
    encode(message: OsmoEquivalentMultiplierRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OsmoEquivalentMultiplierRecord;
    fromPartial(object: Partial<OsmoEquivalentMultiplierRecord>): OsmoEquivalentMultiplierRecord;
};
export declare const SuperfluidDelegationRecord: {
    encode(message: SuperfluidDelegationRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationRecord;
    fromPartial(object: Partial<SuperfluidDelegationRecord>): SuperfluidDelegationRecord;
};
export declare const LockIdIntermediaryAccountConnection: {
    encode(message: LockIdIntermediaryAccountConnection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LockIdIntermediaryAccountConnection;
    fromPartial(object: Partial<LockIdIntermediaryAccountConnection>): LockIdIntermediaryAccountConnection;
};
export declare const UnpoolWhitelistedPools: {
    encode(message: UnpoolWhitelistedPools, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnpoolWhitelistedPools;
    fromPartial(object: Partial<UnpoolWhitelistedPools>): UnpoolWhitelistedPools;
};
