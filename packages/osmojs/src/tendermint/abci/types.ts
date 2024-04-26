//@ts-nocheck
import { Timestamp } from "../../google/protobuf/timestamp";
import { ConsensusParams, ConsensusParamsAmino, ConsensusParamsSDKType } from "../types/params";
import { Header, HeaderAmino, HeaderSDKType } from "../types/types";
import { ProofOps, ProofOpsAmino, ProofOpsSDKType } from "../crypto/proof";
import { PublicKey, PublicKeyAmino, PublicKeySDKType } from "../crypto/keys";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
import { toTimestamp, fromTimestamp, bytesFromBase64, base64FromBytes, isSet } from "../../helpers";
export enum CheckTxType {
  NEW = 0,
  RECHECK = 1,
  UNRECOGNIZED = -1,
}
export const CheckTxTypeSDKType = CheckTxType;
export const CheckTxTypeAmino = CheckTxType;
export function checkTxTypeFromJSON(object: any): CheckTxType {
  switch (object) {
    case 0:
    case "NEW":
      return CheckTxType.NEW;
    case 1:
    case "RECHECK":
      return CheckTxType.RECHECK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CheckTxType.UNRECOGNIZED;
  }
}
export function checkTxTypeToJSON(object: CheckTxType): string {
  switch (object) {
    case CheckTxType.NEW:
      return "NEW";
    case CheckTxType.RECHECK:
      return "RECHECK";
    case CheckTxType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum ResponseOfferSnapshot_Result {
  /** UNKNOWN - Unknown result, abort all snapshot restoration */
  UNKNOWN = 0,
  /** ACCEPT - Snapshot accepted, apply chunks */
  ACCEPT = 1,
  /** ABORT - Abort all snapshot restoration */
  ABORT = 2,
  /** REJECT - Reject this specific snapshot, try others */
  REJECT = 3,
  /** REJECT_FORMAT - Reject all snapshots of this format, try others */
  REJECT_FORMAT = 4,
  /** REJECT_SENDER - Reject all snapshots from the sender(s), try others */
  REJECT_SENDER = 5,
  UNRECOGNIZED = -1,
}
export const ResponseOfferSnapshot_ResultSDKType = ResponseOfferSnapshot_Result;
export const ResponseOfferSnapshot_ResultAmino = ResponseOfferSnapshot_Result;
export function responseOfferSnapshot_ResultFromJSON(object: any): ResponseOfferSnapshot_Result {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseOfferSnapshot_Result.UNKNOWN;
    case 1:
    case "ACCEPT":
      return ResponseOfferSnapshot_Result.ACCEPT;
    case 2:
    case "ABORT":
      return ResponseOfferSnapshot_Result.ABORT;
    case 3:
    case "REJECT":
      return ResponseOfferSnapshot_Result.REJECT;
    case 4:
    case "REJECT_FORMAT":
      return ResponseOfferSnapshot_Result.REJECT_FORMAT;
    case 5:
    case "REJECT_SENDER":
      return ResponseOfferSnapshot_Result.REJECT_SENDER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseOfferSnapshot_Result.UNRECOGNIZED;
  }
}
export function responseOfferSnapshot_ResultToJSON(object: ResponseOfferSnapshot_Result): string {
  switch (object) {
    case ResponseOfferSnapshot_Result.UNKNOWN:
      return "UNKNOWN";
    case ResponseOfferSnapshot_Result.ACCEPT:
      return "ACCEPT";
    case ResponseOfferSnapshot_Result.ABORT:
      return "ABORT";
    case ResponseOfferSnapshot_Result.REJECT:
      return "REJECT";
    case ResponseOfferSnapshot_Result.REJECT_FORMAT:
      return "REJECT_FORMAT";
    case ResponseOfferSnapshot_Result.REJECT_SENDER:
      return "REJECT_SENDER";
    case ResponseOfferSnapshot_Result.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum ResponseApplySnapshotChunk_Result {
  /** UNKNOWN - Unknown result, abort all snapshot restoration */
  UNKNOWN = 0,
  /** ACCEPT - Chunk successfully accepted */
  ACCEPT = 1,
  /** ABORT - Abort all snapshot restoration */
  ABORT = 2,
  /** RETRY - Retry chunk (combine with refetch and reject) */
  RETRY = 3,
  /** RETRY_SNAPSHOT - Retry snapshot (combine with refetch and reject) */
  RETRY_SNAPSHOT = 4,
  /** REJECT_SNAPSHOT - Reject this snapshot, try others */
  REJECT_SNAPSHOT = 5,
  UNRECOGNIZED = -1,
}
export const ResponseApplySnapshotChunk_ResultSDKType = ResponseApplySnapshotChunk_Result;
export const ResponseApplySnapshotChunk_ResultAmino = ResponseApplySnapshotChunk_Result;
export function responseApplySnapshotChunk_ResultFromJSON(object: any): ResponseApplySnapshotChunk_Result {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseApplySnapshotChunk_Result.UNKNOWN;
    case 1:
    case "ACCEPT":
      return ResponseApplySnapshotChunk_Result.ACCEPT;
    case 2:
    case "ABORT":
      return ResponseApplySnapshotChunk_Result.ABORT;
    case 3:
    case "RETRY":
      return ResponseApplySnapshotChunk_Result.RETRY;
    case 4:
    case "RETRY_SNAPSHOT":
      return ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT;
    case 5:
    case "REJECT_SNAPSHOT":
      return ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseApplySnapshotChunk_Result.UNRECOGNIZED;
  }
}
export function responseApplySnapshotChunk_ResultToJSON(object: ResponseApplySnapshotChunk_Result): string {
  switch (object) {
    case ResponseApplySnapshotChunk_Result.UNKNOWN:
      return "UNKNOWN";
    case ResponseApplySnapshotChunk_Result.ACCEPT:
      return "ACCEPT";
    case ResponseApplySnapshotChunk_Result.ABORT:
      return "ABORT";
    case ResponseApplySnapshotChunk_Result.RETRY:
      return "RETRY";
    case ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT:
      return "RETRY_SNAPSHOT";
    case ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT:
      return "REJECT_SNAPSHOT";
    case ResponseApplySnapshotChunk_Result.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum ResponseProcessProposal_ProposalStatus {
  UNKNOWN = 0,
  ACCEPT = 1,
  REJECT = 2,
  UNRECOGNIZED = -1,
}
export const ResponseProcessProposal_ProposalStatusSDKType = ResponseProcessProposal_ProposalStatus;
export const ResponseProcessProposal_ProposalStatusAmino = ResponseProcessProposal_ProposalStatus;
export function responseProcessProposal_ProposalStatusFromJSON(object: any): ResponseProcessProposal_ProposalStatus {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseProcessProposal_ProposalStatus.UNKNOWN;
    case 1:
    case "ACCEPT":
      return ResponseProcessProposal_ProposalStatus.ACCEPT;
    case 2:
    case "REJECT":
      return ResponseProcessProposal_ProposalStatus.REJECT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseProcessProposal_ProposalStatus.UNRECOGNIZED;
  }
}
export function responseProcessProposal_ProposalStatusToJSON(object: ResponseProcessProposal_ProposalStatus): string {
  switch (object) {
    case ResponseProcessProposal_ProposalStatus.UNKNOWN:
      return "UNKNOWN";
    case ResponseProcessProposal_ProposalStatus.ACCEPT:
      return "ACCEPT";
    case ResponseProcessProposal_ProposalStatus.REJECT:
      return "REJECT";
    case ResponseProcessProposal_ProposalStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum MisbehaviorType {
  UNKNOWN = 0,
  DUPLICATE_VOTE = 1,
  LIGHT_CLIENT_ATTACK = 2,
  UNRECOGNIZED = -1,
}
export const MisbehaviorTypeSDKType = MisbehaviorType;
export const MisbehaviorTypeAmino = MisbehaviorType;
export function misbehaviorTypeFromJSON(object: any): MisbehaviorType {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return MisbehaviorType.UNKNOWN;
    case 1:
    case "DUPLICATE_VOTE":
      return MisbehaviorType.DUPLICATE_VOTE;
    case 2:
    case "LIGHT_CLIENT_ATTACK":
      return MisbehaviorType.LIGHT_CLIENT_ATTACK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MisbehaviorType.UNRECOGNIZED;
  }
}
export function misbehaviorTypeToJSON(object: MisbehaviorType): string {
  switch (object) {
    case MisbehaviorType.UNKNOWN:
      return "UNKNOWN";
    case MisbehaviorType.DUPLICATE_VOTE:
      return "DUPLICATE_VOTE";
    case MisbehaviorType.LIGHT_CLIENT_ATTACK:
      return "LIGHT_CLIENT_ATTACK";
    case MisbehaviorType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Request {
  echo?: RequestEcho;
  flush?: RequestFlush;
  info?: RequestInfo;
  initChain?: RequestInitChain;
  query?: RequestQuery;
  beginBlock?: RequestBeginBlock;
  checkTx?: RequestCheckTx;
  deliverTx?: RequestDeliverTx;
  endBlock?: RequestEndBlock;
  commit?: RequestCommit;
  listSnapshots?: RequestListSnapshots;
  offerSnapshot?: RequestOfferSnapshot;
  loadSnapshotChunk?: RequestLoadSnapshotChunk;
  applySnapshotChunk?: RequestApplySnapshotChunk;
  prepareProposal?: RequestPrepareProposal;
  processProposal?: RequestProcessProposal;
}
export interface RequestProtoMsg {
  typeUrl: "/tendermint.abci.Request";
  value: Uint8Array;
}
export interface RequestAmino {
  echo?: RequestEchoAmino;
  flush?: RequestFlushAmino;
  info?: RequestInfoAmino;
  init_chain?: RequestInitChainAmino;
  query?: RequestQueryAmino;
  begin_block?: RequestBeginBlockAmino;
  check_tx?: RequestCheckTxAmino;
  deliver_tx?: RequestDeliverTxAmino;
  end_block?: RequestEndBlockAmino;
  commit?: RequestCommitAmino;
  list_snapshots?: RequestListSnapshotsAmino;
  offer_snapshot?: RequestOfferSnapshotAmino;
  load_snapshot_chunk?: RequestLoadSnapshotChunkAmino;
  apply_snapshot_chunk?: RequestApplySnapshotChunkAmino;
  prepare_proposal?: RequestPrepareProposalAmino;
  process_proposal?: RequestProcessProposalAmino;
}
export interface RequestAminoMsg {
  type: "/tendermint.abci.Request";
  value: RequestAmino;
}
export interface RequestSDKType {
  echo?: RequestEchoSDKType;
  flush?: RequestFlushSDKType;
  info?: RequestInfoSDKType;
  init_chain?: RequestInitChainSDKType;
  query?: RequestQuerySDKType;
  begin_block?: RequestBeginBlockSDKType;
  check_tx?: RequestCheckTxSDKType;
  deliver_tx?: RequestDeliverTxSDKType;
  end_block?: RequestEndBlockSDKType;
  commit?: RequestCommitSDKType;
  list_snapshots?: RequestListSnapshotsSDKType;
  offer_snapshot?: RequestOfferSnapshotSDKType;
  load_snapshot_chunk?: RequestLoadSnapshotChunkSDKType;
  apply_snapshot_chunk?: RequestApplySnapshotChunkSDKType;
  prepare_proposal?: RequestPrepareProposalSDKType;
  process_proposal?: RequestProcessProposalSDKType;
}
export interface RequestEcho {
  message: string;
}
export interface RequestEchoProtoMsg {
  typeUrl: "/tendermint.abci.RequestEcho";
  value: Uint8Array;
}
export interface RequestEchoAmino {
  message?: string;
}
export interface RequestEchoAminoMsg {
  type: "/tendermint.abci.RequestEcho";
  value: RequestEchoAmino;
}
export interface RequestEchoSDKType {
  message: string;
}
export interface RequestFlush {}
export interface RequestFlushProtoMsg {
  typeUrl: "/tendermint.abci.RequestFlush";
  value: Uint8Array;
}
export interface RequestFlushAmino {}
export interface RequestFlushAminoMsg {
  type: "/tendermint.abci.RequestFlush";
  value: RequestFlushAmino;
}
export interface RequestFlushSDKType {}
export interface RequestInfo {
  version: string;
  blockVersion: bigint;
  p2pVersion: bigint;
  abciVersion: string;
}
export interface RequestInfoProtoMsg {
  typeUrl: "/tendermint.abci.RequestInfo";
  value: Uint8Array;
}
export interface RequestInfoAmino {
  version?: string;
  block_version?: string;
  p2p_version?: string;
  abci_version?: string;
}
export interface RequestInfoAminoMsg {
  type: "/tendermint.abci.RequestInfo";
  value: RequestInfoAmino;
}
export interface RequestInfoSDKType {
  version: string;
  block_version: bigint;
  p2p_version: bigint;
  abci_version: string;
}
export interface RequestInitChain {
  time: Date;
  chainId: string;
  consensusParams?: ConsensusParams;
  validators: ValidatorUpdate[];
  appStateBytes: Uint8Array;
  initialHeight: bigint;
}
export interface RequestInitChainProtoMsg {
  typeUrl: "/tendermint.abci.RequestInitChain";
  value: Uint8Array;
}
export interface RequestInitChainAmino {
  time?: string;
  chain_id?: string;
  consensus_params?: ConsensusParamsAmino;
  validators?: ValidatorUpdateAmino[];
  app_state_bytes?: string;
  initial_height?: string;
}
export interface RequestInitChainAminoMsg {
  type: "/tendermint.abci.RequestInitChain";
  value: RequestInitChainAmino;
}
export interface RequestInitChainSDKType {
  time: Date;
  chain_id: string;
  consensus_params?: ConsensusParamsSDKType;
  validators: ValidatorUpdateSDKType[];
  app_state_bytes: Uint8Array;
  initial_height: bigint;
}
export interface RequestQuery {
  data: Uint8Array;
  path: string;
  height: bigint;
  prove: boolean;
}
export interface RequestQueryProtoMsg {
  typeUrl: "/tendermint.abci.RequestQuery";
  value: Uint8Array;
}
export interface RequestQueryAmino {
  data?: string;
  path?: string;
  height?: string;
  prove?: boolean;
}
export interface RequestQueryAminoMsg {
  type: "/tendermint.abci.RequestQuery";
  value: RequestQueryAmino;
}
export interface RequestQuerySDKType {
  data: Uint8Array;
  path: string;
  height: bigint;
  prove: boolean;
}
export interface RequestBeginBlock {
  hash: Uint8Array;
  header: Header;
  lastCommitInfo: CommitInfo;
  byzantineValidators: Misbehavior[];
}
export interface RequestBeginBlockProtoMsg {
  typeUrl: "/tendermint.abci.RequestBeginBlock";
  value: Uint8Array;
}
export interface RequestBeginBlockAmino {
  hash?: string;
  header?: HeaderAmino;
  last_commit_info?: CommitInfoAmino;
  byzantine_validators?: MisbehaviorAmino[];
}
export interface RequestBeginBlockAminoMsg {
  type: "/tendermint.abci.RequestBeginBlock";
  value: RequestBeginBlockAmino;
}
export interface RequestBeginBlockSDKType {
  hash: Uint8Array;
  header: HeaderSDKType;
  last_commit_info: CommitInfoSDKType;
  byzantine_validators: MisbehaviorSDKType[];
}
export interface RequestCheckTx {
  tx: Uint8Array;
  type: CheckTxType;
}
export interface RequestCheckTxProtoMsg {
  typeUrl: "/tendermint.abci.RequestCheckTx";
  value: Uint8Array;
}
export interface RequestCheckTxAmino {
  tx?: string;
  type?: CheckTxType;
}
export interface RequestCheckTxAminoMsg {
  type: "/tendermint.abci.RequestCheckTx";
  value: RequestCheckTxAmino;
}
export interface RequestCheckTxSDKType {
  tx: Uint8Array;
  type: CheckTxType;
}
export interface RequestDeliverTx {
  tx: Uint8Array;
}
export interface RequestDeliverTxProtoMsg {
  typeUrl: "/tendermint.abci.RequestDeliverTx";
  value: Uint8Array;
}
export interface RequestDeliverTxAmino {
  tx?: string;
}
export interface RequestDeliverTxAminoMsg {
  type: "/tendermint.abci.RequestDeliverTx";
  value: RequestDeliverTxAmino;
}
export interface RequestDeliverTxSDKType {
  tx: Uint8Array;
}
export interface RequestEndBlock {
  height: bigint;
}
export interface RequestEndBlockProtoMsg {
  typeUrl: "/tendermint.abci.RequestEndBlock";
  value: Uint8Array;
}
export interface RequestEndBlockAmino {
  height?: string;
}
export interface RequestEndBlockAminoMsg {
  type: "/tendermint.abci.RequestEndBlock";
  value: RequestEndBlockAmino;
}
export interface RequestEndBlockSDKType {
  height: bigint;
}
export interface RequestCommit {}
export interface RequestCommitProtoMsg {
  typeUrl: "/tendermint.abci.RequestCommit";
  value: Uint8Array;
}
export interface RequestCommitAmino {}
export interface RequestCommitAminoMsg {
  type: "/tendermint.abci.RequestCommit";
  value: RequestCommitAmino;
}
export interface RequestCommitSDKType {}
/** lists available snapshots */
export interface RequestListSnapshots {}
export interface RequestListSnapshotsProtoMsg {
  typeUrl: "/tendermint.abci.RequestListSnapshots";
  value: Uint8Array;
}
/** lists available snapshots */
export interface RequestListSnapshotsAmino {}
export interface RequestListSnapshotsAminoMsg {
  type: "/tendermint.abci.RequestListSnapshots";
  value: RequestListSnapshotsAmino;
}
/** lists available snapshots */
export interface RequestListSnapshotsSDKType {}
/** offers a snapshot to the application */
export interface RequestOfferSnapshot {
  /** snapshot offered by peers */
  snapshot?: Snapshot;
  /** light client-verified app hash for snapshot height */
  appHash: Uint8Array;
}
export interface RequestOfferSnapshotProtoMsg {
  typeUrl: "/tendermint.abci.RequestOfferSnapshot";
  value: Uint8Array;
}
/** offers a snapshot to the application */
export interface RequestOfferSnapshotAmino {
  /** snapshot offered by peers */
  snapshot?: SnapshotAmino;
  /** light client-verified app hash for snapshot height */
  app_hash?: string;
}
export interface RequestOfferSnapshotAminoMsg {
  type: "/tendermint.abci.RequestOfferSnapshot";
  value: RequestOfferSnapshotAmino;
}
/** offers a snapshot to the application */
export interface RequestOfferSnapshotSDKType {
  snapshot?: SnapshotSDKType;
  app_hash: Uint8Array;
}
/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunk {
  height: bigint;
  format: number;
  chunk: number;
}
export interface RequestLoadSnapshotChunkProtoMsg {
  typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk";
  value: Uint8Array;
}
/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunkAmino {
  height?: string;
  format?: number;
  chunk?: number;
}
export interface RequestLoadSnapshotChunkAminoMsg {
  type: "/tendermint.abci.RequestLoadSnapshotChunk";
  value: RequestLoadSnapshotChunkAmino;
}
/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunkSDKType {
  height: bigint;
  format: number;
  chunk: number;
}
/** Applies a snapshot chunk */
export interface RequestApplySnapshotChunk {
  index: number;
  chunk: Uint8Array;
  sender: string;
}
export interface RequestApplySnapshotChunkProtoMsg {
  typeUrl: "/tendermint.abci.RequestApplySnapshotChunk";
  value: Uint8Array;
}
/** Applies a snapshot chunk */
export interface RequestApplySnapshotChunkAmino {
  index?: number;
  chunk?: string;
  sender?: string;
}
export interface RequestApplySnapshotChunkAminoMsg {
  type: "/tendermint.abci.RequestApplySnapshotChunk";
  value: RequestApplySnapshotChunkAmino;
}
/** Applies a snapshot chunk */
export interface RequestApplySnapshotChunkSDKType {
  index: number;
  chunk: Uint8Array;
  sender: string;
}
export interface RequestPrepareProposal {
  /** the modified transactions cannot exceed this size. */
  maxTxBytes: bigint;
  /**
   * txs is an array of transactions that will be included in a block,
   * sent to the app for possible modifications.
   */
  txs: Uint8Array[];
  localLastCommit: ExtendedCommitInfo;
  misbehavior: Misbehavior[];
  height: bigint;
  time: Date;
  nextValidatorsHash: Uint8Array;
  /** address of the public key of the validator proposing the block. */
  proposerAddress: Uint8Array;
}
export interface RequestPrepareProposalProtoMsg {
  typeUrl: "/tendermint.abci.RequestPrepareProposal";
  value: Uint8Array;
}
export interface RequestPrepareProposalAmino {
  /** the modified transactions cannot exceed this size. */
  max_tx_bytes?: string;
  /**
   * txs is an array of transactions that will be included in a block,
   * sent to the app for possible modifications.
   */
  txs?: string[];
  local_last_commit?: ExtendedCommitInfoAmino;
  misbehavior?: MisbehaviorAmino[];
  height?: string;
  time?: string;
  next_validators_hash?: string;
  /** address of the public key of the validator proposing the block. */
  proposer_address?: string;
}
export interface RequestPrepareProposalAminoMsg {
  type: "/tendermint.abci.RequestPrepareProposal";
  value: RequestPrepareProposalAmino;
}
export interface RequestPrepareProposalSDKType {
  max_tx_bytes: bigint;
  txs: Uint8Array[];
  local_last_commit: ExtendedCommitInfoSDKType;
  misbehavior: MisbehaviorSDKType[];
  height: bigint;
  time: Date;
  next_validators_hash: Uint8Array;
  proposer_address: Uint8Array;
}
export interface RequestProcessProposal {
  txs: Uint8Array[];
  proposedLastCommit: CommitInfo;
  misbehavior: Misbehavior[];
  /** hash is the merkle root hash of the fields of the proposed block. */
  hash: Uint8Array;
  height: bigint;
  time: Date;
  nextValidatorsHash: Uint8Array;
  /** address of the public key of the original proposer of the block. */
  proposerAddress: Uint8Array;
}
export interface RequestProcessProposalProtoMsg {
  typeUrl: "/tendermint.abci.RequestProcessProposal";
  value: Uint8Array;
}
export interface RequestProcessProposalAmino {
  txs?: string[];
  proposed_last_commit?: CommitInfoAmino;
  misbehavior?: MisbehaviorAmino[];
  /** hash is the merkle root hash of the fields of the proposed block. */
  hash?: string;
  height?: string;
  time?: string;
  next_validators_hash?: string;
  /** address of the public key of the original proposer of the block. */
  proposer_address?: string;
}
export interface RequestProcessProposalAminoMsg {
  type: "/tendermint.abci.RequestProcessProposal";
  value: RequestProcessProposalAmino;
}
export interface RequestProcessProposalSDKType {
  txs: Uint8Array[];
  proposed_last_commit: CommitInfoSDKType;
  misbehavior: MisbehaviorSDKType[];
  hash: Uint8Array;
  height: bigint;
  time: Date;
  next_validators_hash: Uint8Array;
  proposer_address: Uint8Array;
}
export interface Response {
  exception?: ResponseException;
  echo?: ResponseEcho;
  flush?: ResponseFlush;
  info?: ResponseInfo;
  initChain?: ResponseInitChain;
  query?: ResponseQuery;
  beginBlock?: ResponseBeginBlock;
  checkTx?: ResponseCheckTx;
  deliverTx?: ResponseDeliverTx;
  endBlock?: ResponseEndBlock;
  commit?: ResponseCommit;
  listSnapshots?: ResponseListSnapshots;
  offerSnapshot?: ResponseOfferSnapshot;
  loadSnapshotChunk?: ResponseLoadSnapshotChunk;
  applySnapshotChunk?: ResponseApplySnapshotChunk;
  prepareProposal?: ResponsePrepareProposal;
  processProposal?: ResponseProcessProposal;
}
export interface ResponseProtoMsg {
  typeUrl: "/tendermint.abci.Response";
  value: Uint8Array;
}
export interface ResponseAmino {
  exception?: ResponseExceptionAmino;
  echo?: ResponseEchoAmino;
  flush?: ResponseFlushAmino;
  info?: ResponseInfoAmino;
  init_chain?: ResponseInitChainAmino;
  query?: ResponseQueryAmino;
  begin_block?: ResponseBeginBlockAmino;
  check_tx?: ResponseCheckTxAmino;
  deliver_tx?: ResponseDeliverTxAmino;
  end_block?: ResponseEndBlockAmino;
  commit?: ResponseCommitAmino;
  list_snapshots?: ResponseListSnapshotsAmino;
  offer_snapshot?: ResponseOfferSnapshotAmino;
  load_snapshot_chunk?: ResponseLoadSnapshotChunkAmino;
  apply_snapshot_chunk?: ResponseApplySnapshotChunkAmino;
  prepare_proposal?: ResponsePrepareProposalAmino;
  process_proposal?: ResponseProcessProposalAmino;
}
export interface ResponseAminoMsg {
  type: "/tendermint.abci.Response";
  value: ResponseAmino;
}
export interface ResponseSDKType {
  exception?: ResponseExceptionSDKType;
  echo?: ResponseEchoSDKType;
  flush?: ResponseFlushSDKType;
  info?: ResponseInfoSDKType;
  init_chain?: ResponseInitChainSDKType;
  query?: ResponseQuerySDKType;
  begin_block?: ResponseBeginBlockSDKType;
  check_tx?: ResponseCheckTxSDKType;
  deliver_tx?: ResponseDeliverTxSDKType;
  end_block?: ResponseEndBlockSDKType;
  commit?: ResponseCommitSDKType;
  list_snapshots?: ResponseListSnapshotsSDKType;
  offer_snapshot?: ResponseOfferSnapshotSDKType;
  load_snapshot_chunk?: ResponseLoadSnapshotChunkSDKType;
  apply_snapshot_chunk?: ResponseApplySnapshotChunkSDKType;
  prepare_proposal?: ResponsePrepareProposalSDKType;
  process_proposal?: ResponseProcessProposalSDKType;
}
/** nondeterministic */
export interface ResponseException {
  error: string;
}
export interface ResponseExceptionProtoMsg {
  typeUrl: "/tendermint.abci.ResponseException";
  value: Uint8Array;
}
/** nondeterministic */
export interface ResponseExceptionAmino {
  error?: string;
}
export interface ResponseExceptionAminoMsg {
  type: "/tendermint.abci.ResponseException";
  value: ResponseExceptionAmino;
}
/** nondeterministic */
export interface ResponseExceptionSDKType {
  error: string;
}
export interface ResponseEcho {
  message: string;
}
export interface ResponseEchoProtoMsg {
  typeUrl: "/tendermint.abci.ResponseEcho";
  value: Uint8Array;
}
export interface ResponseEchoAmino {
  message?: string;
}
export interface ResponseEchoAminoMsg {
  type: "/tendermint.abci.ResponseEcho";
  value: ResponseEchoAmino;
}
export interface ResponseEchoSDKType {
  message: string;
}
export interface ResponseFlush {}
export interface ResponseFlushProtoMsg {
  typeUrl: "/tendermint.abci.ResponseFlush";
  value: Uint8Array;
}
export interface ResponseFlushAmino {}
export interface ResponseFlushAminoMsg {
  type: "/tendermint.abci.ResponseFlush";
  value: ResponseFlushAmino;
}
export interface ResponseFlushSDKType {}
export interface ResponseInfo {
  data: string;
  version: string;
  appVersion: bigint;
  lastBlockHeight: bigint;
  lastBlockAppHash: Uint8Array;
}
export interface ResponseInfoProtoMsg {
  typeUrl: "/tendermint.abci.ResponseInfo";
  value: Uint8Array;
}
export interface ResponseInfoAmino {
  data?: string;
  version?: string;
  app_version?: string;
  last_block_height?: string;
  last_block_app_hash?: string;
}
export interface ResponseInfoAminoMsg {
  type: "/tendermint.abci.ResponseInfo";
  value: ResponseInfoAmino;
}
export interface ResponseInfoSDKType {
  data: string;
  version: string;
  app_version: bigint;
  last_block_height: bigint;
  last_block_app_hash: Uint8Array;
}
export interface ResponseInitChain {
  consensusParams?: ConsensusParams;
  validators: ValidatorUpdate[];
  appHash: Uint8Array;
}
export interface ResponseInitChainProtoMsg {
  typeUrl: "/tendermint.abci.ResponseInitChain";
  value: Uint8Array;
}
export interface ResponseInitChainAmino {
  consensus_params?: ConsensusParamsAmino;
  validators?: ValidatorUpdateAmino[];
  app_hash?: string;
}
export interface ResponseInitChainAminoMsg {
  type: "/tendermint.abci.ResponseInitChain";
  value: ResponseInitChainAmino;
}
export interface ResponseInitChainSDKType {
  consensus_params?: ConsensusParamsSDKType;
  validators: ValidatorUpdateSDKType[];
  app_hash: Uint8Array;
}
export interface ResponseQuery {
  code: number;
  /** bytes data = 2; // use "value" instead. */
  log: string;
  /** nondeterministic */
  info: string;
  index: bigint;
  key: Uint8Array;
  value: Uint8Array;
  proofOps?: ProofOps;
  height: bigint;
  codespace: string;
}
export interface ResponseQueryProtoMsg {
  typeUrl: "/tendermint.abci.ResponseQuery";
  value: Uint8Array;
}
export interface ResponseQueryAmino {
  code?: number;
  /** bytes data = 2; // use "value" instead. */
  log?: string;
  /** nondeterministic */
  info?: string;
  index?: string;
  key?: string;
  value?: string;
  proof_ops?: ProofOpsAmino;
  height?: string;
  codespace?: string;
}
export interface ResponseQueryAminoMsg {
  type: "/tendermint.abci.ResponseQuery";
  value: ResponseQueryAmino;
}
export interface ResponseQuerySDKType {
  code: number;
  log: string;
  info: string;
  index: bigint;
  key: Uint8Array;
  value: Uint8Array;
  proof_ops?: ProofOpsSDKType;
  height: bigint;
  codespace: string;
}
export interface ResponseBeginBlock {
  events: Event[];
}
export interface ResponseBeginBlockProtoMsg {
  typeUrl: "/tendermint.abci.ResponseBeginBlock";
  value: Uint8Array;
}
export interface ResponseBeginBlockAmino {
  events?: EventAmino[];
}
export interface ResponseBeginBlockAminoMsg {
  type: "/tendermint.abci.ResponseBeginBlock";
  value: ResponseBeginBlockAmino;
}
export interface ResponseBeginBlockSDKType {
  events: EventSDKType[];
}
export interface ResponseCheckTx {
  code: number;
  data: Uint8Array;
  /** nondeterministic */
  log: string;
  /** nondeterministic */
  info: string;
  gasWanted: bigint;
  gasUsed: bigint;
  events: Event[];
  codespace: string;
  sender: string;
  priority: bigint;
  /**
   * mempool_error is set by CometBFT.
   * ABCI applictions creating a ResponseCheckTX should not set mempool_error.
   */
  mempoolError: string;
}
export interface ResponseCheckTxProtoMsg {
  typeUrl: "/tendermint.abci.ResponseCheckTx";
  value: Uint8Array;
}
export interface ResponseCheckTxAmino {
  code?: number;
  data?: string;
  /** nondeterministic */
  log?: string;
  /** nondeterministic */
  info?: string;
  gas_wanted?: string;
  gas_used?: string;
  events?: EventAmino[];
  codespace?: string;
  sender?: string;
  priority?: string;
  /**
   * mempool_error is set by CometBFT.
   * ABCI applictions creating a ResponseCheckTX should not set mempool_error.
   */
  mempool_error?: string;
}
export interface ResponseCheckTxAminoMsg {
  type: "/tendermint.abci.ResponseCheckTx";
  value: ResponseCheckTxAmino;
}
export interface ResponseCheckTxSDKType {
  code: number;
  data: Uint8Array;
  log: string;
  info: string;
  gas_wanted: bigint;
  gas_used: bigint;
  events: EventSDKType[];
  codespace: string;
  sender: string;
  priority: bigint;
  mempool_error: string;
}
export interface ResponseDeliverTx {
  code: number;
  data: Uint8Array;
  /** nondeterministic */
  log: string;
  /** nondeterministic */
  info: string;
  gasWanted: bigint;
  gasUsed: bigint;
  events: Event[];
  codespace: string;
}
export interface ResponseDeliverTxProtoMsg {
  typeUrl: "/tendermint.abci.ResponseDeliverTx";
  value: Uint8Array;
}
export interface ResponseDeliverTxAmino {
  code?: number;
  data?: string;
  /** nondeterministic */
  log?: string;
  /** nondeterministic */
  info?: string;
  gas_wanted?: string;
  gas_used?: string;
  events?: EventAmino[];
  codespace?: string;
}
export interface ResponseDeliverTxAminoMsg {
  type: "/tendermint.abci.ResponseDeliverTx";
  value: ResponseDeliverTxAmino;
}
export interface ResponseDeliverTxSDKType {
  code: number;
  data: Uint8Array;
  log: string;
  info: string;
  gas_wanted: bigint;
  gas_used: bigint;
  events: EventSDKType[];
  codespace: string;
}
export interface ResponseEndBlock {
  validatorUpdates: ValidatorUpdate[];
  consensusParamUpdates?: ConsensusParams;
  events: Event[];
}
export interface ResponseEndBlockProtoMsg {
  typeUrl: "/tendermint.abci.ResponseEndBlock";
  value: Uint8Array;
}
export interface ResponseEndBlockAmino {
  validator_updates?: ValidatorUpdateAmino[];
  consensus_param_updates?: ConsensusParamsAmino;
  events?: EventAmino[];
}
export interface ResponseEndBlockAminoMsg {
  type: "/tendermint.abci.ResponseEndBlock";
  value: ResponseEndBlockAmino;
}
export interface ResponseEndBlockSDKType {
  validator_updates: ValidatorUpdateSDKType[];
  consensus_param_updates?: ConsensusParamsSDKType;
  events: EventSDKType[];
}
export interface ResponseCommit {
  /** reserve 1 */
  data: Uint8Array;
  retainHeight: bigint;
}
export interface ResponseCommitProtoMsg {
  typeUrl: "/tendermint.abci.ResponseCommit";
  value: Uint8Array;
}
export interface ResponseCommitAmino {
  /** reserve 1 */
  data?: string;
  retain_height?: string;
}
export interface ResponseCommitAminoMsg {
  type: "/tendermint.abci.ResponseCommit";
  value: ResponseCommitAmino;
}
export interface ResponseCommitSDKType {
  data: Uint8Array;
  retain_height: bigint;
}
export interface ResponseListSnapshots {
  snapshots: Snapshot[];
}
export interface ResponseListSnapshotsProtoMsg {
  typeUrl: "/tendermint.abci.ResponseListSnapshots";
  value: Uint8Array;
}
export interface ResponseListSnapshotsAmino {
  snapshots?: SnapshotAmino[];
}
export interface ResponseListSnapshotsAminoMsg {
  type: "/tendermint.abci.ResponseListSnapshots";
  value: ResponseListSnapshotsAmino;
}
export interface ResponseListSnapshotsSDKType {
  snapshots: SnapshotSDKType[];
}
export interface ResponseOfferSnapshot {
  result: ResponseOfferSnapshot_Result;
}
export interface ResponseOfferSnapshotProtoMsg {
  typeUrl: "/tendermint.abci.ResponseOfferSnapshot";
  value: Uint8Array;
}
export interface ResponseOfferSnapshotAmino {
  result?: ResponseOfferSnapshot_Result;
}
export interface ResponseOfferSnapshotAminoMsg {
  type: "/tendermint.abci.ResponseOfferSnapshot";
  value: ResponseOfferSnapshotAmino;
}
export interface ResponseOfferSnapshotSDKType {
  result: ResponseOfferSnapshot_Result;
}
export interface ResponseLoadSnapshotChunk {
  chunk: Uint8Array;
}
export interface ResponseLoadSnapshotChunkProtoMsg {
  typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk";
  value: Uint8Array;
}
export interface ResponseLoadSnapshotChunkAmino {
  chunk?: string;
}
export interface ResponseLoadSnapshotChunkAminoMsg {
  type: "/tendermint.abci.ResponseLoadSnapshotChunk";
  value: ResponseLoadSnapshotChunkAmino;
}
export interface ResponseLoadSnapshotChunkSDKType {
  chunk: Uint8Array;
}
export interface ResponseApplySnapshotChunk {
  result: ResponseApplySnapshotChunk_Result;
  /** Chunks to refetch and reapply */
  refetchChunks: number[];
  /** Chunk senders to reject and ban */
  rejectSenders: string[];
}
export interface ResponseApplySnapshotChunkProtoMsg {
  typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk";
  value: Uint8Array;
}
export interface ResponseApplySnapshotChunkAmino {
  result?: ResponseApplySnapshotChunk_Result;
  /** Chunks to refetch and reapply */
  refetch_chunks?: number[];
  /** Chunk senders to reject and ban */
  reject_senders?: string[];
}
export interface ResponseApplySnapshotChunkAminoMsg {
  type: "/tendermint.abci.ResponseApplySnapshotChunk";
  value: ResponseApplySnapshotChunkAmino;
}
export interface ResponseApplySnapshotChunkSDKType {
  result: ResponseApplySnapshotChunk_Result;
  refetch_chunks: number[];
  reject_senders: string[];
}
export interface ResponsePrepareProposal {
  txs: Uint8Array[];
}
export interface ResponsePrepareProposalProtoMsg {
  typeUrl: "/tendermint.abci.ResponsePrepareProposal";
  value: Uint8Array;
}
export interface ResponsePrepareProposalAmino {
  txs?: string[];
}
export interface ResponsePrepareProposalAminoMsg {
  type: "/tendermint.abci.ResponsePrepareProposal";
  value: ResponsePrepareProposalAmino;
}
export interface ResponsePrepareProposalSDKType {
  txs: Uint8Array[];
}
export interface ResponseProcessProposal {
  status: ResponseProcessProposal_ProposalStatus;
}
export interface ResponseProcessProposalProtoMsg {
  typeUrl: "/tendermint.abci.ResponseProcessProposal";
  value: Uint8Array;
}
export interface ResponseProcessProposalAmino {
  status?: ResponseProcessProposal_ProposalStatus;
}
export interface ResponseProcessProposalAminoMsg {
  type: "/tendermint.abci.ResponseProcessProposal";
  value: ResponseProcessProposalAmino;
}
export interface ResponseProcessProposalSDKType {
  status: ResponseProcessProposal_ProposalStatus;
}
export interface CommitInfo {
  round: number;
  votes: VoteInfo[];
}
export interface CommitInfoProtoMsg {
  typeUrl: "/tendermint.abci.CommitInfo";
  value: Uint8Array;
}
export interface CommitInfoAmino {
  round?: number;
  votes?: VoteInfoAmino[];
}
export interface CommitInfoAminoMsg {
  type: "/tendermint.abci.CommitInfo";
  value: CommitInfoAmino;
}
export interface CommitInfoSDKType {
  round: number;
  votes: VoteInfoSDKType[];
}
export interface ExtendedCommitInfo {
  /** The round at which the block proposer decided in the previous height. */
  round: number;
  /**
   * List of validators' addresses in the last validator set with their voting
   * information, including vote extensions.
   */
  votes: ExtendedVoteInfo[];
}
export interface ExtendedCommitInfoProtoMsg {
  typeUrl: "/tendermint.abci.ExtendedCommitInfo";
  value: Uint8Array;
}
export interface ExtendedCommitInfoAmino {
  /** The round at which the block proposer decided in the previous height. */
  round?: number;
  /**
   * List of validators' addresses in the last validator set with their voting
   * information, including vote extensions.
   */
  votes?: ExtendedVoteInfoAmino[];
}
export interface ExtendedCommitInfoAminoMsg {
  type: "/tendermint.abci.ExtendedCommitInfo";
  value: ExtendedCommitInfoAmino;
}
export interface ExtendedCommitInfoSDKType {
  round: number;
  votes: ExtendedVoteInfoSDKType[];
}
/**
 * Event allows application developers to attach additional information to
 * ResponseBeginBlock, ResponseEndBlock, ResponseCheckTx and ResponseDeliverTx.
 * Later, transactions may be queried using these events.
 */
export interface Event {
  type: string;
  attributes: EventAttribute[];
}
export interface EventProtoMsg {
  typeUrl: "/tendermint.abci.Event";
  value: Uint8Array;
}
/**
 * Event allows application developers to attach additional information to
 * ResponseBeginBlock, ResponseEndBlock, ResponseCheckTx and ResponseDeliverTx.
 * Later, transactions may be queried using these events.
 */
export interface EventAmino {
  type?: string;
  attributes?: EventAttributeAmino[];
}
export interface EventAminoMsg {
  type: "/tendermint.abci.Event";
  value: EventAmino;
}
/**
 * Event allows application developers to attach additional information to
 * ResponseBeginBlock, ResponseEndBlock, ResponseCheckTx and ResponseDeliverTx.
 * Later, transactions may be queried using these events.
 */
export interface EventSDKType {
  type: string;
  attributes: EventAttributeSDKType[];
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttribute {
  key: string;
  value: string;
  /** nondeterministic */
  index: boolean;
}
export interface EventAttributeProtoMsg {
  typeUrl: "/tendermint.abci.EventAttribute";
  value: Uint8Array;
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttributeAmino {
  key?: string;
  value?: string;
  /** nondeterministic */
  index?: boolean;
}
export interface EventAttributeAminoMsg {
  type: "/tendermint.abci.EventAttribute";
  value: EventAttributeAmino;
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttributeSDKType {
  key: string;
  value: string;
  index: boolean;
}
/**
 * TxResult contains results of executing the transaction.
 * 
 * One usage is indexing transaction results.
 */
export interface TxResult {
  height: bigint;
  index: number;
  tx: Uint8Array;
  result: ResponseDeliverTx;
}
export interface TxResultProtoMsg {
  typeUrl: "/tendermint.abci.TxResult";
  value: Uint8Array;
}
/**
 * TxResult contains results of executing the transaction.
 * 
 * One usage is indexing transaction results.
 */
export interface TxResultAmino {
  height?: string;
  index?: number;
  tx?: string;
  result?: ResponseDeliverTxAmino;
}
export interface TxResultAminoMsg {
  type: "/tendermint.abci.TxResult";
  value: TxResultAmino;
}
/**
 * TxResult contains results of executing the transaction.
 * 
 * One usage is indexing transaction results.
 */
export interface TxResultSDKType {
  height: bigint;
  index: number;
  tx: Uint8Array;
  result: ResponseDeliverTxSDKType;
}
/** Validator */
export interface Validator {
  /**
   * The first 20 bytes of SHA256(public key)
   * PubKey pub_key = 2 [(gogoproto.nullable)=false];
   */
  address: Uint8Array;
  /** The voting power */
  power: bigint;
}
export interface ValidatorProtoMsg {
  typeUrl: "/tendermint.abci.Validator";
  value: Uint8Array;
}
/** Validator */
export interface ValidatorAmino {
  /**
   * The first 20 bytes of SHA256(public key)
   * PubKey pub_key = 2 [(gogoproto.nullable)=false];
   */
  address?: string;
  /** The voting power */
  power?: string;
}
export interface ValidatorAminoMsg {
  type: "/tendermint.abci.Validator";
  value: ValidatorAmino;
}
/** Validator */
export interface ValidatorSDKType {
  address: Uint8Array;
  power: bigint;
}
/** ValidatorUpdate */
export interface ValidatorUpdate {
  pubKey: PublicKey;
  power: bigint;
}
export interface ValidatorUpdateProtoMsg {
  typeUrl: "/tendermint.abci.ValidatorUpdate";
  value: Uint8Array;
}
/** ValidatorUpdate */
export interface ValidatorUpdateAmino {
  pub_key?: PublicKeyAmino;
  power?: string;
}
export interface ValidatorUpdateAminoMsg {
  type: "/tendermint.abci.ValidatorUpdate";
  value: ValidatorUpdateAmino;
}
/** ValidatorUpdate */
export interface ValidatorUpdateSDKType {
  pub_key: PublicKeySDKType;
  power: bigint;
}
/** VoteInfo */
export interface VoteInfo {
  validator: Validator;
  signedLastBlock: boolean;
}
export interface VoteInfoProtoMsg {
  typeUrl: "/tendermint.abci.VoteInfo";
  value: Uint8Array;
}
/** VoteInfo */
export interface VoteInfoAmino {
  validator?: ValidatorAmino;
  signed_last_block?: boolean;
}
export interface VoteInfoAminoMsg {
  type: "/tendermint.abci.VoteInfo";
  value: VoteInfoAmino;
}
/** VoteInfo */
export interface VoteInfoSDKType {
  validator: ValidatorSDKType;
  signed_last_block: boolean;
}
export interface ExtendedVoteInfo {
  validator: Validator;
  signedLastBlock: boolean;
  /** Reserved for future use */
  voteExtension: Uint8Array;
}
export interface ExtendedVoteInfoProtoMsg {
  typeUrl: "/tendermint.abci.ExtendedVoteInfo";
  value: Uint8Array;
}
export interface ExtendedVoteInfoAmino {
  validator?: ValidatorAmino;
  signed_last_block?: boolean;
  /** Reserved for future use */
  vote_extension?: string;
}
export interface ExtendedVoteInfoAminoMsg {
  type: "/tendermint.abci.ExtendedVoteInfo";
  value: ExtendedVoteInfoAmino;
}
export interface ExtendedVoteInfoSDKType {
  validator: ValidatorSDKType;
  signed_last_block: boolean;
  vote_extension: Uint8Array;
}
export interface Misbehavior {
  type: MisbehaviorType;
  /** The offending validator */
  validator: Validator;
  /** The height when the offense occurred */
  height: bigint;
  /** The corresponding time where the offense occurred */
  time: Date;
  /**
   * Total voting power of the validator set in case the ABCI application does
   * not store historical validators.
   * https://github.com/tendermint/tendermint/issues/4581
   */
  totalVotingPower: bigint;
}
export interface MisbehaviorProtoMsg {
  typeUrl: "/tendermint.abci.Misbehavior";
  value: Uint8Array;
}
export interface MisbehaviorAmino {
  type?: MisbehaviorType;
  /** The offending validator */
  validator?: ValidatorAmino;
  /** The height when the offense occurred */
  height?: string;
  /** The corresponding time where the offense occurred */
  time?: string;
  /**
   * Total voting power of the validator set in case the ABCI application does
   * not store historical validators.
   * https://github.com/tendermint/tendermint/issues/4581
   */
  total_voting_power?: string;
}
export interface MisbehaviorAminoMsg {
  type: "/tendermint.abci.Misbehavior";
  value: MisbehaviorAmino;
}
export interface MisbehaviorSDKType {
  type: MisbehaviorType;
  validator: ValidatorSDKType;
  height: bigint;
  time: Date;
  total_voting_power: bigint;
}
export interface Snapshot {
  /** The height at which the snapshot was taken */
  height: bigint;
  /** The application-specific snapshot format */
  format: number;
  /** Number of chunks in the snapshot */
  chunks: number;
  /** Arbitrary snapshot hash, equal only if identical */
  hash: Uint8Array;
  /** Arbitrary application metadata */
  metadata: Uint8Array;
}
export interface SnapshotProtoMsg {
  typeUrl: "/tendermint.abci.Snapshot";
  value: Uint8Array;
}
export interface SnapshotAmino {
  /** The height at which the snapshot was taken */
  height?: string;
  /** The application-specific snapshot format */
  format?: number;
  /** Number of chunks in the snapshot */
  chunks?: number;
  /** Arbitrary snapshot hash, equal only if identical */
  hash?: string;
  /** Arbitrary application metadata */
  metadata?: string;
}
export interface SnapshotAminoMsg {
  type: "/tendermint.abci.Snapshot";
  value: SnapshotAmino;
}
export interface SnapshotSDKType {
  height: bigint;
  format: number;
  chunks: number;
  hash: Uint8Array;
  metadata: Uint8Array;
}
function createBaseRequest(): Request {
  return {
    echo: undefined,
    flush: undefined,
    info: undefined,
    initChain: undefined,
    query: undefined,
    beginBlock: undefined,
    checkTx: undefined,
    deliverTx: undefined,
    endBlock: undefined,
    commit: undefined,
    listSnapshots: undefined,
    offerSnapshot: undefined,
    loadSnapshotChunk: undefined,
    applySnapshotChunk: undefined,
    prepareProposal: undefined,
    processProposal: undefined
  };
}
export const Request = {
  typeUrl: "/tendermint.abci.Request",
  is(o: any): o is Request {
    return o && o.$typeUrl === Request.typeUrl;
  },
  isSDK(o: any): o is RequestSDKType {
    return o && o.$typeUrl === Request.typeUrl;
  },
  isAmino(o: any): o is RequestAmino {
    return o && o.$typeUrl === Request.typeUrl;
  },
  encode(message: Request, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.echo !== undefined) {
      RequestEcho.encode(message.echo, writer.uint32(10).fork()).ldelim();
    }
    if (message.flush !== undefined) {
      RequestFlush.encode(message.flush, writer.uint32(18).fork()).ldelim();
    }
    if (message.info !== undefined) {
      RequestInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
    }
    if (message.initChain !== undefined) {
      RequestInitChain.encode(message.initChain, writer.uint32(42).fork()).ldelim();
    }
    if (message.query !== undefined) {
      RequestQuery.encode(message.query, writer.uint32(50).fork()).ldelim();
    }
    if (message.beginBlock !== undefined) {
      RequestBeginBlock.encode(message.beginBlock, writer.uint32(58).fork()).ldelim();
    }
    if (message.checkTx !== undefined) {
      RequestCheckTx.encode(message.checkTx, writer.uint32(66).fork()).ldelim();
    }
    if (message.deliverTx !== undefined) {
      RequestDeliverTx.encode(message.deliverTx, writer.uint32(74).fork()).ldelim();
    }
    if (message.endBlock !== undefined) {
      RequestEndBlock.encode(message.endBlock, writer.uint32(82).fork()).ldelim();
    }
    if (message.commit !== undefined) {
      RequestCommit.encode(message.commit, writer.uint32(90).fork()).ldelim();
    }
    if (message.listSnapshots !== undefined) {
      RequestListSnapshots.encode(message.listSnapshots, writer.uint32(98).fork()).ldelim();
    }
    if (message.offerSnapshot !== undefined) {
      RequestOfferSnapshot.encode(message.offerSnapshot, writer.uint32(106).fork()).ldelim();
    }
    if (message.loadSnapshotChunk !== undefined) {
      RequestLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(114).fork()).ldelim();
    }
    if (message.applySnapshotChunk !== undefined) {
      RequestApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(122).fork()).ldelim();
    }
    if (message.prepareProposal !== undefined) {
      RequestPrepareProposal.encode(message.prepareProposal, writer.uint32(130).fork()).ldelim();
    }
    if (message.processProposal !== undefined) {
      RequestProcessProposal.encode(message.processProposal, writer.uint32(138).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Request {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.echo = RequestEcho.decode(reader, reader.uint32());
          break;
        case 2:
          message.flush = RequestFlush.decode(reader, reader.uint32());
          break;
        case 3:
          message.info = RequestInfo.decode(reader, reader.uint32());
          break;
        case 5:
          message.initChain = RequestInitChain.decode(reader, reader.uint32());
          break;
        case 6:
          message.query = RequestQuery.decode(reader, reader.uint32());
          break;
        case 7:
          message.beginBlock = RequestBeginBlock.decode(reader, reader.uint32());
          break;
        case 8:
          message.checkTx = RequestCheckTx.decode(reader, reader.uint32());
          break;
        case 9:
          message.deliverTx = RequestDeliverTx.decode(reader, reader.uint32());
          break;
        case 10:
          message.endBlock = RequestEndBlock.decode(reader, reader.uint32());
          break;
        case 11:
          message.commit = RequestCommit.decode(reader, reader.uint32());
          break;
        case 12:
          message.listSnapshots = RequestListSnapshots.decode(reader, reader.uint32());
          break;
        case 13:
          message.offerSnapshot = RequestOfferSnapshot.decode(reader, reader.uint32());
          break;
        case 14:
          message.loadSnapshotChunk = RequestLoadSnapshotChunk.decode(reader, reader.uint32());
          break;
        case 15:
          message.applySnapshotChunk = RequestApplySnapshotChunk.decode(reader, reader.uint32());
          break;
        case 16:
          message.prepareProposal = RequestPrepareProposal.decode(reader, reader.uint32());
          break;
        case 17:
          message.processProposal = RequestProcessProposal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Request>): Request {
    const message = createBaseRequest();
    message.echo = object.echo !== undefined && object.echo !== null ? RequestEcho.fromPartial(object.echo) : undefined;
    message.flush = object.flush !== undefined && object.flush !== null ? RequestFlush.fromPartial(object.flush) : undefined;
    message.info = object.info !== undefined && object.info !== null ? RequestInfo.fromPartial(object.info) : undefined;
    message.initChain = object.initChain !== undefined && object.initChain !== null ? RequestInitChain.fromPartial(object.initChain) : undefined;
    message.query = object.query !== undefined && object.query !== null ? RequestQuery.fromPartial(object.query) : undefined;
    message.beginBlock = object.beginBlock !== undefined && object.beginBlock !== null ? RequestBeginBlock.fromPartial(object.beginBlock) : undefined;
    message.checkTx = object.checkTx !== undefined && object.checkTx !== null ? RequestCheckTx.fromPartial(object.checkTx) : undefined;
    message.deliverTx = object.deliverTx !== undefined && object.deliverTx !== null ? RequestDeliverTx.fromPartial(object.deliverTx) : undefined;
    message.endBlock = object.endBlock !== undefined && object.endBlock !== null ? RequestEndBlock.fromPartial(object.endBlock) : undefined;
    message.commit = object.commit !== undefined && object.commit !== null ? RequestCommit.fromPartial(object.commit) : undefined;
    message.listSnapshots = object.listSnapshots !== undefined && object.listSnapshots !== null ? RequestListSnapshots.fromPartial(object.listSnapshots) : undefined;
    message.offerSnapshot = object.offerSnapshot !== undefined && object.offerSnapshot !== null ? RequestOfferSnapshot.fromPartial(object.offerSnapshot) : undefined;
    message.loadSnapshotChunk = object.loadSnapshotChunk !== undefined && object.loadSnapshotChunk !== null ? RequestLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk) : undefined;
    message.applySnapshotChunk = object.applySnapshotChunk !== undefined && object.applySnapshotChunk !== null ? RequestApplySnapshotChunk.fromPartial(object.applySnapshotChunk) : undefined;
    message.prepareProposal = object.prepareProposal !== undefined && object.prepareProposal !== null ? RequestPrepareProposal.fromPartial(object.prepareProposal) : undefined;
    message.processProposal = object.processProposal !== undefined && object.processProposal !== null ? RequestProcessProposal.fromPartial(object.processProposal) : undefined;
    return message;
  },
  fromAmino(object: RequestAmino): Request {
    const message = createBaseRequest();
    if (object.echo !== undefined && object.echo !== null) {
      message.echo = RequestEcho.fromAmino(object.echo);
    }
    if (object.flush !== undefined && object.flush !== null) {
      message.flush = RequestFlush.fromAmino(object.flush);
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = RequestInfo.fromAmino(object.info);
    }
    if (object.init_chain !== undefined && object.init_chain !== null) {
      message.initChain = RequestInitChain.fromAmino(object.init_chain);
    }
    if (object.query !== undefined && object.query !== null) {
      message.query = RequestQuery.fromAmino(object.query);
    }
    if (object.begin_block !== undefined && object.begin_block !== null) {
      message.beginBlock = RequestBeginBlock.fromAmino(object.begin_block);
    }
    if (object.check_tx !== undefined && object.check_tx !== null) {
      message.checkTx = RequestCheckTx.fromAmino(object.check_tx);
    }
    if (object.deliver_tx !== undefined && object.deliver_tx !== null) {
      message.deliverTx = RequestDeliverTx.fromAmino(object.deliver_tx);
    }
    if (object.end_block !== undefined && object.end_block !== null) {
      message.endBlock = RequestEndBlock.fromAmino(object.end_block);
    }
    if (object.commit !== undefined && object.commit !== null) {
      message.commit = RequestCommit.fromAmino(object.commit);
    }
    if (object.list_snapshots !== undefined && object.list_snapshots !== null) {
      message.listSnapshots = RequestListSnapshots.fromAmino(object.list_snapshots);
    }
    if (object.offer_snapshot !== undefined && object.offer_snapshot !== null) {
      message.offerSnapshot = RequestOfferSnapshot.fromAmino(object.offer_snapshot);
    }
    if (object.load_snapshot_chunk !== undefined && object.load_snapshot_chunk !== null) {
      message.loadSnapshotChunk = RequestLoadSnapshotChunk.fromAmino(object.load_snapshot_chunk);
    }
    if (object.apply_snapshot_chunk !== undefined && object.apply_snapshot_chunk !== null) {
      message.applySnapshotChunk = RequestApplySnapshotChunk.fromAmino(object.apply_snapshot_chunk);
    }
    if (object.prepare_proposal !== undefined && object.prepare_proposal !== null) {
      message.prepareProposal = RequestPrepareProposal.fromAmino(object.prepare_proposal);
    }
    if (object.process_proposal !== undefined && object.process_proposal !== null) {
      message.processProposal = RequestProcessProposal.fromAmino(object.process_proposal);
    }
    return message;
  },
  toAmino(message: Request): RequestAmino {
    const obj: any = {};
    obj.echo = message.echo ? RequestEcho.toAmino(message.echo) : undefined;
    obj.flush = message.flush ? RequestFlush.toAmino(message.flush) : undefined;
    obj.info = message.info ? RequestInfo.toAmino(message.info) : undefined;
    obj.init_chain = message.initChain ? RequestInitChain.toAmino(message.initChain) : undefined;
    obj.query = message.query ? RequestQuery.toAmino(message.query) : undefined;
    obj.begin_block = message.beginBlock ? RequestBeginBlock.toAmino(message.beginBlock) : undefined;
    obj.check_tx = message.checkTx ? RequestCheckTx.toAmino(message.checkTx) : undefined;
    obj.deliver_tx = message.deliverTx ? RequestDeliverTx.toAmino(message.deliverTx) : undefined;
    obj.end_block = message.endBlock ? RequestEndBlock.toAmino(message.endBlock) : undefined;
    obj.commit = message.commit ? RequestCommit.toAmino(message.commit) : undefined;
    obj.list_snapshots = message.listSnapshots ? RequestListSnapshots.toAmino(message.listSnapshots) : undefined;
    obj.offer_snapshot = message.offerSnapshot ? RequestOfferSnapshot.toAmino(message.offerSnapshot) : undefined;
    obj.load_snapshot_chunk = message.loadSnapshotChunk ? RequestLoadSnapshotChunk.toAmino(message.loadSnapshotChunk) : undefined;
    obj.apply_snapshot_chunk = message.applySnapshotChunk ? RequestApplySnapshotChunk.toAmino(message.applySnapshotChunk) : undefined;
    obj.prepare_proposal = message.prepareProposal ? RequestPrepareProposal.toAmino(message.prepareProposal) : undefined;
    obj.process_proposal = message.processProposal ? RequestProcessProposal.toAmino(message.processProposal) : undefined;
    return obj;
  },
  fromAminoMsg(object: RequestAminoMsg): Request {
    return Request.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestProtoMsg): Request {
    return Request.decode(message.value);
  },
  toProto(message: Request): Uint8Array {
    return Request.encode(message).finish();
  },
  toProtoMsg(message: Request): RequestProtoMsg {
    return {
      typeUrl: "/tendermint.abci.Request",
      value: Request.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Request.typeUrl, Request);
function createBaseRequestEcho(): RequestEcho {
  return {
    message: ""
  };
}
export const RequestEcho = {
  typeUrl: "/tendermint.abci.RequestEcho",
  is(o: any): o is RequestEcho {
    return o && (o.$typeUrl === RequestEcho.typeUrl || typeof o.message === "string");
  },
  isSDK(o: any): o is RequestEchoSDKType {
    return o && (o.$typeUrl === RequestEcho.typeUrl || typeof o.message === "string");
  },
  isAmino(o: any): o is RequestEchoAmino {
    return o && (o.$typeUrl === RequestEcho.typeUrl || typeof o.message === "string");
  },
  encode(message: RequestEcho, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestEcho {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestEcho();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RequestEcho>): RequestEcho {
    const message = createBaseRequestEcho();
    message.message = object.message ?? "";
    return message;
  },
  fromAmino(object: RequestEchoAmino): RequestEcho {
    const message = createBaseRequestEcho();
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    }
    return message;
  },
  toAmino(message: RequestEcho): RequestEchoAmino {
    const obj: any = {};
    obj.message = message.message === "" ? undefined : message.message;
    return obj;
  },
  fromAminoMsg(object: RequestEchoAminoMsg): RequestEcho {
    return RequestEcho.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestEchoProtoMsg): RequestEcho {
    return RequestEcho.decode(message.value);
  },
  toProto(message: RequestEcho): Uint8Array {
    return RequestEcho.encode(message).finish();
  },
  toProtoMsg(message: RequestEcho): RequestEchoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestEcho",
      value: RequestEcho.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RequestEcho.typeUrl, RequestEcho);
function createBaseRequestFlush(): RequestFlush {
  return {};
}
export const RequestFlush = {
  typeUrl: "/tendermint.abci.RequestFlush",
  is(o: any): o is RequestFlush {
    return o && o.$typeUrl === RequestFlush.typeUrl;
  },
  isSDK(o: any): o is RequestFlushSDKType {
    return o && o.$typeUrl === RequestFlush.typeUrl;
  },
  isAmino(o: any): o is RequestFlushAmino {
    return o && o.$typeUrl === RequestFlush.typeUrl;
  },
  encode(_: RequestFlush, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestFlush {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestFlush();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<RequestFlush>): RequestFlush {
    const message = createBaseRequestFlush();
    return message;
  },
  fromAmino(_: RequestFlushAmino): RequestFlush {
    const message = createBaseRequestFlush();
    return message;
  },
  toAmino(_: RequestFlush): RequestFlushAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: RequestFlushAminoMsg): RequestFlush {
    return RequestFlush.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestFlushProtoMsg): RequestFlush {
    return RequestFlush.decode(message.value);
  },
  toProto(message: RequestFlush): Uint8Array {
    return RequestFlush.encode(message).finish();
  },
  toProtoMsg(message: RequestFlush): RequestFlushProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestFlush",
      value: RequestFlush.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RequestFlush.typeUrl, RequestFlush);
function createBaseRequestInfo(): RequestInfo {
  return {
    version: "",
    blockVersion: BigInt(0),
    p2pVersion: BigInt(0),
    abciVersion: ""
  };
}
export const RequestInfo = {
  typeUrl: "/tendermint.abci.RequestInfo",
  is(o: any): o is RequestInfo {
    return o && (o.$typeUrl === RequestInfo.typeUrl || typeof o.version === "string" && typeof o.blockVersion === "bigint" && typeof o.p2pVersion === "bigint" && typeof o.abciVersion === "string");
  },
  isSDK(o: any): o is RequestInfoSDKType {
    return o && (o.$typeUrl === RequestInfo.typeUrl || typeof o.version === "string" && typeof o.block_version === "bigint" && typeof o.p2p_version === "bigint" && typeof o.abci_version === "string");
  },
  isAmino(o: any): o is RequestInfoAmino {
    return o && (o.$typeUrl === RequestInfo.typeUrl || typeof o.version === "string" && typeof o.block_version === "bigint" && typeof o.p2p_version === "bigint" && typeof o.abci_version === "string");
  },
  encode(message: RequestInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.blockVersion !== BigInt(0)) {
      writer.uint32(16).uint64(message.blockVersion);
    }
    if (message.p2pVersion !== BigInt(0)) {
      writer.uint32(24).uint64(message.p2pVersion);
    }
    if (message.abciVersion !== "") {
      writer.uint32(34).string(message.abciVersion);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          message.blockVersion = reader.uint64();
          break;
        case 3:
          message.p2pVersion = reader.uint64();
          break;
        case 4:
          message.abciVersion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RequestInfo>): RequestInfo {
    const message = createBaseRequestInfo();
    message.version = object.version ?? "";
    message.blockVersion = object.blockVersion !== undefined && object.blockVersion !== null ? BigInt(object.blockVersion.toString()) : BigInt(0);
    message.p2pVersion = object.p2pVersion !== undefined && object.p2pVersion !== null ? BigInt(object.p2pVersion.toString()) : BigInt(0);
    message.abciVersion = object.abciVersion ?? "";
    return message;
  },
  fromAmino(object: RequestInfoAmino): RequestInfo {
    const message = createBaseRequestInfo();
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.block_version !== undefined && object.block_version !== null) {
      message.blockVersion = BigInt(object.block_version);
    }
    if (object.p2p_version !== undefined && object.p2p_version !== null) {
      message.p2pVersion = BigInt(object.p2p_version);
    }
    if (object.abci_version !== undefined && object.abci_version !== null) {
      message.abciVersion = object.abci_version;
    }
    return message;
  },
  toAmino(message: RequestInfo): RequestInfoAmino {
    const obj: any = {};
    obj.version = message.version === "" ? undefined : message.version;
    obj.block_version = message.blockVersion !== BigInt(0) ? message.blockVersion.toString() : undefined;
    obj.p2p_version = message.p2pVersion !== BigInt(0) ? message.p2pVersion.toString() : undefined;
    obj.abci_version = message.abciVersion === "" ? undefined : message.abciVersion;
    return obj;
  },
  fromAminoMsg(object: RequestInfoAminoMsg): RequestInfo {
    return RequestInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestInfoProtoMsg): RequestInfo {
    return RequestInfo.decode(message.value);
  },
  toProto(message: RequestInfo): Uint8Array {
    return RequestInfo.encode(message).finish();
  },
  toProtoMsg(message: RequestInfo): RequestInfoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestInfo",
      value: RequestInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RequestInfo.typeUrl, RequestInfo);
function createBaseRequestInitChain(): RequestInitChain {
  return {
    time: new Date(),
    chainId: "",
    consensusParams: undefined,
    validators: [],
    appStateBytes: new Uint8Array(),
    initialHeight: BigInt(0)
  };
}
export const RequestInitChain = {
  typeUrl: "/tendermint.abci.RequestInitChain",
  is(o: any): o is RequestInitChain {
    return o && (o.$typeUrl === RequestInitChain.typeUrl || Timestamp.is(o.time) && typeof o.chainId === "string" && Array.isArray(o.validators) && (!o.validators.length || ValidatorUpdate.is(o.validators[0])) && (o.appStateBytes instanceof Uint8Array || typeof o.appStateBytes === "string") && typeof o.initialHeight === "bigint");
  },
  isSDK(o: any): o is RequestInitChainSDKType {
    return o && (o.$typeUrl === RequestInitChain.typeUrl || Timestamp.isSDK(o.time) && typeof o.chain_id === "string" && Array.isArray(o.validators) && (!o.validators.length || ValidatorUpdate.isSDK(o.validators[0])) && (o.app_state_bytes instanceof Uint8Array || typeof o.app_state_bytes === "string") && typeof o.initial_height === "bigint");
  },
  isAmino(o: any): o is RequestInitChainAmino {
    return o && (o.$typeUrl === RequestInitChain.typeUrl || Timestamp.isAmino(o.time) && typeof o.chain_id === "string" && Array.isArray(o.validators) && (!o.validators.length || ValidatorUpdate.isAmino(o.validators[0])) && (o.app_state_bytes instanceof Uint8Array || typeof o.app_state_bytes === "string") && typeof o.initial_height === "bigint");
  },
  encode(message: RequestInitChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.consensusParams !== undefined) {
      ConsensusParams.encode(message.consensusParams, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.validators) {
      ValidatorUpdate.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.appStateBytes.length !== 0) {
      writer.uint32(42).bytes(message.appStateBytes);
    }
    if (message.initialHeight !== BigInt(0)) {
      writer.uint32(48).int64(message.initialHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestInitChain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestInitChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.consensusParams = ConsensusParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.validators.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        case 5:
          message.appStateBytes = reader.bytes();
          break;
        case 6:
          message.initialHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RequestInitChain>): RequestInitChain {
    const message = createBaseRequestInitChain();
    message.time = object.time ?? undefined;
    message.chainId = object.chainId ?? "";
    message.consensusParams = object.consensusParams !== undefined && object.consensusParams !== null ? ConsensusParams.fromPartial(object.consensusParams) : undefined;
    message.validators = object.validators?.map(e => ValidatorUpdate.fromPartial(e)) || [];
    message.appStateBytes = object.appStateBytes ?? new Uint8Array();
    message.initialHeight = object.initialHeight !== undefined && object.initialHeight !== null ? BigInt(object.initialHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RequestInitChainAmino): RequestInitChain {
    const message = createBaseRequestInitChain();
    if (object.time !== undefined && object.time !== null) {
      message.time = fromTimestamp(Timestamp.fromAmino(object.time));
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.consensus_params !== undefined && object.consensus_params !== null) {
      message.consensusParams = ConsensusParams.fromAmino(object.consensus_params);
    }
    message.validators = object.validators?.map(e => ValidatorUpdate.fromAmino(e)) || [];
    if (object.app_state_bytes !== undefined && object.app_state_bytes !== null) {
      message.appStateBytes = bytesFromBase64(object.app_state_bytes);
    }
    if (object.initial_height !== undefined && object.initial_height !== null) {
      message.initialHeight = BigInt(object.initial_height);
    }
    return message;
  },
  toAmino(message: RequestInitChain): RequestInitChainAmino {
    const obj: any = {};
    obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : undefined;
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    obj.consensus_params = message.consensusParams ? ConsensusParams.toAmino(message.consensusParams) : undefined;
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? ValidatorUpdate.toAmino(e) : undefined);
    } else {
      obj.validators = message.validators;
    }
    obj.app_state_bytes = message.appStateBytes ? base64FromBytes(message.appStateBytes) : undefined;
    obj.initial_height = message.initialHeight !== BigInt(0) ? message.initialHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RequestInitChainAminoMsg): RequestInitChain {
    return RequestInitChain.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestInitChainProtoMsg): RequestInitChain {
    return RequestInitChain.decode(message.value);
  },
  toProto(message: RequestInitChain): Uint8Array {
    return RequestInitChain.encode(message).finish();
  },
  toProtoMsg(message: RequestInitChain): RequestInitChainProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestInitChain",
      value: RequestInitChain.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RequestInitChain.typeUrl, RequestInitChain);
function createBaseRequestQuery(): RequestQuery {
  return {
    data: new Uint8Array(),
    path: "",
    height: BigInt(0),
    prove: false
  };
}
export const RequestQuery = {
  typeUrl: "/tendermint.abci.RequestQuery",
  is(o: any): o is RequestQuery {
    return o && (o.$typeUrl === RequestQuery.typeUrl || (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.path === "string" && typeof o.height === "bigint" && typeof o.prove === "boolean");
  },
  isSDK(o: any): o is RequestQuerySDKType {
    return o && (o.$typeUrl === RequestQuery.typeUrl || (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.path === "string" && typeof o.height === "bigint" && typeof o.prove === "boolean");
  },
  isAmino(o: any): o is RequestQueryAmino {
    return o && (o.$typeUrl === RequestQuery.typeUrl || (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.path === "string" && typeof o.height === "bigint" && typeof o.prove === "boolean");
  },
  encode(message: RequestQuery, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    if (message.prove === true) {
      writer.uint32(32).bool(message.prove);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestQuery {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.path = reader.string();
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.prove = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RequestQuery>): RequestQuery {
    const message = createBaseRequestQuery();
    message.data = object.data ?? new Uint8Array();
    message.path = object.path ?? "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.prove = object.prove ?? false;
    return message;
  },
  fromAmino(object: RequestQueryAmino): RequestQuery {
    const message = createBaseRequestQuery();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.prove !== undefined && object.prove !== null) {
      message.prove = object.prove;
    }
    return message;
  },
  toAmino(message: RequestQuery): RequestQueryAmino {
    const obj: any = {};
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    obj.path = message.path === "" ? undefined : message.path;
    obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
    obj.prove = message.prove === false ? undefined : message.prove;
    return obj;
  },
  fromAminoMsg(object: RequestQueryAminoMsg): RequestQuery {
    return RequestQuery.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestQueryProtoMsg): RequestQuery {
    return RequestQuery.decode(message.value);
  },
  toProto(message: RequestQuery): Uint8Array {
    return RequestQuery.encode(message).finish();
  },
  toProtoMsg(message: RequestQuery): RequestQueryProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestQuery",
      value: RequestQuery.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RequestQuery.typeUrl, RequestQuery);
function createBaseRequestBeginBlock(): RequestBeginBlock {
  return {
    hash: new Uint8Array(),
    header: Header.fromPartial({}),
    lastCommitInfo: CommitInfo.fromPartial({}),
    byzantineValidators: []
  };
}
export const RequestBeginBlock = {
  typeUrl: "/tendermint.abci.RequestBeginBlock",
  is(o: any): o is RequestBeginBlock {
    return o && (o.$typeUrl === RequestBeginBlock.typeUrl || (o.hash instanceof Uint8Array || typeof o.hash === "string") && Header.is(o.header) && CommitInfo.is(o.lastCommitInfo) && Array.isArray(o.byzantineValidators) && (!o.byzantineValidators.length || Misbehavior.is(o.byzantineValidators[0])));
  },
  isSDK(o: any): o is RequestBeginBlockSDKType {
    return o && (o.$typeUrl === RequestBeginBlock.typeUrl || (o.hash instanceof Uint8Array || typeof o.hash === "string") && Header.isSDK(o.header) && CommitInfo.isSDK(o.last_commit_info) && Array.isArray(o.byzantine_validators) && (!o.byzantine_validators.length || Misbehavior.isSDK(o.byzantine_validators[0])));
  },
  isAmino(o: any): o is RequestBeginBlockAmino {
    return o && (o.$typeUrl === RequestBeginBlock.typeUrl || (o.hash instanceof Uint8Array || typeof o.hash === "string") && Header.isAmino(o.header) && CommitInfo.isAmino(o.last_commit_info) && Array.isArray(o.byzantine_validators) && (!o.byzantine_validators.length || Misbehavior.isAmino(o.byzantine_validators[0])));
  },
  encode(message: RequestBeginBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(18).fork()).ldelim();
    }
    if (message.lastCommitInfo !== undefined) {
      CommitInfo.encode(message.lastCommitInfo, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.byzantineValidators) {
      Misbehavior.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestBeginBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestBeginBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        case 2:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 3:
          message.lastCommitInfo = CommitInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.byzantineValidators.push(Misbehavior.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RequestBeginBlock>): RequestBeginBlock {
    const message = createBaseRequestBeginBlock();
    message.hash = object.hash ?? new Uint8Array();
    message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    message.lastCommitInfo = object.lastCommitInfo !== undefined && object.lastCommitInfo !== null ? CommitInfo.fromPartial(object.lastCommitInfo) : undefined;
    message.byzantineValidators = object.byzantineValidators?.map(e => Misbehavior.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: RequestBeginBlockAmino): RequestBeginBlock {
    const message = createBaseRequestBeginBlock();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    if (object.header !== undefined && object.header !== null) {
      message.header = Header.fromAmino(object.header);
    }
    if (object.last_commit_info !== undefined && object.last_commit_info !== null) {
      message.lastCommitInfo = CommitInfo.fromAmino(object.last_commit_info);
    }
    message.byzantineValidators = object.byzantine_validators?.map(e => Misbehavior.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: RequestBeginBlock): RequestBeginBlockAmino {
    const obj: any = {};
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    obj.header = message.header ? Header.toAmino(message.header) : undefined;
    obj.last_commit_info = message.lastCommitInfo ? CommitInfo.toAmino(message.lastCommitInfo) : undefined;
    if (message.byzantineValidators) {
      obj.byzantine_validators = message.byzantineValidators.map(e => e ? Misbehavior.toAmino(e) : undefined);
    } else {
      obj.byzantine_validators = message.byzantineValidators;
    }
    return obj;
  },
  fromAminoMsg(object: RequestBeginBlockAminoMsg): RequestBeginBlock {
    return RequestBeginBlock.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestBeginBlockProtoMsg): RequestBeginBlock {
    return RequestBeginBlock.decode(message.value);
  },
  toProto(message: RequestBeginBlock): Uint8Array {
    return RequestBeginBlock.encode(message).finish();
  },
  toProtoMsg(message: RequestBeginBlock): RequestBeginBlockProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestBeginBlock",
      value: RequestBeginBlock.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RequestBeginBlock.typeUrl, RequestBeginBlock);
function createBaseRequestCheckTx(): RequestCheckTx {
  return {
    tx: new Uint8Array(),
    type: 0
  };
}
export const RequestCheckTx = {
  typeUrl: "/tendermint.abci.RequestCheckTx",
  is(o: any): o is RequestCheckTx {
    return o && (o.$typeUrl === RequestCheckTx.typeUrl || (o.tx instanceof Uint8Array || typeof o.tx === "string") && isSet(o.type));
  },
  isSDK(o: any): o is RequestCheckTxSDKType {
    return o && (o.$typeUrl === RequestCheckTx.typeUrl || (o.tx instanceof Uint8Array || typeof o.tx === "string") && isSet(o.type));
  },
  isAmino(o: any): o is RequestCheckTxAmino {
    return o && (o.$typeUrl === RequestCheckTx.typeUrl || (o.tx instanceof Uint8Array || typeof o.tx === "string") && isSet(o.type));
  },
  encode(message: RequestCheckTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestCheckTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestCheckTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = reader.bytes();
          break;
        case 2:
          message.type = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RequestCheckTx>): RequestCheckTx {
    const message = createBaseRequestCheckTx();
    message.tx = object.tx ?? new Uint8Array();
    message.type = object.type ?? 0;
    return message;
  },
  fromAmino(object: RequestCheckTxAmino): RequestCheckTx {
    const message = createBaseRequestCheckTx();
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = bytesFromBase64(object.tx);
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    return message;
  },
  toAmino(message: RequestCheckTx): RequestCheckTxAmino {
    const obj: any = {};
    obj.tx = message.tx ? base64FromBytes(message.tx) : undefined;
    obj.type = message.type === 0 ? undefined : message.type;
    return obj;
  },
  fromAminoMsg(object: RequestCheckTxAminoMsg): RequestCheckTx {
    return RequestCheckTx.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestCheckTxProtoMsg): RequestCheckTx {
    return RequestCheckTx.decode(message.value);
  },
  toProto(message: RequestCheckTx): Uint8Array {
    return RequestCheckTx.encode(message).finish();
  },
  toProtoMsg(message: RequestCheckTx): RequestCheckTxProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestCheckTx",
      value: RequestCheckTx.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RequestCheckTx.typeUrl, RequestCheckTx);
function createBaseRequestDeliverTx(): RequestDeliverTx {
  return {
    tx: new Uint8Array()
  };
}
export const RequestDeliverTx = {
  typeUrl: "/tendermint.abci.RequestDeliverTx",
  is(o: any): o is RequestDeliverTx {
    return o && (o.$typeUrl === RequestDeliverTx.typeUrl || o.tx instanceof Uint8Array || typeof o.tx === "string");
  },
  isSDK(o: any): o is RequestDeliverTxSDKType {
    return o && (o.$typeUrl === RequestDeliverTx.typeUrl || o.tx instanceof Uint8Array || typeof o.tx === "string");
  },
  isAmino(o: any): o is RequestDeliverTxAmino {
    return o && (o.$typeUrl === RequestDeliverTx.typeUrl || o.tx instanceof Uint8Array || typeof o.tx === "string");
  },
  encode(message: RequestDeliverTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestDeliverTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestDeliverTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RequestDeliverTx>): RequestDeliverTx {
    const message = createBaseRequestDeliverTx();
    message.tx = object.tx ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RequestDeliverTxAmino): RequestDeliverTx {
    const message = createBaseRequestDeliverTx();
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = bytesFromBase64(object.tx);
    }
    return message;
  },
  toAmino(message: RequestDeliverTx): RequestDeliverTxAmino {
    const obj: any = {};
    obj.tx = message.tx ? base64FromBytes(message.tx) : undefined;
    return obj;
  },
  fromAminoMsg(object: RequestDeliverTxAminoMsg): RequestDeliverTx {
    return RequestDeliverTx.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestDeliverTxProtoMsg): RequestDeliverTx {
    return RequestDeliverTx.decode(message.value);
  },
  toProto(message: RequestDeliverTx): Uint8Array {
    return RequestDeliverTx.encode(message).finish();
  },
  toProtoMsg(message: RequestDeliverTx): RequestDeliverTxProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestDeliverTx",
      value: RequestDeliverTx.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RequestDeliverTx.typeUrl, RequestDeliverTx);
function createBaseRequestEndBlock(): RequestEndBlock {
  return {
    height: BigInt(0)
  };
}
export const RequestEndBlock = {
  typeUrl: "/tendermint.abci.RequestEndBlock",
  is(o: any): o is RequestEndBlock {
    return o && (o.$typeUrl === RequestEndBlock.typeUrl || typeof o.height === "bigint");
  },
  isSDK(o: any): o is RequestEndBlockSDKType {
    return o && (o.$typeUrl === RequestEndBlock.typeUrl || typeof o.height === "bigint");
  },
  isAmino(o: any): o is RequestEndBlockAmino {
    return o && (o.$typeUrl === RequestEndBlock.typeUrl || typeof o.height === "bigint");
  },
  encode(message: RequestEndBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestEndBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestEndBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RequestEndBlock>): RequestEndBlock {
    const message = createBaseRequestEndBlock();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RequestEndBlockAmino): RequestEndBlock {
    const message = createBaseRequestEndBlock();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: RequestEndBlock): RequestEndBlockAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RequestEndBlockAminoMsg): RequestEndBlock {
    return RequestEndBlock.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestEndBlockProtoMsg): RequestEndBlock {
    return RequestEndBlock.decode(message.value);
  },
  toProto(message: RequestEndBlock): Uint8Array {
    return RequestEndBlock.encode(message).finish();
  },
  toProtoMsg(message: RequestEndBlock): RequestEndBlockProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestEndBlock",
      value: RequestEndBlock.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RequestEndBlock.typeUrl, RequestEndBlock);
function createBaseRequestCommit(): RequestCommit {
  return {};
}
export const RequestCommit = {
  typeUrl: "/tendermint.abci.RequestCommit",
  is(o: any): o is RequestCommit {
    return o && o.$typeUrl === RequestCommit.typeUrl;
  },
  isSDK(o: any): o is RequestCommitSDKType {
    return o && o.$typeUrl === RequestCommit.typeUrl;
  },
  isAmino(o: any): o is RequestCommitAmino {
    return o && o.$typeUrl === RequestCommit.typeUrl;
  },
  encode(_: RequestCommit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestCommit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestCommit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<RequestCommit>): RequestCommit {
    const message = createBaseRequestCommit();
    return message;
  },
  fromAmino(_: RequestCommitAmino): RequestCommit {
    const message = createBaseRequestCommit();
    return message;
  },
  toAmino(_: RequestCommit): RequestCommitAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: RequestCommitAminoMsg): RequestCommit {
    return RequestCommit.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestCommitProtoMsg): RequestCommit {
    return RequestCommit.decode(message.value);
  },
  toProto(message: RequestCommit): Uint8Array {
    return RequestCommit.encode(message).finish();
  },
  toProtoMsg(message: RequestCommit): RequestCommitProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestCommit",
      value: RequestCommit.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RequestCommit.typeUrl, RequestCommit);
function createBaseRequestListSnapshots(): RequestListSnapshots {
  return {};
}
export const RequestListSnapshots = {
  typeUrl: "/tendermint.abci.RequestListSnapshots",
  is(o: any): o is RequestListSnapshots {
    return o && o.$typeUrl === RequestListSnapshots.typeUrl;
  },
  isSDK(o: any): o is RequestListSnapshotsSDKType {
    return o && o.$typeUrl === RequestListSnapshots.typeUrl;
  },
  isAmino(o: any): o is RequestListSnapshotsAmino {
    return o && o.$typeUrl === RequestListSnapshots.typeUrl;
  },
  encode(_: RequestListSnapshots, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestListSnapshots {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestListSnapshots();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<RequestListSnapshots>): RequestListSnapshots {
    const message = createBaseRequestListSnapshots();
    return message;
  },
  fromAmino(_: RequestListSnapshotsAmino): RequestListSnapshots {
    const message = createBaseRequestListSnapshots();
    return message;
  },
  toAmino(_: RequestListSnapshots): RequestListSnapshotsAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: RequestListSnapshotsAminoMsg): RequestListSnapshots {
    return RequestListSnapshots.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestListSnapshotsProtoMsg): RequestListSnapshots {
    return RequestListSnapshots.decode(message.value);
  },
  toProto(message: RequestListSnapshots): Uint8Array {
    return RequestListSnapshots.encode(message).finish();
  },
  toProtoMsg(message: RequestListSnapshots): RequestListSnapshotsProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestListSnapshots",
      value: RequestListSnapshots.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RequestListSnapshots.typeUrl, RequestListSnapshots);
function createBaseRequestOfferSnapshot(): RequestOfferSnapshot {
  return {
    snapshot: undefined,
    appHash: new Uint8Array()
  };
}
export const RequestOfferSnapshot = {
  typeUrl: "/tendermint.abci.RequestOfferSnapshot",
  is(o: any): o is RequestOfferSnapshot {
    return o && (o.$typeUrl === RequestOfferSnapshot.typeUrl || o.appHash instanceof Uint8Array || typeof o.appHash === "string");
  },
  isSDK(o: any): o is RequestOfferSnapshotSDKType {
    return o && (o.$typeUrl === RequestOfferSnapshot.typeUrl || o.app_hash instanceof Uint8Array || typeof o.app_hash === "string");
  },
  isAmino(o: any): o is RequestOfferSnapshotAmino {
    return o && (o.$typeUrl === RequestOfferSnapshot.typeUrl || o.app_hash instanceof Uint8Array || typeof o.app_hash === "string");
  },
  encode(message: RequestOfferSnapshot, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.snapshot !== undefined) {
      Snapshot.encode(message.snapshot, writer.uint32(10).fork()).ldelim();
    }
    if (message.appHash.length !== 0) {
      writer.uint32(18).bytes(message.appHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestOfferSnapshot {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestOfferSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.snapshot = Snapshot.decode(reader, reader.uint32());
          break;
        case 2:
          message.appHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RequestOfferSnapshot>): RequestOfferSnapshot {
    const message = createBaseRequestOfferSnapshot();
    message.snapshot = object.snapshot !== undefined && object.snapshot !== null ? Snapshot.fromPartial(object.snapshot) : undefined;
    message.appHash = object.appHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RequestOfferSnapshotAmino): RequestOfferSnapshot {
    const message = createBaseRequestOfferSnapshot();
    if (object.snapshot !== undefined && object.snapshot !== null) {
      message.snapshot = Snapshot.fromAmino(object.snapshot);
    }
    if (object.app_hash !== undefined && object.app_hash !== null) {
      message.appHash = bytesFromBase64(object.app_hash);
    }
    return message;
  },
  toAmino(message: RequestOfferSnapshot): RequestOfferSnapshotAmino {
    const obj: any = {};
    obj.snapshot = message.snapshot ? Snapshot.toAmino(message.snapshot) : undefined;
    obj.app_hash = message.appHash ? base64FromBytes(message.appHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: RequestOfferSnapshotAminoMsg): RequestOfferSnapshot {
    return RequestOfferSnapshot.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestOfferSnapshotProtoMsg): RequestOfferSnapshot {
    return RequestOfferSnapshot.decode(message.value);
  },
  toProto(message: RequestOfferSnapshot): Uint8Array {
    return RequestOfferSnapshot.encode(message).finish();
  },
  toProtoMsg(message: RequestOfferSnapshot): RequestOfferSnapshotProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestOfferSnapshot",
      value: RequestOfferSnapshot.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RequestOfferSnapshot.typeUrl, RequestOfferSnapshot);
function createBaseRequestLoadSnapshotChunk(): RequestLoadSnapshotChunk {
  return {
    height: BigInt(0),
    format: 0,
    chunk: 0
  };
}
export const RequestLoadSnapshotChunk = {
  typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk",
  is(o: any): o is RequestLoadSnapshotChunk {
    return o && (o.$typeUrl === RequestLoadSnapshotChunk.typeUrl || typeof o.height === "bigint" && typeof o.format === "number" && typeof o.chunk === "number");
  },
  isSDK(o: any): o is RequestLoadSnapshotChunkSDKType {
    return o && (o.$typeUrl === RequestLoadSnapshotChunk.typeUrl || typeof o.height === "bigint" && typeof o.format === "number" && typeof o.chunk === "number");
  },
  isAmino(o: any): o is RequestLoadSnapshotChunkAmino {
    return o && (o.$typeUrl === RequestLoadSnapshotChunk.typeUrl || typeof o.height === "bigint" && typeof o.format === "number" && typeof o.chunk === "number");
  },
  encode(message: RequestLoadSnapshotChunk, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunk !== 0) {
      writer.uint32(24).uint32(message.chunk);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestLoadSnapshotChunk {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestLoadSnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.format = reader.uint32();
          break;
        case 3:
          message.chunk = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RequestLoadSnapshotChunk>): RequestLoadSnapshotChunk {
    const message = createBaseRequestLoadSnapshotChunk();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.format = object.format ?? 0;
    message.chunk = object.chunk ?? 0;
    return message;
  },
  fromAmino(object: RequestLoadSnapshotChunkAmino): RequestLoadSnapshotChunk {
    const message = createBaseRequestLoadSnapshotChunk();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.format !== undefined && object.format !== null) {
      message.format = object.format;
    }
    if (object.chunk !== undefined && object.chunk !== null) {
      message.chunk = object.chunk;
    }
    return message;
  },
  toAmino(message: RequestLoadSnapshotChunk): RequestLoadSnapshotChunkAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
    obj.format = message.format === 0 ? undefined : message.format;
    obj.chunk = message.chunk === 0 ? undefined : message.chunk;
    return obj;
  },
  fromAminoMsg(object: RequestLoadSnapshotChunkAminoMsg): RequestLoadSnapshotChunk {
    return RequestLoadSnapshotChunk.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestLoadSnapshotChunkProtoMsg): RequestLoadSnapshotChunk {
    return RequestLoadSnapshotChunk.decode(message.value);
  },
  toProto(message: RequestLoadSnapshotChunk): Uint8Array {
    return RequestLoadSnapshotChunk.encode(message).finish();
  },
  toProtoMsg(message: RequestLoadSnapshotChunk): RequestLoadSnapshotChunkProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk",
      value: RequestLoadSnapshotChunk.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RequestLoadSnapshotChunk.typeUrl, RequestLoadSnapshotChunk);
function createBaseRequestApplySnapshotChunk(): RequestApplySnapshotChunk {
  return {
    index: 0,
    chunk: new Uint8Array(),
    sender: ""
  };
}
export const RequestApplySnapshotChunk = {
  typeUrl: "/tendermint.abci.RequestApplySnapshotChunk",
  is(o: any): o is RequestApplySnapshotChunk {
    return o && (o.$typeUrl === RequestApplySnapshotChunk.typeUrl || typeof o.index === "number" && (o.chunk instanceof Uint8Array || typeof o.chunk === "string") && typeof o.sender === "string");
  },
  isSDK(o: any): o is RequestApplySnapshotChunkSDKType {
    return o && (o.$typeUrl === RequestApplySnapshotChunk.typeUrl || typeof o.index === "number" && (o.chunk instanceof Uint8Array || typeof o.chunk === "string") && typeof o.sender === "string");
  },
  isAmino(o: any): o is RequestApplySnapshotChunkAmino {
    return o && (o.$typeUrl === RequestApplySnapshotChunk.typeUrl || typeof o.index === "number" && (o.chunk instanceof Uint8Array || typeof o.chunk === "string") && typeof o.sender === "string");
  },
  encode(message: RequestApplySnapshotChunk, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.chunk.length !== 0) {
      writer.uint32(18).bytes(message.chunk);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestApplySnapshotChunk {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestApplySnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint32();
          break;
        case 2:
          message.chunk = reader.bytes();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RequestApplySnapshotChunk>): RequestApplySnapshotChunk {
    const message = createBaseRequestApplySnapshotChunk();
    message.index = object.index ?? 0;
    message.chunk = object.chunk ?? new Uint8Array();
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: RequestApplySnapshotChunkAmino): RequestApplySnapshotChunk {
    const message = createBaseRequestApplySnapshotChunk();
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    if (object.chunk !== undefined && object.chunk !== null) {
      message.chunk = bytesFromBase64(object.chunk);
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: RequestApplySnapshotChunk): RequestApplySnapshotChunkAmino {
    const obj: any = {};
    obj.index = message.index === 0 ? undefined : message.index;
    obj.chunk = message.chunk ? base64FromBytes(message.chunk) : undefined;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: RequestApplySnapshotChunkAminoMsg): RequestApplySnapshotChunk {
    return RequestApplySnapshotChunk.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestApplySnapshotChunkProtoMsg): RequestApplySnapshotChunk {
    return RequestApplySnapshotChunk.decode(message.value);
  },
  toProto(message: RequestApplySnapshotChunk): Uint8Array {
    return RequestApplySnapshotChunk.encode(message).finish();
  },
  toProtoMsg(message: RequestApplySnapshotChunk): RequestApplySnapshotChunkProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestApplySnapshotChunk",
      value: RequestApplySnapshotChunk.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RequestApplySnapshotChunk.typeUrl, RequestApplySnapshotChunk);
function createBaseRequestPrepareProposal(): RequestPrepareProposal {
  return {
    maxTxBytes: BigInt(0),
    txs: [],
    localLastCommit: ExtendedCommitInfo.fromPartial({}),
    misbehavior: [],
    height: BigInt(0),
    time: new Date(),
    nextValidatorsHash: new Uint8Array(),
    proposerAddress: new Uint8Array()
  };
}
export const RequestPrepareProposal = {
  typeUrl: "/tendermint.abci.RequestPrepareProposal",
  is(o: any): o is RequestPrepareProposal {
    return o && (o.$typeUrl === RequestPrepareProposal.typeUrl || typeof o.maxTxBytes === "bigint" && Array.isArray(o.txs) && (!o.txs.length || o.txs[0] instanceof Uint8Array || typeof o.txs[0] === "string") && ExtendedCommitInfo.is(o.localLastCommit) && Array.isArray(o.misbehavior) && (!o.misbehavior.length || Misbehavior.is(o.misbehavior[0])) && typeof o.height === "bigint" && Timestamp.is(o.time) && (o.nextValidatorsHash instanceof Uint8Array || typeof o.nextValidatorsHash === "string") && (o.proposerAddress instanceof Uint8Array || typeof o.proposerAddress === "string"));
  },
  isSDK(o: any): o is RequestPrepareProposalSDKType {
    return o && (o.$typeUrl === RequestPrepareProposal.typeUrl || typeof o.max_tx_bytes === "bigint" && Array.isArray(o.txs) && (!o.txs.length || o.txs[0] instanceof Uint8Array || typeof o.txs[0] === "string") && ExtendedCommitInfo.isSDK(o.local_last_commit) && Array.isArray(o.misbehavior) && (!o.misbehavior.length || Misbehavior.isSDK(o.misbehavior[0])) && typeof o.height === "bigint" && Timestamp.isSDK(o.time) && (o.next_validators_hash instanceof Uint8Array || typeof o.next_validators_hash === "string") && (o.proposer_address instanceof Uint8Array || typeof o.proposer_address === "string"));
  },
  isAmino(o: any): o is RequestPrepareProposalAmino {
    return o && (o.$typeUrl === RequestPrepareProposal.typeUrl || typeof o.max_tx_bytes === "bigint" && Array.isArray(o.txs) && (!o.txs.length || o.txs[0] instanceof Uint8Array || typeof o.txs[0] === "string") && ExtendedCommitInfo.isAmino(o.local_last_commit) && Array.isArray(o.misbehavior) && (!o.misbehavior.length || Misbehavior.isAmino(o.misbehavior[0])) && typeof o.height === "bigint" && Timestamp.isAmino(o.time) && (o.next_validators_hash instanceof Uint8Array || typeof o.next_validators_hash === "string") && (o.proposer_address instanceof Uint8Array || typeof o.proposer_address === "string"));
  },
  encode(message: RequestPrepareProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxTxBytes !== BigInt(0)) {
      writer.uint32(8).int64(message.maxTxBytes);
    }
    for (const v of message.txs) {
      writer.uint32(18).bytes(v!);
    }
    if (message.localLastCommit !== undefined) {
      ExtendedCommitInfo.encode(message.localLastCommit, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.misbehavior) {
      Misbehavior.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(40).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(50).fork()).ldelim();
    }
    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(58).bytes(message.nextValidatorsHash);
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(66).bytes(message.proposerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestPrepareProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestPrepareProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxTxBytes = reader.int64();
          break;
        case 2:
          message.txs.push(reader.bytes());
          break;
        case 3:
          message.localLastCommit = ExtendedCommitInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.misbehavior.push(Misbehavior.decode(reader, reader.uint32()));
          break;
        case 5:
          message.height = reader.int64();
          break;
        case 6:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.nextValidatorsHash = reader.bytes();
          break;
        case 8:
          message.proposerAddress = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RequestPrepareProposal>): RequestPrepareProposal {
    const message = createBaseRequestPrepareProposal();
    message.maxTxBytes = object.maxTxBytes !== undefined && object.maxTxBytes !== null ? BigInt(object.maxTxBytes.toString()) : BigInt(0);
    message.txs = object.txs?.map(e => e) || [];
    message.localLastCommit = object.localLastCommit !== undefined && object.localLastCommit !== null ? ExtendedCommitInfo.fromPartial(object.localLastCommit) : undefined;
    message.misbehavior = object.misbehavior?.map(e => Misbehavior.fromPartial(e)) || [];
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.time = object.time ?? undefined;
    message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
    message.proposerAddress = object.proposerAddress ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RequestPrepareProposalAmino): RequestPrepareProposal {
    const message = createBaseRequestPrepareProposal();
    if (object.max_tx_bytes !== undefined && object.max_tx_bytes !== null) {
      message.maxTxBytes = BigInt(object.max_tx_bytes);
    }
    message.txs = object.txs?.map(e => bytesFromBase64(e)) || [];
    if (object.local_last_commit !== undefined && object.local_last_commit !== null) {
      message.localLastCommit = ExtendedCommitInfo.fromAmino(object.local_last_commit);
    }
    message.misbehavior = object.misbehavior?.map(e => Misbehavior.fromAmino(e)) || [];
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = fromTimestamp(Timestamp.fromAmino(object.time));
    }
    if (object.next_validators_hash !== undefined && object.next_validators_hash !== null) {
      message.nextValidatorsHash = bytesFromBase64(object.next_validators_hash);
    }
    if (object.proposer_address !== undefined && object.proposer_address !== null) {
      message.proposerAddress = bytesFromBase64(object.proposer_address);
    }
    return message;
  },
  toAmino(message: RequestPrepareProposal): RequestPrepareProposalAmino {
    const obj: any = {};
    obj.max_tx_bytes = message.maxTxBytes !== BigInt(0) ? message.maxTxBytes.toString() : undefined;
    if (message.txs) {
      obj.txs = message.txs.map(e => base64FromBytes(e));
    } else {
      obj.txs = message.txs;
    }
    obj.local_last_commit = message.localLastCommit ? ExtendedCommitInfo.toAmino(message.localLastCommit) : undefined;
    if (message.misbehavior) {
      obj.misbehavior = message.misbehavior.map(e => e ? Misbehavior.toAmino(e) : undefined);
    } else {
      obj.misbehavior = message.misbehavior;
    }
    obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
    obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : undefined;
    obj.next_validators_hash = message.nextValidatorsHash ? base64FromBytes(message.nextValidatorsHash) : undefined;
    obj.proposer_address = message.proposerAddress ? base64FromBytes(message.proposerAddress) : undefined;
    return obj;
  },
  fromAminoMsg(object: RequestPrepareProposalAminoMsg): RequestPrepareProposal {
    return RequestPrepareProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestPrepareProposalProtoMsg): RequestPrepareProposal {
    return RequestPrepareProposal.decode(message.value);
  },
  toProto(message: RequestPrepareProposal): Uint8Array {
    return RequestPrepareProposal.encode(message).finish();
  },
  toProtoMsg(message: RequestPrepareProposal): RequestPrepareProposalProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestPrepareProposal",
      value: RequestPrepareProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RequestPrepareProposal.typeUrl, RequestPrepareProposal);
function createBaseRequestProcessProposal(): RequestProcessProposal {
  return {
    txs: [],
    proposedLastCommit: CommitInfo.fromPartial({}),
    misbehavior: [],
    hash: new Uint8Array(),
    height: BigInt(0),
    time: new Date(),
    nextValidatorsHash: new Uint8Array(),
    proposerAddress: new Uint8Array()
  };
}
export const RequestProcessProposal = {
  typeUrl: "/tendermint.abci.RequestProcessProposal",
  is(o: any): o is RequestProcessProposal {
    return o && (o.$typeUrl === RequestProcessProposal.typeUrl || Array.isArray(o.txs) && (!o.txs.length || o.txs[0] instanceof Uint8Array || typeof o.txs[0] === "string") && CommitInfo.is(o.proposedLastCommit) && Array.isArray(o.misbehavior) && (!o.misbehavior.length || Misbehavior.is(o.misbehavior[0])) && (o.hash instanceof Uint8Array || typeof o.hash === "string") && typeof o.height === "bigint" && Timestamp.is(o.time) && (o.nextValidatorsHash instanceof Uint8Array || typeof o.nextValidatorsHash === "string") && (o.proposerAddress instanceof Uint8Array || typeof o.proposerAddress === "string"));
  },
  isSDK(o: any): o is RequestProcessProposalSDKType {
    return o && (o.$typeUrl === RequestProcessProposal.typeUrl || Array.isArray(o.txs) && (!o.txs.length || o.txs[0] instanceof Uint8Array || typeof o.txs[0] === "string") && CommitInfo.isSDK(o.proposed_last_commit) && Array.isArray(o.misbehavior) && (!o.misbehavior.length || Misbehavior.isSDK(o.misbehavior[0])) && (o.hash instanceof Uint8Array || typeof o.hash === "string") && typeof o.height === "bigint" && Timestamp.isSDK(o.time) && (o.next_validators_hash instanceof Uint8Array || typeof o.next_validators_hash === "string") && (o.proposer_address instanceof Uint8Array || typeof o.proposer_address === "string"));
  },
  isAmino(o: any): o is RequestProcessProposalAmino {
    return o && (o.$typeUrl === RequestProcessProposal.typeUrl || Array.isArray(o.txs) && (!o.txs.length || o.txs[0] instanceof Uint8Array || typeof o.txs[0] === "string") && CommitInfo.isAmino(o.proposed_last_commit) && Array.isArray(o.misbehavior) && (!o.misbehavior.length || Misbehavior.isAmino(o.misbehavior[0])) && (o.hash instanceof Uint8Array || typeof o.hash === "string") && typeof o.height === "bigint" && Timestamp.isAmino(o.time) && (o.next_validators_hash instanceof Uint8Array || typeof o.next_validators_hash === "string") && (o.proposer_address instanceof Uint8Array || typeof o.proposer_address === "string"));
  },
  encode(message: RequestProcessProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v!);
    }
    if (message.proposedLastCommit !== undefined) {
      CommitInfo.encode(message.proposedLastCommit, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.misbehavior) {
      Misbehavior.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(40).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(50).fork()).ldelim();
    }
    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(58).bytes(message.nextValidatorsHash);
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(66).bytes(message.proposerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestProcessProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestProcessProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(reader.bytes());
          break;
        case 2:
          message.proposedLastCommit = CommitInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.misbehavior.push(Misbehavior.decode(reader, reader.uint32()));
          break;
        case 4:
          message.hash = reader.bytes();
          break;
        case 5:
          message.height = reader.int64();
          break;
        case 6:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.nextValidatorsHash = reader.bytes();
          break;
        case 8:
          message.proposerAddress = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RequestProcessProposal>): RequestProcessProposal {
    const message = createBaseRequestProcessProposal();
    message.txs = object.txs?.map(e => e) || [];
    message.proposedLastCommit = object.proposedLastCommit !== undefined && object.proposedLastCommit !== null ? CommitInfo.fromPartial(object.proposedLastCommit) : undefined;
    message.misbehavior = object.misbehavior?.map(e => Misbehavior.fromPartial(e)) || [];
    message.hash = object.hash ?? new Uint8Array();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.time = object.time ?? undefined;
    message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
    message.proposerAddress = object.proposerAddress ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RequestProcessProposalAmino): RequestProcessProposal {
    const message = createBaseRequestProcessProposal();
    message.txs = object.txs?.map(e => bytesFromBase64(e)) || [];
    if (object.proposed_last_commit !== undefined && object.proposed_last_commit !== null) {
      message.proposedLastCommit = CommitInfo.fromAmino(object.proposed_last_commit);
    }
    message.misbehavior = object.misbehavior?.map(e => Misbehavior.fromAmino(e)) || [];
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = fromTimestamp(Timestamp.fromAmino(object.time));
    }
    if (object.next_validators_hash !== undefined && object.next_validators_hash !== null) {
      message.nextValidatorsHash = bytesFromBase64(object.next_validators_hash);
    }
    if (object.proposer_address !== undefined && object.proposer_address !== null) {
      message.proposerAddress = bytesFromBase64(object.proposer_address);
    }
    return message;
  },
  toAmino(message: RequestProcessProposal): RequestProcessProposalAmino {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map(e => base64FromBytes(e));
    } else {
      obj.txs = message.txs;
    }
    obj.proposed_last_commit = message.proposedLastCommit ? CommitInfo.toAmino(message.proposedLastCommit) : undefined;
    if (message.misbehavior) {
      obj.misbehavior = message.misbehavior.map(e => e ? Misbehavior.toAmino(e) : undefined);
    } else {
      obj.misbehavior = message.misbehavior;
    }
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
    obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : undefined;
    obj.next_validators_hash = message.nextValidatorsHash ? base64FromBytes(message.nextValidatorsHash) : undefined;
    obj.proposer_address = message.proposerAddress ? base64FromBytes(message.proposerAddress) : undefined;
    return obj;
  },
  fromAminoMsg(object: RequestProcessProposalAminoMsg): RequestProcessProposal {
    return RequestProcessProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestProcessProposalProtoMsg): RequestProcessProposal {
    return RequestProcessProposal.decode(message.value);
  },
  toProto(message: RequestProcessProposal): Uint8Array {
    return RequestProcessProposal.encode(message).finish();
  },
  toProtoMsg(message: RequestProcessProposal): RequestProcessProposalProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestProcessProposal",
      value: RequestProcessProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RequestProcessProposal.typeUrl, RequestProcessProposal);
function createBaseResponse(): Response {
  return {
    exception: undefined,
    echo: undefined,
    flush: undefined,
    info: undefined,
    initChain: undefined,
    query: undefined,
    beginBlock: undefined,
    checkTx: undefined,
    deliverTx: undefined,
    endBlock: undefined,
    commit: undefined,
    listSnapshots: undefined,
    offerSnapshot: undefined,
    loadSnapshotChunk: undefined,
    applySnapshotChunk: undefined,
    prepareProposal: undefined,
    processProposal: undefined
  };
}
export const Response = {
  typeUrl: "/tendermint.abci.Response",
  is(o: any): o is Response {
    return o && o.$typeUrl === Response.typeUrl;
  },
  isSDK(o: any): o is ResponseSDKType {
    return o && o.$typeUrl === Response.typeUrl;
  },
  isAmino(o: any): o is ResponseAmino {
    return o && o.$typeUrl === Response.typeUrl;
  },
  encode(message: Response, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.exception !== undefined) {
      ResponseException.encode(message.exception, writer.uint32(10).fork()).ldelim();
    }
    if (message.echo !== undefined) {
      ResponseEcho.encode(message.echo, writer.uint32(18).fork()).ldelim();
    }
    if (message.flush !== undefined) {
      ResponseFlush.encode(message.flush, writer.uint32(26).fork()).ldelim();
    }
    if (message.info !== undefined) {
      ResponseInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }
    if (message.initChain !== undefined) {
      ResponseInitChain.encode(message.initChain, writer.uint32(50).fork()).ldelim();
    }
    if (message.query !== undefined) {
      ResponseQuery.encode(message.query, writer.uint32(58).fork()).ldelim();
    }
    if (message.beginBlock !== undefined) {
      ResponseBeginBlock.encode(message.beginBlock, writer.uint32(66).fork()).ldelim();
    }
    if (message.checkTx !== undefined) {
      ResponseCheckTx.encode(message.checkTx, writer.uint32(74).fork()).ldelim();
    }
    if (message.deliverTx !== undefined) {
      ResponseDeliverTx.encode(message.deliverTx, writer.uint32(82).fork()).ldelim();
    }
    if (message.endBlock !== undefined) {
      ResponseEndBlock.encode(message.endBlock, writer.uint32(90).fork()).ldelim();
    }
    if (message.commit !== undefined) {
      ResponseCommit.encode(message.commit, writer.uint32(98).fork()).ldelim();
    }
    if (message.listSnapshots !== undefined) {
      ResponseListSnapshots.encode(message.listSnapshots, writer.uint32(106).fork()).ldelim();
    }
    if (message.offerSnapshot !== undefined) {
      ResponseOfferSnapshot.encode(message.offerSnapshot, writer.uint32(114).fork()).ldelim();
    }
    if (message.loadSnapshotChunk !== undefined) {
      ResponseLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(122).fork()).ldelim();
    }
    if (message.applySnapshotChunk !== undefined) {
      ResponseApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(130).fork()).ldelim();
    }
    if (message.prepareProposal !== undefined) {
      ResponsePrepareProposal.encode(message.prepareProposal, writer.uint32(138).fork()).ldelim();
    }
    if (message.processProposal !== undefined) {
      ResponseProcessProposal.encode(message.processProposal, writer.uint32(146).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Response {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exception = ResponseException.decode(reader, reader.uint32());
          break;
        case 2:
          message.echo = ResponseEcho.decode(reader, reader.uint32());
          break;
        case 3:
          message.flush = ResponseFlush.decode(reader, reader.uint32());
          break;
        case 4:
          message.info = ResponseInfo.decode(reader, reader.uint32());
          break;
        case 6:
          message.initChain = ResponseInitChain.decode(reader, reader.uint32());
          break;
        case 7:
          message.query = ResponseQuery.decode(reader, reader.uint32());
          break;
        case 8:
          message.beginBlock = ResponseBeginBlock.decode(reader, reader.uint32());
          break;
        case 9:
          message.checkTx = ResponseCheckTx.decode(reader, reader.uint32());
          break;
        case 10:
          message.deliverTx = ResponseDeliverTx.decode(reader, reader.uint32());
          break;
        case 11:
          message.endBlock = ResponseEndBlock.decode(reader, reader.uint32());
          break;
        case 12:
          message.commit = ResponseCommit.decode(reader, reader.uint32());
          break;
        case 13:
          message.listSnapshots = ResponseListSnapshots.decode(reader, reader.uint32());
          break;
        case 14:
          message.offerSnapshot = ResponseOfferSnapshot.decode(reader, reader.uint32());
          break;
        case 15:
          message.loadSnapshotChunk = ResponseLoadSnapshotChunk.decode(reader, reader.uint32());
          break;
        case 16:
          message.applySnapshotChunk = ResponseApplySnapshotChunk.decode(reader, reader.uint32());
          break;
        case 17:
          message.prepareProposal = ResponsePrepareProposal.decode(reader, reader.uint32());
          break;
        case 18:
          message.processProposal = ResponseProcessProposal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Response>): Response {
    const message = createBaseResponse();
    message.exception = object.exception !== undefined && object.exception !== null ? ResponseException.fromPartial(object.exception) : undefined;
    message.echo = object.echo !== undefined && object.echo !== null ? ResponseEcho.fromPartial(object.echo) : undefined;
    message.flush = object.flush !== undefined && object.flush !== null ? ResponseFlush.fromPartial(object.flush) : undefined;
    message.info = object.info !== undefined && object.info !== null ? ResponseInfo.fromPartial(object.info) : undefined;
    message.initChain = object.initChain !== undefined && object.initChain !== null ? ResponseInitChain.fromPartial(object.initChain) : undefined;
    message.query = object.query !== undefined && object.query !== null ? ResponseQuery.fromPartial(object.query) : undefined;
    message.beginBlock = object.beginBlock !== undefined && object.beginBlock !== null ? ResponseBeginBlock.fromPartial(object.beginBlock) : undefined;
    message.checkTx = object.checkTx !== undefined && object.checkTx !== null ? ResponseCheckTx.fromPartial(object.checkTx) : undefined;
    message.deliverTx = object.deliverTx !== undefined && object.deliverTx !== null ? ResponseDeliverTx.fromPartial(object.deliverTx) : undefined;
    message.endBlock = object.endBlock !== undefined && object.endBlock !== null ? ResponseEndBlock.fromPartial(object.endBlock) : undefined;
    message.commit = object.commit !== undefined && object.commit !== null ? ResponseCommit.fromPartial(object.commit) : undefined;
    message.listSnapshots = object.listSnapshots !== undefined && object.listSnapshots !== null ? ResponseListSnapshots.fromPartial(object.listSnapshots) : undefined;
    message.offerSnapshot = object.offerSnapshot !== undefined && object.offerSnapshot !== null ? ResponseOfferSnapshot.fromPartial(object.offerSnapshot) : undefined;
    message.loadSnapshotChunk = object.loadSnapshotChunk !== undefined && object.loadSnapshotChunk !== null ? ResponseLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk) : undefined;
    message.applySnapshotChunk = object.applySnapshotChunk !== undefined && object.applySnapshotChunk !== null ? ResponseApplySnapshotChunk.fromPartial(object.applySnapshotChunk) : undefined;
    message.prepareProposal = object.prepareProposal !== undefined && object.prepareProposal !== null ? ResponsePrepareProposal.fromPartial(object.prepareProposal) : undefined;
    message.processProposal = object.processProposal !== undefined && object.processProposal !== null ? ResponseProcessProposal.fromPartial(object.processProposal) : undefined;
    return message;
  },
  fromAmino(object: ResponseAmino): Response {
    const message = createBaseResponse();
    if (object.exception !== undefined && object.exception !== null) {
      message.exception = ResponseException.fromAmino(object.exception);
    }
    if (object.echo !== undefined && object.echo !== null) {
      message.echo = ResponseEcho.fromAmino(object.echo);
    }
    if (object.flush !== undefined && object.flush !== null) {
      message.flush = ResponseFlush.fromAmino(object.flush);
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = ResponseInfo.fromAmino(object.info);
    }
    if (object.init_chain !== undefined && object.init_chain !== null) {
      message.initChain = ResponseInitChain.fromAmino(object.init_chain);
    }
    if (object.query !== undefined && object.query !== null) {
      message.query = ResponseQuery.fromAmino(object.query);
    }
    if (object.begin_block !== undefined && object.begin_block !== null) {
      message.beginBlock = ResponseBeginBlock.fromAmino(object.begin_block);
    }
    if (object.check_tx !== undefined && object.check_tx !== null) {
      message.checkTx = ResponseCheckTx.fromAmino(object.check_tx);
    }
    if (object.deliver_tx !== undefined && object.deliver_tx !== null) {
      message.deliverTx = ResponseDeliverTx.fromAmino(object.deliver_tx);
    }
    if (object.end_block !== undefined && object.end_block !== null) {
      message.endBlock = ResponseEndBlock.fromAmino(object.end_block);
    }
    if (object.commit !== undefined && object.commit !== null) {
      message.commit = ResponseCommit.fromAmino(object.commit);
    }
    if (object.list_snapshots !== undefined && object.list_snapshots !== null) {
      message.listSnapshots = ResponseListSnapshots.fromAmino(object.list_snapshots);
    }
    if (object.offer_snapshot !== undefined && object.offer_snapshot !== null) {
      message.offerSnapshot = ResponseOfferSnapshot.fromAmino(object.offer_snapshot);
    }
    if (object.load_snapshot_chunk !== undefined && object.load_snapshot_chunk !== null) {
      message.loadSnapshotChunk = ResponseLoadSnapshotChunk.fromAmino(object.load_snapshot_chunk);
    }
    if (object.apply_snapshot_chunk !== undefined && object.apply_snapshot_chunk !== null) {
      message.applySnapshotChunk = ResponseApplySnapshotChunk.fromAmino(object.apply_snapshot_chunk);
    }
    if (object.prepare_proposal !== undefined && object.prepare_proposal !== null) {
      message.prepareProposal = ResponsePrepareProposal.fromAmino(object.prepare_proposal);
    }
    if (object.process_proposal !== undefined && object.process_proposal !== null) {
      message.processProposal = ResponseProcessProposal.fromAmino(object.process_proposal);
    }
    return message;
  },
  toAmino(message: Response): ResponseAmino {
    const obj: any = {};
    obj.exception = message.exception ? ResponseException.toAmino(message.exception) : undefined;
    obj.echo = message.echo ? ResponseEcho.toAmino(message.echo) : undefined;
    obj.flush = message.flush ? ResponseFlush.toAmino(message.flush) : undefined;
    obj.info = message.info ? ResponseInfo.toAmino(message.info) : undefined;
    obj.init_chain = message.initChain ? ResponseInitChain.toAmino(message.initChain) : undefined;
    obj.query = message.query ? ResponseQuery.toAmino(message.query) : undefined;
    obj.begin_block = message.beginBlock ? ResponseBeginBlock.toAmino(message.beginBlock) : undefined;
    obj.check_tx = message.checkTx ? ResponseCheckTx.toAmino(message.checkTx) : undefined;
    obj.deliver_tx = message.deliverTx ? ResponseDeliverTx.toAmino(message.deliverTx) : undefined;
    obj.end_block = message.endBlock ? ResponseEndBlock.toAmino(message.endBlock) : undefined;
    obj.commit = message.commit ? ResponseCommit.toAmino(message.commit) : undefined;
    obj.list_snapshots = message.listSnapshots ? ResponseListSnapshots.toAmino(message.listSnapshots) : undefined;
    obj.offer_snapshot = message.offerSnapshot ? ResponseOfferSnapshot.toAmino(message.offerSnapshot) : undefined;
    obj.load_snapshot_chunk = message.loadSnapshotChunk ? ResponseLoadSnapshotChunk.toAmino(message.loadSnapshotChunk) : undefined;
    obj.apply_snapshot_chunk = message.applySnapshotChunk ? ResponseApplySnapshotChunk.toAmino(message.applySnapshotChunk) : undefined;
    obj.prepare_proposal = message.prepareProposal ? ResponsePrepareProposal.toAmino(message.prepareProposal) : undefined;
    obj.process_proposal = message.processProposal ? ResponseProcessProposal.toAmino(message.processProposal) : undefined;
    return obj;
  },
  fromAminoMsg(object: ResponseAminoMsg): Response {
    return Response.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseProtoMsg): Response {
    return Response.decode(message.value);
  },
  toProto(message: Response): Uint8Array {
    return Response.encode(message).finish();
  },
  toProtoMsg(message: Response): ResponseProtoMsg {
    return {
      typeUrl: "/tendermint.abci.Response",
      value: Response.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Response.typeUrl, Response);
function createBaseResponseException(): ResponseException {
  return {
    error: ""
  };
}
export const ResponseException = {
  typeUrl: "/tendermint.abci.ResponseException",
  is(o: any): o is ResponseException {
    return o && (o.$typeUrl === ResponseException.typeUrl || typeof o.error === "string");
  },
  isSDK(o: any): o is ResponseExceptionSDKType {
    return o && (o.$typeUrl === ResponseException.typeUrl || typeof o.error === "string");
  },
  isAmino(o: any): o is ResponseExceptionAmino {
    return o && (o.$typeUrl === ResponseException.typeUrl || typeof o.error === "string");
  },
  encode(message: ResponseException, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.error !== "") {
      writer.uint32(10).string(message.error);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseException {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseException();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ResponseException>): ResponseException {
    const message = createBaseResponseException();
    message.error = object.error ?? "";
    return message;
  },
  fromAmino(object: ResponseExceptionAmino): ResponseException {
    const message = createBaseResponseException();
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    return message;
  },
  toAmino(message: ResponseException): ResponseExceptionAmino {
    const obj: any = {};
    obj.error = message.error === "" ? undefined : message.error;
    return obj;
  },
  fromAminoMsg(object: ResponseExceptionAminoMsg): ResponseException {
    return ResponseException.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseExceptionProtoMsg): ResponseException {
    return ResponseException.decode(message.value);
  },
  toProto(message: ResponseException): Uint8Array {
    return ResponseException.encode(message).finish();
  },
  toProtoMsg(message: ResponseException): ResponseExceptionProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseException",
      value: ResponseException.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResponseException.typeUrl, ResponseException);
function createBaseResponseEcho(): ResponseEcho {
  return {
    message: ""
  };
}
export const ResponseEcho = {
  typeUrl: "/tendermint.abci.ResponseEcho",
  is(o: any): o is ResponseEcho {
    return o && (o.$typeUrl === ResponseEcho.typeUrl || typeof o.message === "string");
  },
  isSDK(o: any): o is ResponseEchoSDKType {
    return o && (o.$typeUrl === ResponseEcho.typeUrl || typeof o.message === "string");
  },
  isAmino(o: any): o is ResponseEchoAmino {
    return o && (o.$typeUrl === ResponseEcho.typeUrl || typeof o.message === "string");
  },
  encode(message: ResponseEcho, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseEcho {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseEcho();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ResponseEcho>): ResponseEcho {
    const message = createBaseResponseEcho();
    message.message = object.message ?? "";
    return message;
  },
  fromAmino(object: ResponseEchoAmino): ResponseEcho {
    const message = createBaseResponseEcho();
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    }
    return message;
  },
  toAmino(message: ResponseEcho): ResponseEchoAmino {
    const obj: any = {};
    obj.message = message.message === "" ? undefined : message.message;
    return obj;
  },
  fromAminoMsg(object: ResponseEchoAminoMsg): ResponseEcho {
    return ResponseEcho.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseEchoProtoMsg): ResponseEcho {
    return ResponseEcho.decode(message.value);
  },
  toProto(message: ResponseEcho): Uint8Array {
    return ResponseEcho.encode(message).finish();
  },
  toProtoMsg(message: ResponseEcho): ResponseEchoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseEcho",
      value: ResponseEcho.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResponseEcho.typeUrl, ResponseEcho);
function createBaseResponseFlush(): ResponseFlush {
  return {};
}
export const ResponseFlush = {
  typeUrl: "/tendermint.abci.ResponseFlush",
  is(o: any): o is ResponseFlush {
    return o && o.$typeUrl === ResponseFlush.typeUrl;
  },
  isSDK(o: any): o is ResponseFlushSDKType {
    return o && o.$typeUrl === ResponseFlush.typeUrl;
  },
  isAmino(o: any): o is ResponseFlushAmino {
    return o && o.$typeUrl === ResponseFlush.typeUrl;
  },
  encode(_: ResponseFlush, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseFlush {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseFlush();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<ResponseFlush>): ResponseFlush {
    const message = createBaseResponseFlush();
    return message;
  },
  fromAmino(_: ResponseFlushAmino): ResponseFlush {
    const message = createBaseResponseFlush();
    return message;
  },
  toAmino(_: ResponseFlush): ResponseFlushAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ResponseFlushAminoMsg): ResponseFlush {
    return ResponseFlush.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseFlushProtoMsg): ResponseFlush {
    return ResponseFlush.decode(message.value);
  },
  toProto(message: ResponseFlush): Uint8Array {
    return ResponseFlush.encode(message).finish();
  },
  toProtoMsg(message: ResponseFlush): ResponseFlushProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseFlush",
      value: ResponseFlush.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResponseFlush.typeUrl, ResponseFlush);
function createBaseResponseInfo(): ResponseInfo {
  return {
    data: "",
    version: "",
    appVersion: BigInt(0),
    lastBlockHeight: BigInt(0),
    lastBlockAppHash: new Uint8Array()
  };
}
export const ResponseInfo = {
  typeUrl: "/tendermint.abci.ResponseInfo",
  is(o: any): o is ResponseInfo {
    return o && (o.$typeUrl === ResponseInfo.typeUrl || typeof o.data === "string" && typeof o.version === "string" && typeof o.appVersion === "bigint" && typeof o.lastBlockHeight === "bigint" && (o.lastBlockAppHash instanceof Uint8Array || typeof o.lastBlockAppHash === "string"));
  },
  isSDK(o: any): o is ResponseInfoSDKType {
    return o && (o.$typeUrl === ResponseInfo.typeUrl || typeof o.data === "string" && typeof o.version === "string" && typeof o.app_version === "bigint" && typeof o.last_block_height === "bigint" && (o.last_block_app_hash instanceof Uint8Array || typeof o.last_block_app_hash === "string"));
  },
  isAmino(o: any): o is ResponseInfoAmino {
    return o && (o.$typeUrl === ResponseInfo.typeUrl || typeof o.data === "string" && typeof o.version === "string" && typeof o.app_version === "bigint" && typeof o.last_block_height === "bigint" && (o.last_block_app_hash instanceof Uint8Array || typeof o.last_block_app_hash === "string"));
  },
  encode(message: ResponseInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (message.appVersion !== BigInt(0)) {
      writer.uint32(24).uint64(message.appVersion);
    }
    if (message.lastBlockHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.lastBlockHeight);
    }
    if (message.lastBlockAppHash.length !== 0) {
      writer.uint32(42).bytes(message.lastBlockAppHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        case 3:
          message.appVersion = reader.uint64();
          break;
        case 4:
          message.lastBlockHeight = reader.int64();
          break;
        case 5:
          message.lastBlockAppHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ResponseInfo>): ResponseInfo {
    const message = createBaseResponseInfo();
    message.data = object.data ?? "";
    message.version = object.version ?? "";
    message.appVersion = object.appVersion !== undefined && object.appVersion !== null ? BigInt(object.appVersion.toString()) : BigInt(0);
    message.lastBlockHeight = object.lastBlockHeight !== undefined && object.lastBlockHeight !== null ? BigInt(object.lastBlockHeight.toString()) : BigInt(0);
    message.lastBlockAppHash = object.lastBlockAppHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ResponseInfoAmino): ResponseInfo {
    const message = createBaseResponseInfo();
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.app_version !== undefined && object.app_version !== null) {
      message.appVersion = BigInt(object.app_version);
    }
    if (object.last_block_height !== undefined && object.last_block_height !== null) {
      message.lastBlockHeight = BigInt(object.last_block_height);
    }
    if (object.last_block_app_hash !== undefined && object.last_block_app_hash !== null) {
      message.lastBlockAppHash = bytesFromBase64(object.last_block_app_hash);
    }
    return message;
  },
  toAmino(message: ResponseInfo): ResponseInfoAmino {
    const obj: any = {};
    obj.data = message.data === "" ? undefined : message.data;
    obj.version = message.version === "" ? undefined : message.version;
    obj.app_version = message.appVersion !== BigInt(0) ? message.appVersion.toString() : undefined;
    obj.last_block_height = message.lastBlockHeight !== BigInt(0) ? message.lastBlockHeight.toString() : undefined;
    obj.last_block_app_hash = message.lastBlockAppHash ? base64FromBytes(message.lastBlockAppHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: ResponseInfoAminoMsg): ResponseInfo {
    return ResponseInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseInfoProtoMsg): ResponseInfo {
    return ResponseInfo.decode(message.value);
  },
  toProto(message: ResponseInfo): Uint8Array {
    return ResponseInfo.encode(message).finish();
  },
  toProtoMsg(message: ResponseInfo): ResponseInfoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseInfo",
      value: ResponseInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResponseInfo.typeUrl, ResponseInfo);
function createBaseResponseInitChain(): ResponseInitChain {
  return {
    consensusParams: undefined,
    validators: [],
    appHash: new Uint8Array()
  };
}
export const ResponseInitChain = {
  typeUrl: "/tendermint.abci.ResponseInitChain",
  is(o: any): o is ResponseInitChain {
    return o && (o.$typeUrl === ResponseInitChain.typeUrl || Array.isArray(o.validators) && (!o.validators.length || ValidatorUpdate.is(o.validators[0])) && (o.appHash instanceof Uint8Array || typeof o.appHash === "string"));
  },
  isSDK(o: any): o is ResponseInitChainSDKType {
    return o && (o.$typeUrl === ResponseInitChain.typeUrl || Array.isArray(o.validators) && (!o.validators.length || ValidatorUpdate.isSDK(o.validators[0])) && (o.app_hash instanceof Uint8Array || typeof o.app_hash === "string"));
  },
  isAmino(o: any): o is ResponseInitChainAmino {
    return o && (o.$typeUrl === ResponseInitChain.typeUrl || Array.isArray(o.validators) && (!o.validators.length || ValidatorUpdate.isAmino(o.validators[0])) && (o.app_hash instanceof Uint8Array || typeof o.app_hash === "string"));
  },
  encode(message: ResponseInitChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.consensusParams !== undefined) {
      ConsensusParams.encode(message.consensusParams, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.validators) {
      ValidatorUpdate.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.appHash.length !== 0) {
      writer.uint32(26).bytes(message.appHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseInitChain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseInitChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusParams = ConsensusParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.validators.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        case 3:
          message.appHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ResponseInitChain>): ResponseInitChain {
    const message = createBaseResponseInitChain();
    message.consensusParams = object.consensusParams !== undefined && object.consensusParams !== null ? ConsensusParams.fromPartial(object.consensusParams) : undefined;
    message.validators = object.validators?.map(e => ValidatorUpdate.fromPartial(e)) || [];
    message.appHash = object.appHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ResponseInitChainAmino): ResponseInitChain {
    const message = createBaseResponseInitChain();
    if (object.consensus_params !== undefined && object.consensus_params !== null) {
      message.consensusParams = ConsensusParams.fromAmino(object.consensus_params);
    }
    message.validators = object.validators?.map(e => ValidatorUpdate.fromAmino(e)) || [];
    if (object.app_hash !== undefined && object.app_hash !== null) {
      message.appHash = bytesFromBase64(object.app_hash);
    }
    return message;
  },
  toAmino(message: ResponseInitChain): ResponseInitChainAmino {
    const obj: any = {};
    obj.consensus_params = message.consensusParams ? ConsensusParams.toAmino(message.consensusParams) : undefined;
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? ValidatorUpdate.toAmino(e) : undefined);
    } else {
      obj.validators = message.validators;
    }
    obj.app_hash = message.appHash ? base64FromBytes(message.appHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: ResponseInitChainAminoMsg): ResponseInitChain {
    return ResponseInitChain.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseInitChainProtoMsg): ResponseInitChain {
    return ResponseInitChain.decode(message.value);
  },
  toProto(message: ResponseInitChain): Uint8Array {
    return ResponseInitChain.encode(message).finish();
  },
  toProtoMsg(message: ResponseInitChain): ResponseInitChainProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseInitChain",
      value: ResponseInitChain.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResponseInitChain.typeUrl, ResponseInitChain);
function createBaseResponseQuery(): ResponseQuery {
  return {
    code: 0,
    log: "",
    info: "",
    index: BigInt(0),
    key: new Uint8Array(),
    value: new Uint8Array(),
    proofOps: undefined,
    height: BigInt(0),
    codespace: ""
  };
}
export const ResponseQuery = {
  typeUrl: "/tendermint.abci.ResponseQuery",
  is(o: any): o is ResponseQuery {
    return o && (o.$typeUrl === ResponseQuery.typeUrl || typeof o.code === "number" && typeof o.log === "string" && typeof o.info === "string" && typeof o.index === "bigint" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && typeof o.height === "bigint" && typeof o.codespace === "string");
  },
  isSDK(o: any): o is ResponseQuerySDKType {
    return o && (o.$typeUrl === ResponseQuery.typeUrl || typeof o.code === "number" && typeof o.log === "string" && typeof o.info === "string" && typeof o.index === "bigint" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && typeof o.height === "bigint" && typeof o.codespace === "string");
  },
  isAmino(o: any): o is ResponseQueryAmino {
    return o && (o.$typeUrl === ResponseQuery.typeUrl || typeof o.code === "number" && typeof o.log === "string" && typeof o.info === "string" && typeof o.index === "bigint" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && typeof o.height === "bigint" && typeof o.codespace === "string");
  },
  encode(message: ResponseQuery, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (message.index !== BigInt(0)) {
      writer.uint32(40).int64(message.index);
    }
    if (message.key.length !== 0) {
      writer.uint32(50).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(58).bytes(message.value);
    }
    if (message.proofOps !== undefined) {
      ProofOps.encode(message.proofOps, writer.uint32(66).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(72).int64(message.height);
    }
    if (message.codespace !== "") {
      writer.uint32(82).string(message.codespace);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseQuery {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.index = reader.int64();
          break;
        case 6:
          message.key = reader.bytes();
          break;
        case 7:
          message.value = reader.bytes();
          break;
        case 8:
          message.proofOps = ProofOps.decode(reader, reader.uint32());
          break;
        case 9:
          message.height = reader.int64();
          break;
        case 10:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ResponseQuery>): ResponseQuery {
    const message = createBaseResponseQuery();
    message.code = object.code ?? 0;
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.proofOps = object.proofOps !== undefined && object.proofOps !== null ? ProofOps.fromPartial(object.proofOps) : undefined;
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.codespace = object.codespace ?? "";
    return message;
  },
  fromAmino(object: ResponseQueryAmino): ResponseQuery {
    const message = createBaseResponseQuery();
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.log !== undefined && object.log !== null) {
      message.log = object.log;
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = object.info;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    if (object.proof_ops !== undefined && object.proof_ops !== null) {
      message.proofOps = ProofOps.fromAmino(object.proof_ops);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.codespace !== undefined && object.codespace !== null) {
      message.codespace = object.codespace;
    }
    return message;
  },
  toAmino(message: ResponseQuery): ResponseQueryAmino {
    const obj: any = {};
    obj.code = message.code === 0 ? undefined : message.code;
    obj.log = message.log === "" ? undefined : message.log;
    obj.info = message.info === "" ? undefined : message.info;
    obj.index = message.index !== BigInt(0) ? message.index.toString() : undefined;
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    obj.proof_ops = message.proofOps ? ProofOps.toAmino(message.proofOps) : undefined;
    obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
    obj.codespace = message.codespace === "" ? undefined : message.codespace;
    return obj;
  },
  fromAminoMsg(object: ResponseQueryAminoMsg): ResponseQuery {
    return ResponseQuery.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseQueryProtoMsg): ResponseQuery {
    return ResponseQuery.decode(message.value);
  },
  toProto(message: ResponseQuery): Uint8Array {
    return ResponseQuery.encode(message).finish();
  },
  toProtoMsg(message: ResponseQuery): ResponseQueryProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseQuery",
      value: ResponseQuery.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResponseQuery.typeUrl, ResponseQuery);
function createBaseResponseBeginBlock(): ResponseBeginBlock {
  return {
    events: []
  };
}
export const ResponseBeginBlock = {
  typeUrl: "/tendermint.abci.ResponseBeginBlock",
  is(o: any): o is ResponseBeginBlock {
    return o && (o.$typeUrl === ResponseBeginBlock.typeUrl || Array.isArray(o.events) && (!o.events.length || Event.is(o.events[0])));
  },
  isSDK(o: any): o is ResponseBeginBlockSDKType {
    return o && (o.$typeUrl === ResponseBeginBlock.typeUrl || Array.isArray(o.events) && (!o.events.length || Event.isSDK(o.events[0])));
  },
  isAmino(o: any): o is ResponseBeginBlockAmino {
    return o && (o.$typeUrl === ResponseBeginBlock.typeUrl || Array.isArray(o.events) && (!o.events.length || Event.isAmino(o.events[0])));
  },
  encode(message: ResponseBeginBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseBeginBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseBeginBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ResponseBeginBlock>): ResponseBeginBlock {
    const message = createBaseResponseBeginBlock();
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ResponseBeginBlockAmino): ResponseBeginBlock {
    const message = createBaseResponseBeginBlock();
    message.events = object.events?.map(e => Event.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ResponseBeginBlock): ResponseBeginBlockAmino {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toAmino(e) : undefined);
    } else {
      obj.events = message.events;
    }
    return obj;
  },
  fromAminoMsg(object: ResponseBeginBlockAminoMsg): ResponseBeginBlock {
    return ResponseBeginBlock.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseBeginBlockProtoMsg): ResponseBeginBlock {
    return ResponseBeginBlock.decode(message.value);
  },
  toProto(message: ResponseBeginBlock): Uint8Array {
    return ResponseBeginBlock.encode(message).finish();
  },
  toProtoMsg(message: ResponseBeginBlock): ResponseBeginBlockProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseBeginBlock",
      value: ResponseBeginBlock.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResponseBeginBlock.typeUrl, ResponseBeginBlock);
function createBaseResponseCheckTx(): ResponseCheckTx {
  return {
    code: 0,
    data: new Uint8Array(),
    log: "",
    info: "",
    gasWanted: BigInt(0),
    gasUsed: BigInt(0),
    events: [],
    codespace: "",
    sender: "",
    priority: BigInt(0),
    mempoolError: ""
  };
}
export const ResponseCheckTx = {
  typeUrl: "/tendermint.abci.ResponseCheckTx",
  is(o: any): o is ResponseCheckTx {
    return o && (o.$typeUrl === ResponseCheckTx.typeUrl || typeof o.code === "number" && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.log === "string" && typeof o.info === "string" && typeof o.gasWanted === "bigint" && typeof o.gasUsed === "bigint" && Array.isArray(o.events) && (!o.events.length || Event.is(o.events[0])) && typeof o.codespace === "string" && typeof o.sender === "string" && typeof o.priority === "bigint" && typeof o.mempoolError === "string");
  },
  isSDK(o: any): o is ResponseCheckTxSDKType {
    return o && (o.$typeUrl === ResponseCheckTx.typeUrl || typeof o.code === "number" && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.log === "string" && typeof o.info === "string" && typeof o.gas_wanted === "bigint" && typeof o.gas_used === "bigint" && Array.isArray(o.events) && (!o.events.length || Event.isSDK(o.events[0])) && typeof o.codespace === "string" && typeof o.sender === "string" && typeof o.priority === "bigint" && typeof o.mempool_error === "string");
  },
  isAmino(o: any): o is ResponseCheckTxAmino {
    return o && (o.$typeUrl === ResponseCheckTx.typeUrl || typeof o.code === "number" && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.log === "string" && typeof o.info === "string" && typeof o.gas_wanted === "bigint" && typeof o.gas_used === "bigint" && Array.isArray(o.events) && (!o.events.length || Event.isAmino(o.events[0])) && typeof o.codespace === "string" && typeof o.sender === "string" && typeof o.priority === "bigint" && typeof o.mempool_error === "string");
  },
  encode(message: ResponseCheckTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (message.gasWanted !== BigInt(0)) {
      writer.uint32(40).int64(message.gasWanted);
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(48).int64(message.gasUsed);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.codespace !== "") {
      writer.uint32(66).string(message.codespace);
    }
    if (message.sender !== "") {
      writer.uint32(74).string(message.sender);
    }
    if (message.priority !== BigInt(0)) {
      writer.uint32(80).int64(message.priority);
    }
    if (message.mempoolError !== "") {
      writer.uint32(90).string(message.mempoolError);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseCheckTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseCheckTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.gasWanted = reader.int64();
          break;
        case 6:
          message.gasUsed = reader.int64();
          break;
        case 7:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 8:
          message.codespace = reader.string();
          break;
        case 9:
          message.sender = reader.string();
          break;
        case 10:
          message.priority = reader.int64();
          break;
        case 11:
          message.mempoolError = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ResponseCheckTx>): ResponseCheckTx {
    const message = createBaseResponseCheckTx();
    message.code = object.code ?? 0;
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? BigInt(object.gasWanted.toString()) : BigInt(0);
    message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    message.codespace = object.codespace ?? "";
    message.sender = object.sender ?? "";
    message.priority = object.priority !== undefined && object.priority !== null ? BigInt(object.priority.toString()) : BigInt(0);
    message.mempoolError = object.mempoolError ?? "";
    return message;
  },
  fromAmino(object: ResponseCheckTxAmino): ResponseCheckTx {
    const message = createBaseResponseCheckTx();
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.log !== undefined && object.log !== null) {
      message.log = object.log;
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = object.info;
    }
    if (object.gas_wanted !== undefined && object.gas_wanted !== null) {
      message.gasWanted = BigInt(object.gas_wanted);
    }
    if (object.gas_used !== undefined && object.gas_used !== null) {
      message.gasUsed = BigInt(object.gas_used);
    }
    message.events = object.events?.map(e => Event.fromAmino(e)) || [];
    if (object.codespace !== undefined && object.codespace !== null) {
      message.codespace = object.codespace;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.priority !== undefined && object.priority !== null) {
      message.priority = BigInt(object.priority);
    }
    if (object.mempool_error !== undefined && object.mempool_error !== null) {
      message.mempoolError = object.mempool_error;
    }
    return message;
  },
  toAmino(message: ResponseCheckTx): ResponseCheckTxAmino {
    const obj: any = {};
    obj.code = message.code === 0 ? undefined : message.code;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    obj.log = message.log === "" ? undefined : message.log;
    obj.info = message.info === "" ? undefined : message.info;
    obj.gas_wanted = message.gasWanted !== BigInt(0) ? message.gasWanted.toString() : undefined;
    obj.gas_used = message.gasUsed !== BigInt(0) ? message.gasUsed.toString() : undefined;
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toAmino(e) : undefined);
    } else {
      obj.events = message.events;
    }
    obj.codespace = message.codespace === "" ? undefined : message.codespace;
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.priority = message.priority !== BigInt(0) ? message.priority.toString() : undefined;
    obj.mempool_error = message.mempoolError === "" ? undefined : message.mempoolError;
    return obj;
  },
  fromAminoMsg(object: ResponseCheckTxAminoMsg): ResponseCheckTx {
    return ResponseCheckTx.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseCheckTxProtoMsg): ResponseCheckTx {
    return ResponseCheckTx.decode(message.value);
  },
  toProto(message: ResponseCheckTx): Uint8Array {
    return ResponseCheckTx.encode(message).finish();
  },
  toProtoMsg(message: ResponseCheckTx): ResponseCheckTxProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseCheckTx",
      value: ResponseCheckTx.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResponseCheckTx.typeUrl, ResponseCheckTx);
function createBaseResponseDeliverTx(): ResponseDeliverTx {
  return {
    code: 0,
    data: new Uint8Array(),
    log: "",
    info: "",
    gasWanted: BigInt(0),
    gasUsed: BigInt(0),
    events: [],
    codespace: ""
  };
}
export const ResponseDeliverTx = {
  typeUrl: "/tendermint.abci.ResponseDeliverTx",
  is(o: any): o is ResponseDeliverTx {
    return o && (o.$typeUrl === ResponseDeliverTx.typeUrl || typeof o.code === "number" && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.log === "string" && typeof o.info === "string" && typeof o.gasWanted === "bigint" && typeof o.gasUsed === "bigint" && Array.isArray(o.events) && (!o.events.length || Event.is(o.events[0])) && typeof o.codespace === "string");
  },
  isSDK(o: any): o is ResponseDeliverTxSDKType {
    return o && (o.$typeUrl === ResponseDeliverTx.typeUrl || typeof o.code === "number" && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.log === "string" && typeof o.info === "string" && typeof o.gas_wanted === "bigint" && typeof o.gas_used === "bigint" && Array.isArray(o.events) && (!o.events.length || Event.isSDK(o.events[0])) && typeof o.codespace === "string");
  },
  isAmino(o: any): o is ResponseDeliverTxAmino {
    return o && (o.$typeUrl === ResponseDeliverTx.typeUrl || typeof o.code === "number" && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.log === "string" && typeof o.info === "string" && typeof o.gas_wanted === "bigint" && typeof o.gas_used === "bigint" && Array.isArray(o.events) && (!o.events.length || Event.isAmino(o.events[0])) && typeof o.codespace === "string");
  },
  encode(message: ResponseDeliverTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (message.gasWanted !== BigInt(0)) {
      writer.uint32(40).int64(message.gasWanted);
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(48).int64(message.gasUsed);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.codespace !== "") {
      writer.uint32(66).string(message.codespace);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseDeliverTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseDeliverTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.gasWanted = reader.int64();
          break;
        case 6:
          message.gasUsed = reader.int64();
          break;
        case 7:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 8:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ResponseDeliverTx>): ResponseDeliverTx {
    const message = createBaseResponseDeliverTx();
    message.code = object.code ?? 0;
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? BigInt(object.gasWanted.toString()) : BigInt(0);
    message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    message.codespace = object.codespace ?? "";
    return message;
  },
  fromAmino(object: ResponseDeliverTxAmino): ResponseDeliverTx {
    const message = createBaseResponseDeliverTx();
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.log !== undefined && object.log !== null) {
      message.log = object.log;
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = object.info;
    }
    if (object.gas_wanted !== undefined && object.gas_wanted !== null) {
      message.gasWanted = BigInt(object.gas_wanted);
    }
    if (object.gas_used !== undefined && object.gas_used !== null) {
      message.gasUsed = BigInt(object.gas_used);
    }
    message.events = object.events?.map(e => Event.fromAmino(e)) || [];
    if (object.codespace !== undefined && object.codespace !== null) {
      message.codespace = object.codespace;
    }
    return message;
  },
  toAmino(message: ResponseDeliverTx): ResponseDeliverTxAmino {
    const obj: any = {};
    obj.code = message.code === 0 ? undefined : message.code;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    obj.log = message.log === "" ? undefined : message.log;
    obj.info = message.info === "" ? undefined : message.info;
    obj.gas_wanted = message.gasWanted !== BigInt(0) ? message.gasWanted.toString() : undefined;
    obj.gas_used = message.gasUsed !== BigInt(0) ? message.gasUsed.toString() : undefined;
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toAmino(e) : undefined);
    } else {
      obj.events = message.events;
    }
    obj.codespace = message.codespace === "" ? undefined : message.codespace;
    return obj;
  },
  fromAminoMsg(object: ResponseDeliverTxAminoMsg): ResponseDeliverTx {
    return ResponseDeliverTx.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseDeliverTxProtoMsg): ResponseDeliverTx {
    return ResponseDeliverTx.decode(message.value);
  },
  toProto(message: ResponseDeliverTx): Uint8Array {
    return ResponseDeliverTx.encode(message).finish();
  },
  toProtoMsg(message: ResponseDeliverTx): ResponseDeliverTxProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseDeliverTx",
      value: ResponseDeliverTx.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResponseDeliverTx.typeUrl, ResponseDeliverTx);
function createBaseResponseEndBlock(): ResponseEndBlock {
  return {
    validatorUpdates: [],
    consensusParamUpdates: undefined,
    events: []
  };
}
export const ResponseEndBlock = {
  typeUrl: "/tendermint.abci.ResponseEndBlock",
  is(o: any): o is ResponseEndBlock {
    return o && (o.$typeUrl === ResponseEndBlock.typeUrl || Array.isArray(o.validatorUpdates) && (!o.validatorUpdates.length || ValidatorUpdate.is(o.validatorUpdates[0])) && Array.isArray(o.events) && (!o.events.length || Event.is(o.events[0])));
  },
  isSDK(o: any): o is ResponseEndBlockSDKType {
    return o && (o.$typeUrl === ResponseEndBlock.typeUrl || Array.isArray(o.validator_updates) && (!o.validator_updates.length || ValidatorUpdate.isSDK(o.validator_updates[0])) && Array.isArray(o.events) && (!o.events.length || Event.isSDK(o.events[0])));
  },
  isAmino(o: any): o is ResponseEndBlockAmino {
    return o && (o.$typeUrl === ResponseEndBlock.typeUrl || Array.isArray(o.validator_updates) && (!o.validator_updates.length || ValidatorUpdate.isAmino(o.validator_updates[0])) && Array.isArray(o.events) && (!o.events.length || Event.isAmino(o.events[0])));
  },
  encode(message: ResponseEndBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.validatorUpdates) {
      ValidatorUpdate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.consensusParamUpdates !== undefined) {
      ConsensusParams.encode(message.consensusParamUpdates, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseEndBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseEndBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorUpdates.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        case 2:
          message.consensusParamUpdates = ConsensusParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ResponseEndBlock>): ResponseEndBlock {
    const message = createBaseResponseEndBlock();
    message.validatorUpdates = object.validatorUpdates?.map(e => ValidatorUpdate.fromPartial(e)) || [];
    message.consensusParamUpdates = object.consensusParamUpdates !== undefined && object.consensusParamUpdates !== null ? ConsensusParams.fromPartial(object.consensusParamUpdates) : undefined;
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ResponseEndBlockAmino): ResponseEndBlock {
    const message = createBaseResponseEndBlock();
    message.validatorUpdates = object.validator_updates?.map(e => ValidatorUpdate.fromAmino(e)) || [];
    if (object.consensus_param_updates !== undefined && object.consensus_param_updates !== null) {
      message.consensusParamUpdates = ConsensusParams.fromAmino(object.consensus_param_updates);
    }
    message.events = object.events?.map(e => Event.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ResponseEndBlock): ResponseEndBlockAmino {
    const obj: any = {};
    if (message.validatorUpdates) {
      obj.validator_updates = message.validatorUpdates.map(e => e ? ValidatorUpdate.toAmino(e) : undefined);
    } else {
      obj.validator_updates = message.validatorUpdates;
    }
    obj.consensus_param_updates = message.consensusParamUpdates ? ConsensusParams.toAmino(message.consensusParamUpdates) : undefined;
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toAmino(e) : undefined);
    } else {
      obj.events = message.events;
    }
    return obj;
  },
  fromAminoMsg(object: ResponseEndBlockAminoMsg): ResponseEndBlock {
    return ResponseEndBlock.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseEndBlockProtoMsg): ResponseEndBlock {
    return ResponseEndBlock.decode(message.value);
  },
  toProto(message: ResponseEndBlock): Uint8Array {
    return ResponseEndBlock.encode(message).finish();
  },
  toProtoMsg(message: ResponseEndBlock): ResponseEndBlockProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseEndBlock",
      value: ResponseEndBlock.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResponseEndBlock.typeUrl, ResponseEndBlock);
function createBaseResponseCommit(): ResponseCommit {
  return {
    data: new Uint8Array(),
    retainHeight: BigInt(0)
  };
}
export const ResponseCommit = {
  typeUrl: "/tendermint.abci.ResponseCommit",
  is(o: any): o is ResponseCommit {
    return o && (o.$typeUrl === ResponseCommit.typeUrl || (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.retainHeight === "bigint");
  },
  isSDK(o: any): o is ResponseCommitSDKType {
    return o && (o.$typeUrl === ResponseCommit.typeUrl || (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.retain_height === "bigint");
  },
  isAmino(o: any): o is ResponseCommitAmino {
    return o && (o.$typeUrl === ResponseCommit.typeUrl || (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.retain_height === "bigint");
  },
  encode(message: ResponseCommit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.retainHeight !== BigInt(0)) {
      writer.uint32(24).int64(message.retainHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseCommit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseCommit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.retainHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ResponseCommit>): ResponseCommit {
    const message = createBaseResponseCommit();
    message.data = object.data ?? new Uint8Array();
    message.retainHeight = object.retainHeight !== undefined && object.retainHeight !== null ? BigInt(object.retainHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ResponseCommitAmino): ResponseCommit {
    const message = createBaseResponseCommit();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.retain_height !== undefined && object.retain_height !== null) {
      message.retainHeight = BigInt(object.retain_height);
    }
    return message;
  },
  toAmino(message: ResponseCommit): ResponseCommitAmino {
    const obj: any = {};
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    obj.retain_height = message.retainHeight !== BigInt(0) ? message.retainHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ResponseCommitAminoMsg): ResponseCommit {
    return ResponseCommit.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseCommitProtoMsg): ResponseCommit {
    return ResponseCommit.decode(message.value);
  },
  toProto(message: ResponseCommit): Uint8Array {
    return ResponseCommit.encode(message).finish();
  },
  toProtoMsg(message: ResponseCommit): ResponseCommitProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseCommit",
      value: ResponseCommit.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResponseCommit.typeUrl, ResponseCommit);
function createBaseResponseListSnapshots(): ResponseListSnapshots {
  return {
    snapshots: []
  };
}
export const ResponseListSnapshots = {
  typeUrl: "/tendermint.abci.ResponseListSnapshots",
  is(o: any): o is ResponseListSnapshots {
    return o && (o.$typeUrl === ResponseListSnapshots.typeUrl || Array.isArray(o.snapshots) && (!o.snapshots.length || Snapshot.is(o.snapshots[0])));
  },
  isSDK(o: any): o is ResponseListSnapshotsSDKType {
    return o && (o.$typeUrl === ResponseListSnapshots.typeUrl || Array.isArray(o.snapshots) && (!o.snapshots.length || Snapshot.isSDK(o.snapshots[0])));
  },
  isAmino(o: any): o is ResponseListSnapshotsAmino {
    return o && (o.$typeUrl === ResponseListSnapshots.typeUrl || Array.isArray(o.snapshots) && (!o.snapshots.length || Snapshot.isAmino(o.snapshots[0])));
  },
  encode(message: ResponseListSnapshots, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.snapshots) {
      Snapshot.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseListSnapshots {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseListSnapshots();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.snapshots.push(Snapshot.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ResponseListSnapshots>): ResponseListSnapshots {
    const message = createBaseResponseListSnapshots();
    message.snapshots = object.snapshots?.map(e => Snapshot.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ResponseListSnapshotsAmino): ResponseListSnapshots {
    const message = createBaseResponseListSnapshots();
    message.snapshots = object.snapshots?.map(e => Snapshot.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ResponseListSnapshots): ResponseListSnapshotsAmino {
    const obj: any = {};
    if (message.snapshots) {
      obj.snapshots = message.snapshots.map(e => e ? Snapshot.toAmino(e) : undefined);
    } else {
      obj.snapshots = message.snapshots;
    }
    return obj;
  },
  fromAminoMsg(object: ResponseListSnapshotsAminoMsg): ResponseListSnapshots {
    return ResponseListSnapshots.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseListSnapshotsProtoMsg): ResponseListSnapshots {
    return ResponseListSnapshots.decode(message.value);
  },
  toProto(message: ResponseListSnapshots): Uint8Array {
    return ResponseListSnapshots.encode(message).finish();
  },
  toProtoMsg(message: ResponseListSnapshots): ResponseListSnapshotsProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseListSnapshots",
      value: ResponseListSnapshots.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResponseListSnapshots.typeUrl, ResponseListSnapshots);
function createBaseResponseOfferSnapshot(): ResponseOfferSnapshot {
  return {
    result: 0
  };
}
export const ResponseOfferSnapshot = {
  typeUrl: "/tendermint.abci.ResponseOfferSnapshot",
  is(o: any): o is ResponseOfferSnapshot {
    return o && (o.$typeUrl === ResponseOfferSnapshot.typeUrl || isSet(o.result));
  },
  isSDK(o: any): o is ResponseOfferSnapshotSDKType {
    return o && (o.$typeUrl === ResponseOfferSnapshot.typeUrl || isSet(o.result));
  },
  isAmino(o: any): o is ResponseOfferSnapshotAmino {
    return o && (o.$typeUrl === ResponseOfferSnapshot.typeUrl || isSet(o.result));
  },
  encode(message: ResponseOfferSnapshot, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseOfferSnapshot {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseOfferSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ResponseOfferSnapshot>): ResponseOfferSnapshot {
    const message = createBaseResponseOfferSnapshot();
    message.result = object.result ?? 0;
    return message;
  },
  fromAmino(object: ResponseOfferSnapshotAmino): ResponseOfferSnapshot {
    const message = createBaseResponseOfferSnapshot();
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message: ResponseOfferSnapshot): ResponseOfferSnapshotAmino {
    const obj: any = {};
    obj.result = message.result === 0 ? undefined : message.result;
    return obj;
  },
  fromAminoMsg(object: ResponseOfferSnapshotAminoMsg): ResponseOfferSnapshot {
    return ResponseOfferSnapshot.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseOfferSnapshotProtoMsg): ResponseOfferSnapshot {
    return ResponseOfferSnapshot.decode(message.value);
  },
  toProto(message: ResponseOfferSnapshot): Uint8Array {
    return ResponseOfferSnapshot.encode(message).finish();
  },
  toProtoMsg(message: ResponseOfferSnapshot): ResponseOfferSnapshotProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseOfferSnapshot",
      value: ResponseOfferSnapshot.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResponseOfferSnapshot.typeUrl, ResponseOfferSnapshot);
function createBaseResponseLoadSnapshotChunk(): ResponseLoadSnapshotChunk {
  return {
    chunk: new Uint8Array()
  };
}
export const ResponseLoadSnapshotChunk = {
  typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk",
  is(o: any): o is ResponseLoadSnapshotChunk {
    return o && (o.$typeUrl === ResponseLoadSnapshotChunk.typeUrl || o.chunk instanceof Uint8Array || typeof o.chunk === "string");
  },
  isSDK(o: any): o is ResponseLoadSnapshotChunkSDKType {
    return o && (o.$typeUrl === ResponseLoadSnapshotChunk.typeUrl || o.chunk instanceof Uint8Array || typeof o.chunk === "string");
  },
  isAmino(o: any): o is ResponseLoadSnapshotChunkAmino {
    return o && (o.$typeUrl === ResponseLoadSnapshotChunk.typeUrl || o.chunk instanceof Uint8Array || typeof o.chunk === "string");
  },
  encode(message: ResponseLoadSnapshotChunk, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chunk.length !== 0) {
      writer.uint32(10).bytes(message.chunk);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseLoadSnapshotChunk {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseLoadSnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chunk = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ResponseLoadSnapshotChunk>): ResponseLoadSnapshotChunk {
    const message = createBaseResponseLoadSnapshotChunk();
    message.chunk = object.chunk ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ResponseLoadSnapshotChunkAmino): ResponseLoadSnapshotChunk {
    const message = createBaseResponseLoadSnapshotChunk();
    if (object.chunk !== undefined && object.chunk !== null) {
      message.chunk = bytesFromBase64(object.chunk);
    }
    return message;
  },
  toAmino(message: ResponseLoadSnapshotChunk): ResponseLoadSnapshotChunkAmino {
    const obj: any = {};
    obj.chunk = message.chunk ? base64FromBytes(message.chunk) : undefined;
    return obj;
  },
  fromAminoMsg(object: ResponseLoadSnapshotChunkAminoMsg): ResponseLoadSnapshotChunk {
    return ResponseLoadSnapshotChunk.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseLoadSnapshotChunkProtoMsg): ResponseLoadSnapshotChunk {
    return ResponseLoadSnapshotChunk.decode(message.value);
  },
  toProto(message: ResponseLoadSnapshotChunk): Uint8Array {
    return ResponseLoadSnapshotChunk.encode(message).finish();
  },
  toProtoMsg(message: ResponseLoadSnapshotChunk): ResponseLoadSnapshotChunkProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk",
      value: ResponseLoadSnapshotChunk.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResponseLoadSnapshotChunk.typeUrl, ResponseLoadSnapshotChunk);
function createBaseResponseApplySnapshotChunk(): ResponseApplySnapshotChunk {
  return {
    result: 0,
    refetchChunks: [],
    rejectSenders: []
  };
}
export const ResponseApplySnapshotChunk = {
  typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk",
  is(o: any): o is ResponseApplySnapshotChunk {
    return o && (o.$typeUrl === ResponseApplySnapshotChunk.typeUrl || isSet(o.result) && Array.isArray(o.refetchChunks) && (!o.refetchChunks.length || typeof o.refetchChunks[0] === "number") && Array.isArray(o.rejectSenders) && (!o.rejectSenders.length || typeof o.rejectSenders[0] === "string"));
  },
  isSDK(o: any): o is ResponseApplySnapshotChunkSDKType {
    return o && (o.$typeUrl === ResponseApplySnapshotChunk.typeUrl || isSet(o.result) && Array.isArray(o.refetch_chunks) && (!o.refetch_chunks.length || typeof o.refetch_chunks[0] === "number") && Array.isArray(o.reject_senders) && (!o.reject_senders.length || typeof o.reject_senders[0] === "string"));
  },
  isAmino(o: any): o is ResponseApplySnapshotChunkAmino {
    return o && (o.$typeUrl === ResponseApplySnapshotChunk.typeUrl || isSet(o.result) && Array.isArray(o.refetch_chunks) && (!o.refetch_chunks.length || typeof o.refetch_chunks[0] === "number") && Array.isArray(o.reject_senders) && (!o.reject_senders.length || typeof o.reject_senders[0] === "string"));
  },
  encode(message: ResponseApplySnapshotChunk, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    writer.uint32(18).fork();
    for (const v of message.refetchChunks) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.rejectSenders) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseApplySnapshotChunk {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseApplySnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = (reader.int32() as any);
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.refetchChunks.push(reader.uint32());
            }
          } else {
            message.refetchChunks.push(reader.uint32());
          }
          break;
        case 3:
          message.rejectSenders.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ResponseApplySnapshotChunk>): ResponseApplySnapshotChunk {
    const message = createBaseResponseApplySnapshotChunk();
    message.result = object.result ?? 0;
    message.refetchChunks = object.refetchChunks?.map(e => e) || [];
    message.rejectSenders = object.rejectSenders?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ResponseApplySnapshotChunkAmino): ResponseApplySnapshotChunk {
    const message = createBaseResponseApplySnapshotChunk();
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    message.refetchChunks = object.refetch_chunks?.map(e => e) || [];
    message.rejectSenders = object.reject_senders?.map(e => e) || [];
    return message;
  },
  toAmino(message: ResponseApplySnapshotChunk): ResponseApplySnapshotChunkAmino {
    const obj: any = {};
    obj.result = message.result === 0 ? undefined : message.result;
    if (message.refetchChunks) {
      obj.refetch_chunks = message.refetchChunks.map(e => e);
    } else {
      obj.refetch_chunks = message.refetchChunks;
    }
    if (message.rejectSenders) {
      obj.reject_senders = message.rejectSenders.map(e => e);
    } else {
      obj.reject_senders = message.rejectSenders;
    }
    return obj;
  },
  fromAminoMsg(object: ResponseApplySnapshotChunkAminoMsg): ResponseApplySnapshotChunk {
    return ResponseApplySnapshotChunk.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseApplySnapshotChunkProtoMsg): ResponseApplySnapshotChunk {
    return ResponseApplySnapshotChunk.decode(message.value);
  },
  toProto(message: ResponseApplySnapshotChunk): Uint8Array {
    return ResponseApplySnapshotChunk.encode(message).finish();
  },
  toProtoMsg(message: ResponseApplySnapshotChunk): ResponseApplySnapshotChunkProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk",
      value: ResponseApplySnapshotChunk.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResponseApplySnapshotChunk.typeUrl, ResponseApplySnapshotChunk);
function createBaseResponsePrepareProposal(): ResponsePrepareProposal {
  return {
    txs: []
  };
}
export const ResponsePrepareProposal = {
  typeUrl: "/tendermint.abci.ResponsePrepareProposal",
  is(o: any): o is ResponsePrepareProposal {
    return o && (o.$typeUrl === ResponsePrepareProposal.typeUrl || Array.isArray(o.txs) && (!o.txs.length || o.txs[0] instanceof Uint8Array || typeof o.txs[0] === "string"));
  },
  isSDK(o: any): o is ResponsePrepareProposalSDKType {
    return o && (o.$typeUrl === ResponsePrepareProposal.typeUrl || Array.isArray(o.txs) && (!o.txs.length || o.txs[0] instanceof Uint8Array || typeof o.txs[0] === "string"));
  },
  isAmino(o: any): o is ResponsePrepareProposalAmino {
    return o && (o.$typeUrl === ResponsePrepareProposal.typeUrl || Array.isArray(o.txs) && (!o.txs.length || o.txs[0] instanceof Uint8Array || typeof o.txs[0] === "string"));
  },
  encode(message: ResponsePrepareProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponsePrepareProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponsePrepareProposal();
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
  fromPartial(object: Partial<ResponsePrepareProposal>): ResponsePrepareProposal {
    const message = createBaseResponsePrepareProposal();
    message.txs = object.txs?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ResponsePrepareProposalAmino): ResponsePrepareProposal {
    const message = createBaseResponsePrepareProposal();
    message.txs = object.txs?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: ResponsePrepareProposal): ResponsePrepareProposalAmino {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map(e => base64FromBytes(e));
    } else {
      obj.txs = message.txs;
    }
    return obj;
  },
  fromAminoMsg(object: ResponsePrepareProposalAminoMsg): ResponsePrepareProposal {
    return ResponsePrepareProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponsePrepareProposalProtoMsg): ResponsePrepareProposal {
    return ResponsePrepareProposal.decode(message.value);
  },
  toProto(message: ResponsePrepareProposal): Uint8Array {
    return ResponsePrepareProposal.encode(message).finish();
  },
  toProtoMsg(message: ResponsePrepareProposal): ResponsePrepareProposalProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponsePrepareProposal",
      value: ResponsePrepareProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResponsePrepareProposal.typeUrl, ResponsePrepareProposal);
function createBaseResponseProcessProposal(): ResponseProcessProposal {
  return {
    status: 0
  };
}
export const ResponseProcessProposal = {
  typeUrl: "/tendermint.abci.ResponseProcessProposal",
  is(o: any): o is ResponseProcessProposal {
    return o && (o.$typeUrl === ResponseProcessProposal.typeUrl || isSet(o.status));
  },
  isSDK(o: any): o is ResponseProcessProposalSDKType {
    return o && (o.$typeUrl === ResponseProcessProposal.typeUrl || isSet(o.status));
  },
  isAmino(o: any): o is ResponseProcessProposalAmino {
    return o && (o.$typeUrl === ResponseProcessProposal.typeUrl || isSet(o.status));
  },
  encode(message: ResponseProcessProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseProcessProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseProcessProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ResponseProcessProposal>): ResponseProcessProposal {
    const message = createBaseResponseProcessProposal();
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: ResponseProcessProposalAmino): ResponseProcessProposal {
    const message = createBaseResponseProcessProposal();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: ResponseProcessProposal): ResponseProcessProposalAmino {
    const obj: any = {};
    obj.status = message.status === 0 ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: ResponseProcessProposalAminoMsg): ResponseProcessProposal {
    return ResponseProcessProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseProcessProposalProtoMsg): ResponseProcessProposal {
    return ResponseProcessProposal.decode(message.value);
  },
  toProto(message: ResponseProcessProposal): Uint8Array {
    return ResponseProcessProposal.encode(message).finish();
  },
  toProtoMsg(message: ResponseProcessProposal): ResponseProcessProposalProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseProcessProposal",
      value: ResponseProcessProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResponseProcessProposal.typeUrl, ResponseProcessProposal);
function createBaseCommitInfo(): CommitInfo {
  return {
    round: 0,
    votes: []
  };
}
export const CommitInfo = {
  typeUrl: "/tendermint.abci.CommitInfo",
  is(o: any): o is CommitInfo {
    return o && (o.$typeUrl === CommitInfo.typeUrl || typeof o.round === "number" && Array.isArray(o.votes) && (!o.votes.length || VoteInfo.is(o.votes[0])));
  },
  isSDK(o: any): o is CommitInfoSDKType {
    return o && (o.$typeUrl === CommitInfo.typeUrl || typeof o.round === "number" && Array.isArray(o.votes) && (!o.votes.length || VoteInfo.isSDK(o.votes[0])));
  },
  isAmino(o: any): o is CommitInfoAmino {
    return o && (o.$typeUrl === CommitInfo.typeUrl || typeof o.round === "number" && Array.isArray(o.votes) && (!o.votes.length || VoteInfo.isAmino(o.votes[0])));
  },
  encode(message: CommitInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.round !== 0) {
      writer.uint32(8).int32(message.round);
    }
    for (const v of message.votes) {
      VoteInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CommitInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.round = reader.int32();
          break;
        case 2:
          message.votes.push(VoteInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<CommitInfo>): CommitInfo {
    const message = createBaseCommitInfo();
    message.round = object.round ?? 0;
    message.votes = object.votes?.map(e => VoteInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CommitInfoAmino): CommitInfo {
    const message = createBaseCommitInfo();
    if (object.round !== undefined && object.round !== null) {
      message.round = object.round;
    }
    message.votes = object.votes?.map(e => VoteInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CommitInfo): CommitInfoAmino {
    const obj: any = {};
    obj.round = message.round === 0 ? undefined : message.round;
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? VoteInfo.toAmino(e) : undefined);
    } else {
      obj.votes = message.votes;
    }
    return obj;
  },
  fromAminoMsg(object: CommitInfoAminoMsg): CommitInfo {
    return CommitInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: CommitInfoProtoMsg): CommitInfo {
    return CommitInfo.decode(message.value);
  },
  toProto(message: CommitInfo): Uint8Array {
    return CommitInfo.encode(message).finish();
  },
  toProtoMsg(message: CommitInfo): CommitInfoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.CommitInfo",
      value: CommitInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CommitInfo.typeUrl, CommitInfo);
function createBaseExtendedCommitInfo(): ExtendedCommitInfo {
  return {
    round: 0,
    votes: []
  };
}
export const ExtendedCommitInfo = {
  typeUrl: "/tendermint.abci.ExtendedCommitInfo",
  is(o: any): o is ExtendedCommitInfo {
    return o && (o.$typeUrl === ExtendedCommitInfo.typeUrl || typeof o.round === "number" && Array.isArray(o.votes) && (!o.votes.length || ExtendedVoteInfo.is(o.votes[0])));
  },
  isSDK(o: any): o is ExtendedCommitInfoSDKType {
    return o && (o.$typeUrl === ExtendedCommitInfo.typeUrl || typeof o.round === "number" && Array.isArray(o.votes) && (!o.votes.length || ExtendedVoteInfo.isSDK(o.votes[0])));
  },
  isAmino(o: any): o is ExtendedCommitInfoAmino {
    return o && (o.$typeUrl === ExtendedCommitInfo.typeUrl || typeof o.round === "number" && Array.isArray(o.votes) && (!o.votes.length || ExtendedVoteInfo.isAmino(o.votes[0])));
  },
  encode(message: ExtendedCommitInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.round !== 0) {
      writer.uint32(8).int32(message.round);
    }
    for (const v of message.votes) {
      ExtendedVoteInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExtendedCommitInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtendedCommitInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.round = reader.int32();
          break;
        case 2:
          message.votes.push(ExtendedVoteInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ExtendedCommitInfo>): ExtendedCommitInfo {
    const message = createBaseExtendedCommitInfo();
    message.round = object.round ?? 0;
    message.votes = object.votes?.map(e => ExtendedVoteInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ExtendedCommitInfoAmino): ExtendedCommitInfo {
    const message = createBaseExtendedCommitInfo();
    if (object.round !== undefined && object.round !== null) {
      message.round = object.round;
    }
    message.votes = object.votes?.map(e => ExtendedVoteInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ExtendedCommitInfo): ExtendedCommitInfoAmino {
    const obj: any = {};
    obj.round = message.round === 0 ? undefined : message.round;
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? ExtendedVoteInfo.toAmino(e) : undefined);
    } else {
      obj.votes = message.votes;
    }
    return obj;
  },
  fromAminoMsg(object: ExtendedCommitInfoAminoMsg): ExtendedCommitInfo {
    return ExtendedCommitInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ExtendedCommitInfoProtoMsg): ExtendedCommitInfo {
    return ExtendedCommitInfo.decode(message.value);
  },
  toProto(message: ExtendedCommitInfo): Uint8Array {
    return ExtendedCommitInfo.encode(message).finish();
  },
  toProtoMsg(message: ExtendedCommitInfo): ExtendedCommitInfoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ExtendedCommitInfo",
      value: ExtendedCommitInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ExtendedCommitInfo.typeUrl, ExtendedCommitInfo);
function createBaseEvent(): Event {
  return {
    type: "",
    attributes: []
  };
}
export const Event = {
  typeUrl: "/tendermint.abci.Event",
  is(o: any): o is Event {
    return o && (o.$typeUrl === Event.typeUrl || typeof o.type === "string" && Array.isArray(o.attributes) && (!o.attributes.length || EventAttribute.is(o.attributes[0])));
  },
  isSDK(o: any): o is EventSDKType {
    return o && (o.$typeUrl === Event.typeUrl || typeof o.type === "string" && Array.isArray(o.attributes) && (!o.attributes.length || EventAttribute.isSDK(o.attributes[0])));
  },
  isAmino(o: any): o is EventAmino {
    return o && (o.$typeUrl === Event.typeUrl || typeof o.type === "string" && Array.isArray(o.attributes) && (!o.attributes.length || EventAttribute.isAmino(o.attributes[0])));
  },
  encode(message: Event, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    for (const v of message.attributes) {
      EventAttribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Event {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.attributes.push(EventAttribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Event>): Event {
    const message = createBaseEvent();
    message.type = object.type ?? "";
    message.attributes = object.attributes?.map(e => EventAttribute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventAmino): Event {
    const message = createBaseEvent();
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    message.attributes = object.attributes?.map(e => EventAttribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Event): EventAmino {
    const obj: any = {};
    obj.type = message.type === "" ? undefined : message.type;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? EventAttribute.toAmino(e) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    return obj;
  },
  fromAminoMsg(object: EventAminoMsg): Event {
    return Event.fromAmino(object.value);
  },
  fromProtoMsg(message: EventProtoMsg): Event {
    return Event.decode(message.value);
  },
  toProto(message: Event): Uint8Array {
    return Event.encode(message).finish();
  },
  toProtoMsg(message: Event): EventProtoMsg {
    return {
      typeUrl: "/tendermint.abci.Event",
      value: Event.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Event.typeUrl, Event);
function createBaseEventAttribute(): EventAttribute {
  return {
    key: "",
    value: "",
    index: false
  };
}
export const EventAttribute = {
  typeUrl: "/tendermint.abci.EventAttribute",
  is(o: any): o is EventAttribute {
    return o && (o.$typeUrl === EventAttribute.typeUrl || typeof o.key === "string" && typeof o.value === "string" && typeof o.index === "boolean");
  },
  isSDK(o: any): o is EventAttributeSDKType {
    return o && (o.$typeUrl === EventAttribute.typeUrl || typeof o.key === "string" && typeof o.value === "string" && typeof o.index === "boolean");
  },
  isAmino(o: any): o is EventAttributeAmino {
    return o && (o.$typeUrl === EventAttribute.typeUrl || typeof o.key === "string" && typeof o.value === "string" && typeof o.index === "boolean");
  },
  encode(message: EventAttribute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.index === true) {
      writer.uint32(24).bool(message.index);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventAttribute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        case 3:
          message.index = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventAttribute>): EventAttribute {
    const message = createBaseEventAttribute();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    message.index = object.index ?? false;
    return message;
  },
  fromAmino(object: EventAttributeAmino): EventAttribute {
    const message = createBaseEventAttribute();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    return message;
  },
  toAmino(message: EventAttribute): EventAttributeAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    obj.index = message.index === false ? undefined : message.index;
    return obj;
  },
  fromAminoMsg(object: EventAttributeAminoMsg): EventAttribute {
    return EventAttribute.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAttributeProtoMsg): EventAttribute {
    return EventAttribute.decode(message.value);
  },
  toProto(message: EventAttribute): Uint8Array {
    return EventAttribute.encode(message).finish();
  },
  toProtoMsg(message: EventAttribute): EventAttributeProtoMsg {
    return {
      typeUrl: "/tendermint.abci.EventAttribute",
      value: EventAttribute.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventAttribute.typeUrl, EventAttribute);
function createBaseTxResult(): TxResult {
  return {
    height: BigInt(0),
    index: 0,
    tx: new Uint8Array(),
    result: ResponseDeliverTx.fromPartial({})
  };
}
export const TxResult = {
  typeUrl: "/tendermint.abci.TxResult",
  is(o: any): o is TxResult {
    return o && (o.$typeUrl === TxResult.typeUrl || typeof o.height === "bigint" && typeof o.index === "number" && (o.tx instanceof Uint8Array || typeof o.tx === "string") && ResponseDeliverTx.is(o.result));
  },
  isSDK(o: any): o is TxResultSDKType {
    return o && (o.$typeUrl === TxResult.typeUrl || typeof o.height === "bigint" && typeof o.index === "number" && (o.tx instanceof Uint8Array || typeof o.tx === "string") && ResponseDeliverTx.isSDK(o.result));
  },
  isAmino(o: any): o is TxResultAmino {
    return o && (o.$typeUrl === TxResult.typeUrl || typeof o.height === "bigint" && typeof o.index === "number" && (o.tx instanceof Uint8Array || typeof o.tx === "string") && ResponseDeliverTx.isAmino(o.result));
  },
  encode(message: TxResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.index !== 0) {
      writer.uint32(16).uint32(message.index);
    }
    if (message.tx.length !== 0) {
      writer.uint32(26).bytes(message.tx);
    }
    if (message.result !== undefined) {
      ResponseDeliverTx.encode(message.result, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.index = reader.uint32();
          break;
        case 3:
          message.tx = reader.bytes();
          break;
        case 4:
          message.result = ResponseDeliverTx.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TxResult>): TxResult {
    const message = createBaseTxResult();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.index = object.index ?? 0;
    message.tx = object.tx ?? new Uint8Array();
    message.result = object.result !== undefined && object.result !== null ? ResponseDeliverTx.fromPartial(object.result) : undefined;
    return message;
  },
  fromAmino(object: TxResultAmino): TxResult {
    const message = createBaseTxResult();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = bytesFromBase64(object.tx);
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = ResponseDeliverTx.fromAmino(object.result);
    }
    return message;
  },
  toAmino(message: TxResult): TxResultAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
    obj.index = message.index === 0 ? undefined : message.index;
    obj.tx = message.tx ? base64FromBytes(message.tx) : undefined;
    obj.result = message.result ? ResponseDeliverTx.toAmino(message.result) : undefined;
    return obj;
  },
  fromAminoMsg(object: TxResultAminoMsg): TxResult {
    return TxResult.fromAmino(object.value);
  },
  fromProtoMsg(message: TxResultProtoMsg): TxResult {
    return TxResult.decode(message.value);
  },
  toProto(message: TxResult): Uint8Array {
    return TxResult.encode(message).finish();
  },
  toProtoMsg(message: TxResult): TxResultProtoMsg {
    return {
      typeUrl: "/tendermint.abci.TxResult",
      value: TxResult.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TxResult.typeUrl, TxResult);
function createBaseValidator(): Validator {
  return {
    address: new Uint8Array(),
    power: BigInt(0)
  };
}
export const Validator = {
  typeUrl: "/tendermint.abci.Validator",
  is(o: any): o is Validator {
    return o && (o.$typeUrl === Validator.typeUrl || (o.address instanceof Uint8Array || typeof o.address === "string") && typeof o.power === "bigint");
  },
  isSDK(o: any): o is ValidatorSDKType {
    return o && (o.$typeUrl === Validator.typeUrl || (o.address instanceof Uint8Array || typeof o.address === "string") && typeof o.power === "bigint");
  },
  isAmino(o: any): o is ValidatorAmino {
    return o && (o.$typeUrl === Validator.typeUrl || (o.address instanceof Uint8Array || typeof o.address === "string") && typeof o.power === "bigint");
  },
  encode(message: Validator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(24).int64(message.power);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Validator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 3:
          message.power = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Validator>): Validator {
    const message = createBaseValidator();
    message.address = object.address ?? new Uint8Array();
    message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ValidatorAmino): Validator {
    const message = createBaseValidator();
    if (object.address !== undefined && object.address !== null) {
      message.address = bytesFromBase64(object.address);
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = BigInt(object.power);
    }
    return message;
  },
  toAmino(message: Validator): ValidatorAmino {
    const obj: any = {};
    obj.address = message.address ? base64FromBytes(message.address) : undefined;
    obj.power = message.power !== BigInt(0) ? message.power.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorAminoMsg): Validator {
    return Validator.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorProtoMsg): Validator {
    return Validator.decode(message.value);
  },
  toProto(message: Validator): Uint8Array {
    return Validator.encode(message).finish();
  },
  toProtoMsg(message: Validator): ValidatorProtoMsg {
    return {
      typeUrl: "/tendermint.abci.Validator",
      value: Validator.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Validator.typeUrl, Validator);
function createBaseValidatorUpdate(): ValidatorUpdate {
  return {
    pubKey: PublicKey.fromPartial({}),
    power: BigInt(0)
  };
}
export const ValidatorUpdate = {
  typeUrl: "/tendermint.abci.ValidatorUpdate",
  is(o: any): o is ValidatorUpdate {
    return o && (o.$typeUrl === ValidatorUpdate.typeUrl || PublicKey.is(o.pubKey) && typeof o.power === "bigint");
  },
  isSDK(o: any): o is ValidatorUpdateSDKType {
    return o && (o.$typeUrl === ValidatorUpdate.typeUrl || PublicKey.isSDK(o.pub_key) && typeof o.power === "bigint");
  },
  isAmino(o: any): o is ValidatorUpdateAmino {
    return o && (o.$typeUrl === ValidatorUpdate.typeUrl || PublicKey.isAmino(o.pub_key) && typeof o.power === "bigint");
  },
  encode(message: ValidatorUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pubKey !== undefined) {
      PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(16).int64(message.power);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = PublicKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.power = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ValidatorUpdate>): ValidatorUpdate {
    const message = createBaseValidatorUpdate();
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? PublicKey.fromPartial(object.pubKey) : undefined;
    message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ValidatorUpdateAmino): ValidatorUpdate {
    const message = createBaseValidatorUpdate();
    if (object.pub_key !== undefined && object.pub_key !== null) {
      message.pubKey = PublicKey.fromAmino(object.pub_key);
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = BigInt(object.power);
    }
    return message;
  },
  toAmino(message: ValidatorUpdate): ValidatorUpdateAmino {
    const obj: any = {};
    obj.pub_key = message.pubKey ? PublicKey.toAmino(message.pubKey) : undefined;
    obj.power = message.power !== BigInt(0) ? message.power.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorUpdateAminoMsg): ValidatorUpdate {
    return ValidatorUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorUpdateProtoMsg): ValidatorUpdate {
    return ValidatorUpdate.decode(message.value);
  },
  toProto(message: ValidatorUpdate): Uint8Array {
    return ValidatorUpdate.encode(message).finish();
  },
  toProtoMsg(message: ValidatorUpdate): ValidatorUpdateProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ValidatorUpdate",
      value: ValidatorUpdate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ValidatorUpdate.typeUrl, ValidatorUpdate);
function createBaseVoteInfo(): VoteInfo {
  return {
    validator: Validator.fromPartial({}),
    signedLastBlock: false
  };
}
export const VoteInfo = {
  typeUrl: "/tendermint.abci.VoteInfo",
  is(o: any): o is VoteInfo {
    return o && (o.$typeUrl === VoteInfo.typeUrl || Validator.is(o.validator) && typeof o.signedLastBlock === "boolean");
  },
  isSDK(o: any): o is VoteInfoSDKType {
    return o && (o.$typeUrl === VoteInfo.typeUrl || Validator.isSDK(o.validator) && typeof o.signed_last_block === "boolean");
  },
  isAmino(o: any): o is VoteInfoAmino {
    return o && (o.$typeUrl === VoteInfo.typeUrl || Validator.isAmino(o.validator) && typeof o.signed_last_block === "boolean");
  },
  encode(message: VoteInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    if (message.signedLastBlock === true) {
      writer.uint32(16).bool(message.signedLastBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VoteInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 2:
          message.signedLastBlock = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<VoteInfo>): VoteInfo {
    const message = createBaseVoteInfo();
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    message.signedLastBlock = object.signedLastBlock ?? false;
    return message;
  },
  fromAmino(object: VoteInfoAmino): VoteInfo {
    const message = createBaseVoteInfo();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromAmino(object.validator);
    }
    if (object.signed_last_block !== undefined && object.signed_last_block !== null) {
      message.signedLastBlock = object.signed_last_block;
    }
    return message;
  },
  toAmino(message: VoteInfo): VoteInfoAmino {
    const obj: any = {};
    obj.validator = message.validator ? Validator.toAmino(message.validator) : undefined;
    obj.signed_last_block = message.signedLastBlock === false ? undefined : message.signedLastBlock;
    return obj;
  },
  fromAminoMsg(object: VoteInfoAminoMsg): VoteInfo {
    return VoteInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: VoteInfoProtoMsg): VoteInfo {
    return VoteInfo.decode(message.value);
  },
  toProto(message: VoteInfo): Uint8Array {
    return VoteInfo.encode(message).finish();
  },
  toProtoMsg(message: VoteInfo): VoteInfoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.VoteInfo",
      value: VoteInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(VoteInfo.typeUrl, VoteInfo);
function createBaseExtendedVoteInfo(): ExtendedVoteInfo {
  return {
    validator: Validator.fromPartial({}),
    signedLastBlock: false,
    voteExtension: new Uint8Array()
  };
}
export const ExtendedVoteInfo = {
  typeUrl: "/tendermint.abci.ExtendedVoteInfo",
  is(o: any): o is ExtendedVoteInfo {
    return o && (o.$typeUrl === ExtendedVoteInfo.typeUrl || Validator.is(o.validator) && typeof o.signedLastBlock === "boolean" && (o.voteExtension instanceof Uint8Array || typeof o.voteExtension === "string"));
  },
  isSDK(o: any): o is ExtendedVoteInfoSDKType {
    return o && (o.$typeUrl === ExtendedVoteInfo.typeUrl || Validator.isSDK(o.validator) && typeof o.signed_last_block === "boolean" && (o.vote_extension instanceof Uint8Array || typeof o.vote_extension === "string"));
  },
  isAmino(o: any): o is ExtendedVoteInfoAmino {
    return o && (o.$typeUrl === ExtendedVoteInfo.typeUrl || Validator.isAmino(o.validator) && typeof o.signed_last_block === "boolean" && (o.vote_extension instanceof Uint8Array || typeof o.vote_extension === "string"));
  },
  encode(message: ExtendedVoteInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    if (message.signedLastBlock === true) {
      writer.uint32(16).bool(message.signedLastBlock);
    }
    if (message.voteExtension.length !== 0) {
      writer.uint32(26).bytes(message.voteExtension);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExtendedVoteInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtendedVoteInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 2:
          message.signedLastBlock = reader.bool();
          break;
        case 3:
          message.voteExtension = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ExtendedVoteInfo>): ExtendedVoteInfo {
    const message = createBaseExtendedVoteInfo();
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    message.signedLastBlock = object.signedLastBlock ?? false;
    message.voteExtension = object.voteExtension ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ExtendedVoteInfoAmino): ExtendedVoteInfo {
    const message = createBaseExtendedVoteInfo();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromAmino(object.validator);
    }
    if (object.signed_last_block !== undefined && object.signed_last_block !== null) {
      message.signedLastBlock = object.signed_last_block;
    }
    if (object.vote_extension !== undefined && object.vote_extension !== null) {
      message.voteExtension = bytesFromBase64(object.vote_extension);
    }
    return message;
  },
  toAmino(message: ExtendedVoteInfo): ExtendedVoteInfoAmino {
    const obj: any = {};
    obj.validator = message.validator ? Validator.toAmino(message.validator) : undefined;
    obj.signed_last_block = message.signedLastBlock === false ? undefined : message.signedLastBlock;
    obj.vote_extension = message.voteExtension ? base64FromBytes(message.voteExtension) : undefined;
    return obj;
  },
  fromAminoMsg(object: ExtendedVoteInfoAminoMsg): ExtendedVoteInfo {
    return ExtendedVoteInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ExtendedVoteInfoProtoMsg): ExtendedVoteInfo {
    return ExtendedVoteInfo.decode(message.value);
  },
  toProto(message: ExtendedVoteInfo): Uint8Array {
    return ExtendedVoteInfo.encode(message).finish();
  },
  toProtoMsg(message: ExtendedVoteInfo): ExtendedVoteInfoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ExtendedVoteInfo",
      value: ExtendedVoteInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ExtendedVoteInfo.typeUrl, ExtendedVoteInfo);
function createBaseMisbehavior(): Misbehavior {
  return {
    type: 0,
    validator: Validator.fromPartial({}),
    height: BigInt(0),
    time: new Date(),
    totalVotingPower: BigInt(0)
  };
}
export const Misbehavior = {
  typeUrl: "/tendermint.abci.Misbehavior",
  is(o: any): o is Misbehavior {
    return o && (o.$typeUrl === Misbehavior.typeUrl || isSet(o.type) && Validator.is(o.validator) && typeof o.height === "bigint" && Timestamp.is(o.time) && typeof o.totalVotingPower === "bigint");
  },
  isSDK(o: any): o is MisbehaviorSDKType {
    return o && (o.$typeUrl === Misbehavior.typeUrl || isSet(o.type) && Validator.isSDK(o.validator) && typeof o.height === "bigint" && Timestamp.isSDK(o.time) && typeof o.total_voting_power === "bigint");
  },
  isAmino(o: any): o is MisbehaviorAmino {
    return o && (o.$typeUrl === Misbehavior.typeUrl || isSet(o.type) && Validator.isAmino(o.validator) && typeof o.height === "bigint" && Timestamp.isAmino(o.time) && typeof o.total_voting_power === "bigint");
  },
  encode(message: Misbehavior, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(34).fork()).ldelim();
    }
    if (message.totalVotingPower !== BigInt(0)) {
      writer.uint32(40).int64(message.totalVotingPower);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Misbehavior {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMisbehavior();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = (reader.int32() as any);
          break;
        case 2:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.totalVotingPower = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Misbehavior>): Misbehavior {
    const message = createBaseMisbehavior();
    message.type = object.type ?? 0;
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.time = object.time ?? undefined;
    message.totalVotingPower = object.totalVotingPower !== undefined && object.totalVotingPower !== null ? BigInt(object.totalVotingPower.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MisbehaviorAmino): Misbehavior {
    const message = createBaseMisbehavior();
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromAmino(object.validator);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = fromTimestamp(Timestamp.fromAmino(object.time));
    }
    if (object.total_voting_power !== undefined && object.total_voting_power !== null) {
      message.totalVotingPower = BigInt(object.total_voting_power);
    }
    return message;
  },
  toAmino(message: Misbehavior): MisbehaviorAmino {
    const obj: any = {};
    obj.type = message.type === 0 ? undefined : message.type;
    obj.validator = message.validator ? Validator.toAmino(message.validator) : undefined;
    obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
    obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : undefined;
    obj.total_voting_power = message.totalVotingPower !== BigInt(0) ? message.totalVotingPower.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MisbehaviorAminoMsg): Misbehavior {
    return Misbehavior.fromAmino(object.value);
  },
  fromProtoMsg(message: MisbehaviorProtoMsg): Misbehavior {
    return Misbehavior.decode(message.value);
  },
  toProto(message: Misbehavior): Uint8Array {
    return Misbehavior.encode(message).finish();
  },
  toProtoMsg(message: Misbehavior): MisbehaviorProtoMsg {
    return {
      typeUrl: "/tendermint.abci.Misbehavior",
      value: Misbehavior.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Misbehavior.typeUrl, Misbehavior);
function createBaseSnapshot(): Snapshot {
  return {
    height: BigInt(0),
    format: 0,
    chunks: 0,
    hash: new Uint8Array(),
    metadata: new Uint8Array()
  };
}
export const Snapshot = {
  typeUrl: "/tendermint.abci.Snapshot",
  is(o: any): o is Snapshot {
    return o && (o.$typeUrl === Snapshot.typeUrl || typeof o.height === "bigint" && typeof o.format === "number" && typeof o.chunks === "number" && (o.hash instanceof Uint8Array || typeof o.hash === "string") && (o.metadata instanceof Uint8Array || typeof o.metadata === "string"));
  },
  isSDK(o: any): o is SnapshotSDKType {
    return o && (o.$typeUrl === Snapshot.typeUrl || typeof o.height === "bigint" && typeof o.format === "number" && typeof o.chunks === "number" && (o.hash instanceof Uint8Array || typeof o.hash === "string") && (o.metadata instanceof Uint8Array || typeof o.metadata === "string"));
  },
  isAmino(o: any): o is SnapshotAmino {
    return o && (o.$typeUrl === Snapshot.typeUrl || typeof o.height === "bigint" && typeof o.format === "number" && typeof o.chunks === "number" && (o.hash instanceof Uint8Array || typeof o.hash === "string") && (o.metadata instanceof Uint8Array || typeof o.metadata === "string"));
  },
  encode(message: Snapshot, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunks !== 0) {
      writer.uint32(24).uint32(message.chunks);
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(42).bytes(message.metadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Snapshot {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.format = reader.uint32();
          break;
        case 3:
          message.chunks = reader.uint32();
          break;
        case 4:
          message.hash = reader.bytes();
          break;
        case 5:
          message.metadata = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Snapshot>): Snapshot {
    const message = createBaseSnapshot();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.format = object.format ?? 0;
    message.chunks = object.chunks ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    message.metadata = object.metadata ?? new Uint8Array();
    return message;
  },
  fromAmino(object: SnapshotAmino): Snapshot {
    const message = createBaseSnapshot();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.format !== undefined && object.format !== null) {
      message.format = object.format;
    }
    if (object.chunks !== undefined && object.chunks !== null) {
      message.chunks = object.chunks;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    return message;
  },
  toAmino(message: Snapshot): SnapshotAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
    obj.format = message.format === 0 ? undefined : message.format;
    obj.chunks = message.chunks === 0 ? undefined : message.chunks;
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    obj.metadata = message.metadata ? base64FromBytes(message.metadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: SnapshotAminoMsg): Snapshot {
    return Snapshot.fromAmino(object.value);
  },
  fromProtoMsg(message: SnapshotProtoMsg): Snapshot {
    return Snapshot.decode(message.value);
  },
  toProto(message: Snapshot): Uint8Array {
    return Snapshot.encode(message).finish();
  },
  toProtoMsg(message: Snapshot): SnapshotProtoMsg {
    return {
      typeUrl: "/tendermint.abci.Snapshot",
      value: Snapshot.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Snapshot.typeUrl, Snapshot);