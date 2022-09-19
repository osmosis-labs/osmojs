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
import * as _51 from "./gov/v1/genesis";
import * as _52 from "./gov/v1/gov";
import * as _53 from "./gov/v1/query";
import * as _54 from "./gov/v1/tx";
import * as _55 from "./gov/v1beta1/genesis";
import * as _56 from "./gov/v1beta1/gov";
import * as _57 from "./gov/v1beta1/query";
import * as _58 from "./gov/v1beta1/tx";
import * as _59 from "./mint/v1beta1/genesis";
import * as _60 from "./mint/v1beta1/mint";
import * as _61 from "./mint/v1beta1/query";
import * as _63 from "./nft/v1beta1/event";
import * as _64 from "./nft/v1beta1/genesis";
import * as _65 from "./nft/v1beta1/nft";
import * as _66 from "./nft/v1beta1/query";
import * as _67 from "./nft/v1beta1/tx";
import * as _68 from "./orm/v1/orm";
import * as _69 from "./orm/v1alpha1/schema";
import * as _70 from "./params/v1beta1/params";
import * as _71 from "./params/v1beta1/query";
import * as _72 from "./slashing/v1beta1/genesis";
import * as _73 from "./slashing/v1beta1/query";
import * as _74 from "./slashing/v1beta1/slashing";
import * as _75 from "./slashing/v1beta1/tx";
import * as _76 from "./staking/v1beta1/authz";
import * as _77 from "./staking/v1beta1/genesis";
import * as _78 from "./staking/v1beta1/query";
import * as _79 from "./staking/v1beta1/staking";
import * as _80 from "./staking/v1beta1/tx";
import * as _81 from "./tx/signing/v1beta1/signing";
import * as _82 from "./tx/v1beta1/service";
import * as _83 from "./tx/v1beta1/tx";
import * as _84 from "./upgrade/v1beta1/query";
import * as _85 from "./upgrade/v1beta1/tx";
import * as _86 from "./upgrade/v1beta1/upgrade";
import * as _87 from "./vesting/v1beta1/tx";
import * as _88 from "./vesting/v1beta1/vesting";
import * as _207 from "./auth/v1beta1/query.lcd";
import * as _208 from "./authz/v1beta1/query.lcd";
import * as _209 from "./bank/v1beta1/query.lcd";
import * as _210 from "./base/tendermint/v1beta1/query.lcd";
import * as _211 from "./distribution/v1beta1/query.lcd";
import * as _212 from "./evidence/v1beta1/query.lcd";
import * as _213 from "./feegrant/v1beta1/query.lcd";
import * as _214 from "./gov/v1/query.lcd";
import * as _215 from "./gov/v1beta1/query.lcd";
import * as _216 from "./mint/v1beta1/query.lcd";
import * as _217 from "./nft/v1beta1/query.lcd";
import * as _218 from "./params/v1beta1/query.lcd";
import * as _219 from "./slashing/v1beta1/query.lcd";
import * as _220 from "./staking/v1beta1/query.lcd";
import * as _221 from "./tx/v1beta1/service.lcd";
import * as _222 from "./upgrade/v1beta1/query.lcd";
import * as _223 from "./app/v1alpha1/query.rpc.query";
import * as _224 from "./auth/v1beta1/query.rpc.query";
import * as _225 from "./authz/v1beta1/query.rpc.query";
import * as _226 from "./bank/v1beta1/query.rpc.query";
import * as _227 from "./base/tendermint/v1beta1/query.rpc.svc";
import * as _228 from "./distribution/v1beta1/query.rpc.query";
import * as _229 from "./evidence/v1beta1/query.rpc.query";
import * as _230 from "./feegrant/v1beta1/query.rpc.query";
import * as _231 from "./gov/v1/query.rpc.query";
import * as _232 from "./gov/v1beta1/query.rpc.query";
import * as _233 from "./mint/v1beta1/query.rpc.query";
import * as _234 from "./nft/v1beta1/query.rpc.query";
import * as _235 from "./params/v1beta1/query.rpc.query";
import * as _236 from "./slashing/v1beta1/query.rpc.query";
import * as _237 from "./staking/v1beta1/query.rpc.query";
import * as _238 from "./tx/v1beta1/service.rpc.svc";
import * as _239 from "./upgrade/v1beta1/query.rpc.query";
import * as _240 from "./authz/v1beta1/tx.rpc.msg";
import * as _241 from "./bank/v1beta1/tx.rpc.msg";
import * as _242 from "./crisis/v1beta1/tx.rpc.msg";
import * as _243 from "./distribution/v1beta1/tx.rpc.msg";
import * as _244 from "./evidence/v1beta1/tx.rpc.msg";
import * as _245 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _246 from "./gov/v1/tx.rpc.msg";
import * as _247 from "./gov/v1beta1/tx.rpc.msg";
import * as _248 from "./nft/v1beta1/tx.rpc.msg";
import * as _249 from "./slashing/v1beta1/tx.rpc.msg";
import * as _250 from "./staking/v1beta1/tx.rpc.msg";
import * as _251 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _252 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        const v1alpha1: {
            QueryClientImpl: typeof _223.QueryClientImpl;
            QueryConfigRequest: {
                encode(_: _4.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryConfigRequest;
                fromPartial(_: {}): _4.QueryConfigRequest;
                fromSDK(_: _4.QueryConfigRequestSDKType): _4.QueryConfigRequest;
                toSDK(_: _4.QueryConfigRequest): _4.QueryConfigRequestSDKType;
            };
            QueryConfigResponse: {
                encode(message: _4.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryConfigResponseSDKType;
                fromPartial(object: {
                    config?: {
                        modules?: {
                            name?: string;
                            config?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    };
                }): _4.QueryConfigResponse;
                fromSDK(object: _4.QueryConfigResponseSDKType): _4.QueryConfigResponse;
                toSDK(message: _4.QueryConfigResponse): _4.QueryConfigResponseSDKType;
            };
            ModuleDescriptor: {
                encode(message: _3.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.ModuleDescriptor;
                fromPartial(object: {
                    goImport?: string;
                    usePackage?: {
                        name?: string;
                        revision?: number;
                    }[];
                    canMigrateFrom?: {
                        module?: string;
                    }[];
                }): _3.ModuleDescriptor;
                fromSDK(object: _3.ModuleDescriptorSDKType): _3.ModuleDescriptor;
                toSDK(message: _3.ModuleDescriptor): _3.ModuleDescriptorSDKType;
            };
            PackageReference: {
                encode(message: _3.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.PackageReference;
                fromPartial(object: {
                    name?: string;
                    revision?: number;
                }): _3.PackageReference;
                fromSDK(object: _3.PackageReferenceSDKType): _3.PackageReference;
                toSDK(message: _3.PackageReference): _3.PackageReferenceSDKType;
            };
            MigrateFromInfo: {
                encode(message: _3.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.MigrateFromInfo;
                fromPartial(object: {
                    module?: string;
                }): _3.MigrateFromInfo;
                fromSDK(object: _3.MigrateFromInfoSDKType): _3.MigrateFromInfo;
                toSDK(message: _3.MigrateFromInfo): _3.MigrateFromInfoSDKType;
            };
            Config: {
                encode(message: _2.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Config;
                fromPartial(object: {
                    modules?: {
                        name?: string;
                        config?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _2.Config;
                fromSDK(object: _2.ConfigSDKType): _2.Config;
                toSDK(message: _2.Config): _2.ConfigSDKType;
            };
            ModuleConfig: {
                encode(message: _2.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.ModuleConfig;
                fromPartial(object: {
                    name?: string;
                    config?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _2.ModuleConfig;
                fromSDK(object: _2.ModuleConfigSDKType): _2.ModuleConfig;
                toSDK(message: _2.ModuleConfig): _2.ModuleConfigSDKType;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _224.QueryClientImpl;
            LCDQueryClient: typeof _207.LCDQueryClient;
            QueryAccountsRequest: {
                encode(message: _7.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAccountsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _7.QueryAccountsRequest;
                fromSDK(object: _7.QueryAccountsRequestSDKType): _7.QueryAccountsRequest;
                toSDK(message: _7.QueryAccountsRequest): _7.QueryAccountsRequestSDKType;
            };
            QueryAccountsResponse: {
                encode(message: _7.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAccountsResponseSDKType;
                fromPartial(object: {
                    accounts?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _7.QueryAccountsResponse;
                fromSDK(object: _7.QueryAccountsResponseSDKType): _7.QueryAccountsResponse;
                toSDK(message: _7.QueryAccountsResponse): _7.QueryAccountsResponseSDKType;
            };
            QueryAccountRequest: {
                encode(message: _7.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAccountRequest;
                fromPartial(object: {
                    address?: string;
                }): _7.QueryAccountRequest;
                fromSDK(object: _7.QueryAccountRequestSDKType): _7.QueryAccountRequest;
                toSDK(message: _7.QueryAccountRequest): _7.QueryAccountRequestSDKType;
            };
            QueryModuleAccountsRequest: {
                encode(_: _7.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryModuleAccountsRequest;
                fromPartial(_: {}): _7.QueryModuleAccountsRequest;
                fromSDK(_: _7.QueryModuleAccountsRequestSDKType): _7.QueryModuleAccountsRequest;
                toSDK(_: _7.QueryModuleAccountsRequest): _7.QueryModuleAccountsRequestSDKType;
            };
            QueryParamsResponse: {
                encode(message: _7.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryParamsResponseSDKType;
                fromPartial(object: {
                    params?: {
                        maxMemoCharacters?: any;
                        txSigLimit?: any;
                        txSizeCostPerByte?: any;
                        sigVerifyCostEd25519?: any;
                        sigVerifyCostSecp256k1?: any;
                    };
                }): _7.QueryParamsResponse;
                fromSDK(object: _7.QueryParamsResponseSDKType): _7.QueryParamsResponse;
                toSDK(message: _7.QueryParamsResponse): _7.QueryParamsResponseSDKType;
            };
            QueryAccountResponse: {
                encode(message: _7.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAccountResponseSDKType;
                fromPartial(object: {
                    account?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _7.QueryAccountResponse;
                fromSDK(object: _7.QueryAccountResponseSDKType): _7.QueryAccountResponse;
                toSDK(message: _7.QueryAccountResponse): _7.QueryAccountResponseSDKType;
            };
            QueryParamsRequest: {
                encode(_: _7.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryParamsRequest;
                fromPartial(_: {}): _7.QueryParamsRequest;
                fromSDK(_: _7.QueryParamsRequestSDKType): _7.QueryParamsRequest;
                toSDK(_: _7.QueryParamsRequest): _7.QueryParamsRequestSDKType;
            };
            QueryModuleAccountsResponse: {
                encode(message: _7.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryModuleAccountsResponseSDKType;
                fromPartial(object: {
                    accounts?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _7.QueryModuleAccountsResponse;
                fromSDK(object: _7.QueryModuleAccountsResponseSDKType): _7.QueryModuleAccountsResponse;
                toSDK(message: _7.QueryModuleAccountsResponse): _7.QueryModuleAccountsResponseSDKType;
            };
            Bech32PrefixRequest: {
                encode(_: _7.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Bech32PrefixRequest;
                fromPartial(_: {}): _7.Bech32PrefixRequest;
                fromSDK(_: _7.Bech32PrefixRequestSDKType): _7.Bech32PrefixRequest;
                toSDK(_: _7.Bech32PrefixRequest): _7.Bech32PrefixRequestSDKType;
            };
            Bech32PrefixResponse: {
                encode(message: _7.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Bech32PrefixResponseSDKType;
                fromPartial(object: {
                    bech32Prefix?: string;
                }): _7.Bech32PrefixResponse;
                fromSDK(object: _7.Bech32PrefixResponseSDKType): _7.Bech32PrefixResponse;
                toSDK(message: _7.Bech32PrefixResponse): _7.Bech32PrefixResponseSDKType;
            };
            AddressBytesToStringRequest: {
                encode(message: _7.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.AddressBytesToStringRequest;
                fromPartial(object: {
                    addressBytes?: Uint8Array;
                }): _7.AddressBytesToStringRequest;
                fromSDK(object: _7.AddressBytesToStringRequestSDKType): _7.AddressBytesToStringRequest;
                toSDK(message: _7.AddressBytesToStringRequest): _7.AddressBytesToStringRequestSDKType;
            };
            AddressBytesToStringResponse: {
                encode(message: _7.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.AddressBytesToStringResponseSDKType;
                fromPartial(object: {
                    addressString?: string;
                }): _7.AddressBytesToStringResponse;
                fromSDK(object: _7.AddressBytesToStringResponseSDKType): _7.AddressBytesToStringResponse;
                toSDK(message: _7.AddressBytesToStringResponse): _7.AddressBytesToStringResponseSDKType;
            };
            AddressStringToBytesRequest: {
                encode(message: _7.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.AddressStringToBytesRequest;
                fromPartial(object: {
                    addressString?: string;
                }): _7.AddressStringToBytesRequest;
                fromSDK(object: _7.AddressStringToBytesRequestSDKType): _7.AddressStringToBytesRequest;
                toSDK(message: _7.AddressStringToBytesRequest): _7.AddressStringToBytesRequestSDKType;
            };
            AddressStringToBytesResponse: {
                encode(message: _7.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.AddressStringToBytesResponseSDKType;
                fromPartial(object: {
                    addressBytes?: Uint8Array;
                }): _7.AddressStringToBytesResponse;
                fromSDK(object: _7.AddressStringToBytesResponseSDKType): _7.AddressStringToBytesResponse;
                toSDK(message: _7.AddressStringToBytesResponse): _7.AddressStringToBytesResponseSDKType;
            };
            GenesisState: {
                encode(message: _6.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.GenesisState;
                fromPartial(object: {
                    params?: {
                        maxMemoCharacters?: any;
                        txSigLimit?: any;
                        txSizeCostPerByte?: any;
                        sigVerifyCostEd25519?: any;
                        sigVerifyCostSecp256k1?: any;
                    };
                    accounts?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _6.GenesisState;
                fromSDK(object: _6.GenesisStateSDKType): _6.GenesisState;
                toSDK(message: _6.GenesisState): _6.GenesisStateSDKType;
            };
            BaseAccount: {
                encode(message: _5.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.BaseAccount;
                fromPartial(object: {
                    address?: string;
                    pubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    accountNumber?: any;
                    sequence?: any;
                }): _5.BaseAccount;
                fromSDK(object: _5.BaseAccountSDKType): _5.BaseAccount;
                toSDK(message: _5.BaseAccount): _5.BaseAccountSDKType;
            };
            ModuleAccount: {
                encode(message: _5.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.ModuleAccount;
                fromPartial(object: {
                    baseAccount?: {
                        address?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        accountNumber?: any;
                        sequence?: any;
                    };
                    name?: string;
                    permissions?: string[];
                }): _5.ModuleAccount;
                fromSDK(object: _5.ModuleAccountSDKType): _5.ModuleAccount;
                toSDK(message: _5.ModuleAccount): _5.ModuleAccountSDKType;
            };
            Params: {
                encode(message: _5.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.Params;
                fromPartial(object: {
                    maxMemoCharacters?: any;
                    txSigLimit?: any;
                    txSizeCostPerByte?: any;
                    sigVerifyCostEd25519?: any;
                    sigVerifyCostSecp256k1?: any;
                }): _5.Params;
                fromSDK(object: _5.ParamsSDKType): _5.Params;
                toSDK(message: _5.Params): _5.ParamsSDKType;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _240.MsgClientImpl;
            QueryClientImpl: typeof _225.QueryClientImpl;
            LCDQueryClient: typeof _208.LCDQueryClient;
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
                        value: any;
                    };
                    exec(value: _12.MsgExec): {
                        typeUrl: string;
                        value: any;
                    };
                    revoke(value: _12.MsgRevoke): {
                        typeUrl: string;
                        value: any;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: any;
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
                    toAmino: ({ granter, grantee, msgTypeUrl }: _12.MsgRevoke) => {
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
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    grant?: {
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    };
                }): _12.MsgGrant;
                fromSDK(object: _12.MsgGrantSDKType): _12.MsgGrant;
                toSDK(message: _12.MsgGrant): _12.MsgGrantSDKType;
            };
            MsgExecResponse: {
                encode(message: _12.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgExecResponseSDKType;
                fromPartial(object: {
                    results?: Uint8Array[];
                }): _12.MsgExecResponse;
                fromSDK(object: _12.MsgExecResponseSDKType): _12.MsgExecResponse;
                toSDK(message: _12.MsgExecResponse): _12.MsgExecResponseSDKType;
            };
            MsgExec: {
                encode(message: _12.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgExec;
                fromPartial(object: {
                    grantee?: string;
                    msgs?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _12.MsgExec;
                fromSDK(object: _12.MsgExecSDKType): _12.MsgExec;
                toSDK(message: _12.MsgExec): _12.MsgExecSDKType;
            };
            MsgGrantResponse: {
                encode(_: _12.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgGrantResponseSDKType;
                fromPartial(_: {}): _12.MsgGrantResponse;
                fromSDK(_: _12.MsgGrantResponseSDKType): _12.MsgGrantResponse;
                toSDK(_: _12.MsgGrantResponse): _12.MsgGrantResponseSDKType;
            };
            MsgRevoke: {
                encode(message: _12.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgRevoke;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msgTypeUrl?: string;
                }): _12.MsgRevoke;
                fromSDK(object: _12.MsgRevokeSDKType): _12.MsgRevoke;
                toSDK(message: _12.MsgRevoke): _12.MsgRevokeSDKType;
            };
            MsgRevokeResponse: {
                encode(_: _12.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgRevokeResponseSDKType;
                fromPartial(_: {}): _12.MsgRevokeResponse;
                fromSDK(_: _12.MsgRevokeResponseSDKType): _12.MsgRevokeResponse;
                toSDK(_: _12.MsgRevokeResponse): _12.MsgRevokeResponseSDKType;
            };
            QueryGrantsRequest: {
                encode(message: _11.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGrantsRequest;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msgTypeUrl?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _11.QueryGrantsRequest;
                fromSDK(object: _11.QueryGrantsRequestSDKType): _11.QueryGrantsRequest;
                toSDK(message: _11.QueryGrantsRequest): _11.QueryGrantsRequestSDKType;
            };
            QueryGrantsResponse: {
                encode(message: _11.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGrantsResponseSDKType;
                fromPartial(object: {
                    grants?: {
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _11.QueryGrantsResponse;
                fromSDK(object: _11.QueryGrantsResponseSDKType): _11.QueryGrantsResponse;
                toSDK(message: _11.QueryGrantsResponse): _11.QueryGrantsResponseSDKType;
            };
            QueryGranterGrantsRequest: {
                encode(message: _11.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGranterGrantsRequest;
                fromPartial(object: {
                    granter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _11.QueryGranterGrantsRequest;
                fromSDK(object: _11.QueryGranterGrantsRequestSDKType): _11.QueryGranterGrantsRequest;
                toSDK(message: _11.QueryGranterGrantsRequest): _11.QueryGranterGrantsRequestSDKType;
            };
            QueryGranterGrantsResponse: {
                encode(message: _11.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGranterGrantsResponseSDKType;
                fromPartial(object: {
                    grants?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _11.QueryGranterGrantsResponse;
                fromSDK(object: _11.QueryGranterGrantsResponseSDKType): _11.QueryGranterGrantsResponse;
                toSDK(message: _11.QueryGranterGrantsResponse): _11.QueryGranterGrantsResponseSDKType;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _11.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGranteeGrantsRequest;
                fromPartial(object: {
                    grantee?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _11.QueryGranteeGrantsRequest;
                fromSDK(object: _11.QueryGranteeGrantsRequestSDKType): _11.QueryGranteeGrantsRequest;
                toSDK(message: _11.QueryGranteeGrantsRequest): _11.QueryGranteeGrantsRequestSDKType;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _11.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGranteeGrantsResponseSDKType;
                fromPartial(object: {
                    grants?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _11.QueryGranteeGrantsResponse;
                fromSDK(object: _11.QueryGranteeGrantsResponseSDKType): _11.QueryGranteeGrantsResponse;
                toSDK(message: _11.QueryGranteeGrantsResponse): _11.QueryGranteeGrantsResponseSDKType;
            };
            GenesisState: {
                encode(message: _10.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.GenesisState;
                fromPartial(object: {
                    authorization?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                }): _10.GenesisState;
                fromSDK(object: _10.GenesisStateSDKType): _10.GenesisState;
                toSDK(message: _10.GenesisState): _10.GenesisStateSDKType;
            };
            EventGrant: {
                encode(message: _9.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.EventGrant;
                fromPartial(object: {
                    msgTypeUrl?: string;
                    granter?: string;
                    grantee?: string;
                }): _9.EventGrant;
                fromSDK(object: _9.EventGrantSDKType): _9.EventGrant;
                toSDK(message: _9.EventGrant): _9.EventGrantSDKType;
            };
            EventRevoke: {
                encode(message: _9.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.EventRevoke;
                fromPartial(object: {
                    msgTypeUrl?: string;
                    granter?: string;
                    grantee?: string;
                }): _9.EventRevoke;
                fromSDK(object: _9.EventRevokeSDKType): _9.EventRevoke;
                toSDK(message: _9.EventRevoke): _9.EventRevokeSDKType;
            };
            GenericAuthorization: {
                encode(message: _8.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GenericAuthorization;
                fromPartial(object: {
                    msg?: string;
                }): _8.GenericAuthorization;
                fromSDK(object: _8.GenericAuthorizationSDKType): _8.GenericAuthorization;
                toSDK(message: _8.GenericAuthorization): _8.GenericAuthorizationSDKType;
            };
            Grant: {
                encode(message: _8.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Grant;
                fromPartial(object: {
                    authorization?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    expiration?: Date;
                }): _8.Grant;
                fromSDK(object: _8.GrantSDKType): _8.Grant;
                toSDK(message: _8.Grant): _8.GrantSDKType;
            };
            GrantAuthorization: {
                encode(message: _8.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GrantAuthorization;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    authorization?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    expiration?: Date;
                }): _8.GrantAuthorization;
                fromSDK(object: _8.GrantAuthorizationSDKType): _8.GrantAuthorization;
                toSDK(message: _8.GrantAuthorization): _8.GrantAuthorizationSDKType;
            };
            GrantQueueItem: {
                encode(message: _8.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GrantQueueItem;
                fromPartial(object: {
                    msgTypeUrls?: string[];
                }): _8.GrantQueueItem;
                fromSDK(object: _8.GrantQueueItemSDKType): _8.GrantQueueItem;
                toSDK(message: _8.GrantQueueItem): _8.GrantQueueItemSDKType;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _241.MsgClientImpl;
            QueryClientImpl: typeof _226.QueryClientImpl;
            LCDQueryClient: typeof _209.LCDQueryClient;
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
                        value: any;
                    };
                    multiSend(value: _17.MsgMultiSend): {
                        typeUrl: string;
                        value: any;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: any;
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
                    toAmino: ({ fromAddress, toAddress, amount }: _17.MsgSend) => {
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
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _17.MsgSend;
                fromSDK(object: _17.MsgSendSDKType): _17.MsgSend;
                toSDK(message: _17.MsgSend): _17.MsgSendSDKType;
            };
            MsgSendResponse: {
                encode(_: _17.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgSendResponseSDKType;
                fromPartial(_: {}): _17.MsgSendResponse;
                fromSDK(_: _17.MsgSendResponseSDKType): _17.MsgSendResponse;
                toSDK(_: _17.MsgSendResponse): _17.MsgSendResponseSDKType;
            };
            MsgMultiSend: {
                encode(message: _17.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgMultiSend;
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
                fromSDK(object: _17.MsgMultiSendSDKType): _17.MsgMultiSend;
                toSDK(message: _17.MsgMultiSend): _17.MsgMultiSendSDKType;
            };
            MsgMultiSendResponse: {
                encode(_: _17.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgMultiSendResponseSDKType;
                fromPartial(_: {}): _17.MsgMultiSendResponse;
                fromSDK(_: _17.MsgMultiSendResponseSDKType): _17.MsgMultiSendResponse;
                toSDK(_: _17.MsgMultiSendResponse): _17.MsgMultiSendResponseSDKType;
            };
            QueryBalanceRequest: {
                encode(message: _16.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryBalanceRequest;
                fromPartial(object: {
                    address?: string;
                    denom?: string;
                }): _16.QueryBalanceRequest;
                fromSDK(object: _16.QueryBalanceRequestSDKType): _16.QueryBalanceRequest;
                toSDK(message: _16.QueryBalanceRequest): _16.QueryBalanceRequestSDKType;
            };
            QueryBalanceResponse: {
                encode(message: _16.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryBalanceResponseSDKType;
                fromPartial(object: {
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _16.QueryBalanceResponse;
                fromSDK(object: _16.QueryBalanceResponseSDKType): _16.QueryBalanceResponse;
                toSDK(message: _16.QueryBalanceResponse): _16.QueryBalanceResponseSDKType;
            };
            QueryAllBalancesRequest: {
                encode(message: _16.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryAllBalancesRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _16.QueryAllBalancesRequest;
                fromSDK(object: _16.QueryAllBalancesRequestSDKType): _16.QueryAllBalancesRequest;
                toSDK(message: _16.QueryAllBalancesRequest): _16.QueryAllBalancesRequestSDKType;
            };
            QueryAllBalancesResponse: {
                encode(message: _16.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryAllBalancesResponseSDKType;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _16.QueryAllBalancesResponse;
                fromSDK(object: _16.QueryAllBalancesResponseSDKType): _16.QueryAllBalancesResponse;
                toSDK(message: _16.QueryAllBalancesResponse): _16.QueryAllBalancesResponseSDKType;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _16.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QuerySpendableBalancesRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _16.QuerySpendableBalancesRequest;
                fromSDK(object: _16.QuerySpendableBalancesRequestSDKType): _16.QuerySpendableBalancesRequest;
                toSDK(message: _16.QuerySpendableBalancesRequest): _16.QuerySpendableBalancesRequestSDKType;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _16.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QuerySpendableBalancesResponseSDKType;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _16.QuerySpendableBalancesResponse;
                fromSDK(object: _16.QuerySpendableBalancesResponseSDKType): _16.QuerySpendableBalancesResponse;
                toSDK(message: _16.QuerySpendableBalancesResponse): _16.QuerySpendableBalancesResponseSDKType;
            };
            QueryTotalSupplyRequest: {
                encode(message: _16.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryTotalSupplyRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _16.QueryTotalSupplyRequest;
                fromSDK(object: _16.QueryTotalSupplyRequestSDKType): _16.QueryTotalSupplyRequest;
                toSDK(message: _16.QueryTotalSupplyRequest): _16.QueryTotalSupplyRequestSDKType;
            };
            QueryTotalSupplyResponse: {
                encode(message: _16.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryTotalSupplyResponseSDKType;
                fromPartial(object: {
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _16.QueryTotalSupplyResponse;
                fromSDK(object: _16.QueryTotalSupplyResponseSDKType): _16.QueryTotalSupplyResponse;
                toSDK(message: _16.QueryTotalSupplyResponse): _16.QueryTotalSupplyResponseSDKType;
            };
            QuerySupplyOfRequest: {
                encode(message: _16.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QuerySupplyOfRequest;
                fromPartial(object: {
                    denom?: string;
                }): _16.QuerySupplyOfRequest;
                fromSDK(object: _16.QuerySupplyOfRequestSDKType): _16.QuerySupplyOfRequest;
                toSDK(message: _16.QuerySupplyOfRequest): _16.QuerySupplyOfRequestSDKType;
            };
            QuerySupplyOfResponse: {
                encode(message: _16.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QuerySupplyOfResponseSDKType;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _16.QuerySupplyOfResponse;
                fromSDK(object: _16.QuerySupplyOfResponseSDKType): _16.QuerySupplyOfResponse;
                toSDK(message: _16.QuerySupplyOfResponse): _16.QuerySupplyOfResponseSDKType;
            };
            QueryParamsRequest: {
                encode(_: _16.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryParamsRequest;
                fromPartial(_: {}): _16.QueryParamsRequest;
                fromSDK(_: _16.QueryParamsRequestSDKType): _16.QueryParamsRequest;
                toSDK(_: _16.QueryParamsRequest): _16.QueryParamsRequestSDKType;
            };
            QueryParamsResponse: {
                encode(message: _16.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryParamsResponseSDKType;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                }): _16.QueryParamsResponse;
                fromSDK(object: _16.QueryParamsResponseSDKType): _16.QueryParamsResponse;
                toSDK(message: _16.QueryParamsResponse): _16.QueryParamsResponseSDKType;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _16.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomsMetadataRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _16.QueryDenomsMetadataRequest;
                fromSDK(object: _16.QueryDenomsMetadataRequestSDKType): _16.QueryDenomsMetadataRequest;
                toSDK(message: _16.QueryDenomsMetadataRequest): _16.QueryDenomsMetadataRequestSDKType;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _16.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomsMetadataResponseSDKType;
                fromPartial(object: {
                    metadatas?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _16.QueryDenomsMetadataResponse;
                fromSDK(object: _16.QueryDenomsMetadataResponseSDKType): _16.QueryDenomsMetadataResponse;
                toSDK(message: _16.QueryDenomsMetadataResponse): _16.QueryDenomsMetadataResponseSDKType;
            };
            QueryDenomMetadataRequest: {
                encode(message: _16.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomMetadataRequest;
                fromPartial(object: {
                    denom?: string;
                }): _16.QueryDenomMetadataRequest;
                fromSDK(object: _16.QueryDenomMetadataRequestSDKType): _16.QueryDenomMetadataRequest;
                toSDK(message: _16.QueryDenomMetadataRequest): _16.QueryDenomMetadataRequestSDKType;
            };
            QueryDenomMetadataResponse: {
                encode(message: _16.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomMetadataResponseSDKType;
                fromPartial(object: {
                    metadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    };
                }): _16.QueryDenomMetadataResponse;
                fromSDK(object: _16.QueryDenomMetadataResponseSDKType): _16.QueryDenomMetadataResponse;
                toSDK(message: _16.QueryDenomMetadataResponse): _16.QueryDenomMetadataResponseSDKType;
            };
            QueryDenomOwnersRequest: {
                encode(message: _16.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomOwnersRequest;
                fromPartial(object: {
                    denom?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _16.QueryDenomOwnersRequest;
                fromSDK(object: _16.QueryDenomOwnersRequestSDKType): _16.QueryDenomOwnersRequest;
                toSDK(message: _16.QueryDenomOwnersRequest): _16.QueryDenomOwnersRequestSDKType;
            };
            DenomOwner: {
                encode(message: _16.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.DenomOwner;
                fromPartial(object: {
                    address?: string;
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _16.DenomOwner;
                fromSDK(object: _16.DenomOwnerSDKType): _16.DenomOwner;
                toSDK(message: _16.DenomOwner): _16.DenomOwnerSDKType;
            };
            QueryDenomOwnersResponse: {
                encode(message: _16.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomOwnersResponseSDKType;
                fromPartial(object: {
                    denomOwners?: {
                        address?: string;
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _16.QueryDenomOwnersResponse;
                fromSDK(object: _16.QueryDenomOwnersResponseSDKType): _16.QueryDenomOwnersResponse;
                toSDK(message: _16.QueryDenomOwnersResponse): _16.QueryDenomOwnersResponseSDKType;
            };
            GenesisState: {
                encode(message: _15.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.GenesisState;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
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
                    denomMetadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    }[];
                }): _15.GenesisState;
                fromSDK(object: _15.GenesisStateSDKType): _15.GenesisState;
                toSDK(message: _15.GenesisState): _15.GenesisStateSDKType;
            };
            Balance: {
                encode(message: _15.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Balance;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _15.Balance;
                fromSDK(object: _15.BalanceSDKType): _15.Balance;
                toSDK(message: _15.Balance): _15.BalanceSDKType;
            };
            Params: {
                encode(message: _14.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Params;
                fromPartial(object: {
                    sendEnabled?: {
                        denom?: string;
                        enabled?: boolean;
                    }[];
                    defaultSendEnabled?: boolean;
                }): _14.Params;
                fromSDK(object: _14.ParamsSDKType): _14.Params;
                toSDK(message: _14.Params): _14.ParamsSDKType;
            };
            SendEnabled: {
                encode(message: _14.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.SendEnabled;
                fromPartial(object: {
                    denom?: string;
                    enabled?: boolean;
                }): _14.SendEnabled;
                fromSDK(object: _14.SendEnabledSDKType): _14.SendEnabled;
                toSDK(message: _14.SendEnabled): _14.SendEnabledSDKType;
            };
            Input: {
                encode(message: _14.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Input;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _14.Input;
                fromSDK(object: _14.InputSDKType): _14.Input;
                toSDK(message: _14.Input): _14.InputSDKType;
            };
            Output: {
                encode(message: _14.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Output;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _14.Output;
                fromSDK(object: _14.OutputSDKType): _14.Output;
                toSDK(message: _14.Output): _14.OutputSDKType;
            };
            Supply: {
                encode(message: _14.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Supply;
                fromPartial(object: {
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _14.Supply;
                fromSDK(object: _14.SupplySDKType): _14.Supply;
                toSDK(message: _14.Supply): _14.SupplySDKType;
            };
            DenomUnit: {
                encode(message: _14.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.DenomUnit;
                fromPartial(object: {
                    denom?: string;
                    exponent?: number;
                    aliases?: string[];
                }): _14.DenomUnit;
                fromSDK(object: _14.DenomUnitSDKType): _14.DenomUnit;
                toSDK(message: _14.DenomUnit): _14.DenomUnitSDKType;
            };
            Metadata: {
                encode(message: _14.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Metadata;
                fromPartial(object: {
                    description?: string;
                    denomUnits?: {
                        denom?: string;
                        exponent?: number;
                        aliases?: string[];
                    }[];
                    base?: string;
                    display?: string;
                    name?: string;
                    symbol?: string;
                    uri?: string;
                    uriHash?: string;
                }): _14.Metadata;
                fromSDK(object: _14.MetadataSDKType): _14.Metadata;
                toSDK(message: _14.Metadata): _14.MetadataSDKType;
            };
            SendAuthorization: {
                encode(message: _13.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.SendAuthorization;
                fromPartial(object: {
                    spendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _13.SendAuthorization;
                fromSDK(object: _13.SendAuthorizationSDKType): _13.SendAuthorization;
                toSDK(message: _13.SendAuthorization): _13.SendAuthorizationSDKType;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _18.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.TxResponse;
                    fromPartial(object: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
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
                        gasWanted?: any;
                        gasUsed?: any;
                        tx?: {
                            typeUrl?: string;
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
                    fromSDK(object: _18.TxResponseSDKType): _18.TxResponse;
                    toSDK(message: _18.TxResponse): _18.TxResponseSDKType;
                };
                ABCIMessageLog: {
                    encode(message: _18.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ABCIMessageLog;
                    fromPartial(object: {
                        msgIndex?: number;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                        }[];
                    }): _18.ABCIMessageLog;
                    fromSDK(object: _18.ABCIMessageLogSDKType): _18.ABCIMessageLog;
                    toSDK(message: _18.ABCIMessageLog): _18.ABCIMessageLogSDKType;
                };
                StringEvent: {
                    encode(message: _18.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.StringEvent;
                    fromPartial(object: {
                        type?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    }): _18.StringEvent;
                    fromSDK(object: _18.StringEventSDKType): _18.StringEvent;
                    toSDK(message: _18.StringEvent): _18.StringEventSDKType;
                };
                Attribute: {
                    encode(message: _18.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Attribute;
                    fromPartial(object: {
                        key?: string;
                        value?: string;
                    }): _18.Attribute;
                    fromSDK(object: _18.AttributeSDKType): _18.Attribute;
                    toSDK(message: _18.Attribute): _18.AttributeSDKType;
                };
                GasInfo: {
                    encode(message: _18.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GasInfo;
                    fromPartial(object: {
                        gasWanted?: any;
                        gasUsed?: any;
                    }): _18.GasInfo;
                    fromSDK(object: _18.GasInfoSDKType): _18.GasInfo;
                    toSDK(message: _18.GasInfo): _18.GasInfoSDKType;
                };
                Result: {
                    encode(message: _18.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Result;
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
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }): _18.Result;
                    fromSDK(object: _18.ResultSDKType): _18.Result;
                    toSDK(message: _18.Result): _18.ResultSDKType;
                };
                SimulationResponse: {
                    encode(message: _18.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.SimulationResponse;
                    fromPartial(object: {
                        gasInfo?: {
                            gasWanted?: any;
                            gasUsed?: any;
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
                            msgResponses?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                    }): _18.SimulationResponse;
                    fromSDK(object: _18.SimulationResponseSDKType): _18.SimulationResponse;
                    toSDK(message: _18.SimulationResponse): _18.SimulationResponseSDKType;
                };
                MsgData: {
                    encode(message: _18.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgData;
                    fromPartial(object: {
                        msgType?: string;
                        data?: Uint8Array;
                    }): _18.MsgData;
                    fromSDK(object: _18.MsgDataSDKType): _18.MsgData;
                    toSDK(message: _18.MsgData): _18.MsgDataSDKType;
                };
                TxMsgData: {
                    encode(message: _18.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.TxMsgData;
                    fromPartial(object: {
                        data?: {
                            msgType?: string;
                            data?: Uint8Array;
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }): _18.TxMsgData;
                    fromSDK(object: _18.TxMsgDataSDKType): _18.TxMsgData;
                    toSDK(message: _18.TxMsgData): _18.TxMsgDataSDKType;
                };
                SearchTxsResult: {
                    encode(message: _18.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.SearchTxsResult;
                    fromPartial(object: {
                        totalCount?: any;
                        count?: any;
                        pageNumber?: any;
                        pageTotal?: any;
                        limit?: any;
                        txs?: {
                            height?: any;
                            txhash?: string;
                            codespace?: string;
                            code?: number;
                            data?: string;
                            rawLog?: string;
                            logs?: {
                                msgIndex?: number;
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
                            gasWanted?: any;
                            gasUsed?: any;
                            tx?: {
                                typeUrl?: string;
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
                    fromSDK(object: _18.SearchTxsResultSDKType): _18.SearchTxsResult;
                    toSDK(message: _18.SearchTxsResult): _18.SearchTxsResultSDKType;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _19.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Pairs;
                    fromPartial(object: {
                        pairs?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }): _19.Pairs;
                    fromSDK(object: _19.PairsSDKType): _19.Pairs;
                    toSDK(message: _19.Pairs): _19.PairsSDKType;
                };
                Pair: {
                    encode(message: _19.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Pair;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _19.Pair;
                    fromSDK(object: _19.PairSDKType): _19.Pair;
                    toSDK(message: _19.Pair): _19.PairSDKType;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _20.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.PageRequest;
                    fromPartial(object: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    }): _20.PageRequest;
                    fromSDK(object: _20.PageRequestSDKType): _20.PageRequest;
                    toSDK(message: _20.PageRequest): _20.PageRequestSDKType;
                };
                PageResponse: {
                    encode(message: _20.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.PageResponse;
                    fromPartial(object: {
                        nextKey?: Uint8Array;
                        total?: any;
                    }): _20.PageResponse;
                    fromSDK(object: _20.PageResponseSDKType): _20.PageResponse;
                    toSDK(message: _20.PageResponse): _20.PageResponseSDKType;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _21.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.ListAllInterfacesRequest;
                    fromPartial(_: {}): _21.ListAllInterfacesRequest;
                    fromSDK(_: _21.ListAllInterfacesRequestSDKType): _21.ListAllInterfacesRequest;
                    toSDK(_: _21.ListAllInterfacesRequest): _21.ListAllInterfacesRequestSDKType;
                };
                ListAllInterfacesResponse: {
                    encode(message: _21.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.ListAllInterfacesResponseSDKType;
                    fromPartial(object: {
                        interfaceNames?: string[];
                    }): _21.ListAllInterfacesResponse;
                    fromSDK(object: _21.ListAllInterfacesResponseSDKType): _21.ListAllInterfacesResponse;
                    toSDK(message: _21.ListAllInterfacesResponse): _21.ListAllInterfacesResponseSDKType;
                };
                ListImplementationsRequest: {
                    encode(message: _21.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.ListImplementationsRequest;
                    fromPartial(object: {
                        interfaceName?: string;
                    }): _21.ListImplementationsRequest;
                    fromSDK(object: _21.ListImplementationsRequestSDKType): _21.ListImplementationsRequest;
                    toSDK(message: _21.ListImplementationsRequest): _21.ListImplementationsRequestSDKType;
                };
                ListImplementationsResponse: {
                    encode(message: _21.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.ListImplementationsResponseSDKType;
                    fromPartial(object: {
                        implementationMessageNames?: string[];
                    }): _21.ListImplementationsResponse;
                    fromSDK(object: _21.ListImplementationsResponseSDKType): _21.ListImplementationsResponse;
                    toSDK(message: _21.ListImplementationsResponse): _21.ListImplementationsResponseSDKType;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _22.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.AppDescriptor;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string;
                                number?: number;
                                authnInfoProviderMethodFullname?: string;
                            }[];
                        };
                        chain?: {
                            id?: string;
                        };
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interfaceAcceptingMessages?: {
                                    fullname?: string;
                                    fieldDescriptorNames?: string[];
                                }[];
                                interfaceImplementers?: {
                                    fullname?: string;
                                    typeUrl?: string;
                                }[];
                            }[];
                        };
                        configuration?: {
                            bech32AccountAddressPrefix?: string;
                        };
                        queryServices?: {
                            queryServices?: {
                                fullname?: string;
                                isModule?: boolean;
                                methods?: {
                                    name?: string;
                                    fullQueryPath?: string;
                                }[];
                            }[];
                        };
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msgTypeUrl?: string;
                            }[];
                        };
                    }): _22.AppDescriptor;
                    fromSDK(object: _22.AppDescriptorSDKType): _22.AppDescriptor;
                    toSDK(message: _22.AppDescriptor): _22.AppDescriptorSDKType;
                };
                TxDescriptor: {
                    encode(message: _22.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.TxDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        msgs?: {
                            msgTypeUrl?: string;
                        }[];
                    }): _22.TxDescriptor;
                    fromSDK(object: _22.TxDescriptorSDKType): _22.TxDescriptor;
                    toSDK(message: _22.TxDescriptor): _22.TxDescriptorSDKType;
                };
                AuthnDescriptor: {
                    encode(message: _22.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.AuthnDescriptor;
                    fromPartial(object: {
                        signModes?: {
                            name?: string;
                            number?: number;
                            authnInfoProviderMethodFullname?: string;
                        }[];
                    }): _22.AuthnDescriptor;
                    fromSDK(object: _22.AuthnDescriptorSDKType): _22.AuthnDescriptor;
                    toSDK(message: _22.AuthnDescriptor): _22.AuthnDescriptorSDKType;
                };
                SigningModeDescriptor: {
                    encode(message: _22.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.SigningModeDescriptor;
                    fromPartial(object: {
                        name?: string;
                        number?: number;
                        authnInfoProviderMethodFullname?: string;
                    }): _22.SigningModeDescriptor;
                    fromSDK(object: _22.SigningModeDescriptorSDKType): _22.SigningModeDescriptor;
                    toSDK(message: _22.SigningModeDescriptor): _22.SigningModeDescriptorSDKType;
                };
                ChainDescriptor: {
                    encode(message: _22.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ChainDescriptor;
                    fromPartial(object: {
                        id?: string;
                    }): _22.ChainDescriptor;
                    fromSDK(object: _22.ChainDescriptorSDKType): _22.ChainDescriptor;
                    toSDK(message: _22.ChainDescriptor): _22.ChainDescriptorSDKType;
                };
                CodecDescriptor: {
                    encode(message: _22.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.CodecDescriptor;
                    fromPartial(object: {
                        interfaces?: {
                            fullname?: string;
                            interfaceAcceptingMessages?: {
                                fullname?: string;
                                fieldDescriptorNames?: string[];
                            }[];
                            interfaceImplementers?: {
                                fullname?: string;
                                typeUrl?: string;
                            }[];
                        }[];
                    }): _22.CodecDescriptor;
                    fromSDK(object: _22.CodecDescriptorSDKType): _22.CodecDescriptor;
                    toSDK(message: _22.CodecDescriptor): _22.CodecDescriptorSDKType;
                };
                InterfaceDescriptor: {
                    encode(message: _22.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.InterfaceDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        interfaceAcceptingMessages?: {
                            fullname?: string;
                            fieldDescriptorNames?: string[];
                        }[];
                        interfaceImplementers?: {
                            fullname?: string;
                            typeUrl?: string;
                        }[];
                    }): _22.InterfaceDescriptor;
                    fromSDK(object: _22.InterfaceDescriptorSDKType): _22.InterfaceDescriptor;
                    toSDK(message: _22.InterfaceDescriptor): _22.InterfaceDescriptorSDKType;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _22.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.InterfaceImplementerDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        typeUrl?: string;
                    }): _22.InterfaceImplementerDescriptor;
                    fromSDK(object: _22.InterfaceImplementerDescriptorSDKType): _22.InterfaceImplementerDescriptor;
                    toSDK(message: _22.InterfaceImplementerDescriptor): _22.InterfaceImplementerDescriptorSDKType;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _22.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        fieldDescriptorNames?: string[];
                    }): _22.InterfaceAcceptingMessageDescriptor;
                    fromSDK(object: _22.InterfaceAcceptingMessageDescriptorSDKType): _22.InterfaceAcceptingMessageDescriptor;
                    toSDK(message: _22.InterfaceAcceptingMessageDescriptor): _22.InterfaceAcceptingMessageDescriptorSDKType;
                };
                ConfigurationDescriptor: {
                    encode(message: _22.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ConfigurationDescriptor;
                    fromPartial(object: {
                        bech32AccountAddressPrefix?: string;
                    }): _22.ConfigurationDescriptor;
                    fromSDK(object: _22.ConfigurationDescriptorSDKType): _22.ConfigurationDescriptor;
                    toSDK(message: _22.ConfigurationDescriptor): _22.ConfigurationDescriptorSDKType;
                };
                MsgDescriptor: {
                    encode(message: _22.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.MsgDescriptor;
                    fromPartial(object: {
                        msgTypeUrl?: string;
                    }): _22.MsgDescriptor;
                    fromSDK(object: _22.MsgDescriptorSDKType): _22.MsgDescriptor;
                    toSDK(message: _22.MsgDescriptor): _22.MsgDescriptorSDKType;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _22.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetAuthnDescriptorRequest;
                    fromPartial(_: {}): _22.GetAuthnDescriptorRequest;
                    fromSDK(_: _22.GetAuthnDescriptorRequestSDKType): _22.GetAuthnDescriptorRequest;
                    toSDK(_: _22.GetAuthnDescriptorRequest): _22.GetAuthnDescriptorRequestSDKType;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _22.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetAuthnDescriptorResponseSDKType;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string;
                                number?: number;
                                authnInfoProviderMethodFullname?: string;
                            }[];
                        };
                    }): _22.GetAuthnDescriptorResponse;
                    fromSDK(object: _22.GetAuthnDescriptorResponseSDKType): _22.GetAuthnDescriptorResponse;
                    toSDK(message: _22.GetAuthnDescriptorResponse): _22.GetAuthnDescriptorResponseSDKType;
                };
                GetChainDescriptorRequest: {
                    encode(_: _22.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetChainDescriptorRequest;
                    fromPartial(_: {}): _22.GetChainDescriptorRequest;
                    fromSDK(_: _22.GetChainDescriptorRequestSDKType): _22.GetChainDescriptorRequest;
                    toSDK(_: _22.GetChainDescriptorRequest): _22.GetChainDescriptorRequestSDKType;
                };
                GetChainDescriptorResponse: {
                    encode(message: _22.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetChainDescriptorResponseSDKType;
                    fromPartial(object: {
                        chain?: {
                            id?: string;
                        };
                    }): _22.GetChainDescriptorResponse;
                    fromSDK(object: _22.GetChainDescriptorResponseSDKType): _22.GetChainDescriptorResponse;
                    toSDK(message: _22.GetChainDescriptorResponse): _22.GetChainDescriptorResponseSDKType;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _22.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetCodecDescriptorRequest;
                    fromPartial(_: {}): _22.GetCodecDescriptorRequest;
                    fromSDK(_: _22.GetCodecDescriptorRequestSDKType): _22.GetCodecDescriptorRequest;
                    toSDK(_: _22.GetCodecDescriptorRequest): _22.GetCodecDescriptorRequestSDKType;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _22.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetCodecDescriptorResponseSDKType;
                    fromPartial(object: {
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interfaceAcceptingMessages?: {
                                    fullname?: string;
                                    fieldDescriptorNames?: string[];
                                }[];
                                interfaceImplementers?: {
                                    fullname?: string;
                                    typeUrl?: string;
                                }[];
                            }[];
                        };
                    }): _22.GetCodecDescriptorResponse;
                    fromSDK(object: _22.GetCodecDescriptorResponseSDKType): _22.GetCodecDescriptorResponse;
                    toSDK(message: _22.GetCodecDescriptorResponse): _22.GetCodecDescriptorResponseSDKType;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _22.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetConfigurationDescriptorRequest;
                    fromPartial(_: {}): _22.GetConfigurationDescriptorRequest;
                    fromSDK(_: _22.GetConfigurationDescriptorRequestSDKType): _22.GetConfigurationDescriptorRequest;
                    toSDK(_: _22.GetConfigurationDescriptorRequest): _22.GetConfigurationDescriptorRequestSDKType;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _22.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetConfigurationDescriptorResponseSDKType;
                    fromPartial(object: {
                        config?: {
                            bech32AccountAddressPrefix?: string;
                        };
                    }): _22.GetConfigurationDescriptorResponse;
                    fromSDK(object: _22.GetConfigurationDescriptorResponseSDKType): _22.GetConfigurationDescriptorResponse;
                    toSDK(message: _22.GetConfigurationDescriptorResponse): _22.GetConfigurationDescriptorResponseSDKType;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _22.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetQueryServicesDescriptorRequest;
                    fromPartial(_: {}): _22.GetQueryServicesDescriptorRequest;
                    fromSDK(_: _22.GetQueryServicesDescriptorRequestSDKType): _22.GetQueryServicesDescriptorRequest;
                    toSDK(_: _22.GetQueryServicesDescriptorRequest): _22.GetQueryServicesDescriptorRequestSDKType;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _22.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetQueryServicesDescriptorResponseSDKType;
                    fromPartial(object: {
                        queries?: {
                            queryServices?: {
                                fullname?: string;
                                isModule?: boolean;
                                methods?: {
                                    name?: string;
                                    fullQueryPath?: string;
                                }[];
                            }[];
                        };
                    }): _22.GetQueryServicesDescriptorResponse;
                    fromSDK(object: _22.GetQueryServicesDescriptorResponseSDKType): _22.GetQueryServicesDescriptorResponse;
                    toSDK(message: _22.GetQueryServicesDescriptorResponse): _22.GetQueryServicesDescriptorResponseSDKType;
                };
                GetTxDescriptorRequest: {
                    encode(_: _22.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetTxDescriptorRequest;
                    fromPartial(_: {}): _22.GetTxDescriptorRequest;
                    fromSDK(_: _22.GetTxDescriptorRequestSDKType): _22.GetTxDescriptorRequest;
                    toSDK(_: _22.GetTxDescriptorRequest): _22.GetTxDescriptorRequestSDKType;
                };
                GetTxDescriptorResponse: {
                    encode(message: _22.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetTxDescriptorResponseSDKType;
                    fromPartial(object: {
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msgTypeUrl?: string;
                            }[];
                        };
                    }): _22.GetTxDescriptorResponse;
                    fromSDK(object: _22.GetTxDescriptorResponseSDKType): _22.GetTxDescriptorResponse;
                    toSDK(message: _22.GetTxDescriptorResponse): _22.GetTxDescriptorResponseSDKType;
                };
                QueryServicesDescriptor: {
                    encode(message: _22.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryServicesDescriptor;
                    fromPartial(object: {
                        queryServices?: {
                            fullname?: string;
                            isModule?: boolean;
                            methods?: {
                                name?: string;
                                fullQueryPath?: string;
                            }[];
                        }[];
                    }): _22.QueryServicesDescriptor;
                    fromSDK(object: _22.QueryServicesDescriptorSDKType): _22.QueryServicesDescriptor;
                    toSDK(message: _22.QueryServicesDescriptor): _22.QueryServicesDescriptorSDKType;
                };
                QueryServiceDescriptor: {
                    encode(message: _22.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryServiceDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        isModule?: boolean;
                        methods?: {
                            name?: string;
                            fullQueryPath?: string;
                        }[];
                    }): _22.QueryServiceDescriptor;
                    fromSDK(object: _22.QueryServiceDescriptorSDKType): _22.QueryServiceDescriptor;
                    toSDK(message: _22.QueryServiceDescriptor): _22.QueryServiceDescriptorSDKType;
                };
                QueryMethodDescriptor: {
                    encode(message: _22.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryMethodDescriptor;
                    fromPartial(object: {
                        name?: string;
                        fullQueryPath?: string;
                    }): _22.QueryMethodDescriptor;
                    fromSDK(object: _22.QueryMethodDescriptorSDKType): _22.QueryMethodDescriptor;
                    toSDK(message: _22.QueryMethodDescriptor): _22.QueryMethodDescriptorSDKType;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _23.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Snapshot;
                    fromPartial(object: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: {
                            chunkHashes?: Uint8Array[];
                        };
                    }): _23.Snapshot;
                    fromSDK(object: _23.SnapshotSDKType): _23.Snapshot;
                    toSDK(message: _23.Snapshot): _23.SnapshotSDKType;
                };
                Metadata: {
                    encode(message: _23.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Metadata;
                    fromPartial(object: {
                        chunkHashes?: Uint8Array[];
                    }): _23.Metadata;
                    fromSDK(object: _23.MetadataSDKType): _23.Metadata;
                    toSDK(message: _23.Metadata): _23.MetadataSDKType;
                };
                SnapshotItem: {
                    encode(message: _23.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotItem;
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
                        extensionPayload?: {
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
                    fromSDK(object: _23.SnapshotItemSDKType): _23.SnapshotItem;
                    toSDK(message: _23.SnapshotItem): _23.SnapshotItemSDKType;
                };
                SnapshotStoreItem: {
                    encode(message: _23.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotStoreItem;
                    fromPartial(object: {
                        name?: string;
                    }): _23.SnapshotStoreItem;
                    fromSDK(object: _23.SnapshotStoreItemSDKType): _23.SnapshotStoreItem;
                    toSDK(message: _23.SnapshotStoreItem): _23.SnapshotStoreItemSDKType;
                };
                SnapshotIAVLItem: {
                    encode(message: _23.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotIAVLItem;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        version?: any;
                        height?: number;
                    }): _23.SnapshotIAVLItem;
                    fromSDK(object: _23.SnapshotIAVLItemSDKType): _23.SnapshotIAVLItem;
                    toSDK(message: _23.SnapshotIAVLItem): _23.SnapshotIAVLItemSDKType;
                };
                SnapshotExtensionMeta: {
                    encode(message: _23.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotExtensionMeta;
                    fromPartial(object: {
                        name?: string;
                        format?: number;
                    }): _23.SnapshotExtensionMeta;
                    fromSDK(object: _23.SnapshotExtensionMetaSDKType): _23.SnapshotExtensionMeta;
                    toSDK(message: _23.SnapshotExtensionMeta): _23.SnapshotExtensionMetaSDKType;
                };
                SnapshotExtensionPayload: {
                    encode(message: _23.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotExtensionPayload;
                    fromPartial(object: {
                        payload?: Uint8Array;
                    }): _23.SnapshotExtensionPayload;
                    fromSDK(object: _23.SnapshotExtensionPayloadSDKType): _23.SnapshotExtensionPayload;
                    toSDK(message: _23.SnapshotExtensionPayload): _23.SnapshotExtensionPayloadSDKType;
                };
                SnapshotKVItem: {
                    encode(message: _23.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotKVItem;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _23.SnapshotKVItem;
                    fromSDK(object: _23.SnapshotKVItemSDKType): _23.SnapshotKVItem;
                    toSDK(message: _23.SnapshotKVItem): _23.SnapshotKVItemSDKType;
                };
                SnapshotSchema: {
                    encode(message: _23.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotSchema;
                    fromPartial(object: {
                        keys?: Uint8Array[];
                    }): _23.SnapshotSchema;
                    fromSDK(object: _23.SnapshotSchemaSDKType): _23.SnapshotSchema;
                    toSDK(message: _23.SnapshotSchema): _23.SnapshotSchemaSDKType;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _25.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.StoreKVPair;
                    fromPartial(object: {
                        storeKey?: string;
                        delete?: boolean;
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _25.StoreKVPair;
                    fromSDK(object: _25.StoreKVPairSDKType): _25.StoreKVPair;
                    toSDK(message: _25.StoreKVPair): _25.StoreKVPairSDKType;
                };
                CommitInfo: {
                    encode(message: _24.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.CommitInfo;
                    fromPartial(object: {
                        version?: any;
                        storeInfos?: {
                            name?: string;
                            commitId?: {
                                version?: any;
                                hash?: Uint8Array;
                            };
                        }[];
                    }): _24.CommitInfo;
                    fromSDK(object: _24.CommitInfoSDKType): _24.CommitInfo;
                    toSDK(message: _24.CommitInfo): _24.CommitInfoSDKType;
                };
                StoreInfo: {
                    encode(message: _24.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.StoreInfo;
                    fromPartial(object: {
                        name?: string;
                        commitId?: {
                            version?: any;
                            hash?: Uint8Array;
                        };
                    }): _24.StoreInfo;
                    fromSDK(object: _24.StoreInfoSDKType): _24.StoreInfo;
                    toSDK(message: _24.StoreInfo): _24.StoreInfoSDKType;
                };
                CommitID: {
                    encode(message: _24.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.CommitID;
                    fromPartial(object: {
                        version?: any;
                        hash?: Uint8Array;
                    }): _24.CommitID;
                    fromSDK(object: _24.CommitIDSDKType): _24.CommitID;
                    toSDK(message: _24.CommitID): _24.CommitIDSDKType;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _227.ServiceClientImpl;
                LCDQueryClient: typeof _210.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    encode(message: _26.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetValidatorSetByHeightRequest;
                    fromPartial(object: {
                        height?: any;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _26.GetValidatorSetByHeightRequest;
                    fromSDK(object: _26.GetValidatorSetByHeightRequestSDKType): _26.GetValidatorSetByHeightRequest;
                    toSDK(message: _26.GetValidatorSetByHeightRequest): _26.GetValidatorSetByHeightRequestSDKType;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _26.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetValidatorSetByHeightResponseSDKType;
                    fromPartial(object: {
                        blockHeight?: any;
                        validators?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    }): _26.GetValidatorSetByHeightResponse;
                    fromSDK(object: _26.GetValidatorSetByHeightResponseSDKType): _26.GetValidatorSetByHeightResponse;
                    toSDK(message: _26.GetValidatorSetByHeightResponse): _26.GetValidatorSetByHeightResponseSDKType;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _26.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetLatestValidatorSetRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _26.GetLatestValidatorSetRequest;
                    fromSDK(object: _26.GetLatestValidatorSetRequestSDKType): _26.GetLatestValidatorSetRequest;
                    toSDK(message: _26.GetLatestValidatorSetRequest): _26.GetLatestValidatorSetRequestSDKType;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _26.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetLatestValidatorSetResponseSDKType;
                    fromPartial(object: {
                        blockHeight?: any;
                        validators?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    }): _26.GetLatestValidatorSetResponse;
                    fromSDK(object: _26.GetLatestValidatorSetResponseSDKType): _26.GetLatestValidatorSetResponse;
                    toSDK(message: _26.GetLatestValidatorSetResponse): _26.GetLatestValidatorSetResponseSDKType;
                };
                Validator: {
                    encode(message: _26.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Validator;
                    fromPartial(object: {
                        address?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    }): _26.Validator;
                    fromSDK(object: _26.ValidatorSDKType): _26.Validator;
                    toSDK(message: _26.Validator): _26.ValidatorSDKType;
                };
                GetBlockByHeightRequest: {
                    encode(message: _26.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetBlockByHeightRequest;
                    fromPartial(object: {
                        height?: any;
                    }): _26.GetBlockByHeightRequest;
                    fromSDK(object: _26.GetBlockByHeightRequestSDKType): _26.GetBlockByHeightRequest;
                    toSDK(message: _26.GetBlockByHeightRequest): _26.GetBlockByHeightRequestSDKType;
                };
                GetBlockByHeightResponse: {
                    encode(message: _26.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetBlockByHeightResponseSDKType;
                    fromPartial(object: {
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
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
                                chainId?: string;
                                height?: any;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            data?: {
                                txs?: Uint8Array[];
                            };
                            evidence?: {
                                evidence?: {
                                    duplicateVoteEvidence?: {
                                        voteA?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: any;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        voteB?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: any;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        totalVotingPower?: any;
                                        validatorPower?: any;
                                        timestamp?: Date;
                                    };
                                    lightClientAttackEvidence?: {
                                        conflictingBlock?: {
                                            signedHeader?: {
                                                header?: {
                                                    version?: {
                                                        block?: any;
                                                        app?: any;
                                                    };
                                                    chainId?: string;
                                                    height?: any;
                                                    time?: Date;
                                                    lastBlockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    lastCommitHash?: Uint8Array;
                                                    dataHash?: Uint8Array;
                                                    validatorsHash?: Uint8Array;
                                                    nextValidatorsHash?: Uint8Array;
                                                    consensusHash?: Uint8Array;
                                                    appHash?: Uint8Array;
                                                    lastResultsHash?: Uint8Array;
                                                    evidenceHash?: Uint8Array;
                                                    proposerAddress?: Uint8Array;
                                                };
                                                commit?: {
                                                    height?: any;
                                                    round?: number;
                                                    blockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    signatures?: {
                                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                                        validatorAddress?: Uint8Array;
                                                        timestamp?: Date;
                                                        signature?: Uint8Array;
                                                    }[];
                                                };
                                            };
                                            validatorSet?: {
                                                validators?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: any;
                                                    proposerPriority?: any;
                                                }[];
                                                proposer?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: any;
                                                    proposerPriority?: any;
                                                };
                                                totalVotingPower?: any;
                                            };
                                        };
                                        commonHeight?: any;
                                        byzantineValidators?: {
                                            address?: Uint8Array;
                                            pubKey?: {
                                                ed25519?: Uint8Array;
                                                secp256k1?: Uint8Array;
                                            };
                                            votingPower?: any;
                                            proposerPriority?: any;
                                        }[];
                                        totalVotingPower?: any;
                                        timestamp?: Date;
                                    };
                                }[];
                            };
                            lastCommit?: {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                    }): _26.GetBlockByHeightResponse;
                    fromSDK(object: _26.GetBlockByHeightResponseSDKType): _26.GetBlockByHeightResponse;
                    toSDK(message: _26.GetBlockByHeightResponse): _26.GetBlockByHeightResponseSDKType;
                };
                GetLatestBlockRequest: {
                    encode(_: _26.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetLatestBlockRequest;
                    fromPartial(_: {}): _26.GetLatestBlockRequest;
                    fromSDK(_: _26.GetLatestBlockRequestSDKType): _26.GetLatestBlockRequest;
                    toSDK(_: _26.GetLatestBlockRequest): _26.GetLatestBlockRequestSDKType;
                };
                GetLatestBlockResponse: {
                    encode(message: _26.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetLatestBlockResponseSDKType;
                    fromPartial(object: {
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
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
                                chainId?: string;
                                height?: any;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            data?: {
                                txs?: Uint8Array[];
                            };
                            evidence?: {
                                evidence?: {
                                    duplicateVoteEvidence?: {
                                        voteA?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: any;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        voteB?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: any;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        totalVotingPower?: any;
                                        validatorPower?: any;
                                        timestamp?: Date;
                                    };
                                    lightClientAttackEvidence?: {
                                        conflictingBlock?: {
                                            signedHeader?: {
                                                header?: {
                                                    version?: {
                                                        block?: any;
                                                        app?: any;
                                                    };
                                                    chainId?: string;
                                                    height?: any;
                                                    time?: Date;
                                                    lastBlockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    lastCommitHash?: Uint8Array;
                                                    dataHash?: Uint8Array;
                                                    validatorsHash?: Uint8Array;
                                                    nextValidatorsHash?: Uint8Array;
                                                    consensusHash?: Uint8Array;
                                                    appHash?: Uint8Array;
                                                    lastResultsHash?: Uint8Array;
                                                    evidenceHash?: Uint8Array;
                                                    proposerAddress?: Uint8Array;
                                                };
                                                commit?: {
                                                    height?: any;
                                                    round?: number;
                                                    blockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    signatures?: {
                                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                                        validatorAddress?: Uint8Array;
                                                        timestamp?: Date;
                                                        signature?: Uint8Array;
                                                    }[];
                                                };
                                            };
                                            validatorSet?: {
                                                validators?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: any;
                                                    proposerPriority?: any;
                                                }[];
                                                proposer?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: any;
                                                    proposerPriority?: any;
                                                };
                                                totalVotingPower?: any;
                                            };
                                        };
                                        commonHeight?: any;
                                        byzantineValidators?: {
                                            address?: Uint8Array;
                                            pubKey?: {
                                                ed25519?: Uint8Array;
                                                secp256k1?: Uint8Array;
                                            };
                                            votingPower?: any;
                                            proposerPriority?: any;
                                        }[];
                                        totalVotingPower?: any;
                                        timestamp?: Date;
                                    };
                                }[];
                            };
                            lastCommit?: {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                    }): _26.GetLatestBlockResponse;
                    fromSDK(object: _26.GetLatestBlockResponseSDKType): _26.GetLatestBlockResponse;
                    toSDK(message: _26.GetLatestBlockResponse): _26.GetLatestBlockResponseSDKType;
                };
                GetSyncingRequest: {
                    encode(_: _26.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetSyncingRequest;
                    fromPartial(_: {}): _26.GetSyncingRequest;
                    fromSDK(_: _26.GetSyncingRequestSDKType): _26.GetSyncingRequest;
                    toSDK(_: _26.GetSyncingRequest): _26.GetSyncingRequestSDKType;
                };
                GetSyncingResponse: {
                    encode(message: _26.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetSyncingResponseSDKType;
                    fromPartial(object: {
                        syncing?: boolean;
                    }): _26.GetSyncingResponse;
                    fromSDK(object: _26.GetSyncingResponseSDKType): _26.GetSyncingResponse;
                    toSDK(message: _26.GetSyncingResponse): _26.GetSyncingResponseSDKType;
                };
                GetNodeInfoRequest: {
                    encode(_: _26.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetNodeInfoRequest;
                    fromPartial(_: {}): _26.GetNodeInfoRequest;
                    fromSDK(_: _26.GetNodeInfoRequestSDKType): _26.GetNodeInfoRequest;
                    toSDK(_: _26.GetNodeInfoRequest): _26.GetNodeInfoRequestSDKType;
                };
                GetNodeInfoResponse: {
                    encode(message: _26.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetNodeInfoResponseSDKType;
                    fromPartial(object: {
                        nodeInfo?: {
                            protocolVersion?: {
                                p2p?: any;
                                block?: any;
                                app?: any;
                            };
                            nodeId?: string;
                            listenAddr?: string;
                            network?: string;
                            version?: string;
                            channels?: Uint8Array;
                            moniker?: string;
                            other?: {
                                txIndex?: string;
                                rpcAddress?: string;
                            };
                        };
                        applicationVersion?: {
                            name?: string;
                            appName?: string;
                            version?: string;
                            gitCommit?: string;
                            buildTags?: string;
                            goVersion?: string;
                            buildDeps?: {
                                path?: string;
                                version?: string;
                                sum?: string;
                            }[];
                            cosmosSdkVersion?: string;
                        };
                    }): _26.GetNodeInfoResponse;
                    fromSDK(object: _26.GetNodeInfoResponseSDKType): _26.GetNodeInfoResponse;
                    toSDK(message: _26.GetNodeInfoResponse): _26.GetNodeInfoResponseSDKType;
                };
                VersionInfo: {
                    encode(message: _26.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.VersionInfo;
                    fromPartial(object: {
                        name?: string;
                        appName?: string;
                        version?: string;
                        gitCommit?: string;
                        buildTags?: string;
                        goVersion?: string;
                        buildDeps?: {
                            path?: string;
                            version?: string;
                            sum?: string;
                        }[];
                        cosmosSdkVersion?: string;
                    }): _26.VersionInfo;
                    fromSDK(object: _26.VersionInfoSDKType): _26.VersionInfo;
                    toSDK(message: _26.VersionInfo): _26.VersionInfoSDKType;
                };
                Module: {
                    encode(message: _26.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Module;
                    fromPartial(object: {
                        path?: string;
                        version?: string;
                        sum?: string;
                    }): _26.Module;
                    fromSDK(object: _26.ModuleSDKType): _26.Module;
                    toSDK(message: _26.Module): _26.ModuleSDKType;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _27.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.Coin;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _27.Coin;
                fromSDK(object: _27.CoinSDKType): _27.Coin;
                toSDK(message: _27.Coin): _27.CoinSDKType;
            };
            DecCoin: {
                encode(message: _27.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.DecCoin;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _27.DecCoin;
                fromSDK(object: _27.DecCoinSDKType): _27.DecCoin;
                toSDK(message: _27.DecCoin): _27.DecCoinSDKType;
            };
            IntProto: {
                encode(message: _27.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.IntProto;
                fromPartial(object: {
                    int?: string;
                }): _27.IntProto;
                fromSDK(object: _27.IntProtoSDKType): _27.IntProto;
                toSDK(message: _27.IntProto): _27.IntProtoSDKType;
            };
            DecProto: {
                encode(message: _27.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.DecProto;
                fromPartial(object: {
                    dec?: string;
                }): _27.DecProto;
                fromSDK(object: _27.DecProtoSDKType): _27.DecProto;
                toSDK(message: _27.DecProto): _27.DecProtoSDKType;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _29.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GenesisOwners;
                fromPartial(object: {
                    index?: any;
                    indexOwners?: {
                        owners?: {
                            module?: string;
                            name?: string;
                        }[];
                    };
                }): _29.GenesisOwners;
                fromSDK(object: _29.GenesisOwnersSDKType): _29.GenesisOwners;
                toSDK(message: _29.GenesisOwners): _29.GenesisOwnersSDKType;
            };
            GenesisState: {
                encode(message: _29.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GenesisState;
                fromPartial(object: {
                    index?: any;
                    owners?: {
                        index?: any;
                        indexOwners?: {
                            owners?: {
                                module?: string;
                                name?: string;
                            }[];
                        };
                    }[];
                }): _29.GenesisState;
                fromSDK(object: _29.GenesisStateSDKType): _29.GenesisState;
                toSDK(message: _29.GenesisState): _29.GenesisStateSDKType;
            };
            Capability: {
                encode(message: _28.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.Capability;
                fromPartial(object: {
                    index?: any;
                }): _28.Capability;
                fromSDK(object: _28.CapabilitySDKType): _28.Capability;
                toSDK(message: _28.Capability): _28.CapabilitySDKType;
            };
            Owner: {
                encode(message: _28.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.Owner;
                fromPartial(object: {
                    module?: string;
                    name?: string;
                }): _28.Owner;
                fromSDK(object: _28.OwnerSDKType): _28.Owner;
                toSDK(message: _28.Owner): _28.OwnerSDKType;
            };
            CapabilityOwners: {
                encode(message: _28.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.CapabilityOwners;
                fromPartial(object: {
                    owners?: {
                        module?: string;
                        name?: string;
                    }[];
                }): _28.CapabilityOwners;
                fromSDK(object: _28.CapabilityOwnersSDKType): _28.CapabilityOwners;
                toSDK(message: _28.CapabilityOwners): _28.CapabilityOwnersSDKType;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _242.MsgClientImpl;
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
                        value: any;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: any;
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
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _31.MsgVerifyInvariant) => {
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
                fromPartial(object: {
                    sender?: string;
                    invariantModuleName?: string;
                    invariantRoute?: string;
                }): _31.MsgVerifyInvariant;
                fromSDK(object: _31.MsgVerifyInvariantSDKType): _31.MsgVerifyInvariant;
                toSDK(message: _31.MsgVerifyInvariant): _31.MsgVerifyInvariantSDKType;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _31.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.MsgVerifyInvariantResponseSDKType;
                fromPartial(_: {}): _31.MsgVerifyInvariantResponse;
                fromSDK(_: _31.MsgVerifyInvariantResponseSDKType): _31.MsgVerifyInvariantResponse;
                toSDK(_: _31.MsgVerifyInvariantResponse): _31.MsgVerifyInvariantResponseSDKType;
            };
            GenesisState: {
                encode(message: _30.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GenesisState;
                fromPartial(object: {
                    constantFee?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _30.GenesisState;
                fromSDK(object: _30.GenesisStateSDKType): _30.GenesisState;
                toSDK(message: _30.GenesisState): _30.GenesisStateSDKType;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _32.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.PubKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _32.PubKey;
                fromSDK(object: _32.PubKeySDKType): _32.PubKey;
                toSDK(message: _32.PubKey): _32.PubKeySDKType;
            };
            PrivKey: {
                encode(message: _32.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.PrivKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _32.PrivKey;
                fromSDK(object: _32.PrivKeySDKType): _32.PrivKey;
                toSDK(message: _32.PrivKey): _32.PrivKeySDKType;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _33.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.BIP44Params;
                    fromPartial(object: {
                        purpose?: number;
                        coinType?: number;
                        account?: number;
                        change?: boolean;
                        addressIndex?: number;
                    }): _33.BIP44Params;
                    fromSDK(object: _33.BIP44ParamsSDKType): _33.BIP44Params;
                    toSDK(message: _33.BIP44Params): _33.BIP44ParamsSDKType;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _34.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Record;
                    fromPartial(object: {
                        name?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        local?: {
                            privKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            privKeyType?: string;
                        };
                        ledger?: {
                            path?: {
                                purpose?: number;
                                coinType?: number;
                                account?: number;
                                change?: boolean;
                                addressIndex?: number;
                            };
                        };
                        multi?: {};
                        offline?: {};
                    }): _34.Record;
                    fromSDK(object: _34.RecordSDKType): _34.Record;
                    toSDK(message: _34.Record): _34.RecordSDKType;
                };
                Record_Local: {
                    encode(message: _34.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Record_Local;
                    fromPartial(object: {
                        privKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        privKeyType?: string;
                    }): _34.Record_Local;
                    fromSDK(object: _34.Record_LocalSDKType): _34.Record_Local;
                    toSDK(message: _34.Record_Local): _34.Record_LocalSDKType;
                };
                Record_Ledger: {
                    encode(message: _34.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Record_Ledger;
                    fromPartial(object: {
                        path?: {
                            purpose?: number;
                            coinType?: number;
                            account?: number;
                            change?: boolean;
                            addressIndex?: number;
                        };
                    }): _34.Record_Ledger;
                    fromSDK(object: _34.Record_LedgerSDKType): _34.Record_Ledger;
                    toSDK(message: _34.Record_Ledger): _34.Record_LedgerSDKType;
                };
                Record_Multi: {
                    encode(_: _34.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Record_Multi;
                    fromPartial(_: {}): _34.Record_Multi;
                    fromSDK(_: _34.Record_MultiSDKType): _34.Record_Multi;
                    toSDK(_: _34.Record_Multi): _34.Record_MultiSDKType;
                };
                Record_Offline: {
                    encode(_: _34.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Record_Offline;
                    fromPartial(_: {}): _34.Record_Offline;
                    fromSDK(_: _34.Record_OfflineSDKType): _34.Record_Offline;
                    toSDK(_: _34.Record_Offline): _34.Record_OfflineSDKType;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _35.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.LegacyAminoPubKey;
                fromPartial(object: {
                    threshold?: number;
                    publicKeys?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _35.LegacyAminoPubKey;
                fromSDK(object: _35.LegacyAminoPubKeySDKType): _35.LegacyAminoPubKey;
                toSDK(message: _35.LegacyAminoPubKey): _35.LegacyAminoPubKeySDKType;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _36.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.PubKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _36.PubKey;
                fromSDK(object: _36.PubKeySDKType): _36.PubKey;
                toSDK(message: _36.PubKey): _36.PubKeySDKType;
            };
            PrivKey: {
                encode(message: _36.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.PrivKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _36.PrivKey;
                fromSDK(object: _36.PrivKeySDKType): _36.PrivKey;
                toSDK(message: _36.PrivKey): _36.PrivKeySDKType;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _37.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.PubKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _37.PubKey;
                fromSDK(object: _37.PubKeySDKType): _37.PubKey;
                toSDK(message: _37.PubKey): _37.PubKeySDKType;
            };
            PrivKey: {
                encode(message: _37.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.PrivKey;
                fromPartial(object: {
                    secret?: Uint8Array;
                }): _37.PrivKey;
                fromSDK(object: _37.PrivKeySDKType): _37.PrivKey;
                toSDK(message: _37.PrivKey): _37.PrivKeySDKType;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _243.MsgClientImpl;
            QueryClientImpl: typeof _228.QueryClientImpl;
            LCDQueryClient: typeof _211.LCDQueryClient;
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
                        value: any;
                    };
                    withdrawDelegatorReward(value: _41.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: any;
                    };
                    withdrawValidatorCommission(value: _41.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: any;
                    };
                    fundCommunityPool(value: _41.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: any;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: any;
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
                    toAmino: ({ delegatorAddress, withdrawAddress }: _41.MsgSetWithdrawAddress) => {
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
                    toAmino: ({ delegatorAddress, validatorAddress }: _41.MsgWithdrawDelegatorReward) => {
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
                    toAmino: ({ validatorAddress }: _41.MsgWithdrawValidatorCommission) => {
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
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _41.MsgSetWithdrawAddress;
                fromSDK(object: _41.MsgSetWithdrawAddressSDKType): _41.MsgSetWithdrawAddress;
                toSDK(message: _41.MsgSetWithdrawAddress): _41.MsgSetWithdrawAddressSDKType;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _41.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgSetWithdrawAddressResponseSDKType;
                fromPartial(_: {}): _41.MsgSetWithdrawAddressResponse;
                fromSDK(_: _41.MsgSetWithdrawAddressResponseSDKType): _41.MsgSetWithdrawAddressResponse;
                toSDK(_: _41.MsgSetWithdrawAddressResponse): _41.MsgSetWithdrawAddressResponseSDKType;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _41.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgWithdrawDelegatorReward;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _41.MsgWithdrawDelegatorReward;
                fromSDK(object: _41.MsgWithdrawDelegatorRewardSDKType): _41.MsgWithdrawDelegatorReward;
                toSDK(message: _41.MsgWithdrawDelegatorReward): _41.MsgWithdrawDelegatorRewardSDKType;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _41.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgWithdrawDelegatorRewardResponseSDKType;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _41.MsgWithdrawDelegatorRewardResponse;
                fromSDK(object: _41.MsgWithdrawDelegatorRewardResponseSDKType): _41.MsgWithdrawDelegatorRewardResponse;
                toSDK(message: _41.MsgWithdrawDelegatorRewardResponse): _41.MsgWithdrawDelegatorRewardResponseSDKType;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _41.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgWithdrawValidatorCommission;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _41.MsgWithdrawValidatorCommission;
                fromSDK(object: _41.MsgWithdrawValidatorCommissionSDKType): _41.MsgWithdrawValidatorCommission;
                toSDK(message: _41.MsgWithdrawValidatorCommission): _41.MsgWithdrawValidatorCommissionSDKType;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _41.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgWithdrawValidatorCommissionResponseSDKType;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _41.MsgWithdrawValidatorCommissionResponse;
                fromSDK(object: _41.MsgWithdrawValidatorCommissionResponseSDKType): _41.MsgWithdrawValidatorCommissionResponse;
                toSDK(message: _41.MsgWithdrawValidatorCommissionResponse): _41.MsgWithdrawValidatorCommissionResponseSDKType;
            };
            MsgFundCommunityPool: {
                encode(message: _41.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgFundCommunityPool;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    depositor?: string;
                }): _41.MsgFundCommunityPool;
                fromSDK(object: _41.MsgFundCommunityPoolSDKType): _41.MsgFundCommunityPool;
                toSDK(message: _41.MsgFundCommunityPool): _41.MsgFundCommunityPoolSDKType;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _41.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgFundCommunityPoolResponseSDKType;
                fromPartial(_: {}): _41.MsgFundCommunityPoolResponse;
                fromSDK(_: _41.MsgFundCommunityPoolResponseSDKType): _41.MsgFundCommunityPoolResponse;
                toSDK(_: _41.MsgFundCommunityPoolResponse): _41.MsgFundCommunityPoolResponseSDKType;
            };
            QueryParamsRequest: {
                encode(_: _40.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryParamsRequest;
                fromPartial(_: {}): _40.QueryParamsRequest;
                fromSDK(_: _40.QueryParamsRequestSDKType): _40.QueryParamsRequest;
                toSDK(_: _40.QueryParamsRequest): _40.QueryParamsRequestSDKType;
            };
            QueryParamsResponse: {
                encode(message: _40.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryParamsResponseSDKType;
                fromPartial(object: {
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                }): _40.QueryParamsResponse;
                fromSDK(object: _40.QueryParamsResponseSDKType): _40.QueryParamsResponse;
                toSDK(message: _40.QueryParamsResponse): _40.QueryParamsResponseSDKType;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _40.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _40.QueryValidatorOutstandingRewardsRequest;
                fromSDK(object: _40.QueryValidatorOutstandingRewardsRequestSDKType): _40.QueryValidatorOutstandingRewardsRequest;
                toSDK(message: _40.QueryValidatorOutstandingRewardsRequest): _40.QueryValidatorOutstandingRewardsRequestSDKType;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _40.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorOutstandingRewardsResponseSDKType;
                fromPartial(object: {
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _40.QueryValidatorOutstandingRewardsResponse;
                fromSDK(object: _40.QueryValidatorOutstandingRewardsResponseSDKType): _40.QueryValidatorOutstandingRewardsResponse;
                toSDK(message: _40.QueryValidatorOutstandingRewardsResponse): _40.QueryValidatorOutstandingRewardsResponseSDKType;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _40.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorCommissionRequest;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _40.QueryValidatorCommissionRequest;
                fromSDK(object: _40.QueryValidatorCommissionRequestSDKType): _40.QueryValidatorCommissionRequest;
                toSDK(message: _40.QueryValidatorCommissionRequest): _40.QueryValidatorCommissionRequestSDKType;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _40.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorCommissionResponseSDKType;
                fromPartial(object: {
                    commission?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _40.QueryValidatorCommissionResponse;
                fromSDK(object: _40.QueryValidatorCommissionResponseSDKType): _40.QueryValidatorCommissionResponse;
                toSDK(message: _40.QueryValidatorCommissionResponse): _40.QueryValidatorCommissionResponseSDKType;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _40.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorSlashesRequest;
                fromPartial(object: {
                    validatorAddress?: string;
                    startingHeight?: any;
                    endingHeight?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _40.QueryValidatorSlashesRequest;
                fromSDK(object: _40.QueryValidatorSlashesRequestSDKType): _40.QueryValidatorSlashesRequest;
                toSDK(message: _40.QueryValidatorSlashesRequest): _40.QueryValidatorSlashesRequestSDKType;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _40.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorSlashesResponseSDKType;
                fromPartial(object: {
                    slashes?: {
                        validatorPeriod?: any;
                        fraction?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _40.QueryValidatorSlashesResponse;
                fromSDK(object: _40.QueryValidatorSlashesResponseSDKType): _40.QueryValidatorSlashesResponse;
                toSDK(message: _40.QueryValidatorSlashesResponse): _40.QueryValidatorSlashesResponseSDKType;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _40.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegationRewardsRequest;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _40.QueryDelegationRewardsRequest;
                fromSDK(object: _40.QueryDelegationRewardsRequestSDKType): _40.QueryDelegationRewardsRequest;
                toSDK(message: _40.QueryDelegationRewardsRequest): _40.QueryDelegationRewardsRequestSDKType;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _40.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegationRewardsResponseSDKType;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _40.QueryDelegationRewardsResponse;
                fromSDK(object: _40.QueryDelegationRewardsResponseSDKType): _40.QueryDelegationRewardsResponse;
                toSDK(message: _40.QueryDelegationRewardsResponse): _40.QueryDelegationRewardsResponseSDKType;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _40.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegationTotalRewardsRequest;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _40.QueryDelegationTotalRewardsRequest;
                fromSDK(object: _40.QueryDelegationTotalRewardsRequestSDKType): _40.QueryDelegationTotalRewardsRequest;
                toSDK(message: _40.QueryDelegationTotalRewardsRequest): _40.QueryDelegationTotalRewardsRequestSDKType;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _40.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegationTotalRewardsResponseSDKType;
                fromPartial(object: {
                    rewards?: {
                        validatorAddress?: string;
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
                fromSDK(object: _40.QueryDelegationTotalRewardsResponseSDKType): _40.QueryDelegationTotalRewardsResponse;
                toSDK(message: _40.QueryDelegationTotalRewardsResponse): _40.QueryDelegationTotalRewardsResponseSDKType;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _40.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegatorValidatorsRequest;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _40.QueryDelegatorValidatorsRequest;
                fromSDK(object: _40.QueryDelegatorValidatorsRequestSDKType): _40.QueryDelegatorValidatorsRequest;
                toSDK(message: _40.QueryDelegatorValidatorsRequest): _40.QueryDelegatorValidatorsRequestSDKType;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _40.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegatorValidatorsResponseSDKType;
                fromPartial(object: {
                    validators?: string[];
                }): _40.QueryDelegatorValidatorsResponse;
                fromSDK(object: _40.QueryDelegatorValidatorsResponseSDKType): _40.QueryDelegatorValidatorsResponse;
                toSDK(message: _40.QueryDelegatorValidatorsResponse): _40.QueryDelegatorValidatorsResponseSDKType;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _40.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _40.QueryDelegatorWithdrawAddressRequest;
                fromSDK(object: _40.QueryDelegatorWithdrawAddressRequestSDKType): _40.QueryDelegatorWithdrawAddressRequest;
                toSDK(message: _40.QueryDelegatorWithdrawAddressRequest): _40.QueryDelegatorWithdrawAddressRequestSDKType;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _40.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegatorWithdrawAddressResponseSDKType;
                fromPartial(object: {
                    withdrawAddress?: string;
                }): _40.QueryDelegatorWithdrawAddressResponse;
                fromSDK(object: _40.QueryDelegatorWithdrawAddressResponseSDKType): _40.QueryDelegatorWithdrawAddressResponse;
                toSDK(message: _40.QueryDelegatorWithdrawAddressResponse): _40.QueryDelegatorWithdrawAddressResponseSDKType;
            };
            QueryCommunityPoolRequest: {
                encode(_: _40.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryCommunityPoolRequest;
                fromPartial(_: {}): _40.QueryCommunityPoolRequest;
                fromSDK(_: _40.QueryCommunityPoolRequestSDKType): _40.QueryCommunityPoolRequest;
                toSDK(_: _40.QueryCommunityPoolRequest): _40.QueryCommunityPoolRequestSDKType;
            };
            QueryCommunityPoolResponse: {
                encode(message: _40.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryCommunityPoolResponseSDKType;
                fromPartial(object: {
                    pool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _40.QueryCommunityPoolResponse;
                fromSDK(object: _40.QueryCommunityPoolResponseSDKType): _40.QueryCommunityPoolResponse;
                toSDK(message: _40.QueryCommunityPoolResponse): _40.QueryCommunityPoolResponseSDKType;
            };
            DelegatorWithdrawInfo: {
                encode(message: _39.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.DelegatorWithdrawInfo;
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _39.DelegatorWithdrawInfo;
                fromSDK(object: _39.DelegatorWithdrawInfoSDKType): _39.DelegatorWithdrawInfo;
                toSDK(message: _39.DelegatorWithdrawInfo): _39.DelegatorWithdrawInfoSDKType;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _39.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorOutstandingRewardsRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    outstandingRewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _39.ValidatorOutstandingRewardsRecord;
                fromSDK(object: _39.ValidatorOutstandingRewardsRecordSDKType): _39.ValidatorOutstandingRewardsRecord;
                toSDK(message: _39.ValidatorOutstandingRewardsRecord): _39.ValidatorOutstandingRewardsRecordSDKType;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _39.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    accumulated?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _39.ValidatorAccumulatedCommissionRecord;
                fromSDK(object: _39.ValidatorAccumulatedCommissionRecordSDKType): _39.ValidatorAccumulatedCommissionRecord;
                toSDK(message: _39.ValidatorAccumulatedCommissionRecord): _39.ValidatorAccumulatedCommissionRecordSDKType;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _39.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorHistoricalRewardsRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    period?: any;
                    rewards?: {
                        cumulativeRewardRatio?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        referenceCount?: number;
                    };
                }): _39.ValidatorHistoricalRewardsRecord;
                fromSDK(object: _39.ValidatorHistoricalRewardsRecordSDKType): _39.ValidatorHistoricalRewardsRecord;
                toSDK(message: _39.ValidatorHistoricalRewardsRecord): _39.ValidatorHistoricalRewardsRecordSDKType;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _39.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorCurrentRewardsRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        period?: any;
                    };
                }): _39.ValidatorCurrentRewardsRecord;
                fromSDK(object: _39.ValidatorCurrentRewardsRecordSDKType): _39.ValidatorCurrentRewardsRecord;
                toSDK(message: _39.ValidatorCurrentRewardsRecord): _39.ValidatorCurrentRewardsRecordSDKType;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _39.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.DelegatorStartingInfoRecord;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    startingInfo?: {
                        previousPeriod?: any;
                        stake?: string;
                        height?: any;
                    };
                }): _39.DelegatorStartingInfoRecord;
                fromSDK(object: _39.DelegatorStartingInfoRecordSDKType): _39.DelegatorStartingInfoRecord;
                toSDK(message: _39.DelegatorStartingInfoRecord): _39.DelegatorStartingInfoRecordSDKType;
            };
            ValidatorSlashEventRecord: {
                encode(message: _39.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorSlashEventRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    height?: any;
                    period?: any;
                    validatorSlashEvent?: {
                        validatorPeriod?: any;
                        fraction?: string;
                    };
                }): _39.ValidatorSlashEventRecord;
                fromSDK(object: _39.ValidatorSlashEventRecordSDKType): _39.ValidatorSlashEventRecord;
                toSDK(message: _39.ValidatorSlashEventRecord): _39.ValidatorSlashEventRecordSDKType;
            };
            GenesisState: {
                encode(message: _39.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GenesisState;
                fromPartial(object: {
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                    feePool?: {
                        communityPool?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    delegatorWithdrawInfos?: {
                        delegatorAddress?: string;
                        withdrawAddress?: string;
                    }[];
                    previousProposer?: string;
                    outstandingRewards?: {
                        validatorAddress?: string;
                        outstandingRewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    validatorAccumulatedCommissions?: {
                        validatorAddress?: string;
                        accumulated?: {
                            commission?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[];
                    validatorHistoricalRewards?: {
                        validatorAddress?: string;
                        period?: any;
                        rewards?: {
                            cumulativeRewardRatio?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            referenceCount?: number;
                        };
                    }[];
                    validatorCurrentRewards?: {
                        validatorAddress?: string;
                        rewards?: {
                            rewards?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            period?: any;
                        };
                    }[];
                    delegatorStartingInfos?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        startingInfo?: {
                            previousPeriod?: any;
                            stake?: string;
                            height?: any;
                        };
                    }[];
                    validatorSlashEvents?: {
                        validatorAddress?: string;
                        height?: any;
                        period?: any;
                        validatorSlashEvent?: {
                            validatorPeriod?: any;
                            fraction?: string;
                        };
                    }[];
                }): _39.GenesisState;
                fromSDK(object: _39.GenesisStateSDKType): _39.GenesisState;
                toSDK(message: _39.GenesisState): _39.GenesisStateSDKType;
            };
            Params: {
                encode(message: _38.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.Params;
                fromPartial(object: {
                    communityTax?: string;
                    baseProposerReward?: string;
                    bonusProposerReward?: string;
                    withdrawAddrEnabled?: boolean;
                }): _38.Params;
                fromSDK(object: _38.ParamsSDKType): _38.Params;
                toSDK(message: _38.Params): _38.ParamsSDKType;
            };
            ValidatorHistoricalRewards: {
                encode(message: _38.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorHistoricalRewards;
                fromPartial(object: {
                    cumulativeRewardRatio?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    referenceCount?: number;
                }): _38.ValidatorHistoricalRewards;
                fromSDK(object: _38.ValidatorHistoricalRewardsSDKType): _38.ValidatorHistoricalRewards;
                toSDK(message: _38.ValidatorHistoricalRewards): _38.ValidatorHistoricalRewardsSDKType;
            };
            ValidatorCurrentRewards: {
                encode(message: _38.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorCurrentRewards;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    period?: any;
                }): _38.ValidatorCurrentRewards;
                fromSDK(object: _38.ValidatorCurrentRewardsSDKType): _38.ValidatorCurrentRewards;
                toSDK(message: _38.ValidatorCurrentRewards): _38.ValidatorCurrentRewardsSDKType;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _38.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorAccumulatedCommission;
                fromPartial(object: {
                    commission?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _38.ValidatorAccumulatedCommission;
                fromSDK(object: _38.ValidatorAccumulatedCommissionSDKType): _38.ValidatorAccumulatedCommission;
                toSDK(message: _38.ValidatorAccumulatedCommission): _38.ValidatorAccumulatedCommissionSDKType;
            };
            ValidatorOutstandingRewards: {
                encode(message: _38.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorOutstandingRewards;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _38.ValidatorOutstandingRewards;
                fromSDK(object: _38.ValidatorOutstandingRewardsSDKType): _38.ValidatorOutstandingRewards;
                toSDK(message: _38.ValidatorOutstandingRewards): _38.ValidatorOutstandingRewardsSDKType;
            };
            ValidatorSlashEvent: {
                encode(message: _38.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorSlashEvent;
                fromPartial(object: {
                    validatorPeriod?: any;
                    fraction?: string;
                }): _38.ValidatorSlashEvent;
                fromSDK(object: _38.ValidatorSlashEventSDKType): _38.ValidatorSlashEvent;
                toSDK(message: _38.ValidatorSlashEvent): _38.ValidatorSlashEventSDKType;
            };
            ValidatorSlashEvents: {
                encode(message: _38.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorSlashEvents;
                fromPartial(object: {
                    validatorSlashEvents?: {
                        validatorPeriod?: any;
                        fraction?: string;
                    }[];
                }): _38.ValidatorSlashEvents;
                fromSDK(object: _38.ValidatorSlashEventsSDKType): _38.ValidatorSlashEvents;
                toSDK(message: _38.ValidatorSlashEvents): _38.ValidatorSlashEventsSDKType;
            };
            FeePool: {
                encode(message: _38.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.FeePool;
                fromPartial(object: {
                    communityPool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _38.FeePool;
                fromSDK(object: _38.FeePoolSDKType): _38.FeePool;
                toSDK(message: _38.FeePool): _38.FeePoolSDKType;
            };
            CommunityPoolSpendProposal: {
                encode(message: _38.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.CommunityPoolSpendProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _38.CommunityPoolSpendProposal;
                fromSDK(object: _38.CommunityPoolSpendProposalSDKType): _38.CommunityPoolSpendProposal;
                toSDK(message: _38.CommunityPoolSpendProposal): _38.CommunityPoolSpendProposalSDKType;
            };
            DelegatorStartingInfo: {
                encode(message: _38.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.DelegatorStartingInfo;
                fromPartial(object: {
                    previousPeriod?: any;
                    stake?: string;
                    height?: any;
                }): _38.DelegatorStartingInfo;
                fromSDK(object: _38.DelegatorStartingInfoSDKType): _38.DelegatorStartingInfo;
                toSDK(message: _38.DelegatorStartingInfo): _38.DelegatorStartingInfoSDKType;
            };
            DelegationDelegatorReward: {
                encode(message: _38.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.DelegationDelegatorReward;
                fromPartial(object: {
                    validatorAddress?: string;
                    reward?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _38.DelegationDelegatorReward;
                fromSDK(object: _38.DelegationDelegatorRewardSDKType): _38.DelegationDelegatorReward;
                toSDK(message: _38.DelegationDelegatorReward): _38.DelegationDelegatorRewardSDKType;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _38.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: string;
                    deposit?: string;
                }): _38.CommunityPoolSpendProposalWithDeposit;
                fromSDK(object: _38.CommunityPoolSpendProposalWithDepositSDKType): _38.CommunityPoolSpendProposalWithDeposit;
                toSDK(message: _38.CommunityPoolSpendProposalWithDeposit): _38.CommunityPoolSpendProposalWithDepositSDKType;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _244.MsgClientImpl;
            QueryClientImpl: typeof _229.QueryClientImpl;
            LCDQueryClient: typeof _212.LCDQueryClient;
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
                        value: any;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: any;
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
                fromPartial(object: {
                    submitter?: string;
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _45.MsgSubmitEvidence;
                fromSDK(object: _45.MsgSubmitEvidenceSDKType): _45.MsgSubmitEvidence;
                toSDK(message: _45.MsgSubmitEvidence): _45.MsgSubmitEvidenceSDKType;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _45.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgSubmitEvidenceResponseSDKType;
                fromPartial(object: {
                    hash?: Uint8Array;
                }): _45.MsgSubmitEvidenceResponse;
                fromSDK(object: _45.MsgSubmitEvidenceResponseSDKType): _45.MsgSubmitEvidenceResponse;
                toSDK(message: _45.MsgSubmitEvidenceResponse): _45.MsgSubmitEvidenceResponseSDKType;
            };
            QueryEvidenceRequest: {
                encode(message: _44.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryEvidenceRequest;
                fromPartial(object: {
                    evidenceHash?: Uint8Array;
                }): _44.QueryEvidenceRequest;
                fromSDK(object: _44.QueryEvidenceRequestSDKType): _44.QueryEvidenceRequest;
                toSDK(message: _44.QueryEvidenceRequest): _44.QueryEvidenceRequestSDKType;
            };
            QueryEvidenceResponse: {
                encode(message: _44.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryEvidenceResponseSDKType;
                fromPartial(object: {
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _44.QueryEvidenceResponse;
                fromSDK(object: _44.QueryEvidenceResponseSDKType): _44.QueryEvidenceResponse;
                toSDK(message: _44.QueryEvidenceResponse): _44.QueryEvidenceResponseSDKType;
            };
            QueryAllEvidenceRequest: {
                encode(message: _44.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryAllEvidenceRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _44.QueryAllEvidenceRequest;
                fromSDK(object: _44.QueryAllEvidenceRequestSDKType): _44.QueryAllEvidenceRequest;
                toSDK(message: _44.QueryAllEvidenceRequest): _44.QueryAllEvidenceRequestSDKType;
            };
            QueryAllEvidenceResponse: {
                encode(message: _44.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryAllEvidenceResponseSDKType;
                fromPartial(object: {
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _44.QueryAllEvidenceResponse;
                fromSDK(object: _44.QueryAllEvidenceResponseSDKType): _44.QueryAllEvidenceResponse;
                toSDK(message: _44.QueryAllEvidenceResponse): _44.QueryAllEvidenceResponseSDKType;
            };
            GenesisState: {
                encode(message: _43.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.GenesisState;
                fromPartial(object: {
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _43.GenesisState;
                fromSDK(object: _43.GenesisStateSDKType): _43.GenesisState;
                toSDK(message: _43.GenesisState): _43.GenesisStateSDKType;
            };
            Equivocation: {
                encode(message: _42.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.Equivocation;
                fromPartial(object: {
                    height?: any;
                    time?: Date;
                    power?: any;
                    consensusAddress?: string;
                }): _42.Equivocation;
                fromSDK(object: _42.EquivocationSDKType): _42.Equivocation;
                toSDK(message: _42.Equivocation): _42.EquivocationSDKType;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _245.MsgClientImpl;
            QueryClientImpl: typeof _230.QueryClientImpl;
            LCDQueryClient: typeof _213.LCDQueryClient;
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
                        value: any;
                    };
                    revokeAllowance(value: _49.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: any;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: any;
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
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    allowance?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _49.MsgGrantAllowance;
                fromSDK(object: _49.MsgGrantAllowanceSDKType): _49.MsgGrantAllowance;
                toSDK(message: _49.MsgGrantAllowance): _49.MsgGrantAllowanceSDKType;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _49.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgGrantAllowanceResponseSDKType;
                fromPartial(_: {}): _49.MsgGrantAllowanceResponse;
                fromSDK(_: _49.MsgGrantAllowanceResponseSDKType): _49.MsgGrantAllowanceResponse;
                toSDK(_: _49.MsgGrantAllowanceResponse): _49.MsgGrantAllowanceResponseSDKType;
            };
            MsgRevokeAllowance: {
                encode(message: _49.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgRevokeAllowance;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                }): _49.MsgRevokeAllowance;
                fromSDK(object: _49.MsgRevokeAllowanceSDKType): _49.MsgRevokeAllowance;
                toSDK(message: _49.MsgRevokeAllowance): _49.MsgRevokeAllowanceSDKType;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _49.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgRevokeAllowanceResponseSDKType;
                fromPartial(_: {}): _49.MsgRevokeAllowanceResponse;
                fromSDK(_: _49.MsgRevokeAllowanceResponseSDKType): _49.MsgRevokeAllowanceResponse;
                toSDK(_: _49.MsgRevokeAllowanceResponse): _49.MsgRevokeAllowanceResponseSDKType;
            };
            QueryAllowanceRequest: {
                encode(message: _48.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllowanceRequest;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                }): _48.QueryAllowanceRequest;
                fromSDK(object: _48.QueryAllowanceRequestSDKType): _48.QueryAllowanceRequest;
                toSDK(message: _48.QueryAllowanceRequest): _48.QueryAllowanceRequestSDKType;
            };
            QueryAllowanceResponse: {
                encode(message: _48.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllowanceResponseSDKType;
                fromPartial(object: {
                    allowance?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _48.QueryAllowanceResponse;
                fromSDK(object: _48.QueryAllowanceResponseSDKType): _48.QueryAllowanceResponse;
                toSDK(message: _48.QueryAllowanceResponse): _48.QueryAllowanceResponseSDKType;
            };
            QueryAllowancesRequest: {
                encode(message: _48.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllowancesRequest;
                fromPartial(object: {
                    grantee?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _48.QueryAllowancesRequest;
                fromSDK(object: _48.QueryAllowancesRequestSDKType): _48.QueryAllowancesRequest;
                toSDK(message: _48.QueryAllowancesRequest): _48.QueryAllowancesRequestSDKType;
            };
            QueryAllowancesResponse: {
                encode(message: _48.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllowancesResponseSDKType;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _48.QueryAllowancesResponse;
                fromSDK(object: _48.QueryAllowancesResponseSDKType): _48.QueryAllowancesResponse;
                toSDK(message: _48.QueryAllowancesResponse): _48.QueryAllowancesResponseSDKType;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _48.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllowancesByGranterRequest;
                fromPartial(object: {
                    granter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _48.QueryAllowancesByGranterRequest;
                fromSDK(object: _48.QueryAllowancesByGranterRequestSDKType): _48.QueryAllowancesByGranterRequest;
                toSDK(message: _48.QueryAllowancesByGranterRequest): _48.QueryAllowancesByGranterRequestSDKType;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _48.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllowancesByGranterResponseSDKType;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _48.QueryAllowancesByGranterResponse;
                fromSDK(object: _48.QueryAllowancesByGranterResponseSDKType): _48.QueryAllowancesByGranterResponse;
                toSDK(message: _48.QueryAllowancesByGranterResponse): _48.QueryAllowancesByGranterResponseSDKType;
            };
            GenesisState: {
                encode(message: _47.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.GenesisState;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _47.GenesisState;
                fromSDK(object: _47.GenesisStateSDKType): _47.GenesisState;
                toSDK(message: _47.GenesisState): _47.GenesisStateSDKType;
            };
            BasicAllowance: {
                encode(message: _46.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.BasicAllowance;
                fromPartial(object: {
                    spendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    expiration?: Date;
                }): _46.BasicAllowance;
                fromSDK(object: _46.BasicAllowanceSDKType): _46.BasicAllowance;
                toSDK(message: _46.BasicAllowance): _46.BasicAllowanceSDKType;
            };
            PeriodicAllowance: {
                encode(message: _46.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.PeriodicAllowance;
                fromPartial(object: {
                    basic?: {
                        spendLimit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        expiration?: Date;
                    };
                    period?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    periodSpendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    periodCanSpend?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    periodReset?: Date;
                }): _46.PeriodicAllowance;
                fromSDK(object: _46.PeriodicAllowanceSDKType): _46.PeriodicAllowance;
                toSDK(message: _46.PeriodicAllowance): _46.PeriodicAllowanceSDKType;
            };
            AllowedMsgAllowance: {
                encode(message: _46.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.AllowedMsgAllowance;
                fromPartial(object: {
                    allowance?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    allowedMessages?: string[];
                }): _46.AllowedMsgAllowance;
                fromSDK(object: _46.AllowedMsgAllowanceSDKType): _46.AllowedMsgAllowance;
                toSDK(message: _46.AllowedMsgAllowance): _46.AllowedMsgAllowanceSDKType;
            };
            Grant: {
                encode(message: _46.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.Grant;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    allowance?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _46.Grant;
                fromSDK(object: _46.GrantSDKType): _46.Grant;
                toSDK(message: _46.Grant): _46.GrantSDKType;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _50.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.GenesisState;
                fromPartial(object: {
                    genTxs?: Uint8Array[];
                }): _50.GenesisState;
                fromSDK(object: _50.GenesisStateSDKType): _50.GenesisState;
                toSDK(message: _50.GenesisState): _50.GenesisStateSDKType;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _246.MsgClientImpl;
            QueryClientImpl: typeof _231.QueryClientImpl;
            LCDQueryClient: typeof _214.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _54.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _54.MsgExecLegacyContent): {
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
                    execLegacyContent(value: _54.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _54.MsgExecLegacyContent;
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
                        value: any;
                    };
                    execLegacyContent(value: _54.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: any;
                    };
                    vote(value: _54.MsgVote): {
                        typeUrl: string;
                        value: any;
                    };
                    voteWeighted(value: _54.MsgVoteWeighted): {
                        typeUrl: string;
                        value: any;
                    };
                    deposit(value: _54.MsgDeposit): {
                        typeUrl: string;
                        value: any;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                };
                fromPartial: {
                    submitProposal(value: _54.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _54.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _54.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _54.MsgExecLegacyContent;
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
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _54.MsgSubmitProposal) => {
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
                    }) => _54.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _54.MsgExecLegacyContent) => {
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
                    }) => _54.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _54.MsgVote) => {
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
                    }) => _54.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _54.MsgVoteWeighted) => {
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
                    }) => _54.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _54.MsgDeposit) => {
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
                fromPartial(object: {
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    initialDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    proposer?: string;
                    metadata?: string;
                }): _54.MsgSubmitProposal;
                fromSDK(object: _54.MsgSubmitProposalSDKType): _54.MsgSubmitProposal;
                toSDK(message: _54.MsgSubmitProposal): _54.MsgSubmitProposalSDKType;
            };
            MsgSubmitProposalResponse: {
                encode(message: _54.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgSubmitProposalResponseSDKType;
                fromPartial(object: {
                    proposalId?: any;
                }): _54.MsgSubmitProposalResponse;
                fromSDK(object: _54.MsgSubmitProposalResponseSDKType): _54.MsgSubmitProposalResponse;
                toSDK(message: _54.MsgSubmitProposalResponse): _54.MsgSubmitProposalResponseSDKType;
            };
            MsgExecLegacyContent: {
                encode(message: _54.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgExecLegacyContent;
                fromPartial(object: {
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    authority?: string;
                }): _54.MsgExecLegacyContent;
                fromSDK(object: _54.MsgExecLegacyContentSDKType): _54.MsgExecLegacyContent;
                toSDK(message: _54.MsgExecLegacyContent): _54.MsgExecLegacyContentSDKType;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _54.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgExecLegacyContentResponseSDKType;
                fromPartial(_: {}): _54.MsgExecLegacyContentResponse;
                fromSDK(_: _54.MsgExecLegacyContentResponseSDKType): _54.MsgExecLegacyContentResponse;
                toSDK(_: _54.MsgExecLegacyContentResponse): _54.MsgExecLegacyContentResponseSDKType;
            };
            MsgVote: {
                encode(message: _54.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgVote;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _52.VoteOption;
                    metadata?: string;
                }): _54.MsgVote;
                fromSDK(object: _54.MsgVoteSDKType): _54.MsgVote;
                toSDK(message: _54.MsgVote): _54.MsgVoteSDKType;
            };
            MsgVoteResponse: {
                encode(_: _54.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgVoteResponseSDKType;
                fromPartial(_: {}): _54.MsgVoteResponse;
                fromSDK(_: _54.MsgVoteResponseSDKType): _54.MsgVoteResponse;
                toSDK(_: _54.MsgVoteResponse): _54.MsgVoteResponseSDKType;
            };
            MsgVoteWeighted: {
                encode(message: _54.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgVoteWeighted;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    options?: {
                        option?: _52.VoteOption;
                        weight?: string;
                    }[];
                    metadata?: string;
                }): _54.MsgVoteWeighted;
                fromSDK(object: _54.MsgVoteWeightedSDKType): _54.MsgVoteWeighted;
                toSDK(message: _54.MsgVoteWeighted): _54.MsgVoteWeightedSDKType;
            };
            MsgVoteWeightedResponse: {
                encode(_: _54.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgVoteWeightedResponseSDKType;
                fromPartial(_: {}): _54.MsgVoteWeightedResponse;
                fromSDK(_: _54.MsgVoteWeightedResponseSDKType): _54.MsgVoteWeightedResponse;
                toSDK(_: _54.MsgVoteWeightedResponse): _54.MsgVoteWeightedResponseSDKType;
            };
            MsgDeposit: {
                encode(message: _54.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgDeposit;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _54.MsgDeposit;
                fromSDK(object: _54.MsgDepositSDKType): _54.MsgDeposit;
                toSDK(message: _54.MsgDeposit): _54.MsgDepositSDKType;
            };
            MsgDepositResponse: {
                encode(_: _54.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgDepositResponseSDKType;
                fromPartial(_: {}): _54.MsgDepositResponse;
                fromSDK(_: _54.MsgDepositResponseSDKType): _54.MsgDepositResponse;
                toSDK(_: _54.MsgDepositResponse): _54.MsgDepositResponseSDKType;
            };
            QueryProposalRequest: {
                encode(message: _53.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryProposalRequest;
                fromPartial(object: {
                    proposalId?: any;
                }): _53.QueryProposalRequest;
                fromSDK(object: _53.QueryProposalRequestSDKType): _53.QueryProposalRequest;
                toSDK(message: _53.QueryProposalRequest): _53.QueryProposalRequestSDKType;
            };
            QueryProposalResponse: {
                encode(message: _53.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryProposalResponseSDKType;
                fromPartial(object: {
                    proposal?: {
                        id?: any;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _52.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                        metadata?: string;
                    };
                }): _53.QueryProposalResponse;
                fromSDK(object: _53.QueryProposalResponseSDKType): _53.QueryProposalResponse;
                toSDK(message: _53.QueryProposalResponse): _53.QueryProposalResponseSDKType;
            };
            QueryProposalsRequest: {
                encode(message: _53.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryProposalsRequest;
                fromPartial(object: {
                    proposalStatus?: _52.ProposalStatus;
                    voter?: string;
                    depositor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _53.QueryProposalsRequest;
                fromSDK(object: _53.QueryProposalsRequestSDKType): _53.QueryProposalsRequest;
                toSDK(message: _53.QueryProposalsRequest): _53.QueryProposalsRequestSDKType;
            };
            QueryProposalsResponse: {
                encode(message: _53.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryProposalsResponseSDKType;
                fromPartial(object: {
                    proposals?: {
                        id?: any;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _52.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                        metadata?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _53.QueryProposalsResponse;
                fromSDK(object: _53.QueryProposalsResponseSDKType): _53.QueryProposalsResponse;
                toSDK(message: _53.QueryProposalsResponse): _53.QueryProposalsResponseSDKType;
            };
            QueryVoteRequest: {
                encode(message: _53.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryVoteRequest;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                }): _53.QueryVoteRequest;
                fromSDK(object: _53.QueryVoteRequestSDKType): _53.QueryVoteRequest;
                toSDK(message: _53.QueryVoteRequest): _53.QueryVoteRequestSDKType;
            };
            QueryVoteResponse: {
                encode(message: _53.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryVoteResponseSDKType;
                fromPartial(object: {
                    vote?: {
                        proposalId?: any;
                        voter?: string;
                        options?: {
                            option?: _52.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    };
                }): _53.QueryVoteResponse;
                fromSDK(object: _53.QueryVoteResponseSDKType): _53.QueryVoteResponse;
                toSDK(message: _53.QueryVoteResponse): _53.QueryVoteResponseSDKType;
            };
            QueryVotesRequest: {
                encode(message: _53.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryVotesRequest;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _53.QueryVotesRequest;
                fromSDK(object: _53.QueryVotesRequestSDKType): _53.QueryVotesRequest;
                toSDK(message: _53.QueryVotesRequest): _53.QueryVotesRequestSDKType;
            };
            QueryVotesResponse: {
                encode(message: _53.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryVotesResponseSDKType;
                fromPartial(object: {
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        options?: {
                            option?: _52.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _53.QueryVotesResponse;
                fromSDK(object: _53.QueryVotesResponseSDKType): _53.QueryVotesResponse;
                toSDK(message: _53.QueryVotesResponse): _53.QueryVotesResponseSDKType;
            };
            QueryParamsRequest: {
                encode(message: _53.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryParamsRequest;
                fromPartial(object: {
                    paramsType?: string;
                }): _53.QueryParamsRequest;
                fromSDK(object: _53.QueryParamsRequestSDKType): _53.QueryParamsRequest;
                toSDK(message: _53.QueryParamsRequest): _53.QueryParamsRequestSDKType;
            };
            QueryParamsResponse: {
                encode(message: _53.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryParamsResponseSDKType;
                fromPartial(object: {
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: string;
                        threshold?: string;
                        vetoThreshold?: string;
                    };
                }): _53.QueryParamsResponse;
                fromSDK(object: _53.QueryParamsResponseSDKType): _53.QueryParamsResponse;
                toSDK(message: _53.QueryParamsResponse): _53.QueryParamsResponseSDKType;
            };
            QueryDepositRequest: {
                encode(message: _53.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryDepositRequest;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                }): _53.QueryDepositRequest;
                fromSDK(object: _53.QueryDepositRequestSDKType): _53.QueryDepositRequest;
                toSDK(message: _53.QueryDepositRequest): _53.QueryDepositRequestSDKType;
            };
            QueryDepositResponse: {
                encode(message: _53.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryDepositResponseSDKType;
                fromPartial(object: {
                    deposit?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _53.QueryDepositResponse;
                fromSDK(object: _53.QueryDepositResponseSDKType): _53.QueryDepositResponse;
                toSDK(message: _53.QueryDepositResponse): _53.QueryDepositResponseSDKType;
            };
            QueryDepositsRequest: {
                encode(message: _53.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryDepositsRequest;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _53.QueryDepositsRequest;
                fromSDK(object: _53.QueryDepositsRequestSDKType): _53.QueryDepositsRequest;
                toSDK(message: _53.QueryDepositsRequest): _53.QueryDepositsRequestSDKType;
            };
            QueryDepositsResponse: {
                encode(message: _53.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryDepositsResponseSDKType;
                fromPartial(object: {
                    deposits?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _53.QueryDepositsResponse;
                fromSDK(object: _53.QueryDepositsResponseSDKType): _53.QueryDepositsResponse;
                toSDK(message: _53.QueryDepositsResponse): _53.QueryDepositsResponseSDKType;
            };
            QueryTallyResultRequest: {
                encode(message: _53.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryTallyResultRequest;
                fromPartial(object: {
                    proposalId?: any;
                }): _53.QueryTallyResultRequest;
                fromSDK(object: _53.QueryTallyResultRequestSDKType): _53.QueryTallyResultRequest;
                toSDK(message: _53.QueryTallyResultRequest): _53.QueryTallyResultRequestSDKType;
            };
            QueryTallyResultResponse: {
                encode(message: _53.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryTallyResultResponseSDKType;
                fromPartial(object: {
                    tally?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                }): _53.QueryTallyResultResponse;
                fromSDK(object: _53.QueryTallyResultResponseSDKType): _53.QueryTallyResultResponse;
                toSDK(message: _53.QueryTallyResultResponse): _53.QueryTallyResultResponseSDKType;
            };
            voteOptionFromJSON(object: any): _52.VoteOption;
            voteOptionToJSON(object: _52.VoteOption): string;
            proposalStatusFromJSON(object: any): _52.ProposalStatus;
            proposalStatusToJSON(object: _52.ProposalStatus): string;
            VoteOption: typeof _52.VoteOption;
            VoteOptionSDKType: typeof _52.VoteOptionSDKType;
            ProposalStatus: typeof _52.ProposalStatus;
            ProposalStatusSDKType: typeof _52.ProposalStatusSDKType;
            WeightedVoteOption: {
                encode(message: _52.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.WeightedVoteOption;
                fromPartial(object: {
                    option?: _52.VoteOption;
                    weight?: string;
                }): _52.WeightedVoteOption;
                fromSDK(object: _52.WeightedVoteOptionSDKType): _52.WeightedVoteOption;
                toSDK(message: _52.WeightedVoteOption): _52.WeightedVoteOptionSDKType;
            };
            Deposit: {
                encode(message: _52.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.Deposit;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _52.Deposit;
                fromSDK(object: _52.DepositSDKType): _52.Deposit;
                toSDK(message: _52.Deposit): _52.DepositSDKType;
            };
            Proposal: {
                encode(message: _52.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.Proposal;
                fromPartial(object: {
                    id?: any;
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    status?: _52.ProposalStatus;
                    finalTallyResult?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                    submitTime?: Date;
                    depositEndTime?: Date;
                    totalDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    votingStartTime?: Date;
                    votingEndTime?: Date;
                    metadata?: string;
                }): _52.Proposal;
                fromSDK(object: _52.ProposalSDKType): _52.Proposal;
                toSDK(message: _52.Proposal): _52.ProposalSDKType;
            };
            TallyResult: {
                encode(message: _52.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.TallyResult;
                fromPartial(object: {
                    yesCount?: string;
                    abstainCount?: string;
                    noCount?: string;
                    noWithVetoCount?: string;
                }): _52.TallyResult;
                fromSDK(object: _52.TallyResultSDKType): _52.TallyResult;
                toSDK(message: _52.TallyResult): _52.TallyResultSDKType;
            };
            Vote: {
                encode(message: _52.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.Vote;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    options?: {
                        option?: _52.VoteOption;
                        weight?: string;
                    }[];
                    metadata?: string;
                }): _52.Vote;
                fromSDK(object: _52.VoteSDKType): _52.Vote;
                toSDK(message: _52.Vote): _52.VoteSDKType;
            };
            DepositParams: {
                encode(message: _52.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.DepositParams;
                fromPartial(object: {
                    minDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    maxDepositPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _52.DepositParams;
                fromSDK(object: _52.DepositParamsSDKType): _52.DepositParams;
                toSDK(message: _52.DepositParams): _52.DepositParamsSDKType;
            };
            VotingParams: {
                encode(message: _52.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.VotingParams;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _52.VotingParams;
                fromSDK(object: _52.VotingParamsSDKType): _52.VotingParams;
                toSDK(message: _52.VotingParams): _52.VotingParamsSDKType;
            };
            TallyParams: {
                encode(message: _52.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.TallyParams;
                fromPartial(object: {
                    quorum?: string;
                    threshold?: string;
                    vetoThreshold?: string;
                }): _52.TallyParams;
                fromSDK(object: _52.TallyParamsSDKType): _52.TallyParams;
                toSDK(message: _52.TallyParams): _52.TallyParamsSDKType;
            };
            GenesisState: {
                encode(message: _51.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.GenesisState;
                fromPartial(object: {
                    startingProposalId?: any;
                    deposits?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        options?: {
                            option?: _52.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    }[];
                    proposals?: {
                        id?: any;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _52.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                        metadata?: string;
                    }[];
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: string;
                        threshold?: string;
                        vetoThreshold?: string;
                    };
                }): _51.GenesisState;
                fromSDK(object: _51.GenesisStateSDKType): _51.GenesisState;
                toSDK(message: _51.GenesisState): _51.GenesisStateSDKType;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _247.MsgClientImpl;
            QueryClientImpl: typeof _232.QueryClientImpl;
            LCDQueryClient: typeof _215.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _58.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _58.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _58.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _58.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _58.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _58.MsgSubmitProposal;
                    };
                    vote(value: _58.MsgVote): {
                        typeUrl: string;
                        value: _58.MsgVote;
                    };
                    voteWeighted(value: _58.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _58.MsgVoteWeighted;
                    };
                    deposit(value: _58.MsgDeposit): {
                        typeUrl: string;
                        value: _58.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _58.MsgSubmitProposal): {
                        typeUrl: string;
                        value: any;
                    };
                    vote(value: _58.MsgVote): {
                        typeUrl: string;
                        value: any;
                    };
                    voteWeighted(value: _58.MsgVoteWeighted): {
                        typeUrl: string;
                        value: any;
                    };
                    deposit(value: _58.MsgDeposit): {
                        typeUrl: string;
                        value: any;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                };
                fromPartial: {
                    submitProposal(value: _58.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _58.MsgSubmitProposal;
                    };
                    vote(value: _58.MsgVote): {
                        typeUrl: string;
                        value: _58.MsgVote;
                    };
                    voteWeighted(value: _58.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _58.MsgVoteWeighted;
                    };
                    deposit(value: _58.MsgDeposit): {
                        typeUrl: string;
                        value: _58.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _58.MsgSubmitProposal) => {
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
                    }) => _58.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _58.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _58.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _58.MsgVoteWeighted) => {
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
                    }) => _58.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _58.MsgDeposit) => {
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
                    }) => _58.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _58.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgSubmitProposal;
                fromPartial(object: {
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    initialDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    proposer?: string;
                }): _58.MsgSubmitProposal;
                fromSDK(object: _58.MsgSubmitProposalSDKType): _58.MsgSubmitProposal;
                toSDK(message: _58.MsgSubmitProposal): _58.MsgSubmitProposalSDKType;
            };
            MsgSubmitProposalResponse: {
                encode(message: _58.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgSubmitProposalResponseSDKType;
                fromPartial(object: {
                    proposalId?: any;
                }): _58.MsgSubmitProposalResponse;
                fromSDK(object: _58.MsgSubmitProposalResponseSDKType): _58.MsgSubmitProposalResponse;
                toSDK(message: _58.MsgSubmitProposalResponse): _58.MsgSubmitProposalResponseSDKType;
            };
            MsgVote: {
                encode(message: _58.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgVote;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _56.VoteOption;
                }): _58.MsgVote;
                fromSDK(object: _58.MsgVoteSDKType): _58.MsgVote;
                toSDK(message: _58.MsgVote): _58.MsgVoteSDKType;
            };
            MsgVoteResponse: {
                encode(_: _58.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgVoteResponseSDKType;
                fromPartial(_: {}): _58.MsgVoteResponse;
                fromSDK(_: _58.MsgVoteResponseSDKType): _58.MsgVoteResponse;
                toSDK(_: _58.MsgVoteResponse): _58.MsgVoteResponseSDKType;
            };
            MsgVoteWeighted: {
                encode(message: _58.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgVoteWeighted;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    options?: {
                        option?: _56.VoteOption;
                        weight?: string;
                    }[];
                }): _58.MsgVoteWeighted;
                fromSDK(object: _58.MsgVoteWeightedSDKType): _58.MsgVoteWeighted;
                toSDK(message: _58.MsgVoteWeighted): _58.MsgVoteWeightedSDKType;
            };
            MsgVoteWeightedResponse: {
                encode(_: _58.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgVoteWeightedResponseSDKType;
                fromPartial(_: {}): _58.MsgVoteWeightedResponse;
                fromSDK(_: _58.MsgVoteWeightedResponseSDKType): _58.MsgVoteWeightedResponse;
                toSDK(_: _58.MsgVoteWeightedResponse): _58.MsgVoteWeightedResponseSDKType;
            };
            MsgDeposit: {
                encode(message: _58.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgDeposit;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _58.MsgDeposit;
                fromSDK(object: _58.MsgDepositSDKType): _58.MsgDeposit;
                toSDK(message: _58.MsgDeposit): _58.MsgDepositSDKType;
            };
            MsgDepositResponse: {
                encode(_: _58.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgDepositResponseSDKType;
                fromPartial(_: {}): _58.MsgDepositResponse;
                fromSDK(_: _58.MsgDepositResponseSDKType): _58.MsgDepositResponse;
                toSDK(_: _58.MsgDepositResponse): _58.MsgDepositResponseSDKType;
            };
            QueryProposalRequest: {
                encode(message: _57.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryProposalRequest;
                fromPartial(object: {
                    proposalId?: any;
                }): _57.QueryProposalRequest;
                fromSDK(object: _57.QueryProposalRequestSDKType): _57.QueryProposalRequest;
                toSDK(message: _57.QueryProposalRequest): _57.QueryProposalRequestSDKType;
            };
            QueryProposalResponse: {
                encode(message: _57.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryProposalResponseSDKType;
                fromPartial(object: {
                    proposal?: {
                        proposalId?: any;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _56.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    };
                }): _57.QueryProposalResponse;
                fromSDK(object: _57.QueryProposalResponseSDKType): _57.QueryProposalResponse;
                toSDK(message: _57.QueryProposalResponse): _57.QueryProposalResponseSDKType;
            };
            QueryProposalsRequest: {
                encode(message: _57.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryProposalsRequest;
                fromPartial(object: {
                    proposalStatus?: _56.ProposalStatus;
                    voter?: string;
                    depositor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _57.QueryProposalsRequest;
                fromSDK(object: _57.QueryProposalsRequestSDKType): _57.QueryProposalsRequest;
                toSDK(message: _57.QueryProposalsRequest): _57.QueryProposalsRequestSDKType;
            };
            QueryProposalsResponse: {
                encode(message: _57.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryProposalsResponseSDKType;
                fromPartial(object: {
                    proposals?: {
                        proposalId?: any;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _56.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _57.QueryProposalsResponse;
                fromSDK(object: _57.QueryProposalsResponseSDKType): _57.QueryProposalsResponse;
                toSDK(message: _57.QueryProposalsResponse): _57.QueryProposalsResponseSDKType;
            };
            QueryVoteRequest: {
                encode(message: _57.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryVoteRequest;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                }): _57.QueryVoteRequest;
                fromSDK(object: _57.QueryVoteRequestSDKType): _57.QueryVoteRequest;
                toSDK(message: _57.QueryVoteRequest): _57.QueryVoteRequestSDKType;
            };
            QueryVoteResponse: {
                encode(message: _57.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryVoteResponseSDKType;
                fromPartial(object: {
                    vote?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _56.VoteOption;
                        options?: {
                            option?: _56.VoteOption;
                            weight?: string;
                        }[];
                    };
                }): _57.QueryVoteResponse;
                fromSDK(object: _57.QueryVoteResponseSDKType): _57.QueryVoteResponse;
                toSDK(message: _57.QueryVoteResponse): _57.QueryVoteResponseSDKType;
            };
            QueryVotesRequest: {
                encode(message: _57.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryVotesRequest;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _57.QueryVotesRequest;
                fromSDK(object: _57.QueryVotesRequestSDKType): _57.QueryVotesRequest;
                toSDK(message: _57.QueryVotesRequest): _57.QueryVotesRequestSDKType;
            };
            QueryVotesResponse: {
                encode(message: _57.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryVotesResponseSDKType;
                fromPartial(object: {
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _56.VoteOption;
                        options?: {
                            option?: _56.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _57.QueryVotesResponse;
                fromSDK(object: _57.QueryVotesResponseSDKType): _57.QueryVotesResponse;
                toSDK(message: _57.QueryVotesResponse): _57.QueryVotesResponseSDKType;
            };
            QueryParamsRequest: {
                encode(message: _57.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryParamsRequest;
                fromPartial(object: {
                    paramsType?: string;
                }): _57.QueryParamsRequest;
                fromSDK(object: _57.QueryParamsRequestSDKType): _57.QueryParamsRequest;
                toSDK(message: _57.QueryParamsRequest): _57.QueryParamsRequestSDKType;
            };
            QueryParamsResponse: {
                encode(message: _57.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryParamsResponseSDKType;
                fromPartial(object: {
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        vetoThreshold?: Uint8Array;
                    };
                }): _57.QueryParamsResponse;
                fromSDK(object: _57.QueryParamsResponseSDKType): _57.QueryParamsResponse;
                toSDK(message: _57.QueryParamsResponse): _57.QueryParamsResponseSDKType;
            };
            QueryDepositRequest: {
                encode(message: _57.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDepositRequest;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                }): _57.QueryDepositRequest;
                fromSDK(object: _57.QueryDepositRequestSDKType): _57.QueryDepositRequest;
                toSDK(message: _57.QueryDepositRequest): _57.QueryDepositRequestSDKType;
            };
            QueryDepositResponse: {
                encode(message: _57.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDepositResponseSDKType;
                fromPartial(object: {
                    deposit?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _57.QueryDepositResponse;
                fromSDK(object: _57.QueryDepositResponseSDKType): _57.QueryDepositResponse;
                toSDK(message: _57.QueryDepositResponse): _57.QueryDepositResponseSDKType;
            };
            QueryDepositsRequest: {
                encode(message: _57.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDepositsRequest;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _57.QueryDepositsRequest;
                fromSDK(object: _57.QueryDepositsRequestSDKType): _57.QueryDepositsRequest;
                toSDK(message: _57.QueryDepositsRequest): _57.QueryDepositsRequestSDKType;
            };
            QueryDepositsResponse: {
                encode(message: _57.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDepositsResponseSDKType;
                fromPartial(object: {
                    deposits?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _57.QueryDepositsResponse;
                fromSDK(object: _57.QueryDepositsResponseSDKType): _57.QueryDepositsResponse;
                toSDK(message: _57.QueryDepositsResponse): _57.QueryDepositsResponseSDKType;
            };
            QueryTallyResultRequest: {
                encode(message: _57.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryTallyResultRequest;
                fromPartial(object: {
                    proposalId?: any;
                }): _57.QueryTallyResultRequest;
                fromSDK(object: _57.QueryTallyResultRequestSDKType): _57.QueryTallyResultRequest;
                toSDK(message: _57.QueryTallyResultRequest): _57.QueryTallyResultRequestSDKType;
            };
            QueryTallyResultResponse: {
                encode(message: _57.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryTallyResultResponseSDKType;
                fromPartial(object: {
                    tally?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        noWithVeto?: string;
                    };
                }): _57.QueryTallyResultResponse;
                fromSDK(object: _57.QueryTallyResultResponseSDKType): _57.QueryTallyResultResponse;
                toSDK(message: _57.QueryTallyResultResponse): _57.QueryTallyResultResponseSDKType;
            };
            voteOptionFromJSON(object: any): _56.VoteOption;
            voteOptionToJSON(object: _56.VoteOption): string;
            proposalStatusFromJSON(object: any): _56.ProposalStatus;
            proposalStatusToJSON(object: _56.ProposalStatus): string;
            VoteOption: typeof _56.VoteOption;
            VoteOptionSDKType: typeof _56.VoteOptionSDKType;
            ProposalStatus: typeof _56.ProposalStatus;
            ProposalStatusSDKType: typeof _56.ProposalStatusSDKType;
            WeightedVoteOption: {
                encode(message: _56.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.WeightedVoteOption;
                fromPartial(object: {
                    option?: _56.VoteOption;
                    weight?: string;
                }): _56.WeightedVoteOption;
                fromSDK(object: _56.WeightedVoteOptionSDKType): _56.WeightedVoteOption;
                toSDK(message: _56.WeightedVoteOption): _56.WeightedVoteOptionSDKType;
            };
            TextProposal: {
                encode(message: _56.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.TextProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _56.TextProposal;
                fromSDK(object: _56.TextProposalSDKType): _56.TextProposal;
                toSDK(message: _56.TextProposal): _56.TextProposalSDKType;
            };
            Deposit: {
                encode(message: _56.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.Deposit;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _56.Deposit;
                fromSDK(object: _56.DepositSDKType): _56.Deposit;
                toSDK(message: _56.Deposit): _56.DepositSDKType;
            };
            Proposal: {
                encode(message: _56.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.Proposal;
                fromPartial(object: {
                    proposalId?: any;
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    status?: _56.ProposalStatus;
                    finalTallyResult?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        noWithVeto?: string;
                    };
                    submitTime?: Date;
                    depositEndTime?: Date;
                    totalDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    votingStartTime?: Date;
                    votingEndTime?: Date;
                }): _56.Proposal;
                fromSDK(object: _56.ProposalSDKType): _56.Proposal;
                toSDK(message: _56.Proposal): _56.ProposalSDKType;
            };
            TallyResult: {
                encode(message: _56.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.TallyResult;
                fromPartial(object: {
                    yes?: string;
                    abstain?: string;
                    no?: string;
                    noWithVeto?: string;
                }): _56.TallyResult;
                fromSDK(object: _56.TallyResultSDKType): _56.TallyResult;
                toSDK(message: _56.TallyResult): _56.TallyResultSDKType;
            };
            Vote: {
                encode(message: _56.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.Vote;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _56.VoteOption;
                    options?: {
                        option?: _56.VoteOption;
                        weight?: string;
                    }[];
                }): _56.Vote;
                fromSDK(object: _56.VoteSDKType): _56.Vote;
                toSDK(message: _56.Vote): _56.VoteSDKType;
            };
            DepositParams: {
                encode(message: _56.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.DepositParams;
                fromPartial(object: {
                    minDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    maxDepositPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _56.DepositParams;
                fromSDK(object: _56.DepositParamsSDKType): _56.DepositParams;
                toSDK(message: _56.DepositParams): _56.DepositParamsSDKType;
            };
            VotingParams: {
                encode(message: _56.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.VotingParams;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _56.VotingParams;
                fromSDK(object: _56.VotingParamsSDKType): _56.VotingParams;
                toSDK(message: _56.VotingParams): _56.VotingParamsSDKType;
            };
            TallyParams: {
                encode(message: _56.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.TallyParams;
                fromPartial(object: {
                    quorum?: Uint8Array;
                    threshold?: Uint8Array;
                    vetoThreshold?: Uint8Array;
                }): _56.TallyParams;
                fromSDK(object: _56.TallyParamsSDKType): _56.TallyParams;
                toSDK(message: _56.TallyParams): _56.TallyParamsSDKType;
            };
            GenesisState: {
                encode(message: _55.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.GenesisState;
                fromPartial(object: {
                    startingProposalId?: any;
                    deposits?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _56.VoteOption;
                        options?: {
                            option?: _56.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    proposals?: {
                        proposalId?: any;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _56.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    }[];
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        vetoThreshold?: Uint8Array;
                    };
                }): _55.GenesisState;
                fromSDK(object: _55.GenesisStateSDKType): _55.GenesisState;
                toSDK(message: _55.GenesisState): _55.GenesisStateSDKType;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _233.QueryClientImpl;
            LCDQueryClient: typeof _216.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _61.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryParamsRequest;
                fromPartial(_: {}): _61.QueryParamsRequest;
                fromSDK(_: _61.QueryParamsRequestSDKType): _61.QueryParamsRequest;
                toSDK(_: _61.QueryParamsRequest): _61.QueryParamsRequestSDKType;
            };
            QueryParamsResponse: {
                encode(message: _61.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryParamsResponseSDKType;
                fromPartial(object: {
                    params?: {
                        mintDenom?: string;
                        inflationRateChange?: string;
                        inflationMax?: string;
                        inflationMin?: string;
                        goalBonded?: string;
                        blocksPerYear?: any;
                    };
                }): _61.QueryParamsResponse;
                fromSDK(object: _61.QueryParamsResponseSDKType): _61.QueryParamsResponse;
                toSDK(message: _61.QueryParamsResponse): _61.QueryParamsResponseSDKType;
            };
            QueryInflationRequest: {
                encode(_: _61.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryInflationRequest;
                fromPartial(_: {}): _61.QueryInflationRequest;
                fromSDK(_: _61.QueryInflationRequestSDKType): _61.QueryInflationRequest;
                toSDK(_: _61.QueryInflationRequest): _61.QueryInflationRequestSDKType;
            };
            QueryInflationResponse: {
                encode(message: _61.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryInflationResponseSDKType;
                fromPartial(object: {
                    inflation?: Uint8Array;
                }): _61.QueryInflationResponse;
                fromSDK(object: _61.QueryInflationResponseSDKType): _61.QueryInflationResponse;
                toSDK(message: _61.QueryInflationResponse): _61.QueryInflationResponseSDKType;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _61.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryAnnualProvisionsRequest;
                fromPartial(_: {}): _61.QueryAnnualProvisionsRequest;
                fromSDK(_: _61.QueryAnnualProvisionsRequestSDKType): _61.QueryAnnualProvisionsRequest;
                toSDK(_: _61.QueryAnnualProvisionsRequest): _61.QueryAnnualProvisionsRequestSDKType;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _61.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryAnnualProvisionsResponseSDKType;
                fromPartial(object: {
                    annualProvisions?: Uint8Array;
                }): _61.QueryAnnualProvisionsResponse;
                fromSDK(object: _61.QueryAnnualProvisionsResponseSDKType): _61.QueryAnnualProvisionsResponse;
                toSDK(message: _61.QueryAnnualProvisionsResponse): _61.QueryAnnualProvisionsResponseSDKType;
            };
            Minter: {
                encode(message: _60.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Minter;
                fromPartial(object: {
                    inflation?: string;
                    annualProvisions?: string;
                }): _60.Minter;
                fromSDK(object: _60.MinterSDKType): _60.Minter;
                toSDK(message: _60.Minter): _60.MinterSDKType;
            };
            Params: {
                encode(message: _60.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Params;
                fromPartial(object: {
                    mintDenom?: string;
                    inflationRateChange?: string;
                    inflationMax?: string;
                    inflationMin?: string;
                    goalBonded?: string;
                    blocksPerYear?: any;
                }): _60.Params;
                fromSDK(object: _60.ParamsSDKType): _60.Params;
                toSDK(message: _60.Params): _60.ParamsSDKType;
            };
            GenesisState: {
                encode(message: _59.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.GenesisState;
                fromPartial(object: {
                    minter?: {
                        inflation?: string;
                        annualProvisions?: string;
                    };
                    params?: {
                        mintDenom?: string;
                        inflationRateChange?: string;
                        inflationMax?: string;
                        inflationMin?: string;
                        goalBonded?: string;
                        blocksPerYear?: any;
                    };
                }): _59.GenesisState;
                fromSDK(object: _59.GenesisStateSDKType): _59.GenesisState;
                toSDK(message: _59.GenesisState): _59.GenesisStateSDKType;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _248.MsgClientImpl;
            QueryClientImpl: typeof _234.QueryClientImpl;
            LCDQueryClient: typeof _217.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _67.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _67.MsgSend): {
                        typeUrl: string;
                        value: _67.MsgSend;
                    };
                };
                toJSON: {
                    send(value: _67.MsgSend): {
                        typeUrl: string;
                        value: any;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                };
                fromPartial: {
                    send(value: _67.MsgSend): {
                        typeUrl: string;
                        value: _67.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _67.MsgSend) => {
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
                    }) => _67.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _67.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.MsgSend;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    sender?: string;
                    receiver?: string;
                }): _67.MsgSend;
                fromSDK(object: _67.MsgSendSDKType): _67.MsgSend;
                toSDK(message: _67.MsgSend): _67.MsgSendSDKType;
            };
            MsgSendResponse: {
                encode(_: _67.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.MsgSendResponseSDKType;
                fromPartial(_: {}): _67.MsgSendResponse;
                fromSDK(_: _67.MsgSendResponseSDKType): _67.MsgSendResponse;
                toSDK(_: _67.MsgSendResponse): _67.MsgSendResponseSDKType;
            };
            QueryBalanceRequest: {
                encode(message: _66.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryBalanceRequest;
                fromPartial(object: {
                    classId?: string;
                    owner?: string;
                }): _66.QueryBalanceRequest;
                fromSDK(object: _66.QueryBalanceRequestSDKType): _66.QueryBalanceRequest;
                toSDK(message: _66.QueryBalanceRequest): _66.QueryBalanceRequestSDKType;
            };
            QueryBalanceResponse: {
                encode(message: _66.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryBalanceResponseSDKType;
                fromPartial(object: {
                    amount?: any;
                }): _66.QueryBalanceResponse;
                fromSDK(object: _66.QueryBalanceResponseSDKType): _66.QueryBalanceResponse;
                toSDK(message: _66.QueryBalanceResponse): _66.QueryBalanceResponseSDKType;
            };
            QueryOwnerRequest: {
                encode(message: _66.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryOwnerRequest;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                }): _66.QueryOwnerRequest;
                fromSDK(object: _66.QueryOwnerRequestSDKType): _66.QueryOwnerRequest;
                toSDK(message: _66.QueryOwnerRequest): _66.QueryOwnerRequestSDKType;
            };
            QueryOwnerResponse: {
                encode(message: _66.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryOwnerResponseSDKType;
                fromPartial(object: {
                    owner?: string;
                }): _66.QueryOwnerResponse;
                fromSDK(object: _66.QueryOwnerResponseSDKType): _66.QueryOwnerResponse;
                toSDK(message: _66.QueryOwnerResponse): _66.QueryOwnerResponseSDKType;
            };
            QuerySupplyRequest: {
                encode(message: _66.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QuerySupplyRequest;
                fromPartial(object: {
                    classId?: string;
                }): _66.QuerySupplyRequest;
                fromSDK(object: _66.QuerySupplyRequestSDKType): _66.QuerySupplyRequest;
                toSDK(message: _66.QuerySupplyRequest): _66.QuerySupplyRequestSDKType;
            };
            QuerySupplyResponse: {
                encode(message: _66.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QuerySupplyResponseSDKType;
                fromPartial(object: {
                    amount?: any;
                }): _66.QuerySupplyResponse;
                fromSDK(object: _66.QuerySupplyResponseSDKType): _66.QuerySupplyResponse;
                toSDK(message: _66.QuerySupplyResponse): _66.QuerySupplyResponseSDKType;
            };
            QueryNFTsRequest: {
                encode(message: _66.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryNFTsRequest;
                fromPartial(object: {
                    classId?: string;
                    owner?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _66.QueryNFTsRequest;
                fromSDK(object: _66.QueryNFTsRequestSDKType): _66.QueryNFTsRequest;
                toSDK(message: _66.QueryNFTsRequest): _66.QueryNFTsRequestSDKType;
            };
            QueryNFTsResponse: {
                encode(message: _66.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryNFTsResponseSDKType;
                fromPartial(object: {
                    nfts?: {
                        classId?: string;
                        id?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _66.QueryNFTsResponse;
                fromSDK(object: _66.QueryNFTsResponseSDKType): _66.QueryNFTsResponse;
                toSDK(message: _66.QueryNFTsResponse): _66.QueryNFTsResponseSDKType;
            };
            QueryNFTRequest: {
                encode(message: _66.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryNFTRequest;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                }): _66.QueryNFTRequest;
                fromSDK(object: _66.QueryNFTRequestSDKType): _66.QueryNFTRequest;
                toSDK(message: _66.QueryNFTRequest): _66.QueryNFTRequestSDKType;
            };
            QueryNFTResponse: {
                encode(message: _66.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryNFTResponseSDKType;
                fromPartial(object: {
                    nft?: {
                        classId?: string;
                        id?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _66.QueryNFTResponse;
                fromSDK(object: _66.QueryNFTResponseSDKType): _66.QueryNFTResponse;
                toSDK(message: _66.QueryNFTResponse): _66.QueryNFTResponseSDKType;
            };
            QueryClassRequest: {
                encode(message: _66.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryClassRequest;
                fromPartial(object: {
                    classId?: string;
                }): _66.QueryClassRequest;
                fromSDK(object: _66.QueryClassRequestSDKType): _66.QueryClassRequest;
                toSDK(message: _66.QueryClassRequest): _66.QueryClassRequestSDKType;
            };
            QueryClassResponse: {
                encode(message: _66.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryClassResponseSDKType;
                fromPartial(object: {
                    class?: {
                        id?: string;
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _66.QueryClassResponse;
                fromSDK(object: _66.QueryClassResponseSDKType): _66.QueryClassResponse;
                toSDK(message: _66.QueryClassResponse): _66.QueryClassResponseSDKType;
            };
            QueryClassesRequest: {
                encode(message: _66.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryClassesRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _66.QueryClassesRequest;
                fromSDK(object: _66.QueryClassesRequestSDKType): _66.QueryClassesRequest;
                toSDK(message: _66.QueryClassesRequest): _66.QueryClassesRequestSDKType;
            };
            QueryClassesResponse: {
                encode(message: _66.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryClassesResponseSDKType;
                fromPartial(object: {
                    classes?: {
                        id?: string;
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _66.QueryClassesResponse;
                fromSDK(object: _66.QueryClassesResponseSDKType): _66.QueryClassesResponse;
                toSDK(message: _66.QueryClassesResponse): _66.QueryClassesResponseSDKType;
            };
            Class: {
                encode(message: _65.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Class;
                fromPartial(object: {
                    id?: string;
                    name?: string;
                    symbol?: string;
                    description?: string;
                    uri?: string;
                    uriHash?: string;
                    data?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _65.Class;
                fromSDK(object: _65.ClassSDKType): _65.Class;
                toSDK(message: _65.Class): _65.ClassSDKType;
            };
            NFT: {
                encode(message: _65.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.NFT;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    uri?: string;
                    uriHash?: string;
                    data?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _65.NFT;
                fromSDK(object: _65.NFTSDKType): _65.NFT;
                toSDK(message: _65.NFT): _65.NFTSDKType;
            };
            GenesisState: {
                encode(message: _64.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.GenesisState;
                fromPartial(object: {
                    classes?: {
                        id?: string;
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    entries?: {
                        owner?: string;
                        nfts?: {
                            classId?: string;
                            id?: string;
                            uri?: string;
                            uriHash?: string;
                            data?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    }[];
                }): _64.GenesisState;
                fromSDK(object: _64.GenesisStateSDKType): _64.GenesisState;
                toSDK(message: _64.GenesisState): _64.GenesisStateSDKType;
            };
            Entry: {
                encode(message: _64.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Entry;
                fromPartial(object: {
                    owner?: string;
                    nfts?: {
                        classId?: string;
                        id?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _64.Entry;
                fromSDK(object: _64.EntrySDKType): _64.Entry;
                toSDK(message: _64.Entry): _64.EntrySDKType;
            };
            EventSend: {
                encode(message: _63.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.EventSend;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    sender?: string;
                    receiver?: string;
                }): _63.EventSend;
                fromSDK(object: _63.EventSendSDKType): _63.EventSend;
                toSDK(message: _63.EventSend): _63.EventSendSDKType;
            };
            EventMint: {
                encode(message: _63.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.EventMint;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    owner?: string;
                }): _63.EventMint;
                fromSDK(object: _63.EventMintSDKType): _63.EventMint;
                toSDK(message: _63.EventMint): _63.EventMintSDKType;
            };
            EventBurn: {
                encode(message: _63.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.EventBurn;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    owner?: string;
                }): _63.EventBurn;
                fromSDK(object: _63.EventBurnSDKType): _63.EventBurn;
                toSDK(message: _63.EventBurn): _63.EventBurnSDKType;
            };
        };
    }
    namespace orm {
        const v1: {
            TableDescriptor: {
                encode(message: _68.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.TableDescriptor;
                fromPartial(object: {
                    primaryKey?: {
                        fields?: string;
                        autoIncrement?: boolean;
                    };
                    index?: {
                        fields?: string;
                        id?: number;
                        unique?: boolean;
                    }[];
                    id?: number;
                }): _68.TableDescriptor;
                fromSDK(object: _68.TableDescriptorSDKType): _68.TableDescriptor;
                toSDK(message: _68.TableDescriptor): _68.TableDescriptorSDKType;
            };
            PrimaryKeyDescriptor: {
                encode(message: _68.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.PrimaryKeyDescriptor;
                fromPartial(object: {
                    fields?: string;
                    autoIncrement?: boolean;
                }): _68.PrimaryKeyDescriptor;
                fromSDK(object: _68.PrimaryKeyDescriptorSDKType): _68.PrimaryKeyDescriptor;
                toSDK(message: _68.PrimaryKeyDescriptor): _68.PrimaryKeyDescriptorSDKType;
            };
            SecondaryIndexDescriptor: {
                encode(message: _68.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.SecondaryIndexDescriptor;
                fromPartial(object: {
                    fields?: string;
                    id?: number;
                    unique?: boolean;
                }): _68.SecondaryIndexDescriptor;
                fromSDK(object: _68.SecondaryIndexDescriptorSDKType): _68.SecondaryIndexDescriptor;
                toSDK(message: _68.SecondaryIndexDescriptor): _68.SecondaryIndexDescriptorSDKType;
            };
            SingletonDescriptor: {
                encode(message: _68.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.SingletonDescriptor;
                fromPartial(object: {
                    id?: number;
                }): _68.SingletonDescriptor;
                fromSDK(object: _68.SingletonDescriptorSDKType): _68.SingletonDescriptor;
                toSDK(message: _68.SingletonDescriptor): _68.SingletonDescriptorSDKType;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _69.StorageType;
            storageTypeToJSON(object: _69.StorageType): string;
            StorageType: typeof _69.StorageType;
            StorageTypeSDKType: typeof _69.StorageTypeSDKType;
            ModuleSchemaDescriptor: {
                encode(message: _69.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.ModuleSchemaDescriptor;
                fromPartial(object: {
                    schemaFile?: {
                        id?: number;
                        protoFileName?: string;
                        storageType?: _69.StorageType;
                    }[];
                    prefix?: Uint8Array;
                }): _69.ModuleSchemaDescriptor;
                fromSDK(object: _69.ModuleSchemaDescriptorSDKType): _69.ModuleSchemaDescriptor;
                toSDK(message: _69.ModuleSchemaDescriptor): _69.ModuleSchemaDescriptorSDKType;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _69.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: {
                    id?: number;
                    protoFileName?: string;
                    storageType?: _69.StorageType;
                }): _69.ModuleSchemaDescriptor_FileEntry;
                fromSDK(object: _69.ModuleSchemaDescriptor_FileEntrySDKType): _69.ModuleSchemaDescriptor_FileEntry;
                toSDK(message: _69.ModuleSchemaDescriptor_FileEntry): _69.ModuleSchemaDescriptor_FileEntrySDKType;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _235.QueryClientImpl;
            LCDQueryClient: typeof _218.LCDQueryClient;
            QueryParamsRequest: {
                encode(message: _71.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryParamsRequest;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                }): _71.QueryParamsRequest;
                fromSDK(object: _71.QueryParamsRequestSDKType): _71.QueryParamsRequest;
                toSDK(message: _71.QueryParamsRequest): _71.QueryParamsRequestSDKType;
            };
            QueryParamsResponse: {
                encode(message: _71.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryParamsResponseSDKType;
                fromPartial(object: {
                    param?: {
                        subspace?: string;
                        key?: string;
                        value?: string;
                    };
                }): _71.QueryParamsResponse;
                fromSDK(object: _71.QueryParamsResponseSDKType): _71.QueryParamsResponse;
                toSDK(message: _71.QueryParamsResponse): _71.QueryParamsResponseSDKType;
            };
            QuerySubspacesRequest: {
                encode(_: _71.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QuerySubspacesRequest;
                fromPartial(_: {}): _71.QuerySubspacesRequest;
                fromSDK(_: _71.QuerySubspacesRequestSDKType): _71.QuerySubspacesRequest;
                toSDK(_: _71.QuerySubspacesRequest): _71.QuerySubspacesRequestSDKType;
            };
            QuerySubspacesResponse: {
                encode(message: _71.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QuerySubspacesResponseSDKType;
                fromPartial(object: {
                    subspaces?: {
                        subspace?: string;
                        keys?: string[];
                    }[];
                }): _71.QuerySubspacesResponse;
                fromSDK(object: _71.QuerySubspacesResponseSDKType): _71.QuerySubspacesResponse;
                toSDK(message: _71.QuerySubspacesResponse): _71.QuerySubspacesResponseSDKType;
            };
            Subspace: {
                encode(message: _71.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.Subspace;
                fromPartial(object: {
                    subspace?: string;
                    keys?: string[];
                }): _71.Subspace;
                fromSDK(object: _71.SubspaceSDKType): _71.Subspace;
                toSDK(message: _71.Subspace): _71.SubspaceSDKType;
            };
            ParameterChangeProposal: {
                encode(message: _70.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.ParameterChangeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    changes?: {
                        subspace?: string;
                        key?: string;
                        value?: string;
                    }[];
                }): _70.ParameterChangeProposal;
                fromSDK(object: _70.ParameterChangeProposalSDKType): _70.ParameterChangeProposal;
                toSDK(message: _70.ParameterChangeProposal): _70.ParameterChangeProposalSDKType;
            };
            ParamChange: {
                encode(message: _70.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.ParamChange;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                    value?: string;
                }): _70.ParamChange;
                fromSDK(object: _70.ParamChangeSDKType): _70.ParamChange;
                toSDK(message: _70.ParamChange): _70.ParamChangeSDKType;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _249.MsgClientImpl;
            QueryClientImpl: typeof _236.QueryClientImpl;
            LCDQueryClient: typeof _219.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _75.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _75.MsgUnjail): {
                        typeUrl: string;
                        value: _75.MsgUnjail;
                    };
                };
                toJSON: {
                    unjail(value: _75.MsgUnjail): {
                        typeUrl: string;
                        value: any;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                };
                fromPartial: {
                    unjail(value: _75.MsgUnjail): {
                        typeUrl: string;
                        value: _75.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _75.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _75.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _75.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgUnjail;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _75.MsgUnjail;
                fromSDK(object: _75.MsgUnjailSDKType): _75.MsgUnjail;
                toSDK(message: _75.MsgUnjail): _75.MsgUnjailSDKType;
            };
            MsgUnjailResponse: {
                encode(_: _75.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgUnjailResponseSDKType;
                fromPartial(_: {}): _75.MsgUnjailResponse;
                fromSDK(_: _75.MsgUnjailResponseSDKType): _75.MsgUnjailResponse;
                toSDK(_: _75.MsgUnjailResponse): _75.MsgUnjailResponseSDKType;
            };
            ValidatorSigningInfo: {
                encode(message: _74.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.ValidatorSigningInfo;
                fromPartial(object: {
                    address?: string;
                    startHeight?: any;
                    indexOffset?: any;
                    jailedUntil?: Date;
                    tombstoned?: boolean;
                    missedBlocksCounter?: any;
                }): _74.ValidatorSigningInfo;
                fromSDK(object: _74.ValidatorSigningInfoSDKType): _74.ValidatorSigningInfo;
                toSDK(message: _74.ValidatorSigningInfo): _74.ValidatorSigningInfoSDKType;
            };
            Params: {
                encode(message: _74.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.Params;
                fromPartial(object: {
                    signedBlocksWindow?: any;
                    minSignedPerWindow?: Uint8Array;
                    downtimeJailDuration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    slashFractionDoubleSign?: Uint8Array;
                    slashFractionDowntime?: Uint8Array;
                }): _74.Params;
                fromSDK(object: _74.ParamsSDKType): _74.Params;
                toSDK(message: _74.Params): _74.ParamsSDKType;
            };
            QueryParamsRequest: {
                encode(_: _73.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryParamsRequest;
                fromPartial(_: {}): _73.QueryParamsRequest;
                fromSDK(_: _73.QueryParamsRequestSDKType): _73.QueryParamsRequest;
                toSDK(_: _73.QueryParamsRequest): _73.QueryParamsRequestSDKType;
            };
            QueryParamsResponse: {
                encode(message: _73.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryParamsResponseSDKType;
                fromPartial(object: {
                    params?: {
                        signedBlocksWindow?: any;
                        minSignedPerWindow?: Uint8Array;
                        downtimeJailDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        slashFractionDoubleSign?: Uint8Array;
                        slashFractionDowntime?: Uint8Array;
                    };
                }): _73.QueryParamsResponse;
                fromSDK(object: _73.QueryParamsResponseSDKType): _73.QueryParamsResponse;
                toSDK(message: _73.QueryParamsResponse): _73.QueryParamsResponseSDKType;
            };
            QuerySigningInfoRequest: {
                encode(message: _73.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QuerySigningInfoRequest;
                fromPartial(object: {
                    consAddress?: string;
                }): _73.QuerySigningInfoRequest;
                fromSDK(object: _73.QuerySigningInfoRequestSDKType): _73.QuerySigningInfoRequest;
                toSDK(message: _73.QuerySigningInfoRequest): _73.QuerySigningInfoRequestSDKType;
            };
            QuerySigningInfoResponse: {
                encode(message: _73.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QuerySigningInfoResponseSDKType;
                fromPartial(object: {
                    valSigningInfo?: {
                        address?: string;
                        startHeight?: any;
                        indexOffset?: any;
                        jailedUntil?: Date;
                        tombstoned?: boolean;
                        missedBlocksCounter?: any;
                    };
                }): _73.QuerySigningInfoResponse;
                fromSDK(object: _73.QuerySigningInfoResponseSDKType): _73.QuerySigningInfoResponse;
                toSDK(message: _73.QuerySigningInfoResponse): _73.QuerySigningInfoResponseSDKType;
            };
            QuerySigningInfosRequest: {
                encode(message: _73.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QuerySigningInfosRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _73.QuerySigningInfosRequest;
                fromSDK(object: _73.QuerySigningInfosRequestSDKType): _73.QuerySigningInfosRequest;
                toSDK(message: _73.QuerySigningInfosRequest): _73.QuerySigningInfosRequestSDKType;
            };
            QuerySigningInfosResponse: {
                encode(message: _73.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QuerySigningInfosResponseSDKType;
                fromPartial(object: {
                    info?: {
                        address?: string;
                        startHeight?: any;
                        indexOffset?: any;
                        jailedUntil?: Date;
                        tombstoned?: boolean;
                        missedBlocksCounter?: any;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _73.QuerySigningInfosResponse;
                fromSDK(object: _73.QuerySigningInfosResponseSDKType): _73.QuerySigningInfosResponse;
                toSDK(message: _73.QuerySigningInfosResponse): _73.QuerySigningInfosResponseSDKType;
            };
            GenesisState: {
                encode(message: _72.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.GenesisState;
                fromPartial(object: {
                    params?: {
                        signedBlocksWindow?: any;
                        minSignedPerWindow?: Uint8Array;
                        downtimeJailDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        slashFractionDoubleSign?: Uint8Array;
                        slashFractionDowntime?: Uint8Array;
                    };
                    signingInfos?: {
                        address?: string;
                        validatorSigningInfo?: {
                            address?: string;
                            startHeight?: any;
                            indexOffset?: any;
                            jailedUntil?: Date;
                            tombstoned?: boolean;
                            missedBlocksCounter?: any;
                        };
                    }[];
                    missedBlocks?: {
                        address?: string;
                        missedBlocks?: {
                            index?: any;
                            missed?: boolean;
                        }[];
                    }[];
                }): _72.GenesisState;
                fromSDK(object: _72.GenesisStateSDKType): _72.GenesisState;
                toSDK(message: _72.GenesisState): _72.GenesisStateSDKType;
            };
            SigningInfo: {
                encode(message: _72.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.SigningInfo;
                fromPartial(object: {
                    address?: string;
                    validatorSigningInfo?: {
                        address?: string;
                        startHeight?: any;
                        indexOffset?: any;
                        jailedUntil?: Date;
                        tombstoned?: boolean;
                        missedBlocksCounter?: any;
                    };
                }): _72.SigningInfo;
                fromSDK(object: _72.SigningInfoSDKType): _72.SigningInfo;
                toSDK(message: _72.SigningInfo): _72.SigningInfoSDKType;
            };
            ValidatorMissedBlocks: {
                encode(message: _72.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.ValidatorMissedBlocks;
                fromPartial(object: {
                    address?: string;
                    missedBlocks?: {
                        index?: any;
                        missed?: boolean;
                    }[];
                }): _72.ValidatorMissedBlocks;
                fromSDK(object: _72.ValidatorMissedBlocksSDKType): _72.ValidatorMissedBlocks;
                toSDK(message: _72.ValidatorMissedBlocks): _72.ValidatorMissedBlocksSDKType;
            };
            MissedBlock: {
                encode(message: _72.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.MissedBlock;
                fromPartial(object: {
                    index?: any;
                    missed?: boolean;
                }): _72.MissedBlock;
                fromSDK(object: _72.MissedBlockSDKType): _72.MissedBlock;
                toSDK(message: _72.MissedBlock): _72.MissedBlockSDKType;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _250.MsgClientImpl;
            QueryClientImpl: typeof _237.QueryClientImpl;
            LCDQueryClient: typeof _220.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _80.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _80.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _80.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _80.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _80.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _80.MsgCreateValidator): {
                        typeUrl: string;
                        value: _80.MsgCreateValidator;
                    };
                    editValidator(value: _80.MsgEditValidator): {
                        typeUrl: string;
                        value: _80.MsgEditValidator;
                    };
                    delegate(value: _80.MsgDelegate): {
                        typeUrl: string;
                        value: _80.MsgDelegate;
                    };
                    beginRedelegate(value: _80.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _80.MsgBeginRedelegate;
                    };
                    undelegate(value: _80.MsgUndelegate): {
                        typeUrl: string;
                        value: _80.MsgUndelegate;
                    };
                };
                toJSON: {
                    createValidator(value: _80.MsgCreateValidator): {
                        typeUrl: string;
                        value: any;
                    };
                    editValidator(value: _80.MsgEditValidator): {
                        typeUrl: string;
                        value: any;
                    };
                    delegate(value: _80.MsgDelegate): {
                        typeUrl: string;
                        value: any;
                    };
                    beginRedelegate(value: _80.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: any;
                    };
                    undelegate(value: _80.MsgUndelegate): {
                        typeUrl: string;
                        value: any;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                };
                fromPartial: {
                    createValidator(value: _80.MsgCreateValidator): {
                        typeUrl: string;
                        value: _80.MsgCreateValidator;
                    };
                    editValidator(value: _80.MsgEditValidator): {
                        typeUrl: string;
                        value: _80.MsgEditValidator;
                    };
                    delegate(value: _80.MsgDelegate): {
                        typeUrl: string;
                        value: _80.MsgDelegate;
                    };
                    beginRedelegate(value: _80.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _80.MsgBeginRedelegate;
                    };
                    undelegate(value: _80.MsgUndelegate): {
                        typeUrl: string;
                        value: _80.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _80.MsgCreateValidator) => {
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
                    }) => _80.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _80.MsgEditValidator) => {
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
                    }) => _80.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _80.MsgDelegate) => {
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
                    }) => _80.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _80.MsgBeginRedelegate) => {
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
                    }) => _80.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _80.MsgUndelegate) => {
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
                    }) => _80.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _80.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgCreateValidator;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    commission?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    minSelfDelegation?: string;
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    pubkey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    value?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _80.MsgCreateValidator;
                fromSDK(object: _80.MsgCreateValidatorSDKType): _80.MsgCreateValidator;
                toSDK(message: _80.MsgCreateValidator): _80.MsgCreateValidatorSDKType;
            };
            MsgCreateValidatorResponse: {
                encode(_: _80.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgCreateValidatorResponseSDKType;
                fromPartial(_: {}): _80.MsgCreateValidatorResponse;
                fromSDK(_: _80.MsgCreateValidatorResponseSDKType): _80.MsgCreateValidatorResponse;
                toSDK(_: _80.MsgCreateValidatorResponse): _80.MsgCreateValidatorResponseSDKType;
            };
            MsgEditValidator: {
                encode(message: _80.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgEditValidator;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    validatorAddress?: string;
                    commissionRate?: string;
                    minSelfDelegation?: string;
                }): _80.MsgEditValidator;
                fromSDK(object: _80.MsgEditValidatorSDKType): _80.MsgEditValidator;
                toSDK(message: _80.MsgEditValidator): _80.MsgEditValidatorSDKType;
            };
            MsgEditValidatorResponse: {
                encode(_: _80.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgEditValidatorResponseSDKType;
                fromPartial(_: {}): _80.MsgEditValidatorResponse;
                fromSDK(_: _80.MsgEditValidatorResponseSDKType): _80.MsgEditValidatorResponse;
                toSDK(_: _80.MsgEditValidatorResponse): _80.MsgEditValidatorResponseSDKType;
            };
            MsgDelegate: {
                encode(message: _80.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgDelegate;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _80.MsgDelegate;
                fromSDK(object: _80.MsgDelegateSDKType): _80.MsgDelegate;
                toSDK(message: _80.MsgDelegate): _80.MsgDelegateSDKType;
            };
            MsgDelegateResponse: {
                encode(_: _80.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgDelegateResponseSDKType;
                fromPartial(_: {}): _80.MsgDelegateResponse;
                fromSDK(_: _80.MsgDelegateResponseSDKType): _80.MsgDelegateResponse;
                toSDK(_: _80.MsgDelegateResponse): _80.MsgDelegateResponseSDKType;
            };
            MsgBeginRedelegate: {
                encode(message: _80.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgBeginRedelegate;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _80.MsgBeginRedelegate;
                fromSDK(object: _80.MsgBeginRedelegateSDKType): _80.MsgBeginRedelegate;
                toSDK(message: _80.MsgBeginRedelegate): _80.MsgBeginRedelegateSDKType;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _80.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgBeginRedelegateResponseSDKType;
                fromPartial(object: {
                    completionTime?: Date;
                }): _80.MsgBeginRedelegateResponse;
                fromSDK(object: _80.MsgBeginRedelegateResponseSDKType): _80.MsgBeginRedelegateResponse;
                toSDK(message: _80.MsgBeginRedelegateResponse): _80.MsgBeginRedelegateResponseSDKType;
            };
            MsgUndelegate: {
                encode(message: _80.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgUndelegate;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _80.MsgUndelegate;
                fromSDK(object: _80.MsgUndelegateSDKType): _80.MsgUndelegate;
                toSDK(message: _80.MsgUndelegate): _80.MsgUndelegateSDKType;
            };
            MsgUndelegateResponse: {
                encode(message: _80.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgUndelegateResponseSDKType;
                fromPartial(object: {
                    completionTime?: Date;
                }): _80.MsgUndelegateResponse;
                fromSDK(object: _80.MsgUndelegateResponseSDKType): _80.MsgUndelegateResponse;
                toSDK(message: _80.MsgUndelegateResponse): _80.MsgUndelegateResponseSDKType;
            };
            bondStatusFromJSON(object: any): _79.BondStatus;
            bondStatusToJSON(object: _79.BondStatus): string;
            BondStatus: typeof _79.BondStatus;
            BondStatusSDKType: typeof _79.BondStatusSDKType;
            HistoricalInfo: {
                encode(message: _79.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.HistoricalInfo;
                fromPartial(object: {
                    header?: {
                        version?: {
                            block?: any;
                            app?: any;
                        };
                        chainId?: string;
                        height?: any;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    valset?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _79.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                }): _79.HistoricalInfo;
                fromSDK(object: _79.HistoricalInfoSDKType): _79.HistoricalInfo;
                toSDK(message: _79.HistoricalInfo): _79.HistoricalInfoSDKType;
            };
            CommissionRates: {
                encode(message: _79.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.CommissionRates;
                fromPartial(object: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                }): _79.CommissionRates;
                fromSDK(object: _79.CommissionRatesSDKType): _79.CommissionRates;
                toSDK(message: _79.CommissionRates): _79.CommissionRatesSDKType;
            };
            Commission: {
                encode(message: _79.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Commission;
                fromPartial(object: {
                    commissionRates?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    updateTime?: Date;
                }): _79.Commission;
                fromSDK(object: _79.CommissionSDKType): _79.Commission;
                toSDK(message: _79.Commission): _79.CommissionSDKType;
            };
            Description: {
                encode(message: _79.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Description;
                fromPartial(object: {
                    moniker?: string;
                    identity?: string;
                    website?: string;
                    securityContact?: string;
                    details?: string;
                }): _79.Description;
                fromSDK(object: _79.DescriptionSDKType): _79.Description;
                toSDK(message: _79.Description): _79.DescriptionSDKType;
            };
            Validator: {
                encode(message: _79.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Validator;
                fromPartial(object: {
                    operatorAddress?: string;
                    consensusPubkey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    jailed?: boolean;
                    status?: _79.BondStatus;
                    tokens?: string;
                    delegatorShares?: string;
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    unbondingHeight?: any;
                    unbondingTime?: Date;
                    commission?: {
                        commissionRates?: {
                            rate?: string;
                            maxRate?: string;
                            maxChangeRate?: string;
                        };
                        updateTime?: Date;
                    };
                    minSelfDelegation?: string;
                }): _79.Validator;
                fromSDK(object: _79.ValidatorSDKType): _79.Validator;
                toSDK(message: _79.Validator): _79.ValidatorSDKType;
            };
            ValAddresses: {
                encode(message: _79.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ValAddresses;
                fromPartial(object: {
                    addresses?: string[];
                }): _79.ValAddresses;
                fromSDK(object: _79.ValAddressesSDKType): _79.ValAddresses;
                toSDK(message: _79.ValAddresses): _79.ValAddressesSDKType;
            };
            DVPair: {
                encode(message: _79.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.DVPair;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _79.DVPair;
                fromSDK(object: _79.DVPairSDKType): _79.DVPair;
                toSDK(message: _79.DVPair): _79.DVPairSDKType;
            };
            DVPairs: {
                encode(message: _79.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.DVPairs;
                fromPartial(object: {
                    pairs?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                    }[];
                }): _79.DVPairs;
                fromSDK(object: _79.DVPairsSDKType): _79.DVPairs;
                toSDK(message: _79.DVPairs): _79.DVPairsSDKType;
            };
            DVVTriplet: {
                encode(message: _79.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.DVVTriplet;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                }): _79.DVVTriplet;
                fromSDK(object: _79.DVVTripletSDKType): _79.DVVTriplet;
                toSDK(message: _79.DVVTriplet): _79.DVVTripletSDKType;
            };
            DVVTriplets: {
                encode(message: _79.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.DVVTriplets;
                fromPartial(object: {
                    triplets?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                    }[];
                }): _79.DVVTriplets;
                fromSDK(object: _79.DVVTripletsSDKType): _79.DVVTriplets;
                toSDK(message: _79.DVVTriplets): _79.DVVTripletsSDKType;
            };
            Delegation: {
                encode(message: _79.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Delegation;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    shares?: string;
                }): _79.Delegation;
                fromSDK(object: _79.DelegationSDKType): _79.Delegation;
                toSDK(message: _79.Delegation): _79.DelegationSDKType;
            };
            UnbondingDelegation: {
                encode(message: _79.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.UnbondingDelegation;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    entries?: {
                        creationHeight?: any;
                        completionTime?: Date;
                        initialBalance?: string;
                        balance?: string;
                    }[];
                }): _79.UnbondingDelegation;
                fromSDK(object: _79.UnbondingDelegationSDKType): _79.UnbondingDelegation;
                toSDK(message: _79.UnbondingDelegation): _79.UnbondingDelegationSDKType;
            };
            UnbondingDelegationEntry: {
                encode(message: _79.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.UnbondingDelegationEntry;
                fromPartial(object: {
                    creationHeight?: any;
                    completionTime?: Date;
                    initialBalance?: string;
                    balance?: string;
                }): _79.UnbondingDelegationEntry;
                fromSDK(object: _79.UnbondingDelegationEntrySDKType): _79.UnbondingDelegationEntry;
                toSDK(message: _79.UnbondingDelegationEntry): _79.UnbondingDelegationEntrySDKType;
            };
            RedelegationEntry: {
                encode(message: _79.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.RedelegationEntry;
                fromPartial(object: {
                    creationHeight?: any;
                    completionTime?: Date;
                    initialBalance?: string;
                    sharesDst?: string;
                }): _79.RedelegationEntry;
                fromSDK(object: _79.RedelegationEntrySDKType): _79.RedelegationEntry;
                toSDK(message: _79.RedelegationEntry): _79.RedelegationEntrySDKType;
            };
            Redelegation: {
                encode(message: _79.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Redelegation;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                    entries?: {
                        creationHeight?: any;
                        completionTime?: Date;
                        initialBalance?: string;
                        sharesDst?: string;
                    }[];
                }): _79.Redelegation;
                fromSDK(object: _79.RedelegationSDKType): _79.Redelegation;
                toSDK(message: _79.Redelegation): _79.RedelegationSDKType;
            };
            Params: {
                encode(message: _79.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Params;
                fromPartial(object: {
                    unbondingTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    maxValidators?: number;
                    maxEntries?: number;
                    historicalEntries?: number;
                    bondDenom?: string;
                    minCommissionRate?: string;
                }): _79.Params;
                fromSDK(object: _79.ParamsSDKType): _79.Params;
                toSDK(message: _79.Params): _79.ParamsSDKType;
            };
            DelegationResponse: {
                encode(message: _79.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.DelegationResponse;
                fromPartial(object: {
                    delegation?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        shares?: string;
                    };
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _79.DelegationResponse;
                fromSDK(object: _79.DelegationResponseSDKType): _79.DelegationResponse;
                toSDK(message: _79.DelegationResponse): _79.DelegationResponseSDKType;
            };
            RedelegationEntryResponse: {
                encode(message: _79.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.RedelegationEntryResponse;
                fromPartial(object: {
                    redelegationEntry?: {
                        creationHeight?: any;
                        completionTime?: Date;
                        initialBalance?: string;
                        sharesDst?: string;
                    };
                    balance?: string;
                }): _79.RedelegationEntryResponse;
                fromSDK(object: _79.RedelegationEntryResponseSDKType): _79.RedelegationEntryResponse;
                toSDK(message: _79.RedelegationEntryResponse): _79.RedelegationEntryResponseSDKType;
            };
            RedelegationResponse: {
                encode(message: _79.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.RedelegationResponse;
                fromPartial(object: {
                    redelegation?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        }[];
                    };
                    entries?: {
                        redelegationEntry?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        };
                        balance?: string;
                    }[];
                }): _79.RedelegationResponse;
                fromSDK(object: _79.RedelegationResponseSDKType): _79.RedelegationResponse;
                toSDK(message: _79.RedelegationResponse): _79.RedelegationResponseSDKType;
            };
            Pool: {
                encode(message: _79.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Pool;
                fromPartial(object: {
                    notBondedTokens?: string;
                    bondedTokens?: string;
                }): _79.Pool;
                fromSDK(object: _79.PoolSDKType): _79.Pool;
                toSDK(message: _79.Pool): _79.PoolSDKType;
            };
            QueryValidatorsRequest: {
                encode(message: _78.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryValidatorsRequest;
                fromPartial(object: {
                    status?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _78.QueryValidatorsRequest;
                fromSDK(object: _78.QueryValidatorsRequestSDKType): _78.QueryValidatorsRequest;
                toSDK(message: _78.QueryValidatorsRequest): _78.QueryValidatorsRequestSDKType;
            };
            QueryValidatorsResponse: {
                encode(message: _78.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryValidatorsResponseSDKType;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _79.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _78.QueryValidatorsResponse;
                fromSDK(object: _78.QueryValidatorsResponseSDKType): _78.QueryValidatorsResponse;
                toSDK(message: _78.QueryValidatorsResponse): _78.QueryValidatorsResponseSDKType;
            };
            QueryValidatorRequest: {
                encode(message: _78.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryValidatorRequest;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _78.QueryValidatorRequest;
                fromSDK(object: _78.QueryValidatorRequestSDKType): _78.QueryValidatorRequest;
                toSDK(message: _78.QueryValidatorRequest): _78.QueryValidatorRequestSDKType;
            };
            QueryValidatorResponse: {
                encode(message: _78.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryValidatorResponseSDKType;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _79.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    };
                }): _78.QueryValidatorResponse;
                fromSDK(object: _78.QueryValidatorResponseSDKType): _78.QueryValidatorResponse;
                toSDK(message: _78.QueryValidatorResponse): _78.QueryValidatorResponseSDKType;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _78.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryValidatorDelegationsRequest;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _78.QueryValidatorDelegationsRequest;
                fromSDK(object: _78.QueryValidatorDelegationsRequestSDKType): _78.QueryValidatorDelegationsRequest;
                toSDK(message: _78.QueryValidatorDelegationsRequest): _78.QueryValidatorDelegationsRequestSDKType;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _78.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryValidatorDelegationsResponseSDKType;
                fromPartial(object: {
                    delegationResponses?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _78.QueryValidatorDelegationsResponse;
                fromSDK(object: _78.QueryValidatorDelegationsResponseSDKType): _78.QueryValidatorDelegationsResponse;
                toSDK(message: _78.QueryValidatorDelegationsResponse): _78.QueryValidatorDelegationsResponseSDKType;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _78.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _78.QueryValidatorUnbondingDelegationsRequest;
                fromSDK(object: _78.QueryValidatorUnbondingDelegationsRequestSDKType): _78.QueryValidatorUnbondingDelegationsRequest;
                toSDK(message: _78.QueryValidatorUnbondingDelegationsRequest): _78.QueryValidatorUnbondingDelegationsRequestSDKType;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _78.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryValidatorUnbondingDelegationsResponseSDKType;
                fromPartial(object: {
                    unbondingResponses?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _78.QueryValidatorUnbondingDelegationsResponse;
                fromSDK(object: _78.QueryValidatorUnbondingDelegationsResponseSDKType): _78.QueryValidatorUnbondingDelegationsResponse;
                toSDK(message: _78.QueryValidatorUnbondingDelegationsResponse): _78.QueryValidatorUnbondingDelegationsResponseSDKType;
            };
            QueryDelegationRequest: {
                encode(message: _78.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryDelegationRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _78.QueryDelegationRequest;
                fromSDK(object: _78.QueryDelegationRequestSDKType): _78.QueryDelegationRequest;
                toSDK(message: _78.QueryDelegationRequest): _78.QueryDelegationRequestSDKType;
            };
            QueryDelegationResponse: {
                encode(message: _78.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryDelegationResponseSDKType;
                fromPartial(object: {
                    delegationResponse?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _78.QueryDelegationResponse;
                fromSDK(object: _78.QueryDelegationResponseSDKType): _78.QueryDelegationResponse;
                toSDK(message: _78.QueryDelegationResponse): _78.QueryDelegationResponseSDKType;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _78.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryUnbondingDelegationRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _78.QueryUnbondingDelegationRequest;
                fromSDK(object: _78.QueryUnbondingDelegationRequestSDKType): _78.QueryUnbondingDelegationRequest;
                toSDK(message: _78.QueryUnbondingDelegationRequest): _78.QueryUnbondingDelegationRequestSDKType;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _78.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryUnbondingDelegationResponseSDKType;
                fromPartial(object: {
                    unbond?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    };
                }): _78.QueryUnbondingDelegationResponse;
                fromSDK(object: _78.QueryUnbondingDelegationResponseSDKType): _78.QueryUnbondingDelegationResponse;
                toSDK(message: _78.QueryUnbondingDelegationResponse): _78.QueryUnbondingDelegationResponseSDKType;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _78.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryDelegatorDelegationsRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _78.QueryDelegatorDelegationsRequest;
                fromSDK(object: _78.QueryDelegatorDelegationsRequestSDKType): _78.QueryDelegatorDelegationsRequest;
                toSDK(message: _78.QueryDelegatorDelegationsRequest): _78.QueryDelegatorDelegationsRequestSDKType;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _78.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryDelegatorDelegationsResponseSDKType;
                fromPartial(object: {
                    delegationResponses?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _78.QueryDelegatorDelegationsResponse;
                fromSDK(object: _78.QueryDelegatorDelegationsResponseSDKType): _78.QueryDelegatorDelegationsResponse;
                toSDK(message: _78.QueryDelegatorDelegationsResponse): _78.QueryDelegatorDelegationsResponseSDKType;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _78.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _78.QueryDelegatorUnbondingDelegationsRequest;
                fromSDK(object: _78.QueryDelegatorUnbondingDelegationsRequestSDKType): _78.QueryDelegatorUnbondingDelegationsRequest;
                toSDK(message: _78.QueryDelegatorUnbondingDelegationsRequest): _78.QueryDelegatorUnbondingDelegationsRequestSDKType;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _78.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryDelegatorUnbondingDelegationsResponseSDKType;
                fromPartial(object: {
                    unbondingResponses?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _78.QueryDelegatorUnbondingDelegationsResponse;
                fromSDK(object: _78.QueryDelegatorUnbondingDelegationsResponseSDKType): _78.QueryDelegatorUnbondingDelegationsResponse;
                toSDK(message: _78.QueryDelegatorUnbondingDelegationsResponse): _78.QueryDelegatorUnbondingDelegationsResponseSDKType;
            };
            QueryRedelegationsRequest: {
                encode(message: _78.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryRedelegationsRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    srcValidatorAddr?: string;
                    dstValidatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _78.QueryRedelegationsRequest;
                fromSDK(object: _78.QueryRedelegationsRequestSDKType): _78.QueryRedelegationsRequest;
                toSDK(message: _78.QueryRedelegationsRequest): _78.QueryRedelegationsRequestSDKType;
            };
            QueryRedelegationsResponse: {
                encode(message: _78.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryRedelegationsResponseSDKType;
                fromPartial(object: {
                    redelegationResponses?: {
                        redelegation?: {
                            delegatorAddress?: string;
                            validatorSrcAddress?: string;
                            validatorDstAddress?: string;
                            entries?: {
                                creationHeight?: any;
                                completionTime?: Date;
                                initialBalance?: string;
                                sharesDst?: string;
                            }[];
                        };
                        entries?: {
                            redelegationEntry?: {
                                creationHeight?: any;
                                completionTime?: Date;
                                initialBalance?: string;
                                sharesDst?: string;
                            };
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _78.QueryRedelegationsResponse;
                fromSDK(object: _78.QueryRedelegationsResponseSDKType): _78.QueryRedelegationsResponse;
                toSDK(message: _78.QueryRedelegationsResponse): _78.QueryRedelegationsResponseSDKType;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _78.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryDelegatorValidatorsRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _78.QueryDelegatorValidatorsRequest;
                fromSDK(object: _78.QueryDelegatorValidatorsRequestSDKType): _78.QueryDelegatorValidatorsRequest;
                toSDK(message: _78.QueryDelegatorValidatorsRequest): _78.QueryDelegatorValidatorsRequestSDKType;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _78.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryDelegatorValidatorsResponseSDKType;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _79.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _78.QueryDelegatorValidatorsResponse;
                fromSDK(object: _78.QueryDelegatorValidatorsResponseSDKType): _78.QueryDelegatorValidatorsResponse;
                toSDK(message: _78.QueryDelegatorValidatorsResponse): _78.QueryDelegatorValidatorsResponseSDKType;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _78.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryDelegatorValidatorRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _78.QueryDelegatorValidatorRequest;
                fromSDK(object: _78.QueryDelegatorValidatorRequestSDKType): _78.QueryDelegatorValidatorRequest;
                toSDK(message: _78.QueryDelegatorValidatorRequest): _78.QueryDelegatorValidatorRequestSDKType;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _78.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryDelegatorValidatorResponseSDKType;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _79.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    };
                }): _78.QueryDelegatorValidatorResponse;
                fromSDK(object: _78.QueryDelegatorValidatorResponseSDKType): _78.QueryDelegatorValidatorResponse;
                toSDK(message: _78.QueryDelegatorValidatorResponse): _78.QueryDelegatorValidatorResponseSDKType;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _78.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryHistoricalInfoRequest;
                fromPartial(object: {
                    height?: any;
                }): _78.QueryHistoricalInfoRequest;
                fromSDK(object: _78.QueryHistoricalInfoRequestSDKType): _78.QueryHistoricalInfoRequest;
                toSDK(message: _78.QueryHistoricalInfoRequest): _78.QueryHistoricalInfoRequestSDKType;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _78.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryHistoricalInfoResponseSDKType;
                fromPartial(object: {
                    hist?: {
                        header?: {
                            version?: {
                                block?: any;
                                app?: any;
                            };
                            chainId?: string;
                            height?: any;
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        valset?: {
                            operatorAddress?: string;
                            consensusPubkey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            jailed?: boolean;
                            status?: _79.BondStatus;
                            tokens?: string;
                            delegatorShares?: string;
                            description?: {
                                moniker?: string;
                                identity?: string;
                                website?: string;
                                securityContact?: string;
                                details?: string;
                            };
                            unbondingHeight?: any;
                            unbondingTime?: Date;
                            commission?: {
                                commissionRates?: {
                                    rate?: string;
                                    maxRate?: string;
                                    maxChangeRate?: string;
                                };
                                updateTime?: Date;
                            };
                            minSelfDelegation?: string;
                        }[];
                    };
                }): _78.QueryHistoricalInfoResponse;
                fromSDK(object: _78.QueryHistoricalInfoResponseSDKType): _78.QueryHistoricalInfoResponse;
                toSDK(message: _78.QueryHistoricalInfoResponse): _78.QueryHistoricalInfoResponseSDKType;
            };
            QueryPoolRequest: {
                encode(_: _78.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryPoolRequest;
                fromPartial(_: {}): _78.QueryPoolRequest;
                fromSDK(_: _78.QueryPoolRequestSDKType): _78.QueryPoolRequest;
                toSDK(_: _78.QueryPoolRequest): _78.QueryPoolRequestSDKType;
            };
            QueryPoolResponse: {
                encode(message: _78.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryPoolResponseSDKType;
                fromPartial(object: {
                    pool?: {
                        notBondedTokens?: string;
                        bondedTokens?: string;
                    };
                }): _78.QueryPoolResponse;
                fromSDK(object: _78.QueryPoolResponseSDKType): _78.QueryPoolResponse;
                toSDK(message: _78.QueryPoolResponse): _78.QueryPoolResponseSDKType;
            };
            QueryParamsRequest: {
                encode(_: _78.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryParamsRequest;
                fromPartial(_: {}): _78.QueryParamsRequest;
                fromSDK(_: _78.QueryParamsRequestSDKType): _78.QueryParamsRequest;
                toSDK(_: _78.QueryParamsRequest): _78.QueryParamsRequestSDKType;
            };
            QueryParamsResponse: {
                encode(message: _78.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryParamsResponseSDKType;
                fromPartial(object: {
                    params?: {
                        unbondingTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        maxValidators?: number;
                        maxEntries?: number;
                        historicalEntries?: number;
                        bondDenom?: string;
                        minCommissionRate?: string;
                    };
                }): _78.QueryParamsResponse;
                fromSDK(object: _78.QueryParamsResponseSDKType): _78.QueryParamsResponse;
                toSDK(message: _78.QueryParamsResponse): _78.QueryParamsResponseSDKType;
            };
            GenesisState: {
                encode(message: _77.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.GenesisState;
                fromPartial(object: {
                    params?: {
                        unbondingTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        maxValidators?: number;
                        maxEntries?: number;
                        historicalEntries?: number;
                        bondDenom?: string;
                        minCommissionRate?: string;
                    };
                    lastTotalPower?: Uint8Array;
                    lastValidatorPowers?: {
                        address?: string;
                        power?: any;
                    }[];
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _79.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    delegations?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        shares?: string;
                    }[];
                    unbondingDelegations?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    redelegations?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        }[];
                    }[];
                    exported?: boolean;
                }): _77.GenesisState;
                fromSDK(object: _77.GenesisStateSDKType): _77.GenesisState;
                toSDK(message: _77.GenesisState): _77.GenesisStateSDKType;
            };
            LastValidatorPower: {
                encode(message: _77.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.LastValidatorPower;
                fromPartial(object: {
                    address?: string;
                    power?: any;
                }): _77.LastValidatorPower;
                fromSDK(object: _77.LastValidatorPowerSDKType): _77.LastValidatorPower;
                toSDK(message: _77.LastValidatorPower): _77.LastValidatorPowerSDKType;
            };
            authorizationTypeFromJSON(object: any): _76.AuthorizationType;
            authorizationTypeToJSON(object: _76.AuthorizationType): string;
            AuthorizationType: typeof _76.AuthorizationType;
            AuthorizationTypeSDKType: typeof _76.AuthorizationTypeSDKType;
            StakeAuthorization: {
                encode(message: _76.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.StakeAuthorization;
                fromPartial(object: {
                    maxTokens?: {
                        denom?: string;
                        amount?: string;
                    };
                    allowList?: {
                        address?: string[];
                    };
                    denyList?: {
                        address?: string[];
                    };
                    authorizationType?: _76.AuthorizationType;
                }): _76.StakeAuthorization;
                fromSDK(object: _76.StakeAuthorizationSDKType): _76.StakeAuthorization;
                toSDK(message: _76.StakeAuthorization): _76.StakeAuthorizationSDKType;
            };
            StakeAuthorization_Validators: {
                encode(message: _76.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.StakeAuthorization_Validators;
                fromPartial(object: {
                    address?: string[];
                }): _76.StakeAuthorization_Validators;
                fromSDK(object: _76.StakeAuthorization_ValidatorsSDKType): _76.StakeAuthorization_Validators;
                toSDK(message: _76.StakeAuthorization_Validators): _76.StakeAuthorization_ValidatorsSDKType;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _81.SignMode;
                signModeToJSON(object: _81.SignMode): string;
                SignMode: typeof _81.SignMode;
                SignModeSDKType: typeof _81.SignModeSDKType;
                SignatureDescriptors: {
                    encode(message: _81.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.SignatureDescriptors;
                    fromPartial(object: {
                        signatures?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            data?: {
                                single?: {
                                    mode?: _81.SignMode;
                                    signature?: Uint8Array;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    signatures?: any[];
                                };
                            };
                            sequence?: any;
                        }[];
                    }): _81.SignatureDescriptors;
                    fromSDK(object: _81.SignatureDescriptorsSDKType): _81.SignatureDescriptors;
                    toSDK(message: _81.SignatureDescriptors): _81.SignatureDescriptorsSDKType;
                };
                SignatureDescriptor: {
                    encode(message: _81.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.SignatureDescriptor;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        data?: {
                            single?: {
                                mode?: _81.SignMode;
                                signature?: Uint8Array;
                            };
                            multi?: {
                                bitarray?: {
                                    extraBitsStored?: number;
                                    elems?: Uint8Array;
                                };
                                signatures?: any[];
                            };
                        };
                        sequence?: any;
                    }): _81.SignatureDescriptor;
                    fromSDK(object: _81.SignatureDescriptorSDKType): _81.SignatureDescriptor;
                    toSDK(message: _81.SignatureDescriptor): _81.SignatureDescriptorSDKType;
                };
                SignatureDescriptor_Data: {
                    encode(message: _81.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.SignatureDescriptor_Data;
                    fromPartial(object: {
                        single?: {
                            mode?: _81.SignMode;
                            signature?: Uint8Array;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            signatures?: any[];
                        };
                    }): _81.SignatureDescriptor_Data;
                    fromSDK(object: _81.SignatureDescriptor_DataSDKType): _81.SignatureDescriptor_Data;
                    toSDK(message: _81.SignatureDescriptor_Data): _81.SignatureDescriptor_DataSDKType;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _81.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.SignatureDescriptor_Data_Single;
                    fromPartial(object: {
                        mode?: _81.SignMode;
                        signature?: Uint8Array;
                    }): _81.SignatureDescriptor_Data_Single;
                    fromSDK(object: _81.SignatureDescriptor_Data_SingleSDKType): _81.SignatureDescriptor_Data_Single;
                    toSDK(message: _81.SignatureDescriptor_Data_Single): _81.SignatureDescriptor_Data_SingleSDKType;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _81.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.SignatureDescriptor_Data_Multi;
                    fromPartial(object: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        signatures?: any[];
                    }): _81.SignatureDescriptor_Data_Multi;
                    fromSDK(object: _81.SignatureDescriptor_Data_MultiSDKType): _81.SignatureDescriptor_Data_Multi;
                    toSDK(message: _81.SignatureDescriptor_Data_Multi): _81.SignatureDescriptor_Data_MultiSDKType;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _238.ServiceClientImpl;
            LCDQueryClient: typeof _221.LCDQueryClient;
            Tx: {
                encode(message: _83.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Tx;
                fromPartial(object: {
                    body?: {
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        memo?: string;
                        timeoutHeight?: any;
                        extensionOptions?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        nonCriticalExtensionOptions?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                    authInfo?: {
                        signerInfos?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            modeInfo?: {
                                single?: {
                                    mode?: _81.SignMode;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    modeInfos?: any[];
                                };
                            };
                            sequence?: any;
                        }[];
                        fee?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            gasLimit?: any;
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
                }): _83.Tx;
                fromSDK(object: _83.TxSDKType): _83.Tx;
                toSDK(message: _83.Tx): _83.TxSDKType;
            };
            TxRaw: {
                encode(message: _83.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.TxRaw;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    signatures?: Uint8Array[];
                }): _83.TxRaw;
                fromSDK(object: _83.TxRawSDKType): _83.TxRaw;
                toSDK(message: _83.TxRaw): _83.TxRawSDKType;
            };
            SignDoc: {
                encode(message: _83.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.SignDoc;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    chainId?: string;
                    accountNumber?: any;
                }): _83.SignDoc;
                fromSDK(object: _83.SignDocSDKType): _83.SignDoc;
                toSDK(message: _83.SignDoc): _83.SignDocSDKType;
            };
            SignDocDirectAux: {
                encode(message: _83.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.SignDocDirectAux;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    chainId?: string;
                    accountNumber?: any;
                    sequence?: any;
                    tip?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        tipper?: string;
                    };
                }): _83.SignDocDirectAux;
                fromSDK(object: _83.SignDocDirectAuxSDKType): _83.SignDocDirectAux;
                toSDK(message: _83.SignDocDirectAux): _83.SignDocDirectAuxSDKType;
            };
            TxBody: {
                encode(message: _83.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.TxBody;
                fromPartial(object: {
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    memo?: string;
                    timeoutHeight?: any;
                    extensionOptions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    nonCriticalExtensionOptions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _83.TxBody;
                fromSDK(object: _83.TxBodySDKType): _83.TxBody;
                toSDK(message: _83.TxBody): _83.TxBodySDKType;
            };
            AuthInfo: {
                encode(message: _83.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.AuthInfo;
                fromPartial(object: {
                    signerInfos?: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        modeInfo?: {
                            single?: {
                                mode?: _81.SignMode;
                            };
                            multi?: {
                                bitarray?: {
                                    extraBitsStored?: number;
                                    elems?: Uint8Array;
                                };
                                modeInfos?: any[];
                            };
                        };
                        sequence?: any;
                    }[];
                    fee?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        gasLimit?: any;
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
                }): _83.AuthInfo;
                fromSDK(object: _83.AuthInfoSDKType): _83.AuthInfo;
                toSDK(message: _83.AuthInfo): _83.AuthInfoSDKType;
            };
            SignerInfo: {
                encode(message: _83.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.SignerInfo;
                fromPartial(object: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: _81.SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                }): _83.SignerInfo;
                fromSDK(object: _83.SignerInfoSDKType): _83.SignerInfo;
                toSDK(message: _83.SignerInfo): _83.SignerInfoSDKType;
            };
            ModeInfo: {
                encode(message: _83.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ModeInfo;
                fromPartial(object: {
                    single?: {
                        mode?: _81.SignMode;
                    };
                    multi?: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        modeInfos?: any[];
                    };
                }): _83.ModeInfo;
                fromSDK(object: _83.ModeInfoSDKType): _83.ModeInfo;
                toSDK(message: _83.ModeInfo): _83.ModeInfoSDKType;
            };
            ModeInfo_Single: {
                encode(message: _83.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ModeInfo_Single;
                fromPartial(object: {
                    mode?: _81.SignMode;
                }): _83.ModeInfo_Single;
                fromSDK(object: _83.ModeInfo_SingleSDKType): _83.ModeInfo_Single;
                toSDK(message: _83.ModeInfo_Single): _83.ModeInfo_SingleSDKType;
            };
            ModeInfo_Multi: {
                encode(message: _83.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ModeInfo_Multi;
                fromPartial(object: {
                    bitarray?: {
                        extraBitsStored?: number;
                        elems?: Uint8Array;
                    };
                    modeInfos?: any[];
                }): _83.ModeInfo_Multi;
                fromSDK(object: _83.ModeInfo_MultiSDKType): _83.ModeInfo_Multi;
                toSDK(message: _83.ModeInfo_Multi): _83.ModeInfo_MultiSDKType;
            };
            Fee: {
                encode(message: _83.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Fee;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: any;
                    payer?: string;
                    granter?: string;
                }): _83.Fee;
                fromSDK(object: _83.FeeSDKType): _83.Fee;
                toSDK(message: _83.Fee): _83.FeeSDKType;
            };
            Tip: {
                encode(message: _83.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Tip;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                }): _83.Tip;
                fromSDK(object: _83.TipSDKType): _83.Tip;
                toSDK(message: _83.Tip): _83.TipSDKType;
            };
            AuxSignerData: {
                encode(message: _83.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.AuxSignerData;
                fromPartial(object: {
                    address?: string;
                    signDoc?: {
                        bodyBytes?: Uint8Array;
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        chainId?: string;
                        accountNumber?: any;
                        sequence?: any;
                        tip?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tipper?: string;
                        };
                    };
                    mode?: _81.SignMode;
                    sig?: Uint8Array;
                }): _83.AuxSignerData;
                fromSDK(object: _83.AuxSignerDataSDKType): _83.AuxSignerData;
                toSDK(message: _83.AuxSignerData): _83.AuxSignerDataSDKType;
            };
            orderByFromJSON(object: any): _82.OrderBy;
            orderByToJSON(object: _82.OrderBy): string;
            broadcastModeFromJSON(object: any): _82.BroadcastMode;
            broadcastModeToJSON(object: _82.BroadcastMode): string;
            OrderBy: typeof _82.OrderBy;
            OrderBySDKType: typeof _82.OrderBySDKType;
            BroadcastMode: typeof _82.BroadcastMode;
            BroadcastModeSDKType: typeof _82.BroadcastModeSDKType;
            GetTxsEventRequest: {
                encode(message: _82.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.GetTxsEventRequest;
                fromPartial(object: {
                    events?: string[];
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                    orderBy?: _82.OrderBy;
                }): _82.GetTxsEventRequest;
                fromSDK(object: _82.GetTxsEventRequestSDKType): _82.GetTxsEventRequest;
                toSDK(message: _82.GetTxsEventRequest): _82.GetTxsEventRequestSDKType;
            };
            GetTxsEventResponse: {
                encode(message: _82.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.GetTxsEventResponseSDKType;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: any;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _81.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: any;
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
                    txResponses?: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
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
                        gasWanted?: any;
                        gasUsed?: any;
                        tx?: {
                            typeUrl?: string;
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
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _82.GetTxsEventResponse;
                fromSDK(object: _82.GetTxsEventResponseSDKType): _82.GetTxsEventResponse;
                toSDK(message: _82.GetTxsEventResponse): _82.GetTxsEventResponseSDKType;
            };
            BroadcastTxRequest: {
                encode(message: _82.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.BroadcastTxRequest;
                fromPartial(object: {
                    txBytes?: Uint8Array;
                    mode?: _82.BroadcastMode;
                }): _82.BroadcastTxRequest;
                fromSDK(object: _82.BroadcastTxRequestSDKType): _82.BroadcastTxRequest;
                toSDK(message: _82.BroadcastTxRequest): _82.BroadcastTxRequestSDKType;
            };
            BroadcastTxResponse: {
                encode(message: _82.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.BroadcastTxResponseSDKType;
                fromPartial(object: {
                    txResponse?: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
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
                        gasWanted?: any;
                        gasUsed?: any;
                        tx?: {
                            typeUrl?: string;
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
                }): _82.BroadcastTxResponse;
                fromSDK(object: _82.BroadcastTxResponseSDKType): _82.BroadcastTxResponse;
                toSDK(message: _82.BroadcastTxResponse): _82.BroadcastTxResponseSDKType;
            };
            SimulateRequest: {
                encode(message: _82.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.SimulateRequest;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: any;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _81.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: any;
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
                    txBytes?: Uint8Array;
                }): _82.SimulateRequest;
                fromSDK(object: _82.SimulateRequestSDKType): _82.SimulateRequest;
                toSDK(message: _82.SimulateRequest): _82.SimulateRequestSDKType;
            };
            SimulateResponse: {
                encode(message: _82.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.SimulateResponseSDKType;
                fromPartial(object: {
                    gasInfo?: {
                        gasWanted?: any;
                        gasUsed?: any;
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
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                }): _82.SimulateResponse;
                fromSDK(object: _82.SimulateResponseSDKType): _82.SimulateResponse;
                toSDK(message: _82.SimulateResponse): _82.SimulateResponseSDKType;
            };
            GetTxRequest: {
                encode(message: _82.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.GetTxRequest;
                fromPartial(object: {
                    hash?: string;
                }): _82.GetTxRequest;
                fromSDK(object: _82.GetTxRequestSDKType): _82.GetTxRequest;
                toSDK(message: _82.GetTxRequest): _82.GetTxRequestSDKType;
            };
            GetTxResponse: {
                encode(message: _82.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.GetTxResponseSDKType;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: any;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _81.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: any;
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
                    txResponse?: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
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
                        gasWanted?: any;
                        gasUsed?: any;
                        tx?: {
                            typeUrl?: string;
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
                }): _82.GetTxResponse;
                fromSDK(object: _82.GetTxResponseSDKType): _82.GetTxResponse;
                toSDK(message: _82.GetTxResponse): _82.GetTxResponseSDKType;
            };
            GetBlockWithTxsRequest: {
                encode(message: _82.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.GetBlockWithTxsRequest;
                fromPartial(object: {
                    height?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _82.GetBlockWithTxsRequest;
                fromSDK(object: _82.GetBlockWithTxsRequestSDKType): _82.GetBlockWithTxsRequest;
                toSDK(message: _82.GetBlockWithTxsRequest): _82.GetBlockWithTxsRequestSDKType;
            };
            GetBlockWithTxsResponse: {
                encode(message: _82.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.GetBlockWithTxsResponseSDKType;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: any;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _81.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: any;
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
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
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
                            chainId?: string;
                            height?: any;
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        data?: {
                            txs?: Uint8Array[];
                        };
                        evidence?: {
                            evidence?: {
                                duplicateVoteEvidence?: {
                                    voteA?: {
                                        type?: import("../tendermint/types/types").SignedMsgType;
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        timestamp?: Date;
                                        validatorAddress?: Uint8Array;
                                        validatorIndex?: number;
                                        signature?: Uint8Array;
                                    };
                                    voteB?: {
                                        type?: import("../tendermint/types/types").SignedMsgType;
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        timestamp?: Date;
                                        validatorAddress?: Uint8Array;
                                        validatorIndex?: number;
                                        signature?: Uint8Array;
                                    };
                                    totalVotingPower?: any;
                                    validatorPower?: any;
                                    timestamp?: Date;
                                };
                                lightClientAttackEvidence?: {
                                    conflictingBlock?: {
                                        signedHeader?: {
                                            header?: {
                                                version?: {
                                                    block?: any;
                                                    app?: any;
                                                };
                                                chainId?: string;
                                                height?: any;
                                                time?: Date;
                                                lastBlockId?: {
                                                    hash?: Uint8Array;
                                                    partSetHeader?: {
                                                        total?: number;
                                                        hash?: Uint8Array;
                                                    };
                                                };
                                                lastCommitHash?: Uint8Array;
                                                dataHash?: Uint8Array;
                                                validatorsHash?: Uint8Array;
                                                nextValidatorsHash?: Uint8Array;
                                                consensusHash?: Uint8Array;
                                                appHash?: Uint8Array;
                                                lastResultsHash?: Uint8Array;
                                                evidenceHash?: Uint8Array;
                                                proposerAddress?: Uint8Array;
                                            };
                                            commit?: {
                                                height?: any;
                                                round?: number;
                                                blockId?: {
                                                    hash?: Uint8Array;
                                                    partSetHeader?: {
                                                        total?: number;
                                                        hash?: Uint8Array;
                                                    };
                                                };
                                                signatures?: {
                                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                                    validatorAddress?: Uint8Array;
                                                    timestamp?: Date;
                                                    signature?: Uint8Array;
                                                }[];
                                            };
                                        };
                                        validatorSet?: {
                                            validators?: {
                                                address?: Uint8Array;
                                                pubKey?: {
                                                    ed25519?: Uint8Array;
                                                    secp256k1?: Uint8Array;
                                                };
                                                votingPower?: any;
                                                proposerPriority?: any;
                                            }[];
                                            proposer?: {
                                                address?: Uint8Array;
                                                pubKey?: {
                                                    ed25519?: Uint8Array;
                                                    secp256k1?: Uint8Array;
                                                };
                                                votingPower?: any;
                                                proposerPriority?: any;
                                            };
                                            totalVotingPower?: any;
                                        };
                                    };
                                    commonHeight?: any;
                                    byzantineValidators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    }[];
                                    totalVotingPower?: any;
                                    timestamp?: Date;
                                };
                            }[];
                        };
                        lastCommit?: {
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[];
                        };
                    };
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _82.GetBlockWithTxsResponse;
                fromSDK(object: _82.GetBlockWithTxsResponseSDKType): _82.GetBlockWithTxsResponse;
                toSDK(message: _82.GetBlockWithTxsResponse): _82.GetBlockWithTxsResponseSDKType;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _251.MsgClientImpl;
            QueryClientImpl: typeof _239.QueryClientImpl;
            LCDQueryClient: typeof _222.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _85.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _85.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _85.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _85.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _85.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _85.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _85.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: any;
                    };
                    cancelUpgrade(value: _85.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: any;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _85.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _85.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _85.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _85.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _85.MsgSoftwareUpgrade) => {
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
                    }) => _85.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _85.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _85.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _86.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Plan;
                fromPartial(object: {
                    name?: string;
                    time?: Date;
                    height?: any;
                    info?: string;
                    upgradedClientState?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _86.Plan;
                fromSDK(object: _86.PlanSDKType): _86.Plan;
                toSDK(message: _86.Plan): _86.PlanSDKType;
            };
            SoftwareUpgradeProposal: {
                encode(message: _86.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.SoftwareUpgradeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    plan?: {
                        name?: string;
                        time?: Date;
                        height?: any;
                        info?: string;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _86.SoftwareUpgradeProposal;
                fromSDK(object: _86.SoftwareUpgradeProposalSDKType): _86.SoftwareUpgradeProposal;
                toSDK(message: _86.SoftwareUpgradeProposal): _86.SoftwareUpgradeProposalSDKType;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _86.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.CancelSoftwareUpgradeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _86.CancelSoftwareUpgradeProposal;
                fromSDK(object: _86.CancelSoftwareUpgradeProposalSDKType): _86.CancelSoftwareUpgradeProposal;
                toSDK(message: _86.CancelSoftwareUpgradeProposal): _86.CancelSoftwareUpgradeProposalSDKType;
            };
            ModuleVersion: {
                encode(message: _86.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ModuleVersion;
                fromPartial(object: {
                    name?: string;
                    version?: any;
                }): _86.ModuleVersion;
                fromSDK(object: _86.ModuleVersionSDKType): _86.ModuleVersion;
                toSDK(message: _86.ModuleVersion): _86.ModuleVersionSDKType;
            };
            MsgSoftwareUpgrade: {
                encode(message: _85.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgSoftwareUpgrade;
                fromPartial(object: {
                    authority?: string;
                    plan?: {
                        name?: string;
                        time?: Date;
                        height?: any;
                        info?: string;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _85.MsgSoftwareUpgrade;
                fromSDK(object: _85.MsgSoftwareUpgradeSDKType): _85.MsgSoftwareUpgrade;
                toSDK(message: _85.MsgSoftwareUpgrade): _85.MsgSoftwareUpgradeSDKType;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _85.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgSoftwareUpgradeResponseSDKType;
                fromPartial(_: {}): _85.MsgSoftwareUpgradeResponse;
                fromSDK(_: _85.MsgSoftwareUpgradeResponseSDKType): _85.MsgSoftwareUpgradeResponse;
                toSDK(_: _85.MsgSoftwareUpgradeResponse): _85.MsgSoftwareUpgradeResponseSDKType;
            };
            MsgCancelUpgrade: {
                encode(message: _85.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgCancelUpgrade;
                fromPartial(object: {
                    authority?: string;
                }): _85.MsgCancelUpgrade;
                fromSDK(object: _85.MsgCancelUpgradeSDKType): _85.MsgCancelUpgrade;
                toSDK(message: _85.MsgCancelUpgrade): _85.MsgCancelUpgradeSDKType;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _85.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgCancelUpgradeResponseSDKType;
                fromPartial(_: {}): _85.MsgCancelUpgradeResponse;
                fromSDK(_: _85.MsgCancelUpgradeResponseSDKType): _85.MsgCancelUpgradeResponse;
                toSDK(_: _85.MsgCancelUpgradeResponse): _85.MsgCancelUpgradeResponseSDKType;
            };
            QueryCurrentPlanRequest: {
                encode(_: _84.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryCurrentPlanRequest;
                fromPartial(_: {}): _84.QueryCurrentPlanRequest;
                fromSDK(_: _84.QueryCurrentPlanRequestSDKType): _84.QueryCurrentPlanRequest;
                toSDK(_: _84.QueryCurrentPlanRequest): _84.QueryCurrentPlanRequestSDKType;
            };
            QueryCurrentPlanResponse: {
                encode(message: _84.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryCurrentPlanResponseSDKType;
                fromPartial(object: {
                    plan?: {
                        name?: string;
                        time?: Date;
                        height?: any;
                        info?: string;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _84.QueryCurrentPlanResponse;
                fromSDK(object: _84.QueryCurrentPlanResponseSDKType): _84.QueryCurrentPlanResponse;
                toSDK(message: _84.QueryCurrentPlanResponse): _84.QueryCurrentPlanResponseSDKType;
            };
            QueryAppliedPlanRequest: {
                encode(message: _84.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryAppliedPlanRequest;
                fromPartial(object: {
                    name?: string;
                }): _84.QueryAppliedPlanRequest;
                fromSDK(object: _84.QueryAppliedPlanRequestSDKType): _84.QueryAppliedPlanRequest;
                toSDK(message: _84.QueryAppliedPlanRequest): _84.QueryAppliedPlanRequestSDKType;
            };
            QueryAppliedPlanResponse: {
                encode(message: _84.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryAppliedPlanResponseSDKType;
                fromPartial(object: {
                    height?: any;
                }): _84.QueryAppliedPlanResponse;
                fromSDK(object: _84.QueryAppliedPlanResponseSDKType): _84.QueryAppliedPlanResponse;
                toSDK(message: _84.QueryAppliedPlanResponse): _84.QueryAppliedPlanResponseSDKType;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _84.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryUpgradedConsensusStateRequest;
                fromPartial(object: {
                    lastHeight?: any;
                }): _84.QueryUpgradedConsensusStateRequest;
                fromSDK(object: _84.QueryUpgradedConsensusStateRequestSDKType): _84.QueryUpgradedConsensusStateRequest;
                toSDK(message: _84.QueryUpgradedConsensusStateRequest): _84.QueryUpgradedConsensusStateRequestSDKType;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _84.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryUpgradedConsensusStateResponseSDKType;
                fromPartial(object: {
                    upgradedConsensusState?: Uint8Array;
                }): _84.QueryUpgradedConsensusStateResponse;
                fromSDK(object: _84.QueryUpgradedConsensusStateResponseSDKType): _84.QueryUpgradedConsensusStateResponse;
                toSDK(message: _84.QueryUpgradedConsensusStateResponse): _84.QueryUpgradedConsensusStateResponseSDKType;
            };
            QueryModuleVersionsRequest: {
                encode(message: _84.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryModuleVersionsRequest;
                fromPartial(object: {
                    moduleName?: string;
                }): _84.QueryModuleVersionsRequest;
                fromSDK(object: _84.QueryModuleVersionsRequestSDKType): _84.QueryModuleVersionsRequest;
                toSDK(message: _84.QueryModuleVersionsRequest): _84.QueryModuleVersionsRequestSDKType;
            };
            QueryModuleVersionsResponse: {
                encode(message: _84.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryModuleVersionsResponseSDKType;
                fromPartial(object: {
                    moduleVersions?: {
                        name?: string;
                        version?: any;
                    }[];
                }): _84.QueryModuleVersionsResponse;
                fromSDK(object: _84.QueryModuleVersionsResponseSDKType): _84.QueryModuleVersionsResponse;
                toSDK(message: _84.QueryModuleVersionsResponse): _84.QueryModuleVersionsResponseSDKType;
            };
            QueryAuthorityRequest: {
                encode(_: _84.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryAuthorityRequest;
                fromPartial(_: {}): _84.QueryAuthorityRequest;
                fromSDK(_: _84.QueryAuthorityRequestSDKType): _84.QueryAuthorityRequest;
                toSDK(_: _84.QueryAuthorityRequest): _84.QueryAuthorityRequestSDKType;
            };
            QueryAuthorityResponse: {
                encode(message: _84.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryAuthorityResponseSDKType;
                fromPartial(object: {
                    address?: string;
                }): _84.QueryAuthorityResponse;
                fromSDK(object: _84.QueryAuthorityResponseSDKType): _84.QueryAuthorityResponse;
                toSDK(message: _84.QueryAuthorityResponse): _84.QueryAuthorityResponseSDKType;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _252.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _87.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _87.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _87.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _87.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _87.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _87.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _87.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _87.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _87.MsgCreatePeriodicVestingAccount;
                    };
                };
                toJSON: {
                    createVestingAccount(value: _87.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: any;
                    };
                    createPermanentLockedAccount(value: _87.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: any;
                    };
                    createPeriodicVestingAccount(value: _87.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: any;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _87.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _87.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _87.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _87.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _87.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _87.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _87.MsgCreateVestingAccount) => {
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
                    }) => _87.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _87.MsgCreatePermanentLockedAccount) => {
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
                    }) => _87.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _87.MsgCreatePeriodicVestingAccount) => {
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
                    }) => _87.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _88.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.BaseVestingAccount;
                fromPartial(object: {
                    baseAccount?: {
                        address?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        accountNumber?: any;
                        sequence?: any;
                    };
                    originalVesting?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    delegatedFree?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    delegatedVesting?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    endTime?: any;
                }): _88.BaseVestingAccount;
                fromSDK(object: _88.BaseVestingAccountSDKType): _88.BaseVestingAccount;
                toSDK(message: _88.BaseVestingAccount): _88.BaseVestingAccountSDKType;
            };
            ContinuousVestingAccount: {
                encode(message: _88.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ContinuousVestingAccount;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: any;
                            sequence?: any;
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: any;
                    };
                    startTime?: any;
                }): _88.ContinuousVestingAccount;
                fromSDK(object: _88.ContinuousVestingAccountSDKType): _88.ContinuousVestingAccount;
                toSDK(message: _88.ContinuousVestingAccount): _88.ContinuousVestingAccountSDKType;
            };
            DelayedVestingAccount: {
                encode(message: _88.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.DelayedVestingAccount;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: any;
                            sequence?: any;
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: any;
                    };
                }): _88.DelayedVestingAccount;
                fromSDK(object: _88.DelayedVestingAccountSDKType): _88.DelayedVestingAccount;
                toSDK(message: _88.DelayedVestingAccount): _88.DelayedVestingAccountSDKType;
            };
            Period: {
                encode(message: _88.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Period;
                fromPartial(object: {
                    length?: any;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _88.Period;
                fromSDK(object: _88.PeriodSDKType): _88.Period;
                toSDK(message: _88.Period): _88.PeriodSDKType;
            };
            PeriodicVestingAccount: {
                encode(message: _88.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.PeriodicVestingAccount;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: any;
                            sequence?: any;
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: any;
                    };
                    startTime?: any;
                    vestingPeriods?: {
                        length?: any;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _88.PeriodicVestingAccount;
                fromSDK(object: _88.PeriodicVestingAccountSDKType): _88.PeriodicVestingAccount;
                toSDK(message: _88.PeriodicVestingAccount): _88.PeriodicVestingAccountSDKType;
            };
            PermanentLockedAccount: {
                encode(message: _88.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.PermanentLockedAccount;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: any;
                            sequence?: any;
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: any;
                    };
                }): _88.PermanentLockedAccount;
                fromSDK(object: _88.PermanentLockedAccountSDKType): _88.PermanentLockedAccount;
                toSDK(message: _88.PermanentLockedAccount): _88.PermanentLockedAccountSDKType;
            };
            MsgCreateVestingAccount: {
                encode(message: _87.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgCreateVestingAccount;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    endTime?: any;
                    delayed?: boolean;
                }): _87.MsgCreateVestingAccount;
                fromSDK(object: _87.MsgCreateVestingAccountSDKType): _87.MsgCreateVestingAccount;
                toSDK(message: _87.MsgCreateVestingAccount): _87.MsgCreateVestingAccountSDKType;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _87.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgCreateVestingAccountResponseSDKType;
                fromPartial(_: {}): _87.MsgCreateVestingAccountResponse;
                fromSDK(_: _87.MsgCreateVestingAccountResponseSDKType): _87.MsgCreateVestingAccountResponse;
                toSDK(_: _87.MsgCreateVestingAccountResponse): _87.MsgCreateVestingAccountResponseSDKType;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _87.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgCreatePermanentLockedAccount;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _87.MsgCreatePermanentLockedAccount;
                fromSDK(object: _87.MsgCreatePermanentLockedAccountSDKType): _87.MsgCreatePermanentLockedAccount;
                toSDK(message: _87.MsgCreatePermanentLockedAccount): _87.MsgCreatePermanentLockedAccountSDKType;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _87.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgCreatePermanentLockedAccountResponseSDKType;
                fromPartial(_: {}): _87.MsgCreatePermanentLockedAccountResponse;
                fromSDK(_: _87.MsgCreatePermanentLockedAccountResponseSDKType): _87.MsgCreatePermanentLockedAccountResponse;
                toSDK(_: _87.MsgCreatePermanentLockedAccountResponse): _87.MsgCreatePermanentLockedAccountResponseSDKType;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _87.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgCreatePeriodicVestingAccount;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    startTime?: any;
                    vestingPeriods?: {
                        length?: any;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _87.MsgCreatePeriodicVestingAccount;
                fromSDK(object: _87.MsgCreatePeriodicVestingAccountSDKType): _87.MsgCreatePeriodicVestingAccount;
                toSDK(message: _87.MsgCreatePeriodicVestingAccount): _87.MsgCreatePeriodicVestingAccountSDKType;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _87.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgCreatePeriodicVestingAccountResponseSDKType;
                fromPartial(_: {}): _87.MsgCreatePeriodicVestingAccountResponse;
                fromSDK(_: _87.MsgCreatePeriodicVestingAccountResponseSDKType): _87.MsgCreatePeriodicVestingAccountResponse;
                toSDK(_: _87.MsgCreatePeriodicVestingAccountResponse): _87.MsgCreatePeriodicVestingAccountResponseSDKType;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("@osmonauts/helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _240.MsgClientImpl;
                };
                bank: {
                    v1beta1: _241.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _242.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _243.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _244.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _245.MsgClientImpl;
                };
                gov: {
                    v1: _246.MsgClientImpl;
                    v1beta1: _247.MsgClientImpl;
                };
                nft: {
                    v1beta1: _248.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _249.MsgClientImpl;
                };
                staking: {
                    v1beta1: _250.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _251.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _252.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpc }: {
            rpc: import("@osmonauts/helpers").Rpc;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: _223.QueryClientImpl;
                };
                auth: {
                    v1beta1: _224.QueryClientImpl;
                };
                authz: {
                    v1beta1: _225.QueryClientImpl;
                };
                bank: {
                    v1beta1: _226.QueryClientImpl;
                };
                base: {
                    tendermint: {
                        v1beta1: any;
                    };
                };
                distribution: {
                    v1beta1: _228.QueryClientImpl;
                };
                evidence: {
                    v1beta1: _229.QueryClientImpl;
                };
                feegrant: {
                    v1beta1: _230.QueryClientImpl;
                };
                gov: {
                    v1: _231.QueryClientImpl;
                    v1beta1: _232.QueryClientImpl;
                };
                mint: {
                    v1beta1: _233.QueryClientImpl;
                };
                nft: {
                    v1beta1: _234.QueryClientImpl;
                };
                params: {
                    v1beta1: _235.QueryClientImpl;
                };
                slashing: {
                    v1beta1: _236.QueryClientImpl;
                };
                staking: {
                    v1beta1: _237.QueryClientImpl;
                };
                tx: {
                    v1beta1: any;
                };
                upgrade: {
                    v1beta1: _239.QueryClientImpl;
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _207.LCDQueryClient;
                };
                authz: {
                    v1beta1: _208.LCDQueryClient;
                };
                bank: {
                    v1beta1: _209.LCDQueryClient;
                };
                base: {
                    tendermint: {
                        v1beta1: _210.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _211.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _212.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _213.LCDQueryClient;
                };
                gov: {
                    v1: _214.LCDQueryClient;
                    v1beta1: _215.LCDQueryClient;
                };
                mint: {
                    v1beta1: _216.LCDQueryClient;
                };
                nft: {
                    v1beta1: _217.LCDQueryClient;
                };
                params: {
                    v1beta1: _218.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _219.LCDQueryClient;
                };
                staking: {
                    v1beta1: _220.LCDQueryClient;
                };
                tx: {
                    v1beta1: _221.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _222.LCDQueryClient;
                };
            };
        }>;
    };
}
