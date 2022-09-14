import * as _2 from "./app/v1alpha1/config";
import * as _3 from "./app/v1alpha1/module";
import * as _4 from "./app/v1alpha1/query";
import * as _5 from "./auth/v1beta1/auth";
import * as _6 from "./auth/v1beta1/genesis";
import * as _7 from "./auth/v1beta1/query";
import * as _8 from "./authz/v1beta1/authz";
import * as _9 from "./authz/v1beta1/event";
import * as _10 from "./authz/v1beta1/genesis";
import * as _11 from "./authz/v1beta1/query";
import * as _12 from "./authz/v1beta1/tx";
import * as _13 from "./bank/v1beta1/authz";
import * as _14 from "./bank/v1beta1/bank";
import * as _15 from "./bank/v1beta1/genesis";
import * as _16 from "./bank/v1beta1/query";
import * as _17 from "./bank/v1beta1/tx";
import * as _18 from "./base/abci/v1beta1/abci";
import * as _19 from "./base/kv/v1beta1/kv";
import * as _20 from "./base/query/v1beta1/pagination";
import * as _21 from "./base/reflection/v1beta1/reflection";
import * as _22 from "./base/reflection/v2alpha1/reflection";
import * as _23 from "./base/snapshots/v1beta1/snapshot";
import * as _24 from "./base/store/v1beta1/commit_info";
import * as _25 from "./base/store/v1beta1/listening";
import * as _26 from "./base/tendermint/v1beta1/query";
import * as _27 from "./base/v1beta1/coin";
import * as _28 from "./capability/v1beta1/capability";
import * as _29 from "./capability/v1beta1/genesis";
import * as _30 from "./crisis/v1beta1/genesis";
import * as _31 from "./crisis/v1beta1/tx";
import * as _32 from "./crypto/ed25519/keys";
import * as _33 from "./crypto/hd/v1/hd";
import * as _34 from "./crypto/keyring/v1/record";
import * as _35 from "./crypto/multisig/keys";
import * as _36 from "./crypto/secp256k1/keys";
import * as _37 from "./crypto/secp256r1/keys";
import * as _38 from "./distribution/v1beta1/distribution";
import * as _39 from "./distribution/v1beta1/genesis";
import * as _40 from "./distribution/v1beta1/query";
import * as _41 from "./distribution/v1beta1/tx";
import * as _42 from "./evidence/v1beta1/evidence";
import * as _43 from "./evidence/v1beta1/genesis";
import * as _44 from "./evidence/v1beta1/query";
import * as _45 from "./evidence/v1beta1/tx";
import * as _46 from "./feegrant/v1beta1/feegrant";
import * as _47 from "./feegrant/v1beta1/genesis";
import * as _48 from "./feegrant/v1beta1/query";
import * as _49 from "./feegrant/v1beta1/tx";
import * as _50 from "./genutil/v1beta1/genesis";
import * as _51 from "./gov/v1beta1/genesis";
import * as _52 from "./gov/v1beta1/gov";
import * as _53 from "./gov/v1beta1/query";
import * as _54 from "./gov/v1beta1/tx";
import * as _55 from "./mint/v1beta1/genesis";
import * as _56 from "./mint/v1beta1/mint";
import * as _57 from "./mint/v1beta1/query";
import * as _59 from "./nft/v1beta1/event";
import * as _60 from "./nft/v1beta1/genesis";
import * as _61 from "./nft/v1beta1/nft";
import * as _62 from "./nft/v1beta1/query";
import * as _63 from "./nft/v1beta1/tx";
import * as _64 from "./orm/v1/orm";
import * as _65 from "./orm/v1alpha1/schema";
import * as _66 from "./params/v1beta1/params";
import * as _67 from "./params/v1beta1/query";
import * as _68 from "./slashing/v1beta1/genesis";
import * as _69 from "./slashing/v1beta1/query";
import * as _70 from "./slashing/v1beta1/slashing";
import * as _71 from "./slashing/v1beta1/tx";
import * as _72 from "./staking/v1beta1/authz";
import * as _73 from "./staking/v1beta1/genesis";
import * as _74 from "./staking/v1beta1/query";
import * as _75 from "./staking/v1beta1/staking";
import * as _76 from "./staking/v1beta1/tx";
import * as _77 from "./tx/signing/v1beta1/signing";
import * as _78 from "./tx/v1beta1/service";
import * as _79 from "./tx/v1beta1/tx";
import * as _80 from "./upgrade/v1beta1/query";
import * as _81 from "./upgrade/v1beta1/tx";
import * as _82 from "./upgrade/v1beta1/upgrade";
import * as _83 from "./vesting/v1beta1/tx";
import * as _84 from "./vesting/v1beta1/vesting";
import * as _201 from "./auth/v1beta1/query.lcd";
import * as _202 from "./authz/v1beta1/query.lcd";
import * as _203 from "./bank/v1beta1/query.lcd";
import * as _204 from "./base/tendermint/v1beta1/query.lcd";
import * as _205 from "./distribution/v1beta1/query.lcd";
import * as _206 from "./evidence/v1beta1/query.lcd";
import * as _207 from "./feegrant/v1beta1/query.lcd";
import * as _208 from "./gov/v1beta1/query.lcd";
import * as _209 from "./mint/v1beta1/query.lcd";
import * as _210 from "./nft/v1beta1/query.lcd";
import * as _211 from "./params/v1beta1/query.lcd";
import * as _212 from "./slashing/v1beta1/query.lcd";
import * as _213 from "./staking/v1beta1/query.lcd";
import * as _214 from "./tx/v1beta1/service.lcd";
import * as _215 from "./upgrade/v1beta1/query.lcd";
import * as _216 from "./app/v1alpha1/query.rpc.query";
import * as _217 from "./auth/v1beta1/query.rpc.query";
import * as _218 from "./authz/v1beta1/query.rpc.query";
import * as _219 from "./bank/v1beta1/query.rpc.query";
import * as _220 from "./base/tendermint/v1beta1/query.rpc.svc";
import * as _221 from "./distribution/v1beta1/query.rpc.query";
import * as _222 from "./evidence/v1beta1/query.rpc.query";
import * as _223 from "./feegrant/v1beta1/query.rpc.query";
import * as _224 from "./gov/v1beta1/query.rpc.query";
import * as _225 from "./mint/v1beta1/query.rpc.query";
import * as _226 from "./nft/v1beta1/query.rpc.query";
import * as _227 from "./params/v1beta1/query.rpc.query";
import * as _228 from "./slashing/v1beta1/query.rpc.query";
import * as _229 from "./staking/v1beta1/query.rpc.query";
import * as _230 from "./tx/v1beta1/service.rpc.svc";
import * as _231 from "./upgrade/v1beta1/query.rpc.query";
import * as _232 from "./authz/v1beta1/tx.rpc.msg";
import * as _233 from "./bank/v1beta1/tx.rpc.msg";
import * as _234 from "./crisis/v1beta1/tx.rpc.msg";
import * as _235 from "./distribution/v1beta1/tx.rpc.msg";
import * as _236 from "./evidence/v1beta1/tx.rpc.msg";
import * as _237 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _238 from "./gov/v1beta1/tx.rpc.msg";
import * as _239 from "./nft/v1beta1/tx.rpc.msg";
import * as _240 from "./slashing/v1beta1/tx.rpc.msg";
import * as _241 from "./staking/v1beta1/tx.rpc.msg";
import * as _242 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _243 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        const v1alpha1: {
            QueryClientImpl: typeof _216.QueryClientImpl;
            QueryConfigRequest: {
                encode(_: _4.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryConfigRequest;
                fromJSON(_: any): _4.QueryConfigRequest;
                toJSON(_: _4.QueryConfigRequest): unknown;
                fromPartial(_: {}): _4.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _4.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryConfigResponse;
                fromJSON(object: any): _4.QueryConfigResponse;
                toJSON(message: _4.QueryConfigResponse): unknown;
                fromPartial(object: {
                    config?: {
                        modules?: {
                            name?: string;
                            config?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    };
                }): _4.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _3.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.ModuleDescriptor;
                fromJSON(object: any): _3.ModuleDescriptor;
                toJSON(message: _3.ModuleDescriptor): unknown;
                fromPartial(object: {
                    go_import?: string;
                    use_package?: {
                        name?: string;
                        revision?: number;
                    }[];
                    can_migrate_from?: {
                        module?: string;
                    }[];
                }): _3.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _3.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.PackageReference;
                fromJSON(object: any): _3.PackageReference;
                toJSON(message: _3.PackageReference): unknown;
                fromPartial(object: {
                    name?: string;
                    revision?: number;
                }): _3.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _3.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.MigrateFromInfo;
                fromJSON(object: any): _3.MigrateFromInfo;
                toJSON(message: _3.MigrateFromInfo): unknown;
                fromPartial(object: {
                    module?: string;
                }): _3.MigrateFromInfo;
            };
            Config: {
                encode(message: _2.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Config;
                fromJSON(object: any): _2.Config;
                toJSON(message: _2.Config): unknown;
                fromPartial(object: {
                    modules?: {
                        name?: string;
                        config?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _2.Config;
            };
            ModuleConfig: {
                encode(message: _2.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.ModuleConfig;
                fromJSON(object: any): _2.ModuleConfig;
                toJSON(message: _2.ModuleConfig): unknown;
                fromPartial(object: {
                    name?: string;
                    config?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                }): _2.ModuleConfig;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _217.QueryClientImpl;
            LCDQueryClient: typeof _201.LCDQueryClient;
            QueryAccountsRequest: {
                encode(message: _7.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAccountsRequest;
                fromJSON(object: any): _7.QueryAccountsRequest;
                toJSON(message: _7.QueryAccountsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _7.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _7.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAccountsResponse;
                fromJSON(object: any): _7.QueryAccountsResponse;
                toJSON(message: _7.QueryAccountsResponse): unknown;
                fromPartial(object: {
                    accounts?: {
                        type_url?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _7.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _7.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAccountRequest;
                fromJSON(object: any): _7.QueryAccountRequest;
                toJSON(message: _7.QueryAccountRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _7.QueryAccountRequest;
            };
            QueryModuleAccountsRequest: {
                encode(_: _7.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryModuleAccountsRequest;
                fromJSON(_: any): _7.QueryModuleAccountsRequest;
                toJSON(_: _7.QueryModuleAccountsRequest): unknown;
                fromPartial(_: {}): _7.QueryModuleAccountsRequest;
            };
            QueryParamsResponse: {
                encode(message: _7.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryParamsResponse;
                fromJSON(object: any): _7.QueryParamsResponse;
                toJSON(message: _7.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        max_memo_characters?: any;
                        tx_sig_limit?: any;
                        tx_size_cost_per_byte?: any;
                        sig_verify_cost_ed25519?: any;
                        sig_verify_cost_secp256k1?: any;
                    };
                }): _7.QueryParamsResponse;
            };
            QueryAccountResponse: {
                encode(message: _7.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAccountResponse;
                fromJSON(object: any): _7.QueryAccountResponse;
                toJSON(message: _7.QueryAccountResponse): unknown;
                fromPartial(object: {
                    account?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                }): _7.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _7.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryParamsRequest;
                fromJSON(_: any): _7.QueryParamsRequest;
                toJSON(_: _7.QueryParamsRequest): unknown;
                fromPartial(_: {}): _7.QueryParamsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _7.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryModuleAccountsResponse;
                fromJSON(object: any): _7.QueryModuleAccountsResponse;
                toJSON(message: _7.QueryModuleAccountsResponse): unknown;
                fromPartial(object: {
                    accounts?: {
                        type_url?: string;
                        value?: Uint8Array;
                    }[];
                }): _7.QueryModuleAccountsResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _7.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Bech32PrefixRequest;
                fromJSON(_: any): _7.Bech32PrefixRequest;
                toJSON(_: _7.Bech32PrefixRequest): unknown;
                fromPartial(_: {}): _7.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _7.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Bech32PrefixResponse;
                fromJSON(object: any): _7.Bech32PrefixResponse;
                toJSON(message: _7.Bech32PrefixResponse): unknown;
                fromPartial(object: {
                    bech32_prefix?: string;
                }): _7.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _7.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.AddressBytesToStringRequest;
                fromJSON(object: any): _7.AddressBytesToStringRequest;
                toJSON(message: _7.AddressBytesToStringRequest): unknown;
                fromPartial(object: {
                    address_bytes?: Uint8Array;
                }): _7.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _7.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.AddressBytesToStringResponse;
                fromJSON(object: any): _7.AddressBytesToStringResponse;
                toJSON(message: _7.AddressBytesToStringResponse): unknown;
                fromPartial(object: {
                    address_string?: string;
                }): _7.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _7.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.AddressStringToBytesRequest;
                fromJSON(object: any): _7.AddressStringToBytesRequest;
                toJSON(message: _7.AddressStringToBytesRequest): unknown;
                fromPartial(object: {
                    address_string?: string;
                }): _7.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _7.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.AddressStringToBytesResponse;
                fromJSON(object: any): _7.AddressStringToBytesResponse;
                toJSON(message: _7.AddressStringToBytesResponse): unknown;
                fromPartial(object: {
                    address_bytes?: Uint8Array;
                }): _7.AddressStringToBytesResponse;
            };
            GenesisState: {
                encode(message: _6.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.GenesisState;
                fromJSON(object: any): _6.GenesisState;
                toJSON(message: _6.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        max_memo_characters?: any;
                        tx_sig_limit?: any;
                        tx_size_cost_per_byte?: any;
                        sig_verify_cost_ed25519?: any;
                        sig_verify_cost_secp256k1?: any;
                    };
                    accounts?: {
                        type_url?: string;
                        value?: Uint8Array;
                    }[];
                }): _6.GenesisState;
            };
            BaseAccount: {
                encode(message: _5.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.BaseAccount;
                fromJSON(object: any): _5.BaseAccount;
                toJSON(message: _5.BaseAccount): unknown;
                fromPartial(object: {
                    address?: string;
                    pub_key?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                    account_number?: any;
                    sequence?: any;
                }): _5.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _5.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.ModuleAccount;
                fromJSON(object: any): _5.ModuleAccount;
                toJSON(message: _5.ModuleAccount): unknown;
                fromPartial(object: {
                    base_account?: {
                        address?: string;
                        pub_key?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        account_number?: any;
                        sequence?: any;
                    };
                    name?: string;
                    permissions?: string[];
                }): _5.ModuleAccount;
            };
            Params: {
                encode(message: _5.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.Params;
                fromJSON(object: any): _5.Params;
                toJSON(message: _5.Params): unknown;
                fromPartial(object: {
                    max_memo_characters?: any;
                    tx_sig_limit?: any;
                    tx_size_cost_per_byte?: any;
                    sig_verify_cost_ed25519?: any;
                    sig_verify_cost_secp256k1?: any;
                }): _5.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _232.MsgClientImpl;
            QueryClientImpl: typeof _218.QueryClientImpl;
            LCDQueryClient: typeof _202.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _12.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _12.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _12.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _12.MsgGrant): {
                        typeUrl: string;
                        value: _12.MsgGrant;
                    };
                    exec(value: _12.MsgExec): {
                        typeUrl: string;
                        value: _12.MsgExec;
                    };
                    revoke(value: _12.MsgRevoke): {
                        typeUrl: string;
                        value: _12.MsgRevoke;
                    };
                };
                toJSON: {
                    grant(value: _12.MsgGrant): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _12.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revoke(value: _12.MsgRevoke): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _12.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _12.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _12.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _12.MsgGrant): {
                        typeUrl: string;
                        value: _12.MsgGrant;
                    };
                    exec(value: _12.MsgExec): {
                        typeUrl: string;
                        value: _12.MsgExec;
                    };
                    revoke(value: _12.MsgRevoke): {
                        typeUrl: string;
                        value: _12.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _12.MsgGrant) => {
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
                    }) => _12.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _12.MsgExec) => {
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
                    }) => _12.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msg_type_url }: _12.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _12.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _12.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgGrant;
                fromJSON(object: any): _12.MsgGrant;
                toJSON(message: _12.MsgGrant): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    grant?: {
                        authorization?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    };
                }): _12.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _12.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgExecResponse;
                fromJSON(object: any): _12.MsgExecResponse;
                toJSON(message: _12.MsgExecResponse): unknown;
                fromPartial(object: {
                    results?: Uint8Array[];
                }): _12.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _12.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgExec;
                fromJSON(object: any): _12.MsgExec;
                toJSON(message: _12.MsgExec): unknown;
                fromPartial(object: {
                    grantee?: string;
                    msgs?: {
                        type_url?: string;
                        value?: Uint8Array;
                    }[];
                }): _12.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _12.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgGrantResponse;
                fromJSON(_: any): _12.MsgGrantResponse;
                toJSON(_: _12.MsgGrantResponse): unknown;
                fromPartial(_: {}): _12.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _12.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgRevoke;
                fromJSON(object: any): _12.MsgRevoke;
                toJSON(message: _12.MsgRevoke): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msg_type_url?: string;
                }): _12.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _12.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgRevokeResponse;
                fromJSON(_: any): _12.MsgRevokeResponse;
                toJSON(_: _12.MsgRevokeResponse): unknown;
                fromPartial(_: {}): _12.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _11.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGrantsRequest;
                fromJSON(object: any): _11.QueryGrantsRequest;
                toJSON(message: _11.QueryGrantsRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msg_type_url?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _11.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _11.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGrantsResponse;
                fromJSON(object: any): _11.QueryGrantsResponse;
                toJSON(message: _11.QueryGrantsResponse): unknown;
                fromPartial(object: {
                    grants?: {
                        authorization?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _11.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _11.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGranterGrantsRequest;
                fromJSON(object: any): _11.QueryGranterGrantsRequest;
                toJSON(message: _11.QueryGranterGrantsRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _11.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _11.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGranterGrantsResponse;
                fromJSON(object: any): _11.QueryGranterGrantsResponse;
                toJSON(message: _11.QueryGranterGrantsResponse): unknown;
                fromPartial(object: {
                    grants?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _11.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _11.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGranteeGrantsRequest;
                fromJSON(object: any): _11.QueryGranteeGrantsRequest;
                toJSON(message: _11.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: {
                    grantee?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _11.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _11.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGranteeGrantsResponse;
                fromJSON(object: any): _11.QueryGranteeGrantsResponse;
                toJSON(message: _11.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: {
                    grants?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _11.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _10.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.GenesisState;
                fromJSON(object: any): _10.GenesisState;
                toJSON(message: _10.GenesisState): unknown;
                fromPartial(object: {
                    authorization?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                }): _10.GenesisState;
            };
            EventGrant: {
                encode(message: _9.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.EventGrant;
                fromJSON(object: any): _9.EventGrant;
                toJSON(message: _9.EventGrant): unknown;
                fromPartial(object: {
                    msg_type_url?: string;
                    granter?: string;
                    grantee?: string;
                }): _9.EventGrant;
            };
            EventRevoke: {
                encode(message: _9.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.EventRevoke;
                fromJSON(object: any): _9.EventRevoke;
                toJSON(message: _9.EventRevoke): unknown;
                fromPartial(object: {
                    msg_type_url?: string;
                    granter?: string;
                    grantee?: string;
                }): _9.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _8.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GenericAuthorization;
                fromJSON(object: any): _8.GenericAuthorization;
                toJSON(message: _8.GenericAuthorization): unknown;
                fromPartial(object: {
                    msg?: string;
                }): _8.GenericAuthorization;
            };
            Grant: {
                encode(message: _8.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Grant;
                fromJSON(object: any): _8.Grant;
                toJSON(message: _8.Grant): unknown;
                fromPartial(object: {
                    authorization?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                    expiration?: Date;
                }): _8.Grant;
            };
            GrantAuthorization: {
                encode(message: _8.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GrantAuthorization;
                fromJSON(object: any): _8.GrantAuthorization;
                toJSON(message: _8.GrantAuthorization): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    authorization?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                    expiration?: Date;
                }): _8.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _8.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GrantQueueItem;
                fromJSON(object: any): _8.GrantQueueItem;
                toJSON(message: _8.GrantQueueItem): unknown;
                fromPartial(object: {
                    msg_type_urls?: string[];
                }): _8.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _233.MsgClientImpl;
            QueryClientImpl: typeof _219.QueryClientImpl;
            LCDQueryClient: typeof _203.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _17.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _17.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _17.MsgSend): {
                        typeUrl: string;
                        value: _17.MsgSend;
                    };
                    multiSend(value: _17.MsgMultiSend): {
                        typeUrl: string;
                        value: _17.MsgMultiSend;
                    };
                };
                toJSON: {
                    send(value: _17.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _17.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _17.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _17.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _17.MsgSend): {
                        typeUrl: string;
                        value: _17.MsgSend;
                    };
                    multiSend(value: _17.MsgMultiSend): {
                        typeUrl: string;
                        value: _17.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ from_address, to_address, amount }: _17.MsgSend) => {
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
                    }) => _17.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _17.MsgMultiSend) => {
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
                    }) => _17.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _17.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgSend;
                fromJSON(object: any): _17.MsgSend;
                toJSON(message: _17.MsgSend): unknown;
                fromPartial(object: {
                    from_address?: string;
                    to_address?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _17.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _17.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgSendResponse;
                fromJSON(_: any): _17.MsgSendResponse;
                toJSON(_: _17.MsgSendResponse): unknown;
                fromPartial(_: {}): _17.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _17.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgMultiSend;
                fromJSON(object: any): _17.MsgMultiSend;
                toJSON(message: _17.MsgMultiSend): unknown;
                fromPartial(object: {
                    inputs?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    outputs?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _17.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _17.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgMultiSendResponse;
                fromJSON(_: any): _17.MsgMultiSendResponse;
                toJSON(_: _17.MsgMultiSendResponse): unknown;
                fromPartial(_: {}): _17.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _16.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryBalanceRequest;
                fromJSON(object: any): _16.QueryBalanceRequest;
                toJSON(message: _16.QueryBalanceRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    denom?: string;
                }): _16.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _16.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryBalanceResponse;
                fromJSON(object: any): _16.QueryBalanceResponse;
                toJSON(message: _16.QueryBalanceResponse): unknown;
                fromPartial(object: {
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _16.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _16.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryAllBalancesRequest;
                fromJSON(object: any): _16.QueryAllBalancesRequest;
                toJSON(message: _16.QueryAllBalancesRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _16.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _16.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryAllBalancesResponse;
                fromJSON(object: any): _16.QueryAllBalancesResponse;
                toJSON(message: _16.QueryAllBalancesResponse): unknown;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _16.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _16.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QuerySpendableBalancesRequest;
                fromJSON(object: any): _16.QuerySpendableBalancesRequest;
                toJSON(message: _16.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _16.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _16.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QuerySpendableBalancesResponse;
                fromJSON(object: any): _16.QuerySpendableBalancesResponse;
                toJSON(message: _16.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _16.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _16.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryTotalSupplyRequest;
                fromJSON(object: any): _16.QueryTotalSupplyRequest;
                toJSON(message: _16.QueryTotalSupplyRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _16.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _16.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryTotalSupplyResponse;
                fromJSON(object: any): _16.QueryTotalSupplyResponse;
                toJSON(message: _16.QueryTotalSupplyResponse): unknown;
                fromPartial(object: {
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _16.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _16.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QuerySupplyOfRequest;
                fromJSON(object: any): _16.QuerySupplyOfRequest;
                toJSON(message: _16.QuerySupplyOfRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _16.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _16.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QuerySupplyOfResponse;
                fromJSON(object: any): _16.QuerySupplyOfResponse;
                toJSON(message: _16.QuerySupplyOfResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _16.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _16.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryParamsRequest;
                fromJSON(_: any): _16.QueryParamsRequest;
                toJSON(_: _16.QueryParamsRequest): unknown;
                fromPartial(_: {}): _16.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _16.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryParamsResponse;
                fromJSON(object: any): _16.QueryParamsResponse;
                toJSON(message: _16.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        send_enabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        default_send_enabled?: boolean;
                    };
                }): _16.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _16.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomsMetadataRequest;
                fromJSON(object: any): _16.QueryDenomsMetadataRequest;
                toJSON(message: _16.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _16.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _16.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomsMetadataResponse;
                fromJSON(object: any): _16.QueryDenomsMetadataResponse;
                toJSON(message: _16.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: {
                    metadatas?: {
                        description?: string;
                        denom_units?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uri_hash?: string;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _16.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _16.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomMetadataRequest;
                fromJSON(object: any): _16.QueryDenomMetadataRequest;
                toJSON(message: _16.QueryDenomMetadataRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _16.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _16.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomMetadataResponse;
                fromJSON(object: any): _16.QueryDenomMetadataResponse;
                toJSON(message: _16.QueryDenomMetadataResponse): unknown;
                fromPartial(object: {
                    metadata?: {
                        description?: string;
                        denom_units?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uri_hash?: string;
                    };
                }): _16.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _16.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomOwnersRequest;
                fromJSON(object: any): _16.QueryDenomOwnersRequest;
                toJSON(message: _16.QueryDenomOwnersRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _16.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _16.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.DenomOwner;
                fromJSON(object: any): _16.DenomOwner;
                toJSON(message: _16.DenomOwner): unknown;
                fromPartial(object: {
                    address?: string;
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _16.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _16.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomOwnersResponse;
                fromJSON(object: any): _16.QueryDenomOwnersResponse;
                toJSON(message: _16.QueryDenomOwnersResponse): unknown;
                fromPartial(object: {
                    denom_owners?: {
                        address?: string;
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _16.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _15.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.GenesisState;
                fromJSON(object: any): _15.GenesisState;
                toJSON(message: _15.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        send_enabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        default_send_enabled?: boolean;
                    };
                    balances?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    denom_metadata?: {
                        description?: string;
                        denom_units?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uri_hash?: string;
                    }[];
                }): _15.GenesisState;
            };
            Balance: {
                encode(message: _15.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Balance;
                fromJSON(object: any): _15.Balance;
                toJSON(message: _15.Balance): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _15.Balance;
            };
            Params: {
                encode(message: _14.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Params;
                fromJSON(object: any): _14.Params;
                toJSON(message: _14.Params): unknown;
                fromPartial(object: {
                    send_enabled?: {
                        denom?: string;
                        enabled?: boolean;
                    }[];
                    default_send_enabled?: boolean;
                }): _14.Params;
            };
            SendEnabled: {
                encode(message: _14.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.SendEnabled;
                fromJSON(object: any): _14.SendEnabled;
                toJSON(message: _14.SendEnabled): unknown;
                fromPartial(object: {
                    denom?: string;
                    enabled?: boolean;
                }): _14.SendEnabled;
            };
            Input: {
                encode(message: _14.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Input;
                fromJSON(object: any): _14.Input;
                toJSON(message: _14.Input): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _14.Input;
            };
            Output: {
                encode(message: _14.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Output;
                fromJSON(object: any): _14.Output;
                toJSON(message: _14.Output): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _14.Output;
            };
            Supply: {
                encode(message: _14.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Supply;
                fromJSON(object: any): _14.Supply;
                toJSON(message: _14.Supply): unknown;
                fromPartial(object: {
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _14.Supply;
            };
            DenomUnit: {
                encode(message: _14.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.DenomUnit;
                fromJSON(object: any): _14.DenomUnit;
                toJSON(message: _14.DenomUnit): unknown;
                fromPartial(object: {
                    denom?: string;
                    exponent?: number;
                    aliases?: string[];
                }): _14.DenomUnit;
            };
            Metadata: {
                encode(message: _14.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Metadata;
                fromJSON(object: any): _14.Metadata;
                toJSON(message: _14.Metadata): unknown;
                fromPartial(object: {
                    description?: string;
                    denom_units?: {
                        denom?: string;
                        exponent?: number;
                        aliases?: string[];
                    }[];
                    base?: string;
                    display?: string;
                    name?: string;
                    symbol?: string;
                    uri?: string;
                    uri_hash?: string;
                }): _14.Metadata;
            };
            SendAuthorization: {
                encode(message: _13.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.SendAuthorization;
                fromJSON(object: any): _13.SendAuthorization;
                toJSON(message: _13.SendAuthorization): unknown;
                fromPartial(object: {
                    spend_limit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _13.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _18.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.TxResponse;
                    fromJSON(object: any): _18.TxResponse;
                    toJSON(message: _18.TxResponse): unknown;
                    fromPartial(object: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        raw_log?: string;
                        logs?: {
                            msg_index?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gas_wanted?: any;
                        gas_used?: any;
                        tx?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    }): _18.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _18.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ABCIMessageLog;
                    fromJSON(object: any): _18.ABCIMessageLog;
                    toJSON(message: _18.ABCIMessageLog): unknown;
                    fromPartial(object: {
                        msg_index?: number;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                        }[];
                    }): _18.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _18.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.StringEvent;
                    fromJSON(object: any): _18.StringEvent;
                    toJSON(message: _18.StringEvent): unknown;
                    fromPartial(object: {
                        type?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    }): _18.StringEvent;
                };
                Attribute: {
                    encode(message: _18.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Attribute;
                    fromJSON(object: any): _18.Attribute;
                    toJSON(message: _18.Attribute): unknown;
                    fromPartial(object: {
                        key?: string;
                        value?: string;
                    }): _18.Attribute;
                };
                GasInfo: {
                    encode(message: _18.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GasInfo;
                    fromJSON(object: any): _18.GasInfo;
                    toJSON(message: _18.GasInfo): unknown;
                    fromPartial(object: {
                        gas_wanted?: any;
                        gas_used?: any;
                    }): _18.GasInfo;
                };
                Result: {
                    encode(message: _18.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Result;
                    fromJSON(object: any): _18.Result;
                    toJSON(message: _18.Result): unknown;
                    fromPartial(object: {
                        data?: Uint8Array;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                        msg_responses?: {
                            type_url?: string;
                            value?: Uint8Array;
                        }[];
                    }): _18.Result;
                };
                SimulationResponse: {
                    encode(message: _18.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.SimulationResponse;
                    fromJSON(object: any): _18.SimulationResponse;
                    toJSON(message: _18.SimulationResponse): unknown;
                    fromPartial(object: {
                        gas_info?: {
                            gas_wanted?: any;
                            gas_used?: any;
                        };
                        result?: {
                            data?: Uint8Array;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    index?: boolean;
                                }[];
                            }[];
                            msg_responses?: {
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                        };
                    }): _18.SimulationResponse;
                };
                MsgData: {
                    encode(message: _18.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgData;
                    fromJSON(object: any): _18.MsgData;
                    toJSON(message: _18.MsgData): unknown;
                    fromPartial(object: {
                        msg_type?: string;
                        data?: Uint8Array;
                    }): _18.MsgData;
                };
                TxMsgData: {
                    encode(message: _18.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.TxMsgData;
                    fromJSON(object: any): _18.TxMsgData;
                    toJSON(message: _18.TxMsgData): unknown;
                    fromPartial(object: {
                        data?: {
                            msg_type?: string;
                            data?: Uint8Array;
                        }[];
                        msg_responses?: {
                            type_url?: string;
                            value?: Uint8Array;
                        }[];
                    }): _18.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _18.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.SearchTxsResult;
                    fromJSON(object: any): _18.SearchTxsResult;
                    toJSON(message: _18.SearchTxsResult): unknown;
                    fromPartial(object: {
                        total_count?: any;
                        count?: any;
                        page_number?: any;
                        page_total?: any;
                        limit?: any;
                        txs?: {
                            height?: any;
                            txhash?: string;
                            codespace?: string;
                            code?: number;
                            data?: string;
                            raw_log?: string;
                            logs?: {
                                msg_index?: number;
                                log?: string;
                                events?: {
                                    type?: string;
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                }[];
                            }[];
                            info?: string;
                            gas_wanted?: any;
                            gas_used?: any;
                            tx?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                            timestamp?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    index?: boolean;
                                }[];
                            }[];
                        }[];
                    }): _18.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _19.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Pairs;
                    fromJSON(object: any): _19.Pairs;
                    toJSON(message: _19.Pairs): unknown;
                    fromPartial(object: {
                        pairs?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }): _19.Pairs;
                };
                Pair: {
                    encode(message: _19.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Pair;
                    fromJSON(object: any): _19.Pair;
                    toJSON(message: _19.Pair): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _19.Pair;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _20.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.PageRequest;
                    fromJSON(object: any): _20.PageRequest;
                    toJSON(message: _20.PageRequest): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    }): _20.PageRequest;
                };
                PageResponse: {
                    encode(message: _20.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.PageResponse;
                    fromJSON(object: any): _20.PageResponse;
                    toJSON(message: _20.PageResponse): unknown;
                    fromPartial(object: {
                        next_key?: Uint8Array;
                        total?: any;
                    }): _20.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _21.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.ListAllInterfacesRequest;
                    fromJSON(_: any): _21.ListAllInterfacesRequest;
                    toJSON(_: _21.ListAllInterfacesRequest): unknown;
                    fromPartial(_: {}): _21.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _21.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.ListAllInterfacesResponse;
                    fromJSON(object: any): _21.ListAllInterfacesResponse;
                    toJSON(message: _21.ListAllInterfacesResponse): unknown;
                    fromPartial(object: {
                        interface_names?: string[];
                    }): _21.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _21.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.ListImplementationsRequest;
                    fromJSON(object: any): _21.ListImplementationsRequest;
                    toJSON(message: _21.ListImplementationsRequest): unknown;
                    fromPartial(object: {
                        interface_name?: string;
                    }): _21.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _21.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.ListImplementationsResponse;
                    fromJSON(object: any): _21.ListImplementationsResponse;
                    toJSON(message: _21.ListImplementationsResponse): unknown;
                    fromPartial(object: {
                        implementation_message_names?: string[];
                    }): _21.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _22.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.AppDescriptor;
                    fromJSON(object: any): _22.AppDescriptor;
                    toJSON(message: _22.AppDescriptor): unknown;
                    fromPartial(object: {
                        authn?: {
                            sign_modes?: {
                                name?: string;
                                number?: number;
                                authn_info_provider_method_fullname?: string;
                            }[];
                        };
                        chain?: {
                            id?: string;
                        };
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interface_accepting_messages?: {
                                    fullname?: string;
                                    field_descriptor_names?: string[];
                                }[];
                                interface_implementers?: {
                                    fullname?: string;
                                    type_url?: string;
                                }[];
                            }[];
                        };
                        configuration?: {
                            bech32_account_address_prefix?: string;
                        };
                        query_services?: {
                            query_services?: {
                                fullname?: string;
                                is_module?: boolean;
                                methods?: {
                                    name?: string;
                                    full_query_path?: string;
                                }[];
                            }[];
                        };
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msg_type_url?: string;
                            }[];
                        };
                    }): _22.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _22.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.TxDescriptor;
                    fromJSON(object: any): _22.TxDescriptor;
                    toJSON(message: _22.TxDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        msgs?: {
                            msg_type_url?: string;
                        }[];
                    }): _22.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _22.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.AuthnDescriptor;
                    fromJSON(object: any): _22.AuthnDescriptor;
                    toJSON(message: _22.AuthnDescriptor): unknown;
                    fromPartial(object: {
                        sign_modes?: {
                            name?: string;
                            number?: number;
                            authn_info_provider_method_fullname?: string;
                        }[];
                    }): _22.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _22.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.SigningModeDescriptor;
                    fromJSON(object: any): _22.SigningModeDescriptor;
                    toJSON(message: _22.SigningModeDescriptor): unknown;
                    fromPartial(object: {
                        name?: string;
                        number?: number;
                        authn_info_provider_method_fullname?: string;
                    }): _22.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _22.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ChainDescriptor;
                    fromJSON(object: any): _22.ChainDescriptor;
                    toJSON(message: _22.ChainDescriptor): unknown;
                    fromPartial(object: {
                        id?: string;
                    }): _22.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _22.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.CodecDescriptor;
                    fromJSON(object: any): _22.CodecDescriptor;
                    toJSON(message: _22.CodecDescriptor): unknown;
                    fromPartial(object: {
                        interfaces?: {
                            fullname?: string;
                            interface_accepting_messages?: {
                                fullname?: string;
                                field_descriptor_names?: string[];
                            }[];
                            interface_implementers?: {
                                fullname?: string;
                                type_url?: string;
                            }[];
                        }[];
                    }): _22.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _22.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.InterfaceDescriptor;
                    fromJSON(object: any): _22.InterfaceDescriptor;
                    toJSON(message: _22.InterfaceDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        interface_accepting_messages?: {
                            fullname?: string;
                            field_descriptor_names?: string[];
                        }[];
                        interface_implementers?: {
                            fullname?: string;
                            type_url?: string;
                        }[];
                    }): _22.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _22.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _22.InterfaceImplementerDescriptor;
                    toJSON(message: _22.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        type_url?: string;
                    }): _22.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _22.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _22.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _22.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        field_descriptor_names?: string[];
                    }): _22.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _22.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ConfigurationDescriptor;
                    fromJSON(object: any): _22.ConfigurationDescriptor;
                    toJSON(message: _22.ConfigurationDescriptor): unknown;
                    fromPartial(object: {
                        bech32_account_address_prefix?: string;
                    }): _22.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _22.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.MsgDescriptor;
                    fromJSON(object: any): _22.MsgDescriptor;
                    toJSON(message: _22.MsgDescriptor): unknown;
                    fromPartial(object: {
                        msg_type_url?: string;
                    }): _22.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _22.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _22.GetAuthnDescriptorRequest;
                    toJSON(_: _22.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: {}): _22.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _22.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _22.GetAuthnDescriptorResponse;
                    toJSON(message: _22.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: {
                        authn?: {
                            sign_modes?: {
                                name?: string;
                                number?: number;
                                authn_info_provider_method_fullname?: string;
                            }[];
                        };
                    }): _22.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _22.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetChainDescriptorRequest;
                    fromJSON(_: any): _22.GetChainDescriptorRequest;
                    toJSON(_: _22.GetChainDescriptorRequest): unknown;
                    fromPartial(_: {}): _22.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _22.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetChainDescriptorResponse;
                    fromJSON(object: any): _22.GetChainDescriptorResponse;
                    toJSON(message: _22.GetChainDescriptorResponse): unknown;
                    fromPartial(object: {
                        chain?: {
                            id?: string;
                        };
                    }): _22.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _22.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetCodecDescriptorRequest;
                    fromJSON(_: any): _22.GetCodecDescriptorRequest;
                    toJSON(_: _22.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: {}): _22.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _22.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetCodecDescriptorResponse;
                    fromJSON(object: any): _22.GetCodecDescriptorResponse;
                    toJSON(message: _22.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: {
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interface_accepting_messages?: {
                                    fullname?: string;
                                    field_descriptor_names?: string[];
                                }[];
                                interface_implementers?: {
                                    fullname?: string;
                                    type_url?: string;
                                }[];
                            }[];
                        };
                    }): _22.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _22.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _22.GetConfigurationDescriptorRequest;
                    toJSON(_: _22.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: {}): _22.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _22.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _22.GetConfigurationDescriptorResponse;
                    toJSON(message: _22.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: {
                        config?: {
                            bech32_account_address_prefix?: string;
                        };
                    }): _22.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _22.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _22.GetQueryServicesDescriptorRequest;
                    toJSON(_: _22.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: {}): _22.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _22.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _22.GetQueryServicesDescriptorResponse;
                    toJSON(message: _22.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: {
                        queries?: {
                            query_services?: {
                                fullname?: string;
                                is_module?: boolean;
                                methods?: {
                                    name?: string;
                                    full_query_path?: string;
                                }[];
                            }[];
                        };
                    }): _22.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _22.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetTxDescriptorRequest;
                    fromJSON(_: any): _22.GetTxDescriptorRequest;
                    toJSON(_: _22.GetTxDescriptorRequest): unknown;
                    fromPartial(_: {}): _22.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _22.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetTxDescriptorResponse;
                    fromJSON(object: any): _22.GetTxDescriptorResponse;
                    toJSON(message: _22.GetTxDescriptorResponse): unknown;
                    fromPartial(object: {
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msg_type_url?: string;
                            }[];
                        };
                    }): _22.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _22.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryServicesDescriptor;
                    fromJSON(object: any): _22.QueryServicesDescriptor;
                    toJSON(message: _22.QueryServicesDescriptor): unknown;
                    fromPartial(object: {
                        query_services?: {
                            fullname?: string;
                            is_module?: boolean;
                            methods?: {
                                name?: string;
                                full_query_path?: string;
                            }[];
                        }[];
                    }): _22.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _22.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryServiceDescriptor;
                    fromJSON(object: any): _22.QueryServiceDescriptor;
                    toJSON(message: _22.QueryServiceDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        is_module?: boolean;
                        methods?: {
                            name?: string;
                            full_query_path?: string;
                        }[];
                    }): _22.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _22.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryMethodDescriptor;
                    fromJSON(object: any): _22.QueryMethodDescriptor;
                    toJSON(message: _22.QueryMethodDescriptor): unknown;
                    fromPartial(object: {
                        name?: string;
                        full_query_path?: string;
                    }): _22.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _23.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Snapshot;
                    fromJSON(object: any): _23.Snapshot;
                    toJSON(message: _23.Snapshot): unknown;
                    fromPartial(object: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: {
                            chunk_hashes?: Uint8Array[];
                        };
                    }): _23.Snapshot;
                };
                Metadata: {
                    encode(message: _23.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Metadata;
                    fromJSON(object: any): _23.Metadata;
                    toJSON(message: _23.Metadata): unknown;
                    fromPartial(object: {
                        chunk_hashes?: Uint8Array[];
                    }): _23.Metadata;
                };
                SnapshotItem: {
                    encode(message: _23.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotItem;
                    fromJSON(object: any): _23.SnapshotItem;
                    toJSON(message: _23.SnapshotItem): unknown;
                    fromPartial(object: {
                        store?: {
                            name?: string;
                        };
                        iavl?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            version?: any;
                            height?: number;
                        };
                        extension?: {
                            name?: string;
                            format?: number;
                        };
                        extension_payload?: {
                            payload?: Uint8Array;
                        };
                        kv?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        };
                        schema?: {
                            keys?: Uint8Array[];
                        };
                    }): _23.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _23.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotStoreItem;
                    fromJSON(object: any): _23.SnapshotStoreItem;
                    toJSON(message: _23.SnapshotStoreItem): unknown;
                    fromPartial(object: {
                        name?: string;
                    }): _23.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _23.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotIAVLItem;
                    fromJSON(object: any): _23.SnapshotIAVLItem;
                    toJSON(message: _23.SnapshotIAVLItem): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        version?: any;
                        height?: number;
                    }): _23.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _23.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotExtensionMeta;
                    fromJSON(object: any): _23.SnapshotExtensionMeta;
                    toJSON(message: _23.SnapshotExtensionMeta): unknown;
                    fromPartial(object: {
                        name?: string;
                        format?: number;
                    }): _23.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _23.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotExtensionPayload;
                    fromJSON(object: any): _23.SnapshotExtensionPayload;
                    toJSON(message: _23.SnapshotExtensionPayload): unknown;
                    fromPartial(object: {
                        payload?: Uint8Array;
                    }): _23.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _23.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotKVItem;
                    fromJSON(object: any): _23.SnapshotKVItem;
                    toJSON(message: _23.SnapshotKVItem): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _23.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _23.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotSchema;
                    fromJSON(object: any): _23.SnapshotSchema;
                    toJSON(message: _23.SnapshotSchema): unknown;
                    fromPartial(object: {
                        keys?: Uint8Array[];
                    }): _23.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _25.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.StoreKVPair;
                    fromJSON(object: any): _25.StoreKVPair;
                    toJSON(message: _25.StoreKVPair): unknown;
                    fromPartial(object: {
                        store_key?: string;
                        delete?: boolean;
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _25.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _24.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.CommitInfo;
                    fromJSON(object: any): _24.CommitInfo;
                    toJSON(message: _24.CommitInfo): unknown;
                    fromPartial(object: {
                        version?: any;
                        store_infos?: {
                            name?: string;
                            commit_id?: {
                                version?: any;
                                hash?: Uint8Array;
                            };
                        }[];
                    }): _24.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _24.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.StoreInfo;
                    fromJSON(object: any): _24.StoreInfo;
                    toJSON(message: _24.StoreInfo): unknown;
                    fromPartial(object: {
                        name?: string;
                        commit_id?: {
                            version?: any;
                            hash?: Uint8Array;
                        };
                    }): _24.StoreInfo;
                };
                CommitID: {
                    encode(message: _24.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.CommitID;
                    fromJSON(object: any): _24.CommitID;
                    toJSON(message: _24.CommitID): unknown;
                    fromPartial(object: {
                        version?: any;
                        hash?: Uint8Array;
                    }): _24.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _220.ServiceClientImpl;
                LCDServiceClient: typeof _204.LCDServiceClient;
                GetValidatorSetByHeightRequest: {
                    encode(message: _26.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _26.GetValidatorSetByHeightRequest;
                    toJSON(message: _26.GetValidatorSetByHeightRequest): unknown;
                    fromPartial(object: {
                        height?: any;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _26.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _26.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _26.GetValidatorSetByHeightResponse;
                    toJSON(message: _26.GetValidatorSetByHeightResponse): unknown;
                    fromPartial(object: {
                        block_height?: any;
                        validators?: {
                            address?: string;
                            pub_key?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                            voting_power?: any;
                            proposer_priority?: any;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: any;
                        };
                    }): _26.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _26.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _26.GetLatestValidatorSetRequest;
                    toJSON(message: _26.GetLatestValidatorSetRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _26.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _26.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _26.GetLatestValidatorSetResponse;
                    toJSON(message: _26.GetLatestValidatorSetResponse): unknown;
                    fromPartial(object: {
                        block_height?: any;
                        validators?: {
                            address?: string;
                            pub_key?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                            voting_power?: any;
                            proposer_priority?: any;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: any;
                        };
                    }): _26.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _26.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Validator;
                    fromJSON(object: any): _26.Validator;
                    toJSON(message: _26.Validator): unknown;
                    fromPartial(object: {
                        address?: string;
                        pub_key?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        voting_power?: any;
                        proposer_priority?: any;
                    }): _26.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _26.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetBlockByHeightRequest;
                    fromJSON(object: any): _26.GetBlockByHeightRequest;
                    toJSON(message: _26.GetBlockByHeightRequest): unknown;
                    fromPartial(object: {
                        height?: any;
                    }): _26.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _26.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetBlockByHeightResponse;
                    fromJSON(object: any): _26.GetBlockByHeightResponse;
                    toJSON(message: _26.GetBlockByHeightResponse): unknown;
                    fromPartial(object: {
                        block_id?: {
                            hash?: Uint8Array;
                            part_set_header?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        block?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chain_id?: string;
                                height?: any;
                                time?: Date;
                                last_block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                last_commit_hash?: Uint8Array;
                                data_hash?: Uint8Array;
                                validators_hash?: Uint8Array;
                                next_validators_hash?: Uint8Array;
                                consensus_hash?: Uint8Array;
                                app_hash?: Uint8Array;
                                last_results_hash?: Uint8Array;
                                evidence_hash?: Uint8Array;
                                proposer_address?: Uint8Array;
                            };
                            data?: {
                                txs?: Uint8Array[];
                            };
                            evidence?: {
                                evidence?: {
                                    duplicate_vote_evidence?: {
                                        vote_a?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: any;
                                            round?: number;
                                            block_id?: {
                                                hash?: Uint8Array;
                                                part_set_header?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validator_address?: Uint8Array;
                                            validator_index?: number;
                                            signature?: Uint8Array;
                                        };
                                        vote_b?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: any;
                                            round?: number;
                                            block_id?: {
                                                hash?: Uint8Array;
                                                part_set_header?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validator_address?: Uint8Array;
                                            validator_index?: number;
                                            signature?: Uint8Array;
                                        };
                                        total_voting_power?: any;
                                        validator_power?: any;
                                        timestamp?: Date;
                                    };
                                    light_client_attack_evidence?: {
                                        conflicting_block?: {
                                            signed_header?: {
                                                header?: {
                                                    version?: {
                                                        block?: any;
                                                        app?: any;
                                                    };
                                                    chain_id?: string;
                                                    height?: any;
                                                    time?: Date;
                                                    last_block_id?: {
                                                        hash?: Uint8Array;
                                                        part_set_header?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    last_commit_hash?: Uint8Array;
                                                    data_hash?: Uint8Array;
                                                    validators_hash?: Uint8Array;
                                                    next_validators_hash?: Uint8Array;
                                                    consensus_hash?: Uint8Array;
                                                    app_hash?: Uint8Array;
                                                    last_results_hash?: Uint8Array;
                                                    evidence_hash?: Uint8Array;
                                                    proposer_address?: Uint8Array;
                                                };
                                                commit?: {
                                                    height?: any;
                                                    round?: number;
                                                    block_id?: {
                                                        hash?: Uint8Array;
                                                        part_set_header?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    signatures?: {
                                                        block_id_flag?: import("../tendermint/types/types").BlockIDFlag;
                                                        validator_address?: Uint8Array;
                                                        timestamp?: Date;
                                                        signature?: Uint8Array;
                                                    }[];
                                                };
                                            };
                                            validator_set?: {
                                                validators?: {
                                                    address?: Uint8Array;
                                                    pub_key?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    voting_power?: any;
                                                    proposer_priority?: any;
                                                }[];
                                                proposer?: {
                                                    address?: Uint8Array;
                                                    pub_key?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    voting_power?: any;
                                                    proposer_priority?: any;
                                                };
                                                total_voting_power?: any;
                                            };
                                        };
                                        common_height?: any;
                                        byzantine_validators?: {
                                            address?: Uint8Array;
                                            pub_key?: {
                                                ed25519?: Uint8Array;
                                                secp256k1?: Uint8Array;
                                            };
                                            voting_power?: any;
                                            proposer_priority?: any;
                                        }[];
                                        total_voting_power?: any;
                                        timestamp?: Date;
                                    };
                                }[];
                            };
                            last_commit?: {
                                height?: any;
                                round?: number;
                                block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    block_id_flag?: import("../tendermint/types/types").BlockIDFlag;
                                    validator_address?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                    }): _26.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _26.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetLatestBlockRequest;
                    fromJSON(_: any): _26.GetLatestBlockRequest;
                    toJSON(_: _26.GetLatestBlockRequest): unknown;
                    fromPartial(_: {}): _26.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _26.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetLatestBlockResponse;
                    fromJSON(object: any): _26.GetLatestBlockResponse;
                    toJSON(message: _26.GetLatestBlockResponse): unknown;
                    fromPartial(object: {
                        block_id?: {
                            hash?: Uint8Array;
                            part_set_header?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        block?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chain_id?: string;
                                height?: any;
                                time?: Date;
                                last_block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                last_commit_hash?: Uint8Array;
                                data_hash?: Uint8Array;
                                validators_hash?: Uint8Array;
                                next_validators_hash?: Uint8Array;
                                consensus_hash?: Uint8Array;
                                app_hash?: Uint8Array;
                                last_results_hash?: Uint8Array;
                                evidence_hash?: Uint8Array;
                                proposer_address?: Uint8Array;
                            };
                            data?: {
                                txs?: Uint8Array[];
                            };
                            evidence?: {
                                evidence?: {
                                    duplicate_vote_evidence?: {
                                        vote_a?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: any;
                                            round?: number;
                                            block_id?: {
                                                hash?: Uint8Array;
                                                part_set_header?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validator_address?: Uint8Array;
                                            validator_index?: number;
                                            signature?: Uint8Array;
                                        };
                                        vote_b?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: any;
                                            round?: number;
                                            block_id?: {
                                                hash?: Uint8Array;
                                                part_set_header?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validator_address?: Uint8Array;
                                            validator_index?: number;
                                            signature?: Uint8Array;
                                        };
                                        total_voting_power?: any;
                                        validator_power?: any;
                                        timestamp?: Date;
                                    };
                                    light_client_attack_evidence?: {
                                        conflicting_block?: {
                                            signed_header?: {
                                                header?: {
                                                    version?: {
                                                        block?: any;
                                                        app?: any;
                                                    };
                                                    chain_id?: string;
                                                    height?: any;
                                                    time?: Date;
                                                    last_block_id?: {
                                                        hash?: Uint8Array;
                                                        part_set_header?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    last_commit_hash?: Uint8Array;
                                                    data_hash?: Uint8Array;
                                                    validators_hash?: Uint8Array;
                                                    next_validators_hash?: Uint8Array;
                                                    consensus_hash?: Uint8Array;
                                                    app_hash?: Uint8Array;
                                                    last_results_hash?: Uint8Array;
                                                    evidence_hash?: Uint8Array;
                                                    proposer_address?: Uint8Array;
                                                };
                                                commit?: {
                                                    height?: any;
                                                    round?: number;
                                                    block_id?: {
                                                        hash?: Uint8Array;
                                                        part_set_header?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    signatures?: {
                                                        block_id_flag?: import("../tendermint/types/types").BlockIDFlag;
                                                        validator_address?: Uint8Array;
                                                        timestamp?: Date;
                                                        signature?: Uint8Array;
                                                    }[];
                                                };
                                            };
                                            validator_set?: {
                                                validators?: {
                                                    address?: Uint8Array;
                                                    pub_key?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    voting_power?: any;
                                                    proposer_priority?: any;
                                                }[];
                                                proposer?: {
                                                    address?: Uint8Array;
                                                    pub_key?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    voting_power?: any;
                                                    proposer_priority?: any;
                                                };
                                                total_voting_power?: any;
                                            };
                                        };
                                        common_height?: any;
                                        byzantine_validators?: {
                                            address?: Uint8Array;
                                            pub_key?: {
                                                ed25519?: Uint8Array;
                                                secp256k1?: Uint8Array;
                                            };
                                            voting_power?: any;
                                            proposer_priority?: any;
                                        }[];
                                        total_voting_power?: any;
                                        timestamp?: Date;
                                    };
                                }[];
                            };
                            last_commit?: {
                                height?: any;
                                round?: number;
                                block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    block_id_flag?: import("../tendermint/types/types").BlockIDFlag;
                                    validator_address?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                    }): _26.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _26.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetSyncingRequest;
                    fromJSON(_: any): _26.GetSyncingRequest;
                    toJSON(_: _26.GetSyncingRequest): unknown;
                    fromPartial(_: {}): _26.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _26.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetSyncingResponse;
                    fromJSON(object: any): _26.GetSyncingResponse;
                    toJSON(message: _26.GetSyncingResponse): unknown;
                    fromPartial(object: {
                        syncing?: boolean;
                    }): _26.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _26.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetNodeInfoRequest;
                    fromJSON(_: any): _26.GetNodeInfoRequest;
                    toJSON(_: _26.GetNodeInfoRequest): unknown;
                    fromPartial(_: {}): _26.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _26.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetNodeInfoResponse;
                    fromJSON(object: any): _26.GetNodeInfoResponse;
                    toJSON(message: _26.GetNodeInfoResponse): unknown;
                    fromPartial(object: {
                        node_info?: {
                            protocol_version?: {
                                p2p?: any;
                                block?: any;
                                app?: any;
                            };
                            node_id?: string;
                            listen_addr?: string;
                            network?: string;
                            version?: string;
                            channels?: Uint8Array;
                            moniker?: string;
                            other?: {
                                tx_index?: string;
                                rpc_address?: string;
                            };
                        };
                        application_version?: {
                            name?: string;
                            app_name?: string;
                            version?: string;
                            git_commit?: string;
                            build_tags?: string;
                            go_version?: string;
                            build_deps?: {
                                path?: string;
                                version?: string;
                                sum?: string;
                            }[];
                            cosmos_sdk_version?: string;
                        };
                    }): _26.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _26.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.VersionInfo;
                    fromJSON(object: any): _26.VersionInfo;
                    toJSON(message: _26.VersionInfo): unknown;
                    fromPartial(object: {
                        name?: string;
                        app_name?: string;
                        version?: string;
                        git_commit?: string;
                        build_tags?: string;
                        go_version?: string;
                        build_deps?: {
                            path?: string;
                            version?: string;
                            sum?: string;
                        }[];
                        cosmos_sdk_version?: string;
                    }): _26.VersionInfo;
                };
                Module: {
                    encode(message: _26.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Module;
                    fromJSON(object: any): _26.Module;
                    toJSON(message: _26.Module): unknown;
                    fromPartial(object: {
                        path?: string;
                        version?: string;
                        sum?: string;
                    }): _26.Module;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _27.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.Coin;
                fromJSON(object: any): _27.Coin;
                toJSON(message: _27.Coin): unknown;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _27.Coin;
            };
            DecCoin: {
                encode(message: _27.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.DecCoin;
                fromJSON(object: any): _27.DecCoin;
                toJSON(message: _27.DecCoin): unknown;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _27.DecCoin;
            };
            IntProto: {
                encode(message: _27.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.IntProto;
                fromJSON(object: any): _27.IntProto;
                toJSON(message: _27.IntProto): unknown;
                fromPartial(object: {
                    int?: string;
                }): _27.IntProto;
            };
            DecProto: {
                encode(message: _27.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.DecProto;
                fromJSON(object: any): _27.DecProto;
                toJSON(message: _27.DecProto): unknown;
                fromPartial(object: {
                    dec?: string;
                }): _27.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _29.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GenesisOwners;
                fromJSON(object: any): _29.GenesisOwners;
                toJSON(message: _29.GenesisOwners): unknown;
                fromPartial(object: {
                    index?: any;
                    index_owners?: {
                        owners?: {
                            module?: string;
                            name?: string;
                        }[];
                    };
                }): _29.GenesisOwners;
            };
            GenesisState: {
                encode(message: _29.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GenesisState;
                fromJSON(object: any): _29.GenesisState;
                toJSON(message: _29.GenesisState): unknown;
                fromPartial(object: {
                    index?: any;
                    owners?: {
                        index?: any;
                        index_owners?: {
                            owners?: {
                                module?: string;
                                name?: string;
                            }[];
                        };
                    }[];
                }): _29.GenesisState;
            };
            Capability: {
                encode(message: _28.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.Capability;
                fromJSON(object: any): _28.Capability;
                toJSON(message: _28.Capability): unknown;
                fromPartial(object: {
                    index?: any;
                }): _28.Capability;
            };
            Owner: {
                encode(message: _28.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.Owner;
                fromJSON(object: any): _28.Owner;
                toJSON(message: _28.Owner): unknown;
                fromPartial(object: {
                    module?: string;
                    name?: string;
                }): _28.Owner;
            };
            CapabilityOwners: {
                encode(message: _28.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.CapabilityOwners;
                fromJSON(object: any): _28.CapabilityOwners;
                toJSON(message: _28.CapabilityOwners): unknown;
                fromPartial(object: {
                    owners?: {
                        module?: string;
                        name?: string;
                    }[];
                }): _28.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _234.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _31.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _31.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _31.MsgVerifyInvariant;
                    };
                };
                toJSON: {
                    verifyInvariant(value: _31.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _31.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _31.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _31.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariant_module_name, invariant_route }: _31.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _31.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _31.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.MsgVerifyInvariant;
                fromJSON(object: any): _31.MsgVerifyInvariant;
                toJSON(message: _31.MsgVerifyInvariant): unknown;
                fromPartial(object: {
                    sender?: string;
                    invariant_module_name?: string;
                    invariant_route?: string;
                }): _31.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _31.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.MsgVerifyInvariantResponse;
                fromJSON(_: any): _31.MsgVerifyInvariantResponse;
                toJSON(_: _31.MsgVerifyInvariantResponse): unknown;
                fromPartial(_: {}): _31.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _30.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GenesisState;
                fromJSON(object: any): _30.GenesisState;
                toJSON(message: _30.GenesisState): unknown;
                fromPartial(object: {
                    constant_fee?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _30.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _32.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.PubKey;
                fromJSON(object: any): _32.PubKey;
                toJSON(message: _32.PubKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _32.PubKey;
            };
            PrivKey: {
                encode(message: _32.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.PrivKey;
                fromJSON(object: any): _32.PrivKey;
                toJSON(message: _32.PrivKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _32.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _33.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.BIP44Params;
                    fromJSON(object: any): _33.BIP44Params;
                    toJSON(message: _33.BIP44Params): unknown;
                    fromPartial(object: {
                        purpose?: number;
                        coin_type?: number;
                        account?: number;
                        change?: boolean;
                        address_index?: number;
                    }): _33.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _34.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Record;
                    fromJSON(object: any): _34.Record;
                    toJSON(message: _34.Record): unknown;
                    fromPartial(object: {
                        name?: string;
                        pub_key?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        local?: {
                            priv_key?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                            priv_key_type?: string;
                        };
                        ledger?: {
                            path?: {
                                purpose?: number;
                                coin_type?: number;
                                account?: number;
                                change?: boolean;
                                address_index?: number;
                            };
                        };
                        multi?: {};
                        offline?: {};
                    }): _34.Record;
                };
                Record_Local: {
                    encode(message: _34.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Record_Local;
                    fromJSON(object: any): _34.Record_Local;
                    toJSON(message: _34.Record_Local): unknown;
                    fromPartial(object: {
                        priv_key?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        priv_key_type?: string;
                    }): _34.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _34.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Record_Ledger;
                    fromJSON(object: any): _34.Record_Ledger;
                    toJSON(message: _34.Record_Ledger): unknown;
                    fromPartial(object: {
                        path?: {
                            purpose?: number;
                            coin_type?: number;
                            account?: number;
                            change?: boolean;
                            address_index?: number;
                        };
                    }): _34.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _34.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Record_Multi;
                    fromJSON(_: any): _34.Record_Multi;
                    toJSON(_: _34.Record_Multi): unknown;
                    fromPartial(_: {}): _34.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _34.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Record_Offline;
                    fromJSON(_: any): _34.Record_Offline;
                    toJSON(_: _34.Record_Offline): unknown;
                    fromPartial(_: {}): _34.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _35.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.LegacyAminoPubKey;
                fromJSON(object: any): _35.LegacyAminoPubKey;
                toJSON(message: _35.LegacyAminoPubKey): unknown;
                fromPartial(object: {
                    threshold?: number;
                    public_keys?: {
                        type_url?: string;
                        value?: Uint8Array;
                    }[];
                }): _35.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _36.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.PubKey;
                fromJSON(object: any): _36.PubKey;
                toJSON(message: _36.PubKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _36.PubKey;
            };
            PrivKey: {
                encode(message: _36.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.PrivKey;
                fromJSON(object: any): _36.PrivKey;
                toJSON(message: _36.PrivKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _36.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _37.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.PubKey;
                fromJSON(object: any): _37.PubKey;
                toJSON(message: _37.PubKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _37.PubKey;
            };
            PrivKey: {
                encode(message: _37.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.PrivKey;
                fromJSON(object: any): _37.PrivKey;
                toJSON(message: _37.PrivKey): unknown;
                fromPartial(object: {
                    secret?: Uint8Array;
                }): _37.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _235.MsgClientImpl;
            QueryClientImpl: typeof _221.QueryClientImpl;
            LCDQueryClient: typeof _205.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _41.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _41.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _41.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _41.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _41.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _41.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _41.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _41.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _41.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _41.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _41.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _41.MsgFundCommunityPool;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _41.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _41.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _41.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _41.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _41.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _41.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _41.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _41.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _41.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _41.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _41.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _41.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _41.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _41.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _41.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _41.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegator_address, withdraw_address }: _41.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _41.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegator_address, validator_address }: _41.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _41.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validator_address }: _41.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _41.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _41.MsgFundCommunityPool) => {
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
                    }) => _41.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _41.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgSetWithdrawAddress;
                fromJSON(object: any): _41.MsgSetWithdrawAddress;
                toJSON(message: _41.MsgSetWithdrawAddress): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                    withdraw_address?: string;
                }): _41.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _41.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _41.MsgSetWithdrawAddressResponse;
                toJSON(_: _41.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: {}): _41.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _41.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _41.MsgWithdrawDelegatorReward;
                toJSON(message: _41.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_address?: string;
                }): _41.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _41.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _41.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _41.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _41.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _41.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _41.MsgWithdrawValidatorCommission;
                toJSON(message: _41.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: {
                    validator_address?: string;
                }): _41.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _41.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _41.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _41.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _41.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _41.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgFundCommunityPool;
                fromJSON(object: any): _41.MsgFundCommunityPool;
                toJSON(message: _41.MsgFundCommunityPool): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    depositor?: string;
                }): _41.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _41.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _41.MsgFundCommunityPoolResponse;
                toJSON(_: _41.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: {}): _41.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _40.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryParamsRequest;
                fromJSON(_: any): _40.QueryParamsRequest;
                toJSON(_: _40.QueryParamsRequest): unknown;
                fromPartial(_: {}): _40.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _40.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryParamsResponse;
                fromJSON(object: any): _40.QueryParamsResponse;
                toJSON(message: _40.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        community_tax?: string;
                        base_proposer_reward?: string;
                        bonus_proposer_reward?: string;
                        withdraw_addr_enabled?: boolean;
                    };
                }): _40.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _40.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _40.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _40.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: {
                    validator_address?: string;
                }): _40.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _40.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _40.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _40.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: {
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _40.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _40.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorCommissionRequest;
                fromJSON(object: any): _40.QueryValidatorCommissionRequest;
                toJSON(message: _40.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: {
                    validator_address?: string;
                }): _40.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _40.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorCommissionResponse;
                fromJSON(object: any): _40.QueryValidatorCommissionResponse;
                toJSON(message: _40.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: {
                    commission?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _40.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _40.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorSlashesRequest;
                fromJSON(object: any): _40.QueryValidatorSlashesRequest;
                toJSON(message: _40.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: {
                    validator_address?: string;
                    starting_height?: any;
                    ending_height?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _40.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _40.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorSlashesResponse;
                fromJSON(object: any): _40.QueryValidatorSlashesResponse;
                toJSON(message: _40.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: {
                    slashes?: {
                        validator_period?: any;
                        fraction?: string;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _40.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _40.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegationRewardsRequest;
                fromJSON(object: any): _40.QueryDelegationRewardsRequest;
                toJSON(message: _40.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_address?: string;
                }): _40.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _40.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegationRewardsResponse;
                fromJSON(object: any): _40.QueryDelegationRewardsResponse;
                toJSON(message: _40.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _40.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _40.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _40.QueryDelegationTotalRewardsRequest;
                toJSON(message: _40.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                }): _40.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _40.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _40.QueryDelegationTotalRewardsResponse;
                toJSON(message: _40.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: {
                    rewards?: {
                        validator_address?: string;
                        reward?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _40.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _40.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _40.QueryDelegatorValidatorsRequest;
                toJSON(message: _40.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                }): _40.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _40.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _40.QueryDelegatorValidatorsResponse;
                toJSON(message: _40.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: string[];
                }): _40.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _40.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _40.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _40.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                }): _40.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _40.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _40.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _40.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: {
                    withdraw_address?: string;
                }): _40.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _40.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryCommunityPoolRequest;
                fromJSON(_: any): _40.QueryCommunityPoolRequest;
                toJSON(_: _40.QueryCommunityPoolRequest): unknown;
                fromPartial(_: {}): _40.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _40.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryCommunityPoolResponse;
                fromJSON(object: any): _40.QueryCommunityPoolResponse;
                toJSON(message: _40.QueryCommunityPoolResponse): unknown;
                fromPartial(object: {
                    pool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _40.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _39.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.DelegatorWithdrawInfo;
                fromJSON(object: any): _39.DelegatorWithdrawInfo;
                toJSON(message: _39.DelegatorWithdrawInfo): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                    withdraw_address?: string;
                }): _39.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _39.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _39.ValidatorOutstandingRewardsRecord;
                toJSON(message: _39.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: {
                    validator_address?: string;
                    outstanding_rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _39.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _39.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _39.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _39.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: {
                    validator_address?: string;
                    accumulated?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _39.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _39.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _39.ValidatorHistoricalRewardsRecord;
                toJSON(message: _39.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: {
                    validator_address?: string;
                    period?: any;
                    rewards?: {
                        cumulative_reward_ratio?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        reference_count?: number;
                    };
                }): _39.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _39.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _39.ValidatorCurrentRewardsRecord;
                toJSON(message: _39.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: {
                    validator_address?: string;
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        period?: any;
                    };
                }): _39.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _39.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.DelegatorStartingInfoRecord;
                fromJSON(object: any): _39.DelegatorStartingInfoRecord;
                toJSON(message: _39.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_address?: string;
                    starting_info?: {
                        previous_period?: any;
                        stake?: string;
                        height?: any;
                    };
                }): _39.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _39.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorSlashEventRecord;
                fromJSON(object: any): _39.ValidatorSlashEventRecord;
                toJSON(message: _39.ValidatorSlashEventRecord): unknown;
                fromPartial(object: {
                    validator_address?: string;
                    height?: any;
                    period?: any;
                    validator_slash_event?: {
                        validator_period?: any;
                        fraction?: string;
                    };
                }): _39.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _39.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GenesisState;
                fromJSON(object: any): _39.GenesisState;
                toJSON(message: _39.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        community_tax?: string;
                        base_proposer_reward?: string;
                        bonus_proposer_reward?: string;
                        withdraw_addr_enabled?: boolean;
                    };
                    fee_pool?: {
                        community_pool?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    delegator_withdraw_infos?: {
                        delegator_address?: string;
                        withdraw_address?: string;
                    }[];
                    previous_proposer?: string;
                    outstanding_rewards?: {
                        validator_address?: string;
                        outstanding_rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    validator_accumulated_commissions?: {
                        validator_address?: string;
                        accumulated?: {
                            commission?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[];
                    validator_historical_rewards?: {
                        validator_address?: string;
                        period?: any;
                        rewards?: {
                            cumulative_reward_ratio?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            reference_count?: number;
                        };
                    }[];
                    validator_current_rewards?: {
                        validator_address?: string;
                        rewards?: {
                            rewards?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            period?: any;
                        };
                    }[];
                    delegator_starting_infos?: {
                        delegator_address?: string;
                        validator_address?: string;
                        starting_info?: {
                            previous_period?: any;
                            stake?: string;
                            height?: any;
                        };
                    }[];
                    validator_slash_events?: {
                        validator_address?: string;
                        height?: any;
                        period?: any;
                        validator_slash_event?: {
                            validator_period?: any;
                            fraction?: string;
                        };
                    }[];
                }): _39.GenesisState;
            };
            Params: {
                encode(message: _38.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.Params;
                fromJSON(object: any): _38.Params;
                toJSON(message: _38.Params): unknown;
                fromPartial(object: {
                    community_tax?: string;
                    base_proposer_reward?: string;
                    bonus_proposer_reward?: string;
                    withdraw_addr_enabled?: boolean;
                }): _38.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _38.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorHistoricalRewards;
                fromJSON(object: any): _38.ValidatorHistoricalRewards;
                toJSON(message: _38.ValidatorHistoricalRewards): unknown;
                fromPartial(object: {
                    cumulative_reward_ratio?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    reference_count?: number;
                }): _38.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _38.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorCurrentRewards;
                fromJSON(object: any): _38.ValidatorCurrentRewards;
                toJSON(message: _38.ValidatorCurrentRewards): unknown;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    period?: any;
                }): _38.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _38.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorAccumulatedCommission;
                fromJSON(object: any): _38.ValidatorAccumulatedCommission;
                toJSON(message: _38.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: {
                    commission?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _38.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _38.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorOutstandingRewards;
                fromJSON(object: any): _38.ValidatorOutstandingRewards;
                toJSON(message: _38.ValidatorOutstandingRewards): unknown;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _38.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _38.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorSlashEvent;
                fromJSON(object: any): _38.ValidatorSlashEvent;
                toJSON(message: _38.ValidatorSlashEvent): unknown;
                fromPartial(object: {
                    validator_period?: any;
                    fraction?: string;
                }): _38.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _38.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorSlashEvents;
                fromJSON(object: any): _38.ValidatorSlashEvents;
                toJSON(message: _38.ValidatorSlashEvents): unknown;
                fromPartial(object: {
                    validator_slash_events?: {
                        validator_period?: any;
                        fraction?: string;
                    }[];
                }): _38.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _38.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.FeePool;
                fromJSON(object: any): _38.FeePool;
                toJSON(message: _38.FeePool): unknown;
                fromPartial(object: {
                    community_pool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _38.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _38.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.CommunityPoolSpendProposal;
                fromJSON(object: any): _38.CommunityPoolSpendProposal;
                toJSON(message: _38.CommunityPoolSpendProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _38.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _38.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.DelegatorStartingInfo;
                fromJSON(object: any): _38.DelegatorStartingInfo;
                toJSON(message: _38.DelegatorStartingInfo): unknown;
                fromPartial(object: {
                    previous_period?: any;
                    stake?: string;
                    height?: any;
                }): _38.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _38.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.DelegationDelegatorReward;
                fromJSON(object: any): _38.DelegationDelegatorReward;
                toJSON(message: _38.DelegationDelegatorReward): unknown;
                fromPartial(object: {
                    validator_address?: string;
                    reward?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _38.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _38.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _38.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _38.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: string;
                    deposit?: string;
                }): _38.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _236.MsgClientImpl;
            QueryClientImpl: typeof _222.QueryClientImpl;
            LCDQueryClient: typeof _206.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _45.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _45.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _45.MsgSubmitEvidence;
                    };
                };
                toJSON: {
                    submitEvidence(value: _45.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _45.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _45.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _45.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _45.MsgSubmitEvidence) => {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ submitter, evidence }: {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _45.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _45.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgSubmitEvidence;
                fromJSON(object: any): _45.MsgSubmitEvidence;
                toJSON(message: _45.MsgSubmitEvidence): unknown;
                fromPartial(object: {
                    submitter?: string;
                    evidence?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                }): _45.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _45.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _45.MsgSubmitEvidenceResponse;
                toJSON(message: _45.MsgSubmitEvidenceResponse): unknown;
                fromPartial(object: {
                    hash?: Uint8Array;
                }): _45.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _44.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryEvidenceRequest;
                fromJSON(object: any): _44.QueryEvidenceRequest;
                toJSON(message: _44.QueryEvidenceRequest): unknown;
                fromPartial(object: {
                    evidence_hash?: Uint8Array;
                }): _44.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _44.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryEvidenceResponse;
                fromJSON(object: any): _44.QueryEvidenceResponse;
                toJSON(message: _44.QueryEvidenceResponse): unknown;
                fromPartial(object: {
                    evidence?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                }): _44.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _44.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryAllEvidenceRequest;
                fromJSON(object: any): _44.QueryAllEvidenceRequest;
                toJSON(message: _44.QueryAllEvidenceRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _44.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _44.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryAllEvidenceResponse;
                fromJSON(object: any): _44.QueryAllEvidenceResponse;
                toJSON(message: _44.QueryAllEvidenceResponse): unknown;
                fromPartial(object: {
                    evidence?: {
                        type_url?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _44.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _43.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.GenesisState;
                fromJSON(object: any): _43.GenesisState;
                toJSON(message: _43.GenesisState): unknown;
                fromPartial(object: {
                    evidence?: {
                        type_url?: string;
                        value?: Uint8Array;
                    }[];
                }): _43.GenesisState;
            };
            Equivocation: {
                encode(message: _42.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.Equivocation;
                fromJSON(object: any): _42.Equivocation;
                toJSON(message: _42.Equivocation): unknown;
                fromPartial(object: {
                    height?: any;
                    time?: Date;
                    power?: any;
                    consensus_address?: string;
                }): _42.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _237.MsgClientImpl;
            QueryClientImpl: typeof _223.QueryClientImpl;
            LCDQueryClient: typeof _207.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _49.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _49.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _49.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _49.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _49.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _49.MsgRevokeAllowance;
                    };
                };
                toJSON: {
                    grantAllowance(value: _49.MsgGrantAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revokeAllowance(value: _49.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _49.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _49.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _49.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _49.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _49.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _49.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _49.MsgGrantAllowance) => {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ granter, grantee, allowance }: {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _49.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _49.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _49.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _49.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgGrantAllowance;
                fromJSON(object: any): _49.MsgGrantAllowance;
                toJSON(message: _49.MsgGrantAllowance): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    allowance?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                }): _49.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _49.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgGrantAllowanceResponse;
                fromJSON(_: any): _49.MsgGrantAllowanceResponse;
                toJSON(_: _49.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: {}): _49.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _49.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgRevokeAllowance;
                fromJSON(object: any): _49.MsgRevokeAllowance;
                toJSON(message: _49.MsgRevokeAllowance): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                }): _49.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _49.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _49.MsgRevokeAllowanceResponse;
                toJSON(_: _49.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: {}): _49.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _48.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllowanceRequest;
                fromJSON(object: any): _48.QueryAllowanceRequest;
                toJSON(message: _48.QueryAllowanceRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                }): _48.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _48.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllowanceResponse;
                fromJSON(object: any): _48.QueryAllowanceResponse;
                toJSON(message: _48.QueryAllowanceResponse): unknown;
                fromPartial(object: {
                    allowance?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _48.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _48.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllowancesRequest;
                fromJSON(object: any): _48.QueryAllowancesRequest;
                toJSON(message: _48.QueryAllowancesRequest): unknown;
                fromPartial(object: {
                    grantee?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _48.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _48.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllowancesResponse;
                fromJSON(object: any): _48.QueryAllowancesResponse;
                toJSON(message: _48.QueryAllowancesResponse): unknown;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _48.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _48.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _48.QueryAllowancesByGranterRequest;
                toJSON(message: _48.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _48.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _48.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _48.QueryAllowancesByGranterResponse;
                toJSON(message: _48.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _48.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _47.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.GenesisState;
                fromJSON(object: any): _47.GenesisState;
                toJSON(message: _47.GenesisState): unknown;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _47.GenesisState;
            };
            BasicAllowance: {
                encode(message: _46.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.BasicAllowance;
                fromJSON(object: any): _46.BasicAllowance;
                toJSON(message: _46.BasicAllowance): unknown;
                fromPartial(object: {
                    spend_limit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    expiration?: Date;
                }): _46.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _46.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.PeriodicAllowance;
                fromJSON(object: any): _46.PeriodicAllowance;
                toJSON(message: _46.PeriodicAllowance): unknown;
                fromPartial(object: {
                    basic?: {
                        spend_limit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        expiration?: Date;
                    };
                    period?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    period_spend_limit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    period_can_spend?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    period_reset?: Date;
                }): _46.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _46.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.AllowedMsgAllowance;
                fromJSON(object: any): _46.AllowedMsgAllowance;
                toJSON(message: _46.AllowedMsgAllowance): unknown;
                fromPartial(object: {
                    allowance?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                    allowed_messages?: string[];
                }): _46.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _46.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.Grant;
                fromJSON(object: any): _46.Grant;
                toJSON(message: _46.Grant): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    allowance?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                }): _46.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _50.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.GenesisState;
                fromJSON(object: any): _50.GenesisState;
                toJSON(message: _50.GenesisState): unknown;
                fromPartial(object: {
                    gen_txs?: Uint8Array[];
                }): _50.GenesisState;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _238.MsgClientImpl;
            QueryClientImpl: typeof _224.QueryClientImpl;
            LCDQueryClient: typeof _208.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _54.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _54.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _54.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _54.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _54.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _54.MsgSubmitProposal;
                    };
                    vote(value: _54.MsgVote): {
                        typeUrl: string;
                        value: _54.MsgVote;
                    };
                    voteWeighted(value: _54.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _54.MsgVoteWeighted;
                    };
                    deposit(value: _54.MsgDeposit): {
                        typeUrl: string;
                        value: _54.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _54.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _54.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _54.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _54.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _54.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _54.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _54.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _54.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _54.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _54.MsgSubmitProposal;
                    };
                    vote(value: _54.MsgVote): {
                        typeUrl: string;
                        value: _54.MsgVote;
                    };
                    voteWeighted(value: _54.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _54.MsgVoteWeighted;
                    };
                    deposit(value: _54.MsgDeposit): {
                        typeUrl: string;
                        value: _54.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initial_deposit, proposer }: _54.MsgSubmitProposal) => {
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
                    }) => _54.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposal_id, voter, option }: _54.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _54.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposal_id, voter, options }: _54.MsgVoteWeighted) => {
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
                    }) => _54.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposal_id, depositor, amount }: _54.MsgDeposit) => {
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
                    }) => _54.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _54.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgSubmitProposal;
                fromJSON(object: any): _54.MsgSubmitProposal;
                toJSON(message: _54.MsgSubmitProposal): unknown;
                fromPartial(object: {
                    content?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                    initial_deposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    proposer?: string;
                }): _54.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _54.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgSubmitProposalResponse;
                fromJSON(object: any): _54.MsgSubmitProposalResponse;
                toJSON(message: _54.MsgSubmitProposalResponse): unknown;
                fromPartial(object: {
                    proposal_id?: any;
                }): _54.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _54.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgVote;
                fromJSON(object: any): _54.MsgVote;
                toJSON(message: _54.MsgVote): unknown;
                fromPartial(object: {
                    proposal_id?: any;
                    voter?: string;
                    option?: _52.VoteOption;
                }): _54.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _54.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgVoteResponse;
                fromJSON(_: any): _54.MsgVoteResponse;
                toJSON(_: _54.MsgVoteResponse): unknown;
                fromPartial(_: {}): _54.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _54.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgVoteWeighted;
                fromJSON(object: any): _54.MsgVoteWeighted;
                toJSON(message: _54.MsgVoteWeighted): unknown;
                fromPartial(object: {
                    proposal_id?: any;
                    voter?: string;
                    options?: {
                        option?: _52.VoteOption;
                        weight?: string;
                    }[];
                }): _54.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _54.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgVoteWeightedResponse;
                fromJSON(_: any): _54.MsgVoteWeightedResponse;
                toJSON(_: _54.MsgVoteWeightedResponse): unknown;
                fromPartial(_: {}): _54.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _54.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgDeposit;
                fromJSON(object: any): _54.MsgDeposit;
                toJSON(message: _54.MsgDeposit): unknown;
                fromPartial(object: {
                    proposal_id?: any;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _54.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _54.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgDepositResponse;
                fromJSON(_: any): _54.MsgDepositResponse;
                toJSON(_: _54.MsgDepositResponse): unknown;
                fromPartial(_: {}): _54.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _53.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryProposalRequest;
                fromJSON(object: any): _53.QueryProposalRequest;
                toJSON(message: _53.QueryProposalRequest): unknown;
                fromPartial(object: {
                    proposal_id?: any;
                }): _53.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _53.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryProposalResponse;
                fromJSON(object: any): _53.QueryProposalResponse;
                toJSON(message: _53.QueryProposalResponse): unknown;
                fromPartial(object: {
                    proposal?: {
                        proposal_id?: any;
                        content?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        status?: _52.ProposalStatus;
                        final_tally_result?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            no_with_veto?: string;
                        };
                        submit_time?: Date;
                        deposit_end_time?: Date;
                        total_deposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        voting_start_time?: Date;
                        voting_end_time?: Date;
                    };
                }): _53.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _53.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryProposalsRequest;
                fromJSON(object: any): _53.QueryProposalsRequest;
                toJSON(message: _53.QueryProposalsRequest): unknown;
                fromPartial(object: {
                    proposal_status?: _52.ProposalStatus;
                    voter?: string;
                    depositor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _53.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _53.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryProposalsResponse;
                fromJSON(object: any): _53.QueryProposalsResponse;
                toJSON(message: _53.QueryProposalsResponse): unknown;
                fromPartial(object: {
                    proposals?: {
                        proposal_id?: any;
                        content?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        status?: _52.ProposalStatus;
                        final_tally_result?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            no_with_veto?: string;
                        };
                        submit_time?: Date;
                        deposit_end_time?: Date;
                        total_deposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        voting_start_time?: Date;
                        voting_end_time?: Date;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _53.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _53.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryVoteRequest;
                fromJSON(object: any): _53.QueryVoteRequest;
                toJSON(message: _53.QueryVoteRequest): unknown;
                fromPartial(object: {
                    proposal_id?: any;
                    voter?: string;
                }): _53.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _53.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryVoteResponse;
                fromJSON(object: any): _53.QueryVoteResponse;
                toJSON(message: _53.QueryVoteResponse): unknown;
                fromPartial(object: {
                    vote?: {
                        proposal_id?: any;
                        voter?: string;
                        option?: _52.VoteOption;
                        options?: {
                            option?: _52.VoteOption;
                            weight?: string;
                        }[];
                    };
                }): _53.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _53.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryVotesRequest;
                fromJSON(object: any): _53.QueryVotesRequest;
                toJSON(message: _53.QueryVotesRequest): unknown;
                fromPartial(object: {
                    proposal_id?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _53.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _53.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryVotesResponse;
                fromJSON(object: any): _53.QueryVotesResponse;
                toJSON(message: _53.QueryVotesResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposal_id?: any;
                        voter?: string;
                        option?: _52.VoteOption;
                        options?: {
                            option?: _52.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _53.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _53.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryParamsRequest;
                fromJSON(object: any): _53.QueryParamsRequest;
                toJSON(message: _53.QueryParamsRequest): unknown;
                fromPartial(object: {
                    params_type?: string;
                }): _53.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _53.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryParamsResponse;
                fromJSON(object: any): _53.QueryParamsResponse;
                toJSON(message: _53.QueryParamsResponse): unknown;
                fromPartial(object: {
                    voting_params?: {
                        voting_period?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    deposit_params?: {
                        min_deposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        max_deposit_period?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    tally_params?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        veto_threshold?: Uint8Array;
                    };
                }): _53.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _53.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryDepositRequest;
                fromJSON(object: any): _53.QueryDepositRequest;
                toJSON(message: _53.QueryDepositRequest): unknown;
                fromPartial(object: {
                    proposal_id?: any;
                    depositor?: string;
                }): _53.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _53.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryDepositResponse;
                fromJSON(object: any): _53.QueryDepositResponse;
                toJSON(message: _53.QueryDepositResponse): unknown;
                fromPartial(object: {
                    deposit?: {
                        proposal_id?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _53.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _53.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryDepositsRequest;
                fromJSON(object: any): _53.QueryDepositsRequest;
                toJSON(message: _53.QueryDepositsRequest): unknown;
                fromPartial(object: {
                    proposal_id?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _53.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _53.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryDepositsResponse;
                fromJSON(object: any): _53.QueryDepositsResponse;
                toJSON(message: _53.QueryDepositsResponse): unknown;
                fromPartial(object: {
                    deposits?: {
                        proposal_id?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _53.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _53.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryTallyResultRequest;
                fromJSON(object: any): _53.QueryTallyResultRequest;
                toJSON(message: _53.QueryTallyResultRequest): unknown;
                fromPartial(object: {
                    proposal_id?: any;
                }): _53.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _53.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryTallyResultResponse;
                fromJSON(object: any): _53.QueryTallyResultResponse;
                toJSON(message: _53.QueryTallyResultResponse): unknown;
                fromPartial(object: {
                    tally?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        no_with_veto?: string;
                    };
                }): _53.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _52.VoteOption;
            voteOptionToJSON(object: _52.VoteOption): string;
            proposalStatusFromJSON(object: any): _52.ProposalStatus;
            proposalStatusToJSON(object: _52.ProposalStatus): string;
            VoteOption: typeof _52.VoteOption;
            ProposalStatus: typeof _52.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _52.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.WeightedVoteOption;
                fromJSON(object: any): _52.WeightedVoteOption;
                toJSON(message: _52.WeightedVoteOption): unknown;
                fromPartial(object: {
                    option?: _52.VoteOption;
                    weight?: string;
                }): _52.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _52.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.TextProposal;
                fromJSON(object: any): _52.TextProposal;
                toJSON(message: _52.TextProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _52.TextProposal;
            };
            Deposit: {
                encode(message: _52.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.Deposit;
                fromJSON(object: any): _52.Deposit;
                toJSON(message: _52.Deposit): unknown;
                fromPartial(object: {
                    proposal_id?: any;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _52.Deposit;
            };
            Proposal: {
                encode(message: _52.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.Proposal;
                fromJSON(object: any): _52.Proposal;
                toJSON(message: _52.Proposal): unknown;
                fromPartial(object: {
                    proposal_id?: any;
                    content?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                    status?: _52.ProposalStatus;
                    final_tally_result?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        no_with_veto?: string;
                    };
                    submit_time?: Date;
                    deposit_end_time?: Date;
                    total_deposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    voting_start_time?: Date;
                    voting_end_time?: Date;
                }): _52.Proposal;
            };
            TallyResult: {
                encode(message: _52.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.TallyResult;
                fromJSON(object: any): _52.TallyResult;
                toJSON(message: _52.TallyResult): unknown;
                fromPartial(object: {
                    yes?: string;
                    abstain?: string;
                    no?: string;
                    no_with_veto?: string;
                }): _52.TallyResult;
            };
            Vote: {
                encode(message: _52.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.Vote;
                fromJSON(object: any): _52.Vote;
                toJSON(message: _52.Vote): unknown;
                fromPartial(object: {
                    proposal_id?: any;
                    voter?: string;
                    option?: _52.VoteOption;
                    options?: {
                        option?: _52.VoteOption;
                        weight?: string;
                    }[];
                }): _52.Vote;
            };
            DepositParams: {
                encode(message: _52.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.DepositParams;
                fromJSON(object: any): _52.DepositParams;
                toJSON(message: _52.DepositParams): unknown;
                fromPartial(object: {
                    min_deposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    max_deposit_period?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _52.DepositParams;
            };
            VotingParams: {
                encode(message: _52.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.VotingParams;
                fromJSON(object: any): _52.VotingParams;
                toJSON(message: _52.VotingParams): unknown;
                fromPartial(object: {
                    voting_period?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _52.VotingParams;
            };
            TallyParams: {
                encode(message: _52.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.TallyParams;
                fromJSON(object: any): _52.TallyParams;
                toJSON(message: _52.TallyParams): unknown;
                fromPartial(object: {
                    quorum?: Uint8Array;
                    threshold?: Uint8Array;
                    veto_threshold?: Uint8Array;
                }): _52.TallyParams;
            };
            GenesisState: {
                encode(message: _51.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.GenesisState;
                fromJSON(object: any): _51.GenesisState;
                toJSON(message: _51.GenesisState): unknown;
                fromPartial(object: {
                    starting_proposal_id?: any;
                    deposits?: {
                        proposal_id?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    votes?: {
                        proposal_id?: any;
                        voter?: string;
                        option?: _52.VoteOption;
                        options?: {
                            option?: _52.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    proposals?: {
                        proposal_id?: any;
                        content?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        status?: _52.ProposalStatus;
                        final_tally_result?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            no_with_veto?: string;
                        };
                        submit_time?: Date;
                        deposit_end_time?: Date;
                        total_deposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        voting_start_time?: Date;
                        voting_end_time?: Date;
                    }[];
                    deposit_params?: {
                        min_deposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        max_deposit_period?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    voting_params?: {
                        voting_period?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    tally_params?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        veto_threshold?: Uint8Array;
                    };
                }): _51.GenesisState;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _225.QueryClientImpl;
            LCDQueryClient: typeof _209.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _57.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryParamsRequest;
                fromJSON(_: any): _57.QueryParamsRequest;
                toJSON(_: _57.QueryParamsRequest): unknown;
                fromPartial(_: {}): _57.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _57.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryParamsResponse;
                fromJSON(object: any): _57.QueryParamsResponse;
                toJSON(message: _57.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        mint_denom?: string;
                        inflation_rate_change?: string;
                        inflation_max?: string;
                        inflation_min?: string;
                        goal_bonded?: string;
                        blocks_per_year?: any;
                    };
                }): _57.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _57.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryInflationRequest;
                fromJSON(_: any): _57.QueryInflationRequest;
                toJSON(_: _57.QueryInflationRequest): unknown;
                fromPartial(_: {}): _57.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _57.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryInflationResponse;
                fromJSON(object: any): _57.QueryInflationResponse;
                toJSON(message: _57.QueryInflationResponse): unknown;
                fromPartial(object: {
                    inflation?: Uint8Array;
                }): _57.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _57.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _57.QueryAnnualProvisionsRequest;
                toJSON(_: _57.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: {}): _57.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _57.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _57.QueryAnnualProvisionsResponse;
                toJSON(message: _57.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: {
                    annual_provisions?: Uint8Array;
                }): _57.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _56.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.Minter;
                fromJSON(object: any): _56.Minter;
                toJSON(message: _56.Minter): unknown;
                fromPartial(object: {
                    inflation?: string;
                    annual_provisions?: string;
                }): _56.Minter;
            };
            Params: {
                encode(message: _56.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.Params;
                fromJSON(object: any): _56.Params;
                toJSON(message: _56.Params): unknown;
                fromPartial(object: {
                    mint_denom?: string;
                    inflation_rate_change?: string;
                    inflation_max?: string;
                    inflation_min?: string;
                    goal_bonded?: string;
                    blocks_per_year?: any;
                }): _56.Params;
            };
            GenesisState: {
                encode(message: _55.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.GenesisState;
                fromJSON(object: any): _55.GenesisState;
                toJSON(message: _55.GenesisState): unknown;
                fromPartial(object: {
                    minter?: {
                        inflation?: string;
                        annual_provisions?: string;
                    };
                    params?: {
                        mint_denom?: string;
                        inflation_rate_change?: string;
                        inflation_max?: string;
                        inflation_min?: string;
                        goal_bonded?: string;
                        blocks_per_year?: any;
                    };
                }): _55.GenesisState;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _239.MsgClientImpl;
            QueryClientImpl: typeof _226.QueryClientImpl;
            LCDQueryClient: typeof _210.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _63.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _63.MsgSend): {
                        typeUrl: string;
                        value: _63.MsgSend;
                    };
                };
                toJSON: {
                    send(value: _63.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _63.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _63.MsgSend): {
                        typeUrl: string;
                        value: _63.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ class_id, id, sender, receiver }: _63.MsgSend) => {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    };
                    fromAmino: ({ class_id, id, sender, receiver }: {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    }) => _63.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _63.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgSend;
                fromJSON(object: any): _63.MsgSend;
                toJSON(message: _63.MsgSend): unknown;
                fromPartial(object: {
                    class_id?: string;
                    id?: string;
                    sender?: string;
                    receiver?: string;
                }): _63.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _63.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgSendResponse;
                fromJSON(_: any): _63.MsgSendResponse;
                toJSON(_: _63.MsgSendResponse): unknown;
                fromPartial(_: {}): _63.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _62.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryBalanceRequest;
                fromJSON(object: any): _62.QueryBalanceRequest;
                toJSON(message: _62.QueryBalanceRequest): unknown;
                fromPartial(object: {
                    class_id?: string;
                    owner?: string;
                }): _62.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _62.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryBalanceResponse;
                fromJSON(object: any): _62.QueryBalanceResponse;
                toJSON(message: _62.QueryBalanceResponse): unknown;
                fromPartial(object: {
                    amount?: any;
                }): _62.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _62.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryOwnerRequest;
                fromJSON(object: any): _62.QueryOwnerRequest;
                toJSON(message: _62.QueryOwnerRequest): unknown;
                fromPartial(object: {
                    class_id?: string;
                    id?: string;
                }): _62.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _62.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryOwnerResponse;
                fromJSON(object: any): _62.QueryOwnerResponse;
                toJSON(message: _62.QueryOwnerResponse): unknown;
                fromPartial(object: {
                    owner?: string;
                }): _62.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _62.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QuerySupplyRequest;
                fromJSON(object: any): _62.QuerySupplyRequest;
                toJSON(message: _62.QuerySupplyRequest): unknown;
                fromPartial(object: {
                    class_id?: string;
                }): _62.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _62.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QuerySupplyResponse;
                fromJSON(object: any): _62.QuerySupplyResponse;
                toJSON(message: _62.QuerySupplyResponse): unknown;
                fromPartial(object: {
                    amount?: any;
                }): _62.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _62.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryNFTsRequest;
                fromJSON(object: any): _62.QueryNFTsRequest;
                toJSON(message: _62.QueryNFTsRequest): unknown;
                fromPartial(object: {
                    class_id?: string;
                    owner?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _62.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _62.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryNFTsResponse;
                fromJSON(object: any): _62.QueryNFTsResponse;
                toJSON(message: _62.QueryNFTsResponse): unknown;
                fromPartial(object: {
                    nfts?: {
                        class_id?: string;
                        id?: string;
                        uri?: string;
                        uri_hash?: string;
                        data?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _62.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _62.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryNFTRequest;
                fromJSON(object: any): _62.QueryNFTRequest;
                toJSON(message: _62.QueryNFTRequest): unknown;
                fromPartial(object: {
                    class_id?: string;
                    id?: string;
                }): _62.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _62.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryNFTResponse;
                fromJSON(object: any): _62.QueryNFTResponse;
                toJSON(message: _62.QueryNFTResponse): unknown;
                fromPartial(object: {
                    nft?: {
                        class_id?: string;
                        id?: string;
                        uri?: string;
                        uri_hash?: string;
                        data?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _62.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _62.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryClassRequest;
                fromJSON(object: any): _62.QueryClassRequest;
                toJSON(message: _62.QueryClassRequest): unknown;
                fromPartial(object: {
                    class_id?: string;
                }): _62.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _62.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryClassResponse;
                fromJSON(object: any): _62.QueryClassResponse;
                toJSON(message: _62.QueryClassResponse): unknown;
                fromPartial(object: {
                    class?: {
                        id?: string;
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uri_hash?: string;
                        data?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _62.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _62.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryClassesRequest;
                fromJSON(object: any): _62.QueryClassesRequest;
                toJSON(message: _62.QueryClassesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _62.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _62.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryClassesResponse;
                fromJSON(object: any): _62.QueryClassesResponse;
                toJSON(message: _62.QueryClassesResponse): unknown;
                fromPartial(object: {
                    classes?: {
                        id?: string;
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uri_hash?: string;
                        data?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _62.QueryClassesResponse;
            };
            Class: {
                encode(message: _61.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.Class;
                fromJSON(object: any): _61.Class;
                toJSON(message: _61.Class): unknown;
                fromPartial(object: {
                    id?: string;
                    name?: string;
                    symbol?: string;
                    description?: string;
                    uri?: string;
                    uri_hash?: string;
                    data?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                }): _61.Class;
            };
            NFT: {
                encode(message: _61.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.NFT;
                fromJSON(object: any): _61.NFT;
                toJSON(message: _61.NFT): unknown;
                fromPartial(object: {
                    class_id?: string;
                    id?: string;
                    uri?: string;
                    uri_hash?: string;
                    data?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                }): _61.NFT;
            };
            GenesisState: {
                encode(message: _60.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.GenesisState;
                fromJSON(object: any): _60.GenesisState;
                toJSON(message: _60.GenesisState): unknown;
                fromPartial(object: {
                    classes?: {
                        id?: string;
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uri_hash?: string;
                        data?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    entries?: {
                        owner?: string;
                        nfts?: {
                            class_id?: string;
                            id?: string;
                            uri?: string;
                            uri_hash?: string;
                            data?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    }[];
                }): _60.GenesisState;
            };
            Entry: {
                encode(message: _60.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Entry;
                fromJSON(object: any): _60.Entry;
                toJSON(message: _60.Entry): unknown;
                fromPartial(object: {
                    owner?: string;
                    nfts?: {
                        class_id?: string;
                        id?: string;
                        uri?: string;
                        uri_hash?: string;
                        data?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _60.Entry;
            };
            EventSend: {
                encode(message: _59.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EventSend;
                fromJSON(object: any): _59.EventSend;
                toJSON(message: _59.EventSend): unknown;
                fromPartial(object: {
                    class_id?: string;
                    id?: string;
                    sender?: string;
                    receiver?: string;
                }): _59.EventSend;
            };
            EventMint: {
                encode(message: _59.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EventMint;
                fromJSON(object: any): _59.EventMint;
                toJSON(message: _59.EventMint): unknown;
                fromPartial(object: {
                    class_id?: string;
                    id?: string;
                    owner?: string;
                }): _59.EventMint;
            };
            EventBurn: {
                encode(message: _59.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EventBurn;
                fromJSON(object: any): _59.EventBurn;
                toJSON(message: _59.EventBurn): unknown;
                fromPartial(object: {
                    class_id?: string;
                    id?: string;
                    owner?: string;
                }): _59.EventBurn;
            };
        };
    }
    namespace orm {
        const v1: {
            TableDescriptor: {
                encode(message: _64.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.TableDescriptor;
                fromJSON(object: any): _64.TableDescriptor;
                toJSON(message: _64.TableDescriptor): unknown;
                fromPartial(object: {
                    primary_key?: {
                        fields?: string;
                        auto_increment?: boolean;
                    };
                    index?: {
                        fields?: string;
                        id?: number;
                        unique?: boolean;
                    }[];
                    id?: number;
                }): _64.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _64.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.PrimaryKeyDescriptor;
                fromJSON(object: any): _64.PrimaryKeyDescriptor;
                toJSON(message: _64.PrimaryKeyDescriptor): unknown;
                fromPartial(object: {
                    fields?: string;
                    auto_increment?: boolean;
                }): _64.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _64.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.SecondaryIndexDescriptor;
                fromJSON(object: any): _64.SecondaryIndexDescriptor;
                toJSON(message: _64.SecondaryIndexDescriptor): unknown;
                fromPartial(object: {
                    fields?: string;
                    id?: number;
                    unique?: boolean;
                }): _64.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _64.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.SingletonDescriptor;
                fromJSON(object: any): _64.SingletonDescriptor;
                toJSON(message: _64.SingletonDescriptor): unknown;
                fromPartial(object: {
                    id?: number;
                }): _64.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _65.StorageType;
            storageTypeToJSON(object: _65.StorageType): string;
            StorageType: typeof _65.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _65.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.ModuleSchemaDescriptor;
                fromJSON(object: any): _65.ModuleSchemaDescriptor;
                toJSON(message: _65.ModuleSchemaDescriptor): unknown;
                fromPartial(object: {
                    schema_file?: {
                        id?: number;
                        proto_file_name?: string;
                        storage_type?: _65.StorageType;
                    }[];
                    prefix?: Uint8Array;
                }): _65.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _65.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _65.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _65.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial(object: {
                    id?: number;
                    proto_file_name?: string;
                    storage_type?: _65.StorageType;
                }): _65.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _227.QueryClientImpl;
            LCDQueryClient: typeof _211.LCDQueryClient;
            QueryParamsRequest: {
                encode(message: _67.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryParamsRequest;
                fromJSON(object: any): _67.QueryParamsRequest;
                toJSON(message: _67.QueryParamsRequest): unknown;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                }): _67.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _67.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryParamsResponse;
                fromJSON(object: any): _67.QueryParamsResponse;
                toJSON(message: _67.QueryParamsResponse): unknown;
                fromPartial(object: {
                    param?: {
                        subspace?: string;
                        key?: string;
                        value?: string;
                    };
                }): _67.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _67.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QuerySubspacesRequest;
                fromJSON(_: any): _67.QuerySubspacesRequest;
                toJSON(_: _67.QuerySubspacesRequest): unknown;
                fromPartial(_: {}): _67.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _67.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QuerySubspacesResponse;
                fromJSON(object: any): _67.QuerySubspacesResponse;
                toJSON(message: _67.QuerySubspacesResponse): unknown;
                fromPartial(object: {
                    subspaces?: {
                        subspace?: string;
                        keys?: string[];
                    }[];
                }): _67.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _67.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Subspace;
                fromJSON(object: any): _67.Subspace;
                toJSON(message: _67.Subspace): unknown;
                fromPartial(object: {
                    subspace?: string;
                    keys?: string[];
                }): _67.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _66.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.ParameterChangeProposal;
                fromJSON(object: any): _66.ParameterChangeProposal;
                toJSON(message: _66.ParameterChangeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    changes?: {
                        subspace?: string;
                        key?: string;
                        value?: string;
                    }[];
                }): _66.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _66.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.ParamChange;
                fromJSON(object: any): _66.ParamChange;
                toJSON(message: _66.ParamChange): unknown;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                    value?: string;
                }): _66.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _240.MsgClientImpl;
            QueryClientImpl: typeof _228.QueryClientImpl;
            LCDQueryClient: typeof _212.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _71.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _71.MsgUnjail): {
                        typeUrl: string;
                        value: _71.MsgUnjail;
                    };
                };
                toJSON: {
                    unjail(value: _71.MsgUnjail): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _71.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _71.MsgUnjail): {
                        typeUrl: string;
                        value: _71.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validator_addr }: _71.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _71.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _71.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgUnjail;
                fromJSON(object: any): _71.MsgUnjail;
                toJSON(message: _71.MsgUnjail): unknown;
                fromPartial(object: {
                    validator_addr?: string;
                }): _71.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _71.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgUnjailResponse;
                fromJSON(_: any): _71.MsgUnjailResponse;
                toJSON(_: _71.MsgUnjailResponse): unknown;
                fromPartial(_: {}): _71.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _70.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.ValidatorSigningInfo;
                fromJSON(object: any): _70.ValidatorSigningInfo;
                toJSON(message: _70.ValidatorSigningInfo): unknown;
                fromPartial(object: {
                    address?: string;
                    start_height?: any;
                    index_offset?: any;
                    jailed_until?: Date;
                    tombstoned?: boolean;
                    missed_blocks_counter?: any;
                }): _70.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _70.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Params;
                fromJSON(object: any): _70.Params;
                toJSON(message: _70.Params): unknown;
                fromPartial(object: {
                    signed_blocks_window?: any;
                    min_signed_per_window?: Uint8Array;
                    downtime_jail_duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    slash_fraction_double_sign?: Uint8Array;
                    slash_fraction_downtime?: Uint8Array;
                }): _70.Params;
            };
            QueryParamsRequest: {
                encode(_: _69.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryParamsRequest;
                fromJSON(_: any): _69.QueryParamsRequest;
                toJSON(_: _69.QueryParamsRequest): unknown;
                fromPartial(_: {}): _69.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _69.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryParamsResponse;
                fromJSON(object: any): _69.QueryParamsResponse;
                toJSON(message: _69.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        signed_blocks_window?: any;
                        min_signed_per_window?: Uint8Array;
                        downtime_jail_duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        slash_fraction_double_sign?: Uint8Array;
                        slash_fraction_downtime?: Uint8Array;
                    };
                }): _69.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _69.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QuerySigningInfoRequest;
                fromJSON(object: any): _69.QuerySigningInfoRequest;
                toJSON(message: _69.QuerySigningInfoRequest): unknown;
                fromPartial(object: {
                    cons_address?: string;
                }): _69.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _69.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QuerySigningInfoResponse;
                fromJSON(object: any): _69.QuerySigningInfoResponse;
                toJSON(message: _69.QuerySigningInfoResponse): unknown;
                fromPartial(object: {
                    val_signing_info?: {
                        address?: string;
                        start_height?: any;
                        index_offset?: any;
                        jailed_until?: Date;
                        tombstoned?: boolean;
                        missed_blocks_counter?: any;
                    };
                }): _69.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _69.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QuerySigningInfosRequest;
                fromJSON(object: any): _69.QuerySigningInfosRequest;
                toJSON(message: _69.QuerySigningInfosRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _69.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _69.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QuerySigningInfosResponse;
                fromJSON(object: any): _69.QuerySigningInfosResponse;
                toJSON(message: _69.QuerySigningInfosResponse): unknown;
                fromPartial(object: {
                    info?: {
                        address?: string;
                        start_height?: any;
                        index_offset?: any;
                        jailed_until?: Date;
                        tombstoned?: boolean;
                        missed_blocks_counter?: any;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _69.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _68.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.GenesisState;
                fromJSON(object: any): _68.GenesisState;
                toJSON(message: _68.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        signed_blocks_window?: any;
                        min_signed_per_window?: Uint8Array;
                        downtime_jail_duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        slash_fraction_double_sign?: Uint8Array;
                        slash_fraction_downtime?: Uint8Array;
                    };
                    signing_infos?: {
                        address?: string;
                        validator_signing_info?: {
                            address?: string;
                            start_height?: any;
                            index_offset?: any;
                            jailed_until?: Date;
                            tombstoned?: boolean;
                            missed_blocks_counter?: any;
                        };
                    }[];
                    missed_blocks?: {
                        address?: string;
                        missed_blocks?: {
                            index?: any;
                            missed?: boolean;
                        }[];
                    }[];
                }): _68.GenesisState;
            };
            SigningInfo: {
                encode(message: _68.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.SigningInfo;
                fromJSON(object: any): _68.SigningInfo;
                toJSON(message: _68.SigningInfo): unknown;
                fromPartial(object: {
                    address?: string;
                    validator_signing_info?: {
                        address?: string;
                        start_height?: any;
                        index_offset?: any;
                        jailed_until?: Date;
                        tombstoned?: boolean;
                        missed_blocks_counter?: any;
                    };
                }): _68.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _68.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.ValidatorMissedBlocks;
                fromJSON(object: any): _68.ValidatorMissedBlocks;
                toJSON(message: _68.ValidatorMissedBlocks): unknown;
                fromPartial(object: {
                    address?: string;
                    missed_blocks?: {
                        index?: any;
                        missed?: boolean;
                    }[];
                }): _68.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _68.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MissedBlock;
                fromJSON(object: any): _68.MissedBlock;
                toJSON(message: _68.MissedBlock): unknown;
                fromPartial(object: {
                    index?: any;
                    missed?: boolean;
                }): _68.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _241.MsgClientImpl;
            QueryClientImpl: typeof _229.QueryClientImpl;
            LCDQueryClient: typeof _213.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _76.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _76.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _76.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _76.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _76.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _76.MsgCreateValidator): {
                        typeUrl: string;
                        value: _76.MsgCreateValidator;
                    };
                    editValidator(value: _76.MsgEditValidator): {
                        typeUrl: string;
                        value: _76.MsgEditValidator;
                    };
                    delegate(value: _76.MsgDelegate): {
                        typeUrl: string;
                        value: _76.MsgDelegate;
                    };
                    beginRedelegate(value: _76.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _76.MsgBeginRedelegate;
                    };
                    undelegate(value: _76.MsgUndelegate): {
                        typeUrl: string;
                        value: _76.MsgUndelegate;
                    };
                };
                toJSON: {
                    createValidator(value: _76.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _76.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _76.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _76.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _76.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _76.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _76.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _76.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _76.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _76.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _76.MsgCreateValidator): {
                        typeUrl: string;
                        value: _76.MsgCreateValidator;
                    };
                    editValidator(value: _76.MsgEditValidator): {
                        typeUrl: string;
                        value: _76.MsgEditValidator;
                    };
                    delegate(value: _76.MsgDelegate): {
                        typeUrl: string;
                        value: _76.MsgDelegate;
                    };
                    beginRedelegate(value: _76.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _76.MsgBeginRedelegate;
                    };
                    undelegate(value: _76.MsgUndelegate): {
                        typeUrl: string;
                        value: _76.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: _76.MsgCreateValidator) => {
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
                    }) => _76.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validator_address, commission_rate, min_self_delegation }: _76.MsgEditValidator) => {
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
                    }) => _76.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegator_address, validator_address, amount }: _76.MsgDelegate) => {
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
                    }) => _76.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: _76.MsgBeginRedelegate) => {
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
                    }) => _76.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegator_address, validator_address, amount }: _76.MsgUndelegate) => {
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
                    }) => _76.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _76.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgCreateValidator;
                fromJSON(object: any): _76.MsgCreateValidator;
                toJSON(message: _76.MsgCreateValidator): unknown;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        security_contact?: string;
                        details?: string;
                    };
                    commission?: {
                        rate?: string;
                        max_rate?: string;
                        max_change_rate?: string;
                    };
                    min_self_delegation?: string;
                    delegator_address?: string;
                    validator_address?: string;
                    pubkey?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                    value?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _76.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _76.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgCreateValidatorResponse;
                fromJSON(_: any): _76.MsgCreateValidatorResponse;
                toJSON(_: _76.MsgCreateValidatorResponse): unknown;
                fromPartial(_: {}): _76.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _76.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgEditValidator;
                fromJSON(object: any): _76.MsgEditValidator;
                toJSON(message: _76.MsgEditValidator): unknown;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        security_contact?: string;
                        details?: string;
                    };
                    validator_address?: string;
                    commission_rate?: string;
                    min_self_delegation?: string;
                }): _76.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _76.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgEditValidatorResponse;
                fromJSON(_: any): _76.MsgEditValidatorResponse;
                toJSON(_: _76.MsgEditValidatorResponse): unknown;
                fromPartial(_: {}): _76.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _76.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgDelegate;
                fromJSON(object: any): _76.MsgDelegate;
                toJSON(message: _76.MsgDelegate): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_address?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _76.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _76.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgDelegateResponse;
                fromJSON(_: any): _76.MsgDelegateResponse;
                toJSON(_: _76.MsgDelegateResponse): unknown;
                fromPartial(_: {}): _76.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _76.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgBeginRedelegate;
                fromJSON(object: any): _76.MsgBeginRedelegate;
                toJSON(message: _76.MsgBeginRedelegate): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_src_address?: string;
                    validator_dst_address?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _76.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _76.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgBeginRedelegateResponse;
                fromJSON(object: any): _76.MsgBeginRedelegateResponse;
                toJSON(message: _76.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: {
                    completion_time?: Date;
                }): _76.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _76.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgUndelegate;
                fromJSON(object: any): _76.MsgUndelegate;
                toJSON(message: _76.MsgUndelegate): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_address?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _76.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _76.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgUndelegateResponse;
                fromJSON(object: any): _76.MsgUndelegateResponse;
                toJSON(message: _76.MsgUndelegateResponse): unknown;
                fromPartial(object: {
                    completion_time?: Date;
                }): _76.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _75.BondStatus;
            bondStatusToJSON(object: _75.BondStatus): string;
            BondStatus: typeof _75.BondStatus;
            HistoricalInfo: {
                encode(message: _75.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.HistoricalInfo;
                fromJSON(object: any): _75.HistoricalInfo;
                toJSON(message: _75.HistoricalInfo): unknown;
                fromPartial(object: {
                    header?: {
                        version?: {
                            block?: any;
                            app?: any;
                        };
                        chain_id?: string;
                        height?: any;
                        time?: Date;
                        last_block_id?: {
                            hash?: Uint8Array;
                            part_set_header?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        last_commit_hash?: Uint8Array;
                        data_hash?: Uint8Array;
                        validators_hash?: Uint8Array;
                        next_validators_hash?: Uint8Array;
                        consensus_hash?: Uint8Array;
                        app_hash?: Uint8Array;
                        last_results_hash?: Uint8Array;
                        evidence_hash?: Uint8Array;
                        proposer_address?: Uint8Array;
                    };
                    valset?: {
                        operator_address?: string;
                        consensus_pubkey?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _75.BondStatus;
                        tokens?: string;
                        delegator_shares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            security_contact?: string;
                            details?: string;
                        };
                        unbonding_height?: any;
                        unbonding_time?: Date;
                        commission?: {
                            commission_rates?: {
                                rate?: string;
                                max_rate?: string;
                                max_change_rate?: string;
                            };
                            update_time?: Date;
                        };
                        min_self_delegation?: string;
                    }[];
                }): _75.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _75.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.CommissionRates;
                fromJSON(object: any): _75.CommissionRates;
                toJSON(message: _75.CommissionRates): unknown;
                fromPartial(object: {
                    rate?: string;
                    max_rate?: string;
                    max_change_rate?: string;
                }): _75.CommissionRates;
            };
            Commission: {
                encode(message: _75.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Commission;
                fromJSON(object: any): _75.Commission;
                toJSON(message: _75.Commission): unknown;
                fromPartial(object: {
                    commission_rates?: {
                        rate?: string;
                        max_rate?: string;
                        max_change_rate?: string;
                    };
                    update_time?: Date;
                }): _75.Commission;
            };
            Description: {
                encode(message: _75.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Description;
                fromJSON(object: any): _75.Description;
                toJSON(message: _75.Description): unknown;
                fromPartial(object: {
                    moniker?: string;
                    identity?: string;
                    website?: string;
                    security_contact?: string;
                    details?: string;
                }): _75.Description;
            };
            Validator: {
                encode(message: _75.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Validator;
                fromJSON(object: any): _75.Validator;
                toJSON(message: _75.Validator): unknown;
                fromPartial(object: {
                    operator_address?: string;
                    consensus_pubkey?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                    jailed?: boolean;
                    status?: _75.BondStatus;
                    tokens?: string;
                    delegator_shares?: string;
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        security_contact?: string;
                        details?: string;
                    };
                    unbonding_height?: any;
                    unbonding_time?: Date;
                    commission?: {
                        commission_rates?: {
                            rate?: string;
                            max_rate?: string;
                            max_change_rate?: string;
                        };
                        update_time?: Date;
                    };
                    min_self_delegation?: string;
                }): _75.Validator;
            };
            ValAddresses: {
                encode(message: _75.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.ValAddresses;
                fromJSON(object: any): _75.ValAddresses;
                toJSON(message: _75.ValAddresses): unknown;
                fromPartial(object: {
                    addresses?: string[];
                }): _75.ValAddresses;
            };
            DVPair: {
                encode(message: _75.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.DVPair;
                fromJSON(object: any): _75.DVPair;
                toJSON(message: _75.DVPair): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_address?: string;
                }): _75.DVPair;
            };
            DVPairs: {
                encode(message: _75.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.DVPairs;
                fromJSON(object: any): _75.DVPairs;
                toJSON(message: _75.DVPairs): unknown;
                fromPartial(object: {
                    pairs?: {
                        delegator_address?: string;
                        validator_address?: string;
                    }[];
                }): _75.DVPairs;
            };
            DVVTriplet: {
                encode(message: _75.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.DVVTriplet;
                fromJSON(object: any): _75.DVVTriplet;
                toJSON(message: _75.DVVTriplet): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_src_address?: string;
                    validator_dst_address?: string;
                }): _75.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _75.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.DVVTriplets;
                fromJSON(object: any): _75.DVVTriplets;
                toJSON(message: _75.DVVTriplets): unknown;
                fromPartial(object: {
                    triplets?: {
                        delegator_address?: string;
                        validator_src_address?: string;
                        validator_dst_address?: string;
                    }[];
                }): _75.DVVTriplets;
            };
            Delegation: {
                encode(message: _75.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Delegation;
                fromJSON(object: any): _75.Delegation;
                toJSON(message: _75.Delegation): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_address?: string;
                    shares?: string;
                }): _75.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _75.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.UnbondingDelegation;
                fromJSON(object: any): _75.UnbondingDelegation;
                toJSON(message: _75.UnbondingDelegation): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_address?: string;
                    entries?: {
                        creation_height?: any;
                        completion_time?: Date;
                        initial_balance?: string;
                        balance?: string;
                    }[];
                }): _75.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _75.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.UnbondingDelegationEntry;
                fromJSON(object: any): _75.UnbondingDelegationEntry;
                toJSON(message: _75.UnbondingDelegationEntry): unknown;
                fromPartial(object: {
                    creation_height?: any;
                    completion_time?: Date;
                    initial_balance?: string;
                    balance?: string;
                }): _75.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _75.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.RedelegationEntry;
                fromJSON(object: any): _75.RedelegationEntry;
                toJSON(message: _75.RedelegationEntry): unknown;
                fromPartial(object: {
                    creation_height?: any;
                    completion_time?: Date;
                    initial_balance?: string;
                    shares_dst?: string;
                }): _75.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _75.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Redelegation;
                fromJSON(object: any): _75.Redelegation;
                toJSON(message: _75.Redelegation): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_src_address?: string;
                    validator_dst_address?: string;
                    entries?: {
                        creation_height?: any;
                        completion_time?: Date;
                        initial_balance?: string;
                        shares_dst?: string;
                    }[];
                }): _75.Redelegation;
            };
            Params: {
                encode(message: _75.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Params;
                fromJSON(object: any): _75.Params;
                toJSON(message: _75.Params): unknown;
                fromPartial(object: {
                    unbonding_time?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    max_validators?: number;
                    max_entries?: number;
                    historical_entries?: number;
                    bond_denom?: string;
                    min_commission_rate?: string;
                }): _75.Params;
            };
            DelegationResponse: {
                encode(message: _75.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.DelegationResponse;
                fromJSON(object: any): _75.DelegationResponse;
                toJSON(message: _75.DelegationResponse): unknown;
                fromPartial(object: {
                    delegation?: {
                        delegator_address?: string;
                        validator_address?: string;
                        shares?: string;
                    };
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _75.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _75.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.RedelegationEntryResponse;
                fromJSON(object: any): _75.RedelegationEntryResponse;
                toJSON(message: _75.RedelegationEntryResponse): unknown;
                fromPartial(object: {
                    redelegation_entry?: {
                        creation_height?: any;
                        completion_time?: Date;
                        initial_balance?: string;
                        shares_dst?: string;
                    };
                    balance?: string;
                }): _75.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _75.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.RedelegationResponse;
                fromJSON(object: any): _75.RedelegationResponse;
                toJSON(message: _75.RedelegationResponse): unknown;
                fromPartial(object: {
                    redelegation?: {
                        delegator_address?: string;
                        validator_src_address?: string;
                        validator_dst_address?: string;
                        entries?: {
                            creation_height?: any;
                            completion_time?: Date;
                            initial_balance?: string;
                            shares_dst?: string;
                        }[];
                    };
                    entries?: {
                        redelegation_entry?: {
                            creation_height?: any;
                            completion_time?: Date;
                            initial_balance?: string;
                            shares_dst?: string;
                        };
                        balance?: string;
                    }[];
                }): _75.RedelegationResponse;
            };
            Pool: {
                encode(message: _75.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Pool;
                fromJSON(object: any): _75.Pool;
                toJSON(message: _75.Pool): unknown;
                fromPartial(object: {
                    not_bonded_tokens?: string;
                    bonded_tokens?: string;
                }): _75.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _74.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryValidatorsRequest;
                fromJSON(object: any): _74.QueryValidatorsRequest;
                toJSON(message: _74.QueryValidatorsRequest): unknown;
                fromPartial(object: {
                    status?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _74.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _74.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryValidatorsResponse;
                fromJSON(object: any): _74.QueryValidatorsResponse;
                toJSON(message: _74.QueryValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: {
                        operator_address?: string;
                        consensus_pubkey?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _75.BondStatus;
                        tokens?: string;
                        delegator_shares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            security_contact?: string;
                            details?: string;
                        };
                        unbonding_height?: any;
                        unbonding_time?: Date;
                        commission?: {
                            commission_rates?: {
                                rate?: string;
                                max_rate?: string;
                                max_change_rate?: string;
                            };
                            update_time?: Date;
                        };
                        min_self_delegation?: string;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _74.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _74.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryValidatorRequest;
                fromJSON(object: any): _74.QueryValidatorRequest;
                toJSON(message: _74.QueryValidatorRequest): unknown;
                fromPartial(object: {
                    validator_addr?: string;
                }): _74.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _74.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryValidatorResponse;
                fromJSON(object: any): _74.QueryValidatorResponse;
                toJSON(message: _74.QueryValidatorResponse): unknown;
                fromPartial(object: {
                    validator?: {
                        operator_address?: string;
                        consensus_pubkey?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _75.BondStatus;
                        tokens?: string;
                        delegator_shares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            security_contact?: string;
                            details?: string;
                        };
                        unbonding_height?: any;
                        unbonding_time?: Date;
                        commission?: {
                            commission_rates?: {
                                rate?: string;
                                max_rate?: string;
                                max_change_rate?: string;
                            };
                            update_time?: Date;
                        };
                        min_self_delegation?: string;
                    };
                }): _74.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _74.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _74.QueryValidatorDelegationsRequest;
                toJSON(message: _74.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: {
                    validator_addr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _74.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _74.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _74.QueryValidatorDelegationsResponse;
                toJSON(message: _74.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: {
                    delegation_responses?: {
                        delegation?: {
                            delegator_address?: string;
                            validator_address?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _74.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _74.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _74.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _74.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: {
                    validator_addr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _74.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _74.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _74.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _74.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: {
                    unbonding_responses?: {
                        delegator_address?: string;
                        validator_address?: string;
                        entries?: {
                            creation_height?: any;
                            completion_time?: Date;
                            initial_balance?: string;
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _74.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _74.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryDelegationRequest;
                fromJSON(object: any): _74.QueryDelegationRequest;
                toJSON(message: _74.QueryDelegationRequest): unknown;
                fromPartial(object: {
                    delegator_addr?: string;
                    validator_addr?: string;
                }): _74.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _74.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryDelegationResponse;
                fromJSON(object: any): _74.QueryDelegationResponse;
                toJSON(message: _74.QueryDelegationResponse): unknown;
                fromPartial(object: {
                    delegation_response?: {
                        delegation?: {
                            delegator_address?: string;
                            validator_address?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _74.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _74.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _74.QueryUnbondingDelegationRequest;
                toJSON(message: _74.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: {
                    delegator_addr?: string;
                    validator_addr?: string;
                }): _74.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _74.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _74.QueryUnbondingDelegationResponse;
                toJSON(message: _74.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: {
                    unbond?: {
                        delegator_address?: string;
                        validator_address?: string;
                        entries?: {
                            creation_height?: any;
                            completion_time?: Date;
                            initial_balance?: string;
                            balance?: string;
                        }[];
                    };
                }): _74.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _74.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _74.QueryDelegatorDelegationsRequest;
                toJSON(message: _74.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: {
                    delegator_addr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _74.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _74.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _74.QueryDelegatorDelegationsResponse;
                toJSON(message: _74.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: {
                    delegation_responses?: {
                        delegation?: {
                            delegator_address?: string;
                            validator_address?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _74.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _74.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _74.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _74.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: {
                    delegator_addr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _74.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _74.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _74.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _74.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: {
                    unbonding_responses?: {
                        delegator_address?: string;
                        validator_address?: string;
                        entries?: {
                            creation_height?: any;
                            completion_time?: Date;
                            initial_balance?: string;
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _74.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _74.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryRedelegationsRequest;
                fromJSON(object: any): _74.QueryRedelegationsRequest;
                toJSON(message: _74.QueryRedelegationsRequest): unknown;
                fromPartial(object: {
                    delegator_addr?: string;
                    src_validator_addr?: string;
                    dst_validator_addr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _74.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _74.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryRedelegationsResponse;
                fromJSON(object: any): _74.QueryRedelegationsResponse;
                toJSON(message: _74.QueryRedelegationsResponse): unknown;
                fromPartial(object: {
                    redelegation_responses?: {
                        redelegation?: {
                            delegator_address?: string;
                            validator_src_address?: string;
                            validator_dst_address?: string;
                            entries?: {
                                creation_height?: any;
                                completion_time?: Date;
                                initial_balance?: string;
                                shares_dst?: string;
                            }[];
                        };
                        entries?: {
                            redelegation_entry?: {
                                creation_height?: any;
                                completion_time?: Date;
                                initial_balance?: string;
                                shares_dst?: string;
                            };
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _74.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _74.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _74.QueryDelegatorValidatorsRequest;
                toJSON(message: _74.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: {
                    delegator_addr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _74.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _74.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _74.QueryDelegatorValidatorsResponse;
                toJSON(message: _74.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: {
                        operator_address?: string;
                        consensus_pubkey?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _75.BondStatus;
                        tokens?: string;
                        delegator_shares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            security_contact?: string;
                            details?: string;
                        };
                        unbonding_height?: any;
                        unbonding_time?: Date;
                        commission?: {
                            commission_rates?: {
                                rate?: string;
                                max_rate?: string;
                                max_change_rate?: string;
                            };
                            update_time?: Date;
                        };
                        min_self_delegation?: string;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _74.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _74.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _74.QueryDelegatorValidatorRequest;
                toJSON(message: _74.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: {
                    delegator_addr?: string;
                    validator_addr?: string;
                }): _74.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _74.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _74.QueryDelegatorValidatorResponse;
                toJSON(message: _74.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: {
                    validator?: {
                        operator_address?: string;
                        consensus_pubkey?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _75.BondStatus;
                        tokens?: string;
                        delegator_shares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            security_contact?: string;
                            details?: string;
                        };
                        unbonding_height?: any;
                        unbonding_time?: Date;
                        commission?: {
                            commission_rates?: {
                                rate?: string;
                                max_rate?: string;
                                max_change_rate?: string;
                            };
                            update_time?: Date;
                        };
                        min_self_delegation?: string;
                    };
                }): _74.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _74.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryHistoricalInfoRequest;
                fromJSON(object: any): _74.QueryHistoricalInfoRequest;
                toJSON(message: _74.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: {
                    height?: any;
                }): _74.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _74.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryHistoricalInfoResponse;
                fromJSON(object: any): _74.QueryHistoricalInfoResponse;
                toJSON(message: _74.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: {
                    hist?: {
                        header?: {
                            version?: {
                                block?: any;
                                app?: any;
                            };
                            chain_id?: string;
                            height?: any;
                            time?: Date;
                            last_block_id?: {
                                hash?: Uint8Array;
                                part_set_header?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            last_commit_hash?: Uint8Array;
                            data_hash?: Uint8Array;
                            validators_hash?: Uint8Array;
                            next_validators_hash?: Uint8Array;
                            consensus_hash?: Uint8Array;
                            app_hash?: Uint8Array;
                            last_results_hash?: Uint8Array;
                            evidence_hash?: Uint8Array;
                            proposer_address?: Uint8Array;
                        };
                        valset?: {
                            operator_address?: string;
                            consensus_pubkey?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                            jailed?: boolean;
                            status?: _75.BondStatus;
                            tokens?: string;
                            delegator_shares?: string;
                            description?: {
                                moniker?: string;
                                identity?: string;
                                website?: string;
                                security_contact?: string;
                                details?: string;
                            };
                            unbonding_height?: any;
                            unbonding_time?: Date;
                            commission?: {
                                commission_rates?: {
                                    rate?: string;
                                    max_rate?: string;
                                    max_change_rate?: string;
                                };
                                update_time?: Date;
                            };
                            min_self_delegation?: string;
                        }[];
                    };
                }): _74.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _74.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryPoolRequest;
                fromJSON(_: any): _74.QueryPoolRequest;
                toJSON(_: _74.QueryPoolRequest): unknown;
                fromPartial(_: {}): _74.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _74.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryPoolResponse;
                fromJSON(object: any): _74.QueryPoolResponse;
                toJSON(message: _74.QueryPoolResponse): unknown;
                fromPartial(object: {
                    pool?: {
                        not_bonded_tokens?: string;
                        bonded_tokens?: string;
                    };
                }): _74.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _74.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryParamsRequest;
                fromJSON(_: any): _74.QueryParamsRequest;
                toJSON(_: _74.QueryParamsRequest): unknown;
                fromPartial(_: {}): _74.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _74.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryParamsResponse;
                fromJSON(object: any): _74.QueryParamsResponse;
                toJSON(message: _74.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        unbonding_time?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        max_validators?: number;
                        max_entries?: number;
                        historical_entries?: number;
                        bond_denom?: string;
                        min_commission_rate?: string;
                    };
                }): _74.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _73.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.GenesisState;
                fromJSON(object: any): _73.GenesisState;
                toJSON(message: _73.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        unbonding_time?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        max_validators?: number;
                        max_entries?: number;
                        historical_entries?: number;
                        bond_denom?: string;
                        min_commission_rate?: string;
                    };
                    last_total_power?: Uint8Array;
                    last_validator_powers?: {
                        address?: string;
                        power?: any;
                    }[];
                    validators?: {
                        operator_address?: string;
                        consensus_pubkey?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _75.BondStatus;
                        tokens?: string;
                        delegator_shares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            security_contact?: string;
                            details?: string;
                        };
                        unbonding_height?: any;
                        unbonding_time?: Date;
                        commission?: {
                            commission_rates?: {
                                rate?: string;
                                max_rate?: string;
                                max_change_rate?: string;
                            };
                            update_time?: Date;
                        };
                        min_self_delegation?: string;
                    }[];
                    delegations?: {
                        delegator_address?: string;
                        validator_address?: string;
                        shares?: string;
                    }[];
                    unbonding_delegations?: {
                        delegator_address?: string;
                        validator_address?: string;
                        entries?: {
                            creation_height?: any;
                            completion_time?: Date;
                            initial_balance?: string;
                            balance?: string;
                        }[];
                    }[];
                    redelegations?: {
                        delegator_address?: string;
                        validator_src_address?: string;
                        validator_dst_address?: string;
                        entries?: {
                            creation_height?: any;
                            completion_time?: Date;
                            initial_balance?: string;
                            shares_dst?: string;
                        }[];
                    }[];
                    exported?: boolean;
                }): _73.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _73.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.LastValidatorPower;
                fromJSON(object: any): _73.LastValidatorPower;
                toJSON(message: _73.LastValidatorPower): unknown;
                fromPartial(object: {
                    address?: string;
                    power?: any;
                }): _73.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _72.AuthorizationType;
            authorizationTypeToJSON(object: _72.AuthorizationType): string;
            AuthorizationType: typeof _72.AuthorizationType;
            StakeAuthorization: {
                encode(message: _72.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.StakeAuthorization;
                fromJSON(object: any): _72.StakeAuthorization;
                toJSON(message: _72.StakeAuthorization): unknown;
                fromPartial(object: {
                    max_tokens?: {
                        denom?: string;
                        amount?: string;
                    };
                    allow_list?: {
                        address?: string[];
                    };
                    deny_list?: {
                        address?: string[];
                    };
                    authorization_type?: _72.AuthorizationType;
                }): _72.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _72.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.StakeAuthorization_Validators;
                fromJSON(object: any): _72.StakeAuthorization_Validators;
                toJSON(message: _72.StakeAuthorization_Validators): unknown;
                fromPartial(object: {
                    address?: string[];
                }): _72.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _77.SignMode;
                signModeToJSON(object: _77.SignMode): string;
                SignMode: typeof _77.SignMode;
                SignatureDescriptors: {
                    encode(message: _77.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.SignatureDescriptors;
                    fromJSON(object: any): _77.SignatureDescriptors;
                    toJSON(message: _77.SignatureDescriptors): unknown;
                    fromPartial(object: {
                        signatures?: {
                            public_key?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                            data?: {
                                single?: {
                                    mode?: _77.SignMode;
                                    signature?: Uint8Array;
                                };
                                multi?: {
                                    bitarray?: {
                                        extra_bits_stored?: number;
                                        elems?: Uint8Array;
                                    };
                                    signatures?: any[];
                                };
                            };
                            sequence?: any;
                        }[];
                    }): _77.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _77.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.SignatureDescriptor;
                    fromJSON(object: any): _77.SignatureDescriptor;
                    toJSON(message: _77.SignatureDescriptor): unknown;
                    fromPartial(object: {
                        public_key?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        data?: {
                            single?: {
                                mode?: _77.SignMode;
                                signature?: Uint8Array;
                            };
                            multi?: {
                                bitarray?: {
                                    extra_bits_stored?: number;
                                    elems?: Uint8Array;
                                };
                                signatures?: any[];
                            };
                        };
                        sequence?: any;
                    }): _77.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _77.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.SignatureDescriptor_Data;
                    fromJSON(object: any): _77.SignatureDescriptor_Data;
                    toJSON(message: _77.SignatureDescriptor_Data): unknown;
                    fromPartial(object: {
                        single?: {
                            mode?: _77.SignMode;
                            signature?: Uint8Array;
                        };
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number;
                                elems?: Uint8Array;
                            };
                            signatures?: any[];
                        };
                    }): _77.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _77.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _77.SignatureDescriptor_Data_Single;
                    toJSON(message: _77.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: {
                        mode?: _77.SignMode;
                        signature?: Uint8Array;
                    }): _77.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _77.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _77.SignatureDescriptor_Data_Multi;
                    toJSON(message: _77.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: {
                        bitarray?: {
                            extra_bits_stored?: number;
                            elems?: Uint8Array;
                        };
                        signatures?: any[];
                    }): _77.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _230.ServiceClientImpl;
            LCDServiceClient: typeof _214.LCDServiceClient;
            Tx: {
                encode(message: _79.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Tx;
                fromJSON(object: any): _79.Tx;
                toJSON(message: _79.Tx): unknown;
                fromPartial(object: {
                    body?: {
                        messages?: {
                            type_url?: string;
                            value?: Uint8Array;
                        }[];
                        memo?: string;
                        timeout_height?: any;
                        extension_options?: {
                            type_url?: string;
                            value?: Uint8Array;
                        }[];
                        non_critical_extension_options?: {
                            type_url?: string;
                            value?: Uint8Array;
                        }[];
                    };
                    auth_info?: {
                        signer_infos?: {
                            public_key?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                            mode_info?: {
                                single?: {
                                    mode?: _77.SignMode;
                                };
                                multi?: {
                                    bitarray?: {
                                        extra_bits_stored?: number;
                                        elems?: Uint8Array;
                                    };
                                    mode_infos?: any[];
                                };
                            };
                            sequence?: any;
                        }[];
                        fee?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            gas_limit?: any;
                            payer?: string;
                            granter?: string;
                        };
                        tip?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tipper?: string;
                        };
                    };
                    signatures?: Uint8Array[];
                }): _79.Tx;
            };
            TxRaw: {
                encode(message: _79.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.TxRaw;
                fromJSON(object: any): _79.TxRaw;
                toJSON(message: _79.TxRaw): unknown;
                fromPartial(object: {
                    body_bytes?: Uint8Array;
                    auth_info_bytes?: Uint8Array;
                    signatures?: Uint8Array[];
                }): _79.TxRaw;
            };
            SignDoc: {
                encode(message: _79.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.SignDoc;
                fromJSON(object: any): _79.SignDoc;
                toJSON(message: _79.SignDoc): unknown;
                fromPartial(object: {
                    body_bytes?: Uint8Array;
                    auth_info_bytes?: Uint8Array;
                    chain_id?: string;
                    account_number?: any;
                }): _79.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _79.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.SignDocDirectAux;
                fromJSON(object: any): _79.SignDocDirectAux;
                toJSON(message: _79.SignDocDirectAux): unknown;
                fromPartial(object: {
                    body_bytes?: Uint8Array;
                    public_key?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                    chain_id?: string;
                    account_number?: any;
                    sequence?: any;
                    tip?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        tipper?: string;
                    };
                }): _79.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _79.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.TxBody;
                fromJSON(object: any): _79.TxBody;
                toJSON(message: _79.TxBody): unknown;
                fromPartial(object: {
                    messages?: {
                        type_url?: string;
                        value?: Uint8Array;
                    }[];
                    memo?: string;
                    timeout_height?: any;
                    extension_options?: {
                        type_url?: string;
                        value?: Uint8Array;
                    }[];
                    non_critical_extension_options?: {
                        type_url?: string;
                        value?: Uint8Array;
                    }[];
                }): _79.TxBody;
            };
            AuthInfo: {
                encode(message: _79.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.AuthInfo;
                fromJSON(object: any): _79.AuthInfo;
                toJSON(message: _79.AuthInfo): unknown;
                fromPartial(object: {
                    signer_infos?: {
                        public_key?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        mode_info?: {
                            single?: {
                                mode?: _77.SignMode;
                            };
                            multi?: {
                                bitarray?: {
                                    extra_bits_stored?: number;
                                    elems?: Uint8Array;
                                };
                                mode_infos?: any[];
                            };
                        };
                        sequence?: any;
                    }[];
                    fee?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        gas_limit?: any;
                        payer?: string;
                        granter?: string;
                    };
                    tip?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        tipper?: string;
                    };
                }): _79.AuthInfo;
            };
            SignerInfo: {
                encode(message: _79.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.SignerInfo;
                fromJSON(object: any): _79.SignerInfo;
                toJSON(message: _79.SignerInfo): unknown;
                fromPartial(object: {
                    public_key?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                    mode_info?: {
                        single?: {
                            mode?: _77.SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number;
                                elems?: Uint8Array;
                            };
                            mode_infos?: any[];
                        };
                    };
                    sequence?: any;
                }): _79.SignerInfo;
            };
            ModeInfo: {
                encode(message: _79.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ModeInfo;
                fromJSON(object: any): _79.ModeInfo;
                toJSON(message: _79.ModeInfo): unknown;
                fromPartial(object: {
                    single?: {
                        mode?: _77.SignMode;
                    };
                    multi?: {
                        bitarray?: {
                            extra_bits_stored?: number;
                            elems?: Uint8Array;
                        };
                        mode_infos?: any[];
                    };
                }): _79.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _79.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ModeInfo_Single;
                fromJSON(object: any): _79.ModeInfo_Single;
                toJSON(message: _79.ModeInfo_Single): unknown;
                fromPartial(object: {
                    mode?: _77.SignMode;
                }): _79.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _79.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ModeInfo_Multi;
                fromJSON(object: any): _79.ModeInfo_Multi;
                toJSON(message: _79.ModeInfo_Multi): unknown;
                fromPartial(object: {
                    bitarray?: {
                        extra_bits_stored?: number;
                        elems?: Uint8Array;
                    };
                    mode_infos?: any[];
                }): _79.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _79.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Fee;
                fromJSON(object: any): _79.Fee;
                toJSON(message: _79.Fee): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gas_limit?: any;
                    payer?: string;
                    granter?: string;
                }): _79.Fee;
            };
            Tip: {
                encode(message: _79.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Tip;
                fromJSON(object: any): _79.Tip;
                toJSON(message: _79.Tip): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                }): _79.Tip;
            };
            AuxSignerData: {
                encode(message: _79.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.AuxSignerData;
                fromJSON(object: any): _79.AuxSignerData;
                toJSON(message: _79.AuxSignerData): unknown;
                fromPartial(object: {
                    address?: string;
                    sign_doc?: {
                        body_bytes?: Uint8Array;
                        public_key?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        chain_id?: string;
                        account_number?: any;
                        sequence?: any;
                        tip?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tipper?: string;
                        };
                    };
                    mode?: _77.SignMode;
                    sig?: Uint8Array;
                }): _79.AuxSignerData;
            };
            orderByFromJSON(object: any): _78.OrderBy;
            orderByToJSON(object: _78.OrderBy): string;
            broadcastModeFromJSON(object: any): _78.BroadcastMode;
            broadcastModeToJSON(object: _78.BroadcastMode): string;
            OrderBy: typeof _78.OrderBy;
            BroadcastMode: typeof _78.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _78.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.GetTxsEventRequest;
                fromJSON(object: any): _78.GetTxsEventRequest;
                toJSON(message: _78.GetTxsEventRequest): unknown;
                fromPartial(object: {
                    events?: string[];
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                    order_by?: _78.OrderBy;
                }): _78.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _78.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.GetTxsEventResponse;
                fromJSON(object: any): _78.GetTxsEventResponse;
                toJSON(message: _78.GetTxsEventResponse): unknown;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeout_height?: any;
                            extension_options?: {
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                            non_critical_extension_options?: {
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        auth_info?: {
                            signer_infos?: {
                                public_key?: {
                                    type_url?: string;
                                    value?: Uint8Array;
                                };
                                mode_info?: {
                                    single?: {
                                        mode?: _77.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extra_bits_stored?: number;
                                            elems?: Uint8Array;
                                        };
                                        mode_infos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gas_limit?: any;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    }[];
                    tx_responses?: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        raw_log?: string;
                        logs?: {
                            msg_index?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gas_wanted?: any;
                        gas_used?: any;
                        tx?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _78.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _78.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.BroadcastTxRequest;
                fromJSON(object: any): _78.BroadcastTxRequest;
                toJSON(message: _78.BroadcastTxRequest): unknown;
                fromPartial(object: {
                    tx_bytes?: Uint8Array;
                    mode?: _78.BroadcastMode;
                }): _78.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _78.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.BroadcastTxResponse;
                fromJSON(object: any): _78.BroadcastTxResponse;
                toJSON(message: _78.BroadcastTxResponse): unknown;
                fromPartial(object: {
                    tx_response?: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        raw_log?: string;
                        logs?: {
                            msg_index?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gas_wanted?: any;
                        gas_used?: any;
                        tx?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    };
                }): _78.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _78.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.SimulateRequest;
                fromJSON(object: any): _78.SimulateRequest;
                toJSON(message: _78.SimulateRequest): unknown;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeout_height?: any;
                            extension_options?: {
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                            non_critical_extension_options?: {
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        auth_info?: {
                            signer_infos?: {
                                public_key?: {
                                    type_url?: string;
                                    value?: Uint8Array;
                                };
                                mode_info?: {
                                    single?: {
                                        mode?: _77.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extra_bits_stored?: number;
                                            elems?: Uint8Array;
                                        };
                                        mode_infos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gas_limit?: any;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                    tx_bytes?: Uint8Array;
                }): _78.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _78.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.SimulateResponse;
                fromJSON(object: any): _78.SimulateResponse;
                toJSON(message: _78.SimulateResponse): unknown;
                fromPartial(object: {
                    gas_info?: {
                        gas_wanted?: any;
                        gas_used?: any;
                    };
                    result?: {
                        data?: Uint8Array;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                        msg_responses?: {
                            type_url?: string;
                            value?: Uint8Array;
                        }[];
                    };
                }): _78.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _78.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.GetTxRequest;
                fromJSON(object: any): _78.GetTxRequest;
                toJSON(message: _78.GetTxRequest): unknown;
                fromPartial(object: {
                    hash?: string;
                }): _78.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _78.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.GetTxResponse;
                fromJSON(object: any): _78.GetTxResponse;
                toJSON(message: _78.GetTxResponse): unknown;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeout_height?: any;
                            extension_options?: {
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                            non_critical_extension_options?: {
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        auth_info?: {
                            signer_infos?: {
                                public_key?: {
                                    type_url?: string;
                                    value?: Uint8Array;
                                };
                                mode_info?: {
                                    single?: {
                                        mode?: _77.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extra_bits_stored?: number;
                                            elems?: Uint8Array;
                                        };
                                        mode_infos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gas_limit?: any;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                    tx_response?: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        raw_log?: string;
                        logs?: {
                            msg_index?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gas_wanted?: any;
                        gas_used?: any;
                        tx?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    };
                }): _78.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _78.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.GetBlockWithTxsRequest;
                fromJSON(object: any): _78.GetBlockWithTxsRequest;
                toJSON(message: _78.GetBlockWithTxsRequest): unknown;
                fromPartial(object: {
                    height?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _78.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _78.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.GetBlockWithTxsResponse;
                fromJSON(object: any): _78.GetBlockWithTxsResponse;
                toJSON(message: _78.GetBlockWithTxsResponse): unknown;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeout_height?: any;
                            extension_options?: {
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                            non_critical_extension_options?: {
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        auth_info?: {
                            signer_infos?: {
                                public_key?: {
                                    type_url?: string;
                                    value?: Uint8Array;
                                };
                                mode_info?: {
                                    single?: {
                                        mode?: _77.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extra_bits_stored?: number;
                                            elems?: Uint8Array;
                                        };
                                        mode_infos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gas_limit?: any;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    }[];
                    block_id?: {
                        hash?: Uint8Array;
                        part_set_header?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    block?: {
                        header?: {
                            version?: {
                                block?: any;
                                app?: any;
                            };
                            chain_id?: string;
                            height?: any;
                            time?: Date;
                            last_block_id?: {
                                hash?: Uint8Array;
                                part_set_header?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            last_commit_hash?: Uint8Array;
                            data_hash?: Uint8Array;
                            validators_hash?: Uint8Array;
                            next_validators_hash?: Uint8Array;
                            consensus_hash?: Uint8Array;
                            app_hash?: Uint8Array;
                            last_results_hash?: Uint8Array;
                            evidence_hash?: Uint8Array;
                            proposer_address?: Uint8Array;
                        };
                        data?: {
                            txs?: Uint8Array[];
                        };
                        evidence?: {
                            evidence?: {
                                duplicate_vote_evidence?: {
                                    vote_a?: {
                                        type?: import("../tendermint/types/types").SignedMsgType;
                                        height?: any;
                                        round?: number;
                                        block_id?: {
                                            hash?: Uint8Array;
                                            part_set_header?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        timestamp?: Date;
                                        validator_address?: Uint8Array;
                                        validator_index?: number;
                                        signature?: Uint8Array;
                                    };
                                    vote_b?: {
                                        type?: import("../tendermint/types/types").SignedMsgType;
                                        height?: any;
                                        round?: number;
                                        block_id?: {
                                            hash?: Uint8Array;
                                            part_set_header?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        timestamp?: Date;
                                        validator_address?: Uint8Array;
                                        validator_index?: number;
                                        signature?: Uint8Array;
                                    };
                                    total_voting_power?: any;
                                    validator_power?: any;
                                    timestamp?: Date;
                                };
                                light_client_attack_evidence?: {
                                    conflicting_block?: {
                                        signed_header?: {
                                            header?: {
                                                version?: {
                                                    block?: any;
                                                    app?: any;
                                                };
                                                chain_id?: string;
                                                height?: any;
                                                time?: Date;
                                                last_block_id?: {
                                                    hash?: Uint8Array;
                                                    part_set_header?: {
                                                        total?: number;
                                                        hash?: Uint8Array;
                                                    };
                                                };
                                                last_commit_hash?: Uint8Array;
                                                data_hash?: Uint8Array;
                                                validators_hash?: Uint8Array;
                                                next_validators_hash?: Uint8Array;
                                                consensus_hash?: Uint8Array;
                                                app_hash?: Uint8Array;
                                                last_results_hash?: Uint8Array;
                                                evidence_hash?: Uint8Array;
                                                proposer_address?: Uint8Array;
                                            };
                                            commit?: {
                                                height?: any;
                                                round?: number;
                                                block_id?: {
                                                    hash?: Uint8Array;
                                                    part_set_header?: {
                                                        total?: number;
                                                        hash?: Uint8Array;
                                                    };
                                                };
                                                signatures?: {
                                                    block_id_flag?: import("../tendermint/types/types").BlockIDFlag;
                                                    validator_address?: Uint8Array;
                                                    timestamp?: Date;
                                                    signature?: Uint8Array;
                                                }[];
                                            };
                                        };
                                        validator_set?: {
                                            validators?: {
                                                address?: Uint8Array;
                                                pub_key?: {
                                                    ed25519?: Uint8Array;
                                                    secp256k1?: Uint8Array;
                                                };
                                                voting_power?: any;
                                                proposer_priority?: any;
                                            }[];
                                            proposer?: {
                                                address?: Uint8Array;
                                                pub_key?: {
                                                    ed25519?: Uint8Array;
                                                    secp256k1?: Uint8Array;
                                                };
                                                voting_power?: any;
                                                proposer_priority?: any;
                                            };
                                            total_voting_power?: any;
                                        };
                                    };
                                    common_height?: any;
                                    byzantine_validators?: {
                                        address?: Uint8Array;
                                        pub_key?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        voting_power?: any;
                                        proposer_priority?: any;
                                    }[];
                                    total_voting_power?: any;
                                    timestamp?: Date;
                                };
                            }[];
                        };
                        last_commit?: {
                            height?: any;
                            round?: number;
                            block_id?: {
                                hash?: Uint8Array;
                                part_set_header?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                block_id_flag?: import("../tendermint/types/types").BlockIDFlag;
                                validator_address?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[];
                        };
                    };
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _78.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _242.MsgClientImpl;
            QueryClientImpl: typeof _231.QueryClientImpl;
            LCDQueryClient: typeof _215.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _81.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _81.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _81.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _81.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _81.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _81.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _81.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUpgrade(value: _81.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _81.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _81.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _81.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _81.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _81.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _81.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _81.MsgSoftwareUpgrade) => {
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
                    }) => _81.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _81.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _81.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _82.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Plan;
                fromJSON(object: any): _82.Plan;
                toJSON(message: _82.Plan): unknown;
                fromPartial(object: {
                    name?: string;
                    time?: Date;
                    height?: any;
                    info?: string;
                    upgraded_client_state?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                }): _82.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _82.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.SoftwareUpgradeProposal;
                fromJSON(object: any): _82.SoftwareUpgradeProposal;
                toJSON(message: _82.SoftwareUpgradeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    plan?: {
                        name?: string;
                        time?: Date;
                        height?: any;
                        info?: string;
                        upgraded_client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _82.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _82.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _82.CancelSoftwareUpgradeProposal;
                toJSON(message: _82.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _82.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _82.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ModuleVersion;
                fromJSON(object: any): _82.ModuleVersion;
                toJSON(message: _82.ModuleVersion): unknown;
                fromPartial(object: {
                    name?: string;
                    version?: any;
                }): _82.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _81.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgSoftwareUpgrade;
                fromJSON(object: any): _81.MsgSoftwareUpgrade;
                toJSON(message: _81.MsgSoftwareUpgrade): unknown;
                fromPartial(object: {
                    authority?: string;
                    plan?: {
                        name?: string;
                        time?: Date;
                        height?: any;
                        info?: string;
                        upgraded_client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _81.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _81.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _81.MsgSoftwareUpgradeResponse;
                toJSON(_: _81.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: {}): _81.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _81.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgCancelUpgrade;
                fromJSON(object: any): _81.MsgCancelUpgrade;
                toJSON(message: _81.MsgCancelUpgrade): unknown;
                fromPartial(object: {
                    authority?: string;
                }): _81.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _81.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgCancelUpgradeResponse;
                fromJSON(_: any): _81.MsgCancelUpgradeResponse;
                toJSON(_: _81.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: {}): _81.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _80.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryCurrentPlanRequest;
                fromJSON(_: any): _80.QueryCurrentPlanRequest;
                toJSON(_: _80.QueryCurrentPlanRequest): unknown;
                fromPartial(_: {}): _80.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _80.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryCurrentPlanResponse;
                fromJSON(object: any): _80.QueryCurrentPlanResponse;
                toJSON(message: _80.QueryCurrentPlanResponse): unknown;
                fromPartial(object: {
                    plan?: {
                        name?: string;
                        time?: Date;
                        height?: any;
                        info?: string;
                        upgraded_client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _80.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _80.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryAppliedPlanRequest;
                fromJSON(object: any): _80.QueryAppliedPlanRequest;
                toJSON(message: _80.QueryAppliedPlanRequest): unknown;
                fromPartial(object: {
                    name?: string;
                }): _80.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _80.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryAppliedPlanResponse;
                fromJSON(object: any): _80.QueryAppliedPlanResponse;
                toJSON(message: _80.QueryAppliedPlanResponse): unknown;
                fromPartial(object: {
                    height?: any;
                }): _80.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _80.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _80.QueryUpgradedConsensusStateRequest;
                toJSON(message: _80.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: {
                    last_height?: any;
                }): _80.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _80.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _80.QueryUpgradedConsensusStateResponse;
                toJSON(message: _80.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: {
                    upgraded_consensus_state?: Uint8Array;
                }): _80.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _80.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryModuleVersionsRequest;
                fromJSON(object: any): _80.QueryModuleVersionsRequest;
                toJSON(message: _80.QueryModuleVersionsRequest): unknown;
                fromPartial(object: {
                    module_name?: string;
                }): _80.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _80.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryModuleVersionsResponse;
                fromJSON(object: any): _80.QueryModuleVersionsResponse;
                toJSON(message: _80.QueryModuleVersionsResponse): unknown;
                fromPartial(object: {
                    module_versions?: {
                        name?: string;
                        version?: any;
                    }[];
                }): _80.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _80.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryAuthorityRequest;
                fromJSON(_: any): _80.QueryAuthorityRequest;
                toJSON(_: _80.QueryAuthorityRequest): unknown;
                fromPartial(_: {}): _80.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _80.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryAuthorityResponse;
                fromJSON(object: any): _80.QueryAuthorityResponse;
                toJSON(message: _80.QueryAuthorityResponse): unknown;
                fromPartial(object: {
                    address?: string;
                }): _80.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _243.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _83.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _83.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _83.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _83.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _83.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _83.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _83.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _83.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _83.MsgCreatePeriodicVestingAccount;
                    };
                };
                toJSON: {
                    createVestingAccount(value: _83.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPermanentLockedAccount(value: _83.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPeriodicVestingAccount(value: _83.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _83.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _83.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _83.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _83.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _83.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _83.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _83.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _83.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _83.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ from_address, to_address, amount, end_time, delayed }: _83.MsgCreateVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    };
                    fromAmino: ({ from_address, to_address, amount, end_time, delayed }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    }) => _83.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ from_address, to_address, amount }: _83.MsgCreatePermanentLockedAccount) => {
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
                    }) => _83.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ from_address, to_address, start_time, vesting_periods }: _83.MsgCreatePeriodicVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, start_time, vesting_periods }: {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _83.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _84.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.BaseVestingAccount;
                fromJSON(object: any): _84.BaseVestingAccount;
                toJSON(message: _84.BaseVestingAccount): unknown;
                fromPartial(object: {
                    base_account?: {
                        address?: string;
                        pub_key?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        account_number?: any;
                        sequence?: any;
                    };
                    original_vesting?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    delegated_free?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    delegated_vesting?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    end_time?: any;
                }): _84.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _84.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ContinuousVestingAccount;
                fromJSON(object: any): _84.ContinuousVestingAccount;
                toJSON(message: _84.ContinuousVestingAccount): unknown;
                fromPartial(object: {
                    base_vesting_account?: {
                        base_account?: {
                            address?: string;
                            pub_key?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                            account_number?: any;
                            sequence?: any;
                        };
                        original_vesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegated_free?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegated_vesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        end_time?: any;
                    };
                    start_time?: any;
                }): _84.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _84.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.DelayedVestingAccount;
                fromJSON(object: any): _84.DelayedVestingAccount;
                toJSON(message: _84.DelayedVestingAccount): unknown;
                fromPartial(object: {
                    base_vesting_account?: {
                        base_account?: {
                            address?: string;
                            pub_key?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                            account_number?: any;
                            sequence?: any;
                        };
                        original_vesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegated_free?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegated_vesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        end_time?: any;
                    };
                }): _84.DelayedVestingAccount;
            };
            Period: {
                encode(message: _84.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Period;
                fromJSON(object: any): _84.Period;
                toJSON(message: _84.Period): unknown;
                fromPartial(object: {
                    length?: any;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _84.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _84.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.PeriodicVestingAccount;
                fromJSON(object: any): _84.PeriodicVestingAccount;
                toJSON(message: _84.PeriodicVestingAccount): unknown;
                fromPartial(object: {
                    base_vesting_account?: {
                        base_account?: {
                            address?: string;
                            pub_key?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                            account_number?: any;
                            sequence?: any;
                        };
                        original_vesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegated_free?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegated_vesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        end_time?: any;
                    };
                    start_time?: any;
                    vesting_periods?: {
                        length?: any;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _84.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _84.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.PermanentLockedAccount;
                fromJSON(object: any): _84.PermanentLockedAccount;
                toJSON(message: _84.PermanentLockedAccount): unknown;
                fromPartial(object: {
                    base_vesting_account?: {
                        base_account?: {
                            address?: string;
                            pub_key?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                            account_number?: any;
                            sequence?: any;
                        };
                        original_vesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegated_free?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegated_vesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        end_time?: any;
                    };
                }): _84.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _83.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgCreateVestingAccount;
                fromJSON(object: any): _83.MsgCreateVestingAccount;
                toJSON(message: _83.MsgCreateVestingAccount): unknown;
                fromPartial(object: {
                    from_address?: string;
                    to_address?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    end_time?: any;
                    delayed?: boolean;
                }): _83.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _83.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _83.MsgCreateVestingAccountResponse;
                toJSON(_: _83.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: {}): _83.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _83.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _83.MsgCreatePermanentLockedAccount;
                toJSON(message: _83.MsgCreatePermanentLockedAccount): unknown;
                fromPartial(object: {
                    from_address?: string;
                    to_address?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _83.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _83.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _83.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _83.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial(_: {}): _83.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _83.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _83.MsgCreatePeriodicVestingAccount;
                toJSON(message: _83.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial(object: {
                    from_address?: string;
                    to_address?: string;
                    start_time?: any;
                    vesting_periods?: {
                        length?: any;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _83.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _83.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _83.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _83.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial(_: {}): _83.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("@osmonauts/helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _232.MsgClientImpl;
                };
                bank: {
                    v1beta1: _233.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _234.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _235.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _236.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _237.MsgClientImpl;
                };
                gov: {
                    v1beta1: _238.MsgClientImpl;
                };
                nft: {
                    v1beta1: _239.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _240.MsgClientImpl;
                };
                staking: {
                    v1beta1: _241.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _242.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _243.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpc }: {
            rpc: import("@osmonauts/helpers").Rpc;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: _216.QueryClientImpl;
                };
                auth: {
                    v1beta1: _217.QueryClientImpl;
                };
                authz: {
                    v1beta1: _218.QueryClientImpl;
                };
                bank: {
                    v1beta1: _219.QueryClientImpl;
                };
                base: {
                    tendermint: {
                        v1beta1: any;
                    };
                };
                distribution: {
                    v1beta1: _221.QueryClientImpl;
                };
                evidence: {
                    v1beta1: _222.QueryClientImpl;
                };
                feegrant: {
                    v1beta1: _223.QueryClientImpl;
                };
                gov: {
                    v1beta1: _224.QueryClientImpl;
                };
                mint: {
                    v1beta1: _225.QueryClientImpl;
                };
                nft: {
                    v1beta1: _226.QueryClientImpl;
                };
                params: {
                    v1beta1: _227.QueryClientImpl;
                };
                slashing: {
                    v1beta1: _228.QueryClientImpl;
                };
                staking: {
                    v1beta1: _229.QueryClientImpl;
                };
                tx: {
                    v1beta1: any;
                };
                upgrade: {
                    v1beta1: _231.QueryClientImpl;
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _201.LCDQueryClient;
                };
                authz: {
                    v1beta1: _202.LCDQueryClient;
                };
                bank: {
                    v1beta1: _203.LCDQueryClient;
                };
                base: {
                    tendermint: {
                        v1beta1: any;
                    };
                };
                distribution: {
                    v1beta1: _205.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _206.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _207.LCDQueryClient;
                };
                gov: {
                    v1beta1: _208.LCDQueryClient;
                };
                mint: {
                    v1beta1: _209.LCDQueryClient;
                };
                nft: {
                    v1beta1: _210.LCDQueryClient;
                };
                params: {
                    v1beta1: _211.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _212.LCDQueryClient;
                };
                staking: {
                    v1beta1: _213.LCDQueryClient;
                };
                tx: {
                    v1beta1: any;
                };
                upgrade: {
                    v1beta1: _215.LCDQueryClient;
                };
            };
        }>;
    };
}
