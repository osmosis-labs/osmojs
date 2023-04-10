import * as _m0 from "protobufjs/minimal";
/**
 * SetProtoRevEnabledProposal is a gov Content type to update whether the
 * protorev module is enabled
 */
export interface SetProtoRevEnabledProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    enabled: boolean;
}
export interface SetProtoRevEnabledProposalProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.SetProtoRevEnabledProposal";
    value: Uint8Array;
}
/**
 * SetProtoRevEnabledProposal is a gov Content type to update whether the
 * protorev module is enabled
 */
export interface SetProtoRevEnabledProposalAmino {
    title: string;
    description: string;
    enabled: boolean;
}
export interface SetProtoRevEnabledProposalAminoMsg {
    type: "osmosis/protorev/set-proto-rev-enabled-proposal";
    value: SetProtoRevEnabledProposalAmino;
}
/**
 * SetProtoRevEnabledProposal is a gov Content type to update whether the
 * protorev module is enabled
 */
export interface SetProtoRevEnabledProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    enabled: boolean;
}
/**
 * SetProtoRevAdminAccountProposal is a gov Content type to set the admin
 * account that will receive permissions to alter hot routes and set the
 * developer address that will be receiving a share of profits from the module
 */
export interface SetProtoRevAdminAccountProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    account: string;
}
export interface SetProtoRevAdminAccountProposalProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.SetProtoRevAdminAccountProposal";
    value: Uint8Array;
}
/**
 * SetProtoRevAdminAccountProposal is a gov Content type to set the admin
 * account that will receive permissions to alter hot routes and set the
 * developer address that will be receiving a share of profits from the module
 */
export interface SetProtoRevAdminAccountProposalAmino {
    title: string;
    description: string;
    account: string;
}
export interface SetProtoRevAdminAccountProposalAminoMsg {
    type: "osmosis/protorev/set-proto-rev-admin-account-proposal";
    value: SetProtoRevAdminAccountProposalAmino;
}
/**
 * SetProtoRevAdminAccountProposal is a gov Content type to set the admin
 * account that will receive permissions to alter hot routes and set the
 * developer address that will be receiving a share of profits from the module
 */
export interface SetProtoRevAdminAccountProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    account: string;
}
export declare const SetProtoRevEnabledProposal: {
    typeUrl: string;
    encode(message: SetProtoRevEnabledProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetProtoRevEnabledProposal;
    fromPartial(object: Partial<SetProtoRevEnabledProposal>): SetProtoRevEnabledProposal;
    fromAmino(object: SetProtoRevEnabledProposalAmino): SetProtoRevEnabledProposal;
    toAmino(message: SetProtoRevEnabledProposal): SetProtoRevEnabledProposalAmino;
    fromAminoMsg(object: SetProtoRevEnabledProposalAminoMsg): SetProtoRevEnabledProposal;
    toAminoMsg(message: SetProtoRevEnabledProposal): SetProtoRevEnabledProposalAminoMsg;
    fromProtoMsg(message: SetProtoRevEnabledProposalProtoMsg): SetProtoRevEnabledProposal;
    toProto(message: SetProtoRevEnabledProposal): Uint8Array;
    toProtoMsg(message: SetProtoRevEnabledProposal): SetProtoRevEnabledProposalProtoMsg;
};
export declare const SetProtoRevAdminAccountProposal: {
    typeUrl: string;
    encode(message: SetProtoRevAdminAccountProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetProtoRevAdminAccountProposal;
    fromPartial(object: Partial<SetProtoRevAdminAccountProposal>): SetProtoRevAdminAccountProposal;
    fromAmino(object: SetProtoRevAdminAccountProposalAmino): SetProtoRevAdminAccountProposal;
    toAmino(message: SetProtoRevAdminAccountProposal): SetProtoRevAdminAccountProposalAmino;
    fromAminoMsg(object: SetProtoRevAdminAccountProposalAminoMsg): SetProtoRevAdminAccountProposal;
    toAminoMsg(message: SetProtoRevAdminAccountProposal): SetProtoRevAdminAccountProposalAminoMsg;
    fromProtoMsg(message: SetProtoRevAdminAccountProposalProtoMsg): SetProtoRevAdminAccountProposal;
    toProto(message: SetProtoRevAdminAccountProposal): Uint8Array;
    toProtoMsg(message: SetProtoRevAdminAccountProposal): SetProtoRevAdminAccountProposalProtoMsg;
};
