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
import * as _23 from "./crypto/hd/v1/hd";
import * as _24 from "./crypto/keyring/v1/record";
import * as _25 from "./distribution/v1beta1/distribution";
import * as _26 from "./distribution/v1beta1/genesis";
import * as _27 from "./distribution/v1beta1/query";
import * as _28 from "./distribution/v1beta1/tx";
import * as _29 from "./gov/v1beta1/genesis";
import * as _30 from "./gov/v1beta1/gov";
import * as _31 from "./gov/v1beta1/query";
import * as _32 from "./gov/v1beta1/tx";
import * as _33 from "./gov/v1/genesis";
import * as _34 from "./gov/v1/gov";
import * as _35 from "./gov/v1/query";
import * as _36 from "./gov/v1/tx";
import * as _37 from "./staking/v1beta1/authz";
import * as _38 from "./staking/v1beta1/genesis";
import * as _39 from "./staking/v1beta1/query";
import * as _40 from "./staking/v1beta1/staking";
import * as _41 from "./staking/v1beta1/tx";
import * as _42 from "./tx/signing/v1beta1/signing";
import * as _43 from "./tx/v1beta1/service";
import * as _44 from "./tx/v1beta1/tx";
import * as _45 from "./upgrade/v1beta1/query";
import * as _46 from "./upgrade/v1beta1/upgrade";
import * as _47 from "./upgrade/v1beta1/tx";
import * as _202 from "./auth/v1beta1/query.lcd";
import * as _203 from "./authz/v1beta1/query.lcd";
import * as _204 from "./bank/v1beta1/query.lcd";
import * as _205 from "./base/node/v1beta1/query.lcd";
import * as _206 from "./distribution/v1beta1/query.lcd";
import * as _207 from "./gov/v1beta1/query.lcd";
import * as _208 from "./staking/v1beta1/query.lcd";
import * as _209 from "./tx/v1beta1/service.lcd";
import * as _210 from "./upgrade/v1beta1/query.lcd";
import * as _211 from "./gov/v1/query.lcd";
import * as _212 from "./auth/v1beta1/query.rpc.Query";
import * as _213 from "./authz/v1beta1/query.rpc.Query";
import * as _214 from "./bank/v1beta1/query.rpc.Query";
import * as _215 from "./base/node/v1beta1/query.rpc.Service";
import * as _216 from "./distribution/v1beta1/query.rpc.Query";
import * as _217 from "./gov/v1beta1/query.rpc.Query";
import * as _218 from "./staking/v1beta1/query.rpc.Query";
import * as _219 from "./tx/v1beta1/service.rpc.Service";
import * as _220 from "./upgrade/v1beta1/query.rpc.Query";
import * as _221 from "./gov/v1/query.rpc.Query";
import * as _222 from "./authz/v1beta1/tx.rpc.msg";
import * as _223 from "./bank/v1beta1/tx.rpc.msg";
import * as _224 from "./distribution/v1beta1/tx.rpc.msg";
import * as _225 from "./gov/v1beta1/tx.rpc.msg";
import * as _226 from "./staking/v1beta1/tx.rpc.msg";
import * as _227 from "./gov/v1/tx.rpc.msg";
import * as _228 from "./upgrade/v1beta1/tx.rpc.msg";
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
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _212.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _3.QueryAccountsRequest): Promise<_3.QueryAccountsResponse>;
                account(request: _3.QueryAccountRequest): Promise<_3.QueryAccountResponse>;
                params(request?: _3.QueryParamsRequest): Promise<_3.QueryParamsResponse>;
                moduleAccounts(request?: _3.QueryModuleAccountsRequest): Promise<_3.QueryModuleAccountsResponse>;
            };
            LCDQueryClient: typeof _202.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _3.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryAccountsRequest;
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
                encode(message: _3.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryAccountsResponse;
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
                encode(message: _3.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryAccountRequest;
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
                encode(message: _3.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryAccountResponse;
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
                encode(_: _3.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryParamsRequest;
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
                encode(message: _3.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryParamsResponse;
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
                encode(_: _3.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryModuleAccountsRequest;
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
                encode(message: _3.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_3.QueryModuleAccountsResponse>): _3.QueryModuleAccountsResponse;
                fromAmino(object: _3.QueryModuleAccountsResponseAmino): _3.QueryModuleAccountsResponse;
                toAmino(message: _3.QueryModuleAccountsResponse): _3.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _3.QueryModuleAccountsResponseAminoMsg): _3.QueryModuleAccountsResponse;
                toAminoMsg(message: _3.QueryModuleAccountsResponse): _3.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _3.QueryModuleAccountsResponseProtoMsg): _3.QueryModuleAccountsResponse;
                toProto(message: _3.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _3.QueryModuleAccountsResponse): _3.QueryModuleAccountsResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _1.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _1.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _2.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.GenesisState;
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
                encode(message: _1.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.BaseAccount;
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
                encode(message: _1.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.ModuleAccount;
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
                encode(message: _1.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.Params;
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
            MsgClientImpl: typeof _222.MsgClientImpl;
            QueryClientImpl: typeof _213.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _7.QueryGrantsRequest): Promise<_7.QueryGrantsResponse>;
                granterGrants(request: _7.QueryGranterGrantsRequest): Promise<_7.QueryGranterGrantsResponse>;
                granteeGrants(request: _7.QueryGranteeGrantsRequest): Promise<_7.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _203.LCDQueryClient;
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
                encode(message: _8.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.MsgGrant;
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
                encode(message: _8.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.MsgExecResponse;
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
                encode(message: _8.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.MsgExec;
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
                encode(_: _8.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.MsgGrantResponse;
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
                encode(message: _8.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.MsgRevoke;
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
                encode(_: _8.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.MsgRevokeResponse;
                fromPartial(_: Partial<_8.MsgRevokeResponse>): _8.MsgRevokeResponse;
                fromAmino(_: _8.MsgRevokeResponseAmino): _8.MsgRevokeResponse;
                toAmino(_: _8.MsgRevokeResponse): _8.MsgRevokeResponseAmino;
                fromAminoMsg(object: _8.MsgRevokeResponseAminoMsg): _8.MsgRevokeResponse;
                toAminoMsg(message: _8.MsgRevokeResponse): _8.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _8.MsgRevokeResponseProtoMsg): _8.MsgRevokeResponse;
                toProto(message: _8.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _8.MsgRevokeResponse): _8.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _7.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryGrantsRequest;
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
                encode(message: _7.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryGrantsResponse;
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
                encode(message: _7.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryGranterGrantsRequest;
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
                encode(message: _7.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryGranterGrantsResponse;
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
                encode(message: _7.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryGranteeGrantsRequest;
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
                encode(message: _7.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryGranteeGrantsResponse;
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
                encode(message: _6.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.GenesisState;
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
                encode(message: _5.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.EventGrant;
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
                encode(message: _5.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.EventRevoke;
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
                encode(message: _4.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.GenericAuthorization;
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
                encode(message: _4.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.Grant;
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
                encode(message: _4.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.GrantAuthorization;
                fromPartial(object: Partial<_4.GrantAuthorization>): _4.GrantAuthorization;
                fromAmino(object: _4.GrantAuthorizationAmino): _4.GrantAuthorization;
                toAmino(message: _4.GrantAuthorization): _4.GrantAuthorizationAmino;
                fromAminoMsg(object: _4.GrantAuthorizationAminoMsg): _4.GrantAuthorization;
                toAminoMsg(message: _4.GrantAuthorization): _4.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _4.GrantAuthorizationProtoMsg): _4.GrantAuthorization;
                toProto(message: _4.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _4.GrantAuthorization): _4.GrantAuthorizationProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _9.SendAuthorization | _37.StakeAuthorization | _4.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _223.MsgClientImpl;
            QueryClientImpl: typeof _214.QueryClientImpl;
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
            LCDQueryClient: typeof _204.LCDQueryClient;
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
                encode(message: _13.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgSend;
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
                encode(_: _13.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgSendResponse;
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
                encode(message: _13.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgMultiSend;
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
                encode(_: _13.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgMultiSendResponse;
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
                encode(message: _12.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryBalanceRequest;
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
                encode(message: _12.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryBalanceResponse;
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
                encode(message: _12.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryAllBalancesRequest;
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
                encode(message: _12.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryAllBalancesResponse;
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
                encode(message: _12.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryTotalSupplyRequest;
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
                encode(message: _12.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryTotalSupplyResponse;
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
                encode(message: _12.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QuerySupplyOfRequest;
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
                encode(message: _12.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QuerySupplyOfResponse;
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
                encode(message: _12.QueryTotalSupplyWithoutOffsetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryTotalSupplyWithoutOffsetRequest;
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
                encode(message: _12.QueryTotalSupplyWithoutOffsetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryTotalSupplyWithoutOffsetResponse;
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
                encode(message: _12.QuerySupplyOfWithoutOffsetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QuerySupplyOfWithoutOffsetRequest;
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
                encode(message: _12.QuerySupplyOfWithoutOffsetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QuerySupplyOfWithoutOffsetResponse;
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
                encode(_: _12.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryParamsRequest;
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
                encode(message: _12.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryParamsResponse;
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
                encode(message: _12.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryDenomsMetadataRequest;
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
                encode(message: _12.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryDenomsMetadataResponse;
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
                encode(message: _12.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryDenomMetadataRequest;
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
                encode(message: _12.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryDenomMetadataResponse;
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
                encode(message: _12.QueryBaseDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryBaseDenomRequest;
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
                encode(message: _12.QueryBaseDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryBaseDenomResponse;
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
                encode(message: _11.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.GenesisState;
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
                encode(message: _11.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Balance;
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
                encode(message: _11.GenesisSupplyOffset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.GenesisSupplyOffset;
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
                encode(message: _10.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Params;
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
                encode(message: _10.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.SendEnabled;
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
                encode(message: _10.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Input;
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
                encode(message: _10.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Output;
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
                encode(message: _10.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Supply;
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
                encode(message: _10.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.DenomUnit;
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
                encode(message: _10.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Metadata;
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
                encode(message: _9.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.SendAuthorization;
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
                    encode(message: _14.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.TxResponse;
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
                    encode(message: _14.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.ABCIMessageLog;
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
                    encode(message: _14.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.StringEvent;
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
                    encode(message: _14.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Attribute;
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
                    encode(message: _14.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GasInfo;
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
                    encode(message: _14.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Result;
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
                    encode(message: _14.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.SimulationResponse;
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
                    encode(message: _14.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgData;
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
                    encode(message: _14.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.TxMsgData;
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
                    encode(message: _14.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.SearchTxsResult;
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
                ServiceClientImpl: typeof _215.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _15.ConfigRequest): Promise<_15.ConfigResponse>;
                };
                LCDQueryClient: typeof _205.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _15.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.ConfigRequest;
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
                    encode(message: _15.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.ConfigResponse;
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
                    encode(message: _16.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.PageRequest;
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
                    encode(message: _16.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.PageResponse;
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
                    encode(message: _17.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.AppDescriptor;
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
                    encode(message: _17.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.TxDescriptor;
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
                    encode(message: _17.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.AuthnDescriptor;
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
                    encode(message: _17.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.SigningModeDescriptor;
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
                    encode(message: _17.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ChainDescriptor;
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
                    encode(message: _17.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.CodecDescriptor;
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
                    encode(message: _17.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.InterfaceDescriptor;
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
                    encode(message: _17.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.InterfaceImplementerDescriptor;
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
                    encode(message: _17.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.InterfaceAcceptingMessageDescriptor;
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
                    encode(message: _17.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ConfigurationDescriptor;
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
                    encode(message: _17.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgDescriptor;
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
                    encode(_: _17.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetAuthnDescriptorRequest;
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
                    encode(message: _17.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetAuthnDescriptorResponse;
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
                    encode(_: _17.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetChainDescriptorRequest;
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
                    encode(message: _17.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetChainDescriptorResponse;
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
                    encode(_: _17.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetCodecDescriptorRequest;
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
                    encode(message: _17.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetCodecDescriptorResponse;
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
                    encode(_: _17.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetConfigurationDescriptorRequest;
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
                    encode(message: _17.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetConfigurationDescriptorResponse;
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
                    encode(_: _17.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetQueryServicesDescriptorRequest;
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
                    encode(message: _17.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetQueryServicesDescriptorResponse;
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
                    encode(_: _17.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetTxDescriptorRequest;
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
                    encode(message: _17.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetTxDescriptorResponse;
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
                    encode(message: _17.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryServicesDescriptor;
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
                    encode(message: _17.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryServiceDescriptor;
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
                    encode(message: _17.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryMethodDescriptor;
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
                encode(message: _18.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Coin;
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
                encode(message: _18.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.DecCoin;
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
                encode(message: _18.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.IntProto;
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
                encode(message: _18.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.DecProto;
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
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _20.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.LegacyAminoPubKey;
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
                encode(message: _21.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.PubKey;
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
                encode(message: _21.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.PrivKey;
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
                encode(message: _22.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.PubKey;
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
                encode(message: _22.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.PrivKey;
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
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _23.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.BIP44Params;
                    fromPartial(object: Partial<_23.BIP44Params>): _23.BIP44Params;
                    fromAmino(object: _23.BIP44ParamsAmino): _23.BIP44Params;
                    toAmino(message: _23.BIP44Params): _23.BIP44ParamsAmino;
                    fromAminoMsg(object: _23.BIP44ParamsAminoMsg): _23.BIP44Params;
                    toAminoMsg(message: _23.BIP44Params): _23.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _23.BIP44ParamsProtoMsg): _23.BIP44Params;
                    toProto(message: _23.BIP44Params): Uint8Array;
                    toProtoMsg(message: _23.BIP44Params): _23.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _24.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Record;
                    fromPartial(object: Partial<_24.Record>): _24.Record;
                    fromAmino(object: _24.RecordAmino): _24.Record;
                    toAmino(message: _24.Record): _24.RecordAmino;
                    fromAminoMsg(object: _24.RecordAminoMsg): _24.Record;
                    toAminoMsg(message: _24.Record): _24.RecordAminoMsg;
                    fromProtoMsg(message: _24.RecordProtoMsg): _24.Record;
                    toProto(message: _24.Record): Uint8Array;
                    toProtoMsg(message: _24.Record): _24.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _24.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Record_Local;
                    fromPartial(object: Partial<_24.Record_Local>): _24.Record_Local;
                    fromAmino(object: _24.Record_LocalAmino): _24.Record_Local;
                    toAmino(message: _24.Record_Local): _24.Record_LocalAmino;
                    fromAminoMsg(object: _24.Record_LocalAminoMsg): _24.Record_Local;
                    toAminoMsg(message: _24.Record_Local): _24.Record_LocalAminoMsg;
                    fromProtoMsg(message: _24.Record_LocalProtoMsg): _24.Record_Local;
                    toProto(message: _24.Record_Local): Uint8Array;
                    toProtoMsg(message: _24.Record_Local): _24.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _24.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Record_Ledger;
                    fromPartial(object: Partial<_24.Record_Ledger>): _24.Record_Ledger;
                    fromAmino(object: _24.Record_LedgerAmino): _24.Record_Ledger;
                    toAmino(message: _24.Record_Ledger): _24.Record_LedgerAmino;
                    fromAminoMsg(object: _24.Record_LedgerAminoMsg): _24.Record_Ledger;
                    toAminoMsg(message: _24.Record_Ledger): _24.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _24.Record_LedgerProtoMsg): _24.Record_Ledger;
                    toProto(message: _24.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _24.Record_Ledger): _24.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _24.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Record_Multi;
                    fromPartial(_: Partial<_24.Record_Multi>): _24.Record_Multi;
                    fromAmino(_: _24.Record_MultiAmino): _24.Record_Multi;
                    toAmino(_: _24.Record_Multi): _24.Record_MultiAmino;
                    fromAminoMsg(object: _24.Record_MultiAminoMsg): _24.Record_Multi;
                    toAminoMsg(message: _24.Record_Multi): _24.Record_MultiAminoMsg;
                    fromProtoMsg(message: _24.Record_MultiProtoMsg): _24.Record_Multi;
                    toProto(message: _24.Record_Multi): Uint8Array;
                    toProtoMsg(message: _24.Record_Multi): _24.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _24.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Record_Offline;
                    fromPartial(_: Partial<_24.Record_Offline>): _24.Record_Offline;
                    fromAmino(_: _24.Record_OfflineAmino): _24.Record_Offline;
                    toAmino(_: _24.Record_Offline): _24.Record_OfflineAmino;
                    fromAminoMsg(object: _24.Record_OfflineAminoMsg): _24.Record_Offline;
                    toAminoMsg(message: _24.Record_Offline): _24.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _24.Record_OfflineProtoMsg): _24.Record_Offline;
                    toProto(message: _24.Record_Offline): Uint8Array;
                    toProtoMsg(message: _24.Record_Offline): _24.Record_OfflineProtoMsg;
                };
            };
        }
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _224.MsgClientImpl;
            QueryClientImpl: typeof _216.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _27.QueryParamsRequest): Promise<_27.QueryParamsResponse>;
                validatorOutstandingRewards(request: _27.QueryValidatorOutstandingRewardsRequest): Promise<_27.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _27.QueryValidatorCommissionRequest): Promise<_27.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _27.QueryValidatorSlashesRequest): Promise<_27.QueryValidatorSlashesResponse>;
                delegationRewards(request: _27.QueryDelegationRewardsRequest): Promise<_27.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _27.QueryDelegationTotalRewardsRequest): Promise<_27.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _27.QueryDelegatorValidatorsRequest): Promise<_27.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _27.QueryDelegatorWithdrawAddressRequest): Promise<_27.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _27.QueryCommunityPoolRequest): Promise<_27.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _206.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _28.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _28.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _28.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _28.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _28.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _28.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _28.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _28.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _28.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _28.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _28.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _28.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _28.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _28.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _28.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _28.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _28.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _28.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _28.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _28.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _28.MsgSetWithdrawAddress) => _28.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _28.MsgSetWithdrawAddressAmino) => _28.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _28.MsgWithdrawDelegatorReward) => _28.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _28.MsgWithdrawDelegatorRewardAmino) => _28.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _28.MsgWithdrawValidatorCommission) => _28.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _28.MsgWithdrawValidatorCommissionAmino) => _28.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _28.MsgFundCommunityPool) => _28.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _28.MsgFundCommunityPoolAmino) => _28.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _28.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_28.MsgSetWithdrawAddress>): _28.MsgSetWithdrawAddress;
                fromAmino(object: _28.MsgSetWithdrawAddressAmino): _28.MsgSetWithdrawAddress;
                toAmino(message: _28.MsgSetWithdrawAddress): _28.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _28.MsgSetWithdrawAddressAminoMsg): _28.MsgSetWithdrawAddress;
                toAminoMsg(message: _28.MsgSetWithdrawAddress): _28.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _28.MsgSetWithdrawAddressProtoMsg): _28.MsgSetWithdrawAddress;
                toProto(message: _28.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _28.MsgSetWithdrawAddress): _28.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _28.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_28.MsgSetWithdrawAddressResponse>): _28.MsgSetWithdrawAddressResponse;
                fromAmino(_: _28.MsgSetWithdrawAddressResponseAmino): _28.MsgSetWithdrawAddressResponse;
                toAmino(_: _28.MsgSetWithdrawAddressResponse): _28.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _28.MsgSetWithdrawAddressResponseAminoMsg): _28.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _28.MsgSetWithdrawAddressResponse): _28.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _28.MsgSetWithdrawAddressResponseProtoMsg): _28.MsgSetWithdrawAddressResponse;
                toProto(message: _28.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _28.MsgSetWithdrawAddressResponse): _28.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _28.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_28.MsgWithdrawDelegatorReward>): _28.MsgWithdrawDelegatorReward;
                fromAmino(object: _28.MsgWithdrawDelegatorRewardAmino): _28.MsgWithdrawDelegatorReward;
                toAmino(message: _28.MsgWithdrawDelegatorReward): _28.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _28.MsgWithdrawDelegatorRewardAminoMsg): _28.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _28.MsgWithdrawDelegatorReward): _28.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _28.MsgWithdrawDelegatorRewardProtoMsg): _28.MsgWithdrawDelegatorReward;
                toProto(message: _28.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _28.MsgWithdrawDelegatorReward): _28.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(_: _28.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_28.MsgWithdrawDelegatorRewardResponse>): _28.MsgWithdrawDelegatorRewardResponse;
                fromAmino(_: _28.MsgWithdrawDelegatorRewardResponseAmino): _28.MsgWithdrawDelegatorRewardResponse;
                toAmino(_: _28.MsgWithdrawDelegatorRewardResponse): _28.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _28.MsgWithdrawDelegatorRewardResponseAminoMsg): _28.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _28.MsgWithdrawDelegatorRewardResponse): _28.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _28.MsgWithdrawDelegatorRewardResponseProtoMsg): _28.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _28.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _28.MsgWithdrawDelegatorRewardResponse): _28.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _28.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_28.MsgWithdrawValidatorCommission>): _28.MsgWithdrawValidatorCommission;
                fromAmino(object: _28.MsgWithdrawValidatorCommissionAmino): _28.MsgWithdrawValidatorCommission;
                toAmino(message: _28.MsgWithdrawValidatorCommission): _28.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _28.MsgWithdrawValidatorCommissionAminoMsg): _28.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _28.MsgWithdrawValidatorCommission): _28.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _28.MsgWithdrawValidatorCommissionProtoMsg): _28.MsgWithdrawValidatorCommission;
                toProto(message: _28.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _28.MsgWithdrawValidatorCommission): _28.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(_: _28.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_28.MsgWithdrawValidatorCommissionResponse>): _28.MsgWithdrawValidatorCommissionResponse;
                fromAmino(_: _28.MsgWithdrawValidatorCommissionResponseAmino): _28.MsgWithdrawValidatorCommissionResponse;
                toAmino(_: _28.MsgWithdrawValidatorCommissionResponse): _28.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _28.MsgWithdrawValidatorCommissionResponseAminoMsg): _28.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _28.MsgWithdrawValidatorCommissionResponse): _28.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _28.MsgWithdrawValidatorCommissionResponseProtoMsg): _28.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _28.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _28.MsgWithdrawValidatorCommissionResponse): _28.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _28.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgFundCommunityPool;
                fromPartial(object: Partial<_28.MsgFundCommunityPool>): _28.MsgFundCommunityPool;
                fromAmino(object: _28.MsgFundCommunityPoolAmino): _28.MsgFundCommunityPool;
                toAmino(message: _28.MsgFundCommunityPool): _28.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _28.MsgFundCommunityPoolAminoMsg): _28.MsgFundCommunityPool;
                toAminoMsg(message: _28.MsgFundCommunityPool): _28.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _28.MsgFundCommunityPoolProtoMsg): _28.MsgFundCommunityPool;
                toProto(message: _28.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _28.MsgFundCommunityPool): _28.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _28.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_28.MsgFundCommunityPoolResponse>): _28.MsgFundCommunityPoolResponse;
                fromAmino(_: _28.MsgFundCommunityPoolResponseAmino): _28.MsgFundCommunityPoolResponse;
                toAmino(_: _28.MsgFundCommunityPoolResponse): _28.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _28.MsgFundCommunityPoolResponseAminoMsg): _28.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _28.MsgFundCommunityPoolResponse): _28.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _28.MsgFundCommunityPoolResponseProtoMsg): _28.MsgFundCommunityPoolResponse;
                toProto(message: _28.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _28.MsgFundCommunityPoolResponse): _28.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _27.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryParamsRequest;
                fromPartial(_: Partial<_27.QueryParamsRequest>): _27.QueryParamsRequest;
                fromAmino(_: _27.QueryParamsRequestAmino): _27.QueryParamsRequest;
                toAmino(_: _27.QueryParamsRequest): _27.QueryParamsRequestAmino;
                fromAminoMsg(object: _27.QueryParamsRequestAminoMsg): _27.QueryParamsRequest;
                toAminoMsg(message: _27.QueryParamsRequest): _27.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _27.QueryParamsRequestProtoMsg): _27.QueryParamsRequest;
                toProto(message: _27.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _27.QueryParamsRequest): _27.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _27.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryParamsResponse;
                fromPartial(object: Partial<_27.QueryParamsResponse>): _27.QueryParamsResponse;
                fromAmino(object: _27.QueryParamsResponseAmino): _27.QueryParamsResponse;
                toAmino(message: _27.QueryParamsResponse): _27.QueryParamsResponseAmino;
                fromAminoMsg(object: _27.QueryParamsResponseAminoMsg): _27.QueryParamsResponse;
                toAminoMsg(message: _27.QueryParamsResponse): _27.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _27.QueryParamsResponseProtoMsg): _27.QueryParamsResponse;
                toProto(message: _27.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _27.QueryParamsResponse): _27.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _27.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_27.QueryValidatorOutstandingRewardsRequest>): _27.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _27.QueryValidatorOutstandingRewardsRequestAmino): _27.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _27.QueryValidatorOutstandingRewardsRequest): _27.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _27.QueryValidatorOutstandingRewardsRequestAminoMsg): _27.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _27.QueryValidatorOutstandingRewardsRequest): _27.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _27.QueryValidatorOutstandingRewardsRequestProtoMsg): _27.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _27.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _27.QueryValidatorOutstandingRewardsRequest): _27.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _27.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_27.QueryValidatorOutstandingRewardsResponse>): _27.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _27.QueryValidatorOutstandingRewardsResponseAmino): _27.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _27.QueryValidatorOutstandingRewardsResponse): _27.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _27.QueryValidatorOutstandingRewardsResponseAminoMsg): _27.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _27.QueryValidatorOutstandingRewardsResponse): _27.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _27.QueryValidatorOutstandingRewardsResponseProtoMsg): _27.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _27.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _27.QueryValidatorOutstandingRewardsResponse): _27.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _27.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_27.QueryValidatorCommissionRequest>): _27.QueryValidatorCommissionRequest;
                fromAmino(object: _27.QueryValidatorCommissionRequestAmino): _27.QueryValidatorCommissionRequest;
                toAmino(message: _27.QueryValidatorCommissionRequest): _27.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _27.QueryValidatorCommissionRequestAminoMsg): _27.QueryValidatorCommissionRequest;
                toAminoMsg(message: _27.QueryValidatorCommissionRequest): _27.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _27.QueryValidatorCommissionRequestProtoMsg): _27.QueryValidatorCommissionRequest;
                toProto(message: _27.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _27.QueryValidatorCommissionRequest): _27.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _27.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_27.QueryValidatorCommissionResponse>): _27.QueryValidatorCommissionResponse;
                fromAmino(object: _27.QueryValidatorCommissionResponseAmino): _27.QueryValidatorCommissionResponse;
                toAmino(message: _27.QueryValidatorCommissionResponse): _27.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _27.QueryValidatorCommissionResponseAminoMsg): _27.QueryValidatorCommissionResponse;
                toAminoMsg(message: _27.QueryValidatorCommissionResponse): _27.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _27.QueryValidatorCommissionResponseProtoMsg): _27.QueryValidatorCommissionResponse;
                toProto(message: _27.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _27.QueryValidatorCommissionResponse): _27.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _27.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_27.QueryValidatorSlashesRequest>): _27.QueryValidatorSlashesRequest;
                fromAmino(object: _27.QueryValidatorSlashesRequestAmino): _27.QueryValidatorSlashesRequest;
                toAmino(message: _27.QueryValidatorSlashesRequest): _27.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _27.QueryValidatorSlashesRequestAminoMsg): _27.QueryValidatorSlashesRequest;
                toAminoMsg(message: _27.QueryValidatorSlashesRequest): _27.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _27.QueryValidatorSlashesRequestProtoMsg): _27.QueryValidatorSlashesRequest;
                toProto(message: _27.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _27.QueryValidatorSlashesRequest): _27.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _27.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_27.QueryValidatorSlashesResponse>): _27.QueryValidatorSlashesResponse;
                fromAmino(object: _27.QueryValidatorSlashesResponseAmino): _27.QueryValidatorSlashesResponse;
                toAmino(message: _27.QueryValidatorSlashesResponse): _27.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _27.QueryValidatorSlashesResponseAminoMsg): _27.QueryValidatorSlashesResponse;
                toAminoMsg(message: _27.QueryValidatorSlashesResponse): _27.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _27.QueryValidatorSlashesResponseProtoMsg): _27.QueryValidatorSlashesResponse;
                toProto(message: _27.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _27.QueryValidatorSlashesResponse): _27.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _27.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_27.QueryDelegationRewardsRequest>): _27.QueryDelegationRewardsRequest;
                fromAmino(object: _27.QueryDelegationRewardsRequestAmino): _27.QueryDelegationRewardsRequest;
                toAmino(message: _27.QueryDelegationRewardsRequest): _27.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _27.QueryDelegationRewardsRequestAminoMsg): _27.QueryDelegationRewardsRequest;
                toAminoMsg(message: _27.QueryDelegationRewardsRequest): _27.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _27.QueryDelegationRewardsRequestProtoMsg): _27.QueryDelegationRewardsRequest;
                toProto(message: _27.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _27.QueryDelegationRewardsRequest): _27.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _27.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_27.QueryDelegationRewardsResponse>): _27.QueryDelegationRewardsResponse;
                fromAmino(object: _27.QueryDelegationRewardsResponseAmino): _27.QueryDelegationRewardsResponse;
                toAmino(message: _27.QueryDelegationRewardsResponse): _27.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _27.QueryDelegationRewardsResponseAminoMsg): _27.QueryDelegationRewardsResponse;
                toAminoMsg(message: _27.QueryDelegationRewardsResponse): _27.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _27.QueryDelegationRewardsResponseProtoMsg): _27.QueryDelegationRewardsResponse;
                toProto(message: _27.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _27.QueryDelegationRewardsResponse): _27.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _27.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_27.QueryDelegationTotalRewardsRequest>): _27.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _27.QueryDelegationTotalRewardsRequestAmino): _27.QueryDelegationTotalRewardsRequest;
                toAmino(message: _27.QueryDelegationTotalRewardsRequest): _27.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _27.QueryDelegationTotalRewardsRequestAminoMsg): _27.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _27.QueryDelegationTotalRewardsRequest): _27.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _27.QueryDelegationTotalRewardsRequestProtoMsg): _27.QueryDelegationTotalRewardsRequest;
                toProto(message: _27.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _27.QueryDelegationTotalRewardsRequest): _27.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _27.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_27.QueryDelegationTotalRewardsResponse>): _27.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _27.QueryDelegationTotalRewardsResponseAmino): _27.QueryDelegationTotalRewardsResponse;
                toAmino(message: _27.QueryDelegationTotalRewardsResponse): _27.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _27.QueryDelegationTotalRewardsResponseAminoMsg): _27.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _27.QueryDelegationTotalRewardsResponse): _27.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _27.QueryDelegationTotalRewardsResponseProtoMsg): _27.QueryDelegationTotalRewardsResponse;
                toProto(message: _27.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _27.QueryDelegationTotalRewardsResponse): _27.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _27.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_27.QueryDelegatorValidatorsRequest>): _27.QueryDelegatorValidatorsRequest;
                fromAmino(object: _27.QueryDelegatorValidatorsRequestAmino): _27.QueryDelegatorValidatorsRequest;
                toAmino(message: _27.QueryDelegatorValidatorsRequest): _27.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _27.QueryDelegatorValidatorsRequestAminoMsg): _27.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _27.QueryDelegatorValidatorsRequest): _27.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _27.QueryDelegatorValidatorsRequestProtoMsg): _27.QueryDelegatorValidatorsRequest;
                toProto(message: _27.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _27.QueryDelegatorValidatorsRequest): _27.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _27.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_27.QueryDelegatorValidatorsResponse>): _27.QueryDelegatorValidatorsResponse;
                fromAmino(object: _27.QueryDelegatorValidatorsResponseAmino): _27.QueryDelegatorValidatorsResponse;
                toAmino(message: _27.QueryDelegatorValidatorsResponse): _27.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _27.QueryDelegatorValidatorsResponseAminoMsg): _27.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _27.QueryDelegatorValidatorsResponse): _27.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _27.QueryDelegatorValidatorsResponseProtoMsg): _27.QueryDelegatorValidatorsResponse;
                toProto(message: _27.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _27.QueryDelegatorValidatorsResponse): _27.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _27.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_27.QueryDelegatorWithdrawAddressRequest>): _27.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _27.QueryDelegatorWithdrawAddressRequestAmino): _27.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _27.QueryDelegatorWithdrawAddressRequest): _27.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _27.QueryDelegatorWithdrawAddressRequestAminoMsg): _27.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _27.QueryDelegatorWithdrawAddressRequest): _27.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _27.QueryDelegatorWithdrawAddressRequestProtoMsg): _27.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _27.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _27.QueryDelegatorWithdrawAddressRequest): _27.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _27.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_27.QueryDelegatorWithdrawAddressResponse>): _27.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _27.QueryDelegatorWithdrawAddressResponseAmino): _27.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _27.QueryDelegatorWithdrawAddressResponse): _27.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _27.QueryDelegatorWithdrawAddressResponseAminoMsg): _27.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _27.QueryDelegatorWithdrawAddressResponse): _27.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _27.QueryDelegatorWithdrawAddressResponseProtoMsg): _27.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _27.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _27.QueryDelegatorWithdrawAddressResponse): _27.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _27.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_27.QueryCommunityPoolRequest>): _27.QueryCommunityPoolRequest;
                fromAmino(_: _27.QueryCommunityPoolRequestAmino): _27.QueryCommunityPoolRequest;
                toAmino(_: _27.QueryCommunityPoolRequest): _27.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _27.QueryCommunityPoolRequestAminoMsg): _27.QueryCommunityPoolRequest;
                toAminoMsg(message: _27.QueryCommunityPoolRequest): _27.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _27.QueryCommunityPoolRequestProtoMsg): _27.QueryCommunityPoolRequest;
                toProto(message: _27.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _27.QueryCommunityPoolRequest): _27.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _27.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_27.QueryCommunityPoolResponse>): _27.QueryCommunityPoolResponse;
                fromAmino(object: _27.QueryCommunityPoolResponseAmino): _27.QueryCommunityPoolResponse;
                toAmino(message: _27.QueryCommunityPoolResponse): _27.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _27.QueryCommunityPoolResponseAminoMsg): _27.QueryCommunityPoolResponse;
                toAminoMsg(message: _27.QueryCommunityPoolResponse): _27.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _27.QueryCommunityPoolResponseProtoMsg): _27.QueryCommunityPoolResponse;
                toProto(message: _27.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _27.QueryCommunityPoolResponse): _27.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _26.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_26.DelegatorWithdrawInfo>): _26.DelegatorWithdrawInfo;
                fromAmino(object: _26.DelegatorWithdrawInfoAmino): _26.DelegatorWithdrawInfo;
                toAmino(message: _26.DelegatorWithdrawInfo): _26.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _26.DelegatorWithdrawInfoAminoMsg): _26.DelegatorWithdrawInfo;
                toAminoMsg(message: _26.DelegatorWithdrawInfo): _26.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _26.DelegatorWithdrawInfoProtoMsg): _26.DelegatorWithdrawInfo;
                toProto(message: _26.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _26.DelegatorWithdrawInfo): _26.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _26.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_26.ValidatorOutstandingRewardsRecord>): _26.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _26.ValidatorOutstandingRewardsRecordAmino): _26.ValidatorOutstandingRewardsRecord;
                toAmino(message: _26.ValidatorOutstandingRewardsRecord): _26.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _26.ValidatorOutstandingRewardsRecordAminoMsg): _26.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _26.ValidatorOutstandingRewardsRecord): _26.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _26.ValidatorOutstandingRewardsRecordProtoMsg): _26.ValidatorOutstandingRewardsRecord;
                toProto(message: _26.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _26.ValidatorOutstandingRewardsRecord): _26.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _26.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_26.ValidatorAccumulatedCommissionRecord>): _26.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _26.ValidatorAccumulatedCommissionRecordAmino): _26.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _26.ValidatorAccumulatedCommissionRecord): _26.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _26.ValidatorAccumulatedCommissionRecordAminoMsg): _26.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _26.ValidatorAccumulatedCommissionRecord): _26.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _26.ValidatorAccumulatedCommissionRecordProtoMsg): _26.ValidatorAccumulatedCommissionRecord;
                toProto(message: _26.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _26.ValidatorAccumulatedCommissionRecord): _26.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _26.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_26.ValidatorHistoricalRewardsRecord>): _26.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _26.ValidatorHistoricalRewardsRecordAmino): _26.ValidatorHistoricalRewardsRecord;
                toAmino(message: _26.ValidatorHistoricalRewardsRecord): _26.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _26.ValidatorHistoricalRewardsRecordAminoMsg): _26.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _26.ValidatorHistoricalRewardsRecord): _26.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _26.ValidatorHistoricalRewardsRecordProtoMsg): _26.ValidatorHistoricalRewardsRecord;
                toProto(message: _26.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _26.ValidatorHistoricalRewardsRecord): _26.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _26.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_26.ValidatorCurrentRewardsRecord>): _26.ValidatorCurrentRewardsRecord;
                fromAmino(object: _26.ValidatorCurrentRewardsRecordAmino): _26.ValidatorCurrentRewardsRecord;
                toAmino(message: _26.ValidatorCurrentRewardsRecord): _26.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _26.ValidatorCurrentRewardsRecordAminoMsg): _26.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _26.ValidatorCurrentRewardsRecord): _26.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _26.ValidatorCurrentRewardsRecordProtoMsg): _26.ValidatorCurrentRewardsRecord;
                toProto(message: _26.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _26.ValidatorCurrentRewardsRecord): _26.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _26.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_26.DelegatorStartingInfoRecord>): _26.DelegatorStartingInfoRecord;
                fromAmino(object: _26.DelegatorStartingInfoRecordAmino): _26.DelegatorStartingInfoRecord;
                toAmino(message: _26.DelegatorStartingInfoRecord): _26.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _26.DelegatorStartingInfoRecordAminoMsg): _26.DelegatorStartingInfoRecord;
                toAminoMsg(message: _26.DelegatorStartingInfoRecord): _26.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _26.DelegatorStartingInfoRecordProtoMsg): _26.DelegatorStartingInfoRecord;
                toProto(message: _26.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _26.DelegatorStartingInfoRecord): _26.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _26.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_26.ValidatorSlashEventRecord>): _26.ValidatorSlashEventRecord;
                fromAmino(object: _26.ValidatorSlashEventRecordAmino): _26.ValidatorSlashEventRecord;
                toAmino(message: _26.ValidatorSlashEventRecord): _26.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _26.ValidatorSlashEventRecordAminoMsg): _26.ValidatorSlashEventRecord;
                toAminoMsg(message: _26.ValidatorSlashEventRecord): _26.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _26.ValidatorSlashEventRecordProtoMsg): _26.ValidatorSlashEventRecord;
                toProto(message: _26.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _26.ValidatorSlashEventRecord): _26.ValidatorSlashEventRecordProtoMsg;
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
            Params: {
                typeUrl: string;
                encode(message: _25.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Params;
                fromPartial(object: Partial<_25.Params>): _25.Params;
                fromAmino(object: _25.ParamsAmino): _25.Params;
                toAmino(message: _25.Params): _25.ParamsAmino;
                fromAminoMsg(object: _25.ParamsAminoMsg): _25.Params;
                toAminoMsg(message: _25.Params): _25.ParamsAminoMsg;
                fromProtoMsg(message: _25.ParamsProtoMsg): _25.Params;
                toProto(message: _25.Params): Uint8Array;
                toProtoMsg(message: _25.Params): _25.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _25.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_25.ValidatorHistoricalRewards>): _25.ValidatorHistoricalRewards;
                fromAmino(object: _25.ValidatorHistoricalRewardsAmino): _25.ValidatorHistoricalRewards;
                toAmino(message: _25.ValidatorHistoricalRewards): _25.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _25.ValidatorHistoricalRewardsAminoMsg): _25.ValidatorHistoricalRewards;
                toAminoMsg(message: _25.ValidatorHistoricalRewards): _25.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _25.ValidatorHistoricalRewardsProtoMsg): _25.ValidatorHistoricalRewards;
                toProto(message: _25.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _25.ValidatorHistoricalRewards): _25.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _25.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ValidatorCurrentRewards;
                fromPartial(object: Partial<_25.ValidatorCurrentRewards>): _25.ValidatorCurrentRewards;
                fromAmino(object: _25.ValidatorCurrentRewardsAmino): _25.ValidatorCurrentRewards;
                toAmino(message: _25.ValidatorCurrentRewards): _25.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _25.ValidatorCurrentRewardsAminoMsg): _25.ValidatorCurrentRewards;
                toAminoMsg(message: _25.ValidatorCurrentRewards): _25.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _25.ValidatorCurrentRewardsProtoMsg): _25.ValidatorCurrentRewards;
                toProto(message: _25.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _25.ValidatorCurrentRewards): _25.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _25.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_25.ValidatorAccumulatedCommission>): _25.ValidatorAccumulatedCommission;
                fromAmino(object: _25.ValidatorAccumulatedCommissionAmino): _25.ValidatorAccumulatedCommission;
                toAmino(message: _25.ValidatorAccumulatedCommission): _25.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _25.ValidatorAccumulatedCommissionAminoMsg): _25.ValidatorAccumulatedCommission;
                toAminoMsg(message: _25.ValidatorAccumulatedCommission): _25.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _25.ValidatorAccumulatedCommissionProtoMsg): _25.ValidatorAccumulatedCommission;
                toProto(message: _25.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _25.ValidatorAccumulatedCommission): _25.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _25.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_25.ValidatorOutstandingRewards>): _25.ValidatorOutstandingRewards;
                fromAmino(object: _25.ValidatorOutstandingRewardsAmino): _25.ValidatorOutstandingRewards;
                toAmino(message: _25.ValidatorOutstandingRewards): _25.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _25.ValidatorOutstandingRewardsAminoMsg): _25.ValidatorOutstandingRewards;
                toAminoMsg(message: _25.ValidatorOutstandingRewards): _25.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _25.ValidatorOutstandingRewardsProtoMsg): _25.ValidatorOutstandingRewards;
                toProto(message: _25.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _25.ValidatorOutstandingRewards): _25.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _25.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ValidatorSlashEvent;
                fromPartial(object: Partial<_25.ValidatorSlashEvent>): _25.ValidatorSlashEvent;
                fromAmino(object: _25.ValidatorSlashEventAmino): _25.ValidatorSlashEvent;
                toAmino(message: _25.ValidatorSlashEvent): _25.ValidatorSlashEventAmino;
                fromAminoMsg(object: _25.ValidatorSlashEventAminoMsg): _25.ValidatorSlashEvent;
                toAminoMsg(message: _25.ValidatorSlashEvent): _25.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _25.ValidatorSlashEventProtoMsg): _25.ValidatorSlashEvent;
                toProto(message: _25.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _25.ValidatorSlashEvent): _25.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _25.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ValidatorSlashEvents;
                fromPartial(object: Partial<_25.ValidatorSlashEvents>): _25.ValidatorSlashEvents;
                fromAmino(object: _25.ValidatorSlashEventsAmino): _25.ValidatorSlashEvents;
                toAmino(message: _25.ValidatorSlashEvents): _25.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _25.ValidatorSlashEventsAminoMsg): _25.ValidatorSlashEvents;
                toAminoMsg(message: _25.ValidatorSlashEvents): _25.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _25.ValidatorSlashEventsProtoMsg): _25.ValidatorSlashEvents;
                toProto(message: _25.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _25.ValidatorSlashEvents): _25.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _25.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.FeePool;
                fromPartial(object: Partial<_25.FeePool>): _25.FeePool;
                fromAmino(object: _25.FeePoolAmino): _25.FeePool;
                toAmino(message: _25.FeePool): _25.FeePoolAmino;
                fromAminoMsg(object: _25.FeePoolAminoMsg): _25.FeePool;
                toAminoMsg(message: _25.FeePool): _25.FeePoolAminoMsg;
                fromProtoMsg(message: _25.FeePoolProtoMsg): _25.FeePool;
                toProto(message: _25.FeePool): Uint8Array;
                toProtoMsg(message: _25.FeePool): _25.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _25.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_25.CommunityPoolSpendProposal>): _25.CommunityPoolSpendProposal;
                fromAmino(object: _25.CommunityPoolSpendProposalAmino): _25.CommunityPoolSpendProposal;
                toAmino(message: _25.CommunityPoolSpendProposal): _25.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _25.CommunityPoolSpendProposalAminoMsg): _25.CommunityPoolSpendProposal;
                toAminoMsg(message: _25.CommunityPoolSpendProposal): _25.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _25.CommunityPoolSpendProposalProtoMsg): _25.CommunityPoolSpendProposal;
                toProto(message: _25.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _25.CommunityPoolSpendProposal): _25.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _25.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.DelegatorStartingInfo;
                fromPartial(object: Partial<_25.DelegatorStartingInfo>): _25.DelegatorStartingInfo;
                fromAmino(object: _25.DelegatorStartingInfoAmino): _25.DelegatorStartingInfo;
                toAmino(message: _25.DelegatorStartingInfo): _25.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _25.DelegatorStartingInfoAminoMsg): _25.DelegatorStartingInfo;
                toAminoMsg(message: _25.DelegatorStartingInfo): _25.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _25.DelegatorStartingInfoProtoMsg): _25.DelegatorStartingInfo;
                toProto(message: _25.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _25.DelegatorStartingInfo): _25.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _25.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.DelegationDelegatorReward;
                fromPartial(object: Partial<_25.DelegationDelegatorReward>): _25.DelegationDelegatorReward;
                fromAmino(object: _25.DelegationDelegatorRewardAmino): _25.DelegationDelegatorReward;
                toAmino(message: _25.DelegationDelegatorReward): _25.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _25.DelegationDelegatorRewardAminoMsg): _25.DelegationDelegatorReward;
                toAminoMsg(message: _25.DelegationDelegatorReward): _25.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _25.DelegationDelegatorRewardProtoMsg): _25.DelegationDelegatorReward;
                toProto(message: _25.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _25.DelegationDelegatorReward): _25.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _25.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_25.CommunityPoolSpendProposalWithDeposit>): _25.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _25.CommunityPoolSpendProposalWithDepositAmino): _25.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _25.CommunityPoolSpendProposalWithDeposit): _25.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _25.CommunityPoolSpendProposalWithDepositAminoMsg): _25.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _25.CommunityPoolSpendProposalWithDeposit): _25.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _25.CommunityPoolSpendProposalWithDepositProtoMsg): _25.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _25.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _25.CommunityPoolSpendProposalWithDeposit): _25.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _225.MsgClientImpl;
            QueryClientImpl: typeof _217.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _31.QueryProposalRequest): Promise<_31.QueryProposalResponse>;
                proposals(request: _31.QueryProposalsRequest): Promise<_31.QueryProposalsResponse>;
                vote(request: _31.QueryVoteRequest): Promise<_31.QueryVoteResponse>;
                votes(request: _31.QueryVotesRequest): Promise<_31.QueryVotesResponse>;
                params(request: _31.QueryParamsRequest): Promise<_31.QueryParamsResponse>;
                deposit(request: _31.QueryDepositRequest): Promise<_31.QueryDepositResponse>;
                deposits(request: _31.QueryDepositsRequest): Promise<_31.QueryDepositsResponse>;
                tallyResult(request: _31.QueryTallyResultRequest): Promise<_31.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _207.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _32.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _32.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _32.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _32.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _32.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _32.MsgSubmitProposal;
                    };
                    vote(value: _32.MsgVote): {
                        typeUrl: string;
                        value: _32.MsgVote;
                    };
                    voteWeighted(value: _32.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _32.MsgVoteWeighted;
                    };
                    deposit(value: _32.MsgDeposit): {
                        typeUrl: string;
                        value: _32.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _32.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _32.MsgSubmitProposal;
                    };
                    vote(value: _32.MsgVote): {
                        typeUrl: string;
                        value: _32.MsgVote;
                    };
                    voteWeighted(value: _32.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _32.MsgVoteWeighted;
                    };
                    deposit(value: _32.MsgDeposit): {
                        typeUrl: string;
                        value: _32.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _32.MsgSubmitProposal) => _32.MsgSubmitProposalAmino;
                    fromAmino: (object: _32.MsgSubmitProposalAmino) => _32.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _32.MsgVote) => _32.MsgVoteAmino;
                    fromAmino: (object: _32.MsgVoteAmino) => _32.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _32.MsgVoteWeighted) => _32.MsgVoteWeightedAmino;
                    fromAmino: (object: _32.MsgVoteWeightedAmino) => _32.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _32.MsgDeposit) => _32.MsgDepositAmino;
                    fromAmino: (object: _32.MsgDepositAmino) => _32.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _32.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgSubmitProposal;
                fromPartial(object: Partial<_32.MsgSubmitProposal>): _32.MsgSubmitProposal;
                fromAmino(object: _32.MsgSubmitProposalAmino): _32.MsgSubmitProposal;
                toAmino(message: _32.MsgSubmitProposal): _32.MsgSubmitProposalAmino;
                fromAminoMsg(object: _32.MsgSubmitProposalAminoMsg): _32.MsgSubmitProposal;
                toAminoMsg(message: _32.MsgSubmitProposal): _32.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _32.MsgSubmitProposalProtoMsg): _32.MsgSubmitProposal;
                toProto(message: _32.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _32.MsgSubmitProposal): _32.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _32.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_32.MsgSubmitProposalResponse>): _32.MsgSubmitProposalResponse;
                fromAmino(object: _32.MsgSubmitProposalResponseAmino): _32.MsgSubmitProposalResponse;
                toAmino(message: _32.MsgSubmitProposalResponse): _32.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _32.MsgSubmitProposalResponseAminoMsg): _32.MsgSubmitProposalResponse;
                toAminoMsg(message: _32.MsgSubmitProposalResponse): _32.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _32.MsgSubmitProposalResponseProtoMsg): _32.MsgSubmitProposalResponse;
                toProto(message: _32.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _32.MsgSubmitProposalResponse): _32.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _32.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgVote;
                fromPartial(object: Partial<_32.MsgVote>): _32.MsgVote;
                fromAmino(object: _32.MsgVoteAmino): _32.MsgVote;
                toAmino(message: _32.MsgVote): _32.MsgVoteAmino;
                fromAminoMsg(object: _32.MsgVoteAminoMsg): _32.MsgVote;
                toAminoMsg(message: _32.MsgVote): _32.MsgVoteAminoMsg;
                fromProtoMsg(message: _32.MsgVoteProtoMsg): _32.MsgVote;
                toProto(message: _32.MsgVote): Uint8Array;
                toProtoMsg(message: _32.MsgVote): _32.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _32.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgVoteResponse;
                fromPartial(_: Partial<_32.MsgVoteResponse>): _32.MsgVoteResponse;
                fromAmino(_: _32.MsgVoteResponseAmino): _32.MsgVoteResponse;
                toAmino(_: _32.MsgVoteResponse): _32.MsgVoteResponseAmino;
                fromAminoMsg(object: _32.MsgVoteResponseAminoMsg): _32.MsgVoteResponse;
                toAminoMsg(message: _32.MsgVoteResponse): _32.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _32.MsgVoteResponseProtoMsg): _32.MsgVoteResponse;
                toProto(message: _32.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _32.MsgVoteResponse): _32.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _32.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgVoteWeighted;
                fromPartial(object: Partial<_32.MsgVoteWeighted>): _32.MsgVoteWeighted;
                fromAmino(object: _32.MsgVoteWeightedAmino): _32.MsgVoteWeighted;
                toAmino(message: _32.MsgVoteWeighted): _32.MsgVoteWeightedAmino;
                fromAminoMsg(object: _32.MsgVoteWeightedAminoMsg): _32.MsgVoteWeighted;
                toAminoMsg(message: _32.MsgVoteWeighted): _32.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _32.MsgVoteWeightedProtoMsg): _32.MsgVoteWeighted;
                toProto(message: _32.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _32.MsgVoteWeighted): _32.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _32.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_32.MsgVoteWeightedResponse>): _32.MsgVoteWeightedResponse;
                fromAmino(_: _32.MsgVoteWeightedResponseAmino): _32.MsgVoteWeightedResponse;
                toAmino(_: _32.MsgVoteWeightedResponse): _32.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _32.MsgVoteWeightedResponseAminoMsg): _32.MsgVoteWeightedResponse;
                toAminoMsg(message: _32.MsgVoteWeightedResponse): _32.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _32.MsgVoteWeightedResponseProtoMsg): _32.MsgVoteWeightedResponse;
                toProto(message: _32.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _32.MsgVoteWeightedResponse): _32.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _32.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgDeposit;
                fromPartial(object: Partial<_32.MsgDeposit>): _32.MsgDeposit;
                fromAmino(object: _32.MsgDepositAmino): _32.MsgDeposit;
                toAmino(message: _32.MsgDeposit): _32.MsgDepositAmino;
                fromAminoMsg(object: _32.MsgDepositAminoMsg): _32.MsgDeposit;
                toAminoMsg(message: _32.MsgDeposit): _32.MsgDepositAminoMsg;
                fromProtoMsg(message: _32.MsgDepositProtoMsg): _32.MsgDeposit;
                toProto(message: _32.MsgDeposit): Uint8Array;
                toProtoMsg(message: _32.MsgDeposit): _32.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _32.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgDepositResponse;
                fromPartial(_: Partial<_32.MsgDepositResponse>): _32.MsgDepositResponse;
                fromAmino(_: _32.MsgDepositResponseAmino): _32.MsgDepositResponse;
                toAmino(_: _32.MsgDepositResponse): _32.MsgDepositResponseAmino;
                fromAminoMsg(object: _32.MsgDepositResponseAminoMsg): _32.MsgDepositResponse;
                toAminoMsg(message: _32.MsgDepositResponse): _32.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _32.MsgDepositResponseProtoMsg): _32.MsgDepositResponse;
                toProto(message: _32.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _32.MsgDepositResponse): _32.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _30.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _31.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryProposalRequest;
                fromPartial(object: Partial<_31.QueryProposalRequest>): _31.QueryProposalRequest;
                fromAmino(object: _31.QueryProposalRequestAmino): _31.QueryProposalRequest;
                toAmino(message: _31.QueryProposalRequest): _31.QueryProposalRequestAmino;
                fromAminoMsg(object: _31.QueryProposalRequestAminoMsg): _31.QueryProposalRequest;
                toAminoMsg(message: _31.QueryProposalRequest): _31.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _31.QueryProposalRequestProtoMsg): _31.QueryProposalRequest;
                toProto(message: _31.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _31.QueryProposalRequest): _31.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _31.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryProposalResponse;
                fromPartial(object: Partial<_31.QueryProposalResponse>): _31.QueryProposalResponse;
                fromAmino(object: _31.QueryProposalResponseAmino): _31.QueryProposalResponse;
                toAmino(message: _31.QueryProposalResponse): _31.QueryProposalResponseAmino;
                fromAminoMsg(object: _31.QueryProposalResponseAminoMsg): _31.QueryProposalResponse;
                toAminoMsg(message: _31.QueryProposalResponse): _31.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _31.QueryProposalResponseProtoMsg): _31.QueryProposalResponse;
                toProto(message: _31.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _31.QueryProposalResponse): _31.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _31.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryProposalsRequest;
                fromPartial(object: Partial<_31.QueryProposalsRequest>): _31.QueryProposalsRequest;
                fromAmino(object: _31.QueryProposalsRequestAmino): _31.QueryProposalsRequest;
                toAmino(message: _31.QueryProposalsRequest): _31.QueryProposalsRequestAmino;
                fromAminoMsg(object: _31.QueryProposalsRequestAminoMsg): _31.QueryProposalsRequest;
                toAminoMsg(message: _31.QueryProposalsRequest): _31.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _31.QueryProposalsRequestProtoMsg): _31.QueryProposalsRequest;
                toProto(message: _31.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _31.QueryProposalsRequest): _31.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _31.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryProposalsResponse;
                fromPartial(object: Partial<_31.QueryProposalsResponse>): _31.QueryProposalsResponse;
                fromAmino(object: _31.QueryProposalsResponseAmino): _31.QueryProposalsResponse;
                toAmino(message: _31.QueryProposalsResponse): _31.QueryProposalsResponseAmino;
                fromAminoMsg(object: _31.QueryProposalsResponseAminoMsg): _31.QueryProposalsResponse;
                toAminoMsg(message: _31.QueryProposalsResponse): _31.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _31.QueryProposalsResponseProtoMsg): _31.QueryProposalsResponse;
                toProto(message: _31.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _31.QueryProposalsResponse): _31.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _31.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryVoteRequest;
                fromPartial(object: Partial<_31.QueryVoteRequest>): _31.QueryVoteRequest;
                fromAmino(object: _31.QueryVoteRequestAmino): _31.QueryVoteRequest;
                toAmino(message: _31.QueryVoteRequest): _31.QueryVoteRequestAmino;
                fromAminoMsg(object: _31.QueryVoteRequestAminoMsg): _31.QueryVoteRequest;
                toAminoMsg(message: _31.QueryVoteRequest): _31.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _31.QueryVoteRequestProtoMsg): _31.QueryVoteRequest;
                toProto(message: _31.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _31.QueryVoteRequest): _31.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _31.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryVoteResponse;
                fromPartial(object: Partial<_31.QueryVoteResponse>): _31.QueryVoteResponse;
                fromAmino(object: _31.QueryVoteResponseAmino): _31.QueryVoteResponse;
                toAmino(message: _31.QueryVoteResponse): _31.QueryVoteResponseAmino;
                fromAminoMsg(object: _31.QueryVoteResponseAminoMsg): _31.QueryVoteResponse;
                toAminoMsg(message: _31.QueryVoteResponse): _31.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _31.QueryVoteResponseProtoMsg): _31.QueryVoteResponse;
                toProto(message: _31.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _31.QueryVoteResponse): _31.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _31.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryVotesRequest;
                fromPartial(object: Partial<_31.QueryVotesRequest>): _31.QueryVotesRequest;
                fromAmino(object: _31.QueryVotesRequestAmino): _31.QueryVotesRequest;
                toAmino(message: _31.QueryVotesRequest): _31.QueryVotesRequestAmino;
                fromAminoMsg(object: _31.QueryVotesRequestAminoMsg): _31.QueryVotesRequest;
                toAminoMsg(message: _31.QueryVotesRequest): _31.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _31.QueryVotesRequestProtoMsg): _31.QueryVotesRequest;
                toProto(message: _31.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _31.QueryVotesRequest): _31.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _31.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryVotesResponse;
                fromPartial(object: Partial<_31.QueryVotesResponse>): _31.QueryVotesResponse;
                fromAmino(object: _31.QueryVotesResponseAmino): _31.QueryVotesResponse;
                toAmino(message: _31.QueryVotesResponse): _31.QueryVotesResponseAmino;
                fromAminoMsg(object: _31.QueryVotesResponseAminoMsg): _31.QueryVotesResponse;
                toAminoMsg(message: _31.QueryVotesResponse): _31.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _31.QueryVotesResponseProtoMsg): _31.QueryVotesResponse;
                toProto(message: _31.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _31.QueryVotesResponse): _31.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _31.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryParamsRequest;
                fromPartial(object: Partial<_31.QueryParamsRequest>): _31.QueryParamsRequest;
                fromAmino(object: _31.QueryParamsRequestAmino): _31.QueryParamsRequest;
                toAmino(message: _31.QueryParamsRequest): _31.QueryParamsRequestAmino;
                fromAminoMsg(object: _31.QueryParamsRequestAminoMsg): _31.QueryParamsRequest;
                toAminoMsg(message: _31.QueryParamsRequest): _31.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _31.QueryParamsRequestProtoMsg): _31.QueryParamsRequest;
                toProto(message: _31.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _31.QueryParamsRequest): _31.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _31.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryParamsResponse;
                fromPartial(object: Partial<_31.QueryParamsResponse>): _31.QueryParamsResponse;
                fromAmino(object: _31.QueryParamsResponseAmino): _31.QueryParamsResponse;
                toAmino(message: _31.QueryParamsResponse): _31.QueryParamsResponseAmino;
                fromAminoMsg(object: _31.QueryParamsResponseAminoMsg): _31.QueryParamsResponse;
                toAminoMsg(message: _31.QueryParamsResponse): _31.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _31.QueryParamsResponseProtoMsg): _31.QueryParamsResponse;
                toProto(message: _31.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _31.QueryParamsResponse): _31.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _31.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryDepositRequest;
                fromPartial(object: Partial<_31.QueryDepositRequest>): _31.QueryDepositRequest;
                fromAmino(object: _31.QueryDepositRequestAmino): _31.QueryDepositRequest;
                toAmino(message: _31.QueryDepositRequest): _31.QueryDepositRequestAmino;
                fromAminoMsg(object: _31.QueryDepositRequestAminoMsg): _31.QueryDepositRequest;
                toAminoMsg(message: _31.QueryDepositRequest): _31.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _31.QueryDepositRequestProtoMsg): _31.QueryDepositRequest;
                toProto(message: _31.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _31.QueryDepositRequest): _31.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _31.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryDepositResponse;
                fromPartial(object: Partial<_31.QueryDepositResponse>): _31.QueryDepositResponse;
                fromAmino(object: _31.QueryDepositResponseAmino): _31.QueryDepositResponse;
                toAmino(message: _31.QueryDepositResponse): _31.QueryDepositResponseAmino;
                fromAminoMsg(object: _31.QueryDepositResponseAminoMsg): _31.QueryDepositResponse;
                toAminoMsg(message: _31.QueryDepositResponse): _31.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _31.QueryDepositResponseProtoMsg): _31.QueryDepositResponse;
                toProto(message: _31.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _31.QueryDepositResponse): _31.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _31.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryDepositsRequest;
                fromPartial(object: Partial<_31.QueryDepositsRequest>): _31.QueryDepositsRequest;
                fromAmino(object: _31.QueryDepositsRequestAmino): _31.QueryDepositsRequest;
                toAmino(message: _31.QueryDepositsRequest): _31.QueryDepositsRequestAmino;
                fromAminoMsg(object: _31.QueryDepositsRequestAminoMsg): _31.QueryDepositsRequest;
                toAminoMsg(message: _31.QueryDepositsRequest): _31.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _31.QueryDepositsRequestProtoMsg): _31.QueryDepositsRequest;
                toProto(message: _31.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _31.QueryDepositsRequest): _31.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _31.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryDepositsResponse;
                fromPartial(object: Partial<_31.QueryDepositsResponse>): _31.QueryDepositsResponse;
                fromAmino(object: _31.QueryDepositsResponseAmino): _31.QueryDepositsResponse;
                toAmino(message: _31.QueryDepositsResponse): _31.QueryDepositsResponseAmino;
                fromAminoMsg(object: _31.QueryDepositsResponseAminoMsg): _31.QueryDepositsResponse;
                toAminoMsg(message: _31.QueryDepositsResponse): _31.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _31.QueryDepositsResponseProtoMsg): _31.QueryDepositsResponse;
                toProto(message: _31.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _31.QueryDepositsResponse): _31.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _31.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryTallyResultRequest;
                fromPartial(object: Partial<_31.QueryTallyResultRequest>): _31.QueryTallyResultRequest;
                fromAmino(object: _31.QueryTallyResultRequestAmino): _31.QueryTallyResultRequest;
                toAmino(message: _31.QueryTallyResultRequest): _31.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _31.QueryTallyResultRequestAminoMsg): _31.QueryTallyResultRequest;
                toAminoMsg(message: _31.QueryTallyResultRequest): _31.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _31.QueryTallyResultRequestProtoMsg): _31.QueryTallyResultRequest;
                toProto(message: _31.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _31.QueryTallyResultRequest): _31.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _31.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryTallyResultResponse;
                fromPartial(object: Partial<_31.QueryTallyResultResponse>): _31.QueryTallyResultResponse;
                fromAmino(object: _31.QueryTallyResultResponseAmino): _31.QueryTallyResultResponse;
                toAmino(message: _31.QueryTallyResultResponse): _31.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _31.QueryTallyResultResponseAminoMsg): _31.QueryTallyResultResponse;
                toAminoMsg(message: _31.QueryTallyResultResponse): _31.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _31.QueryTallyResultResponseProtoMsg): _31.QueryTallyResultResponse;
                toProto(message: _31.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _31.QueryTallyResultResponse): _31.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _30.VoteOption;
            voteOptionToJSON(object: _30.VoteOption): string;
            proposalStatusFromJSON(object: any): _30.ProposalStatus;
            proposalStatusToJSON(object: _30.ProposalStatus): string;
            VoteOption: typeof _30.VoteOption;
            VoteOptionSDKType: typeof _30.VoteOption;
            VoteOptionAmino: typeof _30.VoteOption;
            ProposalStatus: typeof _30.ProposalStatus;
            ProposalStatusSDKType: typeof _30.ProposalStatus;
            ProposalStatusAmino: typeof _30.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _30.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.WeightedVoteOption;
                fromPartial(object: Partial<_30.WeightedVoteOption>): _30.WeightedVoteOption;
                fromAmino(object: _30.WeightedVoteOptionAmino): _30.WeightedVoteOption;
                toAmino(message: _30.WeightedVoteOption): _30.WeightedVoteOptionAmino;
                fromAminoMsg(object: _30.WeightedVoteOptionAminoMsg): _30.WeightedVoteOption;
                toAminoMsg(message: _30.WeightedVoteOption): _30.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _30.WeightedVoteOptionProtoMsg): _30.WeightedVoteOption;
                toProto(message: _30.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _30.WeightedVoteOption): _30.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _30.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.TextProposal;
                fromPartial(object: Partial<_30.TextProposal>): _30.TextProposal;
                fromAmino(object: _30.TextProposalAmino): _30.TextProposal;
                toAmino(message: _30.TextProposal): _30.TextProposalAmino;
                fromAminoMsg(object: _30.TextProposalAminoMsg): _30.TextProposal;
                toAminoMsg(message: _30.TextProposal): _30.TextProposalAminoMsg;
                fromProtoMsg(message: _30.TextProposalProtoMsg): _30.TextProposal;
                toProto(message: _30.TextProposal): Uint8Array;
                toProtoMsg(message: _30.TextProposal): _30.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _30.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Deposit;
                fromPartial(object: Partial<_30.Deposit>): _30.Deposit;
                fromAmino(object: _30.DepositAmino): _30.Deposit;
                toAmino(message: _30.Deposit): _30.DepositAmino;
                fromAminoMsg(object: _30.DepositAminoMsg): _30.Deposit;
                toAminoMsg(message: _30.Deposit): _30.DepositAminoMsg;
                fromProtoMsg(message: _30.DepositProtoMsg): _30.Deposit;
                toProto(message: _30.Deposit): Uint8Array;
                toProtoMsg(message: _30.Deposit): _30.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _30.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Proposal;
                fromPartial(object: Partial<_30.Proposal>): _30.Proposal;
                fromAmino(object: _30.ProposalAmino): _30.Proposal;
                toAmino(message: _30.Proposal): _30.ProposalAmino;
                fromAminoMsg(object: _30.ProposalAminoMsg): _30.Proposal;
                toAminoMsg(message: _30.Proposal): _30.ProposalAminoMsg;
                fromProtoMsg(message: _30.ProposalProtoMsg): _30.Proposal;
                toProto(message: _30.Proposal): Uint8Array;
                toProtoMsg(message: _30.Proposal): _30.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _30.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.TallyResult;
                fromPartial(object: Partial<_30.TallyResult>): _30.TallyResult;
                fromAmino(object: _30.TallyResultAmino): _30.TallyResult;
                toAmino(message: _30.TallyResult): _30.TallyResultAmino;
                fromAminoMsg(object: _30.TallyResultAminoMsg): _30.TallyResult;
                toAminoMsg(message: _30.TallyResult): _30.TallyResultAminoMsg;
                fromProtoMsg(message: _30.TallyResultProtoMsg): _30.TallyResult;
                toProto(message: _30.TallyResult): Uint8Array;
                toProtoMsg(message: _30.TallyResult): _30.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _30.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Vote;
                fromPartial(object: Partial<_30.Vote>): _30.Vote;
                fromAmino(object: _30.VoteAmino): _30.Vote;
                toAmino(message: _30.Vote): _30.VoteAmino;
                fromAminoMsg(object: _30.VoteAminoMsg): _30.Vote;
                toAminoMsg(message: _30.Vote): _30.VoteAminoMsg;
                fromProtoMsg(message: _30.VoteProtoMsg): _30.Vote;
                toProto(message: _30.Vote): Uint8Array;
                toProtoMsg(message: _30.Vote): _30.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _30.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.DepositParams;
                fromPartial(object: Partial<_30.DepositParams>): _30.DepositParams;
                fromAmino(object: _30.DepositParamsAmino): _30.DepositParams;
                toAmino(message: _30.DepositParams): _30.DepositParamsAmino;
                fromAminoMsg(object: _30.DepositParamsAminoMsg): _30.DepositParams;
                toAminoMsg(message: _30.DepositParams): _30.DepositParamsAminoMsg;
                fromProtoMsg(message: _30.DepositParamsProtoMsg): _30.DepositParams;
                toProto(message: _30.DepositParams): Uint8Array;
                toProtoMsg(message: _30.DepositParams): _30.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _30.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.VotingParams;
                fromPartial(object: Partial<_30.VotingParams>): _30.VotingParams;
                fromAmino(object: _30.VotingParamsAmino): _30.VotingParams;
                toAmino(message: _30.VotingParams): _30.VotingParamsAmino;
                fromAminoMsg(object: _30.VotingParamsAminoMsg): _30.VotingParams;
                toAminoMsg(message: _30.VotingParams): _30.VotingParamsAminoMsg;
                fromProtoMsg(message: _30.VotingParamsProtoMsg): _30.VotingParams;
                toProto(message: _30.VotingParams): Uint8Array;
                toProtoMsg(message: _30.VotingParams): _30.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _30.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.TallyParams;
                fromPartial(object: Partial<_30.TallyParams>): _30.TallyParams;
                fromAmino(object: _30.TallyParamsAmino): _30.TallyParams;
                toAmino(message: _30.TallyParams): _30.TallyParamsAmino;
                fromAminoMsg(object: _30.TallyParamsAminoMsg): _30.TallyParams;
                toAminoMsg(message: _30.TallyParams): _30.TallyParamsAminoMsg;
                fromProtoMsg(message: _30.TallyParamsProtoMsg): _30.TallyParams;
                toProto(message: _30.TallyParams): Uint8Array;
                toProtoMsg(message: _30.TallyParams): _30.TallyParamsProtoMsg;
            };
            ProposalVotingPeriod: {
                typeUrl: string;
                encode(message: _30.ProposalVotingPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.ProposalVotingPeriod;
                fromPartial(object: Partial<_30.ProposalVotingPeriod>): _30.ProposalVotingPeriod;
                fromAmino(object: _30.ProposalVotingPeriodAmino): _30.ProposalVotingPeriod;
                toAmino(message: _30.ProposalVotingPeriod): _30.ProposalVotingPeriodAmino;
                fromAminoMsg(object: _30.ProposalVotingPeriodAminoMsg): _30.ProposalVotingPeriod;
                toAminoMsg(message: _30.ProposalVotingPeriod): _30.ProposalVotingPeriodAminoMsg;
                fromProtoMsg(message: _30.ProposalVotingPeriodProtoMsg): _30.ProposalVotingPeriod;
                toProto(message: _30.ProposalVotingPeriod): Uint8Array;
                toProtoMsg(message: _30.ProposalVotingPeriod): _30.ProposalVotingPeriodProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _29.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GenesisState;
                fromPartial(object: Partial<_29.GenesisState>): _29.GenesisState;
                fromAmino(object: _29.GenesisStateAmino): _29.GenesisState;
                toAmino(message: _29.GenesisState): _29.GenesisStateAmino;
                fromAminoMsg(object: _29.GenesisStateAminoMsg): _29.GenesisState;
                toAminoMsg(message: _29.GenesisState): _29.GenesisStateAminoMsg;
                fromProtoMsg(message: _29.GenesisStateProtoMsg): _29.GenesisState;
                toProto(message: _29.GenesisState): Uint8Array;
                toProtoMsg(message: _29.GenesisState): _29.GenesisStateProtoMsg;
            };
        };
        const v1: {
            MsgClientImpl: typeof _227.MsgClientImpl;
            QueryClientImpl: typeof _221.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _35.QueryProposalRequest): Promise<_35.QueryProposalResponse>;
                proposals(request: _35.QueryProposalsRequest): Promise<_35.QueryProposalsResponse>;
                vote(request: _35.QueryVoteRequest): Promise<_35.QueryVoteResponse>;
                votes(request: _35.QueryVotesRequest): Promise<_35.QueryVotesResponse>;
                params(request: _35.QueryParamsRequest): Promise<_35.QueryParamsResponse>;
                deposit(request: _35.QueryDepositRequest): Promise<_35.QueryDepositResponse>;
                deposits(request: _35.QueryDepositsRequest): Promise<_35.QueryDepositsResponse>;
                tallyResult(request: _35.QueryTallyResultRequest): Promise<_35.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _211.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _36.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _36.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _36.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _36.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _36.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _36.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _36.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _36.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _36.MsgExecLegacyContent;
                    };
                    vote(value: _36.MsgVote): {
                        typeUrl: string;
                        value: _36.MsgVote;
                    };
                    voteWeighted(value: _36.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _36.MsgVoteWeighted;
                    };
                    deposit(value: _36.MsgDeposit): {
                        typeUrl: string;
                        value: _36.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _36.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _36.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _36.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _36.MsgExecLegacyContent;
                    };
                    vote(value: _36.MsgVote): {
                        typeUrl: string;
                        value: _36.MsgVote;
                    };
                    voteWeighted(value: _36.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _36.MsgVoteWeighted;
                    };
                    deposit(value: _36.MsgDeposit): {
                        typeUrl: string;
                        value: _36.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _36.MsgSubmitProposal) => _36.MsgSubmitProposalAmino;
                    fromAmino: (object: _36.MsgSubmitProposalAmino) => _36.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _36.MsgExecLegacyContent) => _36.MsgExecLegacyContentAmino;
                    fromAmino: (object: _36.MsgExecLegacyContentAmino) => _36.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _36.MsgVote) => _36.MsgVoteAmino;
                    fromAmino: (object: _36.MsgVoteAmino) => _36.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _36.MsgVoteWeighted) => _36.MsgVoteWeightedAmino;
                    fromAmino: (object: _36.MsgVoteWeightedAmino) => _36.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _36.MsgDeposit) => _36.MsgDepositAmino;
                    fromAmino: (object: _36.MsgDepositAmino) => _36.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _36.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgSubmitProposal;
                fromPartial(object: Partial<_36.MsgSubmitProposal>): _36.MsgSubmitProposal;
                fromAmino(object: _36.MsgSubmitProposalAmino): _36.MsgSubmitProposal;
                toAmino(message: _36.MsgSubmitProposal): _36.MsgSubmitProposalAmino;
                fromAminoMsg(object: _36.MsgSubmitProposalAminoMsg): _36.MsgSubmitProposal;
                toAminoMsg(message: _36.MsgSubmitProposal): _36.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _36.MsgSubmitProposalProtoMsg): _36.MsgSubmitProposal;
                toProto(message: _36.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _36.MsgSubmitProposal): _36.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _36.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_36.MsgSubmitProposalResponse>): _36.MsgSubmitProposalResponse;
                fromAmino(object: _36.MsgSubmitProposalResponseAmino): _36.MsgSubmitProposalResponse;
                toAmino(message: _36.MsgSubmitProposalResponse): _36.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _36.MsgSubmitProposalResponseAminoMsg): _36.MsgSubmitProposalResponse;
                toAminoMsg(message: _36.MsgSubmitProposalResponse): _36.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _36.MsgSubmitProposalResponseProtoMsg): _36.MsgSubmitProposalResponse;
                toProto(message: _36.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _36.MsgSubmitProposalResponse): _36.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _36.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgExecLegacyContent;
                fromPartial(object: Partial<_36.MsgExecLegacyContent>): _36.MsgExecLegacyContent;
                fromAmino(object: _36.MsgExecLegacyContentAmino): _36.MsgExecLegacyContent;
                toAmino(message: _36.MsgExecLegacyContent): _36.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _36.MsgExecLegacyContentAminoMsg): _36.MsgExecLegacyContent;
                toAminoMsg(message: _36.MsgExecLegacyContent): _36.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _36.MsgExecLegacyContentProtoMsg): _36.MsgExecLegacyContent;
                toProto(message: _36.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _36.MsgExecLegacyContent): _36.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _36.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_36.MsgExecLegacyContentResponse>): _36.MsgExecLegacyContentResponse;
                fromAmino(_: _36.MsgExecLegacyContentResponseAmino): _36.MsgExecLegacyContentResponse;
                toAmino(_: _36.MsgExecLegacyContentResponse): _36.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _36.MsgExecLegacyContentResponseAminoMsg): _36.MsgExecLegacyContentResponse;
                toAminoMsg(message: _36.MsgExecLegacyContentResponse): _36.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _36.MsgExecLegacyContentResponseProtoMsg): _36.MsgExecLegacyContentResponse;
                toProto(message: _36.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _36.MsgExecLegacyContentResponse): _36.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _36.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgVote;
                fromPartial(object: Partial<_36.MsgVote>): _36.MsgVote;
                fromAmino(object: _36.MsgVoteAmino): _36.MsgVote;
                toAmino(message: _36.MsgVote): _36.MsgVoteAmino;
                fromAminoMsg(object: _36.MsgVoteAminoMsg): _36.MsgVote;
                toAminoMsg(message: _36.MsgVote): _36.MsgVoteAminoMsg;
                fromProtoMsg(message: _36.MsgVoteProtoMsg): _36.MsgVote;
                toProto(message: _36.MsgVote): Uint8Array;
                toProtoMsg(message: _36.MsgVote): _36.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _36.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgVoteResponse;
                fromPartial(_: Partial<_36.MsgVoteResponse>): _36.MsgVoteResponse;
                fromAmino(_: _36.MsgVoteResponseAmino): _36.MsgVoteResponse;
                toAmino(_: _36.MsgVoteResponse): _36.MsgVoteResponseAmino;
                fromAminoMsg(object: _36.MsgVoteResponseAminoMsg): _36.MsgVoteResponse;
                toAminoMsg(message: _36.MsgVoteResponse): _36.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _36.MsgVoteResponseProtoMsg): _36.MsgVoteResponse;
                toProto(message: _36.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _36.MsgVoteResponse): _36.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _36.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgVoteWeighted;
                fromPartial(object: Partial<_36.MsgVoteWeighted>): _36.MsgVoteWeighted;
                fromAmino(object: _36.MsgVoteWeightedAmino): _36.MsgVoteWeighted;
                toAmino(message: _36.MsgVoteWeighted): _36.MsgVoteWeightedAmino;
                fromAminoMsg(object: _36.MsgVoteWeightedAminoMsg): _36.MsgVoteWeighted;
                toAminoMsg(message: _36.MsgVoteWeighted): _36.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _36.MsgVoteWeightedProtoMsg): _36.MsgVoteWeighted;
                toProto(message: _36.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _36.MsgVoteWeighted): _36.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _36.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_36.MsgVoteWeightedResponse>): _36.MsgVoteWeightedResponse;
                fromAmino(_: _36.MsgVoteWeightedResponseAmino): _36.MsgVoteWeightedResponse;
                toAmino(_: _36.MsgVoteWeightedResponse): _36.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _36.MsgVoteWeightedResponseAminoMsg): _36.MsgVoteWeightedResponse;
                toAminoMsg(message: _36.MsgVoteWeightedResponse): _36.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _36.MsgVoteWeightedResponseProtoMsg): _36.MsgVoteWeightedResponse;
                toProto(message: _36.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _36.MsgVoteWeightedResponse): _36.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _36.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgDeposit;
                fromPartial(object: Partial<_36.MsgDeposit>): _36.MsgDeposit;
                fromAmino(object: _36.MsgDepositAmino): _36.MsgDeposit;
                toAmino(message: _36.MsgDeposit): _36.MsgDepositAmino;
                fromAminoMsg(object: _36.MsgDepositAminoMsg): _36.MsgDeposit;
                toAminoMsg(message: _36.MsgDeposit): _36.MsgDepositAminoMsg;
                fromProtoMsg(message: _36.MsgDepositProtoMsg): _36.MsgDeposit;
                toProto(message: _36.MsgDeposit): Uint8Array;
                toProtoMsg(message: _36.MsgDeposit): _36.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _36.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgDepositResponse;
                fromPartial(_: Partial<_36.MsgDepositResponse>): _36.MsgDepositResponse;
                fromAmino(_: _36.MsgDepositResponseAmino): _36.MsgDepositResponse;
                toAmino(_: _36.MsgDepositResponse): _36.MsgDepositResponseAmino;
                fromAminoMsg(object: _36.MsgDepositResponseAminoMsg): _36.MsgDepositResponse;
                toAminoMsg(message: _36.MsgDepositResponse): _36.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _36.MsgDepositResponseProtoMsg): _36.MsgDepositResponse;
                toProto(message: _36.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _36.MsgDepositResponse): _36.MsgDepositResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | import("../ibc/core/client/v1/client").ClientUpdateProposal | import("../ibc/core/client/v1/client").UpgradeProposal | import("../cosmwasm/wasm/v1/proposal").StoreCodeProposal | import("../cosmwasm/wasm/v1/proposal").InstantiateContractProposal | import("../cosmwasm/wasm/v1/proposal").InstantiateContract2Proposal | import("../cosmwasm/wasm/v1/proposal").MigrateContractProposal | import("../cosmwasm/wasm/v1/proposal").SudoContractProposal | import("../cosmwasm/wasm/v1/proposal").ExecuteContractProposal | import("../cosmwasm/wasm/v1/proposal").UpdateAdminProposal | import("../cosmwasm/wasm/v1/proposal").ClearAdminProposal | import("../cosmwasm/wasm/v1/proposal").PinCodesProposal | import("../cosmwasm/wasm/v1/proposal").UnpinCodesProposal | import("../cosmwasm/wasm/v1/proposal").UpdateInstantiateConfigProposal | import("../cosmwasm/wasm/v1/proposal").StoreAndInstantiateContractProposal | import("../osmosis/pool-incentives/v1beta1/gov").ReplacePoolIncentivesProposal | import("../osmosis/pool-incentives/v1beta1/gov").UpdatePoolIncentivesProposal | import("../osmosis/protorev/v1beta1/gov").SetProtoRevEnabledProposal | import("../osmosis/protorev/v1beta1/gov").SetProtoRevAdminAccountProposal | import("../osmosis/superfluid/v1beta1/gov").SetSuperfluidAssetsProposal | import("../osmosis/superfluid/v1beta1/gov").RemoveSuperfluidAssetsProposal | import("../osmosis/superfluid/v1beta1/gov").UpdateUnpoolWhiteListProposal | import("../osmosis/txfees/v1beta1/gov").UpdateFeeTokenProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _35.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryProposalRequest;
                fromPartial(object: Partial<_35.QueryProposalRequest>): _35.QueryProposalRequest;
                fromAmino(object: _35.QueryProposalRequestAmino): _35.QueryProposalRequest;
                toAmino(message: _35.QueryProposalRequest): _35.QueryProposalRequestAmino;
                fromAminoMsg(object: _35.QueryProposalRequestAminoMsg): _35.QueryProposalRequest;
                toAminoMsg(message: _35.QueryProposalRequest): _35.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _35.QueryProposalRequestProtoMsg): _35.QueryProposalRequest;
                toProto(message: _35.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _35.QueryProposalRequest): _35.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _35.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryProposalResponse;
                fromPartial(object: Partial<_35.QueryProposalResponse>): _35.QueryProposalResponse;
                fromAmino(object: _35.QueryProposalResponseAmino): _35.QueryProposalResponse;
                toAmino(message: _35.QueryProposalResponse): _35.QueryProposalResponseAmino;
                fromAminoMsg(object: _35.QueryProposalResponseAminoMsg): _35.QueryProposalResponse;
                toAminoMsg(message: _35.QueryProposalResponse): _35.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _35.QueryProposalResponseProtoMsg): _35.QueryProposalResponse;
                toProto(message: _35.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _35.QueryProposalResponse): _35.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _35.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryProposalsRequest;
                fromPartial(object: Partial<_35.QueryProposalsRequest>): _35.QueryProposalsRequest;
                fromAmino(object: _35.QueryProposalsRequestAmino): _35.QueryProposalsRequest;
                toAmino(message: _35.QueryProposalsRequest): _35.QueryProposalsRequestAmino;
                fromAminoMsg(object: _35.QueryProposalsRequestAminoMsg): _35.QueryProposalsRequest;
                toAminoMsg(message: _35.QueryProposalsRequest): _35.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _35.QueryProposalsRequestProtoMsg): _35.QueryProposalsRequest;
                toProto(message: _35.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _35.QueryProposalsRequest): _35.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _35.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryProposalsResponse;
                fromPartial(object: Partial<_35.QueryProposalsResponse>): _35.QueryProposalsResponse;
                fromAmino(object: _35.QueryProposalsResponseAmino): _35.QueryProposalsResponse;
                toAmino(message: _35.QueryProposalsResponse): _35.QueryProposalsResponseAmino;
                fromAminoMsg(object: _35.QueryProposalsResponseAminoMsg): _35.QueryProposalsResponse;
                toAminoMsg(message: _35.QueryProposalsResponse): _35.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _35.QueryProposalsResponseProtoMsg): _35.QueryProposalsResponse;
                toProto(message: _35.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _35.QueryProposalsResponse): _35.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _35.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryVoteRequest;
                fromPartial(object: Partial<_35.QueryVoteRequest>): _35.QueryVoteRequest;
                fromAmino(object: _35.QueryVoteRequestAmino): _35.QueryVoteRequest;
                toAmino(message: _35.QueryVoteRequest): _35.QueryVoteRequestAmino;
                fromAminoMsg(object: _35.QueryVoteRequestAminoMsg): _35.QueryVoteRequest;
                toAminoMsg(message: _35.QueryVoteRequest): _35.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _35.QueryVoteRequestProtoMsg): _35.QueryVoteRequest;
                toProto(message: _35.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _35.QueryVoteRequest): _35.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _35.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryVoteResponse;
                fromPartial(object: Partial<_35.QueryVoteResponse>): _35.QueryVoteResponse;
                fromAmino(object: _35.QueryVoteResponseAmino): _35.QueryVoteResponse;
                toAmino(message: _35.QueryVoteResponse): _35.QueryVoteResponseAmino;
                fromAminoMsg(object: _35.QueryVoteResponseAminoMsg): _35.QueryVoteResponse;
                toAminoMsg(message: _35.QueryVoteResponse): _35.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _35.QueryVoteResponseProtoMsg): _35.QueryVoteResponse;
                toProto(message: _35.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _35.QueryVoteResponse): _35.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _35.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryVotesRequest;
                fromPartial(object: Partial<_35.QueryVotesRequest>): _35.QueryVotesRequest;
                fromAmino(object: _35.QueryVotesRequestAmino): _35.QueryVotesRequest;
                toAmino(message: _35.QueryVotesRequest): _35.QueryVotesRequestAmino;
                fromAminoMsg(object: _35.QueryVotesRequestAminoMsg): _35.QueryVotesRequest;
                toAminoMsg(message: _35.QueryVotesRequest): _35.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _35.QueryVotesRequestProtoMsg): _35.QueryVotesRequest;
                toProto(message: _35.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _35.QueryVotesRequest): _35.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _35.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryVotesResponse;
                fromPartial(object: Partial<_35.QueryVotesResponse>): _35.QueryVotesResponse;
                fromAmino(object: _35.QueryVotesResponseAmino): _35.QueryVotesResponse;
                toAmino(message: _35.QueryVotesResponse): _35.QueryVotesResponseAmino;
                fromAminoMsg(object: _35.QueryVotesResponseAminoMsg): _35.QueryVotesResponse;
                toAminoMsg(message: _35.QueryVotesResponse): _35.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _35.QueryVotesResponseProtoMsg): _35.QueryVotesResponse;
                toProto(message: _35.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _35.QueryVotesResponse): _35.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _35.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryParamsRequest;
                fromPartial(object: Partial<_35.QueryParamsRequest>): _35.QueryParamsRequest;
                fromAmino(object: _35.QueryParamsRequestAmino): _35.QueryParamsRequest;
                toAmino(message: _35.QueryParamsRequest): _35.QueryParamsRequestAmino;
                fromAminoMsg(object: _35.QueryParamsRequestAminoMsg): _35.QueryParamsRequest;
                toAminoMsg(message: _35.QueryParamsRequest): _35.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _35.QueryParamsRequestProtoMsg): _35.QueryParamsRequest;
                toProto(message: _35.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _35.QueryParamsRequest): _35.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _35.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryParamsResponse;
                fromPartial(object: Partial<_35.QueryParamsResponse>): _35.QueryParamsResponse;
                fromAmino(object: _35.QueryParamsResponseAmino): _35.QueryParamsResponse;
                toAmino(message: _35.QueryParamsResponse): _35.QueryParamsResponseAmino;
                fromAminoMsg(object: _35.QueryParamsResponseAminoMsg): _35.QueryParamsResponse;
                toAminoMsg(message: _35.QueryParamsResponse): _35.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _35.QueryParamsResponseProtoMsg): _35.QueryParamsResponse;
                toProto(message: _35.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _35.QueryParamsResponse): _35.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _35.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDepositRequest;
                fromPartial(object: Partial<_35.QueryDepositRequest>): _35.QueryDepositRequest;
                fromAmino(object: _35.QueryDepositRequestAmino): _35.QueryDepositRequest;
                toAmino(message: _35.QueryDepositRequest): _35.QueryDepositRequestAmino;
                fromAminoMsg(object: _35.QueryDepositRequestAminoMsg): _35.QueryDepositRequest;
                toAminoMsg(message: _35.QueryDepositRequest): _35.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _35.QueryDepositRequestProtoMsg): _35.QueryDepositRequest;
                toProto(message: _35.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _35.QueryDepositRequest): _35.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _35.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDepositResponse;
                fromPartial(object: Partial<_35.QueryDepositResponse>): _35.QueryDepositResponse;
                fromAmino(object: _35.QueryDepositResponseAmino): _35.QueryDepositResponse;
                toAmino(message: _35.QueryDepositResponse): _35.QueryDepositResponseAmino;
                fromAminoMsg(object: _35.QueryDepositResponseAminoMsg): _35.QueryDepositResponse;
                toAminoMsg(message: _35.QueryDepositResponse): _35.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _35.QueryDepositResponseProtoMsg): _35.QueryDepositResponse;
                toProto(message: _35.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _35.QueryDepositResponse): _35.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _35.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDepositsRequest;
                fromPartial(object: Partial<_35.QueryDepositsRequest>): _35.QueryDepositsRequest;
                fromAmino(object: _35.QueryDepositsRequestAmino): _35.QueryDepositsRequest;
                toAmino(message: _35.QueryDepositsRequest): _35.QueryDepositsRequestAmino;
                fromAminoMsg(object: _35.QueryDepositsRequestAminoMsg): _35.QueryDepositsRequest;
                toAminoMsg(message: _35.QueryDepositsRequest): _35.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _35.QueryDepositsRequestProtoMsg): _35.QueryDepositsRequest;
                toProto(message: _35.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _35.QueryDepositsRequest): _35.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _35.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDepositsResponse;
                fromPartial(object: Partial<_35.QueryDepositsResponse>): _35.QueryDepositsResponse;
                fromAmino(object: _35.QueryDepositsResponseAmino): _35.QueryDepositsResponse;
                toAmino(message: _35.QueryDepositsResponse): _35.QueryDepositsResponseAmino;
                fromAminoMsg(object: _35.QueryDepositsResponseAminoMsg): _35.QueryDepositsResponse;
                toAminoMsg(message: _35.QueryDepositsResponse): _35.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _35.QueryDepositsResponseProtoMsg): _35.QueryDepositsResponse;
                toProto(message: _35.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _35.QueryDepositsResponse): _35.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _35.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryTallyResultRequest;
                fromPartial(object: Partial<_35.QueryTallyResultRequest>): _35.QueryTallyResultRequest;
                fromAmino(object: _35.QueryTallyResultRequestAmino): _35.QueryTallyResultRequest;
                toAmino(message: _35.QueryTallyResultRequest): _35.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _35.QueryTallyResultRequestAminoMsg): _35.QueryTallyResultRequest;
                toAminoMsg(message: _35.QueryTallyResultRequest): _35.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _35.QueryTallyResultRequestProtoMsg): _35.QueryTallyResultRequest;
                toProto(message: _35.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _35.QueryTallyResultRequest): _35.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _35.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryTallyResultResponse;
                fromPartial(object: Partial<_35.QueryTallyResultResponse>): _35.QueryTallyResultResponse;
                fromAmino(object: _35.QueryTallyResultResponseAmino): _35.QueryTallyResultResponse;
                toAmino(message: _35.QueryTallyResultResponse): _35.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _35.QueryTallyResultResponseAminoMsg): _35.QueryTallyResultResponse;
                toAminoMsg(message: _35.QueryTallyResultResponse): _35.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _35.QueryTallyResultResponseProtoMsg): _35.QueryTallyResultResponse;
                toProto(message: _35.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _35.QueryTallyResultResponse): _35.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _34.VoteOption;
            voteOptionToJSON(object: _34.VoteOption): string;
            proposalStatusFromJSON(object: any): _34.ProposalStatus;
            proposalStatusToJSON(object: _34.ProposalStatus): string;
            VoteOption: typeof _34.VoteOption;
            VoteOptionSDKType: typeof _34.VoteOption;
            VoteOptionAmino: typeof _34.VoteOption;
            ProposalStatus: typeof _34.ProposalStatus;
            ProposalStatusSDKType: typeof _34.ProposalStatus;
            ProposalStatusAmino: typeof _34.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _34.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.WeightedVoteOption;
                fromPartial(object: Partial<_34.WeightedVoteOption>): _34.WeightedVoteOption;
                fromAmino(object: _34.WeightedVoteOptionAmino): _34.WeightedVoteOption;
                toAmino(message: _34.WeightedVoteOption): _34.WeightedVoteOptionAmino;
                fromAminoMsg(object: _34.WeightedVoteOptionAminoMsg): _34.WeightedVoteOption;
                toAminoMsg(message: _34.WeightedVoteOption): _34.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _34.WeightedVoteOptionProtoMsg): _34.WeightedVoteOption;
                toProto(message: _34.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _34.WeightedVoteOption): _34.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _34.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Deposit;
                fromPartial(object: Partial<_34.Deposit>): _34.Deposit;
                fromAmino(object: _34.DepositAmino): _34.Deposit;
                toAmino(message: _34.Deposit): _34.DepositAmino;
                fromAminoMsg(object: _34.DepositAminoMsg): _34.Deposit;
                toAminoMsg(message: _34.Deposit): _34.DepositAminoMsg;
                fromProtoMsg(message: _34.DepositProtoMsg): _34.Deposit;
                toProto(message: _34.Deposit): Uint8Array;
                toProtoMsg(message: _34.Deposit): _34.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _34.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Proposal;
                fromPartial(object: Partial<_34.Proposal>): _34.Proposal;
                fromAmino(object: _34.ProposalAmino): _34.Proposal;
                toAmino(message: _34.Proposal): _34.ProposalAmino;
                fromAminoMsg(object: _34.ProposalAminoMsg): _34.Proposal;
                toAminoMsg(message: _34.Proposal): _34.ProposalAminoMsg;
                fromProtoMsg(message: _34.ProposalProtoMsg): _34.Proposal;
                toProto(message: _34.Proposal): Uint8Array;
                toProtoMsg(message: _34.Proposal): _34.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _34.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.TallyResult;
                fromPartial(object: Partial<_34.TallyResult>): _34.TallyResult;
                fromAmino(object: _34.TallyResultAmino): _34.TallyResult;
                toAmino(message: _34.TallyResult): _34.TallyResultAmino;
                fromAminoMsg(object: _34.TallyResultAminoMsg): _34.TallyResult;
                toAminoMsg(message: _34.TallyResult): _34.TallyResultAminoMsg;
                fromProtoMsg(message: _34.TallyResultProtoMsg): _34.TallyResult;
                toProto(message: _34.TallyResult): Uint8Array;
                toProtoMsg(message: _34.TallyResult): _34.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _34.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Vote;
                fromPartial(object: Partial<_34.Vote>): _34.Vote;
                fromAmino(object: _34.VoteAmino): _34.Vote;
                toAmino(message: _34.Vote): _34.VoteAmino;
                fromAminoMsg(object: _34.VoteAminoMsg): _34.Vote;
                toAminoMsg(message: _34.Vote): _34.VoteAminoMsg;
                fromProtoMsg(message: _34.VoteProtoMsg): _34.Vote;
                toProto(message: _34.Vote): Uint8Array;
                toProtoMsg(message: _34.Vote): _34.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _34.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.DepositParams;
                fromPartial(object: Partial<_34.DepositParams>): _34.DepositParams;
                fromAmino(object: _34.DepositParamsAmino): _34.DepositParams;
                toAmino(message: _34.DepositParams): _34.DepositParamsAmino;
                fromAminoMsg(object: _34.DepositParamsAminoMsg): _34.DepositParams;
                toAminoMsg(message: _34.DepositParams): _34.DepositParamsAminoMsg;
                fromProtoMsg(message: _34.DepositParamsProtoMsg): _34.DepositParams;
                toProto(message: _34.DepositParams): Uint8Array;
                toProtoMsg(message: _34.DepositParams): _34.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _34.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.VotingParams;
                fromPartial(object: Partial<_34.VotingParams>): _34.VotingParams;
                fromAmino(object: _34.VotingParamsAmino): _34.VotingParams;
                toAmino(message: _34.VotingParams): _34.VotingParamsAmino;
                fromAminoMsg(object: _34.VotingParamsAminoMsg): _34.VotingParams;
                toAminoMsg(message: _34.VotingParams): _34.VotingParamsAminoMsg;
                fromProtoMsg(message: _34.VotingParamsProtoMsg): _34.VotingParams;
                toProto(message: _34.VotingParams): Uint8Array;
                toProtoMsg(message: _34.VotingParams): _34.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _34.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.TallyParams;
                fromPartial(object: Partial<_34.TallyParams>): _34.TallyParams;
                fromAmino(object: _34.TallyParamsAmino): _34.TallyParams;
                toAmino(message: _34.TallyParams): _34.TallyParamsAmino;
                fromAminoMsg(object: _34.TallyParamsAminoMsg): _34.TallyParams;
                toAminoMsg(message: _34.TallyParams): _34.TallyParamsAminoMsg;
                fromProtoMsg(message: _34.TallyParamsProtoMsg): _34.TallyParams;
                toProto(message: _34.TallyParams): Uint8Array;
                toProtoMsg(message: _34.TallyParams): _34.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _33.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.GenesisState;
                fromPartial(object: Partial<_33.GenesisState>): _33.GenesisState;
                fromAmino(object: _33.GenesisStateAmino): _33.GenesisState;
                toAmino(message: _33.GenesisState): _33.GenesisStateAmino;
                fromAminoMsg(object: _33.GenesisStateAminoMsg): _33.GenesisState;
                toAminoMsg(message: _33.GenesisState): _33.GenesisStateAminoMsg;
                fromProtoMsg(message: _33.GenesisStateProtoMsg): _33.GenesisState;
                toProto(message: _33.GenesisState): Uint8Array;
                toProtoMsg(message: _33.GenesisState): _33.GenesisStateProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _226.MsgClientImpl;
            QueryClientImpl: typeof _218.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _39.QueryValidatorsRequest): Promise<_39.QueryValidatorsResponse>;
                validator(request: _39.QueryValidatorRequest): Promise<_39.QueryValidatorResponse>;
                validatorDelegations(request: _39.QueryValidatorDelegationsRequest): Promise<_39.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _39.QueryValidatorUnbondingDelegationsRequest): Promise<_39.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _39.QueryDelegationRequest): Promise<_39.QueryDelegationResponse>;
                unbondingDelegation(request: _39.QueryUnbondingDelegationRequest): Promise<_39.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _39.QueryDelegatorDelegationsRequest): Promise<_39.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _39.QueryDelegatorUnbondingDelegationsRequest): Promise<_39.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _39.QueryRedelegationsRequest): Promise<_39.QueryRedelegationsResponse>;
                delegatorValidators(request: _39.QueryDelegatorValidatorsRequest): Promise<_39.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _39.QueryDelegatorValidatorRequest): Promise<_39.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _39.QueryHistoricalInfoRequest): Promise<_39.QueryHistoricalInfoResponse>;
                pool(request?: _39.QueryPoolRequest): Promise<_39.QueryPoolResponse>;
                params(request?: _39.QueryParamsRequest): Promise<_39.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _208.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _41.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _41.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _41.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _41.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _41.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _41.MsgCreateValidator): {
                        typeUrl: string;
                        value: _41.MsgCreateValidator;
                    };
                    editValidator(value: _41.MsgEditValidator): {
                        typeUrl: string;
                        value: _41.MsgEditValidator;
                    };
                    delegate(value: _41.MsgDelegate): {
                        typeUrl: string;
                        value: _41.MsgDelegate;
                    };
                    beginRedelegate(value: _41.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _41.MsgBeginRedelegate;
                    };
                    undelegate(value: _41.MsgUndelegate): {
                        typeUrl: string;
                        value: _41.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _41.MsgCreateValidator): {
                        typeUrl: string;
                        value: _41.MsgCreateValidator;
                    };
                    editValidator(value: _41.MsgEditValidator): {
                        typeUrl: string;
                        value: _41.MsgEditValidator;
                    };
                    delegate(value: _41.MsgDelegate): {
                        typeUrl: string;
                        value: _41.MsgDelegate;
                    };
                    beginRedelegate(value: _41.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _41.MsgBeginRedelegate;
                    };
                    undelegate(value: _41.MsgUndelegate): {
                        typeUrl: string;
                        value: _41.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _41.MsgCreateValidator) => _41.MsgCreateValidatorAmino;
                    fromAmino: (object: _41.MsgCreateValidatorAmino) => _41.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _41.MsgEditValidator) => _41.MsgEditValidatorAmino;
                    fromAmino: (object: _41.MsgEditValidatorAmino) => _41.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _41.MsgDelegate) => _41.MsgDelegateAmino;
                    fromAmino: (object: _41.MsgDelegateAmino) => _41.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _41.MsgBeginRedelegate) => _41.MsgBeginRedelegateAmino;
                    fromAmino: (object: _41.MsgBeginRedelegateAmino) => _41.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _41.MsgUndelegate) => _41.MsgUndelegateAmino;
                    fromAmino: (object: _41.MsgUndelegateAmino) => _41.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _41.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgCreateValidator;
                fromPartial(object: Partial<_41.MsgCreateValidator>): _41.MsgCreateValidator;
                fromAmino(object: _41.MsgCreateValidatorAmino): _41.MsgCreateValidator;
                toAmino(message: _41.MsgCreateValidator): _41.MsgCreateValidatorAmino;
                fromAminoMsg(object: _41.MsgCreateValidatorAminoMsg): _41.MsgCreateValidator;
                toAminoMsg(message: _41.MsgCreateValidator): _41.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _41.MsgCreateValidatorProtoMsg): _41.MsgCreateValidator;
                toProto(message: _41.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _41.MsgCreateValidator): _41.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _41.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_41.MsgCreateValidatorResponse>): _41.MsgCreateValidatorResponse;
                fromAmino(_: _41.MsgCreateValidatorResponseAmino): _41.MsgCreateValidatorResponse;
                toAmino(_: _41.MsgCreateValidatorResponse): _41.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _41.MsgCreateValidatorResponseAminoMsg): _41.MsgCreateValidatorResponse;
                toAminoMsg(message: _41.MsgCreateValidatorResponse): _41.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _41.MsgCreateValidatorResponseProtoMsg): _41.MsgCreateValidatorResponse;
                toProto(message: _41.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _41.MsgCreateValidatorResponse): _41.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _41.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgEditValidator;
                fromPartial(object: Partial<_41.MsgEditValidator>): _41.MsgEditValidator;
                fromAmino(object: _41.MsgEditValidatorAmino): _41.MsgEditValidator;
                toAmino(message: _41.MsgEditValidator): _41.MsgEditValidatorAmino;
                fromAminoMsg(object: _41.MsgEditValidatorAminoMsg): _41.MsgEditValidator;
                toAminoMsg(message: _41.MsgEditValidator): _41.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _41.MsgEditValidatorProtoMsg): _41.MsgEditValidator;
                toProto(message: _41.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _41.MsgEditValidator): _41.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _41.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgEditValidatorResponse;
                fromPartial(_: Partial<_41.MsgEditValidatorResponse>): _41.MsgEditValidatorResponse;
                fromAmino(_: _41.MsgEditValidatorResponseAmino): _41.MsgEditValidatorResponse;
                toAmino(_: _41.MsgEditValidatorResponse): _41.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _41.MsgEditValidatorResponseAminoMsg): _41.MsgEditValidatorResponse;
                toAminoMsg(message: _41.MsgEditValidatorResponse): _41.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _41.MsgEditValidatorResponseProtoMsg): _41.MsgEditValidatorResponse;
                toProto(message: _41.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _41.MsgEditValidatorResponse): _41.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _41.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgDelegate;
                fromPartial(object: Partial<_41.MsgDelegate>): _41.MsgDelegate;
                fromAmino(object: _41.MsgDelegateAmino): _41.MsgDelegate;
                toAmino(message: _41.MsgDelegate): _41.MsgDelegateAmino;
                fromAminoMsg(object: _41.MsgDelegateAminoMsg): _41.MsgDelegate;
                toAminoMsg(message: _41.MsgDelegate): _41.MsgDelegateAminoMsg;
                fromProtoMsg(message: _41.MsgDelegateProtoMsg): _41.MsgDelegate;
                toProto(message: _41.MsgDelegate): Uint8Array;
                toProtoMsg(message: _41.MsgDelegate): _41.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _41.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgDelegateResponse;
                fromPartial(_: Partial<_41.MsgDelegateResponse>): _41.MsgDelegateResponse;
                fromAmino(_: _41.MsgDelegateResponseAmino): _41.MsgDelegateResponse;
                toAmino(_: _41.MsgDelegateResponse): _41.MsgDelegateResponseAmino;
                fromAminoMsg(object: _41.MsgDelegateResponseAminoMsg): _41.MsgDelegateResponse;
                toAminoMsg(message: _41.MsgDelegateResponse): _41.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _41.MsgDelegateResponseProtoMsg): _41.MsgDelegateResponse;
                toProto(message: _41.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _41.MsgDelegateResponse): _41.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _41.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgBeginRedelegate;
                fromPartial(object: Partial<_41.MsgBeginRedelegate>): _41.MsgBeginRedelegate;
                fromAmino(object: _41.MsgBeginRedelegateAmino): _41.MsgBeginRedelegate;
                toAmino(message: _41.MsgBeginRedelegate): _41.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _41.MsgBeginRedelegateAminoMsg): _41.MsgBeginRedelegate;
                toAminoMsg(message: _41.MsgBeginRedelegate): _41.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _41.MsgBeginRedelegateProtoMsg): _41.MsgBeginRedelegate;
                toProto(message: _41.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _41.MsgBeginRedelegate): _41.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _41.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_41.MsgBeginRedelegateResponse>): _41.MsgBeginRedelegateResponse;
                fromAmino(object: _41.MsgBeginRedelegateResponseAmino): _41.MsgBeginRedelegateResponse;
                toAmino(message: _41.MsgBeginRedelegateResponse): _41.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _41.MsgBeginRedelegateResponseAminoMsg): _41.MsgBeginRedelegateResponse;
                toAminoMsg(message: _41.MsgBeginRedelegateResponse): _41.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _41.MsgBeginRedelegateResponseProtoMsg): _41.MsgBeginRedelegateResponse;
                toProto(message: _41.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _41.MsgBeginRedelegateResponse): _41.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _41.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgUndelegate;
                fromPartial(object: Partial<_41.MsgUndelegate>): _41.MsgUndelegate;
                fromAmino(object: _41.MsgUndelegateAmino): _41.MsgUndelegate;
                toAmino(message: _41.MsgUndelegate): _41.MsgUndelegateAmino;
                fromAminoMsg(object: _41.MsgUndelegateAminoMsg): _41.MsgUndelegate;
                toAminoMsg(message: _41.MsgUndelegate): _41.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _41.MsgUndelegateProtoMsg): _41.MsgUndelegate;
                toProto(message: _41.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _41.MsgUndelegate): _41.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _41.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgUndelegateResponse;
                fromPartial(object: Partial<_41.MsgUndelegateResponse>): _41.MsgUndelegateResponse;
                fromAmino(object: _41.MsgUndelegateResponseAmino): _41.MsgUndelegateResponse;
                toAmino(message: _41.MsgUndelegateResponse): _41.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _41.MsgUndelegateResponseAminoMsg): _41.MsgUndelegateResponse;
                toAminoMsg(message: _41.MsgUndelegateResponse): _41.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _41.MsgUndelegateResponseProtoMsg): _41.MsgUndelegateResponse;
                toProto(message: _41.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _41.MsgUndelegateResponse): _41.MsgUndelegateResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => string;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => {
                typeUrl: string;
                value: Uint8Array;
            };
            bondStatusFromJSON(object: any): _40.BondStatus;
            bondStatusToJSON(object: _40.BondStatus): string;
            BondStatus: typeof _40.BondStatus;
            BondStatusSDKType: typeof _40.BondStatus;
            BondStatusAmino: typeof _40.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _40.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.HistoricalInfo;
                fromPartial(object: Partial<_40.HistoricalInfo>): _40.HistoricalInfo;
                fromAmino(object: _40.HistoricalInfoAmino): _40.HistoricalInfo;
                toAmino(message: _40.HistoricalInfo): _40.HistoricalInfoAmino;
                fromAminoMsg(object: _40.HistoricalInfoAminoMsg): _40.HistoricalInfo;
                toAminoMsg(message: _40.HistoricalInfo): _40.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _40.HistoricalInfoProtoMsg): _40.HistoricalInfo;
                toProto(message: _40.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _40.HistoricalInfo): _40.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _40.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.CommissionRates;
                fromPartial(object: Partial<_40.CommissionRates>): _40.CommissionRates;
                fromAmino(object: _40.CommissionRatesAmino): _40.CommissionRates;
                toAmino(message: _40.CommissionRates): _40.CommissionRatesAmino;
                fromAminoMsg(object: _40.CommissionRatesAminoMsg): _40.CommissionRates;
                toAminoMsg(message: _40.CommissionRates): _40.CommissionRatesAminoMsg;
                fromProtoMsg(message: _40.CommissionRatesProtoMsg): _40.CommissionRates;
                toProto(message: _40.CommissionRates): Uint8Array;
                toProtoMsg(message: _40.CommissionRates): _40.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _40.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.Commission;
                fromPartial(object: Partial<_40.Commission>): _40.Commission;
                fromAmino(object: _40.CommissionAmino): _40.Commission;
                toAmino(message: _40.Commission): _40.CommissionAmino;
                fromAminoMsg(object: _40.CommissionAminoMsg): _40.Commission;
                toAminoMsg(message: _40.Commission): _40.CommissionAminoMsg;
                fromProtoMsg(message: _40.CommissionProtoMsg): _40.Commission;
                toProto(message: _40.Commission): Uint8Array;
                toProtoMsg(message: _40.Commission): _40.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _40.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.Description;
                fromPartial(object: Partial<_40.Description>): _40.Description;
                fromAmino(object: _40.DescriptionAmino): _40.Description;
                toAmino(message: _40.Description): _40.DescriptionAmino;
                fromAminoMsg(object: _40.DescriptionAminoMsg): _40.Description;
                toAminoMsg(message: _40.Description): _40.DescriptionAminoMsg;
                fromProtoMsg(message: _40.DescriptionProtoMsg): _40.Description;
                toProto(message: _40.Description): Uint8Array;
                toProtoMsg(message: _40.Description): _40.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _40.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.Validator;
                fromPartial(object: Partial<_40.Validator>): _40.Validator;
                fromAmino(object: _40.ValidatorAmino): _40.Validator;
                toAmino(message: _40.Validator): _40.ValidatorAmino;
                fromAminoMsg(object: _40.ValidatorAminoMsg): _40.Validator;
                toAminoMsg(message: _40.Validator): _40.ValidatorAminoMsg;
                fromProtoMsg(message: _40.ValidatorProtoMsg): _40.Validator;
                toProto(message: _40.Validator): Uint8Array;
                toProtoMsg(message: _40.Validator): _40.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _40.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ValAddresses;
                fromPartial(object: Partial<_40.ValAddresses>): _40.ValAddresses;
                fromAmino(object: _40.ValAddressesAmino): _40.ValAddresses;
                toAmino(message: _40.ValAddresses): _40.ValAddressesAmino;
                fromAminoMsg(object: _40.ValAddressesAminoMsg): _40.ValAddresses;
                toAminoMsg(message: _40.ValAddresses): _40.ValAddressesAminoMsg;
                fromProtoMsg(message: _40.ValAddressesProtoMsg): _40.ValAddresses;
                toProto(message: _40.ValAddresses): Uint8Array;
                toProtoMsg(message: _40.ValAddresses): _40.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _40.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.DVPair;
                fromPartial(object: Partial<_40.DVPair>): _40.DVPair;
                fromAmino(object: _40.DVPairAmino): _40.DVPair;
                toAmino(message: _40.DVPair): _40.DVPairAmino;
                fromAminoMsg(object: _40.DVPairAminoMsg): _40.DVPair;
                toAminoMsg(message: _40.DVPair): _40.DVPairAminoMsg;
                fromProtoMsg(message: _40.DVPairProtoMsg): _40.DVPair;
                toProto(message: _40.DVPair): Uint8Array;
                toProtoMsg(message: _40.DVPair): _40.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _40.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.DVPairs;
                fromPartial(object: Partial<_40.DVPairs>): _40.DVPairs;
                fromAmino(object: _40.DVPairsAmino): _40.DVPairs;
                toAmino(message: _40.DVPairs): _40.DVPairsAmino;
                fromAminoMsg(object: _40.DVPairsAminoMsg): _40.DVPairs;
                toAminoMsg(message: _40.DVPairs): _40.DVPairsAminoMsg;
                fromProtoMsg(message: _40.DVPairsProtoMsg): _40.DVPairs;
                toProto(message: _40.DVPairs): Uint8Array;
                toProtoMsg(message: _40.DVPairs): _40.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _40.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.DVVTriplet;
                fromPartial(object: Partial<_40.DVVTriplet>): _40.DVVTriplet;
                fromAmino(object: _40.DVVTripletAmino): _40.DVVTriplet;
                toAmino(message: _40.DVVTriplet): _40.DVVTripletAmino;
                fromAminoMsg(object: _40.DVVTripletAminoMsg): _40.DVVTriplet;
                toAminoMsg(message: _40.DVVTriplet): _40.DVVTripletAminoMsg;
                fromProtoMsg(message: _40.DVVTripletProtoMsg): _40.DVVTriplet;
                toProto(message: _40.DVVTriplet): Uint8Array;
                toProtoMsg(message: _40.DVVTriplet): _40.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _40.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.DVVTriplets;
                fromPartial(object: Partial<_40.DVVTriplets>): _40.DVVTriplets;
                fromAmino(object: _40.DVVTripletsAmino): _40.DVVTriplets;
                toAmino(message: _40.DVVTriplets): _40.DVVTripletsAmino;
                fromAminoMsg(object: _40.DVVTripletsAminoMsg): _40.DVVTriplets;
                toAminoMsg(message: _40.DVVTriplets): _40.DVVTripletsAminoMsg;
                fromProtoMsg(message: _40.DVVTripletsProtoMsg): _40.DVVTriplets;
                toProto(message: _40.DVVTriplets): Uint8Array;
                toProtoMsg(message: _40.DVVTriplets): _40.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _40.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.Delegation;
                fromPartial(object: Partial<_40.Delegation>): _40.Delegation;
                fromAmino(object: _40.DelegationAmino): _40.Delegation;
                toAmino(message: _40.Delegation): _40.DelegationAmino;
                fromAminoMsg(object: _40.DelegationAminoMsg): _40.Delegation;
                toAminoMsg(message: _40.Delegation): _40.DelegationAminoMsg;
                fromProtoMsg(message: _40.DelegationProtoMsg): _40.Delegation;
                toProto(message: _40.Delegation): Uint8Array;
                toProtoMsg(message: _40.Delegation): _40.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _40.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.UnbondingDelegation;
                fromPartial(object: Partial<_40.UnbondingDelegation>): _40.UnbondingDelegation;
                fromAmino(object: _40.UnbondingDelegationAmino): _40.UnbondingDelegation;
                toAmino(message: _40.UnbondingDelegation): _40.UnbondingDelegationAmino;
                fromAminoMsg(object: _40.UnbondingDelegationAminoMsg): _40.UnbondingDelegation;
                toAminoMsg(message: _40.UnbondingDelegation): _40.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _40.UnbondingDelegationProtoMsg): _40.UnbondingDelegation;
                toProto(message: _40.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _40.UnbondingDelegation): _40.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _40.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.UnbondingDelegationEntry;
                fromPartial(object: Partial<_40.UnbondingDelegationEntry>): _40.UnbondingDelegationEntry;
                fromAmino(object: _40.UnbondingDelegationEntryAmino): _40.UnbondingDelegationEntry;
                toAmino(message: _40.UnbondingDelegationEntry): _40.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _40.UnbondingDelegationEntryAminoMsg): _40.UnbondingDelegationEntry;
                toAminoMsg(message: _40.UnbondingDelegationEntry): _40.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _40.UnbondingDelegationEntryProtoMsg): _40.UnbondingDelegationEntry;
                toProto(message: _40.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _40.UnbondingDelegationEntry): _40.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _40.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.RedelegationEntry;
                fromPartial(object: Partial<_40.RedelegationEntry>): _40.RedelegationEntry;
                fromAmino(object: _40.RedelegationEntryAmino): _40.RedelegationEntry;
                toAmino(message: _40.RedelegationEntry): _40.RedelegationEntryAmino;
                fromAminoMsg(object: _40.RedelegationEntryAminoMsg): _40.RedelegationEntry;
                toAminoMsg(message: _40.RedelegationEntry): _40.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _40.RedelegationEntryProtoMsg): _40.RedelegationEntry;
                toProto(message: _40.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _40.RedelegationEntry): _40.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _40.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.Redelegation;
                fromPartial(object: Partial<_40.Redelegation>): _40.Redelegation;
                fromAmino(object: _40.RedelegationAmino): _40.Redelegation;
                toAmino(message: _40.Redelegation): _40.RedelegationAmino;
                fromAminoMsg(object: _40.RedelegationAminoMsg): _40.Redelegation;
                toAminoMsg(message: _40.Redelegation): _40.RedelegationAminoMsg;
                fromProtoMsg(message: _40.RedelegationProtoMsg): _40.Redelegation;
                toProto(message: _40.Redelegation): Uint8Array;
                toProtoMsg(message: _40.Redelegation): _40.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _40.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.Params;
                fromPartial(object: Partial<_40.Params>): _40.Params;
                fromAmino(object: _40.ParamsAmino): _40.Params;
                toAmino(message: _40.Params): _40.ParamsAmino;
                fromAminoMsg(object: _40.ParamsAminoMsg): _40.Params;
                toAminoMsg(message: _40.Params): _40.ParamsAminoMsg;
                fromProtoMsg(message: _40.ParamsProtoMsg): _40.Params;
                toProto(message: _40.Params): Uint8Array;
                toProtoMsg(message: _40.Params): _40.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _40.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.DelegationResponse;
                fromPartial(object: Partial<_40.DelegationResponse>): _40.DelegationResponse;
                fromAmino(object: _40.DelegationResponseAmino): _40.DelegationResponse;
                toAmino(message: _40.DelegationResponse): _40.DelegationResponseAmino;
                fromAminoMsg(object: _40.DelegationResponseAminoMsg): _40.DelegationResponse;
                toAminoMsg(message: _40.DelegationResponse): _40.DelegationResponseAminoMsg;
                fromProtoMsg(message: _40.DelegationResponseProtoMsg): _40.DelegationResponse;
                toProto(message: _40.DelegationResponse): Uint8Array;
                toProtoMsg(message: _40.DelegationResponse): _40.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _40.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.RedelegationEntryResponse;
                fromPartial(object: Partial<_40.RedelegationEntryResponse>): _40.RedelegationEntryResponse;
                fromAmino(object: _40.RedelegationEntryResponseAmino): _40.RedelegationEntryResponse;
                toAmino(message: _40.RedelegationEntryResponse): _40.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _40.RedelegationEntryResponseAminoMsg): _40.RedelegationEntryResponse;
                toAminoMsg(message: _40.RedelegationEntryResponse): _40.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _40.RedelegationEntryResponseProtoMsg): _40.RedelegationEntryResponse;
                toProto(message: _40.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _40.RedelegationEntryResponse): _40.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _40.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.RedelegationResponse;
                fromPartial(object: Partial<_40.RedelegationResponse>): _40.RedelegationResponse;
                fromAmino(object: _40.RedelegationResponseAmino): _40.RedelegationResponse;
                toAmino(message: _40.RedelegationResponse): _40.RedelegationResponseAmino;
                fromAminoMsg(object: _40.RedelegationResponseAminoMsg): _40.RedelegationResponse;
                toAminoMsg(message: _40.RedelegationResponse): _40.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _40.RedelegationResponseProtoMsg): _40.RedelegationResponse;
                toProto(message: _40.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _40.RedelegationResponse): _40.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _40.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.Pool;
                fromPartial(object: Partial<_40.Pool>): _40.Pool;
                fromAmino(object: _40.PoolAmino): _40.Pool;
                toAmino(message: _40.Pool): _40.PoolAmino;
                fromAminoMsg(object: _40.PoolAminoMsg): _40.Pool;
                toAminoMsg(message: _40.Pool): _40.PoolAminoMsg;
                fromProtoMsg(message: _40.PoolProtoMsg): _40.Pool;
                toProto(message: _40.Pool): Uint8Array;
                toProtoMsg(message: _40.Pool): _40.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _39.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryValidatorsRequest;
                fromPartial(object: Partial<_39.QueryValidatorsRequest>): _39.QueryValidatorsRequest;
                fromAmino(object: _39.QueryValidatorsRequestAmino): _39.QueryValidatorsRequest;
                toAmino(message: _39.QueryValidatorsRequest): _39.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _39.QueryValidatorsRequestAminoMsg): _39.QueryValidatorsRequest;
                toAminoMsg(message: _39.QueryValidatorsRequest): _39.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _39.QueryValidatorsRequestProtoMsg): _39.QueryValidatorsRequest;
                toProto(message: _39.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _39.QueryValidatorsRequest): _39.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _39.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryValidatorsResponse;
                fromPartial(object: Partial<_39.QueryValidatorsResponse>): _39.QueryValidatorsResponse;
                fromAmino(object: _39.QueryValidatorsResponseAmino): _39.QueryValidatorsResponse;
                toAmino(message: _39.QueryValidatorsResponse): _39.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _39.QueryValidatorsResponseAminoMsg): _39.QueryValidatorsResponse;
                toAminoMsg(message: _39.QueryValidatorsResponse): _39.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _39.QueryValidatorsResponseProtoMsg): _39.QueryValidatorsResponse;
                toProto(message: _39.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _39.QueryValidatorsResponse): _39.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _39.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryValidatorRequest;
                fromPartial(object: Partial<_39.QueryValidatorRequest>): _39.QueryValidatorRequest;
                fromAmino(object: _39.QueryValidatorRequestAmino): _39.QueryValidatorRequest;
                toAmino(message: _39.QueryValidatorRequest): _39.QueryValidatorRequestAmino;
                fromAminoMsg(object: _39.QueryValidatorRequestAminoMsg): _39.QueryValidatorRequest;
                toAminoMsg(message: _39.QueryValidatorRequest): _39.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _39.QueryValidatorRequestProtoMsg): _39.QueryValidatorRequest;
                toProto(message: _39.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _39.QueryValidatorRequest): _39.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _39.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryValidatorResponse;
                fromPartial(object: Partial<_39.QueryValidatorResponse>): _39.QueryValidatorResponse;
                fromAmino(object: _39.QueryValidatorResponseAmino): _39.QueryValidatorResponse;
                toAmino(message: _39.QueryValidatorResponse): _39.QueryValidatorResponseAmino;
                fromAminoMsg(object: _39.QueryValidatorResponseAminoMsg): _39.QueryValidatorResponse;
                toAminoMsg(message: _39.QueryValidatorResponse): _39.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _39.QueryValidatorResponseProtoMsg): _39.QueryValidatorResponse;
                toProto(message: _39.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _39.QueryValidatorResponse): _39.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _39.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_39.QueryValidatorDelegationsRequest>): _39.QueryValidatorDelegationsRequest;
                fromAmino(object: _39.QueryValidatorDelegationsRequestAmino): _39.QueryValidatorDelegationsRequest;
                toAmino(message: _39.QueryValidatorDelegationsRequest): _39.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _39.QueryValidatorDelegationsRequestAminoMsg): _39.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _39.QueryValidatorDelegationsRequest): _39.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _39.QueryValidatorDelegationsRequestProtoMsg): _39.QueryValidatorDelegationsRequest;
                toProto(message: _39.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _39.QueryValidatorDelegationsRequest): _39.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _39.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_39.QueryValidatorDelegationsResponse>): _39.QueryValidatorDelegationsResponse;
                fromAmino(object: _39.QueryValidatorDelegationsResponseAmino): _39.QueryValidatorDelegationsResponse;
                toAmino(message: _39.QueryValidatorDelegationsResponse): _39.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _39.QueryValidatorDelegationsResponseAminoMsg): _39.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _39.QueryValidatorDelegationsResponse): _39.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _39.QueryValidatorDelegationsResponseProtoMsg): _39.QueryValidatorDelegationsResponse;
                toProto(message: _39.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _39.QueryValidatorDelegationsResponse): _39.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _39.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_39.QueryValidatorUnbondingDelegationsRequest>): _39.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _39.QueryValidatorUnbondingDelegationsRequestAmino): _39.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _39.QueryValidatorUnbondingDelegationsRequest): _39.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _39.QueryValidatorUnbondingDelegationsRequestAminoMsg): _39.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _39.QueryValidatorUnbondingDelegationsRequest): _39.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _39.QueryValidatorUnbondingDelegationsRequestProtoMsg): _39.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _39.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _39.QueryValidatorUnbondingDelegationsRequest): _39.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _39.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_39.QueryValidatorUnbondingDelegationsResponse>): _39.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _39.QueryValidatorUnbondingDelegationsResponseAmino): _39.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _39.QueryValidatorUnbondingDelegationsResponse): _39.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _39.QueryValidatorUnbondingDelegationsResponseAminoMsg): _39.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _39.QueryValidatorUnbondingDelegationsResponse): _39.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _39.QueryValidatorUnbondingDelegationsResponseProtoMsg): _39.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _39.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _39.QueryValidatorUnbondingDelegationsResponse): _39.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _39.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryDelegationRequest;
                fromPartial(object: Partial<_39.QueryDelegationRequest>): _39.QueryDelegationRequest;
                fromAmino(object: _39.QueryDelegationRequestAmino): _39.QueryDelegationRequest;
                toAmino(message: _39.QueryDelegationRequest): _39.QueryDelegationRequestAmino;
                fromAminoMsg(object: _39.QueryDelegationRequestAminoMsg): _39.QueryDelegationRequest;
                toAminoMsg(message: _39.QueryDelegationRequest): _39.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _39.QueryDelegationRequestProtoMsg): _39.QueryDelegationRequest;
                toProto(message: _39.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _39.QueryDelegationRequest): _39.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _39.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryDelegationResponse;
                fromPartial(object: Partial<_39.QueryDelegationResponse>): _39.QueryDelegationResponse;
                fromAmino(object: _39.QueryDelegationResponseAmino): _39.QueryDelegationResponse;
                toAmino(message: _39.QueryDelegationResponse): _39.QueryDelegationResponseAmino;
                fromAminoMsg(object: _39.QueryDelegationResponseAminoMsg): _39.QueryDelegationResponse;
                toAminoMsg(message: _39.QueryDelegationResponse): _39.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _39.QueryDelegationResponseProtoMsg): _39.QueryDelegationResponse;
                toProto(message: _39.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _39.QueryDelegationResponse): _39.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _39.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_39.QueryUnbondingDelegationRequest>): _39.QueryUnbondingDelegationRequest;
                fromAmino(object: _39.QueryUnbondingDelegationRequestAmino): _39.QueryUnbondingDelegationRequest;
                toAmino(message: _39.QueryUnbondingDelegationRequest): _39.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _39.QueryUnbondingDelegationRequestAminoMsg): _39.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _39.QueryUnbondingDelegationRequest): _39.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _39.QueryUnbondingDelegationRequestProtoMsg): _39.QueryUnbondingDelegationRequest;
                toProto(message: _39.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _39.QueryUnbondingDelegationRequest): _39.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _39.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_39.QueryUnbondingDelegationResponse>): _39.QueryUnbondingDelegationResponse;
                fromAmino(object: _39.QueryUnbondingDelegationResponseAmino): _39.QueryUnbondingDelegationResponse;
                toAmino(message: _39.QueryUnbondingDelegationResponse): _39.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _39.QueryUnbondingDelegationResponseAminoMsg): _39.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _39.QueryUnbondingDelegationResponse): _39.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _39.QueryUnbondingDelegationResponseProtoMsg): _39.QueryUnbondingDelegationResponse;
                toProto(message: _39.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _39.QueryUnbondingDelegationResponse): _39.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _39.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_39.QueryDelegatorDelegationsRequest>): _39.QueryDelegatorDelegationsRequest;
                fromAmino(object: _39.QueryDelegatorDelegationsRequestAmino): _39.QueryDelegatorDelegationsRequest;
                toAmino(message: _39.QueryDelegatorDelegationsRequest): _39.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _39.QueryDelegatorDelegationsRequestAminoMsg): _39.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _39.QueryDelegatorDelegationsRequest): _39.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _39.QueryDelegatorDelegationsRequestProtoMsg): _39.QueryDelegatorDelegationsRequest;
                toProto(message: _39.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _39.QueryDelegatorDelegationsRequest): _39.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _39.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_39.QueryDelegatorDelegationsResponse>): _39.QueryDelegatorDelegationsResponse;
                fromAmino(object: _39.QueryDelegatorDelegationsResponseAmino): _39.QueryDelegatorDelegationsResponse;
                toAmino(message: _39.QueryDelegatorDelegationsResponse): _39.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _39.QueryDelegatorDelegationsResponseAminoMsg): _39.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _39.QueryDelegatorDelegationsResponse): _39.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _39.QueryDelegatorDelegationsResponseProtoMsg): _39.QueryDelegatorDelegationsResponse;
                toProto(message: _39.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _39.QueryDelegatorDelegationsResponse): _39.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _39.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_39.QueryDelegatorUnbondingDelegationsRequest>): _39.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _39.QueryDelegatorUnbondingDelegationsRequestAmino): _39.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _39.QueryDelegatorUnbondingDelegationsRequest): _39.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _39.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _39.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _39.QueryDelegatorUnbondingDelegationsRequest): _39.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _39.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _39.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _39.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _39.QueryDelegatorUnbondingDelegationsRequest): _39.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _39.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_39.QueryDelegatorUnbondingDelegationsResponse>): _39.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _39.QueryDelegatorUnbondingDelegationsResponseAmino): _39.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _39.QueryDelegatorUnbondingDelegationsResponse): _39.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _39.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _39.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _39.QueryDelegatorUnbondingDelegationsResponse): _39.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _39.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _39.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _39.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _39.QueryDelegatorUnbondingDelegationsResponse): _39.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _39.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryRedelegationsRequest;
                fromPartial(object: Partial<_39.QueryRedelegationsRequest>): _39.QueryRedelegationsRequest;
                fromAmino(object: _39.QueryRedelegationsRequestAmino): _39.QueryRedelegationsRequest;
                toAmino(message: _39.QueryRedelegationsRequest): _39.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _39.QueryRedelegationsRequestAminoMsg): _39.QueryRedelegationsRequest;
                toAminoMsg(message: _39.QueryRedelegationsRequest): _39.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _39.QueryRedelegationsRequestProtoMsg): _39.QueryRedelegationsRequest;
                toProto(message: _39.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _39.QueryRedelegationsRequest): _39.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _39.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryRedelegationsResponse;
                fromPartial(object: Partial<_39.QueryRedelegationsResponse>): _39.QueryRedelegationsResponse;
                fromAmino(object: _39.QueryRedelegationsResponseAmino): _39.QueryRedelegationsResponse;
                toAmino(message: _39.QueryRedelegationsResponse): _39.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _39.QueryRedelegationsResponseAminoMsg): _39.QueryRedelegationsResponse;
                toAminoMsg(message: _39.QueryRedelegationsResponse): _39.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _39.QueryRedelegationsResponseProtoMsg): _39.QueryRedelegationsResponse;
                toProto(message: _39.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _39.QueryRedelegationsResponse): _39.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _39.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_39.QueryDelegatorValidatorsRequest>): _39.QueryDelegatorValidatorsRequest;
                fromAmino(object: _39.QueryDelegatorValidatorsRequestAmino): _39.QueryDelegatorValidatorsRequest;
                toAmino(message: _39.QueryDelegatorValidatorsRequest): _39.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _39.QueryDelegatorValidatorsRequestAminoMsg): _39.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _39.QueryDelegatorValidatorsRequest): _39.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _39.QueryDelegatorValidatorsRequestProtoMsg): _39.QueryDelegatorValidatorsRequest;
                toProto(message: _39.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _39.QueryDelegatorValidatorsRequest): _39.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _39.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_39.QueryDelegatorValidatorsResponse>): _39.QueryDelegatorValidatorsResponse;
                fromAmino(object: _39.QueryDelegatorValidatorsResponseAmino): _39.QueryDelegatorValidatorsResponse;
                toAmino(message: _39.QueryDelegatorValidatorsResponse): _39.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _39.QueryDelegatorValidatorsResponseAminoMsg): _39.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _39.QueryDelegatorValidatorsResponse): _39.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _39.QueryDelegatorValidatorsResponseProtoMsg): _39.QueryDelegatorValidatorsResponse;
                toProto(message: _39.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _39.QueryDelegatorValidatorsResponse): _39.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _39.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_39.QueryDelegatorValidatorRequest>): _39.QueryDelegatorValidatorRequest;
                fromAmino(object: _39.QueryDelegatorValidatorRequestAmino): _39.QueryDelegatorValidatorRequest;
                toAmino(message: _39.QueryDelegatorValidatorRequest): _39.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _39.QueryDelegatorValidatorRequestAminoMsg): _39.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _39.QueryDelegatorValidatorRequest): _39.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _39.QueryDelegatorValidatorRequestProtoMsg): _39.QueryDelegatorValidatorRequest;
                toProto(message: _39.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _39.QueryDelegatorValidatorRequest): _39.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _39.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_39.QueryDelegatorValidatorResponse>): _39.QueryDelegatorValidatorResponse;
                fromAmino(object: _39.QueryDelegatorValidatorResponseAmino): _39.QueryDelegatorValidatorResponse;
                toAmino(message: _39.QueryDelegatorValidatorResponse): _39.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _39.QueryDelegatorValidatorResponseAminoMsg): _39.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _39.QueryDelegatorValidatorResponse): _39.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _39.QueryDelegatorValidatorResponseProtoMsg): _39.QueryDelegatorValidatorResponse;
                toProto(message: _39.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _39.QueryDelegatorValidatorResponse): _39.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _39.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_39.QueryHistoricalInfoRequest>): _39.QueryHistoricalInfoRequest;
                fromAmino(object: _39.QueryHistoricalInfoRequestAmino): _39.QueryHistoricalInfoRequest;
                toAmino(message: _39.QueryHistoricalInfoRequest): _39.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _39.QueryHistoricalInfoRequestAminoMsg): _39.QueryHistoricalInfoRequest;
                toAminoMsg(message: _39.QueryHistoricalInfoRequest): _39.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _39.QueryHistoricalInfoRequestProtoMsg): _39.QueryHistoricalInfoRequest;
                toProto(message: _39.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _39.QueryHistoricalInfoRequest): _39.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _39.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_39.QueryHistoricalInfoResponse>): _39.QueryHistoricalInfoResponse;
                fromAmino(object: _39.QueryHistoricalInfoResponseAmino): _39.QueryHistoricalInfoResponse;
                toAmino(message: _39.QueryHistoricalInfoResponse): _39.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _39.QueryHistoricalInfoResponseAminoMsg): _39.QueryHistoricalInfoResponse;
                toAminoMsg(message: _39.QueryHistoricalInfoResponse): _39.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _39.QueryHistoricalInfoResponseProtoMsg): _39.QueryHistoricalInfoResponse;
                toProto(message: _39.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _39.QueryHistoricalInfoResponse): _39.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _39.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryPoolRequest;
                fromPartial(_: Partial<_39.QueryPoolRequest>): _39.QueryPoolRequest;
                fromAmino(_: _39.QueryPoolRequestAmino): _39.QueryPoolRequest;
                toAmino(_: _39.QueryPoolRequest): _39.QueryPoolRequestAmino;
                fromAminoMsg(object: _39.QueryPoolRequestAminoMsg): _39.QueryPoolRequest;
                toAminoMsg(message: _39.QueryPoolRequest): _39.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _39.QueryPoolRequestProtoMsg): _39.QueryPoolRequest;
                toProto(message: _39.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _39.QueryPoolRequest): _39.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _39.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryPoolResponse;
                fromPartial(object: Partial<_39.QueryPoolResponse>): _39.QueryPoolResponse;
                fromAmino(object: _39.QueryPoolResponseAmino): _39.QueryPoolResponse;
                toAmino(message: _39.QueryPoolResponse): _39.QueryPoolResponseAmino;
                fromAminoMsg(object: _39.QueryPoolResponseAminoMsg): _39.QueryPoolResponse;
                toAminoMsg(message: _39.QueryPoolResponse): _39.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _39.QueryPoolResponseProtoMsg): _39.QueryPoolResponse;
                toProto(message: _39.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _39.QueryPoolResponse): _39.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _39.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryParamsRequest;
                fromPartial(_: Partial<_39.QueryParamsRequest>): _39.QueryParamsRequest;
                fromAmino(_: _39.QueryParamsRequestAmino): _39.QueryParamsRequest;
                toAmino(_: _39.QueryParamsRequest): _39.QueryParamsRequestAmino;
                fromAminoMsg(object: _39.QueryParamsRequestAminoMsg): _39.QueryParamsRequest;
                toAminoMsg(message: _39.QueryParamsRequest): _39.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _39.QueryParamsRequestProtoMsg): _39.QueryParamsRequest;
                toProto(message: _39.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _39.QueryParamsRequest): _39.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _39.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryParamsResponse;
                fromPartial(object: Partial<_39.QueryParamsResponse>): _39.QueryParamsResponse;
                fromAmino(object: _39.QueryParamsResponseAmino): _39.QueryParamsResponse;
                toAmino(message: _39.QueryParamsResponse): _39.QueryParamsResponseAmino;
                fromAminoMsg(object: _39.QueryParamsResponseAminoMsg): _39.QueryParamsResponse;
                toAminoMsg(message: _39.QueryParamsResponse): _39.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _39.QueryParamsResponseProtoMsg): _39.QueryParamsResponse;
                toProto(message: _39.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _39.QueryParamsResponse): _39.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _38.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.GenesisState;
                fromPartial(object: Partial<_38.GenesisState>): _38.GenesisState;
                fromAmino(object: _38.GenesisStateAmino): _38.GenesisState;
                toAmino(message: _38.GenesisState): _38.GenesisStateAmino;
                fromAminoMsg(object: _38.GenesisStateAminoMsg): _38.GenesisState;
                toAminoMsg(message: _38.GenesisState): _38.GenesisStateAminoMsg;
                fromProtoMsg(message: _38.GenesisStateProtoMsg): _38.GenesisState;
                toProto(message: _38.GenesisState): Uint8Array;
                toProtoMsg(message: _38.GenesisState): _38.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _38.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.LastValidatorPower;
                fromPartial(object: Partial<_38.LastValidatorPower>): _38.LastValidatorPower;
                fromAmino(object: _38.LastValidatorPowerAmino): _38.LastValidatorPower;
                toAmino(message: _38.LastValidatorPower): _38.LastValidatorPowerAmino;
                fromAminoMsg(object: _38.LastValidatorPowerAminoMsg): _38.LastValidatorPower;
                toAminoMsg(message: _38.LastValidatorPower): _38.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _38.LastValidatorPowerProtoMsg): _38.LastValidatorPower;
                toProto(message: _38.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _38.LastValidatorPower): _38.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _37.AuthorizationType;
            authorizationTypeToJSON(object: _37.AuthorizationType): string;
            AuthorizationType: typeof _37.AuthorizationType;
            AuthorizationTypeSDKType: typeof _37.AuthorizationType;
            AuthorizationTypeAmino: typeof _37.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _37.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.StakeAuthorization;
                fromPartial(object: Partial<_37.StakeAuthorization>): _37.StakeAuthorization;
                fromAmino(object: _37.StakeAuthorizationAmino): _37.StakeAuthorization;
                toAmino(message: _37.StakeAuthorization): _37.StakeAuthorizationAmino;
                fromAminoMsg(object: _37.StakeAuthorizationAminoMsg): _37.StakeAuthorization;
                toAminoMsg(message: _37.StakeAuthorization): _37.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _37.StakeAuthorizationProtoMsg): _37.StakeAuthorization;
                toProto(message: _37.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _37.StakeAuthorization): _37.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _37.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.StakeAuthorization_Validators;
                fromPartial(object: Partial<_37.StakeAuthorization_Validators>): _37.StakeAuthorization_Validators;
                fromAmino(object: _37.StakeAuthorization_ValidatorsAmino): _37.StakeAuthorization_Validators;
                toAmino(message: _37.StakeAuthorization_Validators): _37.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _37.StakeAuthorization_ValidatorsAminoMsg): _37.StakeAuthorization_Validators;
                toAminoMsg(message: _37.StakeAuthorization_Validators): _37.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _37.StakeAuthorization_ValidatorsProtoMsg): _37.StakeAuthorization_Validators;
                toProto(message: _37.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _37.StakeAuthorization_Validators): _37.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _42.SignMode;
                signModeToJSON(object: _42.SignMode): string;
                SignMode: typeof _42.SignMode;
                SignModeSDKType: typeof _42.SignMode;
                SignModeAmino: typeof _42.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _42.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.SignatureDescriptors;
                    fromPartial(object: Partial<_42.SignatureDescriptors>): _42.SignatureDescriptors;
                    fromAmino(object: _42.SignatureDescriptorsAmino): _42.SignatureDescriptors;
                    toAmino(message: _42.SignatureDescriptors): _42.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _42.SignatureDescriptorsAminoMsg): _42.SignatureDescriptors;
                    toAminoMsg(message: _42.SignatureDescriptors): _42.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _42.SignatureDescriptorsProtoMsg): _42.SignatureDescriptors;
                    toProto(message: _42.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _42.SignatureDescriptors): _42.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _42.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.SignatureDescriptor;
                    fromPartial(object: Partial<_42.SignatureDescriptor>): _42.SignatureDescriptor;
                    fromAmino(object: _42.SignatureDescriptorAmino): _42.SignatureDescriptor;
                    toAmino(message: _42.SignatureDescriptor): _42.SignatureDescriptorAmino;
                    fromAminoMsg(object: _42.SignatureDescriptorAminoMsg): _42.SignatureDescriptor;
                    toAminoMsg(message: _42.SignatureDescriptor): _42.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _42.SignatureDescriptorProtoMsg): _42.SignatureDescriptor;
                    toProto(message: _42.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _42.SignatureDescriptor): _42.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _42.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_42.SignatureDescriptor_Data>): _42.SignatureDescriptor_Data;
                    fromAmino(object: _42.SignatureDescriptor_DataAmino): _42.SignatureDescriptor_Data;
                    toAmino(message: _42.SignatureDescriptor_Data): _42.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _42.SignatureDescriptor_DataAminoMsg): _42.SignatureDescriptor_Data;
                    toAminoMsg(message: _42.SignatureDescriptor_Data): _42.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _42.SignatureDescriptor_DataProtoMsg): _42.SignatureDescriptor_Data;
                    toProto(message: _42.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _42.SignatureDescriptor_Data): _42.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _42.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_42.SignatureDescriptor_Data_Single>): _42.SignatureDescriptor_Data_Single;
                    fromAmino(object: _42.SignatureDescriptor_Data_SingleAmino): _42.SignatureDescriptor_Data_Single;
                    toAmino(message: _42.SignatureDescriptor_Data_Single): _42.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _42.SignatureDescriptor_Data_SingleAminoMsg): _42.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _42.SignatureDescriptor_Data_Single): _42.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _42.SignatureDescriptor_Data_SingleProtoMsg): _42.SignatureDescriptor_Data_Single;
                    toProto(message: _42.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _42.SignatureDescriptor_Data_Single): _42.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _42.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_42.SignatureDescriptor_Data_Multi>): _42.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _42.SignatureDescriptor_Data_MultiAmino): _42.SignatureDescriptor_Data_Multi;
                    toAmino(message: _42.SignatureDescriptor_Data_Multi): _42.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _42.SignatureDescriptor_Data_MultiAminoMsg): _42.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _42.SignatureDescriptor_Data_Multi): _42.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _42.SignatureDescriptor_Data_MultiProtoMsg): _42.SignatureDescriptor_Data_Multi;
                    toProto(message: _42.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _42.SignatureDescriptor_Data_Multi): _42.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _219.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _43.SimulateRequest): Promise<_43.SimulateResponse>;
                getTx(request: _43.GetTxRequest): Promise<_43.GetTxResponse>;
                broadcastTx(request: _43.BroadcastTxRequest): Promise<_43.BroadcastTxResponse>;
                getTxsEvent(request: _43.GetTxsEventRequest): Promise<_43.GetTxsEventResponse>;
            };
            LCDQueryClient: typeof _209.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _44.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.Tx;
                fromPartial(object: Partial<_44.Tx>): _44.Tx;
                fromAmino(object: _44.TxAmino): _44.Tx;
                toAmino(message: _44.Tx): _44.TxAmino;
                fromAminoMsg(object: _44.TxAminoMsg): _44.Tx;
                toAminoMsg(message: _44.Tx): _44.TxAminoMsg;
                fromProtoMsg(message: _44.TxProtoMsg): _44.Tx;
                toProto(message: _44.Tx): Uint8Array;
                toProtoMsg(message: _44.Tx): _44.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _44.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.TxRaw;
                fromPartial(object: Partial<_44.TxRaw>): _44.TxRaw;
                fromAmino(object: _44.TxRawAmino): _44.TxRaw;
                toAmino(message: _44.TxRaw): _44.TxRawAmino;
                fromAminoMsg(object: _44.TxRawAminoMsg): _44.TxRaw;
                toAminoMsg(message: _44.TxRaw): _44.TxRawAminoMsg;
                fromProtoMsg(message: _44.TxRawProtoMsg): _44.TxRaw;
                toProto(message: _44.TxRaw): Uint8Array;
                toProtoMsg(message: _44.TxRaw): _44.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _44.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.SignDoc;
                fromPartial(object: Partial<_44.SignDoc>): _44.SignDoc;
                fromAmino(object: _44.SignDocAmino): _44.SignDoc;
                toAmino(message: _44.SignDoc): _44.SignDocAmino;
                fromAminoMsg(object: _44.SignDocAminoMsg): _44.SignDoc;
                toAminoMsg(message: _44.SignDoc): _44.SignDocAminoMsg;
                fromProtoMsg(message: _44.SignDocProtoMsg): _44.SignDoc;
                toProto(message: _44.SignDoc): Uint8Array;
                toProtoMsg(message: _44.SignDoc): _44.SignDocProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _44.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.TxBody;
                fromPartial(object: Partial<_44.TxBody>): _44.TxBody;
                fromAmino(object: _44.TxBodyAmino): _44.TxBody;
                toAmino(message: _44.TxBody): _44.TxBodyAmino;
                fromAminoMsg(object: _44.TxBodyAminoMsg): _44.TxBody;
                toAminoMsg(message: _44.TxBody): _44.TxBodyAminoMsg;
                fromProtoMsg(message: _44.TxBodyProtoMsg): _44.TxBody;
                toProto(message: _44.TxBody): Uint8Array;
                toProtoMsg(message: _44.TxBody): _44.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _44.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.AuthInfo;
                fromPartial(object: Partial<_44.AuthInfo>): _44.AuthInfo;
                fromAmino(object: _44.AuthInfoAmino): _44.AuthInfo;
                toAmino(message: _44.AuthInfo): _44.AuthInfoAmino;
                fromAminoMsg(object: _44.AuthInfoAminoMsg): _44.AuthInfo;
                toAminoMsg(message: _44.AuthInfo): _44.AuthInfoAminoMsg;
                fromProtoMsg(message: _44.AuthInfoProtoMsg): _44.AuthInfo;
                toProto(message: _44.AuthInfo): Uint8Array;
                toProtoMsg(message: _44.AuthInfo): _44.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _44.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.SignerInfo;
                fromPartial(object: Partial<_44.SignerInfo>): _44.SignerInfo;
                fromAmino(object: _44.SignerInfoAmino): _44.SignerInfo;
                toAmino(message: _44.SignerInfo): _44.SignerInfoAmino;
                fromAminoMsg(object: _44.SignerInfoAminoMsg): _44.SignerInfo;
                toAminoMsg(message: _44.SignerInfo): _44.SignerInfoAminoMsg;
                fromProtoMsg(message: _44.SignerInfoProtoMsg): _44.SignerInfo;
                toProto(message: _44.SignerInfo): Uint8Array;
                toProtoMsg(message: _44.SignerInfo): _44.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _44.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.ModeInfo;
                fromPartial(object: Partial<_44.ModeInfo>): _44.ModeInfo;
                fromAmino(object: _44.ModeInfoAmino): _44.ModeInfo;
                toAmino(message: _44.ModeInfo): _44.ModeInfoAmino;
                fromAminoMsg(object: _44.ModeInfoAminoMsg): _44.ModeInfo;
                toAminoMsg(message: _44.ModeInfo): _44.ModeInfoAminoMsg;
                fromProtoMsg(message: _44.ModeInfoProtoMsg): _44.ModeInfo;
                toProto(message: _44.ModeInfo): Uint8Array;
                toProtoMsg(message: _44.ModeInfo): _44.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _44.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.ModeInfo_Single;
                fromPartial(object: Partial<_44.ModeInfo_Single>): _44.ModeInfo_Single;
                fromAmino(object: _44.ModeInfo_SingleAmino): _44.ModeInfo_Single;
                toAmino(message: _44.ModeInfo_Single): _44.ModeInfo_SingleAmino;
                fromAminoMsg(object: _44.ModeInfo_SingleAminoMsg): _44.ModeInfo_Single;
                toAminoMsg(message: _44.ModeInfo_Single): _44.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _44.ModeInfo_SingleProtoMsg): _44.ModeInfo_Single;
                toProto(message: _44.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _44.ModeInfo_Single): _44.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _44.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.ModeInfo_Multi;
                fromPartial(object: Partial<_44.ModeInfo_Multi>): _44.ModeInfo_Multi;
                fromAmino(object: _44.ModeInfo_MultiAmino): _44.ModeInfo_Multi;
                toAmino(message: _44.ModeInfo_Multi): _44.ModeInfo_MultiAmino;
                fromAminoMsg(object: _44.ModeInfo_MultiAminoMsg): _44.ModeInfo_Multi;
                toAminoMsg(message: _44.ModeInfo_Multi): _44.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _44.ModeInfo_MultiProtoMsg): _44.ModeInfo_Multi;
                toProto(message: _44.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _44.ModeInfo_Multi): _44.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _44.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.Fee;
                fromPartial(object: Partial<_44.Fee>): _44.Fee;
                fromAmino(object: _44.FeeAmino): _44.Fee;
                toAmino(message: _44.Fee): _44.FeeAmino;
                fromAminoMsg(object: _44.FeeAminoMsg): _44.Fee;
                toAminoMsg(message: _44.Fee): _44.FeeAminoMsg;
                fromProtoMsg(message: _44.FeeProtoMsg): _44.Fee;
                toProto(message: _44.Fee): Uint8Array;
                toProtoMsg(message: _44.Fee): _44.FeeProtoMsg;
            };
            orderByFromJSON(object: any): _43.OrderBy;
            orderByToJSON(object: _43.OrderBy): string;
            broadcastModeFromJSON(object: any): _43.BroadcastMode;
            broadcastModeToJSON(object: _43.BroadcastMode): string;
            OrderBy: typeof _43.OrderBy;
            OrderBySDKType: typeof _43.OrderBy;
            OrderByAmino: typeof _43.OrderBy;
            BroadcastMode: typeof _43.BroadcastMode;
            BroadcastModeSDKType: typeof _43.BroadcastMode;
            BroadcastModeAmino: typeof _43.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _43.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.GetTxsEventRequest;
                fromPartial(object: Partial<_43.GetTxsEventRequest>): _43.GetTxsEventRequest;
                fromAmino(object: _43.GetTxsEventRequestAmino): _43.GetTxsEventRequest;
                toAmino(message: _43.GetTxsEventRequest): _43.GetTxsEventRequestAmino;
                fromAminoMsg(object: _43.GetTxsEventRequestAminoMsg): _43.GetTxsEventRequest;
                toAminoMsg(message: _43.GetTxsEventRequest): _43.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _43.GetTxsEventRequestProtoMsg): _43.GetTxsEventRequest;
                toProto(message: _43.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _43.GetTxsEventRequest): _43.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _43.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.GetTxsEventResponse;
                fromPartial(object: Partial<_43.GetTxsEventResponse>): _43.GetTxsEventResponse;
                fromAmino(object: _43.GetTxsEventResponseAmino): _43.GetTxsEventResponse;
                toAmino(message: _43.GetTxsEventResponse): _43.GetTxsEventResponseAmino;
                fromAminoMsg(object: _43.GetTxsEventResponseAminoMsg): _43.GetTxsEventResponse;
                toAminoMsg(message: _43.GetTxsEventResponse): _43.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _43.GetTxsEventResponseProtoMsg): _43.GetTxsEventResponse;
                toProto(message: _43.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _43.GetTxsEventResponse): _43.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _43.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.BroadcastTxRequest;
                fromPartial(object: Partial<_43.BroadcastTxRequest>): _43.BroadcastTxRequest;
                fromAmino(object: _43.BroadcastTxRequestAmino): _43.BroadcastTxRequest;
                toAmino(message: _43.BroadcastTxRequest): _43.BroadcastTxRequestAmino;
                fromAminoMsg(object: _43.BroadcastTxRequestAminoMsg): _43.BroadcastTxRequest;
                toAminoMsg(message: _43.BroadcastTxRequest): _43.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _43.BroadcastTxRequestProtoMsg): _43.BroadcastTxRequest;
                toProto(message: _43.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _43.BroadcastTxRequest): _43.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _43.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.BroadcastTxResponse;
                fromPartial(object: Partial<_43.BroadcastTxResponse>): _43.BroadcastTxResponse;
                fromAmino(object: _43.BroadcastTxResponseAmino): _43.BroadcastTxResponse;
                toAmino(message: _43.BroadcastTxResponse): _43.BroadcastTxResponseAmino;
                fromAminoMsg(object: _43.BroadcastTxResponseAminoMsg): _43.BroadcastTxResponse;
                toAminoMsg(message: _43.BroadcastTxResponse): _43.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _43.BroadcastTxResponseProtoMsg): _43.BroadcastTxResponse;
                toProto(message: _43.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _43.BroadcastTxResponse): _43.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _43.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.SimulateRequest;
                fromPartial(object: Partial<_43.SimulateRequest>): _43.SimulateRequest;
                fromAmino(object: _43.SimulateRequestAmino): _43.SimulateRequest;
                toAmino(message: _43.SimulateRequest): _43.SimulateRequestAmino;
                fromAminoMsg(object: _43.SimulateRequestAminoMsg): _43.SimulateRequest;
                toAminoMsg(message: _43.SimulateRequest): _43.SimulateRequestAminoMsg;
                fromProtoMsg(message: _43.SimulateRequestProtoMsg): _43.SimulateRequest;
                toProto(message: _43.SimulateRequest): Uint8Array;
                toProtoMsg(message: _43.SimulateRequest): _43.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _43.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.SimulateResponse;
                fromPartial(object: Partial<_43.SimulateResponse>): _43.SimulateResponse;
                fromAmino(object: _43.SimulateResponseAmino): _43.SimulateResponse;
                toAmino(message: _43.SimulateResponse): _43.SimulateResponseAmino;
                fromAminoMsg(object: _43.SimulateResponseAminoMsg): _43.SimulateResponse;
                toAminoMsg(message: _43.SimulateResponse): _43.SimulateResponseAminoMsg;
                fromProtoMsg(message: _43.SimulateResponseProtoMsg): _43.SimulateResponse;
                toProto(message: _43.SimulateResponse): Uint8Array;
                toProtoMsg(message: _43.SimulateResponse): _43.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _43.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.GetTxRequest;
                fromPartial(object: Partial<_43.GetTxRequest>): _43.GetTxRequest;
                fromAmino(object: _43.GetTxRequestAmino): _43.GetTxRequest;
                toAmino(message: _43.GetTxRequest): _43.GetTxRequestAmino;
                fromAminoMsg(object: _43.GetTxRequestAminoMsg): _43.GetTxRequest;
                toAminoMsg(message: _43.GetTxRequest): _43.GetTxRequestAminoMsg;
                fromProtoMsg(message: _43.GetTxRequestProtoMsg): _43.GetTxRequest;
                toProto(message: _43.GetTxRequest): Uint8Array;
                toProtoMsg(message: _43.GetTxRequest): _43.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _43.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.GetTxResponse;
                fromPartial(object: Partial<_43.GetTxResponse>): _43.GetTxResponse;
                fromAmino(object: _43.GetTxResponseAmino): _43.GetTxResponse;
                toAmino(message: _43.GetTxResponse): _43.GetTxResponseAmino;
                fromAminoMsg(object: _43.GetTxResponseAminoMsg): _43.GetTxResponse;
                toAminoMsg(message: _43.GetTxResponse): _43.GetTxResponseAminoMsg;
                fromProtoMsg(message: _43.GetTxResponseProtoMsg): _43.GetTxResponse;
                toProto(message: _43.GetTxResponse): Uint8Array;
                toProtoMsg(message: _43.GetTxResponse): _43.GetTxResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _228.MsgClientImpl;
            QueryClientImpl: typeof _220.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _45.QueryCurrentPlanRequest): Promise<_45.QueryCurrentPlanResponse>;
                appliedPlan(request: _45.QueryAppliedPlanRequest): Promise<_45.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _45.QueryUpgradedConsensusStateRequest): Promise<_45.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _45.QueryModuleVersionsRequest): Promise<_45.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _210.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _47.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _47.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _47.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _47.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _47.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _47.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _47.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _47.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _47.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _47.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _47.MsgSoftwareUpgrade) => _47.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _47.MsgSoftwareUpgradeAmino) => _47.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _47.MsgCancelUpgrade) => _47.MsgCancelUpgradeAmino;
                    fromAmino: (object: _47.MsgCancelUpgradeAmino) => _47.MsgCancelUpgrade;
                };
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _47.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_47.MsgSoftwareUpgrade>): _47.MsgSoftwareUpgrade;
                fromAmino(object: _47.MsgSoftwareUpgradeAmino): _47.MsgSoftwareUpgrade;
                toAmino(message: _47.MsgSoftwareUpgrade): _47.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _47.MsgSoftwareUpgradeAminoMsg): _47.MsgSoftwareUpgrade;
                toAminoMsg(message: _47.MsgSoftwareUpgrade): _47.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _47.MsgSoftwareUpgradeProtoMsg): _47.MsgSoftwareUpgrade;
                toProto(message: _47.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _47.MsgSoftwareUpgrade): _47.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _47.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_47.MsgSoftwareUpgradeResponse>): _47.MsgSoftwareUpgradeResponse;
                fromAmino(_: _47.MsgSoftwareUpgradeResponseAmino): _47.MsgSoftwareUpgradeResponse;
                toAmino(_: _47.MsgSoftwareUpgradeResponse): _47.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _47.MsgSoftwareUpgradeResponseAminoMsg): _47.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _47.MsgSoftwareUpgradeResponse): _47.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _47.MsgSoftwareUpgradeResponseProtoMsg): _47.MsgSoftwareUpgradeResponse;
                toProto(message: _47.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _47.MsgSoftwareUpgradeResponse): _47.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _47.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgCancelUpgrade;
                fromPartial(object: Partial<_47.MsgCancelUpgrade>): _47.MsgCancelUpgrade;
                fromAmino(object: _47.MsgCancelUpgradeAmino): _47.MsgCancelUpgrade;
                toAmino(message: _47.MsgCancelUpgrade): _47.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _47.MsgCancelUpgradeAminoMsg): _47.MsgCancelUpgrade;
                toAminoMsg(message: _47.MsgCancelUpgrade): _47.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _47.MsgCancelUpgradeProtoMsg): _47.MsgCancelUpgrade;
                toProto(message: _47.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _47.MsgCancelUpgrade): _47.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _47.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_47.MsgCancelUpgradeResponse>): _47.MsgCancelUpgradeResponse;
                fromAmino(_: _47.MsgCancelUpgradeResponseAmino): _47.MsgCancelUpgradeResponse;
                toAmino(_: _47.MsgCancelUpgradeResponse): _47.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _47.MsgCancelUpgradeResponseAminoMsg): _47.MsgCancelUpgradeResponse;
                toAminoMsg(message: _47.MsgCancelUpgradeResponse): _47.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _47.MsgCancelUpgradeResponseProtoMsg): _47.MsgCancelUpgradeResponse;
                toProto(message: _47.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _47.MsgCancelUpgradeResponse): _47.MsgCancelUpgradeResponseProtoMsg;
            };
            Plan: {
                typeUrl: string;
                encode(message: _46.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.Plan;
                fromPartial(object: Partial<_46.Plan>): _46.Plan;
                fromAmino(object: _46.PlanAmino): _46.Plan;
                toAmino(message: _46.Plan): _46.PlanAmino;
                fromAminoMsg(object: _46.PlanAminoMsg): _46.Plan;
                toAminoMsg(message: _46.Plan): _46.PlanAminoMsg;
                fromProtoMsg(message: _46.PlanProtoMsg): _46.Plan;
                toProto(message: _46.Plan): Uint8Array;
                toProtoMsg(message: _46.Plan): _46.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _46.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_46.SoftwareUpgradeProposal>): _46.SoftwareUpgradeProposal;
                fromAmino(object: _46.SoftwareUpgradeProposalAmino): _46.SoftwareUpgradeProposal;
                toAmino(message: _46.SoftwareUpgradeProposal): _46.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _46.SoftwareUpgradeProposalAminoMsg): _46.SoftwareUpgradeProposal;
                toAminoMsg(message: _46.SoftwareUpgradeProposal): _46.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _46.SoftwareUpgradeProposalProtoMsg): _46.SoftwareUpgradeProposal;
                toProto(message: _46.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _46.SoftwareUpgradeProposal): _46.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _46.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_46.CancelSoftwareUpgradeProposal>): _46.CancelSoftwareUpgradeProposal;
                fromAmino(object: _46.CancelSoftwareUpgradeProposalAmino): _46.CancelSoftwareUpgradeProposal;
                toAmino(message: _46.CancelSoftwareUpgradeProposal): _46.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _46.CancelSoftwareUpgradeProposalAminoMsg): _46.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _46.CancelSoftwareUpgradeProposal): _46.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _46.CancelSoftwareUpgradeProposalProtoMsg): _46.CancelSoftwareUpgradeProposal;
                toProto(message: _46.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _46.CancelSoftwareUpgradeProposal): _46.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _46.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.ModuleVersion;
                fromPartial(object: Partial<_46.ModuleVersion>): _46.ModuleVersion;
                fromAmino(object: _46.ModuleVersionAmino): _46.ModuleVersion;
                toAmino(message: _46.ModuleVersion): _46.ModuleVersionAmino;
                fromAminoMsg(object: _46.ModuleVersionAminoMsg): _46.ModuleVersion;
                toAminoMsg(message: _46.ModuleVersion): _46.ModuleVersionAminoMsg;
                fromProtoMsg(message: _46.ModuleVersionProtoMsg): _46.ModuleVersion;
                toProto(message: _46.ModuleVersion): Uint8Array;
                toProtoMsg(message: _46.ModuleVersion): _46.ModuleVersionProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _45.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_45.QueryCurrentPlanRequest>): _45.QueryCurrentPlanRequest;
                fromAmino(_: _45.QueryCurrentPlanRequestAmino): _45.QueryCurrentPlanRequest;
                toAmino(_: _45.QueryCurrentPlanRequest): _45.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _45.QueryCurrentPlanRequestAminoMsg): _45.QueryCurrentPlanRequest;
                toAminoMsg(message: _45.QueryCurrentPlanRequest): _45.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _45.QueryCurrentPlanRequestProtoMsg): _45.QueryCurrentPlanRequest;
                toProto(message: _45.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _45.QueryCurrentPlanRequest): _45.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _45.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_45.QueryCurrentPlanResponse>): _45.QueryCurrentPlanResponse;
                fromAmino(object: _45.QueryCurrentPlanResponseAmino): _45.QueryCurrentPlanResponse;
                toAmino(message: _45.QueryCurrentPlanResponse): _45.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _45.QueryCurrentPlanResponseAminoMsg): _45.QueryCurrentPlanResponse;
                toAminoMsg(message: _45.QueryCurrentPlanResponse): _45.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _45.QueryCurrentPlanResponseProtoMsg): _45.QueryCurrentPlanResponse;
                toProto(message: _45.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _45.QueryCurrentPlanResponse): _45.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _45.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_45.QueryAppliedPlanRequest>): _45.QueryAppliedPlanRequest;
                fromAmino(object: _45.QueryAppliedPlanRequestAmino): _45.QueryAppliedPlanRequest;
                toAmino(message: _45.QueryAppliedPlanRequest): _45.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _45.QueryAppliedPlanRequestAminoMsg): _45.QueryAppliedPlanRequest;
                toAminoMsg(message: _45.QueryAppliedPlanRequest): _45.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _45.QueryAppliedPlanRequestProtoMsg): _45.QueryAppliedPlanRequest;
                toProto(message: _45.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _45.QueryAppliedPlanRequest): _45.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _45.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_45.QueryAppliedPlanResponse>): _45.QueryAppliedPlanResponse;
                fromAmino(object: _45.QueryAppliedPlanResponseAmino): _45.QueryAppliedPlanResponse;
                toAmino(message: _45.QueryAppliedPlanResponse): _45.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _45.QueryAppliedPlanResponseAminoMsg): _45.QueryAppliedPlanResponse;
                toAminoMsg(message: _45.QueryAppliedPlanResponse): _45.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _45.QueryAppliedPlanResponseProtoMsg): _45.QueryAppliedPlanResponse;
                toProto(message: _45.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _45.QueryAppliedPlanResponse): _45.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _45.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_45.QueryUpgradedConsensusStateRequest>): _45.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _45.QueryUpgradedConsensusStateRequestAmino): _45.QueryUpgradedConsensusStateRequest;
                toAmino(message: _45.QueryUpgradedConsensusStateRequest): _45.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _45.QueryUpgradedConsensusStateRequestAminoMsg): _45.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _45.QueryUpgradedConsensusStateRequest): _45.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _45.QueryUpgradedConsensusStateRequestProtoMsg): _45.QueryUpgradedConsensusStateRequest;
                toProto(message: _45.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _45.QueryUpgradedConsensusStateRequest): _45.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _45.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_45.QueryUpgradedConsensusStateResponse>): _45.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _45.QueryUpgradedConsensusStateResponseAmino): _45.QueryUpgradedConsensusStateResponse;
                toAmino(message: _45.QueryUpgradedConsensusStateResponse): _45.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _45.QueryUpgradedConsensusStateResponseAminoMsg): _45.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _45.QueryUpgradedConsensusStateResponse): _45.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _45.QueryUpgradedConsensusStateResponseProtoMsg): _45.QueryUpgradedConsensusStateResponse;
                toProto(message: _45.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _45.QueryUpgradedConsensusStateResponse): _45.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _45.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_45.QueryModuleVersionsRequest>): _45.QueryModuleVersionsRequest;
                fromAmino(object: _45.QueryModuleVersionsRequestAmino): _45.QueryModuleVersionsRequest;
                toAmino(message: _45.QueryModuleVersionsRequest): _45.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _45.QueryModuleVersionsRequestAminoMsg): _45.QueryModuleVersionsRequest;
                toAminoMsg(message: _45.QueryModuleVersionsRequest): _45.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _45.QueryModuleVersionsRequestProtoMsg): _45.QueryModuleVersionsRequest;
                toProto(message: _45.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _45.QueryModuleVersionsRequest): _45.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _45.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_45.QueryModuleVersionsResponse>): _45.QueryModuleVersionsResponse;
                fromAmino(object: _45.QueryModuleVersionsResponseAmino): _45.QueryModuleVersionsResponse;
                toAmino(message: _45.QueryModuleVersionsResponse): _45.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _45.QueryModuleVersionsResponseAminoMsg): _45.QueryModuleVersionsResponse;
                toAminoMsg(message: _45.QueryModuleVersionsResponse): _45.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _45.QueryModuleVersionsResponseProtoMsg): _45.QueryModuleVersionsResponse;
                toProto(message: _45.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _45.QueryModuleVersionsResponse): _45.QueryModuleVersionsResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _222.MsgClientImpl;
                };
                bank: {
                    v1beta1: _223.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _224.MsgClientImpl;
                };
                gov: {
                    v1beta1: _225.MsgClientImpl;
                    v1: _227.MsgClientImpl;
                };
                staking: {
                    v1beta1: _226.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _228.MsgClientImpl;
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
                        params(request?: _27.QueryParamsRequest): Promise<_27.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _27.QueryValidatorOutstandingRewardsRequest): Promise<_27.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _27.QueryValidatorCommissionRequest): Promise<_27.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _27.QueryValidatorSlashesRequest): Promise<_27.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _27.QueryDelegationRewardsRequest): Promise<_27.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _27.QueryDelegationTotalRewardsRequest): Promise<_27.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _27.QueryDelegatorValidatorsRequest): Promise<_27.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _27.QueryDelegatorWithdrawAddressRequest): Promise<_27.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _27.QueryCommunityPoolRequest): Promise<_27.QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _31.QueryProposalRequest): Promise<_31.QueryProposalResponse>;
                        proposals(request: _31.QueryProposalsRequest): Promise<_31.QueryProposalsResponse>;
                        vote(request: _31.QueryVoteRequest): Promise<_31.QueryVoteResponse>;
                        votes(request: _31.QueryVotesRequest): Promise<_31.QueryVotesResponse>;
                        params(request: _31.QueryParamsRequest): Promise<_31.QueryParamsResponse>;
                        deposit(request: _31.QueryDepositRequest): Promise<_31.QueryDepositResponse>;
                        deposits(request: _31.QueryDepositsRequest): Promise<_31.QueryDepositsResponse>;
                        tallyResult(request: _31.QueryTallyResultRequest): Promise<_31.QueryTallyResultResponse>;
                    };
                    v1: {
                        proposal(request: _35.QueryProposalRequest): Promise<_35.QueryProposalResponse>;
                        proposals(request: _35.QueryProposalsRequest): Promise<_35.QueryProposalsResponse>;
                        vote(request: _35.QueryVoteRequest): Promise<_35.QueryVoteResponse>;
                        votes(request: _35.QueryVotesRequest): Promise<_35.QueryVotesResponse>;
                        params(request: _35.QueryParamsRequest): Promise<_35.QueryParamsResponse>;
                        deposit(request: _35.QueryDepositRequest): Promise<_35.QueryDepositResponse>;
                        deposits(request: _35.QueryDepositsRequest): Promise<_35.QueryDepositsResponse>;
                        tallyResult(request: _35.QueryTallyResultRequest): Promise<_35.QueryTallyResultResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _39.QueryValidatorsRequest): Promise<_39.QueryValidatorsResponse>;
                        validator(request: _39.QueryValidatorRequest): Promise<_39.QueryValidatorResponse>;
                        validatorDelegations(request: _39.QueryValidatorDelegationsRequest): Promise<_39.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _39.QueryValidatorUnbondingDelegationsRequest): Promise<_39.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _39.QueryDelegationRequest): Promise<_39.QueryDelegationResponse>;
                        unbondingDelegation(request: _39.QueryUnbondingDelegationRequest): Promise<_39.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _39.QueryDelegatorDelegationsRequest): Promise<_39.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _39.QueryDelegatorUnbondingDelegationsRequest): Promise<_39.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _39.QueryRedelegationsRequest): Promise<_39.QueryRedelegationsResponse>;
                        delegatorValidators(request: _39.QueryDelegatorValidatorsRequest): Promise<_39.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _39.QueryDelegatorValidatorRequest): Promise<_39.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _39.QueryHistoricalInfoRequest): Promise<_39.QueryHistoricalInfoResponse>;
                        pool(request?: _39.QueryPoolRequest): Promise<_39.QueryPoolResponse>;
                        params(request?: _39.QueryParamsRequest): Promise<_39.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _43.SimulateRequest): Promise<_43.SimulateResponse>;
                        getTx(request: _43.GetTxRequest): Promise<_43.GetTxResponse>;
                        broadcastTx(request: _43.BroadcastTxRequest): Promise<_43.BroadcastTxResponse>;
                        getTxsEvent(request: _43.GetTxsEventRequest): Promise<_43.GetTxsEventResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _45.QueryCurrentPlanRequest): Promise<_45.QueryCurrentPlanResponse>;
                        appliedPlan(request: _45.QueryAppliedPlanRequest): Promise<_45.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _45.QueryUpgradedConsensusStateRequest): Promise<_45.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _45.QueryModuleVersionsRequest): Promise<_45.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _202.LCDQueryClient;
                };
                authz: {
                    v1beta1: _203.LCDQueryClient;
                };
                bank: {
                    v1beta1: _204.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _205.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _206.LCDQueryClient;
                };
                gov: {
                    v1beta1: _207.LCDQueryClient;
                    v1: _211.LCDQueryClient;
                };
                staking: {
                    v1beta1: _208.LCDQueryClient;
                };
                tx: {
                    v1beta1: _209.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _210.LCDQueryClient;
                };
            };
        }>;
    };
}
