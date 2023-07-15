import * as _171 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _171.HashOp;
    hashOpToJSON(object: _171.HashOp): string;
    lengthOpFromJSON(object: any): _171.LengthOp;
    lengthOpToJSON(object: _171.LengthOp): string;
    HashOp: typeof _171.HashOp;
    HashOpSDKType: typeof _171.HashOp;
    HashOpAmino: typeof _171.HashOp;
    LengthOp: typeof _171.LengthOp;
    LengthOpSDKType: typeof _171.LengthOp;
    LengthOpAmino: typeof _171.LengthOp;
    ExistenceProof: {
        typeUrl: string;
        encode(message: _171.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.ExistenceProof;
        fromPartial(object: Partial<_171.ExistenceProof>): _171.ExistenceProof;
        fromAmino(object: _171.ExistenceProofAmino): _171.ExistenceProof;
        toAmino(message: _171.ExistenceProof): _171.ExistenceProofAmino;
        fromAminoMsg(object: _171.ExistenceProofAminoMsg): _171.ExistenceProof;
        fromProtoMsg(message: _171.ExistenceProofProtoMsg): _171.ExistenceProof;
        toProto(message: _171.ExistenceProof): Uint8Array;
        toProtoMsg(message: _171.ExistenceProof): _171.ExistenceProofProtoMsg;
    };
    NonExistenceProof: {
        typeUrl: string;
        encode(message: _171.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.NonExistenceProof;
        fromPartial(object: Partial<_171.NonExistenceProof>): _171.NonExistenceProof;
        fromAmino(object: _171.NonExistenceProofAmino): _171.NonExistenceProof;
        toAmino(message: _171.NonExistenceProof): _171.NonExistenceProofAmino;
        fromAminoMsg(object: _171.NonExistenceProofAminoMsg): _171.NonExistenceProof;
        fromProtoMsg(message: _171.NonExistenceProofProtoMsg): _171.NonExistenceProof;
        toProto(message: _171.NonExistenceProof): Uint8Array;
        toProtoMsg(message: _171.NonExistenceProof): _171.NonExistenceProofProtoMsg;
    };
    CommitmentProof: {
        typeUrl: string;
        encode(message: _171.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.CommitmentProof;
        fromPartial(object: Partial<_171.CommitmentProof>): _171.CommitmentProof;
        fromAmino(object: _171.CommitmentProofAmino): _171.CommitmentProof;
        toAmino(message: _171.CommitmentProof): _171.CommitmentProofAmino;
        fromAminoMsg(object: _171.CommitmentProofAminoMsg): _171.CommitmentProof;
        fromProtoMsg(message: _171.CommitmentProofProtoMsg): _171.CommitmentProof;
        toProto(message: _171.CommitmentProof): Uint8Array;
        toProtoMsg(message: _171.CommitmentProof): _171.CommitmentProofProtoMsg;
    };
    LeafOp: {
        typeUrl: string;
        encode(message: _171.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.LeafOp;
        fromPartial(object: Partial<_171.LeafOp>): _171.LeafOp;
        fromAmino(object: _171.LeafOpAmino): _171.LeafOp;
        toAmino(message: _171.LeafOp): _171.LeafOpAmino;
        fromAminoMsg(object: _171.LeafOpAminoMsg): _171.LeafOp;
        fromProtoMsg(message: _171.LeafOpProtoMsg): _171.LeafOp;
        toProto(message: _171.LeafOp): Uint8Array;
        toProtoMsg(message: _171.LeafOp): _171.LeafOpProtoMsg;
    };
    InnerOp: {
        typeUrl: string;
        encode(message: _171.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.InnerOp;
        fromPartial(object: Partial<_171.InnerOp>): _171.InnerOp;
        fromAmino(object: _171.InnerOpAmino): _171.InnerOp;
        toAmino(message: _171.InnerOp): _171.InnerOpAmino;
        fromAminoMsg(object: _171.InnerOpAminoMsg): _171.InnerOp;
        fromProtoMsg(message: _171.InnerOpProtoMsg): _171.InnerOp;
        toProto(message: _171.InnerOp): Uint8Array;
        toProtoMsg(message: _171.InnerOp): _171.InnerOpProtoMsg;
    };
    ProofSpec: {
        typeUrl: string;
        encode(message: _171.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.ProofSpec;
        fromPartial(object: Partial<_171.ProofSpec>): _171.ProofSpec;
        fromAmino(object: _171.ProofSpecAmino): _171.ProofSpec;
        toAmino(message: _171.ProofSpec): _171.ProofSpecAmino;
        fromAminoMsg(object: _171.ProofSpecAminoMsg): _171.ProofSpec;
        fromProtoMsg(message: _171.ProofSpecProtoMsg): _171.ProofSpec;
        toProto(message: _171.ProofSpec): Uint8Array;
        toProtoMsg(message: _171.ProofSpec): _171.ProofSpecProtoMsg;
    };
    InnerSpec: {
        typeUrl: string;
        encode(message: _171.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.InnerSpec;
        fromPartial(object: Partial<_171.InnerSpec>): _171.InnerSpec;
        fromAmino(object: _171.InnerSpecAmino): _171.InnerSpec;
        toAmino(message: _171.InnerSpec): _171.InnerSpecAmino;
        fromAminoMsg(object: _171.InnerSpecAminoMsg): _171.InnerSpec;
        fromProtoMsg(message: _171.InnerSpecProtoMsg): _171.InnerSpec;
        toProto(message: _171.InnerSpec): Uint8Array;
        toProtoMsg(message: _171.InnerSpec): _171.InnerSpecProtoMsg;
    };
    BatchProof: {
        typeUrl: string;
        encode(message: _171.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.BatchProof;
        fromPartial(object: Partial<_171.BatchProof>): _171.BatchProof;
        fromAmino(object: _171.BatchProofAmino): _171.BatchProof;
        toAmino(message: _171.BatchProof): _171.BatchProofAmino;
        fromAminoMsg(object: _171.BatchProofAminoMsg): _171.BatchProof;
        fromProtoMsg(message: _171.BatchProofProtoMsg): _171.BatchProof;
        toProto(message: _171.BatchProof): Uint8Array;
        toProtoMsg(message: _171.BatchProof): _171.BatchProofProtoMsg;
    };
    BatchEntry: {
        typeUrl: string;
        encode(message: _171.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.BatchEntry;
        fromPartial(object: Partial<_171.BatchEntry>): _171.BatchEntry;
        fromAmino(object: _171.BatchEntryAmino): _171.BatchEntry;
        toAmino(message: _171.BatchEntry): _171.BatchEntryAmino;
        fromAminoMsg(object: _171.BatchEntryAminoMsg): _171.BatchEntry;
        fromProtoMsg(message: _171.BatchEntryProtoMsg): _171.BatchEntry;
        toProto(message: _171.BatchEntry): Uint8Array;
        toProtoMsg(message: _171.BatchEntry): _171.BatchEntryProtoMsg;
    };
    CompressedBatchProof: {
        typeUrl: string;
        encode(message: _171.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.CompressedBatchProof;
        fromPartial(object: Partial<_171.CompressedBatchProof>): _171.CompressedBatchProof;
        fromAmino(object: _171.CompressedBatchProofAmino): _171.CompressedBatchProof;
        toAmino(message: _171.CompressedBatchProof): _171.CompressedBatchProofAmino;
        fromAminoMsg(object: _171.CompressedBatchProofAminoMsg): _171.CompressedBatchProof;
        fromProtoMsg(message: _171.CompressedBatchProofProtoMsg): _171.CompressedBatchProof;
        toProto(message: _171.CompressedBatchProof): Uint8Array;
        toProtoMsg(message: _171.CompressedBatchProof): _171.CompressedBatchProofProtoMsg;
    };
    CompressedBatchEntry: {
        typeUrl: string;
        encode(message: _171.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.CompressedBatchEntry;
        fromPartial(object: Partial<_171.CompressedBatchEntry>): _171.CompressedBatchEntry;
        fromAmino(object: _171.CompressedBatchEntryAmino): _171.CompressedBatchEntry;
        toAmino(message: _171.CompressedBatchEntry): _171.CompressedBatchEntryAmino;
        fromAminoMsg(object: _171.CompressedBatchEntryAminoMsg): _171.CompressedBatchEntry;
        fromProtoMsg(message: _171.CompressedBatchEntryProtoMsg): _171.CompressedBatchEntry;
        toProto(message: _171.CompressedBatchEntry): Uint8Array;
        toProtoMsg(message: _171.CompressedBatchEntry): _171.CompressedBatchEntryProtoMsg;
    };
    CompressedExistenceProof: {
        typeUrl: string;
        encode(message: _171.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.CompressedExistenceProof;
        fromPartial(object: Partial<_171.CompressedExistenceProof>): _171.CompressedExistenceProof;
        fromAmino(object: _171.CompressedExistenceProofAmino): _171.CompressedExistenceProof;
        toAmino(message: _171.CompressedExistenceProof): _171.CompressedExistenceProofAmino;
        fromAminoMsg(object: _171.CompressedExistenceProofAminoMsg): _171.CompressedExistenceProof;
        fromProtoMsg(message: _171.CompressedExistenceProofProtoMsg): _171.CompressedExistenceProof;
        toProto(message: _171.CompressedExistenceProof): Uint8Array;
        toProtoMsg(message: _171.CompressedExistenceProof): _171.CompressedExistenceProofProtoMsg;
    };
    CompressedNonExistenceProof: {
        typeUrl: string;
        encode(message: _171.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.CompressedNonExistenceProof;
        fromPartial(object: Partial<_171.CompressedNonExistenceProof>): _171.CompressedNonExistenceProof;
        fromAmino(object: _171.CompressedNonExistenceProofAmino): _171.CompressedNonExistenceProof;
        toAmino(message: _171.CompressedNonExistenceProof): _171.CompressedNonExistenceProofAmino;
        fromAminoMsg(object: _171.CompressedNonExistenceProofAminoMsg): _171.CompressedNonExistenceProof;
        fromProtoMsg(message: _171.CompressedNonExistenceProofProtoMsg): _171.CompressedNonExistenceProof;
        toProto(message: _171.CompressedNonExistenceProof): Uint8Array;
        toProtoMsg(message: _171.CompressedNonExistenceProof): _171.CompressedNonExistenceProofProtoMsg;
    };
};
