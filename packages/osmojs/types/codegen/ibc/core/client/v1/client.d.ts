import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { Plan, PlanAmino, PlanSDKType } from "../../../../cosmos/upgrade/v1beta1/upgrade";
import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * IdentifiedClientState defines a client state with an additional client
 * identifier field.
 */
export interface IdentifiedClientState {
    /** client identifier */
    clientId: string;
    /** client state */
    clientState?: Any;
}
export interface IdentifiedClientStateProtoMsg {
    typeUrl: "/ibc.core.client.v1.IdentifiedClientState";
    value: Uint8Array;
}
/**
 * IdentifiedClientState defines a client state with an additional client
 * identifier field.
 */
export interface IdentifiedClientStateAmino {
    /** client identifier */
    client_id: string;
    /** client state */
    client_state?: AnyAmino;
}
export interface IdentifiedClientStateAminoMsg {
    type: "cosmos-sdk/IdentifiedClientState";
    value: IdentifiedClientStateAmino;
}
/**
 * IdentifiedClientState defines a client state with an additional client
 * identifier field.
 */
export interface IdentifiedClientStateSDKType {
    client_id: string;
    client_state?: AnySDKType;
}
/**
 * ConsensusStateWithHeight defines a consensus state with an additional height
 * field.
 */
export interface ConsensusStateWithHeight {
    /** consensus state height */
    height?: Height;
    /** consensus state */
    consensusState?: Any;
}
export interface ConsensusStateWithHeightProtoMsg {
    typeUrl: "/ibc.core.client.v1.ConsensusStateWithHeight";
    value: Uint8Array;
}
/**
 * ConsensusStateWithHeight defines a consensus state with an additional height
 * field.
 */
export interface ConsensusStateWithHeightAmino {
    /** consensus state height */
    height?: HeightAmino;
    /** consensus state */
    consensus_state?: AnyAmino;
}
export interface ConsensusStateWithHeightAminoMsg {
    type: "cosmos-sdk/ConsensusStateWithHeight";
    value: ConsensusStateWithHeightAmino;
}
/**
 * ConsensusStateWithHeight defines a consensus state with an additional height
 * field.
 */
export interface ConsensusStateWithHeightSDKType {
    height?: HeightSDKType;
    consensus_state?: AnySDKType;
}
/**
 * ClientConsensusStates defines all the stored consensus states for a given
 * client.
 */
export interface ClientConsensusStates {
    /** client identifier */
    clientId: string;
    /** consensus states and their heights associated with the client */
    consensusStates: ConsensusStateWithHeight[];
}
export interface ClientConsensusStatesProtoMsg {
    typeUrl: "/ibc.core.client.v1.ClientConsensusStates";
    value: Uint8Array;
}
/**
 * ClientConsensusStates defines all the stored consensus states for a given
 * client.
 */
export interface ClientConsensusStatesAmino {
    /** client identifier */
    client_id: string;
    /** consensus states and their heights associated with the client */
    consensus_states: ConsensusStateWithHeightAmino[];
}
export interface ClientConsensusStatesAminoMsg {
    type: "cosmos-sdk/ClientConsensusStates";
    value: ClientConsensusStatesAmino;
}
/**
 * ClientConsensusStates defines all the stored consensus states for a given
 * client.
 */
export interface ClientConsensusStatesSDKType {
    client_id: string;
    consensus_states: ConsensusStateWithHeightSDKType[];
}
/**
 * ClientUpdateProposal is a governance proposal. If it passes, the substitute
 * client's latest consensus state is copied over to the subject client. The proposal
 * handler may fail if the subject and the substitute do not match in client and
 * chain parameters (with exception to latest height, frozen height, and chain-id).
 */
export interface ClientUpdateProposal {
    $typeUrl?: string;
    /** the title of the update proposal */
    title: string;
    /** the description of the proposal */
    description: string;
    /** the client identifier for the client to be updated if the proposal passes */
    subjectClientId: string;
    /**
     * the substitute client identifier for the client standing in for the subject
     * client
     */
    substituteClientId: string;
}
export interface ClientUpdateProposalProtoMsg {
    typeUrl: "/ibc.core.client.v1.ClientUpdateProposal";
    value: Uint8Array;
}
/**
 * ClientUpdateProposal is a governance proposal. If it passes, the substitute
 * client's latest consensus state is copied over to the subject client. The proposal
 * handler may fail if the subject and the substitute do not match in client and
 * chain parameters (with exception to latest height, frozen height, and chain-id).
 */
export interface ClientUpdateProposalAmino {
    /** the title of the update proposal */
    title: string;
    /** the description of the proposal */
    description: string;
    /** the client identifier for the client to be updated if the proposal passes */
    subject_client_id: string;
    /**
     * the substitute client identifier for the client standing in for the subject
     * client
     */
    substitute_client_id: string;
}
export interface ClientUpdateProposalAminoMsg {
    type: "cosmos-sdk/ClientUpdateProposal";
    value: ClientUpdateProposalAmino;
}
/**
 * ClientUpdateProposal is a governance proposal. If it passes, the substitute
 * client's latest consensus state is copied over to the subject client. The proposal
 * handler may fail if the subject and the substitute do not match in client and
 * chain parameters (with exception to latest height, frozen height, and chain-id).
 */
export interface ClientUpdateProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    subject_client_id: string;
    substitute_client_id: string;
}
/**
 * UpgradeProposal is a gov Content type for initiating an IBC breaking
 * upgrade.
 */
export interface UpgradeProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    plan?: Plan;
    /**
     * An UpgradedClientState must be provided to perform an IBC breaking upgrade.
     * This will make the chain commit to the correct upgraded (self) client state
     * before the upgrade occurs, so that connecting chains can verify that the
     * new upgraded client is valid by verifying a proof on the previous version
     * of the chain. This will allow IBC connections to persist smoothly across
     * planned chain upgrades
     */
    upgradedClientState?: Any;
}
export interface UpgradeProposalProtoMsg {
    typeUrl: "/ibc.core.client.v1.UpgradeProposal";
    value: Uint8Array;
}
/**
 * UpgradeProposal is a gov Content type for initiating an IBC breaking
 * upgrade.
 */
export interface UpgradeProposalAmino {
    title: string;
    description: string;
    plan?: PlanAmino;
    /**
     * An UpgradedClientState must be provided to perform an IBC breaking upgrade.
     * This will make the chain commit to the correct upgraded (self) client state
     * before the upgrade occurs, so that connecting chains can verify that the
     * new upgraded client is valid by verifying a proof on the previous version
     * of the chain. This will allow IBC connections to persist smoothly across
     * planned chain upgrades
     */
    upgraded_client_state?: AnyAmino;
}
export interface UpgradeProposalAminoMsg {
    type: "cosmos-sdk/UpgradeProposal";
    value: UpgradeProposalAmino;
}
/**
 * UpgradeProposal is a gov Content type for initiating an IBC breaking
 * upgrade.
 */
export interface UpgradeProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    plan?: PlanSDKType;
    upgraded_client_state?: AnySDKType;
}
/**
 * Height is a monotonically increasing data type
 * that can be compared against another Height for the purposes of updating and
 * freezing clients
 *
 * Normally the RevisionHeight is incremented at each height while keeping
 * RevisionNumber the same. However some consensus algorithms may choose to
 * reset the height in certain conditions e.g. hard forks, state-machine
 * breaking changes In these cases, the RevisionNumber is incremented so that
 * height continues to be monitonically increasing even as the RevisionHeight
 * gets reset
 */
export interface Height {
    /** the revision that the client is currently on */
    revisionNumber: Long;
    /** the height within the given revision */
    revisionHeight: Long;
}
export interface HeightProtoMsg {
    typeUrl: "/ibc.core.client.v1.Height";
    value: Uint8Array;
}
/**
 * Height is a monotonically increasing data type
 * that can be compared against another Height for the purposes of updating and
 * freezing clients
 *
 * Normally the RevisionHeight is incremented at each height while keeping
 * RevisionNumber the same. However some consensus algorithms may choose to
 * reset the height in certain conditions e.g. hard forks, state-machine
 * breaking changes In these cases, the RevisionNumber is incremented so that
 * height continues to be monitonically increasing even as the RevisionHeight
 * gets reset
 */
export interface HeightAmino {
    /** the revision that the client is currently on */
    revision_number: string;
    /** the height within the given revision */
    revision_height: string;
}
export interface HeightAminoMsg {
    type: "cosmos-sdk/Height";
    value: HeightAmino;
}
/**
 * Height is a monotonically increasing data type
 * that can be compared against another Height for the purposes of updating and
 * freezing clients
 *
 * Normally the RevisionHeight is incremented at each height while keeping
 * RevisionNumber the same. However some consensus algorithms may choose to
 * reset the height in certain conditions e.g. hard forks, state-machine
 * breaking changes In these cases, the RevisionNumber is incremented so that
 * height continues to be monitonically increasing even as the RevisionHeight
 * gets reset
 */
export interface HeightSDKType {
    revision_number: Long;
    revision_height: Long;
}
/** Params defines the set of IBC light client parameters. */
export interface Params {
    /**
     * allowed_clients defines the list of allowed client state types which can be created
     * and interacted with. If a client type is removed from the allowed clients list, usage
     * of this client will be disabled until it is added again to the list.
     */
    allowedClients: string[];
}
export interface ParamsProtoMsg {
    typeUrl: "/ibc.core.client.v1.Params";
    value: Uint8Array;
}
/** Params defines the set of IBC light client parameters. */
export interface ParamsAmino {
    /**
     * allowed_clients defines the list of allowed client state types which can be created
     * and interacted with. If a client type is removed from the allowed clients list, usage
     * of this client will be disabled until it is added again to the list.
     */
    allowed_clients: string[];
}
export interface ParamsAminoMsg {
    type: "cosmos-sdk/Params";
    value: ParamsAmino;
}
/** Params defines the set of IBC light client parameters. */
export interface ParamsSDKType {
    allowed_clients: string[];
}
export declare const IdentifiedClientState: {
    typeUrl: string;
    encode(message: IdentifiedClientState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IdentifiedClientState;
    fromPartial(object: Partial<IdentifiedClientState>): IdentifiedClientState;
    fromAmino(object: IdentifiedClientStateAmino): IdentifiedClientState;
    toAmino(message: IdentifiedClientState): IdentifiedClientStateAmino;
    fromAminoMsg(object: IdentifiedClientStateAminoMsg): IdentifiedClientState;
    toAminoMsg(message: IdentifiedClientState): IdentifiedClientStateAminoMsg;
    fromProtoMsg(message: IdentifiedClientStateProtoMsg): IdentifiedClientState;
    toProto(message: IdentifiedClientState): Uint8Array;
    toProtoMsg(message: IdentifiedClientState): IdentifiedClientStateProtoMsg;
};
export declare const ConsensusStateWithHeight: {
    typeUrl: string;
    encode(message: ConsensusStateWithHeight, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusStateWithHeight;
    fromPartial(object: Partial<ConsensusStateWithHeight>): ConsensusStateWithHeight;
    fromAmino(object: ConsensusStateWithHeightAmino): ConsensusStateWithHeight;
    toAmino(message: ConsensusStateWithHeight): ConsensusStateWithHeightAmino;
    fromAminoMsg(object: ConsensusStateWithHeightAminoMsg): ConsensusStateWithHeight;
    toAminoMsg(message: ConsensusStateWithHeight): ConsensusStateWithHeightAminoMsg;
    fromProtoMsg(message: ConsensusStateWithHeightProtoMsg): ConsensusStateWithHeight;
    toProto(message: ConsensusStateWithHeight): Uint8Array;
    toProtoMsg(message: ConsensusStateWithHeight): ConsensusStateWithHeightProtoMsg;
};
export declare const ClientConsensusStates: {
    typeUrl: string;
    encode(message: ClientConsensusStates, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClientConsensusStates;
    fromPartial(object: Partial<ClientConsensusStates>): ClientConsensusStates;
    fromAmino(object: ClientConsensusStatesAmino): ClientConsensusStates;
    toAmino(message: ClientConsensusStates): ClientConsensusStatesAmino;
    fromAminoMsg(object: ClientConsensusStatesAminoMsg): ClientConsensusStates;
    toAminoMsg(message: ClientConsensusStates): ClientConsensusStatesAminoMsg;
    fromProtoMsg(message: ClientConsensusStatesProtoMsg): ClientConsensusStates;
    toProto(message: ClientConsensusStates): Uint8Array;
    toProtoMsg(message: ClientConsensusStates): ClientConsensusStatesProtoMsg;
};
export declare const ClientUpdateProposal: {
    typeUrl: string;
    encode(message: ClientUpdateProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClientUpdateProposal;
    fromPartial(object: Partial<ClientUpdateProposal>): ClientUpdateProposal;
    fromAmino(object: ClientUpdateProposalAmino): ClientUpdateProposal;
    toAmino(message: ClientUpdateProposal): ClientUpdateProposalAmino;
    fromAminoMsg(object: ClientUpdateProposalAminoMsg): ClientUpdateProposal;
    toAminoMsg(message: ClientUpdateProposal): ClientUpdateProposalAminoMsg;
    fromProtoMsg(message: ClientUpdateProposalProtoMsg): ClientUpdateProposal;
    toProto(message: ClientUpdateProposal): Uint8Array;
    toProtoMsg(message: ClientUpdateProposal): ClientUpdateProposalProtoMsg;
};
export declare const UpgradeProposal: {
    typeUrl: string;
    encode(message: UpgradeProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpgradeProposal;
    fromPartial(object: Partial<UpgradeProposal>): UpgradeProposal;
    fromAmino(object: UpgradeProposalAmino): UpgradeProposal;
    toAmino(message: UpgradeProposal): UpgradeProposalAmino;
    fromAminoMsg(object: UpgradeProposalAminoMsg): UpgradeProposal;
    toAminoMsg(message: UpgradeProposal): UpgradeProposalAminoMsg;
    fromProtoMsg(message: UpgradeProposalProtoMsg): UpgradeProposal;
    toProto(message: UpgradeProposal): Uint8Array;
    toProtoMsg(message: UpgradeProposal): UpgradeProposalProtoMsg;
};
export declare const Height: {
    typeUrl: string;
    encode(message: Height, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Height;
    fromPartial(object: Partial<Height>): Height;
    fromAmino(object: HeightAmino): Height;
    toAmino(message: Height): HeightAmino;
    fromAminoMsg(object: HeightAminoMsg): Height;
    toAminoMsg(message: Height): HeightAminoMsg;
    fromProtoMsg(message: HeightProtoMsg): Height;
    toProto(message: Height): Uint8Array;
    toProtoMsg(message: Height): HeightProtoMsg;
};
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    toAminoMsg(message: Params): ParamsAminoMsg;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
