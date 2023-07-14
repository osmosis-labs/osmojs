import * as _0 from "./ics23/v1/proofs";
import * as _1 from "./auth/v1beta1/auth";
import * as _2 from "./auth/v1beta1/genesis";
import * as _3 from "./auth/v1beta1/query";
import * as _4 from "./authz/v1beta1/authz";
import * as _5 from "./authz/v1beta1/event";
import * as _6 from "./authz/v1beta1/genesis";
import * as _7 from "./authz/v1beta1/query";
import * as _8 from "./authz/v1beta1/tx";
import * as _9 from "./bank/v1beta1/authz";
import * as _10 from "./bank/v1beta1/bank";
import * as _11 from "./bank/v1beta1/genesis";
import * as _12 from "./bank/v1beta1/query";
import * as _13 from "./bank/v1beta1/tx";
import * as _14 from "./base/abci/v1beta1/abci";
import * as _15 from "./base/node/v1beta1/query";
import * as _16 from "./base/query/v1beta1/pagination";
import * as _17 from "./base/reflection/v2alpha1/reflection";
import * as _18 from "./base/v1beta1/coin";
import * as _19 from "./crypto/ed25519/keys";
import * as _20 from "./crypto/multisig/keys";
import * as _21 from "./crypto/secp256k1/keys";
import * as _22 from "./crypto/secp256r1/keys";
import * as _23 from "./distribution/v1beta1/distribution";
import * as _24 from "./distribution/v1beta1/genesis";
import * as _25 from "./distribution/v1beta1/query";
import * as _26 from "./distribution/v1beta1/tx";
import * as _27 from "./gov/v1beta1/genesis";
import * as _28 from "./gov/v1beta1/gov";
import * as _29 from "./gov/v1beta1/query";
import * as _30 from "./gov/v1beta1/tx";
import * as _31 from "./staking/v1beta1/authz";
import * as _32 from "./staking/v1beta1/genesis";
import * as _33 from "./staking/v1beta1/query";
import * as _34 from "./staking/v1beta1/staking";
import * as _35 from "./staking/v1beta1/tx";
import * as _36 from "./tx/signing/v1beta1/signing";
import * as _37 from "./tx/v1beta1/service";
import * as _38 from "./tx/v1beta1/tx";
import * as _39 from "./upgrade/v1beta1/query";
import * as _40 from "./upgrade/v1beta1/upgrade";
import * as _200 from "./auth/v1beta1/query.lcd";
import * as _201 from "./authz/v1beta1/query.lcd";
import * as _202 from "./bank/v1beta1/query.lcd";
import * as _203 from "./base/node/v1beta1/query.lcd";
import * as _204 from "./distribution/v1beta1/query.lcd";
import * as _205 from "./gov/v1beta1/query.lcd";
import * as _206 from "./staking/v1beta1/query.lcd";
import * as _207 from "./tx/v1beta1/service.lcd";
import * as _208 from "./upgrade/v1beta1/query.lcd";
import * as _209 from "./auth/v1beta1/query.rpc.Query";
import * as _210 from "./authz/v1beta1/query.rpc.Query";
import * as _211 from "./bank/v1beta1/query.rpc.Query";
import * as _212 from "./base/node/v1beta1/query.rpc.Service";
import * as _213 from "./distribution/v1beta1/query.rpc.Query";
import * as _214 from "./gov/v1beta1/query.rpc.Query";
import * as _215 from "./staking/v1beta1/query.rpc.Query";
import * as _216 from "./tx/v1beta1/service.rpc.Service";
import * as _217 from "./upgrade/v1beta1/query.rpc.Query";
import * as _218 from "./authz/v1beta1/tx.rpc.msg";
import * as _219 from "./bank/v1beta1/tx.rpc.msg";
import * as _220 from "./distribution/v1beta1/tx.rpc.msg";
import * as _221 from "./gov/v1beta1/tx.rpc.msg";
import * as _222 from "./staking/v1beta1/tx.rpc.msg";
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
                encode(message: _0.ExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _0.ExistenceProof;
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
                encode(message: _0.NonExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _0.NonExistenceProof;
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
                encode(message: _0.CommitmentProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _0.CommitmentProof;
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
                encode(message: _0.LeafOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _0.LeafOp;
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
                encode(message: _0.InnerOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _0.InnerOp;
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
                encode(message: _0.ProofSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _0.ProofSpec;
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
                encode(message: _0.InnerSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _0.InnerSpec;
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
                encode(message: _0.BatchProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _0.BatchProof;
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
                encode(message: _0.BatchEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _0.BatchEntry;
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
                encode(message: _0.CompressedBatchProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _0.CompressedBatchProof;
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
                encode(message: _0.CompressedBatchEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _0.CompressedBatchEntry;
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
                encode(message: _0.CompressedExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _0.CompressedExistenceProof;
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
                encode(message: _0.CompressedNonExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _0.CompressedNonExistenceProof;
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
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _209.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _3.QueryAccountsRequest): Promise<_3.QueryAccountsResponse>;
                account(request: _3.QueryAccountRequest): Promise<_3.QueryAccountResponse>;
                params(request?: _3.QueryParamsRequest): Promise<_3.QueryParamsResponse>;
                moduleAccounts(request?: _3.QueryModuleAccountsRequest): Promise<_3.QueryModuleAccountsResponse>;
            };
            LCDQueryClient: typeof _200.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _3.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _3.QueryAccountsRequest;
                fromPartial(object: Partial<_3.QueryAccountsRequest>): _3.QueryAccountsRequest;
                fromAmino(object: _3.QueryAccountsRequestAmino): _3.QueryAccountsRequest;
                toAmino(message: _3.QueryAccountsRequest): _3.QueryAccountsRequestAmino;
                fromAminoMsg(object: _3.QueryAccountsRequestAminoMsg): _3.QueryAccountsRequest;
                toAminoMsg(message: _3.QueryAccountsRequest): _3.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _3.QueryAccountsRequestProtoMsg): _3.QueryAccountsRequest;
                toProto(message: _3.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _3.QueryAccountsRequest): _3.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _3.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _3.QueryAccountsResponse;
                fromPartial(object: Partial<_3.QueryAccountsResponse>): _3.QueryAccountsResponse;
                fromAmino(object: _3.QueryAccountsResponseAmino): _3.QueryAccountsResponse;
                toAmino(message: _3.QueryAccountsResponse): _3.QueryAccountsResponseAmino;
                fromAminoMsg(object: _3.QueryAccountsResponseAminoMsg): _3.QueryAccountsResponse;
                toAminoMsg(message: _3.QueryAccountsResponse): _3.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _3.QueryAccountsResponseProtoMsg): _3.QueryAccountsResponse;
                toProto(message: _3.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _3.QueryAccountsResponse): _3.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _3.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _3.QueryAccountRequest;
                fromPartial(object: Partial<_3.QueryAccountRequest>): _3.QueryAccountRequest;
                fromAmino(object: _3.QueryAccountRequestAmino): _3.QueryAccountRequest;
                toAmino(message: _3.QueryAccountRequest): _3.QueryAccountRequestAmino;
                fromAminoMsg(object: _3.QueryAccountRequestAminoMsg): _3.QueryAccountRequest;
                toAminoMsg(message: _3.QueryAccountRequest): _3.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _3.QueryAccountRequestProtoMsg): _3.QueryAccountRequest;
                toProto(message: _3.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _3.QueryAccountRequest): _3.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _3.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _3.QueryAccountResponse;
                fromPartial(object: Partial<_3.QueryAccountResponse>): _3.QueryAccountResponse;
                fromAmino(object: _3.QueryAccountResponseAmino): _3.QueryAccountResponse;
                toAmino(message: _3.QueryAccountResponse): _3.QueryAccountResponseAmino;
                fromAminoMsg(object: _3.QueryAccountResponseAminoMsg): _3.QueryAccountResponse;
                toAminoMsg(message: _3.QueryAccountResponse): _3.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _3.QueryAccountResponseProtoMsg): _3.QueryAccountResponse;
                toProto(message: _3.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _3.QueryAccountResponse): _3.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _3.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _3.QueryParamsRequest;
                fromPartial(_: Partial<_3.QueryParamsRequest>): _3.QueryParamsRequest;
                fromAmino(_: _3.QueryParamsRequestAmino): _3.QueryParamsRequest;
                toAmino(_: _3.QueryParamsRequest): _3.QueryParamsRequestAmino;
                fromAminoMsg(object: _3.QueryParamsRequestAminoMsg): _3.QueryParamsRequest;
                toAminoMsg(message: _3.QueryParamsRequest): _3.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _3.QueryParamsRequestProtoMsg): _3.QueryParamsRequest;
                toProto(message: _3.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _3.QueryParamsRequest): _3.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _3.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _3.QueryParamsResponse;
                fromPartial(object: Partial<_3.QueryParamsResponse>): _3.QueryParamsResponse;
                fromAmino(object: _3.QueryParamsResponseAmino): _3.QueryParamsResponse;
                toAmino(message: _3.QueryParamsResponse): _3.QueryParamsResponseAmino;
                fromAminoMsg(object: _3.QueryParamsResponseAminoMsg): _3.QueryParamsResponse;
                toAminoMsg(message: _3.QueryParamsResponse): _3.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _3.QueryParamsResponseProtoMsg): _3.QueryParamsResponse;
                toProto(message: _3.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _3.QueryParamsResponse): _3.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _3.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _3.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_3.QueryModuleAccountsRequest>): _3.QueryModuleAccountsRequest;
                fromAmino(_: _3.QueryModuleAccountsRequestAmino): _3.QueryModuleAccountsRequest;
                toAmino(_: _3.QueryModuleAccountsRequest): _3.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _3.QueryModuleAccountsRequestAminoMsg): _3.QueryModuleAccountsRequest;
                toAminoMsg(message: _3.QueryModuleAccountsRequest): _3.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _3.QueryModuleAccountsRequestProtoMsg): _3.QueryModuleAccountsRequest;
                toProto(message: _3.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _3.QueryModuleAccountsRequest): _3.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _3.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _3.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_3.QueryModuleAccountsResponse>): _3.QueryModuleAccountsResponse;
                fromAmino(object: _3.QueryModuleAccountsResponseAmino): _3.QueryModuleAccountsResponse;
                toAmino(message: _3.QueryModuleAccountsResponse): _3.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _3.QueryModuleAccountsResponseAminoMsg): _3.QueryModuleAccountsResponse;
                toAminoMsg(message: _3.QueryModuleAccountsResponse): _3.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _3.QueryModuleAccountsResponseProtoMsg): _3.QueryModuleAccountsResponse;
                toProto(message: _3.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _3.QueryModuleAccountsResponse): _3.QueryModuleAccountsResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _1.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _1.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _2.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _2.GenesisState;
                fromPartial(object: Partial<_2.GenesisState>): _2.GenesisState;
                fromAmino(object: _2.GenesisStateAmino): _2.GenesisState;
                toAmino(message: _2.GenesisState): _2.GenesisStateAmino;
                fromAminoMsg(object: _2.GenesisStateAminoMsg): _2.GenesisState;
                toAminoMsg(message: _2.GenesisState): _2.GenesisStateAminoMsg;
                fromProtoMsg(message: _2.GenesisStateProtoMsg): _2.GenesisState;
                toProto(message: _2.GenesisState): Uint8Array;
                toProtoMsg(message: _2.GenesisState): _2.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _1.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _1.BaseAccount;
                fromPartial(object: Partial<_1.BaseAccount>): _1.BaseAccount;
                fromAmino(object: _1.BaseAccountAmino): _1.BaseAccount;
                toAmino(message: _1.BaseAccount): _1.BaseAccountAmino;
                fromAminoMsg(object: _1.BaseAccountAminoMsg): _1.BaseAccount;
                toAminoMsg(message: _1.BaseAccount): _1.BaseAccountAminoMsg;
                fromProtoMsg(message: _1.BaseAccountProtoMsg): _1.BaseAccount;
                toProto(message: _1.BaseAccount): Uint8Array;
                toProtoMsg(message: _1.BaseAccount): _1.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _1.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _1.ModuleAccount;
                fromPartial(object: Partial<_1.ModuleAccount>): _1.ModuleAccount;
                fromAmino(object: _1.ModuleAccountAmino): _1.ModuleAccount;
                toAmino(message: _1.ModuleAccount): _1.ModuleAccountAmino;
                fromAminoMsg(object: _1.ModuleAccountAminoMsg): _1.ModuleAccount;
                toAminoMsg(message: _1.ModuleAccount): _1.ModuleAccountAminoMsg;
                fromProtoMsg(message: _1.ModuleAccountProtoMsg): _1.ModuleAccount;
                toProto(message: _1.ModuleAccount): Uint8Array;
                toProtoMsg(message: _1.ModuleAccount): _1.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _1.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _1.Params;
                fromPartial(object: Partial<_1.Params>): _1.Params;
                fromAmino(object: _1.ParamsAmino): _1.Params;
                toAmino(message: _1.Params): _1.ParamsAmino;
                fromAminoMsg(object: _1.ParamsAminoMsg): _1.Params;
                toAminoMsg(message: _1.Params): _1.ParamsAminoMsg;
                fromProtoMsg(message: _1.ParamsProtoMsg): _1.Params;
                toProto(message: _1.Params): Uint8Array;
                toProtoMsg(message: _1.Params): _1.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _218.MsgClientImpl;
            QueryClientImpl: typeof _210.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _7.QueryGrantsRequest): Promise<_7.QueryGrantsResponse>;
                granterGrants(request: _7.QueryGranterGrantsRequest): Promise<_7.QueryGranterGrantsResponse>;
                granteeGrants(request: _7.QueryGranteeGrantsRequest): Promise<_7.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _201.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _8.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _8.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _8.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _8.MsgGrant): {
                        typeUrl: string;
                        value: _8.MsgGrant;
                    };
                    exec(value: _8.MsgExec): {
                        typeUrl: string;
                        value: _8.MsgExec;
                    };
                    revoke(value: _8.MsgRevoke): {
                        typeUrl: string;
                        value: _8.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _8.MsgGrant): {
                        typeUrl: string;
                        value: _8.MsgGrant;
                    };
                    exec(value: _8.MsgExec): {
                        typeUrl: string;
                        value: _8.MsgExec;
                    };
                    revoke(value: _8.MsgRevoke): {
                        typeUrl: string;
                        value: _8.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _8.MsgGrant) => _8.MsgGrantAmino;
                    fromAmino: (object: _8.MsgGrantAmino) => _8.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _8.MsgExec) => _8.MsgExecAmino;
                    fromAmino: (object: _8.MsgExecAmino) => _8.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _8.MsgRevoke) => _8.MsgRevokeAmino;
                    fromAmino: (object: _8.MsgRevokeAmino) => _8.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _8.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _8.MsgGrant;
                fromPartial(object: Partial<_8.MsgGrant>): _8.MsgGrant;
                fromAmino(object: _8.MsgGrantAmino): _8.MsgGrant;
                toAmino(message: _8.MsgGrant): _8.MsgGrantAmino;
                fromAminoMsg(object: _8.MsgGrantAminoMsg): _8.MsgGrant;
                toAminoMsg(message: _8.MsgGrant): _8.MsgGrantAminoMsg;
                fromProtoMsg(message: _8.MsgGrantProtoMsg): _8.MsgGrant;
                toProto(message: _8.MsgGrant): Uint8Array;
                toProtoMsg(message: _8.MsgGrant): _8.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _8.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _8.MsgExecResponse;
                fromPartial(object: Partial<_8.MsgExecResponse>): _8.MsgExecResponse;
                fromAmino(object: _8.MsgExecResponseAmino): _8.MsgExecResponse;
                toAmino(message: _8.MsgExecResponse): _8.MsgExecResponseAmino;
                fromAminoMsg(object: _8.MsgExecResponseAminoMsg): _8.MsgExecResponse;
                toAminoMsg(message: _8.MsgExecResponse): _8.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _8.MsgExecResponseProtoMsg): _8.MsgExecResponse;
                toProto(message: _8.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _8.MsgExecResponse): _8.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _8.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _8.MsgExec;
                fromPartial(object: Partial<_8.MsgExec>): _8.MsgExec;
                fromAmino(object: _8.MsgExecAmino): _8.MsgExec;
                toAmino(message: _8.MsgExec): _8.MsgExecAmino;
                fromAminoMsg(object: _8.MsgExecAminoMsg): _8.MsgExec;
                toAminoMsg(message: _8.MsgExec): _8.MsgExecAminoMsg;
                fromProtoMsg(message: _8.MsgExecProtoMsg): _8.MsgExec;
                toProto(message: _8.MsgExec): Uint8Array;
                toProtoMsg(message: _8.MsgExec): _8.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _8.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _8.MsgGrantResponse;
                fromPartial(_: Partial<_8.MsgGrantResponse>): _8.MsgGrantResponse;
                fromAmino(_: _8.MsgGrantResponseAmino): _8.MsgGrantResponse;
                toAmino(_: _8.MsgGrantResponse): _8.MsgGrantResponseAmino;
                fromAminoMsg(object: _8.MsgGrantResponseAminoMsg): _8.MsgGrantResponse;
                toAminoMsg(message: _8.MsgGrantResponse): _8.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _8.MsgGrantResponseProtoMsg): _8.MsgGrantResponse;
                toProto(message: _8.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _8.MsgGrantResponse): _8.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _8.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _8.MsgRevoke;
                fromPartial(object: Partial<_8.MsgRevoke>): _8.MsgRevoke;
                fromAmino(object: _8.MsgRevokeAmino): _8.MsgRevoke;
                toAmino(message: _8.MsgRevoke): _8.MsgRevokeAmino;
                fromAminoMsg(object: _8.MsgRevokeAminoMsg): _8.MsgRevoke;
                toAminoMsg(message: _8.MsgRevoke): _8.MsgRevokeAminoMsg;
                fromProtoMsg(message: _8.MsgRevokeProtoMsg): _8.MsgRevoke;
                toProto(message: _8.MsgRevoke): Uint8Array;
                toProtoMsg(message: _8.MsgRevoke): _8.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _8.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _8.MsgRevokeResponse;
                fromPartial(_: Partial<_8.MsgRevokeResponse>): _8.MsgRevokeResponse;
                fromAmino(_: _8.MsgRevokeResponseAmino): _8.MsgRevokeResponse;
                toAmino(_: _8.MsgRevokeResponse): _8.MsgRevokeResponseAmino;
                fromAminoMsg(object: _8.MsgRevokeResponseAminoMsg): _8.MsgRevokeResponse;
                toAminoMsg(message: _8.MsgRevokeResponse): _8.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _8.MsgRevokeResponseProtoMsg): _8.MsgRevokeResponse;
                toProto(message: _8.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _8.MsgRevokeResponse): _8.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _7.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _7.QueryGrantsRequest;
                fromPartial(object: Partial<_7.QueryGrantsRequest>): _7.QueryGrantsRequest;
                fromAmino(object: _7.QueryGrantsRequestAmino): _7.QueryGrantsRequest;
                toAmino(message: _7.QueryGrantsRequest): _7.QueryGrantsRequestAmino;
                fromAminoMsg(object: _7.QueryGrantsRequestAminoMsg): _7.QueryGrantsRequest;
                toAminoMsg(message: _7.QueryGrantsRequest): _7.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _7.QueryGrantsRequestProtoMsg): _7.QueryGrantsRequest;
                toProto(message: _7.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _7.QueryGrantsRequest): _7.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _7.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _7.QueryGrantsResponse;
                fromPartial(object: Partial<_7.QueryGrantsResponse>): _7.QueryGrantsResponse;
                fromAmino(object: _7.QueryGrantsResponseAmino): _7.QueryGrantsResponse;
                toAmino(message: _7.QueryGrantsResponse): _7.QueryGrantsResponseAmino;
                fromAminoMsg(object: _7.QueryGrantsResponseAminoMsg): _7.QueryGrantsResponse;
                toAminoMsg(message: _7.QueryGrantsResponse): _7.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _7.QueryGrantsResponseProtoMsg): _7.QueryGrantsResponse;
                toProto(message: _7.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _7.QueryGrantsResponse): _7.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _7.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _7.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_7.QueryGranterGrantsRequest>): _7.QueryGranterGrantsRequest;
                fromAmino(object: _7.QueryGranterGrantsRequestAmino): _7.QueryGranterGrantsRequest;
                toAmino(message: _7.QueryGranterGrantsRequest): _7.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _7.QueryGranterGrantsRequestAminoMsg): _7.QueryGranterGrantsRequest;
                toAminoMsg(message: _7.QueryGranterGrantsRequest): _7.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _7.QueryGranterGrantsRequestProtoMsg): _7.QueryGranterGrantsRequest;
                toProto(message: _7.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _7.QueryGranterGrantsRequest): _7.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _7.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _7.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_7.QueryGranterGrantsResponse>): _7.QueryGranterGrantsResponse;
                fromAmino(object: _7.QueryGranterGrantsResponseAmino): _7.QueryGranterGrantsResponse;
                toAmino(message: _7.QueryGranterGrantsResponse): _7.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _7.QueryGranterGrantsResponseAminoMsg): _7.QueryGranterGrantsResponse;
                toAminoMsg(message: _7.QueryGranterGrantsResponse): _7.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _7.QueryGranterGrantsResponseProtoMsg): _7.QueryGranterGrantsResponse;
                toProto(message: _7.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _7.QueryGranterGrantsResponse): _7.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _7.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _7.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_7.QueryGranteeGrantsRequest>): _7.QueryGranteeGrantsRequest;
                fromAmino(object: _7.QueryGranteeGrantsRequestAmino): _7.QueryGranteeGrantsRequest;
                toAmino(message: _7.QueryGranteeGrantsRequest): _7.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _7.QueryGranteeGrantsRequestAminoMsg): _7.QueryGranteeGrantsRequest;
                toAminoMsg(message: _7.QueryGranteeGrantsRequest): _7.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _7.QueryGranteeGrantsRequestProtoMsg): _7.QueryGranteeGrantsRequest;
                toProto(message: _7.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _7.QueryGranteeGrantsRequest): _7.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _7.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _7.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_7.QueryGranteeGrantsResponse>): _7.QueryGranteeGrantsResponse;
                fromAmino(object: _7.QueryGranteeGrantsResponseAmino): _7.QueryGranteeGrantsResponse;
                toAmino(message: _7.QueryGranteeGrantsResponse): _7.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _7.QueryGranteeGrantsResponseAminoMsg): _7.QueryGranteeGrantsResponse;
                toAminoMsg(message: _7.QueryGranteeGrantsResponse): _7.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _7.QueryGranteeGrantsResponseProtoMsg): _7.QueryGranteeGrantsResponse;
                toProto(message: _7.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _7.QueryGranteeGrantsResponse): _7.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _6.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _6.GenesisState;
                fromPartial(object: Partial<_6.GenesisState>): _6.GenesisState;
                fromAmino(object: _6.GenesisStateAmino): _6.GenesisState;
                toAmino(message: _6.GenesisState): _6.GenesisStateAmino;
                fromAminoMsg(object: _6.GenesisStateAminoMsg): _6.GenesisState;
                toAminoMsg(message: _6.GenesisState): _6.GenesisStateAminoMsg;
                fromProtoMsg(message: _6.GenesisStateProtoMsg): _6.GenesisState;
                toProto(message: _6.GenesisState): Uint8Array;
                toProtoMsg(message: _6.GenesisState): _6.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _5.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.EventGrant;
                fromPartial(object: Partial<_5.EventGrant>): _5.EventGrant;
                fromAmino(object: _5.EventGrantAmino): _5.EventGrant;
                toAmino(message: _5.EventGrant): _5.EventGrantAmino;
                fromAminoMsg(object: _5.EventGrantAminoMsg): _5.EventGrant;
                toAminoMsg(message: _5.EventGrant): _5.EventGrantAminoMsg;
                fromProtoMsg(message: _5.EventGrantProtoMsg): _5.EventGrant;
                toProto(message: _5.EventGrant): Uint8Array;
                toProtoMsg(message: _5.EventGrant): _5.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _5.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.EventRevoke;
                fromPartial(object: Partial<_5.EventRevoke>): _5.EventRevoke;
                fromAmino(object: _5.EventRevokeAmino): _5.EventRevoke;
                toAmino(message: _5.EventRevoke): _5.EventRevokeAmino;
                fromAminoMsg(object: _5.EventRevokeAminoMsg): _5.EventRevoke;
                toAminoMsg(message: _5.EventRevoke): _5.EventRevokeAminoMsg;
                fromProtoMsg(message: _5.EventRevokeProtoMsg): _5.EventRevoke;
                toProto(message: _5.EventRevoke): Uint8Array;
                toProtoMsg(message: _5.EventRevoke): _5.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _4.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _4.GenericAuthorization;
                fromPartial(object: Partial<_4.GenericAuthorization>): _4.GenericAuthorization;
                fromAmino(object: _4.GenericAuthorizationAmino): _4.GenericAuthorization;
                toAmino(message: _4.GenericAuthorization): _4.GenericAuthorizationAmino;
                fromAminoMsg(object: _4.GenericAuthorizationAminoMsg): _4.GenericAuthorization;
                toAminoMsg(message: _4.GenericAuthorization): _4.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _4.GenericAuthorizationProtoMsg): _4.GenericAuthorization;
                toProto(message: _4.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _4.GenericAuthorization): _4.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _4.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _4.Grant;
                fromPartial(object: Partial<_4.Grant>): _4.Grant;
                fromAmino(object: _4.GrantAmino): _4.Grant;
                toAmino(message: _4.Grant): _4.GrantAmino;
                fromAminoMsg(object: _4.GrantAminoMsg): _4.Grant;
                toAminoMsg(message: _4.Grant): _4.GrantAminoMsg;
                fromProtoMsg(message: _4.GrantProtoMsg): _4.Grant;
                toProto(message: _4.Grant): Uint8Array;
                toProtoMsg(message: _4.Grant): _4.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _4.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _4.GrantAuthorization;
                fromPartial(object: Partial<_4.GrantAuthorization>): _4.GrantAuthorization;
                fromAmino(object: _4.GrantAuthorizationAmino): _4.GrantAuthorization;
                toAmino(message: _4.GrantAuthorization): _4.GrantAuthorizationAmino;
                fromAminoMsg(object: _4.GrantAuthorizationAminoMsg): _4.GrantAuthorization;
                toAminoMsg(message: _4.GrantAuthorization): _4.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _4.GrantAuthorizationProtoMsg): _4.GrantAuthorization;
                toProto(message: _4.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _4.GrantAuthorization): _4.GrantAuthorizationProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _9.SendAuthorization | _31.StakeAuthorization | _4.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _219.MsgClientImpl;
            QueryClientImpl: typeof _211.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _12.QueryBalanceRequest): Promise<_12.QueryBalanceResponse>;
                allBalances(request: _12.QueryAllBalancesRequest): Promise<_12.QueryAllBalancesResponse>;
                totalSupply(request?: _12.QueryTotalSupplyRequest): Promise<_12.QueryTotalSupplyResponse>;
                supplyOf(request: _12.QuerySupplyOfRequest): Promise<_12.QuerySupplyOfResponse>;
                totalSupplyWithoutOffset(request?: _12.QueryTotalSupplyWithoutOffsetRequest): Promise<_12.QueryTotalSupplyWithoutOffsetResponse>;
                supplyOfWithoutOffset(request: _12.QuerySupplyOfWithoutOffsetRequest): Promise<_12.QuerySupplyOfWithoutOffsetResponse>;
                params(request?: _12.QueryParamsRequest): Promise<_12.QueryParamsResponse>;
                denomMetadata(request: _12.QueryDenomMetadataRequest): Promise<_12.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _12.QueryDenomsMetadataRequest): Promise<_12.QueryDenomsMetadataResponse>;
                baseDenom(request: _12.QueryBaseDenomRequest): Promise<_12.QueryBaseDenomResponse>;
            };
            LCDQueryClient: typeof _202.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _13.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _13.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _13.MsgSend): {
                        typeUrl: string;
                        value: _13.MsgSend;
                    };
                    multiSend(value: _13.MsgMultiSend): {
                        typeUrl: string;
                        value: _13.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _13.MsgSend): {
                        typeUrl: string;
                        value: _13.MsgSend;
                    };
                    multiSend(value: _13.MsgMultiSend): {
                        typeUrl: string;
                        value: _13.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _13.MsgSend) => _13.MsgSendAmino;
                    fromAmino: (object: _13.MsgSendAmino) => _13.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _13.MsgMultiSend) => _13.MsgMultiSendAmino;
                    fromAmino: (object: _13.MsgMultiSendAmino) => _13.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _13.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _13.MsgSend;
                fromPartial(object: Partial<_13.MsgSend>): _13.MsgSend;
                fromAmino(object: _13.MsgSendAmino): _13.MsgSend;
                toAmino(message: _13.MsgSend): _13.MsgSendAmino;
                fromAminoMsg(object: _13.MsgSendAminoMsg): _13.MsgSend;
                toAminoMsg(message: _13.MsgSend): _13.MsgSendAminoMsg;
                fromProtoMsg(message: _13.MsgSendProtoMsg): _13.MsgSend;
                toProto(message: _13.MsgSend): Uint8Array;
                toProtoMsg(message: _13.MsgSend): _13.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _13.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _13.MsgSendResponse;
                fromPartial(_: Partial<_13.MsgSendResponse>): _13.MsgSendResponse;
                fromAmino(_: _13.MsgSendResponseAmino): _13.MsgSendResponse;
                toAmino(_: _13.MsgSendResponse): _13.MsgSendResponseAmino;
                fromAminoMsg(object: _13.MsgSendResponseAminoMsg): _13.MsgSendResponse;
                toAminoMsg(message: _13.MsgSendResponse): _13.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _13.MsgSendResponseProtoMsg): _13.MsgSendResponse;
                toProto(message: _13.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _13.MsgSendResponse): _13.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _13.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _13.MsgMultiSend;
                fromPartial(object: Partial<_13.MsgMultiSend>): _13.MsgMultiSend;
                fromAmino(object: _13.MsgMultiSendAmino): _13.MsgMultiSend;
                toAmino(message: _13.MsgMultiSend): _13.MsgMultiSendAmino;
                fromAminoMsg(object: _13.MsgMultiSendAminoMsg): _13.MsgMultiSend;
                toAminoMsg(message: _13.MsgMultiSend): _13.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _13.MsgMultiSendProtoMsg): _13.MsgMultiSend;
                toProto(message: _13.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _13.MsgMultiSend): _13.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _13.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _13.MsgMultiSendResponse;
                fromPartial(_: Partial<_13.MsgMultiSendResponse>): _13.MsgMultiSendResponse;
                fromAmino(_: _13.MsgMultiSendResponseAmino): _13.MsgMultiSendResponse;
                toAmino(_: _13.MsgMultiSendResponse): _13.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _13.MsgMultiSendResponseAminoMsg): _13.MsgMultiSendResponse;
                toAminoMsg(message: _13.MsgMultiSendResponse): _13.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _13.MsgMultiSendResponseProtoMsg): _13.MsgMultiSendResponse;
                toProto(message: _13.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _13.MsgMultiSendResponse): _13.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _12.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.QueryBalanceRequest;
                fromPartial(object: Partial<_12.QueryBalanceRequest>): _12.QueryBalanceRequest;
                fromAmino(object: _12.QueryBalanceRequestAmino): _12.QueryBalanceRequest;
                toAmino(message: _12.QueryBalanceRequest): _12.QueryBalanceRequestAmino;
                fromAminoMsg(object: _12.QueryBalanceRequestAminoMsg): _12.QueryBalanceRequest;
                toAminoMsg(message: _12.QueryBalanceRequest): _12.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _12.QueryBalanceRequestProtoMsg): _12.QueryBalanceRequest;
                toProto(message: _12.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _12.QueryBalanceRequest): _12.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _12.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.QueryBalanceResponse;
                fromPartial(object: Partial<_12.QueryBalanceResponse>): _12.QueryBalanceResponse;
                fromAmino(object: _12.QueryBalanceResponseAmino): _12.QueryBalanceResponse;
                toAmino(message: _12.QueryBalanceResponse): _12.QueryBalanceResponseAmino;
                fromAminoMsg(object: _12.QueryBalanceResponseAminoMsg): _12.QueryBalanceResponse;
                toAminoMsg(message: _12.QueryBalanceResponse): _12.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _12.QueryBalanceResponseProtoMsg): _12.QueryBalanceResponse;
                toProto(message: _12.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _12.QueryBalanceResponse): _12.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _12.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.QueryAllBalancesRequest;
                fromPartial(object: Partial<_12.QueryAllBalancesRequest>): _12.QueryAllBalancesRequest;
                fromAmino(object: _12.QueryAllBalancesRequestAmino): _12.QueryAllBalancesRequest;
                toAmino(message: _12.QueryAllBalancesRequest): _12.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _12.QueryAllBalancesRequestAminoMsg): _12.QueryAllBalancesRequest;
                toAminoMsg(message: _12.QueryAllBalancesRequest): _12.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _12.QueryAllBalancesRequestProtoMsg): _12.QueryAllBalancesRequest;
                toProto(message: _12.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _12.QueryAllBalancesRequest): _12.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _12.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.QueryAllBalancesResponse;
                fromPartial(object: Partial<_12.QueryAllBalancesResponse>): _12.QueryAllBalancesResponse;
                fromAmino(object: _12.QueryAllBalancesResponseAmino): _12.QueryAllBalancesResponse;
                toAmino(message: _12.QueryAllBalancesResponse): _12.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _12.QueryAllBalancesResponseAminoMsg): _12.QueryAllBalancesResponse;
                toAminoMsg(message: _12.QueryAllBalancesResponse): _12.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _12.QueryAllBalancesResponseProtoMsg): _12.QueryAllBalancesResponse;
                toProto(message: _12.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _12.QueryAllBalancesResponse): _12.QueryAllBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _12.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_12.QueryTotalSupplyRequest>): _12.QueryTotalSupplyRequest;
                fromAmino(object: _12.QueryTotalSupplyRequestAmino): _12.QueryTotalSupplyRequest;
                toAmino(message: _12.QueryTotalSupplyRequest): _12.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _12.QueryTotalSupplyRequestAminoMsg): _12.QueryTotalSupplyRequest;
                toAminoMsg(message: _12.QueryTotalSupplyRequest): _12.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _12.QueryTotalSupplyRequestProtoMsg): _12.QueryTotalSupplyRequest;
                toProto(message: _12.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _12.QueryTotalSupplyRequest): _12.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _12.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_12.QueryTotalSupplyResponse>): _12.QueryTotalSupplyResponse;
                fromAmino(object: _12.QueryTotalSupplyResponseAmino): _12.QueryTotalSupplyResponse;
                toAmino(message: _12.QueryTotalSupplyResponse): _12.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _12.QueryTotalSupplyResponseAminoMsg): _12.QueryTotalSupplyResponse;
                toAminoMsg(message: _12.QueryTotalSupplyResponse): _12.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _12.QueryTotalSupplyResponseProtoMsg): _12.QueryTotalSupplyResponse;
                toProto(message: _12.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _12.QueryTotalSupplyResponse): _12.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _12.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.QuerySupplyOfRequest;
                fromPartial(object: Partial<_12.QuerySupplyOfRequest>): _12.QuerySupplyOfRequest;
                fromAmino(object: _12.QuerySupplyOfRequestAmino): _12.QuerySupplyOfRequest;
                toAmino(message: _12.QuerySupplyOfRequest): _12.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _12.QuerySupplyOfRequestAminoMsg): _12.QuerySupplyOfRequest;
                toAminoMsg(message: _12.QuerySupplyOfRequest): _12.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _12.QuerySupplyOfRequestProtoMsg): _12.QuerySupplyOfRequest;
                toProto(message: _12.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _12.QuerySupplyOfRequest): _12.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _12.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.QuerySupplyOfResponse;
                fromPartial(object: Partial<_12.QuerySupplyOfResponse>): _12.QuerySupplyOfResponse;
                fromAmino(object: _12.QuerySupplyOfResponseAmino): _12.QuerySupplyOfResponse;
                toAmino(message: _12.QuerySupplyOfResponse): _12.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _12.QuerySupplyOfResponseAminoMsg): _12.QuerySupplyOfResponse;
                toAminoMsg(message: _12.QuerySupplyOfResponse): _12.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _12.QuerySupplyOfResponseProtoMsg): _12.QuerySupplyOfResponse;
                toProto(message: _12.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _12.QuerySupplyOfResponse): _12.QuerySupplyOfResponseProtoMsg;
            };
            QueryTotalSupplyWithoutOffsetRequest: {
                typeUrl: string;
                encode(message: _12.QueryTotalSupplyWithoutOffsetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.QueryTotalSupplyWithoutOffsetRequest;
                fromPartial(object: Partial<_12.QueryTotalSupplyWithoutOffsetRequest>): _12.QueryTotalSupplyWithoutOffsetRequest;
                fromAmino(object: _12.QueryTotalSupplyWithoutOffsetRequestAmino): _12.QueryTotalSupplyWithoutOffsetRequest;
                toAmino(message: _12.QueryTotalSupplyWithoutOffsetRequest): _12.QueryTotalSupplyWithoutOffsetRequestAmino;
                fromAminoMsg(object: _12.QueryTotalSupplyWithoutOffsetRequestAminoMsg): _12.QueryTotalSupplyWithoutOffsetRequest;
                toAminoMsg(message: _12.QueryTotalSupplyWithoutOffsetRequest): _12.QueryTotalSupplyWithoutOffsetRequestAminoMsg;
                fromProtoMsg(message: _12.QueryTotalSupplyWithoutOffsetRequestProtoMsg): _12.QueryTotalSupplyWithoutOffsetRequest;
                toProto(message: _12.QueryTotalSupplyWithoutOffsetRequest): Uint8Array;
                toProtoMsg(message: _12.QueryTotalSupplyWithoutOffsetRequest): _12.QueryTotalSupplyWithoutOffsetRequestProtoMsg;
            };
            QueryTotalSupplyWithoutOffsetResponse: {
                typeUrl: string;
                encode(message: _12.QueryTotalSupplyWithoutOffsetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.QueryTotalSupplyWithoutOffsetResponse;
                fromPartial(object: Partial<_12.QueryTotalSupplyWithoutOffsetResponse>): _12.QueryTotalSupplyWithoutOffsetResponse;
                fromAmino(object: _12.QueryTotalSupplyWithoutOffsetResponseAmino): _12.QueryTotalSupplyWithoutOffsetResponse;
                toAmino(message: _12.QueryTotalSupplyWithoutOffsetResponse): _12.QueryTotalSupplyWithoutOffsetResponseAmino;
                fromAminoMsg(object: _12.QueryTotalSupplyWithoutOffsetResponseAminoMsg): _12.QueryTotalSupplyWithoutOffsetResponse;
                toAminoMsg(message: _12.QueryTotalSupplyWithoutOffsetResponse): _12.QueryTotalSupplyWithoutOffsetResponseAminoMsg;
                fromProtoMsg(message: _12.QueryTotalSupplyWithoutOffsetResponseProtoMsg): _12.QueryTotalSupplyWithoutOffsetResponse;
                toProto(message: _12.QueryTotalSupplyWithoutOffsetResponse): Uint8Array;
                toProtoMsg(message: _12.QueryTotalSupplyWithoutOffsetResponse): _12.QueryTotalSupplyWithoutOffsetResponseProtoMsg;
            };
            QuerySupplyOfWithoutOffsetRequest: {
                typeUrl: string;
                encode(message: _12.QuerySupplyOfWithoutOffsetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.QuerySupplyOfWithoutOffsetRequest;
                fromPartial(object: Partial<_12.QuerySupplyOfWithoutOffsetRequest>): _12.QuerySupplyOfWithoutOffsetRequest;
                fromAmino(object: _12.QuerySupplyOfWithoutOffsetRequestAmino): _12.QuerySupplyOfWithoutOffsetRequest;
                toAmino(message: _12.QuerySupplyOfWithoutOffsetRequest): _12.QuerySupplyOfWithoutOffsetRequestAmino;
                fromAminoMsg(object: _12.QuerySupplyOfWithoutOffsetRequestAminoMsg): _12.QuerySupplyOfWithoutOffsetRequest;
                toAminoMsg(message: _12.QuerySupplyOfWithoutOffsetRequest): _12.QuerySupplyOfWithoutOffsetRequestAminoMsg;
                fromProtoMsg(message: _12.QuerySupplyOfWithoutOffsetRequestProtoMsg): _12.QuerySupplyOfWithoutOffsetRequest;
                toProto(message: _12.QuerySupplyOfWithoutOffsetRequest): Uint8Array;
                toProtoMsg(message: _12.QuerySupplyOfWithoutOffsetRequest): _12.QuerySupplyOfWithoutOffsetRequestProtoMsg;
            };
            QuerySupplyOfWithoutOffsetResponse: {
                typeUrl: string;
                encode(message: _12.QuerySupplyOfWithoutOffsetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.QuerySupplyOfWithoutOffsetResponse;
                fromPartial(object: Partial<_12.QuerySupplyOfWithoutOffsetResponse>): _12.QuerySupplyOfWithoutOffsetResponse;
                fromAmino(object: _12.QuerySupplyOfWithoutOffsetResponseAmino): _12.QuerySupplyOfWithoutOffsetResponse;
                toAmino(message: _12.QuerySupplyOfWithoutOffsetResponse): _12.QuerySupplyOfWithoutOffsetResponseAmino;
                fromAminoMsg(object: _12.QuerySupplyOfWithoutOffsetResponseAminoMsg): _12.QuerySupplyOfWithoutOffsetResponse;
                toAminoMsg(message: _12.QuerySupplyOfWithoutOffsetResponse): _12.QuerySupplyOfWithoutOffsetResponseAminoMsg;
                fromProtoMsg(message: _12.QuerySupplyOfWithoutOffsetResponseProtoMsg): _12.QuerySupplyOfWithoutOffsetResponse;
                toProto(message: _12.QuerySupplyOfWithoutOffsetResponse): Uint8Array;
                toProtoMsg(message: _12.QuerySupplyOfWithoutOffsetResponse): _12.QuerySupplyOfWithoutOffsetResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _12.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.QueryParamsRequest;
                fromPartial(_: Partial<_12.QueryParamsRequest>): _12.QueryParamsRequest;
                fromAmino(_: _12.QueryParamsRequestAmino): _12.QueryParamsRequest;
                toAmino(_: _12.QueryParamsRequest): _12.QueryParamsRequestAmino;
                fromAminoMsg(object: _12.QueryParamsRequestAminoMsg): _12.QueryParamsRequest;
                toAminoMsg(message: _12.QueryParamsRequest): _12.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _12.QueryParamsRequestProtoMsg): _12.QueryParamsRequest;
                toProto(message: _12.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _12.QueryParamsRequest): _12.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _12.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.QueryParamsResponse;
                fromPartial(object: Partial<_12.QueryParamsResponse>): _12.QueryParamsResponse;
                fromAmino(object: _12.QueryParamsResponseAmino): _12.QueryParamsResponse;
                toAmino(message: _12.QueryParamsResponse): _12.QueryParamsResponseAmino;
                fromAminoMsg(object: _12.QueryParamsResponseAminoMsg): _12.QueryParamsResponse;
                toAminoMsg(message: _12.QueryParamsResponse): _12.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _12.QueryParamsResponseProtoMsg): _12.QueryParamsResponse;
                toProto(message: _12.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _12.QueryParamsResponse): _12.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _12.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_12.QueryDenomsMetadataRequest>): _12.QueryDenomsMetadataRequest;
                fromAmino(object: _12.QueryDenomsMetadataRequestAmino): _12.QueryDenomsMetadataRequest;
                toAmino(message: _12.QueryDenomsMetadataRequest): _12.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _12.QueryDenomsMetadataRequestAminoMsg): _12.QueryDenomsMetadataRequest;
                toAminoMsg(message: _12.QueryDenomsMetadataRequest): _12.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _12.QueryDenomsMetadataRequestProtoMsg): _12.QueryDenomsMetadataRequest;
                toProto(message: _12.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _12.QueryDenomsMetadataRequest): _12.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _12.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_12.QueryDenomsMetadataResponse>): _12.QueryDenomsMetadataResponse;
                fromAmino(object: _12.QueryDenomsMetadataResponseAmino): _12.QueryDenomsMetadataResponse;
                toAmino(message: _12.QueryDenomsMetadataResponse): _12.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _12.QueryDenomsMetadataResponseAminoMsg): _12.QueryDenomsMetadataResponse;
                toAminoMsg(message: _12.QueryDenomsMetadataResponse): _12.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _12.QueryDenomsMetadataResponseProtoMsg): _12.QueryDenomsMetadataResponse;
                toProto(message: _12.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _12.QueryDenomsMetadataResponse): _12.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _12.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_12.QueryDenomMetadataRequest>): _12.QueryDenomMetadataRequest;
                fromAmino(object: _12.QueryDenomMetadataRequestAmino): _12.QueryDenomMetadataRequest;
                toAmino(message: _12.QueryDenomMetadataRequest): _12.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _12.QueryDenomMetadataRequestAminoMsg): _12.QueryDenomMetadataRequest;
                toAminoMsg(message: _12.QueryDenomMetadataRequest): _12.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _12.QueryDenomMetadataRequestProtoMsg): _12.QueryDenomMetadataRequest;
                toProto(message: _12.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _12.QueryDenomMetadataRequest): _12.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _12.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_12.QueryDenomMetadataResponse>): _12.QueryDenomMetadataResponse;
                fromAmino(object: _12.QueryDenomMetadataResponseAmino): _12.QueryDenomMetadataResponse;
                toAmino(message: _12.QueryDenomMetadataResponse): _12.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _12.QueryDenomMetadataResponseAminoMsg): _12.QueryDenomMetadataResponse;
                toAminoMsg(message: _12.QueryDenomMetadataResponse): _12.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _12.QueryDenomMetadataResponseProtoMsg): _12.QueryDenomMetadataResponse;
                toProto(message: _12.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _12.QueryDenomMetadataResponse): _12.QueryDenomMetadataResponseProtoMsg;
            };
            QueryBaseDenomRequest: {
                typeUrl: string;
                encode(message: _12.QueryBaseDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.QueryBaseDenomRequest;
                fromPartial(object: Partial<_12.QueryBaseDenomRequest>): _12.QueryBaseDenomRequest;
                fromAmino(object: _12.QueryBaseDenomRequestAmino): _12.QueryBaseDenomRequest;
                toAmino(message: _12.QueryBaseDenomRequest): _12.QueryBaseDenomRequestAmino;
                fromAminoMsg(object: _12.QueryBaseDenomRequestAminoMsg): _12.QueryBaseDenomRequest;
                toAminoMsg(message: _12.QueryBaseDenomRequest): _12.QueryBaseDenomRequestAminoMsg;
                fromProtoMsg(message: _12.QueryBaseDenomRequestProtoMsg): _12.QueryBaseDenomRequest;
                toProto(message: _12.QueryBaseDenomRequest): Uint8Array;
                toProtoMsg(message: _12.QueryBaseDenomRequest): _12.QueryBaseDenomRequestProtoMsg;
            };
            QueryBaseDenomResponse: {
                typeUrl: string;
                encode(message: _12.QueryBaseDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.QueryBaseDenomResponse;
                fromPartial(object: Partial<_12.QueryBaseDenomResponse>): _12.QueryBaseDenomResponse;
                fromAmino(object: _12.QueryBaseDenomResponseAmino): _12.QueryBaseDenomResponse;
                toAmino(message: _12.QueryBaseDenomResponse): _12.QueryBaseDenomResponseAmino;
                fromAminoMsg(object: _12.QueryBaseDenomResponseAminoMsg): _12.QueryBaseDenomResponse;
                toAminoMsg(message: _12.QueryBaseDenomResponse): _12.QueryBaseDenomResponseAminoMsg;
                fromProtoMsg(message: _12.QueryBaseDenomResponseProtoMsg): _12.QueryBaseDenomResponse;
                toProto(message: _12.QueryBaseDenomResponse): Uint8Array;
                toProtoMsg(message: _12.QueryBaseDenomResponse): _12.QueryBaseDenomResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _11.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _11.GenesisState;
                fromPartial(object: Partial<_11.GenesisState>): _11.GenesisState;
                fromAmino(object: _11.GenesisStateAmino): _11.GenesisState;
                toAmino(message: _11.GenesisState): _11.GenesisStateAmino;
                fromAminoMsg(object: _11.GenesisStateAminoMsg): _11.GenesisState;
                toAminoMsg(message: _11.GenesisState): _11.GenesisStateAminoMsg;
                fromProtoMsg(message: _11.GenesisStateProtoMsg): _11.GenesisState;
                toProto(message: _11.GenesisState): Uint8Array;
                toProtoMsg(message: _11.GenesisState): _11.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _11.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _11.Balance;
                fromPartial(object: Partial<_11.Balance>): _11.Balance;
                fromAmino(object: _11.BalanceAmino): _11.Balance;
                toAmino(message: _11.Balance): _11.BalanceAmino;
                fromAminoMsg(object: _11.BalanceAminoMsg): _11.Balance;
                toAminoMsg(message: _11.Balance): _11.BalanceAminoMsg;
                fromProtoMsg(message: _11.BalanceProtoMsg): _11.Balance;
                toProto(message: _11.Balance): Uint8Array;
                toProtoMsg(message: _11.Balance): _11.BalanceProtoMsg;
            };
            GenesisSupplyOffset: {
                typeUrl: string;
                encode(message: _11.GenesisSupplyOffset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _11.GenesisSupplyOffset;
                fromPartial(object: Partial<_11.GenesisSupplyOffset>): _11.GenesisSupplyOffset;
                fromAmino(object: _11.GenesisSupplyOffsetAmino): _11.GenesisSupplyOffset;
                toAmino(message: _11.GenesisSupplyOffset): _11.GenesisSupplyOffsetAmino;
                fromAminoMsg(object: _11.GenesisSupplyOffsetAminoMsg): _11.GenesisSupplyOffset;
                toAminoMsg(message: _11.GenesisSupplyOffset): _11.GenesisSupplyOffsetAminoMsg;
                fromProtoMsg(message: _11.GenesisSupplyOffsetProtoMsg): _11.GenesisSupplyOffset;
                toProto(message: _11.GenesisSupplyOffset): Uint8Array;
                toProtoMsg(message: _11.GenesisSupplyOffset): _11.GenesisSupplyOffsetProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _10.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.Params;
                fromPartial(object: Partial<_10.Params>): _10.Params;
                fromAmino(object: _10.ParamsAmino): _10.Params;
                toAmino(message: _10.Params): _10.ParamsAmino;
                fromAminoMsg(object: _10.ParamsAminoMsg): _10.Params;
                toAminoMsg(message: _10.Params): _10.ParamsAminoMsg;
                fromProtoMsg(message: _10.ParamsProtoMsg): _10.Params;
                toProto(message: _10.Params): Uint8Array;
                toProtoMsg(message: _10.Params): _10.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _10.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.SendEnabled;
                fromPartial(object: Partial<_10.SendEnabled>): _10.SendEnabled;
                fromAmino(object: _10.SendEnabledAmino): _10.SendEnabled;
                toAmino(message: _10.SendEnabled): _10.SendEnabledAmino;
                fromAminoMsg(object: _10.SendEnabledAminoMsg): _10.SendEnabled;
                toAminoMsg(message: _10.SendEnabled): _10.SendEnabledAminoMsg;
                fromProtoMsg(message: _10.SendEnabledProtoMsg): _10.SendEnabled;
                toProto(message: _10.SendEnabled): Uint8Array;
                toProtoMsg(message: _10.SendEnabled): _10.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _10.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.Input;
                fromPartial(object: Partial<_10.Input>): _10.Input;
                fromAmino(object: _10.InputAmino): _10.Input;
                toAmino(message: _10.Input): _10.InputAmino;
                fromAminoMsg(object: _10.InputAminoMsg): _10.Input;
                toAminoMsg(message: _10.Input): _10.InputAminoMsg;
                fromProtoMsg(message: _10.InputProtoMsg): _10.Input;
                toProto(message: _10.Input): Uint8Array;
                toProtoMsg(message: _10.Input): _10.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _10.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.Output;
                fromPartial(object: Partial<_10.Output>): _10.Output;
                fromAmino(object: _10.OutputAmino): _10.Output;
                toAmino(message: _10.Output): _10.OutputAmino;
                fromAminoMsg(object: _10.OutputAminoMsg): _10.Output;
                toAminoMsg(message: _10.Output): _10.OutputAminoMsg;
                fromProtoMsg(message: _10.OutputProtoMsg): _10.Output;
                toProto(message: _10.Output): Uint8Array;
                toProtoMsg(message: _10.Output): _10.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _10.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.Supply;
                fromPartial(object: Partial<_10.Supply>): _10.Supply;
                fromAmino(object: _10.SupplyAmino): _10.Supply;
                toAmino(message: _10.Supply): _10.SupplyAmino;
                fromAminoMsg(object: _10.SupplyAminoMsg): _10.Supply;
                toAminoMsg(message: _10.Supply): _10.SupplyAminoMsg;
                fromProtoMsg(message: _10.SupplyProtoMsg): _10.Supply;
                toProto(message: _10.Supply): Uint8Array;
                toProtoMsg(message: _10.Supply): _10.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _10.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.DenomUnit;
                fromPartial(object: Partial<_10.DenomUnit>): _10.DenomUnit;
                fromAmino(object: _10.DenomUnitAmino): _10.DenomUnit;
                toAmino(message: _10.DenomUnit): _10.DenomUnitAmino;
                fromAminoMsg(object: _10.DenomUnitAminoMsg): _10.DenomUnit;
                toAminoMsg(message: _10.DenomUnit): _10.DenomUnitAminoMsg;
                fromProtoMsg(message: _10.DenomUnitProtoMsg): _10.DenomUnit;
                toProto(message: _10.DenomUnit): Uint8Array;
                toProtoMsg(message: _10.DenomUnit): _10.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _10.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.Metadata;
                fromPartial(object: Partial<_10.Metadata>): _10.Metadata;
                fromAmino(object: _10.MetadataAmino): _10.Metadata;
                toAmino(message: _10.Metadata): _10.MetadataAmino;
                fromAminoMsg(object: _10.MetadataAminoMsg): _10.Metadata;
                toAminoMsg(message: _10.Metadata): _10.MetadataAminoMsg;
                fromProtoMsg(message: _10.MetadataProtoMsg): _10.Metadata;
                toProto(message: _10.Metadata): Uint8Array;
                toProtoMsg(message: _10.Metadata): _10.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _9.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.SendAuthorization;
                fromPartial(object: Partial<_9.SendAuthorization>): _9.SendAuthorization;
                fromAmino(object: _9.SendAuthorizationAmino): _9.SendAuthorization;
                toAmino(message: _9.SendAuthorization): _9.SendAuthorizationAmino;
                fromAminoMsg(object: _9.SendAuthorizationAminoMsg): _9.SendAuthorization;
                toAminoMsg(message: _9.SendAuthorization): _9.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _9.SendAuthorizationProtoMsg): _9.SendAuthorization;
                toProto(message: _9.SendAuthorization): Uint8Array;
                toProtoMsg(message: _9.SendAuthorization): _9.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _14.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.TxResponse;
                    fromPartial(object: Partial<_14.TxResponse>): _14.TxResponse;
                    fromAmino(object: _14.TxResponseAmino): _14.TxResponse;
                    toAmino(message: _14.TxResponse): _14.TxResponseAmino;
                    fromAminoMsg(object: _14.TxResponseAminoMsg): _14.TxResponse;
                    toAminoMsg(message: _14.TxResponse): _14.TxResponseAminoMsg;
                    fromProtoMsg(message: _14.TxResponseProtoMsg): _14.TxResponse;
                    toProto(message: _14.TxResponse): Uint8Array;
                    toProtoMsg(message: _14.TxResponse): _14.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _14.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.ABCIMessageLog;
                    fromPartial(object: Partial<_14.ABCIMessageLog>): _14.ABCIMessageLog;
                    fromAmino(object: _14.ABCIMessageLogAmino): _14.ABCIMessageLog;
                    toAmino(message: _14.ABCIMessageLog): _14.ABCIMessageLogAmino;
                    fromAminoMsg(object: _14.ABCIMessageLogAminoMsg): _14.ABCIMessageLog;
                    toAminoMsg(message: _14.ABCIMessageLog): _14.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _14.ABCIMessageLogProtoMsg): _14.ABCIMessageLog;
                    toProto(message: _14.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _14.ABCIMessageLog): _14.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _14.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.StringEvent;
                    fromPartial(object: Partial<_14.StringEvent>): _14.StringEvent;
                    fromAmino(object: _14.StringEventAmino): _14.StringEvent;
                    toAmino(message: _14.StringEvent): _14.StringEventAmino;
                    fromAminoMsg(object: _14.StringEventAminoMsg): _14.StringEvent;
                    toAminoMsg(message: _14.StringEvent): _14.StringEventAminoMsg;
                    fromProtoMsg(message: _14.StringEventProtoMsg): _14.StringEvent;
                    toProto(message: _14.StringEvent): Uint8Array;
                    toProtoMsg(message: _14.StringEvent): _14.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _14.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.Attribute;
                    fromPartial(object: Partial<_14.Attribute>): _14.Attribute;
                    fromAmino(object: _14.AttributeAmino): _14.Attribute;
                    toAmino(message: _14.Attribute): _14.AttributeAmino;
                    fromAminoMsg(object: _14.AttributeAminoMsg): _14.Attribute;
                    toAminoMsg(message: _14.Attribute): _14.AttributeAminoMsg;
                    fromProtoMsg(message: _14.AttributeProtoMsg): _14.Attribute;
                    toProto(message: _14.Attribute): Uint8Array;
                    toProtoMsg(message: _14.Attribute): _14.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _14.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.GasInfo;
                    fromPartial(object: Partial<_14.GasInfo>): _14.GasInfo;
                    fromAmino(object: _14.GasInfoAmino): _14.GasInfo;
                    toAmino(message: _14.GasInfo): _14.GasInfoAmino;
                    fromAminoMsg(object: _14.GasInfoAminoMsg): _14.GasInfo;
                    toAminoMsg(message: _14.GasInfo): _14.GasInfoAminoMsg;
                    fromProtoMsg(message: _14.GasInfoProtoMsg): _14.GasInfo;
                    toProto(message: _14.GasInfo): Uint8Array;
                    toProtoMsg(message: _14.GasInfo): _14.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _14.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.Result;
                    fromPartial(object: Partial<_14.Result>): _14.Result;
                    fromAmino(object: _14.ResultAmino): _14.Result;
                    toAmino(message: _14.Result): _14.ResultAmino;
                    fromAminoMsg(object: _14.ResultAminoMsg): _14.Result;
                    toAminoMsg(message: _14.Result): _14.ResultAminoMsg;
                    fromProtoMsg(message: _14.ResultProtoMsg): _14.Result;
                    toProto(message: _14.Result): Uint8Array;
                    toProtoMsg(message: _14.Result): _14.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _14.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.SimulationResponse;
                    fromPartial(object: Partial<_14.SimulationResponse>): _14.SimulationResponse;
                    fromAmino(object: _14.SimulationResponseAmino): _14.SimulationResponse;
                    toAmino(message: _14.SimulationResponse): _14.SimulationResponseAmino;
                    fromAminoMsg(object: _14.SimulationResponseAminoMsg): _14.SimulationResponse;
                    toAminoMsg(message: _14.SimulationResponse): _14.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _14.SimulationResponseProtoMsg): _14.SimulationResponse;
                    toProto(message: _14.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _14.SimulationResponse): _14.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _14.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.MsgData;
                    fromPartial(object: Partial<_14.MsgData>): _14.MsgData;
                    fromAmino(object: _14.MsgDataAmino): _14.MsgData;
                    toAmino(message: _14.MsgData): _14.MsgDataAmino;
                    fromAminoMsg(object: _14.MsgDataAminoMsg): _14.MsgData;
                    toAminoMsg(message: _14.MsgData): _14.MsgDataAminoMsg;
                    fromProtoMsg(message: _14.MsgDataProtoMsg): _14.MsgData;
                    toProto(message: _14.MsgData): Uint8Array;
                    toProtoMsg(message: _14.MsgData): _14.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _14.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.TxMsgData;
                    fromPartial(object: Partial<_14.TxMsgData>): _14.TxMsgData;
                    fromAmino(object: _14.TxMsgDataAmino): _14.TxMsgData;
                    toAmino(message: _14.TxMsgData): _14.TxMsgDataAmino;
                    fromAminoMsg(object: _14.TxMsgDataAminoMsg): _14.TxMsgData;
                    toAminoMsg(message: _14.TxMsgData): _14.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _14.TxMsgDataProtoMsg): _14.TxMsgData;
                    toProto(message: _14.TxMsgData): Uint8Array;
                    toProtoMsg(message: _14.TxMsgData): _14.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _14.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.SearchTxsResult;
                    fromPartial(object: Partial<_14.SearchTxsResult>): _14.SearchTxsResult;
                    fromAmino(object: _14.SearchTxsResultAmino): _14.SearchTxsResult;
                    toAmino(message: _14.SearchTxsResult): _14.SearchTxsResultAmino;
                    fromAminoMsg(object: _14.SearchTxsResultAminoMsg): _14.SearchTxsResult;
                    toAminoMsg(message: _14.SearchTxsResult): _14.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _14.SearchTxsResultProtoMsg): _14.SearchTxsResult;
                    toProto(message: _14.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _14.SearchTxsResult): _14.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _212.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _15.ConfigRequest): Promise<_15.ConfigResponse>;
                };
                LCDQueryClient: typeof _203.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _15.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.ConfigRequest;
                    fromPartial(_: Partial<_15.ConfigRequest>): _15.ConfigRequest;
                    fromAmino(_: _15.ConfigRequestAmino): _15.ConfigRequest;
                    toAmino(_: _15.ConfigRequest): _15.ConfigRequestAmino;
                    fromAminoMsg(object: _15.ConfigRequestAminoMsg): _15.ConfigRequest;
                    toAminoMsg(message: _15.ConfigRequest): _15.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _15.ConfigRequestProtoMsg): _15.ConfigRequest;
                    toProto(message: _15.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _15.ConfigRequest): _15.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _15.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.ConfigResponse;
                    fromPartial(object: Partial<_15.ConfigResponse>): _15.ConfigResponse;
                    fromAmino(object: _15.ConfigResponseAmino): _15.ConfigResponse;
                    toAmino(message: _15.ConfigResponse): _15.ConfigResponseAmino;
                    fromAminoMsg(object: _15.ConfigResponseAminoMsg): _15.ConfigResponse;
                    toAminoMsg(message: _15.ConfigResponse): _15.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _15.ConfigResponseProtoMsg): _15.ConfigResponse;
                    toProto(message: _15.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _15.ConfigResponse): _15.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _16.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.PageRequest;
                    fromPartial(object: Partial<_16.PageRequest>): _16.PageRequest;
                    fromAmino(object: _16.PageRequestAmino): _16.PageRequest;
                    toAmino(message: _16.PageRequest): _16.PageRequestAmino;
                    fromAminoMsg(object: _16.PageRequestAminoMsg): _16.PageRequest;
                    toAminoMsg(message: _16.PageRequest): _16.PageRequestAminoMsg;
                    fromProtoMsg(message: _16.PageRequestProtoMsg): _16.PageRequest;
                    toProto(message: _16.PageRequest): Uint8Array;
                    toProtoMsg(message: _16.PageRequest): _16.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _16.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.PageResponse;
                    fromPartial(object: Partial<_16.PageResponse>): _16.PageResponse;
                    fromAmino(object: _16.PageResponseAmino): _16.PageResponse;
                    toAmino(message: _16.PageResponse): _16.PageResponseAmino;
                    fromAminoMsg(object: _16.PageResponseAminoMsg): _16.PageResponse;
                    toAminoMsg(message: _16.PageResponse): _16.PageResponseAminoMsg;
                    fromProtoMsg(message: _16.PageResponseProtoMsg): _16.PageResponse;
                    toProto(message: _16.PageResponse): Uint8Array;
                    toProtoMsg(message: _16.PageResponse): _16.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _17.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.AppDescriptor;
                    fromPartial(object: Partial<_17.AppDescriptor>): _17.AppDescriptor;
                    fromAmino(object: _17.AppDescriptorAmino): _17.AppDescriptor;
                    toAmino(message: _17.AppDescriptor): _17.AppDescriptorAmino;
                    fromAminoMsg(object: _17.AppDescriptorAminoMsg): _17.AppDescriptor;
                    toAminoMsg(message: _17.AppDescriptor): _17.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _17.AppDescriptorProtoMsg): _17.AppDescriptor;
                    toProto(message: _17.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _17.AppDescriptor): _17.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _17.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.TxDescriptor;
                    fromPartial(object: Partial<_17.TxDescriptor>): _17.TxDescriptor;
                    fromAmino(object: _17.TxDescriptorAmino): _17.TxDescriptor;
                    toAmino(message: _17.TxDescriptor): _17.TxDescriptorAmino;
                    fromAminoMsg(object: _17.TxDescriptorAminoMsg): _17.TxDescriptor;
                    toAminoMsg(message: _17.TxDescriptor): _17.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _17.TxDescriptorProtoMsg): _17.TxDescriptor;
                    toProto(message: _17.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _17.TxDescriptor): _17.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _17.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.AuthnDescriptor;
                    fromPartial(object: Partial<_17.AuthnDescriptor>): _17.AuthnDescriptor;
                    fromAmino(object: _17.AuthnDescriptorAmino): _17.AuthnDescriptor;
                    toAmino(message: _17.AuthnDescriptor): _17.AuthnDescriptorAmino;
                    fromAminoMsg(object: _17.AuthnDescriptorAminoMsg): _17.AuthnDescriptor;
                    toAminoMsg(message: _17.AuthnDescriptor): _17.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _17.AuthnDescriptorProtoMsg): _17.AuthnDescriptor;
                    toProto(message: _17.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _17.AuthnDescriptor): _17.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _17.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.SigningModeDescriptor;
                    fromPartial(object: Partial<_17.SigningModeDescriptor>): _17.SigningModeDescriptor;
                    fromAmino(object: _17.SigningModeDescriptorAmino): _17.SigningModeDescriptor;
                    toAmino(message: _17.SigningModeDescriptor): _17.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _17.SigningModeDescriptorAminoMsg): _17.SigningModeDescriptor;
                    toAminoMsg(message: _17.SigningModeDescriptor): _17.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _17.SigningModeDescriptorProtoMsg): _17.SigningModeDescriptor;
                    toProto(message: _17.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _17.SigningModeDescriptor): _17.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _17.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.ChainDescriptor;
                    fromPartial(object: Partial<_17.ChainDescriptor>): _17.ChainDescriptor;
                    fromAmino(object: _17.ChainDescriptorAmino): _17.ChainDescriptor;
                    toAmino(message: _17.ChainDescriptor): _17.ChainDescriptorAmino;
                    fromAminoMsg(object: _17.ChainDescriptorAminoMsg): _17.ChainDescriptor;
                    toAminoMsg(message: _17.ChainDescriptor): _17.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _17.ChainDescriptorProtoMsg): _17.ChainDescriptor;
                    toProto(message: _17.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _17.ChainDescriptor): _17.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _17.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.CodecDescriptor;
                    fromPartial(object: Partial<_17.CodecDescriptor>): _17.CodecDescriptor;
                    fromAmino(object: _17.CodecDescriptorAmino): _17.CodecDescriptor;
                    toAmino(message: _17.CodecDescriptor): _17.CodecDescriptorAmino;
                    fromAminoMsg(object: _17.CodecDescriptorAminoMsg): _17.CodecDescriptor;
                    toAminoMsg(message: _17.CodecDescriptor): _17.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _17.CodecDescriptorProtoMsg): _17.CodecDescriptor;
                    toProto(message: _17.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _17.CodecDescriptor): _17.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _17.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.InterfaceDescriptor;
                    fromPartial(object: Partial<_17.InterfaceDescriptor>): _17.InterfaceDescriptor;
                    fromAmino(object: _17.InterfaceDescriptorAmino): _17.InterfaceDescriptor;
                    toAmino(message: _17.InterfaceDescriptor): _17.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _17.InterfaceDescriptorAminoMsg): _17.InterfaceDescriptor;
                    toAminoMsg(message: _17.InterfaceDescriptor): _17.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _17.InterfaceDescriptorProtoMsg): _17.InterfaceDescriptor;
                    toProto(message: _17.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _17.InterfaceDescriptor): _17.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _17.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_17.InterfaceImplementerDescriptor>): _17.InterfaceImplementerDescriptor;
                    fromAmino(object: _17.InterfaceImplementerDescriptorAmino): _17.InterfaceImplementerDescriptor;
                    toAmino(message: _17.InterfaceImplementerDescriptor): _17.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _17.InterfaceImplementerDescriptorAminoMsg): _17.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _17.InterfaceImplementerDescriptor): _17.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _17.InterfaceImplementerDescriptorProtoMsg): _17.InterfaceImplementerDescriptor;
                    toProto(message: _17.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _17.InterfaceImplementerDescriptor): _17.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _17.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_17.InterfaceAcceptingMessageDescriptor>): _17.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _17.InterfaceAcceptingMessageDescriptorAmino): _17.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _17.InterfaceAcceptingMessageDescriptor): _17.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _17.InterfaceAcceptingMessageDescriptorAminoMsg): _17.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _17.InterfaceAcceptingMessageDescriptor): _17.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _17.InterfaceAcceptingMessageDescriptorProtoMsg): _17.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _17.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _17.InterfaceAcceptingMessageDescriptor): _17.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _17.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.ConfigurationDescriptor;
                    fromPartial(object: Partial<_17.ConfigurationDescriptor>): _17.ConfigurationDescriptor;
                    fromAmino(object: _17.ConfigurationDescriptorAmino): _17.ConfigurationDescriptor;
                    toAmino(message: _17.ConfigurationDescriptor): _17.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _17.ConfigurationDescriptorAminoMsg): _17.ConfigurationDescriptor;
                    toAminoMsg(message: _17.ConfigurationDescriptor): _17.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _17.ConfigurationDescriptorProtoMsg): _17.ConfigurationDescriptor;
                    toProto(message: _17.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _17.ConfigurationDescriptor): _17.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _17.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.MsgDescriptor;
                    fromPartial(object: Partial<_17.MsgDescriptor>): _17.MsgDescriptor;
                    fromAmino(object: _17.MsgDescriptorAmino): _17.MsgDescriptor;
                    toAmino(message: _17.MsgDescriptor): _17.MsgDescriptorAmino;
                    fromAminoMsg(object: _17.MsgDescriptorAminoMsg): _17.MsgDescriptor;
                    toAminoMsg(message: _17.MsgDescriptor): _17.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _17.MsgDescriptorProtoMsg): _17.MsgDescriptor;
                    toProto(message: _17.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _17.MsgDescriptor): _17.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _17.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_17.GetAuthnDescriptorRequest>): _17.GetAuthnDescriptorRequest;
                    fromAmino(_: _17.GetAuthnDescriptorRequestAmino): _17.GetAuthnDescriptorRequest;
                    toAmino(_: _17.GetAuthnDescriptorRequest): _17.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _17.GetAuthnDescriptorRequestAminoMsg): _17.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _17.GetAuthnDescriptorRequest): _17.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _17.GetAuthnDescriptorRequestProtoMsg): _17.GetAuthnDescriptorRequest;
                    toProto(message: _17.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _17.GetAuthnDescriptorRequest): _17.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _17.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_17.GetAuthnDescriptorResponse>): _17.GetAuthnDescriptorResponse;
                    fromAmino(object: _17.GetAuthnDescriptorResponseAmino): _17.GetAuthnDescriptorResponse;
                    toAmino(message: _17.GetAuthnDescriptorResponse): _17.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _17.GetAuthnDescriptorResponseAminoMsg): _17.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _17.GetAuthnDescriptorResponse): _17.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _17.GetAuthnDescriptorResponseProtoMsg): _17.GetAuthnDescriptorResponse;
                    toProto(message: _17.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _17.GetAuthnDescriptorResponse): _17.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _17.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_17.GetChainDescriptorRequest>): _17.GetChainDescriptorRequest;
                    fromAmino(_: _17.GetChainDescriptorRequestAmino): _17.GetChainDescriptorRequest;
                    toAmino(_: _17.GetChainDescriptorRequest): _17.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _17.GetChainDescriptorRequestAminoMsg): _17.GetChainDescriptorRequest;
                    toAminoMsg(message: _17.GetChainDescriptorRequest): _17.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _17.GetChainDescriptorRequestProtoMsg): _17.GetChainDescriptorRequest;
                    toProto(message: _17.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _17.GetChainDescriptorRequest): _17.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _17.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_17.GetChainDescriptorResponse>): _17.GetChainDescriptorResponse;
                    fromAmino(object: _17.GetChainDescriptorResponseAmino): _17.GetChainDescriptorResponse;
                    toAmino(message: _17.GetChainDescriptorResponse): _17.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _17.GetChainDescriptorResponseAminoMsg): _17.GetChainDescriptorResponse;
                    toAminoMsg(message: _17.GetChainDescriptorResponse): _17.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _17.GetChainDescriptorResponseProtoMsg): _17.GetChainDescriptorResponse;
                    toProto(message: _17.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _17.GetChainDescriptorResponse): _17.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _17.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_17.GetCodecDescriptorRequest>): _17.GetCodecDescriptorRequest;
                    fromAmino(_: _17.GetCodecDescriptorRequestAmino): _17.GetCodecDescriptorRequest;
                    toAmino(_: _17.GetCodecDescriptorRequest): _17.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _17.GetCodecDescriptorRequestAminoMsg): _17.GetCodecDescriptorRequest;
                    toAminoMsg(message: _17.GetCodecDescriptorRequest): _17.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _17.GetCodecDescriptorRequestProtoMsg): _17.GetCodecDescriptorRequest;
                    toProto(message: _17.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _17.GetCodecDescriptorRequest): _17.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _17.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_17.GetCodecDescriptorResponse>): _17.GetCodecDescriptorResponse;
                    fromAmino(object: _17.GetCodecDescriptorResponseAmino): _17.GetCodecDescriptorResponse;
                    toAmino(message: _17.GetCodecDescriptorResponse): _17.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _17.GetCodecDescriptorResponseAminoMsg): _17.GetCodecDescriptorResponse;
                    toAminoMsg(message: _17.GetCodecDescriptorResponse): _17.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _17.GetCodecDescriptorResponseProtoMsg): _17.GetCodecDescriptorResponse;
                    toProto(message: _17.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _17.GetCodecDescriptorResponse): _17.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _17.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_17.GetConfigurationDescriptorRequest>): _17.GetConfigurationDescriptorRequest;
                    fromAmino(_: _17.GetConfigurationDescriptorRequestAmino): _17.GetConfigurationDescriptorRequest;
                    toAmino(_: _17.GetConfigurationDescriptorRequest): _17.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _17.GetConfigurationDescriptorRequestAminoMsg): _17.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _17.GetConfigurationDescriptorRequest): _17.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _17.GetConfigurationDescriptorRequestProtoMsg): _17.GetConfigurationDescriptorRequest;
                    toProto(message: _17.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _17.GetConfigurationDescriptorRequest): _17.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _17.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_17.GetConfigurationDescriptorResponse>): _17.GetConfigurationDescriptorResponse;
                    fromAmino(object: _17.GetConfigurationDescriptorResponseAmino): _17.GetConfigurationDescriptorResponse;
                    toAmino(message: _17.GetConfigurationDescriptorResponse): _17.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _17.GetConfigurationDescriptorResponseAminoMsg): _17.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _17.GetConfigurationDescriptorResponse): _17.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _17.GetConfigurationDescriptorResponseProtoMsg): _17.GetConfigurationDescriptorResponse;
                    toProto(message: _17.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _17.GetConfigurationDescriptorResponse): _17.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _17.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_17.GetQueryServicesDescriptorRequest>): _17.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _17.GetQueryServicesDescriptorRequestAmino): _17.GetQueryServicesDescriptorRequest;
                    toAmino(_: _17.GetQueryServicesDescriptorRequest): _17.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _17.GetQueryServicesDescriptorRequestAminoMsg): _17.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _17.GetQueryServicesDescriptorRequest): _17.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _17.GetQueryServicesDescriptorRequestProtoMsg): _17.GetQueryServicesDescriptorRequest;
                    toProto(message: _17.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _17.GetQueryServicesDescriptorRequest): _17.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _17.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_17.GetQueryServicesDescriptorResponse>): _17.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _17.GetQueryServicesDescriptorResponseAmino): _17.GetQueryServicesDescriptorResponse;
                    toAmino(message: _17.GetQueryServicesDescriptorResponse): _17.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _17.GetQueryServicesDescriptorResponseAminoMsg): _17.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _17.GetQueryServicesDescriptorResponse): _17.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _17.GetQueryServicesDescriptorResponseProtoMsg): _17.GetQueryServicesDescriptorResponse;
                    toProto(message: _17.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _17.GetQueryServicesDescriptorResponse): _17.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _17.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_17.GetTxDescriptorRequest>): _17.GetTxDescriptorRequest;
                    fromAmino(_: _17.GetTxDescriptorRequestAmino): _17.GetTxDescriptorRequest;
                    toAmino(_: _17.GetTxDescriptorRequest): _17.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _17.GetTxDescriptorRequestAminoMsg): _17.GetTxDescriptorRequest;
                    toAminoMsg(message: _17.GetTxDescriptorRequest): _17.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _17.GetTxDescriptorRequestProtoMsg): _17.GetTxDescriptorRequest;
                    toProto(message: _17.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _17.GetTxDescriptorRequest): _17.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _17.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_17.GetTxDescriptorResponse>): _17.GetTxDescriptorResponse;
                    fromAmino(object: _17.GetTxDescriptorResponseAmino): _17.GetTxDescriptorResponse;
                    toAmino(message: _17.GetTxDescriptorResponse): _17.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _17.GetTxDescriptorResponseAminoMsg): _17.GetTxDescriptorResponse;
                    toAminoMsg(message: _17.GetTxDescriptorResponse): _17.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _17.GetTxDescriptorResponseProtoMsg): _17.GetTxDescriptorResponse;
                    toProto(message: _17.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _17.GetTxDescriptorResponse): _17.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _17.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.QueryServicesDescriptor;
                    fromPartial(object: Partial<_17.QueryServicesDescriptor>): _17.QueryServicesDescriptor;
                    fromAmino(object: _17.QueryServicesDescriptorAmino): _17.QueryServicesDescriptor;
                    toAmino(message: _17.QueryServicesDescriptor): _17.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _17.QueryServicesDescriptorAminoMsg): _17.QueryServicesDescriptor;
                    toAminoMsg(message: _17.QueryServicesDescriptor): _17.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _17.QueryServicesDescriptorProtoMsg): _17.QueryServicesDescriptor;
                    toProto(message: _17.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _17.QueryServicesDescriptor): _17.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _17.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.QueryServiceDescriptor;
                    fromPartial(object: Partial<_17.QueryServiceDescriptor>): _17.QueryServiceDescriptor;
                    fromAmino(object: _17.QueryServiceDescriptorAmino): _17.QueryServiceDescriptor;
                    toAmino(message: _17.QueryServiceDescriptor): _17.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _17.QueryServiceDescriptorAminoMsg): _17.QueryServiceDescriptor;
                    toAminoMsg(message: _17.QueryServiceDescriptor): _17.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _17.QueryServiceDescriptorProtoMsg): _17.QueryServiceDescriptor;
                    toProto(message: _17.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _17.QueryServiceDescriptor): _17.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _17.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.QueryMethodDescriptor;
                    fromPartial(object: Partial<_17.QueryMethodDescriptor>): _17.QueryMethodDescriptor;
                    fromAmino(object: _17.QueryMethodDescriptorAmino): _17.QueryMethodDescriptor;
                    toAmino(message: _17.QueryMethodDescriptor): _17.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _17.QueryMethodDescriptorAminoMsg): _17.QueryMethodDescriptor;
                    toAminoMsg(message: _17.QueryMethodDescriptor): _17.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _17.QueryMethodDescriptorProtoMsg): _17.QueryMethodDescriptor;
                    toProto(message: _17.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _17.QueryMethodDescriptor): _17.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _18.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.Coin;
                fromPartial(object: Partial<_18.Coin>): _18.Coin;
                fromAmino(object: _18.CoinAmino): _18.Coin;
                toAmino(message: _18.Coin): _18.CoinAmino;
                fromAminoMsg(object: _18.CoinAminoMsg): _18.Coin;
                toAminoMsg(message: _18.Coin): _18.CoinAminoMsg;
                fromProtoMsg(message: _18.CoinProtoMsg): _18.Coin;
                toProto(message: _18.Coin): Uint8Array;
                toProtoMsg(message: _18.Coin): _18.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _18.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.DecCoin;
                fromPartial(object: Partial<_18.DecCoin>): _18.DecCoin;
                fromAmino(object: _18.DecCoinAmino): _18.DecCoin;
                toAmino(message: _18.DecCoin): _18.DecCoinAmino;
                fromAminoMsg(object: _18.DecCoinAminoMsg): _18.DecCoin;
                toAminoMsg(message: _18.DecCoin): _18.DecCoinAminoMsg;
                fromProtoMsg(message: _18.DecCoinProtoMsg): _18.DecCoin;
                toProto(message: _18.DecCoin): Uint8Array;
                toProtoMsg(message: _18.DecCoin): _18.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _18.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.IntProto;
                fromPartial(object: Partial<_18.IntProto>): _18.IntProto;
                fromAmino(object: _18.IntProtoAmino): _18.IntProto;
                toAmino(message: _18.IntProto): _18.IntProtoAmino;
                fromAminoMsg(object: _18.IntProtoAminoMsg): _18.IntProto;
                toAminoMsg(message: _18.IntProto): _18.IntProtoAminoMsg;
                fromProtoMsg(message: _18.IntProtoProtoMsg): _18.IntProto;
                toProto(message: _18.IntProto): Uint8Array;
                toProtoMsg(message: _18.IntProto): _18.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _18.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.DecProto;
                fromPartial(object: Partial<_18.DecProto>): _18.DecProto;
                fromAmino(object: _18.DecProtoAmino): _18.DecProto;
                toAmino(message: _18.DecProto): _18.DecProtoAmino;
                fromAminoMsg(object: _18.DecProtoAminoMsg): _18.DecProto;
                toAminoMsg(message: _18.DecProto): _18.DecProtoAminoMsg;
                fromProtoMsg(message: _18.DecProtoProtoMsg): _18.DecProto;
                toProto(message: _18.DecProto): Uint8Array;
                toProtoMsg(message: _18.DecProto): _18.DecProtoProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _19.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.PubKey;
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
                encode(message: _19.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.PrivKey;
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
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _20.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _20.LegacyAminoPubKey;
                fromPartial(object: Partial<_20.LegacyAminoPubKey>): _20.LegacyAminoPubKey;
                fromAmino(object: _20.LegacyAminoPubKeyAmino): _20.LegacyAminoPubKey;
                toAmino(message: _20.LegacyAminoPubKey): _20.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _20.LegacyAminoPubKeyAminoMsg): _20.LegacyAminoPubKey;
                toAminoMsg(message: _20.LegacyAminoPubKey): _20.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _20.LegacyAminoPubKeyProtoMsg): _20.LegacyAminoPubKey;
                toProto(message: _20.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _20.LegacyAminoPubKey): _20.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _21.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.PubKey;
                fromPartial(object: Partial<_21.PubKey>): _21.PubKey;
                fromAmino(object: _21.PubKeyAmino): _21.PubKey;
                toAmino(message: _21.PubKey): _21.PubKeyAmino;
                fromAminoMsg(object: _21.PubKeyAminoMsg): _21.PubKey;
                toAminoMsg(message: _21.PubKey): _21.PubKeyAminoMsg;
                fromProtoMsg(message: _21.PubKeyProtoMsg): _21.PubKey;
                toProto(message: _21.PubKey): Uint8Array;
                toProtoMsg(message: _21.PubKey): _21.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _21.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.PrivKey;
                fromPartial(object: Partial<_21.PrivKey>): _21.PrivKey;
                fromAmino(object: _21.PrivKeyAmino): _21.PrivKey;
                toAmino(message: _21.PrivKey): _21.PrivKeyAmino;
                fromAminoMsg(object: _21.PrivKeyAminoMsg): _21.PrivKey;
                toAminoMsg(message: _21.PrivKey): _21.PrivKeyAminoMsg;
                fromProtoMsg(message: _21.PrivKeyProtoMsg): _21.PrivKey;
                toProto(message: _21.PrivKey): Uint8Array;
                toProtoMsg(message: _21.PrivKey): _21.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _22.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _22.PubKey;
                fromPartial(object: Partial<_22.PubKey>): _22.PubKey;
                fromAmino(object: _22.PubKeyAmino): _22.PubKey;
                toAmino(message: _22.PubKey): _22.PubKeyAmino;
                fromAminoMsg(object: _22.PubKeyAminoMsg): _22.PubKey;
                toAminoMsg(message: _22.PubKey): _22.PubKeyAminoMsg;
                fromProtoMsg(message: _22.PubKeyProtoMsg): _22.PubKey;
                toProto(message: _22.PubKey): Uint8Array;
                toProtoMsg(message: _22.PubKey): _22.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _22.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _22.PrivKey;
                fromPartial(object: Partial<_22.PrivKey>): _22.PrivKey;
                fromAmino(object: _22.PrivKeyAmino): _22.PrivKey;
                toAmino(message: _22.PrivKey): _22.PrivKeyAmino;
                fromAminoMsg(object: _22.PrivKeyAminoMsg): _22.PrivKey;
                toAminoMsg(message: _22.PrivKey): _22.PrivKeyAminoMsg;
                fromProtoMsg(message: _22.PrivKeyProtoMsg): _22.PrivKey;
                toProto(message: _22.PrivKey): Uint8Array;
                toProtoMsg(message: _22.PrivKey): _22.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _220.MsgClientImpl;
            QueryClientImpl: typeof _213.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _25.QueryParamsRequest): Promise<_25.QueryParamsResponse>;
                validatorOutstandingRewards(request: _25.QueryValidatorOutstandingRewardsRequest): Promise<_25.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _25.QueryValidatorCommissionRequest): Promise<_25.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _25.QueryValidatorSlashesRequest): Promise<_25.QueryValidatorSlashesResponse>;
                delegationRewards(request: _25.QueryDelegationRewardsRequest): Promise<_25.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _25.QueryDelegationTotalRewardsRequest): Promise<_25.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _25.QueryDelegatorValidatorsRequest): Promise<_25.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _25.QueryDelegatorWithdrawAddressRequest): Promise<_25.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _25.QueryCommunityPoolRequest): Promise<_25.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _204.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _26.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _26.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _26.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _26.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _26.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _26.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _26.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _26.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _26.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _26.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _26.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _26.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _26.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _26.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _26.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _26.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _26.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _26.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _26.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _26.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _26.MsgSetWithdrawAddress) => _26.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _26.MsgSetWithdrawAddressAmino) => _26.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _26.MsgWithdrawDelegatorReward) => _26.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _26.MsgWithdrawDelegatorRewardAmino) => _26.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _26.MsgWithdrawValidatorCommission) => _26.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _26.MsgWithdrawValidatorCommissionAmino) => _26.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _26.MsgFundCommunityPool) => _26.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _26.MsgFundCommunityPoolAmino) => _26.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _26.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_26.MsgSetWithdrawAddress>): _26.MsgSetWithdrawAddress;
                fromAmino(object: _26.MsgSetWithdrawAddressAmino): _26.MsgSetWithdrawAddress;
                toAmino(message: _26.MsgSetWithdrawAddress): _26.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _26.MsgSetWithdrawAddressAminoMsg): _26.MsgSetWithdrawAddress;
                toAminoMsg(message: _26.MsgSetWithdrawAddress): _26.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _26.MsgSetWithdrawAddressProtoMsg): _26.MsgSetWithdrawAddress;
                toProto(message: _26.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _26.MsgSetWithdrawAddress): _26.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _26.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_26.MsgSetWithdrawAddressResponse>): _26.MsgSetWithdrawAddressResponse;
                fromAmino(_: _26.MsgSetWithdrawAddressResponseAmino): _26.MsgSetWithdrawAddressResponse;
                toAmino(_: _26.MsgSetWithdrawAddressResponse): _26.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _26.MsgSetWithdrawAddressResponseAminoMsg): _26.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _26.MsgSetWithdrawAddressResponse): _26.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _26.MsgSetWithdrawAddressResponseProtoMsg): _26.MsgSetWithdrawAddressResponse;
                toProto(message: _26.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _26.MsgSetWithdrawAddressResponse): _26.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _26.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_26.MsgWithdrawDelegatorReward>): _26.MsgWithdrawDelegatorReward;
                fromAmino(object: _26.MsgWithdrawDelegatorRewardAmino): _26.MsgWithdrawDelegatorReward;
                toAmino(message: _26.MsgWithdrawDelegatorReward): _26.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _26.MsgWithdrawDelegatorRewardAminoMsg): _26.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _26.MsgWithdrawDelegatorReward): _26.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _26.MsgWithdrawDelegatorRewardProtoMsg): _26.MsgWithdrawDelegatorReward;
                toProto(message: _26.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _26.MsgWithdrawDelegatorReward): _26.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(_: _26.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_26.MsgWithdrawDelegatorRewardResponse>): _26.MsgWithdrawDelegatorRewardResponse;
                fromAmino(_: _26.MsgWithdrawDelegatorRewardResponseAmino): _26.MsgWithdrawDelegatorRewardResponse;
                toAmino(_: _26.MsgWithdrawDelegatorRewardResponse): _26.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _26.MsgWithdrawDelegatorRewardResponseAminoMsg): _26.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _26.MsgWithdrawDelegatorRewardResponse): _26.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _26.MsgWithdrawDelegatorRewardResponseProtoMsg): _26.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _26.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _26.MsgWithdrawDelegatorRewardResponse): _26.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _26.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_26.MsgWithdrawValidatorCommission>): _26.MsgWithdrawValidatorCommission;
                fromAmino(object: _26.MsgWithdrawValidatorCommissionAmino): _26.MsgWithdrawValidatorCommission;
                toAmino(message: _26.MsgWithdrawValidatorCommission): _26.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _26.MsgWithdrawValidatorCommissionAminoMsg): _26.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _26.MsgWithdrawValidatorCommission): _26.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _26.MsgWithdrawValidatorCommissionProtoMsg): _26.MsgWithdrawValidatorCommission;
                toProto(message: _26.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _26.MsgWithdrawValidatorCommission): _26.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(_: _26.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_26.MsgWithdrawValidatorCommissionResponse>): _26.MsgWithdrawValidatorCommissionResponse;
                fromAmino(_: _26.MsgWithdrawValidatorCommissionResponseAmino): _26.MsgWithdrawValidatorCommissionResponse;
                toAmino(_: _26.MsgWithdrawValidatorCommissionResponse): _26.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _26.MsgWithdrawValidatorCommissionResponseAminoMsg): _26.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _26.MsgWithdrawValidatorCommissionResponse): _26.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _26.MsgWithdrawValidatorCommissionResponseProtoMsg): _26.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _26.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _26.MsgWithdrawValidatorCommissionResponse): _26.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _26.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.MsgFundCommunityPool;
                fromPartial(object: Partial<_26.MsgFundCommunityPool>): _26.MsgFundCommunityPool;
                fromAmino(object: _26.MsgFundCommunityPoolAmino): _26.MsgFundCommunityPool;
                toAmino(message: _26.MsgFundCommunityPool): _26.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _26.MsgFundCommunityPoolAminoMsg): _26.MsgFundCommunityPool;
                toAminoMsg(message: _26.MsgFundCommunityPool): _26.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _26.MsgFundCommunityPoolProtoMsg): _26.MsgFundCommunityPool;
                toProto(message: _26.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _26.MsgFundCommunityPool): _26.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _26.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_26.MsgFundCommunityPoolResponse>): _26.MsgFundCommunityPoolResponse;
                fromAmino(_: _26.MsgFundCommunityPoolResponseAmino): _26.MsgFundCommunityPoolResponse;
                toAmino(_: _26.MsgFundCommunityPoolResponse): _26.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _26.MsgFundCommunityPoolResponseAminoMsg): _26.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _26.MsgFundCommunityPoolResponse): _26.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _26.MsgFundCommunityPoolResponseProtoMsg): _26.MsgFundCommunityPoolResponse;
                toProto(message: _26.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _26.MsgFundCommunityPoolResponse): _26.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _25.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryParamsRequest;
                fromPartial(_: Partial<_25.QueryParamsRequest>): _25.QueryParamsRequest;
                fromAmino(_: _25.QueryParamsRequestAmino): _25.QueryParamsRequest;
                toAmino(_: _25.QueryParamsRequest): _25.QueryParamsRequestAmino;
                fromAminoMsg(object: _25.QueryParamsRequestAminoMsg): _25.QueryParamsRequest;
                toAminoMsg(message: _25.QueryParamsRequest): _25.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _25.QueryParamsRequestProtoMsg): _25.QueryParamsRequest;
                toProto(message: _25.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _25.QueryParamsRequest): _25.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _25.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryParamsResponse;
                fromPartial(object: Partial<_25.QueryParamsResponse>): _25.QueryParamsResponse;
                fromAmino(object: _25.QueryParamsResponseAmino): _25.QueryParamsResponse;
                toAmino(message: _25.QueryParamsResponse): _25.QueryParamsResponseAmino;
                fromAminoMsg(object: _25.QueryParamsResponseAminoMsg): _25.QueryParamsResponse;
                toAminoMsg(message: _25.QueryParamsResponse): _25.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _25.QueryParamsResponseProtoMsg): _25.QueryParamsResponse;
                toProto(message: _25.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _25.QueryParamsResponse): _25.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _25.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_25.QueryValidatorOutstandingRewardsRequest>): _25.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _25.QueryValidatorOutstandingRewardsRequestAmino): _25.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _25.QueryValidatorOutstandingRewardsRequest): _25.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _25.QueryValidatorOutstandingRewardsRequestAminoMsg): _25.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _25.QueryValidatorOutstandingRewardsRequest): _25.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _25.QueryValidatorOutstandingRewardsRequestProtoMsg): _25.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _25.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _25.QueryValidatorOutstandingRewardsRequest): _25.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _25.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_25.QueryValidatorOutstandingRewardsResponse>): _25.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _25.QueryValidatorOutstandingRewardsResponseAmino): _25.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _25.QueryValidatorOutstandingRewardsResponse): _25.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _25.QueryValidatorOutstandingRewardsResponseAminoMsg): _25.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _25.QueryValidatorOutstandingRewardsResponse): _25.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _25.QueryValidatorOutstandingRewardsResponseProtoMsg): _25.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _25.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _25.QueryValidatorOutstandingRewardsResponse): _25.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _25.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_25.QueryValidatorCommissionRequest>): _25.QueryValidatorCommissionRequest;
                fromAmino(object: _25.QueryValidatorCommissionRequestAmino): _25.QueryValidatorCommissionRequest;
                toAmino(message: _25.QueryValidatorCommissionRequest): _25.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _25.QueryValidatorCommissionRequestAminoMsg): _25.QueryValidatorCommissionRequest;
                toAminoMsg(message: _25.QueryValidatorCommissionRequest): _25.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _25.QueryValidatorCommissionRequestProtoMsg): _25.QueryValidatorCommissionRequest;
                toProto(message: _25.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _25.QueryValidatorCommissionRequest): _25.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _25.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_25.QueryValidatorCommissionResponse>): _25.QueryValidatorCommissionResponse;
                fromAmino(object: _25.QueryValidatorCommissionResponseAmino): _25.QueryValidatorCommissionResponse;
                toAmino(message: _25.QueryValidatorCommissionResponse): _25.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _25.QueryValidatorCommissionResponseAminoMsg): _25.QueryValidatorCommissionResponse;
                toAminoMsg(message: _25.QueryValidatorCommissionResponse): _25.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _25.QueryValidatorCommissionResponseProtoMsg): _25.QueryValidatorCommissionResponse;
                toProto(message: _25.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _25.QueryValidatorCommissionResponse): _25.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _25.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_25.QueryValidatorSlashesRequest>): _25.QueryValidatorSlashesRequest;
                fromAmino(object: _25.QueryValidatorSlashesRequestAmino): _25.QueryValidatorSlashesRequest;
                toAmino(message: _25.QueryValidatorSlashesRequest): _25.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _25.QueryValidatorSlashesRequestAminoMsg): _25.QueryValidatorSlashesRequest;
                toAminoMsg(message: _25.QueryValidatorSlashesRequest): _25.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _25.QueryValidatorSlashesRequestProtoMsg): _25.QueryValidatorSlashesRequest;
                toProto(message: _25.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _25.QueryValidatorSlashesRequest): _25.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _25.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_25.QueryValidatorSlashesResponse>): _25.QueryValidatorSlashesResponse;
                fromAmino(object: _25.QueryValidatorSlashesResponseAmino): _25.QueryValidatorSlashesResponse;
                toAmino(message: _25.QueryValidatorSlashesResponse): _25.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _25.QueryValidatorSlashesResponseAminoMsg): _25.QueryValidatorSlashesResponse;
                toAminoMsg(message: _25.QueryValidatorSlashesResponse): _25.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _25.QueryValidatorSlashesResponseProtoMsg): _25.QueryValidatorSlashesResponse;
                toProto(message: _25.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _25.QueryValidatorSlashesResponse): _25.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _25.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_25.QueryDelegationRewardsRequest>): _25.QueryDelegationRewardsRequest;
                fromAmino(object: _25.QueryDelegationRewardsRequestAmino): _25.QueryDelegationRewardsRequest;
                toAmino(message: _25.QueryDelegationRewardsRequest): _25.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _25.QueryDelegationRewardsRequestAminoMsg): _25.QueryDelegationRewardsRequest;
                toAminoMsg(message: _25.QueryDelegationRewardsRequest): _25.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _25.QueryDelegationRewardsRequestProtoMsg): _25.QueryDelegationRewardsRequest;
                toProto(message: _25.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _25.QueryDelegationRewardsRequest): _25.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _25.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_25.QueryDelegationRewardsResponse>): _25.QueryDelegationRewardsResponse;
                fromAmino(object: _25.QueryDelegationRewardsResponseAmino): _25.QueryDelegationRewardsResponse;
                toAmino(message: _25.QueryDelegationRewardsResponse): _25.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _25.QueryDelegationRewardsResponseAminoMsg): _25.QueryDelegationRewardsResponse;
                toAminoMsg(message: _25.QueryDelegationRewardsResponse): _25.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _25.QueryDelegationRewardsResponseProtoMsg): _25.QueryDelegationRewardsResponse;
                toProto(message: _25.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _25.QueryDelegationRewardsResponse): _25.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _25.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_25.QueryDelegationTotalRewardsRequest>): _25.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _25.QueryDelegationTotalRewardsRequestAmino): _25.QueryDelegationTotalRewardsRequest;
                toAmino(message: _25.QueryDelegationTotalRewardsRequest): _25.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _25.QueryDelegationTotalRewardsRequestAminoMsg): _25.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _25.QueryDelegationTotalRewardsRequest): _25.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _25.QueryDelegationTotalRewardsRequestProtoMsg): _25.QueryDelegationTotalRewardsRequest;
                toProto(message: _25.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _25.QueryDelegationTotalRewardsRequest): _25.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _25.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_25.QueryDelegationTotalRewardsResponse>): _25.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _25.QueryDelegationTotalRewardsResponseAmino): _25.QueryDelegationTotalRewardsResponse;
                toAmino(message: _25.QueryDelegationTotalRewardsResponse): _25.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _25.QueryDelegationTotalRewardsResponseAminoMsg): _25.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _25.QueryDelegationTotalRewardsResponse): _25.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _25.QueryDelegationTotalRewardsResponseProtoMsg): _25.QueryDelegationTotalRewardsResponse;
                toProto(message: _25.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _25.QueryDelegationTotalRewardsResponse): _25.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _25.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_25.QueryDelegatorValidatorsRequest>): _25.QueryDelegatorValidatorsRequest;
                fromAmino(object: _25.QueryDelegatorValidatorsRequestAmino): _25.QueryDelegatorValidatorsRequest;
                toAmino(message: _25.QueryDelegatorValidatorsRequest): _25.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _25.QueryDelegatorValidatorsRequestAminoMsg): _25.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _25.QueryDelegatorValidatorsRequest): _25.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _25.QueryDelegatorValidatorsRequestProtoMsg): _25.QueryDelegatorValidatorsRequest;
                toProto(message: _25.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _25.QueryDelegatorValidatorsRequest): _25.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _25.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_25.QueryDelegatorValidatorsResponse>): _25.QueryDelegatorValidatorsResponse;
                fromAmino(object: _25.QueryDelegatorValidatorsResponseAmino): _25.QueryDelegatorValidatorsResponse;
                toAmino(message: _25.QueryDelegatorValidatorsResponse): _25.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _25.QueryDelegatorValidatorsResponseAminoMsg): _25.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _25.QueryDelegatorValidatorsResponse): _25.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _25.QueryDelegatorValidatorsResponseProtoMsg): _25.QueryDelegatorValidatorsResponse;
                toProto(message: _25.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _25.QueryDelegatorValidatorsResponse): _25.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _25.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_25.QueryDelegatorWithdrawAddressRequest>): _25.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _25.QueryDelegatorWithdrawAddressRequestAmino): _25.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _25.QueryDelegatorWithdrawAddressRequest): _25.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _25.QueryDelegatorWithdrawAddressRequestAminoMsg): _25.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _25.QueryDelegatorWithdrawAddressRequest): _25.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _25.QueryDelegatorWithdrawAddressRequestProtoMsg): _25.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _25.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _25.QueryDelegatorWithdrawAddressRequest): _25.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _25.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_25.QueryDelegatorWithdrawAddressResponse>): _25.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _25.QueryDelegatorWithdrawAddressResponseAmino): _25.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _25.QueryDelegatorWithdrawAddressResponse): _25.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _25.QueryDelegatorWithdrawAddressResponseAminoMsg): _25.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _25.QueryDelegatorWithdrawAddressResponse): _25.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _25.QueryDelegatorWithdrawAddressResponseProtoMsg): _25.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _25.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _25.QueryDelegatorWithdrawAddressResponse): _25.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _25.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_25.QueryCommunityPoolRequest>): _25.QueryCommunityPoolRequest;
                fromAmino(_: _25.QueryCommunityPoolRequestAmino): _25.QueryCommunityPoolRequest;
                toAmino(_: _25.QueryCommunityPoolRequest): _25.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _25.QueryCommunityPoolRequestAminoMsg): _25.QueryCommunityPoolRequest;
                toAminoMsg(message: _25.QueryCommunityPoolRequest): _25.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _25.QueryCommunityPoolRequestProtoMsg): _25.QueryCommunityPoolRequest;
                toProto(message: _25.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _25.QueryCommunityPoolRequest): _25.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _25.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_25.QueryCommunityPoolResponse>): _25.QueryCommunityPoolResponse;
                fromAmino(object: _25.QueryCommunityPoolResponseAmino): _25.QueryCommunityPoolResponse;
                toAmino(message: _25.QueryCommunityPoolResponse): _25.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _25.QueryCommunityPoolResponseAminoMsg): _25.QueryCommunityPoolResponse;
                toAminoMsg(message: _25.QueryCommunityPoolResponse): _25.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _25.QueryCommunityPoolResponseProtoMsg): _25.QueryCommunityPoolResponse;
                toProto(message: _25.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _25.QueryCommunityPoolResponse): _25.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _24.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_24.DelegatorWithdrawInfo>): _24.DelegatorWithdrawInfo;
                fromAmino(object: _24.DelegatorWithdrawInfoAmino): _24.DelegatorWithdrawInfo;
                toAmino(message: _24.DelegatorWithdrawInfo): _24.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _24.DelegatorWithdrawInfoAminoMsg): _24.DelegatorWithdrawInfo;
                toAminoMsg(message: _24.DelegatorWithdrawInfo): _24.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _24.DelegatorWithdrawInfoProtoMsg): _24.DelegatorWithdrawInfo;
                toProto(message: _24.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _24.DelegatorWithdrawInfo): _24.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _24.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_24.ValidatorOutstandingRewardsRecord>): _24.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _24.ValidatorOutstandingRewardsRecordAmino): _24.ValidatorOutstandingRewardsRecord;
                toAmino(message: _24.ValidatorOutstandingRewardsRecord): _24.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _24.ValidatorOutstandingRewardsRecordAminoMsg): _24.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _24.ValidatorOutstandingRewardsRecord): _24.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _24.ValidatorOutstandingRewardsRecordProtoMsg): _24.ValidatorOutstandingRewardsRecord;
                toProto(message: _24.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _24.ValidatorOutstandingRewardsRecord): _24.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _24.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_24.ValidatorAccumulatedCommissionRecord>): _24.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _24.ValidatorAccumulatedCommissionRecordAmino): _24.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _24.ValidatorAccumulatedCommissionRecord): _24.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _24.ValidatorAccumulatedCommissionRecordAminoMsg): _24.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _24.ValidatorAccumulatedCommissionRecord): _24.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _24.ValidatorAccumulatedCommissionRecordProtoMsg): _24.ValidatorAccumulatedCommissionRecord;
                toProto(message: _24.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _24.ValidatorAccumulatedCommissionRecord): _24.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _24.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_24.ValidatorHistoricalRewardsRecord>): _24.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _24.ValidatorHistoricalRewardsRecordAmino): _24.ValidatorHistoricalRewardsRecord;
                toAmino(message: _24.ValidatorHistoricalRewardsRecord): _24.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _24.ValidatorHistoricalRewardsRecordAminoMsg): _24.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _24.ValidatorHistoricalRewardsRecord): _24.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _24.ValidatorHistoricalRewardsRecordProtoMsg): _24.ValidatorHistoricalRewardsRecord;
                toProto(message: _24.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _24.ValidatorHistoricalRewardsRecord): _24.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _24.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_24.ValidatorCurrentRewardsRecord>): _24.ValidatorCurrentRewardsRecord;
                fromAmino(object: _24.ValidatorCurrentRewardsRecordAmino): _24.ValidatorCurrentRewardsRecord;
                toAmino(message: _24.ValidatorCurrentRewardsRecord): _24.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _24.ValidatorCurrentRewardsRecordAminoMsg): _24.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _24.ValidatorCurrentRewardsRecord): _24.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _24.ValidatorCurrentRewardsRecordProtoMsg): _24.ValidatorCurrentRewardsRecord;
                toProto(message: _24.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _24.ValidatorCurrentRewardsRecord): _24.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _24.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_24.DelegatorStartingInfoRecord>): _24.DelegatorStartingInfoRecord;
                fromAmino(object: _24.DelegatorStartingInfoRecordAmino): _24.DelegatorStartingInfoRecord;
                toAmino(message: _24.DelegatorStartingInfoRecord): _24.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _24.DelegatorStartingInfoRecordAminoMsg): _24.DelegatorStartingInfoRecord;
                toAminoMsg(message: _24.DelegatorStartingInfoRecord): _24.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _24.DelegatorStartingInfoRecordProtoMsg): _24.DelegatorStartingInfoRecord;
                toProto(message: _24.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _24.DelegatorStartingInfoRecord): _24.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _24.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_24.ValidatorSlashEventRecord>): _24.ValidatorSlashEventRecord;
                fromAmino(object: _24.ValidatorSlashEventRecordAmino): _24.ValidatorSlashEventRecord;
                toAmino(message: _24.ValidatorSlashEventRecord): _24.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _24.ValidatorSlashEventRecordAminoMsg): _24.ValidatorSlashEventRecord;
                toAminoMsg(message: _24.ValidatorSlashEventRecord): _24.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _24.ValidatorSlashEventRecordProtoMsg): _24.ValidatorSlashEventRecord;
                toProto(message: _24.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _24.ValidatorSlashEventRecord): _24.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _24.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.GenesisState;
                fromPartial(object: Partial<_24.GenesisState>): _24.GenesisState;
                fromAmino(object: _24.GenesisStateAmino): _24.GenesisState;
                toAmino(message: _24.GenesisState): _24.GenesisStateAmino;
                fromAminoMsg(object: _24.GenesisStateAminoMsg): _24.GenesisState;
                toAminoMsg(message: _24.GenesisState): _24.GenesisStateAminoMsg;
                fromProtoMsg(message: _24.GenesisStateProtoMsg): _24.GenesisState;
                toProto(message: _24.GenesisState): Uint8Array;
                toProtoMsg(message: _24.GenesisState): _24.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _23.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.Params;
                fromPartial(object: Partial<_23.Params>): _23.Params;
                fromAmino(object: _23.ParamsAmino): _23.Params;
                toAmino(message: _23.Params): _23.ParamsAmino;
                fromAminoMsg(object: _23.ParamsAminoMsg): _23.Params;
                toAminoMsg(message: _23.Params): _23.ParamsAminoMsg;
                fromProtoMsg(message: _23.ParamsProtoMsg): _23.Params;
                toProto(message: _23.Params): Uint8Array;
                toProtoMsg(message: _23.Params): _23.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _23.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_23.ValidatorHistoricalRewards>): _23.ValidatorHistoricalRewards;
                fromAmino(object: _23.ValidatorHistoricalRewardsAmino): _23.ValidatorHistoricalRewards;
                toAmino(message: _23.ValidatorHistoricalRewards): _23.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _23.ValidatorHistoricalRewardsAminoMsg): _23.ValidatorHistoricalRewards;
                toAminoMsg(message: _23.ValidatorHistoricalRewards): _23.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _23.ValidatorHistoricalRewardsProtoMsg): _23.ValidatorHistoricalRewards;
                toProto(message: _23.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _23.ValidatorHistoricalRewards): _23.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _23.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.ValidatorCurrentRewards;
                fromPartial(object: Partial<_23.ValidatorCurrentRewards>): _23.ValidatorCurrentRewards;
                fromAmino(object: _23.ValidatorCurrentRewardsAmino): _23.ValidatorCurrentRewards;
                toAmino(message: _23.ValidatorCurrentRewards): _23.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _23.ValidatorCurrentRewardsAminoMsg): _23.ValidatorCurrentRewards;
                toAminoMsg(message: _23.ValidatorCurrentRewards): _23.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _23.ValidatorCurrentRewardsProtoMsg): _23.ValidatorCurrentRewards;
                toProto(message: _23.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _23.ValidatorCurrentRewards): _23.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _23.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_23.ValidatorAccumulatedCommission>): _23.ValidatorAccumulatedCommission;
                fromAmino(object: _23.ValidatorAccumulatedCommissionAmino): _23.ValidatorAccumulatedCommission;
                toAmino(message: _23.ValidatorAccumulatedCommission): _23.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _23.ValidatorAccumulatedCommissionAminoMsg): _23.ValidatorAccumulatedCommission;
                toAminoMsg(message: _23.ValidatorAccumulatedCommission): _23.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _23.ValidatorAccumulatedCommissionProtoMsg): _23.ValidatorAccumulatedCommission;
                toProto(message: _23.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _23.ValidatorAccumulatedCommission): _23.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _23.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_23.ValidatorOutstandingRewards>): _23.ValidatorOutstandingRewards;
                fromAmino(object: _23.ValidatorOutstandingRewardsAmino): _23.ValidatorOutstandingRewards;
                toAmino(message: _23.ValidatorOutstandingRewards): _23.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _23.ValidatorOutstandingRewardsAminoMsg): _23.ValidatorOutstandingRewards;
                toAminoMsg(message: _23.ValidatorOutstandingRewards): _23.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _23.ValidatorOutstandingRewardsProtoMsg): _23.ValidatorOutstandingRewards;
                toProto(message: _23.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _23.ValidatorOutstandingRewards): _23.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _23.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.ValidatorSlashEvent;
                fromPartial(object: Partial<_23.ValidatorSlashEvent>): _23.ValidatorSlashEvent;
                fromAmino(object: _23.ValidatorSlashEventAmino): _23.ValidatorSlashEvent;
                toAmino(message: _23.ValidatorSlashEvent): _23.ValidatorSlashEventAmino;
                fromAminoMsg(object: _23.ValidatorSlashEventAminoMsg): _23.ValidatorSlashEvent;
                toAminoMsg(message: _23.ValidatorSlashEvent): _23.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _23.ValidatorSlashEventProtoMsg): _23.ValidatorSlashEvent;
                toProto(message: _23.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _23.ValidatorSlashEvent): _23.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _23.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.ValidatorSlashEvents;
                fromPartial(object: Partial<_23.ValidatorSlashEvents>): _23.ValidatorSlashEvents;
                fromAmino(object: _23.ValidatorSlashEventsAmino): _23.ValidatorSlashEvents;
                toAmino(message: _23.ValidatorSlashEvents): _23.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _23.ValidatorSlashEventsAminoMsg): _23.ValidatorSlashEvents;
                toAminoMsg(message: _23.ValidatorSlashEvents): _23.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _23.ValidatorSlashEventsProtoMsg): _23.ValidatorSlashEvents;
                toProto(message: _23.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _23.ValidatorSlashEvents): _23.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _23.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.FeePool;
                fromPartial(object: Partial<_23.FeePool>): _23.FeePool;
                fromAmino(object: _23.FeePoolAmino): _23.FeePool;
                toAmino(message: _23.FeePool): _23.FeePoolAmino;
                fromAminoMsg(object: _23.FeePoolAminoMsg): _23.FeePool;
                toAminoMsg(message: _23.FeePool): _23.FeePoolAminoMsg;
                fromProtoMsg(message: _23.FeePoolProtoMsg): _23.FeePool;
                toProto(message: _23.FeePool): Uint8Array;
                toProtoMsg(message: _23.FeePool): _23.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _23.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_23.CommunityPoolSpendProposal>): _23.CommunityPoolSpendProposal;
                fromAmino(object: _23.CommunityPoolSpendProposalAmino): _23.CommunityPoolSpendProposal;
                toAmino(message: _23.CommunityPoolSpendProposal): _23.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _23.CommunityPoolSpendProposalAminoMsg): _23.CommunityPoolSpendProposal;
                toAminoMsg(message: _23.CommunityPoolSpendProposal): _23.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _23.CommunityPoolSpendProposalProtoMsg): _23.CommunityPoolSpendProposal;
                toProto(message: _23.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _23.CommunityPoolSpendProposal): _23.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _23.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.DelegatorStartingInfo;
                fromPartial(object: Partial<_23.DelegatorStartingInfo>): _23.DelegatorStartingInfo;
                fromAmino(object: _23.DelegatorStartingInfoAmino): _23.DelegatorStartingInfo;
                toAmino(message: _23.DelegatorStartingInfo): _23.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _23.DelegatorStartingInfoAminoMsg): _23.DelegatorStartingInfo;
                toAminoMsg(message: _23.DelegatorStartingInfo): _23.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _23.DelegatorStartingInfoProtoMsg): _23.DelegatorStartingInfo;
                toProto(message: _23.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _23.DelegatorStartingInfo): _23.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _23.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.DelegationDelegatorReward;
                fromPartial(object: Partial<_23.DelegationDelegatorReward>): _23.DelegationDelegatorReward;
                fromAmino(object: _23.DelegationDelegatorRewardAmino): _23.DelegationDelegatorReward;
                toAmino(message: _23.DelegationDelegatorReward): _23.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _23.DelegationDelegatorRewardAminoMsg): _23.DelegationDelegatorReward;
                toAminoMsg(message: _23.DelegationDelegatorReward): _23.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _23.DelegationDelegatorRewardProtoMsg): _23.DelegationDelegatorReward;
                toProto(message: _23.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _23.DelegationDelegatorReward): _23.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _23.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_23.CommunityPoolSpendProposalWithDeposit>): _23.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _23.CommunityPoolSpendProposalWithDepositAmino): _23.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _23.CommunityPoolSpendProposalWithDeposit): _23.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _23.CommunityPoolSpendProposalWithDepositAminoMsg): _23.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _23.CommunityPoolSpendProposalWithDeposit): _23.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _23.CommunityPoolSpendProposalWithDepositProtoMsg): _23.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _23.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _23.CommunityPoolSpendProposalWithDeposit): _23.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _221.MsgClientImpl;
            QueryClientImpl: typeof _214.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _29.QueryProposalRequest): Promise<_29.QueryProposalResponse>;
                proposals(request: _29.QueryProposalsRequest): Promise<_29.QueryProposalsResponse>;
                vote(request: _29.QueryVoteRequest): Promise<_29.QueryVoteResponse>;
                votes(request: _29.QueryVotesRequest): Promise<_29.QueryVotesResponse>;
                params(request: _29.QueryParamsRequest): Promise<_29.QueryParamsResponse>;
                deposit(request: _29.QueryDepositRequest): Promise<_29.QueryDepositResponse>;
                deposits(request: _29.QueryDepositsRequest): Promise<_29.QueryDepositsResponse>;
                tallyResult(request: _29.QueryTallyResultRequest): Promise<_29.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _205.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _30.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _30.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _30.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _30.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _30.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _30.MsgSubmitProposal;
                    };
                    vote(value: _30.MsgVote): {
                        typeUrl: string;
                        value: _30.MsgVote;
                    };
                    voteWeighted(value: _30.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _30.MsgVoteWeighted;
                    };
                    deposit(value: _30.MsgDeposit): {
                        typeUrl: string;
                        value: _30.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _30.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _30.MsgSubmitProposal;
                    };
                    vote(value: _30.MsgVote): {
                        typeUrl: string;
                        value: _30.MsgVote;
                    };
                    voteWeighted(value: _30.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _30.MsgVoteWeighted;
                    };
                    deposit(value: _30.MsgDeposit): {
                        typeUrl: string;
                        value: _30.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _30.MsgSubmitProposal) => _30.MsgSubmitProposalAmino;
                    fromAmino: (object: _30.MsgSubmitProposalAmino) => _30.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _30.MsgVote) => _30.MsgVoteAmino;
                    fromAmino: (object: _30.MsgVoteAmino) => _30.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _30.MsgVoteWeighted) => _30.MsgVoteWeightedAmino;
                    fromAmino: (object: _30.MsgVoteWeightedAmino) => _30.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _30.MsgDeposit) => _30.MsgDepositAmino;
                    fromAmino: (object: _30.MsgDepositAmino) => _30.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _30.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.MsgSubmitProposal;
                fromPartial(object: Partial<_30.MsgSubmitProposal>): _30.MsgSubmitProposal;
                fromAmino(object: _30.MsgSubmitProposalAmino): _30.MsgSubmitProposal;
                toAmino(message: _30.MsgSubmitProposal): _30.MsgSubmitProposalAmino;
                fromAminoMsg(object: _30.MsgSubmitProposalAminoMsg): _30.MsgSubmitProposal;
                toAminoMsg(message: _30.MsgSubmitProposal): _30.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _30.MsgSubmitProposalProtoMsg): _30.MsgSubmitProposal;
                toProto(message: _30.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _30.MsgSubmitProposal): _30.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _30.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_30.MsgSubmitProposalResponse>): _30.MsgSubmitProposalResponse;
                fromAmino(object: _30.MsgSubmitProposalResponseAmino): _30.MsgSubmitProposalResponse;
                toAmino(message: _30.MsgSubmitProposalResponse): _30.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _30.MsgSubmitProposalResponseAminoMsg): _30.MsgSubmitProposalResponse;
                toAminoMsg(message: _30.MsgSubmitProposalResponse): _30.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _30.MsgSubmitProposalResponseProtoMsg): _30.MsgSubmitProposalResponse;
                toProto(message: _30.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _30.MsgSubmitProposalResponse): _30.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _30.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.MsgVote;
                fromPartial(object: Partial<_30.MsgVote>): _30.MsgVote;
                fromAmino(object: _30.MsgVoteAmino): _30.MsgVote;
                toAmino(message: _30.MsgVote): _30.MsgVoteAmino;
                fromAminoMsg(object: _30.MsgVoteAminoMsg): _30.MsgVote;
                toAminoMsg(message: _30.MsgVote): _30.MsgVoteAminoMsg;
                fromProtoMsg(message: _30.MsgVoteProtoMsg): _30.MsgVote;
                toProto(message: _30.MsgVote): Uint8Array;
                toProtoMsg(message: _30.MsgVote): _30.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _30.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.MsgVoteResponse;
                fromPartial(_: Partial<_30.MsgVoteResponse>): _30.MsgVoteResponse;
                fromAmino(_: _30.MsgVoteResponseAmino): _30.MsgVoteResponse;
                toAmino(_: _30.MsgVoteResponse): _30.MsgVoteResponseAmino;
                fromAminoMsg(object: _30.MsgVoteResponseAminoMsg): _30.MsgVoteResponse;
                toAminoMsg(message: _30.MsgVoteResponse): _30.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _30.MsgVoteResponseProtoMsg): _30.MsgVoteResponse;
                toProto(message: _30.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _30.MsgVoteResponse): _30.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _30.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.MsgVoteWeighted;
                fromPartial(object: Partial<_30.MsgVoteWeighted>): _30.MsgVoteWeighted;
                fromAmino(object: _30.MsgVoteWeightedAmino): _30.MsgVoteWeighted;
                toAmino(message: _30.MsgVoteWeighted): _30.MsgVoteWeightedAmino;
                fromAminoMsg(object: _30.MsgVoteWeightedAminoMsg): _30.MsgVoteWeighted;
                toAminoMsg(message: _30.MsgVoteWeighted): _30.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _30.MsgVoteWeightedProtoMsg): _30.MsgVoteWeighted;
                toProto(message: _30.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _30.MsgVoteWeighted): _30.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _30.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_30.MsgVoteWeightedResponse>): _30.MsgVoteWeightedResponse;
                fromAmino(_: _30.MsgVoteWeightedResponseAmino): _30.MsgVoteWeightedResponse;
                toAmino(_: _30.MsgVoteWeightedResponse): _30.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _30.MsgVoteWeightedResponseAminoMsg): _30.MsgVoteWeightedResponse;
                toAminoMsg(message: _30.MsgVoteWeightedResponse): _30.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _30.MsgVoteWeightedResponseProtoMsg): _30.MsgVoteWeightedResponse;
                toProto(message: _30.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _30.MsgVoteWeightedResponse): _30.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _30.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.MsgDeposit;
                fromPartial(object: Partial<_30.MsgDeposit>): _30.MsgDeposit;
                fromAmino(object: _30.MsgDepositAmino): _30.MsgDeposit;
                toAmino(message: _30.MsgDeposit): _30.MsgDepositAmino;
                fromAminoMsg(object: _30.MsgDepositAminoMsg): _30.MsgDeposit;
                toAminoMsg(message: _30.MsgDeposit): _30.MsgDepositAminoMsg;
                fromProtoMsg(message: _30.MsgDepositProtoMsg): _30.MsgDeposit;
                toProto(message: _30.MsgDeposit): Uint8Array;
                toProtoMsg(message: _30.MsgDeposit): _30.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _30.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.MsgDepositResponse;
                fromPartial(_: Partial<_30.MsgDepositResponse>): _30.MsgDepositResponse;
                fromAmino(_: _30.MsgDepositResponseAmino): _30.MsgDepositResponse;
                toAmino(_: _30.MsgDepositResponse): _30.MsgDepositResponseAmino;
                fromAminoMsg(object: _30.MsgDepositResponseAminoMsg): _30.MsgDepositResponse;
                toAminoMsg(message: _30.MsgDepositResponse): _30.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _30.MsgDepositResponseProtoMsg): _30.MsgDepositResponse;
                toProto(message: _30.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _30.MsgDepositResponse): _30.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _28.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _29.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.QueryProposalRequest;
                fromPartial(object: Partial<_29.QueryProposalRequest>): _29.QueryProposalRequest;
                fromAmino(object: _29.QueryProposalRequestAmino): _29.QueryProposalRequest;
                toAmino(message: _29.QueryProposalRequest): _29.QueryProposalRequestAmino;
                fromAminoMsg(object: _29.QueryProposalRequestAminoMsg): _29.QueryProposalRequest;
                toAminoMsg(message: _29.QueryProposalRequest): _29.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _29.QueryProposalRequestProtoMsg): _29.QueryProposalRequest;
                toProto(message: _29.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _29.QueryProposalRequest): _29.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _29.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.QueryProposalResponse;
                fromPartial(object: Partial<_29.QueryProposalResponse>): _29.QueryProposalResponse;
                fromAmino(object: _29.QueryProposalResponseAmino): _29.QueryProposalResponse;
                toAmino(message: _29.QueryProposalResponse): _29.QueryProposalResponseAmino;
                fromAminoMsg(object: _29.QueryProposalResponseAminoMsg): _29.QueryProposalResponse;
                toAminoMsg(message: _29.QueryProposalResponse): _29.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _29.QueryProposalResponseProtoMsg): _29.QueryProposalResponse;
                toProto(message: _29.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _29.QueryProposalResponse): _29.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _29.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.QueryProposalsRequest;
                fromPartial(object: Partial<_29.QueryProposalsRequest>): _29.QueryProposalsRequest;
                fromAmino(object: _29.QueryProposalsRequestAmino): _29.QueryProposalsRequest;
                toAmino(message: _29.QueryProposalsRequest): _29.QueryProposalsRequestAmino;
                fromAminoMsg(object: _29.QueryProposalsRequestAminoMsg): _29.QueryProposalsRequest;
                toAminoMsg(message: _29.QueryProposalsRequest): _29.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _29.QueryProposalsRequestProtoMsg): _29.QueryProposalsRequest;
                toProto(message: _29.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _29.QueryProposalsRequest): _29.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _29.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.QueryProposalsResponse;
                fromPartial(object: Partial<_29.QueryProposalsResponse>): _29.QueryProposalsResponse;
                fromAmino(object: _29.QueryProposalsResponseAmino): _29.QueryProposalsResponse;
                toAmino(message: _29.QueryProposalsResponse): _29.QueryProposalsResponseAmino;
                fromAminoMsg(object: _29.QueryProposalsResponseAminoMsg): _29.QueryProposalsResponse;
                toAminoMsg(message: _29.QueryProposalsResponse): _29.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _29.QueryProposalsResponseProtoMsg): _29.QueryProposalsResponse;
                toProto(message: _29.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _29.QueryProposalsResponse): _29.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _29.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.QueryVoteRequest;
                fromPartial(object: Partial<_29.QueryVoteRequest>): _29.QueryVoteRequest;
                fromAmino(object: _29.QueryVoteRequestAmino): _29.QueryVoteRequest;
                toAmino(message: _29.QueryVoteRequest): _29.QueryVoteRequestAmino;
                fromAminoMsg(object: _29.QueryVoteRequestAminoMsg): _29.QueryVoteRequest;
                toAminoMsg(message: _29.QueryVoteRequest): _29.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _29.QueryVoteRequestProtoMsg): _29.QueryVoteRequest;
                toProto(message: _29.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _29.QueryVoteRequest): _29.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _29.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.QueryVoteResponse;
                fromPartial(object: Partial<_29.QueryVoteResponse>): _29.QueryVoteResponse;
                fromAmino(object: _29.QueryVoteResponseAmino): _29.QueryVoteResponse;
                toAmino(message: _29.QueryVoteResponse): _29.QueryVoteResponseAmino;
                fromAminoMsg(object: _29.QueryVoteResponseAminoMsg): _29.QueryVoteResponse;
                toAminoMsg(message: _29.QueryVoteResponse): _29.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _29.QueryVoteResponseProtoMsg): _29.QueryVoteResponse;
                toProto(message: _29.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _29.QueryVoteResponse): _29.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _29.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.QueryVotesRequest;
                fromPartial(object: Partial<_29.QueryVotesRequest>): _29.QueryVotesRequest;
                fromAmino(object: _29.QueryVotesRequestAmino): _29.QueryVotesRequest;
                toAmino(message: _29.QueryVotesRequest): _29.QueryVotesRequestAmino;
                fromAminoMsg(object: _29.QueryVotesRequestAminoMsg): _29.QueryVotesRequest;
                toAminoMsg(message: _29.QueryVotesRequest): _29.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _29.QueryVotesRequestProtoMsg): _29.QueryVotesRequest;
                toProto(message: _29.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _29.QueryVotesRequest): _29.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _29.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.QueryVotesResponse;
                fromPartial(object: Partial<_29.QueryVotesResponse>): _29.QueryVotesResponse;
                fromAmino(object: _29.QueryVotesResponseAmino): _29.QueryVotesResponse;
                toAmino(message: _29.QueryVotesResponse): _29.QueryVotesResponseAmino;
                fromAminoMsg(object: _29.QueryVotesResponseAminoMsg): _29.QueryVotesResponse;
                toAminoMsg(message: _29.QueryVotesResponse): _29.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _29.QueryVotesResponseProtoMsg): _29.QueryVotesResponse;
                toProto(message: _29.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _29.QueryVotesResponse): _29.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _29.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.QueryParamsRequest;
                fromPartial(object: Partial<_29.QueryParamsRequest>): _29.QueryParamsRequest;
                fromAmino(object: _29.QueryParamsRequestAmino): _29.QueryParamsRequest;
                toAmino(message: _29.QueryParamsRequest): _29.QueryParamsRequestAmino;
                fromAminoMsg(object: _29.QueryParamsRequestAminoMsg): _29.QueryParamsRequest;
                toAminoMsg(message: _29.QueryParamsRequest): _29.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _29.QueryParamsRequestProtoMsg): _29.QueryParamsRequest;
                toProto(message: _29.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _29.QueryParamsRequest): _29.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _29.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.QueryParamsResponse;
                fromPartial(object: Partial<_29.QueryParamsResponse>): _29.QueryParamsResponse;
                fromAmino(object: _29.QueryParamsResponseAmino): _29.QueryParamsResponse;
                toAmino(message: _29.QueryParamsResponse): _29.QueryParamsResponseAmino;
                fromAminoMsg(object: _29.QueryParamsResponseAminoMsg): _29.QueryParamsResponse;
                toAminoMsg(message: _29.QueryParamsResponse): _29.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _29.QueryParamsResponseProtoMsg): _29.QueryParamsResponse;
                toProto(message: _29.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _29.QueryParamsResponse): _29.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _29.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.QueryDepositRequest;
                fromPartial(object: Partial<_29.QueryDepositRequest>): _29.QueryDepositRequest;
                fromAmino(object: _29.QueryDepositRequestAmino): _29.QueryDepositRequest;
                toAmino(message: _29.QueryDepositRequest): _29.QueryDepositRequestAmino;
                fromAminoMsg(object: _29.QueryDepositRequestAminoMsg): _29.QueryDepositRequest;
                toAminoMsg(message: _29.QueryDepositRequest): _29.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _29.QueryDepositRequestProtoMsg): _29.QueryDepositRequest;
                toProto(message: _29.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _29.QueryDepositRequest): _29.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _29.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.QueryDepositResponse;
                fromPartial(object: Partial<_29.QueryDepositResponse>): _29.QueryDepositResponse;
                fromAmino(object: _29.QueryDepositResponseAmino): _29.QueryDepositResponse;
                toAmino(message: _29.QueryDepositResponse): _29.QueryDepositResponseAmino;
                fromAminoMsg(object: _29.QueryDepositResponseAminoMsg): _29.QueryDepositResponse;
                toAminoMsg(message: _29.QueryDepositResponse): _29.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _29.QueryDepositResponseProtoMsg): _29.QueryDepositResponse;
                toProto(message: _29.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _29.QueryDepositResponse): _29.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _29.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.QueryDepositsRequest;
                fromPartial(object: Partial<_29.QueryDepositsRequest>): _29.QueryDepositsRequest;
                fromAmino(object: _29.QueryDepositsRequestAmino): _29.QueryDepositsRequest;
                toAmino(message: _29.QueryDepositsRequest): _29.QueryDepositsRequestAmino;
                fromAminoMsg(object: _29.QueryDepositsRequestAminoMsg): _29.QueryDepositsRequest;
                toAminoMsg(message: _29.QueryDepositsRequest): _29.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _29.QueryDepositsRequestProtoMsg): _29.QueryDepositsRequest;
                toProto(message: _29.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _29.QueryDepositsRequest): _29.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _29.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.QueryDepositsResponse;
                fromPartial(object: Partial<_29.QueryDepositsResponse>): _29.QueryDepositsResponse;
                fromAmino(object: _29.QueryDepositsResponseAmino): _29.QueryDepositsResponse;
                toAmino(message: _29.QueryDepositsResponse): _29.QueryDepositsResponseAmino;
                fromAminoMsg(object: _29.QueryDepositsResponseAminoMsg): _29.QueryDepositsResponse;
                toAminoMsg(message: _29.QueryDepositsResponse): _29.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _29.QueryDepositsResponseProtoMsg): _29.QueryDepositsResponse;
                toProto(message: _29.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _29.QueryDepositsResponse): _29.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _29.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.QueryTallyResultRequest;
                fromPartial(object: Partial<_29.QueryTallyResultRequest>): _29.QueryTallyResultRequest;
                fromAmino(object: _29.QueryTallyResultRequestAmino): _29.QueryTallyResultRequest;
                toAmino(message: _29.QueryTallyResultRequest): _29.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _29.QueryTallyResultRequestAminoMsg): _29.QueryTallyResultRequest;
                toAminoMsg(message: _29.QueryTallyResultRequest): _29.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _29.QueryTallyResultRequestProtoMsg): _29.QueryTallyResultRequest;
                toProto(message: _29.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _29.QueryTallyResultRequest): _29.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _29.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.QueryTallyResultResponse;
                fromPartial(object: Partial<_29.QueryTallyResultResponse>): _29.QueryTallyResultResponse;
                fromAmino(object: _29.QueryTallyResultResponseAmino): _29.QueryTallyResultResponse;
                toAmino(message: _29.QueryTallyResultResponse): _29.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _29.QueryTallyResultResponseAminoMsg): _29.QueryTallyResultResponse;
                toAminoMsg(message: _29.QueryTallyResultResponse): _29.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _29.QueryTallyResultResponseProtoMsg): _29.QueryTallyResultResponse;
                toProto(message: _29.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _29.QueryTallyResultResponse): _29.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _28.VoteOption;
            voteOptionToJSON(object: _28.VoteOption): string;
            proposalStatusFromJSON(object: any): _28.ProposalStatus;
            proposalStatusToJSON(object: _28.ProposalStatus): string;
            VoteOption: typeof _28.VoteOption;
            VoteOptionSDKType: typeof _28.VoteOption;
            VoteOptionAmino: typeof _28.VoteOption;
            ProposalStatus: typeof _28.ProposalStatus;
            ProposalStatusSDKType: typeof _28.ProposalStatus;
            ProposalStatusAmino: typeof _28.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _28.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.WeightedVoteOption;
                fromPartial(object: Partial<_28.WeightedVoteOption>): _28.WeightedVoteOption;
                fromAmino(object: _28.WeightedVoteOptionAmino): _28.WeightedVoteOption;
                toAmino(message: _28.WeightedVoteOption): _28.WeightedVoteOptionAmino;
                fromAminoMsg(object: _28.WeightedVoteOptionAminoMsg): _28.WeightedVoteOption;
                toAminoMsg(message: _28.WeightedVoteOption): _28.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _28.WeightedVoteOptionProtoMsg): _28.WeightedVoteOption;
                toProto(message: _28.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _28.WeightedVoteOption): _28.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _28.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.TextProposal;
                fromPartial(object: Partial<_28.TextProposal>): _28.TextProposal;
                fromAmino(object: _28.TextProposalAmino): _28.TextProposal;
                toAmino(message: _28.TextProposal): _28.TextProposalAmino;
                fromAminoMsg(object: _28.TextProposalAminoMsg): _28.TextProposal;
                toAminoMsg(message: _28.TextProposal): _28.TextProposalAminoMsg;
                fromProtoMsg(message: _28.TextProposalProtoMsg): _28.TextProposal;
                toProto(message: _28.TextProposal): Uint8Array;
                toProtoMsg(message: _28.TextProposal): _28.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _28.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.Deposit;
                fromPartial(object: Partial<_28.Deposit>): _28.Deposit;
                fromAmino(object: _28.DepositAmino): _28.Deposit;
                toAmino(message: _28.Deposit): _28.DepositAmino;
                fromAminoMsg(object: _28.DepositAminoMsg): _28.Deposit;
                toAminoMsg(message: _28.Deposit): _28.DepositAminoMsg;
                fromProtoMsg(message: _28.DepositProtoMsg): _28.Deposit;
                toProto(message: _28.Deposit): Uint8Array;
                toProtoMsg(message: _28.Deposit): _28.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _28.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.Proposal;
                fromPartial(object: Partial<_28.Proposal>): _28.Proposal;
                fromAmino(object: _28.ProposalAmino): _28.Proposal;
                toAmino(message: _28.Proposal): _28.ProposalAmino;
                fromAminoMsg(object: _28.ProposalAminoMsg): _28.Proposal;
                toAminoMsg(message: _28.Proposal): _28.ProposalAminoMsg;
                fromProtoMsg(message: _28.ProposalProtoMsg): _28.Proposal;
                toProto(message: _28.Proposal): Uint8Array;
                toProtoMsg(message: _28.Proposal): _28.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _28.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.TallyResult;
                fromPartial(object: Partial<_28.TallyResult>): _28.TallyResult;
                fromAmino(object: _28.TallyResultAmino): _28.TallyResult;
                toAmino(message: _28.TallyResult): _28.TallyResultAmino;
                fromAminoMsg(object: _28.TallyResultAminoMsg): _28.TallyResult;
                toAminoMsg(message: _28.TallyResult): _28.TallyResultAminoMsg;
                fromProtoMsg(message: _28.TallyResultProtoMsg): _28.TallyResult;
                toProto(message: _28.TallyResult): Uint8Array;
                toProtoMsg(message: _28.TallyResult): _28.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _28.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.Vote;
                fromPartial(object: Partial<_28.Vote>): _28.Vote;
                fromAmino(object: _28.VoteAmino): _28.Vote;
                toAmino(message: _28.Vote): _28.VoteAmino;
                fromAminoMsg(object: _28.VoteAminoMsg): _28.Vote;
                toAminoMsg(message: _28.Vote): _28.VoteAminoMsg;
                fromProtoMsg(message: _28.VoteProtoMsg): _28.Vote;
                toProto(message: _28.Vote): Uint8Array;
                toProtoMsg(message: _28.Vote): _28.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _28.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.DepositParams;
                fromPartial(object: Partial<_28.DepositParams>): _28.DepositParams;
                fromAmino(object: _28.DepositParamsAmino): _28.DepositParams;
                toAmino(message: _28.DepositParams): _28.DepositParamsAmino;
                fromAminoMsg(object: _28.DepositParamsAminoMsg): _28.DepositParams;
                toAminoMsg(message: _28.DepositParams): _28.DepositParamsAminoMsg;
                fromProtoMsg(message: _28.DepositParamsProtoMsg): _28.DepositParams;
                toProto(message: _28.DepositParams): Uint8Array;
                toProtoMsg(message: _28.DepositParams): _28.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _28.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.VotingParams;
                fromPartial(object: Partial<_28.VotingParams>): _28.VotingParams;
                fromAmino(object: _28.VotingParamsAmino): _28.VotingParams;
                toAmino(message: _28.VotingParams): _28.VotingParamsAmino;
                fromAminoMsg(object: _28.VotingParamsAminoMsg): _28.VotingParams;
                toAminoMsg(message: _28.VotingParams): _28.VotingParamsAminoMsg;
                fromProtoMsg(message: _28.VotingParamsProtoMsg): _28.VotingParams;
                toProto(message: _28.VotingParams): Uint8Array;
                toProtoMsg(message: _28.VotingParams): _28.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _28.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.TallyParams;
                fromPartial(object: Partial<_28.TallyParams>): _28.TallyParams;
                fromAmino(object: _28.TallyParamsAmino): _28.TallyParams;
                toAmino(message: _28.TallyParams): _28.TallyParamsAmino;
                fromAminoMsg(object: _28.TallyParamsAminoMsg): _28.TallyParams;
                toAminoMsg(message: _28.TallyParams): _28.TallyParamsAminoMsg;
                fromProtoMsg(message: _28.TallyParamsProtoMsg): _28.TallyParams;
                toProto(message: _28.TallyParams): Uint8Array;
                toProtoMsg(message: _28.TallyParams): _28.TallyParamsProtoMsg;
            };
            ProposalVotingPeriod: {
                typeUrl: string;
                encode(message: _28.ProposalVotingPeriod, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.ProposalVotingPeriod;
                fromPartial(object: Partial<_28.ProposalVotingPeriod>): _28.ProposalVotingPeriod;
                fromAmino(object: _28.ProposalVotingPeriodAmino): _28.ProposalVotingPeriod;
                toAmino(message: _28.ProposalVotingPeriod): _28.ProposalVotingPeriodAmino;
                fromAminoMsg(object: _28.ProposalVotingPeriodAminoMsg): _28.ProposalVotingPeriod;
                toAminoMsg(message: _28.ProposalVotingPeriod): _28.ProposalVotingPeriodAminoMsg;
                fromProtoMsg(message: _28.ProposalVotingPeriodProtoMsg): _28.ProposalVotingPeriod;
                toProto(message: _28.ProposalVotingPeriod): Uint8Array;
                toProtoMsg(message: _28.ProposalVotingPeriod): _28.ProposalVotingPeriodProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _27.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.GenesisState;
                fromPartial(object: Partial<_27.GenesisState>): _27.GenesisState;
                fromAmino(object: _27.GenesisStateAmino): _27.GenesisState;
                toAmino(message: _27.GenesisState): _27.GenesisStateAmino;
                fromAminoMsg(object: _27.GenesisStateAminoMsg): _27.GenesisState;
                toAminoMsg(message: _27.GenesisState): _27.GenesisStateAminoMsg;
                fromProtoMsg(message: _27.GenesisStateProtoMsg): _27.GenesisState;
                toProto(message: _27.GenesisState): Uint8Array;
                toProtoMsg(message: _27.GenesisState): _27.GenesisStateProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _222.MsgClientImpl;
            QueryClientImpl: typeof _215.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _33.QueryValidatorsRequest): Promise<_33.QueryValidatorsResponse>;
                validator(request: _33.QueryValidatorRequest): Promise<_33.QueryValidatorResponse>;
                validatorDelegations(request: _33.QueryValidatorDelegationsRequest): Promise<_33.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _33.QueryValidatorUnbondingDelegationsRequest): Promise<_33.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _33.QueryDelegationRequest): Promise<_33.QueryDelegationResponse>;
                unbondingDelegation(request: _33.QueryUnbondingDelegationRequest): Promise<_33.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _33.QueryDelegatorDelegationsRequest): Promise<_33.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _33.QueryDelegatorUnbondingDelegationsRequest): Promise<_33.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _33.QueryRedelegationsRequest): Promise<_33.QueryRedelegationsResponse>;
                delegatorValidators(request: _33.QueryDelegatorValidatorsRequest): Promise<_33.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _33.QueryDelegatorValidatorRequest): Promise<_33.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _33.QueryHistoricalInfoRequest): Promise<_33.QueryHistoricalInfoResponse>;
                pool(request?: _33.QueryPoolRequest): Promise<_33.QueryPoolResponse>;
                params(request?: _33.QueryParamsRequest): Promise<_33.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _206.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _35.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _35.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _35.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _35.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _35.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _35.MsgCreateValidator): {
                        typeUrl: string;
                        value: _35.MsgCreateValidator;
                    };
                    editValidator(value: _35.MsgEditValidator): {
                        typeUrl: string;
                        value: _35.MsgEditValidator;
                    };
                    delegate(value: _35.MsgDelegate): {
                        typeUrl: string;
                        value: _35.MsgDelegate;
                    };
                    beginRedelegate(value: _35.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _35.MsgBeginRedelegate;
                    };
                    undelegate(value: _35.MsgUndelegate): {
                        typeUrl: string;
                        value: _35.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _35.MsgCreateValidator): {
                        typeUrl: string;
                        value: _35.MsgCreateValidator;
                    };
                    editValidator(value: _35.MsgEditValidator): {
                        typeUrl: string;
                        value: _35.MsgEditValidator;
                    };
                    delegate(value: _35.MsgDelegate): {
                        typeUrl: string;
                        value: _35.MsgDelegate;
                    };
                    beginRedelegate(value: _35.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _35.MsgBeginRedelegate;
                    };
                    undelegate(value: _35.MsgUndelegate): {
                        typeUrl: string;
                        value: _35.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _35.MsgCreateValidator) => _35.MsgCreateValidatorAmino;
                    fromAmino: (object: _35.MsgCreateValidatorAmino) => _35.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _35.MsgEditValidator) => _35.MsgEditValidatorAmino;
                    fromAmino: (object: _35.MsgEditValidatorAmino) => _35.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _35.MsgDelegate) => _35.MsgDelegateAmino;
                    fromAmino: (object: _35.MsgDelegateAmino) => _35.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _35.MsgBeginRedelegate) => _35.MsgBeginRedelegateAmino;
                    fromAmino: (object: _35.MsgBeginRedelegateAmino) => _35.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _35.MsgUndelegate) => _35.MsgUndelegateAmino;
                    fromAmino: (object: _35.MsgUndelegateAmino) => _35.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _35.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _35.MsgCreateValidator;
                fromPartial(object: Partial<_35.MsgCreateValidator>): _35.MsgCreateValidator;
                fromAmino(object: _35.MsgCreateValidatorAmino): _35.MsgCreateValidator;
                toAmino(message: _35.MsgCreateValidator): _35.MsgCreateValidatorAmino;
                fromAminoMsg(object: _35.MsgCreateValidatorAminoMsg): _35.MsgCreateValidator;
                toAminoMsg(message: _35.MsgCreateValidator): _35.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _35.MsgCreateValidatorProtoMsg): _35.MsgCreateValidator;
                toProto(message: _35.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _35.MsgCreateValidator): _35.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _35.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _35.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_35.MsgCreateValidatorResponse>): _35.MsgCreateValidatorResponse;
                fromAmino(_: _35.MsgCreateValidatorResponseAmino): _35.MsgCreateValidatorResponse;
                toAmino(_: _35.MsgCreateValidatorResponse): _35.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _35.MsgCreateValidatorResponseAminoMsg): _35.MsgCreateValidatorResponse;
                toAminoMsg(message: _35.MsgCreateValidatorResponse): _35.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _35.MsgCreateValidatorResponseProtoMsg): _35.MsgCreateValidatorResponse;
                toProto(message: _35.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _35.MsgCreateValidatorResponse): _35.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _35.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _35.MsgEditValidator;
                fromPartial(object: Partial<_35.MsgEditValidator>): _35.MsgEditValidator;
                fromAmino(object: _35.MsgEditValidatorAmino): _35.MsgEditValidator;
                toAmino(message: _35.MsgEditValidator): _35.MsgEditValidatorAmino;
                fromAminoMsg(object: _35.MsgEditValidatorAminoMsg): _35.MsgEditValidator;
                toAminoMsg(message: _35.MsgEditValidator): _35.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _35.MsgEditValidatorProtoMsg): _35.MsgEditValidator;
                toProto(message: _35.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _35.MsgEditValidator): _35.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _35.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _35.MsgEditValidatorResponse;
                fromPartial(_: Partial<_35.MsgEditValidatorResponse>): _35.MsgEditValidatorResponse;
                fromAmino(_: _35.MsgEditValidatorResponseAmino): _35.MsgEditValidatorResponse;
                toAmino(_: _35.MsgEditValidatorResponse): _35.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _35.MsgEditValidatorResponseAminoMsg): _35.MsgEditValidatorResponse;
                toAminoMsg(message: _35.MsgEditValidatorResponse): _35.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _35.MsgEditValidatorResponseProtoMsg): _35.MsgEditValidatorResponse;
                toProto(message: _35.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _35.MsgEditValidatorResponse): _35.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _35.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _35.MsgDelegate;
                fromPartial(object: Partial<_35.MsgDelegate>): _35.MsgDelegate;
                fromAmino(object: _35.MsgDelegateAmino): _35.MsgDelegate;
                toAmino(message: _35.MsgDelegate): _35.MsgDelegateAmino;
                fromAminoMsg(object: _35.MsgDelegateAminoMsg): _35.MsgDelegate;
                toAminoMsg(message: _35.MsgDelegate): _35.MsgDelegateAminoMsg;
                fromProtoMsg(message: _35.MsgDelegateProtoMsg): _35.MsgDelegate;
                toProto(message: _35.MsgDelegate): Uint8Array;
                toProtoMsg(message: _35.MsgDelegate): _35.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _35.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _35.MsgDelegateResponse;
                fromPartial(_: Partial<_35.MsgDelegateResponse>): _35.MsgDelegateResponse;
                fromAmino(_: _35.MsgDelegateResponseAmino): _35.MsgDelegateResponse;
                toAmino(_: _35.MsgDelegateResponse): _35.MsgDelegateResponseAmino;
                fromAminoMsg(object: _35.MsgDelegateResponseAminoMsg): _35.MsgDelegateResponse;
                toAminoMsg(message: _35.MsgDelegateResponse): _35.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _35.MsgDelegateResponseProtoMsg): _35.MsgDelegateResponse;
                toProto(message: _35.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _35.MsgDelegateResponse): _35.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _35.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _35.MsgBeginRedelegate;
                fromPartial(object: Partial<_35.MsgBeginRedelegate>): _35.MsgBeginRedelegate;
                fromAmino(object: _35.MsgBeginRedelegateAmino): _35.MsgBeginRedelegate;
                toAmino(message: _35.MsgBeginRedelegate): _35.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _35.MsgBeginRedelegateAminoMsg): _35.MsgBeginRedelegate;
                toAminoMsg(message: _35.MsgBeginRedelegate): _35.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _35.MsgBeginRedelegateProtoMsg): _35.MsgBeginRedelegate;
                toProto(message: _35.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _35.MsgBeginRedelegate): _35.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _35.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _35.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_35.MsgBeginRedelegateResponse>): _35.MsgBeginRedelegateResponse;
                fromAmino(object: _35.MsgBeginRedelegateResponseAmino): _35.MsgBeginRedelegateResponse;
                toAmino(message: _35.MsgBeginRedelegateResponse): _35.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _35.MsgBeginRedelegateResponseAminoMsg): _35.MsgBeginRedelegateResponse;
                toAminoMsg(message: _35.MsgBeginRedelegateResponse): _35.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _35.MsgBeginRedelegateResponseProtoMsg): _35.MsgBeginRedelegateResponse;
                toProto(message: _35.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _35.MsgBeginRedelegateResponse): _35.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _35.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _35.MsgUndelegate;
                fromPartial(object: Partial<_35.MsgUndelegate>): _35.MsgUndelegate;
                fromAmino(object: _35.MsgUndelegateAmino): _35.MsgUndelegate;
                toAmino(message: _35.MsgUndelegate): _35.MsgUndelegateAmino;
                fromAminoMsg(object: _35.MsgUndelegateAminoMsg): _35.MsgUndelegate;
                toAminoMsg(message: _35.MsgUndelegate): _35.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _35.MsgUndelegateProtoMsg): _35.MsgUndelegate;
                toProto(message: _35.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _35.MsgUndelegate): _35.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _35.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _35.MsgUndelegateResponse;
                fromPartial(object: Partial<_35.MsgUndelegateResponse>): _35.MsgUndelegateResponse;
                fromAmino(object: _35.MsgUndelegateResponseAmino): _35.MsgUndelegateResponse;
                toAmino(message: _35.MsgUndelegateResponse): _35.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _35.MsgUndelegateResponseAminoMsg): _35.MsgUndelegateResponse;
                toAminoMsg(message: _35.MsgUndelegateResponse): _35.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _35.MsgUndelegateResponseProtoMsg): _35.MsgUndelegateResponse;
                toProto(message: _35.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _35.MsgUndelegateResponse): _35.MsgUndelegateResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => string;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => {
                typeUrl: string;
                value: Uint8Array;
            };
            bondStatusFromJSON(object: any): _34.BondStatus;
            bondStatusToJSON(object: _34.BondStatus): string;
            BondStatus: typeof _34.BondStatus;
            BondStatusSDKType: typeof _34.BondStatus;
            BondStatusAmino: typeof _34.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _34.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.HistoricalInfo;
                fromPartial(object: Partial<_34.HistoricalInfo>): _34.HistoricalInfo;
                fromAmino(object: _34.HistoricalInfoAmino): _34.HistoricalInfo;
                toAmino(message: _34.HistoricalInfo): _34.HistoricalInfoAmino;
                fromAminoMsg(object: _34.HistoricalInfoAminoMsg): _34.HistoricalInfo;
                toAminoMsg(message: _34.HistoricalInfo): _34.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _34.HistoricalInfoProtoMsg): _34.HistoricalInfo;
                toProto(message: _34.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _34.HistoricalInfo): _34.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _34.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.CommissionRates;
                fromPartial(object: Partial<_34.CommissionRates>): _34.CommissionRates;
                fromAmino(object: _34.CommissionRatesAmino): _34.CommissionRates;
                toAmino(message: _34.CommissionRates): _34.CommissionRatesAmino;
                fromAminoMsg(object: _34.CommissionRatesAminoMsg): _34.CommissionRates;
                toAminoMsg(message: _34.CommissionRates): _34.CommissionRatesAminoMsg;
                fromProtoMsg(message: _34.CommissionRatesProtoMsg): _34.CommissionRates;
                toProto(message: _34.CommissionRates): Uint8Array;
                toProtoMsg(message: _34.CommissionRates): _34.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _34.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.Commission;
                fromPartial(object: Partial<_34.Commission>): _34.Commission;
                fromAmino(object: _34.CommissionAmino): _34.Commission;
                toAmino(message: _34.Commission): _34.CommissionAmino;
                fromAminoMsg(object: _34.CommissionAminoMsg): _34.Commission;
                toAminoMsg(message: _34.Commission): _34.CommissionAminoMsg;
                fromProtoMsg(message: _34.CommissionProtoMsg): _34.Commission;
                toProto(message: _34.Commission): Uint8Array;
                toProtoMsg(message: _34.Commission): _34.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _34.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.Description;
                fromPartial(object: Partial<_34.Description>): _34.Description;
                fromAmino(object: _34.DescriptionAmino): _34.Description;
                toAmino(message: _34.Description): _34.DescriptionAmino;
                fromAminoMsg(object: _34.DescriptionAminoMsg): _34.Description;
                toAminoMsg(message: _34.Description): _34.DescriptionAminoMsg;
                fromProtoMsg(message: _34.DescriptionProtoMsg): _34.Description;
                toProto(message: _34.Description): Uint8Array;
                toProtoMsg(message: _34.Description): _34.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _34.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.Validator;
                fromPartial(object: Partial<_34.Validator>): _34.Validator;
                fromAmino(object: _34.ValidatorAmino): _34.Validator;
                toAmino(message: _34.Validator): _34.ValidatorAmino;
                fromAminoMsg(object: _34.ValidatorAminoMsg): _34.Validator;
                toAminoMsg(message: _34.Validator): _34.ValidatorAminoMsg;
                fromProtoMsg(message: _34.ValidatorProtoMsg): _34.Validator;
                toProto(message: _34.Validator): Uint8Array;
                toProtoMsg(message: _34.Validator): _34.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _34.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.ValAddresses;
                fromPartial(object: Partial<_34.ValAddresses>): _34.ValAddresses;
                fromAmino(object: _34.ValAddressesAmino): _34.ValAddresses;
                toAmino(message: _34.ValAddresses): _34.ValAddressesAmino;
                fromAminoMsg(object: _34.ValAddressesAminoMsg): _34.ValAddresses;
                toAminoMsg(message: _34.ValAddresses): _34.ValAddressesAminoMsg;
                fromProtoMsg(message: _34.ValAddressesProtoMsg): _34.ValAddresses;
                toProto(message: _34.ValAddresses): Uint8Array;
                toProtoMsg(message: _34.ValAddresses): _34.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _34.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.DVPair;
                fromPartial(object: Partial<_34.DVPair>): _34.DVPair;
                fromAmino(object: _34.DVPairAmino): _34.DVPair;
                toAmino(message: _34.DVPair): _34.DVPairAmino;
                fromAminoMsg(object: _34.DVPairAminoMsg): _34.DVPair;
                toAminoMsg(message: _34.DVPair): _34.DVPairAminoMsg;
                fromProtoMsg(message: _34.DVPairProtoMsg): _34.DVPair;
                toProto(message: _34.DVPair): Uint8Array;
                toProtoMsg(message: _34.DVPair): _34.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _34.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.DVPairs;
                fromPartial(object: Partial<_34.DVPairs>): _34.DVPairs;
                fromAmino(object: _34.DVPairsAmino): _34.DVPairs;
                toAmino(message: _34.DVPairs): _34.DVPairsAmino;
                fromAminoMsg(object: _34.DVPairsAminoMsg): _34.DVPairs;
                toAminoMsg(message: _34.DVPairs): _34.DVPairsAminoMsg;
                fromProtoMsg(message: _34.DVPairsProtoMsg): _34.DVPairs;
                toProto(message: _34.DVPairs): Uint8Array;
                toProtoMsg(message: _34.DVPairs): _34.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _34.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.DVVTriplet;
                fromPartial(object: Partial<_34.DVVTriplet>): _34.DVVTriplet;
                fromAmino(object: _34.DVVTripletAmino): _34.DVVTriplet;
                toAmino(message: _34.DVVTriplet): _34.DVVTripletAmino;
                fromAminoMsg(object: _34.DVVTripletAminoMsg): _34.DVVTriplet;
                toAminoMsg(message: _34.DVVTriplet): _34.DVVTripletAminoMsg;
                fromProtoMsg(message: _34.DVVTripletProtoMsg): _34.DVVTriplet;
                toProto(message: _34.DVVTriplet): Uint8Array;
                toProtoMsg(message: _34.DVVTriplet): _34.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _34.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.DVVTriplets;
                fromPartial(object: Partial<_34.DVVTriplets>): _34.DVVTriplets;
                fromAmino(object: _34.DVVTripletsAmino): _34.DVVTriplets;
                toAmino(message: _34.DVVTriplets): _34.DVVTripletsAmino;
                fromAminoMsg(object: _34.DVVTripletsAminoMsg): _34.DVVTriplets;
                toAminoMsg(message: _34.DVVTriplets): _34.DVVTripletsAminoMsg;
                fromProtoMsg(message: _34.DVVTripletsProtoMsg): _34.DVVTriplets;
                toProto(message: _34.DVVTriplets): Uint8Array;
                toProtoMsg(message: _34.DVVTriplets): _34.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _34.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.Delegation;
                fromPartial(object: Partial<_34.Delegation>): _34.Delegation;
                fromAmino(object: _34.DelegationAmino): _34.Delegation;
                toAmino(message: _34.Delegation): _34.DelegationAmino;
                fromAminoMsg(object: _34.DelegationAminoMsg): _34.Delegation;
                toAminoMsg(message: _34.Delegation): _34.DelegationAminoMsg;
                fromProtoMsg(message: _34.DelegationProtoMsg): _34.Delegation;
                toProto(message: _34.Delegation): Uint8Array;
                toProtoMsg(message: _34.Delegation): _34.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _34.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.UnbondingDelegation;
                fromPartial(object: Partial<_34.UnbondingDelegation>): _34.UnbondingDelegation;
                fromAmino(object: _34.UnbondingDelegationAmino): _34.UnbondingDelegation;
                toAmino(message: _34.UnbondingDelegation): _34.UnbondingDelegationAmino;
                fromAminoMsg(object: _34.UnbondingDelegationAminoMsg): _34.UnbondingDelegation;
                toAminoMsg(message: _34.UnbondingDelegation): _34.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _34.UnbondingDelegationProtoMsg): _34.UnbondingDelegation;
                toProto(message: _34.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _34.UnbondingDelegation): _34.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _34.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.UnbondingDelegationEntry;
                fromPartial(object: Partial<_34.UnbondingDelegationEntry>): _34.UnbondingDelegationEntry;
                fromAmino(object: _34.UnbondingDelegationEntryAmino): _34.UnbondingDelegationEntry;
                toAmino(message: _34.UnbondingDelegationEntry): _34.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _34.UnbondingDelegationEntryAminoMsg): _34.UnbondingDelegationEntry;
                toAminoMsg(message: _34.UnbondingDelegationEntry): _34.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _34.UnbondingDelegationEntryProtoMsg): _34.UnbondingDelegationEntry;
                toProto(message: _34.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _34.UnbondingDelegationEntry): _34.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _34.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.RedelegationEntry;
                fromPartial(object: Partial<_34.RedelegationEntry>): _34.RedelegationEntry;
                fromAmino(object: _34.RedelegationEntryAmino): _34.RedelegationEntry;
                toAmino(message: _34.RedelegationEntry): _34.RedelegationEntryAmino;
                fromAminoMsg(object: _34.RedelegationEntryAminoMsg): _34.RedelegationEntry;
                toAminoMsg(message: _34.RedelegationEntry): _34.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _34.RedelegationEntryProtoMsg): _34.RedelegationEntry;
                toProto(message: _34.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _34.RedelegationEntry): _34.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _34.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.Redelegation;
                fromPartial(object: Partial<_34.Redelegation>): _34.Redelegation;
                fromAmino(object: _34.RedelegationAmino): _34.Redelegation;
                toAmino(message: _34.Redelegation): _34.RedelegationAmino;
                fromAminoMsg(object: _34.RedelegationAminoMsg): _34.Redelegation;
                toAminoMsg(message: _34.Redelegation): _34.RedelegationAminoMsg;
                fromProtoMsg(message: _34.RedelegationProtoMsg): _34.Redelegation;
                toProto(message: _34.Redelegation): Uint8Array;
                toProtoMsg(message: _34.Redelegation): _34.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _34.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.Params;
                fromPartial(object: Partial<_34.Params>): _34.Params;
                fromAmino(object: _34.ParamsAmino): _34.Params;
                toAmino(message: _34.Params): _34.ParamsAmino;
                fromAminoMsg(object: _34.ParamsAminoMsg): _34.Params;
                toAminoMsg(message: _34.Params): _34.ParamsAminoMsg;
                fromProtoMsg(message: _34.ParamsProtoMsg): _34.Params;
                toProto(message: _34.Params): Uint8Array;
                toProtoMsg(message: _34.Params): _34.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _34.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.DelegationResponse;
                fromPartial(object: Partial<_34.DelegationResponse>): _34.DelegationResponse;
                fromAmino(object: _34.DelegationResponseAmino): _34.DelegationResponse;
                toAmino(message: _34.DelegationResponse): _34.DelegationResponseAmino;
                fromAminoMsg(object: _34.DelegationResponseAminoMsg): _34.DelegationResponse;
                toAminoMsg(message: _34.DelegationResponse): _34.DelegationResponseAminoMsg;
                fromProtoMsg(message: _34.DelegationResponseProtoMsg): _34.DelegationResponse;
                toProto(message: _34.DelegationResponse): Uint8Array;
                toProtoMsg(message: _34.DelegationResponse): _34.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _34.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.RedelegationEntryResponse;
                fromPartial(object: Partial<_34.RedelegationEntryResponse>): _34.RedelegationEntryResponse;
                fromAmino(object: _34.RedelegationEntryResponseAmino): _34.RedelegationEntryResponse;
                toAmino(message: _34.RedelegationEntryResponse): _34.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _34.RedelegationEntryResponseAminoMsg): _34.RedelegationEntryResponse;
                toAminoMsg(message: _34.RedelegationEntryResponse): _34.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _34.RedelegationEntryResponseProtoMsg): _34.RedelegationEntryResponse;
                toProto(message: _34.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _34.RedelegationEntryResponse): _34.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _34.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.RedelegationResponse;
                fromPartial(object: Partial<_34.RedelegationResponse>): _34.RedelegationResponse;
                fromAmino(object: _34.RedelegationResponseAmino): _34.RedelegationResponse;
                toAmino(message: _34.RedelegationResponse): _34.RedelegationResponseAmino;
                fromAminoMsg(object: _34.RedelegationResponseAminoMsg): _34.RedelegationResponse;
                toAminoMsg(message: _34.RedelegationResponse): _34.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _34.RedelegationResponseProtoMsg): _34.RedelegationResponse;
                toProto(message: _34.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _34.RedelegationResponse): _34.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _34.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.Pool;
                fromPartial(object: Partial<_34.Pool>): _34.Pool;
                fromAmino(object: _34.PoolAmino): _34.Pool;
                toAmino(message: _34.Pool): _34.PoolAmino;
                fromAminoMsg(object: _34.PoolAminoMsg): _34.Pool;
                toAminoMsg(message: _34.Pool): _34.PoolAminoMsg;
                fromProtoMsg(message: _34.PoolProtoMsg): _34.Pool;
                toProto(message: _34.Pool): Uint8Array;
                toProtoMsg(message: _34.Pool): _34.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _33.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.QueryValidatorsRequest;
                fromPartial(object: Partial<_33.QueryValidatorsRequest>): _33.QueryValidatorsRequest;
                fromAmino(object: _33.QueryValidatorsRequestAmino): _33.QueryValidatorsRequest;
                toAmino(message: _33.QueryValidatorsRequest): _33.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _33.QueryValidatorsRequestAminoMsg): _33.QueryValidatorsRequest;
                toAminoMsg(message: _33.QueryValidatorsRequest): _33.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _33.QueryValidatorsRequestProtoMsg): _33.QueryValidatorsRequest;
                toProto(message: _33.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _33.QueryValidatorsRequest): _33.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _33.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.QueryValidatorsResponse;
                fromPartial(object: Partial<_33.QueryValidatorsResponse>): _33.QueryValidatorsResponse;
                fromAmino(object: _33.QueryValidatorsResponseAmino): _33.QueryValidatorsResponse;
                toAmino(message: _33.QueryValidatorsResponse): _33.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _33.QueryValidatorsResponseAminoMsg): _33.QueryValidatorsResponse;
                toAminoMsg(message: _33.QueryValidatorsResponse): _33.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _33.QueryValidatorsResponseProtoMsg): _33.QueryValidatorsResponse;
                toProto(message: _33.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _33.QueryValidatorsResponse): _33.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _33.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.QueryValidatorRequest;
                fromPartial(object: Partial<_33.QueryValidatorRequest>): _33.QueryValidatorRequest;
                fromAmino(object: _33.QueryValidatorRequestAmino): _33.QueryValidatorRequest;
                toAmino(message: _33.QueryValidatorRequest): _33.QueryValidatorRequestAmino;
                fromAminoMsg(object: _33.QueryValidatorRequestAminoMsg): _33.QueryValidatorRequest;
                toAminoMsg(message: _33.QueryValidatorRequest): _33.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _33.QueryValidatorRequestProtoMsg): _33.QueryValidatorRequest;
                toProto(message: _33.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _33.QueryValidatorRequest): _33.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _33.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.QueryValidatorResponse;
                fromPartial(object: Partial<_33.QueryValidatorResponse>): _33.QueryValidatorResponse;
                fromAmino(object: _33.QueryValidatorResponseAmino): _33.QueryValidatorResponse;
                toAmino(message: _33.QueryValidatorResponse): _33.QueryValidatorResponseAmino;
                fromAminoMsg(object: _33.QueryValidatorResponseAminoMsg): _33.QueryValidatorResponse;
                toAminoMsg(message: _33.QueryValidatorResponse): _33.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _33.QueryValidatorResponseProtoMsg): _33.QueryValidatorResponse;
                toProto(message: _33.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _33.QueryValidatorResponse): _33.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _33.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_33.QueryValidatorDelegationsRequest>): _33.QueryValidatorDelegationsRequest;
                fromAmino(object: _33.QueryValidatorDelegationsRequestAmino): _33.QueryValidatorDelegationsRequest;
                toAmino(message: _33.QueryValidatorDelegationsRequest): _33.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _33.QueryValidatorDelegationsRequestAminoMsg): _33.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _33.QueryValidatorDelegationsRequest): _33.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _33.QueryValidatorDelegationsRequestProtoMsg): _33.QueryValidatorDelegationsRequest;
                toProto(message: _33.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _33.QueryValidatorDelegationsRequest): _33.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _33.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_33.QueryValidatorDelegationsResponse>): _33.QueryValidatorDelegationsResponse;
                fromAmino(object: _33.QueryValidatorDelegationsResponseAmino): _33.QueryValidatorDelegationsResponse;
                toAmino(message: _33.QueryValidatorDelegationsResponse): _33.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _33.QueryValidatorDelegationsResponseAminoMsg): _33.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _33.QueryValidatorDelegationsResponse): _33.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _33.QueryValidatorDelegationsResponseProtoMsg): _33.QueryValidatorDelegationsResponse;
                toProto(message: _33.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _33.QueryValidatorDelegationsResponse): _33.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _33.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_33.QueryValidatorUnbondingDelegationsRequest>): _33.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _33.QueryValidatorUnbondingDelegationsRequestAmino): _33.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _33.QueryValidatorUnbondingDelegationsRequest): _33.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _33.QueryValidatorUnbondingDelegationsRequestAminoMsg): _33.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _33.QueryValidatorUnbondingDelegationsRequest): _33.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _33.QueryValidatorUnbondingDelegationsRequestProtoMsg): _33.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _33.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _33.QueryValidatorUnbondingDelegationsRequest): _33.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _33.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_33.QueryValidatorUnbondingDelegationsResponse>): _33.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _33.QueryValidatorUnbondingDelegationsResponseAmino): _33.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _33.QueryValidatorUnbondingDelegationsResponse): _33.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _33.QueryValidatorUnbondingDelegationsResponseAminoMsg): _33.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _33.QueryValidatorUnbondingDelegationsResponse): _33.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _33.QueryValidatorUnbondingDelegationsResponseProtoMsg): _33.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _33.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _33.QueryValidatorUnbondingDelegationsResponse): _33.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _33.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.QueryDelegationRequest;
                fromPartial(object: Partial<_33.QueryDelegationRequest>): _33.QueryDelegationRequest;
                fromAmino(object: _33.QueryDelegationRequestAmino): _33.QueryDelegationRequest;
                toAmino(message: _33.QueryDelegationRequest): _33.QueryDelegationRequestAmino;
                fromAminoMsg(object: _33.QueryDelegationRequestAminoMsg): _33.QueryDelegationRequest;
                toAminoMsg(message: _33.QueryDelegationRequest): _33.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _33.QueryDelegationRequestProtoMsg): _33.QueryDelegationRequest;
                toProto(message: _33.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _33.QueryDelegationRequest): _33.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _33.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.QueryDelegationResponse;
                fromPartial(object: Partial<_33.QueryDelegationResponse>): _33.QueryDelegationResponse;
                fromAmino(object: _33.QueryDelegationResponseAmino): _33.QueryDelegationResponse;
                toAmino(message: _33.QueryDelegationResponse): _33.QueryDelegationResponseAmino;
                fromAminoMsg(object: _33.QueryDelegationResponseAminoMsg): _33.QueryDelegationResponse;
                toAminoMsg(message: _33.QueryDelegationResponse): _33.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _33.QueryDelegationResponseProtoMsg): _33.QueryDelegationResponse;
                toProto(message: _33.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _33.QueryDelegationResponse): _33.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _33.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_33.QueryUnbondingDelegationRequest>): _33.QueryUnbondingDelegationRequest;
                fromAmino(object: _33.QueryUnbondingDelegationRequestAmino): _33.QueryUnbondingDelegationRequest;
                toAmino(message: _33.QueryUnbondingDelegationRequest): _33.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _33.QueryUnbondingDelegationRequestAminoMsg): _33.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _33.QueryUnbondingDelegationRequest): _33.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _33.QueryUnbondingDelegationRequestProtoMsg): _33.QueryUnbondingDelegationRequest;
                toProto(message: _33.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _33.QueryUnbondingDelegationRequest): _33.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _33.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_33.QueryUnbondingDelegationResponse>): _33.QueryUnbondingDelegationResponse;
                fromAmino(object: _33.QueryUnbondingDelegationResponseAmino): _33.QueryUnbondingDelegationResponse;
                toAmino(message: _33.QueryUnbondingDelegationResponse): _33.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _33.QueryUnbondingDelegationResponseAminoMsg): _33.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _33.QueryUnbondingDelegationResponse): _33.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _33.QueryUnbondingDelegationResponseProtoMsg): _33.QueryUnbondingDelegationResponse;
                toProto(message: _33.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _33.QueryUnbondingDelegationResponse): _33.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _33.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_33.QueryDelegatorDelegationsRequest>): _33.QueryDelegatorDelegationsRequest;
                fromAmino(object: _33.QueryDelegatorDelegationsRequestAmino): _33.QueryDelegatorDelegationsRequest;
                toAmino(message: _33.QueryDelegatorDelegationsRequest): _33.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _33.QueryDelegatorDelegationsRequestAminoMsg): _33.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _33.QueryDelegatorDelegationsRequest): _33.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _33.QueryDelegatorDelegationsRequestProtoMsg): _33.QueryDelegatorDelegationsRequest;
                toProto(message: _33.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _33.QueryDelegatorDelegationsRequest): _33.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _33.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_33.QueryDelegatorDelegationsResponse>): _33.QueryDelegatorDelegationsResponse;
                fromAmino(object: _33.QueryDelegatorDelegationsResponseAmino): _33.QueryDelegatorDelegationsResponse;
                toAmino(message: _33.QueryDelegatorDelegationsResponse): _33.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _33.QueryDelegatorDelegationsResponseAminoMsg): _33.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _33.QueryDelegatorDelegationsResponse): _33.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _33.QueryDelegatorDelegationsResponseProtoMsg): _33.QueryDelegatorDelegationsResponse;
                toProto(message: _33.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _33.QueryDelegatorDelegationsResponse): _33.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _33.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_33.QueryDelegatorUnbondingDelegationsRequest>): _33.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _33.QueryDelegatorUnbondingDelegationsRequestAmino): _33.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _33.QueryDelegatorUnbondingDelegationsRequest): _33.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _33.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _33.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _33.QueryDelegatorUnbondingDelegationsRequest): _33.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _33.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _33.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _33.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _33.QueryDelegatorUnbondingDelegationsRequest): _33.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _33.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_33.QueryDelegatorUnbondingDelegationsResponse>): _33.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _33.QueryDelegatorUnbondingDelegationsResponseAmino): _33.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _33.QueryDelegatorUnbondingDelegationsResponse): _33.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _33.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _33.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _33.QueryDelegatorUnbondingDelegationsResponse): _33.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _33.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _33.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _33.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _33.QueryDelegatorUnbondingDelegationsResponse): _33.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _33.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.QueryRedelegationsRequest;
                fromPartial(object: Partial<_33.QueryRedelegationsRequest>): _33.QueryRedelegationsRequest;
                fromAmino(object: _33.QueryRedelegationsRequestAmino): _33.QueryRedelegationsRequest;
                toAmino(message: _33.QueryRedelegationsRequest): _33.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _33.QueryRedelegationsRequestAminoMsg): _33.QueryRedelegationsRequest;
                toAminoMsg(message: _33.QueryRedelegationsRequest): _33.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _33.QueryRedelegationsRequestProtoMsg): _33.QueryRedelegationsRequest;
                toProto(message: _33.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _33.QueryRedelegationsRequest): _33.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _33.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.QueryRedelegationsResponse;
                fromPartial(object: Partial<_33.QueryRedelegationsResponse>): _33.QueryRedelegationsResponse;
                fromAmino(object: _33.QueryRedelegationsResponseAmino): _33.QueryRedelegationsResponse;
                toAmino(message: _33.QueryRedelegationsResponse): _33.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _33.QueryRedelegationsResponseAminoMsg): _33.QueryRedelegationsResponse;
                toAminoMsg(message: _33.QueryRedelegationsResponse): _33.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _33.QueryRedelegationsResponseProtoMsg): _33.QueryRedelegationsResponse;
                toProto(message: _33.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _33.QueryRedelegationsResponse): _33.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _33.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_33.QueryDelegatorValidatorsRequest>): _33.QueryDelegatorValidatorsRequest;
                fromAmino(object: _33.QueryDelegatorValidatorsRequestAmino): _33.QueryDelegatorValidatorsRequest;
                toAmino(message: _33.QueryDelegatorValidatorsRequest): _33.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _33.QueryDelegatorValidatorsRequestAminoMsg): _33.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _33.QueryDelegatorValidatorsRequest): _33.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _33.QueryDelegatorValidatorsRequestProtoMsg): _33.QueryDelegatorValidatorsRequest;
                toProto(message: _33.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _33.QueryDelegatorValidatorsRequest): _33.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _33.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_33.QueryDelegatorValidatorsResponse>): _33.QueryDelegatorValidatorsResponse;
                fromAmino(object: _33.QueryDelegatorValidatorsResponseAmino): _33.QueryDelegatorValidatorsResponse;
                toAmino(message: _33.QueryDelegatorValidatorsResponse): _33.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _33.QueryDelegatorValidatorsResponseAminoMsg): _33.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _33.QueryDelegatorValidatorsResponse): _33.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _33.QueryDelegatorValidatorsResponseProtoMsg): _33.QueryDelegatorValidatorsResponse;
                toProto(message: _33.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _33.QueryDelegatorValidatorsResponse): _33.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _33.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_33.QueryDelegatorValidatorRequest>): _33.QueryDelegatorValidatorRequest;
                fromAmino(object: _33.QueryDelegatorValidatorRequestAmino): _33.QueryDelegatorValidatorRequest;
                toAmino(message: _33.QueryDelegatorValidatorRequest): _33.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _33.QueryDelegatorValidatorRequestAminoMsg): _33.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _33.QueryDelegatorValidatorRequest): _33.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _33.QueryDelegatorValidatorRequestProtoMsg): _33.QueryDelegatorValidatorRequest;
                toProto(message: _33.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _33.QueryDelegatorValidatorRequest): _33.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _33.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_33.QueryDelegatorValidatorResponse>): _33.QueryDelegatorValidatorResponse;
                fromAmino(object: _33.QueryDelegatorValidatorResponseAmino): _33.QueryDelegatorValidatorResponse;
                toAmino(message: _33.QueryDelegatorValidatorResponse): _33.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _33.QueryDelegatorValidatorResponseAminoMsg): _33.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _33.QueryDelegatorValidatorResponse): _33.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _33.QueryDelegatorValidatorResponseProtoMsg): _33.QueryDelegatorValidatorResponse;
                toProto(message: _33.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _33.QueryDelegatorValidatorResponse): _33.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _33.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_33.QueryHistoricalInfoRequest>): _33.QueryHistoricalInfoRequest;
                fromAmino(object: _33.QueryHistoricalInfoRequestAmino): _33.QueryHistoricalInfoRequest;
                toAmino(message: _33.QueryHistoricalInfoRequest): _33.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _33.QueryHistoricalInfoRequestAminoMsg): _33.QueryHistoricalInfoRequest;
                toAminoMsg(message: _33.QueryHistoricalInfoRequest): _33.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _33.QueryHistoricalInfoRequestProtoMsg): _33.QueryHistoricalInfoRequest;
                toProto(message: _33.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _33.QueryHistoricalInfoRequest): _33.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _33.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_33.QueryHistoricalInfoResponse>): _33.QueryHistoricalInfoResponse;
                fromAmino(object: _33.QueryHistoricalInfoResponseAmino): _33.QueryHistoricalInfoResponse;
                toAmino(message: _33.QueryHistoricalInfoResponse): _33.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _33.QueryHistoricalInfoResponseAminoMsg): _33.QueryHistoricalInfoResponse;
                toAminoMsg(message: _33.QueryHistoricalInfoResponse): _33.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _33.QueryHistoricalInfoResponseProtoMsg): _33.QueryHistoricalInfoResponse;
                toProto(message: _33.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _33.QueryHistoricalInfoResponse): _33.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _33.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.QueryPoolRequest;
                fromPartial(_: Partial<_33.QueryPoolRequest>): _33.QueryPoolRequest;
                fromAmino(_: _33.QueryPoolRequestAmino): _33.QueryPoolRequest;
                toAmino(_: _33.QueryPoolRequest): _33.QueryPoolRequestAmino;
                fromAminoMsg(object: _33.QueryPoolRequestAminoMsg): _33.QueryPoolRequest;
                toAminoMsg(message: _33.QueryPoolRequest): _33.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _33.QueryPoolRequestProtoMsg): _33.QueryPoolRequest;
                toProto(message: _33.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _33.QueryPoolRequest): _33.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _33.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.QueryPoolResponse;
                fromPartial(object: Partial<_33.QueryPoolResponse>): _33.QueryPoolResponse;
                fromAmino(object: _33.QueryPoolResponseAmino): _33.QueryPoolResponse;
                toAmino(message: _33.QueryPoolResponse): _33.QueryPoolResponseAmino;
                fromAminoMsg(object: _33.QueryPoolResponseAminoMsg): _33.QueryPoolResponse;
                toAminoMsg(message: _33.QueryPoolResponse): _33.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _33.QueryPoolResponseProtoMsg): _33.QueryPoolResponse;
                toProto(message: _33.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _33.QueryPoolResponse): _33.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _33.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.QueryParamsRequest;
                fromPartial(_: Partial<_33.QueryParamsRequest>): _33.QueryParamsRequest;
                fromAmino(_: _33.QueryParamsRequestAmino): _33.QueryParamsRequest;
                toAmino(_: _33.QueryParamsRequest): _33.QueryParamsRequestAmino;
                fromAminoMsg(object: _33.QueryParamsRequestAminoMsg): _33.QueryParamsRequest;
                toAminoMsg(message: _33.QueryParamsRequest): _33.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _33.QueryParamsRequestProtoMsg): _33.QueryParamsRequest;
                toProto(message: _33.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _33.QueryParamsRequest): _33.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _33.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.QueryParamsResponse;
                fromPartial(object: Partial<_33.QueryParamsResponse>): _33.QueryParamsResponse;
                fromAmino(object: _33.QueryParamsResponseAmino): _33.QueryParamsResponse;
                toAmino(message: _33.QueryParamsResponse): _33.QueryParamsResponseAmino;
                fromAminoMsg(object: _33.QueryParamsResponseAminoMsg): _33.QueryParamsResponse;
                toAminoMsg(message: _33.QueryParamsResponse): _33.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _33.QueryParamsResponseProtoMsg): _33.QueryParamsResponse;
                toProto(message: _33.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _33.QueryParamsResponse): _33.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _32.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.GenesisState;
                fromPartial(object: Partial<_32.GenesisState>): _32.GenesisState;
                fromAmino(object: _32.GenesisStateAmino): _32.GenesisState;
                toAmino(message: _32.GenesisState): _32.GenesisStateAmino;
                fromAminoMsg(object: _32.GenesisStateAminoMsg): _32.GenesisState;
                toAminoMsg(message: _32.GenesisState): _32.GenesisStateAminoMsg;
                fromProtoMsg(message: _32.GenesisStateProtoMsg): _32.GenesisState;
                toProto(message: _32.GenesisState): Uint8Array;
                toProtoMsg(message: _32.GenesisState): _32.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _32.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.LastValidatorPower;
                fromPartial(object: Partial<_32.LastValidatorPower>): _32.LastValidatorPower;
                fromAmino(object: _32.LastValidatorPowerAmino): _32.LastValidatorPower;
                toAmino(message: _32.LastValidatorPower): _32.LastValidatorPowerAmino;
                fromAminoMsg(object: _32.LastValidatorPowerAminoMsg): _32.LastValidatorPower;
                toAminoMsg(message: _32.LastValidatorPower): _32.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _32.LastValidatorPowerProtoMsg): _32.LastValidatorPower;
                toProto(message: _32.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _32.LastValidatorPower): _32.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _31.AuthorizationType;
            authorizationTypeToJSON(object: _31.AuthorizationType): string;
            AuthorizationType: typeof _31.AuthorizationType;
            AuthorizationTypeSDKType: typeof _31.AuthorizationType;
            AuthorizationTypeAmino: typeof _31.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _31.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.StakeAuthorization;
                fromPartial(object: Partial<_31.StakeAuthorization>): _31.StakeAuthorization;
                fromAmino(object: _31.StakeAuthorizationAmino): _31.StakeAuthorization;
                toAmino(message: _31.StakeAuthorization): _31.StakeAuthorizationAmino;
                fromAminoMsg(object: _31.StakeAuthorizationAminoMsg): _31.StakeAuthorization;
                toAminoMsg(message: _31.StakeAuthorization): _31.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _31.StakeAuthorizationProtoMsg): _31.StakeAuthorization;
                toProto(message: _31.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _31.StakeAuthorization): _31.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _31.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.StakeAuthorization_Validators;
                fromPartial(object: Partial<_31.StakeAuthorization_Validators>): _31.StakeAuthorization_Validators;
                fromAmino(object: _31.StakeAuthorization_ValidatorsAmino): _31.StakeAuthorization_Validators;
                toAmino(message: _31.StakeAuthorization_Validators): _31.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _31.StakeAuthorization_ValidatorsAminoMsg): _31.StakeAuthorization_Validators;
                toAminoMsg(message: _31.StakeAuthorization_Validators): _31.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _31.StakeAuthorization_ValidatorsProtoMsg): _31.StakeAuthorization_Validators;
                toProto(message: _31.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _31.StakeAuthorization_Validators): _31.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _36.SignMode;
                signModeToJSON(object: _36.SignMode): string;
                SignMode: typeof _36.SignMode;
                SignModeSDKType: typeof _36.SignMode;
                SignModeAmino: typeof _36.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _36.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.SignatureDescriptors;
                    fromPartial(object: Partial<_36.SignatureDescriptors>): _36.SignatureDescriptors;
                    fromAmino(object: _36.SignatureDescriptorsAmino): _36.SignatureDescriptors;
                    toAmino(message: _36.SignatureDescriptors): _36.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _36.SignatureDescriptorsAminoMsg): _36.SignatureDescriptors;
                    toAminoMsg(message: _36.SignatureDescriptors): _36.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _36.SignatureDescriptorsProtoMsg): _36.SignatureDescriptors;
                    toProto(message: _36.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _36.SignatureDescriptors): _36.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _36.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.SignatureDescriptor;
                    fromPartial(object: Partial<_36.SignatureDescriptor>): _36.SignatureDescriptor;
                    fromAmino(object: _36.SignatureDescriptorAmino): _36.SignatureDescriptor;
                    toAmino(message: _36.SignatureDescriptor): _36.SignatureDescriptorAmino;
                    fromAminoMsg(object: _36.SignatureDescriptorAminoMsg): _36.SignatureDescriptor;
                    toAminoMsg(message: _36.SignatureDescriptor): _36.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _36.SignatureDescriptorProtoMsg): _36.SignatureDescriptor;
                    toProto(message: _36.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _36.SignatureDescriptor): _36.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _36.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_36.SignatureDescriptor_Data>): _36.SignatureDescriptor_Data;
                    fromAmino(object: _36.SignatureDescriptor_DataAmino): _36.SignatureDescriptor_Data;
                    toAmino(message: _36.SignatureDescriptor_Data): _36.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _36.SignatureDescriptor_DataAminoMsg): _36.SignatureDescriptor_Data;
                    toAminoMsg(message: _36.SignatureDescriptor_Data): _36.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _36.SignatureDescriptor_DataProtoMsg): _36.SignatureDescriptor_Data;
                    toProto(message: _36.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _36.SignatureDescriptor_Data): _36.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _36.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_36.SignatureDescriptor_Data_Single>): _36.SignatureDescriptor_Data_Single;
                    fromAmino(object: _36.SignatureDescriptor_Data_SingleAmino): _36.SignatureDescriptor_Data_Single;
                    toAmino(message: _36.SignatureDescriptor_Data_Single): _36.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _36.SignatureDescriptor_Data_SingleAminoMsg): _36.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _36.SignatureDescriptor_Data_Single): _36.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _36.SignatureDescriptor_Data_SingleProtoMsg): _36.SignatureDescriptor_Data_Single;
                    toProto(message: _36.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _36.SignatureDescriptor_Data_Single): _36.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _36.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_36.SignatureDescriptor_Data_Multi>): _36.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _36.SignatureDescriptor_Data_MultiAmino): _36.SignatureDescriptor_Data_Multi;
                    toAmino(message: _36.SignatureDescriptor_Data_Multi): _36.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _36.SignatureDescriptor_Data_MultiAminoMsg): _36.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _36.SignatureDescriptor_Data_Multi): _36.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _36.SignatureDescriptor_Data_MultiProtoMsg): _36.SignatureDescriptor_Data_Multi;
                    toProto(message: _36.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _36.SignatureDescriptor_Data_Multi): _36.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _216.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _37.SimulateRequest): Promise<_37.SimulateResponse>;
                getTx(request: _37.GetTxRequest): Promise<_37.GetTxResponse>;
                broadcastTx(request: _37.BroadcastTxRequest): Promise<_37.BroadcastTxResponse>;
                getTxsEvent(request: _37.GetTxsEventRequest): Promise<_37.GetTxsEventResponse>;
            };
            LCDQueryClient: typeof _207.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _38.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.Tx;
                fromPartial(object: Partial<_38.Tx>): _38.Tx;
                fromAmino(object: _38.TxAmino): _38.Tx;
                toAmino(message: _38.Tx): _38.TxAmino;
                fromAminoMsg(object: _38.TxAminoMsg): _38.Tx;
                toAminoMsg(message: _38.Tx): _38.TxAminoMsg;
                fromProtoMsg(message: _38.TxProtoMsg): _38.Tx;
                toProto(message: _38.Tx): Uint8Array;
                toProtoMsg(message: _38.Tx): _38.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _38.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.TxRaw;
                fromPartial(object: Partial<_38.TxRaw>): _38.TxRaw;
                fromAmino(object: _38.TxRawAmino): _38.TxRaw;
                toAmino(message: _38.TxRaw): _38.TxRawAmino;
                fromAminoMsg(object: _38.TxRawAminoMsg): _38.TxRaw;
                toAminoMsg(message: _38.TxRaw): _38.TxRawAminoMsg;
                fromProtoMsg(message: _38.TxRawProtoMsg): _38.TxRaw;
                toProto(message: _38.TxRaw): Uint8Array;
                toProtoMsg(message: _38.TxRaw): _38.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _38.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.SignDoc;
                fromPartial(object: Partial<_38.SignDoc>): _38.SignDoc;
                fromAmino(object: _38.SignDocAmino): _38.SignDoc;
                toAmino(message: _38.SignDoc): _38.SignDocAmino;
                fromAminoMsg(object: _38.SignDocAminoMsg): _38.SignDoc;
                toAminoMsg(message: _38.SignDoc): _38.SignDocAminoMsg;
                fromProtoMsg(message: _38.SignDocProtoMsg): _38.SignDoc;
                toProto(message: _38.SignDoc): Uint8Array;
                toProtoMsg(message: _38.SignDoc): _38.SignDocProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _38.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.TxBody;
                fromPartial(object: Partial<_38.TxBody>): _38.TxBody;
                fromAmino(object: _38.TxBodyAmino): _38.TxBody;
                toAmino(message: _38.TxBody): _38.TxBodyAmino;
                fromAminoMsg(object: _38.TxBodyAminoMsg): _38.TxBody;
                toAminoMsg(message: _38.TxBody): _38.TxBodyAminoMsg;
                fromProtoMsg(message: _38.TxBodyProtoMsg): _38.TxBody;
                toProto(message: _38.TxBody): Uint8Array;
                toProtoMsg(message: _38.TxBody): _38.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _38.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.AuthInfo;
                fromPartial(object: Partial<_38.AuthInfo>): _38.AuthInfo;
                fromAmino(object: _38.AuthInfoAmino): _38.AuthInfo;
                toAmino(message: _38.AuthInfo): _38.AuthInfoAmino;
                fromAminoMsg(object: _38.AuthInfoAminoMsg): _38.AuthInfo;
                toAminoMsg(message: _38.AuthInfo): _38.AuthInfoAminoMsg;
                fromProtoMsg(message: _38.AuthInfoProtoMsg): _38.AuthInfo;
                toProto(message: _38.AuthInfo): Uint8Array;
                toProtoMsg(message: _38.AuthInfo): _38.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _38.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.SignerInfo;
                fromPartial(object: Partial<_38.SignerInfo>): _38.SignerInfo;
                fromAmino(object: _38.SignerInfoAmino): _38.SignerInfo;
                toAmino(message: _38.SignerInfo): _38.SignerInfoAmino;
                fromAminoMsg(object: _38.SignerInfoAminoMsg): _38.SignerInfo;
                toAminoMsg(message: _38.SignerInfo): _38.SignerInfoAminoMsg;
                fromProtoMsg(message: _38.SignerInfoProtoMsg): _38.SignerInfo;
                toProto(message: _38.SignerInfo): Uint8Array;
                toProtoMsg(message: _38.SignerInfo): _38.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _38.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.ModeInfo;
                fromPartial(object: Partial<_38.ModeInfo>): _38.ModeInfo;
                fromAmino(object: _38.ModeInfoAmino): _38.ModeInfo;
                toAmino(message: _38.ModeInfo): _38.ModeInfoAmino;
                fromAminoMsg(object: _38.ModeInfoAminoMsg): _38.ModeInfo;
                toAminoMsg(message: _38.ModeInfo): _38.ModeInfoAminoMsg;
                fromProtoMsg(message: _38.ModeInfoProtoMsg): _38.ModeInfo;
                toProto(message: _38.ModeInfo): Uint8Array;
                toProtoMsg(message: _38.ModeInfo): _38.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _38.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.ModeInfo_Single;
                fromPartial(object: Partial<_38.ModeInfo_Single>): _38.ModeInfo_Single;
                fromAmino(object: _38.ModeInfo_SingleAmino): _38.ModeInfo_Single;
                toAmino(message: _38.ModeInfo_Single): _38.ModeInfo_SingleAmino;
                fromAminoMsg(object: _38.ModeInfo_SingleAminoMsg): _38.ModeInfo_Single;
                toAminoMsg(message: _38.ModeInfo_Single): _38.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _38.ModeInfo_SingleProtoMsg): _38.ModeInfo_Single;
                toProto(message: _38.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _38.ModeInfo_Single): _38.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _38.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.ModeInfo_Multi;
                fromPartial(object: Partial<_38.ModeInfo_Multi>): _38.ModeInfo_Multi;
                fromAmino(object: _38.ModeInfo_MultiAmino): _38.ModeInfo_Multi;
                toAmino(message: _38.ModeInfo_Multi): _38.ModeInfo_MultiAmino;
                fromAminoMsg(object: _38.ModeInfo_MultiAminoMsg): _38.ModeInfo_Multi;
                toAminoMsg(message: _38.ModeInfo_Multi): _38.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _38.ModeInfo_MultiProtoMsg): _38.ModeInfo_Multi;
                toProto(message: _38.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _38.ModeInfo_Multi): _38.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _38.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.Fee;
                fromPartial(object: Partial<_38.Fee>): _38.Fee;
                fromAmino(object: _38.FeeAmino): _38.Fee;
                toAmino(message: _38.Fee): _38.FeeAmino;
                fromAminoMsg(object: _38.FeeAminoMsg): _38.Fee;
                toAminoMsg(message: _38.Fee): _38.FeeAminoMsg;
                fromProtoMsg(message: _38.FeeProtoMsg): _38.Fee;
                toProto(message: _38.Fee): Uint8Array;
                toProtoMsg(message: _38.Fee): _38.FeeProtoMsg;
            };
            orderByFromJSON(object: any): _37.OrderBy;
            orderByToJSON(object: _37.OrderBy): string;
            broadcastModeFromJSON(object: any): _37.BroadcastMode;
            broadcastModeToJSON(object: _37.BroadcastMode): string;
            OrderBy: typeof _37.OrderBy;
            OrderBySDKType: typeof _37.OrderBy;
            OrderByAmino: typeof _37.OrderBy;
            BroadcastMode: typeof _37.BroadcastMode;
            BroadcastModeSDKType: typeof _37.BroadcastMode;
            BroadcastModeAmino: typeof _37.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _37.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.GetTxsEventRequest;
                fromPartial(object: Partial<_37.GetTxsEventRequest>): _37.GetTxsEventRequest;
                fromAmino(object: _37.GetTxsEventRequestAmino): _37.GetTxsEventRequest;
                toAmino(message: _37.GetTxsEventRequest): _37.GetTxsEventRequestAmino;
                fromAminoMsg(object: _37.GetTxsEventRequestAminoMsg): _37.GetTxsEventRequest;
                toAminoMsg(message: _37.GetTxsEventRequest): _37.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _37.GetTxsEventRequestProtoMsg): _37.GetTxsEventRequest;
                toProto(message: _37.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _37.GetTxsEventRequest): _37.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _37.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.GetTxsEventResponse;
                fromPartial(object: Partial<_37.GetTxsEventResponse>): _37.GetTxsEventResponse;
                fromAmino(object: _37.GetTxsEventResponseAmino): _37.GetTxsEventResponse;
                toAmino(message: _37.GetTxsEventResponse): _37.GetTxsEventResponseAmino;
                fromAminoMsg(object: _37.GetTxsEventResponseAminoMsg): _37.GetTxsEventResponse;
                toAminoMsg(message: _37.GetTxsEventResponse): _37.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _37.GetTxsEventResponseProtoMsg): _37.GetTxsEventResponse;
                toProto(message: _37.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _37.GetTxsEventResponse): _37.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _37.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.BroadcastTxRequest;
                fromPartial(object: Partial<_37.BroadcastTxRequest>): _37.BroadcastTxRequest;
                fromAmino(object: _37.BroadcastTxRequestAmino): _37.BroadcastTxRequest;
                toAmino(message: _37.BroadcastTxRequest): _37.BroadcastTxRequestAmino;
                fromAminoMsg(object: _37.BroadcastTxRequestAminoMsg): _37.BroadcastTxRequest;
                toAminoMsg(message: _37.BroadcastTxRequest): _37.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _37.BroadcastTxRequestProtoMsg): _37.BroadcastTxRequest;
                toProto(message: _37.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _37.BroadcastTxRequest): _37.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _37.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.BroadcastTxResponse;
                fromPartial(object: Partial<_37.BroadcastTxResponse>): _37.BroadcastTxResponse;
                fromAmino(object: _37.BroadcastTxResponseAmino): _37.BroadcastTxResponse;
                toAmino(message: _37.BroadcastTxResponse): _37.BroadcastTxResponseAmino;
                fromAminoMsg(object: _37.BroadcastTxResponseAminoMsg): _37.BroadcastTxResponse;
                toAminoMsg(message: _37.BroadcastTxResponse): _37.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _37.BroadcastTxResponseProtoMsg): _37.BroadcastTxResponse;
                toProto(message: _37.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _37.BroadcastTxResponse): _37.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _37.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.SimulateRequest;
                fromPartial(object: Partial<_37.SimulateRequest>): _37.SimulateRequest;
                fromAmino(object: _37.SimulateRequestAmino): _37.SimulateRequest;
                toAmino(message: _37.SimulateRequest): _37.SimulateRequestAmino;
                fromAminoMsg(object: _37.SimulateRequestAminoMsg): _37.SimulateRequest;
                toAminoMsg(message: _37.SimulateRequest): _37.SimulateRequestAminoMsg;
                fromProtoMsg(message: _37.SimulateRequestProtoMsg): _37.SimulateRequest;
                toProto(message: _37.SimulateRequest): Uint8Array;
                toProtoMsg(message: _37.SimulateRequest): _37.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _37.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.SimulateResponse;
                fromPartial(object: Partial<_37.SimulateResponse>): _37.SimulateResponse;
                fromAmino(object: _37.SimulateResponseAmino): _37.SimulateResponse;
                toAmino(message: _37.SimulateResponse): _37.SimulateResponseAmino;
                fromAminoMsg(object: _37.SimulateResponseAminoMsg): _37.SimulateResponse;
                toAminoMsg(message: _37.SimulateResponse): _37.SimulateResponseAminoMsg;
                fromProtoMsg(message: _37.SimulateResponseProtoMsg): _37.SimulateResponse;
                toProto(message: _37.SimulateResponse): Uint8Array;
                toProtoMsg(message: _37.SimulateResponse): _37.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _37.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.GetTxRequest;
                fromPartial(object: Partial<_37.GetTxRequest>): _37.GetTxRequest;
                fromAmino(object: _37.GetTxRequestAmino): _37.GetTxRequest;
                toAmino(message: _37.GetTxRequest): _37.GetTxRequestAmino;
                fromAminoMsg(object: _37.GetTxRequestAminoMsg): _37.GetTxRequest;
                toAminoMsg(message: _37.GetTxRequest): _37.GetTxRequestAminoMsg;
                fromProtoMsg(message: _37.GetTxRequestProtoMsg): _37.GetTxRequest;
                toProto(message: _37.GetTxRequest): Uint8Array;
                toProtoMsg(message: _37.GetTxRequest): _37.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _37.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.GetTxResponse;
                fromPartial(object: Partial<_37.GetTxResponse>): _37.GetTxResponse;
                fromAmino(object: _37.GetTxResponseAmino): _37.GetTxResponse;
                toAmino(message: _37.GetTxResponse): _37.GetTxResponseAmino;
                fromAminoMsg(object: _37.GetTxResponseAminoMsg): _37.GetTxResponse;
                toAminoMsg(message: _37.GetTxResponse): _37.GetTxResponseAminoMsg;
                fromProtoMsg(message: _37.GetTxResponseProtoMsg): _37.GetTxResponse;
                toProto(message: _37.GetTxResponse): Uint8Array;
                toProtoMsg(message: _37.GetTxResponse): _37.GetTxResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _217.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _39.QueryCurrentPlanRequest): Promise<_39.QueryCurrentPlanResponse>;
                appliedPlan(request: _39.QueryAppliedPlanRequest): Promise<_39.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _39.QueryUpgradedConsensusStateRequest): Promise<_39.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _39.QueryModuleVersionsRequest): Promise<_39.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _208.LCDQueryClient;
            Plan: {
                typeUrl: string;
                encode(message: _40.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _40.Plan;
                fromPartial(object: Partial<_40.Plan>): _40.Plan;
                fromAmino(object: _40.PlanAmino): _40.Plan;
                toAmino(message: _40.Plan): _40.PlanAmino;
                fromAminoMsg(object: _40.PlanAminoMsg): _40.Plan;
                toAminoMsg(message: _40.Plan): _40.PlanAminoMsg;
                fromProtoMsg(message: _40.PlanProtoMsg): _40.Plan;
                toProto(message: _40.Plan): Uint8Array;
                toProtoMsg(message: _40.Plan): _40.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _40.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _40.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_40.SoftwareUpgradeProposal>): _40.SoftwareUpgradeProposal;
                fromAmino(object: _40.SoftwareUpgradeProposalAmino): _40.SoftwareUpgradeProposal;
                toAmino(message: _40.SoftwareUpgradeProposal): _40.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _40.SoftwareUpgradeProposalAminoMsg): _40.SoftwareUpgradeProposal;
                toAminoMsg(message: _40.SoftwareUpgradeProposal): _40.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _40.SoftwareUpgradeProposalProtoMsg): _40.SoftwareUpgradeProposal;
                toProto(message: _40.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _40.SoftwareUpgradeProposal): _40.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _40.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _40.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_40.CancelSoftwareUpgradeProposal>): _40.CancelSoftwareUpgradeProposal;
                fromAmino(object: _40.CancelSoftwareUpgradeProposalAmino): _40.CancelSoftwareUpgradeProposal;
                toAmino(message: _40.CancelSoftwareUpgradeProposal): _40.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _40.CancelSoftwareUpgradeProposalAminoMsg): _40.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _40.CancelSoftwareUpgradeProposal): _40.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _40.CancelSoftwareUpgradeProposalProtoMsg): _40.CancelSoftwareUpgradeProposal;
                toProto(message: _40.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _40.CancelSoftwareUpgradeProposal): _40.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _40.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _40.ModuleVersion;
                fromPartial(object: Partial<_40.ModuleVersion>): _40.ModuleVersion;
                fromAmino(object: _40.ModuleVersionAmino): _40.ModuleVersion;
                toAmino(message: _40.ModuleVersion): _40.ModuleVersionAmino;
                fromAminoMsg(object: _40.ModuleVersionAminoMsg): _40.ModuleVersion;
                toAminoMsg(message: _40.ModuleVersion): _40.ModuleVersionAminoMsg;
                fromProtoMsg(message: _40.ModuleVersionProtoMsg): _40.ModuleVersion;
                toProto(message: _40.ModuleVersion): Uint8Array;
                toProtoMsg(message: _40.ModuleVersion): _40.ModuleVersionProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _39.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _39.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_39.QueryCurrentPlanRequest>): _39.QueryCurrentPlanRequest;
                fromAmino(_: _39.QueryCurrentPlanRequestAmino): _39.QueryCurrentPlanRequest;
                toAmino(_: _39.QueryCurrentPlanRequest): _39.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _39.QueryCurrentPlanRequestAminoMsg): _39.QueryCurrentPlanRequest;
                toAminoMsg(message: _39.QueryCurrentPlanRequest): _39.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _39.QueryCurrentPlanRequestProtoMsg): _39.QueryCurrentPlanRequest;
                toProto(message: _39.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _39.QueryCurrentPlanRequest): _39.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _39.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _39.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_39.QueryCurrentPlanResponse>): _39.QueryCurrentPlanResponse;
                fromAmino(object: _39.QueryCurrentPlanResponseAmino): _39.QueryCurrentPlanResponse;
                toAmino(message: _39.QueryCurrentPlanResponse): _39.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _39.QueryCurrentPlanResponseAminoMsg): _39.QueryCurrentPlanResponse;
                toAminoMsg(message: _39.QueryCurrentPlanResponse): _39.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _39.QueryCurrentPlanResponseProtoMsg): _39.QueryCurrentPlanResponse;
                toProto(message: _39.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _39.QueryCurrentPlanResponse): _39.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _39.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _39.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_39.QueryAppliedPlanRequest>): _39.QueryAppliedPlanRequest;
                fromAmino(object: _39.QueryAppliedPlanRequestAmino): _39.QueryAppliedPlanRequest;
                toAmino(message: _39.QueryAppliedPlanRequest): _39.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _39.QueryAppliedPlanRequestAminoMsg): _39.QueryAppliedPlanRequest;
                toAminoMsg(message: _39.QueryAppliedPlanRequest): _39.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _39.QueryAppliedPlanRequestProtoMsg): _39.QueryAppliedPlanRequest;
                toProto(message: _39.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _39.QueryAppliedPlanRequest): _39.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _39.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _39.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_39.QueryAppliedPlanResponse>): _39.QueryAppliedPlanResponse;
                fromAmino(object: _39.QueryAppliedPlanResponseAmino): _39.QueryAppliedPlanResponse;
                toAmino(message: _39.QueryAppliedPlanResponse): _39.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _39.QueryAppliedPlanResponseAminoMsg): _39.QueryAppliedPlanResponse;
                toAminoMsg(message: _39.QueryAppliedPlanResponse): _39.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _39.QueryAppliedPlanResponseProtoMsg): _39.QueryAppliedPlanResponse;
                toProto(message: _39.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _39.QueryAppliedPlanResponse): _39.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _39.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _39.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_39.QueryUpgradedConsensusStateRequest>): _39.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _39.QueryUpgradedConsensusStateRequestAmino): _39.QueryUpgradedConsensusStateRequest;
                toAmino(message: _39.QueryUpgradedConsensusStateRequest): _39.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _39.QueryUpgradedConsensusStateRequestAminoMsg): _39.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _39.QueryUpgradedConsensusStateRequest): _39.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _39.QueryUpgradedConsensusStateRequestProtoMsg): _39.QueryUpgradedConsensusStateRequest;
                toProto(message: _39.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _39.QueryUpgradedConsensusStateRequest): _39.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _39.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _39.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_39.QueryUpgradedConsensusStateResponse>): _39.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _39.QueryUpgradedConsensusStateResponseAmino): _39.QueryUpgradedConsensusStateResponse;
                toAmino(message: _39.QueryUpgradedConsensusStateResponse): _39.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _39.QueryUpgradedConsensusStateResponseAminoMsg): _39.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _39.QueryUpgradedConsensusStateResponse): _39.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _39.QueryUpgradedConsensusStateResponseProtoMsg): _39.QueryUpgradedConsensusStateResponse;
                toProto(message: _39.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _39.QueryUpgradedConsensusStateResponse): _39.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _39.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _39.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_39.QueryModuleVersionsRequest>): _39.QueryModuleVersionsRequest;
                fromAmino(object: _39.QueryModuleVersionsRequestAmino): _39.QueryModuleVersionsRequest;
                toAmino(message: _39.QueryModuleVersionsRequest): _39.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _39.QueryModuleVersionsRequestAminoMsg): _39.QueryModuleVersionsRequest;
                toAminoMsg(message: _39.QueryModuleVersionsRequest): _39.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _39.QueryModuleVersionsRequestProtoMsg): _39.QueryModuleVersionsRequest;
                toProto(message: _39.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _39.QueryModuleVersionsRequest): _39.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _39.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _39.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_39.QueryModuleVersionsResponse>): _39.QueryModuleVersionsResponse;
                fromAmino(object: _39.QueryModuleVersionsResponseAmino): _39.QueryModuleVersionsResponse;
                toAmino(message: _39.QueryModuleVersionsResponse): _39.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _39.QueryModuleVersionsResponseAminoMsg): _39.QueryModuleVersionsResponse;
                toAminoMsg(message: _39.QueryModuleVersionsResponse): _39.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _39.QueryModuleVersionsResponseProtoMsg): _39.QueryModuleVersionsResponse;
                toProto(message: _39.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _39.QueryModuleVersionsResponse): _39.QueryModuleVersionsResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _218.MsgClientImpl;
                };
                bank: {
                    v1beta1: _219.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _220.MsgClientImpl;
                };
                gov: {
                    v1beta1: _221.MsgClientImpl;
                };
                staking: {
                    v1beta1: _222.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _3.QueryAccountsRequest): Promise<_3.QueryAccountsResponse>;
                        account(request: _3.QueryAccountRequest): Promise<_3.QueryAccountResponse>;
                        params(request?: _3.QueryParamsRequest): Promise<_3.QueryParamsResponse>;
                        moduleAccounts(request?: _3.QueryModuleAccountsRequest): Promise<_3.QueryModuleAccountsResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _7.QueryGrantsRequest): Promise<_7.QueryGrantsResponse>;
                        granterGrants(request: _7.QueryGranterGrantsRequest): Promise<_7.QueryGranterGrantsResponse>;
                        granteeGrants(request: _7.QueryGranteeGrantsRequest): Promise<_7.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _12.QueryBalanceRequest): Promise<_12.QueryBalanceResponse>;
                        allBalances(request: _12.QueryAllBalancesRequest): Promise<_12.QueryAllBalancesResponse>;
                        totalSupply(request?: _12.QueryTotalSupplyRequest): Promise<_12.QueryTotalSupplyResponse>;
                        supplyOf(request: _12.QuerySupplyOfRequest): Promise<_12.QuerySupplyOfResponse>;
                        totalSupplyWithoutOffset(request?: _12.QueryTotalSupplyWithoutOffsetRequest): Promise<_12.QueryTotalSupplyWithoutOffsetResponse>;
                        supplyOfWithoutOffset(request: _12.QuerySupplyOfWithoutOffsetRequest): Promise<_12.QuerySupplyOfWithoutOffsetResponse>;
                        params(request?: _12.QueryParamsRequest): Promise<_12.QueryParamsResponse>;
                        denomMetadata(request: _12.QueryDenomMetadataRequest): Promise<_12.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _12.QueryDenomsMetadataRequest): Promise<_12.QueryDenomsMetadataResponse>;
                        baseDenom(request: _12.QueryBaseDenomRequest): Promise<_12.QueryBaseDenomResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _15.ConfigRequest): Promise<_15.ConfigResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _25.QueryParamsRequest): Promise<_25.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _25.QueryValidatorOutstandingRewardsRequest): Promise<_25.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _25.QueryValidatorCommissionRequest): Promise<_25.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _25.QueryValidatorSlashesRequest): Promise<_25.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _25.QueryDelegationRewardsRequest): Promise<_25.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _25.QueryDelegationTotalRewardsRequest): Promise<_25.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _25.QueryDelegatorValidatorsRequest): Promise<_25.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _25.QueryDelegatorWithdrawAddressRequest): Promise<_25.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _25.QueryCommunityPoolRequest): Promise<_25.QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _29.QueryProposalRequest): Promise<_29.QueryProposalResponse>;
                        proposals(request: _29.QueryProposalsRequest): Promise<_29.QueryProposalsResponse>;
                        vote(request: _29.QueryVoteRequest): Promise<_29.QueryVoteResponse>;
                        votes(request: _29.QueryVotesRequest): Promise<_29.QueryVotesResponse>;
                        params(request: _29.QueryParamsRequest): Promise<_29.QueryParamsResponse>;
                        deposit(request: _29.QueryDepositRequest): Promise<_29.QueryDepositResponse>;
                        deposits(request: _29.QueryDepositsRequest): Promise<_29.QueryDepositsResponse>;
                        tallyResult(request: _29.QueryTallyResultRequest): Promise<_29.QueryTallyResultResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _33.QueryValidatorsRequest): Promise<_33.QueryValidatorsResponse>;
                        validator(request: _33.QueryValidatorRequest): Promise<_33.QueryValidatorResponse>;
                        validatorDelegations(request: _33.QueryValidatorDelegationsRequest): Promise<_33.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _33.QueryValidatorUnbondingDelegationsRequest): Promise<_33.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _33.QueryDelegationRequest): Promise<_33.QueryDelegationResponse>;
                        unbondingDelegation(request: _33.QueryUnbondingDelegationRequest): Promise<_33.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _33.QueryDelegatorDelegationsRequest): Promise<_33.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _33.QueryDelegatorUnbondingDelegationsRequest): Promise<_33.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _33.QueryRedelegationsRequest): Promise<_33.QueryRedelegationsResponse>;
                        delegatorValidators(request: _33.QueryDelegatorValidatorsRequest): Promise<_33.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _33.QueryDelegatorValidatorRequest): Promise<_33.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _33.QueryHistoricalInfoRequest): Promise<_33.QueryHistoricalInfoResponse>;
                        pool(request?: _33.QueryPoolRequest): Promise<_33.QueryPoolResponse>;
                        params(request?: _33.QueryParamsRequest): Promise<_33.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _37.SimulateRequest): Promise<_37.SimulateResponse>;
                        getTx(request: _37.GetTxRequest): Promise<_37.GetTxResponse>;
                        broadcastTx(request: _37.BroadcastTxRequest): Promise<_37.BroadcastTxResponse>;
                        getTxsEvent(request: _37.GetTxsEventRequest): Promise<_37.GetTxsEventResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _39.QueryCurrentPlanRequest): Promise<_39.QueryCurrentPlanResponse>;
                        appliedPlan(request: _39.QueryAppliedPlanRequest): Promise<_39.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _39.QueryUpgradedConsensusStateRequest): Promise<_39.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _39.QueryModuleVersionsRequest): Promise<_39.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _200.LCDQueryClient;
                };
                authz: {
                    v1beta1: _201.LCDQueryClient;
                };
                bank: {
                    v1beta1: _202.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _203.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _204.LCDQueryClient;
                };
                gov: {
                    v1beta1: _205.LCDQueryClient;
                };
                staking: {
                    v1beta1: _206.LCDQueryClient;
                };
                tx: {
                    v1beta1: _207.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _208.LCDQueryClient;
                };
            };
        }>;
    };
}
