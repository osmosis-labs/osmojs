import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { ConnectionEnd, ConnectionEndSDKType } from "../../../core/connection/v1/connection";
import { Channel, ChannelSDKType } from "../../../core/channel/v1/channel";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial, isSet } from "@osmonauts/helpers";
/**
 * DataType defines the type of solo machine proof being created. This is done
 * to preserve uniqueness of different data sign byte encodings.
 */

export enum DataType {
  /** DATA_TYPE_UNINITIALIZED_UNSPECIFIED - Default State */
  DATA_TYPE_UNINITIALIZED_UNSPECIFIED = 0,

  /** DATA_TYPE_CLIENT_STATE - Data type for client state verification */
  DATA_TYPE_CLIENT_STATE = 1,

  /** DATA_TYPE_CONSENSUS_STATE - Data type for consensus state verification */
  DATA_TYPE_CONSENSUS_STATE = 2,

  /** DATA_TYPE_CONNECTION_STATE - Data type for connection state verification */
  DATA_TYPE_CONNECTION_STATE = 3,

  /** DATA_TYPE_CHANNEL_STATE - Data type for channel state verification */
  DATA_TYPE_CHANNEL_STATE = 4,

  /** DATA_TYPE_PACKET_COMMITMENT - Data type for packet commitment verification */
  DATA_TYPE_PACKET_COMMITMENT = 5,

  /** DATA_TYPE_PACKET_ACKNOWLEDGEMENT - Data type for packet acknowledgement verification */
  DATA_TYPE_PACKET_ACKNOWLEDGEMENT = 6,

  /** DATA_TYPE_PACKET_RECEIPT_ABSENCE - Data type for packet receipt absence verification */
  DATA_TYPE_PACKET_RECEIPT_ABSENCE = 7,

  /** DATA_TYPE_NEXT_SEQUENCE_RECV - Data type for next sequence recv verification */
  DATA_TYPE_NEXT_SEQUENCE_RECV = 8,

  /** DATA_TYPE_HEADER - Data type for header verification */
  DATA_TYPE_HEADER = 9,
  UNRECOGNIZED = -1,
}
/**
 * DataType defines the type of solo machine proof being created. This is done
 * to preserve uniqueness of different data sign byte encodings.
 */

export enum DataTypeSDKType {
  /** DATA_TYPE_UNINITIALIZED_UNSPECIFIED - Default State */
  DATA_TYPE_UNINITIALIZED_UNSPECIFIED = 0,

  /** DATA_TYPE_CLIENT_STATE - Data type for client state verification */
  DATA_TYPE_CLIENT_STATE = 1,

  /** DATA_TYPE_CONSENSUS_STATE - Data type for consensus state verification */
  DATA_TYPE_CONSENSUS_STATE = 2,

  /** DATA_TYPE_CONNECTION_STATE - Data type for connection state verification */
  DATA_TYPE_CONNECTION_STATE = 3,

  /** DATA_TYPE_CHANNEL_STATE - Data type for channel state verification */
  DATA_TYPE_CHANNEL_STATE = 4,

  /** DATA_TYPE_PACKET_COMMITMENT - Data type for packet commitment verification */
  DATA_TYPE_PACKET_COMMITMENT = 5,

  /** DATA_TYPE_PACKET_ACKNOWLEDGEMENT - Data type for packet acknowledgement verification */
  DATA_TYPE_PACKET_ACKNOWLEDGEMENT = 6,

  /** DATA_TYPE_PACKET_RECEIPT_ABSENCE - Data type for packet receipt absence verification */
  DATA_TYPE_PACKET_RECEIPT_ABSENCE = 7,

  /** DATA_TYPE_NEXT_SEQUENCE_RECV - Data type for next sequence recv verification */
  DATA_TYPE_NEXT_SEQUENCE_RECV = 8,

  /** DATA_TYPE_HEADER - Data type for header verification */
  DATA_TYPE_HEADER = 9,
  UNRECOGNIZED = -1,
}
export function dataTypeFromJSON(object: any): DataType {
  switch (object) {
    case 0:
    case "DATA_TYPE_UNINITIALIZED_UNSPECIFIED":
      return DataType.DATA_TYPE_UNINITIALIZED_UNSPECIFIED;

    case 1:
    case "DATA_TYPE_CLIENT_STATE":
      return DataType.DATA_TYPE_CLIENT_STATE;

    case 2:
    case "DATA_TYPE_CONSENSUS_STATE":
      return DataType.DATA_TYPE_CONSENSUS_STATE;

    case 3:
    case "DATA_TYPE_CONNECTION_STATE":
      return DataType.DATA_TYPE_CONNECTION_STATE;

    case 4:
    case "DATA_TYPE_CHANNEL_STATE":
      return DataType.DATA_TYPE_CHANNEL_STATE;

    case 5:
    case "DATA_TYPE_PACKET_COMMITMENT":
      return DataType.DATA_TYPE_PACKET_COMMITMENT;

    case 6:
    case "DATA_TYPE_PACKET_ACKNOWLEDGEMENT":
      return DataType.DATA_TYPE_PACKET_ACKNOWLEDGEMENT;

    case 7:
    case "DATA_TYPE_PACKET_RECEIPT_ABSENCE":
      return DataType.DATA_TYPE_PACKET_RECEIPT_ABSENCE;

    case 8:
    case "DATA_TYPE_NEXT_SEQUENCE_RECV":
      return DataType.DATA_TYPE_NEXT_SEQUENCE_RECV;

    case 9:
    case "DATA_TYPE_HEADER":
      return DataType.DATA_TYPE_HEADER;

    case -1:
    case "UNRECOGNIZED":
    default:
      return DataType.UNRECOGNIZED;
  }
}
export function dataTypeToJSON(object: DataType): string {
  switch (object) {
    case DataType.DATA_TYPE_UNINITIALIZED_UNSPECIFIED:
      return "DATA_TYPE_UNINITIALIZED_UNSPECIFIED";

    case DataType.DATA_TYPE_CLIENT_STATE:
      return "DATA_TYPE_CLIENT_STATE";

    case DataType.DATA_TYPE_CONSENSUS_STATE:
      return "DATA_TYPE_CONSENSUS_STATE";

    case DataType.DATA_TYPE_CONNECTION_STATE:
      return "DATA_TYPE_CONNECTION_STATE";

    case DataType.DATA_TYPE_CHANNEL_STATE:
      return "DATA_TYPE_CHANNEL_STATE";

    case DataType.DATA_TYPE_PACKET_COMMITMENT:
      return "DATA_TYPE_PACKET_COMMITMENT";

    case DataType.DATA_TYPE_PACKET_ACKNOWLEDGEMENT:
      return "DATA_TYPE_PACKET_ACKNOWLEDGEMENT";

    case DataType.DATA_TYPE_PACKET_RECEIPT_ABSENCE:
      return "DATA_TYPE_PACKET_RECEIPT_ABSENCE";

    case DataType.DATA_TYPE_NEXT_SEQUENCE_RECV:
      return "DATA_TYPE_NEXT_SEQUENCE_RECV";

    case DataType.DATA_TYPE_HEADER:
      return "DATA_TYPE_HEADER";

    default:
      return "UNKNOWN";
  }
}
/**
 * ClientState defines a solo machine client that tracks the current consensus
 * state and if the client is frozen.
 */

export interface ClientState {
  /** latest sequence of the client state */
  sequence: Long;
  /** frozen sequence of the solo machine */

  frozenSequence: Long;
  consensusState: ConsensusState;
  /**
   * when set to true, will allow governance to update a solo machine client.
   * The client will be unfrozen if it is frozen.
   */

  allowUpdateAfterProposal: boolean;
}
/**
 * ClientState defines a solo machine client that tracks the current consensus
 * state and if the client is frozen.
 */

export interface ClientStateSDKType {
  /** latest sequence of the client state */
  sequence: Long;
  /** frozen sequence of the solo machine */

  frozen_sequence: Long;
  consensus_state: ConsensusStateSDKType;
  /**
   * when set to true, will allow governance to update a solo machine client.
   * The client will be unfrozen if it is frozen.
   */

  allow_update_after_proposal: boolean;
}
/**
 * ConsensusState defines a solo machine consensus state. The sequence of a
 * consensus state is contained in the "height" key used in storing the
 * consensus state.
 */

export interface ConsensusState {
  /** public key of the solo machine */
  publicKey: Any;
  /**
   * diversifier allows the same public key to be re-used across different solo
   * machine clients (potentially on different chains) without being considered
   * misbehaviour.
   */

  diversifier: string;
  timestamp: Long;
}
/**
 * ConsensusState defines a solo machine consensus state. The sequence of a
 * consensus state is contained in the "height" key used in storing the
 * consensus state.
 */

export interface ConsensusStateSDKType {
  /** public key of the solo machine */
  public_key: AnySDKType;
  /**
   * diversifier allows the same public key to be re-used across different solo
   * machine clients (potentially on different chains) without being considered
   * misbehaviour.
   */

  diversifier: string;
  timestamp: Long;
}
/** Header defines a solo machine consensus header */

export interface Header {
  /** sequence to update solo machine public key at */
  sequence: Long;
  timestamp: Long;
  signature: Uint8Array;
  newPublicKey: Any;
  newDiversifier: string;
}
/** Header defines a solo machine consensus header */

export interface HeaderSDKType {
  /** sequence to update solo machine public key at */
  sequence: Long;
  timestamp: Long;
  signature: Uint8Array;
  new_public_key: AnySDKType;
  new_diversifier: string;
}
/**
 * Misbehaviour defines misbehaviour for a solo machine which consists
 * of a sequence and two signatures over different messages at that sequence.
 */

export interface Misbehaviour {
  clientId: string;
  sequence: Long;
  signatureOne: SignatureAndData;
  signatureTwo: SignatureAndData;
}
/**
 * Misbehaviour defines misbehaviour for a solo machine which consists
 * of a sequence and two signatures over different messages at that sequence.
 */

export interface MisbehaviourSDKType {
  client_id: string;
  sequence: Long;
  signature_one: SignatureAndDataSDKType;
  signature_two: SignatureAndDataSDKType;
}
/**
 * SignatureAndData contains a signature and the data signed over to create that
 * signature.
 */

export interface SignatureAndData {
  signature: Uint8Array;
  dataType: DataType;
  data: Uint8Array;
  timestamp: Long;
}
/**
 * SignatureAndData contains a signature and the data signed over to create that
 * signature.
 */

export interface SignatureAndDataSDKType {
  signature: Uint8Array;
  data_type: DataTypeSDKType;
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
  sequence: Long;
  timestamp: Long;
  diversifier: string;
  /** type of the data used */

  dataType: DataType;
  /** marshaled data */

  data: Uint8Array;
}
/** SignBytes defines the signed bytes used for signature verification. */

export interface SignBytesSDKType {
  sequence: Long;
  timestamp: Long;
  diversifier: string;
  /** type of the data used */

  data_type: DataTypeSDKType;
  /** marshaled data */

  data: Uint8Array;
}
/** HeaderData returns the SignBytes data for update verification. */

export interface HeaderData {
  /** header public key */
  newPubKey: Any;
  /** header diversifier */

  newDiversifier: string;
}
/** HeaderData returns the SignBytes data for update verification. */

export interface HeaderDataSDKType {
  /** header public key */
  new_pub_key: AnySDKType;
  /** header diversifier */

  new_diversifier: string;
}
/** ClientStateData returns the SignBytes data for client state verification. */

export interface ClientStateData {
  path: Uint8Array;
  clientState: Any;
}
/** ClientStateData returns the SignBytes data for client state verification. */

export interface ClientStateDataSDKType {
  path: Uint8Array;
  client_state: AnySDKType;
}
/**
 * ConsensusStateData returns the SignBytes data for consensus state
 * verification.
 */

export interface ConsensusStateData {
  path: Uint8Array;
  consensusState: Any;
}
/**
 * ConsensusStateData returns the SignBytes data for consensus state
 * verification.
 */

export interface ConsensusStateDataSDKType {
  path: Uint8Array;
  consensus_state: AnySDKType;
}
/**
 * ConnectionStateData returns the SignBytes data for connection state
 * verification.
 */

export interface ConnectionStateData {
  path: Uint8Array;
  connection: ConnectionEnd;
}
/**
 * ConnectionStateData returns the SignBytes data for connection state
 * verification.
 */

export interface ConnectionStateDataSDKType {
  path: Uint8Array;
  connection: ConnectionEndSDKType;
}
/**
 * ChannelStateData returns the SignBytes data for channel state
 * verification.
 */

export interface ChannelStateData {
  path: Uint8Array;
  channel: Channel;
}
/**
 * ChannelStateData returns the SignBytes data for channel state
 * verification.
 */

export interface ChannelStateDataSDKType {
  path: Uint8Array;
  channel: ChannelSDKType;
}
/**
 * PacketCommitmentData returns the SignBytes data for packet commitment
 * verification.
 */

export interface PacketCommitmentData {
  path: Uint8Array;
  commitment: Uint8Array;
}
/**
 * PacketCommitmentData returns the SignBytes data for packet commitment
 * verification.
 */

export interface PacketCommitmentDataSDKType {
  path: Uint8Array;
  commitment: Uint8Array;
}
/**
 * PacketAcknowledgementData returns the SignBytes data for acknowledgement
 * verification.
 */

export interface PacketAcknowledgementData {
  path: Uint8Array;
  acknowledgement: Uint8Array;
}
/**
 * PacketAcknowledgementData returns the SignBytes data for acknowledgement
 * verification.
 */

export interface PacketAcknowledgementDataSDKType {
  path: Uint8Array;
  acknowledgement: Uint8Array;
}
/**
 * PacketReceiptAbsenceData returns the SignBytes data for
 * packet receipt absence verification.
 */

export interface PacketReceiptAbsenceData {
  path: Uint8Array;
}
/**
 * PacketReceiptAbsenceData returns the SignBytes data for
 * packet receipt absence verification.
 */

export interface PacketReceiptAbsenceDataSDKType {
  path: Uint8Array;
}
/**
 * NextSequenceRecvData returns the SignBytes data for verification of the next
 * sequence to be received.
 */

export interface NextSequenceRecvData {
  path: Uint8Array;
  nextSeqRecv: Long;
}
/**
 * NextSequenceRecvData returns the SignBytes data for verification of the next
 * sequence to be received.
 */

export interface NextSequenceRecvDataSDKType {
  path: Uint8Array;
  next_seq_recv: Long;
}

function createBaseClientState(): ClientState {
  return {
    sequence: Long.UZERO,
    frozenSequence: Long.UZERO,
    consensusState: undefined,
    allowUpdateAfterProposal: false
  };
}

export const ClientState = {
  encode(message: ClientState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.sequence.isZero()) {
      writer.uint32(8).uint64(message.sequence);
    }

    if (!message.frozenSequence.isZero()) {
      writer.uint32(16).uint64(message.frozenSequence);
    }

    if (message.consensusState !== undefined) {
      ConsensusState.encode(message.consensusState, writer.uint32(26).fork()).ldelim();
    }

    if (message.allowUpdateAfterProposal === true) {
      writer.uint32(32).bool(message.allowUpdateAfterProposal);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sequence = (reader.uint64() as Long);
          break;

        case 2:
          message.frozenSequence = (reader.uint64() as Long);
          break;

        case 3:
          message.consensusState = ConsensusState.decode(reader, reader.uint32());
          break;

        case 4:
          message.allowUpdateAfterProposal = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ClientState>): ClientState {
    const message = createBaseClientState();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.frozenSequence = object.frozenSequence !== undefined && object.frozenSequence !== null ? Long.fromValue(object.frozenSequence) : Long.UZERO;
    message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? ConsensusState.fromPartial(object.consensusState) : undefined;
    message.allowUpdateAfterProposal = object.allowUpdateAfterProposal ?? false;
    return message;
  },

  fromSDK(object: ClientStateSDKType): ClientState {
    return {
      sequence: isSet(object.sequence) ? object.sequence : undefined,
      frozenSequence: isSet(object.frozen_sequence) ? object.frozen_sequence : undefined,
      consensusState: isSet(object.consensus_state) ? ConsensusState.fromSDK(object.consensus_state) : undefined,
      allowUpdateAfterProposal: isSet(object.allow_update_after_proposal) ? object.allow_update_after_proposal : undefined
    };
  },

  toSDK(message: ClientState): ClientStateSDKType {
    const obj: any = {};
    message.sequence !== undefined && (obj.sequence = message.sequence);
    message.frozenSequence !== undefined && (obj.frozen_sequence = message.frozenSequence);
    message.consensusState !== undefined && (obj.consensus_state = message.consensusState ? ConsensusState.toSDK(message.consensusState) : undefined);
    message.allowUpdateAfterProposal !== undefined && (obj.allow_update_after_proposal = message.allowUpdateAfterProposal);
    return obj;
  }

};

function createBaseConsensusState(): ConsensusState {
  return {
    publicKey: undefined,
    diversifier: "",
    timestamp: Long.UZERO
  };
}

export const ConsensusState = {
  encode(message: ConsensusState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publicKey !== undefined) {
      Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
    }

    if (message.diversifier !== "") {
      writer.uint32(18).string(message.diversifier);
    }

    if (!message.timestamp.isZero()) {
      writer.uint32(24).uint64(message.timestamp);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.publicKey = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.diversifier = reader.string();
          break;

        case 3:
          message.timestamp = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ConsensusState>): ConsensusState {
    const message = createBaseConsensusState();
    message.publicKey = object.publicKey !== undefined && object.publicKey !== null ? Any.fromPartial(object.publicKey) : undefined;
    message.diversifier = object.diversifier ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
    return message;
  },

  fromSDK(object: ConsensusStateSDKType): ConsensusState {
    return {
      publicKey: isSet(object.public_key) ? Any.fromSDK(object.public_key) : undefined,
      diversifier: isSet(object.diversifier) ? object.diversifier : undefined,
      timestamp: isSet(object.timestamp) ? object.timestamp : undefined
    };
  },

  toSDK(message: ConsensusState): ConsensusStateSDKType {
    const obj: any = {};
    message.publicKey !== undefined && (obj.public_key = message.publicKey ? Any.toSDK(message.publicKey) : undefined);
    message.diversifier !== undefined && (obj.diversifier = message.diversifier);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    return obj;
  }

};

function createBaseHeader(): Header {
  return {
    sequence: Long.UZERO,
    timestamp: Long.UZERO,
    signature: new Uint8Array(),
    newPublicKey: undefined,
    newDiversifier: ""
  };
}

export const Header = {
  encode(message: Header, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.sequence.isZero()) {
      writer.uint32(8).uint64(message.sequence);
    }

    if (!message.timestamp.isZero()) {
      writer.uint32(16).uint64(message.timestamp);
    }

    if (message.signature.length !== 0) {
      writer.uint32(26).bytes(message.signature);
    }

    if (message.newPublicKey !== undefined) {
      Any.encode(message.newPublicKey, writer.uint32(34).fork()).ldelim();
    }

    if (message.newDiversifier !== "") {
      writer.uint32(42).string(message.newDiversifier);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Header {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeader();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sequence = (reader.uint64() as Long);
          break;

        case 2:
          message.timestamp = (reader.uint64() as Long);
          break;

        case 3:
          message.signature = reader.bytes();
          break;

        case 4:
          message.newPublicKey = Any.decode(reader, reader.uint32());
          break;

        case 5:
          message.newDiversifier = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Header>): Header {
    const message = createBaseHeader();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
    message.signature = object.signature ?? new Uint8Array();
    message.newPublicKey = object.newPublicKey !== undefined && object.newPublicKey !== null ? Any.fromPartial(object.newPublicKey) : undefined;
    message.newDiversifier = object.newDiversifier ?? "";
    return message;
  },

  fromSDK(object: HeaderSDKType): Header {
    return {
      sequence: isSet(object.sequence) ? object.sequence : undefined,
      timestamp: isSet(object.timestamp) ? object.timestamp : undefined,
      signature: isSet(object.signature) ? object.signature : undefined,
      newPublicKey: isSet(object.new_public_key) ? Any.fromSDK(object.new_public_key) : undefined,
      newDiversifier: isSet(object.new_diversifier) ? object.new_diversifier : undefined
    };
  },

  toSDK(message: Header): HeaderSDKType {
    const obj: any = {};
    message.sequence !== undefined && (obj.sequence = message.sequence);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.signature !== undefined && (obj.signature = message.signature);
    message.newPublicKey !== undefined && (obj.new_public_key = message.newPublicKey ? Any.toSDK(message.newPublicKey) : undefined);
    message.newDiversifier !== undefined && (obj.new_diversifier = message.newDiversifier);
    return obj;
  }

};

function createBaseMisbehaviour(): Misbehaviour {
  return {
    clientId: "",
    sequence: Long.UZERO,
    signatureOne: undefined,
    signatureTwo: undefined
  };
}

export const Misbehaviour = {
  encode(message: Misbehaviour, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }

    if (!message.sequence.isZero()) {
      writer.uint32(16).uint64(message.sequence);
    }

    if (message.signatureOne !== undefined) {
      SignatureAndData.encode(message.signatureOne, writer.uint32(26).fork()).ldelim();
    }

    if (message.signatureTwo !== undefined) {
      SignatureAndData.encode(message.signatureTwo, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Misbehaviour {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMisbehaviour();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.sequence = (reader.uint64() as Long);
          break;

        case 3:
          message.signatureOne = SignatureAndData.decode(reader, reader.uint32());
          break;

        case 4:
          message.signatureTwo = SignatureAndData.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Misbehaviour>): Misbehaviour {
    const message = createBaseMisbehaviour();
    message.clientId = object.clientId ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.signatureOne = object.signatureOne !== undefined && object.signatureOne !== null ? SignatureAndData.fromPartial(object.signatureOne) : undefined;
    message.signatureTwo = object.signatureTwo !== undefined && object.signatureTwo !== null ? SignatureAndData.fromPartial(object.signatureTwo) : undefined;
    return message;
  },

  fromSDK(object: MisbehaviourSDKType): Misbehaviour {
    return {
      clientId: isSet(object.client_id) ? object.client_id : undefined,
      sequence: isSet(object.sequence) ? object.sequence : undefined,
      signatureOne: isSet(object.signature_one) ? SignatureAndData.fromSDK(object.signature_one) : undefined,
      signatureTwo: isSet(object.signature_two) ? SignatureAndData.fromSDK(object.signature_two) : undefined
    };
  },

  toSDK(message: Misbehaviour): MisbehaviourSDKType {
    const obj: any = {};
    message.clientId !== undefined && (obj.client_id = message.clientId);
    message.sequence !== undefined && (obj.sequence = message.sequence);
    message.signatureOne !== undefined && (obj.signature_one = message.signatureOne ? SignatureAndData.toSDK(message.signatureOne) : undefined);
    message.signatureTwo !== undefined && (obj.signature_two = message.signatureTwo ? SignatureAndData.toSDK(message.signatureTwo) : undefined);
    return obj;
  }

};

function createBaseSignatureAndData(): SignatureAndData {
  return {
    signature: new Uint8Array(),
    dataType: 0,
    data: new Uint8Array(),
    timestamp: Long.UZERO
  };
}

export const SignatureAndData = {
  encode(message: SignatureAndData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signature.length !== 0) {
      writer.uint32(10).bytes(message.signature);
    }

    if (message.dataType !== 0) {
      writer.uint32(16).int32(message.dataType);
    }

    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }

    if (!message.timestamp.isZero()) {
      writer.uint32(32).uint64(message.timestamp);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignatureAndData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignatureAndData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signature = reader.bytes();
          break;

        case 2:
          message.dataType = (reader.int32() as any);
          break;

        case 3:
          message.data = reader.bytes();
          break;

        case 4:
          message.timestamp = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SignatureAndData>): SignatureAndData {
    const message = createBaseSignatureAndData();
    message.signature = object.signature ?? new Uint8Array();
    message.dataType = object.dataType ?? 0;
    message.data = object.data ?? new Uint8Array();
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
    return message;
  },

  fromSDK(object: SignatureAndDataSDKType): SignatureAndData {
    return {
      signature: isSet(object.signature) ? object.signature : undefined,
      dataType: isSet(object.data_type) ? dataTypeFromJSON(object.data_type) : 0,
      data: isSet(object.data) ? object.data : undefined,
      timestamp: isSet(object.timestamp) ? object.timestamp : undefined
    };
  },

  toSDK(message: SignatureAndData): SignatureAndDataSDKType {
    const obj: any = {};
    message.signature !== undefined && (obj.signature = message.signature);
    message.dataType !== undefined && (obj.data_type = dataTypeToJSON(message.dataType));
    message.data !== undefined && (obj.data = message.data);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    return obj;
  }

};

function createBaseTimestampedSignatureData(): TimestampedSignatureData {
  return {
    signatureData: new Uint8Array(),
    timestamp: Long.UZERO
  };
}

export const TimestampedSignatureData = {
  encode(message: TimestampedSignatureData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signatureData.length !== 0) {
      writer.uint32(10).bytes(message.signatureData);
    }

    if (!message.timestamp.isZero()) {
      writer.uint32(16).uint64(message.timestamp);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimestampedSignatureData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestampedSignatureData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signatureData = reader.bytes();
          break;

        case 2:
          message.timestamp = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TimestampedSignatureData>): TimestampedSignatureData {
    const message = createBaseTimestampedSignatureData();
    message.signatureData = object.signatureData ?? new Uint8Array();
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
    return message;
  },

  fromSDK(object: TimestampedSignatureDataSDKType): TimestampedSignatureData {
    return {
      signatureData: isSet(object.signature_data) ? object.signature_data : undefined,
      timestamp: isSet(object.timestamp) ? object.timestamp : undefined
    };
  },

  toSDK(message: TimestampedSignatureData): TimestampedSignatureDataSDKType {
    const obj: any = {};
    message.signatureData !== undefined && (obj.signature_data = message.signatureData);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    return obj;
  }

};

function createBaseSignBytes(): SignBytes {
  return {
    sequence: Long.UZERO,
    timestamp: Long.UZERO,
    diversifier: "",
    dataType: 0,
    data: new Uint8Array()
  };
}

export const SignBytes = {
  encode(message: SignBytes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.sequence.isZero()) {
      writer.uint32(8).uint64(message.sequence);
    }

    if (!message.timestamp.isZero()) {
      writer.uint32(16).uint64(message.timestamp);
    }

    if (message.diversifier !== "") {
      writer.uint32(26).string(message.diversifier);
    }

    if (message.dataType !== 0) {
      writer.uint32(32).int32(message.dataType);
    }

    if (message.data.length !== 0) {
      writer.uint32(42).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignBytes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignBytes();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sequence = (reader.uint64() as Long);
          break;

        case 2:
          message.timestamp = (reader.uint64() as Long);
          break;

        case 3:
          message.diversifier = reader.string();
          break;

        case 4:
          message.dataType = (reader.int32() as any);
          break;

        case 5:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SignBytes>): SignBytes {
    const message = createBaseSignBytes();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
    message.diversifier = object.diversifier ?? "";
    message.dataType = object.dataType ?? 0;
    message.data = object.data ?? new Uint8Array();
    return message;
  },

  fromSDK(object: SignBytesSDKType): SignBytes {
    return {
      sequence: isSet(object.sequence) ? object.sequence : undefined,
      timestamp: isSet(object.timestamp) ? object.timestamp : undefined,
      diversifier: isSet(object.diversifier) ? object.diversifier : undefined,
      dataType: isSet(object.data_type) ? dataTypeFromJSON(object.data_type) : 0,
      data: isSet(object.data) ? object.data : undefined
    };
  },

  toSDK(message: SignBytes): SignBytesSDKType {
    const obj: any = {};
    message.sequence !== undefined && (obj.sequence = message.sequence);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.diversifier !== undefined && (obj.diversifier = message.diversifier);
    message.dataType !== undefined && (obj.data_type = dataTypeToJSON(message.dataType));
    message.data !== undefined && (obj.data = message.data);
    return obj;
  }

};

function createBaseHeaderData(): HeaderData {
  return {
    newPubKey: undefined,
    newDiversifier: ""
  };
}

export const HeaderData = {
  encode(message: HeaderData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newPubKey !== undefined) {
      Any.encode(message.newPubKey, writer.uint32(10).fork()).ldelim();
    }

    if (message.newDiversifier !== "") {
      writer.uint32(18).string(message.newDiversifier);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HeaderData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeaderData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.newPubKey = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.newDiversifier = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<HeaderData>): HeaderData {
    const message = createBaseHeaderData();
    message.newPubKey = object.newPubKey !== undefined && object.newPubKey !== null ? Any.fromPartial(object.newPubKey) : undefined;
    message.newDiversifier = object.newDiversifier ?? "";
    return message;
  },

  fromSDK(object: HeaderDataSDKType): HeaderData {
    return {
      newPubKey: isSet(object.new_pub_key) ? Any.fromSDK(object.new_pub_key) : undefined,
      newDiversifier: isSet(object.new_diversifier) ? object.new_diversifier : undefined
    };
  },

  toSDK(message: HeaderData): HeaderDataSDKType {
    const obj: any = {};
    message.newPubKey !== undefined && (obj.new_pub_key = message.newPubKey ? Any.toSDK(message.newPubKey) : undefined);
    message.newDiversifier !== undefined && (obj.new_diversifier = message.newDiversifier);
    return obj;
  }

};

function createBaseClientStateData(): ClientStateData {
  return {
    path: new Uint8Array(),
    clientState: undefined
  };
}

export const ClientStateData = {
  encode(message: ClientStateData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }

    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientStateData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientStateData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;

        case 2:
          message.clientState = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ClientStateData>): ClientStateData {
    const message = createBaseClientStateData();
    message.path = object.path ?? new Uint8Array();
    message.clientState = object.clientState !== undefined && object.clientState !== null ? Any.fromPartial(object.clientState) : undefined;
    return message;
  },

  fromSDK(object: ClientStateDataSDKType): ClientStateData {
    return {
      path: isSet(object.path) ? object.path : undefined,
      clientState: isSet(object.client_state) ? Any.fromSDK(object.client_state) : undefined
    };
  },

  toSDK(message: ClientStateData): ClientStateDataSDKType {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    message.clientState !== undefined && (obj.client_state = message.clientState ? Any.toSDK(message.clientState) : undefined);
    return obj;
  }

};

function createBaseConsensusStateData(): ConsensusStateData {
  return {
    path: new Uint8Array(),
    consensusState: undefined
  };
}

export const ConsensusStateData = {
  encode(message: ConsensusStateData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }

    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusStateData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusStateData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;

        case 2:
          message.consensusState = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ConsensusStateData>): ConsensusStateData {
    const message = createBaseConsensusStateData();
    message.path = object.path ?? new Uint8Array();
    message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? Any.fromPartial(object.consensusState) : undefined;
    return message;
  },

  fromSDK(object: ConsensusStateDataSDKType): ConsensusStateData {
    return {
      path: isSet(object.path) ? object.path : undefined,
      consensusState: isSet(object.consensus_state) ? Any.fromSDK(object.consensus_state) : undefined
    };
  },

  toSDK(message: ConsensusStateData): ConsensusStateDataSDKType {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    message.consensusState !== undefined && (obj.consensus_state = message.consensusState ? Any.toSDK(message.consensusState) : undefined);
    return obj;
  }

};

function createBaseConnectionStateData(): ConnectionStateData {
  return {
    path: new Uint8Array(),
    connection: undefined
  };
}

export const ConnectionStateData = {
  encode(message: ConnectionStateData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }

    if (message.connection !== undefined) {
      ConnectionEnd.encode(message.connection, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionStateData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionStateData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;

        case 2:
          message.connection = ConnectionEnd.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ConnectionStateData>): ConnectionStateData {
    const message = createBaseConnectionStateData();
    message.path = object.path ?? new Uint8Array();
    message.connection = object.connection !== undefined && object.connection !== null ? ConnectionEnd.fromPartial(object.connection) : undefined;
    return message;
  },

  fromSDK(object: ConnectionStateDataSDKType): ConnectionStateData {
    return {
      path: isSet(object.path) ? object.path : undefined,
      connection: isSet(object.connection) ? ConnectionEnd.fromSDK(object.connection) : undefined
    };
  },

  toSDK(message: ConnectionStateData): ConnectionStateDataSDKType {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    message.connection !== undefined && (obj.connection = message.connection ? ConnectionEnd.toSDK(message.connection) : undefined);
    return obj;
  }

};

function createBaseChannelStateData(): ChannelStateData {
  return {
    path: new Uint8Array(),
    channel: undefined
  };
}

export const ChannelStateData = {
  encode(message: ChannelStateData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }

    if (message.channel !== undefined) {
      Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelStateData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelStateData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;

        case 2:
          message.channel = Channel.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ChannelStateData>): ChannelStateData {
    const message = createBaseChannelStateData();
    message.path = object.path ?? new Uint8Array();
    message.channel = object.channel !== undefined && object.channel !== null ? Channel.fromPartial(object.channel) : undefined;
    return message;
  },

  fromSDK(object: ChannelStateDataSDKType): ChannelStateData {
    return {
      path: isSet(object.path) ? object.path : undefined,
      channel: isSet(object.channel) ? Channel.fromSDK(object.channel) : undefined
    };
  },

  toSDK(message: ChannelStateData): ChannelStateDataSDKType {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    message.channel !== undefined && (obj.channel = message.channel ? Channel.toSDK(message.channel) : undefined);
    return obj;
  }

};

function createBasePacketCommitmentData(): PacketCommitmentData {
  return {
    path: new Uint8Array(),
    commitment: new Uint8Array()
  };
}

export const PacketCommitmentData = {
  encode(message: PacketCommitmentData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }

    if (message.commitment.length !== 0) {
      writer.uint32(18).bytes(message.commitment);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PacketCommitmentData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketCommitmentData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;

        case 2:
          message.commitment = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PacketCommitmentData>): PacketCommitmentData {
    const message = createBasePacketCommitmentData();
    message.path = object.path ?? new Uint8Array();
    message.commitment = object.commitment ?? new Uint8Array();
    return message;
  },

  fromSDK(object: PacketCommitmentDataSDKType): PacketCommitmentData {
    return {
      path: isSet(object.path) ? object.path : undefined,
      commitment: isSet(object.commitment) ? object.commitment : undefined
    };
  },

  toSDK(message: PacketCommitmentData): PacketCommitmentDataSDKType {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    message.commitment !== undefined && (obj.commitment = message.commitment);
    return obj;
  }

};

function createBasePacketAcknowledgementData(): PacketAcknowledgementData {
  return {
    path: new Uint8Array(),
    acknowledgement: new Uint8Array()
  };
}

export const PacketAcknowledgementData = {
  encode(message: PacketAcknowledgementData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }

    if (message.acknowledgement.length !== 0) {
      writer.uint32(18).bytes(message.acknowledgement);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PacketAcknowledgementData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketAcknowledgementData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;

        case 2:
          message.acknowledgement = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PacketAcknowledgementData>): PacketAcknowledgementData {
    const message = createBasePacketAcknowledgementData();
    message.path = object.path ?? new Uint8Array();
    message.acknowledgement = object.acknowledgement ?? new Uint8Array();
    return message;
  },

  fromSDK(object: PacketAcknowledgementDataSDKType): PacketAcknowledgementData {
    return {
      path: isSet(object.path) ? object.path : undefined,
      acknowledgement: isSet(object.acknowledgement) ? object.acknowledgement : undefined
    };
  },

  toSDK(message: PacketAcknowledgementData): PacketAcknowledgementDataSDKType {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    message.acknowledgement !== undefined && (obj.acknowledgement = message.acknowledgement);
    return obj;
  }

};

function createBasePacketReceiptAbsenceData(): PacketReceiptAbsenceData {
  return {
    path: new Uint8Array()
  };
}

export const PacketReceiptAbsenceData = {
  encode(message: PacketReceiptAbsenceData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PacketReceiptAbsenceData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketReceiptAbsenceData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PacketReceiptAbsenceData>): PacketReceiptAbsenceData {
    const message = createBasePacketReceiptAbsenceData();
    message.path = object.path ?? new Uint8Array();
    return message;
  },

  fromSDK(object: PacketReceiptAbsenceDataSDKType): PacketReceiptAbsenceData {
    return {
      path: isSet(object.path) ? object.path : undefined
    };
  },

  toSDK(message: PacketReceiptAbsenceData): PacketReceiptAbsenceDataSDKType {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    return obj;
  }

};

function createBaseNextSequenceRecvData(): NextSequenceRecvData {
  return {
    path: new Uint8Array(),
    nextSeqRecv: Long.UZERO
  };
}

export const NextSequenceRecvData = {
  encode(message: NextSequenceRecvData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }

    if (!message.nextSeqRecv.isZero()) {
      writer.uint32(16).uint64(message.nextSeqRecv);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NextSequenceRecvData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNextSequenceRecvData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;

        case 2:
          message.nextSeqRecv = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<NextSequenceRecvData>): NextSequenceRecvData {
    const message = createBaseNextSequenceRecvData();
    message.path = object.path ?? new Uint8Array();
    message.nextSeqRecv = object.nextSeqRecv !== undefined && object.nextSeqRecv !== null ? Long.fromValue(object.nextSeqRecv) : Long.UZERO;
    return message;
  },

  fromSDK(object: NextSequenceRecvDataSDKType): NextSequenceRecvData {
    return {
      path: isSet(object.path) ? object.path : undefined,
      nextSeqRecv: isSet(object.next_seq_recv) ? object.next_seq_recv : undefined
    };
  },

  toSDK(message: NextSequenceRecvData): NextSequenceRecvDataSDKType {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    message.nextSeqRecv !== undefined && (obj.next_seq_recv = message.nextSeqRecv);
    return obj;
  }

};