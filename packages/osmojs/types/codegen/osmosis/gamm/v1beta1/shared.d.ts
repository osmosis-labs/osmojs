import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * MigrationRecords contains all the links between balancer and concentrated
 * pools
 */
export interface MigrationRecords {
    balancerToConcentratedPoolLinks: BalancerToConcentratedPoolLink[];
}
export interface MigrationRecordsProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.MigrationRecords";
    value: Uint8Array;
}
/**
 * MigrationRecords contains all the links between balancer and concentrated
 * pools
 */
export interface MigrationRecordsAmino {
    balancer_to_concentrated_pool_links: BalancerToConcentratedPoolLinkAmino[];
}
export interface MigrationRecordsAminoMsg {
    type: "osmosis/gamm/migration-records";
    value: MigrationRecordsAmino;
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
    balancerPoolId: bigint;
    clPoolId: bigint;
}
export interface BalancerToConcentratedPoolLinkProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.BalancerToConcentratedPoolLink";
    value: Uint8Array;
}
/**
 * BalancerToConcentratedPoolLink defines a single link between a single
 * balancer pool and a single concentrated liquidity pool. This link is used to
 * allow a balancer pool to migrate to a single canonical full range
 * concentrated liquidity pool position
 * A balancer pool can be linked to a maximum of one cl pool, and a cl pool can
 * be linked to a maximum of one balancer pool.
 */
export interface BalancerToConcentratedPoolLinkAmino {
    balancer_pool_id: string;
    cl_pool_id: string;
}
export interface BalancerToConcentratedPoolLinkAminoMsg {
    type: "osmosis/gamm/balancer-to-concentrated-pool-link";
    value: BalancerToConcentratedPoolLinkAmino;
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
    balancer_pool_id: bigint;
    cl_pool_id: bigint;
}
export declare const MigrationRecords: {
    typeUrl: string;
    encode(message: MigrationRecords, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MigrationRecords;
    fromPartial(object: Partial<MigrationRecords>): MigrationRecords;
    fromAmino(object: MigrationRecordsAmino): MigrationRecords;
    toAmino(message: MigrationRecords): MigrationRecordsAmino;
    fromAminoMsg(object: MigrationRecordsAminoMsg): MigrationRecords;
    toAminoMsg(message: MigrationRecords): MigrationRecordsAminoMsg;
    fromProtoMsg(message: MigrationRecordsProtoMsg): MigrationRecords;
    toProto(message: MigrationRecords): Uint8Array;
    toProtoMsg(message: MigrationRecords): MigrationRecordsProtoMsg;
};
export declare const BalancerToConcentratedPoolLink: {
    typeUrl: string;
    encode(message: BalancerToConcentratedPoolLink, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BalancerToConcentratedPoolLink;
    fromPartial(object: Partial<BalancerToConcentratedPoolLink>): BalancerToConcentratedPoolLink;
    fromAmino(object: BalancerToConcentratedPoolLinkAmino): BalancerToConcentratedPoolLink;
    toAmino(message: BalancerToConcentratedPoolLink): BalancerToConcentratedPoolLinkAmino;
    fromAminoMsg(object: BalancerToConcentratedPoolLinkAminoMsg): BalancerToConcentratedPoolLink;
    toAminoMsg(message: BalancerToConcentratedPoolLink): BalancerToConcentratedPoolLinkAminoMsg;
    fromProtoMsg(message: BalancerToConcentratedPoolLinkProtoMsg): BalancerToConcentratedPoolLink;
    toProto(message: BalancerToConcentratedPoolLink): Uint8Array;
    toProtoMsg(message: BalancerToConcentratedPoolLink): BalancerToConcentratedPoolLinkProtoMsg;
};
