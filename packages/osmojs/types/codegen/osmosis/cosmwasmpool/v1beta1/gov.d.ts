import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * UploadCosmWasmPoolCodeAndWhiteListProposal is a gov Content type for
 * uploading coswasm pool code and adding it to internal whitelist. Only the
 * code ids created by this message are eligible for being x/cosmwasmpool pools.
 */
export interface UploadCosmWasmPoolCodeAndWhiteListProposal {
    title: string;
    description: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasmByteCode: Uint8Array;
}
export interface UploadCosmWasmPoolCodeAndWhiteListProposalProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.UploadCosmWasmPoolCodeAndWhiteListProposal";
    value: Uint8Array;
}
/**
 * UploadCosmWasmPoolCodeAndWhiteListProposal is a gov Content type for
 * uploading coswasm pool code and adding it to internal whitelist. Only the
 * code ids created by this message are eligible for being x/cosmwasmpool pools.
 */
export interface UploadCosmWasmPoolCodeAndWhiteListProposalAmino {
    title: string;
    description: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasm_byte_code: string;
}
export interface UploadCosmWasmPoolCodeAndWhiteListProposalAminoMsg {
    type: "osmosis/cosmwasmpool/upload-cosm-wasm-pool-code-and-white-list-proposal";
    value: UploadCosmWasmPoolCodeAndWhiteListProposalAmino;
}
/**
 * UploadCosmWasmPoolCodeAndWhiteListProposal is a gov Content type for
 * uploading coswasm pool code and adding it to internal whitelist. Only the
 * code ids created by this message are eligible for being x/cosmwasmpool pools.
 */
export interface UploadCosmWasmPoolCodeAndWhiteListProposalSDKType {
    title: string;
    description: string;
    wasm_byte_code: Uint8Array;
}
/**
 * MigratePoolContractsProposal is a gov Content type for
 * migrating  given pools to the new contract code and adding to internal
 * whitelist if needed. It has two options to perform the migration:
 *
 * 1. If the codeID is non-zero, it will migrate the pool contracts to a given
 * codeID assuming that it has already been uploaded. uploadByteCode must be
 * empty in such a case. Fails if codeID does not exist. Fails if uploadByteCode
 * is not empty.
 *
 * 2. If the codeID is zero, it will upload the given uploadByteCode and use the
 * new resulting code id to migrate the pool to. Errors if uploadByteCode is
 * empty or invalid.
 *
 * In both cases, if one of the pools specified by the given poolID does not
 * exist, the proposal fails.
 *
 * The reason for having poolIDs be a slice of ids is to account for the
 * potential need for emergency migration of all old code ids associated with
 * particular pools to new code ids, or simply having the flexibility of
 * migrating multiple older pool contracts to a new one at once when there is a
 * release.
 *
 * poolD count to be submitted at once is gated by a governance paramets (20 at
 * launch). The proposal fails if more. Note that 20 was chosen arbitrarily to
 * have a constant bound on the number of pools migrated at once. This size will
 * be configured by a module parameter so it can be changed by a constant.
 */
export interface MigratePoolContractsProposal {
    title: string;
    description: string;
    /**
     * pool_ids are the pool ids of the contracts to be migrated
     * either to the new_code_id that is already uploaded to chain or to
     * the given wasm_byte_code.
     */
    poolIds: bigint[];
    /**
     * new_code_id is the code id of the contract code to migrate to.
     * Assumes that the code is already uploaded to chain. Only one of
     * new_code_id and wasm_byte_code should be set.
     */
    newCodeId: bigint;
    /**
     * WASMByteCode can be raw or gzip compressed. Assumes that the code id
     * has not been uploaded yet so uploads the given code and migrates to it.
     * Only one of new_code_id and wasm_byte_code should be set.
     */
    wasmByteCode: Uint8Array;
    /** MigrateMsg migrate message to be used for migrating the pool contracts. */
    migrateMsg: Uint8Array;
}
export interface MigratePoolContractsProposalProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.MigratePoolContractsProposal";
    value: Uint8Array;
}
/**
 * MigratePoolContractsProposal is a gov Content type for
 * migrating  given pools to the new contract code and adding to internal
 * whitelist if needed. It has two options to perform the migration:
 *
 * 1. If the codeID is non-zero, it will migrate the pool contracts to a given
 * codeID assuming that it has already been uploaded. uploadByteCode must be
 * empty in such a case. Fails if codeID does not exist. Fails if uploadByteCode
 * is not empty.
 *
 * 2. If the codeID is zero, it will upload the given uploadByteCode and use the
 * new resulting code id to migrate the pool to. Errors if uploadByteCode is
 * empty or invalid.
 *
 * In both cases, if one of the pools specified by the given poolID does not
 * exist, the proposal fails.
 *
 * The reason for having poolIDs be a slice of ids is to account for the
 * potential need for emergency migration of all old code ids associated with
 * particular pools to new code ids, or simply having the flexibility of
 * migrating multiple older pool contracts to a new one at once when there is a
 * release.
 *
 * poolD count to be submitted at once is gated by a governance paramets (20 at
 * launch). The proposal fails if more. Note that 20 was chosen arbitrarily to
 * have a constant bound on the number of pools migrated at once. This size will
 * be configured by a module parameter so it can be changed by a constant.
 */
export interface MigratePoolContractsProposalAmino {
    title: string;
    description: string;
    /**
     * pool_ids are the pool ids of the contracts to be migrated
     * either to the new_code_id that is already uploaded to chain or to
     * the given wasm_byte_code.
     */
    pool_ids: string[];
    /**
     * new_code_id is the code id of the contract code to migrate to.
     * Assumes that the code is already uploaded to chain. Only one of
     * new_code_id and wasm_byte_code should be set.
     */
    new_code_id: string;
    /**
     * WASMByteCode can be raw or gzip compressed. Assumes that the code id
     * has not been uploaded yet so uploads the given code and migrates to it.
     * Only one of new_code_id and wasm_byte_code should be set.
     */
    wasm_byte_code: string;
    /** MigrateMsg migrate message to be used for migrating the pool contracts. */
    migrate_msg: Uint8Array;
}
export interface MigratePoolContractsProposalAminoMsg {
    type: "osmosis/cosmwasmpool/migrate-pool-contracts-proposal";
    value: MigratePoolContractsProposalAmino;
}
/**
 * MigratePoolContractsProposal is a gov Content type for
 * migrating  given pools to the new contract code and adding to internal
 * whitelist if needed. It has two options to perform the migration:
 *
 * 1. If the codeID is non-zero, it will migrate the pool contracts to a given
 * codeID assuming that it has already been uploaded. uploadByteCode must be
 * empty in such a case. Fails if codeID does not exist. Fails if uploadByteCode
 * is not empty.
 *
 * 2. If the codeID is zero, it will upload the given uploadByteCode and use the
 * new resulting code id to migrate the pool to. Errors if uploadByteCode is
 * empty or invalid.
 *
 * In both cases, if one of the pools specified by the given poolID does not
 * exist, the proposal fails.
 *
 * The reason for having poolIDs be a slice of ids is to account for the
 * potential need for emergency migration of all old code ids associated with
 * particular pools to new code ids, or simply having the flexibility of
 * migrating multiple older pool contracts to a new one at once when there is a
 * release.
 *
 * poolD count to be submitted at once is gated by a governance paramets (20 at
 * launch). The proposal fails if more. Note that 20 was chosen arbitrarily to
 * have a constant bound on the number of pools migrated at once. This size will
 * be configured by a module parameter so it can be changed by a constant.
 */
export interface MigratePoolContractsProposalSDKType {
    title: string;
    description: string;
    pool_ids: bigint[];
    new_code_id: bigint;
    wasm_byte_code: Uint8Array;
    migrate_msg: Uint8Array;
}
export declare const UploadCosmWasmPoolCodeAndWhiteListProposal: {
    typeUrl: string;
    encode(message: UploadCosmWasmPoolCodeAndWhiteListProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UploadCosmWasmPoolCodeAndWhiteListProposal;
    fromPartial(object: Partial<UploadCosmWasmPoolCodeAndWhiteListProposal>): UploadCosmWasmPoolCodeAndWhiteListProposal;
    fromAmino(object: UploadCosmWasmPoolCodeAndWhiteListProposalAmino): UploadCosmWasmPoolCodeAndWhiteListProposal;
    toAmino(message: UploadCosmWasmPoolCodeAndWhiteListProposal): UploadCosmWasmPoolCodeAndWhiteListProposalAmino;
    fromAminoMsg(object: UploadCosmWasmPoolCodeAndWhiteListProposalAminoMsg): UploadCosmWasmPoolCodeAndWhiteListProposal;
    toAminoMsg(message: UploadCosmWasmPoolCodeAndWhiteListProposal): UploadCosmWasmPoolCodeAndWhiteListProposalAminoMsg;
    fromProtoMsg(message: UploadCosmWasmPoolCodeAndWhiteListProposalProtoMsg): UploadCosmWasmPoolCodeAndWhiteListProposal;
    toProto(message: UploadCosmWasmPoolCodeAndWhiteListProposal): Uint8Array;
    toProtoMsg(message: UploadCosmWasmPoolCodeAndWhiteListProposal): UploadCosmWasmPoolCodeAndWhiteListProposalProtoMsg;
};
export declare const MigratePoolContractsProposal: {
    typeUrl: string;
    encode(message: MigratePoolContractsProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MigratePoolContractsProposal;
    fromPartial(object: Partial<MigratePoolContractsProposal>): MigratePoolContractsProposal;
    fromAmino(object: MigratePoolContractsProposalAmino): MigratePoolContractsProposal;
    toAmino(message: MigratePoolContractsProposal): MigratePoolContractsProposalAmino;
    fromAminoMsg(object: MigratePoolContractsProposalAminoMsg): MigratePoolContractsProposal;
    toAminoMsg(message: MigratePoolContractsProposal): MigratePoolContractsProposalAminoMsg;
    fromProtoMsg(message: MigratePoolContractsProposalProtoMsg): MigratePoolContractsProposal;
    toProto(message: MigratePoolContractsProposal): Uint8Array;
    toProtoMsg(message: MigratePoolContractsProposal): MigratePoolContractsProposalProtoMsg;
};
