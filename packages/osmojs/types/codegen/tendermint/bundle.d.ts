import * as _79 from "./abci/types";
import * as _80 from "./crypto/keys";
import * as _81 from "./crypto/proof";
import * as _82 from "./libs/bits/types";
import * as _83 from "./p2p/types";
import * as _84 from "./types/block";
import * as _85 from "./types/evidence";
import * as _86 from "./types/params";
import * as _87 from "./types/types";
import * as _88 from "./types/validator";
import * as _89 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _79.CheckTxType;
        checkTxTypeToJSON(object: _79.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _79.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _79.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _79.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _79.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _79.EvidenceType;
        evidenceTypeToJSON(object: _79.EvidenceType): string;
        CheckTxType: typeof _79.CheckTxType;
        CheckTxTypeSDKType: typeof _79.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _79.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _79.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _79.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _79.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _79.EvidenceType;
        EvidenceTypeSDKType: typeof _79.EvidenceTypeSDKType;
        Request: {
            encode(message: _79.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Request;
            fromPartial(object: Partial<_79.Request>): _79.Request;
        };
        RequestEcho: {
            encode(message: _79.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.RequestEcho;
            fromPartial(object: Partial<_79.RequestEcho>): _79.RequestEcho;
        };
        RequestFlush: {
            encode(_: _79.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.RequestFlush;
            fromPartial(_: Partial<_79.RequestFlush>): _79.RequestFlush;
        };
        RequestInfo: {
            encode(message: _79.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.RequestInfo;
            fromPartial(object: Partial<_79.RequestInfo>): _79.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _79.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.RequestSetOption;
            fromPartial(object: Partial<_79.RequestSetOption>): _79.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _79.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.RequestInitChain;
            fromPartial(object: Partial<_79.RequestInitChain>): _79.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _79.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.RequestQuery;
            fromPartial(object: Partial<_79.RequestQuery>): _79.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _79.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.RequestBeginBlock;
            fromPartial(object: Partial<_79.RequestBeginBlock>): _79.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _79.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.RequestCheckTx;
            fromPartial(object: Partial<_79.RequestCheckTx>): _79.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _79.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.RequestDeliverTx;
            fromPartial(object: Partial<_79.RequestDeliverTx>): _79.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _79.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.RequestEndBlock;
            fromPartial(object: Partial<_79.RequestEndBlock>): _79.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _79.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.RequestCommit;
            fromPartial(_: Partial<_79.RequestCommit>): _79.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _79.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.RequestListSnapshots;
            fromPartial(_: Partial<_79.RequestListSnapshots>): _79.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _79.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.RequestOfferSnapshot;
            fromPartial(object: Partial<_79.RequestOfferSnapshot>): _79.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _79.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.RequestLoadSnapshotChunk;
            fromPartial(object: Partial<_79.RequestLoadSnapshotChunk>): _79.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _79.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.RequestApplySnapshotChunk;
            fromPartial(object: Partial<_79.RequestApplySnapshotChunk>): _79.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _79.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Response;
            fromPartial(object: Partial<_79.Response>): _79.Response;
        };
        ResponseException: {
            encode(message: _79.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ResponseException;
            fromPartial(object: Partial<_79.ResponseException>): _79.ResponseException;
        };
        ResponseEcho: {
            encode(message: _79.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ResponseEcho;
            fromPartial(object: Partial<_79.ResponseEcho>): _79.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _79.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ResponseFlush;
            fromPartial(_: Partial<_79.ResponseFlush>): _79.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _79.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ResponseInfo;
            fromPartial(object: Partial<_79.ResponseInfo>): _79.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _79.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ResponseSetOption;
            fromPartial(object: Partial<_79.ResponseSetOption>): _79.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _79.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ResponseInitChain;
            fromPartial(object: Partial<_79.ResponseInitChain>): _79.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _79.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ResponseQuery;
            fromPartial(object: Partial<_79.ResponseQuery>): _79.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _79.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ResponseBeginBlock;
            fromPartial(object: Partial<_79.ResponseBeginBlock>): _79.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _79.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ResponseCheckTx;
            fromPartial(object: Partial<_79.ResponseCheckTx>): _79.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _79.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ResponseDeliverTx;
            fromPartial(object: Partial<_79.ResponseDeliverTx>): _79.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _79.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ResponseEndBlock;
            fromPartial(object: Partial<_79.ResponseEndBlock>): _79.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _79.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ResponseCommit;
            fromPartial(object: Partial<_79.ResponseCommit>): _79.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _79.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ResponseListSnapshots;
            fromPartial(object: Partial<_79.ResponseListSnapshots>): _79.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _79.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ResponseOfferSnapshot;
            fromPartial(object: Partial<_79.ResponseOfferSnapshot>): _79.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _79.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ResponseLoadSnapshotChunk;
            fromPartial(object: Partial<_79.ResponseLoadSnapshotChunk>): _79.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _79.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ResponseApplySnapshotChunk;
            fromPartial(object: Partial<_79.ResponseApplySnapshotChunk>): _79.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _79.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ConsensusParams;
            fromPartial(object: Partial<_79.ConsensusParams>): _79.ConsensusParams;
        };
        BlockParams: {
            encode(message: _79.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.BlockParams;
            fromPartial(object: Partial<_79.BlockParams>): _79.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _79.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.LastCommitInfo;
            fromPartial(object: Partial<_79.LastCommitInfo>): _79.LastCommitInfo;
        };
        Event: {
            encode(message: _79.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Event;
            fromPartial(object: Partial<_79.Event>): _79.Event;
        };
        EventAttribute: {
            encode(message: _79.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.EventAttribute;
            fromPartial(object: Partial<_79.EventAttribute>): _79.EventAttribute;
        };
        TxResult: {
            encode(message: _79.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.TxResult;
            fromPartial(object: Partial<_79.TxResult>): _79.TxResult;
        };
        Validator: {
            encode(message: _79.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Validator;
            fromPartial(object: Partial<_79.Validator>): _79.Validator;
        };
        ValidatorUpdate: {
            encode(message: _79.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ValidatorUpdate;
            fromPartial(object: Partial<_79.ValidatorUpdate>): _79.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _79.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.VoteInfo;
            fromPartial(object: Partial<_79.VoteInfo>): _79.VoteInfo;
        };
        Evidence: {
            encode(message: _79.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Evidence;
            fromPartial(object: Partial<_79.Evidence>): _79.Evidence;
        };
        Snapshot: {
            encode(message: _79.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Snapshot;
            fromPartial(object: Partial<_79.Snapshot>): _79.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _81.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.Proof;
            fromPartial(object: Partial<_81.Proof>): _81.Proof;
        };
        ValueOp: {
            encode(message: _81.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.ValueOp;
            fromPartial(object: Partial<_81.ValueOp>): _81.ValueOp;
        };
        DominoOp: {
            encode(message: _81.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.DominoOp;
            fromPartial(object: Partial<_81.DominoOp>): _81.DominoOp;
        };
        ProofOp: {
            encode(message: _81.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.ProofOp;
            fromPartial(object: Partial<_81.ProofOp>): _81.ProofOp;
        };
        ProofOps: {
            encode(message: _81.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.ProofOps;
            fromPartial(object: Partial<_81.ProofOps>): _81.ProofOps;
        };
        PublicKey: {
            encode(message: _80.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.PublicKey;
            fromPartial(object: Partial<_80.PublicKey>): _80.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _82.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.BitArray;
                fromPartial(object: Partial<_82.BitArray>): _82.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _83.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ProtocolVersion;
            fromPartial(object: Partial<_83.ProtocolVersion>): _83.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _83.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.NodeInfo;
            fromPartial(object: Partial<_83.NodeInfo>): _83.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _83.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.NodeInfoOther;
            fromPartial(object: Partial<_83.NodeInfoOther>): _83.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _83.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.PeerInfo;
            fromPartial(object: Partial<_83.PeerInfo>): _83.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _83.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.PeerAddressInfo;
            fromPartial(object: Partial<_83.PeerAddressInfo>): _83.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _88.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ValidatorSet;
            fromPartial(object: Partial<_88.ValidatorSet>): _88.ValidatorSet;
        };
        Validator: {
            encode(message: _88.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Validator;
            fromPartial(object: Partial<_88.Validator>): _88.Validator;
        };
        SimpleValidator: {
            encode(message: _88.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.SimpleValidator;
            fromPartial(object: Partial<_88.SimpleValidator>): _88.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _87.BlockIDFlag;
        blockIDFlagToJSON(object: _87.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _87.SignedMsgType;
        signedMsgTypeToJSON(object: _87.SignedMsgType): string;
        BlockIDFlag: typeof _87.BlockIDFlag;
        BlockIDFlagSDKType: typeof _87.BlockIDFlagSDKType;
        SignedMsgType: typeof _87.SignedMsgType;
        SignedMsgTypeSDKType: typeof _87.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _87.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.PartSetHeader;
            fromPartial(object: Partial<_87.PartSetHeader>): _87.PartSetHeader;
        };
        Part: {
            encode(message: _87.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Part;
            fromPartial(object: Partial<_87.Part>): _87.Part;
        };
        BlockID: {
            encode(message: _87.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.BlockID;
            fromPartial(object: Partial<_87.BlockID>): _87.BlockID;
        };
        Header: {
            encode(message: _87.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Header;
            fromPartial(object: Partial<_87.Header>): _87.Header;
        };
        Data: {
            encode(message: _87.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Data;
            fromPartial(object: Partial<_87.Data>): _87.Data;
        };
        Vote: {
            encode(message: _87.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Vote;
            fromPartial(object: Partial<_87.Vote>): _87.Vote;
        };
        Commit: {
            encode(message: _87.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Commit;
            fromPartial(object: Partial<_87.Commit>): _87.Commit;
        };
        CommitSig: {
            encode(message: _87.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.CommitSig;
            fromPartial(object: Partial<_87.CommitSig>): _87.CommitSig;
        };
        Proposal: {
            encode(message: _87.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Proposal;
            fromPartial(object: Partial<_87.Proposal>): _87.Proposal;
        };
        SignedHeader: {
            encode(message: _87.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SignedHeader;
            fromPartial(object: Partial<_87.SignedHeader>): _87.SignedHeader;
        };
        LightBlock: {
            encode(message: _87.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.LightBlock;
            fromPartial(object: Partial<_87.LightBlock>): _87.LightBlock;
        };
        BlockMeta: {
            encode(message: _87.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.BlockMeta;
            fromPartial(object: Partial<_87.BlockMeta>): _87.BlockMeta;
        };
        TxProof: {
            encode(message: _87.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.TxProof;
            fromPartial(object: Partial<_87.TxProof>): _87.TxProof;
        };
        ConsensusParams: {
            encode(message: _86.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ConsensusParams;
            fromPartial(object: Partial<_86.ConsensusParams>): _86.ConsensusParams;
        };
        BlockParams: {
            encode(message: _86.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.BlockParams;
            fromPartial(object: Partial<_86.BlockParams>): _86.BlockParams;
        };
        EvidenceParams: {
            encode(message: _86.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.EvidenceParams;
            fromPartial(object: Partial<_86.EvidenceParams>): _86.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _86.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ValidatorParams;
            fromPartial(object: Partial<_86.ValidatorParams>): _86.ValidatorParams;
        };
        VersionParams: {
            encode(message: _86.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.VersionParams;
            fromPartial(object: Partial<_86.VersionParams>): _86.VersionParams;
        };
        HashedParams: {
            encode(message: _86.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.HashedParams;
            fromPartial(object: Partial<_86.HashedParams>): _86.HashedParams;
        };
        Evidence: {
            encode(message: _85.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Evidence;
            fromPartial(object: Partial<_85.Evidence>): _85.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _85.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.DuplicateVoteEvidence;
            fromPartial(object: Partial<_85.DuplicateVoteEvidence>): _85.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _85.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.LightClientAttackEvidence;
            fromPartial(object: Partial<_85.LightClientAttackEvidence>): _85.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _85.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.EvidenceList;
            fromPartial(object: Partial<_85.EvidenceList>): _85.EvidenceList;
        };
        Block: {
            encode(message: _84.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Block;
            fromPartial(object: Partial<_84.Block>): _84.Block;
        };
    };
    const version: {
        App: {
            encode(message: _89.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.App;
            fromPartial(object: Partial<_89.App>): _89.App;
        };
        Consensus: {
            encode(message: _89.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Consensus;
            fromPartial(object: Partial<_89.Consensus>): _89.Consensus;
        };
    };
}
