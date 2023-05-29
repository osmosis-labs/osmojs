import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * ClientState defines a solo machine client that tracks the current consensus
 * state and if the client is frozen.
 */
export interface ClientState {
    /** latest sequence of the client state */
    sequence: Long;
    /** frozen sequence of the solo machine */
    isFrozen: boolean;
    consensusState?: ConsensusState;
}
export interface ClientStateProtoMsg {
    typeUrl: "/ibc.lightclients.solomachine.v3.ClientState";
    value: Uint8Array;
}
/**
 * ClientState defines a solo machine client that tracks the current consensus
 * state and if the client is frozen.
 */
export interface ClientStateAmino {
    /** latest sequence of the client state */
    sequence: string;
    /** frozen sequence of the solo machine */
    is_frozen: boolean;
    consensus_state?: ConsensusStateAmino;
}
export interface ClientStateAminoMsg {
    type: "cosmos-sdk/ClientState";
    value: ClientStateAmino;
}
/**
 * ClientState defines a solo machine client that tracks the current consensus
 * state and if the client is frozen.
 */
export interface ClientStateSDKType {
    sequence: Long;
    is_frozen: boolean;
    consensus_state?: ConsensusStateSDKType;
}
/**
 * ConsensusState defines a solo machine consensus state. The sequence of a
 * consensus state is contained in the "height" key used in storing the
 * consensus state.
 */
export interface ConsensusState {
    /** public key of the solo machine */
    publicKey?: Any;
    /**
     * diversifier allows the same public key to be re-used across different solo
     * machine clients (potentially on different chains) without being considered
     * misbehaviour.
     */
    diversifier: string;
    timestamp: Long;
}
export interface ConsensusStateProtoMsg {
    typeUrl: "/ibc.lightclients.solomachine.v3.ConsensusState";
    value: Uint8Array;
}
/**
 * ConsensusState defines a solo machine consensus state. The sequence of a
 * consensus state is contained in the "height" key used in storing the
 * consensus state.
 */
export interface ConsensusStateAmino {
    /** public key of the solo machine */
    public_key?: AnyAmino;
    /**
     * diversifier allows the same public key to be re-used across different solo
     * machine clients (potentially on different chains) without being considered
     * misbehaviour.
     */
    diversifier: string;
    timestamp: string;
}
export interface ConsensusStateAminoMsg {
    type: "cosmos-sdk/ConsensusState";
    value: ConsensusStateAmino;
}
/**
 * ConsensusState defines a solo machine consensus state. The sequence of a
 * consensus state is contained in the "height" key used in storing the
 * consensus state.
 */
export interface ConsensusStateSDKType {
    public_key?: AnySDKType;
    diversifier: string;
    timestamp: Long;
}
/** Header defines a solo machine consensus header */
export interface Header {
    timestamp: Long;
    signature: Uint8Array;
    newPublicKey?: Any;
    newDiversifier: string;
}
export interface HeaderProtoMsg {
    typeUrl: "/ibc.lightclients.solomachine.v3.Header";
    value: Uint8Array;
}
/** Header defines a solo machine consensus header */
export interface HeaderAmino {
    timestamp: string;
    signature: Uint8Array;
    new_public_key?: AnyAmino;
    new_diversifier: string;
}
export interface HeaderAminoMsg {
    type: "cosmos-sdk/Header";
    value: HeaderAmino;
}
/** Header defines a solo machine consensus header */
export interface HeaderSDKType {
    timestamp: Long;
    signature: Uint8Array;
    new_public_key?: AnySDKType;
    new_diversifier: string;
}
/**
 * Misbehaviour defines misbehaviour for a solo machine which consists
 * of a sequence and two signatures over different messages at that sequence.
 */
export interface Misbehaviour {
    sequence: Long;
    signatureOne?: SignatureAndData;
    signatureTwo?: SignatureAndData;
}
export interface MisbehaviourProtoMsg {
    typeUrl: "/ibc.lightclients.solomachine.v3.Misbehaviour";
    value: Uint8Array;
}
/**
 * Misbehaviour defines misbehaviour for a solo machine which consists
 * of a sequence and two signatures over different messages at that sequence.
 */
export interface MisbehaviourAmino {
    sequence: string;
    signature_one?: SignatureAndDataAmino;
    signature_two?: SignatureAndDataAmino;
}
export interface MisbehaviourAminoMsg {
    type: "cosmos-sdk/Misbehaviour";
    value: MisbehaviourAmino;
}
/**
 * Misbehaviour defines misbehaviour for a solo machine which consists
 * of a sequence and two signatures over different messages at that sequence.
 */
export interface MisbehaviourSDKType {
    sequence: Long;
    signature_one?: SignatureAndDataSDKType;
    signature_two?: SignatureAndDataSDKType;
}
/**
 * SignatureAndData contains a signature and the data signed over to create that
 * signature.
 */
export interface SignatureAndData {
    signature: Uint8Array;
    path: Uint8Array;
    data: Uint8Array;
    timestamp: Long;
}
export interface SignatureAndDataProtoMsg {
    typeUrl: "/ibc.lightclients.solomachine.v3.SignatureAndData";
    value: Uint8Array;
}
/**
 * SignatureAndData contains a signature and the data signed over to create that
 * signature.
 */
export interface SignatureAndDataAmino {
    signature: Uint8Array;
    path: Uint8Array;
    data: Uint8Array;
    timestamp: string;
}
export interface SignatureAndDataAminoMsg {
    type: "cosmos-sdk/SignatureAndData";
    value: SignatureAndDataAmino;
}
/**
 * SignatureAndData contains a signature and the data signed over to create that
 * signature.
 */
export interface SignatureAndDataSDKType {
    signature: Uint8Array;
    path: Uint8Array;
    data: Uint8Array;
    timestamp: Long;
}
/**
 * TimestampedSignatureData contains the signature data and the timestamp of the
 * signature.
 */
export interface TimestampedSignatureData {
    signatureData: Uint8Array;
    timestamp: Long;
}
export interface TimestampedSignatureDataProtoMsg {
    typeUrl: "/ibc.lightclients.solomachine.v3.TimestampedSignatureData";
    value: Uint8Array;
}
/**
 * TimestampedSignatureData contains the signature data and the timestamp of the
 * signature.
 */
export interface TimestampedSignatureDataAmino {
    signature_data: Uint8Array;
    timestamp: string;
}
export interface TimestampedSignatureDataAminoMsg {
    type: "cosmos-sdk/TimestampedSignatureData";
    value: TimestampedSignatureDataAmino;
}
/**
 * TimestampedSignatureData contains the signature data and the timestamp of the
 * signature.
 */
export interface TimestampedSignatureDataSDKType {
    signature_data: Uint8Array;
    timestamp: Long;
}
/** SignBytes defines the signed bytes used for signature verification. */
export interface SignBytes {
    /** the sequence number */
    sequence: Long;
    /** the proof timestamp */
    timestamp: Long;
    /** the public key diversifier */
    diversifier: string;
    /** the standardised path bytes */
    path: Uint8Array;
    /** the marshaled data bytes */
    data: Uint8Array;
}
export interface SignBytesProtoMsg {
    typeUrl: "/ibc.lightclients.solomachine.v3.SignBytes";
    value: Uint8Array;
}
/** SignBytes defines the signed bytes used for signature verification. */
export interface SignBytesAmino {
    /** the sequence number */
    sequence: string;
    /** the proof timestamp */
    timestamp: string;
    /** the public key diversifier */
    diversifier: string;
    /** the standardised path bytes */
    path: Uint8Array;
    /** the marshaled data bytes */
    data: Uint8Array;
}
export interface SignBytesAminoMsg {
    type: "cosmos-sdk/SignBytes";
    value: SignBytesAmino;
}
/** SignBytes defines the signed bytes used for signature verification. */
export interface SignBytesSDKType {
    sequence: Long;
    timestamp: Long;
    diversifier: string;
    path: Uint8Array;
    data: Uint8Array;
}
/** HeaderData returns the SignBytes data for update verification. */
export interface HeaderData {
    /** header public key */
    newPubKey?: Any;
    /** header diversifier */
    newDiversifier: string;
}
export interface HeaderDataProtoMsg {
    typeUrl: "/ibc.lightclients.solomachine.v3.HeaderData";
    value: Uint8Array;
}
/** HeaderData returns the SignBytes data for update verification. */
export interface HeaderDataAmino {
    /** header public key */
    new_pub_key?: AnyAmino;
    /** header diversifier */
    new_diversifier: string;
}
export interface HeaderDataAminoMsg {
    type: "cosmos-sdk/HeaderData";
    value: HeaderDataAmino;
}
/** HeaderData returns the SignBytes data for update verification. */
export interface HeaderDataSDKType {
    new_pub_key?: AnySDKType;
    new_diversifier: string;
}
export declare const ClientState: {
    typeUrl: string;
    encode(message: ClientState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClientState;
    fromPartial(object: Partial<ClientState>): ClientState;
    fromAmino(object: ClientStateAmino): ClientState;
    toAmino(message: ClientState): ClientStateAmino;
    fromAminoMsg(object: ClientStateAminoMsg): ClientState;
    toAminoMsg(message: ClientState): ClientStateAminoMsg;
    fromProtoMsg(message: ClientStateProtoMsg): ClientState;
    toProto(message: ClientState): Uint8Array;
    toProtoMsg(message: ClientState): ClientStateProtoMsg;
};
export declare const ConsensusState: {
    typeUrl: string;
    encode(message: ConsensusState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusState;
    fromPartial(object: Partial<ConsensusState>): ConsensusState;
    fromAmino(object: ConsensusStateAmino): ConsensusState;
    toAmino(message: ConsensusState): ConsensusStateAmino;
    fromAminoMsg(object: ConsensusStateAminoMsg): ConsensusState;
    toAminoMsg(message: ConsensusState): ConsensusStateAminoMsg;
    fromProtoMsg(message: ConsensusStateProtoMsg): ConsensusState;
    toProto(message: ConsensusState): Uint8Array;
    toProtoMsg(message: ConsensusState): ConsensusStateProtoMsg;
};
export declare const Header: {
    typeUrl: string;
    encode(message: Header, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Header;
    fromPartial(object: Partial<Header>): Header;
    fromAmino(object: HeaderAmino): Header;
    toAmino(message: Header): HeaderAmino;
    fromAminoMsg(object: HeaderAminoMsg): Header;
    toAminoMsg(message: Header): HeaderAminoMsg;
    fromProtoMsg(message: HeaderProtoMsg): Header;
    toProto(message: Header): Uint8Array;
    toProtoMsg(message: Header): HeaderProtoMsg;
};
export declare const Misbehaviour: {
    typeUrl: string;
    encode(message: Misbehaviour, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Misbehaviour;
    fromPartial(object: Partial<Misbehaviour>): Misbehaviour;
    fromAmino(object: MisbehaviourAmino): Misbehaviour;
    toAmino(message: Misbehaviour): MisbehaviourAmino;
    fromAminoMsg(object: MisbehaviourAminoMsg): Misbehaviour;
    toAminoMsg(message: Misbehaviour): MisbehaviourAminoMsg;
    fromProtoMsg(message: MisbehaviourProtoMsg): Misbehaviour;
    toProto(message: Misbehaviour): Uint8Array;
    toProtoMsg(message: Misbehaviour): MisbehaviourProtoMsg;
};
export declare const SignatureAndData: {
    typeUrl: string;
    encode(message: SignatureAndData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignatureAndData;
    fromPartial(object: Partial<SignatureAndData>): SignatureAndData;
    fromAmino(object: SignatureAndDataAmino): SignatureAndData;
    toAmino(message: SignatureAndData): SignatureAndDataAmino;
    fromAminoMsg(object: SignatureAndDataAminoMsg): SignatureAndData;
    toAminoMsg(message: SignatureAndData): SignatureAndDataAminoMsg;
    fromProtoMsg(message: SignatureAndDataProtoMsg): SignatureAndData;
    toProto(message: SignatureAndData): Uint8Array;
    toProtoMsg(message: SignatureAndData): SignatureAndDataProtoMsg;
};
export declare const TimestampedSignatureData: {
    typeUrl: string;
    encode(message: TimestampedSignatureData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TimestampedSignatureData;
    fromPartial(object: Partial<TimestampedSignatureData>): TimestampedSignatureData;
    fromAmino(object: TimestampedSignatureDataAmino): TimestampedSignatureData;
    toAmino(message: TimestampedSignatureData): TimestampedSignatureDataAmino;
    fromAminoMsg(object: TimestampedSignatureDataAminoMsg): TimestampedSignatureData;
    toAminoMsg(message: TimestampedSignatureData): TimestampedSignatureDataAminoMsg;
    fromProtoMsg(message: TimestampedSignatureDataProtoMsg): TimestampedSignatureData;
    toProto(message: TimestampedSignatureData): Uint8Array;
    toProtoMsg(message: TimestampedSignatureData): TimestampedSignatureDataProtoMsg;
};
export declare const SignBytes: {
    typeUrl: string;
    encode(message: SignBytes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignBytes;
    fromPartial(object: Partial<SignBytes>): SignBytes;
    fromAmino(object: SignBytesAmino): SignBytes;
    toAmino(message: SignBytes): SignBytesAmino;
    fromAminoMsg(object: SignBytesAminoMsg): SignBytes;
    toAminoMsg(message: SignBytes): SignBytesAminoMsg;
    fromProtoMsg(message: SignBytesProtoMsg): SignBytes;
    toProto(message: SignBytes): Uint8Array;
    toProtoMsg(message: SignBytes): SignBytesProtoMsg;
};
export declare const HeaderData: {
    typeUrl: string;
    encode(message: HeaderData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HeaderData;
    fromPartial(object: Partial<HeaderData>): HeaderData;
    fromAmino(object: HeaderDataAmino): HeaderData;
    toAmino(message: HeaderData): HeaderDataAmino;
    fromAminoMsg(object: HeaderDataAminoMsg): HeaderData;
    toAminoMsg(message: HeaderData): HeaderDataAminoMsg;
    fromProtoMsg(message: HeaderDataProtoMsg): HeaderData;
    toProto(message: HeaderData): Uint8Array;
    toProtoMsg(message: HeaderData): HeaderDataProtoMsg;
};
