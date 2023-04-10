import { AccessConfig, AccessConfigAmino, AccessConfigSDKType } from "./types";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit StoreCodeProposal. To submit WASM code to the system,
 * a simple MsgStoreCode can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface StoreCodeProposal {
    $typeUrl?: string;
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** RunAs is the address that is passed to the contract's environment as sender */
    runAs: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasmByteCode: Uint8Array;
    /** InstantiatePermission to apply on contract creation, optional */
    instantiatePermission?: AccessConfig;
    /** UnpinCode code on upload, optional */
    unpinCode: boolean;
    /** Source is the URL where the code is hosted */
    source: string;
    /**
     * Builder is the docker image used to build the code deterministically, used
     * for smart contract verification
     */
    builder: string;
    /**
     * CodeHash is the SHA256 sum of the code outputted by builder, used for smart
     * contract verification
     */
    codeHash: Uint8Array;
}
export interface StoreCodeProposalProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal";
    value: Uint8Array;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit StoreCodeProposal. To submit WASM code to the system,
 * a simple MsgStoreCode can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface StoreCodeProposalAmino {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** RunAs is the address that is passed to the contract's environment as sender */
    run_as: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasm_byte_code: string;
    /** InstantiatePermission to apply on contract creation, optional */
    instantiate_permission?: AccessConfigAmino;
    /** UnpinCode code on upload, optional */
    unpin_code: boolean;
    /** Source is the URL where the code is hosted */
    source: string;
    /**
     * Builder is the docker image used to build the code deterministically, used
     * for smart contract verification
     */
    builder: string;
    /**
     * CodeHash is the SHA256 sum of the code outputted by builder, used for smart
     * contract verification
     */
    code_hash: Uint8Array;
}
export interface StoreCodeProposalAminoMsg {
    type: "wasm/StoreCodeProposal";
    value: StoreCodeProposalAmino;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit StoreCodeProposal. To submit WASM code to the system,
 * a simple MsgStoreCode can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface StoreCodeProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    run_as: string;
    wasm_byte_code: Uint8Array;
    instantiate_permission?: AccessConfigSDKType;
    unpin_code: boolean;
    source: string;
    builder: string;
    code_hash: Uint8Array;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit InstantiateContractProposal. To instantiate a contract,
 * a simple MsgInstantiateContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface InstantiateContractProposal {
    $typeUrl?: string;
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** RunAs is the address that is passed to the contract's environment as sender */
    runAs: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** CodeID is the reference to the stored WASM code */
    codeId: Long;
    /** Label is optional metadata to be stored with a constract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: Coin[];
}
export interface InstantiateContractProposalProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.InstantiateContractProposal";
    value: Uint8Array;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit InstantiateContractProposal. To instantiate a contract,
 * a simple MsgInstantiateContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface InstantiateContractProposalAmino {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** RunAs is the address that is passed to the contract's environment as sender */
    run_as: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** CodeID is the reference to the stored WASM code */
    code_id: string;
    /** Label is optional metadata to be stored with a constract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: CoinAmino[];
}
export interface InstantiateContractProposalAminoMsg {
    type: "wasm/InstantiateContractProposal";
    value: InstantiateContractProposalAmino;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit InstantiateContractProposal. To instantiate a contract,
 * a simple MsgInstantiateContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface InstantiateContractProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    run_as: string;
    admin: string;
    code_id: Long;
    label: string;
    msg: Uint8Array;
    funds: CoinSDKType[];
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit InstantiateContract2Proposal. To instantiate contract 2,
 * a simple MsgInstantiateContract2 can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface InstantiateContract2Proposal {
    $typeUrl?: string;
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** RunAs is the address that is passed to the contract's enviroment as sender */
    runAs: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** CodeID is the reference to the stored WASM code */
    codeId: Long;
    /** Label is optional metadata to be stored with a constract instance. */
    label: string;
    /** Msg json encode message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: Coin[];
    /** Salt is an arbitrary value provided by the sender. Size can be 1 to 64. */
    salt: Uint8Array;
    /**
     * FixMsg include the msg value into the hash for the predictable address.
     * Default is false
     */
    fixMsg: boolean;
}
export interface InstantiateContract2ProposalProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.InstantiateContract2Proposal";
    value: Uint8Array;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit InstantiateContract2Proposal. To instantiate contract 2,
 * a simple MsgInstantiateContract2 can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface InstantiateContract2ProposalAmino {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** RunAs is the address that is passed to the contract's enviroment as sender */
    run_as: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** CodeID is the reference to the stored WASM code */
    code_id: string;
    /** Label is optional metadata to be stored with a constract instance. */
    label: string;
    /** Msg json encode message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: CoinAmino[];
    /** Salt is an arbitrary value provided by the sender. Size can be 1 to 64. */
    salt: Uint8Array;
    /**
     * FixMsg include the msg value into the hash for the predictable address.
     * Default is false
     */
    fix_msg: boolean;
}
export interface InstantiateContract2ProposalAminoMsg {
    type: "wasm/InstantiateContract2Proposal";
    value: InstantiateContract2ProposalAmino;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit InstantiateContract2Proposal. To instantiate contract 2,
 * a simple MsgInstantiateContract2 can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface InstantiateContract2ProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    run_as: string;
    admin: string;
    code_id: Long;
    label: string;
    msg: Uint8Array;
    funds: CoinSDKType[];
    salt: Uint8Array;
    fix_msg: boolean;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit MigrateContractProposal. To migrate a contract,
 * a simple MsgMigrateContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface MigrateContractProposal {
    $typeUrl?: string;
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** CodeID references the new WASM code */
    codeId: Long;
    /** Msg json encoded message to be passed to the contract on migration */
    msg: Uint8Array;
}
export interface MigrateContractProposalProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MigrateContractProposal";
    value: Uint8Array;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit MigrateContractProposal. To migrate a contract,
 * a simple MsgMigrateContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface MigrateContractProposalAmino {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** CodeID references the new WASM code */
    code_id: string;
    /** Msg json encoded message to be passed to the contract on migration */
    msg: Uint8Array;
}
export interface MigrateContractProposalAminoMsg {
    type: "wasm/MigrateContractProposal";
    value: MigrateContractProposalAmino;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit MigrateContractProposal. To migrate a contract,
 * a simple MsgMigrateContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface MigrateContractProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    contract: string;
    code_id: Long;
    msg: Uint8Array;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit SudoContractProposal. To call sudo on a contract,
 * a simple MsgSudoContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface SudoContractProposal {
    $typeUrl?: string;
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract as sudo */
    msg: Uint8Array;
}
export interface SudoContractProposalProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.SudoContractProposal";
    value: Uint8Array;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit SudoContractProposal. To call sudo on a contract,
 * a simple MsgSudoContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface SudoContractProposalAmino {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract as sudo */
    msg: Uint8Array;
}
export interface SudoContractProposalAminoMsg {
    type: "wasm/SudoContractProposal";
    value: SudoContractProposalAmino;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit SudoContractProposal. To call sudo on a contract,
 * a simple MsgSudoContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface SudoContractProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    contract: string;
    msg: Uint8Array;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit ExecuteContractProposal. To call execute on a contract,
 * a simple MsgExecuteContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface ExecuteContractProposal {
    $typeUrl?: string;
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** RunAs is the address that is passed to the contract's environment as sender */
    runAs: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract as execute */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: Coin[];
}
export interface ExecuteContractProposalProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.ExecuteContractProposal";
    value: Uint8Array;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit ExecuteContractProposal. To call execute on a contract,
 * a simple MsgExecuteContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface ExecuteContractProposalAmino {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** RunAs is the address that is passed to the contract's environment as sender */
    run_as: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract as execute */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: CoinAmino[];
}
export interface ExecuteContractProposalAminoMsg {
    type: "wasm/ExecuteContractProposal";
    value: ExecuteContractProposalAmino;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit ExecuteContractProposal. To call execute on a contract,
 * a simple MsgExecuteContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface ExecuteContractProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    run_as: string;
    contract: string;
    msg: Uint8Array;
    funds: CoinSDKType[];
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit UpdateAdminProposal. To set an admin for a contract,
 * a simple MsgUpdateAdmin can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface UpdateAdminProposal {
    $typeUrl?: string;
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** NewAdmin address to be set */
    newAdmin: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
export interface UpdateAdminProposalProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.UpdateAdminProposal";
    value: Uint8Array;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit UpdateAdminProposal. To set an admin for a contract,
 * a simple MsgUpdateAdmin can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface UpdateAdminProposalAmino {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** NewAdmin address to be set */
    new_admin: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
export interface UpdateAdminProposalAminoMsg {
    type: "wasm/UpdateAdminProposal";
    value: UpdateAdminProposalAmino;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit UpdateAdminProposal. To set an admin for a contract,
 * a simple MsgUpdateAdmin can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface UpdateAdminProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    new_admin: string;
    contract: string;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit ClearAdminProposal. To clear the admin of a contract,
 * a simple MsgClearAdmin can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface ClearAdminProposal {
    $typeUrl?: string;
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
export interface ClearAdminProposalProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.ClearAdminProposal";
    value: Uint8Array;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit ClearAdminProposal. To clear the admin of a contract,
 * a simple MsgClearAdmin can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface ClearAdminProposalAmino {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
export interface ClearAdminProposalAminoMsg {
    type: "wasm/ClearAdminProposal";
    value: ClearAdminProposalAmino;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit ClearAdminProposal. To clear the admin of a contract,
 * a simple MsgClearAdmin can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface ClearAdminProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    contract: string;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit PinCodesProposal. To pin a set of code ids in the wasmvm
 * cache, a simple MsgPinCodes can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface PinCodesProposal {
    $typeUrl?: string;
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** CodeIDs references the new WASM codes */
    codeIds: Long[];
}
export interface PinCodesProposalProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.PinCodesProposal";
    value: Uint8Array;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit PinCodesProposal. To pin a set of code ids in the wasmvm
 * cache, a simple MsgPinCodes can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface PinCodesProposalAmino {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** CodeIDs references the new WASM codes */
    code_ids: string[];
}
export interface PinCodesProposalAminoMsg {
    type: "wasm/PinCodesProposal";
    value: PinCodesProposalAmino;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit PinCodesProposal. To pin a set of code ids in the wasmvm
 * cache, a simple MsgPinCodes can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface PinCodesProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    code_ids: Long[];
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit UnpinCodesProposal. To unpin a set of code ids in the wasmvm
 * cache, a simple MsgUnpinCodes can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface UnpinCodesProposal {
    $typeUrl?: string;
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** CodeIDs references the WASM codes */
    codeIds: Long[];
}
export interface UnpinCodesProposalProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.UnpinCodesProposal";
    value: Uint8Array;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit UnpinCodesProposal. To unpin a set of code ids in the wasmvm
 * cache, a simple MsgUnpinCodes can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface UnpinCodesProposalAmino {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** CodeIDs references the WASM codes */
    code_ids: string[];
}
export interface UnpinCodesProposalAminoMsg {
    type: "wasm/UnpinCodesProposal";
    value: UnpinCodesProposalAmino;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit UnpinCodesProposal. To unpin a set of code ids in the wasmvm
 * cache, a simple MsgUnpinCodes can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface UnpinCodesProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    code_ids: Long[];
}
/**
 * AccessConfigUpdate contains the code id and the access config to be
 * applied.
 */
export interface AccessConfigUpdate {
    /** CodeID is the reference to the stored WASM code to be updated */
    codeId: Long;
    /** InstantiatePermission to apply to the set of code ids */
    instantiatePermission?: AccessConfig;
}
export interface AccessConfigUpdateProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.AccessConfigUpdate";
    value: Uint8Array;
}
/**
 * AccessConfigUpdate contains the code id and the access config to be
 * applied.
 */
export interface AccessConfigUpdateAmino {
    /** CodeID is the reference to the stored WASM code to be updated */
    code_id: string;
    /** InstantiatePermission to apply to the set of code ids */
    instantiate_permission?: AccessConfigAmino;
}
export interface AccessConfigUpdateAminoMsg {
    type: "wasm/AccessConfigUpdate";
    value: AccessConfigUpdateAmino;
}
/**
 * AccessConfigUpdate contains the code id and the access config to be
 * applied.
 */
export interface AccessConfigUpdateSDKType {
    code_id: Long;
    instantiate_permission?: AccessConfigSDKType;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit UpdateInstantiateConfigProposal. To update instantiate config
 * to a set of code ids, a simple MsgUpdateInstantiateConfig can be invoked from
 * the x/gov module via a v1 governance proposal.
 */
/** @deprecated */
export interface UpdateInstantiateConfigProposal {
    $typeUrl?: string;
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /**
     * AccessConfigUpdate contains the list of code ids and the access config
     * to be applied.
     */
    accessConfigUpdates: AccessConfigUpdate[];
}
export interface UpdateInstantiateConfigProposalProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal";
    value: Uint8Array;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit UpdateInstantiateConfigProposal. To update instantiate config
 * to a set of code ids, a simple MsgUpdateInstantiateConfig can be invoked from
 * the x/gov module via a v1 governance proposal.
 */
/** @deprecated */
export interface UpdateInstantiateConfigProposalAmino {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /**
     * AccessConfigUpdate contains the list of code ids and the access config
     * to be applied.
     */
    access_config_updates: AccessConfigUpdateAmino[];
}
export interface UpdateInstantiateConfigProposalAminoMsg {
    type: "wasm/UpdateInstantiateConfigProposal";
    value: UpdateInstantiateConfigProposalAmino;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit UpdateInstantiateConfigProposal. To update instantiate config
 * to a set of code ids, a simple MsgUpdateInstantiateConfig can be invoked from
 * the x/gov module via a v1 governance proposal.
 */
/** @deprecated */
export interface UpdateInstantiateConfigProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    access_config_updates: AccessConfigUpdateSDKType[];
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit StoreAndInstantiateContractProposal. To store and instantiate
 * the contract, a simple MsgStoreAndInstantiateContract can be invoked from
 * the x/gov module via a v1 governance proposal.
 */
/** @deprecated */
export interface StoreAndInstantiateContractProposal {
    $typeUrl?: string;
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** RunAs is the address that is passed to the contract's environment as sender */
    runAs: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasmByteCode: Uint8Array;
    /** InstantiatePermission to apply on contract creation, optional */
    instantiatePermission?: AccessConfig;
    /** UnpinCode code on upload, optional */
    unpinCode: boolean;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** Label is optional metadata to be stored with a constract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: Coin[];
    /** Source is the URL where the code is hosted */
    source: string;
    /**
     * Builder is the docker image used to build the code deterministically, used
     * for smart contract verification
     */
    builder: string;
    /**
     * CodeHash is the SHA256 sum of the code outputted by builder, used for smart
     * contract verification
     */
    codeHash: Uint8Array;
}
export interface StoreAndInstantiateContractProposalProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal";
    value: Uint8Array;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit StoreAndInstantiateContractProposal. To store and instantiate
 * the contract, a simple MsgStoreAndInstantiateContract can be invoked from
 * the x/gov module via a v1 governance proposal.
 */
/** @deprecated */
export interface StoreAndInstantiateContractProposalAmino {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** RunAs is the address that is passed to the contract's environment as sender */
    run_as: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasm_byte_code: string;
    /** InstantiatePermission to apply on contract creation, optional */
    instantiate_permission?: AccessConfigAmino;
    /** UnpinCode code on upload, optional */
    unpin_code: boolean;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** Label is optional metadata to be stored with a constract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: CoinAmino[];
    /** Source is the URL where the code is hosted */
    source: string;
    /**
     * Builder is the docker image used to build the code deterministically, used
     * for smart contract verification
     */
    builder: string;
    /**
     * CodeHash is the SHA256 sum of the code outputted by builder, used for smart
     * contract verification
     */
    code_hash: Uint8Array;
}
export interface StoreAndInstantiateContractProposalAminoMsg {
    type: "wasm/StoreAndInstantiateContractProposal";
    value: StoreAndInstantiateContractProposalAmino;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit StoreAndInstantiateContractProposal. To store and instantiate
 * the contract, a simple MsgStoreAndInstantiateContract can be invoked from
 * the x/gov module via a v1 governance proposal.
 */
/** @deprecated */
export interface StoreAndInstantiateContractProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    run_as: string;
    wasm_byte_code: Uint8Array;
    instantiate_permission?: AccessConfigSDKType;
    unpin_code: boolean;
    admin: string;
    label: string;
    msg: Uint8Array;
    funds: CoinSDKType[];
    source: string;
    builder: string;
    code_hash: Uint8Array;
}
export declare const StoreCodeProposal: {
    typeUrl: string;
    encode(message: StoreCodeProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StoreCodeProposal;
    fromPartial(object: Partial<StoreCodeProposal>): StoreCodeProposal;
    fromAmino(object: StoreCodeProposalAmino): StoreCodeProposal;
    toAmino(message: StoreCodeProposal): StoreCodeProposalAmino;
    fromAminoMsg(object: StoreCodeProposalAminoMsg): StoreCodeProposal;
    toAminoMsg(message: StoreCodeProposal): StoreCodeProposalAminoMsg;
    fromProtoMsg(message: StoreCodeProposalProtoMsg): StoreCodeProposal;
    toProto(message: StoreCodeProposal): Uint8Array;
    toProtoMsg(message: StoreCodeProposal): StoreCodeProposalProtoMsg;
};
export declare const InstantiateContractProposal: {
    typeUrl: string;
    encode(message: InstantiateContractProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InstantiateContractProposal;
    fromPartial(object: Partial<InstantiateContractProposal>): InstantiateContractProposal;
    fromAmino(object: InstantiateContractProposalAmino): InstantiateContractProposal;
    toAmino(message: InstantiateContractProposal): InstantiateContractProposalAmino;
    fromAminoMsg(object: InstantiateContractProposalAminoMsg): InstantiateContractProposal;
    toAminoMsg(message: InstantiateContractProposal): InstantiateContractProposalAminoMsg;
    fromProtoMsg(message: InstantiateContractProposalProtoMsg): InstantiateContractProposal;
    toProto(message: InstantiateContractProposal): Uint8Array;
    toProtoMsg(message: InstantiateContractProposal): InstantiateContractProposalProtoMsg;
};
export declare const InstantiateContract2Proposal: {
    typeUrl: string;
    encode(message: InstantiateContract2Proposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InstantiateContract2Proposal;
    fromPartial(object: Partial<InstantiateContract2Proposal>): InstantiateContract2Proposal;
    fromAmino(object: InstantiateContract2ProposalAmino): InstantiateContract2Proposal;
    toAmino(message: InstantiateContract2Proposal): InstantiateContract2ProposalAmino;
    fromAminoMsg(object: InstantiateContract2ProposalAminoMsg): InstantiateContract2Proposal;
    toAminoMsg(message: InstantiateContract2Proposal): InstantiateContract2ProposalAminoMsg;
    fromProtoMsg(message: InstantiateContract2ProposalProtoMsg): InstantiateContract2Proposal;
    toProto(message: InstantiateContract2Proposal): Uint8Array;
    toProtoMsg(message: InstantiateContract2Proposal): InstantiateContract2ProposalProtoMsg;
};
export declare const MigrateContractProposal: {
    typeUrl: string;
    encode(message: MigrateContractProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MigrateContractProposal;
    fromPartial(object: Partial<MigrateContractProposal>): MigrateContractProposal;
    fromAmino(object: MigrateContractProposalAmino): MigrateContractProposal;
    toAmino(message: MigrateContractProposal): MigrateContractProposalAmino;
    fromAminoMsg(object: MigrateContractProposalAminoMsg): MigrateContractProposal;
    toAminoMsg(message: MigrateContractProposal): MigrateContractProposalAminoMsg;
    fromProtoMsg(message: MigrateContractProposalProtoMsg): MigrateContractProposal;
    toProto(message: MigrateContractProposal): Uint8Array;
    toProtoMsg(message: MigrateContractProposal): MigrateContractProposalProtoMsg;
};
export declare const SudoContractProposal: {
    typeUrl: string;
    encode(message: SudoContractProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SudoContractProposal;
    fromPartial(object: Partial<SudoContractProposal>): SudoContractProposal;
    fromAmino(object: SudoContractProposalAmino): SudoContractProposal;
    toAmino(message: SudoContractProposal): SudoContractProposalAmino;
    fromAminoMsg(object: SudoContractProposalAminoMsg): SudoContractProposal;
    toAminoMsg(message: SudoContractProposal): SudoContractProposalAminoMsg;
    fromProtoMsg(message: SudoContractProposalProtoMsg): SudoContractProposal;
    toProto(message: SudoContractProposal): Uint8Array;
    toProtoMsg(message: SudoContractProposal): SudoContractProposalProtoMsg;
};
export declare const ExecuteContractProposal: {
    typeUrl: string;
    encode(message: ExecuteContractProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExecuteContractProposal;
    fromPartial(object: Partial<ExecuteContractProposal>): ExecuteContractProposal;
    fromAmino(object: ExecuteContractProposalAmino): ExecuteContractProposal;
    toAmino(message: ExecuteContractProposal): ExecuteContractProposalAmino;
    fromAminoMsg(object: ExecuteContractProposalAminoMsg): ExecuteContractProposal;
    toAminoMsg(message: ExecuteContractProposal): ExecuteContractProposalAminoMsg;
    fromProtoMsg(message: ExecuteContractProposalProtoMsg): ExecuteContractProposal;
    toProto(message: ExecuteContractProposal): Uint8Array;
    toProtoMsg(message: ExecuteContractProposal): ExecuteContractProposalProtoMsg;
};
export declare const UpdateAdminProposal: {
    typeUrl: string;
    encode(message: UpdateAdminProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAdminProposal;
    fromPartial(object: Partial<UpdateAdminProposal>): UpdateAdminProposal;
    fromAmino(object: UpdateAdminProposalAmino): UpdateAdminProposal;
    toAmino(message: UpdateAdminProposal): UpdateAdminProposalAmino;
    fromAminoMsg(object: UpdateAdminProposalAminoMsg): UpdateAdminProposal;
    toAminoMsg(message: UpdateAdminProposal): UpdateAdminProposalAminoMsg;
    fromProtoMsg(message: UpdateAdminProposalProtoMsg): UpdateAdminProposal;
    toProto(message: UpdateAdminProposal): Uint8Array;
    toProtoMsg(message: UpdateAdminProposal): UpdateAdminProposalProtoMsg;
};
export declare const ClearAdminProposal: {
    typeUrl: string;
    encode(message: ClearAdminProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClearAdminProposal;
    fromPartial(object: Partial<ClearAdminProposal>): ClearAdminProposal;
    fromAmino(object: ClearAdminProposalAmino): ClearAdminProposal;
    toAmino(message: ClearAdminProposal): ClearAdminProposalAmino;
    fromAminoMsg(object: ClearAdminProposalAminoMsg): ClearAdminProposal;
    toAminoMsg(message: ClearAdminProposal): ClearAdminProposalAminoMsg;
    fromProtoMsg(message: ClearAdminProposalProtoMsg): ClearAdminProposal;
    toProto(message: ClearAdminProposal): Uint8Array;
    toProtoMsg(message: ClearAdminProposal): ClearAdminProposalProtoMsg;
};
export declare const PinCodesProposal: {
    typeUrl: string;
    encode(message: PinCodesProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PinCodesProposal;
    fromPartial(object: Partial<PinCodesProposal>): PinCodesProposal;
    fromAmino(object: PinCodesProposalAmino): PinCodesProposal;
    toAmino(message: PinCodesProposal): PinCodesProposalAmino;
    fromAminoMsg(object: PinCodesProposalAminoMsg): PinCodesProposal;
    toAminoMsg(message: PinCodesProposal): PinCodesProposalAminoMsg;
    fromProtoMsg(message: PinCodesProposalProtoMsg): PinCodesProposal;
    toProto(message: PinCodesProposal): Uint8Array;
    toProtoMsg(message: PinCodesProposal): PinCodesProposalProtoMsg;
};
export declare const UnpinCodesProposal: {
    typeUrl: string;
    encode(message: UnpinCodesProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnpinCodesProposal;
    fromPartial(object: Partial<UnpinCodesProposal>): UnpinCodesProposal;
    fromAmino(object: UnpinCodesProposalAmino): UnpinCodesProposal;
    toAmino(message: UnpinCodesProposal): UnpinCodesProposalAmino;
    fromAminoMsg(object: UnpinCodesProposalAminoMsg): UnpinCodesProposal;
    toAminoMsg(message: UnpinCodesProposal): UnpinCodesProposalAminoMsg;
    fromProtoMsg(message: UnpinCodesProposalProtoMsg): UnpinCodesProposal;
    toProto(message: UnpinCodesProposal): Uint8Array;
    toProtoMsg(message: UnpinCodesProposal): UnpinCodesProposalProtoMsg;
};
export declare const AccessConfigUpdate: {
    typeUrl: string;
    encode(message: AccessConfigUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccessConfigUpdate;
    fromPartial(object: Partial<AccessConfigUpdate>): AccessConfigUpdate;
    fromAmino(object: AccessConfigUpdateAmino): AccessConfigUpdate;
    toAmino(message: AccessConfigUpdate): AccessConfigUpdateAmino;
    fromAminoMsg(object: AccessConfigUpdateAminoMsg): AccessConfigUpdate;
    toAminoMsg(message: AccessConfigUpdate): AccessConfigUpdateAminoMsg;
    fromProtoMsg(message: AccessConfigUpdateProtoMsg): AccessConfigUpdate;
    toProto(message: AccessConfigUpdate): Uint8Array;
    toProtoMsg(message: AccessConfigUpdate): AccessConfigUpdateProtoMsg;
};
export declare const UpdateInstantiateConfigProposal: {
    typeUrl: string;
    encode(message: UpdateInstantiateConfigProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateInstantiateConfigProposal;
    fromPartial(object: Partial<UpdateInstantiateConfigProposal>): UpdateInstantiateConfigProposal;
    fromAmino(object: UpdateInstantiateConfigProposalAmino): UpdateInstantiateConfigProposal;
    toAmino(message: UpdateInstantiateConfigProposal): UpdateInstantiateConfigProposalAmino;
    fromAminoMsg(object: UpdateInstantiateConfigProposalAminoMsg): UpdateInstantiateConfigProposal;
    toAminoMsg(message: UpdateInstantiateConfigProposal): UpdateInstantiateConfigProposalAminoMsg;
    fromProtoMsg(message: UpdateInstantiateConfigProposalProtoMsg): UpdateInstantiateConfigProposal;
    toProto(message: UpdateInstantiateConfigProposal): Uint8Array;
    toProtoMsg(message: UpdateInstantiateConfigProposal): UpdateInstantiateConfigProposalProtoMsg;
};
export declare const StoreAndInstantiateContractProposal: {
    typeUrl: string;
    encode(message: StoreAndInstantiateContractProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StoreAndInstantiateContractProposal;
    fromPartial(object: Partial<StoreAndInstantiateContractProposal>): StoreAndInstantiateContractProposal;
    fromAmino(object: StoreAndInstantiateContractProposalAmino): StoreAndInstantiateContractProposal;
    toAmino(message: StoreAndInstantiateContractProposal): StoreAndInstantiateContractProposalAmino;
    fromAminoMsg(object: StoreAndInstantiateContractProposalAminoMsg): StoreAndInstantiateContractProposal;
    toAminoMsg(message: StoreAndInstantiateContractProposal): StoreAndInstantiateContractProposalAminoMsg;
    fromProtoMsg(message: StoreAndInstantiateContractProposalProtoMsg): StoreAndInstantiateContractProposal;
    toProto(message: StoreAndInstantiateContractProposal): Uint8Array;
    toProtoMsg(message: StoreAndInstantiateContractProposal): StoreAndInstantiateContractProposalProtoMsg;
};
