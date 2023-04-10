import { SuperfluidAsset, SuperfluidAssetAmino, SuperfluidAssetSDKType } from "../superfluid";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * SetSuperfluidAssetsProposal is a gov Content type to update the superfluid
 * assets
 */
export interface SetSuperfluidAssetsProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    assets: SuperfluidAsset[];
}
export interface SetSuperfluidAssetsProposalProtoMsg {
    typeUrl: "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal";
    value: Uint8Array;
}
/**
 * SetSuperfluidAssetsProposal is a gov Content type to update the superfluid
 * assets
 */
export interface SetSuperfluidAssetsProposalAmino {
    title: string;
    description: string;
    assets: SuperfluidAssetAmino[];
}
export interface SetSuperfluidAssetsProposalAminoMsg {
    type: "osmosis/set-superfluid-assets-proposal";
    value: SetSuperfluidAssetsProposalAmino;
}
/**
 * SetSuperfluidAssetsProposal is a gov Content type to update the superfluid
 * assets
 */
export interface SetSuperfluidAssetsProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    assets: SuperfluidAssetSDKType[];
}
/**
 * RemoveSuperfluidAssetsProposal is a gov Content type to remove the superfluid
 * assets by denom
 */
export interface RemoveSuperfluidAssetsProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    superfluidAssetDenoms: string[];
}
export interface RemoveSuperfluidAssetsProposalProtoMsg {
    typeUrl: "/osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal";
    value: Uint8Array;
}
/**
 * RemoveSuperfluidAssetsProposal is a gov Content type to remove the superfluid
 * assets by denom
 */
export interface RemoveSuperfluidAssetsProposalAmino {
    title: string;
    description: string;
    superfluid_asset_denoms: string[];
}
export interface RemoveSuperfluidAssetsProposalAminoMsg {
    type: "osmosis/del-superfluid-assets-proposal";
    value: RemoveSuperfluidAssetsProposalAmino;
}
/**
 * RemoveSuperfluidAssetsProposal is a gov Content type to remove the superfluid
 * assets by denom
 */
export interface RemoveSuperfluidAssetsProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    superfluid_asset_denoms: string[];
}
/**
 * UpdateUnpoolWhiteListProposal is a gov Content type to update the
 * allowed list of pool ids.
 */
export interface UpdateUnpoolWhiteListProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    ids: Long[];
    isOverwrite: boolean;
}
export interface UpdateUnpoolWhiteListProposalProtoMsg {
    typeUrl: "/osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal";
    value: Uint8Array;
}
/**
 * UpdateUnpoolWhiteListProposal is a gov Content type to update the
 * allowed list of pool ids.
 */
export interface UpdateUnpoolWhiteListProposalAmino {
    title: string;
    description: string;
    ids: string[];
    is_overwrite: boolean;
}
export interface UpdateUnpoolWhiteListProposalAminoMsg {
    type: "osmosis/update-unpool-whitelist";
    value: UpdateUnpoolWhiteListProposalAmino;
}
/**
 * UpdateUnpoolWhiteListProposal is a gov Content type to update the
 * allowed list of pool ids.
 */
export interface UpdateUnpoolWhiteListProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    ids: Long[];
    is_overwrite: boolean;
}
export declare const SetSuperfluidAssetsProposal: {
    typeUrl: string;
    encode(message: SetSuperfluidAssetsProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetSuperfluidAssetsProposal;
    fromPartial(object: Partial<SetSuperfluidAssetsProposal>): SetSuperfluidAssetsProposal;
    fromAmino(object: SetSuperfluidAssetsProposalAmino): SetSuperfluidAssetsProposal;
    toAmino(message: SetSuperfluidAssetsProposal): SetSuperfluidAssetsProposalAmino;
    fromAminoMsg(object: SetSuperfluidAssetsProposalAminoMsg): SetSuperfluidAssetsProposal;
    toAminoMsg(message: SetSuperfluidAssetsProposal): SetSuperfluidAssetsProposalAminoMsg;
    fromProtoMsg(message: SetSuperfluidAssetsProposalProtoMsg): SetSuperfluidAssetsProposal;
    toProto(message: SetSuperfluidAssetsProposal): Uint8Array;
    toProtoMsg(message: SetSuperfluidAssetsProposal): SetSuperfluidAssetsProposalProtoMsg;
};
export declare const RemoveSuperfluidAssetsProposal: {
    typeUrl: string;
    encode(message: RemoveSuperfluidAssetsProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveSuperfluidAssetsProposal;
    fromPartial(object: Partial<RemoveSuperfluidAssetsProposal>): RemoveSuperfluidAssetsProposal;
    fromAmino(object: RemoveSuperfluidAssetsProposalAmino): RemoveSuperfluidAssetsProposal;
    toAmino(message: RemoveSuperfluidAssetsProposal): RemoveSuperfluidAssetsProposalAmino;
    fromAminoMsg(object: RemoveSuperfluidAssetsProposalAminoMsg): RemoveSuperfluidAssetsProposal;
    toAminoMsg(message: RemoveSuperfluidAssetsProposal): RemoveSuperfluidAssetsProposalAminoMsg;
    fromProtoMsg(message: RemoveSuperfluidAssetsProposalProtoMsg): RemoveSuperfluidAssetsProposal;
    toProto(message: RemoveSuperfluidAssetsProposal): Uint8Array;
    toProtoMsg(message: RemoveSuperfluidAssetsProposal): RemoveSuperfluidAssetsProposalProtoMsg;
};
export declare const UpdateUnpoolWhiteListProposal: {
    typeUrl: string;
    encode(message: UpdateUnpoolWhiteListProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUnpoolWhiteListProposal;
    fromPartial(object: Partial<UpdateUnpoolWhiteListProposal>): UpdateUnpoolWhiteListProposal;
    fromAmino(object: UpdateUnpoolWhiteListProposalAmino): UpdateUnpoolWhiteListProposal;
    toAmino(message: UpdateUnpoolWhiteListProposal): UpdateUnpoolWhiteListProposalAmino;
    fromAminoMsg(object: UpdateUnpoolWhiteListProposalAminoMsg): UpdateUnpoolWhiteListProposal;
    toAminoMsg(message: UpdateUnpoolWhiteListProposal): UpdateUnpoolWhiteListProposalAminoMsg;
    fromProtoMsg(message: UpdateUnpoolWhiteListProposalProtoMsg): UpdateUnpoolWhiteListProposal;
    toProto(message: UpdateUnpoolWhiteListProposal): Uint8Array;
    toProtoMsg(message: UpdateUnpoolWhiteListProposal): UpdateUnpoolWhiteListProposalProtoMsg;
};
