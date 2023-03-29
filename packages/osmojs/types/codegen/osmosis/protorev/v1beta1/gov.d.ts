import * as _m0 from "protobufjs/minimal";
/**
 * SetProtoRevEnabledProposal is a gov Content type to update whether the
 * protorev module is enabled
 */
export interface SetProtoRevEnabledProposal {
    title: string;
    description: string;
    enabled: boolean;
}
/**
 * SetProtoRevEnabledProposal is a gov Content type to update whether the
 * protorev module is enabled
 */
export interface SetProtoRevEnabledProposalSDKType {
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
    title: string;
    description: string;
    account: string;
}
/**
 * SetProtoRevAdminAccountProposal is a gov Content type to set the admin
 * account that will receive permissions to alter hot routes and set the
 * developer address that will be receiving a share of profits from the module
 */
export interface SetProtoRevAdminAccountProposalSDKType {
    title: string;
    description: string;
    account: string;
}
export declare const SetProtoRevEnabledProposal: {
    encode(message: SetProtoRevEnabledProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetProtoRevEnabledProposal;
    fromPartial(object: Partial<SetProtoRevEnabledProposal>): SetProtoRevEnabledProposal;
};
export declare const SetProtoRevAdminAccountProposal: {
    encode(message: SetProtoRevAdminAccountProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetProtoRevAdminAccountProposal;
    fromPartial(object: Partial<SetProtoRevAdminAccountProposal>): SetProtoRevAdminAccountProposal;
};
