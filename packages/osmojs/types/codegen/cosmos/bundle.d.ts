import * as _3 from "./authz/v1beta1/authz";
import * as _4 from "./authz/v1beta1/event";
import * as _5 from "./authz/v1beta1/genesis";
import * as _6 from "./authz/v1beta1/query";
import * as _7 from "./authz/v1beta1/tx";
import * as _8 from "./bank/v1beta1/authz";
import * as _9 from "./bank/v1beta1/bank";
import * as _10 from "./bank/v1beta1/genesis";
import * as _11 from "./bank/v1beta1/query";
import * as _12 from "./bank/v1beta1/tx";
import * as _13 from "./base/abci/v1beta1/abci";
import * as _14 from "./base/query/v1beta1/pagination";
import * as _15 from "./base/reflection/v2alpha1/reflection";
import * as _16 from "./base/v1beta1/coin";
import * as _17 from "./base/node/v1beta1/query";
import * as _18 from "./crypto/ed25519/keys";
import * as _19 from "./crypto/hd/v1/hd";
import * as _20 from "./crypto/keyring/v1/record";
import * as _21 from "./crypto/multisig/keys";
import * as _22 from "./crypto/secp256k1/keys";
import * as _23 from "./crypto/secp256r1/keys";
import * as _24 from "./distribution/v1beta1/distribution";
import * as _25 from "./distribution/v1beta1/genesis";
import * as _26 from "./distribution/v1beta1/query";
import * as _27 from "./distribution/v1beta1/tx";
import * as _28 from "./gov/v1/genesis";
import * as _29 from "./gov/v1/gov";
import * as _30 from "./gov/v1/query";
import * as _31 from "./gov/v1/tx";
import * as _32 from "./gov/v1beta1/genesis";
import * as _33 from "./gov/v1beta1/gov";
import * as _34 from "./gov/v1beta1/query";
import * as _35 from "./gov/v1beta1/tx";
import * as _36 from "./staking/v1beta1/authz";
import * as _37 from "./staking/v1beta1/genesis";
import * as _38 from "./staking/v1beta1/query";
import * as _39 from "./staking/v1beta1/staking";
import * as _40 from "./staking/v1beta1/tx";
import * as _41 from "./tx/signing/v1beta1/signing";
import * as _42 from "./tx/v1beta1/service";
import * as _43 from "./tx/v1beta1/tx";
import * as _44 from "./upgrade/v1beta1/query";
import * as _45 from "./upgrade/v1beta1/tx";
import * as _46 from "./upgrade/v1beta1/upgrade";
import * as _180 from "./authz/v1beta1/query.lcd";
import * as _181 from "./bank/v1beta1/query.lcd";
import * as _182 from "./distribution/v1beta1/query.lcd";
import * as _183 from "./gov/v1/query.lcd";
import * as _184 from "./gov/v1beta1/query.lcd";
import * as _185 from "./staking/v1beta1/query.lcd";
import * as _186 from "./tx/v1beta1/service.lcd";
import * as _187 from "./upgrade/v1beta1/query.lcd";
import * as _188 from "./base/node/v1beta1/query.lcd";
import * as _189 from "./authz/v1beta1/query.rpc.Query";
import * as _190 from "./bank/v1beta1/query.rpc.Query";
import * as _191 from "./distribution/v1beta1/query.rpc.Query";
import * as _192 from "./gov/v1/query.rpc.Query";
import * as _193 from "./gov/v1beta1/query.rpc.Query";
import * as _194 from "./staking/v1beta1/query.rpc.Query";
import * as _195 from "./tx/v1beta1/service.rpc.Service";
import * as _196 from "./upgrade/v1beta1/query.rpc.Query";
import * as _197 from "./base/node/v1beta1/query.rpc.Service";
import * as _198 from "./authz/v1beta1/tx.rpc.msg";
import * as _199 from "./bank/v1beta1/tx.rpc.msg";
import * as _200 from "./distribution/v1beta1/tx.rpc.msg";
import * as _201 from "./gov/v1/tx.rpc.msg";
import * as _202 from "./gov/v1beta1/tx.rpc.msg";
import * as _203 from "./staking/v1beta1/tx.rpc.msg";
import * as _204 from "./upgrade/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _198.MsgClientImpl;
            QueryClientImpl: typeof _189.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _6.QueryGrantsRequest): Promise<_6.QueryGrantsResponse>;
                granterGrants(request: _6.QueryGranterGrantsRequest): Promise<_6.QueryGranterGrantsResponse>;
                granteeGrants(request: _6.QueryGranteeGrantsRequest): Promise<_6.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _180.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _7.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _7.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _7.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _7.MsgGrant): {
                        typeUrl: string;
                        value: _7.MsgGrant;
                    };
                    exec(value: _7.MsgExec): {
                        typeUrl: string;
                        value: _7.MsgExec;
                    };
                    revoke(value: _7.MsgRevoke): {
                        typeUrl: string;
                        value: _7.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _7.MsgGrant): {
                        typeUrl: string;
                        value: _7.MsgGrant;
                    };
                    exec(value: _7.MsgExec): {
                        typeUrl: string;
                        value: _7.MsgExec;
                    };
                    revoke(value: _7.MsgRevoke): {
                        typeUrl: string;
                        value: _7.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _7.MsgGrant) => _7.MsgGrantAmino;
                    fromAmino: (object: _7.MsgGrantAmino) => _7.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _7.MsgExec) => _7.MsgExecAmino;
                    fromAmino: (object: _7.MsgExecAmino) => _7.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _7.MsgRevoke) => _7.MsgRevokeAmino;
                    fromAmino: (object: _7.MsgRevokeAmino) => _7.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _7.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.MsgGrant;
                fromPartial(object: Partial<_7.MsgGrant>): _7.MsgGrant;
                fromAmino(object: _7.MsgGrantAmino): _7.MsgGrant;
                toAmino(message: _7.MsgGrant): _7.MsgGrantAmino;
                fromAminoMsg(object: _7.MsgGrantAminoMsg): _7.MsgGrant;
                toAminoMsg(message: _7.MsgGrant): _7.MsgGrantAminoMsg;
                fromProtoMsg(message: _7.MsgGrantProtoMsg): _7.MsgGrant;
                toProto(message: _7.MsgGrant): Uint8Array;
                toProtoMsg(message: _7.MsgGrant): _7.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                encode(message: _7.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.MsgExecResponse;
                fromPartial(object: Partial<_7.MsgExecResponse>): _7.MsgExecResponse;
                fromAmino(object: _7.MsgExecResponseAmino): _7.MsgExecResponse;
                toAmino(message: _7.MsgExecResponse): _7.MsgExecResponseAmino;
                fromAminoMsg(object: _7.MsgExecResponseAminoMsg): _7.MsgExecResponse;
                toAminoMsg(message: _7.MsgExecResponse): _7.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _7.MsgExecResponseProtoMsg): _7.MsgExecResponse;
                toProto(message: _7.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _7.MsgExecResponse): _7.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                encode(message: _7.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.MsgExec;
                fromPartial(object: Partial<_7.MsgExec>): _7.MsgExec;
                fromAmino(object: _7.MsgExecAmino): _7.MsgExec;
                toAmino(message: _7.MsgExec): _7.MsgExecAmino;
                fromAminoMsg(object: _7.MsgExecAminoMsg): _7.MsgExec;
                toAminoMsg(message: _7.MsgExec): _7.MsgExecAminoMsg;
                fromProtoMsg(message: _7.MsgExecProtoMsg): _7.MsgExec;
                toProto(message: _7.MsgExec): Uint8Array;
                toProtoMsg(message: _7.MsgExec): _7.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                encode(_: _7.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.MsgGrantResponse;
                fromPartial(_: Partial<_7.MsgGrantResponse>): _7.MsgGrantResponse;
                fromAmino(_: _7.MsgGrantResponseAmino): _7.MsgGrantResponse;
                toAmino(_: _7.MsgGrantResponse): _7.MsgGrantResponseAmino;
                fromAminoMsg(object: _7.MsgGrantResponseAminoMsg): _7.MsgGrantResponse;
                toAminoMsg(message: _7.MsgGrantResponse): _7.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _7.MsgGrantResponseProtoMsg): _7.MsgGrantResponse;
                toProto(message: _7.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _7.MsgGrantResponse): _7.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                encode(message: _7.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.MsgRevoke;
                fromPartial(object: Partial<_7.MsgRevoke>): _7.MsgRevoke;
                fromAmino(object: _7.MsgRevokeAmino): _7.MsgRevoke;
                toAmino(message: _7.MsgRevoke): _7.MsgRevokeAmino;
                fromAminoMsg(object: _7.MsgRevokeAminoMsg): _7.MsgRevoke;
                toAminoMsg(message: _7.MsgRevoke): _7.MsgRevokeAminoMsg;
                fromProtoMsg(message: _7.MsgRevokeProtoMsg): _7.MsgRevoke;
                toProto(message: _7.MsgRevoke): Uint8Array;
                toProtoMsg(message: _7.MsgRevoke): _7.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                encode(_: _7.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.MsgRevokeResponse;
                fromPartial(_: Partial<_7.MsgRevokeResponse>): _7.MsgRevokeResponse;
                fromAmino(_: _7.MsgRevokeResponseAmino): _7.MsgRevokeResponse;
                toAmino(_: _7.MsgRevokeResponse): _7.MsgRevokeResponseAmino;
                fromAminoMsg(object: _7.MsgRevokeResponseAminoMsg): _7.MsgRevokeResponse;
                toAminoMsg(message: _7.MsgRevokeResponse): _7.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _7.MsgRevokeResponseProtoMsg): _7.MsgRevokeResponse;
                toProto(message: _7.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _7.MsgRevokeResponse): _7.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmos_authzAuthorization_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _8.SendAuthorization | _36.StakeAuthorization | _3.GenericAuthorization;
            Cosmos_authzAuthorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authzAuthorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                encode(message: _6.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryGrantsRequest;
                fromPartial(object: Partial<_6.QueryGrantsRequest>): _6.QueryGrantsRequest;
                fromAmino(object: _6.QueryGrantsRequestAmino): _6.QueryGrantsRequest;
                toAmino(message: _6.QueryGrantsRequest): _6.QueryGrantsRequestAmino;
                fromAminoMsg(object: _6.QueryGrantsRequestAminoMsg): _6.QueryGrantsRequest;
                toAminoMsg(message: _6.QueryGrantsRequest): _6.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _6.QueryGrantsRequestProtoMsg): _6.QueryGrantsRequest;
                toProto(message: _6.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _6.QueryGrantsRequest): _6.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                encode(message: _6.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryGrantsResponse;
                fromPartial(object: Partial<_6.QueryGrantsResponse>): _6.QueryGrantsResponse;
                fromAmino(object: _6.QueryGrantsResponseAmino): _6.QueryGrantsResponse;
                toAmino(message: _6.QueryGrantsResponse): _6.QueryGrantsResponseAmino;
                fromAminoMsg(object: _6.QueryGrantsResponseAminoMsg): _6.QueryGrantsResponse;
                toAminoMsg(message: _6.QueryGrantsResponse): _6.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _6.QueryGrantsResponseProtoMsg): _6.QueryGrantsResponse;
                toProto(message: _6.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _6.QueryGrantsResponse): _6.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                encode(message: _6.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_6.QueryGranterGrantsRequest>): _6.QueryGranterGrantsRequest;
                fromAmino(object: _6.QueryGranterGrantsRequestAmino): _6.QueryGranterGrantsRequest;
                toAmino(message: _6.QueryGranterGrantsRequest): _6.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _6.QueryGranterGrantsRequestAminoMsg): _6.QueryGranterGrantsRequest;
                toAminoMsg(message: _6.QueryGranterGrantsRequest): _6.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _6.QueryGranterGrantsRequestProtoMsg): _6.QueryGranterGrantsRequest;
                toProto(message: _6.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _6.QueryGranterGrantsRequest): _6.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                encode(message: _6.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_6.QueryGranterGrantsResponse>): _6.QueryGranterGrantsResponse;
                fromAmino(object: _6.QueryGranterGrantsResponseAmino): _6.QueryGranterGrantsResponse;
                toAmino(message: _6.QueryGranterGrantsResponse): _6.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _6.QueryGranterGrantsResponseAminoMsg): _6.QueryGranterGrantsResponse;
                toAminoMsg(message: _6.QueryGranterGrantsResponse): _6.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _6.QueryGranterGrantsResponseProtoMsg): _6.QueryGranterGrantsResponse;
                toProto(message: _6.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _6.QueryGranterGrantsResponse): _6.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _6.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_6.QueryGranteeGrantsRequest>): _6.QueryGranteeGrantsRequest;
                fromAmino(object: _6.QueryGranteeGrantsRequestAmino): _6.QueryGranteeGrantsRequest;
                toAmino(message: _6.QueryGranteeGrantsRequest): _6.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _6.QueryGranteeGrantsRequestAminoMsg): _6.QueryGranteeGrantsRequest;
                toAminoMsg(message: _6.QueryGranteeGrantsRequest): _6.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _6.QueryGranteeGrantsRequestProtoMsg): _6.QueryGranteeGrantsRequest;
                toProto(message: _6.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _6.QueryGranteeGrantsRequest): _6.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _6.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_6.QueryGranteeGrantsResponse>): _6.QueryGranteeGrantsResponse;
                fromAmino(object: _6.QueryGranteeGrantsResponseAmino): _6.QueryGranteeGrantsResponse;
                toAmino(message: _6.QueryGranteeGrantsResponse): _6.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _6.QueryGranteeGrantsResponseAminoMsg): _6.QueryGranteeGrantsResponse;
                toAminoMsg(message: _6.QueryGranteeGrantsResponse): _6.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _6.QueryGranteeGrantsResponseProtoMsg): _6.QueryGranteeGrantsResponse;
                toProto(message: _6.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _6.QueryGranteeGrantsResponse): _6.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _5.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.GenesisState;
                fromPartial(object: Partial<_5.GenesisState>): _5.GenesisState;
                fromAmino(object: _5.GenesisStateAmino): _5.GenesisState;
                toAmino(message: _5.GenesisState): _5.GenesisStateAmino;
                fromAminoMsg(object: _5.GenesisStateAminoMsg): _5.GenesisState;
                toAminoMsg(message: _5.GenesisState): _5.GenesisStateAminoMsg;
                fromProtoMsg(message: _5.GenesisStateProtoMsg): _5.GenesisState;
                toProto(message: _5.GenesisState): Uint8Array;
                toProtoMsg(message: _5.GenesisState): _5.GenesisStateProtoMsg;
            };
            EventGrant: {
                encode(message: _4.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.EventGrant;
                fromPartial(object: Partial<_4.EventGrant>): _4.EventGrant;
                fromAmino(object: _4.EventGrantAmino): _4.EventGrant;
                toAmino(message: _4.EventGrant): _4.EventGrantAmino;
                fromAminoMsg(object: _4.EventGrantAminoMsg): _4.EventGrant;
                toAminoMsg(message: _4.EventGrant): _4.EventGrantAminoMsg;
                fromProtoMsg(message: _4.EventGrantProtoMsg): _4.EventGrant;
                toProto(message: _4.EventGrant): Uint8Array;
                toProtoMsg(message: _4.EventGrant): _4.EventGrantProtoMsg;
            };
            EventRevoke: {
                encode(message: _4.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.EventRevoke;
                fromPartial(object: Partial<_4.EventRevoke>): _4.EventRevoke;
                fromAmino(object: _4.EventRevokeAmino): _4.EventRevoke;
                toAmino(message: _4.EventRevoke): _4.EventRevokeAmino;
                fromAminoMsg(object: _4.EventRevokeAminoMsg): _4.EventRevoke;
                toAminoMsg(message: _4.EventRevoke): _4.EventRevokeAminoMsg;
                fromProtoMsg(message: _4.EventRevokeProtoMsg): _4.EventRevoke;
                toProto(message: _4.EventRevoke): Uint8Array;
                toProtoMsg(message: _4.EventRevoke): _4.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                encode(message: _3.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.GenericAuthorization;
                fromPartial(object: Partial<_3.GenericAuthorization>): _3.GenericAuthorization;
                fromAmino(object: _3.GenericAuthorizationAmino): _3.GenericAuthorization;
                toAmino(message: _3.GenericAuthorization): _3.GenericAuthorizationAmino;
                fromAminoMsg(object: _3.GenericAuthorizationAminoMsg): _3.GenericAuthorization;
                toAminoMsg(message: _3.GenericAuthorization): _3.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _3.GenericAuthorizationProtoMsg): _3.GenericAuthorization;
                toProto(message: _3.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _3.GenericAuthorization): _3.GenericAuthorizationProtoMsg;
            };
            Grant: {
                encode(message: _3.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.Grant;
                fromPartial(object: Partial<_3.Grant>): _3.Grant;
                fromAmino(object: _3.GrantAmino): _3.Grant;
                toAmino(message: _3.Grant): _3.GrantAmino;
                fromAminoMsg(object: _3.GrantAminoMsg): _3.Grant;
                toAminoMsg(message: _3.Grant): _3.GrantAminoMsg;
                fromProtoMsg(message: _3.GrantProtoMsg): _3.Grant;
                toProto(message: _3.Grant): Uint8Array;
                toProtoMsg(message: _3.Grant): _3.GrantProtoMsg;
            };
            GrantAuthorization: {
                encode(message: _3.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.GrantAuthorization;
                fromPartial(object: Partial<_3.GrantAuthorization>): _3.GrantAuthorization;
                fromAmino(object: _3.GrantAuthorizationAmino): _3.GrantAuthorization;
                toAmino(message: _3.GrantAuthorization): _3.GrantAuthorizationAmino;
                fromAminoMsg(object: _3.GrantAuthorizationAminoMsg): _3.GrantAuthorization;
                toAminoMsg(message: _3.GrantAuthorization): _3.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _3.GrantAuthorizationProtoMsg): _3.GrantAuthorization;
                toProto(message: _3.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _3.GrantAuthorization): _3.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                encode(message: _3.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.GrantQueueItem;
                fromPartial(object: Partial<_3.GrantQueueItem>): _3.GrantQueueItem;
                fromAmino(object: _3.GrantQueueItemAmino): _3.GrantQueueItem;
                toAmino(message: _3.GrantQueueItem): _3.GrantQueueItemAmino;
                fromAminoMsg(object: _3.GrantQueueItemAminoMsg): _3.GrantQueueItem;
                toAminoMsg(message: _3.GrantQueueItem): _3.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _3.GrantQueueItemProtoMsg): _3.GrantQueueItem;
                toProto(message: _3.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _3.GrantQueueItem): _3.GrantQueueItemProtoMsg;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _199.MsgClientImpl;
            QueryClientImpl: typeof _190.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _11.QueryBalanceRequest): Promise<_11.QueryBalanceResponse>;
                allBalances(request: _11.QueryAllBalancesRequest): Promise<_11.QueryAllBalancesResponse>;
                spendableBalances(request: _11.QuerySpendableBalancesRequest): Promise<_11.QuerySpendableBalancesResponse>;
                totalSupply(request?: _11.QueryTotalSupplyRequest): Promise<_11.QueryTotalSupplyResponse>;
                supplyOf(request: _11.QuerySupplyOfRequest): Promise<_11.QuerySupplyOfResponse>;
                params(request?: _11.QueryParamsRequest): Promise<_11.QueryParamsResponse>;
                denomMetadata(request: _11.QueryDenomMetadataRequest): Promise<_11.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _11.QueryDenomsMetadataRequest): Promise<_11.QueryDenomsMetadataResponse>;
                denomOwners(request: _11.QueryDenomOwnersRequest): Promise<_11.QueryDenomOwnersResponse>;
            };
            LCDQueryClient: typeof _181.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _12.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _12.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _12.MsgSend): {
                        typeUrl: string;
                        value: _12.MsgSend;
                    };
                    multiSend(value: _12.MsgMultiSend): {
                        typeUrl: string;
                        value: _12.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _12.MsgSend): {
                        typeUrl: string;
                        value: _12.MsgSend;
                    };
                    multiSend(value: _12.MsgMultiSend): {
                        typeUrl: string;
                        value: _12.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _12.MsgSend) => _12.MsgSendAmino;
                    fromAmino: (object: _12.MsgSendAmino) => _12.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _12.MsgMultiSend) => _12.MsgMultiSendAmino;
                    fromAmino: (object: _12.MsgMultiSendAmino) => _12.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _12.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgSend;
                fromPartial(object: Partial<_12.MsgSend>): _12.MsgSend;
                fromAmino(object: _12.MsgSendAmino): _12.MsgSend;
                toAmino(message: _12.MsgSend): _12.MsgSendAmino;
                fromAminoMsg(object: _12.MsgSendAminoMsg): _12.MsgSend;
                toAminoMsg(message: _12.MsgSend): _12.MsgSendAminoMsg;
                fromProtoMsg(message: _12.MsgSendProtoMsg): _12.MsgSend;
                toProto(message: _12.MsgSend): Uint8Array;
                toProtoMsg(message: _12.MsgSend): _12.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                encode(_: _12.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgSendResponse;
                fromPartial(_: Partial<_12.MsgSendResponse>): _12.MsgSendResponse;
                fromAmino(_: _12.MsgSendResponseAmino): _12.MsgSendResponse;
                toAmino(_: _12.MsgSendResponse): _12.MsgSendResponseAmino;
                fromAminoMsg(object: _12.MsgSendResponseAminoMsg): _12.MsgSendResponse;
                toAminoMsg(message: _12.MsgSendResponse): _12.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _12.MsgSendResponseProtoMsg): _12.MsgSendResponse;
                toProto(message: _12.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _12.MsgSendResponse): _12.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                encode(message: _12.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgMultiSend;
                fromPartial(object: Partial<_12.MsgMultiSend>): _12.MsgMultiSend;
                fromAmino(object: _12.MsgMultiSendAmino): _12.MsgMultiSend;
                toAmino(message: _12.MsgMultiSend): _12.MsgMultiSendAmino;
                fromAminoMsg(object: _12.MsgMultiSendAminoMsg): _12.MsgMultiSend;
                toAminoMsg(message: _12.MsgMultiSend): _12.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _12.MsgMultiSendProtoMsg): _12.MsgMultiSend;
                toProto(message: _12.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _12.MsgMultiSend): _12.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                encode(_: _12.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgMultiSendResponse;
                fromPartial(_: Partial<_12.MsgMultiSendResponse>): _12.MsgMultiSendResponse;
                fromAmino(_: _12.MsgMultiSendResponseAmino): _12.MsgMultiSendResponse;
                toAmino(_: _12.MsgMultiSendResponse): _12.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _12.MsgMultiSendResponseAminoMsg): _12.MsgMultiSendResponse;
                toAminoMsg(message: _12.MsgMultiSendResponse): _12.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _12.MsgMultiSendResponseProtoMsg): _12.MsgMultiSendResponse;
                toProto(message: _12.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _12.MsgMultiSendResponse): _12.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                encode(message: _11.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryBalanceRequest;
                fromPartial(object: Partial<_11.QueryBalanceRequest>): _11.QueryBalanceRequest;
                fromAmino(object: _11.QueryBalanceRequestAmino): _11.QueryBalanceRequest;
                toAmino(message: _11.QueryBalanceRequest): _11.QueryBalanceRequestAmino;
                fromAminoMsg(object: _11.QueryBalanceRequestAminoMsg): _11.QueryBalanceRequest;
                toAminoMsg(message: _11.QueryBalanceRequest): _11.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _11.QueryBalanceRequestProtoMsg): _11.QueryBalanceRequest;
                toProto(message: _11.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _11.QueryBalanceRequest): _11.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                encode(message: _11.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryBalanceResponse;
                fromPartial(object: Partial<_11.QueryBalanceResponse>): _11.QueryBalanceResponse;
                fromAmino(object: _11.QueryBalanceResponseAmino): _11.QueryBalanceResponse;
                toAmino(message: _11.QueryBalanceResponse): _11.QueryBalanceResponseAmino;
                fromAminoMsg(object: _11.QueryBalanceResponseAminoMsg): _11.QueryBalanceResponse;
                toAminoMsg(message: _11.QueryBalanceResponse): _11.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _11.QueryBalanceResponseProtoMsg): _11.QueryBalanceResponse;
                toProto(message: _11.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _11.QueryBalanceResponse): _11.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                encode(message: _11.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryAllBalancesRequest;
                fromPartial(object: Partial<_11.QueryAllBalancesRequest>): _11.QueryAllBalancesRequest;
                fromAmino(object: _11.QueryAllBalancesRequestAmino): _11.QueryAllBalancesRequest;
                toAmino(message: _11.QueryAllBalancesRequest): _11.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _11.QueryAllBalancesRequestAminoMsg): _11.QueryAllBalancesRequest;
                toAminoMsg(message: _11.QueryAllBalancesRequest): _11.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _11.QueryAllBalancesRequestProtoMsg): _11.QueryAllBalancesRequest;
                toProto(message: _11.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _11.QueryAllBalancesRequest): _11.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                encode(message: _11.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryAllBalancesResponse;
                fromPartial(object: Partial<_11.QueryAllBalancesResponse>): _11.QueryAllBalancesResponse;
                fromAmino(object: _11.QueryAllBalancesResponseAmino): _11.QueryAllBalancesResponse;
                toAmino(message: _11.QueryAllBalancesResponse): _11.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _11.QueryAllBalancesResponseAminoMsg): _11.QueryAllBalancesResponse;
                toAminoMsg(message: _11.QueryAllBalancesResponse): _11.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _11.QueryAllBalancesResponseProtoMsg): _11.QueryAllBalancesResponse;
                toProto(message: _11.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _11.QueryAllBalancesResponse): _11.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _11.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_11.QuerySpendableBalancesRequest>): _11.QuerySpendableBalancesRequest;
                fromAmino(object: _11.QuerySpendableBalancesRequestAmino): _11.QuerySpendableBalancesRequest;
                toAmino(message: _11.QuerySpendableBalancesRequest): _11.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _11.QuerySpendableBalancesRequestAminoMsg): _11.QuerySpendableBalancesRequest;
                toAminoMsg(message: _11.QuerySpendableBalancesRequest): _11.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _11.QuerySpendableBalancesRequestProtoMsg): _11.QuerySpendableBalancesRequest;
                toProto(message: _11.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _11.QuerySpendableBalancesRequest): _11.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _11.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_11.QuerySpendableBalancesResponse>): _11.QuerySpendableBalancesResponse;
                fromAmino(object: _11.QuerySpendableBalancesResponseAmino): _11.QuerySpendableBalancesResponse;
                toAmino(message: _11.QuerySpendableBalancesResponse): _11.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _11.QuerySpendableBalancesResponseAminoMsg): _11.QuerySpendableBalancesResponse;
                toAminoMsg(message: _11.QuerySpendableBalancesResponse): _11.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _11.QuerySpendableBalancesResponseProtoMsg): _11.QuerySpendableBalancesResponse;
                toProto(message: _11.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _11.QuerySpendableBalancesResponse): _11.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                encode(message: _11.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_11.QueryTotalSupplyRequest>): _11.QueryTotalSupplyRequest;
                fromAmino(object: _11.QueryTotalSupplyRequestAmino): _11.QueryTotalSupplyRequest;
                toAmino(message: _11.QueryTotalSupplyRequest): _11.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _11.QueryTotalSupplyRequestAminoMsg): _11.QueryTotalSupplyRequest;
                toAminoMsg(message: _11.QueryTotalSupplyRequest): _11.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _11.QueryTotalSupplyRequestProtoMsg): _11.QueryTotalSupplyRequest;
                toProto(message: _11.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _11.QueryTotalSupplyRequest): _11.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                encode(message: _11.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_11.QueryTotalSupplyResponse>): _11.QueryTotalSupplyResponse;
                fromAmino(object: _11.QueryTotalSupplyResponseAmino): _11.QueryTotalSupplyResponse;
                toAmino(message: _11.QueryTotalSupplyResponse): _11.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _11.QueryTotalSupplyResponseAminoMsg): _11.QueryTotalSupplyResponse;
                toAminoMsg(message: _11.QueryTotalSupplyResponse): _11.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _11.QueryTotalSupplyResponseProtoMsg): _11.QueryTotalSupplyResponse;
                toProto(message: _11.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _11.QueryTotalSupplyResponse): _11.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                encode(message: _11.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QuerySupplyOfRequest;
                fromPartial(object: Partial<_11.QuerySupplyOfRequest>): _11.QuerySupplyOfRequest;
                fromAmino(object: _11.QuerySupplyOfRequestAmino): _11.QuerySupplyOfRequest;
                toAmino(message: _11.QuerySupplyOfRequest): _11.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _11.QuerySupplyOfRequestAminoMsg): _11.QuerySupplyOfRequest;
                toAminoMsg(message: _11.QuerySupplyOfRequest): _11.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _11.QuerySupplyOfRequestProtoMsg): _11.QuerySupplyOfRequest;
                toProto(message: _11.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _11.QuerySupplyOfRequest): _11.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                encode(message: _11.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QuerySupplyOfResponse;
                fromPartial(object: Partial<_11.QuerySupplyOfResponse>): _11.QuerySupplyOfResponse;
                fromAmino(object: _11.QuerySupplyOfResponseAmino): _11.QuerySupplyOfResponse;
                toAmino(message: _11.QuerySupplyOfResponse): _11.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _11.QuerySupplyOfResponseAminoMsg): _11.QuerySupplyOfResponse;
                toAminoMsg(message: _11.QuerySupplyOfResponse): _11.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _11.QuerySupplyOfResponseProtoMsg): _11.QuerySupplyOfResponse;
                toProto(message: _11.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _11.QuerySupplyOfResponse): _11.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _11.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryParamsRequest;
                fromPartial(_: Partial<_11.QueryParamsRequest>): _11.QueryParamsRequest;
                fromAmino(_: _11.QueryParamsRequestAmino): _11.QueryParamsRequest;
                toAmino(_: _11.QueryParamsRequest): _11.QueryParamsRequestAmino;
                fromAminoMsg(object: _11.QueryParamsRequestAminoMsg): _11.QueryParamsRequest;
                toAminoMsg(message: _11.QueryParamsRequest): _11.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _11.QueryParamsRequestProtoMsg): _11.QueryParamsRequest;
                toProto(message: _11.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _11.QueryParamsRequest): _11.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _11.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryParamsResponse;
                fromPartial(object: Partial<_11.QueryParamsResponse>): _11.QueryParamsResponse;
                fromAmino(object: _11.QueryParamsResponseAmino): _11.QueryParamsResponse;
                toAmino(message: _11.QueryParamsResponse): _11.QueryParamsResponseAmino;
                fromAminoMsg(object: _11.QueryParamsResponseAminoMsg): _11.QueryParamsResponse;
                toAminoMsg(message: _11.QueryParamsResponse): _11.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _11.QueryParamsResponseProtoMsg): _11.QueryParamsResponse;
                toProto(message: _11.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _11.QueryParamsResponse): _11.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _11.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_11.QueryDenomsMetadataRequest>): _11.QueryDenomsMetadataRequest;
                fromAmino(object: _11.QueryDenomsMetadataRequestAmino): _11.QueryDenomsMetadataRequest;
                toAmino(message: _11.QueryDenomsMetadataRequest): _11.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _11.QueryDenomsMetadataRequestAminoMsg): _11.QueryDenomsMetadataRequest;
                toAminoMsg(message: _11.QueryDenomsMetadataRequest): _11.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _11.QueryDenomsMetadataRequestProtoMsg): _11.QueryDenomsMetadataRequest;
                toProto(message: _11.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _11.QueryDenomsMetadataRequest): _11.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _11.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_11.QueryDenomsMetadataResponse>): _11.QueryDenomsMetadataResponse;
                fromAmino(object: _11.QueryDenomsMetadataResponseAmino): _11.QueryDenomsMetadataResponse;
                toAmino(message: _11.QueryDenomsMetadataResponse): _11.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _11.QueryDenomsMetadataResponseAminoMsg): _11.QueryDenomsMetadataResponse;
                toAminoMsg(message: _11.QueryDenomsMetadataResponse): _11.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _11.QueryDenomsMetadataResponseProtoMsg): _11.QueryDenomsMetadataResponse;
                toProto(message: _11.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _11.QueryDenomsMetadataResponse): _11.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                encode(message: _11.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_11.QueryDenomMetadataRequest>): _11.QueryDenomMetadataRequest;
                fromAmino(object: _11.QueryDenomMetadataRequestAmino): _11.QueryDenomMetadataRequest;
                toAmino(message: _11.QueryDenomMetadataRequest): _11.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _11.QueryDenomMetadataRequestAminoMsg): _11.QueryDenomMetadataRequest;
                toAminoMsg(message: _11.QueryDenomMetadataRequest): _11.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _11.QueryDenomMetadataRequestProtoMsg): _11.QueryDenomMetadataRequest;
                toProto(message: _11.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _11.QueryDenomMetadataRequest): _11.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                encode(message: _11.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_11.QueryDenomMetadataResponse>): _11.QueryDenomMetadataResponse;
                fromAmino(object: _11.QueryDenomMetadataResponseAmino): _11.QueryDenomMetadataResponse;
                toAmino(message: _11.QueryDenomMetadataResponse): _11.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _11.QueryDenomMetadataResponseAminoMsg): _11.QueryDenomMetadataResponse;
                toAminoMsg(message: _11.QueryDenomMetadataResponse): _11.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _11.QueryDenomMetadataResponseProtoMsg): _11.QueryDenomMetadataResponse;
                toProto(message: _11.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _11.QueryDenomMetadataResponse): _11.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                encode(message: _11.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_11.QueryDenomOwnersRequest>): _11.QueryDenomOwnersRequest;
                fromAmino(object: _11.QueryDenomOwnersRequestAmino): _11.QueryDenomOwnersRequest;
                toAmino(message: _11.QueryDenomOwnersRequest): _11.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _11.QueryDenomOwnersRequestAminoMsg): _11.QueryDenomOwnersRequest;
                toAminoMsg(message: _11.QueryDenomOwnersRequest): _11.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _11.QueryDenomOwnersRequestProtoMsg): _11.QueryDenomOwnersRequest;
                toProto(message: _11.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _11.QueryDenomOwnersRequest): _11.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                encode(message: _11.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.DenomOwner;
                fromPartial(object: Partial<_11.DenomOwner>): _11.DenomOwner;
                fromAmino(object: _11.DenomOwnerAmino): _11.DenomOwner;
                toAmino(message: _11.DenomOwner): _11.DenomOwnerAmino;
                fromAminoMsg(object: _11.DenomOwnerAminoMsg): _11.DenomOwner;
                toAminoMsg(message: _11.DenomOwner): _11.DenomOwnerAminoMsg;
                fromProtoMsg(message: _11.DenomOwnerProtoMsg): _11.DenomOwner;
                toProto(message: _11.DenomOwner): Uint8Array;
                toProtoMsg(message: _11.DenomOwner): _11.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                encode(message: _11.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_11.QueryDenomOwnersResponse>): _11.QueryDenomOwnersResponse;
                fromAmino(object: _11.QueryDenomOwnersResponseAmino): _11.QueryDenomOwnersResponse;
                toAmino(message: _11.QueryDenomOwnersResponse): _11.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _11.QueryDenomOwnersResponseAminoMsg): _11.QueryDenomOwnersResponse;
                toAminoMsg(message: _11.QueryDenomOwnersResponse): _11.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _11.QueryDenomOwnersResponseProtoMsg): _11.QueryDenomOwnersResponse;
                toProto(message: _11.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _11.QueryDenomOwnersResponse): _11.QueryDenomOwnersResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _10.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.GenesisState;
                fromPartial(object: Partial<_10.GenesisState>): _10.GenesisState;
                fromAmino(object: _10.GenesisStateAmino): _10.GenesisState;
                toAmino(message: _10.GenesisState): _10.GenesisStateAmino;
                fromAminoMsg(object: _10.GenesisStateAminoMsg): _10.GenesisState;
                toAminoMsg(message: _10.GenesisState): _10.GenesisStateAminoMsg;
                fromProtoMsg(message: _10.GenesisStateProtoMsg): _10.GenesisState;
                toProto(message: _10.GenesisState): Uint8Array;
                toProtoMsg(message: _10.GenesisState): _10.GenesisStateProtoMsg;
            };
            Balance: {
                encode(message: _10.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Balance;
                fromPartial(object: Partial<_10.Balance>): _10.Balance;
                fromAmino(object: _10.BalanceAmino): _10.Balance;
                toAmino(message: _10.Balance): _10.BalanceAmino;
                fromAminoMsg(object: _10.BalanceAminoMsg): _10.Balance;
                toAminoMsg(message: _10.Balance): _10.BalanceAminoMsg;
                fromProtoMsg(message: _10.BalanceProtoMsg): _10.Balance;
                toProto(message: _10.Balance): Uint8Array;
                toProtoMsg(message: _10.Balance): _10.BalanceProtoMsg;
            };
            Params: {
                encode(message: _9.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Params;
                fromPartial(object: Partial<_9.Params>): _9.Params;
                fromAmino(object: _9.ParamsAmino): _9.Params;
                toAmino(message: _9.Params): _9.ParamsAmino;
                fromAminoMsg(object: _9.ParamsAminoMsg): _9.Params;
                toAminoMsg(message: _9.Params): _9.ParamsAminoMsg;
                fromProtoMsg(message: _9.ParamsProtoMsg): _9.Params;
                toProto(message: _9.Params): Uint8Array;
                toProtoMsg(message: _9.Params): _9.ParamsProtoMsg;
            };
            SendEnabled: {
                encode(message: _9.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.SendEnabled;
                fromPartial(object: Partial<_9.SendEnabled>): _9.SendEnabled;
                fromAmino(object: _9.SendEnabledAmino): _9.SendEnabled;
                toAmino(message: _9.SendEnabled): _9.SendEnabledAmino;
                fromAminoMsg(object: _9.SendEnabledAminoMsg): _9.SendEnabled;
                toAminoMsg(message: _9.SendEnabled): _9.SendEnabledAminoMsg;
                fromProtoMsg(message: _9.SendEnabledProtoMsg): _9.SendEnabled;
                toProto(message: _9.SendEnabled): Uint8Array;
                toProtoMsg(message: _9.SendEnabled): _9.SendEnabledProtoMsg;
            };
            Input: {
                encode(message: _9.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Input;
                fromPartial(object: Partial<_9.Input>): _9.Input;
                fromAmino(object: _9.InputAmino): _9.Input;
                toAmino(message: _9.Input): _9.InputAmino;
                fromAminoMsg(object: _9.InputAminoMsg): _9.Input;
                toAminoMsg(message: _9.Input): _9.InputAminoMsg;
                fromProtoMsg(message: _9.InputProtoMsg): _9.Input;
                toProto(message: _9.Input): Uint8Array;
                toProtoMsg(message: _9.Input): _9.InputProtoMsg;
            };
            Output: {
                encode(message: _9.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Output;
                fromPartial(object: Partial<_9.Output>): _9.Output;
                fromAmino(object: _9.OutputAmino): _9.Output;
                toAmino(message: _9.Output): _9.OutputAmino;
                fromAminoMsg(object: _9.OutputAminoMsg): _9.Output;
                toAminoMsg(message: _9.Output): _9.OutputAminoMsg;
                fromProtoMsg(message: _9.OutputProtoMsg): _9.Output;
                toProto(message: _9.Output): Uint8Array;
                toProtoMsg(message: _9.Output): _9.OutputProtoMsg;
            };
            Supply: {
                encode(message: _9.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Supply;
                fromPartial(object: Partial<_9.Supply>): _9.Supply;
                fromAmino(object: _9.SupplyAmino): _9.Supply;
                toAmino(message: _9.Supply): _9.SupplyAmino;
                fromAminoMsg(object: _9.SupplyAminoMsg): _9.Supply;
                toAminoMsg(message: _9.Supply): _9.SupplyAminoMsg;
                fromProtoMsg(message: _9.SupplyProtoMsg): _9.Supply;
                toProto(message: _9.Supply): Uint8Array;
                toProtoMsg(message: _9.Supply): _9.SupplyProtoMsg;
            };
            DenomUnit: {
                encode(message: _9.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.DenomUnit;
                fromPartial(object: Partial<_9.DenomUnit>): _9.DenomUnit;
                fromAmino(object: _9.DenomUnitAmino): _9.DenomUnit;
                toAmino(message: _9.DenomUnit): _9.DenomUnitAmino;
                fromAminoMsg(object: _9.DenomUnitAminoMsg): _9.DenomUnit;
                toAminoMsg(message: _9.DenomUnit): _9.DenomUnitAminoMsg;
                fromProtoMsg(message: _9.DenomUnitProtoMsg): _9.DenomUnit;
                toProto(message: _9.DenomUnit): Uint8Array;
                toProtoMsg(message: _9.DenomUnit): _9.DenomUnitProtoMsg;
            };
            Metadata: {
                encode(message: _9.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Metadata;
                fromPartial(object: Partial<_9.Metadata>): _9.Metadata;
                fromAmino(object: _9.MetadataAmino): _9.Metadata;
                toAmino(message: _9.Metadata): _9.MetadataAmino;
                fromAminoMsg(object: _9.MetadataAminoMsg): _9.Metadata;
                toAminoMsg(message: _9.Metadata): _9.MetadataAminoMsg;
                fromProtoMsg(message: _9.MetadataProtoMsg): _9.Metadata;
                toProto(message: _9.Metadata): Uint8Array;
                toProtoMsg(message: _9.Metadata): _9.MetadataProtoMsg;
            };
            SendAuthorization: {
                encode(message: _8.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.SendAuthorization;
                fromPartial(object: Partial<_8.SendAuthorization>): _8.SendAuthorization;
                fromAmino(object: _8.SendAuthorizationAmino): _8.SendAuthorization;
                toAmino(message: _8.SendAuthorization): _8.SendAuthorizationAmino;
                fromAminoMsg(object: _8.SendAuthorizationAminoMsg): _8.SendAuthorization;
                toAminoMsg(message: _8.SendAuthorization): _8.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _8.SendAuthorizationProtoMsg): _8.SendAuthorization;
                toProto(message: _8.SendAuthorization): Uint8Array;
                toProtoMsg(message: _8.SendAuthorization): _8.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _13.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.TxResponse;
                    fromPartial(object: Partial<_13.TxResponse>): _13.TxResponse;
                    fromAmino(object: _13.TxResponseAmino): _13.TxResponse;
                    toAmino(message: _13.TxResponse): _13.TxResponseAmino;
                    fromAminoMsg(object: _13.TxResponseAminoMsg): _13.TxResponse;
                    toAminoMsg(message: _13.TxResponse): _13.TxResponseAminoMsg;
                    fromProtoMsg(message: _13.TxResponseProtoMsg): _13.TxResponse;
                    toProto(message: _13.TxResponse): Uint8Array;
                    toProtoMsg(message: _13.TxResponse): _13.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    encode(message: _13.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.ABCIMessageLog;
                    fromPartial(object: Partial<_13.ABCIMessageLog>): _13.ABCIMessageLog;
                    fromAmino(object: _13.ABCIMessageLogAmino): _13.ABCIMessageLog;
                    toAmino(message: _13.ABCIMessageLog): _13.ABCIMessageLogAmino;
                    fromAminoMsg(object: _13.ABCIMessageLogAminoMsg): _13.ABCIMessageLog;
                    toAminoMsg(message: _13.ABCIMessageLog): _13.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _13.ABCIMessageLogProtoMsg): _13.ABCIMessageLog;
                    toProto(message: _13.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _13.ABCIMessageLog): _13.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    encode(message: _13.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.StringEvent;
                    fromPartial(object: Partial<_13.StringEvent>): _13.StringEvent;
                    fromAmino(object: _13.StringEventAmino): _13.StringEvent;
                    toAmino(message: _13.StringEvent): _13.StringEventAmino;
                    fromAminoMsg(object: _13.StringEventAminoMsg): _13.StringEvent;
                    toAminoMsg(message: _13.StringEvent): _13.StringEventAminoMsg;
                    fromProtoMsg(message: _13.StringEventProtoMsg): _13.StringEvent;
                    toProto(message: _13.StringEvent): Uint8Array;
                    toProtoMsg(message: _13.StringEvent): _13.StringEventProtoMsg;
                };
                Attribute: {
                    encode(message: _13.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Attribute;
                    fromPartial(object: Partial<_13.Attribute>): _13.Attribute;
                    fromAmino(object: _13.AttributeAmino): _13.Attribute;
                    toAmino(message: _13.Attribute): _13.AttributeAmino;
                    fromAminoMsg(object: _13.AttributeAminoMsg): _13.Attribute;
                    toAminoMsg(message: _13.Attribute): _13.AttributeAminoMsg;
                    fromProtoMsg(message: _13.AttributeProtoMsg): _13.Attribute;
                    toProto(message: _13.Attribute): Uint8Array;
                    toProtoMsg(message: _13.Attribute): _13.AttributeProtoMsg;
                };
                GasInfo: {
                    encode(message: _13.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.GasInfo;
                    fromPartial(object: Partial<_13.GasInfo>): _13.GasInfo;
                    fromAmino(object: _13.GasInfoAmino): _13.GasInfo;
                    toAmino(message: _13.GasInfo): _13.GasInfoAmino;
                    fromAminoMsg(object: _13.GasInfoAminoMsg): _13.GasInfo;
                    toAminoMsg(message: _13.GasInfo): _13.GasInfoAminoMsg;
                    fromProtoMsg(message: _13.GasInfoProtoMsg): _13.GasInfo;
                    toProto(message: _13.GasInfo): Uint8Array;
                    toProtoMsg(message: _13.GasInfo): _13.GasInfoProtoMsg;
                };
                Result: {
                    encode(message: _13.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Result;
                    fromPartial(object: Partial<_13.Result>): _13.Result;
                    fromAmino(object: _13.ResultAmino): _13.Result;
                    toAmino(message: _13.Result): _13.ResultAmino;
                    fromAminoMsg(object: _13.ResultAminoMsg): _13.Result;
                    toAminoMsg(message: _13.Result): _13.ResultAminoMsg;
                    fromProtoMsg(message: _13.ResultProtoMsg): _13.Result;
                    toProto(message: _13.Result): Uint8Array;
                    toProtoMsg(message: _13.Result): _13.ResultProtoMsg;
                };
                SimulationResponse: {
                    encode(message: _13.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.SimulationResponse;
                    fromPartial(object: Partial<_13.SimulationResponse>): _13.SimulationResponse;
                    fromAmino(object: _13.SimulationResponseAmino): _13.SimulationResponse;
                    toAmino(message: _13.SimulationResponse): _13.SimulationResponseAmino;
                    fromAminoMsg(object: _13.SimulationResponseAminoMsg): _13.SimulationResponse;
                    toAminoMsg(message: _13.SimulationResponse): _13.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _13.SimulationResponseProtoMsg): _13.SimulationResponse;
                    toProto(message: _13.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _13.SimulationResponse): _13.SimulationResponseProtoMsg;
                };
                MsgData: {
                    encode(message: _13.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgData;
                    fromPartial(object: Partial<_13.MsgData>): _13.MsgData;
                    fromAmino(object: _13.MsgDataAmino): _13.MsgData;
                    toAmino(message: _13.MsgData): _13.MsgDataAmino;
                    fromAminoMsg(object: _13.MsgDataAminoMsg): _13.MsgData;
                    toAminoMsg(message: _13.MsgData): _13.MsgDataAminoMsg;
                    fromProtoMsg(message: _13.MsgDataProtoMsg): _13.MsgData;
                    toProto(message: _13.MsgData): Uint8Array;
                    toProtoMsg(message: _13.MsgData): _13.MsgDataProtoMsg;
                };
                TxMsgData: {
                    encode(message: _13.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.TxMsgData;
                    fromPartial(object: Partial<_13.TxMsgData>): _13.TxMsgData;
                    fromAmino(object: _13.TxMsgDataAmino): _13.TxMsgData;
                    toAmino(message: _13.TxMsgData): _13.TxMsgDataAmino;
                    fromAminoMsg(object: _13.TxMsgDataAminoMsg): _13.TxMsgData;
                    toAminoMsg(message: _13.TxMsgData): _13.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _13.TxMsgDataProtoMsg): _13.TxMsgData;
                    toProto(message: _13.TxMsgData): Uint8Array;
                    toProtoMsg(message: _13.TxMsgData): _13.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    encode(message: _13.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.SearchTxsResult;
                    fromPartial(object: Partial<_13.SearchTxsResult>): _13.SearchTxsResult;
                    fromAmino(object: _13.SearchTxsResultAmino): _13.SearchTxsResult;
                    toAmino(message: _13.SearchTxsResult): _13.SearchTxsResultAmino;
                    fromAminoMsg(object: _13.SearchTxsResultAminoMsg): _13.SearchTxsResult;
                    toAminoMsg(message: _13.SearchTxsResult): _13.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _13.SearchTxsResultProtoMsg): _13.SearchTxsResult;
                    toProto(message: _13.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _13.SearchTxsResult): _13.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _14.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.PageRequest;
                    fromPartial(object: Partial<_14.PageRequest>): _14.PageRequest;
                    fromAmino(object: _14.PageRequestAmino): _14.PageRequest;
                    toAmino(message: _14.PageRequest): _14.PageRequestAmino;
                    fromAminoMsg(object: _14.PageRequestAminoMsg): _14.PageRequest;
                    toAminoMsg(message: _14.PageRequest): _14.PageRequestAminoMsg;
                    fromProtoMsg(message: _14.PageRequestProtoMsg): _14.PageRequest;
                    toProto(message: _14.PageRequest): Uint8Array;
                    toProtoMsg(message: _14.PageRequest): _14.PageRequestProtoMsg;
                };
                PageResponse: {
                    encode(message: _14.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.PageResponse;
                    fromPartial(object: Partial<_14.PageResponse>): _14.PageResponse;
                    fromAmino(object: _14.PageResponseAmino): _14.PageResponse;
                    toAmino(message: _14.PageResponse): _14.PageResponseAmino;
                    fromAminoMsg(object: _14.PageResponseAminoMsg): _14.PageResponse;
                    toAminoMsg(message: _14.PageResponse): _14.PageResponseAminoMsg;
                    fromProtoMsg(message: _14.PageResponseProtoMsg): _14.PageResponse;
                    toProto(message: _14.PageResponse): Uint8Array;
                    toProtoMsg(message: _14.PageResponse): _14.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _15.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.AppDescriptor;
                    fromPartial(object: Partial<_15.AppDescriptor>): _15.AppDescriptor;
                    fromAmino(object: _15.AppDescriptorAmino): _15.AppDescriptor;
                    toAmino(message: _15.AppDescriptor): _15.AppDescriptorAmino;
                    fromAminoMsg(object: _15.AppDescriptorAminoMsg): _15.AppDescriptor;
                    toAminoMsg(message: _15.AppDescriptor): _15.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _15.AppDescriptorProtoMsg): _15.AppDescriptor;
                    toProto(message: _15.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _15.AppDescriptor): _15.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    encode(message: _15.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.TxDescriptor;
                    fromPartial(object: Partial<_15.TxDescriptor>): _15.TxDescriptor;
                    fromAmino(object: _15.TxDescriptorAmino): _15.TxDescriptor;
                    toAmino(message: _15.TxDescriptor): _15.TxDescriptorAmino;
                    fromAminoMsg(object: _15.TxDescriptorAminoMsg): _15.TxDescriptor;
                    toAminoMsg(message: _15.TxDescriptor): _15.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _15.TxDescriptorProtoMsg): _15.TxDescriptor;
                    toProto(message: _15.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _15.TxDescriptor): _15.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    encode(message: _15.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.AuthnDescriptor;
                    fromPartial(object: Partial<_15.AuthnDescriptor>): _15.AuthnDescriptor;
                    fromAmino(object: _15.AuthnDescriptorAmino): _15.AuthnDescriptor;
                    toAmino(message: _15.AuthnDescriptor): _15.AuthnDescriptorAmino;
                    fromAminoMsg(object: _15.AuthnDescriptorAminoMsg): _15.AuthnDescriptor;
                    toAminoMsg(message: _15.AuthnDescriptor): _15.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _15.AuthnDescriptorProtoMsg): _15.AuthnDescriptor;
                    toProto(message: _15.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _15.AuthnDescriptor): _15.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    encode(message: _15.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.SigningModeDescriptor;
                    fromPartial(object: Partial<_15.SigningModeDescriptor>): _15.SigningModeDescriptor;
                    fromAmino(object: _15.SigningModeDescriptorAmino): _15.SigningModeDescriptor;
                    toAmino(message: _15.SigningModeDescriptor): _15.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _15.SigningModeDescriptorAminoMsg): _15.SigningModeDescriptor;
                    toAminoMsg(message: _15.SigningModeDescriptor): _15.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _15.SigningModeDescriptorProtoMsg): _15.SigningModeDescriptor;
                    toProto(message: _15.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _15.SigningModeDescriptor): _15.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    encode(message: _15.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.ChainDescriptor;
                    fromPartial(object: Partial<_15.ChainDescriptor>): _15.ChainDescriptor;
                    fromAmino(object: _15.ChainDescriptorAmino): _15.ChainDescriptor;
                    toAmino(message: _15.ChainDescriptor): _15.ChainDescriptorAmino;
                    fromAminoMsg(object: _15.ChainDescriptorAminoMsg): _15.ChainDescriptor;
                    toAminoMsg(message: _15.ChainDescriptor): _15.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _15.ChainDescriptorProtoMsg): _15.ChainDescriptor;
                    toProto(message: _15.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _15.ChainDescriptor): _15.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    encode(message: _15.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.CodecDescriptor;
                    fromPartial(object: Partial<_15.CodecDescriptor>): _15.CodecDescriptor;
                    fromAmino(object: _15.CodecDescriptorAmino): _15.CodecDescriptor;
                    toAmino(message: _15.CodecDescriptor): _15.CodecDescriptorAmino;
                    fromAminoMsg(object: _15.CodecDescriptorAminoMsg): _15.CodecDescriptor;
                    toAminoMsg(message: _15.CodecDescriptor): _15.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _15.CodecDescriptorProtoMsg): _15.CodecDescriptor;
                    toProto(message: _15.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _15.CodecDescriptor): _15.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    encode(message: _15.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.InterfaceDescriptor;
                    fromPartial(object: Partial<_15.InterfaceDescriptor>): _15.InterfaceDescriptor;
                    fromAmino(object: _15.InterfaceDescriptorAmino): _15.InterfaceDescriptor;
                    toAmino(message: _15.InterfaceDescriptor): _15.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _15.InterfaceDescriptorAminoMsg): _15.InterfaceDescriptor;
                    toAminoMsg(message: _15.InterfaceDescriptor): _15.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _15.InterfaceDescriptorProtoMsg): _15.InterfaceDescriptor;
                    toProto(message: _15.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _15.InterfaceDescriptor): _15.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _15.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_15.InterfaceImplementerDescriptor>): _15.InterfaceImplementerDescriptor;
                    fromAmino(object: _15.InterfaceImplementerDescriptorAmino): _15.InterfaceImplementerDescriptor;
                    toAmino(message: _15.InterfaceImplementerDescriptor): _15.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _15.InterfaceImplementerDescriptorAminoMsg): _15.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _15.InterfaceImplementerDescriptor): _15.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _15.InterfaceImplementerDescriptorProtoMsg): _15.InterfaceImplementerDescriptor;
                    toProto(message: _15.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _15.InterfaceImplementerDescriptor): _15.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _15.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_15.InterfaceAcceptingMessageDescriptor>): _15.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _15.InterfaceAcceptingMessageDescriptorAmino): _15.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _15.InterfaceAcceptingMessageDescriptor): _15.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _15.InterfaceAcceptingMessageDescriptorAminoMsg): _15.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _15.InterfaceAcceptingMessageDescriptor): _15.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _15.InterfaceAcceptingMessageDescriptorProtoMsg): _15.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _15.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _15.InterfaceAcceptingMessageDescriptor): _15.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    encode(message: _15.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.ConfigurationDescriptor;
                    fromPartial(object: Partial<_15.ConfigurationDescriptor>): _15.ConfigurationDescriptor;
                    fromAmino(object: _15.ConfigurationDescriptorAmino): _15.ConfigurationDescriptor;
                    toAmino(message: _15.ConfigurationDescriptor): _15.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _15.ConfigurationDescriptorAminoMsg): _15.ConfigurationDescriptor;
                    toAminoMsg(message: _15.ConfigurationDescriptor): _15.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _15.ConfigurationDescriptorProtoMsg): _15.ConfigurationDescriptor;
                    toProto(message: _15.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _15.ConfigurationDescriptor): _15.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    encode(message: _15.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgDescriptor;
                    fromPartial(object: Partial<_15.MsgDescriptor>): _15.MsgDescriptor;
                    fromAmino(object: _15.MsgDescriptorAmino): _15.MsgDescriptor;
                    toAmino(message: _15.MsgDescriptor): _15.MsgDescriptorAmino;
                    fromAminoMsg(object: _15.MsgDescriptorAminoMsg): _15.MsgDescriptor;
                    toAminoMsg(message: _15.MsgDescriptor): _15.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _15.MsgDescriptorProtoMsg): _15.MsgDescriptor;
                    toProto(message: _15.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _15.MsgDescriptor): _15.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _15.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_15.GetAuthnDescriptorRequest>): _15.GetAuthnDescriptorRequest;
                    fromAmino(_: _15.GetAuthnDescriptorRequestAmino): _15.GetAuthnDescriptorRequest;
                    toAmino(_: _15.GetAuthnDescriptorRequest): _15.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _15.GetAuthnDescriptorRequestAminoMsg): _15.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _15.GetAuthnDescriptorRequest): _15.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _15.GetAuthnDescriptorRequestProtoMsg): _15.GetAuthnDescriptorRequest;
                    toProto(message: _15.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _15.GetAuthnDescriptorRequest): _15.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _15.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_15.GetAuthnDescriptorResponse>): _15.GetAuthnDescriptorResponse;
                    fromAmino(object: _15.GetAuthnDescriptorResponseAmino): _15.GetAuthnDescriptorResponse;
                    toAmino(message: _15.GetAuthnDescriptorResponse): _15.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _15.GetAuthnDescriptorResponseAminoMsg): _15.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _15.GetAuthnDescriptorResponse): _15.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _15.GetAuthnDescriptorResponseProtoMsg): _15.GetAuthnDescriptorResponse;
                    toProto(message: _15.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _15.GetAuthnDescriptorResponse): _15.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    encode(_: _15.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_15.GetChainDescriptorRequest>): _15.GetChainDescriptorRequest;
                    fromAmino(_: _15.GetChainDescriptorRequestAmino): _15.GetChainDescriptorRequest;
                    toAmino(_: _15.GetChainDescriptorRequest): _15.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _15.GetChainDescriptorRequestAminoMsg): _15.GetChainDescriptorRequest;
                    toAminoMsg(message: _15.GetChainDescriptorRequest): _15.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _15.GetChainDescriptorRequestProtoMsg): _15.GetChainDescriptorRequest;
                    toProto(message: _15.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _15.GetChainDescriptorRequest): _15.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    encode(message: _15.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_15.GetChainDescriptorResponse>): _15.GetChainDescriptorResponse;
                    fromAmino(object: _15.GetChainDescriptorResponseAmino): _15.GetChainDescriptorResponse;
                    toAmino(message: _15.GetChainDescriptorResponse): _15.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _15.GetChainDescriptorResponseAminoMsg): _15.GetChainDescriptorResponse;
                    toAminoMsg(message: _15.GetChainDescriptorResponse): _15.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _15.GetChainDescriptorResponseProtoMsg): _15.GetChainDescriptorResponse;
                    toProto(message: _15.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _15.GetChainDescriptorResponse): _15.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _15.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_15.GetCodecDescriptorRequest>): _15.GetCodecDescriptorRequest;
                    fromAmino(_: _15.GetCodecDescriptorRequestAmino): _15.GetCodecDescriptorRequest;
                    toAmino(_: _15.GetCodecDescriptorRequest): _15.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _15.GetCodecDescriptorRequestAminoMsg): _15.GetCodecDescriptorRequest;
                    toAminoMsg(message: _15.GetCodecDescriptorRequest): _15.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _15.GetCodecDescriptorRequestProtoMsg): _15.GetCodecDescriptorRequest;
                    toProto(message: _15.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _15.GetCodecDescriptorRequest): _15.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _15.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_15.GetCodecDescriptorResponse>): _15.GetCodecDescriptorResponse;
                    fromAmino(object: _15.GetCodecDescriptorResponseAmino): _15.GetCodecDescriptorResponse;
                    toAmino(message: _15.GetCodecDescriptorResponse): _15.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _15.GetCodecDescriptorResponseAminoMsg): _15.GetCodecDescriptorResponse;
                    toAminoMsg(message: _15.GetCodecDescriptorResponse): _15.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _15.GetCodecDescriptorResponseProtoMsg): _15.GetCodecDescriptorResponse;
                    toProto(message: _15.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _15.GetCodecDescriptorResponse): _15.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _15.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_15.GetConfigurationDescriptorRequest>): _15.GetConfigurationDescriptorRequest;
                    fromAmino(_: _15.GetConfigurationDescriptorRequestAmino): _15.GetConfigurationDescriptorRequest;
                    toAmino(_: _15.GetConfigurationDescriptorRequest): _15.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _15.GetConfigurationDescriptorRequestAminoMsg): _15.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _15.GetConfigurationDescriptorRequest): _15.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _15.GetConfigurationDescriptorRequestProtoMsg): _15.GetConfigurationDescriptorRequest;
                    toProto(message: _15.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _15.GetConfigurationDescriptorRequest): _15.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _15.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_15.GetConfigurationDescriptorResponse>): _15.GetConfigurationDescriptorResponse;
                    fromAmino(object: _15.GetConfigurationDescriptorResponseAmino): _15.GetConfigurationDescriptorResponse;
                    toAmino(message: _15.GetConfigurationDescriptorResponse): _15.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _15.GetConfigurationDescriptorResponseAminoMsg): _15.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _15.GetConfigurationDescriptorResponse): _15.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _15.GetConfigurationDescriptorResponseProtoMsg): _15.GetConfigurationDescriptorResponse;
                    toProto(message: _15.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _15.GetConfigurationDescriptorResponse): _15.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _15.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_15.GetQueryServicesDescriptorRequest>): _15.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _15.GetQueryServicesDescriptorRequestAmino): _15.GetQueryServicesDescriptorRequest;
                    toAmino(_: _15.GetQueryServicesDescriptorRequest): _15.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _15.GetQueryServicesDescriptorRequestAminoMsg): _15.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _15.GetQueryServicesDescriptorRequest): _15.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _15.GetQueryServicesDescriptorRequestProtoMsg): _15.GetQueryServicesDescriptorRequest;
                    toProto(message: _15.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _15.GetQueryServicesDescriptorRequest): _15.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _15.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_15.GetQueryServicesDescriptorResponse>): _15.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _15.GetQueryServicesDescriptorResponseAmino): _15.GetQueryServicesDescriptorResponse;
                    toAmino(message: _15.GetQueryServicesDescriptorResponse): _15.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _15.GetQueryServicesDescriptorResponseAminoMsg): _15.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _15.GetQueryServicesDescriptorResponse): _15.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _15.GetQueryServicesDescriptorResponseProtoMsg): _15.GetQueryServicesDescriptorResponse;
                    toProto(message: _15.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _15.GetQueryServicesDescriptorResponse): _15.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    encode(_: _15.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_15.GetTxDescriptorRequest>): _15.GetTxDescriptorRequest;
                    fromAmino(_: _15.GetTxDescriptorRequestAmino): _15.GetTxDescriptorRequest;
                    toAmino(_: _15.GetTxDescriptorRequest): _15.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _15.GetTxDescriptorRequestAminoMsg): _15.GetTxDescriptorRequest;
                    toAminoMsg(message: _15.GetTxDescriptorRequest): _15.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _15.GetTxDescriptorRequestProtoMsg): _15.GetTxDescriptorRequest;
                    toProto(message: _15.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _15.GetTxDescriptorRequest): _15.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    encode(message: _15.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_15.GetTxDescriptorResponse>): _15.GetTxDescriptorResponse;
                    fromAmino(object: _15.GetTxDescriptorResponseAmino): _15.GetTxDescriptorResponse;
                    toAmino(message: _15.GetTxDescriptorResponse): _15.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _15.GetTxDescriptorResponseAminoMsg): _15.GetTxDescriptorResponse;
                    toAminoMsg(message: _15.GetTxDescriptorResponse): _15.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _15.GetTxDescriptorResponseProtoMsg): _15.GetTxDescriptorResponse;
                    toProto(message: _15.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _15.GetTxDescriptorResponse): _15.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    encode(message: _15.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryServicesDescriptor;
                    fromPartial(object: Partial<_15.QueryServicesDescriptor>): _15.QueryServicesDescriptor;
                    fromAmino(object: _15.QueryServicesDescriptorAmino): _15.QueryServicesDescriptor;
                    toAmino(message: _15.QueryServicesDescriptor): _15.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _15.QueryServicesDescriptorAminoMsg): _15.QueryServicesDescriptor;
                    toAminoMsg(message: _15.QueryServicesDescriptor): _15.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _15.QueryServicesDescriptorProtoMsg): _15.QueryServicesDescriptor;
                    toProto(message: _15.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _15.QueryServicesDescriptor): _15.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    encode(message: _15.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryServiceDescriptor;
                    fromPartial(object: Partial<_15.QueryServiceDescriptor>): _15.QueryServiceDescriptor;
                    fromAmino(object: _15.QueryServiceDescriptorAmino): _15.QueryServiceDescriptor;
                    toAmino(message: _15.QueryServiceDescriptor): _15.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _15.QueryServiceDescriptorAminoMsg): _15.QueryServiceDescriptor;
                    toAminoMsg(message: _15.QueryServiceDescriptor): _15.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _15.QueryServiceDescriptorProtoMsg): _15.QueryServiceDescriptor;
                    toProto(message: _15.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _15.QueryServiceDescriptor): _15.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    encode(message: _15.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryMethodDescriptor;
                    fromPartial(object: Partial<_15.QueryMethodDescriptor>): _15.QueryMethodDescriptor;
                    fromAmino(object: _15.QueryMethodDescriptorAmino): _15.QueryMethodDescriptor;
                    toAmino(message: _15.QueryMethodDescriptor): _15.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _15.QueryMethodDescriptorAminoMsg): _15.QueryMethodDescriptor;
                    toAminoMsg(message: _15.QueryMethodDescriptor): _15.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _15.QueryMethodDescriptorProtoMsg): _15.QueryMethodDescriptor;
                    toProto(message: _15.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _15.QueryMethodDescriptor): _15.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _16.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.Coin;
                fromPartial(object: Partial<_16.Coin>): _16.Coin;
                fromAmino(object: _16.CoinAmino): _16.Coin;
                toAmino(message: _16.Coin): _16.CoinAmino;
                fromAminoMsg(object: _16.CoinAminoMsg): _16.Coin;
                toAminoMsg(message: _16.Coin): _16.CoinAminoMsg;
                fromProtoMsg(message: _16.CoinProtoMsg): _16.Coin;
                toProto(message: _16.Coin): Uint8Array;
                toProtoMsg(message: _16.Coin): _16.CoinProtoMsg;
            };
            DecCoin: {
                encode(message: _16.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.DecCoin;
                fromPartial(object: Partial<_16.DecCoin>): _16.DecCoin;
                fromAmino(object: _16.DecCoinAmino): _16.DecCoin;
                toAmino(message: _16.DecCoin): _16.DecCoinAmino;
                fromAminoMsg(object: _16.DecCoinAminoMsg): _16.DecCoin;
                toAminoMsg(message: _16.DecCoin): _16.DecCoinAminoMsg;
                fromProtoMsg(message: _16.DecCoinProtoMsg): _16.DecCoin;
                toProto(message: _16.DecCoin): Uint8Array;
                toProtoMsg(message: _16.DecCoin): _16.DecCoinProtoMsg;
            };
            IntProto: {
                encode(message: _16.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.IntProto;
                fromPartial(object: Partial<_16.IntProto>): _16.IntProto;
                fromAmino(object: _16.IntProtoAmino): _16.IntProto;
                toAmino(message: _16.IntProto): _16.IntProtoAmino;
                fromAminoMsg(object: _16.IntProtoAminoMsg): _16.IntProto;
                toAminoMsg(message: _16.IntProto): _16.IntProtoAminoMsg;
                fromProtoMsg(message: _16.IntProtoProtoMsg): _16.IntProto;
                toProto(message: _16.IntProto): Uint8Array;
                toProtoMsg(message: _16.IntProto): _16.IntProtoProtoMsg;
            };
            DecProto: {
                encode(message: _16.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.DecProto;
                fromPartial(object: Partial<_16.DecProto>): _16.DecProto;
                fromAmino(object: _16.DecProtoAmino): _16.DecProto;
                toAmino(message: _16.DecProto): _16.DecProtoAmino;
                fromAminoMsg(object: _16.DecProtoAminoMsg): _16.DecProto;
                toAminoMsg(message: _16.DecProto): _16.DecProtoAminoMsg;
                fromProtoMsg(message: _16.DecProtoProtoMsg): _16.DecProto;
                toProto(message: _16.DecProto): Uint8Array;
                toProtoMsg(message: _16.DecProto): _16.DecProtoProtoMsg;
            };
        };
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _197.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _17.ConfigRequest): Promise<_17.ConfigResponse>;
                };
                LCDQueryClient: typeof _188.LCDQueryClient;
                ConfigRequest: {
                    encode(_: _17.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ConfigRequest;
                    fromPartial(_: Partial<_17.ConfigRequest>): _17.ConfigRequest;
                    fromAmino(_: _17.ConfigRequestAmino): _17.ConfigRequest;
                    toAmino(_: _17.ConfigRequest): _17.ConfigRequestAmino;
                    fromAminoMsg(object: _17.ConfigRequestAminoMsg): _17.ConfigRequest;
                    toAminoMsg(message: _17.ConfigRequest): _17.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _17.ConfigRequestProtoMsg): _17.ConfigRequest;
                    toProto(message: _17.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _17.ConfigRequest): _17.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    encode(message: _17.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ConfigResponse;
                    fromPartial(object: Partial<_17.ConfigResponse>): _17.ConfigResponse;
                    fromAmino(object: _17.ConfigResponseAmino): _17.ConfigResponse;
                    toAmino(message: _17.ConfigResponse): _17.ConfigResponseAmino;
                    fromAminoMsg(object: _17.ConfigResponseAminoMsg): _17.ConfigResponse;
                    toAminoMsg(message: _17.ConfigResponse): _17.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _17.ConfigResponseProtoMsg): _17.ConfigResponse;
                    toProto(message: _17.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _17.ConfigResponse): _17.ConfigResponseProtoMsg;
                };
            };
        }
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
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
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _19.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.BIP44Params;
                    fromPartial(object: Partial<_19.BIP44Params>): _19.BIP44Params;
                    fromAmino(object: _19.BIP44ParamsAmino): _19.BIP44Params;
                    toAmino(message: _19.BIP44Params): _19.BIP44ParamsAmino;
                    fromAminoMsg(object: _19.BIP44ParamsAminoMsg): _19.BIP44Params;
                    toAminoMsg(message: _19.BIP44Params): _19.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _19.BIP44ParamsProtoMsg): _19.BIP44Params;
                    toProto(message: _19.BIP44Params): Uint8Array;
                    toProtoMsg(message: _19.BIP44Params): _19.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _20.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Record;
                    fromPartial(object: Partial<_20.Record>): _20.Record;
                    fromAmino(object: _20.RecordAmino): _20.Record;
                    toAmino(message: _20.Record): _20.RecordAmino;
                    fromAminoMsg(object: _20.RecordAminoMsg): _20.Record;
                    toAminoMsg(message: _20.Record): _20.RecordAminoMsg;
                    fromProtoMsg(message: _20.RecordProtoMsg): _20.Record;
                    toProto(message: _20.Record): Uint8Array;
                    toProtoMsg(message: _20.Record): _20.RecordProtoMsg;
                };
                Record_Local: {
                    encode(message: _20.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Record_Local;
                    fromPartial(object: Partial<_20.Record_Local>): _20.Record_Local;
                    fromAmino(object: _20.Record_LocalAmino): _20.Record_Local;
                    toAmino(message: _20.Record_Local): _20.Record_LocalAmino;
                    fromAminoMsg(object: _20.Record_LocalAminoMsg): _20.Record_Local;
                    toAminoMsg(message: _20.Record_Local): _20.Record_LocalAminoMsg;
                    fromProtoMsg(message: _20.Record_LocalProtoMsg): _20.Record_Local;
                    toProto(message: _20.Record_Local): Uint8Array;
                    toProtoMsg(message: _20.Record_Local): _20.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    encode(message: _20.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Record_Ledger;
                    fromPartial(object: Partial<_20.Record_Ledger>): _20.Record_Ledger;
                    fromAmino(object: _20.Record_LedgerAmino): _20.Record_Ledger;
                    toAmino(message: _20.Record_Ledger): _20.Record_LedgerAmino;
                    fromAminoMsg(object: _20.Record_LedgerAminoMsg): _20.Record_Ledger;
                    toAminoMsg(message: _20.Record_Ledger): _20.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _20.Record_LedgerProtoMsg): _20.Record_Ledger;
                    toProto(message: _20.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _20.Record_Ledger): _20.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    encode(_: _20.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Record_Multi;
                    fromPartial(_: Partial<_20.Record_Multi>): _20.Record_Multi;
                    fromAmino(_: _20.Record_MultiAmino): _20.Record_Multi;
                    toAmino(_: _20.Record_Multi): _20.Record_MultiAmino;
                    fromAminoMsg(object: _20.Record_MultiAminoMsg): _20.Record_Multi;
                    toAminoMsg(message: _20.Record_Multi): _20.Record_MultiAminoMsg;
                    fromProtoMsg(message: _20.Record_MultiProtoMsg): _20.Record_Multi;
                    toProto(message: _20.Record_Multi): Uint8Array;
                    toProtoMsg(message: _20.Record_Multi): _20.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    encode(_: _20.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Record_Offline;
                    fromPartial(_: Partial<_20.Record_Offline>): _20.Record_Offline;
                    fromAmino(_: _20.Record_OfflineAmino): _20.Record_Offline;
                    toAmino(_: _20.Record_Offline): _20.Record_OfflineAmino;
                    fromAminoMsg(object: _20.Record_OfflineAminoMsg): _20.Record_Offline;
                    toAminoMsg(message: _20.Record_Offline): _20.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _20.Record_OfflineProtoMsg): _20.Record_Offline;
                    toProto(message: _20.Record_Offline): Uint8Array;
                    toProtoMsg(message: _20.Record_Offline): _20.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _21.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.LegacyAminoPubKey;
                fromPartial(object: Partial<_21.LegacyAminoPubKey>): _21.LegacyAminoPubKey;
                fromAmino(object: _21.LegacyAminoPubKeyAmino): _21.LegacyAminoPubKey;
                toAmino(message: _21.LegacyAminoPubKey): _21.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _21.LegacyAminoPubKeyAminoMsg): _21.LegacyAminoPubKey;
                toAminoMsg(message: _21.LegacyAminoPubKey): _21.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _21.LegacyAminoPubKeyProtoMsg): _21.LegacyAminoPubKey;
                toProto(message: _21.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _21.LegacyAminoPubKey): _21.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
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
        const secp256r1: {
            PubKey: {
                encode(message: _23.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.PubKey;
                fromPartial(object: Partial<_23.PubKey>): _23.PubKey;
                fromAmino(object: _23.PubKeyAmino): _23.PubKey;
                toAmino(message: _23.PubKey): _23.PubKeyAmino;
                fromAminoMsg(object: _23.PubKeyAminoMsg): _23.PubKey;
                toAminoMsg(message: _23.PubKey): _23.PubKeyAminoMsg;
                fromProtoMsg(message: _23.PubKeyProtoMsg): _23.PubKey;
                toProto(message: _23.PubKey): Uint8Array;
                toProtoMsg(message: _23.PubKey): _23.PubKeyProtoMsg;
            };
            PrivKey: {
                encode(message: _23.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.PrivKey;
                fromPartial(object: Partial<_23.PrivKey>): _23.PrivKey;
                fromAmino(object: _23.PrivKeyAmino): _23.PrivKey;
                toAmino(message: _23.PrivKey): _23.PrivKeyAmino;
                fromAminoMsg(object: _23.PrivKeyAminoMsg): _23.PrivKey;
                toAminoMsg(message: _23.PrivKey): _23.PrivKeyAminoMsg;
                fromProtoMsg(message: _23.PrivKeyProtoMsg): _23.PrivKey;
                toProto(message: _23.PrivKey): Uint8Array;
                toProtoMsg(message: _23.PrivKey): _23.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _200.MsgClientImpl;
            QueryClientImpl: typeof _191.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _26.QueryParamsRequest): Promise<_26.QueryParamsResponse>;
                validatorOutstandingRewards(request: _26.QueryValidatorOutstandingRewardsRequest): Promise<_26.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _26.QueryValidatorCommissionRequest): Promise<_26.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _26.QueryValidatorSlashesRequest): Promise<_26.QueryValidatorSlashesResponse>;
                delegationRewards(request: _26.QueryDelegationRewardsRequest): Promise<_26.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _26.QueryDelegationTotalRewardsRequest): Promise<_26.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _26.QueryDelegatorValidatorsRequest): Promise<_26.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _26.QueryDelegatorWithdrawAddressRequest): Promise<_26.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _26.QueryCommunityPoolRequest): Promise<_26.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _182.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _27.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _27.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _27.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _27.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _27.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _27.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _27.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _27.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _27.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _27.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _27.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _27.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _27.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _27.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _27.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _27.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _27.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _27.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _27.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _27.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _27.MsgSetWithdrawAddress) => _27.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _27.MsgSetWithdrawAddressAmino) => _27.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _27.MsgWithdrawDelegatorReward) => _27.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _27.MsgWithdrawDelegatorRewardAmino) => _27.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _27.MsgWithdrawValidatorCommission) => _27.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _27.MsgWithdrawValidatorCommissionAmino) => _27.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _27.MsgFundCommunityPool) => _27.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _27.MsgFundCommunityPoolAmino) => _27.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _27.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_27.MsgSetWithdrawAddress>): _27.MsgSetWithdrawAddress;
                fromAmino(object: _27.MsgSetWithdrawAddressAmino): _27.MsgSetWithdrawAddress;
                toAmino(message: _27.MsgSetWithdrawAddress): _27.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _27.MsgSetWithdrawAddressAminoMsg): _27.MsgSetWithdrawAddress;
                toAminoMsg(message: _27.MsgSetWithdrawAddress): _27.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _27.MsgSetWithdrawAddressProtoMsg): _27.MsgSetWithdrawAddress;
                toProto(message: _27.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _27.MsgSetWithdrawAddress): _27.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _27.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_27.MsgSetWithdrawAddressResponse>): _27.MsgSetWithdrawAddressResponse;
                fromAmino(_: _27.MsgSetWithdrawAddressResponseAmino): _27.MsgSetWithdrawAddressResponse;
                toAmino(_: _27.MsgSetWithdrawAddressResponse): _27.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _27.MsgSetWithdrawAddressResponseAminoMsg): _27.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _27.MsgSetWithdrawAddressResponse): _27.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _27.MsgSetWithdrawAddressResponseProtoMsg): _27.MsgSetWithdrawAddressResponse;
                toProto(message: _27.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _27.MsgSetWithdrawAddressResponse): _27.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _27.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_27.MsgWithdrawDelegatorReward>): _27.MsgWithdrawDelegatorReward;
                fromAmino(object: _27.MsgWithdrawDelegatorRewardAmino): _27.MsgWithdrawDelegatorReward;
                toAmino(message: _27.MsgWithdrawDelegatorReward): _27.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _27.MsgWithdrawDelegatorRewardAminoMsg): _27.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _27.MsgWithdrawDelegatorReward): _27.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _27.MsgWithdrawDelegatorRewardProtoMsg): _27.MsgWithdrawDelegatorReward;
                toProto(message: _27.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _27.MsgWithdrawDelegatorReward): _27.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _27.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_27.MsgWithdrawDelegatorRewardResponse>): _27.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _27.MsgWithdrawDelegatorRewardResponseAmino): _27.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _27.MsgWithdrawDelegatorRewardResponse): _27.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _27.MsgWithdrawDelegatorRewardResponseAminoMsg): _27.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _27.MsgWithdrawDelegatorRewardResponse): _27.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _27.MsgWithdrawDelegatorRewardResponseProtoMsg): _27.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _27.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _27.MsgWithdrawDelegatorRewardResponse): _27.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _27.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_27.MsgWithdrawValidatorCommission>): _27.MsgWithdrawValidatorCommission;
                fromAmino(object: _27.MsgWithdrawValidatorCommissionAmino): _27.MsgWithdrawValidatorCommission;
                toAmino(message: _27.MsgWithdrawValidatorCommission): _27.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _27.MsgWithdrawValidatorCommissionAminoMsg): _27.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _27.MsgWithdrawValidatorCommission): _27.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _27.MsgWithdrawValidatorCommissionProtoMsg): _27.MsgWithdrawValidatorCommission;
                toProto(message: _27.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _27.MsgWithdrawValidatorCommission): _27.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _27.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_27.MsgWithdrawValidatorCommissionResponse>): _27.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _27.MsgWithdrawValidatorCommissionResponseAmino): _27.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _27.MsgWithdrawValidatorCommissionResponse): _27.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _27.MsgWithdrawValidatorCommissionResponseAminoMsg): _27.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _27.MsgWithdrawValidatorCommissionResponse): _27.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _27.MsgWithdrawValidatorCommissionResponseProtoMsg): _27.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _27.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _27.MsgWithdrawValidatorCommissionResponse): _27.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                encode(message: _27.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.MsgFundCommunityPool;
                fromPartial(object: Partial<_27.MsgFundCommunityPool>): _27.MsgFundCommunityPool;
                fromAmino(object: _27.MsgFundCommunityPoolAmino): _27.MsgFundCommunityPool;
                toAmino(message: _27.MsgFundCommunityPool): _27.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _27.MsgFundCommunityPoolAminoMsg): _27.MsgFundCommunityPool;
                toAminoMsg(message: _27.MsgFundCommunityPool): _27.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _27.MsgFundCommunityPoolProtoMsg): _27.MsgFundCommunityPool;
                toProto(message: _27.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _27.MsgFundCommunityPool): _27.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _27.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_27.MsgFundCommunityPoolResponse>): _27.MsgFundCommunityPoolResponse;
                fromAmino(_: _27.MsgFundCommunityPoolResponseAmino): _27.MsgFundCommunityPoolResponse;
                toAmino(_: _27.MsgFundCommunityPoolResponse): _27.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _27.MsgFundCommunityPoolResponseAminoMsg): _27.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _27.MsgFundCommunityPoolResponse): _27.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _27.MsgFundCommunityPoolResponseProtoMsg): _27.MsgFundCommunityPoolResponse;
                toProto(message: _27.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _27.MsgFundCommunityPoolResponse): _27.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _26.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryParamsRequest;
                fromPartial(_: Partial<_26.QueryParamsRequest>): _26.QueryParamsRequest;
                fromAmino(_: _26.QueryParamsRequestAmino): _26.QueryParamsRequest;
                toAmino(_: _26.QueryParamsRequest): _26.QueryParamsRequestAmino;
                fromAminoMsg(object: _26.QueryParamsRequestAminoMsg): _26.QueryParamsRequest;
                toAminoMsg(message: _26.QueryParamsRequest): _26.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _26.QueryParamsRequestProtoMsg): _26.QueryParamsRequest;
                toProto(message: _26.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _26.QueryParamsRequest): _26.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _26.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryParamsResponse;
                fromPartial(object: Partial<_26.QueryParamsResponse>): _26.QueryParamsResponse;
                fromAmino(object: _26.QueryParamsResponseAmino): _26.QueryParamsResponse;
                toAmino(message: _26.QueryParamsResponse): _26.QueryParamsResponseAmino;
                fromAminoMsg(object: _26.QueryParamsResponseAminoMsg): _26.QueryParamsResponse;
                toAminoMsg(message: _26.QueryParamsResponse): _26.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _26.QueryParamsResponseProtoMsg): _26.QueryParamsResponse;
                toProto(message: _26.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _26.QueryParamsResponse): _26.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _26.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_26.QueryValidatorOutstandingRewardsRequest>): _26.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _26.QueryValidatorOutstandingRewardsRequestAmino): _26.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _26.QueryValidatorOutstandingRewardsRequest): _26.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _26.QueryValidatorOutstandingRewardsRequestAminoMsg): _26.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _26.QueryValidatorOutstandingRewardsRequest): _26.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _26.QueryValidatorOutstandingRewardsRequestProtoMsg): _26.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _26.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _26.QueryValidatorOutstandingRewardsRequest): _26.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _26.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_26.QueryValidatorOutstandingRewardsResponse>): _26.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _26.QueryValidatorOutstandingRewardsResponseAmino): _26.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _26.QueryValidatorOutstandingRewardsResponse): _26.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _26.QueryValidatorOutstandingRewardsResponseAminoMsg): _26.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _26.QueryValidatorOutstandingRewardsResponse): _26.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _26.QueryValidatorOutstandingRewardsResponseProtoMsg): _26.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _26.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _26.QueryValidatorOutstandingRewardsResponse): _26.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _26.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_26.QueryValidatorCommissionRequest>): _26.QueryValidatorCommissionRequest;
                fromAmino(object: _26.QueryValidatorCommissionRequestAmino): _26.QueryValidatorCommissionRequest;
                toAmino(message: _26.QueryValidatorCommissionRequest): _26.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _26.QueryValidatorCommissionRequestAminoMsg): _26.QueryValidatorCommissionRequest;
                toAminoMsg(message: _26.QueryValidatorCommissionRequest): _26.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _26.QueryValidatorCommissionRequestProtoMsg): _26.QueryValidatorCommissionRequest;
                toProto(message: _26.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _26.QueryValidatorCommissionRequest): _26.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _26.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_26.QueryValidatorCommissionResponse>): _26.QueryValidatorCommissionResponse;
                fromAmino(object: _26.QueryValidatorCommissionResponseAmino): _26.QueryValidatorCommissionResponse;
                toAmino(message: _26.QueryValidatorCommissionResponse): _26.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _26.QueryValidatorCommissionResponseAminoMsg): _26.QueryValidatorCommissionResponse;
                toAminoMsg(message: _26.QueryValidatorCommissionResponse): _26.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _26.QueryValidatorCommissionResponseProtoMsg): _26.QueryValidatorCommissionResponse;
                toProto(message: _26.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _26.QueryValidatorCommissionResponse): _26.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _26.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_26.QueryValidatorSlashesRequest>): _26.QueryValidatorSlashesRequest;
                fromAmino(object: _26.QueryValidatorSlashesRequestAmino): _26.QueryValidatorSlashesRequest;
                toAmino(message: _26.QueryValidatorSlashesRequest): _26.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _26.QueryValidatorSlashesRequestAminoMsg): _26.QueryValidatorSlashesRequest;
                toAminoMsg(message: _26.QueryValidatorSlashesRequest): _26.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _26.QueryValidatorSlashesRequestProtoMsg): _26.QueryValidatorSlashesRequest;
                toProto(message: _26.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _26.QueryValidatorSlashesRequest): _26.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _26.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_26.QueryValidatorSlashesResponse>): _26.QueryValidatorSlashesResponse;
                fromAmino(object: _26.QueryValidatorSlashesResponseAmino): _26.QueryValidatorSlashesResponse;
                toAmino(message: _26.QueryValidatorSlashesResponse): _26.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _26.QueryValidatorSlashesResponseAminoMsg): _26.QueryValidatorSlashesResponse;
                toAminoMsg(message: _26.QueryValidatorSlashesResponse): _26.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _26.QueryValidatorSlashesResponseProtoMsg): _26.QueryValidatorSlashesResponse;
                toProto(message: _26.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _26.QueryValidatorSlashesResponse): _26.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _26.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_26.QueryDelegationRewardsRequest>): _26.QueryDelegationRewardsRequest;
                fromAmino(object: _26.QueryDelegationRewardsRequestAmino): _26.QueryDelegationRewardsRequest;
                toAmino(message: _26.QueryDelegationRewardsRequest): _26.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _26.QueryDelegationRewardsRequestAminoMsg): _26.QueryDelegationRewardsRequest;
                toAminoMsg(message: _26.QueryDelegationRewardsRequest): _26.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _26.QueryDelegationRewardsRequestProtoMsg): _26.QueryDelegationRewardsRequest;
                toProto(message: _26.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _26.QueryDelegationRewardsRequest): _26.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _26.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_26.QueryDelegationRewardsResponse>): _26.QueryDelegationRewardsResponse;
                fromAmino(object: _26.QueryDelegationRewardsResponseAmino): _26.QueryDelegationRewardsResponse;
                toAmino(message: _26.QueryDelegationRewardsResponse): _26.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _26.QueryDelegationRewardsResponseAminoMsg): _26.QueryDelegationRewardsResponse;
                toAminoMsg(message: _26.QueryDelegationRewardsResponse): _26.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _26.QueryDelegationRewardsResponseProtoMsg): _26.QueryDelegationRewardsResponse;
                toProto(message: _26.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _26.QueryDelegationRewardsResponse): _26.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _26.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_26.QueryDelegationTotalRewardsRequest>): _26.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _26.QueryDelegationTotalRewardsRequestAmino): _26.QueryDelegationTotalRewardsRequest;
                toAmino(message: _26.QueryDelegationTotalRewardsRequest): _26.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _26.QueryDelegationTotalRewardsRequestAminoMsg): _26.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _26.QueryDelegationTotalRewardsRequest): _26.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _26.QueryDelegationTotalRewardsRequestProtoMsg): _26.QueryDelegationTotalRewardsRequest;
                toProto(message: _26.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _26.QueryDelegationTotalRewardsRequest): _26.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _26.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_26.QueryDelegationTotalRewardsResponse>): _26.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _26.QueryDelegationTotalRewardsResponseAmino): _26.QueryDelegationTotalRewardsResponse;
                toAmino(message: _26.QueryDelegationTotalRewardsResponse): _26.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _26.QueryDelegationTotalRewardsResponseAminoMsg): _26.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _26.QueryDelegationTotalRewardsResponse): _26.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _26.QueryDelegationTotalRewardsResponseProtoMsg): _26.QueryDelegationTotalRewardsResponse;
                toProto(message: _26.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _26.QueryDelegationTotalRewardsResponse): _26.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _26.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_26.QueryDelegatorValidatorsRequest>): _26.QueryDelegatorValidatorsRequest;
                fromAmino(object: _26.QueryDelegatorValidatorsRequestAmino): _26.QueryDelegatorValidatorsRequest;
                toAmino(message: _26.QueryDelegatorValidatorsRequest): _26.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _26.QueryDelegatorValidatorsRequestAminoMsg): _26.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _26.QueryDelegatorValidatorsRequest): _26.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _26.QueryDelegatorValidatorsRequestProtoMsg): _26.QueryDelegatorValidatorsRequest;
                toProto(message: _26.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _26.QueryDelegatorValidatorsRequest): _26.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _26.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_26.QueryDelegatorValidatorsResponse>): _26.QueryDelegatorValidatorsResponse;
                fromAmino(object: _26.QueryDelegatorValidatorsResponseAmino): _26.QueryDelegatorValidatorsResponse;
                toAmino(message: _26.QueryDelegatorValidatorsResponse): _26.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _26.QueryDelegatorValidatorsResponseAminoMsg): _26.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _26.QueryDelegatorValidatorsResponse): _26.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _26.QueryDelegatorValidatorsResponseProtoMsg): _26.QueryDelegatorValidatorsResponse;
                toProto(message: _26.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _26.QueryDelegatorValidatorsResponse): _26.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _26.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_26.QueryDelegatorWithdrawAddressRequest>): _26.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _26.QueryDelegatorWithdrawAddressRequestAmino): _26.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _26.QueryDelegatorWithdrawAddressRequest): _26.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _26.QueryDelegatorWithdrawAddressRequestAminoMsg): _26.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _26.QueryDelegatorWithdrawAddressRequest): _26.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _26.QueryDelegatorWithdrawAddressRequestProtoMsg): _26.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _26.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _26.QueryDelegatorWithdrawAddressRequest): _26.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _26.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_26.QueryDelegatorWithdrawAddressResponse>): _26.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _26.QueryDelegatorWithdrawAddressResponseAmino): _26.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _26.QueryDelegatorWithdrawAddressResponse): _26.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _26.QueryDelegatorWithdrawAddressResponseAminoMsg): _26.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _26.QueryDelegatorWithdrawAddressResponse): _26.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _26.QueryDelegatorWithdrawAddressResponseProtoMsg): _26.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _26.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _26.QueryDelegatorWithdrawAddressResponse): _26.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                encode(_: _26.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_26.QueryCommunityPoolRequest>): _26.QueryCommunityPoolRequest;
                fromAmino(_: _26.QueryCommunityPoolRequestAmino): _26.QueryCommunityPoolRequest;
                toAmino(_: _26.QueryCommunityPoolRequest): _26.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _26.QueryCommunityPoolRequestAminoMsg): _26.QueryCommunityPoolRequest;
                toAminoMsg(message: _26.QueryCommunityPoolRequest): _26.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _26.QueryCommunityPoolRequestProtoMsg): _26.QueryCommunityPoolRequest;
                toProto(message: _26.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _26.QueryCommunityPoolRequest): _26.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                encode(message: _26.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_26.QueryCommunityPoolResponse>): _26.QueryCommunityPoolResponse;
                fromAmino(object: _26.QueryCommunityPoolResponseAmino): _26.QueryCommunityPoolResponse;
                toAmino(message: _26.QueryCommunityPoolResponse): _26.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _26.QueryCommunityPoolResponseAminoMsg): _26.QueryCommunityPoolResponse;
                toAminoMsg(message: _26.QueryCommunityPoolResponse): _26.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _26.QueryCommunityPoolResponseProtoMsg): _26.QueryCommunityPoolResponse;
                toProto(message: _26.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _26.QueryCommunityPoolResponse): _26.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                encode(message: _25.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_25.DelegatorWithdrawInfo>): _25.DelegatorWithdrawInfo;
                fromAmino(object: _25.DelegatorWithdrawInfoAmino): _25.DelegatorWithdrawInfo;
                toAmino(message: _25.DelegatorWithdrawInfo): _25.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _25.DelegatorWithdrawInfoAminoMsg): _25.DelegatorWithdrawInfo;
                toAminoMsg(message: _25.DelegatorWithdrawInfo): _25.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _25.DelegatorWithdrawInfoProtoMsg): _25.DelegatorWithdrawInfo;
                toProto(message: _25.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _25.DelegatorWithdrawInfo): _25.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _25.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_25.ValidatorOutstandingRewardsRecord>): _25.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _25.ValidatorOutstandingRewardsRecordAmino): _25.ValidatorOutstandingRewardsRecord;
                toAmino(message: _25.ValidatorOutstandingRewardsRecord): _25.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _25.ValidatorOutstandingRewardsRecordAminoMsg): _25.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _25.ValidatorOutstandingRewardsRecord): _25.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _25.ValidatorOutstandingRewardsRecordProtoMsg): _25.ValidatorOutstandingRewardsRecord;
                toProto(message: _25.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _25.ValidatorOutstandingRewardsRecord): _25.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _25.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_25.ValidatorAccumulatedCommissionRecord>): _25.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _25.ValidatorAccumulatedCommissionRecordAmino): _25.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _25.ValidatorAccumulatedCommissionRecord): _25.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _25.ValidatorAccumulatedCommissionRecordAminoMsg): _25.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _25.ValidatorAccumulatedCommissionRecord): _25.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _25.ValidatorAccumulatedCommissionRecordProtoMsg): _25.ValidatorAccumulatedCommissionRecord;
                toProto(message: _25.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _25.ValidatorAccumulatedCommissionRecord): _25.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _25.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_25.ValidatorHistoricalRewardsRecord>): _25.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _25.ValidatorHistoricalRewardsRecordAmino): _25.ValidatorHistoricalRewardsRecord;
                toAmino(message: _25.ValidatorHistoricalRewardsRecord): _25.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _25.ValidatorHistoricalRewardsRecordAminoMsg): _25.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _25.ValidatorHistoricalRewardsRecord): _25.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _25.ValidatorHistoricalRewardsRecordProtoMsg): _25.ValidatorHistoricalRewardsRecord;
                toProto(message: _25.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _25.ValidatorHistoricalRewardsRecord): _25.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _25.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_25.ValidatorCurrentRewardsRecord>): _25.ValidatorCurrentRewardsRecord;
                fromAmino(object: _25.ValidatorCurrentRewardsRecordAmino): _25.ValidatorCurrentRewardsRecord;
                toAmino(message: _25.ValidatorCurrentRewardsRecord): _25.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _25.ValidatorCurrentRewardsRecordAminoMsg): _25.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _25.ValidatorCurrentRewardsRecord): _25.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _25.ValidatorCurrentRewardsRecordProtoMsg): _25.ValidatorCurrentRewardsRecord;
                toProto(message: _25.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _25.ValidatorCurrentRewardsRecord): _25.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _25.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_25.DelegatorStartingInfoRecord>): _25.DelegatorStartingInfoRecord;
                fromAmino(object: _25.DelegatorStartingInfoRecordAmino): _25.DelegatorStartingInfoRecord;
                toAmino(message: _25.DelegatorStartingInfoRecord): _25.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _25.DelegatorStartingInfoRecordAminoMsg): _25.DelegatorStartingInfoRecord;
                toAminoMsg(message: _25.DelegatorStartingInfoRecord): _25.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _25.DelegatorStartingInfoRecordProtoMsg): _25.DelegatorStartingInfoRecord;
                toProto(message: _25.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _25.DelegatorStartingInfoRecord): _25.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                encode(message: _25.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_25.ValidatorSlashEventRecord>): _25.ValidatorSlashEventRecord;
                fromAmino(object: _25.ValidatorSlashEventRecordAmino): _25.ValidatorSlashEventRecord;
                toAmino(message: _25.ValidatorSlashEventRecord): _25.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _25.ValidatorSlashEventRecordAminoMsg): _25.ValidatorSlashEventRecord;
                toAminoMsg(message: _25.ValidatorSlashEventRecord): _25.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _25.ValidatorSlashEventRecordProtoMsg): _25.ValidatorSlashEventRecord;
                toProto(message: _25.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _25.ValidatorSlashEventRecord): _25.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                encode(message: _25.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GenesisState;
                fromPartial(object: Partial<_25.GenesisState>): _25.GenesisState;
                fromAmino(object: _25.GenesisStateAmino): _25.GenesisState;
                toAmino(message: _25.GenesisState): _25.GenesisStateAmino;
                fromAminoMsg(object: _25.GenesisStateAminoMsg): _25.GenesisState;
                toAminoMsg(message: _25.GenesisState): _25.GenesisStateAminoMsg;
                fromProtoMsg(message: _25.GenesisStateProtoMsg): _25.GenesisState;
                toProto(message: _25.GenesisState): Uint8Array;
                toProtoMsg(message: _25.GenesisState): _25.GenesisStateProtoMsg;
            };
            Params: {
                encode(message: _24.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Params;
                fromPartial(object: Partial<_24.Params>): _24.Params;
                fromAmino(object: _24.ParamsAmino): _24.Params;
                toAmino(message: _24.Params): _24.ParamsAmino;
                fromAminoMsg(object: _24.ParamsAminoMsg): _24.Params;
                toAminoMsg(message: _24.Params): _24.ParamsAminoMsg;
                fromProtoMsg(message: _24.ParamsProtoMsg): _24.Params;
                toProto(message: _24.Params): Uint8Array;
                toProtoMsg(message: _24.Params): _24.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                encode(message: _24.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_24.ValidatorHistoricalRewards>): _24.ValidatorHistoricalRewards;
                fromAmino(object: _24.ValidatorHistoricalRewardsAmino): _24.ValidatorHistoricalRewards;
                toAmino(message: _24.ValidatorHistoricalRewards): _24.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _24.ValidatorHistoricalRewardsAminoMsg): _24.ValidatorHistoricalRewards;
                toAminoMsg(message: _24.ValidatorHistoricalRewards): _24.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _24.ValidatorHistoricalRewardsProtoMsg): _24.ValidatorHistoricalRewards;
                toProto(message: _24.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _24.ValidatorHistoricalRewards): _24.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                encode(message: _24.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.ValidatorCurrentRewards;
                fromPartial(object: Partial<_24.ValidatorCurrentRewards>): _24.ValidatorCurrentRewards;
                fromAmino(object: _24.ValidatorCurrentRewardsAmino): _24.ValidatorCurrentRewards;
                toAmino(message: _24.ValidatorCurrentRewards): _24.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _24.ValidatorCurrentRewardsAminoMsg): _24.ValidatorCurrentRewards;
                toAminoMsg(message: _24.ValidatorCurrentRewards): _24.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _24.ValidatorCurrentRewardsProtoMsg): _24.ValidatorCurrentRewards;
                toProto(message: _24.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _24.ValidatorCurrentRewards): _24.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _24.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_24.ValidatorAccumulatedCommission>): _24.ValidatorAccumulatedCommission;
                fromAmino(object: _24.ValidatorAccumulatedCommissionAmino): _24.ValidatorAccumulatedCommission;
                toAmino(message: _24.ValidatorAccumulatedCommission): _24.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _24.ValidatorAccumulatedCommissionAminoMsg): _24.ValidatorAccumulatedCommission;
                toAminoMsg(message: _24.ValidatorAccumulatedCommission): _24.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _24.ValidatorAccumulatedCommissionProtoMsg): _24.ValidatorAccumulatedCommission;
                toProto(message: _24.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _24.ValidatorAccumulatedCommission): _24.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                encode(message: _24.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_24.ValidatorOutstandingRewards>): _24.ValidatorOutstandingRewards;
                fromAmino(object: _24.ValidatorOutstandingRewardsAmino): _24.ValidatorOutstandingRewards;
                toAmino(message: _24.ValidatorOutstandingRewards): _24.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _24.ValidatorOutstandingRewardsAminoMsg): _24.ValidatorOutstandingRewards;
                toAminoMsg(message: _24.ValidatorOutstandingRewards): _24.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _24.ValidatorOutstandingRewardsProtoMsg): _24.ValidatorOutstandingRewards;
                toProto(message: _24.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _24.ValidatorOutstandingRewards): _24.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                encode(message: _24.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.ValidatorSlashEvent;
                fromPartial(object: Partial<_24.ValidatorSlashEvent>): _24.ValidatorSlashEvent;
                fromAmino(object: _24.ValidatorSlashEventAmino): _24.ValidatorSlashEvent;
                toAmino(message: _24.ValidatorSlashEvent): _24.ValidatorSlashEventAmino;
                fromAminoMsg(object: _24.ValidatorSlashEventAminoMsg): _24.ValidatorSlashEvent;
                toAminoMsg(message: _24.ValidatorSlashEvent): _24.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _24.ValidatorSlashEventProtoMsg): _24.ValidatorSlashEvent;
                toProto(message: _24.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _24.ValidatorSlashEvent): _24.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                encode(message: _24.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.ValidatorSlashEvents;
                fromPartial(object: Partial<_24.ValidatorSlashEvents>): _24.ValidatorSlashEvents;
                fromAmino(object: _24.ValidatorSlashEventsAmino): _24.ValidatorSlashEvents;
                toAmino(message: _24.ValidatorSlashEvents): _24.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _24.ValidatorSlashEventsAminoMsg): _24.ValidatorSlashEvents;
                toAminoMsg(message: _24.ValidatorSlashEvents): _24.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _24.ValidatorSlashEventsProtoMsg): _24.ValidatorSlashEvents;
                toProto(message: _24.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _24.ValidatorSlashEvents): _24.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                encode(message: _24.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.FeePool;
                fromPartial(object: Partial<_24.FeePool>): _24.FeePool;
                fromAmino(object: _24.FeePoolAmino): _24.FeePool;
                toAmino(message: _24.FeePool): _24.FeePoolAmino;
                fromAminoMsg(object: _24.FeePoolAminoMsg): _24.FeePool;
                toAminoMsg(message: _24.FeePool): _24.FeePoolAminoMsg;
                fromProtoMsg(message: _24.FeePoolProtoMsg): _24.FeePool;
                toProto(message: _24.FeePool): Uint8Array;
                toProtoMsg(message: _24.FeePool): _24.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                encode(message: _24.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_24.CommunityPoolSpendProposal>): _24.CommunityPoolSpendProposal;
                fromAmino(object: _24.CommunityPoolSpendProposalAmino): _24.CommunityPoolSpendProposal;
                toAmino(message: _24.CommunityPoolSpendProposal): _24.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _24.CommunityPoolSpendProposalAminoMsg): _24.CommunityPoolSpendProposal;
                toAminoMsg(message: _24.CommunityPoolSpendProposal): _24.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _24.CommunityPoolSpendProposalProtoMsg): _24.CommunityPoolSpendProposal;
                toProto(message: _24.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _24.CommunityPoolSpendProposal): _24.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                encode(message: _24.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.DelegatorStartingInfo;
                fromPartial(object: Partial<_24.DelegatorStartingInfo>): _24.DelegatorStartingInfo;
                fromAmino(object: _24.DelegatorStartingInfoAmino): _24.DelegatorStartingInfo;
                toAmino(message: _24.DelegatorStartingInfo): _24.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _24.DelegatorStartingInfoAminoMsg): _24.DelegatorStartingInfo;
                toAminoMsg(message: _24.DelegatorStartingInfo): _24.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _24.DelegatorStartingInfoProtoMsg): _24.DelegatorStartingInfo;
                toProto(message: _24.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _24.DelegatorStartingInfo): _24.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                encode(message: _24.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.DelegationDelegatorReward;
                fromPartial(object: Partial<_24.DelegationDelegatorReward>): _24.DelegationDelegatorReward;
                fromAmino(object: _24.DelegationDelegatorRewardAmino): _24.DelegationDelegatorReward;
                toAmino(message: _24.DelegationDelegatorReward): _24.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _24.DelegationDelegatorRewardAminoMsg): _24.DelegationDelegatorReward;
                toAminoMsg(message: _24.DelegationDelegatorReward): _24.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _24.DelegationDelegatorRewardProtoMsg): _24.DelegationDelegatorReward;
                toProto(message: _24.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _24.DelegationDelegatorReward): _24.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _24.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_24.CommunityPoolSpendProposalWithDeposit>): _24.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _24.CommunityPoolSpendProposalWithDepositAmino): _24.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _24.CommunityPoolSpendProposalWithDeposit): _24.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _24.CommunityPoolSpendProposalWithDepositAminoMsg): _24.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _24.CommunityPoolSpendProposalWithDeposit): _24.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _24.CommunityPoolSpendProposalWithDepositProtoMsg): _24.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _24.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _24.CommunityPoolSpendProposalWithDeposit): _24.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _201.MsgClientImpl;
            QueryClientImpl: typeof _192.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _30.QueryProposalRequest): Promise<_30.QueryProposalResponse>;
                proposals(request: _30.QueryProposalsRequest): Promise<_30.QueryProposalsResponse>;
                vote(request: _30.QueryVoteRequest): Promise<_30.QueryVoteResponse>;
                votes(request: _30.QueryVotesRequest): Promise<_30.QueryVotesResponse>;
                params(request: _30.QueryParamsRequest): Promise<_30.QueryParamsResponse>;
                deposit(request: _30.QueryDepositRequest): Promise<_30.QueryDepositResponse>;
                deposits(request: _30.QueryDepositsRequest): Promise<_30.QueryDepositsResponse>;
                tallyResult(request: _30.QueryTallyResultRequest): Promise<_30.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _183.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _31.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _31.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _31.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _31.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _31.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _31.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _31.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _31.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _31.MsgExecLegacyContent;
                    };
                    vote(value: _31.MsgVote): {
                        typeUrl: string;
                        value: _31.MsgVote;
                    };
                    voteWeighted(value: _31.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _31.MsgVoteWeighted;
                    };
                    deposit(value: _31.MsgDeposit): {
                        typeUrl: string;
                        value: _31.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _31.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _31.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _31.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _31.MsgExecLegacyContent;
                    };
                    vote(value: _31.MsgVote): {
                        typeUrl: string;
                        value: _31.MsgVote;
                    };
                    voteWeighted(value: _31.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _31.MsgVoteWeighted;
                    };
                    deposit(value: _31.MsgDeposit): {
                        typeUrl: string;
                        value: _31.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _31.MsgSubmitProposal) => _31.MsgSubmitProposalAmino;
                    fromAmino: (object: _31.MsgSubmitProposalAmino) => _31.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _31.MsgExecLegacyContent) => _31.MsgExecLegacyContentAmino;
                    fromAmino: (object: _31.MsgExecLegacyContentAmino) => _31.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _31.MsgVote) => _31.MsgVoteAmino;
                    fromAmino: (object: _31.MsgVoteAmino) => _31.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _31.MsgVoteWeighted) => _31.MsgVoteWeightedAmino;
                    fromAmino: (object: _31.MsgVoteWeightedAmino) => _31.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _31.MsgDeposit) => _31.MsgDepositAmino;
                    fromAmino: (object: _31.MsgDepositAmino) => _31.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _31.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.MsgSubmitProposal;
                fromPartial(object: Partial<_31.MsgSubmitProposal>): _31.MsgSubmitProposal;
                fromAmino(object: _31.MsgSubmitProposalAmino): _31.MsgSubmitProposal;
                toAmino(message: _31.MsgSubmitProposal): _31.MsgSubmitProposalAmino;
                fromAminoMsg(object: _31.MsgSubmitProposalAminoMsg): _31.MsgSubmitProposal;
                toAminoMsg(message: _31.MsgSubmitProposal): _31.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _31.MsgSubmitProposalProtoMsg): _31.MsgSubmitProposal;
                toProto(message: _31.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _31.MsgSubmitProposal): _31.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                encode(message: _31.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_31.MsgSubmitProposalResponse>): _31.MsgSubmitProposalResponse;
                fromAmino(object: _31.MsgSubmitProposalResponseAmino): _31.MsgSubmitProposalResponse;
                toAmino(message: _31.MsgSubmitProposalResponse): _31.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _31.MsgSubmitProposalResponseAminoMsg): _31.MsgSubmitProposalResponse;
                toAminoMsg(message: _31.MsgSubmitProposalResponse): _31.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _31.MsgSubmitProposalResponseProtoMsg): _31.MsgSubmitProposalResponse;
                toProto(message: _31.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _31.MsgSubmitProposalResponse): _31.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                encode(message: _31.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.MsgExecLegacyContent;
                fromPartial(object: Partial<_31.MsgExecLegacyContent>): _31.MsgExecLegacyContent;
                fromAmino(object: _31.MsgExecLegacyContentAmino): _31.MsgExecLegacyContent;
                toAmino(message: _31.MsgExecLegacyContent): _31.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _31.MsgExecLegacyContentAminoMsg): _31.MsgExecLegacyContent;
                toAminoMsg(message: _31.MsgExecLegacyContent): _31.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _31.MsgExecLegacyContentProtoMsg): _31.MsgExecLegacyContent;
                toProto(message: _31.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _31.MsgExecLegacyContent): _31.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _31.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_31.MsgExecLegacyContentResponse>): _31.MsgExecLegacyContentResponse;
                fromAmino(_: _31.MsgExecLegacyContentResponseAmino): _31.MsgExecLegacyContentResponse;
                toAmino(_: _31.MsgExecLegacyContentResponse): _31.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _31.MsgExecLegacyContentResponseAminoMsg): _31.MsgExecLegacyContentResponse;
                toAminoMsg(message: _31.MsgExecLegacyContentResponse): _31.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _31.MsgExecLegacyContentResponseProtoMsg): _31.MsgExecLegacyContentResponse;
                toProto(message: _31.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _31.MsgExecLegacyContentResponse): _31.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                encode(message: _31.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.MsgVote;
                fromPartial(object: Partial<_31.MsgVote>): _31.MsgVote;
                fromAmino(object: _31.MsgVoteAmino): _31.MsgVote;
                toAmino(message: _31.MsgVote): _31.MsgVoteAmino;
                fromAminoMsg(object: _31.MsgVoteAminoMsg): _31.MsgVote;
                toAminoMsg(message: _31.MsgVote): _31.MsgVoteAminoMsg;
                fromProtoMsg(message: _31.MsgVoteProtoMsg): _31.MsgVote;
                toProto(message: _31.MsgVote): Uint8Array;
                toProtoMsg(message: _31.MsgVote): _31.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                encode(_: _31.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.MsgVoteResponse;
                fromPartial(_: Partial<_31.MsgVoteResponse>): _31.MsgVoteResponse;
                fromAmino(_: _31.MsgVoteResponseAmino): _31.MsgVoteResponse;
                toAmino(_: _31.MsgVoteResponse): _31.MsgVoteResponseAmino;
                fromAminoMsg(object: _31.MsgVoteResponseAminoMsg): _31.MsgVoteResponse;
                toAminoMsg(message: _31.MsgVoteResponse): _31.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _31.MsgVoteResponseProtoMsg): _31.MsgVoteResponse;
                toProto(message: _31.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _31.MsgVoteResponse): _31.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                encode(message: _31.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.MsgVoteWeighted;
                fromPartial(object: Partial<_31.MsgVoteWeighted>): _31.MsgVoteWeighted;
                fromAmino(object: _31.MsgVoteWeightedAmino): _31.MsgVoteWeighted;
                toAmino(message: _31.MsgVoteWeighted): _31.MsgVoteWeightedAmino;
                fromAminoMsg(object: _31.MsgVoteWeightedAminoMsg): _31.MsgVoteWeighted;
                toAminoMsg(message: _31.MsgVoteWeighted): _31.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _31.MsgVoteWeightedProtoMsg): _31.MsgVoteWeighted;
                toProto(message: _31.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _31.MsgVoteWeighted): _31.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                encode(_: _31.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_31.MsgVoteWeightedResponse>): _31.MsgVoteWeightedResponse;
                fromAmino(_: _31.MsgVoteWeightedResponseAmino): _31.MsgVoteWeightedResponse;
                toAmino(_: _31.MsgVoteWeightedResponse): _31.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _31.MsgVoteWeightedResponseAminoMsg): _31.MsgVoteWeightedResponse;
                toAminoMsg(message: _31.MsgVoteWeightedResponse): _31.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _31.MsgVoteWeightedResponseProtoMsg): _31.MsgVoteWeightedResponse;
                toProto(message: _31.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _31.MsgVoteWeightedResponse): _31.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                encode(message: _31.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.MsgDeposit;
                fromPartial(object: Partial<_31.MsgDeposit>): _31.MsgDeposit;
                fromAmino(object: _31.MsgDepositAmino): _31.MsgDeposit;
                toAmino(message: _31.MsgDeposit): _31.MsgDepositAmino;
                fromAminoMsg(object: _31.MsgDepositAminoMsg): _31.MsgDeposit;
                toAminoMsg(message: _31.MsgDeposit): _31.MsgDepositAminoMsg;
                fromProtoMsg(message: _31.MsgDepositProtoMsg): _31.MsgDeposit;
                toProto(message: _31.MsgDeposit): Uint8Array;
                toProtoMsg(message: _31.MsgDeposit): _31.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                encode(_: _31.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.MsgDepositResponse;
                fromPartial(_: Partial<_31.MsgDepositResponse>): _31.MsgDepositResponse;
                fromAmino(_: _31.MsgDepositResponseAmino): _31.MsgDepositResponse;
                toAmino(_: _31.MsgDepositResponse): _31.MsgDepositResponseAmino;
                fromAminoMsg(object: _31.MsgDepositResponseAminoMsg): _31.MsgDepositResponse;
                toAminoMsg(message: _31.MsgDepositResponse): _31.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _31.MsgDepositResponseProtoMsg): _31.MsgDepositResponse;
                toProto(message: _31.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _31.MsgDepositResponse): _31.MsgDepositResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _24.CommunityPoolSpendProposal | _24.CommunityPoolSpendProposalWithDeposit | _46.SoftwareUpgradeProposal | _46.CancelSoftwareUpgradeProposal | import("../ibc/core/client/v1/client").ClientUpdateProposal | import("../ibc/core/client/v1/client").UpgradeProposal | import("../cosmwasm/wasm/v1/proposal").StoreCodeProposal | import("../cosmwasm/wasm/v1/proposal").InstantiateContractProposal | import("../cosmwasm/wasm/v1/proposal").InstantiateContract2Proposal | import("../cosmwasm/wasm/v1/proposal").MigrateContractProposal | import("../cosmwasm/wasm/v1/proposal").SudoContractProposal | import("../cosmwasm/wasm/v1/proposal").ExecuteContractProposal | import("../cosmwasm/wasm/v1/proposal").UpdateAdminProposal | import("../cosmwasm/wasm/v1/proposal").ClearAdminProposal | import("../cosmwasm/wasm/v1/proposal").PinCodesProposal | import("../cosmwasm/wasm/v1/proposal").UnpinCodesProposal | import("../cosmwasm/wasm/v1/proposal").UpdateInstantiateConfigProposal | import("../cosmwasm/wasm/v1/proposal").StoreAndInstantiateContractProposal | import("../osmosis/pool-incentives/v1beta1/gov").ReplacePoolIncentivesProposal | import("../osmosis/pool-incentives/v1beta1/gov").UpdatePoolIncentivesProposal | import("../osmosis/protorev/v1beta1/gov").SetProtoRevEnabledProposal | import("../osmosis/protorev/v1beta1/gov").SetProtoRevAdminAccountProposal | import("../osmosis/superfluid/v1beta1/gov").SetSuperfluidAssetsProposal | import("../osmosis/superfluid/v1beta1/gov").RemoveSuperfluidAssetsProposal | import("../osmosis/superfluid/v1beta1/gov").UpdateUnpoolWhiteListProposal | import("../osmosis/txfees/v1beta1/gov").UpdateFeeTokenProposal | _33.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                encode(message: _30.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryProposalRequest;
                fromPartial(object: Partial<_30.QueryProposalRequest>): _30.QueryProposalRequest;
                fromAmino(object: _30.QueryProposalRequestAmino): _30.QueryProposalRequest;
                toAmino(message: _30.QueryProposalRequest): _30.QueryProposalRequestAmino;
                fromAminoMsg(object: _30.QueryProposalRequestAminoMsg): _30.QueryProposalRequest;
                toAminoMsg(message: _30.QueryProposalRequest): _30.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _30.QueryProposalRequestProtoMsg): _30.QueryProposalRequest;
                toProto(message: _30.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _30.QueryProposalRequest): _30.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                encode(message: _30.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryProposalResponse;
                fromPartial(object: Partial<_30.QueryProposalResponse>): _30.QueryProposalResponse;
                fromAmino(object: _30.QueryProposalResponseAmino): _30.QueryProposalResponse;
                toAmino(message: _30.QueryProposalResponse): _30.QueryProposalResponseAmino;
                fromAminoMsg(object: _30.QueryProposalResponseAminoMsg): _30.QueryProposalResponse;
                toAminoMsg(message: _30.QueryProposalResponse): _30.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _30.QueryProposalResponseProtoMsg): _30.QueryProposalResponse;
                toProto(message: _30.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _30.QueryProposalResponse): _30.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                encode(message: _30.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryProposalsRequest;
                fromPartial(object: Partial<_30.QueryProposalsRequest>): _30.QueryProposalsRequest;
                fromAmino(object: _30.QueryProposalsRequestAmino): _30.QueryProposalsRequest;
                toAmino(message: _30.QueryProposalsRequest): _30.QueryProposalsRequestAmino;
                fromAminoMsg(object: _30.QueryProposalsRequestAminoMsg): _30.QueryProposalsRequest;
                toAminoMsg(message: _30.QueryProposalsRequest): _30.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _30.QueryProposalsRequestProtoMsg): _30.QueryProposalsRequest;
                toProto(message: _30.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _30.QueryProposalsRequest): _30.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                encode(message: _30.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryProposalsResponse;
                fromPartial(object: Partial<_30.QueryProposalsResponse>): _30.QueryProposalsResponse;
                fromAmino(object: _30.QueryProposalsResponseAmino): _30.QueryProposalsResponse;
                toAmino(message: _30.QueryProposalsResponse): _30.QueryProposalsResponseAmino;
                fromAminoMsg(object: _30.QueryProposalsResponseAminoMsg): _30.QueryProposalsResponse;
                toAminoMsg(message: _30.QueryProposalsResponse): _30.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _30.QueryProposalsResponseProtoMsg): _30.QueryProposalsResponse;
                toProto(message: _30.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _30.QueryProposalsResponse): _30.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                encode(message: _30.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryVoteRequest;
                fromPartial(object: Partial<_30.QueryVoteRequest>): _30.QueryVoteRequest;
                fromAmino(object: _30.QueryVoteRequestAmino): _30.QueryVoteRequest;
                toAmino(message: _30.QueryVoteRequest): _30.QueryVoteRequestAmino;
                fromAminoMsg(object: _30.QueryVoteRequestAminoMsg): _30.QueryVoteRequest;
                toAminoMsg(message: _30.QueryVoteRequest): _30.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _30.QueryVoteRequestProtoMsg): _30.QueryVoteRequest;
                toProto(message: _30.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _30.QueryVoteRequest): _30.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                encode(message: _30.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryVoteResponse;
                fromPartial(object: Partial<_30.QueryVoteResponse>): _30.QueryVoteResponse;
                fromAmino(object: _30.QueryVoteResponseAmino): _30.QueryVoteResponse;
                toAmino(message: _30.QueryVoteResponse): _30.QueryVoteResponseAmino;
                fromAminoMsg(object: _30.QueryVoteResponseAminoMsg): _30.QueryVoteResponse;
                toAminoMsg(message: _30.QueryVoteResponse): _30.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _30.QueryVoteResponseProtoMsg): _30.QueryVoteResponse;
                toProto(message: _30.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _30.QueryVoteResponse): _30.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                encode(message: _30.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryVotesRequest;
                fromPartial(object: Partial<_30.QueryVotesRequest>): _30.QueryVotesRequest;
                fromAmino(object: _30.QueryVotesRequestAmino): _30.QueryVotesRequest;
                toAmino(message: _30.QueryVotesRequest): _30.QueryVotesRequestAmino;
                fromAminoMsg(object: _30.QueryVotesRequestAminoMsg): _30.QueryVotesRequest;
                toAminoMsg(message: _30.QueryVotesRequest): _30.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _30.QueryVotesRequestProtoMsg): _30.QueryVotesRequest;
                toProto(message: _30.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _30.QueryVotesRequest): _30.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                encode(message: _30.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryVotesResponse;
                fromPartial(object: Partial<_30.QueryVotesResponse>): _30.QueryVotesResponse;
                fromAmino(object: _30.QueryVotesResponseAmino): _30.QueryVotesResponse;
                toAmino(message: _30.QueryVotesResponse): _30.QueryVotesResponseAmino;
                fromAminoMsg(object: _30.QueryVotesResponseAminoMsg): _30.QueryVotesResponse;
                toAminoMsg(message: _30.QueryVotesResponse): _30.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _30.QueryVotesResponseProtoMsg): _30.QueryVotesResponse;
                toProto(message: _30.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _30.QueryVotesResponse): _30.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(message: _30.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryParamsRequest;
                fromPartial(object: Partial<_30.QueryParamsRequest>): _30.QueryParamsRequest;
                fromAmino(object: _30.QueryParamsRequestAmino): _30.QueryParamsRequest;
                toAmino(message: _30.QueryParamsRequest): _30.QueryParamsRequestAmino;
                fromAminoMsg(object: _30.QueryParamsRequestAminoMsg): _30.QueryParamsRequest;
                toAminoMsg(message: _30.QueryParamsRequest): _30.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _30.QueryParamsRequestProtoMsg): _30.QueryParamsRequest;
                toProto(message: _30.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _30.QueryParamsRequest): _30.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _30.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryParamsResponse;
                fromPartial(object: Partial<_30.QueryParamsResponse>): _30.QueryParamsResponse;
                fromAmino(object: _30.QueryParamsResponseAmino): _30.QueryParamsResponse;
                toAmino(message: _30.QueryParamsResponse): _30.QueryParamsResponseAmino;
                fromAminoMsg(object: _30.QueryParamsResponseAminoMsg): _30.QueryParamsResponse;
                toAminoMsg(message: _30.QueryParamsResponse): _30.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _30.QueryParamsResponseProtoMsg): _30.QueryParamsResponse;
                toProto(message: _30.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _30.QueryParamsResponse): _30.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                encode(message: _30.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryDepositRequest;
                fromPartial(object: Partial<_30.QueryDepositRequest>): _30.QueryDepositRequest;
                fromAmino(object: _30.QueryDepositRequestAmino): _30.QueryDepositRequest;
                toAmino(message: _30.QueryDepositRequest): _30.QueryDepositRequestAmino;
                fromAminoMsg(object: _30.QueryDepositRequestAminoMsg): _30.QueryDepositRequest;
                toAminoMsg(message: _30.QueryDepositRequest): _30.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _30.QueryDepositRequestProtoMsg): _30.QueryDepositRequest;
                toProto(message: _30.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _30.QueryDepositRequest): _30.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                encode(message: _30.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryDepositResponse;
                fromPartial(object: Partial<_30.QueryDepositResponse>): _30.QueryDepositResponse;
                fromAmino(object: _30.QueryDepositResponseAmino): _30.QueryDepositResponse;
                toAmino(message: _30.QueryDepositResponse): _30.QueryDepositResponseAmino;
                fromAminoMsg(object: _30.QueryDepositResponseAminoMsg): _30.QueryDepositResponse;
                toAminoMsg(message: _30.QueryDepositResponse): _30.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _30.QueryDepositResponseProtoMsg): _30.QueryDepositResponse;
                toProto(message: _30.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _30.QueryDepositResponse): _30.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                encode(message: _30.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryDepositsRequest;
                fromPartial(object: Partial<_30.QueryDepositsRequest>): _30.QueryDepositsRequest;
                fromAmino(object: _30.QueryDepositsRequestAmino): _30.QueryDepositsRequest;
                toAmino(message: _30.QueryDepositsRequest): _30.QueryDepositsRequestAmino;
                fromAminoMsg(object: _30.QueryDepositsRequestAminoMsg): _30.QueryDepositsRequest;
                toAminoMsg(message: _30.QueryDepositsRequest): _30.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _30.QueryDepositsRequestProtoMsg): _30.QueryDepositsRequest;
                toProto(message: _30.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _30.QueryDepositsRequest): _30.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                encode(message: _30.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryDepositsResponse;
                fromPartial(object: Partial<_30.QueryDepositsResponse>): _30.QueryDepositsResponse;
                fromAmino(object: _30.QueryDepositsResponseAmino): _30.QueryDepositsResponse;
                toAmino(message: _30.QueryDepositsResponse): _30.QueryDepositsResponseAmino;
                fromAminoMsg(object: _30.QueryDepositsResponseAminoMsg): _30.QueryDepositsResponse;
                toAminoMsg(message: _30.QueryDepositsResponse): _30.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _30.QueryDepositsResponseProtoMsg): _30.QueryDepositsResponse;
                toProto(message: _30.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _30.QueryDepositsResponse): _30.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                encode(message: _30.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryTallyResultRequest;
                fromPartial(object: Partial<_30.QueryTallyResultRequest>): _30.QueryTallyResultRequest;
                fromAmino(object: _30.QueryTallyResultRequestAmino): _30.QueryTallyResultRequest;
                toAmino(message: _30.QueryTallyResultRequest): _30.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _30.QueryTallyResultRequestAminoMsg): _30.QueryTallyResultRequest;
                toAminoMsg(message: _30.QueryTallyResultRequest): _30.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _30.QueryTallyResultRequestProtoMsg): _30.QueryTallyResultRequest;
                toProto(message: _30.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _30.QueryTallyResultRequest): _30.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                encode(message: _30.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryTallyResultResponse;
                fromPartial(object: Partial<_30.QueryTallyResultResponse>): _30.QueryTallyResultResponse;
                fromAmino(object: _30.QueryTallyResultResponseAmino): _30.QueryTallyResultResponse;
                toAmino(message: _30.QueryTallyResultResponse): _30.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _30.QueryTallyResultResponseAminoMsg): _30.QueryTallyResultResponse;
                toAminoMsg(message: _30.QueryTallyResultResponse): _30.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _30.QueryTallyResultResponseProtoMsg): _30.QueryTallyResultResponse;
                toProto(message: _30.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _30.QueryTallyResultResponse): _30.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _29.VoteOption;
            voteOptionToJSON(object: _29.VoteOption): string;
            proposalStatusFromJSON(object: any): _29.ProposalStatus;
            proposalStatusToJSON(object: _29.ProposalStatus): string;
            VoteOption: typeof _29.VoteOption;
            VoteOptionSDKType: typeof _29.VoteOption;
            VoteOptionAmino: typeof _29.VoteOption;
            ProposalStatus: typeof _29.ProposalStatus;
            ProposalStatusSDKType: typeof _29.ProposalStatus;
            ProposalStatusAmino: typeof _29.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _29.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.WeightedVoteOption;
                fromPartial(object: Partial<_29.WeightedVoteOption>): _29.WeightedVoteOption;
                fromAmino(object: _29.WeightedVoteOptionAmino): _29.WeightedVoteOption;
                toAmino(message: _29.WeightedVoteOption): _29.WeightedVoteOptionAmino;
                fromAminoMsg(object: _29.WeightedVoteOptionAminoMsg): _29.WeightedVoteOption;
                toAminoMsg(message: _29.WeightedVoteOption): _29.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _29.WeightedVoteOptionProtoMsg): _29.WeightedVoteOption;
                toProto(message: _29.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _29.WeightedVoteOption): _29.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                encode(message: _29.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.Deposit;
                fromPartial(object: Partial<_29.Deposit>): _29.Deposit;
                fromAmino(object: _29.DepositAmino): _29.Deposit;
                toAmino(message: _29.Deposit): _29.DepositAmino;
                fromAminoMsg(object: _29.DepositAminoMsg): _29.Deposit;
                toAminoMsg(message: _29.Deposit): _29.DepositAminoMsg;
                fromProtoMsg(message: _29.DepositProtoMsg): _29.Deposit;
                toProto(message: _29.Deposit): Uint8Array;
                toProtoMsg(message: _29.Deposit): _29.DepositProtoMsg;
            };
            Proposal: {
                encode(message: _29.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.Proposal;
                fromPartial(object: Partial<_29.Proposal>): _29.Proposal;
                fromAmino(object: _29.ProposalAmino): _29.Proposal;
                toAmino(message: _29.Proposal): _29.ProposalAmino;
                fromAminoMsg(object: _29.ProposalAminoMsg): _29.Proposal;
                toAminoMsg(message: _29.Proposal): _29.ProposalAminoMsg;
                fromProtoMsg(message: _29.ProposalProtoMsg): _29.Proposal;
                toProto(message: _29.Proposal): Uint8Array;
                toProtoMsg(message: _29.Proposal): _29.ProposalProtoMsg;
            };
            TallyResult: {
                encode(message: _29.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.TallyResult;
                fromPartial(object: Partial<_29.TallyResult>): _29.TallyResult;
                fromAmino(object: _29.TallyResultAmino): _29.TallyResult;
                toAmino(message: _29.TallyResult): _29.TallyResultAmino;
                fromAminoMsg(object: _29.TallyResultAminoMsg): _29.TallyResult;
                toAminoMsg(message: _29.TallyResult): _29.TallyResultAminoMsg;
                fromProtoMsg(message: _29.TallyResultProtoMsg): _29.TallyResult;
                toProto(message: _29.TallyResult): Uint8Array;
                toProtoMsg(message: _29.TallyResult): _29.TallyResultProtoMsg;
            };
            Vote: {
                encode(message: _29.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.Vote;
                fromPartial(object: Partial<_29.Vote>): _29.Vote;
                fromAmino(object: _29.VoteAmino): _29.Vote;
                toAmino(message: _29.Vote): _29.VoteAmino;
                fromAminoMsg(object: _29.VoteAminoMsg): _29.Vote;
                toAminoMsg(message: _29.Vote): _29.VoteAminoMsg;
                fromProtoMsg(message: _29.VoteProtoMsg): _29.Vote;
                toProto(message: _29.Vote): Uint8Array;
                toProtoMsg(message: _29.Vote): _29.VoteProtoMsg;
            };
            DepositParams: {
                encode(message: _29.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.DepositParams;
                fromPartial(object: Partial<_29.DepositParams>): _29.DepositParams;
                fromAmino(object: _29.DepositParamsAmino): _29.DepositParams;
                toAmino(message: _29.DepositParams): _29.DepositParamsAmino;
                fromAminoMsg(object: _29.DepositParamsAminoMsg): _29.DepositParams;
                toAminoMsg(message: _29.DepositParams): _29.DepositParamsAminoMsg;
                fromProtoMsg(message: _29.DepositParamsProtoMsg): _29.DepositParams;
                toProto(message: _29.DepositParams): Uint8Array;
                toProtoMsg(message: _29.DepositParams): _29.DepositParamsProtoMsg;
            };
            VotingParams: {
                encode(message: _29.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.VotingParams;
                fromPartial(object: Partial<_29.VotingParams>): _29.VotingParams;
                fromAmino(object: _29.VotingParamsAmino): _29.VotingParams;
                toAmino(message: _29.VotingParams): _29.VotingParamsAmino;
                fromAminoMsg(object: _29.VotingParamsAminoMsg): _29.VotingParams;
                toAminoMsg(message: _29.VotingParams): _29.VotingParamsAminoMsg;
                fromProtoMsg(message: _29.VotingParamsProtoMsg): _29.VotingParams;
                toProto(message: _29.VotingParams): Uint8Array;
                toProtoMsg(message: _29.VotingParams): _29.VotingParamsProtoMsg;
            };
            TallyParams: {
                encode(message: _29.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.TallyParams;
                fromPartial(object: Partial<_29.TallyParams>): _29.TallyParams;
                fromAmino(object: _29.TallyParamsAmino): _29.TallyParams;
                toAmino(message: _29.TallyParams): _29.TallyParamsAmino;
                fromAminoMsg(object: _29.TallyParamsAminoMsg): _29.TallyParams;
                toAminoMsg(message: _29.TallyParams): _29.TallyParamsAminoMsg;
                fromProtoMsg(message: _29.TallyParamsProtoMsg): _29.TallyParams;
                toProto(message: _29.TallyParams): Uint8Array;
                toProtoMsg(message: _29.TallyParams): _29.TallyParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _28.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GenesisState;
                fromPartial(object: Partial<_28.GenesisState>): _28.GenesisState;
                fromAmino(object: _28.GenesisStateAmino): _28.GenesisState;
                toAmino(message: _28.GenesisState): _28.GenesisStateAmino;
                fromAminoMsg(object: _28.GenesisStateAminoMsg): _28.GenesisState;
                toAminoMsg(message: _28.GenesisState): _28.GenesisStateAminoMsg;
                fromProtoMsg(message: _28.GenesisStateProtoMsg): _28.GenesisState;
                toProto(message: _28.GenesisState): Uint8Array;
                toProtoMsg(message: _28.GenesisState): _28.GenesisStateProtoMsg;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _202.MsgClientImpl;
            QueryClientImpl: typeof _193.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _34.QueryProposalRequest): Promise<_34.QueryProposalResponse>;
                proposals(request: _34.QueryProposalsRequest): Promise<_34.QueryProposalsResponse>;
                vote(request: _34.QueryVoteRequest): Promise<_34.QueryVoteResponse>;
                votes(request: _34.QueryVotesRequest): Promise<_34.QueryVotesResponse>;
                params(request: _34.QueryParamsRequest): Promise<_34.QueryParamsResponse>;
                deposit(request: _34.QueryDepositRequest): Promise<_34.QueryDepositResponse>;
                deposits(request: _34.QueryDepositsRequest): Promise<_34.QueryDepositsResponse>;
                tallyResult(request: _34.QueryTallyResultRequest): Promise<_34.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _184.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _35.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _35.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _35.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _35.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _35.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _35.MsgSubmitProposal;
                    };
                    vote(value: _35.MsgVote): {
                        typeUrl: string;
                        value: _35.MsgVote;
                    };
                    voteWeighted(value: _35.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _35.MsgVoteWeighted;
                    };
                    deposit(value: _35.MsgDeposit): {
                        typeUrl: string;
                        value: _35.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _35.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _35.MsgSubmitProposal;
                    };
                    vote(value: _35.MsgVote): {
                        typeUrl: string;
                        value: _35.MsgVote;
                    };
                    voteWeighted(value: _35.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _35.MsgVoteWeighted;
                    };
                    deposit(value: _35.MsgDeposit): {
                        typeUrl: string;
                        value: _35.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _35.MsgSubmitProposal) => _35.MsgSubmitProposalAmino;
                    fromAmino: (object: _35.MsgSubmitProposalAmino) => _35.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _35.MsgVote) => _35.MsgVoteAmino;
                    fromAmino: (object: _35.MsgVoteAmino) => _35.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _35.MsgVoteWeighted) => _35.MsgVoteWeightedAmino;
                    fromAmino: (object: _35.MsgVoteWeightedAmino) => _35.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _35.MsgDeposit) => _35.MsgDepositAmino;
                    fromAmino: (object: _35.MsgDepositAmino) => _35.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _35.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgSubmitProposal;
                fromPartial(object: Partial<_35.MsgSubmitProposal>): _35.MsgSubmitProposal;
                fromAmino(object: _35.MsgSubmitProposalAmino): _35.MsgSubmitProposal;
                toAmino(message: _35.MsgSubmitProposal): _35.MsgSubmitProposalAmino;
                fromAminoMsg(object: _35.MsgSubmitProposalAminoMsg): _35.MsgSubmitProposal;
                toAminoMsg(message: _35.MsgSubmitProposal): _35.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _35.MsgSubmitProposalProtoMsg): _35.MsgSubmitProposal;
                toProto(message: _35.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _35.MsgSubmitProposal): _35.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                encode(message: _35.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_35.MsgSubmitProposalResponse>): _35.MsgSubmitProposalResponse;
                fromAmino(object: _35.MsgSubmitProposalResponseAmino): _35.MsgSubmitProposalResponse;
                toAmino(message: _35.MsgSubmitProposalResponse): _35.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _35.MsgSubmitProposalResponseAminoMsg): _35.MsgSubmitProposalResponse;
                toAminoMsg(message: _35.MsgSubmitProposalResponse): _35.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _35.MsgSubmitProposalResponseProtoMsg): _35.MsgSubmitProposalResponse;
                toProto(message: _35.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _35.MsgSubmitProposalResponse): _35.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                encode(message: _35.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgVote;
                fromPartial(object: Partial<_35.MsgVote>): _35.MsgVote;
                fromAmino(object: _35.MsgVoteAmino): _35.MsgVote;
                toAmino(message: _35.MsgVote): _35.MsgVoteAmino;
                fromAminoMsg(object: _35.MsgVoteAminoMsg): _35.MsgVote;
                toAminoMsg(message: _35.MsgVote): _35.MsgVoteAminoMsg;
                fromProtoMsg(message: _35.MsgVoteProtoMsg): _35.MsgVote;
                toProto(message: _35.MsgVote): Uint8Array;
                toProtoMsg(message: _35.MsgVote): _35.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                encode(_: _35.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgVoteResponse;
                fromPartial(_: Partial<_35.MsgVoteResponse>): _35.MsgVoteResponse;
                fromAmino(_: _35.MsgVoteResponseAmino): _35.MsgVoteResponse;
                toAmino(_: _35.MsgVoteResponse): _35.MsgVoteResponseAmino;
                fromAminoMsg(object: _35.MsgVoteResponseAminoMsg): _35.MsgVoteResponse;
                toAminoMsg(message: _35.MsgVoteResponse): _35.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _35.MsgVoteResponseProtoMsg): _35.MsgVoteResponse;
                toProto(message: _35.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _35.MsgVoteResponse): _35.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                encode(message: _35.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgVoteWeighted;
                fromPartial(object: Partial<_35.MsgVoteWeighted>): _35.MsgVoteWeighted;
                fromAmino(object: _35.MsgVoteWeightedAmino): _35.MsgVoteWeighted;
                toAmino(message: _35.MsgVoteWeighted): _35.MsgVoteWeightedAmino;
                fromAminoMsg(object: _35.MsgVoteWeightedAminoMsg): _35.MsgVoteWeighted;
                toAminoMsg(message: _35.MsgVoteWeighted): _35.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _35.MsgVoteWeightedProtoMsg): _35.MsgVoteWeighted;
                toProto(message: _35.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _35.MsgVoteWeighted): _35.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                encode(_: _35.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_35.MsgVoteWeightedResponse>): _35.MsgVoteWeightedResponse;
                fromAmino(_: _35.MsgVoteWeightedResponseAmino): _35.MsgVoteWeightedResponse;
                toAmino(_: _35.MsgVoteWeightedResponse): _35.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _35.MsgVoteWeightedResponseAminoMsg): _35.MsgVoteWeightedResponse;
                toAminoMsg(message: _35.MsgVoteWeightedResponse): _35.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _35.MsgVoteWeightedResponseProtoMsg): _35.MsgVoteWeightedResponse;
                toProto(message: _35.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _35.MsgVoteWeightedResponse): _35.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                encode(message: _35.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgDeposit;
                fromPartial(object: Partial<_35.MsgDeposit>): _35.MsgDeposit;
                fromAmino(object: _35.MsgDepositAmino): _35.MsgDeposit;
                toAmino(message: _35.MsgDeposit): _35.MsgDepositAmino;
                fromAminoMsg(object: _35.MsgDepositAminoMsg): _35.MsgDeposit;
                toAminoMsg(message: _35.MsgDeposit): _35.MsgDepositAminoMsg;
                fromProtoMsg(message: _35.MsgDepositProtoMsg): _35.MsgDeposit;
                toProto(message: _35.MsgDeposit): Uint8Array;
                toProtoMsg(message: _35.MsgDeposit): _35.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                encode(_: _35.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgDepositResponse;
                fromPartial(_: Partial<_35.MsgDepositResponse>): _35.MsgDepositResponse;
                fromAmino(_: _35.MsgDepositResponseAmino): _35.MsgDepositResponse;
                toAmino(_: _35.MsgDepositResponse): _35.MsgDepositResponseAmino;
                fromAminoMsg(object: _35.MsgDepositResponseAminoMsg): _35.MsgDepositResponse;
                toAminoMsg(message: _35.MsgDepositResponse): _35.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _35.MsgDepositResponseProtoMsg): _35.MsgDepositResponse;
                toProto(message: _35.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _35.MsgDepositResponse): _35.MsgDepositResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _24.CommunityPoolSpendProposal | _24.CommunityPoolSpendProposalWithDeposit | _46.SoftwareUpgradeProposal | _46.CancelSoftwareUpgradeProposal | import("../ibc/core/client/v1/client").ClientUpdateProposal | import("../ibc/core/client/v1/client").UpgradeProposal | import("../cosmwasm/wasm/v1/proposal").StoreCodeProposal | import("../cosmwasm/wasm/v1/proposal").InstantiateContractProposal | import("../cosmwasm/wasm/v1/proposal").InstantiateContract2Proposal | import("../cosmwasm/wasm/v1/proposal").MigrateContractProposal | import("../cosmwasm/wasm/v1/proposal").SudoContractProposal | import("../cosmwasm/wasm/v1/proposal").ExecuteContractProposal | import("../cosmwasm/wasm/v1/proposal").UpdateAdminProposal | import("../cosmwasm/wasm/v1/proposal").ClearAdminProposal | import("../cosmwasm/wasm/v1/proposal").PinCodesProposal | import("../cosmwasm/wasm/v1/proposal").UnpinCodesProposal | import("../cosmwasm/wasm/v1/proposal").UpdateInstantiateConfigProposal | import("../cosmwasm/wasm/v1/proposal").StoreAndInstantiateContractProposal | import("../osmosis/pool-incentives/v1beta1/gov").ReplacePoolIncentivesProposal | import("../osmosis/pool-incentives/v1beta1/gov").UpdatePoolIncentivesProposal | import("../osmosis/protorev/v1beta1/gov").SetProtoRevEnabledProposal | import("../osmosis/protorev/v1beta1/gov").SetProtoRevAdminAccountProposal | import("../osmosis/superfluid/v1beta1/gov").SetSuperfluidAssetsProposal | import("../osmosis/superfluid/v1beta1/gov").RemoveSuperfluidAssetsProposal | import("../osmosis/superfluid/v1beta1/gov").UpdateUnpoolWhiteListProposal | import("../osmosis/txfees/v1beta1/gov").UpdateFeeTokenProposal | _33.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                encode(message: _34.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryProposalRequest;
                fromPartial(object: Partial<_34.QueryProposalRequest>): _34.QueryProposalRequest;
                fromAmino(object: _34.QueryProposalRequestAmino): _34.QueryProposalRequest;
                toAmino(message: _34.QueryProposalRequest): _34.QueryProposalRequestAmino;
                fromAminoMsg(object: _34.QueryProposalRequestAminoMsg): _34.QueryProposalRequest;
                toAminoMsg(message: _34.QueryProposalRequest): _34.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _34.QueryProposalRequestProtoMsg): _34.QueryProposalRequest;
                toProto(message: _34.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _34.QueryProposalRequest): _34.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                encode(message: _34.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryProposalResponse;
                fromPartial(object: Partial<_34.QueryProposalResponse>): _34.QueryProposalResponse;
                fromAmino(object: _34.QueryProposalResponseAmino): _34.QueryProposalResponse;
                toAmino(message: _34.QueryProposalResponse): _34.QueryProposalResponseAmino;
                fromAminoMsg(object: _34.QueryProposalResponseAminoMsg): _34.QueryProposalResponse;
                toAminoMsg(message: _34.QueryProposalResponse): _34.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _34.QueryProposalResponseProtoMsg): _34.QueryProposalResponse;
                toProto(message: _34.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _34.QueryProposalResponse): _34.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                encode(message: _34.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryProposalsRequest;
                fromPartial(object: Partial<_34.QueryProposalsRequest>): _34.QueryProposalsRequest;
                fromAmino(object: _34.QueryProposalsRequestAmino): _34.QueryProposalsRequest;
                toAmino(message: _34.QueryProposalsRequest): _34.QueryProposalsRequestAmino;
                fromAminoMsg(object: _34.QueryProposalsRequestAminoMsg): _34.QueryProposalsRequest;
                toAminoMsg(message: _34.QueryProposalsRequest): _34.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _34.QueryProposalsRequestProtoMsg): _34.QueryProposalsRequest;
                toProto(message: _34.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _34.QueryProposalsRequest): _34.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                encode(message: _34.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryProposalsResponse;
                fromPartial(object: Partial<_34.QueryProposalsResponse>): _34.QueryProposalsResponse;
                fromAmino(object: _34.QueryProposalsResponseAmino): _34.QueryProposalsResponse;
                toAmino(message: _34.QueryProposalsResponse): _34.QueryProposalsResponseAmino;
                fromAminoMsg(object: _34.QueryProposalsResponseAminoMsg): _34.QueryProposalsResponse;
                toAminoMsg(message: _34.QueryProposalsResponse): _34.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _34.QueryProposalsResponseProtoMsg): _34.QueryProposalsResponse;
                toProto(message: _34.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _34.QueryProposalsResponse): _34.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                encode(message: _34.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryVoteRequest;
                fromPartial(object: Partial<_34.QueryVoteRequest>): _34.QueryVoteRequest;
                fromAmino(object: _34.QueryVoteRequestAmino): _34.QueryVoteRequest;
                toAmino(message: _34.QueryVoteRequest): _34.QueryVoteRequestAmino;
                fromAminoMsg(object: _34.QueryVoteRequestAminoMsg): _34.QueryVoteRequest;
                toAminoMsg(message: _34.QueryVoteRequest): _34.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _34.QueryVoteRequestProtoMsg): _34.QueryVoteRequest;
                toProto(message: _34.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _34.QueryVoteRequest): _34.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                encode(message: _34.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryVoteResponse;
                fromPartial(object: Partial<_34.QueryVoteResponse>): _34.QueryVoteResponse;
                fromAmino(object: _34.QueryVoteResponseAmino): _34.QueryVoteResponse;
                toAmino(message: _34.QueryVoteResponse): _34.QueryVoteResponseAmino;
                fromAminoMsg(object: _34.QueryVoteResponseAminoMsg): _34.QueryVoteResponse;
                toAminoMsg(message: _34.QueryVoteResponse): _34.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _34.QueryVoteResponseProtoMsg): _34.QueryVoteResponse;
                toProto(message: _34.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _34.QueryVoteResponse): _34.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                encode(message: _34.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryVotesRequest;
                fromPartial(object: Partial<_34.QueryVotesRequest>): _34.QueryVotesRequest;
                fromAmino(object: _34.QueryVotesRequestAmino): _34.QueryVotesRequest;
                toAmino(message: _34.QueryVotesRequest): _34.QueryVotesRequestAmino;
                fromAminoMsg(object: _34.QueryVotesRequestAminoMsg): _34.QueryVotesRequest;
                toAminoMsg(message: _34.QueryVotesRequest): _34.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _34.QueryVotesRequestProtoMsg): _34.QueryVotesRequest;
                toProto(message: _34.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _34.QueryVotesRequest): _34.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                encode(message: _34.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryVotesResponse;
                fromPartial(object: Partial<_34.QueryVotesResponse>): _34.QueryVotesResponse;
                fromAmino(object: _34.QueryVotesResponseAmino): _34.QueryVotesResponse;
                toAmino(message: _34.QueryVotesResponse): _34.QueryVotesResponseAmino;
                fromAminoMsg(object: _34.QueryVotesResponseAminoMsg): _34.QueryVotesResponse;
                toAminoMsg(message: _34.QueryVotesResponse): _34.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _34.QueryVotesResponseProtoMsg): _34.QueryVotesResponse;
                toProto(message: _34.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _34.QueryVotesResponse): _34.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(message: _34.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryParamsRequest;
                fromPartial(object: Partial<_34.QueryParamsRequest>): _34.QueryParamsRequest;
                fromAmino(object: _34.QueryParamsRequestAmino): _34.QueryParamsRequest;
                toAmino(message: _34.QueryParamsRequest): _34.QueryParamsRequestAmino;
                fromAminoMsg(object: _34.QueryParamsRequestAminoMsg): _34.QueryParamsRequest;
                toAminoMsg(message: _34.QueryParamsRequest): _34.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _34.QueryParamsRequestProtoMsg): _34.QueryParamsRequest;
                toProto(message: _34.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _34.QueryParamsRequest): _34.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _34.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryParamsResponse;
                fromPartial(object: Partial<_34.QueryParamsResponse>): _34.QueryParamsResponse;
                fromAmino(object: _34.QueryParamsResponseAmino): _34.QueryParamsResponse;
                toAmino(message: _34.QueryParamsResponse): _34.QueryParamsResponseAmino;
                fromAminoMsg(object: _34.QueryParamsResponseAminoMsg): _34.QueryParamsResponse;
                toAminoMsg(message: _34.QueryParamsResponse): _34.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _34.QueryParamsResponseProtoMsg): _34.QueryParamsResponse;
                toProto(message: _34.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _34.QueryParamsResponse): _34.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                encode(message: _34.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryDepositRequest;
                fromPartial(object: Partial<_34.QueryDepositRequest>): _34.QueryDepositRequest;
                fromAmino(object: _34.QueryDepositRequestAmino): _34.QueryDepositRequest;
                toAmino(message: _34.QueryDepositRequest): _34.QueryDepositRequestAmino;
                fromAminoMsg(object: _34.QueryDepositRequestAminoMsg): _34.QueryDepositRequest;
                toAminoMsg(message: _34.QueryDepositRequest): _34.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _34.QueryDepositRequestProtoMsg): _34.QueryDepositRequest;
                toProto(message: _34.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _34.QueryDepositRequest): _34.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                encode(message: _34.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryDepositResponse;
                fromPartial(object: Partial<_34.QueryDepositResponse>): _34.QueryDepositResponse;
                fromAmino(object: _34.QueryDepositResponseAmino): _34.QueryDepositResponse;
                toAmino(message: _34.QueryDepositResponse): _34.QueryDepositResponseAmino;
                fromAminoMsg(object: _34.QueryDepositResponseAminoMsg): _34.QueryDepositResponse;
                toAminoMsg(message: _34.QueryDepositResponse): _34.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _34.QueryDepositResponseProtoMsg): _34.QueryDepositResponse;
                toProto(message: _34.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _34.QueryDepositResponse): _34.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                encode(message: _34.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryDepositsRequest;
                fromPartial(object: Partial<_34.QueryDepositsRequest>): _34.QueryDepositsRequest;
                fromAmino(object: _34.QueryDepositsRequestAmino): _34.QueryDepositsRequest;
                toAmino(message: _34.QueryDepositsRequest): _34.QueryDepositsRequestAmino;
                fromAminoMsg(object: _34.QueryDepositsRequestAminoMsg): _34.QueryDepositsRequest;
                toAminoMsg(message: _34.QueryDepositsRequest): _34.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _34.QueryDepositsRequestProtoMsg): _34.QueryDepositsRequest;
                toProto(message: _34.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _34.QueryDepositsRequest): _34.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                encode(message: _34.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryDepositsResponse;
                fromPartial(object: Partial<_34.QueryDepositsResponse>): _34.QueryDepositsResponse;
                fromAmino(object: _34.QueryDepositsResponseAmino): _34.QueryDepositsResponse;
                toAmino(message: _34.QueryDepositsResponse): _34.QueryDepositsResponseAmino;
                fromAminoMsg(object: _34.QueryDepositsResponseAminoMsg): _34.QueryDepositsResponse;
                toAminoMsg(message: _34.QueryDepositsResponse): _34.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _34.QueryDepositsResponseProtoMsg): _34.QueryDepositsResponse;
                toProto(message: _34.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _34.QueryDepositsResponse): _34.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                encode(message: _34.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryTallyResultRequest;
                fromPartial(object: Partial<_34.QueryTallyResultRequest>): _34.QueryTallyResultRequest;
                fromAmino(object: _34.QueryTallyResultRequestAmino): _34.QueryTallyResultRequest;
                toAmino(message: _34.QueryTallyResultRequest): _34.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _34.QueryTallyResultRequestAminoMsg): _34.QueryTallyResultRequest;
                toAminoMsg(message: _34.QueryTallyResultRequest): _34.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _34.QueryTallyResultRequestProtoMsg): _34.QueryTallyResultRequest;
                toProto(message: _34.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _34.QueryTallyResultRequest): _34.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                encode(message: _34.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryTallyResultResponse;
                fromPartial(object: Partial<_34.QueryTallyResultResponse>): _34.QueryTallyResultResponse;
                fromAmino(object: _34.QueryTallyResultResponseAmino): _34.QueryTallyResultResponse;
                toAmino(message: _34.QueryTallyResultResponse): _34.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _34.QueryTallyResultResponseAminoMsg): _34.QueryTallyResultResponse;
                toAminoMsg(message: _34.QueryTallyResultResponse): _34.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _34.QueryTallyResultResponseProtoMsg): _34.QueryTallyResultResponse;
                toProto(message: _34.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _34.QueryTallyResultResponse): _34.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _33.VoteOption;
            voteOptionToJSON(object: _33.VoteOption): string;
            proposalStatusFromJSON(object: any): _33.ProposalStatus;
            proposalStatusToJSON(object: _33.ProposalStatus): string;
            VoteOption: typeof _33.VoteOption;
            VoteOptionSDKType: typeof _33.VoteOption;
            VoteOptionAmino: typeof _33.VoteOption;
            ProposalStatus: typeof _33.ProposalStatus;
            ProposalStatusSDKType: typeof _33.ProposalStatus;
            ProposalStatusAmino: typeof _33.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _33.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.WeightedVoteOption;
                fromPartial(object: Partial<_33.WeightedVoteOption>): _33.WeightedVoteOption;
                fromAmino(object: _33.WeightedVoteOptionAmino): _33.WeightedVoteOption;
                toAmino(message: _33.WeightedVoteOption): _33.WeightedVoteOptionAmino;
                fromAminoMsg(object: _33.WeightedVoteOptionAminoMsg): _33.WeightedVoteOption;
                toAminoMsg(message: _33.WeightedVoteOption): _33.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _33.WeightedVoteOptionProtoMsg): _33.WeightedVoteOption;
                toProto(message: _33.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _33.WeightedVoteOption): _33.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                encode(message: _33.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.TextProposal;
                fromPartial(object: Partial<_33.TextProposal>): _33.TextProposal;
                fromAmino(object: _33.TextProposalAmino): _33.TextProposal;
                toAmino(message: _33.TextProposal): _33.TextProposalAmino;
                fromAminoMsg(object: _33.TextProposalAminoMsg): _33.TextProposal;
                toAminoMsg(message: _33.TextProposal): _33.TextProposalAminoMsg;
                fromProtoMsg(message: _33.TextProposalProtoMsg): _33.TextProposal;
                toProto(message: _33.TextProposal): Uint8Array;
                toProtoMsg(message: _33.TextProposal): _33.TextProposalProtoMsg;
            };
            Deposit: {
                encode(message: _33.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Deposit;
                fromPartial(object: Partial<_33.Deposit>): _33.Deposit;
                fromAmino(object: _33.DepositAmino): _33.Deposit;
                toAmino(message: _33.Deposit): _33.DepositAmino;
                fromAminoMsg(object: _33.DepositAminoMsg): _33.Deposit;
                toAminoMsg(message: _33.Deposit): _33.DepositAminoMsg;
                fromProtoMsg(message: _33.DepositProtoMsg): _33.Deposit;
                toProto(message: _33.Deposit): Uint8Array;
                toProtoMsg(message: _33.Deposit): _33.DepositProtoMsg;
            };
            Proposal: {
                encode(message: _33.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Proposal;
                fromPartial(object: Partial<_33.Proposal>): _33.Proposal;
                fromAmino(object: _33.ProposalAmino): _33.Proposal;
                toAmino(message: _33.Proposal): _33.ProposalAmino;
                fromAminoMsg(object: _33.ProposalAminoMsg): _33.Proposal;
                toAminoMsg(message: _33.Proposal): _33.ProposalAminoMsg;
                fromProtoMsg(message: _33.ProposalProtoMsg): _33.Proposal;
                toProto(message: _33.Proposal): Uint8Array;
                toProtoMsg(message: _33.Proposal): _33.ProposalProtoMsg;
            };
            TallyResult: {
                encode(message: _33.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.TallyResult;
                fromPartial(object: Partial<_33.TallyResult>): _33.TallyResult;
                fromAmino(object: _33.TallyResultAmino): _33.TallyResult;
                toAmino(message: _33.TallyResult): _33.TallyResultAmino;
                fromAminoMsg(object: _33.TallyResultAminoMsg): _33.TallyResult;
                toAminoMsg(message: _33.TallyResult): _33.TallyResultAminoMsg;
                fromProtoMsg(message: _33.TallyResultProtoMsg): _33.TallyResult;
                toProto(message: _33.TallyResult): Uint8Array;
                toProtoMsg(message: _33.TallyResult): _33.TallyResultProtoMsg;
            };
            Vote: {
                encode(message: _33.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Vote;
                fromPartial(object: Partial<_33.Vote>): _33.Vote;
                fromAmino(object: _33.VoteAmino): _33.Vote;
                toAmino(message: _33.Vote): _33.VoteAmino;
                fromAminoMsg(object: _33.VoteAminoMsg): _33.Vote;
                toAminoMsg(message: _33.Vote): _33.VoteAminoMsg;
                fromProtoMsg(message: _33.VoteProtoMsg): _33.Vote;
                toProto(message: _33.Vote): Uint8Array;
                toProtoMsg(message: _33.Vote): _33.VoteProtoMsg;
            };
            DepositParams: {
                encode(message: _33.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.DepositParams;
                fromPartial(object: Partial<_33.DepositParams>): _33.DepositParams;
                fromAmino(object: _33.DepositParamsAmino): _33.DepositParams;
                toAmino(message: _33.DepositParams): _33.DepositParamsAmino;
                fromAminoMsg(object: _33.DepositParamsAminoMsg): _33.DepositParams;
                toAminoMsg(message: _33.DepositParams): _33.DepositParamsAminoMsg;
                fromProtoMsg(message: _33.DepositParamsProtoMsg): _33.DepositParams;
                toProto(message: _33.DepositParams): Uint8Array;
                toProtoMsg(message: _33.DepositParams): _33.DepositParamsProtoMsg;
            };
            VotingParams: {
                encode(message: _33.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.VotingParams;
                fromPartial(object: Partial<_33.VotingParams>): _33.VotingParams;
                fromAmino(object: _33.VotingParamsAmino): _33.VotingParams;
                toAmino(message: _33.VotingParams): _33.VotingParamsAmino;
                fromAminoMsg(object: _33.VotingParamsAminoMsg): _33.VotingParams;
                toAminoMsg(message: _33.VotingParams): _33.VotingParamsAminoMsg;
                fromProtoMsg(message: _33.VotingParamsProtoMsg): _33.VotingParams;
                toProto(message: _33.VotingParams): Uint8Array;
                toProtoMsg(message: _33.VotingParams): _33.VotingParamsProtoMsg;
            };
            TallyParams: {
                encode(message: _33.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.TallyParams;
                fromPartial(object: Partial<_33.TallyParams>): _33.TallyParams;
                fromAmino(object: _33.TallyParamsAmino): _33.TallyParams;
                toAmino(message: _33.TallyParams): _33.TallyParamsAmino;
                fromAminoMsg(object: _33.TallyParamsAminoMsg): _33.TallyParams;
                toAminoMsg(message: _33.TallyParams): _33.TallyParamsAminoMsg;
                fromProtoMsg(message: _33.TallyParamsProtoMsg): _33.TallyParams;
                toProto(message: _33.TallyParams): Uint8Array;
                toProtoMsg(message: _33.TallyParams): _33.TallyParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _32.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GenesisState;
                fromPartial(object: Partial<_32.GenesisState>): _32.GenesisState;
                fromAmino(object: _32.GenesisStateAmino): _32.GenesisState;
                toAmino(message: _32.GenesisState): _32.GenesisStateAmino;
                fromAminoMsg(object: _32.GenesisStateAminoMsg): _32.GenesisState;
                toAminoMsg(message: _32.GenesisState): _32.GenesisStateAminoMsg;
                fromProtoMsg(message: _32.GenesisStateProtoMsg): _32.GenesisState;
                toProto(message: _32.GenesisState): Uint8Array;
                toProtoMsg(message: _32.GenesisState): _32.GenesisStateProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _203.MsgClientImpl;
            QueryClientImpl: typeof _194.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _38.QueryValidatorsRequest): Promise<_38.QueryValidatorsResponse>;
                validator(request: _38.QueryValidatorRequest): Promise<_38.QueryValidatorResponse>;
                validatorDelegations(request: _38.QueryValidatorDelegationsRequest): Promise<_38.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _38.QueryValidatorUnbondingDelegationsRequest): Promise<_38.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _38.QueryDelegationRequest): Promise<_38.QueryDelegationResponse>;
                unbondingDelegation(request: _38.QueryUnbondingDelegationRequest): Promise<_38.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _38.QueryDelegatorDelegationsRequest): Promise<_38.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _38.QueryDelegatorUnbondingDelegationsRequest): Promise<_38.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _38.QueryRedelegationsRequest): Promise<_38.QueryRedelegationsResponse>;
                delegatorValidators(request: _38.QueryDelegatorValidatorsRequest): Promise<_38.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _38.QueryDelegatorValidatorRequest): Promise<_38.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _38.QueryHistoricalInfoRequest): Promise<_38.QueryHistoricalInfoResponse>;
                pool(request?: _38.QueryPoolRequest): Promise<_38.QueryPoolResponse>;
                params(request?: _38.QueryParamsRequest): Promise<_38.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _185.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _40.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _40.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _40.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _40.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _40.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _40.MsgCreateValidator): {
                        typeUrl: string;
                        value: _40.MsgCreateValidator;
                    };
                    editValidator(value: _40.MsgEditValidator): {
                        typeUrl: string;
                        value: _40.MsgEditValidator;
                    };
                    delegate(value: _40.MsgDelegate): {
                        typeUrl: string;
                        value: _40.MsgDelegate;
                    };
                    beginRedelegate(value: _40.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _40.MsgBeginRedelegate;
                    };
                    undelegate(value: _40.MsgUndelegate): {
                        typeUrl: string;
                        value: _40.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _40.MsgCreateValidator): {
                        typeUrl: string;
                        value: _40.MsgCreateValidator;
                    };
                    editValidator(value: _40.MsgEditValidator): {
                        typeUrl: string;
                        value: _40.MsgEditValidator;
                    };
                    delegate(value: _40.MsgDelegate): {
                        typeUrl: string;
                        value: _40.MsgDelegate;
                    };
                    beginRedelegate(value: _40.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _40.MsgBeginRedelegate;
                    };
                    undelegate(value: _40.MsgUndelegate): {
                        typeUrl: string;
                        value: _40.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _40.MsgCreateValidator) => _40.MsgCreateValidatorAmino;
                    fromAmino: (object: _40.MsgCreateValidatorAmino) => _40.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _40.MsgEditValidator) => _40.MsgEditValidatorAmino;
                    fromAmino: (object: _40.MsgEditValidatorAmino) => _40.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _40.MsgDelegate) => _40.MsgDelegateAmino;
                    fromAmino: (object: _40.MsgDelegateAmino) => _40.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _40.MsgBeginRedelegate) => _40.MsgBeginRedelegateAmino;
                    fromAmino: (object: _40.MsgBeginRedelegateAmino) => _40.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _40.MsgUndelegate) => _40.MsgUndelegateAmino;
                    fromAmino: (object: _40.MsgUndelegateAmino) => _40.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _40.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgCreateValidator;
                fromPartial(object: Partial<_40.MsgCreateValidator>): _40.MsgCreateValidator;
                fromAmino(object: _40.MsgCreateValidatorAmino): _40.MsgCreateValidator;
                toAmino(message: _40.MsgCreateValidator): _40.MsgCreateValidatorAmino;
                fromAminoMsg(object: _40.MsgCreateValidatorAminoMsg): _40.MsgCreateValidator;
                toAminoMsg(message: _40.MsgCreateValidator): _40.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _40.MsgCreateValidatorProtoMsg): _40.MsgCreateValidator;
                toProto(message: _40.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _40.MsgCreateValidator): _40.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                encode(_: _40.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_40.MsgCreateValidatorResponse>): _40.MsgCreateValidatorResponse;
                fromAmino(_: _40.MsgCreateValidatorResponseAmino): _40.MsgCreateValidatorResponse;
                toAmino(_: _40.MsgCreateValidatorResponse): _40.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _40.MsgCreateValidatorResponseAminoMsg): _40.MsgCreateValidatorResponse;
                toAminoMsg(message: _40.MsgCreateValidatorResponse): _40.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _40.MsgCreateValidatorResponseProtoMsg): _40.MsgCreateValidatorResponse;
                toProto(message: _40.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _40.MsgCreateValidatorResponse): _40.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                encode(message: _40.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgEditValidator;
                fromPartial(object: Partial<_40.MsgEditValidator>): _40.MsgEditValidator;
                fromAmino(object: _40.MsgEditValidatorAmino): _40.MsgEditValidator;
                toAmino(message: _40.MsgEditValidator): _40.MsgEditValidatorAmino;
                fromAminoMsg(object: _40.MsgEditValidatorAminoMsg): _40.MsgEditValidator;
                toAminoMsg(message: _40.MsgEditValidator): _40.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _40.MsgEditValidatorProtoMsg): _40.MsgEditValidator;
                toProto(message: _40.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _40.MsgEditValidator): _40.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                encode(_: _40.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgEditValidatorResponse;
                fromPartial(_: Partial<_40.MsgEditValidatorResponse>): _40.MsgEditValidatorResponse;
                fromAmino(_: _40.MsgEditValidatorResponseAmino): _40.MsgEditValidatorResponse;
                toAmino(_: _40.MsgEditValidatorResponse): _40.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _40.MsgEditValidatorResponseAminoMsg): _40.MsgEditValidatorResponse;
                toAminoMsg(message: _40.MsgEditValidatorResponse): _40.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _40.MsgEditValidatorResponseProtoMsg): _40.MsgEditValidatorResponse;
                toProto(message: _40.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _40.MsgEditValidatorResponse): _40.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                encode(message: _40.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgDelegate;
                fromPartial(object: Partial<_40.MsgDelegate>): _40.MsgDelegate;
                fromAmino(object: _40.MsgDelegateAmino): _40.MsgDelegate;
                toAmino(message: _40.MsgDelegate): _40.MsgDelegateAmino;
                fromAminoMsg(object: _40.MsgDelegateAminoMsg): _40.MsgDelegate;
                toAminoMsg(message: _40.MsgDelegate): _40.MsgDelegateAminoMsg;
                fromProtoMsg(message: _40.MsgDelegateProtoMsg): _40.MsgDelegate;
                toProto(message: _40.MsgDelegate): Uint8Array;
                toProtoMsg(message: _40.MsgDelegate): _40.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                encode(_: _40.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgDelegateResponse;
                fromPartial(_: Partial<_40.MsgDelegateResponse>): _40.MsgDelegateResponse;
                fromAmino(_: _40.MsgDelegateResponseAmino): _40.MsgDelegateResponse;
                toAmino(_: _40.MsgDelegateResponse): _40.MsgDelegateResponseAmino;
                fromAminoMsg(object: _40.MsgDelegateResponseAminoMsg): _40.MsgDelegateResponse;
                toAminoMsg(message: _40.MsgDelegateResponse): _40.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _40.MsgDelegateResponseProtoMsg): _40.MsgDelegateResponse;
                toProto(message: _40.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _40.MsgDelegateResponse): _40.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                encode(message: _40.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgBeginRedelegate;
                fromPartial(object: Partial<_40.MsgBeginRedelegate>): _40.MsgBeginRedelegate;
                fromAmino(object: _40.MsgBeginRedelegateAmino): _40.MsgBeginRedelegate;
                toAmino(message: _40.MsgBeginRedelegate): _40.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _40.MsgBeginRedelegateAminoMsg): _40.MsgBeginRedelegate;
                toAminoMsg(message: _40.MsgBeginRedelegate): _40.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _40.MsgBeginRedelegateProtoMsg): _40.MsgBeginRedelegate;
                toProto(message: _40.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _40.MsgBeginRedelegate): _40.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _40.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_40.MsgBeginRedelegateResponse>): _40.MsgBeginRedelegateResponse;
                fromAmino(object: _40.MsgBeginRedelegateResponseAmino): _40.MsgBeginRedelegateResponse;
                toAmino(message: _40.MsgBeginRedelegateResponse): _40.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _40.MsgBeginRedelegateResponseAminoMsg): _40.MsgBeginRedelegateResponse;
                toAminoMsg(message: _40.MsgBeginRedelegateResponse): _40.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _40.MsgBeginRedelegateResponseProtoMsg): _40.MsgBeginRedelegateResponse;
                toProto(message: _40.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _40.MsgBeginRedelegateResponse): _40.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                encode(message: _40.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgUndelegate;
                fromPartial(object: Partial<_40.MsgUndelegate>): _40.MsgUndelegate;
                fromAmino(object: _40.MsgUndelegateAmino): _40.MsgUndelegate;
                toAmino(message: _40.MsgUndelegate): _40.MsgUndelegateAmino;
                fromAminoMsg(object: _40.MsgUndelegateAminoMsg): _40.MsgUndelegate;
                toAminoMsg(message: _40.MsgUndelegate): _40.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _40.MsgUndelegateProtoMsg): _40.MsgUndelegate;
                toProto(message: _40.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _40.MsgUndelegate): _40.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                encode(message: _40.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgUndelegateResponse;
                fromPartial(object: Partial<_40.MsgUndelegateResponse>): _40.MsgUndelegateResponse;
                fromAmino(object: _40.MsgUndelegateResponseAmino): _40.MsgUndelegateResponse;
                toAmino(message: _40.MsgUndelegateResponse): _40.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _40.MsgUndelegateResponseAminoMsg): _40.MsgUndelegateResponse;
                toAminoMsg(message: _40.MsgUndelegateResponse): _40.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _40.MsgUndelegateResponseProtoMsg): _40.MsgUndelegateResponse;
                toProto(message: _40.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _40.MsgUndelegateResponse): _40.MsgUndelegateResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => string;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => {
                typeUrl: string;
                value: Uint8Array;
            };
            bondStatusFromJSON(object: any): _39.BondStatus;
            bondStatusToJSON(object: _39.BondStatus): string;
            BondStatus: typeof _39.BondStatus;
            BondStatusSDKType: typeof _39.BondStatus;
            BondStatusAmino: typeof _39.BondStatus;
            HistoricalInfo: {
                encode(message: _39.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.HistoricalInfo;
                fromPartial(object: Partial<_39.HistoricalInfo>): _39.HistoricalInfo;
                fromAmino(object: _39.HistoricalInfoAmino): _39.HistoricalInfo;
                toAmino(message: _39.HistoricalInfo): _39.HistoricalInfoAmino;
                fromAminoMsg(object: _39.HistoricalInfoAminoMsg): _39.HistoricalInfo;
                toAminoMsg(message: _39.HistoricalInfo): _39.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _39.HistoricalInfoProtoMsg): _39.HistoricalInfo;
                toProto(message: _39.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _39.HistoricalInfo): _39.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                encode(message: _39.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.CommissionRates;
                fromPartial(object: Partial<_39.CommissionRates>): _39.CommissionRates;
                fromAmino(object: _39.CommissionRatesAmino): _39.CommissionRates;
                toAmino(message: _39.CommissionRates): _39.CommissionRatesAmino;
                fromAminoMsg(object: _39.CommissionRatesAminoMsg): _39.CommissionRates;
                toAminoMsg(message: _39.CommissionRates): _39.CommissionRatesAminoMsg;
                fromProtoMsg(message: _39.CommissionRatesProtoMsg): _39.CommissionRates;
                toProto(message: _39.CommissionRates): Uint8Array;
                toProtoMsg(message: _39.CommissionRates): _39.CommissionRatesProtoMsg;
            };
            Commission: {
                encode(message: _39.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.Commission;
                fromPartial(object: Partial<_39.Commission>): _39.Commission;
                fromAmino(object: _39.CommissionAmino): _39.Commission;
                toAmino(message: _39.Commission): _39.CommissionAmino;
                fromAminoMsg(object: _39.CommissionAminoMsg): _39.Commission;
                toAminoMsg(message: _39.Commission): _39.CommissionAminoMsg;
                fromProtoMsg(message: _39.CommissionProtoMsg): _39.Commission;
                toProto(message: _39.Commission): Uint8Array;
                toProtoMsg(message: _39.Commission): _39.CommissionProtoMsg;
            };
            Description: {
                encode(message: _39.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.Description;
                fromPartial(object: Partial<_39.Description>): _39.Description;
                fromAmino(object: _39.DescriptionAmino): _39.Description;
                toAmino(message: _39.Description): _39.DescriptionAmino;
                fromAminoMsg(object: _39.DescriptionAminoMsg): _39.Description;
                toAminoMsg(message: _39.Description): _39.DescriptionAminoMsg;
                fromProtoMsg(message: _39.DescriptionProtoMsg): _39.Description;
                toProto(message: _39.Description): Uint8Array;
                toProtoMsg(message: _39.Description): _39.DescriptionProtoMsg;
            };
            Validator: {
                encode(message: _39.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.Validator;
                fromPartial(object: Partial<_39.Validator>): _39.Validator;
                fromAmino(object: _39.ValidatorAmino): _39.Validator;
                toAmino(message: _39.Validator): _39.ValidatorAmino;
                fromAminoMsg(object: _39.ValidatorAminoMsg): _39.Validator;
                toAminoMsg(message: _39.Validator): _39.ValidatorAminoMsg;
                fromProtoMsg(message: _39.ValidatorProtoMsg): _39.Validator;
                toProto(message: _39.Validator): Uint8Array;
                toProtoMsg(message: _39.Validator): _39.ValidatorProtoMsg;
            };
            ValAddresses: {
                encode(message: _39.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValAddresses;
                fromPartial(object: Partial<_39.ValAddresses>): _39.ValAddresses;
                fromAmino(object: _39.ValAddressesAmino): _39.ValAddresses;
                toAmino(message: _39.ValAddresses): _39.ValAddressesAmino;
                fromAminoMsg(object: _39.ValAddressesAminoMsg): _39.ValAddresses;
                toAminoMsg(message: _39.ValAddresses): _39.ValAddressesAminoMsg;
                fromProtoMsg(message: _39.ValAddressesProtoMsg): _39.ValAddresses;
                toProto(message: _39.ValAddresses): Uint8Array;
                toProtoMsg(message: _39.ValAddresses): _39.ValAddressesProtoMsg;
            };
            DVPair: {
                encode(message: _39.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.DVPair;
                fromPartial(object: Partial<_39.DVPair>): _39.DVPair;
                fromAmino(object: _39.DVPairAmino): _39.DVPair;
                toAmino(message: _39.DVPair): _39.DVPairAmino;
                fromAminoMsg(object: _39.DVPairAminoMsg): _39.DVPair;
                toAminoMsg(message: _39.DVPair): _39.DVPairAminoMsg;
                fromProtoMsg(message: _39.DVPairProtoMsg): _39.DVPair;
                toProto(message: _39.DVPair): Uint8Array;
                toProtoMsg(message: _39.DVPair): _39.DVPairProtoMsg;
            };
            DVPairs: {
                encode(message: _39.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.DVPairs;
                fromPartial(object: Partial<_39.DVPairs>): _39.DVPairs;
                fromAmino(object: _39.DVPairsAmino): _39.DVPairs;
                toAmino(message: _39.DVPairs): _39.DVPairsAmino;
                fromAminoMsg(object: _39.DVPairsAminoMsg): _39.DVPairs;
                toAminoMsg(message: _39.DVPairs): _39.DVPairsAminoMsg;
                fromProtoMsg(message: _39.DVPairsProtoMsg): _39.DVPairs;
                toProto(message: _39.DVPairs): Uint8Array;
                toProtoMsg(message: _39.DVPairs): _39.DVPairsProtoMsg;
            };
            DVVTriplet: {
                encode(message: _39.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.DVVTriplet;
                fromPartial(object: Partial<_39.DVVTriplet>): _39.DVVTriplet;
                fromAmino(object: _39.DVVTripletAmino): _39.DVVTriplet;
                toAmino(message: _39.DVVTriplet): _39.DVVTripletAmino;
                fromAminoMsg(object: _39.DVVTripletAminoMsg): _39.DVVTriplet;
                toAminoMsg(message: _39.DVVTriplet): _39.DVVTripletAminoMsg;
                fromProtoMsg(message: _39.DVVTripletProtoMsg): _39.DVVTriplet;
                toProto(message: _39.DVVTriplet): Uint8Array;
                toProtoMsg(message: _39.DVVTriplet): _39.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                encode(message: _39.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.DVVTriplets;
                fromPartial(object: Partial<_39.DVVTriplets>): _39.DVVTriplets;
                fromAmino(object: _39.DVVTripletsAmino): _39.DVVTriplets;
                toAmino(message: _39.DVVTriplets): _39.DVVTripletsAmino;
                fromAminoMsg(object: _39.DVVTripletsAminoMsg): _39.DVVTriplets;
                toAminoMsg(message: _39.DVVTriplets): _39.DVVTripletsAminoMsg;
                fromProtoMsg(message: _39.DVVTripletsProtoMsg): _39.DVVTriplets;
                toProto(message: _39.DVVTriplets): Uint8Array;
                toProtoMsg(message: _39.DVVTriplets): _39.DVVTripletsProtoMsg;
            };
            Delegation: {
                encode(message: _39.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.Delegation;
                fromPartial(object: Partial<_39.Delegation>): _39.Delegation;
                fromAmino(object: _39.DelegationAmino): _39.Delegation;
                toAmino(message: _39.Delegation): _39.DelegationAmino;
                fromAminoMsg(object: _39.DelegationAminoMsg): _39.Delegation;
                toAminoMsg(message: _39.Delegation): _39.DelegationAminoMsg;
                fromProtoMsg(message: _39.DelegationProtoMsg): _39.Delegation;
                toProto(message: _39.Delegation): Uint8Array;
                toProtoMsg(message: _39.Delegation): _39.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                encode(message: _39.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.UnbondingDelegation;
                fromPartial(object: Partial<_39.UnbondingDelegation>): _39.UnbondingDelegation;
                fromAmino(object: _39.UnbondingDelegationAmino): _39.UnbondingDelegation;
                toAmino(message: _39.UnbondingDelegation): _39.UnbondingDelegationAmino;
                fromAminoMsg(object: _39.UnbondingDelegationAminoMsg): _39.UnbondingDelegation;
                toAminoMsg(message: _39.UnbondingDelegation): _39.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _39.UnbondingDelegationProtoMsg): _39.UnbondingDelegation;
                toProto(message: _39.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _39.UnbondingDelegation): _39.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                encode(message: _39.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.UnbondingDelegationEntry;
                fromPartial(object: Partial<_39.UnbondingDelegationEntry>): _39.UnbondingDelegationEntry;
                fromAmino(object: _39.UnbondingDelegationEntryAmino): _39.UnbondingDelegationEntry;
                toAmino(message: _39.UnbondingDelegationEntry): _39.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _39.UnbondingDelegationEntryAminoMsg): _39.UnbondingDelegationEntry;
                toAminoMsg(message: _39.UnbondingDelegationEntry): _39.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _39.UnbondingDelegationEntryProtoMsg): _39.UnbondingDelegationEntry;
                toProto(message: _39.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _39.UnbondingDelegationEntry): _39.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                encode(message: _39.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.RedelegationEntry;
                fromPartial(object: Partial<_39.RedelegationEntry>): _39.RedelegationEntry;
                fromAmino(object: _39.RedelegationEntryAmino): _39.RedelegationEntry;
                toAmino(message: _39.RedelegationEntry): _39.RedelegationEntryAmino;
                fromAminoMsg(object: _39.RedelegationEntryAminoMsg): _39.RedelegationEntry;
                toAminoMsg(message: _39.RedelegationEntry): _39.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _39.RedelegationEntryProtoMsg): _39.RedelegationEntry;
                toProto(message: _39.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _39.RedelegationEntry): _39.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                encode(message: _39.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.Redelegation;
                fromPartial(object: Partial<_39.Redelegation>): _39.Redelegation;
                fromAmino(object: _39.RedelegationAmino): _39.Redelegation;
                toAmino(message: _39.Redelegation): _39.RedelegationAmino;
                fromAminoMsg(object: _39.RedelegationAminoMsg): _39.Redelegation;
                toAminoMsg(message: _39.Redelegation): _39.RedelegationAminoMsg;
                fromProtoMsg(message: _39.RedelegationProtoMsg): _39.Redelegation;
                toProto(message: _39.Redelegation): Uint8Array;
                toProtoMsg(message: _39.Redelegation): _39.RedelegationProtoMsg;
            };
            Params: {
                encode(message: _39.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.Params;
                fromPartial(object: Partial<_39.Params>): _39.Params;
                fromAmino(object: _39.ParamsAmino): _39.Params;
                toAmino(message: _39.Params): _39.ParamsAmino;
                fromAminoMsg(object: _39.ParamsAminoMsg): _39.Params;
                toAminoMsg(message: _39.Params): _39.ParamsAminoMsg;
                fromProtoMsg(message: _39.ParamsProtoMsg): _39.Params;
                toProto(message: _39.Params): Uint8Array;
                toProtoMsg(message: _39.Params): _39.ParamsProtoMsg;
            };
            DelegationResponse: {
                encode(message: _39.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.DelegationResponse;
                fromPartial(object: Partial<_39.DelegationResponse>): _39.DelegationResponse;
                fromAmino(object: _39.DelegationResponseAmino): _39.DelegationResponse;
                toAmino(message: _39.DelegationResponse): _39.DelegationResponseAmino;
                fromAminoMsg(object: _39.DelegationResponseAminoMsg): _39.DelegationResponse;
                toAminoMsg(message: _39.DelegationResponse): _39.DelegationResponseAminoMsg;
                fromProtoMsg(message: _39.DelegationResponseProtoMsg): _39.DelegationResponse;
                toProto(message: _39.DelegationResponse): Uint8Array;
                toProtoMsg(message: _39.DelegationResponse): _39.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                encode(message: _39.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.RedelegationEntryResponse;
                fromPartial(object: Partial<_39.RedelegationEntryResponse>): _39.RedelegationEntryResponse;
                fromAmino(object: _39.RedelegationEntryResponseAmino): _39.RedelegationEntryResponse;
                toAmino(message: _39.RedelegationEntryResponse): _39.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _39.RedelegationEntryResponseAminoMsg): _39.RedelegationEntryResponse;
                toAminoMsg(message: _39.RedelegationEntryResponse): _39.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _39.RedelegationEntryResponseProtoMsg): _39.RedelegationEntryResponse;
                toProto(message: _39.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _39.RedelegationEntryResponse): _39.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                encode(message: _39.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.RedelegationResponse;
                fromPartial(object: Partial<_39.RedelegationResponse>): _39.RedelegationResponse;
                fromAmino(object: _39.RedelegationResponseAmino): _39.RedelegationResponse;
                toAmino(message: _39.RedelegationResponse): _39.RedelegationResponseAmino;
                fromAminoMsg(object: _39.RedelegationResponseAminoMsg): _39.RedelegationResponse;
                toAminoMsg(message: _39.RedelegationResponse): _39.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _39.RedelegationResponseProtoMsg): _39.RedelegationResponse;
                toProto(message: _39.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _39.RedelegationResponse): _39.RedelegationResponseProtoMsg;
            };
            Pool: {
                encode(message: _39.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.Pool;
                fromPartial(object: Partial<_39.Pool>): _39.Pool;
                fromAmino(object: _39.PoolAmino): _39.Pool;
                toAmino(message: _39.Pool): _39.PoolAmino;
                fromAminoMsg(object: _39.PoolAminoMsg): _39.Pool;
                toAminoMsg(message: _39.Pool): _39.PoolAminoMsg;
                fromProtoMsg(message: _39.PoolProtoMsg): _39.Pool;
                toProto(message: _39.Pool): Uint8Array;
                toProtoMsg(message: _39.Pool): _39.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                encode(message: _38.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryValidatorsRequest;
                fromPartial(object: Partial<_38.QueryValidatorsRequest>): _38.QueryValidatorsRequest;
                fromAmino(object: _38.QueryValidatorsRequestAmino): _38.QueryValidatorsRequest;
                toAmino(message: _38.QueryValidatorsRequest): _38.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _38.QueryValidatorsRequestAminoMsg): _38.QueryValidatorsRequest;
                toAminoMsg(message: _38.QueryValidatorsRequest): _38.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _38.QueryValidatorsRequestProtoMsg): _38.QueryValidatorsRequest;
                toProto(message: _38.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryValidatorsRequest): _38.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                encode(message: _38.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryValidatorsResponse;
                fromPartial(object: Partial<_38.QueryValidatorsResponse>): _38.QueryValidatorsResponse;
                fromAmino(object: _38.QueryValidatorsResponseAmino): _38.QueryValidatorsResponse;
                toAmino(message: _38.QueryValidatorsResponse): _38.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _38.QueryValidatorsResponseAminoMsg): _38.QueryValidatorsResponse;
                toAminoMsg(message: _38.QueryValidatorsResponse): _38.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _38.QueryValidatorsResponseProtoMsg): _38.QueryValidatorsResponse;
                toProto(message: _38.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryValidatorsResponse): _38.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                encode(message: _38.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryValidatorRequest;
                fromPartial(object: Partial<_38.QueryValidatorRequest>): _38.QueryValidatorRequest;
                fromAmino(object: _38.QueryValidatorRequestAmino): _38.QueryValidatorRequest;
                toAmino(message: _38.QueryValidatorRequest): _38.QueryValidatorRequestAmino;
                fromAminoMsg(object: _38.QueryValidatorRequestAminoMsg): _38.QueryValidatorRequest;
                toAminoMsg(message: _38.QueryValidatorRequest): _38.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _38.QueryValidatorRequestProtoMsg): _38.QueryValidatorRequest;
                toProto(message: _38.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _38.QueryValidatorRequest): _38.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                encode(message: _38.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryValidatorResponse;
                fromPartial(object: Partial<_38.QueryValidatorResponse>): _38.QueryValidatorResponse;
                fromAmino(object: _38.QueryValidatorResponseAmino): _38.QueryValidatorResponse;
                toAmino(message: _38.QueryValidatorResponse): _38.QueryValidatorResponseAmino;
                fromAminoMsg(object: _38.QueryValidatorResponseAminoMsg): _38.QueryValidatorResponse;
                toAminoMsg(message: _38.QueryValidatorResponse): _38.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _38.QueryValidatorResponseProtoMsg): _38.QueryValidatorResponse;
                toProto(message: _38.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _38.QueryValidatorResponse): _38.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _38.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_38.QueryValidatorDelegationsRequest>): _38.QueryValidatorDelegationsRequest;
                fromAmino(object: _38.QueryValidatorDelegationsRequestAmino): _38.QueryValidatorDelegationsRequest;
                toAmino(message: _38.QueryValidatorDelegationsRequest): _38.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _38.QueryValidatorDelegationsRequestAminoMsg): _38.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _38.QueryValidatorDelegationsRequest): _38.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _38.QueryValidatorDelegationsRequestProtoMsg): _38.QueryValidatorDelegationsRequest;
                toProto(message: _38.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryValidatorDelegationsRequest): _38.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _38.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_38.QueryValidatorDelegationsResponse>): _38.QueryValidatorDelegationsResponse;
                fromAmino(object: _38.QueryValidatorDelegationsResponseAmino): _38.QueryValidatorDelegationsResponse;
                toAmino(message: _38.QueryValidatorDelegationsResponse): _38.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _38.QueryValidatorDelegationsResponseAminoMsg): _38.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _38.QueryValidatorDelegationsResponse): _38.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _38.QueryValidatorDelegationsResponseProtoMsg): _38.QueryValidatorDelegationsResponse;
                toProto(message: _38.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryValidatorDelegationsResponse): _38.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _38.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_38.QueryValidatorUnbondingDelegationsRequest>): _38.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _38.QueryValidatorUnbondingDelegationsRequestAmino): _38.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _38.QueryValidatorUnbondingDelegationsRequest): _38.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _38.QueryValidatorUnbondingDelegationsRequestAminoMsg): _38.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _38.QueryValidatorUnbondingDelegationsRequest): _38.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _38.QueryValidatorUnbondingDelegationsRequestProtoMsg): _38.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _38.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryValidatorUnbondingDelegationsRequest): _38.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _38.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_38.QueryValidatorUnbondingDelegationsResponse>): _38.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _38.QueryValidatorUnbondingDelegationsResponseAmino): _38.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _38.QueryValidatorUnbondingDelegationsResponse): _38.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _38.QueryValidatorUnbondingDelegationsResponseAminoMsg): _38.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _38.QueryValidatorUnbondingDelegationsResponse): _38.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _38.QueryValidatorUnbondingDelegationsResponseProtoMsg): _38.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _38.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryValidatorUnbondingDelegationsResponse): _38.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                encode(message: _38.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryDelegationRequest;
                fromPartial(object: Partial<_38.QueryDelegationRequest>): _38.QueryDelegationRequest;
                fromAmino(object: _38.QueryDelegationRequestAmino): _38.QueryDelegationRequest;
                toAmino(message: _38.QueryDelegationRequest): _38.QueryDelegationRequestAmino;
                fromAminoMsg(object: _38.QueryDelegationRequestAminoMsg): _38.QueryDelegationRequest;
                toAminoMsg(message: _38.QueryDelegationRequest): _38.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _38.QueryDelegationRequestProtoMsg): _38.QueryDelegationRequest;
                toProto(message: _38.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _38.QueryDelegationRequest): _38.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                encode(message: _38.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryDelegationResponse;
                fromPartial(object: Partial<_38.QueryDelegationResponse>): _38.QueryDelegationResponse;
                fromAmino(object: _38.QueryDelegationResponseAmino): _38.QueryDelegationResponse;
                toAmino(message: _38.QueryDelegationResponse): _38.QueryDelegationResponseAmino;
                fromAminoMsg(object: _38.QueryDelegationResponseAminoMsg): _38.QueryDelegationResponse;
                toAminoMsg(message: _38.QueryDelegationResponse): _38.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _38.QueryDelegationResponseProtoMsg): _38.QueryDelegationResponse;
                toProto(message: _38.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _38.QueryDelegationResponse): _38.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _38.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_38.QueryUnbondingDelegationRequest>): _38.QueryUnbondingDelegationRequest;
                fromAmino(object: _38.QueryUnbondingDelegationRequestAmino): _38.QueryUnbondingDelegationRequest;
                toAmino(message: _38.QueryUnbondingDelegationRequest): _38.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _38.QueryUnbondingDelegationRequestAminoMsg): _38.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _38.QueryUnbondingDelegationRequest): _38.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _38.QueryUnbondingDelegationRequestProtoMsg): _38.QueryUnbondingDelegationRequest;
                toProto(message: _38.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _38.QueryUnbondingDelegationRequest): _38.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _38.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_38.QueryUnbondingDelegationResponse>): _38.QueryUnbondingDelegationResponse;
                fromAmino(object: _38.QueryUnbondingDelegationResponseAmino): _38.QueryUnbondingDelegationResponse;
                toAmino(message: _38.QueryUnbondingDelegationResponse): _38.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _38.QueryUnbondingDelegationResponseAminoMsg): _38.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _38.QueryUnbondingDelegationResponse): _38.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _38.QueryUnbondingDelegationResponseProtoMsg): _38.QueryUnbondingDelegationResponse;
                toProto(message: _38.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _38.QueryUnbondingDelegationResponse): _38.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _38.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_38.QueryDelegatorDelegationsRequest>): _38.QueryDelegatorDelegationsRequest;
                fromAmino(object: _38.QueryDelegatorDelegationsRequestAmino): _38.QueryDelegatorDelegationsRequest;
                toAmino(message: _38.QueryDelegatorDelegationsRequest): _38.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _38.QueryDelegatorDelegationsRequestAminoMsg): _38.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _38.QueryDelegatorDelegationsRequest): _38.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _38.QueryDelegatorDelegationsRequestProtoMsg): _38.QueryDelegatorDelegationsRequest;
                toProto(message: _38.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryDelegatorDelegationsRequest): _38.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _38.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_38.QueryDelegatorDelegationsResponse>): _38.QueryDelegatorDelegationsResponse;
                fromAmino(object: _38.QueryDelegatorDelegationsResponseAmino): _38.QueryDelegatorDelegationsResponse;
                toAmino(message: _38.QueryDelegatorDelegationsResponse): _38.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _38.QueryDelegatorDelegationsResponseAminoMsg): _38.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _38.QueryDelegatorDelegationsResponse): _38.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _38.QueryDelegatorDelegationsResponseProtoMsg): _38.QueryDelegatorDelegationsResponse;
                toProto(message: _38.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryDelegatorDelegationsResponse): _38.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _38.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_38.QueryDelegatorUnbondingDelegationsRequest>): _38.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _38.QueryDelegatorUnbondingDelegationsRequestAmino): _38.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _38.QueryDelegatorUnbondingDelegationsRequest): _38.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _38.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _38.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _38.QueryDelegatorUnbondingDelegationsRequest): _38.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _38.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _38.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _38.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryDelegatorUnbondingDelegationsRequest): _38.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _38.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_38.QueryDelegatorUnbondingDelegationsResponse>): _38.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _38.QueryDelegatorUnbondingDelegationsResponseAmino): _38.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _38.QueryDelegatorUnbondingDelegationsResponse): _38.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _38.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _38.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _38.QueryDelegatorUnbondingDelegationsResponse): _38.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _38.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _38.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _38.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryDelegatorUnbondingDelegationsResponse): _38.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                encode(message: _38.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryRedelegationsRequest;
                fromPartial(object: Partial<_38.QueryRedelegationsRequest>): _38.QueryRedelegationsRequest;
                fromAmino(object: _38.QueryRedelegationsRequestAmino): _38.QueryRedelegationsRequest;
                toAmino(message: _38.QueryRedelegationsRequest): _38.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _38.QueryRedelegationsRequestAminoMsg): _38.QueryRedelegationsRequest;
                toAminoMsg(message: _38.QueryRedelegationsRequest): _38.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _38.QueryRedelegationsRequestProtoMsg): _38.QueryRedelegationsRequest;
                toProto(message: _38.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryRedelegationsRequest): _38.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                encode(message: _38.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryRedelegationsResponse;
                fromPartial(object: Partial<_38.QueryRedelegationsResponse>): _38.QueryRedelegationsResponse;
                fromAmino(object: _38.QueryRedelegationsResponseAmino): _38.QueryRedelegationsResponse;
                toAmino(message: _38.QueryRedelegationsResponse): _38.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _38.QueryRedelegationsResponseAminoMsg): _38.QueryRedelegationsResponse;
                toAminoMsg(message: _38.QueryRedelegationsResponse): _38.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _38.QueryRedelegationsResponseProtoMsg): _38.QueryRedelegationsResponse;
                toProto(message: _38.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryRedelegationsResponse): _38.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _38.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_38.QueryDelegatorValidatorsRequest>): _38.QueryDelegatorValidatorsRequest;
                fromAmino(object: _38.QueryDelegatorValidatorsRequestAmino): _38.QueryDelegatorValidatorsRequest;
                toAmino(message: _38.QueryDelegatorValidatorsRequest): _38.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _38.QueryDelegatorValidatorsRequestAminoMsg): _38.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _38.QueryDelegatorValidatorsRequest): _38.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _38.QueryDelegatorValidatorsRequestProtoMsg): _38.QueryDelegatorValidatorsRequest;
                toProto(message: _38.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryDelegatorValidatorsRequest): _38.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _38.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_38.QueryDelegatorValidatorsResponse>): _38.QueryDelegatorValidatorsResponse;
                fromAmino(object: _38.QueryDelegatorValidatorsResponseAmino): _38.QueryDelegatorValidatorsResponse;
                toAmino(message: _38.QueryDelegatorValidatorsResponse): _38.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _38.QueryDelegatorValidatorsResponseAminoMsg): _38.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _38.QueryDelegatorValidatorsResponse): _38.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _38.QueryDelegatorValidatorsResponseProtoMsg): _38.QueryDelegatorValidatorsResponse;
                toProto(message: _38.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryDelegatorValidatorsResponse): _38.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _38.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_38.QueryDelegatorValidatorRequest>): _38.QueryDelegatorValidatorRequest;
                fromAmino(object: _38.QueryDelegatorValidatorRequestAmino): _38.QueryDelegatorValidatorRequest;
                toAmino(message: _38.QueryDelegatorValidatorRequest): _38.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _38.QueryDelegatorValidatorRequestAminoMsg): _38.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _38.QueryDelegatorValidatorRequest): _38.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _38.QueryDelegatorValidatorRequestProtoMsg): _38.QueryDelegatorValidatorRequest;
                toProto(message: _38.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _38.QueryDelegatorValidatorRequest): _38.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _38.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_38.QueryDelegatorValidatorResponse>): _38.QueryDelegatorValidatorResponse;
                fromAmino(object: _38.QueryDelegatorValidatorResponseAmino): _38.QueryDelegatorValidatorResponse;
                toAmino(message: _38.QueryDelegatorValidatorResponse): _38.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _38.QueryDelegatorValidatorResponseAminoMsg): _38.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _38.QueryDelegatorValidatorResponse): _38.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _38.QueryDelegatorValidatorResponseProtoMsg): _38.QueryDelegatorValidatorResponse;
                toProto(message: _38.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _38.QueryDelegatorValidatorResponse): _38.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _38.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_38.QueryHistoricalInfoRequest>): _38.QueryHistoricalInfoRequest;
                fromAmino(object: _38.QueryHistoricalInfoRequestAmino): _38.QueryHistoricalInfoRequest;
                toAmino(message: _38.QueryHistoricalInfoRequest): _38.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _38.QueryHistoricalInfoRequestAminoMsg): _38.QueryHistoricalInfoRequest;
                toAminoMsg(message: _38.QueryHistoricalInfoRequest): _38.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _38.QueryHistoricalInfoRequestProtoMsg): _38.QueryHistoricalInfoRequest;
                toProto(message: _38.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _38.QueryHistoricalInfoRequest): _38.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _38.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_38.QueryHistoricalInfoResponse>): _38.QueryHistoricalInfoResponse;
                fromAmino(object: _38.QueryHistoricalInfoResponseAmino): _38.QueryHistoricalInfoResponse;
                toAmino(message: _38.QueryHistoricalInfoResponse): _38.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _38.QueryHistoricalInfoResponseAminoMsg): _38.QueryHistoricalInfoResponse;
                toAminoMsg(message: _38.QueryHistoricalInfoResponse): _38.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _38.QueryHistoricalInfoResponseProtoMsg): _38.QueryHistoricalInfoResponse;
                toProto(message: _38.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _38.QueryHistoricalInfoResponse): _38.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                encode(_: _38.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryPoolRequest;
                fromPartial(_: Partial<_38.QueryPoolRequest>): _38.QueryPoolRequest;
                fromAmino(_: _38.QueryPoolRequestAmino): _38.QueryPoolRequest;
                toAmino(_: _38.QueryPoolRequest): _38.QueryPoolRequestAmino;
                fromAminoMsg(object: _38.QueryPoolRequestAminoMsg): _38.QueryPoolRequest;
                toAminoMsg(message: _38.QueryPoolRequest): _38.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _38.QueryPoolRequestProtoMsg): _38.QueryPoolRequest;
                toProto(message: _38.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _38.QueryPoolRequest): _38.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                encode(message: _38.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryPoolResponse;
                fromPartial(object: Partial<_38.QueryPoolResponse>): _38.QueryPoolResponse;
                fromAmino(object: _38.QueryPoolResponseAmino): _38.QueryPoolResponse;
                toAmino(message: _38.QueryPoolResponse): _38.QueryPoolResponseAmino;
                fromAminoMsg(object: _38.QueryPoolResponseAminoMsg): _38.QueryPoolResponse;
                toAminoMsg(message: _38.QueryPoolResponse): _38.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _38.QueryPoolResponseProtoMsg): _38.QueryPoolResponse;
                toProto(message: _38.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _38.QueryPoolResponse): _38.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _38.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryParamsRequest;
                fromPartial(_: Partial<_38.QueryParamsRequest>): _38.QueryParamsRequest;
                fromAmino(_: _38.QueryParamsRequestAmino): _38.QueryParamsRequest;
                toAmino(_: _38.QueryParamsRequest): _38.QueryParamsRequestAmino;
                fromAminoMsg(object: _38.QueryParamsRequestAminoMsg): _38.QueryParamsRequest;
                toAminoMsg(message: _38.QueryParamsRequest): _38.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _38.QueryParamsRequestProtoMsg): _38.QueryParamsRequest;
                toProto(message: _38.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryParamsRequest): _38.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _38.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryParamsResponse;
                fromPartial(object: Partial<_38.QueryParamsResponse>): _38.QueryParamsResponse;
                fromAmino(object: _38.QueryParamsResponseAmino): _38.QueryParamsResponse;
                toAmino(message: _38.QueryParamsResponse): _38.QueryParamsResponseAmino;
                fromAminoMsg(object: _38.QueryParamsResponseAminoMsg): _38.QueryParamsResponse;
                toAminoMsg(message: _38.QueryParamsResponse): _38.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _38.QueryParamsResponseProtoMsg): _38.QueryParamsResponse;
                toProto(message: _38.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryParamsResponse): _38.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _37.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.GenesisState;
                fromPartial(object: Partial<_37.GenesisState>): _37.GenesisState;
                fromAmino(object: _37.GenesisStateAmino): _37.GenesisState;
                toAmino(message: _37.GenesisState): _37.GenesisStateAmino;
                fromAminoMsg(object: _37.GenesisStateAminoMsg): _37.GenesisState;
                toAminoMsg(message: _37.GenesisState): _37.GenesisStateAminoMsg;
                fromProtoMsg(message: _37.GenesisStateProtoMsg): _37.GenesisState;
                toProto(message: _37.GenesisState): Uint8Array;
                toProtoMsg(message: _37.GenesisState): _37.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                encode(message: _37.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.LastValidatorPower;
                fromPartial(object: Partial<_37.LastValidatorPower>): _37.LastValidatorPower;
                fromAmino(object: _37.LastValidatorPowerAmino): _37.LastValidatorPower;
                toAmino(message: _37.LastValidatorPower): _37.LastValidatorPowerAmino;
                fromAminoMsg(object: _37.LastValidatorPowerAminoMsg): _37.LastValidatorPower;
                toAminoMsg(message: _37.LastValidatorPower): _37.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _37.LastValidatorPowerProtoMsg): _37.LastValidatorPower;
                toProto(message: _37.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _37.LastValidatorPower): _37.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _36.AuthorizationType;
            authorizationTypeToJSON(object: _36.AuthorizationType): string;
            AuthorizationType: typeof _36.AuthorizationType;
            AuthorizationTypeSDKType: typeof _36.AuthorizationType;
            AuthorizationTypeAmino: typeof _36.AuthorizationType;
            StakeAuthorization: {
                encode(message: _36.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.StakeAuthorization;
                fromPartial(object: Partial<_36.StakeAuthorization>): _36.StakeAuthorization;
                fromAmino(object: _36.StakeAuthorizationAmino): _36.StakeAuthorization;
                toAmino(message: _36.StakeAuthorization): _36.StakeAuthorizationAmino;
                fromAminoMsg(object: _36.StakeAuthorizationAminoMsg): _36.StakeAuthorization;
                toAminoMsg(message: _36.StakeAuthorization): _36.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _36.StakeAuthorizationProtoMsg): _36.StakeAuthorization;
                toProto(message: _36.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _36.StakeAuthorization): _36.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                encode(message: _36.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.StakeAuthorization_Validators;
                fromPartial(object: Partial<_36.StakeAuthorization_Validators>): _36.StakeAuthorization_Validators;
                fromAmino(object: _36.StakeAuthorization_ValidatorsAmino): _36.StakeAuthorization_Validators;
                toAmino(message: _36.StakeAuthorization_Validators): _36.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _36.StakeAuthorization_ValidatorsAminoMsg): _36.StakeAuthorization_Validators;
                toAminoMsg(message: _36.StakeAuthorization_Validators): _36.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _36.StakeAuthorization_ValidatorsProtoMsg): _36.StakeAuthorization_Validators;
                toProto(message: _36.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _36.StakeAuthorization_Validators): _36.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _41.SignMode;
                signModeToJSON(object: _41.SignMode): string;
                SignMode: typeof _41.SignMode;
                SignModeSDKType: typeof _41.SignMode;
                SignModeAmino: typeof _41.SignMode;
                SignatureDescriptors: {
                    encode(message: _41.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.SignatureDescriptors;
                    fromPartial(object: Partial<_41.SignatureDescriptors>): _41.SignatureDescriptors;
                    fromAmino(object: _41.SignatureDescriptorsAmino): _41.SignatureDescriptors;
                    toAmino(message: _41.SignatureDescriptors): _41.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _41.SignatureDescriptorsAminoMsg): _41.SignatureDescriptors;
                    toAminoMsg(message: _41.SignatureDescriptors): _41.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _41.SignatureDescriptorsProtoMsg): _41.SignatureDescriptors;
                    toProto(message: _41.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _41.SignatureDescriptors): _41.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    encode(message: _41.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.SignatureDescriptor;
                    fromPartial(object: Partial<_41.SignatureDescriptor>): _41.SignatureDescriptor;
                    fromAmino(object: _41.SignatureDescriptorAmino): _41.SignatureDescriptor;
                    toAmino(message: _41.SignatureDescriptor): _41.SignatureDescriptorAmino;
                    fromAminoMsg(object: _41.SignatureDescriptorAminoMsg): _41.SignatureDescriptor;
                    toAminoMsg(message: _41.SignatureDescriptor): _41.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _41.SignatureDescriptorProtoMsg): _41.SignatureDescriptor;
                    toProto(message: _41.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _41.SignatureDescriptor): _41.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    encode(message: _41.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_41.SignatureDescriptor_Data>): _41.SignatureDescriptor_Data;
                    fromAmino(object: _41.SignatureDescriptor_DataAmino): _41.SignatureDescriptor_Data;
                    toAmino(message: _41.SignatureDescriptor_Data): _41.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _41.SignatureDescriptor_DataAminoMsg): _41.SignatureDescriptor_Data;
                    toAminoMsg(message: _41.SignatureDescriptor_Data): _41.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _41.SignatureDescriptor_DataProtoMsg): _41.SignatureDescriptor_Data;
                    toProto(message: _41.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _41.SignatureDescriptor_Data): _41.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _41.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_41.SignatureDescriptor_Data_Single>): _41.SignatureDescriptor_Data_Single;
                    fromAmino(object: _41.SignatureDescriptor_Data_SingleAmino): _41.SignatureDescriptor_Data_Single;
                    toAmino(message: _41.SignatureDescriptor_Data_Single): _41.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _41.SignatureDescriptor_Data_SingleAminoMsg): _41.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _41.SignatureDescriptor_Data_Single): _41.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _41.SignatureDescriptor_Data_SingleProtoMsg): _41.SignatureDescriptor_Data_Single;
                    toProto(message: _41.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _41.SignatureDescriptor_Data_Single): _41.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _41.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_41.SignatureDescriptor_Data_Multi>): _41.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _41.SignatureDescriptor_Data_MultiAmino): _41.SignatureDescriptor_Data_Multi;
                    toAmino(message: _41.SignatureDescriptor_Data_Multi): _41.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _41.SignatureDescriptor_Data_MultiAminoMsg): _41.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _41.SignatureDescriptor_Data_Multi): _41.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _41.SignatureDescriptor_Data_MultiProtoMsg): _41.SignatureDescriptor_Data_Multi;
                    toProto(message: _41.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _41.SignatureDescriptor_Data_Multi): _41.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _195.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _42.SimulateRequest): Promise<_42.SimulateResponse>;
                getTx(request: _42.GetTxRequest): Promise<_42.GetTxResponse>;
                broadcastTx(request: _42.BroadcastTxRequest): Promise<_42.BroadcastTxResponse>;
                getTxsEvent(request: _42.GetTxsEventRequest): Promise<_42.GetTxsEventResponse>;
                getBlockWithTxs(request: _42.GetBlockWithTxsRequest): Promise<_42.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _186.LCDQueryClient;
            Tx: {
                encode(message: _43.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.Tx;
                fromPartial(object: Partial<_43.Tx>): _43.Tx;
                fromAmino(object: _43.TxAmino): _43.Tx;
                toAmino(message: _43.Tx): _43.TxAmino;
                fromAminoMsg(object: _43.TxAminoMsg): _43.Tx;
                toAminoMsg(message: _43.Tx): _43.TxAminoMsg;
                fromProtoMsg(message: _43.TxProtoMsg): _43.Tx;
                toProto(message: _43.Tx): Uint8Array;
                toProtoMsg(message: _43.Tx): _43.TxProtoMsg;
            };
            TxRaw: {
                encode(message: _43.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.TxRaw;
                fromPartial(object: Partial<_43.TxRaw>): _43.TxRaw;
                fromAmino(object: _43.TxRawAmino): _43.TxRaw;
                toAmino(message: _43.TxRaw): _43.TxRawAmino;
                fromAminoMsg(object: _43.TxRawAminoMsg): _43.TxRaw;
                toAminoMsg(message: _43.TxRaw): _43.TxRawAminoMsg;
                fromProtoMsg(message: _43.TxRawProtoMsg): _43.TxRaw;
                toProto(message: _43.TxRaw): Uint8Array;
                toProtoMsg(message: _43.TxRaw): _43.TxRawProtoMsg;
            };
            SignDoc: {
                encode(message: _43.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.SignDoc;
                fromPartial(object: Partial<_43.SignDoc>): _43.SignDoc;
                fromAmino(object: _43.SignDocAmino): _43.SignDoc;
                toAmino(message: _43.SignDoc): _43.SignDocAmino;
                fromAminoMsg(object: _43.SignDocAminoMsg): _43.SignDoc;
                toAminoMsg(message: _43.SignDoc): _43.SignDocAminoMsg;
                fromProtoMsg(message: _43.SignDocProtoMsg): _43.SignDoc;
                toProto(message: _43.SignDoc): Uint8Array;
                toProtoMsg(message: _43.SignDoc): _43.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                encode(message: _43.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.SignDocDirectAux;
                fromPartial(object: Partial<_43.SignDocDirectAux>): _43.SignDocDirectAux;
                fromAmino(object: _43.SignDocDirectAuxAmino): _43.SignDocDirectAux;
                toAmino(message: _43.SignDocDirectAux): _43.SignDocDirectAuxAmino;
                fromAminoMsg(object: _43.SignDocDirectAuxAminoMsg): _43.SignDocDirectAux;
                toAminoMsg(message: _43.SignDocDirectAux): _43.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _43.SignDocDirectAuxProtoMsg): _43.SignDocDirectAux;
                toProto(message: _43.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _43.SignDocDirectAux): _43.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                encode(message: _43.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.TxBody;
                fromPartial(object: Partial<_43.TxBody>): _43.TxBody;
                fromAmino(object: _43.TxBodyAmino): _43.TxBody;
                toAmino(message: _43.TxBody): _43.TxBodyAmino;
                fromAminoMsg(object: _43.TxBodyAminoMsg): _43.TxBody;
                toAminoMsg(message: _43.TxBody): _43.TxBodyAminoMsg;
                fromProtoMsg(message: _43.TxBodyProtoMsg): _43.TxBody;
                toProto(message: _43.TxBody): Uint8Array;
                toProtoMsg(message: _43.TxBody): _43.TxBodyProtoMsg;
            };
            AuthInfo: {
                encode(message: _43.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.AuthInfo;
                fromPartial(object: Partial<_43.AuthInfo>): _43.AuthInfo;
                fromAmino(object: _43.AuthInfoAmino): _43.AuthInfo;
                toAmino(message: _43.AuthInfo): _43.AuthInfoAmino;
                fromAminoMsg(object: _43.AuthInfoAminoMsg): _43.AuthInfo;
                toAminoMsg(message: _43.AuthInfo): _43.AuthInfoAminoMsg;
                fromProtoMsg(message: _43.AuthInfoProtoMsg): _43.AuthInfo;
                toProto(message: _43.AuthInfo): Uint8Array;
                toProtoMsg(message: _43.AuthInfo): _43.AuthInfoProtoMsg;
            };
            SignerInfo: {
                encode(message: _43.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.SignerInfo;
                fromPartial(object: Partial<_43.SignerInfo>): _43.SignerInfo;
                fromAmino(object: _43.SignerInfoAmino): _43.SignerInfo;
                toAmino(message: _43.SignerInfo): _43.SignerInfoAmino;
                fromAminoMsg(object: _43.SignerInfoAminoMsg): _43.SignerInfo;
                toAminoMsg(message: _43.SignerInfo): _43.SignerInfoAminoMsg;
                fromProtoMsg(message: _43.SignerInfoProtoMsg): _43.SignerInfo;
                toProto(message: _43.SignerInfo): Uint8Array;
                toProtoMsg(message: _43.SignerInfo): _43.SignerInfoProtoMsg;
            };
            ModeInfo: {
                encode(message: _43.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.ModeInfo;
                fromPartial(object: Partial<_43.ModeInfo>): _43.ModeInfo;
                fromAmino(object: _43.ModeInfoAmino): _43.ModeInfo;
                toAmino(message: _43.ModeInfo): _43.ModeInfoAmino;
                fromAminoMsg(object: _43.ModeInfoAminoMsg): _43.ModeInfo;
                toAminoMsg(message: _43.ModeInfo): _43.ModeInfoAminoMsg;
                fromProtoMsg(message: _43.ModeInfoProtoMsg): _43.ModeInfo;
                toProto(message: _43.ModeInfo): Uint8Array;
                toProtoMsg(message: _43.ModeInfo): _43.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                encode(message: _43.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.ModeInfo_Single;
                fromPartial(object: Partial<_43.ModeInfo_Single>): _43.ModeInfo_Single;
                fromAmino(object: _43.ModeInfo_SingleAmino): _43.ModeInfo_Single;
                toAmino(message: _43.ModeInfo_Single): _43.ModeInfo_SingleAmino;
                fromAminoMsg(object: _43.ModeInfo_SingleAminoMsg): _43.ModeInfo_Single;
                toAminoMsg(message: _43.ModeInfo_Single): _43.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _43.ModeInfo_SingleProtoMsg): _43.ModeInfo_Single;
                toProto(message: _43.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _43.ModeInfo_Single): _43.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                encode(message: _43.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.ModeInfo_Multi;
                fromPartial(object: Partial<_43.ModeInfo_Multi>): _43.ModeInfo_Multi;
                fromAmino(object: _43.ModeInfo_MultiAmino): _43.ModeInfo_Multi;
                toAmino(message: _43.ModeInfo_Multi): _43.ModeInfo_MultiAmino;
                fromAminoMsg(object: _43.ModeInfo_MultiAminoMsg): _43.ModeInfo_Multi;
                toAminoMsg(message: _43.ModeInfo_Multi): _43.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _43.ModeInfo_MultiProtoMsg): _43.ModeInfo_Multi;
                toProto(message: _43.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _43.ModeInfo_Multi): _43.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                encode(message: _43.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.Fee;
                fromPartial(object: Partial<_43.Fee>): _43.Fee;
                fromAmino(object: _43.FeeAmino): _43.Fee;
                toAmino(message: _43.Fee): _43.FeeAmino;
                fromAminoMsg(object: _43.FeeAminoMsg): _43.Fee;
                toAminoMsg(message: _43.Fee): _43.FeeAminoMsg;
                fromProtoMsg(message: _43.FeeProtoMsg): _43.Fee;
                toProto(message: _43.Fee): Uint8Array;
                toProtoMsg(message: _43.Fee): _43.FeeProtoMsg;
            };
            Tip: {
                encode(message: _43.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.Tip;
                fromPartial(object: Partial<_43.Tip>): _43.Tip;
                fromAmino(object: _43.TipAmino): _43.Tip;
                toAmino(message: _43.Tip): _43.TipAmino;
                fromAminoMsg(object: _43.TipAminoMsg): _43.Tip;
                toAminoMsg(message: _43.Tip): _43.TipAminoMsg;
                fromProtoMsg(message: _43.TipProtoMsg): _43.Tip;
                toProto(message: _43.Tip): Uint8Array;
                toProtoMsg(message: _43.Tip): _43.TipProtoMsg;
            };
            AuxSignerData: {
                encode(message: _43.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.AuxSignerData;
                fromPartial(object: Partial<_43.AuxSignerData>): _43.AuxSignerData;
                fromAmino(object: _43.AuxSignerDataAmino): _43.AuxSignerData;
                toAmino(message: _43.AuxSignerData): _43.AuxSignerDataAmino;
                fromAminoMsg(object: _43.AuxSignerDataAminoMsg): _43.AuxSignerData;
                toAminoMsg(message: _43.AuxSignerData): _43.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _43.AuxSignerDataProtoMsg): _43.AuxSignerData;
                toProto(message: _43.AuxSignerData): Uint8Array;
                toProtoMsg(message: _43.AuxSignerData): _43.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _42.OrderBy;
            orderByToJSON(object: _42.OrderBy): string;
            broadcastModeFromJSON(object: any): _42.BroadcastMode;
            broadcastModeToJSON(object: _42.BroadcastMode): string;
            OrderBy: typeof _42.OrderBy;
            OrderBySDKType: typeof _42.OrderBy;
            OrderByAmino: typeof _42.OrderBy;
            BroadcastMode: typeof _42.BroadcastMode;
            BroadcastModeSDKType: typeof _42.BroadcastMode;
            BroadcastModeAmino: typeof _42.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _42.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.GetTxsEventRequest;
                fromPartial(object: Partial<_42.GetTxsEventRequest>): _42.GetTxsEventRequest;
                fromAmino(object: _42.GetTxsEventRequestAmino): _42.GetTxsEventRequest;
                toAmino(message: _42.GetTxsEventRequest): _42.GetTxsEventRequestAmino;
                fromAminoMsg(object: _42.GetTxsEventRequestAminoMsg): _42.GetTxsEventRequest;
                toAminoMsg(message: _42.GetTxsEventRequest): _42.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _42.GetTxsEventRequestProtoMsg): _42.GetTxsEventRequest;
                toProto(message: _42.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _42.GetTxsEventRequest): _42.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                encode(message: _42.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.GetTxsEventResponse;
                fromPartial(object: Partial<_42.GetTxsEventResponse>): _42.GetTxsEventResponse;
                fromAmino(object: _42.GetTxsEventResponseAmino): _42.GetTxsEventResponse;
                toAmino(message: _42.GetTxsEventResponse): _42.GetTxsEventResponseAmino;
                fromAminoMsg(object: _42.GetTxsEventResponseAminoMsg): _42.GetTxsEventResponse;
                toAminoMsg(message: _42.GetTxsEventResponse): _42.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _42.GetTxsEventResponseProtoMsg): _42.GetTxsEventResponse;
                toProto(message: _42.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _42.GetTxsEventResponse): _42.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                encode(message: _42.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.BroadcastTxRequest;
                fromPartial(object: Partial<_42.BroadcastTxRequest>): _42.BroadcastTxRequest;
                fromAmino(object: _42.BroadcastTxRequestAmino): _42.BroadcastTxRequest;
                toAmino(message: _42.BroadcastTxRequest): _42.BroadcastTxRequestAmino;
                fromAminoMsg(object: _42.BroadcastTxRequestAminoMsg): _42.BroadcastTxRequest;
                toAminoMsg(message: _42.BroadcastTxRequest): _42.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _42.BroadcastTxRequestProtoMsg): _42.BroadcastTxRequest;
                toProto(message: _42.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _42.BroadcastTxRequest): _42.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                encode(message: _42.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.BroadcastTxResponse;
                fromPartial(object: Partial<_42.BroadcastTxResponse>): _42.BroadcastTxResponse;
                fromAmino(object: _42.BroadcastTxResponseAmino): _42.BroadcastTxResponse;
                toAmino(message: _42.BroadcastTxResponse): _42.BroadcastTxResponseAmino;
                fromAminoMsg(object: _42.BroadcastTxResponseAminoMsg): _42.BroadcastTxResponse;
                toAminoMsg(message: _42.BroadcastTxResponse): _42.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _42.BroadcastTxResponseProtoMsg): _42.BroadcastTxResponse;
                toProto(message: _42.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _42.BroadcastTxResponse): _42.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                encode(message: _42.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.SimulateRequest;
                fromPartial(object: Partial<_42.SimulateRequest>): _42.SimulateRequest;
                fromAmino(object: _42.SimulateRequestAmino): _42.SimulateRequest;
                toAmino(message: _42.SimulateRequest): _42.SimulateRequestAmino;
                fromAminoMsg(object: _42.SimulateRequestAminoMsg): _42.SimulateRequest;
                toAminoMsg(message: _42.SimulateRequest): _42.SimulateRequestAminoMsg;
                fromProtoMsg(message: _42.SimulateRequestProtoMsg): _42.SimulateRequest;
                toProto(message: _42.SimulateRequest): Uint8Array;
                toProtoMsg(message: _42.SimulateRequest): _42.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                encode(message: _42.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.SimulateResponse;
                fromPartial(object: Partial<_42.SimulateResponse>): _42.SimulateResponse;
                fromAmino(object: _42.SimulateResponseAmino): _42.SimulateResponse;
                toAmino(message: _42.SimulateResponse): _42.SimulateResponseAmino;
                fromAminoMsg(object: _42.SimulateResponseAminoMsg): _42.SimulateResponse;
                toAminoMsg(message: _42.SimulateResponse): _42.SimulateResponseAminoMsg;
                fromProtoMsg(message: _42.SimulateResponseProtoMsg): _42.SimulateResponse;
                toProto(message: _42.SimulateResponse): Uint8Array;
                toProtoMsg(message: _42.SimulateResponse): _42.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                encode(message: _42.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.GetTxRequest;
                fromPartial(object: Partial<_42.GetTxRequest>): _42.GetTxRequest;
                fromAmino(object: _42.GetTxRequestAmino): _42.GetTxRequest;
                toAmino(message: _42.GetTxRequest): _42.GetTxRequestAmino;
                fromAminoMsg(object: _42.GetTxRequestAminoMsg): _42.GetTxRequest;
                toAminoMsg(message: _42.GetTxRequest): _42.GetTxRequestAminoMsg;
                fromProtoMsg(message: _42.GetTxRequestProtoMsg): _42.GetTxRequest;
                toProto(message: _42.GetTxRequest): Uint8Array;
                toProtoMsg(message: _42.GetTxRequest): _42.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                encode(message: _42.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.GetTxResponse;
                fromPartial(object: Partial<_42.GetTxResponse>): _42.GetTxResponse;
                fromAmino(object: _42.GetTxResponseAmino): _42.GetTxResponse;
                toAmino(message: _42.GetTxResponse): _42.GetTxResponseAmino;
                fromAminoMsg(object: _42.GetTxResponseAminoMsg): _42.GetTxResponse;
                toAminoMsg(message: _42.GetTxResponse): _42.GetTxResponseAminoMsg;
                fromProtoMsg(message: _42.GetTxResponseProtoMsg): _42.GetTxResponse;
                toProto(message: _42.GetTxResponse): Uint8Array;
                toProtoMsg(message: _42.GetTxResponse): _42.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                encode(message: _42.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_42.GetBlockWithTxsRequest>): _42.GetBlockWithTxsRequest;
                fromAmino(object: _42.GetBlockWithTxsRequestAmino): _42.GetBlockWithTxsRequest;
                toAmino(message: _42.GetBlockWithTxsRequest): _42.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _42.GetBlockWithTxsRequestAminoMsg): _42.GetBlockWithTxsRequest;
                toAminoMsg(message: _42.GetBlockWithTxsRequest): _42.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _42.GetBlockWithTxsRequestProtoMsg): _42.GetBlockWithTxsRequest;
                toProto(message: _42.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _42.GetBlockWithTxsRequest): _42.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                encode(message: _42.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_42.GetBlockWithTxsResponse>): _42.GetBlockWithTxsResponse;
                fromAmino(object: _42.GetBlockWithTxsResponseAmino): _42.GetBlockWithTxsResponse;
                toAmino(message: _42.GetBlockWithTxsResponse): _42.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _42.GetBlockWithTxsResponseAminoMsg): _42.GetBlockWithTxsResponse;
                toAminoMsg(message: _42.GetBlockWithTxsResponse): _42.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _42.GetBlockWithTxsResponseProtoMsg): _42.GetBlockWithTxsResponse;
                toProto(message: _42.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _42.GetBlockWithTxsResponse): _42.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _204.MsgClientImpl;
            QueryClientImpl: typeof _196.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _44.QueryCurrentPlanRequest): Promise<_44.QueryCurrentPlanResponse>;
                appliedPlan(request: _44.QueryAppliedPlanRequest): Promise<_44.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _44.QueryUpgradedConsensusStateRequest): Promise<_44.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _44.QueryModuleVersionsRequest): Promise<_44.QueryModuleVersionsResponse>;
                authority(request?: _44.QueryAuthorityRequest): Promise<_44.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _187.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _45.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _45.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _45.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _45.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _45.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _45.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _45.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _45.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _45.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _45.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _45.MsgSoftwareUpgrade) => _45.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _45.MsgSoftwareUpgradeAmino) => _45.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _45.MsgCancelUpgrade) => _45.MsgCancelUpgradeAmino;
                    fromAmino: (object: _45.MsgCancelUpgradeAmino) => _45.MsgCancelUpgrade;
                };
            };
            Plan: {
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
            MsgSoftwareUpgrade: {
                encode(message: _45.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_45.MsgSoftwareUpgrade>): _45.MsgSoftwareUpgrade;
                fromAmino(object: _45.MsgSoftwareUpgradeAmino): _45.MsgSoftwareUpgrade;
                toAmino(message: _45.MsgSoftwareUpgrade): _45.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _45.MsgSoftwareUpgradeAminoMsg): _45.MsgSoftwareUpgrade;
                toAminoMsg(message: _45.MsgSoftwareUpgrade): _45.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _45.MsgSoftwareUpgradeProtoMsg): _45.MsgSoftwareUpgrade;
                toProto(message: _45.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _45.MsgSoftwareUpgrade): _45.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _45.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_45.MsgSoftwareUpgradeResponse>): _45.MsgSoftwareUpgradeResponse;
                fromAmino(_: _45.MsgSoftwareUpgradeResponseAmino): _45.MsgSoftwareUpgradeResponse;
                toAmino(_: _45.MsgSoftwareUpgradeResponse): _45.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _45.MsgSoftwareUpgradeResponseAminoMsg): _45.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _45.MsgSoftwareUpgradeResponse): _45.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _45.MsgSoftwareUpgradeResponseProtoMsg): _45.MsgSoftwareUpgradeResponse;
                toProto(message: _45.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _45.MsgSoftwareUpgradeResponse): _45.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                encode(message: _45.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgCancelUpgrade;
                fromPartial(object: Partial<_45.MsgCancelUpgrade>): _45.MsgCancelUpgrade;
                fromAmino(object: _45.MsgCancelUpgradeAmino): _45.MsgCancelUpgrade;
                toAmino(message: _45.MsgCancelUpgrade): _45.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _45.MsgCancelUpgradeAminoMsg): _45.MsgCancelUpgrade;
                toAminoMsg(message: _45.MsgCancelUpgrade): _45.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _45.MsgCancelUpgradeProtoMsg): _45.MsgCancelUpgrade;
                toProto(message: _45.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _45.MsgCancelUpgrade): _45.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _45.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_45.MsgCancelUpgradeResponse>): _45.MsgCancelUpgradeResponse;
                fromAmino(_: _45.MsgCancelUpgradeResponseAmino): _45.MsgCancelUpgradeResponse;
                toAmino(_: _45.MsgCancelUpgradeResponse): _45.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _45.MsgCancelUpgradeResponseAminoMsg): _45.MsgCancelUpgradeResponse;
                toAminoMsg(message: _45.MsgCancelUpgradeResponse): _45.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _45.MsgCancelUpgradeResponseProtoMsg): _45.MsgCancelUpgradeResponse;
                toProto(message: _45.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _45.MsgCancelUpgradeResponse): _45.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                encode(_: _44.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_44.QueryCurrentPlanRequest>): _44.QueryCurrentPlanRequest;
                fromAmino(_: _44.QueryCurrentPlanRequestAmino): _44.QueryCurrentPlanRequest;
                toAmino(_: _44.QueryCurrentPlanRequest): _44.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _44.QueryCurrentPlanRequestAminoMsg): _44.QueryCurrentPlanRequest;
                toAminoMsg(message: _44.QueryCurrentPlanRequest): _44.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _44.QueryCurrentPlanRequestProtoMsg): _44.QueryCurrentPlanRequest;
                toProto(message: _44.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _44.QueryCurrentPlanRequest): _44.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                encode(message: _44.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_44.QueryCurrentPlanResponse>): _44.QueryCurrentPlanResponse;
                fromAmino(object: _44.QueryCurrentPlanResponseAmino): _44.QueryCurrentPlanResponse;
                toAmino(message: _44.QueryCurrentPlanResponse): _44.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _44.QueryCurrentPlanResponseAminoMsg): _44.QueryCurrentPlanResponse;
                toAminoMsg(message: _44.QueryCurrentPlanResponse): _44.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _44.QueryCurrentPlanResponseProtoMsg): _44.QueryCurrentPlanResponse;
                toProto(message: _44.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _44.QueryCurrentPlanResponse): _44.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                encode(message: _44.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_44.QueryAppliedPlanRequest>): _44.QueryAppliedPlanRequest;
                fromAmino(object: _44.QueryAppliedPlanRequestAmino): _44.QueryAppliedPlanRequest;
                toAmino(message: _44.QueryAppliedPlanRequest): _44.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _44.QueryAppliedPlanRequestAminoMsg): _44.QueryAppliedPlanRequest;
                toAminoMsg(message: _44.QueryAppliedPlanRequest): _44.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _44.QueryAppliedPlanRequestProtoMsg): _44.QueryAppliedPlanRequest;
                toProto(message: _44.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _44.QueryAppliedPlanRequest): _44.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                encode(message: _44.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_44.QueryAppliedPlanResponse>): _44.QueryAppliedPlanResponse;
                fromAmino(object: _44.QueryAppliedPlanResponseAmino): _44.QueryAppliedPlanResponse;
                toAmino(message: _44.QueryAppliedPlanResponse): _44.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _44.QueryAppliedPlanResponseAminoMsg): _44.QueryAppliedPlanResponse;
                toAminoMsg(message: _44.QueryAppliedPlanResponse): _44.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _44.QueryAppliedPlanResponseProtoMsg): _44.QueryAppliedPlanResponse;
                toProto(message: _44.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _44.QueryAppliedPlanResponse): _44.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _44.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_44.QueryUpgradedConsensusStateRequest>): _44.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _44.QueryUpgradedConsensusStateRequestAmino): _44.QueryUpgradedConsensusStateRequest;
                toAmino(message: _44.QueryUpgradedConsensusStateRequest): _44.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _44.QueryUpgradedConsensusStateRequestAminoMsg): _44.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _44.QueryUpgradedConsensusStateRequest): _44.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _44.QueryUpgradedConsensusStateRequestProtoMsg): _44.QueryUpgradedConsensusStateRequest;
                toProto(message: _44.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _44.QueryUpgradedConsensusStateRequest): _44.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _44.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_44.QueryUpgradedConsensusStateResponse>): _44.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _44.QueryUpgradedConsensusStateResponseAmino): _44.QueryUpgradedConsensusStateResponse;
                toAmino(message: _44.QueryUpgradedConsensusStateResponse): _44.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _44.QueryUpgradedConsensusStateResponseAminoMsg): _44.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _44.QueryUpgradedConsensusStateResponse): _44.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _44.QueryUpgradedConsensusStateResponseProtoMsg): _44.QueryUpgradedConsensusStateResponse;
                toProto(message: _44.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _44.QueryUpgradedConsensusStateResponse): _44.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                encode(message: _44.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_44.QueryModuleVersionsRequest>): _44.QueryModuleVersionsRequest;
                fromAmino(object: _44.QueryModuleVersionsRequestAmino): _44.QueryModuleVersionsRequest;
                toAmino(message: _44.QueryModuleVersionsRequest): _44.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _44.QueryModuleVersionsRequestAminoMsg): _44.QueryModuleVersionsRequest;
                toAminoMsg(message: _44.QueryModuleVersionsRequest): _44.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _44.QueryModuleVersionsRequestProtoMsg): _44.QueryModuleVersionsRequest;
                toProto(message: _44.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _44.QueryModuleVersionsRequest): _44.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                encode(message: _44.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_44.QueryModuleVersionsResponse>): _44.QueryModuleVersionsResponse;
                fromAmino(object: _44.QueryModuleVersionsResponseAmino): _44.QueryModuleVersionsResponse;
                toAmino(message: _44.QueryModuleVersionsResponse): _44.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _44.QueryModuleVersionsResponseAminoMsg): _44.QueryModuleVersionsResponse;
                toAminoMsg(message: _44.QueryModuleVersionsResponse): _44.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _44.QueryModuleVersionsResponseProtoMsg): _44.QueryModuleVersionsResponse;
                toProto(message: _44.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _44.QueryModuleVersionsResponse): _44.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                encode(_: _44.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryAuthorityRequest;
                fromPartial(_: Partial<_44.QueryAuthorityRequest>): _44.QueryAuthorityRequest;
                fromAmino(_: _44.QueryAuthorityRequestAmino): _44.QueryAuthorityRequest;
                toAmino(_: _44.QueryAuthorityRequest): _44.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _44.QueryAuthorityRequestAminoMsg): _44.QueryAuthorityRequest;
                toAminoMsg(message: _44.QueryAuthorityRequest): _44.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _44.QueryAuthorityRequestProtoMsg): _44.QueryAuthorityRequest;
                toProto(message: _44.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _44.QueryAuthorityRequest): _44.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                encode(message: _44.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryAuthorityResponse;
                fromPartial(object: Partial<_44.QueryAuthorityResponse>): _44.QueryAuthorityResponse;
                fromAmino(object: _44.QueryAuthorityResponseAmino): _44.QueryAuthorityResponse;
                toAmino(message: _44.QueryAuthorityResponse): _44.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _44.QueryAuthorityResponseAminoMsg): _44.QueryAuthorityResponse;
                toAminoMsg(message: _44.QueryAuthorityResponse): _44.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _44.QueryAuthorityResponseProtoMsg): _44.QueryAuthorityResponse;
                toProto(message: _44.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _44.QueryAuthorityResponse): _44.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _198.MsgClientImpl;
                };
                bank: {
                    v1beta1: _199.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _200.MsgClientImpl;
                };
                gov: {
                    v1: _201.MsgClientImpl;
                    v1beta1: _202.MsgClientImpl;
                };
                staking: {
                    v1beta1: _203.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _204.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: {
                        grants(request: _6.QueryGrantsRequest): Promise<_6.QueryGrantsResponse>;
                        granterGrants(request: _6.QueryGranterGrantsRequest): Promise<_6.QueryGranterGrantsResponse>;
                        granteeGrants(request: _6.QueryGranteeGrantsRequest): Promise<_6.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _11.QueryBalanceRequest): Promise<_11.QueryBalanceResponse>;
                        allBalances(request: _11.QueryAllBalancesRequest): Promise<_11.QueryAllBalancesResponse>;
                        spendableBalances(request: _11.QuerySpendableBalancesRequest): Promise<_11.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _11.QueryTotalSupplyRequest): Promise<_11.QueryTotalSupplyResponse>;
                        supplyOf(request: _11.QuerySupplyOfRequest): Promise<_11.QuerySupplyOfResponse>;
                        params(request?: _11.QueryParamsRequest): Promise<_11.QueryParamsResponse>;
                        denomMetadata(request: _11.QueryDenomMetadataRequest): Promise<_11.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _11.QueryDenomsMetadataRequest): Promise<_11.QueryDenomsMetadataResponse>;
                        denomOwners(request: _11.QueryDenomOwnersRequest): Promise<_11.QueryDenomOwnersResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _26.QueryParamsRequest): Promise<_26.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _26.QueryValidatorOutstandingRewardsRequest): Promise<_26.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _26.QueryValidatorCommissionRequest): Promise<_26.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _26.QueryValidatorSlashesRequest): Promise<_26.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _26.QueryDelegationRewardsRequest): Promise<_26.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _26.QueryDelegationTotalRewardsRequest): Promise<_26.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _26.QueryDelegatorValidatorsRequest): Promise<_26.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _26.QueryDelegatorWithdrawAddressRequest): Promise<_26.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _26.QueryCommunityPoolRequest): Promise<_26.QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _30.QueryProposalRequest): Promise<_30.QueryProposalResponse>;
                        proposals(request: _30.QueryProposalsRequest): Promise<_30.QueryProposalsResponse>;
                        vote(request: _30.QueryVoteRequest): Promise<_30.QueryVoteResponse>;
                        votes(request: _30.QueryVotesRequest): Promise<_30.QueryVotesResponse>;
                        params(request: _30.QueryParamsRequest): Promise<_30.QueryParamsResponse>;
                        deposit(request: _30.QueryDepositRequest): Promise<_30.QueryDepositResponse>;
                        deposits(request: _30.QueryDepositsRequest): Promise<_30.QueryDepositsResponse>;
                        tallyResult(request: _30.QueryTallyResultRequest): Promise<_30.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _34.QueryProposalRequest): Promise<_34.QueryProposalResponse>;
                        proposals(request: _34.QueryProposalsRequest): Promise<_34.QueryProposalsResponse>;
                        vote(request: _34.QueryVoteRequest): Promise<_34.QueryVoteResponse>;
                        votes(request: _34.QueryVotesRequest): Promise<_34.QueryVotesResponse>;
                        params(request: _34.QueryParamsRequest): Promise<_34.QueryParamsResponse>;
                        deposit(request: _34.QueryDepositRequest): Promise<_34.QueryDepositResponse>;
                        deposits(request: _34.QueryDepositsRequest): Promise<_34.QueryDepositsResponse>;
                        tallyResult(request: _34.QueryTallyResultRequest): Promise<_34.QueryTallyResultResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _38.QueryValidatorsRequest): Promise<_38.QueryValidatorsResponse>;
                        validator(request: _38.QueryValidatorRequest): Promise<_38.QueryValidatorResponse>;
                        validatorDelegations(request: _38.QueryValidatorDelegationsRequest): Promise<_38.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _38.QueryValidatorUnbondingDelegationsRequest): Promise<_38.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _38.QueryDelegationRequest): Promise<_38.QueryDelegationResponse>;
                        unbondingDelegation(request: _38.QueryUnbondingDelegationRequest): Promise<_38.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _38.QueryDelegatorDelegationsRequest): Promise<_38.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _38.QueryDelegatorUnbondingDelegationsRequest): Promise<_38.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _38.QueryRedelegationsRequest): Promise<_38.QueryRedelegationsResponse>;
                        delegatorValidators(request: _38.QueryDelegatorValidatorsRequest): Promise<_38.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _38.QueryDelegatorValidatorRequest): Promise<_38.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _38.QueryHistoricalInfoRequest): Promise<_38.QueryHistoricalInfoResponse>;
                        pool(request?: _38.QueryPoolRequest): Promise<_38.QueryPoolResponse>;
                        params(request?: _38.QueryParamsRequest): Promise<_38.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _42.SimulateRequest): Promise<_42.SimulateResponse>;
                        getTx(request: _42.GetTxRequest): Promise<_42.GetTxResponse>;
                        broadcastTx(request: _42.BroadcastTxRequest): Promise<_42.BroadcastTxResponse>;
                        getTxsEvent(request: _42.GetTxsEventRequest): Promise<_42.GetTxsEventResponse>;
                        getBlockWithTxs(request: _42.GetBlockWithTxsRequest): Promise<_42.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _44.QueryCurrentPlanRequest): Promise<_44.QueryCurrentPlanResponse>;
                        appliedPlan(request: _44.QueryAppliedPlanRequest): Promise<_44.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _44.QueryUpgradedConsensusStateRequest): Promise<_44.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _44.QueryModuleVersionsRequest): Promise<_44.QueryModuleVersionsResponse>;
                        authority(request?: _44.QueryAuthorityRequest): Promise<_44.QueryAuthorityResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _17.ConfigRequest): Promise<_17.ConfigResponse>;
                        };
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _180.LCDQueryClient;
                };
                bank: {
                    v1beta1: _181.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _182.LCDQueryClient;
                };
                gov: {
                    v1: _183.LCDQueryClient;
                    v1beta1: _184.LCDQueryClient;
                };
                staking: {
                    v1beta1: _185.LCDQueryClient;
                };
                tx: {
                    v1beta1: _186.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _187.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _188.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
