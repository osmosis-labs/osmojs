import * as _0 from "./ics23/v1/proofs";
import * as _1 from "./authz/v1beta1/authz";
import * as _2 from "./authz/v1beta1/event";
import * as _3 from "./authz/v1beta1/genesis";
import * as _4 from "./authz/v1beta1/query";
import * as _5 from "./authz/v1beta1/tx";
import * as _6 from "./bank/v1beta1/authz";
import * as _7 from "./bank/v1beta1/bank";
import * as _8 from "./bank/v1beta1/genesis";
import * as _9 from "./bank/v1beta1/query";
import * as _10 from "./bank/v1beta1/tx";
import * as _11 from "./base/abci/v1beta1/abci";
import * as _12 from "./base/node/v1beta1/query";
import * as _13 from "./base/query/v1beta1/pagination";
import * as _14 from "./base/reflection/v2alpha1/reflection";
import * as _15 from "./base/v1beta1/coin";
import * as _16 from "./crypto/ed25519/keys";
import * as _17 from "./crypto/multisig/keys";
import * as _18 from "./crypto/secp256k1/keys";
import * as _19 from "./crypto/secp256r1/keys";
import * as _20 from "./crypto/hd/v1/hd";
import * as _21 from "./crypto/keyring/v1/record";
import * as _22 from "./distribution/v1beta1/distribution";
import * as _23 from "./distribution/v1beta1/genesis";
import * as _24 from "./distribution/v1beta1/query";
import * as _25 from "./distribution/v1beta1/tx";
import * as _26 from "./gov/v1beta1/genesis";
import * as _27 from "./gov/v1beta1/gov";
import * as _28 from "./gov/v1beta1/query";
import * as _29 from "./gov/v1beta1/tx";
import * as _30 from "./gov/v1/genesis";
import * as _31 from "./gov/v1/gov";
import * as _32 from "./gov/v1/query";
import * as _33 from "./gov/v1/tx";
import * as _34 from "./staking/v1beta1/authz";
import * as _35 from "./staking/v1beta1/genesis";
import * as _36 from "./staking/v1beta1/query";
import * as _37 from "./staking/v1beta1/staking";
import * as _38 from "./staking/v1beta1/tx";
import * as _39 from "./tx/signing/v1beta1/signing";
import * as _40 from "./tx/v1beta1/service";
import * as _41 from "./tx/v1beta1/tx";
import * as _42 from "./upgrade/v1beta1/query";
import * as _43 from "./upgrade/v1beta1/upgrade";
import * as _44 from "./upgrade/v1beta1/tx";
import * as _199 from "./authz/v1beta1/query.lcd";
import * as _200 from "./bank/v1beta1/query.lcd";
import * as _201 from "./base/node/v1beta1/query.lcd";
import * as _202 from "./distribution/v1beta1/query.lcd";
import * as _203 from "./gov/v1beta1/query.lcd";
import * as _204 from "./staking/v1beta1/query.lcd";
import * as _205 from "./tx/v1beta1/service.lcd";
import * as _206 from "./upgrade/v1beta1/query.lcd";
import * as _207 from "./gov/v1/query.lcd";
import * as _208 from "./authz/v1beta1/query.rpc.Query";
import * as _209 from "./bank/v1beta1/query.rpc.Query";
import * as _210 from "./base/node/v1beta1/query.rpc.Service";
import * as _211 from "./distribution/v1beta1/query.rpc.Query";
import * as _212 from "./gov/v1beta1/query.rpc.Query";
import * as _213 from "./staking/v1beta1/query.rpc.Query";
import * as _214 from "./tx/v1beta1/service.rpc.Service";
import * as _215 from "./upgrade/v1beta1/query.rpc.Query";
import * as _216 from "./gov/v1/query.rpc.Query";
import * as _217 from "./authz/v1beta1/tx.rpc.msg";
import * as _218 from "./bank/v1beta1/tx.rpc.msg";
import * as _219 from "./distribution/v1beta1/tx.rpc.msg";
import * as _220 from "./gov/v1beta1/tx.rpc.msg";
import * as _221 from "./staking/v1beta1/tx.rpc.msg";
import * as _222 from "./gov/v1/tx.rpc.msg";
import * as _223 from "./upgrade/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace ics23 {
        const v1: {
            hashOpFromJSON(object: any): _0.HashOp;
            hashOpToJSON(object: _0.HashOp): string;
            lengthOpFromJSON(object: any): _0.LengthOp;
            lengthOpToJSON(object: _0.LengthOp): string;
            HashOp: typeof _0.HashOp;
            HashOpSDKType: typeof _0.HashOp;
            HashOpAmino: typeof _0.HashOp;
            LengthOp: typeof _0.LengthOp;
            LengthOpSDKType: typeof _0.LengthOp;
            LengthOpAmino: typeof _0.LengthOp;
            ExistenceProof: {
                typeUrl: string;
                encode(message: _0.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ExistenceProof;
                fromPartial(object: Partial<_0.ExistenceProof>): _0.ExistenceProof;
                fromAmino(object: _0.ExistenceProofAmino): _0.ExistenceProof;
                toAmino(message: _0.ExistenceProof): _0.ExistenceProofAmino;
                fromAminoMsg(object: _0.ExistenceProofAminoMsg): _0.ExistenceProof;
                toAminoMsg(message: _0.ExistenceProof): _0.ExistenceProofAminoMsg;
                fromProtoMsg(message: _0.ExistenceProofProtoMsg): _0.ExistenceProof;
                toProto(message: _0.ExistenceProof): Uint8Array;
                toProtoMsg(message: _0.ExistenceProof): _0.ExistenceProofProtoMsg;
            };
            NonExistenceProof: {
                typeUrl: string;
                encode(message: _0.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.NonExistenceProof;
                fromPartial(object: Partial<_0.NonExistenceProof>): _0.NonExistenceProof;
                fromAmino(object: _0.NonExistenceProofAmino): _0.NonExistenceProof;
                toAmino(message: _0.NonExistenceProof): _0.NonExistenceProofAmino;
                fromAminoMsg(object: _0.NonExistenceProofAminoMsg): _0.NonExistenceProof;
                toAminoMsg(message: _0.NonExistenceProof): _0.NonExistenceProofAminoMsg;
                fromProtoMsg(message: _0.NonExistenceProofProtoMsg): _0.NonExistenceProof;
                toProto(message: _0.NonExistenceProof): Uint8Array;
                toProtoMsg(message: _0.NonExistenceProof): _0.NonExistenceProofProtoMsg;
            };
            CommitmentProof: {
                typeUrl: string;
                encode(message: _0.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.CommitmentProof;
                fromPartial(object: Partial<_0.CommitmentProof>): _0.CommitmentProof;
                fromAmino(object: _0.CommitmentProofAmino): _0.CommitmentProof;
                toAmino(message: _0.CommitmentProof): _0.CommitmentProofAmino;
                fromAminoMsg(object: _0.CommitmentProofAminoMsg): _0.CommitmentProof;
                toAminoMsg(message: _0.CommitmentProof): _0.CommitmentProofAminoMsg;
                fromProtoMsg(message: _0.CommitmentProofProtoMsg): _0.CommitmentProof;
                toProto(message: _0.CommitmentProof): Uint8Array;
                toProtoMsg(message: _0.CommitmentProof): _0.CommitmentProofProtoMsg;
            };
            LeafOp: {
                typeUrl: string;
                encode(message: _0.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.LeafOp;
                fromPartial(object: Partial<_0.LeafOp>): _0.LeafOp;
                fromAmino(object: _0.LeafOpAmino): _0.LeafOp;
                toAmino(message: _0.LeafOp): _0.LeafOpAmino;
                fromAminoMsg(object: _0.LeafOpAminoMsg): _0.LeafOp;
                toAminoMsg(message: _0.LeafOp): _0.LeafOpAminoMsg;
                fromProtoMsg(message: _0.LeafOpProtoMsg): _0.LeafOp;
                toProto(message: _0.LeafOp): Uint8Array;
                toProtoMsg(message: _0.LeafOp): _0.LeafOpProtoMsg;
            };
            InnerOp: {
                typeUrl: string;
                encode(message: _0.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.InnerOp;
                fromPartial(object: Partial<_0.InnerOp>): _0.InnerOp;
                fromAmino(object: _0.InnerOpAmino): _0.InnerOp;
                toAmino(message: _0.InnerOp): _0.InnerOpAmino;
                fromAminoMsg(object: _0.InnerOpAminoMsg): _0.InnerOp;
                toAminoMsg(message: _0.InnerOp): _0.InnerOpAminoMsg;
                fromProtoMsg(message: _0.InnerOpProtoMsg): _0.InnerOp;
                toProto(message: _0.InnerOp): Uint8Array;
                toProtoMsg(message: _0.InnerOp): _0.InnerOpProtoMsg;
            };
            ProofSpec: {
                typeUrl: string;
                encode(message: _0.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ProofSpec;
                fromPartial(object: Partial<_0.ProofSpec>): _0.ProofSpec;
                fromAmino(object: _0.ProofSpecAmino): _0.ProofSpec;
                toAmino(message: _0.ProofSpec): _0.ProofSpecAmino;
                fromAminoMsg(object: _0.ProofSpecAminoMsg): _0.ProofSpec;
                toAminoMsg(message: _0.ProofSpec): _0.ProofSpecAminoMsg;
                fromProtoMsg(message: _0.ProofSpecProtoMsg): _0.ProofSpec;
                toProto(message: _0.ProofSpec): Uint8Array;
                toProtoMsg(message: _0.ProofSpec): _0.ProofSpecProtoMsg;
            };
            InnerSpec: {
                typeUrl: string;
                encode(message: _0.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.InnerSpec;
                fromPartial(object: Partial<_0.InnerSpec>): _0.InnerSpec;
                fromAmino(object: _0.InnerSpecAmino): _0.InnerSpec;
                toAmino(message: _0.InnerSpec): _0.InnerSpecAmino;
                fromAminoMsg(object: _0.InnerSpecAminoMsg): _0.InnerSpec;
                toAminoMsg(message: _0.InnerSpec): _0.InnerSpecAminoMsg;
                fromProtoMsg(message: _0.InnerSpecProtoMsg): _0.InnerSpec;
                toProto(message: _0.InnerSpec): Uint8Array;
                toProtoMsg(message: _0.InnerSpec): _0.InnerSpecProtoMsg;
            };
            BatchProof: {
                typeUrl: string;
                encode(message: _0.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.BatchProof;
                fromPartial(object: Partial<_0.BatchProof>): _0.BatchProof;
                fromAmino(object: _0.BatchProofAmino): _0.BatchProof;
                toAmino(message: _0.BatchProof): _0.BatchProofAmino;
                fromAminoMsg(object: _0.BatchProofAminoMsg): _0.BatchProof;
                toAminoMsg(message: _0.BatchProof): _0.BatchProofAminoMsg;
                fromProtoMsg(message: _0.BatchProofProtoMsg): _0.BatchProof;
                toProto(message: _0.BatchProof): Uint8Array;
                toProtoMsg(message: _0.BatchProof): _0.BatchProofProtoMsg;
            };
            BatchEntry: {
                typeUrl: string;
                encode(message: _0.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.BatchEntry;
                fromPartial(object: Partial<_0.BatchEntry>): _0.BatchEntry;
                fromAmino(object: _0.BatchEntryAmino): _0.BatchEntry;
                toAmino(message: _0.BatchEntry): _0.BatchEntryAmino;
                fromAminoMsg(object: _0.BatchEntryAminoMsg): _0.BatchEntry;
                toAminoMsg(message: _0.BatchEntry): _0.BatchEntryAminoMsg;
                fromProtoMsg(message: _0.BatchEntryProtoMsg): _0.BatchEntry;
                toProto(message: _0.BatchEntry): Uint8Array;
                toProtoMsg(message: _0.BatchEntry): _0.BatchEntryProtoMsg;
            };
            CompressedBatchProof: {
                typeUrl: string;
                encode(message: _0.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.CompressedBatchProof;
                fromPartial(object: Partial<_0.CompressedBatchProof>): _0.CompressedBatchProof;
                fromAmino(object: _0.CompressedBatchProofAmino): _0.CompressedBatchProof;
                toAmino(message: _0.CompressedBatchProof): _0.CompressedBatchProofAmino;
                fromAminoMsg(object: _0.CompressedBatchProofAminoMsg): _0.CompressedBatchProof;
                toAminoMsg(message: _0.CompressedBatchProof): _0.CompressedBatchProofAminoMsg;
                fromProtoMsg(message: _0.CompressedBatchProofProtoMsg): _0.CompressedBatchProof;
                toProto(message: _0.CompressedBatchProof): Uint8Array;
                toProtoMsg(message: _0.CompressedBatchProof): _0.CompressedBatchProofProtoMsg;
            };
            CompressedBatchEntry: {
                typeUrl: string;
                encode(message: _0.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.CompressedBatchEntry;
                fromPartial(object: Partial<_0.CompressedBatchEntry>): _0.CompressedBatchEntry;
                fromAmino(object: _0.CompressedBatchEntryAmino): _0.CompressedBatchEntry;
                toAmino(message: _0.CompressedBatchEntry): _0.CompressedBatchEntryAmino;
                fromAminoMsg(object: _0.CompressedBatchEntryAminoMsg): _0.CompressedBatchEntry;
                toAminoMsg(message: _0.CompressedBatchEntry): _0.CompressedBatchEntryAminoMsg;
                fromProtoMsg(message: _0.CompressedBatchEntryProtoMsg): _0.CompressedBatchEntry;
                toProto(message: _0.CompressedBatchEntry): Uint8Array;
                toProtoMsg(message: _0.CompressedBatchEntry): _0.CompressedBatchEntryProtoMsg;
            };
            CompressedExistenceProof: {
                typeUrl: string;
                encode(message: _0.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.CompressedExistenceProof;
                fromPartial(object: Partial<_0.CompressedExistenceProof>): _0.CompressedExistenceProof;
                fromAmino(object: _0.CompressedExistenceProofAmino): _0.CompressedExistenceProof;
                toAmino(message: _0.CompressedExistenceProof): _0.CompressedExistenceProofAmino;
                fromAminoMsg(object: _0.CompressedExistenceProofAminoMsg): _0.CompressedExistenceProof;
                toAminoMsg(message: _0.CompressedExistenceProof): _0.CompressedExistenceProofAminoMsg;
                fromProtoMsg(message: _0.CompressedExistenceProofProtoMsg): _0.CompressedExistenceProof;
                toProto(message: _0.CompressedExistenceProof): Uint8Array;
                toProtoMsg(message: _0.CompressedExistenceProof): _0.CompressedExistenceProofProtoMsg;
            };
            CompressedNonExistenceProof: {
                typeUrl: string;
                encode(message: _0.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.CompressedNonExistenceProof;
                fromPartial(object: Partial<_0.CompressedNonExistenceProof>): _0.CompressedNonExistenceProof;
                fromAmino(object: _0.CompressedNonExistenceProofAmino): _0.CompressedNonExistenceProof;
                toAmino(message: _0.CompressedNonExistenceProof): _0.CompressedNonExistenceProofAmino;
                fromAminoMsg(object: _0.CompressedNonExistenceProofAminoMsg): _0.CompressedNonExistenceProof;
                toAminoMsg(message: _0.CompressedNonExistenceProof): _0.CompressedNonExistenceProofAminoMsg;
                fromProtoMsg(message: _0.CompressedNonExistenceProofProtoMsg): _0.CompressedNonExistenceProof;
                toProto(message: _0.CompressedNonExistenceProof): Uint8Array;
                toProtoMsg(message: _0.CompressedNonExistenceProof): _0.CompressedNonExistenceProofProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _217.MsgClientImpl;
            QueryClientImpl: typeof _208.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _4.QueryGrantsRequest): Promise<_4.QueryGrantsResponse>;
                granterGrants(request: _4.QueryGranterGrantsRequest): Promise<_4.QueryGranterGrantsResponse>;
                granteeGrants(request: _4.QueryGranteeGrantsRequest): Promise<_4.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _199.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _5.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _5.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _5.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _5.MsgGrant): {
                        typeUrl: string;
                        value: _5.MsgGrant;
                    };
                    exec(value: _5.MsgExec): {
                        typeUrl: string;
                        value: _5.MsgExec;
                    };
                    revoke(value: _5.MsgRevoke): {
                        typeUrl: string;
                        value: _5.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _5.MsgGrant): {
                        typeUrl: string;
                        value: _5.MsgGrant;
                    };
                    exec(value: _5.MsgExec): {
                        typeUrl: string;
                        value: _5.MsgExec;
                    };
                    revoke(value: _5.MsgRevoke): {
                        typeUrl: string;
                        value: _5.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _5.MsgGrant) => _5.MsgGrantAmino;
                    fromAmino: (object: _5.MsgGrantAmino) => _5.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _5.MsgExec) => _5.MsgExecAmino;
                    fromAmino: (object: _5.MsgExecAmino) => _5.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _5.MsgRevoke) => _5.MsgRevokeAmino;
                    fromAmino: (object: _5.MsgRevokeAmino) => _5.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _5.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgGrant;
                fromPartial(object: Partial<_5.MsgGrant>): _5.MsgGrant;
                fromAmino(object: _5.MsgGrantAmino): _5.MsgGrant;
                toAmino(message: _5.MsgGrant): _5.MsgGrantAmino;
                fromAminoMsg(object: _5.MsgGrantAminoMsg): _5.MsgGrant;
                toAminoMsg(message: _5.MsgGrant): _5.MsgGrantAminoMsg;
                fromProtoMsg(message: _5.MsgGrantProtoMsg): _5.MsgGrant;
                toProto(message: _5.MsgGrant): Uint8Array;
                toProtoMsg(message: _5.MsgGrant): _5.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _5.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgExecResponse;
                fromPartial(object: Partial<_5.MsgExecResponse>): _5.MsgExecResponse;
                fromAmino(object: _5.MsgExecResponseAmino): _5.MsgExecResponse;
                toAmino(message: _5.MsgExecResponse): _5.MsgExecResponseAmino;
                fromAminoMsg(object: _5.MsgExecResponseAminoMsg): _5.MsgExecResponse;
                toAminoMsg(message: _5.MsgExecResponse): _5.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _5.MsgExecResponseProtoMsg): _5.MsgExecResponse;
                toProto(message: _5.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _5.MsgExecResponse): _5.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _5.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgExec;
                fromPartial(object: Partial<_5.MsgExec>): _5.MsgExec;
                fromAmino(object: _5.MsgExecAmino): _5.MsgExec;
                toAmino(message: _5.MsgExec): _5.MsgExecAmino;
                fromAminoMsg(object: _5.MsgExecAminoMsg): _5.MsgExec;
                toAminoMsg(message: _5.MsgExec): _5.MsgExecAminoMsg;
                fromProtoMsg(message: _5.MsgExecProtoMsg): _5.MsgExec;
                toProto(message: _5.MsgExec): Uint8Array;
                toProtoMsg(message: _5.MsgExec): _5.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _5.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgGrantResponse;
                fromPartial(_: Partial<_5.MsgGrantResponse>): _5.MsgGrantResponse;
                fromAmino(_: _5.MsgGrantResponseAmino): _5.MsgGrantResponse;
                toAmino(_: _5.MsgGrantResponse): _5.MsgGrantResponseAmino;
                fromAminoMsg(object: _5.MsgGrantResponseAminoMsg): _5.MsgGrantResponse;
                toAminoMsg(message: _5.MsgGrantResponse): _5.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _5.MsgGrantResponseProtoMsg): _5.MsgGrantResponse;
                toProto(message: _5.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _5.MsgGrantResponse): _5.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _5.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgRevoke;
                fromPartial(object: Partial<_5.MsgRevoke>): _5.MsgRevoke;
                fromAmino(object: _5.MsgRevokeAmino): _5.MsgRevoke;
                toAmino(message: _5.MsgRevoke): _5.MsgRevokeAmino;
                fromAminoMsg(object: _5.MsgRevokeAminoMsg): _5.MsgRevoke;
                toAminoMsg(message: _5.MsgRevoke): _5.MsgRevokeAminoMsg;
                fromProtoMsg(message: _5.MsgRevokeProtoMsg): _5.MsgRevoke;
                toProto(message: _5.MsgRevoke): Uint8Array;
                toProtoMsg(message: _5.MsgRevoke): _5.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _5.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgRevokeResponse;
                fromPartial(_: Partial<_5.MsgRevokeResponse>): _5.MsgRevokeResponse;
                fromAmino(_: _5.MsgRevokeResponseAmino): _5.MsgRevokeResponse;
                toAmino(_: _5.MsgRevokeResponse): _5.MsgRevokeResponseAmino;
                fromAminoMsg(object: _5.MsgRevokeResponseAminoMsg): _5.MsgRevokeResponse;
                toAminoMsg(message: _5.MsgRevokeResponse): _5.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _5.MsgRevokeResponseProtoMsg): _5.MsgRevokeResponse;
                toProto(message: _5.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _5.MsgRevokeResponse): _5.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _4.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryGrantsRequest;
                fromPartial(object: Partial<_4.QueryGrantsRequest>): _4.QueryGrantsRequest;
                fromAmino(object: _4.QueryGrantsRequestAmino): _4.QueryGrantsRequest;
                toAmino(message: _4.QueryGrantsRequest): _4.QueryGrantsRequestAmino;
                fromAminoMsg(object: _4.QueryGrantsRequestAminoMsg): _4.QueryGrantsRequest;
                toAminoMsg(message: _4.QueryGrantsRequest): _4.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _4.QueryGrantsRequestProtoMsg): _4.QueryGrantsRequest;
                toProto(message: _4.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _4.QueryGrantsRequest): _4.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _4.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryGrantsResponse;
                fromPartial(object: Partial<_4.QueryGrantsResponse>): _4.QueryGrantsResponse;
                fromAmino(object: _4.QueryGrantsResponseAmino): _4.QueryGrantsResponse;
                toAmino(message: _4.QueryGrantsResponse): _4.QueryGrantsResponseAmino;
                fromAminoMsg(object: _4.QueryGrantsResponseAminoMsg): _4.QueryGrantsResponse;
                toAminoMsg(message: _4.QueryGrantsResponse): _4.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _4.QueryGrantsResponseProtoMsg): _4.QueryGrantsResponse;
                toProto(message: _4.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _4.QueryGrantsResponse): _4.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _4.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_4.QueryGranterGrantsRequest>): _4.QueryGranterGrantsRequest;
                fromAmino(object: _4.QueryGranterGrantsRequestAmino): _4.QueryGranterGrantsRequest;
                toAmino(message: _4.QueryGranterGrantsRequest): _4.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _4.QueryGranterGrantsRequestAminoMsg): _4.QueryGranterGrantsRequest;
                toAminoMsg(message: _4.QueryGranterGrantsRequest): _4.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _4.QueryGranterGrantsRequestProtoMsg): _4.QueryGranterGrantsRequest;
                toProto(message: _4.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _4.QueryGranterGrantsRequest): _4.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _4.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_4.QueryGranterGrantsResponse>): _4.QueryGranterGrantsResponse;
                fromAmino(object: _4.QueryGranterGrantsResponseAmino): _4.QueryGranterGrantsResponse;
                toAmino(message: _4.QueryGranterGrantsResponse): _4.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _4.QueryGranterGrantsResponseAminoMsg): _4.QueryGranterGrantsResponse;
                toAminoMsg(message: _4.QueryGranterGrantsResponse): _4.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _4.QueryGranterGrantsResponseProtoMsg): _4.QueryGranterGrantsResponse;
                toProto(message: _4.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _4.QueryGranterGrantsResponse): _4.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _4.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_4.QueryGranteeGrantsRequest>): _4.QueryGranteeGrantsRequest;
                fromAmino(object: _4.QueryGranteeGrantsRequestAmino): _4.QueryGranteeGrantsRequest;
                toAmino(message: _4.QueryGranteeGrantsRequest): _4.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _4.QueryGranteeGrantsRequestAminoMsg): _4.QueryGranteeGrantsRequest;
                toAminoMsg(message: _4.QueryGranteeGrantsRequest): _4.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _4.QueryGranteeGrantsRequestProtoMsg): _4.QueryGranteeGrantsRequest;
                toProto(message: _4.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _4.QueryGranteeGrantsRequest): _4.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _4.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_4.QueryGranteeGrantsResponse>): _4.QueryGranteeGrantsResponse;
                fromAmino(object: _4.QueryGranteeGrantsResponseAmino): _4.QueryGranteeGrantsResponse;
                toAmino(message: _4.QueryGranteeGrantsResponse): _4.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _4.QueryGranteeGrantsResponseAminoMsg): _4.QueryGranteeGrantsResponse;
                toAminoMsg(message: _4.QueryGranteeGrantsResponse): _4.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _4.QueryGranteeGrantsResponseProtoMsg): _4.QueryGranteeGrantsResponse;
                toProto(message: _4.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _4.QueryGranteeGrantsResponse): _4.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _3.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.GenesisState;
                fromPartial(object: Partial<_3.GenesisState>): _3.GenesisState;
                fromAmino(object: _3.GenesisStateAmino): _3.GenesisState;
                toAmino(message: _3.GenesisState): _3.GenesisStateAmino;
                fromAminoMsg(object: _3.GenesisStateAminoMsg): _3.GenesisState;
                toAminoMsg(message: _3.GenesisState): _3.GenesisStateAminoMsg;
                fromProtoMsg(message: _3.GenesisStateProtoMsg): _3.GenesisState;
                toProto(message: _3.GenesisState): Uint8Array;
                toProtoMsg(message: _3.GenesisState): _3.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _2.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.EventGrant;
                fromPartial(object: Partial<_2.EventGrant>): _2.EventGrant;
                fromAmino(object: _2.EventGrantAmino): _2.EventGrant;
                toAmino(message: _2.EventGrant): _2.EventGrantAmino;
                fromAminoMsg(object: _2.EventGrantAminoMsg): _2.EventGrant;
                toAminoMsg(message: _2.EventGrant): _2.EventGrantAminoMsg;
                fromProtoMsg(message: _2.EventGrantProtoMsg): _2.EventGrant;
                toProto(message: _2.EventGrant): Uint8Array;
                toProtoMsg(message: _2.EventGrant): _2.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _2.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.EventRevoke;
                fromPartial(object: Partial<_2.EventRevoke>): _2.EventRevoke;
                fromAmino(object: _2.EventRevokeAmino): _2.EventRevoke;
                toAmino(message: _2.EventRevoke): _2.EventRevokeAmino;
                fromAminoMsg(object: _2.EventRevokeAminoMsg): _2.EventRevoke;
                toAminoMsg(message: _2.EventRevoke): _2.EventRevokeAminoMsg;
                fromProtoMsg(message: _2.EventRevokeProtoMsg): _2.EventRevoke;
                toProto(message: _2.EventRevoke): Uint8Array;
                toProtoMsg(message: _2.EventRevoke): _2.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _1.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.GenericAuthorization;
                fromPartial(object: Partial<_1.GenericAuthorization>): _1.GenericAuthorization;
                fromAmino(object: _1.GenericAuthorizationAmino): _1.GenericAuthorization;
                toAmino(message: _1.GenericAuthorization): _1.GenericAuthorizationAmino;
                fromAminoMsg(object: _1.GenericAuthorizationAminoMsg): _1.GenericAuthorization;
                toAminoMsg(message: _1.GenericAuthorization): _1.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _1.GenericAuthorizationProtoMsg): _1.GenericAuthorization;
                toProto(message: _1.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _1.GenericAuthorization): _1.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _1.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.Grant;
                fromPartial(object: Partial<_1.Grant>): _1.Grant;
                fromAmino(object: _1.GrantAmino): _1.Grant;
                toAmino(message: _1.Grant): _1.GrantAmino;
                fromAminoMsg(object: _1.GrantAminoMsg): _1.Grant;
                toAminoMsg(message: _1.Grant): _1.GrantAminoMsg;
                fromProtoMsg(message: _1.GrantProtoMsg): _1.Grant;
                toProto(message: _1.Grant): Uint8Array;
                toProtoMsg(message: _1.Grant): _1.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _1.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.GrantAuthorization;
                fromPartial(object: Partial<_1.GrantAuthorization>): _1.GrantAuthorization;
                fromAmino(object: _1.GrantAuthorizationAmino): _1.GrantAuthorization;
                toAmino(message: _1.GrantAuthorization): _1.GrantAuthorizationAmino;
                fromAminoMsg(object: _1.GrantAuthorizationAminoMsg): _1.GrantAuthorization;
                toAminoMsg(message: _1.GrantAuthorization): _1.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _1.GrantAuthorizationProtoMsg): _1.GrantAuthorization;
                toProto(message: _1.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _1.GrantAuthorization): _1.GrantAuthorizationProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _6.SendAuthorization | _34.StakeAuthorization | _1.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _218.MsgClientImpl;
            QueryClientImpl: typeof _209.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _9.QueryBalanceRequest): Promise<_9.QueryBalanceResponse>;
                allBalances(request: _9.QueryAllBalancesRequest): Promise<_9.QueryAllBalancesResponse>;
                totalSupply(request?: _9.QueryTotalSupplyRequest): Promise<_9.QueryTotalSupplyResponse>;
                supplyOf(request: _9.QuerySupplyOfRequest): Promise<_9.QuerySupplyOfResponse>;
                totalSupplyWithoutOffset(request?: _9.QueryTotalSupplyWithoutOffsetRequest): Promise<_9.QueryTotalSupplyWithoutOffsetResponse>;
                supplyOfWithoutOffset(request: _9.QuerySupplyOfWithoutOffsetRequest): Promise<_9.QuerySupplyOfWithoutOffsetResponse>;
                params(request?: _9.QueryParamsRequest): Promise<_9.QueryParamsResponse>;
                denomMetadata(request: _9.QueryDenomMetadataRequest): Promise<_9.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _9.QueryDenomsMetadataRequest): Promise<_9.QueryDenomsMetadataResponse>;
                baseDenom(request: _9.QueryBaseDenomRequest): Promise<_9.QueryBaseDenomResponse>;
            };
            LCDQueryClient: typeof _200.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _10.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _10.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _10.MsgSend): {
                        typeUrl: string;
                        value: _10.MsgSend;
                    };
                    multiSend(value: _10.MsgMultiSend): {
                        typeUrl: string;
                        value: _10.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _10.MsgSend): {
                        typeUrl: string;
                        value: _10.MsgSend;
                    };
                    multiSend(value: _10.MsgMultiSend): {
                        typeUrl: string;
                        value: _10.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _10.MsgSend) => _10.MsgSendAmino;
                    fromAmino: (object: _10.MsgSendAmino) => _10.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _10.MsgMultiSend) => _10.MsgMultiSendAmino;
                    fromAmino: (object: _10.MsgMultiSendAmino) => _10.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _10.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgSend;
                fromPartial(object: Partial<_10.MsgSend>): _10.MsgSend;
                fromAmino(object: _10.MsgSendAmino): _10.MsgSend;
                toAmino(message: _10.MsgSend): _10.MsgSendAmino;
                fromAminoMsg(object: _10.MsgSendAminoMsg): _10.MsgSend;
                toAminoMsg(message: _10.MsgSend): _10.MsgSendAminoMsg;
                fromProtoMsg(message: _10.MsgSendProtoMsg): _10.MsgSend;
                toProto(message: _10.MsgSend): Uint8Array;
                toProtoMsg(message: _10.MsgSend): _10.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _10.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgSendResponse;
                fromPartial(_: Partial<_10.MsgSendResponse>): _10.MsgSendResponse;
                fromAmino(_: _10.MsgSendResponseAmino): _10.MsgSendResponse;
                toAmino(_: _10.MsgSendResponse): _10.MsgSendResponseAmino;
                fromAminoMsg(object: _10.MsgSendResponseAminoMsg): _10.MsgSendResponse;
                toAminoMsg(message: _10.MsgSendResponse): _10.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _10.MsgSendResponseProtoMsg): _10.MsgSendResponse;
                toProto(message: _10.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _10.MsgSendResponse): _10.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _10.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgMultiSend;
                fromPartial(object: Partial<_10.MsgMultiSend>): _10.MsgMultiSend;
                fromAmino(object: _10.MsgMultiSendAmino): _10.MsgMultiSend;
                toAmino(message: _10.MsgMultiSend): _10.MsgMultiSendAmino;
                fromAminoMsg(object: _10.MsgMultiSendAminoMsg): _10.MsgMultiSend;
                toAminoMsg(message: _10.MsgMultiSend): _10.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _10.MsgMultiSendProtoMsg): _10.MsgMultiSend;
                toProto(message: _10.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _10.MsgMultiSend): _10.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _10.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgMultiSendResponse;
                fromPartial(_: Partial<_10.MsgMultiSendResponse>): _10.MsgMultiSendResponse;
                fromAmino(_: _10.MsgMultiSendResponseAmino): _10.MsgMultiSendResponse;
                toAmino(_: _10.MsgMultiSendResponse): _10.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _10.MsgMultiSendResponseAminoMsg): _10.MsgMultiSendResponse;
                toAminoMsg(message: _10.MsgMultiSendResponse): _10.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _10.MsgMultiSendResponseProtoMsg): _10.MsgMultiSendResponse;
                toProto(message: _10.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _10.MsgMultiSendResponse): _10.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _9.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryBalanceRequest;
                fromPartial(object: Partial<_9.QueryBalanceRequest>): _9.QueryBalanceRequest;
                fromAmino(object: _9.QueryBalanceRequestAmino): _9.QueryBalanceRequest;
                toAmino(message: _9.QueryBalanceRequest): _9.QueryBalanceRequestAmino;
                fromAminoMsg(object: _9.QueryBalanceRequestAminoMsg): _9.QueryBalanceRequest;
                toAminoMsg(message: _9.QueryBalanceRequest): _9.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _9.QueryBalanceRequestProtoMsg): _9.QueryBalanceRequest;
                toProto(message: _9.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _9.QueryBalanceRequest): _9.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _9.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryBalanceResponse;
                fromPartial(object: Partial<_9.QueryBalanceResponse>): _9.QueryBalanceResponse;
                fromAmino(object: _9.QueryBalanceResponseAmino): _9.QueryBalanceResponse;
                toAmino(message: _9.QueryBalanceResponse): _9.QueryBalanceResponseAmino;
                fromAminoMsg(object: _9.QueryBalanceResponseAminoMsg): _9.QueryBalanceResponse;
                toAminoMsg(message: _9.QueryBalanceResponse): _9.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _9.QueryBalanceResponseProtoMsg): _9.QueryBalanceResponse;
                toProto(message: _9.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _9.QueryBalanceResponse): _9.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _9.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryAllBalancesRequest;
                fromPartial(object: Partial<_9.QueryAllBalancesRequest>): _9.QueryAllBalancesRequest;
                fromAmino(object: _9.QueryAllBalancesRequestAmino): _9.QueryAllBalancesRequest;
                toAmino(message: _9.QueryAllBalancesRequest): _9.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _9.QueryAllBalancesRequestAminoMsg): _9.QueryAllBalancesRequest;
                toAminoMsg(message: _9.QueryAllBalancesRequest): _9.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _9.QueryAllBalancesRequestProtoMsg): _9.QueryAllBalancesRequest;
                toProto(message: _9.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _9.QueryAllBalancesRequest): _9.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _9.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryAllBalancesResponse;
                fromPartial(object: Partial<_9.QueryAllBalancesResponse>): _9.QueryAllBalancesResponse;
                fromAmino(object: _9.QueryAllBalancesResponseAmino): _9.QueryAllBalancesResponse;
                toAmino(message: _9.QueryAllBalancesResponse): _9.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _9.QueryAllBalancesResponseAminoMsg): _9.QueryAllBalancesResponse;
                toAminoMsg(message: _9.QueryAllBalancesResponse): _9.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _9.QueryAllBalancesResponseProtoMsg): _9.QueryAllBalancesResponse;
                toProto(message: _9.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _9.QueryAllBalancesResponse): _9.QueryAllBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _9.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_9.QueryTotalSupplyRequest>): _9.QueryTotalSupplyRequest;
                fromAmino(object: _9.QueryTotalSupplyRequestAmino): _9.QueryTotalSupplyRequest;
                toAmino(message: _9.QueryTotalSupplyRequest): _9.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _9.QueryTotalSupplyRequestAminoMsg): _9.QueryTotalSupplyRequest;
                toAminoMsg(message: _9.QueryTotalSupplyRequest): _9.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _9.QueryTotalSupplyRequestProtoMsg): _9.QueryTotalSupplyRequest;
                toProto(message: _9.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _9.QueryTotalSupplyRequest): _9.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _9.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_9.QueryTotalSupplyResponse>): _9.QueryTotalSupplyResponse;
                fromAmino(object: _9.QueryTotalSupplyResponseAmino): _9.QueryTotalSupplyResponse;
                toAmino(message: _9.QueryTotalSupplyResponse): _9.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _9.QueryTotalSupplyResponseAminoMsg): _9.QueryTotalSupplyResponse;
                toAminoMsg(message: _9.QueryTotalSupplyResponse): _9.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _9.QueryTotalSupplyResponseProtoMsg): _9.QueryTotalSupplyResponse;
                toProto(message: _9.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _9.QueryTotalSupplyResponse): _9.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _9.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QuerySupplyOfRequest;
                fromPartial(object: Partial<_9.QuerySupplyOfRequest>): _9.QuerySupplyOfRequest;
                fromAmino(object: _9.QuerySupplyOfRequestAmino): _9.QuerySupplyOfRequest;
                toAmino(message: _9.QuerySupplyOfRequest): _9.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _9.QuerySupplyOfRequestAminoMsg): _9.QuerySupplyOfRequest;
                toAminoMsg(message: _9.QuerySupplyOfRequest): _9.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _9.QuerySupplyOfRequestProtoMsg): _9.QuerySupplyOfRequest;
                toProto(message: _9.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _9.QuerySupplyOfRequest): _9.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _9.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QuerySupplyOfResponse;
                fromPartial(object: Partial<_9.QuerySupplyOfResponse>): _9.QuerySupplyOfResponse;
                fromAmino(object: _9.QuerySupplyOfResponseAmino): _9.QuerySupplyOfResponse;
                toAmino(message: _9.QuerySupplyOfResponse): _9.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _9.QuerySupplyOfResponseAminoMsg): _9.QuerySupplyOfResponse;
                toAminoMsg(message: _9.QuerySupplyOfResponse): _9.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _9.QuerySupplyOfResponseProtoMsg): _9.QuerySupplyOfResponse;
                toProto(message: _9.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _9.QuerySupplyOfResponse): _9.QuerySupplyOfResponseProtoMsg;
            };
            QueryTotalSupplyWithoutOffsetRequest: {
                typeUrl: string;
                encode(message: _9.QueryTotalSupplyWithoutOffsetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryTotalSupplyWithoutOffsetRequest;
                fromPartial(object: Partial<_9.QueryTotalSupplyWithoutOffsetRequest>): _9.QueryTotalSupplyWithoutOffsetRequest;
                fromAmino(object: _9.QueryTotalSupplyWithoutOffsetRequestAmino): _9.QueryTotalSupplyWithoutOffsetRequest;
                toAmino(message: _9.QueryTotalSupplyWithoutOffsetRequest): _9.QueryTotalSupplyWithoutOffsetRequestAmino;
                fromAminoMsg(object: _9.QueryTotalSupplyWithoutOffsetRequestAminoMsg): _9.QueryTotalSupplyWithoutOffsetRequest;
                toAminoMsg(message: _9.QueryTotalSupplyWithoutOffsetRequest): _9.QueryTotalSupplyWithoutOffsetRequestAminoMsg;
                fromProtoMsg(message: _9.QueryTotalSupplyWithoutOffsetRequestProtoMsg): _9.QueryTotalSupplyWithoutOffsetRequest;
                toProto(message: _9.QueryTotalSupplyWithoutOffsetRequest): Uint8Array;
                toProtoMsg(message: _9.QueryTotalSupplyWithoutOffsetRequest): _9.QueryTotalSupplyWithoutOffsetRequestProtoMsg;
            };
            QueryTotalSupplyWithoutOffsetResponse: {
                typeUrl: string;
                encode(message: _9.QueryTotalSupplyWithoutOffsetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryTotalSupplyWithoutOffsetResponse;
                fromPartial(object: Partial<_9.QueryTotalSupplyWithoutOffsetResponse>): _9.QueryTotalSupplyWithoutOffsetResponse;
                fromAmino(object: _9.QueryTotalSupplyWithoutOffsetResponseAmino): _9.QueryTotalSupplyWithoutOffsetResponse;
                toAmino(message: _9.QueryTotalSupplyWithoutOffsetResponse): _9.QueryTotalSupplyWithoutOffsetResponseAmino;
                fromAminoMsg(object: _9.QueryTotalSupplyWithoutOffsetResponseAminoMsg): _9.QueryTotalSupplyWithoutOffsetResponse;
                toAminoMsg(message: _9.QueryTotalSupplyWithoutOffsetResponse): _9.QueryTotalSupplyWithoutOffsetResponseAminoMsg;
                fromProtoMsg(message: _9.QueryTotalSupplyWithoutOffsetResponseProtoMsg): _9.QueryTotalSupplyWithoutOffsetResponse;
                toProto(message: _9.QueryTotalSupplyWithoutOffsetResponse): Uint8Array;
                toProtoMsg(message: _9.QueryTotalSupplyWithoutOffsetResponse): _9.QueryTotalSupplyWithoutOffsetResponseProtoMsg;
            };
            QuerySupplyOfWithoutOffsetRequest: {
                typeUrl: string;
                encode(message: _9.QuerySupplyOfWithoutOffsetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QuerySupplyOfWithoutOffsetRequest;
                fromPartial(object: Partial<_9.QuerySupplyOfWithoutOffsetRequest>): _9.QuerySupplyOfWithoutOffsetRequest;
                fromAmino(object: _9.QuerySupplyOfWithoutOffsetRequestAmino): _9.QuerySupplyOfWithoutOffsetRequest;
                toAmino(message: _9.QuerySupplyOfWithoutOffsetRequest): _9.QuerySupplyOfWithoutOffsetRequestAmino;
                fromAminoMsg(object: _9.QuerySupplyOfWithoutOffsetRequestAminoMsg): _9.QuerySupplyOfWithoutOffsetRequest;
                toAminoMsg(message: _9.QuerySupplyOfWithoutOffsetRequest): _9.QuerySupplyOfWithoutOffsetRequestAminoMsg;
                fromProtoMsg(message: _9.QuerySupplyOfWithoutOffsetRequestProtoMsg): _9.QuerySupplyOfWithoutOffsetRequest;
                toProto(message: _9.QuerySupplyOfWithoutOffsetRequest): Uint8Array;
                toProtoMsg(message: _9.QuerySupplyOfWithoutOffsetRequest): _9.QuerySupplyOfWithoutOffsetRequestProtoMsg;
            };
            QuerySupplyOfWithoutOffsetResponse: {
                typeUrl: string;
                encode(message: _9.QuerySupplyOfWithoutOffsetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QuerySupplyOfWithoutOffsetResponse;
                fromPartial(object: Partial<_9.QuerySupplyOfWithoutOffsetResponse>): _9.QuerySupplyOfWithoutOffsetResponse;
                fromAmino(object: _9.QuerySupplyOfWithoutOffsetResponseAmino): _9.QuerySupplyOfWithoutOffsetResponse;
                toAmino(message: _9.QuerySupplyOfWithoutOffsetResponse): _9.QuerySupplyOfWithoutOffsetResponseAmino;
                fromAminoMsg(object: _9.QuerySupplyOfWithoutOffsetResponseAminoMsg): _9.QuerySupplyOfWithoutOffsetResponse;
                toAminoMsg(message: _9.QuerySupplyOfWithoutOffsetResponse): _9.QuerySupplyOfWithoutOffsetResponseAminoMsg;
                fromProtoMsg(message: _9.QuerySupplyOfWithoutOffsetResponseProtoMsg): _9.QuerySupplyOfWithoutOffsetResponse;
                toProto(message: _9.QuerySupplyOfWithoutOffsetResponse): Uint8Array;
                toProtoMsg(message: _9.QuerySupplyOfWithoutOffsetResponse): _9.QuerySupplyOfWithoutOffsetResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _9.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryParamsRequest;
                fromPartial(_: Partial<_9.QueryParamsRequest>): _9.QueryParamsRequest;
                fromAmino(_: _9.QueryParamsRequestAmino): _9.QueryParamsRequest;
                toAmino(_: _9.QueryParamsRequest): _9.QueryParamsRequestAmino;
                fromAminoMsg(object: _9.QueryParamsRequestAminoMsg): _9.QueryParamsRequest;
                toAminoMsg(message: _9.QueryParamsRequest): _9.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _9.QueryParamsRequestProtoMsg): _9.QueryParamsRequest;
                toProto(message: _9.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryParamsRequest): _9.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _9.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryParamsResponse;
                fromPartial(object: Partial<_9.QueryParamsResponse>): _9.QueryParamsResponse;
                fromAmino(object: _9.QueryParamsResponseAmino): _9.QueryParamsResponse;
                toAmino(message: _9.QueryParamsResponse): _9.QueryParamsResponseAmino;
                fromAminoMsg(object: _9.QueryParamsResponseAminoMsg): _9.QueryParamsResponse;
                toAminoMsg(message: _9.QueryParamsResponse): _9.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _9.QueryParamsResponseProtoMsg): _9.QueryParamsResponse;
                toProto(message: _9.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryParamsResponse): _9.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _9.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_9.QueryDenomsMetadataRequest>): _9.QueryDenomsMetadataRequest;
                fromAmino(object: _9.QueryDenomsMetadataRequestAmino): _9.QueryDenomsMetadataRequest;
                toAmino(message: _9.QueryDenomsMetadataRequest): _9.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _9.QueryDenomsMetadataRequestAminoMsg): _9.QueryDenomsMetadataRequest;
                toAminoMsg(message: _9.QueryDenomsMetadataRequest): _9.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _9.QueryDenomsMetadataRequestProtoMsg): _9.QueryDenomsMetadataRequest;
                toProto(message: _9.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _9.QueryDenomsMetadataRequest): _9.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _9.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_9.QueryDenomsMetadataResponse>): _9.QueryDenomsMetadataResponse;
                fromAmino(object: _9.QueryDenomsMetadataResponseAmino): _9.QueryDenomsMetadataResponse;
                toAmino(message: _9.QueryDenomsMetadataResponse): _9.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _9.QueryDenomsMetadataResponseAminoMsg): _9.QueryDenomsMetadataResponse;
                toAminoMsg(message: _9.QueryDenomsMetadataResponse): _9.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _9.QueryDenomsMetadataResponseProtoMsg): _9.QueryDenomsMetadataResponse;
                toProto(message: _9.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _9.QueryDenomsMetadataResponse): _9.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _9.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_9.QueryDenomMetadataRequest>): _9.QueryDenomMetadataRequest;
                fromAmino(object: _9.QueryDenomMetadataRequestAmino): _9.QueryDenomMetadataRequest;
                toAmino(message: _9.QueryDenomMetadataRequest): _9.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _9.QueryDenomMetadataRequestAminoMsg): _9.QueryDenomMetadataRequest;
                toAminoMsg(message: _9.QueryDenomMetadataRequest): _9.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _9.QueryDenomMetadataRequestProtoMsg): _9.QueryDenomMetadataRequest;
                toProto(message: _9.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _9.QueryDenomMetadataRequest): _9.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _9.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_9.QueryDenomMetadataResponse>): _9.QueryDenomMetadataResponse;
                fromAmino(object: _9.QueryDenomMetadataResponseAmino): _9.QueryDenomMetadataResponse;
                toAmino(message: _9.QueryDenomMetadataResponse): _9.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _9.QueryDenomMetadataResponseAminoMsg): _9.QueryDenomMetadataResponse;
                toAminoMsg(message: _9.QueryDenomMetadataResponse): _9.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _9.QueryDenomMetadataResponseProtoMsg): _9.QueryDenomMetadataResponse;
                toProto(message: _9.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _9.QueryDenomMetadataResponse): _9.QueryDenomMetadataResponseProtoMsg;
            };
            QueryBaseDenomRequest: {
                typeUrl: string;
                encode(message: _9.QueryBaseDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryBaseDenomRequest;
                fromPartial(object: Partial<_9.QueryBaseDenomRequest>): _9.QueryBaseDenomRequest;
                fromAmino(object: _9.QueryBaseDenomRequestAmino): _9.QueryBaseDenomRequest;
                toAmino(message: _9.QueryBaseDenomRequest): _9.QueryBaseDenomRequestAmino;
                fromAminoMsg(object: _9.QueryBaseDenomRequestAminoMsg): _9.QueryBaseDenomRequest;
                toAminoMsg(message: _9.QueryBaseDenomRequest): _9.QueryBaseDenomRequestAminoMsg;
                fromProtoMsg(message: _9.QueryBaseDenomRequestProtoMsg): _9.QueryBaseDenomRequest;
                toProto(message: _9.QueryBaseDenomRequest): Uint8Array;
                toProtoMsg(message: _9.QueryBaseDenomRequest): _9.QueryBaseDenomRequestProtoMsg;
            };
            QueryBaseDenomResponse: {
                typeUrl: string;
                encode(message: _9.QueryBaseDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryBaseDenomResponse;
                fromPartial(object: Partial<_9.QueryBaseDenomResponse>): _9.QueryBaseDenomResponse;
                fromAmino(object: _9.QueryBaseDenomResponseAmino): _9.QueryBaseDenomResponse;
                toAmino(message: _9.QueryBaseDenomResponse): _9.QueryBaseDenomResponseAmino;
                fromAminoMsg(object: _9.QueryBaseDenomResponseAminoMsg): _9.QueryBaseDenomResponse;
                toAminoMsg(message: _9.QueryBaseDenomResponse): _9.QueryBaseDenomResponseAminoMsg;
                fromProtoMsg(message: _9.QueryBaseDenomResponseProtoMsg): _9.QueryBaseDenomResponse;
                toProto(message: _9.QueryBaseDenomResponse): Uint8Array;
                toProtoMsg(message: _9.QueryBaseDenomResponse): _9.QueryBaseDenomResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _8.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GenesisState;
                fromPartial(object: Partial<_8.GenesisState>): _8.GenesisState;
                fromAmino(object: _8.GenesisStateAmino): _8.GenesisState;
                toAmino(message: _8.GenesisState): _8.GenesisStateAmino;
                fromAminoMsg(object: _8.GenesisStateAminoMsg): _8.GenesisState;
                toAminoMsg(message: _8.GenesisState): _8.GenesisStateAminoMsg;
                fromProtoMsg(message: _8.GenesisStateProtoMsg): _8.GenesisState;
                toProto(message: _8.GenesisState): Uint8Array;
                toProtoMsg(message: _8.GenesisState): _8.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _8.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Balance;
                fromPartial(object: Partial<_8.Balance>): _8.Balance;
                fromAmino(object: _8.BalanceAmino): _8.Balance;
                toAmino(message: _8.Balance): _8.BalanceAmino;
                fromAminoMsg(object: _8.BalanceAminoMsg): _8.Balance;
                toAminoMsg(message: _8.Balance): _8.BalanceAminoMsg;
                fromProtoMsg(message: _8.BalanceProtoMsg): _8.Balance;
                toProto(message: _8.Balance): Uint8Array;
                toProtoMsg(message: _8.Balance): _8.BalanceProtoMsg;
            };
            GenesisSupplyOffset: {
                typeUrl: string;
                encode(message: _8.GenesisSupplyOffset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GenesisSupplyOffset;
                fromPartial(object: Partial<_8.GenesisSupplyOffset>): _8.GenesisSupplyOffset;
                fromAmino(object: _8.GenesisSupplyOffsetAmino): _8.GenesisSupplyOffset;
                toAmino(message: _8.GenesisSupplyOffset): _8.GenesisSupplyOffsetAmino;
                fromAminoMsg(object: _8.GenesisSupplyOffsetAminoMsg): _8.GenesisSupplyOffset;
                toAminoMsg(message: _8.GenesisSupplyOffset): _8.GenesisSupplyOffsetAminoMsg;
                fromProtoMsg(message: _8.GenesisSupplyOffsetProtoMsg): _8.GenesisSupplyOffset;
                toProto(message: _8.GenesisSupplyOffset): Uint8Array;
                toProtoMsg(message: _8.GenesisSupplyOffset): _8.GenesisSupplyOffsetProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _7.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Params;
                fromPartial(object: Partial<_7.Params>): _7.Params;
                fromAmino(object: _7.ParamsAmino): _7.Params;
                toAmino(message: _7.Params): _7.ParamsAmino;
                fromAminoMsg(object: _7.ParamsAminoMsg): _7.Params;
                toAminoMsg(message: _7.Params): _7.ParamsAminoMsg;
                fromProtoMsg(message: _7.ParamsProtoMsg): _7.Params;
                toProto(message: _7.Params): Uint8Array;
                toProtoMsg(message: _7.Params): _7.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _7.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.SendEnabled;
                fromPartial(object: Partial<_7.SendEnabled>): _7.SendEnabled;
                fromAmino(object: _7.SendEnabledAmino): _7.SendEnabled;
                toAmino(message: _7.SendEnabled): _7.SendEnabledAmino;
                fromAminoMsg(object: _7.SendEnabledAminoMsg): _7.SendEnabled;
                toAminoMsg(message: _7.SendEnabled): _7.SendEnabledAminoMsg;
                fromProtoMsg(message: _7.SendEnabledProtoMsg): _7.SendEnabled;
                toProto(message: _7.SendEnabled): Uint8Array;
                toProtoMsg(message: _7.SendEnabled): _7.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _7.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Input;
                fromPartial(object: Partial<_7.Input>): _7.Input;
                fromAmino(object: _7.InputAmino): _7.Input;
                toAmino(message: _7.Input): _7.InputAmino;
                fromAminoMsg(object: _7.InputAminoMsg): _7.Input;
                toAminoMsg(message: _7.Input): _7.InputAminoMsg;
                fromProtoMsg(message: _7.InputProtoMsg): _7.Input;
                toProto(message: _7.Input): Uint8Array;
                toProtoMsg(message: _7.Input): _7.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _7.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Output;
                fromPartial(object: Partial<_7.Output>): _7.Output;
                fromAmino(object: _7.OutputAmino): _7.Output;
                toAmino(message: _7.Output): _7.OutputAmino;
                fromAminoMsg(object: _7.OutputAminoMsg): _7.Output;
                toAminoMsg(message: _7.Output): _7.OutputAminoMsg;
                fromProtoMsg(message: _7.OutputProtoMsg): _7.Output;
                toProto(message: _7.Output): Uint8Array;
                toProtoMsg(message: _7.Output): _7.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _7.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Supply;
                fromPartial(object: Partial<_7.Supply>): _7.Supply;
                fromAmino(object: _7.SupplyAmino): _7.Supply;
                toAmino(message: _7.Supply): _7.SupplyAmino;
                fromAminoMsg(object: _7.SupplyAminoMsg): _7.Supply;
                toAminoMsg(message: _7.Supply): _7.SupplyAminoMsg;
                fromProtoMsg(message: _7.SupplyProtoMsg): _7.Supply;
                toProto(message: _7.Supply): Uint8Array;
                toProtoMsg(message: _7.Supply): _7.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _7.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.DenomUnit;
                fromPartial(object: Partial<_7.DenomUnit>): _7.DenomUnit;
                fromAmino(object: _7.DenomUnitAmino): _7.DenomUnit;
                toAmino(message: _7.DenomUnit): _7.DenomUnitAmino;
                fromAminoMsg(object: _7.DenomUnitAminoMsg): _7.DenomUnit;
                toAminoMsg(message: _7.DenomUnit): _7.DenomUnitAminoMsg;
                fromProtoMsg(message: _7.DenomUnitProtoMsg): _7.DenomUnit;
                toProto(message: _7.DenomUnit): Uint8Array;
                toProtoMsg(message: _7.DenomUnit): _7.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _7.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Metadata;
                fromPartial(object: Partial<_7.Metadata>): _7.Metadata;
                fromAmino(object: _7.MetadataAmino): _7.Metadata;
                toAmino(message: _7.Metadata): _7.MetadataAmino;
                fromAminoMsg(object: _7.MetadataAminoMsg): _7.Metadata;
                toAminoMsg(message: _7.Metadata): _7.MetadataAminoMsg;
                fromProtoMsg(message: _7.MetadataProtoMsg): _7.Metadata;
                toProto(message: _7.Metadata): Uint8Array;
                toProtoMsg(message: _7.Metadata): _7.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _6.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.SendAuthorization;
                fromPartial(object: Partial<_6.SendAuthorization>): _6.SendAuthorization;
                fromAmino(object: _6.SendAuthorizationAmino): _6.SendAuthorization;
                toAmino(message: _6.SendAuthorization): _6.SendAuthorizationAmino;
                fromAminoMsg(object: _6.SendAuthorizationAminoMsg): _6.SendAuthorization;
                toAminoMsg(message: _6.SendAuthorization): _6.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _6.SendAuthorizationProtoMsg): _6.SendAuthorization;
                toProto(message: _6.SendAuthorization): Uint8Array;
                toProtoMsg(message: _6.SendAuthorization): _6.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _11.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.TxResponse;
                    fromPartial(object: Partial<_11.TxResponse>): _11.TxResponse;
                    fromAmino(object: _11.TxResponseAmino): _11.TxResponse;
                    toAmino(message: _11.TxResponse): _11.TxResponseAmino;
                    fromAminoMsg(object: _11.TxResponseAminoMsg): _11.TxResponse;
                    toAminoMsg(message: _11.TxResponse): _11.TxResponseAminoMsg;
                    fromProtoMsg(message: _11.TxResponseProtoMsg): _11.TxResponse;
                    toProto(message: _11.TxResponse): Uint8Array;
                    toProtoMsg(message: _11.TxResponse): _11.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _11.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.ABCIMessageLog;
                    fromPartial(object: Partial<_11.ABCIMessageLog>): _11.ABCIMessageLog;
                    fromAmino(object: _11.ABCIMessageLogAmino): _11.ABCIMessageLog;
                    toAmino(message: _11.ABCIMessageLog): _11.ABCIMessageLogAmino;
                    fromAminoMsg(object: _11.ABCIMessageLogAminoMsg): _11.ABCIMessageLog;
                    toAminoMsg(message: _11.ABCIMessageLog): _11.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _11.ABCIMessageLogProtoMsg): _11.ABCIMessageLog;
                    toProto(message: _11.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _11.ABCIMessageLog): _11.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _11.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.StringEvent;
                    fromPartial(object: Partial<_11.StringEvent>): _11.StringEvent;
                    fromAmino(object: _11.StringEventAmino): _11.StringEvent;
                    toAmino(message: _11.StringEvent): _11.StringEventAmino;
                    fromAminoMsg(object: _11.StringEventAminoMsg): _11.StringEvent;
                    toAminoMsg(message: _11.StringEvent): _11.StringEventAminoMsg;
                    fromProtoMsg(message: _11.StringEventProtoMsg): _11.StringEvent;
                    toProto(message: _11.StringEvent): Uint8Array;
                    toProtoMsg(message: _11.StringEvent): _11.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _11.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Attribute;
                    fromPartial(object: Partial<_11.Attribute>): _11.Attribute;
                    fromAmino(object: _11.AttributeAmino): _11.Attribute;
                    toAmino(message: _11.Attribute): _11.AttributeAmino;
                    fromAminoMsg(object: _11.AttributeAminoMsg): _11.Attribute;
                    toAminoMsg(message: _11.Attribute): _11.AttributeAminoMsg;
                    fromProtoMsg(message: _11.AttributeProtoMsg): _11.Attribute;
                    toProto(message: _11.Attribute): Uint8Array;
                    toProtoMsg(message: _11.Attribute): _11.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _11.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.GasInfo;
                    fromPartial(object: Partial<_11.GasInfo>): _11.GasInfo;
                    fromAmino(object: _11.GasInfoAmino): _11.GasInfo;
                    toAmino(message: _11.GasInfo): _11.GasInfoAmino;
                    fromAminoMsg(object: _11.GasInfoAminoMsg): _11.GasInfo;
                    toAminoMsg(message: _11.GasInfo): _11.GasInfoAminoMsg;
                    fromProtoMsg(message: _11.GasInfoProtoMsg): _11.GasInfo;
                    toProto(message: _11.GasInfo): Uint8Array;
                    toProtoMsg(message: _11.GasInfo): _11.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _11.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Result;
                    fromPartial(object: Partial<_11.Result>): _11.Result;
                    fromAmino(object: _11.ResultAmino): _11.Result;
                    toAmino(message: _11.Result): _11.ResultAmino;
                    fromAminoMsg(object: _11.ResultAminoMsg): _11.Result;
                    toAminoMsg(message: _11.Result): _11.ResultAminoMsg;
                    fromProtoMsg(message: _11.ResultProtoMsg): _11.Result;
                    toProto(message: _11.Result): Uint8Array;
                    toProtoMsg(message: _11.Result): _11.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _11.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.SimulationResponse;
                    fromPartial(object: Partial<_11.SimulationResponse>): _11.SimulationResponse;
                    fromAmino(object: _11.SimulationResponseAmino): _11.SimulationResponse;
                    toAmino(message: _11.SimulationResponse): _11.SimulationResponseAmino;
                    fromAminoMsg(object: _11.SimulationResponseAminoMsg): _11.SimulationResponse;
                    toAminoMsg(message: _11.SimulationResponse): _11.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _11.SimulationResponseProtoMsg): _11.SimulationResponse;
                    toProto(message: _11.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _11.SimulationResponse): _11.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _11.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.MsgData;
                    fromPartial(object: Partial<_11.MsgData>): _11.MsgData;
                    fromAmino(object: _11.MsgDataAmino): _11.MsgData;
                    toAmino(message: _11.MsgData): _11.MsgDataAmino;
                    fromAminoMsg(object: _11.MsgDataAminoMsg): _11.MsgData;
                    toAminoMsg(message: _11.MsgData): _11.MsgDataAminoMsg;
                    fromProtoMsg(message: _11.MsgDataProtoMsg): _11.MsgData;
                    toProto(message: _11.MsgData): Uint8Array;
                    toProtoMsg(message: _11.MsgData): _11.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _11.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.TxMsgData;
                    fromPartial(object: Partial<_11.TxMsgData>): _11.TxMsgData;
                    fromAmino(object: _11.TxMsgDataAmino): _11.TxMsgData;
                    toAmino(message: _11.TxMsgData): _11.TxMsgDataAmino;
                    fromAminoMsg(object: _11.TxMsgDataAminoMsg): _11.TxMsgData;
                    toAminoMsg(message: _11.TxMsgData): _11.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _11.TxMsgDataProtoMsg): _11.TxMsgData;
                    toProto(message: _11.TxMsgData): Uint8Array;
                    toProtoMsg(message: _11.TxMsgData): _11.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _11.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.SearchTxsResult;
                    fromPartial(object: Partial<_11.SearchTxsResult>): _11.SearchTxsResult;
                    fromAmino(object: _11.SearchTxsResultAmino): _11.SearchTxsResult;
                    toAmino(message: _11.SearchTxsResult): _11.SearchTxsResultAmino;
                    fromAminoMsg(object: _11.SearchTxsResultAminoMsg): _11.SearchTxsResult;
                    toAminoMsg(message: _11.SearchTxsResult): _11.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _11.SearchTxsResultProtoMsg): _11.SearchTxsResult;
                    toProto(message: _11.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _11.SearchTxsResult): _11.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _210.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _12.ConfigRequest): Promise<_12.ConfigResponse>;
                };
                LCDQueryClient: typeof _201.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _12.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.ConfigRequest;
                    fromPartial(_: Partial<_12.ConfigRequest>): _12.ConfigRequest;
                    fromAmino(_: _12.ConfigRequestAmino): _12.ConfigRequest;
                    toAmino(_: _12.ConfigRequest): _12.ConfigRequestAmino;
                    fromAminoMsg(object: _12.ConfigRequestAminoMsg): _12.ConfigRequest;
                    toAminoMsg(message: _12.ConfigRequest): _12.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _12.ConfigRequestProtoMsg): _12.ConfigRequest;
                    toProto(message: _12.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _12.ConfigRequest): _12.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _12.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.ConfigResponse;
                    fromPartial(object: Partial<_12.ConfigResponse>): _12.ConfigResponse;
                    fromAmino(object: _12.ConfigResponseAmino): _12.ConfigResponse;
                    toAmino(message: _12.ConfigResponse): _12.ConfigResponseAmino;
                    fromAminoMsg(object: _12.ConfigResponseAminoMsg): _12.ConfigResponse;
                    toAminoMsg(message: _12.ConfigResponse): _12.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _12.ConfigResponseProtoMsg): _12.ConfigResponse;
                    toProto(message: _12.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _12.ConfigResponse): _12.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _13.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.PageRequest;
                    fromPartial(object: Partial<_13.PageRequest>): _13.PageRequest;
                    fromAmino(object: _13.PageRequestAmino): _13.PageRequest;
                    toAmino(message: _13.PageRequest): _13.PageRequestAmino;
                    fromAminoMsg(object: _13.PageRequestAminoMsg): _13.PageRequest;
                    toAminoMsg(message: _13.PageRequest): _13.PageRequestAminoMsg;
                    fromProtoMsg(message: _13.PageRequestProtoMsg): _13.PageRequest;
                    toProto(message: _13.PageRequest): Uint8Array;
                    toProtoMsg(message: _13.PageRequest): _13.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _13.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.PageResponse;
                    fromPartial(object: Partial<_13.PageResponse>): _13.PageResponse;
                    fromAmino(object: _13.PageResponseAmino): _13.PageResponse;
                    toAmino(message: _13.PageResponse): _13.PageResponseAmino;
                    fromAminoMsg(object: _13.PageResponseAminoMsg): _13.PageResponse;
                    toAminoMsg(message: _13.PageResponse): _13.PageResponseAminoMsg;
                    fromProtoMsg(message: _13.PageResponseProtoMsg): _13.PageResponse;
                    toProto(message: _13.PageResponse): Uint8Array;
                    toProtoMsg(message: _13.PageResponse): _13.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _14.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.AppDescriptor;
                    fromPartial(object: Partial<_14.AppDescriptor>): _14.AppDescriptor;
                    fromAmino(object: _14.AppDescriptorAmino): _14.AppDescriptor;
                    toAmino(message: _14.AppDescriptor): _14.AppDescriptorAmino;
                    fromAminoMsg(object: _14.AppDescriptorAminoMsg): _14.AppDescriptor;
                    toAminoMsg(message: _14.AppDescriptor): _14.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _14.AppDescriptorProtoMsg): _14.AppDescriptor;
                    toProto(message: _14.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _14.AppDescriptor): _14.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _14.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.TxDescriptor;
                    fromPartial(object: Partial<_14.TxDescriptor>): _14.TxDescriptor;
                    fromAmino(object: _14.TxDescriptorAmino): _14.TxDescriptor;
                    toAmino(message: _14.TxDescriptor): _14.TxDescriptorAmino;
                    fromAminoMsg(object: _14.TxDescriptorAminoMsg): _14.TxDescriptor;
                    toAminoMsg(message: _14.TxDescriptor): _14.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _14.TxDescriptorProtoMsg): _14.TxDescriptor;
                    toProto(message: _14.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _14.TxDescriptor): _14.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _14.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.AuthnDescriptor;
                    fromPartial(object: Partial<_14.AuthnDescriptor>): _14.AuthnDescriptor;
                    fromAmino(object: _14.AuthnDescriptorAmino): _14.AuthnDescriptor;
                    toAmino(message: _14.AuthnDescriptor): _14.AuthnDescriptorAmino;
                    fromAminoMsg(object: _14.AuthnDescriptorAminoMsg): _14.AuthnDescriptor;
                    toAminoMsg(message: _14.AuthnDescriptor): _14.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _14.AuthnDescriptorProtoMsg): _14.AuthnDescriptor;
                    toProto(message: _14.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _14.AuthnDescriptor): _14.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _14.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.SigningModeDescriptor;
                    fromPartial(object: Partial<_14.SigningModeDescriptor>): _14.SigningModeDescriptor;
                    fromAmino(object: _14.SigningModeDescriptorAmino): _14.SigningModeDescriptor;
                    toAmino(message: _14.SigningModeDescriptor): _14.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _14.SigningModeDescriptorAminoMsg): _14.SigningModeDescriptor;
                    toAminoMsg(message: _14.SigningModeDescriptor): _14.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _14.SigningModeDescriptorProtoMsg): _14.SigningModeDescriptor;
                    toProto(message: _14.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _14.SigningModeDescriptor): _14.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _14.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.ChainDescriptor;
                    fromPartial(object: Partial<_14.ChainDescriptor>): _14.ChainDescriptor;
                    fromAmino(object: _14.ChainDescriptorAmino): _14.ChainDescriptor;
                    toAmino(message: _14.ChainDescriptor): _14.ChainDescriptorAmino;
                    fromAminoMsg(object: _14.ChainDescriptorAminoMsg): _14.ChainDescriptor;
                    toAminoMsg(message: _14.ChainDescriptor): _14.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _14.ChainDescriptorProtoMsg): _14.ChainDescriptor;
                    toProto(message: _14.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _14.ChainDescriptor): _14.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _14.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.CodecDescriptor;
                    fromPartial(object: Partial<_14.CodecDescriptor>): _14.CodecDescriptor;
                    fromAmino(object: _14.CodecDescriptorAmino): _14.CodecDescriptor;
                    toAmino(message: _14.CodecDescriptor): _14.CodecDescriptorAmino;
                    fromAminoMsg(object: _14.CodecDescriptorAminoMsg): _14.CodecDescriptor;
                    toAminoMsg(message: _14.CodecDescriptor): _14.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _14.CodecDescriptorProtoMsg): _14.CodecDescriptor;
                    toProto(message: _14.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _14.CodecDescriptor): _14.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _14.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.InterfaceDescriptor;
                    fromPartial(object: Partial<_14.InterfaceDescriptor>): _14.InterfaceDescriptor;
                    fromAmino(object: _14.InterfaceDescriptorAmino): _14.InterfaceDescriptor;
                    toAmino(message: _14.InterfaceDescriptor): _14.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _14.InterfaceDescriptorAminoMsg): _14.InterfaceDescriptor;
                    toAminoMsg(message: _14.InterfaceDescriptor): _14.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _14.InterfaceDescriptorProtoMsg): _14.InterfaceDescriptor;
                    toProto(message: _14.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _14.InterfaceDescriptor): _14.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _14.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_14.InterfaceImplementerDescriptor>): _14.InterfaceImplementerDescriptor;
                    fromAmino(object: _14.InterfaceImplementerDescriptorAmino): _14.InterfaceImplementerDescriptor;
                    toAmino(message: _14.InterfaceImplementerDescriptor): _14.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _14.InterfaceImplementerDescriptorAminoMsg): _14.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _14.InterfaceImplementerDescriptor): _14.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _14.InterfaceImplementerDescriptorProtoMsg): _14.InterfaceImplementerDescriptor;
                    toProto(message: _14.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _14.InterfaceImplementerDescriptor): _14.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _14.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_14.InterfaceAcceptingMessageDescriptor>): _14.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _14.InterfaceAcceptingMessageDescriptorAmino): _14.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _14.InterfaceAcceptingMessageDescriptor): _14.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _14.InterfaceAcceptingMessageDescriptorAminoMsg): _14.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _14.InterfaceAcceptingMessageDescriptor): _14.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _14.InterfaceAcceptingMessageDescriptorProtoMsg): _14.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _14.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _14.InterfaceAcceptingMessageDescriptor): _14.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _14.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.ConfigurationDescriptor;
                    fromPartial(object: Partial<_14.ConfigurationDescriptor>): _14.ConfigurationDescriptor;
                    fromAmino(object: _14.ConfigurationDescriptorAmino): _14.ConfigurationDescriptor;
                    toAmino(message: _14.ConfigurationDescriptor): _14.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _14.ConfigurationDescriptorAminoMsg): _14.ConfigurationDescriptor;
                    toAminoMsg(message: _14.ConfigurationDescriptor): _14.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _14.ConfigurationDescriptorProtoMsg): _14.ConfigurationDescriptor;
                    toProto(message: _14.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _14.ConfigurationDescriptor): _14.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _14.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgDescriptor;
                    fromPartial(object: Partial<_14.MsgDescriptor>): _14.MsgDescriptor;
                    fromAmino(object: _14.MsgDescriptorAmino): _14.MsgDescriptor;
                    toAmino(message: _14.MsgDescriptor): _14.MsgDescriptorAmino;
                    fromAminoMsg(object: _14.MsgDescriptorAminoMsg): _14.MsgDescriptor;
                    toAminoMsg(message: _14.MsgDescriptor): _14.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _14.MsgDescriptorProtoMsg): _14.MsgDescriptor;
                    toProto(message: _14.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _14.MsgDescriptor): _14.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _14.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_14.GetAuthnDescriptorRequest>): _14.GetAuthnDescriptorRequest;
                    fromAmino(_: _14.GetAuthnDescriptorRequestAmino): _14.GetAuthnDescriptorRequest;
                    toAmino(_: _14.GetAuthnDescriptorRequest): _14.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _14.GetAuthnDescriptorRequestAminoMsg): _14.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _14.GetAuthnDescriptorRequest): _14.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _14.GetAuthnDescriptorRequestProtoMsg): _14.GetAuthnDescriptorRequest;
                    toProto(message: _14.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _14.GetAuthnDescriptorRequest): _14.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _14.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_14.GetAuthnDescriptorResponse>): _14.GetAuthnDescriptorResponse;
                    fromAmino(object: _14.GetAuthnDescriptorResponseAmino): _14.GetAuthnDescriptorResponse;
                    toAmino(message: _14.GetAuthnDescriptorResponse): _14.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _14.GetAuthnDescriptorResponseAminoMsg): _14.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _14.GetAuthnDescriptorResponse): _14.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _14.GetAuthnDescriptorResponseProtoMsg): _14.GetAuthnDescriptorResponse;
                    toProto(message: _14.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _14.GetAuthnDescriptorResponse): _14.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _14.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_14.GetChainDescriptorRequest>): _14.GetChainDescriptorRequest;
                    fromAmino(_: _14.GetChainDescriptorRequestAmino): _14.GetChainDescriptorRequest;
                    toAmino(_: _14.GetChainDescriptorRequest): _14.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _14.GetChainDescriptorRequestAminoMsg): _14.GetChainDescriptorRequest;
                    toAminoMsg(message: _14.GetChainDescriptorRequest): _14.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _14.GetChainDescriptorRequestProtoMsg): _14.GetChainDescriptorRequest;
                    toProto(message: _14.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _14.GetChainDescriptorRequest): _14.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _14.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_14.GetChainDescriptorResponse>): _14.GetChainDescriptorResponse;
                    fromAmino(object: _14.GetChainDescriptorResponseAmino): _14.GetChainDescriptorResponse;
                    toAmino(message: _14.GetChainDescriptorResponse): _14.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _14.GetChainDescriptorResponseAminoMsg): _14.GetChainDescriptorResponse;
                    toAminoMsg(message: _14.GetChainDescriptorResponse): _14.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _14.GetChainDescriptorResponseProtoMsg): _14.GetChainDescriptorResponse;
                    toProto(message: _14.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _14.GetChainDescriptorResponse): _14.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _14.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_14.GetCodecDescriptorRequest>): _14.GetCodecDescriptorRequest;
                    fromAmino(_: _14.GetCodecDescriptorRequestAmino): _14.GetCodecDescriptorRequest;
                    toAmino(_: _14.GetCodecDescriptorRequest): _14.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _14.GetCodecDescriptorRequestAminoMsg): _14.GetCodecDescriptorRequest;
                    toAminoMsg(message: _14.GetCodecDescriptorRequest): _14.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _14.GetCodecDescriptorRequestProtoMsg): _14.GetCodecDescriptorRequest;
                    toProto(message: _14.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _14.GetCodecDescriptorRequest): _14.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _14.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_14.GetCodecDescriptorResponse>): _14.GetCodecDescriptorResponse;
                    fromAmino(object: _14.GetCodecDescriptorResponseAmino): _14.GetCodecDescriptorResponse;
                    toAmino(message: _14.GetCodecDescriptorResponse): _14.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _14.GetCodecDescriptorResponseAminoMsg): _14.GetCodecDescriptorResponse;
                    toAminoMsg(message: _14.GetCodecDescriptorResponse): _14.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _14.GetCodecDescriptorResponseProtoMsg): _14.GetCodecDescriptorResponse;
                    toProto(message: _14.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _14.GetCodecDescriptorResponse): _14.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _14.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_14.GetConfigurationDescriptorRequest>): _14.GetConfigurationDescriptorRequest;
                    fromAmino(_: _14.GetConfigurationDescriptorRequestAmino): _14.GetConfigurationDescriptorRequest;
                    toAmino(_: _14.GetConfigurationDescriptorRequest): _14.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _14.GetConfigurationDescriptorRequestAminoMsg): _14.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _14.GetConfigurationDescriptorRequest): _14.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _14.GetConfigurationDescriptorRequestProtoMsg): _14.GetConfigurationDescriptorRequest;
                    toProto(message: _14.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _14.GetConfigurationDescriptorRequest): _14.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _14.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_14.GetConfigurationDescriptorResponse>): _14.GetConfigurationDescriptorResponse;
                    fromAmino(object: _14.GetConfigurationDescriptorResponseAmino): _14.GetConfigurationDescriptorResponse;
                    toAmino(message: _14.GetConfigurationDescriptorResponse): _14.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _14.GetConfigurationDescriptorResponseAminoMsg): _14.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _14.GetConfigurationDescriptorResponse): _14.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _14.GetConfigurationDescriptorResponseProtoMsg): _14.GetConfigurationDescriptorResponse;
                    toProto(message: _14.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _14.GetConfigurationDescriptorResponse): _14.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _14.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_14.GetQueryServicesDescriptorRequest>): _14.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _14.GetQueryServicesDescriptorRequestAmino): _14.GetQueryServicesDescriptorRequest;
                    toAmino(_: _14.GetQueryServicesDescriptorRequest): _14.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _14.GetQueryServicesDescriptorRequestAminoMsg): _14.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _14.GetQueryServicesDescriptorRequest): _14.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _14.GetQueryServicesDescriptorRequestProtoMsg): _14.GetQueryServicesDescriptorRequest;
                    toProto(message: _14.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _14.GetQueryServicesDescriptorRequest): _14.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _14.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_14.GetQueryServicesDescriptorResponse>): _14.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _14.GetQueryServicesDescriptorResponseAmino): _14.GetQueryServicesDescriptorResponse;
                    toAmino(message: _14.GetQueryServicesDescriptorResponse): _14.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _14.GetQueryServicesDescriptorResponseAminoMsg): _14.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _14.GetQueryServicesDescriptorResponse): _14.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _14.GetQueryServicesDescriptorResponseProtoMsg): _14.GetQueryServicesDescriptorResponse;
                    toProto(message: _14.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _14.GetQueryServicesDescriptorResponse): _14.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _14.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_14.GetTxDescriptorRequest>): _14.GetTxDescriptorRequest;
                    fromAmino(_: _14.GetTxDescriptorRequestAmino): _14.GetTxDescriptorRequest;
                    toAmino(_: _14.GetTxDescriptorRequest): _14.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _14.GetTxDescriptorRequestAminoMsg): _14.GetTxDescriptorRequest;
                    toAminoMsg(message: _14.GetTxDescriptorRequest): _14.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _14.GetTxDescriptorRequestProtoMsg): _14.GetTxDescriptorRequest;
                    toProto(message: _14.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _14.GetTxDescriptorRequest): _14.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _14.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_14.GetTxDescriptorResponse>): _14.GetTxDescriptorResponse;
                    fromAmino(object: _14.GetTxDescriptorResponseAmino): _14.GetTxDescriptorResponse;
                    toAmino(message: _14.GetTxDescriptorResponse): _14.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _14.GetTxDescriptorResponseAminoMsg): _14.GetTxDescriptorResponse;
                    toAminoMsg(message: _14.GetTxDescriptorResponse): _14.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _14.GetTxDescriptorResponseProtoMsg): _14.GetTxDescriptorResponse;
                    toProto(message: _14.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _14.GetTxDescriptorResponse): _14.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _14.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryServicesDescriptor;
                    fromPartial(object: Partial<_14.QueryServicesDescriptor>): _14.QueryServicesDescriptor;
                    fromAmino(object: _14.QueryServicesDescriptorAmino): _14.QueryServicesDescriptor;
                    toAmino(message: _14.QueryServicesDescriptor): _14.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _14.QueryServicesDescriptorAminoMsg): _14.QueryServicesDescriptor;
                    toAminoMsg(message: _14.QueryServicesDescriptor): _14.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _14.QueryServicesDescriptorProtoMsg): _14.QueryServicesDescriptor;
                    toProto(message: _14.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _14.QueryServicesDescriptor): _14.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _14.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryServiceDescriptor;
                    fromPartial(object: Partial<_14.QueryServiceDescriptor>): _14.QueryServiceDescriptor;
                    fromAmino(object: _14.QueryServiceDescriptorAmino): _14.QueryServiceDescriptor;
                    toAmino(message: _14.QueryServiceDescriptor): _14.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _14.QueryServiceDescriptorAminoMsg): _14.QueryServiceDescriptor;
                    toAminoMsg(message: _14.QueryServiceDescriptor): _14.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _14.QueryServiceDescriptorProtoMsg): _14.QueryServiceDescriptor;
                    toProto(message: _14.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _14.QueryServiceDescriptor): _14.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _14.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryMethodDescriptor;
                    fromPartial(object: Partial<_14.QueryMethodDescriptor>): _14.QueryMethodDescriptor;
                    fromAmino(object: _14.QueryMethodDescriptorAmino): _14.QueryMethodDescriptor;
                    toAmino(message: _14.QueryMethodDescriptor): _14.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _14.QueryMethodDescriptorAminoMsg): _14.QueryMethodDescriptor;
                    toAminoMsg(message: _14.QueryMethodDescriptor): _14.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _14.QueryMethodDescriptorProtoMsg): _14.QueryMethodDescriptor;
                    toProto(message: _14.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _14.QueryMethodDescriptor): _14.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _15.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Coin;
                fromPartial(object: Partial<_15.Coin>): _15.Coin;
                fromAmino(object: _15.CoinAmino): _15.Coin;
                toAmino(message: _15.Coin): _15.CoinAmino;
                fromAminoMsg(object: _15.CoinAminoMsg): _15.Coin;
                toAminoMsg(message: _15.Coin): _15.CoinAminoMsg;
                fromProtoMsg(message: _15.CoinProtoMsg): _15.Coin;
                toProto(message: _15.Coin): Uint8Array;
                toProtoMsg(message: _15.Coin): _15.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _15.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.DecCoin;
                fromPartial(object: Partial<_15.DecCoin>): _15.DecCoin;
                fromAmino(object: _15.DecCoinAmino): _15.DecCoin;
                toAmino(message: _15.DecCoin): _15.DecCoinAmino;
                fromAminoMsg(object: _15.DecCoinAminoMsg): _15.DecCoin;
                toAminoMsg(message: _15.DecCoin): _15.DecCoinAminoMsg;
                fromProtoMsg(message: _15.DecCoinProtoMsg): _15.DecCoin;
                toProto(message: _15.DecCoin): Uint8Array;
                toProtoMsg(message: _15.DecCoin): _15.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _15.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.IntProto;
                fromPartial(object: Partial<_15.IntProto>): _15.IntProto;
                fromAmino(object: _15.IntProtoAmino): _15.IntProto;
                toAmino(message: _15.IntProto): _15.IntProtoAmino;
                fromAminoMsg(object: _15.IntProtoAminoMsg): _15.IntProto;
                toAminoMsg(message: _15.IntProto): _15.IntProtoAminoMsg;
                fromProtoMsg(message: _15.IntProtoProtoMsg): _15.IntProto;
                toProto(message: _15.IntProto): Uint8Array;
                toProtoMsg(message: _15.IntProto): _15.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _15.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.DecProto;
                fromPartial(object: Partial<_15.DecProto>): _15.DecProto;
                fromAmino(object: _15.DecProtoAmino): _15.DecProto;
                toAmino(message: _15.DecProto): _15.DecProtoAmino;
                fromAminoMsg(object: _15.DecProtoAminoMsg): _15.DecProto;
                toAminoMsg(message: _15.DecProto): _15.DecProtoAminoMsg;
                fromProtoMsg(message: _15.DecProtoProtoMsg): _15.DecProto;
                toProto(message: _15.DecProto): Uint8Array;
                toProtoMsg(message: _15.DecProto): _15.DecProtoProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _16.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.PubKey;
                fromPartial(object: Partial<_16.PubKey>): _16.PubKey;
                fromAmino(object: _16.PubKeyAmino): _16.PubKey;
                toAmino(message: _16.PubKey): _16.PubKeyAmino;
                fromAminoMsg(object: _16.PubKeyAminoMsg): _16.PubKey;
                toAminoMsg(message: _16.PubKey): _16.PubKeyAminoMsg;
                fromProtoMsg(message: _16.PubKeyProtoMsg): _16.PubKey;
                toProto(message: _16.PubKey): Uint8Array;
                toProtoMsg(message: _16.PubKey): _16.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _16.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.PrivKey;
                fromPartial(object: Partial<_16.PrivKey>): _16.PrivKey;
                fromAmino(object: _16.PrivKeyAmino): _16.PrivKey;
                toAmino(message: _16.PrivKey): _16.PrivKeyAmino;
                fromAminoMsg(object: _16.PrivKeyAminoMsg): _16.PrivKey;
                toAminoMsg(message: _16.PrivKey): _16.PrivKeyAminoMsg;
                fromProtoMsg(message: _16.PrivKeyProtoMsg): _16.PrivKey;
                toProto(message: _16.PrivKey): Uint8Array;
                toProtoMsg(message: _16.PrivKey): _16.PrivKeyProtoMsg;
            };
        };
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _17.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.LegacyAminoPubKey;
                fromPartial(object: Partial<_17.LegacyAminoPubKey>): _17.LegacyAminoPubKey;
                fromAmino(object: _17.LegacyAminoPubKeyAmino): _17.LegacyAminoPubKey;
                toAmino(message: _17.LegacyAminoPubKey): _17.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _17.LegacyAminoPubKeyAminoMsg): _17.LegacyAminoPubKey;
                toAminoMsg(message: _17.LegacyAminoPubKey): _17.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _17.LegacyAminoPubKeyProtoMsg): _17.LegacyAminoPubKey;
                toProto(message: _17.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _17.LegacyAminoPubKey): _17.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _18.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.PubKey;
                fromPartial(object: Partial<_18.PubKey>): _18.PubKey;
                fromAmino(object: _18.PubKeyAmino): _18.PubKey;
                toAmino(message: _18.PubKey): _18.PubKeyAmino;
                fromAminoMsg(object: _18.PubKeyAminoMsg): _18.PubKey;
                toAminoMsg(message: _18.PubKey): _18.PubKeyAminoMsg;
                fromProtoMsg(message: _18.PubKeyProtoMsg): _18.PubKey;
                toProto(message: _18.PubKey): Uint8Array;
                toProtoMsg(message: _18.PubKey): _18.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _18.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.PrivKey;
                fromPartial(object: Partial<_18.PrivKey>): _18.PrivKey;
                fromAmino(object: _18.PrivKeyAmino): _18.PrivKey;
                toAmino(message: _18.PrivKey): _18.PrivKeyAmino;
                fromAminoMsg(object: _18.PrivKeyAminoMsg): _18.PrivKey;
                toAminoMsg(message: _18.PrivKey): _18.PrivKeyAminoMsg;
                fromProtoMsg(message: _18.PrivKeyProtoMsg): _18.PrivKey;
                toProto(message: _18.PrivKey): Uint8Array;
                toProtoMsg(message: _18.PrivKey): _18.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _19.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.PubKey;
                fromPartial(object: Partial<_19.PubKey>): _19.PubKey;
                fromAmino(object: _19.PubKeyAmino): _19.PubKey;
                toAmino(message: _19.PubKey): _19.PubKeyAmino;
                fromAminoMsg(object: _19.PubKeyAminoMsg): _19.PubKey;
                toAminoMsg(message: _19.PubKey): _19.PubKeyAminoMsg;
                fromProtoMsg(message: _19.PubKeyProtoMsg): _19.PubKey;
                toProto(message: _19.PubKey): Uint8Array;
                toProtoMsg(message: _19.PubKey): _19.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _19.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.PrivKey;
                fromPartial(object: Partial<_19.PrivKey>): _19.PrivKey;
                fromAmino(object: _19.PrivKeyAmino): _19.PrivKey;
                toAmino(message: _19.PrivKey): _19.PrivKeyAmino;
                fromAminoMsg(object: _19.PrivKeyAminoMsg): _19.PrivKey;
                toAminoMsg(message: _19.PrivKey): _19.PrivKeyAminoMsg;
                fromProtoMsg(message: _19.PrivKeyProtoMsg): _19.PrivKey;
                toProto(message: _19.PrivKey): Uint8Array;
                toProtoMsg(message: _19.PrivKey): _19.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _20.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.BIP44Params;
                    fromPartial(object: Partial<_20.BIP44Params>): _20.BIP44Params;
                    fromAmino(object: _20.BIP44ParamsAmino): _20.BIP44Params;
                    toAmino(message: _20.BIP44Params): _20.BIP44ParamsAmino;
                    fromAminoMsg(object: _20.BIP44ParamsAminoMsg): _20.BIP44Params;
                    toAminoMsg(message: _20.BIP44Params): _20.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _20.BIP44ParamsProtoMsg): _20.BIP44Params;
                    toProto(message: _20.BIP44Params): Uint8Array;
                    toProtoMsg(message: _20.BIP44Params): _20.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _21.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Record;
                    fromPartial(object: Partial<_21.Record>): _21.Record;
                    fromAmino(object: _21.RecordAmino): _21.Record;
                    toAmino(message: _21.Record): _21.RecordAmino;
                    fromAminoMsg(object: _21.RecordAminoMsg): _21.Record;
                    toAminoMsg(message: _21.Record): _21.RecordAminoMsg;
                    fromProtoMsg(message: _21.RecordProtoMsg): _21.Record;
                    toProto(message: _21.Record): Uint8Array;
                    toProtoMsg(message: _21.Record): _21.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _21.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Record_Local;
                    fromPartial(object: Partial<_21.Record_Local>): _21.Record_Local;
                    fromAmino(object: _21.Record_LocalAmino): _21.Record_Local;
                    toAmino(message: _21.Record_Local): _21.Record_LocalAmino;
                    fromAminoMsg(object: _21.Record_LocalAminoMsg): _21.Record_Local;
                    toAminoMsg(message: _21.Record_Local): _21.Record_LocalAminoMsg;
                    fromProtoMsg(message: _21.Record_LocalProtoMsg): _21.Record_Local;
                    toProto(message: _21.Record_Local): Uint8Array;
                    toProtoMsg(message: _21.Record_Local): _21.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _21.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Record_Ledger;
                    fromPartial(object: Partial<_21.Record_Ledger>): _21.Record_Ledger;
                    fromAmino(object: _21.Record_LedgerAmino): _21.Record_Ledger;
                    toAmino(message: _21.Record_Ledger): _21.Record_LedgerAmino;
                    fromAminoMsg(object: _21.Record_LedgerAminoMsg): _21.Record_Ledger;
                    toAminoMsg(message: _21.Record_Ledger): _21.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _21.Record_LedgerProtoMsg): _21.Record_Ledger;
                    toProto(message: _21.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _21.Record_Ledger): _21.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _21.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Record_Multi;
                    fromPartial(_: Partial<_21.Record_Multi>): _21.Record_Multi;
                    fromAmino(_: _21.Record_MultiAmino): _21.Record_Multi;
                    toAmino(_: _21.Record_Multi): _21.Record_MultiAmino;
                    fromAminoMsg(object: _21.Record_MultiAminoMsg): _21.Record_Multi;
                    toAminoMsg(message: _21.Record_Multi): _21.Record_MultiAminoMsg;
                    fromProtoMsg(message: _21.Record_MultiProtoMsg): _21.Record_Multi;
                    toProto(message: _21.Record_Multi): Uint8Array;
                    toProtoMsg(message: _21.Record_Multi): _21.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _21.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Record_Offline;
                    fromPartial(_: Partial<_21.Record_Offline>): _21.Record_Offline;
                    fromAmino(_: _21.Record_OfflineAmino): _21.Record_Offline;
                    toAmino(_: _21.Record_Offline): _21.Record_OfflineAmino;
                    fromAminoMsg(object: _21.Record_OfflineAminoMsg): _21.Record_Offline;
                    toAminoMsg(message: _21.Record_Offline): _21.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _21.Record_OfflineProtoMsg): _21.Record_Offline;
                    toProto(message: _21.Record_Offline): Uint8Array;
                    toProtoMsg(message: _21.Record_Offline): _21.Record_OfflineProtoMsg;
                };
            };
        }
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _219.MsgClientImpl;
            QueryClientImpl: typeof _211.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _24.QueryParamsRequest): Promise<_24.QueryParamsResponse>;
                validatorOutstandingRewards(request: _24.QueryValidatorOutstandingRewardsRequest): Promise<_24.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _24.QueryValidatorCommissionRequest): Promise<_24.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _24.QueryValidatorSlashesRequest): Promise<_24.QueryValidatorSlashesResponse>;
                delegationRewards(request: _24.QueryDelegationRewardsRequest): Promise<_24.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _24.QueryDelegationTotalRewardsRequest): Promise<_24.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _24.QueryDelegatorValidatorsRequest): Promise<_24.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _24.QueryDelegatorWithdrawAddressRequest): Promise<_24.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _24.QueryCommunityPoolRequest): Promise<_24.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _202.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _25.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _25.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _25.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _25.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _25.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _25.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _25.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _25.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _25.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _25.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _25.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _25.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _25.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _25.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _25.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _25.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _25.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _25.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _25.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _25.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _25.MsgSetWithdrawAddress) => _25.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _25.MsgSetWithdrawAddressAmino) => _25.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _25.MsgWithdrawDelegatorReward) => _25.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _25.MsgWithdrawDelegatorRewardAmino) => _25.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _25.MsgWithdrawValidatorCommission) => _25.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _25.MsgWithdrawValidatorCommissionAmino) => _25.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _25.MsgFundCommunityPool) => _25.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _25.MsgFundCommunityPoolAmino) => _25.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _25.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_25.MsgSetWithdrawAddress>): _25.MsgSetWithdrawAddress;
                fromAmino(object: _25.MsgSetWithdrawAddressAmino): _25.MsgSetWithdrawAddress;
                toAmino(message: _25.MsgSetWithdrawAddress): _25.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _25.MsgSetWithdrawAddressAminoMsg): _25.MsgSetWithdrawAddress;
                toAminoMsg(message: _25.MsgSetWithdrawAddress): _25.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _25.MsgSetWithdrawAddressProtoMsg): _25.MsgSetWithdrawAddress;
                toProto(message: _25.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _25.MsgSetWithdrawAddress): _25.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _25.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_25.MsgSetWithdrawAddressResponse>): _25.MsgSetWithdrawAddressResponse;
                fromAmino(_: _25.MsgSetWithdrawAddressResponseAmino): _25.MsgSetWithdrawAddressResponse;
                toAmino(_: _25.MsgSetWithdrawAddressResponse): _25.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _25.MsgSetWithdrawAddressResponseAminoMsg): _25.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _25.MsgSetWithdrawAddressResponse): _25.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _25.MsgSetWithdrawAddressResponseProtoMsg): _25.MsgSetWithdrawAddressResponse;
                toProto(message: _25.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _25.MsgSetWithdrawAddressResponse): _25.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _25.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_25.MsgWithdrawDelegatorReward>): _25.MsgWithdrawDelegatorReward;
                fromAmino(object: _25.MsgWithdrawDelegatorRewardAmino): _25.MsgWithdrawDelegatorReward;
                toAmino(message: _25.MsgWithdrawDelegatorReward): _25.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _25.MsgWithdrawDelegatorRewardAminoMsg): _25.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _25.MsgWithdrawDelegatorReward): _25.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _25.MsgWithdrawDelegatorRewardProtoMsg): _25.MsgWithdrawDelegatorReward;
                toProto(message: _25.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _25.MsgWithdrawDelegatorReward): _25.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(_: _25.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_25.MsgWithdrawDelegatorRewardResponse>): _25.MsgWithdrawDelegatorRewardResponse;
                fromAmino(_: _25.MsgWithdrawDelegatorRewardResponseAmino): _25.MsgWithdrawDelegatorRewardResponse;
                toAmino(_: _25.MsgWithdrawDelegatorRewardResponse): _25.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _25.MsgWithdrawDelegatorRewardResponseAminoMsg): _25.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _25.MsgWithdrawDelegatorRewardResponse): _25.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _25.MsgWithdrawDelegatorRewardResponseProtoMsg): _25.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _25.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _25.MsgWithdrawDelegatorRewardResponse): _25.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _25.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_25.MsgWithdrawValidatorCommission>): _25.MsgWithdrawValidatorCommission;
                fromAmino(object: _25.MsgWithdrawValidatorCommissionAmino): _25.MsgWithdrawValidatorCommission;
                toAmino(message: _25.MsgWithdrawValidatorCommission): _25.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _25.MsgWithdrawValidatorCommissionAminoMsg): _25.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _25.MsgWithdrawValidatorCommission): _25.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _25.MsgWithdrawValidatorCommissionProtoMsg): _25.MsgWithdrawValidatorCommission;
                toProto(message: _25.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _25.MsgWithdrawValidatorCommission): _25.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(_: _25.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_25.MsgWithdrawValidatorCommissionResponse>): _25.MsgWithdrawValidatorCommissionResponse;
                fromAmino(_: _25.MsgWithdrawValidatorCommissionResponseAmino): _25.MsgWithdrawValidatorCommissionResponse;
                toAmino(_: _25.MsgWithdrawValidatorCommissionResponse): _25.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _25.MsgWithdrawValidatorCommissionResponseAminoMsg): _25.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _25.MsgWithdrawValidatorCommissionResponse): _25.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _25.MsgWithdrawValidatorCommissionResponseProtoMsg): _25.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _25.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _25.MsgWithdrawValidatorCommissionResponse): _25.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _25.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgFundCommunityPool;
                fromPartial(object: Partial<_25.MsgFundCommunityPool>): _25.MsgFundCommunityPool;
                fromAmino(object: _25.MsgFundCommunityPoolAmino): _25.MsgFundCommunityPool;
                toAmino(message: _25.MsgFundCommunityPool): _25.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _25.MsgFundCommunityPoolAminoMsg): _25.MsgFundCommunityPool;
                toAminoMsg(message: _25.MsgFundCommunityPool): _25.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _25.MsgFundCommunityPoolProtoMsg): _25.MsgFundCommunityPool;
                toProto(message: _25.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _25.MsgFundCommunityPool): _25.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _25.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_25.MsgFundCommunityPoolResponse>): _25.MsgFundCommunityPoolResponse;
                fromAmino(_: _25.MsgFundCommunityPoolResponseAmino): _25.MsgFundCommunityPoolResponse;
                toAmino(_: _25.MsgFundCommunityPoolResponse): _25.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _25.MsgFundCommunityPoolResponseAminoMsg): _25.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _25.MsgFundCommunityPoolResponse): _25.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _25.MsgFundCommunityPoolResponseProtoMsg): _25.MsgFundCommunityPoolResponse;
                toProto(message: _25.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _25.MsgFundCommunityPoolResponse): _25.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _24.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryParamsRequest;
                fromPartial(_: Partial<_24.QueryParamsRequest>): _24.QueryParamsRequest;
                fromAmino(_: _24.QueryParamsRequestAmino): _24.QueryParamsRequest;
                toAmino(_: _24.QueryParamsRequest): _24.QueryParamsRequestAmino;
                fromAminoMsg(object: _24.QueryParamsRequestAminoMsg): _24.QueryParamsRequest;
                toAminoMsg(message: _24.QueryParamsRequest): _24.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _24.QueryParamsRequestProtoMsg): _24.QueryParamsRequest;
                toProto(message: _24.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _24.QueryParamsRequest): _24.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _24.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryParamsResponse;
                fromPartial(object: Partial<_24.QueryParamsResponse>): _24.QueryParamsResponse;
                fromAmino(object: _24.QueryParamsResponseAmino): _24.QueryParamsResponse;
                toAmino(message: _24.QueryParamsResponse): _24.QueryParamsResponseAmino;
                fromAminoMsg(object: _24.QueryParamsResponseAminoMsg): _24.QueryParamsResponse;
                toAminoMsg(message: _24.QueryParamsResponse): _24.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _24.QueryParamsResponseProtoMsg): _24.QueryParamsResponse;
                toProto(message: _24.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _24.QueryParamsResponse): _24.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _24.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_24.QueryValidatorOutstandingRewardsRequest>): _24.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _24.QueryValidatorOutstandingRewardsRequestAmino): _24.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _24.QueryValidatorOutstandingRewardsRequest): _24.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _24.QueryValidatorOutstandingRewardsRequestAminoMsg): _24.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _24.QueryValidatorOutstandingRewardsRequest): _24.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _24.QueryValidatorOutstandingRewardsRequestProtoMsg): _24.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _24.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _24.QueryValidatorOutstandingRewardsRequest): _24.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _24.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_24.QueryValidatorOutstandingRewardsResponse>): _24.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _24.QueryValidatorOutstandingRewardsResponseAmino): _24.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _24.QueryValidatorOutstandingRewardsResponse): _24.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _24.QueryValidatorOutstandingRewardsResponseAminoMsg): _24.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _24.QueryValidatorOutstandingRewardsResponse): _24.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _24.QueryValidatorOutstandingRewardsResponseProtoMsg): _24.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _24.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _24.QueryValidatorOutstandingRewardsResponse): _24.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _24.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_24.QueryValidatorCommissionRequest>): _24.QueryValidatorCommissionRequest;
                fromAmino(object: _24.QueryValidatorCommissionRequestAmino): _24.QueryValidatorCommissionRequest;
                toAmino(message: _24.QueryValidatorCommissionRequest): _24.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _24.QueryValidatorCommissionRequestAminoMsg): _24.QueryValidatorCommissionRequest;
                toAminoMsg(message: _24.QueryValidatorCommissionRequest): _24.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _24.QueryValidatorCommissionRequestProtoMsg): _24.QueryValidatorCommissionRequest;
                toProto(message: _24.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _24.QueryValidatorCommissionRequest): _24.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _24.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_24.QueryValidatorCommissionResponse>): _24.QueryValidatorCommissionResponse;
                fromAmino(object: _24.QueryValidatorCommissionResponseAmino): _24.QueryValidatorCommissionResponse;
                toAmino(message: _24.QueryValidatorCommissionResponse): _24.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _24.QueryValidatorCommissionResponseAminoMsg): _24.QueryValidatorCommissionResponse;
                toAminoMsg(message: _24.QueryValidatorCommissionResponse): _24.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _24.QueryValidatorCommissionResponseProtoMsg): _24.QueryValidatorCommissionResponse;
                toProto(message: _24.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _24.QueryValidatorCommissionResponse): _24.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _24.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_24.QueryValidatorSlashesRequest>): _24.QueryValidatorSlashesRequest;
                fromAmino(object: _24.QueryValidatorSlashesRequestAmino): _24.QueryValidatorSlashesRequest;
                toAmino(message: _24.QueryValidatorSlashesRequest): _24.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _24.QueryValidatorSlashesRequestAminoMsg): _24.QueryValidatorSlashesRequest;
                toAminoMsg(message: _24.QueryValidatorSlashesRequest): _24.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _24.QueryValidatorSlashesRequestProtoMsg): _24.QueryValidatorSlashesRequest;
                toProto(message: _24.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _24.QueryValidatorSlashesRequest): _24.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _24.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_24.QueryValidatorSlashesResponse>): _24.QueryValidatorSlashesResponse;
                fromAmino(object: _24.QueryValidatorSlashesResponseAmino): _24.QueryValidatorSlashesResponse;
                toAmino(message: _24.QueryValidatorSlashesResponse): _24.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _24.QueryValidatorSlashesResponseAminoMsg): _24.QueryValidatorSlashesResponse;
                toAminoMsg(message: _24.QueryValidatorSlashesResponse): _24.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _24.QueryValidatorSlashesResponseProtoMsg): _24.QueryValidatorSlashesResponse;
                toProto(message: _24.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _24.QueryValidatorSlashesResponse): _24.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _24.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_24.QueryDelegationRewardsRequest>): _24.QueryDelegationRewardsRequest;
                fromAmino(object: _24.QueryDelegationRewardsRequestAmino): _24.QueryDelegationRewardsRequest;
                toAmino(message: _24.QueryDelegationRewardsRequest): _24.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _24.QueryDelegationRewardsRequestAminoMsg): _24.QueryDelegationRewardsRequest;
                toAminoMsg(message: _24.QueryDelegationRewardsRequest): _24.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _24.QueryDelegationRewardsRequestProtoMsg): _24.QueryDelegationRewardsRequest;
                toProto(message: _24.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _24.QueryDelegationRewardsRequest): _24.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _24.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_24.QueryDelegationRewardsResponse>): _24.QueryDelegationRewardsResponse;
                fromAmino(object: _24.QueryDelegationRewardsResponseAmino): _24.QueryDelegationRewardsResponse;
                toAmino(message: _24.QueryDelegationRewardsResponse): _24.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _24.QueryDelegationRewardsResponseAminoMsg): _24.QueryDelegationRewardsResponse;
                toAminoMsg(message: _24.QueryDelegationRewardsResponse): _24.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _24.QueryDelegationRewardsResponseProtoMsg): _24.QueryDelegationRewardsResponse;
                toProto(message: _24.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _24.QueryDelegationRewardsResponse): _24.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _24.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_24.QueryDelegationTotalRewardsRequest>): _24.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _24.QueryDelegationTotalRewardsRequestAmino): _24.QueryDelegationTotalRewardsRequest;
                toAmino(message: _24.QueryDelegationTotalRewardsRequest): _24.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _24.QueryDelegationTotalRewardsRequestAminoMsg): _24.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _24.QueryDelegationTotalRewardsRequest): _24.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _24.QueryDelegationTotalRewardsRequestProtoMsg): _24.QueryDelegationTotalRewardsRequest;
                toProto(message: _24.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _24.QueryDelegationTotalRewardsRequest): _24.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _24.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_24.QueryDelegationTotalRewardsResponse>): _24.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _24.QueryDelegationTotalRewardsResponseAmino): _24.QueryDelegationTotalRewardsResponse;
                toAmino(message: _24.QueryDelegationTotalRewardsResponse): _24.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _24.QueryDelegationTotalRewardsResponseAminoMsg): _24.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _24.QueryDelegationTotalRewardsResponse): _24.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _24.QueryDelegationTotalRewardsResponseProtoMsg): _24.QueryDelegationTotalRewardsResponse;
                toProto(message: _24.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _24.QueryDelegationTotalRewardsResponse): _24.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _24.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_24.QueryDelegatorValidatorsRequest>): _24.QueryDelegatorValidatorsRequest;
                fromAmino(object: _24.QueryDelegatorValidatorsRequestAmino): _24.QueryDelegatorValidatorsRequest;
                toAmino(message: _24.QueryDelegatorValidatorsRequest): _24.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _24.QueryDelegatorValidatorsRequestAminoMsg): _24.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _24.QueryDelegatorValidatorsRequest): _24.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _24.QueryDelegatorValidatorsRequestProtoMsg): _24.QueryDelegatorValidatorsRequest;
                toProto(message: _24.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _24.QueryDelegatorValidatorsRequest): _24.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _24.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_24.QueryDelegatorValidatorsResponse>): _24.QueryDelegatorValidatorsResponse;
                fromAmino(object: _24.QueryDelegatorValidatorsResponseAmino): _24.QueryDelegatorValidatorsResponse;
                toAmino(message: _24.QueryDelegatorValidatorsResponse): _24.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _24.QueryDelegatorValidatorsResponseAminoMsg): _24.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _24.QueryDelegatorValidatorsResponse): _24.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _24.QueryDelegatorValidatorsResponseProtoMsg): _24.QueryDelegatorValidatorsResponse;
                toProto(message: _24.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _24.QueryDelegatorValidatorsResponse): _24.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _24.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_24.QueryDelegatorWithdrawAddressRequest>): _24.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _24.QueryDelegatorWithdrawAddressRequestAmino): _24.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _24.QueryDelegatorWithdrawAddressRequest): _24.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _24.QueryDelegatorWithdrawAddressRequestAminoMsg): _24.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _24.QueryDelegatorWithdrawAddressRequest): _24.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _24.QueryDelegatorWithdrawAddressRequestProtoMsg): _24.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _24.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _24.QueryDelegatorWithdrawAddressRequest): _24.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _24.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_24.QueryDelegatorWithdrawAddressResponse>): _24.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _24.QueryDelegatorWithdrawAddressResponseAmino): _24.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _24.QueryDelegatorWithdrawAddressResponse): _24.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _24.QueryDelegatorWithdrawAddressResponseAminoMsg): _24.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _24.QueryDelegatorWithdrawAddressResponse): _24.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _24.QueryDelegatorWithdrawAddressResponseProtoMsg): _24.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _24.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _24.QueryDelegatorWithdrawAddressResponse): _24.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _24.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_24.QueryCommunityPoolRequest>): _24.QueryCommunityPoolRequest;
                fromAmino(_: _24.QueryCommunityPoolRequestAmino): _24.QueryCommunityPoolRequest;
                toAmino(_: _24.QueryCommunityPoolRequest): _24.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _24.QueryCommunityPoolRequestAminoMsg): _24.QueryCommunityPoolRequest;
                toAminoMsg(message: _24.QueryCommunityPoolRequest): _24.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _24.QueryCommunityPoolRequestProtoMsg): _24.QueryCommunityPoolRequest;
                toProto(message: _24.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _24.QueryCommunityPoolRequest): _24.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _24.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_24.QueryCommunityPoolResponse>): _24.QueryCommunityPoolResponse;
                fromAmino(object: _24.QueryCommunityPoolResponseAmino): _24.QueryCommunityPoolResponse;
                toAmino(message: _24.QueryCommunityPoolResponse): _24.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _24.QueryCommunityPoolResponseAminoMsg): _24.QueryCommunityPoolResponse;
                toAminoMsg(message: _24.QueryCommunityPoolResponse): _24.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _24.QueryCommunityPoolResponseProtoMsg): _24.QueryCommunityPoolResponse;
                toProto(message: _24.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _24.QueryCommunityPoolResponse): _24.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _23.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_23.DelegatorWithdrawInfo>): _23.DelegatorWithdrawInfo;
                fromAmino(object: _23.DelegatorWithdrawInfoAmino): _23.DelegatorWithdrawInfo;
                toAmino(message: _23.DelegatorWithdrawInfo): _23.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _23.DelegatorWithdrawInfoAminoMsg): _23.DelegatorWithdrawInfo;
                toAminoMsg(message: _23.DelegatorWithdrawInfo): _23.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _23.DelegatorWithdrawInfoProtoMsg): _23.DelegatorWithdrawInfo;
                toProto(message: _23.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _23.DelegatorWithdrawInfo): _23.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _23.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_23.ValidatorOutstandingRewardsRecord>): _23.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _23.ValidatorOutstandingRewardsRecordAmino): _23.ValidatorOutstandingRewardsRecord;
                toAmino(message: _23.ValidatorOutstandingRewardsRecord): _23.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _23.ValidatorOutstandingRewardsRecordAminoMsg): _23.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _23.ValidatorOutstandingRewardsRecord): _23.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _23.ValidatorOutstandingRewardsRecordProtoMsg): _23.ValidatorOutstandingRewardsRecord;
                toProto(message: _23.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _23.ValidatorOutstandingRewardsRecord): _23.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _23.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_23.ValidatorAccumulatedCommissionRecord>): _23.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _23.ValidatorAccumulatedCommissionRecordAmino): _23.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _23.ValidatorAccumulatedCommissionRecord): _23.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _23.ValidatorAccumulatedCommissionRecordAminoMsg): _23.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _23.ValidatorAccumulatedCommissionRecord): _23.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _23.ValidatorAccumulatedCommissionRecordProtoMsg): _23.ValidatorAccumulatedCommissionRecord;
                toProto(message: _23.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _23.ValidatorAccumulatedCommissionRecord): _23.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _23.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_23.ValidatorHistoricalRewardsRecord>): _23.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _23.ValidatorHistoricalRewardsRecordAmino): _23.ValidatorHistoricalRewardsRecord;
                toAmino(message: _23.ValidatorHistoricalRewardsRecord): _23.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _23.ValidatorHistoricalRewardsRecordAminoMsg): _23.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _23.ValidatorHistoricalRewardsRecord): _23.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _23.ValidatorHistoricalRewardsRecordProtoMsg): _23.ValidatorHistoricalRewardsRecord;
                toProto(message: _23.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _23.ValidatorHistoricalRewardsRecord): _23.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _23.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_23.ValidatorCurrentRewardsRecord>): _23.ValidatorCurrentRewardsRecord;
                fromAmino(object: _23.ValidatorCurrentRewardsRecordAmino): _23.ValidatorCurrentRewardsRecord;
                toAmino(message: _23.ValidatorCurrentRewardsRecord): _23.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _23.ValidatorCurrentRewardsRecordAminoMsg): _23.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _23.ValidatorCurrentRewardsRecord): _23.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _23.ValidatorCurrentRewardsRecordProtoMsg): _23.ValidatorCurrentRewardsRecord;
                toProto(message: _23.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _23.ValidatorCurrentRewardsRecord): _23.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _23.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_23.DelegatorStartingInfoRecord>): _23.DelegatorStartingInfoRecord;
                fromAmino(object: _23.DelegatorStartingInfoRecordAmino): _23.DelegatorStartingInfoRecord;
                toAmino(message: _23.DelegatorStartingInfoRecord): _23.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _23.DelegatorStartingInfoRecordAminoMsg): _23.DelegatorStartingInfoRecord;
                toAminoMsg(message: _23.DelegatorStartingInfoRecord): _23.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _23.DelegatorStartingInfoRecordProtoMsg): _23.DelegatorStartingInfoRecord;
                toProto(message: _23.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _23.DelegatorStartingInfoRecord): _23.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _23.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_23.ValidatorSlashEventRecord>): _23.ValidatorSlashEventRecord;
                fromAmino(object: _23.ValidatorSlashEventRecordAmino): _23.ValidatorSlashEventRecord;
                toAmino(message: _23.ValidatorSlashEventRecord): _23.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _23.ValidatorSlashEventRecordAminoMsg): _23.ValidatorSlashEventRecord;
                toAminoMsg(message: _23.ValidatorSlashEventRecord): _23.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _23.ValidatorSlashEventRecordProtoMsg): _23.ValidatorSlashEventRecord;
                toProto(message: _23.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _23.ValidatorSlashEventRecord): _23.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _23.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GenesisState;
                fromPartial(object: Partial<_23.GenesisState>): _23.GenesisState;
                fromAmino(object: _23.GenesisStateAmino): _23.GenesisState;
                toAmino(message: _23.GenesisState): _23.GenesisStateAmino;
                fromAminoMsg(object: _23.GenesisStateAminoMsg): _23.GenesisState;
                toAminoMsg(message: _23.GenesisState): _23.GenesisStateAminoMsg;
                fromProtoMsg(message: _23.GenesisStateProtoMsg): _23.GenesisState;
                toProto(message: _23.GenesisState): Uint8Array;
                toProtoMsg(message: _23.GenesisState): _23.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _22.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.Params;
                fromPartial(object: Partial<_22.Params>): _22.Params;
                fromAmino(object: _22.ParamsAmino): _22.Params;
                toAmino(message: _22.Params): _22.ParamsAmino;
                fromAminoMsg(object: _22.ParamsAminoMsg): _22.Params;
                toAminoMsg(message: _22.Params): _22.ParamsAminoMsg;
                fromProtoMsg(message: _22.ParamsProtoMsg): _22.Params;
                toProto(message: _22.Params): Uint8Array;
                toProtoMsg(message: _22.Params): _22.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _22.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_22.ValidatorHistoricalRewards>): _22.ValidatorHistoricalRewards;
                fromAmino(object: _22.ValidatorHistoricalRewardsAmino): _22.ValidatorHistoricalRewards;
                toAmino(message: _22.ValidatorHistoricalRewards): _22.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _22.ValidatorHistoricalRewardsAminoMsg): _22.ValidatorHistoricalRewards;
                toAminoMsg(message: _22.ValidatorHistoricalRewards): _22.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _22.ValidatorHistoricalRewardsProtoMsg): _22.ValidatorHistoricalRewards;
                toProto(message: _22.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _22.ValidatorHistoricalRewards): _22.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _22.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ValidatorCurrentRewards;
                fromPartial(object: Partial<_22.ValidatorCurrentRewards>): _22.ValidatorCurrentRewards;
                fromAmino(object: _22.ValidatorCurrentRewardsAmino): _22.ValidatorCurrentRewards;
                toAmino(message: _22.ValidatorCurrentRewards): _22.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _22.ValidatorCurrentRewardsAminoMsg): _22.ValidatorCurrentRewards;
                toAminoMsg(message: _22.ValidatorCurrentRewards): _22.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _22.ValidatorCurrentRewardsProtoMsg): _22.ValidatorCurrentRewards;
                toProto(message: _22.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _22.ValidatorCurrentRewards): _22.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _22.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_22.ValidatorAccumulatedCommission>): _22.ValidatorAccumulatedCommission;
                fromAmino(object: _22.ValidatorAccumulatedCommissionAmino): _22.ValidatorAccumulatedCommission;
                toAmino(message: _22.ValidatorAccumulatedCommission): _22.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _22.ValidatorAccumulatedCommissionAminoMsg): _22.ValidatorAccumulatedCommission;
                toAminoMsg(message: _22.ValidatorAccumulatedCommission): _22.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _22.ValidatorAccumulatedCommissionProtoMsg): _22.ValidatorAccumulatedCommission;
                toProto(message: _22.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _22.ValidatorAccumulatedCommission): _22.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _22.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_22.ValidatorOutstandingRewards>): _22.ValidatorOutstandingRewards;
                fromAmino(object: _22.ValidatorOutstandingRewardsAmino): _22.ValidatorOutstandingRewards;
                toAmino(message: _22.ValidatorOutstandingRewards): _22.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _22.ValidatorOutstandingRewardsAminoMsg): _22.ValidatorOutstandingRewards;
                toAminoMsg(message: _22.ValidatorOutstandingRewards): _22.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _22.ValidatorOutstandingRewardsProtoMsg): _22.ValidatorOutstandingRewards;
                toProto(message: _22.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _22.ValidatorOutstandingRewards): _22.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _22.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ValidatorSlashEvent;
                fromPartial(object: Partial<_22.ValidatorSlashEvent>): _22.ValidatorSlashEvent;
                fromAmino(object: _22.ValidatorSlashEventAmino): _22.ValidatorSlashEvent;
                toAmino(message: _22.ValidatorSlashEvent): _22.ValidatorSlashEventAmino;
                fromAminoMsg(object: _22.ValidatorSlashEventAminoMsg): _22.ValidatorSlashEvent;
                toAminoMsg(message: _22.ValidatorSlashEvent): _22.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _22.ValidatorSlashEventProtoMsg): _22.ValidatorSlashEvent;
                toProto(message: _22.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _22.ValidatorSlashEvent): _22.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _22.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ValidatorSlashEvents;
                fromPartial(object: Partial<_22.ValidatorSlashEvents>): _22.ValidatorSlashEvents;
                fromAmino(object: _22.ValidatorSlashEventsAmino): _22.ValidatorSlashEvents;
                toAmino(message: _22.ValidatorSlashEvents): _22.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _22.ValidatorSlashEventsAminoMsg): _22.ValidatorSlashEvents;
                toAminoMsg(message: _22.ValidatorSlashEvents): _22.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _22.ValidatorSlashEventsProtoMsg): _22.ValidatorSlashEvents;
                toProto(message: _22.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _22.ValidatorSlashEvents): _22.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _22.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.FeePool;
                fromPartial(object: Partial<_22.FeePool>): _22.FeePool;
                fromAmino(object: _22.FeePoolAmino): _22.FeePool;
                toAmino(message: _22.FeePool): _22.FeePoolAmino;
                fromAminoMsg(object: _22.FeePoolAminoMsg): _22.FeePool;
                toAminoMsg(message: _22.FeePool): _22.FeePoolAminoMsg;
                fromProtoMsg(message: _22.FeePoolProtoMsg): _22.FeePool;
                toProto(message: _22.FeePool): Uint8Array;
                toProtoMsg(message: _22.FeePool): _22.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _22.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_22.CommunityPoolSpendProposal>): _22.CommunityPoolSpendProposal;
                fromAmino(object: _22.CommunityPoolSpendProposalAmino): _22.CommunityPoolSpendProposal;
                toAmino(message: _22.CommunityPoolSpendProposal): _22.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _22.CommunityPoolSpendProposalAminoMsg): _22.CommunityPoolSpendProposal;
                toAminoMsg(message: _22.CommunityPoolSpendProposal): _22.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _22.CommunityPoolSpendProposalProtoMsg): _22.CommunityPoolSpendProposal;
                toProto(message: _22.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _22.CommunityPoolSpendProposal): _22.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _22.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.DelegatorStartingInfo;
                fromPartial(object: Partial<_22.DelegatorStartingInfo>): _22.DelegatorStartingInfo;
                fromAmino(object: _22.DelegatorStartingInfoAmino): _22.DelegatorStartingInfo;
                toAmino(message: _22.DelegatorStartingInfo): _22.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _22.DelegatorStartingInfoAminoMsg): _22.DelegatorStartingInfo;
                toAminoMsg(message: _22.DelegatorStartingInfo): _22.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _22.DelegatorStartingInfoProtoMsg): _22.DelegatorStartingInfo;
                toProto(message: _22.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _22.DelegatorStartingInfo): _22.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _22.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.DelegationDelegatorReward;
                fromPartial(object: Partial<_22.DelegationDelegatorReward>): _22.DelegationDelegatorReward;
                fromAmino(object: _22.DelegationDelegatorRewardAmino): _22.DelegationDelegatorReward;
                toAmino(message: _22.DelegationDelegatorReward): _22.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _22.DelegationDelegatorRewardAminoMsg): _22.DelegationDelegatorReward;
                toAminoMsg(message: _22.DelegationDelegatorReward): _22.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _22.DelegationDelegatorRewardProtoMsg): _22.DelegationDelegatorReward;
                toProto(message: _22.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _22.DelegationDelegatorReward): _22.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _22.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_22.CommunityPoolSpendProposalWithDeposit>): _22.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _22.CommunityPoolSpendProposalWithDepositAmino): _22.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _22.CommunityPoolSpendProposalWithDeposit): _22.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _22.CommunityPoolSpendProposalWithDepositAminoMsg): _22.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _22.CommunityPoolSpendProposalWithDeposit): _22.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _22.CommunityPoolSpendProposalWithDepositProtoMsg): _22.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _22.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _22.CommunityPoolSpendProposalWithDeposit): _22.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _220.MsgClientImpl;
            QueryClientImpl: typeof _212.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _28.QueryProposalRequest): Promise<_28.QueryProposalResponse>;
                proposals(request: _28.QueryProposalsRequest): Promise<_28.QueryProposalsResponse>;
                vote(request: _28.QueryVoteRequest): Promise<_28.QueryVoteResponse>;
                votes(request: _28.QueryVotesRequest): Promise<_28.QueryVotesResponse>;
                params(request: _28.QueryParamsRequest): Promise<_28.QueryParamsResponse>;
                deposit(request: _28.QueryDepositRequest): Promise<_28.QueryDepositResponse>;
                deposits(request: _28.QueryDepositsRequest): Promise<_28.QueryDepositsResponse>;
                tallyResult(request: _28.QueryTallyResultRequest): Promise<_28.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _203.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _29.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _29.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _29.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _29.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _29.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _29.MsgSubmitProposal;
                    };
                    vote(value: _29.MsgVote): {
                        typeUrl: string;
                        value: _29.MsgVote;
                    };
                    voteWeighted(value: _29.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _29.MsgVoteWeighted;
                    };
                    deposit(value: _29.MsgDeposit): {
                        typeUrl: string;
                        value: _29.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _29.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _29.MsgSubmitProposal;
                    };
                    vote(value: _29.MsgVote): {
                        typeUrl: string;
                        value: _29.MsgVote;
                    };
                    voteWeighted(value: _29.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _29.MsgVoteWeighted;
                    };
                    deposit(value: _29.MsgDeposit): {
                        typeUrl: string;
                        value: _29.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _29.MsgSubmitProposal) => _29.MsgSubmitProposalAmino;
                    fromAmino: (object: _29.MsgSubmitProposalAmino) => _29.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _29.MsgVote) => _29.MsgVoteAmino;
                    fromAmino: (object: _29.MsgVoteAmino) => _29.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _29.MsgVoteWeighted) => _29.MsgVoteWeightedAmino;
                    fromAmino: (object: _29.MsgVoteWeightedAmino) => _29.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _29.MsgDeposit) => _29.MsgDepositAmino;
                    fromAmino: (object: _29.MsgDepositAmino) => _29.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _29.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgSubmitProposal;
                fromPartial(object: Partial<_29.MsgSubmitProposal>): _29.MsgSubmitProposal;
                fromAmino(object: _29.MsgSubmitProposalAmino): _29.MsgSubmitProposal;
                toAmino(message: _29.MsgSubmitProposal): _29.MsgSubmitProposalAmino;
                fromAminoMsg(object: _29.MsgSubmitProposalAminoMsg): _29.MsgSubmitProposal;
                toAminoMsg(message: _29.MsgSubmitProposal): _29.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _29.MsgSubmitProposalProtoMsg): _29.MsgSubmitProposal;
                toProto(message: _29.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _29.MsgSubmitProposal): _29.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _29.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_29.MsgSubmitProposalResponse>): _29.MsgSubmitProposalResponse;
                fromAmino(object: _29.MsgSubmitProposalResponseAmino): _29.MsgSubmitProposalResponse;
                toAmino(message: _29.MsgSubmitProposalResponse): _29.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _29.MsgSubmitProposalResponseAminoMsg): _29.MsgSubmitProposalResponse;
                toAminoMsg(message: _29.MsgSubmitProposalResponse): _29.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _29.MsgSubmitProposalResponseProtoMsg): _29.MsgSubmitProposalResponse;
                toProto(message: _29.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _29.MsgSubmitProposalResponse): _29.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _29.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgVote;
                fromPartial(object: Partial<_29.MsgVote>): _29.MsgVote;
                fromAmino(object: _29.MsgVoteAmino): _29.MsgVote;
                toAmino(message: _29.MsgVote): _29.MsgVoteAmino;
                fromAminoMsg(object: _29.MsgVoteAminoMsg): _29.MsgVote;
                toAminoMsg(message: _29.MsgVote): _29.MsgVoteAminoMsg;
                fromProtoMsg(message: _29.MsgVoteProtoMsg): _29.MsgVote;
                toProto(message: _29.MsgVote): Uint8Array;
                toProtoMsg(message: _29.MsgVote): _29.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _29.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgVoteResponse;
                fromPartial(_: Partial<_29.MsgVoteResponse>): _29.MsgVoteResponse;
                fromAmino(_: _29.MsgVoteResponseAmino): _29.MsgVoteResponse;
                toAmino(_: _29.MsgVoteResponse): _29.MsgVoteResponseAmino;
                fromAminoMsg(object: _29.MsgVoteResponseAminoMsg): _29.MsgVoteResponse;
                toAminoMsg(message: _29.MsgVoteResponse): _29.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _29.MsgVoteResponseProtoMsg): _29.MsgVoteResponse;
                toProto(message: _29.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _29.MsgVoteResponse): _29.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _29.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgVoteWeighted;
                fromPartial(object: Partial<_29.MsgVoteWeighted>): _29.MsgVoteWeighted;
                fromAmino(object: _29.MsgVoteWeightedAmino): _29.MsgVoteWeighted;
                toAmino(message: _29.MsgVoteWeighted): _29.MsgVoteWeightedAmino;
                fromAminoMsg(object: _29.MsgVoteWeightedAminoMsg): _29.MsgVoteWeighted;
                toAminoMsg(message: _29.MsgVoteWeighted): _29.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _29.MsgVoteWeightedProtoMsg): _29.MsgVoteWeighted;
                toProto(message: _29.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _29.MsgVoteWeighted): _29.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _29.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_29.MsgVoteWeightedResponse>): _29.MsgVoteWeightedResponse;
                fromAmino(_: _29.MsgVoteWeightedResponseAmino): _29.MsgVoteWeightedResponse;
                toAmino(_: _29.MsgVoteWeightedResponse): _29.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _29.MsgVoteWeightedResponseAminoMsg): _29.MsgVoteWeightedResponse;
                toAminoMsg(message: _29.MsgVoteWeightedResponse): _29.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _29.MsgVoteWeightedResponseProtoMsg): _29.MsgVoteWeightedResponse;
                toProto(message: _29.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _29.MsgVoteWeightedResponse): _29.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _29.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgDeposit;
                fromPartial(object: Partial<_29.MsgDeposit>): _29.MsgDeposit;
                fromAmino(object: _29.MsgDepositAmino): _29.MsgDeposit;
                toAmino(message: _29.MsgDeposit): _29.MsgDepositAmino;
                fromAminoMsg(object: _29.MsgDepositAminoMsg): _29.MsgDeposit;
                toAminoMsg(message: _29.MsgDeposit): _29.MsgDepositAminoMsg;
                fromProtoMsg(message: _29.MsgDepositProtoMsg): _29.MsgDeposit;
                toProto(message: _29.MsgDeposit): Uint8Array;
                toProtoMsg(message: _29.MsgDeposit): _29.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _29.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgDepositResponse;
                fromPartial(_: Partial<_29.MsgDepositResponse>): _29.MsgDepositResponse;
                fromAmino(_: _29.MsgDepositResponseAmino): _29.MsgDepositResponse;
                toAmino(_: _29.MsgDepositResponse): _29.MsgDepositResponseAmino;
                fromAminoMsg(object: _29.MsgDepositResponseAminoMsg): _29.MsgDepositResponse;
                toAminoMsg(message: _29.MsgDepositResponse): _29.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _29.MsgDepositResponseProtoMsg): _29.MsgDepositResponse;
                toProto(message: _29.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _29.MsgDepositResponse): _29.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _27.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _28.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryProposalRequest;
                fromPartial(object: Partial<_28.QueryProposalRequest>): _28.QueryProposalRequest;
                fromAmino(object: _28.QueryProposalRequestAmino): _28.QueryProposalRequest;
                toAmino(message: _28.QueryProposalRequest): _28.QueryProposalRequestAmino;
                fromAminoMsg(object: _28.QueryProposalRequestAminoMsg): _28.QueryProposalRequest;
                toAminoMsg(message: _28.QueryProposalRequest): _28.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _28.QueryProposalRequestProtoMsg): _28.QueryProposalRequest;
                toProto(message: _28.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _28.QueryProposalRequest): _28.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _28.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryProposalResponse;
                fromPartial(object: Partial<_28.QueryProposalResponse>): _28.QueryProposalResponse;
                fromAmino(object: _28.QueryProposalResponseAmino): _28.QueryProposalResponse;
                toAmino(message: _28.QueryProposalResponse): _28.QueryProposalResponseAmino;
                fromAminoMsg(object: _28.QueryProposalResponseAminoMsg): _28.QueryProposalResponse;
                toAminoMsg(message: _28.QueryProposalResponse): _28.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _28.QueryProposalResponseProtoMsg): _28.QueryProposalResponse;
                toProto(message: _28.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _28.QueryProposalResponse): _28.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _28.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryProposalsRequest;
                fromPartial(object: Partial<_28.QueryProposalsRequest>): _28.QueryProposalsRequest;
                fromAmino(object: _28.QueryProposalsRequestAmino): _28.QueryProposalsRequest;
                toAmino(message: _28.QueryProposalsRequest): _28.QueryProposalsRequestAmino;
                fromAminoMsg(object: _28.QueryProposalsRequestAminoMsg): _28.QueryProposalsRequest;
                toAminoMsg(message: _28.QueryProposalsRequest): _28.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _28.QueryProposalsRequestProtoMsg): _28.QueryProposalsRequest;
                toProto(message: _28.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _28.QueryProposalsRequest): _28.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _28.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryProposalsResponse;
                fromPartial(object: Partial<_28.QueryProposalsResponse>): _28.QueryProposalsResponse;
                fromAmino(object: _28.QueryProposalsResponseAmino): _28.QueryProposalsResponse;
                toAmino(message: _28.QueryProposalsResponse): _28.QueryProposalsResponseAmino;
                fromAminoMsg(object: _28.QueryProposalsResponseAminoMsg): _28.QueryProposalsResponse;
                toAminoMsg(message: _28.QueryProposalsResponse): _28.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _28.QueryProposalsResponseProtoMsg): _28.QueryProposalsResponse;
                toProto(message: _28.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _28.QueryProposalsResponse): _28.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _28.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryVoteRequest;
                fromPartial(object: Partial<_28.QueryVoteRequest>): _28.QueryVoteRequest;
                fromAmino(object: _28.QueryVoteRequestAmino): _28.QueryVoteRequest;
                toAmino(message: _28.QueryVoteRequest): _28.QueryVoteRequestAmino;
                fromAminoMsg(object: _28.QueryVoteRequestAminoMsg): _28.QueryVoteRequest;
                toAminoMsg(message: _28.QueryVoteRequest): _28.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _28.QueryVoteRequestProtoMsg): _28.QueryVoteRequest;
                toProto(message: _28.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _28.QueryVoteRequest): _28.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _28.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryVoteResponse;
                fromPartial(object: Partial<_28.QueryVoteResponse>): _28.QueryVoteResponse;
                fromAmino(object: _28.QueryVoteResponseAmino): _28.QueryVoteResponse;
                toAmino(message: _28.QueryVoteResponse): _28.QueryVoteResponseAmino;
                fromAminoMsg(object: _28.QueryVoteResponseAminoMsg): _28.QueryVoteResponse;
                toAminoMsg(message: _28.QueryVoteResponse): _28.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _28.QueryVoteResponseProtoMsg): _28.QueryVoteResponse;
                toProto(message: _28.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _28.QueryVoteResponse): _28.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _28.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryVotesRequest;
                fromPartial(object: Partial<_28.QueryVotesRequest>): _28.QueryVotesRequest;
                fromAmino(object: _28.QueryVotesRequestAmino): _28.QueryVotesRequest;
                toAmino(message: _28.QueryVotesRequest): _28.QueryVotesRequestAmino;
                fromAminoMsg(object: _28.QueryVotesRequestAminoMsg): _28.QueryVotesRequest;
                toAminoMsg(message: _28.QueryVotesRequest): _28.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _28.QueryVotesRequestProtoMsg): _28.QueryVotesRequest;
                toProto(message: _28.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _28.QueryVotesRequest): _28.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _28.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryVotesResponse;
                fromPartial(object: Partial<_28.QueryVotesResponse>): _28.QueryVotesResponse;
                fromAmino(object: _28.QueryVotesResponseAmino): _28.QueryVotesResponse;
                toAmino(message: _28.QueryVotesResponse): _28.QueryVotesResponseAmino;
                fromAminoMsg(object: _28.QueryVotesResponseAminoMsg): _28.QueryVotesResponse;
                toAminoMsg(message: _28.QueryVotesResponse): _28.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _28.QueryVotesResponseProtoMsg): _28.QueryVotesResponse;
                toProto(message: _28.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _28.QueryVotesResponse): _28.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _28.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryParamsRequest;
                fromPartial(object: Partial<_28.QueryParamsRequest>): _28.QueryParamsRequest;
                fromAmino(object: _28.QueryParamsRequestAmino): _28.QueryParamsRequest;
                toAmino(message: _28.QueryParamsRequest): _28.QueryParamsRequestAmino;
                fromAminoMsg(object: _28.QueryParamsRequestAminoMsg): _28.QueryParamsRequest;
                toAminoMsg(message: _28.QueryParamsRequest): _28.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _28.QueryParamsRequestProtoMsg): _28.QueryParamsRequest;
                toProto(message: _28.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _28.QueryParamsRequest): _28.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _28.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryParamsResponse;
                fromPartial(object: Partial<_28.QueryParamsResponse>): _28.QueryParamsResponse;
                fromAmino(object: _28.QueryParamsResponseAmino): _28.QueryParamsResponse;
                toAmino(message: _28.QueryParamsResponse): _28.QueryParamsResponseAmino;
                fromAminoMsg(object: _28.QueryParamsResponseAminoMsg): _28.QueryParamsResponse;
                toAminoMsg(message: _28.QueryParamsResponse): _28.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _28.QueryParamsResponseProtoMsg): _28.QueryParamsResponse;
                toProto(message: _28.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _28.QueryParamsResponse): _28.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _28.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryDepositRequest;
                fromPartial(object: Partial<_28.QueryDepositRequest>): _28.QueryDepositRequest;
                fromAmino(object: _28.QueryDepositRequestAmino): _28.QueryDepositRequest;
                toAmino(message: _28.QueryDepositRequest): _28.QueryDepositRequestAmino;
                fromAminoMsg(object: _28.QueryDepositRequestAminoMsg): _28.QueryDepositRequest;
                toAminoMsg(message: _28.QueryDepositRequest): _28.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _28.QueryDepositRequestProtoMsg): _28.QueryDepositRequest;
                toProto(message: _28.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _28.QueryDepositRequest): _28.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _28.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryDepositResponse;
                fromPartial(object: Partial<_28.QueryDepositResponse>): _28.QueryDepositResponse;
                fromAmino(object: _28.QueryDepositResponseAmino): _28.QueryDepositResponse;
                toAmino(message: _28.QueryDepositResponse): _28.QueryDepositResponseAmino;
                fromAminoMsg(object: _28.QueryDepositResponseAminoMsg): _28.QueryDepositResponse;
                toAminoMsg(message: _28.QueryDepositResponse): _28.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _28.QueryDepositResponseProtoMsg): _28.QueryDepositResponse;
                toProto(message: _28.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _28.QueryDepositResponse): _28.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _28.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryDepositsRequest;
                fromPartial(object: Partial<_28.QueryDepositsRequest>): _28.QueryDepositsRequest;
                fromAmino(object: _28.QueryDepositsRequestAmino): _28.QueryDepositsRequest;
                toAmino(message: _28.QueryDepositsRequest): _28.QueryDepositsRequestAmino;
                fromAminoMsg(object: _28.QueryDepositsRequestAminoMsg): _28.QueryDepositsRequest;
                toAminoMsg(message: _28.QueryDepositsRequest): _28.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _28.QueryDepositsRequestProtoMsg): _28.QueryDepositsRequest;
                toProto(message: _28.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _28.QueryDepositsRequest): _28.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _28.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryDepositsResponse;
                fromPartial(object: Partial<_28.QueryDepositsResponse>): _28.QueryDepositsResponse;
                fromAmino(object: _28.QueryDepositsResponseAmino): _28.QueryDepositsResponse;
                toAmino(message: _28.QueryDepositsResponse): _28.QueryDepositsResponseAmino;
                fromAminoMsg(object: _28.QueryDepositsResponseAminoMsg): _28.QueryDepositsResponse;
                toAminoMsg(message: _28.QueryDepositsResponse): _28.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _28.QueryDepositsResponseProtoMsg): _28.QueryDepositsResponse;
                toProto(message: _28.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _28.QueryDepositsResponse): _28.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _28.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryTallyResultRequest;
                fromPartial(object: Partial<_28.QueryTallyResultRequest>): _28.QueryTallyResultRequest;
                fromAmino(object: _28.QueryTallyResultRequestAmino): _28.QueryTallyResultRequest;
                toAmino(message: _28.QueryTallyResultRequest): _28.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _28.QueryTallyResultRequestAminoMsg): _28.QueryTallyResultRequest;
                toAminoMsg(message: _28.QueryTallyResultRequest): _28.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _28.QueryTallyResultRequestProtoMsg): _28.QueryTallyResultRequest;
                toProto(message: _28.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _28.QueryTallyResultRequest): _28.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _28.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryTallyResultResponse;
                fromPartial(object: Partial<_28.QueryTallyResultResponse>): _28.QueryTallyResultResponse;
                fromAmino(object: _28.QueryTallyResultResponseAmino): _28.QueryTallyResultResponse;
                toAmino(message: _28.QueryTallyResultResponse): _28.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _28.QueryTallyResultResponseAminoMsg): _28.QueryTallyResultResponse;
                toAminoMsg(message: _28.QueryTallyResultResponse): _28.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _28.QueryTallyResultResponseProtoMsg): _28.QueryTallyResultResponse;
                toProto(message: _28.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _28.QueryTallyResultResponse): _28.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _27.VoteOption;
            voteOptionToJSON(object: _27.VoteOption): string;
            proposalStatusFromJSON(object: any): _27.ProposalStatus;
            proposalStatusToJSON(object: _27.ProposalStatus): string;
            VoteOption: typeof _27.VoteOption;
            VoteOptionSDKType: typeof _27.VoteOption;
            VoteOptionAmino: typeof _27.VoteOption;
            ProposalStatus: typeof _27.ProposalStatus;
            ProposalStatusSDKType: typeof _27.ProposalStatus;
            ProposalStatusAmino: typeof _27.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _27.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.WeightedVoteOption;
                fromPartial(object: Partial<_27.WeightedVoteOption>): _27.WeightedVoteOption;
                fromAmino(object: _27.WeightedVoteOptionAmino): _27.WeightedVoteOption;
                toAmino(message: _27.WeightedVoteOption): _27.WeightedVoteOptionAmino;
                fromAminoMsg(object: _27.WeightedVoteOptionAminoMsg): _27.WeightedVoteOption;
                toAminoMsg(message: _27.WeightedVoteOption): _27.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _27.WeightedVoteOptionProtoMsg): _27.WeightedVoteOption;
                toProto(message: _27.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _27.WeightedVoteOption): _27.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _27.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.TextProposal;
                fromPartial(object: Partial<_27.TextProposal>): _27.TextProposal;
                fromAmino(object: _27.TextProposalAmino): _27.TextProposal;
                toAmino(message: _27.TextProposal): _27.TextProposalAmino;
                fromAminoMsg(object: _27.TextProposalAminoMsg): _27.TextProposal;
                toAminoMsg(message: _27.TextProposal): _27.TextProposalAminoMsg;
                fromProtoMsg(message: _27.TextProposalProtoMsg): _27.TextProposal;
                toProto(message: _27.TextProposal): Uint8Array;
                toProtoMsg(message: _27.TextProposal): _27.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _27.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.Deposit;
                fromPartial(object: Partial<_27.Deposit>): _27.Deposit;
                fromAmino(object: _27.DepositAmino): _27.Deposit;
                toAmino(message: _27.Deposit): _27.DepositAmino;
                fromAminoMsg(object: _27.DepositAminoMsg): _27.Deposit;
                toAminoMsg(message: _27.Deposit): _27.DepositAminoMsg;
                fromProtoMsg(message: _27.DepositProtoMsg): _27.Deposit;
                toProto(message: _27.Deposit): Uint8Array;
                toProtoMsg(message: _27.Deposit): _27.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _27.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.Proposal;
                fromPartial(object: Partial<_27.Proposal>): _27.Proposal;
                fromAmino(object: _27.ProposalAmino): _27.Proposal;
                toAmino(message: _27.Proposal): _27.ProposalAmino;
                fromAminoMsg(object: _27.ProposalAminoMsg): _27.Proposal;
                toAminoMsg(message: _27.Proposal): _27.ProposalAminoMsg;
                fromProtoMsg(message: _27.ProposalProtoMsg): _27.Proposal;
                toProto(message: _27.Proposal): Uint8Array;
                toProtoMsg(message: _27.Proposal): _27.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _27.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.TallyResult;
                fromPartial(object: Partial<_27.TallyResult>): _27.TallyResult;
                fromAmino(object: _27.TallyResultAmino): _27.TallyResult;
                toAmino(message: _27.TallyResult): _27.TallyResultAmino;
                fromAminoMsg(object: _27.TallyResultAminoMsg): _27.TallyResult;
                toAminoMsg(message: _27.TallyResult): _27.TallyResultAminoMsg;
                fromProtoMsg(message: _27.TallyResultProtoMsg): _27.TallyResult;
                toProto(message: _27.TallyResult): Uint8Array;
                toProtoMsg(message: _27.TallyResult): _27.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _27.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.Vote;
                fromPartial(object: Partial<_27.Vote>): _27.Vote;
                fromAmino(object: _27.VoteAmino): _27.Vote;
                toAmino(message: _27.Vote): _27.VoteAmino;
                fromAminoMsg(object: _27.VoteAminoMsg): _27.Vote;
                toAminoMsg(message: _27.Vote): _27.VoteAminoMsg;
                fromProtoMsg(message: _27.VoteProtoMsg): _27.Vote;
                toProto(message: _27.Vote): Uint8Array;
                toProtoMsg(message: _27.Vote): _27.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _27.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.DepositParams;
                fromPartial(object: Partial<_27.DepositParams>): _27.DepositParams;
                fromAmino(object: _27.DepositParamsAmino): _27.DepositParams;
                toAmino(message: _27.DepositParams): _27.DepositParamsAmino;
                fromAminoMsg(object: _27.DepositParamsAminoMsg): _27.DepositParams;
                toAminoMsg(message: _27.DepositParams): _27.DepositParamsAminoMsg;
                fromProtoMsg(message: _27.DepositParamsProtoMsg): _27.DepositParams;
                toProto(message: _27.DepositParams): Uint8Array;
                toProtoMsg(message: _27.DepositParams): _27.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _27.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.VotingParams;
                fromPartial(object: Partial<_27.VotingParams>): _27.VotingParams;
                fromAmino(object: _27.VotingParamsAmino): _27.VotingParams;
                toAmino(message: _27.VotingParams): _27.VotingParamsAmino;
                fromAminoMsg(object: _27.VotingParamsAminoMsg): _27.VotingParams;
                toAminoMsg(message: _27.VotingParams): _27.VotingParamsAminoMsg;
                fromProtoMsg(message: _27.VotingParamsProtoMsg): _27.VotingParams;
                toProto(message: _27.VotingParams): Uint8Array;
                toProtoMsg(message: _27.VotingParams): _27.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _27.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.TallyParams;
                fromPartial(object: Partial<_27.TallyParams>): _27.TallyParams;
                fromAmino(object: _27.TallyParamsAmino): _27.TallyParams;
                toAmino(message: _27.TallyParams): _27.TallyParamsAmino;
                fromAminoMsg(object: _27.TallyParamsAminoMsg): _27.TallyParams;
                toAminoMsg(message: _27.TallyParams): _27.TallyParamsAminoMsg;
                fromProtoMsg(message: _27.TallyParamsProtoMsg): _27.TallyParams;
                toProto(message: _27.TallyParams): Uint8Array;
                toProtoMsg(message: _27.TallyParams): _27.TallyParamsProtoMsg;
            };
            ProposalVotingPeriod: {
                typeUrl: string;
                encode(message: _27.ProposalVotingPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.ProposalVotingPeriod;
                fromPartial(object: Partial<_27.ProposalVotingPeriod>): _27.ProposalVotingPeriod;
                fromAmino(object: _27.ProposalVotingPeriodAmino): _27.ProposalVotingPeriod;
                toAmino(message: _27.ProposalVotingPeriod): _27.ProposalVotingPeriodAmino;
                fromAminoMsg(object: _27.ProposalVotingPeriodAminoMsg): _27.ProposalVotingPeriod;
                toAminoMsg(message: _27.ProposalVotingPeriod): _27.ProposalVotingPeriodAminoMsg;
                fromProtoMsg(message: _27.ProposalVotingPeriodProtoMsg): _27.ProposalVotingPeriod;
                toProto(message: _27.ProposalVotingPeriod): Uint8Array;
                toProtoMsg(message: _27.ProposalVotingPeriod): _27.ProposalVotingPeriodProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _26.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GenesisState;
                fromPartial(object: Partial<_26.GenesisState>): _26.GenesisState;
                fromAmino(object: _26.GenesisStateAmino): _26.GenesisState;
                toAmino(message: _26.GenesisState): _26.GenesisStateAmino;
                fromAminoMsg(object: _26.GenesisStateAminoMsg): _26.GenesisState;
                toAminoMsg(message: _26.GenesisState): _26.GenesisStateAminoMsg;
                fromProtoMsg(message: _26.GenesisStateProtoMsg): _26.GenesisState;
                toProto(message: _26.GenesisState): Uint8Array;
                toProtoMsg(message: _26.GenesisState): _26.GenesisStateProtoMsg;
            };
        };
        const v1: {
            MsgClientImpl: typeof _222.MsgClientImpl;
            QueryClientImpl: typeof _216.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _32.QueryProposalRequest): Promise<_32.QueryProposalResponse>;
                proposals(request: _32.QueryProposalsRequest): Promise<_32.QueryProposalsResponse>;
                vote(request: _32.QueryVoteRequest): Promise<_32.QueryVoteResponse>;
                votes(request: _32.QueryVotesRequest): Promise<_32.QueryVotesResponse>;
                params(request: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
                deposit(request: _32.QueryDepositRequest): Promise<_32.QueryDepositResponse>;
                deposits(request: _32.QueryDepositsRequest): Promise<_32.QueryDepositsResponse>;
                tallyResult(request: _32.QueryTallyResultRequest): Promise<_32.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _207.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _33.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _33.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _33.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _33.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _33.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _33.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _33.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _33.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _33.MsgExecLegacyContent;
                    };
                    vote(value: _33.MsgVote): {
                        typeUrl: string;
                        value: _33.MsgVote;
                    };
                    voteWeighted(value: _33.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _33.MsgVoteWeighted;
                    };
                    deposit(value: _33.MsgDeposit): {
                        typeUrl: string;
                        value: _33.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _33.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _33.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _33.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _33.MsgExecLegacyContent;
                    };
                    vote(value: _33.MsgVote): {
                        typeUrl: string;
                        value: _33.MsgVote;
                    };
                    voteWeighted(value: _33.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _33.MsgVoteWeighted;
                    };
                    deposit(value: _33.MsgDeposit): {
                        typeUrl: string;
                        value: _33.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _33.MsgSubmitProposal) => _33.MsgSubmitProposalAmino;
                    fromAmino: (object: _33.MsgSubmitProposalAmino) => _33.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _33.MsgExecLegacyContent) => _33.MsgExecLegacyContentAmino;
                    fromAmino: (object: _33.MsgExecLegacyContentAmino) => _33.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _33.MsgVote) => _33.MsgVoteAmino;
                    fromAmino: (object: _33.MsgVoteAmino) => _33.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _33.MsgVoteWeighted) => _33.MsgVoteWeightedAmino;
                    fromAmino: (object: _33.MsgVoteWeightedAmino) => _33.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _33.MsgDeposit) => _33.MsgDepositAmino;
                    fromAmino: (object: _33.MsgDepositAmino) => _33.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _33.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgSubmitProposal;
                fromPartial(object: Partial<_33.MsgSubmitProposal>): _33.MsgSubmitProposal;
                fromAmino(object: _33.MsgSubmitProposalAmino): _33.MsgSubmitProposal;
                toAmino(message: _33.MsgSubmitProposal): _33.MsgSubmitProposalAmino;
                fromAminoMsg(object: _33.MsgSubmitProposalAminoMsg): _33.MsgSubmitProposal;
                toAminoMsg(message: _33.MsgSubmitProposal): _33.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _33.MsgSubmitProposalProtoMsg): _33.MsgSubmitProposal;
                toProto(message: _33.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _33.MsgSubmitProposal): _33.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _33.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_33.MsgSubmitProposalResponse>): _33.MsgSubmitProposalResponse;
                fromAmino(object: _33.MsgSubmitProposalResponseAmino): _33.MsgSubmitProposalResponse;
                toAmino(message: _33.MsgSubmitProposalResponse): _33.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _33.MsgSubmitProposalResponseAminoMsg): _33.MsgSubmitProposalResponse;
                toAminoMsg(message: _33.MsgSubmitProposalResponse): _33.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _33.MsgSubmitProposalResponseProtoMsg): _33.MsgSubmitProposalResponse;
                toProto(message: _33.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _33.MsgSubmitProposalResponse): _33.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _33.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgExecLegacyContent;
                fromPartial(object: Partial<_33.MsgExecLegacyContent>): _33.MsgExecLegacyContent;
                fromAmino(object: _33.MsgExecLegacyContentAmino): _33.MsgExecLegacyContent;
                toAmino(message: _33.MsgExecLegacyContent): _33.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _33.MsgExecLegacyContentAminoMsg): _33.MsgExecLegacyContent;
                toAminoMsg(message: _33.MsgExecLegacyContent): _33.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _33.MsgExecLegacyContentProtoMsg): _33.MsgExecLegacyContent;
                toProto(message: _33.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _33.MsgExecLegacyContent): _33.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _33.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_33.MsgExecLegacyContentResponse>): _33.MsgExecLegacyContentResponse;
                fromAmino(_: _33.MsgExecLegacyContentResponseAmino): _33.MsgExecLegacyContentResponse;
                toAmino(_: _33.MsgExecLegacyContentResponse): _33.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _33.MsgExecLegacyContentResponseAminoMsg): _33.MsgExecLegacyContentResponse;
                toAminoMsg(message: _33.MsgExecLegacyContentResponse): _33.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _33.MsgExecLegacyContentResponseProtoMsg): _33.MsgExecLegacyContentResponse;
                toProto(message: _33.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _33.MsgExecLegacyContentResponse): _33.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _33.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgVote;
                fromPartial(object: Partial<_33.MsgVote>): _33.MsgVote;
                fromAmino(object: _33.MsgVoteAmino): _33.MsgVote;
                toAmino(message: _33.MsgVote): _33.MsgVoteAmino;
                fromAminoMsg(object: _33.MsgVoteAminoMsg): _33.MsgVote;
                toAminoMsg(message: _33.MsgVote): _33.MsgVoteAminoMsg;
                fromProtoMsg(message: _33.MsgVoteProtoMsg): _33.MsgVote;
                toProto(message: _33.MsgVote): Uint8Array;
                toProtoMsg(message: _33.MsgVote): _33.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _33.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgVoteResponse;
                fromPartial(_: Partial<_33.MsgVoteResponse>): _33.MsgVoteResponse;
                fromAmino(_: _33.MsgVoteResponseAmino): _33.MsgVoteResponse;
                toAmino(_: _33.MsgVoteResponse): _33.MsgVoteResponseAmino;
                fromAminoMsg(object: _33.MsgVoteResponseAminoMsg): _33.MsgVoteResponse;
                toAminoMsg(message: _33.MsgVoteResponse): _33.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _33.MsgVoteResponseProtoMsg): _33.MsgVoteResponse;
                toProto(message: _33.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _33.MsgVoteResponse): _33.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _33.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgVoteWeighted;
                fromPartial(object: Partial<_33.MsgVoteWeighted>): _33.MsgVoteWeighted;
                fromAmino(object: _33.MsgVoteWeightedAmino): _33.MsgVoteWeighted;
                toAmino(message: _33.MsgVoteWeighted): _33.MsgVoteWeightedAmino;
                fromAminoMsg(object: _33.MsgVoteWeightedAminoMsg): _33.MsgVoteWeighted;
                toAminoMsg(message: _33.MsgVoteWeighted): _33.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _33.MsgVoteWeightedProtoMsg): _33.MsgVoteWeighted;
                toProto(message: _33.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _33.MsgVoteWeighted): _33.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _33.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_33.MsgVoteWeightedResponse>): _33.MsgVoteWeightedResponse;
                fromAmino(_: _33.MsgVoteWeightedResponseAmino): _33.MsgVoteWeightedResponse;
                toAmino(_: _33.MsgVoteWeightedResponse): _33.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _33.MsgVoteWeightedResponseAminoMsg): _33.MsgVoteWeightedResponse;
                toAminoMsg(message: _33.MsgVoteWeightedResponse): _33.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _33.MsgVoteWeightedResponseProtoMsg): _33.MsgVoteWeightedResponse;
                toProto(message: _33.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _33.MsgVoteWeightedResponse): _33.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _33.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgDeposit;
                fromPartial(object: Partial<_33.MsgDeposit>): _33.MsgDeposit;
                fromAmino(object: _33.MsgDepositAmino): _33.MsgDeposit;
                toAmino(message: _33.MsgDeposit): _33.MsgDepositAmino;
                fromAminoMsg(object: _33.MsgDepositAminoMsg): _33.MsgDeposit;
                toAminoMsg(message: _33.MsgDeposit): _33.MsgDepositAminoMsg;
                fromProtoMsg(message: _33.MsgDepositProtoMsg): _33.MsgDeposit;
                toProto(message: _33.MsgDeposit): Uint8Array;
                toProtoMsg(message: _33.MsgDeposit): _33.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _33.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgDepositResponse;
                fromPartial(_: Partial<_33.MsgDepositResponse>): _33.MsgDepositResponse;
                fromAmino(_: _33.MsgDepositResponseAmino): _33.MsgDepositResponse;
                toAmino(_: _33.MsgDepositResponse): _33.MsgDepositResponseAmino;
                fromAminoMsg(object: _33.MsgDepositResponseAminoMsg): _33.MsgDepositResponse;
                toAminoMsg(message: _33.MsgDepositResponse): _33.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _33.MsgDepositResponseProtoMsg): _33.MsgDepositResponse;
                toProto(message: _33.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _33.MsgDepositResponse): _33.MsgDepositResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | import("../ibc/core/client/v1/client").ClientUpdateProposal | import("../ibc/core/client/v1/client").UpgradeProposal | import("../cosmwasm/wasm/v1/proposal").StoreCodeProposal | import("../cosmwasm/wasm/v1/proposal").InstantiateContractProposal | import("../cosmwasm/wasm/v1/proposal").InstantiateContract2Proposal | import("../cosmwasm/wasm/v1/proposal").MigrateContractProposal | import("../cosmwasm/wasm/v1/proposal").SudoContractProposal | import("../cosmwasm/wasm/v1/proposal").ExecuteContractProposal | import("../cosmwasm/wasm/v1/proposal").UpdateAdminProposal | import("../cosmwasm/wasm/v1/proposal").ClearAdminProposal | import("../cosmwasm/wasm/v1/proposal").PinCodesProposal | import("../cosmwasm/wasm/v1/proposal").UnpinCodesProposal | import("../cosmwasm/wasm/v1/proposal").UpdateInstantiateConfigProposal | import("../cosmwasm/wasm/v1/proposal").StoreAndInstantiateContractProposal | import("../osmosis/pool-incentives/v1beta1/gov").ReplacePoolIncentivesProposal | import("../osmosis/pool-incentives/v1beta1/gov").UpdatePoolIncentivesProposal | import("../osmosis/protorev/v1beta1/gov").SetProtoRevEnabledProposal | import("../osmosis/protorev/v1beta1/gov").SetProtoRevAdminAccountProposal | import("../osmosis/superfluid/v1beta1/gov").SetSuperfluidAssetsProposal | import("../osmosis/superfluid/v1beta1/gov").RemoveSuperfluidAssetsProposal | import("../osmosis/superfluid/v1beta1/gov").UpdateUnpoolWhiteListProposal | import("../osmosis/txfees/v1beta1/gov").UpdateFeeTokenProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _32.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryProposalRequest;
                fromPartial(object: Partial<_32.QueryProposalRequest>): _32.QueryProposalRequest;
                fromAmino(object: _32.QueryProposalRequestAmino): _32.QueryProposalRequest;
                toAmino(message: _32.QueryProposalRequest): _32.QueryProposalRequestAmino;
                fromAminoMsg(object: _32.QueryProposalRequestAminoMsg): _32.QueryProposalRequest;
                toAminoMsg(message: _32.QueryProposalRequest): _32.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _32.QueryProposalRequestProtoMsg): _32.QueryProposalRequest;
                toProto(message: _32.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _32.QueryProposalRequest): _32.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _32.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryProposalResponse;
                fromPartial(object: Partial<_32.QueryProposalResponse>): _32.QueryProposalResponse;
                fromAmino(object: _32.QueryProposalResponseAmino): _32.QueryProposalResponse;
                toAmino(message: _32.QueryProposalResponse): _32.QueryProposalResponseAmino;
                fromAminoMsg(object: _32.QueryProposalResponseAminoMsg): _32.QueryProposalResponse;
                toAminoMsg(message: _32.QueryProposalResponse): _32.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _32.QueryProposalResponseProtoMsg): _32.QueryProposalResponse;
                toProto(message: _32.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _32.QueryProposalResponse): _32.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _32.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryProposalsRequest;
                fromPartial(object: Partial<_32.QueryProposalsRequest>): _32.QueryProposalsRequest;
                fromAmino(object: _32.QueryProposalsRequestAmino): _32.QueryProposalsRequest;
                toAmino(message: _32.QueryProposalsRequest): _32.QueryProposalsRequestAmino;
                fromAminoMsg(object: _32.QueryProposalsRequestAminoMsg): _32.QueryProposalsRequest;
                toAminoMsg(message: _32.QueryProposalsRequest): _32.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _32.QueryProposalsRequestProtoMsg): _32.QueryProposalsRequest;
                toProto(message: _32.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _32.QueryProposalsRequest): _32.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _32.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryProposalsResponse;
                fromPartial(object: Partial<_32.QueryProposalsResponse>): _32.QueryProposalsResponse;
                fromAmino(object: _32.QueryProposalsResponseAmino): _32.QueryProposalsResponse;
                toAmino(message: _32.QueryProposalsResponse): _32.QueryProposalsResponseAmino;
                fromAminoMsg(object: _32.QueryProposalsResponseAminoMsg): _32.QueryProposalsResponse;
                toAminoMsg(message: _32.QueryProposalsResponse): _32.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _32.QueryProposalsResponseProtoMsg): _32.QueryProposalsResponse;
                toProto(message: _32.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _32.QueryProposalsResponse): _32.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _32.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryVoteRequest;
                fromPartial(object: Partial<_32.QueryVoteRequest>): _32.QueryVoteRequest;
                fromAmino(object: _32.QueryVoteRequestAmino): _32.QueryVoteRequest;
                toAmino(message: _32.QueryVoteRequest): _32.QueryVoteRequestAmino;
                fromAminoMsg(object: _32.QueryVoteRequestAminoMsg): _32.QueryVoteRequest;
                toAminoMsg(message: _32.QueryVoteRequest): _32.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _32.QueryVoteRequestProtoMsg): _32.QueryVoteRequest;
                toProto(message: _32.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _32.QueryVoteRequest): _32.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _32.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryVoteResponse;
                fromPartial(object: Partial<_32.QueryVoteResponse>): _32.QueryVoteResponse;
                fromAmino(object: _32.QueryVoteResponseAmino): _32.QueryVoteResponse;
                toAmino(message: _32.QueryVoteResponse): _32.QueryVoteResponseAmino;
                fromAminoMsg(object: _32.QueryVoteResponseAminoMsg): _32.QueryVoteResponse;
                toAminoMsg(message: _32.QueryVoteResponse): _32.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _32.QueryVoteResponseProtoMsg): _32.QueryVoteResponse;
                toProto(message: _32.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _32.QueryVoteResponse): _32.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _32.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryVotesRequest;
                fromPartial(object: Partial<_32.QueryVotesRequest>): _32.QueryVotesRequest;
                fromAmino(object: _32.QueryVotesRequestAmino): _32.QueryVotesRequest;
                toAmino(message: _32.QueryVotesRequest): _32.QueryVotesRequestAmino;
                fromAminoMsg(object: _32.QueryVotesRequestAminoMsg): _32.QueryVotesRequest;
                toAminoMsg(message: _32.QueryVotesRequest): _32.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _32.QueryVotesRequestProtoMsg): _32.QueryVotesRequest;
                toProto(message: _32.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _32.QueryVotesRequest): _32.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _32.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryVotesResponse;
                fromPartial(object: Partial<_32.QueryVotesResponse>): _32.QueryVotesResponse;
                fromAmino(object: _32.QueryVotesResponseAmino): _32.QueryVotesResponse;
                toAmino(message: _32.QueryVotesResponse): _32.QueryVotesResponseAmino;
                fromAminoMsg(object: _32.QueryVotesResponseAminoMsg): _32.QueryVotesResponse;
                toAminoMsg(message: _32.QueryVotesResponse): _32.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _32.QueryVotesResponseProtoMsg): _32.QueryVotesResponse;
                toProto(message: _32.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _32.QueryVotesResponse): _32.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _32.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryParamsRequest;
                fromPartial(object: Partial<_32.QueryParamsRequest>): _32.QueryParamsRequest;
                fromAmino(object: _32.QueryParamsRequestAmino): _32.QueryParamsRequest;
                toAmino(message: _32.QueryParamsRequest): _32.QueryParamsRequestAmino;
                fromAminoMsg(object: _32.QueryParamsRequestAminoMsg): _32.QueryParamsRequest;
                toAminoMsg(message: _32.QueryParamsRequest): _32.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _32.QueryParamsRequestProtoMsg): _32.QueryParamsRequest;
                toProto(message: _32.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _32.QueryParamsRequest): _32.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _32.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryParamsResponse;
                fromPartial(object: Partial<_32.QueryParamsResponse>): _32.QueryParamsResponse;
                fromAmino(object: _32.QueryParamsResponseAmino): _32.QueryParamsResponse;
                toAmino(message: _32.QueryParamsResponse): _32.QueryParamsResponseAmino;
                fromAminoMsg(object: _32.QueryParamsResponseAminoMsg): _32.QueryParamsResponse;
                toAminoMsg(message: _32.QueryParamsResponse): _32.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _32.QueryParamsResponseProtoMsg): _32.QueryParamsResponse;
                toProto(message: _32.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _32.QueryParamsResponse): _32.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _32.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryDepositRequest;
                fromPartial(object: Partial<_32.QueryDepositRequest>): _32.QueryDepositRequest;
                fromAmino(object: _32.QueryDepositRequestAmino): _32.QueryDepositRequest;
                toAmino(message: _32.QueryDepositRequest): _32.QueryDepositRequestAmino;
                fromAminoMsg(object: _32.QueryDepositRequestAminoMsg): _32.QueryDepositRequest;
                toAminoMsg(message: _32.QueryDepositRequest): _32.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _32.QueryDepositRequestProtoMsg): _32.QueryDepositRequest;
                toProto(message: _32.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _32.QueryDepositRequest): _32.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _32.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryDepositResponse;
                fromPartial(object: Partial<_32.QueryDepositResponse>): _32.QueryDepositResponse;
                fromAmino(object: _32.QueryDepositResponseAmino): _32.QueryDepositResponse;
                toAmino(message: _32.QueryDepositResponse): _32.QueryDepositResponseAmino;
                fromAminoMsg(object: _32.QueryDepositResponseAminoMsg): _32.QueryDepositResponse;
                toAminoMsg(message: _32.QueryDepositResponse): _32.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _32.QueryDepositResponseProtoMsg): _32.QueryDepositResponse;
                toProto(message: _32.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _32.QueryDepositResponse): _32.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _32.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryDepositsRequest;
                fromPartial(object: Partial<_32.QueryDepositsRequest>): _32.QueryDepositsRequest;
                fromAmino(object: _32.QueryDepositsRequestAmino): _32.QueryDepositsRequest;
                toAmino(message: _32.QueryDepositsRequest): _32.QueryDepositsRequestAmino;
                fromAminoMsg(object: _32.QueryDepositsRequestAminoMsg): _32.QueryDepositsRequest;
                toAminoMsg(message: _32.QueryDepositsRequest): _32.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _32.QueryDepositsRequestProtoMsg): _32.QueryDepositsRequest;
                toProto(message: _32.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _32.QueryDepositsRequest): _32.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _32.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryDepositsResponse;
                fromPartial(object: Partial<_32.QueryDepositsResponse>): _32.QueryDepositsResponse;
                fromAmino(object: _32.QueryDepositsResponseAmino): _32.QueryDepositsResponse;
                toAmino(message: _32.QueryDepositsResponse): _32.QueryDepositsResponseAmino;
                fromAminoMsg(object: _32.QueryDepositsResponseAminoMsg): _32.QueryDepositsResponse;
                toAminoMsg(message: _32.QueryDepositsResponse): _32.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _32.QueryDepositsResponseProtoMsg): _32.QueryDepositsResponse;
                toProto(message: _32.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _32.QueryDepositsResponse): _32.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _32.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryTallyResultRequest;
                fromPartial(object: Partial<_32.QueryTallyResultRequest>): _32.QueryTallyResultRequest;
                fromAmino(object: _32.QueryTallyResultRequestAmino): _32.QueryTallyResultRequest;
                toAmino(message: _32.QueryTallyResultRequest): _32.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _32.QueryTallyResultRequestAminoMsg): _32.QueryTallyResultRequest;
                toAminoMsg(message: _32.QueryTallyResultRequest): _32.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _32.QueryTallyResultRequestProtoMsg): _32.QueryTallyResultRequest;
                toProto(message: _32.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _32.QueryTallyResultRequest): _32.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _32.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryTallyResultResponse;
                fromPartial(object: Partial<_32.QueryTallyResultResponse>): _32.QueryTallyResultResponse;
                fromAmino(object: _32.QueryTallyResultResponseAmino): _32.QueryTallyResultResponse;
                toAmino(message: _32.QueryTallyResultResponse): _32.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _32.QueryTallyResultResponseAminoMsg): _32.QueryTallyResultResponse;
                toAminoMsg(message: _32.QueryTallyResultResponse): _32.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _32.QueryTallyResultResponseProtoMsg): _32.QueryTallyResultResponse;
                toProto(message: _32.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _32.QueryTallyResultResponse): _32.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _31.VoteOption;
            voteOptionToJSON(object: _31.VoteOption): string;
            proposalStatusFromJSON(object: any): _31.ProposalStatus;
            proposalStatusToJSON(object: _31.ProposalStatus): string;
            VoteOption: typeof _31.VoteOption;
            VoteOptionSDKType: typeof _31.VoteOption;
            VoteOptionAmino: typeof _31.VoteOption;
            ProposalStatus: typeof _31.ProposalStatus;
            ProposalStatusSDKType: typeof _31.ProposalStatus;
            ProposalStatusAmino: typeof _31.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _31.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.WeightedVoteOption;
                fromPartial(object: Partial<_31.WeightedVoteOption>): _31.WeightedVoteOption;
                fromAmino(object: _31.WeightedVoteOptionAmino): _31.WeightedVoteOption;
                toAmino(message: _31.WeightedVoteOption): _31.WeightedVoteOptionAmino;
                fromAminoMsg(object: _31.WeightedVoteOptionAminoMsg): _31.WeightedVoteOption;
                toAminoMsg(message: _31.WeightedVoteOption): _31.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _31.WeightedVoteOptionProtoMsg): _31.WeightedVoteOption;
                toProto(message: _31.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _31.WeightedVoteOption): _31.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _31.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Deposit;
                fromPartial(object: Partial<_31.Deposit>): _31.Deposit;
                fromAmino(object: _31.DepositAmino): _31.Deposit;
                toAmino(message: _31.Deposit): _31.DepositAmino;
                fromAminoMsg(object: _31.DepositAminoMsg): _31.Deposit;
                toAminoMsg(message: _31.Deposit): _31.DepositAminoMsg;
                fromProtoMsg(message: _31.DepositProtoMsg): _31.Deposit;
                toProto(message: _31.Deposit): Uint8Array;
                toProtoMsg(message: _31.Deposit): _31.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _31.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Proposal;
                fromPartial(object: Partial<_31.Proposal>): _31.Proposal;
                fromAmino(object: _31.ProposalAmino): _31.Proposal;
                toAmino(message: _31.Proposal): _31.ProposalAmino;
                fromAminoMsg(object: _31.ProposalAminoMsg): _31.Proposal;
                toAminoMsg(message: _31.Proposal): _31.ProposalAminoMsg;
                fromProtoMsg(message: _31.ProposalProtoMsg): _31.Proposal;
                toProto(message: _31.Proposal): Uint8Array;
                toProtoMsg(message: _31.Proposal): _31.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _31.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.TallyResult;
                fromPartial(object: Partial<_31.TallyResult>): _31.TallyResult;
                fromAmino(object: _31.TallyResultAmino): _31.TallyResult;
                toAmino(message: _31.TallyResult): _31.TallyResultAmino;
                fromAminoMsg(object: _31.TallyResultAminoMsg): _31.TallyResult;
                toAminoMsg(message: _31.TallyResult): _31.TallyResultAminoMsg;
                fromProtoMsg(message: _31.TallyResultProtoMsg): _31.TallyResult;
                toProto(message: _31.TallyResult): Uint8Array;
                toProtoMsg(message: _31.TallyResult): _31.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _31.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Vote;
                fromPartial(object: Partial<_31.Vote>): _31.Vote;
                fromAmino(object: _31.VoteAmino): _31.Vote;
                toAmino(message: _31.Vote): _31.VoteAmino;
                fromAminoMsg(object: _31.VoteAminoMsg): _31.Vote;
                toAminoMsg(message: _31.Vote): _31.VoteAminoMsg;
                fromProtoMsg(message: _31.VoteProtoMsg): _31.Vote;
                toProto(message: _31.Vote): Uint8Array;
                toProtoMsg(message: _31.Vote): _31.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _31.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.DepositParams;
                fromPartial(object: Partial<_31.DepositParams>): _31.DepositParams;
                fromAmino(object: _31.DepositParamsAmino): _31.DepositParams;
                toAmino(message: _31.DepositParams): _31.DepositParamsAmino;
                fromAminoMsg(object: _31.DepositParamsAminoMsg): _31.DepositParams;
                toAminoMsg(message: _31.DepositParams): _31.DepositParamsAminoMsg;
                fromProtoMsg(message: _31.DepositParamsProtoMsg): _31.DepositParams;
                toProto(message: _31.DepositParams): Uint8Array;
                toProtoMsg(message: _31.DepositParams): _31.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _31.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.VotingParams;
                fromPartial(object: Partial<_31.VotingParams>): _31.VotingParams;
                fromAmino(object: _31.VotingParamsAmino): _31.VotingParams;
                toAmino(message: _31.VotingParams): _31.VotingParamsAmino;
                fromAminoMsg(object: _31.VotingParamsAminoMsg): _31.VotingParams;
                toAminoMsg(message: _31.VotingParams): _31.VotingParamsAminoMsg;
                fromProtoMsg(message: _31.VotingParamsProtoMsg): _31.VotingParams;
                toProto(message: _31.VotingParams): Uint8Array;
                toProtoMsg(message: _31.VotingParams): _31.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _31.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.TallyParams;
                fromPartial(object: Partial<_31.TallyParams>): _31.TallyParams;
                fromAmino(object: _31.TallyParamsAmino): _31.TallyParams;
                toAmino(message: _31.TallyParams): _31.TallyParamsAmino;
                fromAminoMsg(object: _31.TallyParamsAminoMsg): _31.TallyParams;
                toAminoMsg(message: _31.TallyParams): _31.TallyParamsAminoMsg;
                fromProtoMsg(message: _31.TallyParamsProtoMsg): _31.TallyParams;
                toProto(message: _31.TallyParams): Uint8Array;
                toProtoMsg(message: _31.TallyParams): _31.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _30.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GenesisState;
                fromPartial(object: Partial<_30.GenesisState>): _30.GenesisState;
                fromAmino(object: _30.GenesisStateAmino): _30.GenesisState;
                toAmino(message: _30.GenesisState): _30.GenesisStateAmino;
                fromAminoMsg(object: _30.GenesisStateAminoMsg): _30.GenesisState;
                toAminoMsg(message: _30.GenesisState): _30.GenesisStateAminoMsg;
                fromProtoMsg(message: _30.GenesisStateProtoMsg): _30.GenesisState;
                toProto(message: _30.GenesisState): Uint8Array;
                toProtoMsg(message: _30.GenesisState): _30.GenesisStateProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _221.MsgClientImpl;
            QueryClientImpl: typeof _213.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _36.QueryValidatorsRequest): Promise<_36.QueryValidatorsResponse>;
                validator(request: _36.QueryValidatorRequest): Promise<_36.QueryValidatorResponse>;
                validatorDelegations(request: _36.QueryValidatorDelegationsRequest): Promise<_36.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _36.QueryValidatorUnbondingDelegationsRequest): Promise<_36.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _36.QueryDelegationRequest): Promise<_36.QueryDelegationResponse>;
                unbondingDelegation(request: _36.QueryUnbondingDelegationRequest): Promise<_36.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _36.QueryDelegatorDelegationsRequest): Promise<_36.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _36.QueryDelegatorUnbondingDelegationsRequest): Promise<_36.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _36.QueryRedelegationsRequest): Promise<_36.QueryRedelegationsResponse>;
                delegatorValidators(request: _36.QueryDelegatorValidatorsRequest): Promise<_36.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _36.QueryDelegatorValidatorRequest): Promise<_36.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _36.QueryHistoricalInfoRequest): Promise<_36.QueryHistoricalInfoResponse>;
                pool(request?: _36.QueryPoolRequest): Promise<_36.QueryPoolResponse>;
                params(request?: _36.QueryParamsRequest): Promise<_36.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _204.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _38.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _38.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _38.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _38.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _38.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _38.MsgCreateValidator): {
                        typeUrl: string;
                        value: _38.MsgCreateValidator;
                    };
                    editValidator(value: _38.MsgEditValidator): {
                        typeUrl: string;
                        value: _38.MsgEditValidator;
                    };
                    delegate(value: _38.MsgDelegate): {
                        typeUrl: string;
                        value: _38.MsgDelegate;
                    };
                    beginRedelegate(value: _38.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _38.MsgBeginRedelegate;
                    };
                    undelegate(value: _38.MsgUndelegate): {
                        typeUrl: string;
                        value: _38.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _38.MsgCreateValidator): {
                        typeUrl: string;
                        value: _38.MsgCreateValidator;
                    };
                    editValidator(value: _38.MsgEditValidator): {
                        typeUrl: string;
                        value: _38.MsgEditValidator;
                    };
                    delegate(value: _38.MsgDelegate): {
                        typeUrl: string;
                        value: _38.MsgDelegate;
                    };
                    beginRedelegate(value: _38.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _38.MsgBeginRedelegate;
                    };
                    undelegate(value: _38.MsgUndelegate): {
                        typeUrl: string;
                        value: _38.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _38.MsgCreateValidator) => _38.MsgCreateValidatorAmino;
                    fromAmino: (object: _38.MsgCreateValidatorAmino) => _38.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _38.MsgEditValidator) => _38.MsgEditValidatorAmino;
                    fromAmino: (object: _38.MsgEditValidatorAmino) => _38.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _38.MsgDelegate) => _38.MsgDelegateAmino;
                    fromAmino: (object: _38.MsgDelegateAmino) => _38.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _38.MsgBeginRedelegate) => _38.MsgBeginRedelegateAmino;
                    fromAmino: (object: _38.MsgBeginRedelegateAmino) => _38.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _38.MsgUndelegate) => _38.MsgUndelegateAmino;
                    fromAmino: (object: _38.MsgUndelegateAmino) => _38.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _38.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgCreateValidator;
                fromPartial(object: Partial<_38.MsgCreateValidator>): _38.MsgCreateValidator;
                fromAmino(object: _38.MsgCreateValidatorAmino): _38.MsgCreateValidator;
                toAmino(message: _38.MsgCreateValidator): _38.MsgCreateValidatorAmino;
                fromAminoMsg(object: _38.MsgCreateValidatorAminoMsg): _38.MsgCreateValidator;
                toAminoMsg(message: _38.MsgCreateValidator): _38.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _38.MsgCreateValidatorProtoMsg): _38.MsgCreateValidator;
                toProto(message: _38.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _38.MsgCreateValidator): _38.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _38.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_38.MsgCreateValidatorResponse>): _38.MsgCreateValidatorResponse;
                fromAmino(_: _38.MsgCreateValidatorResponseAmino): _38.MsgCreateValidatorResponse;
                toAmino(_: _38.MsgCreateValidatorResponse): _38.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _38.MsgCreateValidatorResponseAminoMsg): _38.MsgCreateValidatorResponse;
                toAminoMsg(message: _38.MsgCreateValidatorResponse): _38.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _38.MsgCreateValidatorResponseProtoMsg): _38.MsgCreateValidatorResponse;
                toProto(message: _38.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _38.MsgCreateValidatorResponse): _38.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _38.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgEditValidator;
                fromPartial(object: Partial<_38.MsgEditValidator>): _38.MsgEditValidator;
                fromAmino(object: _38.MsgEditValidatorAmino): _38.MsgEditValidator;
                toAmino(message: _38.MsgEditValidator): _38.MsgEditValidatorAmino;
                fromAminoMsg(object: _38.MsgEditValidatorAminoMsg): _38.MsgEditValidator;
                toAminoMsg(message: _38.MsgEditValidator): _38.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _38.MsgEditValidatorProtoMsg): _38.MsgEditValidator;
                toProto(message: _38.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _38.MsgEditValidator): _38.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _38.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgEditValidatorResponse;
                fromPartial(_: Partial<_38.MsgEditValidatorResponse>): _38.MsgEditValidatorResponse;
                fromAmino(_: _38.MsgEditValidatorResponseAmino): _38.MsgEditValidatorResponse;
                toAmino(_: _38.MsgEditValidatorResponse): _38.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _38.MsgEditValidatorResponseAminoMsg): _38.MsgEditValidatorResponse;
                toAminoMsg(message: _38.MsgEditValidatorResponse): _38.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _38.MsgEditValidatorResponseProtoMsg): _38.MsgEditValidatorResponse;
                toProto(message: _38.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _38.MsgEditValidatorResponse): _38.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _38.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgDelegate;
                fromPartial(object: Partial<_38.MsgDelegate>): _38.MsgDelegate;
                fromAmino(object: _38.MsgDelegateAmino): _38.MsgDelegate;
                toAmino(message: _38.MsgDelegate): _38.MsgDelegateAmino;
                fromAminoMsg(object: _38.MsgDelegateAminoMsg): _38.MsgDelegate;
                toAminoMsg(message: _38.MsgDelegate): _38.MsgDelegateAminoMsg;
                fromProtoMsg(message: _38.MsgDelegateProtoMsg): _38.MsgDelegate;
                toProto(message: _38.MsgDelegate): Uint8Array;
                toProtoMsg(message: _38.MsgDelegate): _38.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _38.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgDelegateResponse;
                fromPartial(_: Partial<_38.MsgDelegateResponse>): _38.MsgDelegateResponse;
                fromAmino(_: _38.MsgDelegateResponseAmino): _38.MsgDelegateResponse;
                toAmino(_: _38.MsgDelegateResponse): _38.MsgDelegateResponseAmino;
                fromAminoMsg(object: _38.MsgDelegateResponseAminoMsg): _38.MsgDelegateResponse;
                toAminoMsg(message: _38.MsgDelegateResponse): _38.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _38.MsgDelegateResponseProtoMsg): _38.MsgDelegateResponse;
                toProto(message: _38.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _38.MsgDelegateResponse): _38.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _38.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgBeginRedelegate;
                fromPartial(object: Partial<_38.MsgBeginRedelegate>): _38.MsgBeginRedelegate;
                fromAmino(object: _38.MsgBeginRedelegateAmino): _38.MsgBeginRedelegate;
                toAmino(message: _38.MsgBeginRedelegate): _38.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _38.MsgBeginRedelegateAminoMsg): _38.MsgBeginRedelegate;
                toAminoMsg(message: _38.MsgBeginRedelegate): _38.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _38.MsgBeginRedelegateProtoMsg): _38.MsgBeginRedelegate;
                toProto(message: _38.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _38.MsgBeginRedelegate): _38.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _38.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_38.MsgBeginRedelegateResponse>): _38.MsgBeginRedelegateResponse;
                fromAmino(object: _38.MsgBeginRedelegateResponseAmino): _38.MsgBeginRedelegateResponse;
                toAmino(message: _38.MsgBeginRedelegateResponse): _38.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _38.MsgBeginRedelegateResponseAminoMsg): _38.MsgBeginRedelegateResponse;
                toAminoMsg(message: _38.MsgBeginRedelegateResponse): _38.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _38.MsgBeginRedelegateResponseProtoMsg): _38.MsgBeginRedelegateResponse;
                toProto(message: _38.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _38.MsgBeginRedelegateResponse): _38.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _38.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgUndelegate;
                fromPartial(object: Partial<_38.MsgUndelegate>): _38.MsgUndelegate;
                fromAmino(object: _38.MsgUndelegateAmino): _38.MsgUndelegate;
                toAmino(message: _38.MsgUndelegate): _38.MsgUndelegateAmino;
                fromAminoMsg(object: _38.MsgUndelegateAminoMsg): _38.MsgUndelegate;
                toAminoMsg(message: _38.MsgUndelegate): _38.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _38.MsgUndelegateProtoMsg): _38.MsgUndelegate;
                toProto(message: _38.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _38.MsgUndelegate): _38.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _38.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgUndelegateResponse;
                fromPartial(object: Partial<_38.MsgUndelegateResponse>): _38.MsgUndelegateResponse;
                fromAmino(object: _38.MsgUndelegateResponseAmino): _38.MsgUndelegateResponse;
                toAmino(message: _38.MsgUndelegateResponse): _38.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _38.MsgUndelegateResponseAminoMsg): _38.MsgUndelegateResponse;
                toAminoMsg(message: _38.MsgUndelegateResponse): _38.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _38.MsgUndelegateResponseProtoMsg): _38.MsgUndelegateResponse;
                toProto(message: _38.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _38.MsgUndelegateResponse): _38.MsgUndelegateResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => string;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => {
                typeUrl: string;
                value: Uint8Array;
            };
            bondStatusFromJSON(object: any): _37.BondStatus;
            bondStatusToJSON(object: _37.BondStatus): string;
            BondStatus: typeof _37.BondStatus;
            BondStatusSDKType: typeof _37.BondStatus;
            BondStatusAmino: typeof _37.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _37.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.HistoricalInfo;
                fromPartial(object: Partial<_37.HistoricalInfo>): _37.HistoricalInfo;
                fromAmino(object: _37.HistoricalInfoAmino): _37.HistoricalInfo;
                toAmino(message: _37.HistoricalInfo): _37.HistoricalInfoAmino;
                fromAminoMsg(object: _37.HistoricalInfoAminoMsg): _37.HistoricalInfo;
                toAminoMsg(message: _37.HistoricalInfo): _37.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _37.HistoricalInfoProtoMsg): _37.HistoricalInfo;
                toProto(message: _37.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _37.HistoricalInfo): _37.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _37.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.CommissionRates;
                fromPartial(object: Partial<_37.CommissionRates>): _37.CommissionRates;
                fromAmino(object: _37.CommissionRatesAmino): _37.CommissionRates;
                toAmino(message: _37.CommissionRates): _37.CommissionRatesAmino;
                fromAminoMsg(object: _37.CommissionRatesAminoMsg): _37.CommissionRates;
                toAminoMsg(message: _37.CommissionRates): _37.CommissionRatesAminoMsg;
                fromProtoMsg(message: _37.CommissionRatesProtoMsg): _37.CommissionRates;
                toProto(message: _37.CommissionRates): Uint8Array;
                toProtoMsg(message: _37.CommissionRates): _37.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _37.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Commission;
                fromPartial(object: Partial<_37.Commission>): _37.Commission;
                fromAmino(object: _37.CommissionAmino): _37.Commission;
                toAmino(message: _37.Commission): _37.CommissionAmino;
                fromAminoMsg(object: _37.CommissionAminoMsg): _37.Commission;
                toAminoMsg(message: _37.Commission): _37.CommissionAminoMsg;
                fromProtoMsg(message: _37.CommissionProtoMsg): _37.Commission;
                toProto(message: _37.Commission): Uint8Array;
                toProtoMsg(message: _37.Commission): _37.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _37.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Description;
                fromPartial(object: Partial<_37.Description>): _37.Description;
                fromAmino(object: _37.DescriptionAmino): _37.Description;
                toAmino(message: _37.Description): _37.DescriptionAmino;
                fromAminoMsg(object: _37.DescriptionAminoMsg): _37.Description;
                toAminoMsg(message: _37.Description): _37.DescriptionAminoMsg;
                fromProtoMsg(message: _37.DescriptionProtoMsg): _37.Description;
                toProto(message: _37.Description): Uint8Array;
                toProtoMsg(message: _37.Description): _37.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _37.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Validator;
                fromPartial(object: Partial<_37.Validator>): _37.Validator;
                fromAmino(object: _37.ValidatorAmino): _37.Validator;
                toAmino(message: _37.Validator): _37.ValidatorAmino;
                fromAminoMsg(object: _37.ValidatorAminoMsg): _37.Validator;
                toAminoMsg(message: _37.Validator): _37.ValidatorAminoMsg;
                fromProtoMsg(message: _37.ValidatorProtoMsg): _37.Validator;
                toProto(message: _37.Validator): Uint8Array;
                toProtoMsg(message: _37.Validator): _37.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _37.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.ValAddresses;
                fromPartial(object: Partial<_37.ValAddresses>): _37.ValAddresses;
                fromAmino(object: _37.ValAddressesAmino): _37.ValAddresses;
                toAmino(message: _37.ValAddresses): _37.ValAddressesAmino;
                fromAminoMsg(object: _37.ValAddressesAminoMsg): _37.ValAddresses;
                toAminoMsg(message: _37.ValAddresses): _37.ValAddressesAminoMsg;
                fromProtoMsg(message: _37.ValAddressesProtoMsg): _37.ValAddresses;
                toProto(message: _37.ValAddresses): Uint8Array;
                toProtoMsg(message: _37.ValAddresses): _37.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _37.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.DVPair;
                fromPartial(object: Partial<_37.DVPair>): _37.DVPair;
                fromAmino(object: _37.DVPairAmino): _37.DVPair;
                toAmino(message: _37.DVPair): _37.DVPairAmino;
                fromAminoMsg(object: _37.DVPairAminoMsg): _37.DVPair;
                toAminoMsg(message: _37.DVPair): _37.DVPairAminoMsg;
                fromProtoMsg(message: _37.DVPairProtoMsg): _37.DVPair;
                toProto(message: _37.DVPair): Uint8Array;
                toProtoMsg(message: _37.DVPair): _37.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _37.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.DVPairs;
                fromPartial(object: Partial<_37.DVPairs>): _37.DVPairs;
                fromAmino(object: _37.DVPairsAmino): _37.DVPairs;
                toAmino(message: _37.DVPairs): _37.DVPairsAmino;
                fromAminoMsg(object: _37.DVPairsAminoMsg): _37.DVPairs;
                toAminoMsg(message: _37.DVPairs): _37.DVPairsAminoMsg;
                fromProtoMsg(message: _37.DVPairsProtoMsg): _37.DVPairs;
                toProto(message: _37.DVPairs): Uint8Array;
                toProtoMsg(message: _37.DVPairs): _37.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _37.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.DVVTriplet;
                fromPartial(object: Partial<_37.DVVTriplet>): _37.DVVTriplet;
                fromAmino(object: _37.DVVTripletAmino): _37.DVVTriplet;
                toAmino(message: _37.DVVTriplet): _37.DVVTripletAmino;
                fromAminoMsg(object: _37.DVVTripletAminoMsg): _37.DVVTriplet;
                toAminoMsg(message: _37.DVVTriplet): _37.DVVTripletAminoMsg;
                fromProtoMsg(message: _37.DVVTripletProtoMsg): _37.DVVTriplet;
                toProto(message: _37.DVVTriplet): Uint8Array;
                toProtoMsg(message: _37.DVVTriplet): _37.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _37.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.DVVTriplets;
                fromPartial(object: Partial<_37.DVVTriplets>): _37.DVVTriplets;
                fromAmino(object: _37.DVVTripletsAmino): _37.DVVTriplets;
                toAmino(message: _37.DVVTriplets): _37.DVVTripletsAmino;
                fromAminoMsg(object: _37.DVVTripletsAminoMsg): _37.DVVTriplets;
                toAminoMsg(message: _37.DVVTriplets): _37.DVVTripletsAminoMsg;
                fromProtoMsg(message: _37.DVVTripletsProtoMsg): _37.DVVTriplets;
                toProto(message: _37.DVVTriplets): Uint8Array;
                toProtoMsg(message: _37.DVVTriplets): _37.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _37.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Delegation;
                fromPartial(object: Partial<_37.Delegation>): _37.Delegation;
                fromAmino(object: _37.DelegationAmino): _37.Delegation;
                toAmino(message: _37.Delegation): _37.DelegationAmino;
                fromAminoMsg(object: _37.DelegationAminoMsg): _37.Delegation;
                toAminoMsg(message: _37.Delegation): _37.DelegationAminoMsg;
                fromProtoMsg(message: _37.DelegationProtoMsg): _37.Delegation;
                toProto(message: _37.Delegation): Uint8Array;
                toProtoMsg(message: _37.Delegation): _37.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _37.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.UnbondingDelegation;
                fromPartial(object: Partial<_37.UnbondingDelegation>): _37.UnbondingDelegation;
                fromAmino(object: _37.UnbondingDelegationAmino): _37.UnbondingDelegation;
                toAmino(message: _37.UnbondingDelegation): _37.UnbondingDelegationAmino;
                fromAminoMsg(object: _37.UnbondingDelegationAminoMsg): _37.UnbondingDelegation;
                toAminoMsg(message: _37.UnbondingDelegation): _37.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _37.UnbondingDelegationProtoMsg): _37.UnbondingDelegation;
                toProto(message: _37.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _37.UnbondingDelegation): _37.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _37.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.UnbondingDelegationEntry;
                fromPartial(object: Partial<_37.UnbondingDelegationEntry>): _37.UnbondingDelegationEntry;
                fromAmino(object: _37.UnbondingDelegationEntryAmino): _37.UnbondingDelegationEntry;
                toAmino(message: _37.UnbondingDelegationEntry): _37.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _37.UnbondingDelegationEntryAminoMsg): _37.UnbondingDelegationEntry;
                toAminoMsg(message: _37.UnbondingDelegationEntry): _37.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _37.UnbondingDelegationEntryProtoMsg): _37.UnbondingDelegationEntry;
                toProto(message: _37.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _37.UnbondingDelegationEntry): _37.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _37.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.RedelegationEntry;
                fromPartial(object: Partial<_37.RedelegationEntry>): _37.RedelegationEntry;
                fromAmino(object: _37.RedelegationEntryAmino): _37.RedelegationEntry;
                toAmino(message: _37.RedelegationEntry): _37.RedelegationEntryAmino;
                fromAminoMsg(object: _37.RedelegationEntryAminoMsg): _37.RedelegationEntry;
                toAminoMsg(message: _37.RedelegationEntry): _37.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _37.RedelegationEntryProtoMsg): _37.RedelegationEntry;
                toProto(message: _37.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _37.RedelegationEntry): _37.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _37.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Redelegation;
                fromPartial(object: Partial<_37.Redelegation>): _37.Redelegation;
                fromAmino(object: _37.RedelegationAmino): _37.Redelegation;
                toAmino(message: _37.Redelegation): _37.RedelegationAmino;
                fromAminoMsg(object: _37.RedelegationAminoMsg): _37.Redelegation;
                toAminoMsg(message: _37.Redelegation): _37.RedelegationAminoMsg;
                fromProtoMsg(message: _37.RedelegationProtoMsg): _37.Redelegation;
                toProto(message: _37.Redelegation): Uint8Array;
                toProtoMsg(message: _37.Redelegation): _37.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _37.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Params;
                fromPartial(object: Partial<_37.Params>): _37.Params;
                fromAmino(object: _37.ParamsAmino): _37.Params;
                toAmino(message: _37.Params): _37.ParamsAmino;
                fromAminoMsg(object: _37.ParamsAminoMsg): _37.Params;
                toAminoMsg(message: _37.Params): _37.ParamsAminoMsg;
                fromProtoMsg(message: _37.ParamsProtoMsg): _37.Params;
                toProto(message: _37.Params): Uint8Array;
                toProtoMsg(message: _37.Params): _37.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _37.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.DelegationResponse;
                fromPartial(object: Partial<_37.DelegationResponse>): _37.DelegationResponse;
                fromAmino(object: _37.DelegationResponseAmino): _37.DelegationResponse;
                toAmino(message: _37.DelegationResponse): _37.DelegationResponseAmino;
                fromAminoMsg(object: _37.DelegationResponseAminoMsg): _37.DelegationResponse;
                toAminoMsg(message: _37.DelegationResponse): _37.DelegationResponseAminoMsg;
                fromProtoMsg(message: _37.DelegationResponseProtoMsg): _37.DelegationResponse;
                toProto(message: _37.DelegationResponse): Uint8Array;
                toProtoMsg(message: _37.DelegationResponse): _37.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _37.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.RedelegationEntryResponse;
                fromPartial(object: Partial<_37.RedelegationEntryResponse>): _37.RedelegationEntryResponse;
                fromAmino(object: _37.RedelegationEntryResponseAmino): _37.RedelegationEntryResponse;
                toAmino(message: _37.RedelegationEntryResponse): _37.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _37.RedelegationEntryResponseAminoMsg): _37.RedelegationEntryResponse;
                toAminoMsg(message: _37.RedelegationEntryResponse): _37.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _37.RedelegationEntryResponseProtoMsg): _37.RedelegationEntryResponse;
                toProto(message: _37.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _37.RedelegationEntryResponse): _37.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _37.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.RedelegationResponse;
                fromPartial(object: Partial<_37.RedelegationResponse>): _37.RedelegationResponse;
                fromAmino(object: _37.RedelegationResponseAmino): _37.RedelegationResponse;
                toAmino(message: _37.RedelegationResponse): _37.RedelegationResponseAmino;
                fromAminoMsg(object: _37.RedelegationResponseAminoMsg): _37.RedelegationResponse;
                toAminoMsg(message: _37.RedelegationResponse): _37.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _37.RedelegationResponseProtoMsg): _37.RedelegationResponse;
                toProto(message: _37.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _37.RedelegationResponse): _37.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _37.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Pool;
                fromPartial(object: Partial<_37.Pool>): _37.Pool;
                fromAmino(object: _37.PoolAmino): _37.Pool;
                toAmino(message: _37.Pool): _37.PoolAmino;
                fromAminoMsg(object: _37.PoolAminoMsg): _37.Pool;
                toAminoMsg(message: _37.Pool): _37.PoolAminoMsg;
                fromProtoMsg(message: _37.PoolProtoMsg): _37.Pool;
                toProto(message: _37.Pool): Uint8Array;
                toProtoMsg(message: _37.Pool): _37.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _36.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorsRequest;
                fromPartial(object: Partial<_36.QueryValidatorsRequest>): _36.QueryValidatorsRequest;
                fromAmino(object: _36.QueryValidatorsRequestAmino): _36.QueryValidatorsRequest;
                toAmino(message: _36.QueryValidatorsRequest): _36.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _36.QueryValidatorsRequestAminoMsg): _36.QueryValidatorsRequest;
                toAminoMsg(message: _36.QueryValidatorsRequest): _36.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _36.QueryValidatorsRequestProtoMsg): _36.QueryValidatorsRequest;
                toProto(message: _36.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _36.QueryValidatorsRequest): _36.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _36.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorsResponse;
                fromPartial(object: Partial<_36.QueryValidatorsResponse>): _36.QueryValidatorsResponse;
                fromAmino(object: _36.QueryValidatorsResponseAmino): _36.QueryValidatorsResponse;
                toAmino(message: _36.QueryValidatorsResponse): _36.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _36.QueryValidatorsResponseAminoMsg): _36.QueryValidatorsResponse;
                toAminoMsg(message: _36.QueryValidatorsResponse): _36.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _36.QueryValidatorsResponseProtoMsg): _36.QueryValidatorsResponse;
                toProto(message: _36.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _36.QueryValidatorsResponse): _36.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _36.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorRequest;
                fromPartial(object: Partial<_36.QueryValidatorRequest>): _36.QueryValidatorRequest;
                fromAmino(object: _36.QueryValidatorRequestAmino): _36.QueryValidatorRequest;
                toAmino(message: _36.QueryValidatorRequest): _36.QueryValidatorRequestAmino;
                fromAminoMsg(object: _36.QueryValidatorRequestAminoMsg): _36.QueryValidatorRequest;
                toAminoMsg(message: _36.QueryValidatorRequest): _36.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _36.QueryValidatorRequestProtoMsg): _36.QueryValidatorRequest;
                toProto(message: _36.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _36.QueryValidatorRequest): _36.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _36.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorResponse;
                fromPartial(object: Partial<_36.QueryValidatorResponse>): _36.QueryValidatorResponse;
                fromAmino(object: _36.QueryValidatorResponseAmino): _36.QueryValidatorResponse;
                toAmino(message: _36.QueryValidatorResponse): _36.QueryValidatorResponseAmino;
                fromAminoMsg(object: _36.QueryValidatorResponseAminoMsg): _36.QueryValidatorResponse;
                toAminoMsg(message: _36.QueryValidatorResponse): _36.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _36.QueryValidatorResponseProtoMsg): _36.QueryValidatorResponse;
                toProto(message: _36.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _36.QueryValidatorResponse): _36.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _36.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_36.QueryValidatorDelegationsRequest>): _36.QueryValidatorDelegationsRequest;
                fromAmino(object: _36.QueryValidatorDelegationsRequestAmino): _36.QueryValidatorDelegationsRequest;
                toAmino(message: _36.QueryValidatorDelegationsRequest): _36.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _36.QueryValidatorDelegationsRequestAminoMsg): _36.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _36.QueryValidatorDelegationsRequest): _36.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _36.QueryValidatorDelegationsRequestProtoMsg): _36.QueryValidatorDelegationsRequest;
                toProto(message: _36.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _36.QueryValidatorDelegationsRequest): _36.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _36.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_36.QueryValidatorDelegationsResponse>): _36.QueryValidatorDelegationsResponse;
                fromAmino(object: _36.QueryValidatorDelegationsResponseAmino): _36.QueryValidatorDelegationsResponse;
                toAmino(message: _36.QueryValidatorDelegationsResponse): _36.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _36.QueryValidatorDelegationsResponseAminoMsg): _36.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _36.QueryValidatorDelegationsResponse): _36.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _36.QueryValidatorDelegationsResponseProtoMsg): _36.QueryValidatorDelegationsResponse;
                toProto(message: _36.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _36.QueryValidatorDelegationsResponse): _36.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _36.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_36.QueryValidatorUnbondingDelegationsRequest>): _36.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _36.QueryValidatorUnbondingDelegationsRequestAmino): _36.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _36.QueryValidatorUnbondingDelegationsRequest): _36.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _36.QueryValidatorUnbondingDelegationsRequestAminoMsg): _36.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _36.QueryValidatorUnbondingDelegationsRequest): _36.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _36.QueryValidatorUnbondingDelegationsRequestProtoMsg): _36.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _36.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _36.QueryValidatorUnbondingDelegationsRequest): _36.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _36.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_36.QueryValidatorUnbondingDelegationsResponse>): _36.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _36.QueryValidatorUnbondingDelegationsResponseAmino): _36.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _36.QueryValidatorUnbondingDelegationsResponse): _36.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _36.QueryValidatorUnbondingDelegationsResponseAminoMsg): _36.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _36.QueryValidatorUnbondingDelegationsResponse): _36.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _36.QueryValidatorUnbondingDelegationsResponseProtoMsg): _36.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _36.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _36.QueryValidatorUnbondingDelegationsResponse): _36.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _36.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegationRequest;
                fromPartial(object: Partial<_36.QueryDelegationRequest>): _36.QueryDelegationRequest;
                fromAmino(object: _36.QueryDelegationRequestAmino): _36.QueryDelegationRequest;
                toAmino(message: _36.QueryDelegationRequest): _36.QueryDelegationRequestAmino;
                fromAminoMsg(object: _36.QueryDelegationRequestAminoMsg): _36.QueryDelegationRequest;
                toAminoMsg(message: _36.QueryDelegationRequest): _36.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _36.QueryDelegationRequestProtoMsg): _36.QueryDelegationRequest;
                toProto(message: _36.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _36.QueryDelegationRequest): _36.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _36.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegationResponse;
                fromPartial(object: Partial<_36.QueryDelegationResponse>): _36.QueryDelegationResponse;
                fromAmino(object: _36.QueryDelegationResponseAmino): _36.QueryDelegationResponse;
                toAmino(message: _36.QueryDelegationResponse): _36.QueryDelegationResponseAmino;
                fromAminoMsg(object: _36.QueryDelegationResponseAminoMsg): _36.QueryDelegationResponse;
                toAminoMsg(message: _36.QueryDelegationResponse): _36.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _36.QueryDelegationResponseProtoMsg): _36.QueryDelegationResponse;
                toProto(message: _36.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _36.QueryDelegationResponse): _36.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _36.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_36.QueryUnbondingDelegationRequest>): _36.QueryUnbondingDelegationRequest;
                fromAmino(object: _36.QueryUnbondingDelegationRequestAmino): _36.QueryUnbondingDelegationRequest;
                toAmino(message: _36.QueryUnbondingDelegationRequest): _36.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _36.QueryUnbondingDelegationRequestAminoMsg): _36.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _36.QueryUnbondingDelegationRequest): _36.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _36.QueryUnbondingDelegationRequestProtoMsg): _36.QueryUnbondingDelegationRequest;
                toProto(message: _36.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _36.QueryUnbondingDelegationRequest): _36.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _36.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_36.QueryUnbondingDelegationResponse>): _36.QueryUnbondingDelegationResponse;
                fromAmino(object: _36.QueryUnbondingDelegationResponseAmino): _36.QueryUnbondingDelegationResponse;
                toAmino(message: _36.QueryUnbondingDelegationResponse): _36.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _36.QueryUnbondingDelegationResponseAminoMsg): _36.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _36.QueryUnbondingDelegationResponse): _36.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _36.QueryUnbondingDelegationResponseProtoMsg): _36.QueryUnbondingDelegationResponse;
                toProto(message: _36.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _36.QueryUnbondingDelegationResponse): _36.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _36.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_36.QueryDelegatorDelegationsRequest>): _36.QueryDelegatorDelegationsRequest;
                fromAmino(object: _36.QueryDelegatorDelegationsRequestAmino): _36.QueryDelegatorDelegationsRequest;
                toAmino(message: _36.QueryDelegatorDelegationsRequest): _36.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _36.QueryDelegatorDelegationsRequestAminoMsg): _36.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _36.QueryDelegatorDelegationsRequest): _36.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _36.QueryDelegatorDelegationsRequestProtoMsg): _36.QueryDelegatorDelegationsRequest;
                toProto(message: _36.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _36.QueryDelegatorDelegationsRequest): _36.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _36.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_36.QueryDelegatorDelegationsResponse>): _36.QueryDelegatorDelegationsResponse;
                fromAmino(object: _36.QueryDelegatorDelegationsResponseAmino): _36.QueryDelegatorDelegationsResponse;
                toAmino(message: _36.QueryDelegatorDelegationsResponse): _36.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _36.QueryDelegatorDelegationsResponseAminoMsg): _36.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _36.QueryDelegatorDelegationsResponse): _36.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _36.QueryDelegatorDelegationsResponseProtoMsg): _36.QueryDelegatorDelegationsResponse;
                toProto(message: _36.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _36.QueryDelegatorDelegationsResponse): _36.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _36.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_36.QueryDelegatorUnbondingDelegationsRequest>): _36.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _36.QueryDelegatorUnbondingDelegationsRequestAmino): _36.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _36.QueryDelegatorUnbondingDelegationsRequest): _36.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _36.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _36.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _36.QueryDelegatorUnbondingDelegationsRequest): _36.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _36.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _36.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _36.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _36.QueryDelegatorUnbondingDelegationsRequest): _36.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _36.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_36.QueryDelegatorUnbondingDelegationsResponse>): _36.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _36.QueryDelegatorUnbondingDelegationsResponseAmino): _36.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _36.QueryDelegatorUnbondingDelegationsResponse): _36.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _36.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _36.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _36.QueryDelegatorUnbondingDelegationsResponse): _36.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _36.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _36.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _36.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _36.QueryDelegatorUnbondingDelegationsResponse): _36.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _36.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryRedelegationsRequest;
                fromPartial(object: Partial<_36.QueryRedelegationsRequest>): _36.QueryRedelegationsRequest;
                fromAmino(object: _36.QueryRedelegationsRequestAmino): _36.QueryRedelegationsRequest;
                toAmino(message: _36.QueryRedelegationsRequest): _36.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _36.QueryRedelegationsRequestAminoMsg): _36.QueryRedelegationsRequest;
                toAminoMsg(message: _36.QueryRedelegationsRequest): _36.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _36.QueryRedelegationsRequestProtoMsg): _36.QueryRedelegationsRequest;
                toProto(message: _36.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _36.QueryRedelegationsRequest): _36.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _36.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryRedelegationsResponse;
                fromPartial(object: Partial<_36.QueryRedelegationsResponse>): _36.QueryRedelegationsResponse;
                fromAmino(object: _36.QueryRedelegationsResponseAmino): _36.QueryRedelegationsResponse;
                toAmino(message: _36.QueryRedelegationsResponse): _36.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _36.QueryRedelegationsResponseAminoMsg): _36.QueryRedelegationsResponse;
                toAminoMsg(message: _36.QueryRedelegationsResponse): _36.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _36.QueryRedelegationsResponseProtoMsg): _36.QueryRedelegationsResponse;
                toProto(message: _36.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _36.QueryRedelegationsResponse): _36.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _36.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_36.QueryDelegatorValidatorsRequest>): _36.QueryDelegatorValidatorsRequest;
                fromAmino(object: _36.QueryDelegatorValidatorsRequestAmino): _36.QueryDelegatorValidatorsRequest;
                toAmino(message: _36.QueryDelegatorValidatorsRequest): _36.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _36.QueryDelegatorValidatorsRequestAminoMsg): _36.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _36.QueryDelegatorValidatorsRequest): _36.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _36.QueryDelegatorValidatorsRequestProtoMsg): _36.QueryDelegatorValidatorsRequest;
                toProto(message: _36.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _36.QueryDelegatorValidatorsRequest): _36.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _36.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_36.QueryDelegatorValidatorsResponse>): _36.QueryDelegatorValidatorsResponse;
                fromAmino(object: _36.QueryDelegatorValidatorsResponseAmino): _36.QueryDelegatorValidatorsResponse;
                toAmino(message: _36.QueryDelegatorValidatorsResponse): _36.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _36.QueryDelegatorValidatorsResponseAminoMsg): _36.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _36.QueryDelegatorValidatorsResponse): _36.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _36.QueryDelegatorValidatorsResponseProtoMsg): _36.QueryDelegatorValidatorsResponse;
                toProto(message: _36.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _36.QueryDelegatorValidatorsResponse): _36.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _36.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_36.QueryDelegatorValidatorRequest>): _36.QueryDelegatorValidatorRequest;
                fromAmino(object: _36.QueryDelegatorValidatorRequestAmino): _36.QueryDelegatorValidatorRequest;
                toAmino(message: _36.QueryDelegatorValidatorRequest): _36.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _36.QueryDelegatorValidatorRequestAminoMsg): _36.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _36.QueryDelegatorValidatorRequest): _36.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _36.QueryDelegatorValidatorRequestProtoMsg): _36.QueryDelegatorValidatorRequest;
                toProto(message: _36.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _36.QueryDelegatorValidatorRequest): _36.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _36.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_36.QueryDelegatorValidatorResponse>): _36.QueryDelegatorValidatorResponse;
                fromAmino(object: _36.QueryDelegatorValidatorResponseAmino): _36.QueryDelegatorValidatorResponse;
                toAmino(message: _36.QueryDelegatorValidatorResponse): _36.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _36.QueryDelegatorValidatorResponseAminoMsg): _36.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _36.QueryDelegatorValidatorResponse): _36.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _36.QueryDelegatorValidatorResponseProtoMsg): _36.QueryDelegatorValidatorResponse;
                toProto(message: _36.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _36.QueryDelegatorValidatorResponse): _36.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _36.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_36.QueryHistoricalInfoRequest>): _36.QueryHistoricalInfoRequest;
                fromAmino(object: _36.QueryHistoricalInfoRequestAmino): _36.QueryHistoricalInfoRequest;
                toAmino(message: _36.QueryHistoricalInfoRequest): _36.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _36.QueryHistoricalInfoRequestAminoMsg): _36.QueryHistoricalInfoRequest;
                toAminoMsg(message: _36.QueryHistoricalInfoRequest): _36.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _36.QueryHistoricalInfoRequestProtoMsg): _36.QueryHistoricalInfoRequest;
                toProto(message: _36.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _36.QueryHistoricalInfoRequest): _36.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _36.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_36.QueryHistoricalInfoResponse>): _36.QueryHistoricalInfoResponse;
                fromAmino(object: _36.QueryHistoricalInfoResponseAmino): _36.QueryHistoricalInfoResponse;
                toAmino(message: _36.QueryHistoricalInfoResponse): _36.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _36.QueryHistoricalInfoResponseAminoMsg): _36.QueryHistoricalInfoResponse;
                toAminoMsg(message: _36.QueryHistoricalInfoResponse): _36.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _36.QueryHistoricalInfoResponseProtoMsg): _36.QueryHistoricalInfoResponse;
                toProto(message: _36.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _36.QueryHistoricalInfoResponse): _36.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _36.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryPoolRequest;
                fromPartial(_: Partial<_36.QueryPoolRequest>): _36.QueryPoolRequest;
                fromAmino(_: _36.QueryPoolRequestAmino): _36.QueryPoolRequest;
                toAmino(_: _36.QueryPoolRequest): _36.QueryPoolRequestAmino;
                fromAminoMsg(object: _36.QueryPoolRequestAminoMsg): _36.QueryPoolRequest;
                toAminoMsg(message: _36.QueryPoolRequest): _36.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _36.QueryPoolRequestProtoMsg): _36.QueryPoolRequest;
                toProto(message: _36.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _36.QueryPoolRequest): _36.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _36.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryPoolResponse;
                fromPartial(object: Partial<_36.QueryPoolResponse>): _36.QueryPoolResponse;
                fromAmino(object: _36.QueryPoolResponseAmino): _36.QueryPoolResponse;
                toAmino(message: _36.QueryPoolResponse): _36.QueryPoolResponseAmino;
                fromAminoMsg(object: _36.QueryPoolResponseAminoMsg): _36.QueryPoolResponse;
                toAminoMsg(message: _36.QueryPoolResponse): _36.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _36.QueryPoolResponseProtoMsg): _36.QueryPoolResponse;
                toProto(message: _36.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _36.QueryPoolResponse): _36.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _36.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryParamsRequest;
                fromPartial(_: Partial<_36.QueryParamsRequest>): _36.QueryParamsRequest;
                fromAmino(_: _36.QueryParamsRequestAmino): _36.QueryParamsRequest;
                toAmino(_: _36.QueryParamsRequest): _36.QueryParamsRequestAmino;
                fromAminoMsg(object: _36.QueryParamsRequestAminoMsg): _36.QueryParamsRequest;
                toAminoMsg(message: _36.QueryParamsRequest): _36.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _36.QueryParamsRequestProtoMsg): _36.QueryParamsRequest;
                toProto(message: _36.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _36.QueryParamsRequest): _36.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _36.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryParamsResponse;
                fromPartial(object: Partial<_36.QueryParamsResponse>): _36.QueryParamsResponse;
                fromAmino(object: _36.QueryParamsResponseAmino): _36.QueryParamsResponse;
                toAmino(message: _36.QueryParamsResponse): _36.QueryParamsResponseAmino;
                fromAminoMsg(object: _36.QueryParamsResponseAminoMsg): _36.QueryParamsResponse;
                toAminoMsg(message: _36.QueryParamsResponse): _36.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _36.QueryParamsResponseProtoMsg): _36.QueryParamsResponse;
                toProto(message: _36.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _36.QueryParamsResponse): _36.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _35.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.GenesisState;
                fromPartial(object: Partial<_35.GenesisState>): _35.GenesisState;
                fromAmino(object: _35.GenesisStateAmino): _35.GenesisState;
                toAmino(message: _35.GenesisState): _35.GenesisStateAmino;
                fromAminoMsg(object: _35.GenesisStateAminoMsg): _35.GenesisState;
                toAminoMsg(message: _35.GenesisState): _35.GenesisStateAminoMsg;
                fromProtoMsg(message: _35.GenesisStateProtoMsg): _35.GenesisState;
                toProto(message: _35.GenesisState): Uint8Array;
                toProtoMsg(message: _35.GenesisState): _35.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _35.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.LastValidatorPower;
                fromPartial(object: Partial<_35.LastValidatorPower>): _35.LastValidatorPower;
                fromAmino(object: _35.LastValidatorPowerAmino): _35.LastValidatorPower;
                toAmino(message: _35.LastValidatorPower): _35.LastValidatorPowerAmino;
                fromAminoMsg(object: _35.LastValidatorPowerAminoMsg): _35.LastValidatorPower;
                toAminoMsg(message: _35.LastValidatorPower): _35.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _35.LastValidatorPowerProtoMsg): _35.LastValidatorPower;
                toProto(message: _35.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _35.LastValidatorPower): _35.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _34.AuthorizationType;
            authorizationTypeToJSON(object: _34.AuthorizationType): string;
            AuthorizationType: typeof _34.AuthorizationType;
            AuthorizationTypeSDKType: typeof _34.AuthorizationType;
            AuthorizationTypeAmino: typeof _34.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _34.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.StakeAuthorization;
                fromPartial(object: Partial<_34.StakeAuthorization>): _34.StakeAuthorization;
                fromAmino(object: _34.StakeAuthorizationAmino): _34.StakeAuthorization;
                toAmino(message: _34.StakeAuthorization): _34.StakeAuthorizationAmino;
                fromAminoMsg(object: _34.StakeAuthorizationAminoMsg): _34.StakeAuthorization;
                toAminoMsg(message: _34.StakeAuthorization): _34.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _34.StakeAuthorizationProtoMsg): _34.StakeAuthorization;
                toProto(message: _34.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _34.StakeAuthorization): _34.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _34.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.StakeAuthorization_Validators;
                fromPartial(object: Partial<_34.StakeAuthorization_Validators>): _34.StakeAuthorization_Validators;
                fromAmino(object: _34.StakeAuthorization_ValidatorsAmino): _34.StakeAuthorization_Validators;
                toAmino(message: _34.StakeAuthorization_Validators): _34.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _34.StakeAuthorization_ValidatorsAminoMsg): _34.StakeAuthorization_Validators;
                toAminoMsg(message: _34.StakeAuthorization_Validators): _34.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _34.StakeAuthorization_ValidatorsProtoMsg): _34.StakeAuthorization_Validators;
                toProto(message: _34.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _34.StakeAuthorization_Validators): _34.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _39.SignMode;
                signModeToJSON(object: _39.SignMode): string;
                SignMode: typeof _39.SignMode;
                SignModeSDKType: typeof _39.SignMode;
                SignModeAmino: typeof _39.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _39.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.SignatureDescriptors;
                    fromPartial(object: Partial<_39.SignatureDescriptors>): _39.SignatureDescriptors;
                    fromAmino(object: _39.SignatureDescriptorsAmino): _39.SignatureDescriptors;
                    toAmino(message: _39.SignatureDescriptors): _39.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _39.SignatureDescriptorsAminoMsg): _39.SignatureDescriptors;
                    toAminoMsg(message: _39.SignatureDescriptors): _39.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _39.SignatureDescriptorsProtoMsg): _39.SignatureDescriptors;
                    toProto(message: _39.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _39.SignatureDescriptors): _39.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _39.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.SignatureDescriptor;
                    fromPartial(object: Partial<_39.SignatureDescriptor>): _39.SignatureDescriptor;
                    fromAmino(object: _39.SignatureDescriptorAmino): _39.SignatureDescriptor;
                    toAmino(message: _39.SignatureDescriptor): _39.SignatureDescriptorAmino;
                    fromAminoMsg(object: _39.SignatureDescriptorAminoMsg): _39.SignatureDescriptor;
                    toAminoMsg(message: _39.SignatureDescriptor): _39.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _39.SignatureDescriptorProtoMsg): _39.SignatureDescriptor;
                    toProto(message: _39.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _39.SignatureDescriptor): _39.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _39.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_39.SignatureDescriptor_Data>): _39.SignatureDescriptor_Data;
                    fromAmino(object: _39.SignatureDescriptor_DataAmino): _39.SignatureDescriptor_Data;
                    toAmino(message: _39.SignatureDescriptor_Data): _39.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _39.SignatureDescriptor_DataAminoMsg): _39.SignatureDescriptor_Data;
                    toAminoMsg(message: _39.SignatureDescriptor_Data): _39.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _39.SignatureDescriptor_DataProtoMsg): _39.SignatureDescriptor_Data;
                    toProto(message: _39.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _39.SignatureDescriptor_Data): _39.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _39.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_39.SignatureDescriptor_Data_Single>): _39.SignatureDescriptor_Data_Single;
                    fromAmino(object: _39.SignatureDescriptor_Data_SingleAmino): _39.SignatureDescriptor_Data_Single;
                    toAmino(message: _39.SignatureDescriptor_Data_Single): _39.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _39.SignatureDescriptor_Data_SingleAminoMsg): _39.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _39.SignatureDescriptor_Data_Single): _39.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _39.SignatureDescriptor_Data_SingleProtoMsg): _39.SignatureDescriptor_Data_Single;
                    toProto(message: _39.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _39.SignatureDescriptor_Data_Single): _39.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _39.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_39.SignatureDescriptor_Data_Multi>): _39.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _39.SignatureDescriptor_Data_MultiAmino): _39.SignatureDescriptor_Data_Multi;
                    toAmino(message: _39.SignatureDescriptor_Data_Multi): _39.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _39.SignatureDescriptor_Data_MultiAminoMsg): _39.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _39.SignatureDescriptor_Data_Multi): _39.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _39.SignatureDescriptor_Data_MultiProtoMsg): _39.SignatureDescriptor_Data_Multi;
                    toProto(message: _39.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _39.SignatureDescriptor_Data_Multi): _39.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _214.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _40.SimulateRequest): Promise<_40.SimulateResponse>;
                getTx(request: _40.GetTxRequest): Promise<_40.GetTxResponse>;
                broadcastTx(request: _40.BroadcastTxRequest): Promise<_40.BroadcastTxResponse>;
                getTxsEvent(request: _40.GetTxsEventRequest): Promise<_40.GetTxsEventResponse>;
            };
            LCDQueryClient: typeof _205.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _41.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.Tx;
                fromPartial(object: Partial<_41.Tx>): _41.Tx;
                fromAmino(object: _41.TxAmino): _41.Tx;
                toAmino(message: _41.Tx): _41.TxAmino;
                fromAminoMsg(object: _41.TxAminoMsg): _41.Tx;
                toAminoMsg(message: _41.Tx): _41.TxAminoMsg;
                fromProtoMsg(message: _41.TxProtoMsg): _41.Tx;
                toProto(message: _41.Tx): Uint8Array;
                toProtoMsg(message: _41.Tx): _41.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _41.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.TxRaw;
                fromPartial(object: Partial<_41.TxRaw>): _41.TxRaw;
                fromAmino(object: _41.TxRawAmino): _41.TxRaw;
                toAmino(message: _41.TxRaw): _41.TxRawAmino;
                fromAminoMsg(object: _41.TxRawAminoMsg): _41.TxRaw;
                toAminoMsg(message: _41.TxRaw): _41.TxRawAminoMsg;
                fromProtoMsg(message: _41.TxRawProtoMsg): _41.TxRaw;
                toProto(message: _41.TxRaw): Uint8Array;
                toProtoMsg(message: _41.TxRaw): _41.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _41.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.SignDoc;
                fromPartial(object: Partial<_41.SignDoc>): _41.SignDoc;
                fromAmino(object: _41.SignDocAmino): _41.SignDoc;
                toAmino(message: _41.SignDoc): _41.SignDocAmino;
                fromAminoMsg(object: _41.SignDocAminoMsg): _41.SignDoc;
                toAminoMsg(message: _41.SignDoc): _41.SignDocAminoMsg;
                fromProtoMsg(message: _41.SignDocProtoMsg): _41.SignDoc;
                toProto(message: _41.SignDoc): Uint8Array;
                toProtoMsg(message: _41.SignDoc): _41.SignDocProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _41.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.TxBody;
                fromPartial(object: Partial<_41.TxBody>): _41.TxBody;
                fromAmino(object: _41.TxBodyAmino): _41.TxBody;
                toAmino(message: _41.TxBody): _41.TxBodyAmino;
                fromAminoMsg(object: _41.TxBodyAminoMsg): _41.TxBody;
                toAminoMsg(message: _41.TxBody): _41.TxBodyAminoMsg;
                fromProtoMsg(message: _41.TxBodyProtoMsg): _41.TxBody;
                toProto(message: _41.TxBody): Uint8Array;
                toProtoMsg(message: _41.TxBody): _41.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _41.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.AuthInfo;
                fromPartial(object: Partial<_41.AuthInfo>): _41.AuthInfo;
                fromAmino(object: _41.AuthInfoAmino): _41.AuthInfo;
                toAmino(message: _41.AuthInfo): _41.AuthInfoAmino;
                fromAminoMsg(object: _41.AuthInfoAminoMsg): _41.AuthInfo;
                toAminoMsg(message: _41.AuthInfo): _41.AuthInfoAminoMsg;
                fromProtoMsg(message: _41.AuthInfoProtoMsg): _41.AuthInfo;
                toProto(message: _41.AuthInfo): Uint8Array;
                toProtoMsg(message: _41.AuthInfo): _41.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _41.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.SignerInfo;
                fromPartial(object: Partial<_41.SignerInfo>): _41.SignerInfo;
                fromAmino(object: _41.SignerInfoAmino): _41.SignerInfo;
                toAmino(message: _41.SignerInfo): _41.SignerInfoAmino;
                fromAminoMsg(object: _41.SignerInfoAminoMsg): _41.SignerInfo;
                toAminoMsg(message: _41.SignerInfo): _41.SignerInfoAminoMsg;
                fromProtoMsg(message: _41.SignerInfoProtoMsg): _41.SignerInfo;
                toProto(message: _41.SignerInfo): Uint8Array;
                toProtoMsg(message: _41.SignerInfo): _41.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _41.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.ModeInfo;
                fromPartial(object: Partial<_41.ModeInfo>): _41.ModeInfo;
                fromAmino(object: _41.ModeInfoAmino): _41.ModeInfo;
                toAmino(message: _41.ModeInfo): _41.ModeInfoAmino;
                fromAminoMsg(object: _41.ModeInfoAminoMsg): _41.ModeInfo;
                toAminoMsg(message: _41.ModeInfo): _41.ModeInfoAminoMsg;
                fromProtoMsg(message: _41.ModeInfoProtoMsg): _41.ModeInfo;
                toProto(message: _41.ModeInfo): Uint8Array;
                toProtoMsg(message: _41.ModeInfo): _41.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _41.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.ModeInfo_Single;
                fromPartial(object: Partial<_41.ModeInfo_Single>): _41.ModeInfo_Single;
                fromAmino(object: _41.ModeInfo_SingleAmino): _41.ModeInfo_Single;
                toAmino(message: _41.ModeInfo_Single): _41.ModeInfo_SingleAmino;
                fromAminoMsg(object: _41.ModeInfo_SingleAminoMsg): _41.ModeInfo_Single;
                toAminoMsg(message: _41.ModeInfo_Single): _41.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _41.ModeInfo_SingleProtoMsg): _41.ModeInfo_Single;
                toProto(message: _41.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _41.ModeInfo_Single): _41.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _41.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.ModeInfo_Multi;
                fromPartial(object: Partial<_41.ModeInfo_Multi>): _41.ModeInfo_Multi;
                fromAmino(object: _41.ModeInfo_MultiAmino): _41.ModeInfo_Multi;
                toAmino(message: _41.ModeInfo_Multi): _41.ModeInfo_MultiAmino;
                fromAminoMsg(object: _41.ModeInfo_MultiAminoMsg): _41.ModeInfo_Multi;
                toAminoMsg(message: _41.ModeInfo_Multi): _41.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _41.ModeInfo_MultiProtoMsg): _41.ModeInfo_Multi;
                toProto(message: _41.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _41.ModeInfo_Multi): _41.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _41.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.Fee;
                fromPartial(object: Partial<_41.Fee>): _41.Fee;
                fromAmino(object: _41.FeeAmino): _41.Fee;
                toAmino(message: _41.Fee): _41.FeeAmino;
                fromAminoMsg(object: _41.FeeAminoMsg): _41.Fee;
                toAminoMsg(message: _41.Fee): _41.FeeAminoMsg;
                fromProtoMsg(message: _41.FeeProtoMsg): _41.Fee;
                toProto(message: _41.Fee): Uint8Array;
                toProtoMsg(message: _41.Fee): _41.FeeProtoMsg;
            };
            orderByFromJSON(object: any): _40.OrderBy;
            orderByToJSON(object: _40.OrderBy): string;
            broadcastModeFromJSON(object: any): _40.BroadcastMode;
            broadcastModeToJSON(object: _40.BroadcastMode): string;
            OrderBy: typeof _40.OrderBy;
            OrderBySDKType: typeof _40.OrderBy;
            OrderByAmino: typeof _40.OrderBy;
            BroadcastMode: typeof _40.BroadcastMode;
            BroadcastModeSDKType: typeof _40.BroadcastMode;
            BroadcastModeAmino: typeof _40.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _40.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.GetTxsEventRequest;
                fromPartial(object: Partial<_40.GetTxsEventRequest>): _40.GetTxsEventRequest;
                fromAmino(object: _40.GetTxsEventRequestAmino): _40.GetTxsEventRequest;
                toAmino(message: _40.GetTxsEventRequest): _40.GetTxsEventRequestAmino;
                fromAminoMsg(object: _40.GetTxsEventRequestAminoMsg): _40.GetTxsEventRequest;
                toAminoMsg(message: _40.GetTxsEventRequest): _40.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _40.GetTxsEventRequestProtoMsg): _40.GetTxsEventRequest;
                toProto(message: _40.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _40.GetTxsEventRequest): _40.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _40.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.GetTxsEventResponse;
                fromPartial(object: Partial<_40.GetTxsEventResponse>): _40.GetTxsEventResponse;
                fromAmino(object: _40.GetTxsEventResponseAmino): _40.GetTxsEventResponse;
                toAmino(message: _40.GetTxsEventResponse): _40.GetTxsEventResponseAmino;
                fromAminoMsg(object: _40.GetTxsEventResponseAminoMsg): _40.GetTxsEventResponse;
                toAminoMsg(message: _40.GetTxsEventResponse): _40.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _40.GetTxsEventResponseProtoMsg): _40.GetTxsEventResponse;
                toProto(message: _40.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _40.GetTxsEventResponse): _40.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _40.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.BroadcastTxRequest;
                fromPartial(object: Partial<_40.BroadcastTxRequest>): _40.BroadcastTxRequest;
                fromAmino(object: _40.BroadcastTxRequestAmino): _40.BroadcastTxRequest;
                toAmino(message: _40.BroadcastTxRequest): _40.BroadcastTxRequestAmino;
                fromAminoMsg(object: _40.BroadcastTxRequestAminoMsg): _40.BroadcastTxRequest;
                toAminoMsg(message: _40.BroadcastTxRequest): _40.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _40.BroadcastTxRequestProtoMsg): _40.BroadcastTxRequest;
                toProto(message: _40.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _40.BroadcastTxRequest): _40.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _40.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.BroadcastTxResponse;
                fromPartial(object: Partial<_40.BroadcastTxResponse>): _40.BroadcastTxResponse;
                fromAmino(object: _40.BroadcastTxResponseAmino): _40.BroadcastTxResponse;
                toAmino(message: _40.BroadcastTxResponse): _40.BroadcastTxResponseAmino;
                fromAminoMsg(object: _40.BroadcastTxResponseAminoMsg): _40.BroadcastTxResponse;
                toAminoMsg(message: _40.BroadcastTxResponse): _40.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _40.BroadcastTxResponseProtoMsg): _40.BroadcastTxResponse;
                toProto(message: _40.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _40.BroadcastTxResponse): _40.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _40.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.SimulateRequest;
                fromPartial(object: Partial<_40.SimulateRequest>): _40.SimulateRequest;
                fromAmino(object: _40.SimulateRequestAmino): _40.SimulateRequest;
                toAmino(message: _40.SimulateRequest): _40.SimulateRequestAmino;
                fromAminoMsg(object: _40.SimulateRequestAminoMsg): _40.SimulateRequest;
                toAminoMsg(message: _40.SimulateRequest): _40.SimulateRequestAminoMsg;
                fromProtoMsg(message: _40.SimulateRequestProtoMsg): _40.SimulateRequest;
                toProto(message: _40.SimulateRequest): Uint8Array;
                toProtoMsg(message: _40.SimulateRequest): _40.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _40.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.SimulateResponse;
                fromPartial(object: Partial<_40.SimulateResponse>): _40.SimulateResponse;
                fromAmino(object: _40.SimulateResponseAmino): _40.SimulateResponse;
                toAmino(message: _40.SimulateResponse): _40.SimulateResponseAmino;
                fromAminoMsg(object: _40.SimulateResponseAminoMsg): _40.SimulateResponse;
                toAminoMsg(message: _40.SimulateResponse): _40.SimulateResponseAminoMsg;
                fromProtoMsg(message: _40.SimulateResponseProtoMsg): _40.SimulateResponse;
                toProto(message: _40.SimulateResponse): Uint8Array;
                toProtoMsg(message: _40.SimulateResponse): _40.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _40.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.GetTxRequest;
                fromPartial(object: Partial<_40.GetTxRequest>): _40.GetTxRequest;
                fromAmino(object: _40.GetTxRequestAmino): _40.GetTxRequest;
                toAmino(message: _40.GetTxRequest): _40.GetTxRequestAmino;
                fromAminoMsg(object: _40.GetTxRequestAminoMsg): _40.GetTxRequest;
                toAminoMsg(message: _40.GetTxRequest): _40.GetTxRequestAminoMsg;
                fromProtoMsg(message: _40.GetTxRequestProtoMsg): _40.GetTxRequest;
                toProto(message: _40.GetTxRequest): Uint8Array;
                toProtoMsg(message: _40.GetTxRequest): _40.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _40.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.GetTxResponse;
                fromPartial(object: Partial<_40.GetTxResponse>): _40.GetTxResponse;
                fromAmino(object: _40.GetTxResponseAmino): _40.GetTxResponse;
                toAmino(message: _40.GetTxResponse): _40.GetTxResponseAmino;
                fromAminoMsg(object: _40.GetTxResponseAminoMsg): _40.GetTxResponse;
                toAminoMsg(message: _40.GetTxResponse): _40.GetTxResponseAminoMsg;
                fromProtoMsg(message: _40.GetTxResponseProtoMsg): _40.GetTxResponse;
                toProto(message: _40.GetTxResponse): Uint8Array;
                toProtoMsg(message: _40.GetTxResponse): _40.GetTxResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _223.MsgClientImpl;
            QueryClientImpl: typeof _215.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _42.QueryCurrentPlanRequest): Promise<_42.QueryCurrentPlanResponse>;
                appliedPlan(request: _42.QueryAppliedPlanRequest): Promise<_42.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _42.QueryUpgradedConsensusStateRequest): Promise<_42.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _42.QueryModuleVersionsRequest): Promise<_42.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _206.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _44.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _44.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _44.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _44.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _44.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _44.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _44.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _44.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _44.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _44.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _44.MsgSoftwareUpgrade) => _44.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _44.MsgSoftwareUpgradeAmino) => _44.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _44.MsgCancelUpgrade) => _44.MsgCancelUpgradeAmino;
                    fromAmino: (object: _44.MsgCancelUpgradeAmino) => _44.MsgCancelUpgrade;
                };
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _44.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_44.MsgSoftwareUpgrade>): _44.MsgSoftwareUpgrade;
                fromAmino(object: _44.MsgSoftwareUpgradeAmino): _44.MsgSoftwareUpgrade;
                toAmino(message: _44.MsgSoftwareUpgrade): _44.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _44.MsgSoftwareUpgradeAminoMsg): _44.MsgSoftwareUpgrade;
                toAminoMsg(message: _44.MsgSoftwareUpgrade): _44.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _44.MsgSoftwareUpgradeProtoMsg): _44.MsgSoftwareUpgrade;
                toProto(message: _44.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _44.MsgSoftwareUpgrade): _44.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _44.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_44.MsgSoftwareUpgradeResponse>): _44.MsgSoftwareUpgradeResponse;
                fromAmino(_: _44.MsgSoftwareUpgradeResponseAmino): _44.MsgSoftwareUpgradeResponse;
                toAmino(_: _44.MsgSoftwareUpgradeResponse): _44.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _44.MsgSoftwareUpgradeResponseAminoMsg): _44.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _44.MsgSoftwareUpgradeResponse): _44.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _44.MsgSoftwareUpgradeResponseProtoMsg): _44.MsgSoftwareUpgradeResponse;
                toProto(message: _44.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _44.MsgSoftwareUpgradeResponse): _44.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _44.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgCancelUpgrade;
                fromPartial(object: Partial<_44.MsgCancelUpgrade>): _44.MsgCancelUpgrade;
                fromAmino(object: _44.MsgCancelUpgradeAmino): _44.MsgCancelUpgrade;
                toAmino(message: _44.MsgCancelUpgrade): _44.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _44.MsgCancelUpgradeAminoMsg): _44.MsgCancelUpgrade;
                toAminoMsg(message: _44.MsgCancelUpgrade): _44.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _44.MsgCancelUpgradeProtoMsg): _44.MsgCancelUpgrade;
                toProto(message: _44.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _44.MsgCancelUpgrade): _44.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _44.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_44.MsgCancelUpgradeResponse>): _44.MsgCancelUpgradeResponse;
                fromAmino(_: _44.MsgCancelUpgradeResponseAmino): _44.MsgCancelUpgradeResponse;
                toAmino(_: _44.MsgCancelUpgradeResponse): _44.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _44.MsgCancelUpgradeResponseAminoMsg): _44.MsgCancelUpgradeResponse;
                toAminoMsg(message: _44.MsgCancelUpgradeResponse): _44.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _44.MsgCancelUpgradeResponseProtoMsg): _44.MsgCancelUpgradeResponse;
                toProto(message: _44.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _44.MsgCancelUpgradeResponse): _44.MsgCancelUpgradeResponseProtoMsg;
            };
            Plan: {
                typeUrl: string;
                encode(message: _43.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.Plan;
                fromPartial(object: Partial<_43.Plan>): _43.Plan;
                fromAmino(object: _43.PlanAmino): _43.Plan;
                toAmino(message: _43.Plan): _43.PlanAmino;
                fromAminoMsg(object: _43.PlanAminoMsg): _43.Plan;
                toAminoMsg(message: _43.Plan): _43.PlanAminoMsg;
                fromProtoMsg(message: _43.PlanProtoMsg): _43.Plan;
                toProto(message: _43.Plan): Uint8Array;
                toProtoMsg(message: _43.Plan): _43.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _43.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_43.SoftwareUpgradeProposal>): _43.SoftwareUpgradeProposal;
                fromAmino(object: _43.SoftwareUpgradeProposalAmino): _43.SoftwareUpgradeProposal;
                toAmino(message: _43.SoftwareUpgradeProposal): _43.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _43.SoftwareUpgradeProposalAminoMsg): _43.SoftwareUpgradeProposal;
                toAminoMsg(message: _43.SoftwareUpgradeProposal): _43.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _43.SoftwareUpgradeProposalProtoMsg): _43.SoftwareUpgradeProposal;
                toProto(message: _43.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _43.SoftwareUpgradeProposal): _43.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _43.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_43.CancelSoftwareUpgradeProposal>): _43.CancelSoftwareUpgradeProposal;
                fromAmino(object: _43.CancelSoftwareUpgradeProposalAmino): _43.CancelSoftwareUpgradeProposal;
                toAmino(message: _43.CancelSoftwareUpgradeProposal): _43.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _43.CancelSoftwareUpgradeProposalAminoMsg): _43.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _43.CancelSoftwareUpgradeProposal): _43.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _43.CancelSoftwareUpgradeProposalProtoMsg): _43.CancelSoftwareUpgradeProposal;
                toProto(message: _43.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _43.CancelSoftwareUpgradeProposal): _43.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _43.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.ModuleVersion;
                fromPartial(object: Partial<_43.ModuleVersion>): _43.ModuleVersion;
                fromAmino(object: _43.ModuleVersionAmino): _43.ModuleVersion;
                toAmino(message: _43.ModuleVersion): _43.ModuleVersionAmino;
                fromAminoMsg(object: _43.ModuleVersionAminoMsg): _43.ModuleVersion;
                toAminoMsg(message: _43.ModuleVersion): _43.ModuleVersionAminoMsg;
                fromProtoMsg(message: _43.ModuleVersionProtoMsg): _43.ModuleVersion;
                toProto(message: _43.ModuleVersion): Uint8Array;
                toProtoMsg(message: _43.ModuleVersion): _43.ModuleVersionProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _42.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_42.QueryCurrentPlanRequest>): _42.QueryCurrentPlanRequest;
                fromAmino(_: _42.QueryCurrentPlanRequestAmino): _42.QueryCurrentPlanRequest;
                toAmino(_: _42.QueryCurrentPlanRequest): _42.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _42.QueryCurrentPlanRequestAminoMsg): _42.QueryCurrentPlanRequest;
                toAminoMsg(message: _42.QueryCurrentPlanRequest): _42.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _42.QueryCurrentPlanRequestProtoMsg): _42.QueryCurrentPlanRequest;
                toProto(message: _42.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _42.QueryCurrentPlanRequest): _42.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _42.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_42.QueryCurrentPlanResponse>): _42.QueryCurrentPlanResponse;
                fromAmino(object: _42.QueryCurrentPlanResponseAmino): _42.QueryCurrentPlanResponse;
                toAmino(message: _42.QueryCurrentPlanResponse): _42.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _42.QueryCurrentPlanResponseAminoMsg): _42.QueryCurrentPlanResponse;
                toAminoMsg(message: _42.QueryCurrentPlanResponse): _42.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _42.QueryCurrentPlanResponseProtoMsg): _42.QueryCurrentPlanResponse;
                toProto(message: _42.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _42.QueryCurrentPlanResponse): _42.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _42.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_42.QueryAppliedPlanRequest>): _42.QueryAppliedPlanRequest;
                fromAmino(object: _42.QueryAppliedPlanRequestAmino): _42.QueryAppliedPlanRequest;
                toAmino(message: _42.QueryAppliedPlanRequest): _42.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _42.QueryAppliedPlanRequestAminoMsg): _42.QueryAppliedPlanRequest;
                toAminoMsg(message: _42.QueryAppliedPlanRequest): _42.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _42.QueryAppliedPlanRequestProtoMsg): _42.QueryAppliedPlanRequest;
                toProto(message: _42.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _42.QueryAppliedPlanRequest): _42.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _42.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_42.QueryAppliedPlanResponse>): _42.QueryAppliedPlanResponse;
                fromAmino(object: _42.QueryAppliedPlanResponseAmino): _42.QueryAppliedPlanResponse;
                toAmino(message: _42.QueryAppliedPlanResponse): _42.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _42.QueryAppliedPlanResponseAminoMsg): _42.QueryAppliedPlanResponse;
                toAminoMsg(message: _42.QueryAppliedPlanResponse): _42.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _42.QueryAppliedPlanResponseProtoMsg): _42.QueryAppliedPlanResponse;
                toProto(message: _42.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _42.QueryAppliedPlanResponse): _42.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _42.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_42.QueryUpgradedConsensusStateRequest>): _42.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _42.QueryUpgradedConsensusStateRequestAmino): _42.QueryUpgradedConsensusStateRequest;
                toAmino(message: _42.QueryUpgradedConsensusStateRequest): _42.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _42.QueryUpgradedConsensusStateRequestAminoMsg): _42.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _42.QueryUpgradedConsensusStateRequest): _42.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _42.QueryUpgradedConsensusStateRequestProtoMsg): _42.QueryUpgradedConsensusStateRequest;
                toProto(message: _42.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _42.QueryUpgradedConsensusStateRequest): _42.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _42.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_42.QueryUpgradedConsensusStateResponse>): _42.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _42.QueryUpgradedConsensusStateResponseAmino): _42.QueryUpgradedConsensusStateResponse;
                toAmino(message: _42.QueryUpgradedConsensusStateResponse): _42.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _42.QueryUpgradedConsensusStateResponseAminoMsg): _42.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _42.QueryUpgradedConsensusStateResponse): _42.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _42.QueryUpgradedConsensusStateResponseProtoMsg): _42.QueryUpgradedConsensusStateResponse;
                toProto(message: _42.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _42.QueryUpgradedConsensusStateResponse): _42.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _42.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_42.QueryModuleVersionsRequest>): _42.QueryModuleVersionsRequest;
                fromAmino(object: _42.QueryModuleVersionsRequestAmino): _42.QueryModuleVersionsRequest;
                toAmino(message: _42.QueryModuleVersionsRequest): _42.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _42.QueryModuleVersionsRequestAminoMsg): _42.QueryModuleVersionsRequest;
                toAminoMsg(message: _42.QueryModuleVersionsRequest): _42.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _42.QueryModuleVersionsRequestProtoMsg): _42.QueryModuleVersionsRequest;
                toProto(message: _42.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _42.QueryModuleVersionsRequest): _42.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _42.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_42.QueryModuleVersionsResponse>): _42.QueryModuleVersionsResponse;
                fromAmino(object: _42.QueryModuleVersionsResponseAmino): _42.QueryModuleVersionsResponse;
                toAmino(message: _42.QueryModuleVersionsResponse): _42.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _42.QueryModuleVersionsResponseAminoMsg): _42.QueryModuleVersionsResponse;
                toAminoMsg(message: _42.QueryModuleVersionsResponse): _42.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _42.QueryModuleVersionsResponseProtoMsg): _42.QueryModuleVersionsResponse;
                toProto(message: _42.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _42.QueryModuleVersionsResponse): _42.QueryModuleVersionsResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _217.MsgClientImpl;
                };
                bank: {
                    v1beta1: _218.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _219.MsgClientImpl;
                };
                gov: {
                    v1beta1: _220.MsgClientImpl;
                    v1: _222.MsgClientImpl;
                };
                staking: {
                    v1beta1: _221.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _223.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: {
                        grants(request: _4.QueryGrantsRequest): Promise<_4.QueryGrantsResponse>;
                        granterGrants(request: _4.QueryGranterGrantsRequest): Promise<_4.QueryGranterGrantsResponse>;
                        granteeGrants(request: _4.QueryGranteeGrantsRequest): Promise<_4.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _9.QueryBalanceRequest): Promise<_9.QueryBalanceResponse>;
                        allBalances(request: _9.QueryAllBalancesRequest): Promise<_9.QueryAllBalancesResponse>;
                        totalSupply(request?: _9.QueryTotalSupplyRequest): Promise<_9.QueryTotalSupplyResponse>;
                        supplyOf(request: _9.QuerySupplyOfRequest): Promise<_9.QuerySupplyOfResponse>;
                        totalSupplyWithoutOffset(request?: _9.QueryTotalSupplyWithoutOffsetRequest): Promise<_9.QueryTotalSupplyWithoutOffsetResponse>;
                        supplyOfWithoutOffset(request: _9.QuerySupplyOfWithoutOffsetRequest): Promise<_9.QuerySupplyOfWithoutOffsetResponse>;
                        params(request?: _9.QueryParamsRequest): Promise<_9.QueryParamsResponse>;
                        denomMetadata(request: _9.QueryDenomMetadataRequest): Promise<_9.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _9.QueryDenomsMetadataRequest): Promise<_9.QueryDenomsMetadataResponse>;
                        baseDenom(request: _9.QueryBaseDenomRequest): Promise<_9.QueryBaseDenomResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _12.ConfigRequest): Promise<_12.ConfigResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _24.QueryParamsRequest): Promise<_24.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _24.QueryValidatorOutstandingRewardsRequest): Promise<_24.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _24.QueryValidatorCommissionRequest): Promise<_24.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _24.QueryValidatorSlashesRequest): Promise<_24.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _24.QueryDelegationRewardsRequest): Promise<_24.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _24.QueryDelegationTotalRewardsRequest): Promise<_24.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _24.QueryDelegatorValidatorsRequest): Promise<_24.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _24.QueryDelegatorWithdrawAddressRequest): Promise<_24.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _24.QueryCommunityPoolRequest): Promise<_24.QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _28.QueryProposalRequest): Promise<_28.QueryProposalResponse>;
                        proposals(request: _28.QueryProposalsRequest): Promise<_28.QueryProposalsResponse>;
                        vote(request: _28.QueryVoteRequest): Promise<_28.QueryVoteResponse>;
                        votes(request: _28.QueryVotesRequest): Promise<_28.QueryVotesResponse>;
                        params(request: _28.QueryParamsRequest): Promise<_28.QueryParamsResponse>;
                        deposit(request: _28.QueryDepositRequest): Promise<_28.QueryDepositResponse>;
                        deposits(request: _28.QueryDepositsRequest): Promise<_28.QueryDepositsResponse>;
                        tallyResult(request: _28.QueryTallyResultRequest): Promise<_28.QueryTallyResultResponse>;
                    };
                    v1: {
                        proposal(request: _32.QueryProposalRequest): Promise<_32.QueryProposalResponse>;
                        proposals(request: _32.QueryProposalsRequest): Promise<_32.QueryProposalsResponse>;
                        vote(request: _32.QueryVoteRequest): Promise<_32.QueryVoteResponse>;
                        votes(request: _32.QueryVotesRequest): Promise<_32.QueryVotesResponse>;
                        params(request: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
                        deposit(request: _32.QueryDepositRequest): Promise<_32.QueryDepositResponse>;
                        deposits(request: _32.QueryDepositsRequest): Promise<_32.QueryDepositsResponse>;
                        tallyResult(request: _32.QueryTallyResultRequest): Promise<_32.QueryTallyResultResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _36.QueryValidatorsRequest): Promise<_36.QueryValidatorsResponse>;
                        validator(request: _36.QueryValidatorRequest): Promise<_36.QueryValidatorResponse>;
                        validatorDelegations(request: _36.QueryValidatorDelegationsRequest): Promise<_36.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _36.QueryValidatorUnbondingDelegationsRequest): Promise<_36.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _36.QueryDelegationRequest): Promise<_36.QueryDelegationResponse>;
                        unbondingDelegation(request: _36.QueryUnbondingDelegationRequest): Promise<_36.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _36.QueryDelegatorDelegationsRequest): Promise<_36.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _36.QueryDelegatorUnbondingDelegationsRequest): Promise<_36.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _36.QueryRedelegationsRequest): Promise<_36.QueryRedelegationsResponse>;
                        delegatorValidators(request: _36.QueryDelegatorValidatorsRequest): Promise<_36.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _36.QueryDelegatorValidatorRequest): Promise<_36.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _36.QueryHistoricalInfoRequest): Promise<_36.QueryHistoricalInfoResponse>;
                        pool(request?: _36.QueryPoolRequest): Promise<_36.QueryPoolResponse>;
                        params(request?: _36.QueryParamsRequest): Promise<_36.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _40.SimulateRequest): Promise<_40.SimulateResponse>;
                        getTx(request: _40.GetTxRequest): Promise<_40.GetTxResponse>;
                        broadcastTx(request: _40.BroadcastTxRequest): Promise<_40.BroadcastTxResponse>;
                        getTxsEvent(request: _40.GetTxsEventRequest): Promise<_40.GetTxsEventResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _42.QueryCurrentPlanRequest): Promise<_42.QueryCurrentPlanResponse>;
                        appliedPlan(request: _42.QueryAppliedPlanRequest): Promise<_42.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _42.QueryUpgradedConsensusStateRequest): Promise<_42.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _42.QueryModuleVersionsRequest): Promise<_42.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _199.LCDQueryClient;
                };
                bank: {
                    v1beta1: _200.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _201.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _202.LCDQueryClient;
                };
                gov: {
                    v1beta1: _203.LCDQueryClient;
                    v1: _207.LCDQueryClient;
                };
                staking: {
                    v1beta1: _204.LCDQueryClient;
                };
                tx: {
                    v1beta1: _205.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _206.LCDQueryClient;
                };
            };
        }>;
    };
}
