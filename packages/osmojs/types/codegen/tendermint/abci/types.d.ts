import { ConsensusParams, ConsensusParamsAmino, ConsensusParamsSDKType } from "../types/params";
import { Header, HeaderAmino, HeaderSDKType } from "../types/types";
import { ProofOps, ProofOpsAmino, ProofOpsSDKType } from "../crypto/proof";
import { PublicKey, PublicKeyAmino, PublicKeySDKType } from "../crypto/keys";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum CheckTxType {
    NEW = 0,
    RECHECK = 1,
    UNRECOGNIZED = -1
}
export declare const CheckTxTypeSDKType: typeof CheckTxType;
export declare const CheckTxTypeAmino: typeof CheckTxType;
export declare function checkTxTypeFromJSON(object: any): CheckTxType;
export declare function checkTxTypeToJSON(object: CheckTxType): string;
export declare enum ResponseOfferSnapshot_Result {
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
    UNRECOGNIZED = -1
}
export declare const ResponseOfferSnapshot_ResultSDKType: typeof ResponseOfferSnapshot_Result;
export declare const ResponseOfferSnapshot_ResultAmino: typeof ResponseOfferSnapshot_Result;
export declare function responseOfferSnapshot_ResultFromJSON(object: any): ResponseOfferSnapshot_Result;
export declare function responseOfferSnapshot_ResultToJSON(object: ResponseOfferSnapshot_Result): string;
export declare enum ResponseApplySnapshotChunk_Result {
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
    UNRECOGNIZED = -1
}
export declare const ResponseApplySnapshotChunk_ResultSDKType: typeof ResponseApplySnapshotChunk_Result;
export declare const ResponseApplySnapshotChunk_ResultAmino: typeof ResponseApplySnapshotChunk_Result;
export declare function responseApplySnapshotChunk_ResultFromJSON(object: any): ResponseApplySnapshotChunk_Result;
export declare function responseApplySnapshotChunk_ResultToJSON(object: ResponseApplySnapshotChunk_Result): string;
export declare enum ResponseProcessProposal_ProposalStatus {
    UNKNOWN = 0,
    ACCEPT = 1,
    REJECT = 2,
    UNRECOGNIZED = -1
}
export declare const ResponseProcessProposal_ProposalStatusSDKType: typeof ResponseProcessProposal_ProposalStatus;
export declare const ResponseProcessProposal_ProposalStatusAmino: typeof ResponseProcessProposal_ProposalStatus;
export declare function responseProcessProposal_ProposalStatusFromJSON(object: any): ResponseProcessProposal_ProposalStatus;
export declare function responseProcessProposal_ProposalStatusToJSON(object: ResponseProcessProposal_ProposalStatus): string;
export declare enum MisbehaviorType {
    UNKNOWN = 0,
    DUPLICATE_VOTE = 1,
    LIGHT_CLIENT_ATTACK = 2,
    UNRECOGNIZED = -1
}
export declare const MisbehaviorTypeSDKType: typeof MisbehaviorType;
export declare const MisbehaviorTypeAmino: typeof MisbehaviorType;
export declare function misbehaviorTypeFromJSON(object: any): MisbehaviorType;
export declare function misbehaviorTypeToJSON(object: MisbehaviorType): string;
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
    message: string;
}
export interface RequestEchoAminoMsg {
    type: "/tendermint.abci.RequestEcho";
    value: RequestEchoAmino;
}
export interface RequestEchoSDKType {
    message: string;
}
export interface RequestFlush {
}
export interface RequestFlushProtoMsg {
    typeUrl: "/tendermint.abci.RequestFlush";
    value: Uint8Array;
}
export interface RequestFlushAmino {
}
export interface RequestFlushAminoMsg {
    type: "/tendermint.abci.RequestFlush";
    value: RequestFlushAmino;
}
export interface RequestFlushSDKType {
}
export interface RequestInfo {
    version: string;
    blockVersion: Long;
    p2pVersion: Long;
    abciVersion: string;
}
export interface RequestInfoProtoMsg {
    typeUrl: "/tendermint.abci.RequestInfo";
    value: Uint8Array;
}
export interface RequestInfoAmino {
    version: string;
    block_version: string;
    p2p_version: string;
    abci_version: string;
}
export interface RequestInfoAminoMsg {
    type: "/tendermint.abci.RequestInfo";
    value: RequestInfoAmino;
}
export interface RequestInfoSDKType {
    version: string;
    block_version: Long;
    p2p_version: Long;
    abci_version: string;
}
export interface RequestInitChain {
    time?: Date;
    chainId: string;
    consensusParams?: ConsensusParams;
    validators: ValidatorUpdate[];
    appStateBytes: Uint8Array;
    initialHeight: Long;
}
export interface RequestInitChainProtoMsg {
    typeUrl: "/tendermint.abci.RequestInitChain";
    value: Uint8Array;
}
export interface RequestInitChainAmino {
    time?: Date;
    chain_id: string;
    consensus_params?: ConsensusParamsAmino;
    validators: ValidatorUpdateAmino[];
    app_state_bytes: Uint8Array;
    initial_height: string;
}
export interface RequestInitChainAminoMsg {
    type: "/tendermint.abci.RequestInitChain";
    value: RequestInitChainAmino;
}
export interface RequestInitChainSDKType {
    time?: Date;
    chain_id: string;
    consensus_params?: ConsensusParamsSDKType;
    validators: ValidatorUpdateSDKType[];
    app_state_bytes: Uint8Array;
    initial_height: Long;
}
export interface RequestQuery {
    data: Uint8Array;
    path: string;
    height: Long;
    prove: boolean;
}
export interface RequestQueryProtoMsg {
    typeUrl: "/tendermint.abci.RequestQuery";
    value: Uint8Array;
}
export interface RequestQueryAmino {
    data: Uint8Array;
    path: string;
    height: string;
    prove: boolean;
}
export interface RequestQueryAminoMsg {
    type: "/tendermint.abci.RequestQuery";
    value: RequestQueryAmino;
}
export interface RequestQuerySDKType {
    data: Uint8Array;
    path: string;
    height: Long;
    prove: boolean;
}
export interface RequestBeginBlock {
    hash: Uint8Array;
    header?: Header;
    lastCommitInfo?: CommitInfo;
    byzantineValidators: Misbehavior[];
}
export interface RequestBeginBlockProtoMsg {
    typeUrl: "/tendermint.abci.RequestBeginBlock";
    value: Uint8Array;
}
export interface RequestBeginBlockAmino {
    hash: Uint8Array;
    header?: HeaderAmino;
    last_commit_info?: CommitInfoAmino;
    byzantine_validators: MisbehaviorAmino[];
}
export interface RequestBeginBlockAminoMsg {
    type: "/tendermint.abci.RequestBeginBlock";
    value: RequestBeginBlockAmino;
}
export interface RequestBeginBlockSDKType {
    hash: Uint8Array;
    header?: HeaderSDKType;
    last_commit_info?: CommitInfoSDKType;
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
    tx: Uint8Array;
    type: CheckTxType;
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
    tx: Uint8Array;
}
export interface RequestDeliverTxAminoMsg {
    type: "/tendermint.abci.RequestDeliverTx";
    value: RequestDeliverTxAmino;
}
export interface RequestDeliverTxSDKType {
    tx: Uint8Array;
}
export interface RequestEndBlock {
    height: Long;
}
export interface RequestEndBlockProtoMsg {
    typeUrl: "/tendermint.abci.RequestEndBlock";
    value: Uint8Array;
}
export interface RequestEndBlockAmino {
    height: string;
}
export interface RequestEndBlockAminoMsg {
    type: "/tendermint.abci.RequestEndBlock";
    value: RequestEndBlockAmino;
}
export interface RequestEndBlockSDKType {
    height: Long;
}
export interface RequestCommit {
}
export interface RequestCommitProtoMsg {
    typeUrl: "/tendermint.abci.RequestCommit";
    value: Uint8Array;
}
export interface RequestCommitAmino {
}
export interface RequestCommitAminoMsg {
    type: "/tendermint.abci.RequestCommit";
    value: RequestCommitAmino;
}
export interface RequestCommitSDKType {
}
/** lists available snapshots */
export interface RequestListSnapshots {
}
export interface RequestListSnapshotsProtoMsg {
    typeUrl: "/tendermint.abci.RequestListSnapshots";
    value: Uint8Array;
}
/** lists available snapshots */
export interface RequestListSnapshotsAmino {
}
export interface RequestListSnapshotsAminoMsg {
    type: "/tendermint.abci.RequestListSnapshots";
    value: RequestListSnapshotsAmino;
}
/** lists available snapshots */
export interface RequestListSnapshotsSDKType {
}
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
    app_hash: Uint8Array;
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
    height: Long;
    format: number;
    chunk: number;
}
export interface RequestLoadSnapshotChunkProtoMsg {
    typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk";
    value: Uint8Array;
}
/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunkAmino {
    height: string;
    format: number;
    chunk: number;
}
export interface RequestLoadSnapshotChunkAminoMsg {
    type: "/tendermint.abci.RequestLoadSnapshotChunk";
    value: RequestLoadSnapshotChunkAmino;
}
/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunkSDKType {
    height: Long;
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
    index: number;
    chunk: Uint8Array;
    sender: string;
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
    maxTxBytes: Long;
    /**
     * txs is an array of transactions that will be included in a block,
     * sent to the app for possible modifications.
     */
    txs: Uint8Array[];
    localLastCommit?: ExtendedCommitInfo;
    misbehavior: Misbehavior[];
    height: Long;
    time?: Date;
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
    max_tx_bytes: string;
    /**
     * txs is an array of transactions that will be included in a block,
     * sent to the app for possible modifications.
     */
    txs: Uint8Array[];
    local_last_commit?: ExtendedCommitInfoAmino;
    misbehavior: MisbehaviorAmino[];
    height: string;
    time?: Date;
    next_validators_hash: Uint8Array;
    /** address of the public key of the validator proposing the block. */
    proposer_address: Uint8Array;
}
export interface RequestPrepareProposalAminoMsg {
    type: "/tendermint.abci.RequestPrepareProposal";
    value: RequestPrepareProposalAmino;
}
export interface RequestPrepareProposalSDKType {
    max_tx_bytes: Long;
    txs: Uint8Array[];
    local_last_commit?: ExtendedCommitInfoSDKType;
    misbehavior: MisbehaviorSDKType[];
    height: Long;
    time?: Date;
    next_validators_hash: Uint8Array;
    proposer_address: Uint8Array;
}
export interface RequestProcessProposal {
    txs: Uint8Array[];
    proposedLastCommit?: CommitInfo;
    misbehavior: Misbehavior[];
    /** hash is the merkle root hash of the fields of the proposed block. */
    hash: Uint8Array;
    height: Long;
    time?: Date;
    nextValidatorsHash: Uint8Array;
    /** address of the public key of the original proposer of the block. */
    proposerAddress: Uint8Array;
}
export interface RequestProcessProposalProtoMsg {
    typeUrl: "/tendermint.abci.RequestProcessProposal";
    value: Uint8Array;
}
export interface RequestProcessProposalAmino {
    txs: Uint8Array[];
    proposed_last_commit?: CommitInfoAmino;
    misbehavior: MisbehaviorAmino[];
    /** hash is the merkle root hash of the fields of the proposed block. */
    hash: Uint8Array;
    height: string;
    time?: Date;
    next_validators_hash: Uint8Array;
    /** address of the public key of the original proposer of the block. */
    proposer_address: Uint8Array;
}
export interface RequestProcessProposalAminoMsg {
    type: "/tendermint.abci.RequestProcessProposal";
    value: RequestProcessProposalAmino;
}
export interface RequestProcessProposalSDKType {
    txs: Uint8Array[];
    proposed_last_commit?: CommitInfoSDKType;
    misbehavior: MisbehaviorSDKType[];
    hash: Uint8Array;
    height: Long;
    time?: Date;
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
    error: string;
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
    message: string;
}
export interface ResponseEchoAminoMsg {
    type: "/tendermint.abci.ResponseEcho";
    value: ResponseEchoAmino;
}
export interface ResponseEchoSDKType {
    message: string;
}
export interface ResponseFlush {
}
export interface ResponseFlushProtoMsg {
    typeUrl: "/tendermint.abci.ResponseFlush";
    value: Uint8Array;
}
export interface ResponseFlushAmino {
}
export interface ResponseFlushAminoMsg {
    type: "/tendermint.abci.ResponseFlush";
    value: ResponseFlushAmino;
}
export interface ResponseFlushSDKType {
}
export interface ResponseInfo {
    data: string;
    version: string;
    appVersion: Long;
    lastBlockHeight: Long;
    lastBlockAppHash: Uint8Array;
}
export interface ResponseInfoProtoMsg {
    typeUrl: "/tendermint.abci.ResponseInfo";
    value: Uint8Array;
}
export interface ResponseInfoAmino {
    data: string;
    version: string;
    app_version: string;
    last_block_height: string;
    last_block_app_hash: Uint8Array;
}
export interface ResponseInfoAminoMsg {
    type: "/tendermint.abci.ResponseInfo";
    value: ResponseInfoAmino;
}
export interface ResponseInfoSDKType {
    data: string;
    version: string;
    app_version: Long;
    last_block_height: Long;
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
    validators: ValidatorUpdateAmino[];
    app_hash: Uint8Array;
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
    index: Long;
    key: Uint8Array;
    value: Uint8Array;
    proofOps?: ProofOps;
    height: Long;
    codespace: string;
}
export interface ResponseQueryProtoMsg {
    typeUrl: "/tendermint.abci.ResponseQuery";
    value: Uint8Array;
}
export interface ResponseQueryAmino {
    code: number;
    /** bytes data = 2; // use "value" instead. */
    log: string;
    /** nondeterministic */
    info: string;
    index: string;
    key: Uint8Array;
    value: Uint8Array;
    proof_ops?: ProofOpsAmino;
    height: string;
    codespace: string;
}
export interface ResponseQueryAminoMsg {
    type: "/tendermint.abci.ResponseQuery";
    value: ResponseQueryAmino;
}
export interface ResponseQuerySDKType {
    code: number;
    log: string;
    info: string;
    index: Long;
    key: Uint8Array;
    value: Uint8Array;
    proof_ops?: ProofOpsSDKType;
    height: Long;
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
    events: EventAmino[];
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
    gasWanted: Long;
    gasUsed: Long;
    events: Event[];
    codespace: string;
    sender: string;
    priority: Long;
    /**
     * mempool_error is set by Tendermint.
     * ABCI applictions creating a ResponseCheckTX should not set mempool_error.
     */
    mempoolError: string;
}
export interface ResponseCheckTxProtoMsg {
    typeUrl: "/tendermint.abci.ResponseCheckTx";
    value: Uint8Array;
}
export interface ResponseCheckTxAmino {
    code: number;
    data: Uint8Array;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    gas_wanted: string;
    gas_used: string;
    events: EventAmino[];
    codespace: string;
    sender: string;
    priority: string;
    /**
     * mempool_error is set by Tendermint.
     * ABCI applictions creating a ResponseCheckTX should not set mempool_error.
     */
    mempool_error: string;
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
    gas_wanted: Long;
    gas_used: Long;
    events: EventSDKType[];
    codespace: string;
    sender: string;
    priority: Long;
    mempool_error: string;
}
export interface ResponseDeliverTx {
    code: number;
    data: Uint8Array;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    gasWanted: Long;
    gasUsed: Long;
    events: Event[];
    codespace: string;
}
export interface ResponseDeliverTxProtoMsg {
    typeUrl: "/tendermint.abci.ResponseDeliverTx";
    value: Uint8Array;
}
export interface ResponseDeliverTxAmino {
    code: number;
    data: Uint8Array;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    gas_wanted: string;
    gas_used: string;
    events: EventAmino[];
    codespace: string;
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
    gas_wanted: Long;
    gas_used: Long;
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
    validator_updates: ValidatorUpdateAmino[];
    consensus_param_updates?: ConsensusParamsAmino;
    events: EventAmino[];
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
    retainHeight: Long;
}
export interface ResponseCommitProtoMsg {
    typeUrl: "/tendermint.abci.ResponseCommit";
    value: Uint8Array;
}
export interface ResponseCommitAmino {
    /** reserve 1 */
    data: Uint8Array;
    retain_height: string;
}
export interface ResponseCommitAminoMsg {
    type: "/tendermint.abci.ResponseCommit";
    value: ResponseCommitAmino;
}
export interface ResponseCommitSDKType {
    data: Uint8Array;
    retain_height: Long;
}
export interface ResponseListSnapshots {
    snapshots: Snapshot[];
}
export interface ResponseListSnapshotsProtoMsg {
    typeUrl: "/tendermint.abci.ResponseListSnapshots";
    value: Uint8Array;
}
export interface ResponseListSnapshotsAmino {
    snapshots: SnapshotAmino[];
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
    result: ResponseOfferSnapshot_Result;
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
    chunk: Uint8Array;
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
    result: ResponseApplySnapshotChunk_Result;
    /** Chunks to refetch and reapply */
    refetch_chunks: number[];
    /** Chunk senders to reject and ban */
    reject_senders: string[];
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
    txs: Uint8Array[];
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
    status: ResponseProcessProposal_ProposalStatus;
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
    round: number;
    votes: VoteInfoAmino[];
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
    round: number;
    /**
     * List of validators' addresses in the last validator set with their voting
     * information, including vote extensions.
     */
    votes: ExtendedVoteInfoAmino[];
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
    type: string;
    attributes: EventAttributeAmino[];
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
    key: string;
    value: string;
    /** nondeterministic */
    index: boolean;
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
    height: Long;
    index: number;
    tx: Uint8Array;
    result?: ResponseDeliverTx;
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
    height: string;
    index: number;
    tx: Uint8Array;
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
    height: Long;
    index: number;
    tx: Uint8Array;
    result?: ResponseDeliverTxSDKType;
}
/** Validator */
export interface Validator {
    /**
     * The first 20 bytes of SHA256(public key)
     * PubKey pub_key = 2 [(gogoproto.nullable)=false];
     */
    address: Uint8Array;
    /** The voting power */
    power: Long;
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
    address: Uint8Array;
    /** The voting power */
    power: string;
}
export interface ValidatorAminoMsg {
    type: "/tendermint.abci.Validator";
    value: ValidatorAmino;
}
/** Validator */
export interface ValidatorSDKType {
    address: Uint8Array;
    power: Long;
}
/** ValidatorUpdate */
export interface ValidatorUpdate {
    pubKey?: PublicKey;
    power: Long;
}
export interface ValidatorUpdateProtoMsg {
    typeUrl: "/tendermint.abci.ValidatorUpdate";
    value: Uint8Array;
}
/** ValidatorUpdate */
export interface ValidatorUpdateAmino {
    pub_key?: PublicKeyAmino;
    power: string;
}
export interface ValidatorUpdateAminoMsg {
    type: "/tendermint.abci.ValidatorUpdate";
    value: ValidatorUpdateAmino;
}
/** ValidatorUpdate */
export interface ValidatorUpdateSDKType {
    pub_key?: PublicKeySDKType;
    power: Long;
}
/** VoteInfo */
export interface VoteInfo {
    validator?: Validator;
    signedLastBlock: boolean;
}
export interface VoteInfoProtoMsg {
    typeUrl: "/tendermint.abci.VoteInfo";
    value: Uint8Array;
}
/** VoteInfo */
export interface VoteInfoAmino {
    validator?: ValidatorAmino;
    signed_last_block: boolean;
}
export interface VoteInfoAminoMsg {
    type: "/tendermint.abci.VoteInfo";
    value: VoteInfoAmino;
}
/** VoteInfo */
export interface VoteInfoSDKType {
    validator?: ValidatorSDKType;
    signed_last_block: boolean;
}
export interface ExtendedVoteInfo {
    validator?: Validator;
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
    signed_last_block: boolean;
    /** Reserved for future use */
    vote_extension: Uint8Array;
}
export interface ExtendedVoteInfoAminoMsg {
    type: "/tendermint.abci.ExtendedVoteInfo";
    value: ExtendedVoteInfoAmino;
}
export interface ExtendedVoteInfoSDKType {
    validator?: ValidatorSDKType;
    signed_last_block: boolean;
    vote_extension: Uint8Array;
}
export interface Misbehavior {
    type: MisbehaviorType;
    /** The offending validator */
    validator?: Validator;
    /** The height when the offense occurred */
    height: Long;
    /** The corresponding time where the offense occurred */
    time?: Date;
    /**
     * Total voting power of the validator set in case the ABCI application does
     * not store historical validators.
     * https://github.com/tendermint/tendermint/issues/4581
     */
    totalVotingPower: Long;
}
export interface MisbehaviorProtoMsg {
    typeUrl: "/tendermint.abci.Misbehavior";
    value: Uint8Array;
}
export interface MisbehaviorAmino {
    type: MisbehaviorType;
    /** The offending validator */
    validator?: ValidatorAmino;
    /** The height when the offense occurred */
    height: string;
    /** The corresponding time where the offense occurred */
    time?: Date;
    /**
     * Total voting power of the validator set in case the ABCI application does
     * not store historical validators.
     * https://github.com/tendermint/tendermint/issues/4581
     */
    total_voting_power: string;
}
export interface MisbehaviorAminoMsg {
    type: "/tendermint.abci.Misbehavior";
    value: MisbehaviorAmino;
}
export interface MisbehaviorSDKType {
    type: MisbehaviorType;
    validator?: ValidatorSDKType;
    height: Long;
    time?: Date;
    total_voting_power: Long;
}
export interface Snapshot {
    /** The height at which the snapshot was taken */
    height: Long;
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
    height: string;
    /** The application-specific snapshot format */
    format: number;
    /** Number of chunks in the snapshot */
    chunks: number;
    /** Arbitrary snapshot hash, equal only if identical */
    hash: Uint8Array;
    /** Arbitrary application metadata */
    metadata: Uint8Array;
}
export interface SnapshotAminoMsg {
    type: "/tendermint.abci.Snapshot";
    value: SnapshotAmino;
}
export interface SnapshotSDKType {
    height: Long;
    format: number;
    chunks: number;
    hash: Uint8Array;
    metadata: Uint8Array;
}
export declare const Request: {
    typeUrl: string;
    encode(message: Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Request;
    fromPartial(object: Partial<Request>): Request;
    fromAmino(object: RequestAmino): Request;
    toAmino(message: Request): RequestAmino;
    fromAminoMsg(object: RequestAminoMsg): Request;
    fromProtoMsg(message: RequestProtoMsg): Request;
    toProto(message: Request): Uint8Array;
    toProtoMsg(message: Request): RequestProtoMsg;
};
export declare const RequestEcho: {
    typeUrl: string;
    encode(message: RequestEcho, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestEcho;
    fromPartial(object: Partial<RequestEcho>): RequestEcho;
    fromAmino(object: RequestEchoAmino): RequestEcho;
    toAmino(message: RequestEcho): RequestEchoAmino;
    fromAminoMsg(object: RequestEchoAminoMsg): RequestEcho;
    fromProtoMsg(message: RequestEchoProtoMsg): RequestEcho;
    toProto(message: RequestEcho): Uint8Array;
    toProtoMsg(message: RequestEcho): RequestEchoProtoMsg;
};
export declare const RequestFlush: {
    typeUrl: string;
    encode(_: RequestFlush, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestFlush;
    fromPartial(_: Partial<RequestFlush>): RequestFlush;
    fromAmino(_: RequestFlushAmino): RequestFlush;
    toAmino(_: RequestFlush): RequestFlushAmino;
    fromAminoMsg(object: RequestFlushAminoMsg): RequestFlush;
    fromProtoMsg(message: RequestFlushProtoMsg): RequestFlush;
    toProto(message: RequestFlush): Uint8Array;
    toProtoMsg(message: RequestFlush): RequestFlushProtoMsg;
};
export declare const RequestInfo: {
    typeUrl: string;
    encode(message: RequestInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestInfo;
    fromPartial(object: Partial<RequestInfo>): RequestInfo;
    fromAmino(object: RequestInfoAmino): RequestInfo;
    toAmino(message: RequestInfo): RequestInfoAmino;
    fromAminoMsg(object: RequestInfoAminoMsg): RequestInfo;
    fromProtoMsg(message: RequestInfoProtoMsg): RequestInfo;
    toProto(message: RequestInfo): Uint8Array;
    toProtoMsg(message: RequestInfo): RequestInfoProtoMsg;
};
export declare const RequestInitChain: {
    typeUrl: string;
    encode(message: RequestInitChain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestInitChain;
    fromPartial(object: Partial<RequestInitChain>): RequestInitChain;
    fromAmino(object: RequestInitChainAmino): RequestInitChain;
    toAmino(message: RequestInitChain): RequestInitChainAmino;
    fromAminoMsg(object: RequestInitChainAminoMsg): RequestInitChain;
    fromProtoMsg(message: RequestInitChainProtoMsg): RequestInitChain;
    toProto(message: RequestInitChain): Uint8Array;
    toProtoMsg(message: RequestInitChain): RequestInitChainProtoMsg;
};
export declare const RequestQuery: {
    typeUrl: string;
    encode(message: RequestQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestQuery;
    fromPartial(object: Partial<RequestQuery>): RequestQuery;
    fromAmino(object: RequestQueryAmino): RequestQuery;
    toAmino(message: RequestQuery): RequestQueryAmino;
    fromAminoMsg(object: RequestQueryAminoMsg): RequestQuery;
    fromProtoMsg(message: RequestQueryProtoMsg): RequestQuery;
    toProto(message: RequestQuery): Uint8Array;
    toProtoMsg(message: RequestQuery): RequestQueryProtoMsg;
};
export declare const RequestBeginBlock: {
    typeUrl: string;
    encode(message: RequestBeginBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestBeginBlock;
    fromPartial(object: Partial<RequestBeginBlock>): RequestBeginBlock;
    fromAmino(object: RequestBeginBlockAmino): RequestBeginBlock;
    toAmino(message: RequestBeginBlock): RequestBeginBlockAmino;
    fromAminoMsg(object: RequestBeginBlockAminoMsg): RequestBeginBlock;
    fromProtoMsg(message: RequestBeginBlockProtoMsg): RequestBeginBlock;
    toProto(message: RequestBeginBlock): Uint8Array;
    toProtoMsg(message: RequestBeginBlock): RequestBeginBlockProtoMsg;
};
export declare const RequestCheckTx: {
    typeUrl: string;
    encode(message: RequestCheckTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestCheckTx;
    fromPartial(object: Partial<RequestCheckTx>): RequestCheckTx;
    fromAmino(object: RequestCheckTxAmino): RequestCheckTx;
    toAmino(message: RequestCheckTx): RequestCheckTxAmino;
    fromAminoMsg(object: RequestCheckTxAminoMsg): RequestCheckTx;
    fromProtoMsg(message: RequestCheckTxProtoMsg): RequestCheckTx;
    toProto(message: RequestCheckTx): Uint8Array;
    toProtoMsg(message: RequestCheckTx): RequestCheckTxProtoMsg;
};
export declare const RequestDeliverTx: {
    typeUrl: string;
    encode(message: RequestDeliverTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestDeliverTx;
    fromPartial(object: Partial<RequestDeliverTx>): RequestDeliverTx;
    fromAmino(object: RequestDeliverTxAmino): RequestDeliverTx;
    toAmino(message: RequestDeliverTx): RequestDeliverTxAmino;
    fromAminoMsg(object: RequestDeliverTxAminoMsg): RequestDeliverTx;
    fromProtoMsg(message: RequestDeliverTxProtoMsg): RequestDeliverTx;
    toProto(message: RequestDeliverTx): Uint8Array;
    toProtoMsg(message: RequestDeliverTx): RequestDeliverTxProtoMsg;
};
export declare const RequestEndBlock: {
    typeUrl: string;
    encode(message: RequestEndBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestEndBlock;
    fromPartial(object: Partial<RequestEndBlock>): RequestEndBlock;
    fromAmino(object: RequestEndBlockAmino): RequestEndBlock;
    toAmino(message: RequestEndBlock): RequestEndBlockAmino;
    fromAminoMsg(object: RequestEndBlockAminoMsg): RequestEndBlock;
    fromProtoMsg(message: RequestEndBlockProtoMsg): RequestEndBlock;
    toProto(message: RequestEndBlock): Uint8Array;
    toProtoMsg(message: RequestEndBlock): RequestEndBlockProtoMsg;
};
export declare const RequestCommit: {
    typeUrl: string;
    encode(_: RequestCommit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestCommit;
    fromPartial(_: Partial<RequestCommit>): RequestCommit;
    fromAmino(_: RequestCommitAmino): RequestCommit;
    toAmino(_: RequestCommit): RequestCommitAmino;
    fromAminoMsg(object: RequestCommitAminoMsg): RequestCommit;
    fromProtoMsg(message: RequestCommitProtoMsg): RequestCommit;
    toProto(message: RequestCommit): Uint8Array;
    toProtoMsg(message: RequestCommit): RequestCommitProtoMsg;
};
export declare const RequestListSnapshots: {
    typeUrl: string;
    encode(_: RequestListSnapshots, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestListSnapshots;
    fromPartial(_: Partial<RequestListSnapshots>): RequestListSnapshots;
    fromAmino(_: RequestListSnapshotsAmino): RequestListSnapshots;
    toAmino(_: RequestListSnapshots): RequestListSnapshotsAmino;
    fromAminoMsg(object: RequestListSnapshotsAminoMsg): RequestListSnapshots;
    fromProtoMsg(message: RequestListSnapshotsProtoMsg): RequestListSnapshots;
    toProto(message: RequestListSnapshots): Uint8Array;
    toProtoMsg(message: RequestListSnapshots): RequestListSnapshotsProtoMsg;
};
export declare const RequestOfferSnapshot: {
    typeUrl: string;
    encode(message: RequestOfferSnapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestOfferSnapshot;
    fromPartial(object: Partial<RequestOfferSnapshot>): RequestOfferSnapshot;
    fromAmino(object: RequestOfferSnapshotAmino): RequestOfferSnapshot;
    toAmino(message: RequestOfferSnapshot): RequestOfferSnapshotAmino;
    fromAminoMsg(object: RequestOfferSnapshotAminoMsg): RequestOfferSnapshot;
    fromProtoMsg(message: RequestOfferSnapshotProtoMsg): RequestOfferSnapshot;
    toProto(message: RequestOfferSnapshot): Uint8Array;
    toProtoMsg(message: RequestOfferSnapshot): RequestOfferSnapshotProtoMsg;
};
export declare const RequestLoadSnapshotChunk: {
    typeUrl: string;
    encode(message: RequestLoadSnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestLoadSnapshotChunk;
    fromPartial(object: Partial<RequestLoadSnapshotChunk>): RequestLoadSnapshotChunk;
    fromAmino(object: RequestLoadSnapshotChunkAmino): RequestLoadSnapshotChunk;
    toAmino(message: RequestLoadSnapshotChunk): RequestLoadSnapshotChunkAmino;
    fromAminoMsg(object: RequestLoadSnapshotChunkAminoMsg): RequestLoadSnapshotChunk;
    fromProtoMsg(message: RequestLoadSnapshotChunkProtoMsg): RequestLoadSnapshotChunk;
    toProto(message: RequestLoadSnapshotChunk): Uint8Array;
    toProtoMsg(message: RequestLoadSnapshotChunk): RequestLoadSnapshotChunkProtoMsg;
};
export declare const RequestApplySnapshotChunk: {
    typeUrl: string;
    encode(message: RequestApplySnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestApplySnapshotChunk;
    fromPartial(object: Partial<RequestApplySnapshotChunk>): RequestApplySnapshotChunk;
    fromAmino(object: RequestApplySnapshotChunkAmino): RequestApplySnapshotChunk;
    toAmino(message: RequestApplySnapshotChunk): RequestApplySnapshotChunkAmino;
    fromAminoMsg(object: RequestApplySnapshotChunkAminoMsg): RequestApplySnapshotChunk;
    fromProtoMsg(message: RequestApplySnapshotChunkProtoMsg): RequestApplySnapshotChunk;
    toProto(message: RequestApplySnapshotChunk): Uint8Array;
    toProtoMsg(message: RequestApplySnapshotChunk): RequestApplySnapshotChunkProtoMsg;
};
export declare const RequestPrepareProposal: {
    typeUrl: string;
    encode(message: RequestPrepareProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestPrepareProposal;
    fromPartial(object: Partial<RequestPrepareProposal>): RequestPrepareProposal;
    fromAmino(object: RequestPrepareProposalAmino): RequestPrepareProposal;
    toAmino(message: RequestPrepareProposal): RequestPrepareProposalAmino;
    fromAminoMsg(object: RequestPrepareProposalAminoMsg): RequestPrepareProposal;
    fromProtoMsg(message: RequestPrepareProposalProtoMsg): RequestPrepareProposal;
    toProto(message: RequestPrepareProposal): Uint8Array;
    toProtoMsg(message: RequestPrepareProposal): RequestPrepareProposalProtoMsg;
};
export declare const RequestProcessProposal: {
    typeUrl: string;
    encode(message: RequestProcessProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestProcessProposal;
    fromPartial(object: Partial<RequestProcessProposal>): RequestProcessProposal;
    fromAmino(object: RequestProcessProposalAmino): RequestProcessProposal;
    toAmino(message: RequestProcessProposal): RequestProcessProposalAmino;
    fromAminoMsg(object: RequestProcessProposalAminoMsg): RequestProcessProposal;
    fromProtoMsg(message: RequestProcessProposalProtoMsg): RequestProcessProposal;
    toProto(message: RequestProcessProposal): Uint8Array;
    toProtoMsg(message: RequestProcessProposal): RequestProcessProposalProtoMsg;
};
export declare const Response: {
    typeUrl: string;
    encode(message: Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response;
    fromPartial(object: Partial<Response>): Response;
    fromAmino(object: ResponseAmino): Response;
    toAmino(message: Response): ResponseAmino;
    fromAminoMsg(object: ResponseAminoMsg): Response;
    fromProtoMsg(message: ResponseProtoMsg): Response;
    toProto(message: Response): Uint8Array;
    toProtoMsg(message: Response): ResponseProtoMsg;
};
export declare const ResponseException: {
    typeUrl: string;
    encode(message: ResponseException, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseException;
    fromPartial(object: Partial<ResponseException>): ResponseException;
    fromAmino(object: ResponseExceptionAmino): ResponseException;
    toAmino(message: ResponseException): ResponseExceptionAmino;
    fromAminoMsg(object: ResponseExceptionAminoMsg): ResponseException;
    fromProtoMsg(message: ResponseExceptionProtoMsg): ResponseException;
    toProto(message: ResponseException): Uint8Array;
    toProtoMsg(message: ResponseException): ResponseExceptionProtoMsg;
};
export declare const ResponseEcho: {
    typeUrl: string;
    encode(message: ResponseEcho, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseEcho;
    fromPartial(object: Partial<ResponseEcho>): ResponseEcho;
    fromAmino(object: ResponseEchoAmino): ResponseEcho;
    toAmino(message: ResponseEcho): ResponseEchoAmino;
    fromAminoMsg(object: ResponseEchoAminoMsg): ResponseEcho;
    fromProtoMsg(message: ResponseEchoProtoMsg): ResponseEcho;
    toProto(message: ResponseEcho): Uint8Array;
    toProtoMsg(message: ResponseEcho): ResponseEchoProtoMsg;
};
export declare const ResponseFlush: {
    typeUrl: string;
    encode(_: ResponseFlush, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseFlush;
    fromPartial(_: Partial<ResponseFlush>): ResponseFlush;
    fromAmino(_: ResponseFlushAmino): ResponseFlush;
    toAmino(_: ResponseFlush): ResponseFlushAmino;
    fromAminoMsg(object: ResponseFlushAminoMsg): ResponseFlush;
    fromProtoMsg(message: ResponseFlushProtoMsg): ResponseFlush;
    toProto(message: ResponseFlush): Uint8Array;
    toProtoMsg(message: ResponseFlush): ResponseFlushProtoMsg;
};
export declare const ResponseInfo: {
    typeUrl: string;
    encode(message: ResponseInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseInfo;
    fromPartial(object: Partial<ResponseInfo>): ResponseInfo;
    fromAmino(object: ResponseInfoAmino): ResponseInfo;
    toAmino(message: ResponseInfo): ResponseInfoAmino;
    fromAminoMsg(object: ResponseInfoAminoMsg): ResponseInfo;
    fromProtoMsg(message: ResponseInfoProtoMsg): ResponseInfo;
    toProto(message: ResponseInfo): Uint8Array;
    toProtoMsg(message: ResponseInfo): ResponseInfoProtoMsg;
};
export declare const ResponseInitChain: {
    typeUrl: string;
    encode(message: ResponseInitChain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseInitChain;
    fromPartial(object: Partial<ResponseInitChain>): ResponseInitChain;
    fromAmino(object: ResponseInitChainAmino): ResponseInitChain;
    toAmino(message: ResponseInitChain): ResponseInitChainAmino;
    fromAminoMsg(object: ResponseInitChainAminoMsg): ResponseInitChain;
    fromProtoMsg(message: ResponseInitChainProtoMsg): ResponseInitChain;
    toProto(message: ResponseInitChain): Uint8Array;
    toProtoMsg(message: ResponseInitChain): ResponseInitChainProtoMsg;
};
export declare const ResponseQuery: {
    typeUrl: string;
    encode(message: ResponseQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseQuery;
    fromPartial(object: Partial<ResponseQuery>): ResponseQuery;
    fromAmino(object: ResponseQueryAmino): ResponseQuery;
    toAmino(message: ResponseQuery): ResponseQueryAmino;
    fromAminoMsg(object: ResponseQueryAminoMsg): ResponseQuery;
    fromProtoMsg(message: ResponseQueryProtoMsg): ResponseQuery;
    toProto(message: ResponseQuery): Uint8Array;
    toProtoMsg(message: ResponseQuery): ResponseQueryProtoMsg;
};
export declare const ResponseBeginBlock: {
    typeUrl: string;
    encode(message: ResponseBeginBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseBeginBlock;
    fromPartial(object: Partial<ResponseBeginBlock>): ResponseBeginBlock;
    fromAmino(object: ResponseBeginBlockAmino): ResponseBeginBlock;
    toAmino(message: ResponseBeginBlock): ResponseBeginBlockAmino;
    fromAminoMsg(object: ResponseBeginBlockAminoMsg): ResponseBeginBlock;
    fromProtoMsg(message: ResponseBeginBlockProtoMsg): ResponseBeginBlock;
    toProto(message: ResponseBeginBlock): Uint8Array;
    toProtoMsg(message: ResponseBeginBlock): ResponseBeginBlockProtoMsg;
};
export declare const ResponseCheckTx: {
    typeUrl: string;
    encode(message: ResponseCheckTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseCheckTx;
    fromPartial(object: Partial<ResponseCheckTx>): ResponseCheckTx;
    fromAmino(object: ResponseCheckTxAmino): ResponseCheckTx;
    toAmino(message: ResponseCheckTx): ResponseCheckTxAmino;
    fromAminoMsg(object: ResponseCheckTxAminoMsg): ResponseCheckTx;
    fromProtoMsg(message: ResponseCheckTxProtoMsg): ResponseCheckTx;
    toProto(message: ResponseCheckTx): Uint8Array;
    toProtoMsg(message: ResponseCheckTx): ResponseCheckTxProtoMsg;
};
export declare const ResponseDeliverTx: {
    typeUrl: string;
    encode(message: ResponseDeliverTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseDeliverTx;
    fromPartial(object: Partial<ResponseDeliverTx>): ResponseDeliverTx;
    fromAmino(object: ResponseDeliverTxAmino): ResponseDeliverTx;
    toAmino(message: ResponseDeliverTx): ResponseDeliverTxAmino;
    fromAminoMsg(object: ResponseDeliverTxAminoMsg): ResponseDeliverTx;
    fromProtoMsg(message: ResponseDeliverTxProtoMsg): ResponseDeliverTx;
    toProto(message: ResponseDeliverTx): Uint8Array;
    toProtoMsg(message: ResponseDeliverTx): ResponseDeliverTxProtoMsg;
};
export declare const ResponseEndBlock: {
    typeUrl: string;
    encode(message: ResponseEndBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseEndBlock;
    fromPartial(object: Partial<ResponseEndBlock>): ResponseEndBlock;
    fromAmino(object: ResponseEndBlockAmino): ResponseEndBlock;
    toAmino(message: ResponseEndBlock): ResponseEndBlockAmino;
    fromAminoMsg(object: ResponseEndBlockAminoMsg): ResponseEndBlock;
    fromProtoMsg(message: ResponseEndBlockProtoMsg): ResponseEndBlock;
    toProto(message: ResponseEndBlock): Uint8Array;
    toProtoMsg(message: ResponseEndBlock): ResponseEndBlockProtoMsg;
};
export declare const ResponseCommit: {
    typeUrl: string;
    encode(message: ResponseCommit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseCommit;
    fromPartial(object: Partial<ResponseCommit>): ResponseCommit;
    fromAmino(object: ResponseCommitAmino): ResponseCommit;
    toAmino(message: ResponseCommit): ResponseCommitAmino;
    fromAminoMsg(object: ResponseCommitAminoMsg): ResponseCommit;
    fromProtoMsg(message: ResponseCommitProtoMsg): ResponseCommit;
    toProto(message: ResponseCommit): Uint8Array;
    toProtoMsg(message: ResponseCommit): ResponseCommitProtoMsg;
};
export declare const ResponseListSnapshots: {
    typeUrl: string;
    encode(message: ResponseListSnapshots, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseListSnapshots;
    fromPartial(object: Partial<ResponseListSnapshots>): ResponseListSnapshots;
    fromAmino(object: ResponseListSnapshotsAmino): ResponseListSnapshots;
    toAmino(message: ResponseListSnapshots): ResponseListSnapshotsAmino;
    fromAminoMsg(object: ResponseListSnapshotsAminoMsg): ResponseListSnapshots;
    fromProtoMsg(message: ResponseListSnapshotsProtoMsg): ResponseListSnapshots;
    toProto(message: ResponseListSnapshots): Uint8Array;
    toProtoMsg(message: ResponseListSnapshots): ResponseListSnapshotsProtoMsg;
};
export declare const ResponseOfferSnapshot: {
    typeUrl: string;
    encode(message: ResponseOfferSnapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseOfferSnapshot;
    fromPartial(object: Partial<ResponseOfferSnapshot>): ResponseOfferSnapshot;
    fromAmino(object: ResponseOfferSnapshotAmino): ResponseOfferSnapshot;
    toAmino(message: ResponseOfferSnapshot): ResponseOfferSnapshotAmino;
    fromAminoMsg(object: ResponseOfferSnapshotAminoMsg): ResponseOfferSnapshot;
    fromProtoMsg(message: ResponseOfferSnapshotProtoMsg): ResponseOfferSnapshot;
    toProto(message: ResponseOfferSnapshot): Uint8Array;
    toProtoMsg(message: ResponseOfferSnapshot): ResponseOfferSnapshotProtoMsg;
};
export declare const ResponseLoadSnapshotChunk: {
    typeUrl: string;
    encode(message: ResponseLoadSnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseLoadSnapshotChunk;
    fromPartial(object: Partial<ResponseLoadSnapshotChunk>): ResponseLoadSnapshotChunk;
    fromAmino(object: ResponseLoadSnapshotChunkAmino): ResponseLoadSnapshotChunk;
    toAmino(message: ResponseLoadSnapshotChunk): ResponseLoadSnapshotChunkAmino;
    fromAminoMsg(object: ResponseLoadSnapshotChunkAminoMsg): ResponseLoadSnapshotChunk;
    fromProtoMsg(message: ResponseLoadSnapshotChunkProtoMsg): ResponseLoadSnapshotChunk;
    toProto(message: ResponseLoadSnapshotChunk): Uint8Array;
    toProtoMsg(message: ResponseLoadSnapshotChunk): ResponseLoadSnapshotChunkProtoMsg;
};
export declare const ResponseApplySnapshotChunk: {
    typeUrl: string;
    encode(message: ResponseApplySnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseApplySnapshotChunk;
    fromPartial(object: Partial<ResponseApplySnapshotChunk>): ResponseApplySnapshotChunk;
    fromAmino(object: ResponseApplySnapshotChunkAmino): ResponseApplySnapshotChunk;
    toAmino(message: ResponseApplySnapshotChunk): ResponseApplySnapshotChunkAmino;
    fromAminoMsg(object: ResponseApplySnapshotChunkAminoMsg): ResponseApplySnapshotChunk;
    fromProtoMsg(message: ResponseApplySnapshotChunkProtoMsg): ResponseApplySnapshotChunk;
    toProto(message: ResponseApplySnapshotChunk): Uint8Array;
    toProtoMsg(message: ResponseApplySnapshotChunk): ResponseApplySnapshotChunkProtoMsg;
};
export declare const ResponsePrepareProposal: {
    typeUrl: string;
    encode(message: ResponsePrepareProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponsePrepareProposal;
    fromPartial(object: Partial<ResponsePrepareProposal>): ResponsePrepareProposal;
    fromAmino(object: ResponsePrepareProposalAmino): ResponsePrepareProposal;
    toAmino(message: ResponsePrepareProposal): ResponsePrepareProposalAmino;
    fromAminoMsg(object: ResponsePrepareProposalAminoMsg): ResponsePrepareProposal;
    fromProtoMsg(message: ResponsePrepareProposalProtoMsg): ResponsePrepareProposal;
    toProto(message: ResponsePrepareProposal): Uint8Array;
    toProtoMsg(message: ResponsePrepareProposal): ResponsePrepareProposalProtoMsg;
};
export declare const ResponseProcessProposal: {
    typeUrl: string;
    encode(message: ResponseProcessProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseProcessProposal;
    fromPartial(object: Partial<ResponseProcessProposal>): ResponseProcessProposal;
    fromAmino(object: ResponseProcessProposalAmino): ResponseProcessProposal;
    toAmino(message: ResponseProcessProposal): ResponseProcessProposalAmino;
    fromAminoMsg(object: ResponseProcessProposalAminoMsg): ResponseProcessProposal;
    fromProtoMsg(message: ResponseProcessProposalProtoMsg): ResponseProcessProposal;
    toProto(message: ResponseProcessProposal): Uint8Array;
    toProtoMsg(message: ResponseProcessProposal): ResponseProcessProposalProtoMsg;
};
export declare const CommitInfo: {
    typeUrl: string;
    encode(message: CommitInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommitInfo;
    fromPartial(object: Partial<CommitInfo>): CommitInfo;
    fromAmino(object: CommitInfoAmino): CommitInfo;
    toAmino(message: CommitInfo): CommitInfoAmino;
    fromAminoMsg(object: CommitInfoAminoMsg): CommitInfo;
    fromProtoMsg(message: CommitInfoProtoMsg): CommitInfo;
    toProto(message: CommitInfo): Uint8Array;
    toProtoMsg(message: CommitInfo): CommitInfoProtoMsg;
};
export declare const ExtendedCommitInfo: {
    typeUrl: string;
    encode(message: ExtendedCommitInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExtendedCommitInfo;
    fromPartial(object: Partial<ExtendedCommitInfo>): ExtendedCommitInfo;
    fromAmino(object: ExtendedCommitInfoAmino): ExtendedCommitInfo;
    toAmino(message: ExtendedCommitInfo): ExtendedCommitInfoAmino;
    fromAminoMsg(object: ExtendedCommitInfoAminoMsg): ExtendedCommitInfo;
    fromProtoMsg(message: ExtendedCommitInfoProtoMsg): ExtendedCommitInfo;
    toProto(message: ExtendedCommitInfo): Uint8Array;
    toProtoMsg(message: ExtendedCommitInfo): ExtendedCommitInfoProtoMsg;
};
export declare const Event: {
    typeUrl: string;
    encode(message: Event, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Event;
    fromPartial(object: Partial<Event>): Event;
    fromAmino(object: EventAmino): Event;
    toAmino(message: Event): EventAmino;
    fromAminoMsg(object: EventAminoMsg): Event;
    fromProtoMsg(message: EventProtoMsg): Event;
    toProto(message: Event): Uint8Array;
    toProtoMsg(message: Event): EventProtoMsg;
};
export declare const EventAttribute: {
    typeUrl: string;
    encode(message: EventAttribute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventAttribute;
    fromPartial(object: Partial<EventAttribute>): EventAttribute;
    fromAmino(object: EventAttributeAmino): EventAttribute;
    toAmino(message: EventAttribute): EventAttributeAmino;
    fromAminoMsg(object: EventAttributeAminoMsg): EventAttribute;
    fromProtoMsg(message: EventAttributeProtoMsg): EventAttribute;
    toProto(message: EventAttribute): Uint8Array;
    toProtoMsg(message: EventAttribute): EventAttributeProtoMsg;
};
export declare const TxResult: {
    typeUrl: string;
    encode(message: TxResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxResult;
    fromPartial(object: Partial<TxResult>): TxResult;
    fromAmino(object: TxResultAmino): TxResult;
    toAmino(message: TxResult): TxResultAmino;
    fromAminoMsg(object: TxResultAminoMsg): TxResult;
    fromProtoMsg(message: TxResultProtoMsg): TxResult;
    toProto(message: TxResult): Uint8Array;
    toProtoMsg(message: TxResult): TxResultProtoMsg;
};
export declare const Validator: {
    typeUrl: string;
    encode(message: Validator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Validator;
    fromPartial(object: Partial<Validator>): Validator;
    fromAmino(object: ValidatorAmino): Validator;
    toAmino(message: Validator): ValidatorAmino;
    fromAminoMsg(object: ValidatorAminoMsg): Validator;
    fromProtoMsg(message: ValidatorProtoMsg): Validator;
    toProto(message: Validator): Uint8Array;
    toProtoMsg(message: Validator): ValidatorProtoMsg;
};
export declare const ValidatorUpdate: {
    typeUrl: string;
    encode(message: ValidatorUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorUpdate;
    fromPartial(object: Partial<ValidatorUpdate>): ValidatorUpdate;
    fromAmino(object: ValidatorUpdateAmino): ValidatorUpdate;
    toAmino(message: ValidatorUpdate): ValidatorUpdateAmino;
    fromAminoMsg(object: ValidatorUpdateAminoMsg): ValidatorUpdate;
    fromProtoMsg(message: ValidatorUpdateProtoMsg): ValidatorUpdate;
    toProto(message: ValidatorUpdate): Uint8Array;
    toProtoMsg(message: ValidatorUpdate): ValidatorUpdateProtoMsg;
};
export declare const VoteInfo: {
    typeUrl: string;
    encode(message: VoteInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VoteInfo;
    fromPartial(object: Partial<VoteInfo>): VoteInfo;
    fromAmino(object: VoteInfoAmino): VoteInfo;
    toAmino(message: VoteInfo): VoteInfoAmino;
    fromAminoMsg(object: VoteInfoAminoMsg): VoteInfo;
    fromProtoMsg(message: VoteInfoProtoMsg): VoteInfo;
    toProto(message: VoteInfo): Uint8Array;
    toProtoMsg(message: VoteInfo): VoteInfoProtoMsg;
};
export declare const ExtendedVoteInfo: {
    typeUrl: string;
    encode(message: ExtendedVoteInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExtendedVoteInfo;
    fromPartial(object: Partial<ExtendedVoteInfo>): ExtendedVoteInfo;
    fromAmino(object: ExtendedVoteInfoAmino): ExtendedVoteInfo;
    toAmino(message: ExtendedVoteInfo): ExtendedVoteInfoAmino;
    fromAminoMsg(object: ExtendedVoteInfoAminoMsg): ExtendedVoteInfo;
    fromProtoMsg(message: ExtendedVoteInfoProtoMsg): ExtendedVoteInfo;
    toProto(message: ExtendedVoteInfo): Uint8Array;
    toProtoMsg(message: ExtendedVoteInfo): ExtendedVoteInfoProtoMsg;
};
export declare const Misbehavior: {
    typeUrl: string;
    encode(message: Misbehavior, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Misbehavior;
    fromPartial(object: Partial<Misbehavior>): Misbehavior;
    fromAmino(object: MisbehaviorAmino): Misbehavior;
    toAmino(message: Misbehavior): MisbehaviorAmino;
    fromAminoMsg(object: MisbehaviorAminoMsg): Misbehavior;
    fromProtoMsg(message: MisbehaviorProtoMsg): Misbehavior;
    toProto(message: Misbehavior): Uint8Array;
    toProtoMsg(message: Misbehavior): MisbehaviorProtoMsg;
};
export declare const Snapshot: {
    typeUrl: string;
    encode(message: Snapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Snapshot;
    fromPartial(object: Partial<Snapshot>): Snapshot;
    fromAmino(object: SnapshotAmino): Snapshot;
    toAmino(message: Snapshot): SnapshotAmino;
    fromAminoMsg(object: SnapshotAminoMsg): Snapshot;
    fromProtoMsg(message: SnapshotProtoMsg): Snapshot;
    toProto(message: Snapshot): Uint8Array;
    toProtoMsg(message: Snapshot): SnapshotProtoMsg;
};
