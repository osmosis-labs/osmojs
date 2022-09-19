import { Proof, ProofSDKType } from "../crypto/proof";
import { Consensus, ConsensusSDKType } from "../version/types";
import { Timestamp } from "../../google/protobuf/timestamp";
import { ValidatorSet, ValidatorSetSDKType } from "./validator";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet, toTimestamp, Long, fromTimestamp } from "@osmonauts/helpers";
/** BlockIdFlag indicates which BlcokID the signature is for */

export enum BlockIDFlag {
  BLOCK_ID_FLAG_UNKNOWN = 0,
  BLOCK_ID_FLAG_ABSENT = 1,
  BLOCK_ID_FLAG_COMMIT = 2,
  BLOCK_ID_FLAG_NIL = 3,
  UNRECOGNIZED = -1,
}
/** BlockIdFlag indicates which BlcokID the signature is for */

export enum BlockIDFlagSDKType {
  BLOCK_ID_FLAG_UNKNOWN = 0,
  BLOCK_ID_FLAG_ABSENT = 1,
  BLOCK_ID_FLAG_COMMIT = 2,
  BLOCK_ID_FLAG_NIL = 3,
  UNRECOGNIZED = -1,
}
export function blockIDFlagFromJSON(object: any): BlockIDFlag {
  switch (object) {
    case 0:
    case "BLOCK_ID_FLAG_UNKNOWN":
      return BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN;

    case 1:
    case "BLOCK_ID_FLAG_ABSENT":
      return BlockIDFlag.BLOCK_ID_FLAG_ABSENT;

    case 2:
    case "BLOCK_ID_FLAG_COMMIT":
      return BlockIDFlag.BLOCK_ID_FLAG_COMMIT;

    case 3:
    case "BLOCK_ID_FLAG_NIL":
      return BlockIDFlag.BLOCK_ID_FLAG_NIL;

    case -1:
    case "UNRECOGNIZED":
    default:
      return BlockIDFlag.UNRECOGNIZED;
  }
}
export function blockIDFlagToJSON(object: BlockIDFlag): string {
  switch (object) {
    case BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN:
      return "BLOCK_ID_FLAG_UNKNOWN";

    case BlockIDFlag.BLOCK_ID_FLAG_ABSENT:
      return "BLOCK_ID_FLAG_ABSENT";

    case BlockIDFlag.BLOCK_ID_FLAG_COMMIT:
      return "BLOCK_ID_FLAG_COMMIT";

    case BlockIDFlag.BLOCK_ID_FLAG_NIL:
      return "BLOCK_ID_FLAG_NIL";

    default:
      return "UNKNOWN";
  }
}
/** SignedMsgType is a type of signed message in the consensus. */

export enum SignedMsgType {
  SIGNED_MSG_TYPE_UNKNOWN = 0,

  /** SIGNED_MSG_TYPE_PREVOTE - Votes */
  SIGNED_MSG_TYPE_PREVOTE = 1,
  SIGNED_MSG_TYPE_PRECOMMIT = 2,

  /** SIGNED_MSG_TYPE_PROPOSAL - Proposals */
  SIGNED_MSG_TYPE_PROPOSAL = 32,
  UNRECOGNIZED = -1,
}
/** SignedMsgType is a type of signed message in the consensus. */

export enum SignedMsgTypeSDKType {
  SIGNED_MSG_TYPE_UNKNOWN = 0,

  /** SIGNED_MSG_TYPE_PREVOTE - Votes */
  SIGNED_MSG_TYPE_PREVOTE = 1,
  SIGNED_MSG_TYPE_PRECOMMIT = 2,

  /** SIGNED_MSG_TYPE_PROPOSAL - Proposals */
  SIGNED_MSG_TYPE_PROPOSAL = 32,
  UNRECOGNIZED = -1,
}
export function signedMsgTypeFromJSON(object: any): SignedMsgType {
  switch (object) {
    case 0:
    case "SIGNED_MSG_TYPE_UNKNOWN":
      return SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN;

    case 1:
    case "SIGNED_MSG_TYPE_PREVOTE":
      return SignedMsgType.SIGNED_MSG_TYPE_PREVOTE;

    case 2:
    case "SIGNED_MSG_TYPE_PRECOMMIT":
      return SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT;

    case 32:
    case "SIGNED_MSG_TYPE_PROPOSAL":
      return SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL;

    case -1:
    case "UNRECOGNIZED":
    default:
      return SignedMsgType.UNRECOGNIZED;
  }
}
export function signedMsgTypeToJSON(object: SignedMsgType): string {
  switch (object) {
    case SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN:
      return "SIGNED_MSG_TYPE_UNKNOWN";

    case SignedMsgType.SIGNED_MSG_TYPE_PREVOTE:
      return "SIGNED_MSG_TYPE_PREVOTE";

    case SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT:
      return "SIGNED_MSG_TYPE_PRECOMMIT";

    case SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL:
      return "SIGNED_MSG_TYPE_PROPOSAL";

    default:
      return "UNKNOWN";
  }
}
/** PartsetHeader */

export interface PartSetHeader {
  total: number;
  hash: Uint8Array;
}
/** PartsetHeader */

export interface PartSetHeaderSDKType {
  total: number;
  hash: Uint8Array;
}
export interface Part {
  index: number;
  bytes: Uint8Array;
  proof: Proof;
}
export interface PartSDKType {
  index: number;
  bytes: Uint8Array;
  proof: ProofSDKType;
}
/** BlockID */

export interface BlockID {
  hash: Uint8Array;
  partSetHeader: PartSetHeader;
}
/** BlockID */

export interface BlockIDSDKType {
  hash: Uint8Array;
  part_set_header: PartSetHeaderSDKType;
}
/** Header defines the structure of a Tendermint block header. */

export interface Header {
  /** basic block info */
  version: Consensus;
  chainId: string;
  height: Long;
  time: Date;
  /** prev block info */

  lastBlockId: BlockID;
  /** hashes of block data */

  lastCommitHash: Uint8Array;
  dataHash: Uint8Array;
  /** hashes from the app output from the prev block */

  validatorsHash: Uint8Array;
  /** validators for the next block */

  nextValidatorsHash: Uint8Array;
  /** consensus params for current block */

  consensusHash: Uint8Array;
  /** state after txs from the previous block */

  appHash: Uint8Array;
  lastResultsHash: Uint8Array;
  /** consensus info */

  evidenceHash: Uint8Array;
  /** original proposer of the block */

  proposerAddress: Uint8Array;
}
/** Header defines the structure of a Tendermint block header. */

export interface HeaderSDKType {
  /** basic block info */
  version: ConsensusSDKType;
  chain_id: string;
  height: Long;
  time: Date;
  /** prev block info */

  last_block_id: BlockIDSDKType;
  /** hashes of block data */

  last_commit_hash: Uint8Array;
  data_hash: Uint8Array;
  /** hashes from the app output from the prev block */

  validators_hash: Uint8Array;
  /** validators for the next block */

  next_validators_hash: Uint8Array;
  /** consensus params for current block */

  consensus_hash: Uint8Array;
  /** state after txs from the previous block */

  app_hash: Uint8Array;
  last_results_hash: Uint8Array;
  /** consensus info */

  evidence_hash: Uint8Array;
  /** original proposer of the block */

  proposer_address: Uint8Array;
}
/** Data contains the set of transactions included in the block */

export interface Data {
  /**
   * Txs that will be applied by state @ block.Height+1.
   * NOTE: not all txs here are valid.  We're just agreeing on the order first.
   * This means that block.AppHash does not include these txs.
   */
  txs: Uint8Array[];
}
/** Data contains the set of transactions included in the block */

export interface DataSDKType {
  /**
   * Txs that will be applied by state @ block.Height+1.
   * NOTE: not all txs here are valid.  We're just agreeing on the order first.
   * This means that block.AppHash does not include these txs.
   */
  txs: Uint8Array[];
}
/**
 * Vote represents a prevote, precommit, or commit vote from validators for
 * consensus.
 */

export interface Vote {
  type: SignedMsgType;
  height: Long;
  round: number;
  /** zero if vote is nil. */

  blockId: BlockID;
  timestamp: Date;
  validatorAddress: Uint8Array;
  validatorIndex: number;
  signature: Uint8Array;
}
/**
 * Vote represents a prevote, precommit, or commit vote from validators for
 * consensus.
 */

export interface VoteSDKType {
  type: SignedMsgTypeSDKType;
  height: Long;
  round: number;
  /** zero if vote is nil. */

  block_id: BlockIDSDKType;
  timestamp: Date;
  validator_address: Uint8Array;
  validator_index: number;
  signature: Uint8Array;
}
/** Commit contains the evidence that a block was committed by a set of validators. */

export interface Commit {
  height: Long;
  round: number;
  blockId: BlockID;
  signatures: CommitSig[];
}
/** Commit contains the evidence that a block was committed by a set of validators. */

export interface CommitSDKType {
  height: Long;
  round: number;
  block_id: BlockIDSDKType;
  signatures: CommitSigSDKType[];
}
/** CommitSig is a part of the Vote included in a Commit. */

export interface CommitSig {
  blockIdFlag: BlockIDFlag;
  validatorAddress: Uint8Array;
  timestamp: Date;
  signature: Uint8Array;
}
/** CommitSig is a part of the Vote included in a Commit. */

export interface CommitSigSDKType {
  block_id_flag: BlockIDFlagSDKType;
  validator_address: Uint8Array;
  timestamp: Date;
  signature: Uint8Array;
}
export interface Proposal {
  type: SignedMsgType;
  height: Long;
  round: number;
  polRound: number;
  blockId: BlockID;
  timestamp: Date;
  signature: Uint8Array;
}
export interface ProposalSDKType {
  type: SignedMsgTypeSDKType;
  height: Long;
  round: number;
  pol_round: number;
  block_id: BlockIDSDKType;
  timestamp: Date;
  signature: Uint8Array;
}
export interface SignedHeader {
  header: Header;
  commit: Commit;
}
export interface SignedHeaderSDKType {
  header: HeaderSDKType;
  commit: CommitSDKType;
}
export interface LightBlock {
  signedHeader: SignedHeader;
  validatorSet: ValidatorSet;
}
export interface LightBlockSDKType {
  signed_header: SignedHeaderSDKType;
  validator_set: ValidatorSetSDKType;
}
export interface BlockMeta {
  blockId: BlockID;
  blockSize: Long;
  header: Header;
  numTxs: Long;
}
export interface BlockMetaSDKType {
  block_id: BlockIDSDKType;
  block_size: Long;
  header: HeaderSDKType;
  num_txs: Long;
}
/** TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree. */

export interface TxProof {
  rootHash: Uint8Array;
  data: Uint8Array;
  proof: Proof;
}
/** TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree. */

export interface TxProofSDKType {
  root_hash: Uint8Array;
  data: Uint8Array;
  proof: ProofSDKType;
}

function createBasePartSetHeader(): PartSetHeader {
  return {
    total: 0,
    hash: new Uint8Array()
  };
}

export const PartSetHeader = {
  encode(message: PartSetHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.total !== 0) {
      writer.uint32(8).uint32(message.total);
    }

    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PartSetHeader {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePartSetHeader();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.total = reader.uint32();
          break;

        case 2:
          message.hash = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PartSetHeader>): PartSetHeader {
    const message = createBasePartSetHeader();
    message.total = object.total ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },

  fromSDK(object: PartSetHeaderSDKType): PartSetHeader {
    return {
      total: isSet(object.total) ? object.total : undefined,
      hash: isSet(object.hash) ? object.hash : undefined
    };
  },

  toSDK(message: PartSetHeader): PartSetHeaderSDKType {
    const obj: any = {};
    message.total !== undefined && (obj.total = message.total);
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  }

};

function createBasePart(): Part {
  return {
    index: 0,
    bytes: new Uint8Array(),
    proof: undefined
  };
}

export const Part = {
  encode(message: Part, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }

    if (message.bytes.length !== 0) {
      writer.uint32(18).bytes(message.bytes);
    }

    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Part {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePart();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint32();
          break;

        case 2:
          message.bytes = reader.bytes();
          break;

        case 3:
          message.proof = Proof.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Part>): Part {
    const message = createBasePart();
    message.index = object.index ?? 0;
    message.bytes = object.bytes ?? new Uint8Array();
    message.proof = object.proof !== undefined && object.proof !== null ? Proof.fromPartial(object.proof) : undefined;
    return message;
  },

  fromSDK(object: PartSDKType): Part {
    return {
      index: isSet(object.index) ? object.index : undefined,
      bytes: isSet(object.bytes) ? object.bytes : undefined,
      proof: isSet(object.proof) ? Proof.fromSDK(object.proof) : undefined
    };
  },

  toSDK(message: Part): PartSDKType {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.bytes !== undefined && (obj.bytes = message.bytes);
    message.proof !== undefined && (obj.proof = message.proof ? Proof.toSDK(message.proof) : undefined);
    return obj;
  }

};

function createBaseBlockID(): BlockID {
  return {
    hash: new Uint8Array(),
    partSetHeader: undefined
  };
}

export const BlockID = {
  encode(message: BlockID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }

    if (message.partSetHeader !== undefined) {
      PartSetHeader.encode(message.partSetHeader, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockID();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;

        case 2:
          message.partSetHeader = PartSetHeader.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BlockID>): BlockID {
    const message = createBaseBlockID();
    message.hash = object.hash ?? new Uint8Array();
    message.partSetHeader = object.partSetHeader !== undefined && object.partSetHeader !== null ? PartSetHeader.fromPartial(object.partSetHeader) : undefined;
    return message;
  },

  fromSDK(object: BlockIDSDKType): BlockID {
    return {
      hash: isSet(object.hash) ? object.hash : undefined,
      partSetHeader: isSet(object.part_set_header) ? PartSetHeader.fromSDK(object.part_set_header) : undefined
    };
  },

  toSDK(message: BlockID): BlockIDSDKType {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.partSetHeader !== undefined && (obj.part_set_header = message.partSetHeader ? PartSetHeader.toSDK(message.partSetHeader) : undefined);
    return obj;
  }

};

function createBaseHeader(): Header {
  return {
    version: undefined,
    chainId: "",
    height: Long.ZERO,
    time: undefined,
    lastBlockId: undefined,
    lastCommitHash: new Uint8Array(),
    dataHash: new Uint8Array(),
    validatorsHash: new Uint8Array(),
    nextValidatorsHash: new Uint8Array(),
    consensusHash: new Uint8Array(),
    appHash: new Uint8Array(),
    lastResultsHash: new Uint8Array(),
    evidenceHash: new Uint8Array(),
    proposerAddress: new Uint8Array()
  };
}

export const Header = {
  encode(message: Header, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== undefined) {
      Consensus.encode(message.version, writer.uint32(10).fork()).ldelim();
    }

    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }

    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }

    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(34).fork()).ldelim();
    }

    if (message.lastBlockId !== undefined) {
      BlockID.encode(message.lastBlockId, writer.uint32(42).fork()).ldelim();
    }

    if (message.lastCommitHash.length !== 0) {
      writer.uint32(50).bytes(message.lastCommitHash);
    }

    if (message.dataHash.length !== 0) {
      writer.uint32(58).bytes(message.dataHash);
    }

    if (message.validatorsHash.length !== 0) {
      writer.uint32(66).bytes(message.validatorsHash);
    }

    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(74).bytes(message.nextValidatorsHash);
    }

    if (message.consensusHash.length !== 0) {
      writer.uint32(82).bytes(message.consensusHash);
    }

    if (message.appHash.length !== 0) {
      writer.uint32(90).bytes(message.appHash);
    }

    if (message.lastResultsHash.length !== 0) {
      writer.uint32(98).bytes(message.lastResultsHash);
    }

    if (message.evidenceHash.length !== 0) {
      writer.uint32(106).bytes(message.evidenceHash);
    }

    if (message.proposerAddress.length !== 0) {
      writer.uint32(114).bytes(message.proposerAddress);
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
          message.version = Consensus.decode(reader, reader.uint32());
          break;

        case 2:
          message.chainId = reader.string();
          break;

        case 3:
          message.height = (reader.int64() as Long);
          break;

        case 4:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 5:
          message.lastBlockId = BlockID.decode(reader, reader.uint32());
          break;

        case 6:
          message.lastCommitHash = reader.bytes();
          break;

        case 7:
          message.dataHash = reader.bytes();
          break;

        case 8:
          message.validatorsHash = reader.bytes();
          break;

        case 9:
          message.nextValidatorsHash = reader.bytes();
          break;

        case 10:
          message.consensusHash = reader.bytes();
          break;

        case 11:
          message.appHash = reader.bytes();
          break;

        case 12:
          message.lastResultsHash = reader.bytes();
          break;

        case 13:
          message.evidenceHash = reader.bytes();
          break;

        case 14:
          message.proposerAddress = reader.bytes();
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
    message.version = object.version !== undefined && object.version !== null ? Consensus.fromPartial(object.version) : undefined;
    message.chainId = object.chainId ?? "";
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.time = object.time ?? undefined;
    message.lastBlockId = object.lastBlockId !== undefined && object.lastBlockId !== null ? BlockID.fromPartial(object.lastBlockId) : undefined;
    message.lastCommitHash = object.lastCommitHash ?? new Uint8Array();
    message.dataHash = object.dataHash ?? new Uint8Array();
    message.validatorsHash = object.validatorsHash ?? new Uint8Array();
    message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
    message.consensusHash = object.consensusHash ?? new Uint8Array();
    message.appHash = object.appHash ?? new Uint8Array();
    message.lastResultsHash = object.lastResultsHash ?? new Uint8Array();
    message.evidenceHash = object.evidenceHash ?? new Uint8Array();
    message.proposerAddress = object.proposerAddress ?? new Uint8Array();
    return message;
  },

  fromSDK(object: HeaderSDKType): Header {
    return {
      version: isSet(object.version) ? Consensus.fromSDK(object.version) : undefined,
      chainId: isSet(object.chain_id) ? object.chain_id : undefined,
      height: isSet(object.height) ? object.height : undefined,
      time: isSet(object.time) ? Timestamp.fromSDK(object.time) : undefined,
      lastBlockId: isSet(object.last_block_id) ? BlockID.fromSDK(object.last_block_id) : undefined,
      lastCommitHash: isSet(object.last_commit_hash) ? object.last_commit_hash : undefined,
      dataHash: isSet(object.data_hash) ? object.data_hash : undefined,
      validatorsHash: isSet(object.validators_hash) ? object.validators_hash : undefined,
      nextValidatorsHash: isSet(object.next_validators_hash) ? object.next_validators_hash : undefined,
      consensusHash: isSet(object.consensus_hash) ? object.consensus_hash : undefined,
      appHash: isSet(object.app_hash) ? object.app_hash : undefined,
      lastResultsHash: isSet(object.last_results_hash) ? object.last_results_hash : undefined,
      evidenceHash: isSet(object.evidence_hash) ? object.evidence_hash : undefined,
      proposerAddress: isSet(object.proposer_address) ? object.proposer_address : undefined
    };
  },

  toSDK(message: Header): HeaderSDKType {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version ? Consensus.toSDK(message.version) : undefined);
    message.chainId !== undefined && (obj.chain_id = message.chainId);
    message.height !== undefined && (obj.height = message.height);
    message.time !== undefined && (obj.time = message.time ? Timestamp.toSDK(message.time) : undefined);
    message.lastBlockId !== undefined && (obj.last_block_id = message.lastBlockId ? BlockID.toSDK(message.lastBlockId) : undefined);
    message.lastCommitHash !== undefined && (obj.last_commit_hash = message.lastCommitHash);
    message.dataHash !== undefined && (obj.data_hash = message.dataHash);
    message.validatorsHash !== undefined && (obj.validators_hash = message.validatorsHash);
    message.nextValidatorsHash !== undefined && (obj.next_validators_hash = message.nextValidatorsHash);
    message.consensusHash !== undefined && (obj.consensus_hash = message.consensusHash);
    message.appHash !== undefined && (obj.app_hash = message.appHash);
    message.lastResultsHash !== undefined && (obj.last_results_hash = message.lastResultsHash);
    message.evidenceHash !== undefined && (obj.evidence_hash = message.evidenceHash);
    message.proposerAddress !== undefined && (obj.proposer_address = message.proposerAddress);
    return obj;
  }

};

function createBaseData(): Data {
  return {
    txs: []
  };
}

export const Data = {
  encode(message: Data, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txs.push(reader.bytes());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Data>): Data {
    const message = createBaseData();
    message.txs = object.txs?.map(e => e) || [];
    return message;
  },

  fromSDK(object: DataSDKType): Data {
    return {
      txs: Array.isArray(object?.txs) ? object.txs.map((e: any) => e) : []
    };
  },

  toSDK(message: Data): DataSDKType {
    const obj: any = {};

    if (message.txs) {
      obj.txs = message.txs.map(e => e);
    } else {
      obj.txs = [];
    }

    return obj;
  }

};

function createBaseVote(): Vote {
  return {
    type: 0,
    height: Long.ZERO,
    round: 0,
    blockId: undefined,
    timestamp: undefined,
    validatorAddress: new Uint8Array(),
    validatorIndex: 0,
    signature: new Uint8Array()
  };
}

export const Vote = {
  encode(message: Vote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }

    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }

    if (message.round !== 0) {
      writer.uint32(24).int32(message.round);
    }

    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
    }

    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
    }

    if (message.validatorAddress.length !== 0) {
      writer.uint32(50).bytes(message.validatorAddress);
    }

    if (message.validatorIndex !== 0) {
      writer.uint32(56).int32(message.validatorIndex);
    }

    if (message.signature.length !== 0) {
      writer.uint32(66).bytes(message.signature);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVote();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type = (reader.int32() as any);
          break;

        case 2:
          message.height = (reader.int64() as Long);
          break;

        case 3:
          message.round = reader.int32();
          break;

        case 4:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;

        case 5:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 6:
          message.validatorAddress = reader.bytes();
          break;

        case 7:
          message.validatorIndex = reader.int32();
          break;

        case 8:
          message.signature = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Vote>): Vote {
    const message = createBaseVote();
    message.type = object.type ?? 0;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = object.round ?? 0;
    message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
    message.timestamp = object.timestamp ?? undefined;
    message.validatorAddress = object.validatorAddress ?? new Uint8Array();
    message.validatorIndex = object.validatorIndex ?? 0;
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },

  fromSDK(object: VoteSDKType): Vote {
    return {
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : 0,
      height: isSet(object.height) ? object.height : undefined,
      round: isSet(object.round) ? object.round : undefined,
      blockId: isSet(object.block_id) ? BlockID.fromSDK(object.block_id) : undefined,
      timestamp: isSet(object.timestamp) ? Timestamp.fromSDK(object.timestamp) : undefined,
      validatorAddress: isSet(object.validator_address) ? object.validator_address : undefined,
      validatorIndex: isSet(object.validator_index) ? object.validator_index : undefined,
      signature: isSet(object.signature) ? object.signature : undefined
    };
  },

  toSDK(message: Vote): VoteSDKType {
    const obj: any = {};
    message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
    message.height !== undefined && (obj.height = message.height);
    message.round !== undefined && (obj.round = message.round);
    message.blockId !== undefined && (obj.block_id = message.blockId ? BlockID.toSDK(message.blockId) : undefined);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp ? Timestamp.toSDK(message.timestamp) : undefined);
    message.validatorAddress !== undefined && (obj.validator_address = message.validatorAddress);
    message.validatorIndex !== undefined && (obj.validator_index = message.validatorIndex);
    message.signature !== undefined && (obj.signature = message.signature);
    return obj;
  }

};

function createBaseCommit(): Commit {
  return {
    height: Long.ZERO,
    round: 0,
    blockId: undefined,
    signatures: []
  };
}

export const Commit = {
  encode(message: Commit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }

    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.signatures) {
      CommitSig.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Commit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = (reader.int64() as Long);
          break;

        case 2:
          message.round = reader.int32();
          break;

        case 3:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;

        case 4:
          message.signatures.push(CommitSig.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Commit>): Commit {
    const message = createBaseCommit();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = object.round ?? 0;
    message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
    message.signatures = object.signatures?.map(e => CommitSig.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: CommitSDKType): Commit {
    return {
      height: isSet(object.height) ? object.height : undefined,
      round: isSet(object.round) ? object.round : undefined,
      blockId: isSet(object.block_id) ? BlockID.fromSDK(object.block_id) : undefined,
      signatures: Array.isArray(object?.signatures) ? object.signatures.map((e: any) => CommitSig.fromSDK(e)) : []
    };
  },

  toSDK(message: Commit): CommitSDKType {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height);
    message.round !== undefined && (obj.round = message.round);
    message.blockId !== undefined && (obj.block_id = message.blockId ? BlockID.toSDK(message.blockId) : undefined);

    if (message.signatures) {
      obj.signatures = message.signatures.map(e => e ? CommitSig.toSDK(e) : undefined);
    } else {
      obj.signatures = [];
    }

    return obj;
  }

};

function createBaseCommitSig(): CommitSig {
  return {
    blockIdFlag: 0,
    validatorAddress: new Uint8Array(),
    timestamp: undefined,
    signature: new Uint8Array()
  };
}

export const CommitSig = {
  encode(message: CommitSig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockIdFlag !== 0) {
      writer.uint32(8).int32(message.blockIdFlag);
    }

    if (message.validatorAddress.length !== 0) {
      writer.uint32(18).bytes(message.validatorAddress);
    }

    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
    }

    if (message.signature.length !== 0) {
      writer.uint32(34).bytes(message.signature);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommitSig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitSig();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.blockIdFlag = (reader.int32() as any);
          break;

        case 2:
          message.validatorAddress = reader.bytes();
          break;

        case 3:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 4:
          message.signature = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<CommitSig>): CommitSig {
    const message = createBaseCommitSig();
    message.blockIdFlag = object.blockIdFlag ?? 0;
    message.validatorAddress = object.validatorAddress ?? new Uint8Array();
    message.timestamp = object.timestamp ?? undefined;
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },

  fromSDK(object: CommitSigSDKType): CommitSig {
    return {
      blockIdFlag: isSet(object.block_id_flag) ? blockIDFlagFromJSON(object.block_id_flag) : 0,
      validatorAddress: isSet(object.validator_address) ? object.validator_address : undefined,
      timestamp: isSet(object.timestamp) ? Timestamp.fromSDK(object.timestamp) : undefined,
      signature: isSet(object.signature) ? object.signature : undefined
    };
  },

  toSDK(message: CommitSig): CommitSigSDKType {
    const obj: any = {};
    message.blockIdFlag !== undefined && (obj.block_id_flag = blockIDFlagToJSON(message.blockIdFlag));
    message.validatorAddress !== undefined && (obj.validator_address = message.validatorAddress);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp ? Timestamp.toSDK(message.timestamp) : undefined);
    message.signature !== undefined && (obj.signature = message.signature);
    return obj;
  }

};

function createBaseProposal(): Proposal {
  return {
    type: 0,
    height: Long.ZERO,
    round: 0,
    polRound: 0,
    blockId: undefined,
    timestamp: undefined,
    signature: new Uint8Array()
  };
}

export const Proposal = {
  encode(message: Proposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }

    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }

    if (message.round !== 0) {
      writer.uint32(24).int32(message.round);
    }

    if (message.polRound !== 0) {
      writer.uint32(32).int32(message.polRound);
    }

    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(42).fork()).ldelim();
    }

    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(50).fork()).ldelim();
    }

    if (message.signature.length !== 0) {
      writer.uint32(58).bytes(message.signature);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type = (reader.int32() as any);
          break;

        case 2:
          message.height = (reader.int64() as Long);
          break;

        case 3:
          message.round = reader.int32();
          break;

        case 4:
          message.polRound = reader.int32();
          break;

        case 5:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;

        case 6:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 7:
          message.signature = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Proposal>): Proposal {
    const message = createBaseProposal();
    message.type = object.type ?? 0;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = object.round ?? 0;
    message.polRound = object.polRound ?? 0;
    message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
    message.timestamp = object.timestamp ?? undefined;
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },

  fromSDK(object: ProposalSDKType): Proposal {
    return {
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : 0,
      height: isSet(object.height) ? object.height : undefined,
      round: isSet(object.round) ? object.round : undefined,
      polRound: isSet(object.pol_round) ? object.pol_round : undefined,
      blockId: isSet(object.block_id) ? BlockID.fromSDK(object.block_id) : undefined,
      timestamp: isSet(object.timestamp) ? Timestamp.fromSDK(object.timestamp) : undefined,
      signature: isSet(object.signature) ? object.signature : undefined
    };
  },

  toSDK(message: Proposal): ProposalSDKType {
    const obj: any = {};
    message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
    message.height !== undefined && (obj.height = message.height);
    message.round !== undefined && (obj.round = message.round);
    message.polRound !== undefined && (obj.pol_round = message.polRound);
    message.blockId !== undefined && (obj.block_id = message.blockId ? BlockID.toSDK(message.blockId) : undefined);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp ? Timestamp.toSDK(message.timestamp) : undefined);
    message.signature !== undefined && (obj.signature = message.signature);
    return obj;
  }

};

function createBaseSignedHeader(): SignedHeader {
  return {
    header: undefined,
    commit: undefined
  };
}

export const SignedHeader = {
  encode(message: SignedHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }

    if (message.commit !== undefined) {
      Commit.encode(message.commit, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignedHeader {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignedHeader();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;

        case 2:
          message.commit = Commit.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SignedHeader>): SignedHeader {
    const message = createBaseSignedHeader();
    message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    message.commit = object.commit !== undefined && object.commit !== null ? Commit.fromPartial(object.commit) : undefined;
    return message;
  },

  fromSDK(object: SignedHeaderSDKType): SignedHeader {
    return {
      header: isSet(object.header) ? Header.fromSDK(object.header) : undefined,
      commit: isSet(object.commit) ? Commit.fromSDK(object.commit) : undefined
    };
  },

  toSDK(message: SignedHeader): SignedHeaderSDKType {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toSDK(message.header) : undefined);
    message.commit !== undefined && (obj.commit = message.commit ? Commit.toSDK(message.commit) : undefined);
    return obj;
  }

};

function createBaseLightBlock(): LightBlock {
  return {
    signedHeader: undefined,
    validatorSet: undefined
  };
}

export const LightBlock = {
  encode(message: LightBlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signedHeader !== undefined) {
      SignedHeader.encode(message.signedHeader, writer.uint32(10).fork()).ldelim();
    }

    if (message.validatorSet !== undefined) {
      ValidatorSet.encode(message.validatorSet, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LightBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLightBlock();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signedHeader = SignedHeader.decode(reader, reader.uint32());
          break;

        case 2:
          message.validatorSet = ValidatorSet.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<LightBlock>): LightBlock {
    const message = createBaseLightBlock();
    message.signedHeader = object.signedHeader !== undefined && object.signedHeader !== null ? SignedHeader.fromPartial(object.signedHeader) : undefined;
    message.validatorSet = object.validatorSet !== undefined && object.validatorSet !== null ? ValidatorSet.fromPartial(object.validatorSet) : undefined;
    return message;
  },

  fromSDK(object: LightBlockSDKType): LightBlock {
    return {
      signedHeader: isSet(object.signed_header) ? SignedHeader.fromSDK(object.signed_header) : undefined,
      validatorSet: isSet(object.validator_set) ? ValidatorSet.fromSDK(object.validator_set) : undefined
    };
  },

  toSDK(message: LightBlock): LightBlockSDKType {
    const obj: any = {};
    message.signedHeader !== undefined && (obj.signed_header = message.signedHeader ? SignedHeader.toSDK(message.signedHeader) : undefined);
    message.validatorSet !== undefined && (obj.validator_set = message.validatorSet ? ValidatorSet.toSDK(message.validatorSet) : undefined);
    return obj;
  }

};

function createBaseBlockMeta(): BlockMeta {
  return {
    blockId: undefined,
    blockSize: Long.ZERO,
    header: undefined,
    numTxs: Long.ZERO
  };
}

export const BlockMeta = {
  encode(message: BlockMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }

    if (!message.blockSize.isZero()) {
      writer.uint32(16).int64(message.blockSize);
    }

    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(26).fork()).ldelim();
    }

    if (!message.numTxs.isZero()) {
      writer.uint32(32).int64(message.numTxs);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockMeta {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockMeta();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;

        case 2:
          message.blockSize = (reader.int64() as Long);
          break;

        case 3:
          message.header = Header.decode(reader, reader.uint32());
          break;

        case 4:
          message.numTxs = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BlockMeta>): BlockMeta {
    const message = createBaseBlockMeta();
    message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
    message.blockSize = object.blockSize !== undefined && object.blockSize !== null ? Long.fromValue(object.blockSize) : Long.ZERO;
    message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    message.numTxs = object.numTxs !== undefined && object.numTxs !== null ? Long.fromValue(object.numTxs) : Long.ZERO;
    return message;
  },

  fromSDK(object: BlockMetaSDKType): BlockMeta {
    return {
      blockId: isSet(object.block_id) ? BlockID.fromSDK(object.block_id) : undefined,
      blockSize: isSet(object.block_size) ? object.block_size : undefined,
      header: isSet(object.header) ? Header.fromSDK(object.header) : undefined,
      numTxs: isSet(object.num_txs) ? object.num_txs : undefined
    };
  },

  toSDK(message: BlockMeta): BlockMetaSDKType {
    const obj: any = {};
    message.blockId !== undefined && (obj.block_id = message.blockId ? BlockID.toSDK(message.blockId) : undefined);
    message.blockSize !== undefined && (obj.block_size = message.blockSize);
    message.header !== undefined && (obj.header = message.header ? Header.toSDK(message.header) : undefined);
    message.numTxs !== undefined && (obj.num_txs = message.numTxs);
    return obj;
  }

};

function createBaseTxProof(): TxProof {
  return {
    rootHash: new Uint8Array(),
    data: new Uint8Array(),
    proof: undefined
  };
}

export const TxProof = {
  encode(message: TxProof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rootHash.length !== 0) {
      writer.uint32(10).bytes(message.rootHash);
    }

    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }

    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxProof {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxProof();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rootHash = reader.bytes();
          break;

        case 2:
          message.data = reader.bytes();
          break;

        case 3:
          message.proof = Proof.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TxProof>): TxProof {
    const message = createBaseTxProof();
    message.rootHash = object.rootHash ?? new Uint8Array();
    message.data = object.data ?? new Uint8Array();
    message.proof = object.proof !== undefined && object.proof !== null ? Proof.fromPartial(object.proof) : undefined;
    return message;
  },

  fromSDK(object: TxProofSDKType): TxProof {
    return {
      rootHash: isSet(object.root_hash) ? object.root_hash : undefined,
      data: isSet(object.data) ? object.data : undefined,
      proof: isSet(object.proof) ? Proof.fromSDK(object.proof) : undefined
    };
  },

  toSDK(message: TxProof): TxProofSDKType {
    const obj: any = {};
    message.rootHash !== undefined && (obj.root_hash = message.rootHash);
    message.data !== undefined && (obj.data = message.data);
    message.proof !== undefined && (obj.proof = message.proof ? Proof.toSDK(message.proof) : undefined);
    return obj;
  }

};