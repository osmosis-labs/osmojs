import { SuperfluidAsset, SuperfluidAssetSDKType } from "../superfluid";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/**
 * SetSuperfluidAssetsProposal is a gov Content type to update the superfluid
 * assets
 */
export interface SetSuperfluidAssetsProposal {
    title: string;
    description: string;
    assets: SuperfluidAsset[];
}
/**
 * SetSuperfluidAssetsProposal is a gov Content type to update the superfluid
 * assets
 */
export interface SetSuperfluidAssetsProposalSDKType {
    title: string;
    description: string;
    assets: SuperfluidAssetSDKType[];
}
/**
 * RemoveSuperfluidAssetsProposal is a gov Content type to remove the superfluid
 * assets by denom
 */
export interface RemoveSuperfluidAssetsProposal {
    title: string;
    description: string;
    superfluidAssetDenoms: string[];
}
/**
 * RemoveSuperfluidAssetsProposal is a gov Content type to remove the superfluid
 * assets by denom
 */
export interface RemoveSuperfluidAssetsProposalSDKType {
    title: string;
    description: string;
    superfluid_asset_denoms: string[];
}
/**
 * UpdateUnpoolWhiteListProposal is a gov Content type to update the
 * allowed list of pool ids.
 */
export interface UpdateUnpoolWhiteListProposal {
    title: string;
    description: string;
    ids: Long[];
    isOverwrite: boolean;
}
/**
 * UpdateUnpoolWhiteListProposal is a gov Content type to update the
 * allowed list of pool ids.
 */
export interface UpdateUnpoolWhiteListProposalSDKType {
    title: string;
    description: string;
    ids: Long[];
    is_overwrite: boolean;
}
export declare const SetSuperfluidAssetsProposal: {
    encode(message: SetSuperfluidAssetsProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetSuperfluidAssetsProposal;
    fromPartial(object: Partial<SetSuperfluidAssetsProposal>): SetSuperfluidAssetsProposal;
};
export declare const RemoveSuperfluidAssetsProposal: {
    encode(message: RemoveSuperfluidAssetsProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveSuperfluidAssetsProposal;
    fromPartial(object: Partial<RemoveSuperfluidAssetsProposal>): RemoveSuperfluidAssetsProposal;
};
export declare const UpdateUnpoolWhiteListProposal: {
    encode(message: UpdateUnpoolWhiteListProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUnpoolWhiteListProposal;
    fromPartial(object: Partial<UpdateUnpoolWhiteListProposal>): UpdateUnpoolWhiteListProposal;
};
