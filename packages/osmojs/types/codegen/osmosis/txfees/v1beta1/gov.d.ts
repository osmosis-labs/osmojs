import { FeeToken, FeeTokenAmino, FeeTokenSDKType } from "./feetoken";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * UpdateFeeTokenProposal is a gov Content type for adding new whitelisted fee
 * token(s). It must specify a denom along with gamm pool ID to use as a spot
 * price calculator. It can be used to add new denoms to the whitelist. It can
 * also be used to update the Pool to associate with the denom. If Pool ID is
 * set to 0, it will remove the denom from the whitelisted set.
 */
export interface UpdateFeeTokenProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    feetokens: FeeToken[];
}
export interface UpdateFeeTokenProposalProtoMsg {
    typeUrl: "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal";
    value: Uint8Array;
}
/**
 * UpdateFeeTokenProposal is a gov Content type for adding new whitelisted fee
 * token(s). It must specify a denom along with gamm pool ID to use as a spot
 * price calculator. It can be used to add new denoms to the whitelist. It can
 * also be used to update the Pool to associate with the denom. If Pool ID is
 * set to 0, it will remove the denom from the whitelisted set.
 */
export interface UpdateFeeTokenProposalAmino {
    title: string;
    description: string;
    feetokens: FeeTokenAmino[];
}
export interface UpdateFeeTokenProposalAminoMsg {
    type: "osmosis/UpdateFeeTokenProposal";
    value: UpdateFeeTokenProposalAmino;
}
/**
 * UpdateFeeTokenProposal is a gov Content type for adding new whitelisted fee
 * token(s). It must specify a denom along with gamm pool ID to use as a spot
 * price calculator. It can be used to add new denoms to the whitelist. It can
 * also be used to update the Pool to associate with the denom. If Pool ID is
 * set to 0, it will remove the denom from the whitelisted set.
 */
export interface UpdateFeeTokenProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    feetokens: FeeTokenSDKType[];
}
export declare const UpdateFeeTokenProposal: {
    typeUrl: string;
    encode(message: UpdateFeeTokenProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UpdateFeeTokenProposal;
    fromPartial(object: Partial<UpdateFeeTokenProposal>): UpdateFeeTokenProposal;
    fromAmino(object: UpdateFeeTokenProposalAmino): UpdateFeeTokenProposal;
    toAmino(message: UpdateFeeTokenProposal): UpdateFeeTokenProposalAmino;
    fromAminoMsg(object: UpdateFeeTokenProposalAminoMsg): UpdateFeeTokenProposal;
    toAminoMsg(message: UpdateFeeTokenProposal): UpdateFeeTokenProposalAminoMsg;
    fromProtoMsg(message: UpdateFeeTokenProposalProtoMsg): UpdateFeeTokenProposal;
    toProto(message: UpdateFeeTokenProposal): Uint8Array;
    toProtoMsg(message: UpdateFeeTokenProposal): UpdateFeeTokenProposalProtoMsg;
};
