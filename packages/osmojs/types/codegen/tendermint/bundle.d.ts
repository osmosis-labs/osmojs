import * as _80 from "./abci/types";
import * as _81 from "./crypto/keys";
import * as _82 from "./crypto/proof";
import * as _83 from "./libs/bits/types";
import * as _84 from "./p2p/types";
import * as _85 from "./types/block";
import * as _86 from "./types/evidence";
import * as _87 from "./types/params";
import * as _88 from "./types/types";
import * as _89 from "./types/validator";
import * as _90 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _80.CheckTxType;
        checkTxTypeToJSON(object: _80.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _80.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _80.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _80.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _80.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _80.EvidenceType;
        evidenceTypeToJSON(object: _80.EvidenceType): string;
        CheckTxType: typeof _80.CheckTxType;
        CheckTxTypeSDKType: typeof _80.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _80.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _80.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _80.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _80.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _80.EvidenceType;
        EvidenceTypeSDKType: typeof _80.EvidenceTypeSDKType;
        Request: {
            encode(message: _80.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Request;
            fromPartial(object: Partial<_80.Request>): _80.Request;
        };
        RequestEcho: {
            encode(message: _80.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.RequestEcho;
            fromPartial(object: Partial<_80.RequestEcho>): _80.RequestEcho;
        };
        RequestFlush: {
            encode(_: _80.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.RequestFlush;
            fromPartial(_: Partial<_80.RequestFlush>): _80.RequestFlush;
        };
        RequestInfo: {
            encode(message: _80.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.RequestInfo;
            fromPartial(object: Partial<_80.RequestInfo>): _80.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _80.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.RequestSetOption;
            fromPartial(object: Partial<_80.RequestSetOption>): _80.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _80.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.RequestInitChain;
            fromPartial(object: Partial<_80.RequestInitChain>): _80.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _80.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.RequestQuery;
            fromPartial(object: Partial<_80.RequestQuery>): _80.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _80.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.RequestBeginBlock;
            fromPartial(object: Partial<_80.RequestBeginBlock>): _80.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _80.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.RequestCheckTx;
            fromPartial(object: Partial<_80.RequestCheckTx>): _80.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _80.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.RequestDeliverTx;
            fromPartial(object: Partial<_80.RequestDeliverTx>): _80.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _80.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.RequestEndBlock;
            fromPartial(object: Partial<_80.RequestEndBlock>): _80.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _80.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.RequestCommit;
            fromPartial(_: Partial<_80.RequestCommit>): _80.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _80.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.RequestListSnapshots;
            fromPartial(_: Partial<_80.RequestListSnapshots>): _80.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _80.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.RequestOfferSnapshot;
            fromPartial(object: Partial<_80.RequestOfferSnapshot>): _80.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _80.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.RequestLoadSnapshotChunk;
            fromPartial(object: Partial<_80.RequestLoadSnapshotChunk>): _80.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _80.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.RequestApplySnapshotChunk;
            fromPartial(object: Partial<_80.RequestApplySnapshotChunk>): _80.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _80.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Response;
            fromPartial(object: Partial<_80.Response>): _80.Response;
        };
        ResponseException: {
            encode(message: _80.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.ResponseException;
            fromPartial(object: Partial<_80.ResponseException>): _80.ResponseException;
        };
        ResponseEcho: {
            encode(message: _80.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.ResponseEcho;
            fromPartial(object: Partial<_80.ResponseEcho>): _80.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _80.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.ResponseFlush;
            fromPartial(_: Partial<_80.ResponseFlush>): _80.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _80.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.ResponseInfo;
            fromPartial(object: Partial<_80.ResponseInfo>): _80.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _80.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.ResponseSetOption;
            fromPartial(object: Partial<_80.ResponseSetOption>): _80.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _80.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.ResponseInitChain;
            fromPartial(object: Partial<_80.ResponseInitChain>): _80.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _80.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.ResponseQuery;
            fromPartial(object: Partial<_80.ResponseQuery>): _80.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _80.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.ResponseBeginBlock;
            fromPartial(object: Partial<_80.ResponseBeginBlock>): _80.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _80.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.ResponseCheckTx;
            fromPartial(object: Partial<_80.ResponseCheckTx>): _80.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _80.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.ResponseDeliverTx;
            fromPartial(object: Partial<_80.ResponseDeliverTx>): _80.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _80.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.ResponseEndBlock;
            fromPartial(object: Partial<_80.ResponseEndBlock>): _80.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _80.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.ResponseCommit;
            fromPartial(object: Partial<_80.ResponseCommit>): _80.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _80.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.ResponseListSnapshots;
            fromPartial(object: Partial<_80.ResponseListSnapshots>): _80.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _80.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.ResponseOfferSnapshot;
            fromPartial(object: Partial<_80.ResponseOfferSnapshot>): _80.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _80.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.ResponseLoadSnapshotChunk;
            fromPartial(object: Partial<_80.ResponseLoadSnapshotChunk>): _80.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _80.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.ResponseApplySnapshotChunk;
            fromPartial(object: Partial<_80.ResponseApplySnapshotChunk>): _80.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _80.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.ConsensusParams;
            fromPartial(object: Partial<_80.ConsensusParams>): _80.ConsensusParams;
        };
        BlockParams: {
            encode(message: _80.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.BlockParams;
            fromPartial(object: Partial<_80.BlockParams>): _80.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _80.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.LastCommitInfo;
            fromPartial(object: Partial<_80.LastCommitInfo>): _80.LastCommitInfo;
        };
        Event: {
            encode(message: _80.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Event;
            fromPartial(object: Partial<_80.Event>): _80.Event;
        };
        EventAttribute: {
            encode(message: _80.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.EventAttribute;
            fromPartial(object: Partial<_80.EventAttribute>): _80.EventAttribute;
        };
        TxResult: {
            encode(message: _80.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.TxResult;
            fromPartial(object: Partial<_80.TxResult>): _80.TxResult;
        };
        Validator: {
            encode(message: _80.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Validator;
            fromPartial(object: Partial<_80.Validator>): _80.Validator;
        };
        ValidatorUpdate: {
            encode(message: _80.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.ValidatorUpdate;
            fromPartial(object: Partial<_80.ValidatorUpdate>): _80.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _80.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.VoteInfo;
            fromPartial(object: Partial<_80.VoteInfo>): _80.VoteInfo;
        };
        Evidence: {
            encode(message: _80.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Evidence;
            fromPartial(object: Partial<_80.Evidence>): _80.Evidence;
        };
        Snapshot: {
            encode(message: _80.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Snapshot;
            fromPartial(object: Partial<_80.Snapshot>): _80.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _82.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Proof;
            fromPartial(object: Partial<_82.Proof>): _82.Proof;
        };
        ValueOp: {
            encode(message: _82.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ValueOp;
            fromPartial(object: Partial<_82.ValueOp>): _82.ValueOp;
        };
        DominoOp: {
            encode(message: _82.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.DominoOp;
            fromPartial(object: Partial<_82.DominoOp>): _82.DominoOp;
        };
        ProofOp: {
            encode(message: _82.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ProofOp;
            fromPartial(object: Partial<_82.ProofOp>): _82.ProofOp;
        };
        ProofOps: {
            encode(message: _82.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ProofOps;
            fromPartial(object: Partial<_82.ProofOps>): _82.ProofOps;
        };
        PublicKey: {
            encode(message: _81.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.PublicKey;
            fromPartial(object: Partial<_81.PublicKey>): _81.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _83.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.BitArray;
                fromPartial(object: Partial<_83.BitArray>): _83.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _84.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ProtocolVersion;
            fromPartial(object: Partial<_84.ProtocolVersion>): _84.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _84.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.NodeInfo;
            fromPartial(object: Partial<_84.NodeInfo>): _84.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _84.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.NodeInfoOther;
            fromPartial(object: Partial<_84.NodeInfoOther>): _84.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _84.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.PeerInfo;
            fromPartial(object: Partial<_84.PeerInfo>): _84.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _84.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.PeerAddressInfo;
            fromPartial(object: Partial<_84.PeerAddressInfo>): _84.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _89.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ValidatorSet;
            fromPartial(object: Partial<_89.ValidatorSet>): _89.ValidatorSet;
        };
        Validator: {
            encode(message: _89.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Validator;
            fromPartial(object: Partial<_89.Validator>): _89.Validator;
        };
        SimpleValidator: {
            encode(message: _89.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.SimpleValidator;
            fromPartial(object: Partial<_89.SimpleValidator>): _89.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _88.BlockIDFlag;
        blockIDFlagToJSON(object: _88.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _88.SignedMsgType;
        signedMsgTypeToJSON(object: _88.SignedMsgType): string;
        BlockIDFlag: typeof _88.BlockIDFlag;
        BlockIDFlagSDKType: typeof _88.BlockIDFlagSDKType;
        SignedMsgType: typeof _88.SignedMsgType;
        SignedMsgTypeSDKType: typeof _88.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _88.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.PartSetHeader;
            fromPartial(object: Partial<_88.PartSetHeader>): _88.PartSetHeader;
        };
        Part: {
            encode(message: _88.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Part;
            fromPartial(object: Partial<_88.Part>): _88.Part;
        };
        BlockID: {
            encode(message: _88.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.BlockID;
            fromPartial(object: Partial<_88.BlockID>): _88.BlockID;
        };
        Header: {
            encode(message: _88.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Header;
            fromPartial(object: Partial<_88.Header>): _88.Header;
        };
        Data: {
            encode(message: _88.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Data;
            fromPartial(object: Partial<_88.Data>): _88.Data;
        };
        Vote: {
            encode(message: _88.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Vote;
            fromPartial(object: Partial<_88.Vote>): _88.Vote;
        };
        Commit: {
            encode(message: _88.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Commit;
            fromPartial(object: Partial<_88.Commit>): _88.Commit;
        };
        CommitSig: {
            encode(message: _88.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.CommitSig;
            fromPartial(object: Partial<_88.CommitSig>): _88.CommitSig;
        };
        Proposal: {
            encode(message: _88.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Proposal;
            fromPartial(object: Partial<_88.Proposal>): _88.Proposal;
        };
        SignedHeader: {
            encode(message: _88.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.SignedHeader;
            fromPartial(object: Partial<_88.SignedHeader>): _88.SignedHeader;
        };
        LightBlock: {
            encode(message: _88.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.LightBlock;
            fromPartial(object: Partial<_88.LightBlock>): _88.LightBlock;
        };
        BlockMeta: {
            encode(message: _88.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.BlockMeta;
            fromPartial(object: Partial<_88.BlockMeta>): _88.BlockMeta;
        };
        TxProof: {
            encode(message: _88.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.TxProof;
            fromPartial(object: Partial<_88.TxProof>): _88.TxProof;
        };
        ConsensusParams: {
            encode(message: _87.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ConsensusParams;
            fromPartial(object: Partial<_87.ConsensusParams>): _87.ConsensusParams;
        };
        BlockParams: {
            encode(message: _87.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.BlockParams;
            fromPartial(object: Partial<_87.BlockParams>): _87.BlockParams;
        };
        EvidenceParams: {
            encode(message: _87.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.EvidenceParams;
            fromPartial(object: Partial<_87.EvidenceParams>): _87.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _87.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ValidatorParams;
            fromPartial(object: Partial<_87.ValidatorParams>): _87.ValidatorParams;
        };
        VersionParams: {
            encode(message: _87.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.VersionParams;
            fromPartial(object: Partial<_87.VersionParams>): _87.VersionParams;
        };
        HashedParams: {
            encode(message: _87.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.HashedParams;
            fromPartial(object: Partial<_87.HashedParams>): _87.HashedParams;
        };
        Evidence: {
            encode(message: _86.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Evidence;
            fromPartial(object: Partial<_86.Evidence>): _86.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _86.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.DuplicateVoteEvidence;
            fromPartial(object: Partial<_86.DuplicateVoteEvidence>): _86.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _86.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.LightClientAttackEvidence;
            fromPartial(object: Partial<_86.LightClientAttackEvidence>): _86.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _86.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.EvidenceList;
            fromPartial(object: Partial<_86.EvidenceList>): _86.EvidenceList;
        };
        Block: {
            encode(message: _85.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Block;
            fromPartial(object: Partial<_85.Block>): _85.Block;
        };
    };
    const version: {
        App: {
            encode(message: _90.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.App;
            fromPartial(object: Partial<_90.App>): _90.App;
        };
        Consensus: {
            encode(message: _90.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Consensus;
            fromPartial(object: Partial<_90.Consensus>): _90.Consensus;
        };
    };
}
