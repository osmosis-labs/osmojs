import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export declare enum SuperfluidAssetType {
    SuperfluidAssetTypeNative = 0,
    SuperfluidAssetTypeLPShare = 1,
    UNRECOGNIZED = -1
}
export declare function superfluidAssetTypeFromJSON(object: any): SuperfluidAssetType;
export declare function superfluidAssetTypeToJSON(object: SuperfluidAssetType): string;
/** SuperfluidAsset stores the pair of superfluid asset type and denom pair */
export interface SuperfluidAsset {
    denom: string;
    asset_type: SuperfluidAssetType;
}
/**
 * SuperfluidIntermediaryAccount takes the role of intermediary between LP token
 * and OSMO tokens for superfluid staking
 */
export interface SuperfluidIntermediaryAccount {
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
 * price at the boundary.  For different types of assets in the future, it could
 * change.
 */
export interface OsmoEquivalentMultiplierRecord {
    epoch_number: Long;
    /** superfluid asset denom, can be LP token or native token */
    denom: string;
    multiplier: string;
}
/**
 * SuperfluidDelegationRecord takes the role of intermediary between LP token
 * and OSMO tokens for superfluid staking
 */
export interface SuperfluidDelegationRecord {
    delegator_address: string;
    validator_address: string;
    delegation_amount: Coin;
    equivalent_staked_amount: Coin;
}
export interface LockIdIntermediaryAccountConnection {
    lock_id: Long;
    intermediary_account: string;
}
export interface UnpoolWhitelistedPools {
    ids: Long[];
}
export declare const SuperfluidAsset: {
    encode(message: SuperfluidAsset, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidAsset;
    fromJSON(object: any): SuperfluidAsset;
    toJSON(message: SuperfluidAsset): unknown;
    fromPartial(object: DeepPartial<SuperfluidAsset>): SuperfluidAsset;
};
export declare const SuperfluidIntermediaryAccount: {
    encode(message: SuperfluidIntermediaryAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidIntermediaryAccount;
    fromJSON(object: any): SuperfluidIntermediaryAccount;
    toJSON(message: SuperfluidIntermediaryAccount): unknown;
    fromPartial(object: DeepPartial<SuperfluidIntermediaryAccount>): SuperfluidIntermediaryAccount;
};
export declare const OsmoEquivalentMultiplierRecord: {
    encode(message: OsmoEquivalentMultiplierRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OsmoEquivalentMultiplierRecord;
    fromJSON(object: any): OsmoEquivalentMultiplierRecord;
    toJSON(message: OsmoEquivalentMultiplierRecord): unknown;
    fromPartial(object: DeepPartial<OsmoEquivalentMultiplierRecord>): OsmoEquivalentMultiplierRecord;
};
export declare const SuperfluidDelegationRecord: {
    encode(message: SuperfluidDelegationRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationRecord;
    fromJSON(object: any): SuperfluidDelegationRecord;
    toJSON(message: SuperfluidDelegationRecord): unknown;
    fromPartial(object: DeepPartial<SuperfluidDelegationRecord>): SuperfluidDelegationRecord;
};
export declare const LockIdIntermediaryAccountConnection: {
    encode(message: LockIdIntermediaryAccountConnection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LockIdIntermediaryAccountConnection;
    fromJSON(object: any): LockIdIntermediaryAccountConnection;
    toJSON(message: LockIdIntermediaryAccountConnection): unknown;
    fromPartial(object: DeepPartial<LockIdIntermediaryAccountConnection>): LockIdIntermediaryAccountConnection;
};
export declare const UnpoolWhitelistedPools: {
    encode(message: UnpoolWhitelistedPools, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnpoolWhitelistedPools;
    fromJSON(object: any): UnpoolWhitelistedPools;
    toJSON(message: UnpoolWhitelistedPools): unknown;
    fromPartial(object: DeepPartial<UnpoolWhitelistedPools>): UnpoolWhitelistedPools;
};
