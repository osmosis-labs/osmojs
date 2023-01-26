import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** Params holds parameters for the incentives module */
export interface Params {
    poolCreationFee: Coin[];
}
/** Params holds parameters for the incentives module */
export interface ParamsSDKType {
    pool_creation_fee: CoinSDKType[];
}
/** GenesisState defines the gamm module's genesis state. */
export interface GenesisState {
    pools: Any[];
    /** will be renamed to next_pool_id in an upcoming version */
    nextPoolNumber: Long;
    params?: Params;
    migrationRecords?: MigrationRecords;
}
/** GenesisState defines the gamm module's genesis state. */
export interface GenesisStateSDKType {
    pools: AnySDKType[];
    /** will be renamed to next_pool_id in an upcoming version */
    next_pool_number: Long;
    params?: ParamsSDKType;
    migration_records?: MigrationRecordsSDKType;
}
/**
 * MigrationRecords contains all the links between balancer and concentrated
 * pools
 */
export interface MigrationRecords {
    balancerToConcentratedPoolLinks: BalancerToConcentratedPoolLink[];
}
/**
 * MigrationRecords contains all the links between balancer and concentrated
 * pools
 */
export interface MigrationRecordsSDKType {
    balancer_to_concentrated_pool_links: BalancerToConcentratedPoolLinkSDKType[];
}
/**
 * BalancerToConcentratedPoolLink defines a single link between a single
 * balancer pool and a single concentrated liquidity pool. This link is used to
 * allow a balancer pool to migrate to a single canonical full range
 * concentrated liquidity pool position
 * A balancer pool can be linked to a maximum of one cl pool, and a cl pool can
 * be linked to a maximum of one balancer pool.
 */
export interface BalancerToConcentratedPoolLink {
    balancerPoolId: Long;
    clPoolId: Long;
}
/**
 * BalancerToConcentratedPoolLink defines a single link between a single
 * balancer pool and a single concentrated liquidity pool. This link is used to
 * allow a balancer pool to migrate to a single canonical full range
 * concentrated liquidity pool position
 * A balancer pool can be linked to a maximum of one cl pool, and a cl pool can
 * be linked to a maximum of one balancer pool.
 */
export interface BalancerToConcentratedPoolLinkSDKType {
    balancer_pool_id: Long;
    cl_pool_id: Long;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const MigrationRecords: {
    encode(message: MigrationRecords, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MigrationRecords;
    fromPartial(object: Partial<MigrationRecords>): MigrationRecords;
};
export declare const BalancerToConcentratedPoolLink: {
    encode(message: BalancerToConcentratedPoolLink, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BalancerToConcentratedPoolLink;
    fromPartial(object: Partial<BalancerToConcentratedPoolLink>): BalancerToConcentratedPoolLink;
};
