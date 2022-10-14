import * as _128 from "./abci/types";
import * as _129 from "./crypto/keys";
import * as _130 from "./crypto/proof";
import * as _131 from "./libs/bits/types";
import * as _132 from "./p2p/types";
import * as _133 from "./types/block";
import * as _134 from "./types/evidence";
import * as _135 from "./types/params";
import * as _136 from "./types/types";
import * as _137 from "./types/validator";
import * as _138 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _128.CheckTxType;
        checkTxTypeToJSON(object: _128.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _128.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _128.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _128.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _128.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _128.EvidenceType;
        evidenceTypeToJSON(object: _128.EvidenceType): string;
        CheckTxType: typeof _128.CheckTxType;
        CheckTxTypeSDKType: typeof _128.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _128.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _128.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _128.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _128.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _128.EvidenceType;
        EvidenceTypeSDKType: typeof _128.EvidenceTypeSDKType;
        Request: {
            encode(message: _128.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.Request;
            fromPartial(object: Partial<_128.Request>): _128.Request;
        };
        RequestEcho: {
            encode(message: _128.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.RequestEcho;
            fromPartial(object: Partial<_128.RequestEcho>): _128.RequestEcho;
        };
        RequestFlush: {
            encode(_: _128.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.RequestFlush;
            fromPartial(_: Partial<_128.RequestFlush>): _128.RequestFlush;
        };
        RequestInfo: {
            encode(message: _128.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.RequestInfo;
            fromPartial(object: Partial<_128.RequestInfo>): _128.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _128.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.RequestSetOption;
            fromPartial(object: Partial<_128.RequestSetOption>): _128.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _128.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.RequestInitChain;
            fromPartial(object: Partial<_128.RequestInitChain>): _128.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _128.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.RequestQuery;
            fromPartial(object: Partial<_128.RequestQuery>): _128.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _128.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.RequestBeginBlock;
            fromPartial(object: Partial<_128.RequestBeginBlock>): _128.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _128.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.RequestCheckTx;
            fromPartial(object: Partial<_128.RequestCheckTx>): _128.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _128.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.RequestDeliverTx;
            fromPartial(object: Partial<_128.RequestDeliverTx>): _128.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _128.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.RequestEndBlock;
            fromPartial(object: Partial<_128.RequestEndBlock>): _128.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _128.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.RequestCommit;
            fromPartial(_: Partial<_128.RequestCommit>): _128.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _128.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.RequestListSnapshots;
            fromPartial(_: Partial<_128.RequestListSnapshots>): _128.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _128.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.RequestOfferSnapshot;
            fromPartial(object: Partial<_128.RequestOfferSnapshot>): _128.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _128.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.RequestLoadSnapshotChunk;
            fromPartial(object: Partial<_128.RequestLoadSnapshotChunk>): _128.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _128.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.RequestApplySnapshotChunk;
            fromPartial(object: Partial<_128.RequestApplySnapshotChunk>): _128.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _128.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.Response;
            fromPartial(object: Partial<_128.Response>): _128.Response;
        };
        ResponseException: {
            encode(message: _128.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ResponseException;
            fromPartial(object: Partial<_128.ResponseException>): _128.ResponseException;
        };
        ResponseEcho: {
            encode(message: _128.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ResponseEcho;
            fromPartial(object: Partial<_128.ResponseEcho>): _128.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _128.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ResponseFlush;
            fromPartial(_: Partial<_128.ResponseFlush>): _128.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _128.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ResponseInfo;
            fromPartial(object: Partial<_128.ResponseInfo>): _128.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _128.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ResponseSetOption;
            fromPartial(object: Partial<_128.ResponseSetOption>): _128.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _128.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ResponseInitChain;
            fromPartial(object: Partial<_128.ResponseInitChain>): _128.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _128.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ResponseQuery;
            fromPartial(object: Partial<_128.ResponseQuery>): _128.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _128.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ResponseBeginBlock;
            fromPartial(object: Partial<_128.ResponseBeginBlock>): _128.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _128.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ResponseCheckTx;
            fromPartial(object: Partial<_128.ResponseCheckTx>): _128.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _128.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ResponseDeliverTx;
            fromPartial(object: Partial<_128.ResponseDeliverTx>): _128.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _128.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ResponseEndBlock;
            fromPartial(object: Partial<_128.ResponseEndBlock>): _128.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _128.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ResponseCommit;
            fromPartial(object: Partial<_128.ResponseCommit>): _128.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _128.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ResponseListSnapshots;
            fromPartial(object: Partial<_128.ResponseListSnapshots>): _128.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _128.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ResponseOfferSnapshot;
            fromPartial(object: Partial<_128.ResponseOfferSnapshot>): _128.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _128.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ResponseLoadSnapshotChunk;
            fromPartial(object: Partial<_128.ResponseLoadSnapshotChunk>): _128.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _128.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ResponseApplySnapshotChunk;
            fromPartial(object: Partial<_128.ResponseApplySnapshotChunk>): _128.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _128.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ConsensusParams;
            fromPartial(object: Partial<_128.ConsensusParams>): _128.ConsensusParams;
        };
        BlockParams: {
            encode(message: _128.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.BlockParams;
            fromPartial(object: Partial<_128.BlockParams>): _128.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _128.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.LastCommitInfo;
            fromPartial(object: Partial<_128.LastCommitInfo>): _128.LastCommitInfo;
        };
        Event: {
            encode(message: _128.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.Event;
            fromPartial(object: Partial<_128.Event>): _128.Event;
        };
        EventAttribute: {
            encode(message: _128.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.EventAttribute;
            fromPartial(object: Partial<_128.EventAttribute>): _128.EventAttribute;
        };
        TxResult: {
            encode(message: _128.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.TxResult;
            fromPartial(object: Partial<_128.TxResult>): _128.TxResult;
        };
        Validator: {
            encode(message: _128.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.Validator;
            fromPartial(object: Partial<_128.Validator>): _128.Validator;
        };
        ValidatorUpdate: {
            encode(message: _128.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ValidatorUpdate;
            fromPartial(object: Partial<_128.ValidatorUpdate>): _128.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _128.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.VoteInfo;
            fromPartial(object: Partial<_128.VoteInfo>): _128.VoteInfo;
        };
        Evidence: {
            encode(message: _128.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.Evidence;
            fromPartial(object: Partial<_128.Evidence>): _128.Evidence;
        };
        Snapshot: {
            encode(message: _128.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.Snapshot;
            fromPartial(object: Partial<_128.Snapshot>): _128.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _130.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.Proof;
            fromPartial(object: Partial<_130.Proof>): _130.Proof;
        };
        ValueOp: {
            encode(message: _130.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ValueOp;
            fromPartial(object: Partial<_130.ValueOp>): _130.ValueOp;
        };
        DominoOp: {
            encode(message: _130.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.DominoOp;
            fromPartial(object: Partial<_130.DominoOp>): _130.DominoOp;
        };
        ProofOp: {
            encode(message: _130.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ProofOp;
            fromPartial(object: Partial<_130.ProofOp>): _130.ProofOp;
        };
        ProofOps: {
            encode(message: _130.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ProofOps;
            fromPartial(object: Partial<_130.ProofOps>): _130.ProofOps;
        };
        PublicKey: {
            encode(message: _129.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.PublicKey;
            fromPartial(object: Partial<_129.PublicKey>): _129.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _131.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.BitArray;
                fromPartial(object: Partial<_131.BitArray>): _131.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _132.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ProtocolVersion;
            fromPartial(object: Partial<_132.ProtocolVersion>): _132.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _132.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.NodeInfo;
            fromPartial(object: Partial<_132.NodeInfo>): _132.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _132.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.NodeInfoOther;
            fromPartial(object: Partial<_132.NodeInfoOther>): _132.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _132.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.PeerInfo;
            fromPartial(object: Partial<_132.PeerInfo>): _132.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _132.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.PeerAddressInfo;
            fromPartial(object: Partial<_132.PeerAddressInfo>): _132.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _137.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.ValidatorSet;
            fromPartial(object: Partial<_137.ValidatorSet>): _137.ValidatorSet;
        };
        Validator: {
            encode(message: _137.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Validator;
            fromPartial(object: Partial<_137.Validator>): _137.Validator;
        };
        SimpleValidator: {
            encode(message: _137.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.SimpleValidator;
            fromPartial(object: Partial<_137.SimpleValidator>): _137.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _136.BlockIDFlag;
        blockIDFlagToJSON(object: _136.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _136.SignedMsgType;
        signedMsgTypeToJSON(object: _136.SignedMsgType): string;
        BlockIDFlag: typeof _136.BlockIDFlag;
        BlockIDFlagSDKType: typeof _136.BlockIDFlagSDKType;
        SignedMsgType: typeof _136.SignedMsgType;
        SignedMsgTypeSDKType: typeof _136.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _136.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.PartSetHeader;
            fromPartial(object: Partial<_136.PartSetHeader>): _136.PartSetHeader;
        };
        Part: {
            encode(message: _136.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.Part;
            fromPartial(object: Partial<_136.Part>): _136.Part;
        };
        BlockID: {
            encode(message: _136.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.BlockID;
            fromPartial(object: Partial<_136.BlockID>): _136.BlockID;
        };
        Header: {
            encode(message: _136.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.Header;
            fromPartial(object: Partial<_136.Header>): _136.Header;
        };
        Data: {
            encode(message: _136.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.Data;
            fromPartial(object: Partial<_136.Data>): _136.Data;
        };
        Vote: {
            encode(message: _136.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.Vote;
            fromPartial(object: Partial<_136.Vote>): _136.Vote;
        };
        Commit: {
            encode(message: _136.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.Commit;
            fromPartial(object: Partial<_136.Commit>): _136.Commit;
        };
        CommitSig: {
            encode(message: _136.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.CommitSig;
            fromPartial(object: Partial<_136.CommitSig>): _136.CommitSig;
        };
        Proposal: {
            encode(message: _136.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.Proposal;
            fromPartial(object: Partial<_136.Proposal>): _136.Proposal;
        };
        SignedHeader: {
            encode(message: _136.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.SignedHeader;
            fromPartial(object: Partial<_136.SignedHeader>): _136.SignedHeader;
        };
        LightBlock: {
            encode(message: _136.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.LightBlock;
            fromPartial(object: Partial<_136.LightBlock>): _136.LightBlock;
        };
        BlockMeta: {
            encode(message: _136.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.BlockMeta;
            fromPartial(object: Partial<_136.BlockMeta>): _136.BlockMeta;
        };
        TxProof: {
            encode(message: _136.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.TxProof;
            fromPartial(object: Partial<_136.TxProof>): _136.TxProof;
        };
        ConsensusParams: {
            encode(message: _135.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.ConsensusParams;
            fromPartial(object: Partial<_135.ConsensusParams>): _135.ConsensusParams;
        };
        BlockParams: {
            encode(message: _135.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.BlockParams;
            fromPartial(object: Partial<_135.BlockParams>): _135.BlockParams;
        };
        EvidenceParams: {
            encode(message: _135.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.EvidenceParams;
            fromPartial(object: Partial<_135.EvidenceParams>): _135.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _135.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.ValidatorParams;
            fromPartial(object: Partial<_135.ValidatorParams>): _135.ValidatorParams;
        };
        VersionParams: {
            encode(message: _135.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.VersionParams;
            fromPartial(object: Partial<_135.VersionParams>): _135.VersionParams;
        };
        HashedParams: {
            encode(message: _135.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.HashedParams;
            fromPartial(object: Partial<_135.HashedParams>): _135.HashedParams;
        };
        Evidence: {
            encode(message: _134.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.Evidence;
            fromPartial(object: Partial<_134.Evidence>): _134.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _134.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.DuplicateVoteEvidence;
            fromPartial(object: Partial<_134.DuplicateVoteEvidence>): _134.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _134.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.LightClientAttackEvidence;
            fromPartial(object: Partial<_134.LightClientAttackEvidence>): _134.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _134.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.EvidenceList;
            fromPartial(object: Partial<_134.EvidenceList>): _134.EvidenceList;
        };
        Block: {
            encode(message: _133.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.Block;
            fromPartial(object: Partial<_133.Block>): _133.Block;
        };
    };
    const version: {
        App: {
            encode(message: _138.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.App;
            fromPartial(object: Partial<_138.App>): _138.App;
        };
        Consensus: {
            encode(message: _138.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.Consensus;
            fromPartial(object: Partial<_138.Consensus>): _138.Consensus;
        };
    };
}
