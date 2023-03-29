import * as _2 from "./authz/v1beta1/authz";
import * as _3 from "./authz/v1beta1/event";
import * as _4 from "./authz/v1beta1/genesis";
import * as _5 from "./authz/v1beta1/query";
import * as _6 from "./authz/v1beta1/tx";
import * as _7 from "./bank/v1beta1/authz";
import * as _8 from "./bank/v1beta1/bank";
import * as _9 from "./bank/v1beta1/genesis";
import * as _10 from "./bank/v1beta1/query";
import * as _11 from "./bank/v1beta1/tx";
import * as _12 from "./base/abci/v1beta1/abci";
import * as _13 from "./base/query/v1beta1/pagination";
import * as _14 from "./base/reflection/v2alpha1/reflection";
import * as _15 from "./base/v1beta1/coin";
import * as _16 from "./base/node/v1beta1/query";
import * as _17 from "./crypto/ed25519/keys";
import * as _18 from "./crypto/hd/v1/hd";
import * as _19 from "./crypto/keyring/v1/record";
import * as _20 from "./crypto/multisig/keys";
import * as _21 from "./crypto/secp256k1/keys";
import * as _22 from "./crypto/secp256r1/keys";
import * as _23 from "./distribution/v1beta1/distribution";
import * as _24 from "./distribution/v1beta1/genesis";
import * as _25 from "./distribution/v1beta1/query";
import * as _26 from "./distribution/v1beta1/tx";
import * as _27 from "./gov/v1/genesis";
import * as _28 from "./gov/v1/gov";
import * as _29 from "./gov/v1/query";
import * as _30 from "./gov/v1/tx";
import * as _31 from "./gov/v1beta1/genesis";
import * as _32 from "./gov/v1beta1/gov";
import * as _33 from "./gov/v1beta1/query";
import * as _34 from "./gov/v1beta1/tx";
import * as _35 from "./staking/v1beta1/authz";
import * as _36 from "./staking/v1beta1/genesis";
import * as _37 from "./staking/v1beta1/query";
import * as _38 from "./staking/v1beta1/staking";
import * as _39 from "./staking/v1beta1/tx";
import * as _40 from "./tx/signing/v1beta1/signing";
import * as _41 from "./tx/v1beta1/service";
import * as _42 from "./tx/v1beta1/tx";
import * as _43 from "./upgrade/v1beta1/query";
import * as _44 from "./upgrade/v1beta1/tx";
import * as _45 from "./upgrade/v1beta1/upgrade";
import * as _179 from "./authz/v1beta1/query.lcd";
import * as _180 from "./bank/v1beta1/query.lcd";
import * as _181 from "./distribution/v1beta1/query.lcd";
import * as _182 from "./gov/v1/query.lcd";
import * as _183 from "./gov/v1beta1/query.lcd";
import * as _184 from "./staking/v1beta1/query.lcd";
import * as _185 from "./tx/v1beta1/service.lcd";
import * as _186 from "./upgrade/v1beta1/query.lcd";
import * as _187 from "./base/node/v1beta1/query.lcd";
import * as _188 from "./authz/v1beta1/query.rpc.Query";
import * as _189 from "./bank/v1beta1/query.rpc.Query";
import * as _190 from "./distribution/v1beta1/query.rpc.Query";
import * as _191 from "./gov/v1/query.rpc.Query";
import * as _192 from "./gov/v1beta1/query.rpc.Query";
import * as _193 from "./staking/v1beta1/query.rpc.Query";
import * as _194 from "./tx/v1beta1/service.rpc.Service";
import * as _195 from "./upgrade/v1beta1/query.rpc.Query";
import * as _196 from "./base/node/v1beta1/query.rpc.Service";
import * as _197 from "./authz/v1beta1/tx.rpc.msg";
import * as _198 from "./bank/v1beta1/tx.rpc.msg";
import * as _199 from "./distribution/v1beta1/tx.rpc.msg";
import * as _200 from "./gov/v1/tx.rpc.msg";
import * as _201 from "./gov/v1beta1/tx.rpc.msg";
import * as _202 from "./staking/v1beta1/tx.rpc.msg";
import * as _203 from "./upgrade/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _197.MsgClientImpl;
            QueryClientImpl: typeof _188.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _5.QueryGrantsRequest): Promise<_5.QueryGrantsResponse>;
                granterGrants(request: _5.QueryGranterGrantsRequest): Promise<_5.QueryGranterGrantsResponse>;
                granteeGrants(request: _5.QueryGranteeGrantsRequest): Promise<_5.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _179.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _6.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _6.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _6.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _6.MsgGrant): {
                        typeUrl: string;
                        value: _6.MsgGrant;
                    };
                    exec(value: _6.MsgExec): {
                        typeUrl: string;
                        value: _6.MsgExec;
                    };
                    revoke(value: _6.MsgRevoke): {
                        typeUrl: string;
                        value: _6.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _6.MsgGrant): {
                        typeUrl: string;
                        value: _6.MsgGrant;
                    };
                    exec(value: _6.MsgExec): {
                        typeUrl: string;
                        value: _6.MsgExec;
                    };
                    revoke(value: _6.MsgRevoke): {
                        typeUrl: string;
                        value: _6.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _6.MsgGrant) => {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    };
                    fromAmino: ({ granter, grantee, grant }: {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    }) => _6.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _6.MsgExec) => {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    };
                    fromAmino: ({ grantee, msgs }: {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    }) => _6.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _6.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _6.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _6.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgGrant;
                fromPartial(object: Partial<_6.MsgGrant>): _6.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _6.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgExecResponse;
                fromPartial(object: Partial<_6.MsgExecResponse>): _6.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _6.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgExec;
                fromPartial(object: Partial<_6.MsgExec>): _6.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _6.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgGrantResponse;
                fromPartial(_: Partial<_6.MsgGrantResponse>): _6.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _6.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgRevoke;
                fromPartial(object: Partial<_6.MsgRevoke>): _6.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _6.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgRevokeResponse;
                fromPartial(_: Partial<_6.MsgRevokeResponse>): _6.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _5.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryGrantsRequest;
                fromPartial(object: Partial<_5.QueryGrantsRequest>): _5.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _5.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryGrantsResponse;
                fromPartial(object: Partial<_5.QueryGrantsResponse>): _5.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _5.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_5.QueryGranterGrantsRequest>): _5.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _5.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_5.QueryGranterGrantsResponse>): _5.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _5.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_5.QueryGranteeGrantsRequest>): _5.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _5.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_5.QueryGranteeGrantsResponse>): _5.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _4.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.GenesisState;
                fromPartial(object: Partial<_4.GenesisState>): _4.GenesisState;
            };
            EventGrant: {
                encode(message: _3.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.EventGrant;
                fromPartial(object: Partial<_3.EventGrant>): _3.EventGrant;
            };
            EventRevoke: {
                encode(message: _3.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.EventRevoke;
                fromPartial(object: Partial<_3.EventRevoke>): _3.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _2.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.GenericAuthorization;
                fromPartial(object: Partial<_2.GenericAuthorization>): _2.GenericAuthorization;
            };
            Grant: {
                encode(message: _2.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Grant;
                fromPartial(object: Partial<_2.Grant>): _2.Grant;
            };
            GrantAuthorization: {
                encode(message: _2.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.GrantAuthorization;
                fromPartial(object: Partial<_2.GrantAuthorization>): _2.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _2.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.GrantQueueItem;
                fromPartial(object: Partial<_2.GrantQueueItem>): _2.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _198.MsgClientImpl;
            QueryClientImpl: typeof _189.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _10.QueryBalanceRequest): Promise<_10.QueryBalanceResponse>;
                allBalances(request: _10.QueryAllBalancesRequest): Promise<_10.QueryAllBalancesResponse>;
                spendableBalances(request: _10.QuerySpendableBalancesRequest): Promise<_10.QuerySpendableBalancesResponse>;
                totalSupply(request?: _10.QueryTotalSupplyRequest): Promise<_10.QueryTotalSupplyResponse>;
                supplyOf(request: _10.QuerySupplyOfRequest): Promise<_10.QuerySupplyOfResponse>;
                params(request?: _10.QueryParamsRequest): Promise<_10.QueryParamsResponse>;
                denomMetadata(request: _10.QueryDenomMetadataRequest): Promise<_10.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _10.QueryDenomsMetadataRequest): Promise<_10.QueryDenomsMetadataResponse>;
                denomOwners(request: _10.QueryDenomOwnersRequest): Promise<_10.QueryDenomOwnersResponse>;
            };
            LCDQueryClient: typeof _180.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _11.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _11.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _11.MsgSend): {
                        typeUrl: string;
                        value: _11.MsgSend;
                    };
                    multiSend(value: _11.MsgMultiSend): {
                        typeUrl: string;
                        value: _11.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _11.MsgSend): {
                        typeUrl: string;
                        value: _11.MsgSend;
                    };
                    multiSend(value: _11.MsgMultiSend): {
                        typeUrl: string;
                        value: _11.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _11.MsgSend) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _11.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _11.MsgMultiSend) => {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ inputs, outputs }: {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _11.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _11.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.MsgSend;
                fromPartial(object: Partial<_11.MsgSend>): _11.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _11.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.MsgSendResponse;
                fromPartial(_: Partial<_11.MsgSendResponse>): _11.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _11.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.MsgMultiSend;
                fromPartial(object: Partial<_11.MsgMultiSend>): _11.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _11.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.MsgMultiSendResponse;
                fromPartial(_: Partial<_11.MsgMultiSendResponse>): _11.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _10.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryBalanceRequest;
                fromPartial(object: Partial<_10.QueryBalanceRequest>): _10.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _10.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryBalanceResponse;
                fromPartial(object: Partial<_10.QueryBalanceResponse>): _10.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _10.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryAllBalancesRequest;
                fromPartial(object: Partial<_10.QueryAllBalancesRequest>): _10.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _10.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryAllBalancesResponse;
                fromPartial(object: Partial<_10.QueryAllBalancesResponse>): _10.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _10.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_10.QuerySpendableBalancesRequest>): _10.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _10.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_10.QuerySpendableBalancesResponse>): _10.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _10.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_10.QueryTotalSupplyRequest>): _10.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _10.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_10.QueryTotalSupplyResponse>): _10.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _10.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QuerySupplyOfRequest;
                fromPartial(object: Partial<_10.QuerySupplyOfRequest>): _10.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _10.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QuerySupplyOfResponse;
                fromPartial(object: Partial<_10.QuerySupplyOfResponse>): _10.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _10.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryParamsRequest;
                fromPartial(_: Partial<_10.QueryParamsRequest>): _10.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _10.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryParamsResponse;
                fromPartial(object: Partial<_10.QueryParamsResponse>): _10.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _10.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_10.QueryDenomsMetadataRequest>): _10.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _10.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_10.QueryDenomsMetadataResponse>): _10.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _10.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_10.QueryDenomMetadataRequest>): _10.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _10.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_10.QueryDenomMetadataResponse>): _10.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _10.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_10.QueryDenomOwnersRequest>): _10.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _10.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.DenomOwner;
                fromPartial(object: Partial<_10.DenomOwner>): _10.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _10.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_10.QueryDenomOwnersResponse>): _10.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _9.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.GenesisState;
                fromPartial(object: Partial<_9.GenesisState>): _9.GenesisState;
            };
            Balance: {
                encode(message: _9.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Balance;
                fromPartial(object: Partial<_9.Balance>): _9.Balance;
            };
            Params: {
                encode(message: _8.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Params;
                fromPartial(object: Partial<_8.Params>): _8.Params;
            };
            SendEnabled: {
                encode(message: _8.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.SendEnabled;
                fromPartial(object: Partial<_8.SendEnabled>): _8.SendEnabled;
            };
            Input: {
                encode(message: _8.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Input;
                fromPartial(object: Partial<_8.Input>): _8.Input;
            };
            Output: {
                encode(message: _8.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Output;
                fromPartial(object: Partial<_8.Output>): _8.Output;
            };
            Supply: {
                encode(message: _8.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Supply;
                fromPartial(object: Partial<_8.Supply>): _8.Supply;
            };
            DenomUnit: {
                encode(message: _8.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.DenomUnit;
                fromPartial(object: Partial<_8.DenomUnit>): _8.DenomUnit;
            };
            Metadata: {
                encode(message: _8.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Metadata;
                fromPartial(object: Partial<_8.Metadata>): _8.Metadata;
            };
            SendAuthorization: {
                encode(message: _7.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.SendAuthorization;
                fromPartial(object: Partial<_7.SendAuthorization>): _7.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _12.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.TxResponse;
                    fromPartial(object: Partial<_12.TxResponse>): _12.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _12.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.ABCIMessageLog;
                    fromPartial(object: Partial<_12.ABCIMessageLog>): _12.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _12.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.StringEvent;
                    fromPartial(object: Partial<_12.StringEvent>): _12.StringEvent;
                };
                Attribute: {
                    encode(message: _12.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Attribute;
                    fromPartial(object: Partial<_12.Attribute>): _12.Attribute;
                };
                GasInfo: {
                    encode(message: _12.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.GasInfo;
                    fromPartial(object: Partial<_12.GasInfo>): _12.GasInfo;
                };
                Result: {
                    encode(message: _12.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Result;
                    fromPartial(object: Partial<_12.Result>): _12.Result;
                };
                SimulationResponse: {
                    encode(message: _12.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.SimulationResponse;
                    fromPartial(object: Partial<_12.SimulationResponse>): _12.SimulationResponse;
                };
                MsgData: {
                    encode(message: _12.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgData;
                    fromPartial(object: Partial<_12.MsgData>): _12.MsgData;
                };
                TxMsgData: {
                    encode(message: _12.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.TxMsgData;
                    fromPartial(object: Partial<_12.TxMsgData>): _12.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _12.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.SearchTxsResult;
                    fromPartial(object: Partial<_12.SearchTxsResult>): _12.SearchTxsResult;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _13.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.PageRequest;
                    fromPartial(object: Partial<_13.PageRequest>): _13.PageRequest;
                };
                PageResponse: {
                    encode(message: _13.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.PageResponse;
                    fromPartial(object: Partial<_13.PageResponse>): _13.PageResponse;
                };
            };
        }
        namespace reflection {
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _14.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.AppDescriptor;
                    fromPartial(object: Partial<_14.AppDescriptor>): _14.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _14.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.TxDescriptor;
                    fromPartial(object: Partial<_14.TxDescriptor>): _14.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _14.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.AuthnDescriptor;
                    fromPartial(object: Partial<_14.AuthnDescriptor>): _14.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _14.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.SigningModeDescriptor;
                    fromPartial(object: Partial<_14.SigningModeDescriptor>): _14.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _14.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.ChainDescriptor;
                    fromPartial(object: Partial<_14.ChainDescriptor>): _14.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _14.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.CodecDescriptor;
                    fromPartial(object: Partial<_14.CodecDescriptor>): _14.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _14.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.InterfaceDescriptor;
                    fromPartial(object: Partial<_14.InterfaceDescriptor>): _14.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _14.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_14.InterfaceImplementerDescriptor>): _14.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _14.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_14.InterfaceAcceptingMessageDescriptor>): _14.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _14.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.ConfigurationDescriptor;
                    fromPartial(object: Partial<_14.ConfigurationDescriptor>): _14.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _14.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgDescriptor;
                    fromPartial(object: Partial<_14.MsgDescriptor>): _14.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _14.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_14.GetAuthnDescriptorRequest>): _14.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _14.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_14.GetAuthnDescriptorResponse>): _14.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _14.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_14.GetChainDescriptorRequest>): _14.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _14.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_14.GetChainDescriptorResponse>): _14.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _14.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_14.GetCodecDescriptorRequest>): _14.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _14.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_14.GetCodecDescriptorResponse>): _14.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _14.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_14.GetConfigurationDescriptorRequest>): _14.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _14.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_14.GetConfigurationDescriptorResponse>): _14.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _14.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_14.GetQueryServicesDescriptorRequest>): _14.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _14.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_14.GetQueryServicesDescriptorResponse>): _14.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _14.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_14.GetTxDescriptorRequest>): _14.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _14.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_14.GetTxDescriptorResponse>): _14.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _14.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryServicesDescriptor;
                    fromPartial(object: Partial<_14.QueryServicesDescriptor>): _14.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _14.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryServiceDescriptor;
                    fromPartial(object: Partial<_14.QueryServiceDescriptor>): _14.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _14.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryMethodDescriptor;
                    fromPartial(object: Partial<_14.QueryMethodDescriptor>): _14.QueryMethodDescriptor;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _15.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Coin;
                fromPartial(object: Partial<_15.Coin>): _15.Coin;
            };
            DecCoin: {
                encode(message: _15.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.DecCoin;
                fromPartial(object: Partial<_15.DecCoin>): _15.DecCoin;
            };
            IntProto: {
                encode(message: _15.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.IntProto;
                fromPartial(object: Partial<_15.IntProto>): _15.IntProto;
            };
            DecProto: {
                encode(message: _15.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.DecProto;
                fromPartial(object: Partial<_15.DecProto>): _15.DecProto;
            };
        };
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _196.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _16.ConfigRequest): Promise<_16.ConfigResponse>;
                };
                LCDQueryClient: typeof _187.LCDQueryClient;
                ConfigRequest: {
                    encode(_: _16.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.ConfigRequest;
                    fromPartial(_: Partial<_16.ConfigRequest>): _16.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _16.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.ConfigResponse;
                    fromPartial(object: Partial<_16.ConfigResponse>): _16.ConfigResponse;
                };
            };
        }
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _17.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.PubKey;
                fromPartial(object: Partial<_17.PubKey>): _17.PubKey;
            };
            PrivKey: {
                encode(message: _17.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.PrivKey;
                fromPartial(object: Partial<_17.PrivKey>): _17.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _18.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.BIP44Params;
                    fromPartial(object: Partial<_18.BIP44Params>): _18.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _19.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Record;
                    fromPartial(object: Partial<_19.Record>): _19.Record;
                };
                Record_Local: {
                    encode(message: _19.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Record_Local;
                    fromPartial(object: Partial<_19.Record_Local>): _19.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _19.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Record_Ledger;
                    fromPartial(object: Partial<_19.Record_Ledger>): _19.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _19.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Record_Multi;
                    fromPartial(_: Partial<_19.Record_Multi>): _19.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _19.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Record_Offline;
                    fromPartial(_: Partial<_19.Record_Offline>): _19.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _20.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.LegacyAminoPubKey;
                fromPartial(object: Partial<_20.LegacyAminoPubKey>): _20.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _21.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.PubKey;
                fromPartial(object: Partial<_21.PubKey>): _21.PubKey;
            };
            PrivKey: {
                encode(message: _21.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.PrivKey;
                fromPartial(object: Partial<_21.PrivKey>): _21.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _22.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.PubKey;
                fromPartial(object: Partial<_22.PubKey>): _22.PubKey;
            };
            PrivKey: {
                encode(message: _22.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.PrivKey;
                fromPartial(object: Partial<_22.PrivKey>): _22.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _199.MsgClientImpl;
            QueryClientImpl: typeof _190.QueryClientImpl;
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
            LCDQueryClient: typeof _181.LCDQueryClient;
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
                    toAmino: ({ delegatorAddress, withdrawAddress }: _26.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _26.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _26.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _26.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _26.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _26.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _26.MsgFundCommunityPool) => {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    };
                    fromAmino: ({ amount, depositor }: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    }) => _26.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _26.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_26.MsgSetWithdrawAddress>): _26.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _26.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_26.MsgSetWithdrawAddressResponse>): _26.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _26.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_26.MsgWithdrawDelegatorReward>): _26.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _26.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_26.MsgWithdrawDelegatorRewardResponse>): _26.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _26.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_26.MsgWithdrawValidatorCommission>): _26.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _26.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_26.MsgWithdrawValidatorCommissionResponse>): _26.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _26.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgFundCommunityPool;
                fromPartial(object: Partial<_26.MsgFundCommunityPool>): _26.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _26.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_26.MsgFundCommunityPoolResponse>): _26.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _25.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryParamsRequest;
                fromPartial(_: Partial<_25.QueryParamsRequest>): _25.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _25.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryParamsResponse;
                fromPartial(object: Partial<_25.QueryParamsResponse>): _25.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _25.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_25.QueryValidatorOutstandingRewardsRequest>): _25.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _25.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_25.QueryValidatorOutstandingRewardsResponse>): _25.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _25.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_25.QueryValidatorCommissionRequest>): _25.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _25.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_25.QueryValidatorCommissionResponse>): _25.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _25.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_25.QueryValidatorSlashesRequest>): _25.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _25.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_25.QueryValidatorSlashesResponse>): _25.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _25.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_25.QueryDelegationRewardsRequest>): _25.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _25.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_25.QueryDelegationRewardsResponse>): _25.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _25.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_25.QueryDelegationTotalRewardsRequest>): _25.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _25.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_25.QueryDelegationTotalRewardsResponse>): _25.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _25.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_25.QueryDelegatorValidatorsRequest>): _25.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _25.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_25.QueryDelegatorValidatorsResponse>): _25.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _25.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_25.QueryDelegatorWithdrawAddressRequest>): _25.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _25.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_25.QueryDelegatorWithdrawAddressResponse>): _25.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _25.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_25.QueryCommunityPoolRequest>): _25.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _25.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_25.QueryCommunityPoolResponse>): _25.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _24.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_24.DelegatorWithdrawInfo>): _24.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _24.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_24.ValidatorOutstandingRewardsRecord>): _24.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _24.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_24.ValidatorAccumulatedCommissionRecord>): _24.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _24.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_24.ValidatorHistoricalRewardsRecord>): _24.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _24.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_24.ValidatorCurrentRewardsRecord>): _24.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _24.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_24.DelegatorStartingInfoRecord>): _24.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _24.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_24.ValidatorSlashEventRecord>): _24.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _24.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GenesisState;
                fromPartial(object: Partial<_24.GenesisState>): _24.GenesisState;
            };
            Params: {
                encode(message: _23.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Params;
                fromPartial(object: Partial<_23.Params>): _23.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _23.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_23.ValidatorHistoricalRewards>): _23.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _23.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ValidatorCurrentRewards;
                fromPartial(object: Partial<_23.ValidatorCurrentRewards>): _23.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _23.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_23.ValidatorAccumulatedCommission>): _23.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _23.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_23.ValidatorOutstandingRewards>): _23.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _23.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ValidatorSlashEvent;
                fromPartial(object: Partial<_23.ValidatorSlashEvent>): _23.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _23.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ValidatorSlashEvents;
                fromPartial(object: Partial<_23.ValidatorSlashEvents>): _23.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _23.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.FeePool;
                fromPartial(object: Partial<_23.FeePool>): _23.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _23.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_23.CommunityPoolSpendProposal>): _23.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _23.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.DelegatorStartingInfo;
                fromPartial(object: Partial<_23.DelegatorStartingInfo>): _23.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _23.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.DelegationDelegatorReward;
                fromPartial(object: Partial<_23.DelegationDelegatorReward>): _23.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _23.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_23.CommunityPoolSpendProposalWithDeposit>): _23.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _200.MsgClientImpl;
            QueryClientImpl: typeof _191.QueryClientImpl;
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
            LCDQueryClient: typeof _182.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _30.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _30.MsgExecLegacyContent): {
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
                    execLegacyContent(value: _30.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _30.MsgExecLegacyContent;
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
                    execLegacyContent(value: _30.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _30.MsgExecLegacyContent;
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
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _30.MsgSubmitProposal) => {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    };
                    fromAmino: ({ messages, initial_deposit, proposer, metadata }: {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    }) => _30.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _30.MsgExecLegacyContent) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    };
                    fromAmino: ({ content, authority }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    }) => _30.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _30.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    }) => _30.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _30.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, options, metadata }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    }) => _30.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _30.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _30.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _30.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.MsgSubmitProposal;
                fromPartial(object: Partial<_30.MsgSubmitProposal>): _30.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _30.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_30.MsgSubmitProposalResponse>): _30.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _30.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.MsgExecLegacyContent;
                fromPartial(object: Partial<_30.MsgExecLegacyContent>): _30.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _30.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_30.MsgExecLegacyContentResponse>): _30.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _30.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.MsgVote;
                fromPartial(object: Partial<_30.MsgVote>): _30.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _30.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.MsgVoteResponse;
                fromPartial(_: Partial<_30.MsgVoteResponse>): _30.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _30.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.MsgVoteWeighted;
                fromPartial(object: Partial<_30.MsgVoteWeighted>): _30.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _30.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_30.MsgVoteWeightedResponse>): _30.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _30.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.MsgDeposit;
                fromPartial(object: Partial<_30.MsgDeposit>): _30.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _30.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.MsgDepositResponse;
                fromPartial(_: Partial<_30.MsgDepositResponse>): _30.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _29.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryProposalRequest;
                fromPartial(object: Partial<_29.QueryProposalRequest>): _29.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _29.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryProposalResponse;
                fromPartial(object: Partial<_29.QueryProposalResponse>): _29.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _29.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryProposalsRequest;
                fromPartial(object: Partial<_29.QueryProposalsRequest>): _29.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _29.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryProposalsResponse;
                fromPartial(object: Partial<_29.QueryProposalsResponse>): _29.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _29.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryVoteRequest;
                fromPartial(object: Partial<_29.QueryVoteRequest>): _29.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _29.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryVoteResponse;
                fromPartial(object: Partial<_29.QueryVoteResponse>): _29.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _29.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryVotesRequest;
                fromPartial(object: Partial<_29.QueryVotesRequest>): _29.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _29.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryVotesResponse;
                fromPartial(object: Partial<_29.QueryVotesResponse>): _29.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _29.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryParamsRequest;
                fromPartial(object: Partial<_29.QueryParamsRequest>): _29.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _29.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryParamsResponse;
                fromPartial(object: Partial<_29.QueryParamsResponse>): _29.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _29.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryDepositRequest;
                fromPartial(object: Partial<_29.QueryDepositRequest>): _29.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _29.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryDepositResponse;
                fromPartial(object: Partial<_29.QueryDepositResponse>): _29.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _29.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryDepositsRequest;
                fromPartial(object: Partial<_29.QueryDepositsRequest>): _29.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _29.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryDepositsResponse;
                fromPartial(object: Partial<_29.QueryDepositsResponse>): _29.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _29.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryTallyResultRequest;
                fromPartial(object: Partial<_29.QueryTallyResultRequest>): _29.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _29.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryTallyResultResponse;
                fromPartial(object: Partial<_29.QueryTallyResultResponse>): _29.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _28.VoteOption;
            voteOptionToJSON(object: _28.VoteOption): string;
            proposalStatusFromJSON(object: any): _28.ProposalStatus;
            proposalStatusToJSON(object: _28.ProposalStatus): string;
            VoteOption: typeof _28.VoteOption;
            VoteOptionSDKType: typeof _28.VoteOptionSDKType;
            ProposalStatus: typeof _28.ProposalStatus;
            ProposalStatusSDKType: typeof _28.ProposalStatusSDKType;
            WeightedVoteOption: {
                encode(message: _28.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.WeightedVoteOption;
                fromPartial(object: Partial<_28.WeightedVoteOption>): _28.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _28.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.Deposit;
                fromPartial(object: Partial<_28.Deposit>): _28.Deposit;
            };
            Proposal: {
                encode(message: _28.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.Proposal;
                fromPartial(object: Partial<_28.Proposal>): _28.Proposal;
            };
            TallyResult: {
                encode(message: _28.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.TallyResult;
                fromPartial(object: Partial<_28.TallyResult>): _28.TallyResult;
            };
            Vote: {
                encode(message: _28.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.Vote;
                fromPartial(object: Partial<_28.Vote>): _28.Vote;
            };
            DepositParams: {
                encode(message: _28.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.DepositParams;
                fromPartial(object: Partial<_28.DepositParams>): _28.DepositParams;
            };
            VotingParams: {
                encode(message: _28.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.VotingParams;
                fromPartial(object: Partial<_28.VotingParams>): _28.VotingParams;
            };
            TallyParams: {
                encode(message: _28.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.TallyParams;
                fromPartial(object: Partial<_28.TallyParams>): _28.TallyParams;
            };
            GenesisState: {
                encode(message: _27.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GenesisState;
                fromPartial(object: Partial<_27.GenesisState>): _27.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _201.MsgClientImpl;
            QueryClientImpl: typeof _192.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _33.QueryProposalRequest): Promise<_33.QueryProposalResponse>;
                proposals(request: _33.QueryProposalsRequest): Promise<_33.QueryProposalsResponse>;
                vote(request: _33.QueryVoteRequest): Promise<_33.QueryVoteResponse>;
                votes(request: _33.QueryVotesRequest): Promise<_33.QueryVotesResponse>;
                params(request: _33.QueryParamsRequest): Promise<_33.QueryParamsResponse>;
                deposit(request: _33.QueryDepositRequest): Promise<_33.QueryDepositResponse>;
                deposits(request: _33.QueryDepositsRequest): Promise<_33.QueryDepositsResponse>;
                tallyResult(request: _33.QueryTallyResultRequest): Promise<_33.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _183.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _34.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _34.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _34.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _34.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _34.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _34.MsgSubmitProposal;
                    };
                    vote(value: _34.MsgVote): {
                        typeUrl: string;
                        value: _34.MsgVote;
                    };
                    voteWeighted(value: _34.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _34.MsgVoteWeighted;
                    };
                    deposit(value: _34.MsgDeposit): {
                        typeUrl: string;
                        value: _34.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _34.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _34.MsgSubmitProposal;
                    };
                    vote(value: _34.MsgVote): {
                        typeUrl: string;
                        value: _34.MsgVote;
                    };
                    voteWeighted(value: _34.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _34.MsgVoteWeighted;
                    };
                    deposit(value: _34.MsgDeposit): {
                        typeUrl: string;
                        value: _34.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _34.MsgSubmitProposal) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    };
                    fromAmino: ({ content, initial_deposit, proposer }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    }) => _34.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _34.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _34.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _34.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, voter, options }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    }) => _34.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _34.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _34.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _34.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgSubmitProposal;
                fromPartial(object: Partial<_34.MsgSubmitProposal>): _34.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _34.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_34.MsgSubmitProposalResponse>): _34.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _34.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgVote;
                fromPartial(object: Partial<_34.MsgVote>): _34.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _34.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgVoteResponse;
                fromPartial(_: Partial<_34.MsgVoteResponse>): _34.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _34.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgVoteWeighted;
                fromPartial(object: Partial<_34.MsgVoteWeighted>): _34.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _34.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_34.MsgVoteWeightedResponse>): _34.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _34.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgDeposit;
                fromPartial(object: Partial<_34.MsgDeposit>): _34.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _34.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgDepositResponse;
                fromPartial(_: Partial<_34.MsgDepositResponse>): _34.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _33.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryProposalRequest;
                fromPartial(object: Partial<_33.QueryProposalRequest>): _33.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _33.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryProposalResponse;
                fromPartial(object: Partial<_33.QueryProposalResponse>): _33.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _33.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryProposalsRequest;
                fromPartial(object: Partial<_33.QueryProposalsRequest>): _33.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _33.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryProposalsResponse;
                fromPartial(object: Partial<_33.QueryProposalsResponse>): _33.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _33.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryVoteRequest;
                fromPartial(object: Partial<_33.QueryVoteRequest>): _33.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _33.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryVoteResponse;
                fromPartial(object: Partial<_33.QueryVoteResponse>): _33.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _33.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryVotesRequest;
                fromPartial(object: Partial<_33.QueryVotesRequest>): _33.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _33.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryVotesResponse;
                fromPartial(object: Partial<_33.QueryVotesResponse>): _33.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _33.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryParamsRequest;
                fromPartial(object: Partial<_33.QueryParamsRequest>): _33.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _33.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryParamsResponse;
                fromPartial(object: Partial<_33.QueryParamsResponse>): _33.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _33.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDepositRequest;
                fromPartial(object: Partial<_33.QueryDepositRequest>): _33.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _33.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDepositResponse;
                fromPartial(object: Partial<_33.QueryDepositResponse>): _33.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _33.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDepositsRequest;
                fromPartial(object: Partial<_33.QueryDepositsRequest>): _33.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _33.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDepositsResponse;
                fromPartial(object: Partial<_33.QueryDepositsResponse>): _33.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _33.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryTallyResultRequest;
                fromPartial(object: Partial<_33.QueryTallyResultRequest>): _33.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _33.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryTallyResultResponse;
                fromPartial(object: Partial<_33.QueryTallyResultResponse>): _33.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _32.VoteOption;
            voteOptionToJSON(object: _32.VoteOption): string;
            proposalStatusFromJSON(object: any): _32.ProposalStatus;
            proposalStatusToJSON(object: _32.ProposalStatus): string;
            VoteOption: typeof _32.VoteOption;
            VoteOptionSDKType: typeof _32.VoteOptionSDKType;
            ProposalStatus: typeof _32.ProposalStatus;
            ProposalStatusSDKType: typeof _32.ProposalStatusSDKType;
            WeightedVoteOption: {
                encode(message: _32.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.WeightedVoteOption;
                fromPartial(object: Partial<_32.WeightedVoteOption>): _32.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _32.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.TextProposal;
                fromPartial(object: Partial<_32.TextProposal>): _32.TextProposal;
            };
            Deposit: {
                encode(message: _32.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.Deposit;
                fromPartial(object: Partial<_32.Deposit>): _32.Deposit;
            };
            Proposal: {
                encode(message: _32.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.Proposal;
                fromPartial(object: Partial<_32.Proposal>): _32.Proposal;
            };
            TallyResult: {
                encode(message: _32.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.TallyResult;
                fromPartial(object: Partial<_32.TallyResult>): _32.TallyResult;
            };
            Vote: {
                encode(message: _32.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.Vote;
                fromPartial(object: Partial<_32.Vote>): _32.Vote;
            };
            DepositParams: {
                encode(message: _32.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.DepositParams;
                fromPartial(object: Partial<_32.DepositParams>): _32.DepositParams;
            };
            VotingParams: {
                encode(message: _32.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.VotingParams;
                fromPartial(object: Partial<_32.VotingParams>): _32.VotingParams;
            };
            TallyParams: {
                encode(message: _32.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.TallyParams;
                fromPartial(object: Partial<_32.TallyParams>): _32.TallyParams;
            };
            GenesisState: {
                encode(message: _31.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.GenesisState;
                fromPartial(object: Partial<_31.GenesisState>): _31.GenesisState;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _202.MsgClientImpl;
            QueryClientImpl: typeof _193.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _37.QueryValidatorsRequest): Promise<_37.QueryValidatorsResponse>;
                validator(request: _37.QueryValidatorRequest): Promise<_37.QueryValidatorResponse>;
                validatorDelegations(request: _37.QueryValidatorDelegationsRequest): Promise<_37.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _37.QueryValidatorUnbondingDelegationsRequest): Promise<_37.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _37.QueryDelegationRequest): Promise<_37.QueryDelegationResponse>;
                unbondingDelegation(request: _37.QueryUnbondingDelegationRequest): Promise<_37.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _37.QueryDelegatorDelegationsRequest): Promise<_37.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _37.QueryDelegatorUnbondingDelegationsRequest): Promise<_37.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _37.QueryRedelegationsRequest): Promise<_37.QueryRedelegationsResponse>;
                delegatorValidators(request: _37.QueryDelegatorValidatorsRequest): Promise<_37.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _37.QueryDelegatorValidatorRequest): Promise<_37.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _37.QueryHistoricalInfoRequest): Promise<_37.QueryHistoricalInfoResponse>;
                pool(request?: _37.QueryPoolRequest): Promise<_37.QueryPoolResponse>;
                params(request?: _37.QueryParamsRequest): Promise<_37.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _184.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _39.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _39.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _39.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _39.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _39.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _39.MsgCreateValidator): {
                        typeUrl: string;
                        value: _39.MsgCreateValidator;
                    };
                    editValidator(value: _39.MsgEditValidator): {
                        typeUrl: string;
                        value: _39.MsgEditValidator;
                    };
                    delegate(value: _39.MsgDelegate): {
                        typeUrl: string;
                        value: _39.MsgDelegate;
                    };
                    beginRedelegate(value: _39.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _39.MsgBeginRedelegate;
                    };
                    undelegate(value: _39.MsgUndelegate): {
                        typeUrl: string;
                        value: _39.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _39.MsgCreateValidator): {
                        typeUrl: string;
                        value: _39.MsgCreateValidator;
                    };
                    editValidator(value: _39.MsgEditValidator): {
                        typeUrl: string;
                        value: _39.MsgEditValidator;
                    };
                    delegate(value: _39.MsgDelegate): {
                        typeUrl: string;
                        value: _39.MsgDelegate;
                    };
                    beginRedelegate(value: _39.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _39.MsgBeginRedelegate;
                    };
                    undelegate(value: _39.MsgUndelegate): {
                        typeUrl: string;
                        value: _39.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _39.MsgCreateValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    }) => _39.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _39.MsgEditValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    };
                    fromAmino: ({ description, validator_address, commission_rate, min_self_delegation }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    }) => _39.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _39.MsgDelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _39.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _39.MsgBeginRedelegate) => {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _39.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _39.MsgUndelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _39.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _39.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.MsgCreateValidator;
                fromPartial(object: Partial<_39.MsgCreateValidator>): _39.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _39.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_39.MsgCreateValidatorResponse>): _39.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _39.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.MsgEditValidator;
                fromPartial(object: Partial<_39.MsgEditValidator>): _39.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _39.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.MsgEditValidatorResponse;
                fromPartial(_: Partial<_39.MsgEditValidatorResponse>): _39.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _39.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.MsgDelegate;
                fromPartial(object: Partial<_39.MsgDelegate>): _39.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _39.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.MsgDelegateResponse;
                fromPartial(_: Partial<_39.MsgDelegateResponse>): _39.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _39.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.MsgBeginRedelegate;
                fromPartial(object: Partial<_39.MsgBeginRedelegate>): _39.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _39.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_39.MsgBeginRedelegateResponse>): _39.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _39.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.MsgUndelegate;
                fromPartial(object: Partial<_39.MsgUndelegate>): _39.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _39.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.MsgUndelegateResponse;
                fromPartial(object: Partial<_39.MsgUndelegateResponse>): _39.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _38.BondStatus;
            bondStatusToJSON(object: _38.BondStatus): string;
            BondStatus: typeof _38.BondStatus;
            BondStatusSDKType: typeof _38.BondStatusSDKType;
            HistoricalInfo: {
                encode(message: _38.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.HistoricalInfo;
                fromPartial(object: Partial<_38.HistoricalInfo>): _38.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _38.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.CommissionRates;
                fromPartial(object: Partial<_38.CommissionRates>): _38.CommissionRates;
            };
            Commission: {
                encode(message: _38.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.Commission;
                fromPartial(object: Partial<_38.Commission>): _38.Commission;
            };
            Description: {
                encode(message: _38.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.Description;
                fromPartial(object: Partial<_38.Description>): _38.Description;
            };
            Validator: {
                encode(message: _38.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.Validator;
                fromPartial(object: Partial<_38.Validator>): _38.Validator;
            };
            ValAddresses: {
                encode(message: _38.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValAddresses;
                fromPartial(object: Partial<_38.ValAddresses>): _38.ValAddresses;
            };
            DVPair: {
                encode(message: _38.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.DVPair;
                fromPartial(object: Partial<_38.DVPair>): _38.DVPair;
            };
            DVPairs: {
                encode(message: _38.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.DVPairs;
                fromPartial(object: Partial<_38.DVPairs>): _38.DVPairs;
            };
            DVVTriplet: {
                encode(message: _38.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.DVVTriplet;
                fromPartial(object: Partial<_38.DVVTriplet>): _38.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _38.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.DVVTriplets;
                fromPartial(object: Partial<_38.DVVTriplets>): _38.DVVTriplets;
            };
            Delegation: {
                encode(message: _38.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.Delegation;
                fromPartial(object: Partial<_38.Delegation>): _38.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _38.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.UnbondingDelegation;
                fromPartial(object: Partial<_38.UnbondingDelegation>): _38.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _38.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.UnbondingDelegationEntry;
                fromPartial(object: Partial<_38.UnbondingDelegationEntry>): _38.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _38.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.RedelegationEntry;
                fromPartial(object: Partial<_38.RedelegationEntry>): _38.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _38.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.Redelegation;
                fromPartial(object: Partial<_38.Redelegation>): _38.Redelegation;
            };
            Params: {
                encode(message: _38.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.Params;
                fromPartial(object: Partial<_38.Params>): _38.Params;
            };
            DelegationResponse: {
                encode(message: _38.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.DelegationResponse;
                fromPartial(object: Partial<_38.DelegationResponse>): _38.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _38.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.RedelegationEntryResponse;
                fromPartial(object: Partial<_38.RedelegationEntryResponse>): _38.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _38.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.RedelegationResponse;
                fromPartial(object: Partial<_38.RedelegationResponse>): _38.RedelegationResponse;
            };
            Pool: {
                encode(message: _38.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.Pool;
                fromPartial(object: Partial<_38.Pool>): _38.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _37.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryValidatorsRequest;
                fromPartial(object: Partial<_37.QueryValidatorsRequest>): _37.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _37.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryValidatorsResponse;
                fromPartial(object: Partial<_37.QueryValidatorsResponse>): _37.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _37.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryValidatorRequest;
                fromPartial(object: Partial<_37.QueryValidatorRequest>): _37.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _37.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryValidatorResponse;
                fromPartial(object: Partial<_37.QueryValidatorResponse>): _37.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _37.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_37.QueryValidatorDelegationsRequest>): _37.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _37.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_37.QueryValidatorDelegationsResponse>): _37.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _37.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_37.QueryValidatorUnbondingDelegationsRequest>): _37.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _37.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_37.QueryValidatorUnbondingDelegationsResponse>): _37.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _37.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryDelegationRequest;
                fromPartial(object: Partial<_37.QueryDelegationRequest>): _37.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _37.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryDelegationResponse;
                fromPartial(object: Partial<_37.QueryDelegationResponse>): _37.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _37.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_37.QueryUnbondingDelegationRequest>): _37.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _37.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_37.QueryUnbondingDelegationResponse>): _37.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _37.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_37.QueryDelegatorDelegationsRequest>): _37.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _37.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_37.QueryDelegatorDelegationsResponse>): _37.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _37.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_37.QueryDelegatorUnbondingDelegationsRequest>): _37.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _37.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_37.QueryDelegatorUnbondingDelegationsResponse>): _37.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _37.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryRedelegationsRequest;
                fromPartial(object: Partial<_37.QueryRedelegationsRequest>): _37.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _37.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryRedelegationsResponse;
                fromPartial(object: Partial<_37.QueryRedelegationsResponse>): _37.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _37.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_37.QueryDelegatorValidatorsRequest>): _37.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _37.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_37.QueryDelegatorValidatorsResponse>): _37.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _37.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_37.QueryDelegatorValidatorRequest>): _37.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _37.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_37.QueryDelegatorValidatorResponse>): _37.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _37.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_37.QueryHistoricalInfoRequest>): _37.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _37.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_37.QueryHistoricalInfoResponse>): _37.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _37.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryPoolRequest;
                fromPartial(_: Partial<_37.QueryPoolRequest>): _37.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _37.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryPoolResponse;
                fromPartial(object: Partial<_37.QueryPoolResponse>): _37.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _37.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryParamsRequest;
                fromPartial(_: Partial<_37.QueryParamsRequest>): _37.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _37.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryParamsResponse;
                fromPartial(object: Partial<_37.QueryParamsResponse>): _37.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _36.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.GenesisState;
                fromPartial(object: Partial<_36.GenesisState>): _36.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _36.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.LastValidatorPower;
                fromPartial(object: Partial<_36.LastValidatorPower>): _36.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _35.AuthorizationType;
            authorizationTypeToJSON(object: _35.AuthorizationType): string;
            AuthorizationType: typeof _35.AuthorizationType;
            AuthorizationTypeSDKType: typeof _35.AuthorizationTypeSDKType;
            StakeAuthorization: {
                encode(message: _35.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.StakeAuthorization;
                fromPartial(object: Partial<_35.StakeAuthorization>): _35.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _35.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.StakeAuthorization_Validators;
                fromPartial(object: Partial<_35.StakeAuthorization_Validators>): _35.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _40.SignMode;
                signModeToJSON(object: _40.SignMode): string;
                SignMode: typeof _40.SignMode;
                SignModeSDKType: typeof _40.SignModeSDKType;
                SignatureDescriptors: {
                    encode(message: _40.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.SignatureDescriptors;
                    fromPartial(object: Partial<_40.SignatureDescriptors>): _40.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _40.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.SignatureDescriptor;
                    fromPartial(object: Partial<_40.SignatureDescriptor>): _40.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _40.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_40.SignatureDescriptor_Data>): _40.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _40.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_40.SignatureDescriptor_Data_Single>): _40.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _40.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_40.SignatureDescriptor_Data_Multi>): _40.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _194.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _41.SimulateRequest): Promise<_41.SimulateResponse>;
                getTx(request: _41.GetTxRequest): Promise<_41.GetTxResponse>;
                broadcastTx(request: _41.BroadcastTxRequest): Promise<_41.BroadcastTxResponse>;
                getTxsEvent(request: _41.GetTxsEventRequest): Promise<_41.GetTxsEventResponse>;
                getBlockWithTxs(request: _41.GetBlockWithTxsRequest): Promise<_41.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _185.LCDQueryClient;
            Tx: {
                encode(message: _42.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.Tx;
                fromPartial(object: Partial<_42.Tx>): _42.Tx;
            };
            TxRaw: {
                encode(message: _42.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.TxRaw;
                fromPartial(object: Partial<_42.TxRaw>): _42.TxRaw;
            };
            SignDoc: {
                encode(message: _42.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.SignDoc;
                fromPartial(object: Partial<_42.SignDoc>): _42.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _42.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.SignDocDirectAux;
                fromPartial(object: Partial<_42.SignDocDirectAux>): _42.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _42.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.TxBody;
                fromPartial(object: Partial<_42.TxBody>): _42.TxBody;
            };
            AuthInfo: {
                encode(message: _42.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.AuthInfo;
                fromPartial(object: Partial<_42.AuthInfo>): _42.AuthInfo;
            };
            SignerInfo: {
                encode(message: _42.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.SignerInfo;
                fromPartial(object: Partial<_42.SignerInfo>): _42.SignerInfo;
            };
            ModeInfo: {
                encode(message: _42.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.ModeInfo;
                fromPartial(object: Partial<_42.ModeInfo>): _42.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _42.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.ModeInfo_Single;
                fromPartial(object: Partial<_42.ModeInfo_Single>): _42.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _42.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.ModeInfo_Multi;
                fromPartial(object: Partial<_42.ModeInfo_Multi>): _42.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _42.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.Fee;
                fromPartial(object: Partial<_42.Fee>): _42.Fee;
            };
            Tip: {
                encode(message: _42.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.Tip;
                fromPartial(object: Partial<_42.Tip>): _42.Tip;
            };
            AuxSignerData: {
                encode(message: _42.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.AuxSignerData;
                fromPartial(object: Partial<_42.AuxSignerData>): _42.AuxSignerData;
            };
            orderByFromJSON(object: any): _41.OrderBy;
            orderByToJSON(object: _41.OrderBy): string;
            broadcastModeFromJSON(object: any): _41.BroadcastMode;
            broadcastModeToJSON(object: _41.BroadcastMode): string;
            OrderBy: typeof _41.OrderBy;
            OrderBySDKType: typeof _41.OrderBySDKType;
            BroadcastMode: typeof _41.BroadcastMode;
            BroadcastModeSDKType: typeof _41.BroadcastModeSDKType;
            GetTxsEventRequest: {
                encode(message: _41.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.GetTxsEventRequest;
                fromPartial(object: Partial<_41.GetTxsEventRequest>): _41.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _41.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.GetTxsEventResponse;
                fromPartial(object: Partial<_41.GetTxsEventResponse>): _41.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _41.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.BroadcastTxRequest;
                fromPartial(object: Partial<_41.BroadcastTxRequest>): _41.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _41.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.BroadcastTxResponse;
                fromPartial(object: Partial<_41.BroadcastTxResponse>): _41.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _41.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.SimulateRequest;
                fromPartial(object: Partial<_41.SimulateRequest>): _41.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _41.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.SimulateResponse;
                fromPartial(object: Partial<_41.SimulateResponse>): _41.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _41.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.GetTxRequest;
                fromPartial(object: Partial<_41.GetTxRequest>): _41.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _41.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.GetTxResponse;
                fromPartial(object: Partial<_41.GetTxResponse>): _41.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _41.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_41.GetBlockWithTxsRequest>): _41.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _41.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_41.GetBlockWithTxsResponse>): _41.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _203.MsgClientImpl;
            QueryClientImpl: typeof _195.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _43.QueryCurrentPlanRequest): Promise<_43.QueryCurrentPlanResponse>;
                appliedPlan(request: _43.QueryAppliedPlanRequest): Promise<_43.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _43.QueryUpgradedConsensusStateRequest): Promise<_43.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _43.QueryModuleVersionsRequest): Promise<_43.QueryModuleVersionsResponse>;
                authority(request?: _43.QueryAuthorityRequest): Promise<_43.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _186.LCDQueryClient;
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
                    toAmino: ({ authority, plan }: _44.MsgSoftwareUpgrade) => {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    };
                    fromAmino: ({ authority, plan }: {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    }) => _44.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _44.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _44.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _45.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Plan;
                fromPartial(object: Partial<_45.Plan>): _45.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _45.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_45.SoftwareUpgradeProposal>): _45.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _45.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_45.CancelSoftwareUpgradeProposal>): _45.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _45.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.ModuleVersion;
                fromPartial(object: Partial<_45.ModuleVersion>): _45.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _44.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_44.MsgSoftwareUpgrade>): _44.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _44.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_44.MsgSoftwareUpgradeResponse>): _44.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _44.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgCancelUpgrade;
                fromPartial(object: Partial<_44.MsgCancelUpgrade>): _44.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _44.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_44.MsgCancelUpgradeResponse>): _44.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _43.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_43.QueryCurrentPlanRequest>): _43.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _43.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_43.QueryCurrentPlanResponse>): _43.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _43.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_43.QueryAppliedPlanRequest>): _43.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _43.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_43.QueryAppliedPlanResponse>): _43.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _43.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_43.QueryUpgradedConsensusStateRequest>): _43.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _43.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_43.QueryUpgradedConsensusStateResponse>): _43.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _43.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_43.QueryModuleVersionsRequest>): _43.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _43.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_43.QueryModuleVersionsResponse>): _43.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _43.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryAuthorityRequest;
                fromPartial(_: Partial<_43.QueryAuthorityRequest>): _43.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _43.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryAuthorityResponse;
                fromPartial(object: Partial<_43.QueryAuthorityResponse>): _43.QueryAuthorityResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _197.MsgClientImpl;
                };
                bank: {
                    v1beta1: _198.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _199.MsgClientImpl;
                };
                gov: {
                    v1: _200.MsgClientImpl;
                    v1beta1: _201.MsgClientImpl;
                };
                staking: {
                    v1beta1: _202.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _203.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: {
                        grants(request: _5.QueryGrantsRequest): Promise<_5.QueryGrantsResponse>;
                        granterGrants(request: _5.QueryGranterGrantsRequest): Promise<_5.QueryGranterGrantsResponse>;
                        granteeGrants(request: _5.QueryGranteeGrantsRequest): Promise<_5.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _10.QueryBalanceRequest): Promise<_10.QueryBalanceResponse>;
                        allBalances(request: _10.QueryAllBalancesRequest): Promise<_10.QueryAllBalancesResponse>;
                        spendableBalances(request: _10.QuerySpendableBalancesRequest): Promise<_10.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _10.QueryTotalSupplyRequest): Promise<_10.QueryTotalSupplyResponse>;
                        supplyOf(request: _10.QuerySupplyOfRequest): Promise<_10.QuerySupplyOfResponse>;
                        params(request?: _10.QueryParamsRequest): Promise<_10.QueryParamsResponse>;
                        denomMetadata(request: _10.QueryDenomMetadataRequest): Promise<_10.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _10.QueryDenomsMetadataRequest): Promise<_10.QueryDenomsMetadataResponse>;
                        denomOwners(request: _10.QueryDenomOwnersRequest): Promise<_10.QueryDenomOwnersResponse>;
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
                    v1: {
                        proposal(request: _29.QueryProposalRequest): Promise<_29.QueryProposalResponse>;
                        proposals(request: _29.QueryProposalsRequest): Promise<_29.QueryProposalsResponse>;
                        vote(request: _29.QueryVoteRequest): Promise<_29.QueryVoteResponse>;
                        votes(request: _29.QueryVotesRequest): Promise<_29.QueryVotesResponse>;
                        params(request: _29.QueryParamsRequest): Promise<_29.QueryParamsResponse>;
                        deposit(request: _29.QueryDepositRequest): Promise<_29.QueryDepositResponse>;
                        deposits(request: _29.QueryDepositsRequest): Promise<_29.QueryDepositsResponse>;
                        tallyResult(request: _29.QueryTallyResultRequest): Promise<_29.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _33.QueryProposalRequest): Promise<_33.QueryProposalResponse>;
                        proposals(request: _33.QueryProposalsRequest): Promise<_33.QueryProposalsResponse>;
                        vote(request: _33.QueryVoteRequest): Promise<_33.QueryVoteResponse>;
                        votes(request: _33.QueryVotesRequest): Promise<_33.QueryVotesResponse>;
                        params(request: _33.QueryParamsRequest): Promise<_33.QueryParamsResponse>;
                        deposit(request: _33.QueryDepositRequest): Promise<_33.QueryDepositResponse>;
                        deposits(request: _33.QueryDepositsRequest): Promise<_33.QueryDepositsResponse>;
                        tallyResult(request: _33.QueryTallyResultRequest): Promise<_33.QueryTallyResultResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _37.QueryValidatorsRequest): Promise<_37.QueryValidatorsResponse>;
                        validator(request: _37.QueryValidatorRequest): Promise<_37.QueryValidatorResponse>;
                        validatorDelegations(request: _37.QueryValidatorDelegationsRequest): Promise<_37.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _37.QueryValidatorUnbondingDelegationsRequest): Promise<_37.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _37.QueryDelegationRequest): Promise<_37.QueryDelegationResponse>;
                        unbondingDelegation(request: _37.QueryUnbondingDelegationRequest): Promise<_37.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _37.QueryDelegatorDelegationsRequest): Promise<_37.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _37.QueryDelegatorUnbondingDelegationsRequest): Promise<_37.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _37.QueryRedelegationsRequest): Promise<_37.QueryRedelegationsResponse>;
                        delegatorValidators(request: _37.QueryDelegatorValidatorsRequest): Promise<_37.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _37.QueryDelegatorValidatorRequest): Promise<_37.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _37.QueryHistoricalInfoRequest): Promise<_37.QueryHistoricalInfoResponse>;
                        pool(request?: _37.QueryPoolRequest): Promise<_37.QueryPoolResponse>;
                        params(request?: _37.QueryParamsRequest): Promise<_37.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _41.SimulateRequest): Promise<_41.SimulateResponse>;
                        getTx(request: _41.GetTxRequest): Promise<_41.GetTxResponse>;
                        broadcastTx(request: _41.BroadcastTxRequest): Promise<_41.BroadcastTxResponse>;
                        getTxsEvent(request: _41.GetTxsEventRequest): Promise<_41.GetTxsEventResponse>;
                        getBlockWithTxs(request: _41.GetBlockWithTxsRequest): Promise<_41.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _43.QueryCurrentPlanRequest): Promise<_43.QueryCurrentPlanResponse>;
                        appliedPlan(request: _43.QueryAppliedPlanRequest): Promise<_43.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _43.QueryUpgradedConsensusStateRequest): Promise<_43.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _43.QueryModuleVersionsRequest): Promise<_43.QueryModuleVersionsResponse>;
                        authority(request?: _43.QueryAuthorityRequest): Promise<_43.QueryAuthorityResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _16.ConfigRequest): Promise<_16.ConfigResponse>;
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
                    v1beta1: _179.LCDQueryClient;
                };
                bank: {
                    v1beta1: _180.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _181.LCDQueryClient;
                };
                gov: {
                    v1: _182.LCDQueryClient;
                    v1beta1: _183.LCDQueryClient;
                };
                staking: {
                    v1beta1: _184.LCDQueryClient;
                };
                tx: {
                    v1beta1: _185.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _186.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _187.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
