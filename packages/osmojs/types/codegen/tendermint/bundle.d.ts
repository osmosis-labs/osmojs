import * as _170 from "./abci/types";
import * as _171 from "./crypto/keys";
import * as _172 from "./crypto/proof";
import * as _173 from "./libs/bits/types";
import * as _174 from "./p2p/types";
import * as _175 from "./types/block";
import * as _176 from "./types/evidence";
import * as _177 from "./types/params";
import * as _178 from "./types/types";
import * as _179 from "./types/validator";
import * as _180 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _170.CheckTxType;
        checkTxTypeToJSON(object: _170.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _170.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _170.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _170.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _170.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _170.EvidenceType;
        evidenceTypeToJSON(object: _170.EvidenceType): string;
        CheckTxType: typeof _170.CheckTxType;
        CheckTxTypeSDKType: typeof _170.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _170.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _170.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _170.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _170.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _170.EvidenceType;
        EvidenceTypeSDKType: typeof _170.EvidenceTypeSDKType;
        Request: {
            encode(message: _170.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.Request;
            fromPartial(object: {
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    version?: string;
                    blockVersion?: any;
                    p2pVersion?: any;
                };
                setOption?: {
                    key?: string;
                    value?: string;
                };
                initChain?: {
                    time?: Date;
                    chainId?: string;
                    consensusParams?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    appStateBytes?: Uint8Array;
                    initialHeight?: any;
                };
                query?: {
                    data?: Uint8Array;
                    path?: string;
                    height?: any;
                    prove?: boolean;
                };
                beginBlock?: {
                    hash?: Uint8Array;
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
                    lastCommitInfo?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: any;
                            };
                            signedLastBlock?: boolean;
                        }[];
                    };
                    byzantineValidators?: {
                        type?: _170.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        height?: any;
                        time?: Date;
                        totalVotingPower?: any;
                    }[];
                };
                checkTx?: {
                    tx?: Uint8Array;
                    type?: _170.CheckTxType;
                };
                deliverTx?: {
                    tx?: Uint8Array;
                };
                endBlock?: {
                    height?: any;
                };
                commit?: {};
                listSnapshots?: {};
                offerSnapshot?: {
                    snapshot?: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    };
                    appHash?: Uint8Array;
                };
                loadSnapshotChunk?: {
                    height?: any;
                    format?: number;
                    chunk?: number;
                };
                applySnapshotChunk?: {
                    index?: number;
                    chunk?: Uint8Array;
                    sender?: string;
                };
            }): _170.Request;
            fromSDK(object: _170.RequestSDKType): _170.Request;
            toSDK(message: _170.Request): _170.RequestSDKType;
        };
        RequestEcho: {
            encode(message: _170.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.RequestEcho;
            fromPartial(object: {
                message?: string;
            }): _170.RequestEcho;
            fromSDK(object: _170.RequestEchoSDKType): _170.RequestEcho;
            toSDK(message: _170.RequestEcho): _170.RequestEchoSDKType;
        };
        RequestFlush: {
            encode(_: _170.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.RequestFlush;
            fromPartial(_: {}): _170.RequestFlush;
            fromSDK(_: _170.RequestFlushSDKType): _170.RequestFlush;
            toSDK(_: _170.RequestFlush): _170.RequestFlushSDKType;
        };
        RequestInfo: {
            encode(message: _170.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.RequestInfo;
            fromPartial(object: {
                version?: string;
                blockVersion?: any;
                p2pVersion?: any;
            }): _170.RequestInfo;
            fromSDK(object: _170.RequestInfoSDKType): _170.RequestInfo;
            toSDK(message: _170.RequestInfo): _170.RequestInfoSDKType;
        };
        RequestSetOption: {
            encode(message: _170.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.RequestSetOption;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _170.RequestSetOption;
            fromSDK(object: _170.RequestSetOptionSDKType): _170.RequestSetOption;
            toSDK(message: _170.RequestSetOption): _170.RequestSetOptionSDKType;
        };
        RequestInitChain: {
            encode(message: _170.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.RequestInitChain;
            fromPartial(object: {
                time?: Date;
                chainId?: string;
                consensusParams?: {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        maxBytes?: any;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: any;
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[];
                appStateBytes?: Uint8Array;
                initialHeight?: any;
            }): _170.RequestInitChain;
            fromSDK(object: _170.RequestInitChainSDKType): _170.RequestInitChain;
            toSDK(message: _170.RequestInitChain): _170.RequestInitChainSDKType;
        };
        RequestQuery: {
            encode(message: _170.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.RequestQuery;
            fromPartial(object: {
                data?: Uint8Array;
                path?: string;
                height?: any;
                prove?: boolean;
            }): _170.RequestQuery;
            fromSDK(object: _170.RequestQuerySDKType): _170.RequestQuery;
            toSDK(message: _170.RequestQuery): _170.RequestQuerySDKType;
        };
        RequestBeginBlock: {
            encode(message: _170.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.RequestBeginBlock;
            fromPartial(object: {
                hash?: Uint8Array;
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
                lastCommitInfo?: {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        signedLastBlock?: boolean;
                    }[];
                };
                byzantineValidators?: {
                    type?: _170.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    height?: any;
                    time?: Date;
                    totalVotingPower?: any;
                }[];
            }): _170.RequestBeginBlock;
            fromSDK(object: _170.RequestBeginBlockSDKType): _170.RequestBeginBlock;
            toSDK(message: _170.RequestBeginBlock): _170.RequestBeginBlockSDKType;
        };
        RequestCheckTx: {
            encode(message: _170.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.RequestCheckTx;
            fromPartial(object: {
                tx?: Uint8Array;
                type?: _170.CheckTxType;
            }): _170.RequestCheckTx;
            fromSDK(object: _170.RequestCheckTxSDKType): _170.RequestCheckTx;
            toSDK(message: _170.RequestCheckTx): _170.RequestCheckTxSDKType;
        };
        RequestDeliverTx: {
            encode(message: _170.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.RequestDeliverTx;
            fromPartial(object: {
                tx?: Uint8Array;
            }): _170.RequestDeliverTx;
            fromSDK(object: _170.RequestDeliverTxSDKType): _170.RequestDeliverTx;
            toSDK(message: _170.RequestDeliverTx): _170.RequestDeliverTxSDKType;
        };
        RequestEndBlock: {
            encode(message: _170.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.RequestEndBlock;
            fromPartial(object: {
                height?: any;
            }): _170.RequestEndBlock;
            fromSDK(object: _170.RequestEndBlockSDKType): _170.RequestEndBlock;
            toSDK(message: _170.RequestEndBlock): _170.RequestEndBlockSDKType;
        };
        RequestCommit: {
            encode(_: _170.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.RequestCommit;
            fromPartial(_: {}): _170.RequestCommit;
            fromSDK(_: _170.RequestCommitSDKType): _170.RequestCommit;
            toSDK(_: _170.RequestCommit): _170.RequestCommitSDKType;
        };
        RequestListSnapshots: {
            encode(_: _170.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.RequestListSnapshots;
            fromPartial(_: {}): _170.RequestListSnapshots;
            fromSDK(_: _170.RequestListSnapshotsSDKType): _170.RequestListSnapshots;
            toSDK(_: _170.RequestListSnapshots): _170.RequestListSnapshotsSDKType;
        };
        RequestOfferSnapshot: {
            encode(message: _170.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.RequestOfferSnapshot;
            fromPartial(object: {
                snapshot?: {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                };
                appHash?: Uint8Array;
            }): _170.RequestOfferSnapshot;
            fromSDK(object: _170.RequestOfferSnapshotSDKType): _170.RequestOfferSnapshot;
            toSDK(message: _170.RequestOfferSnapshot): _170.RequestOfferSnapshotSDKType;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _170.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.RequestLoadSnapshotChunk;
            fromPartial(object: {
                height?: any;
                format?: number;
                chunk?: number;
            }): _170.RequestLoadSnapshotChunk;
            fromSDK(object: _170.RequestLoadSnapshotChunkSDKType): _170.RequestLoadSnapshotChunk;
            toSDK(message: _170.RequestLoadSnapshotChunk): _170.RequestLoadSnapshotChunkSDKType;
        };
        RequestApplySnapshotChunk: {
            encode(message: _170.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.RequestApplySnapshotChunk;
            fromPartial(object: {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            }): _170.RequestApplySnapshotChunk;
            fromSDK(object: _170.RequestApplySnapshotChunkSDKType): _170.RequestApplySnapshotChunk;
            toSDK(message: _170.RequestApplySnapshotChunk): _170.RequestApplySnapshotChunkSDKType;
        };
        Response: {
            encode(message: _170.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.Response;
            fromPartial(object: {
                exception?: {
                    error?: string;
                };
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    data?: string;
                    version?: string;
                    appVersion?: any;
                    lastBlockHeight?: any;
                    lastBlockAppHash?: Uint8Array;
                };
                setOption?: {
                    code?: number;
                    log?: string;
                    info?: string;
                };
                initChain?: {
                    consensusParams?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    appHash?: Uint8Array;
                };
                query?: {
                    code?: number;
                    log?: string;
                    info?: string;
                    index?: any;
                    key?: Uint8Array;
                    value?: Uint8Array;
                    proofOps?: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    };
                    height?: any;
                    codespace?: string;
                };
                beginBlock?: {
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                checkTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                deliverTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                endBlock?: {
                    validatorUpdates?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    consensusParamUpdates?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    };
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                commit?: {
                    data?: Uint8Array;
                    retainHeight?: any;
                };
                listSnapshots?: {
                    snapshots?: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[];
                };
                offerSnapshot?: {
                    result?: _170.ResponseOfferSnapshot_Result;
                };
                loadSnapshotChunk?: {
                    chunk?: Uint8Array;
                };
                applySnapshotChunk?: {
                    result?: _170.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[];
                    rejectSenders?: string[];
                };
            }): _170.Response;
            fromSDK(object: _170.ResponseSDKType): _170.Response;
            toSDK(message: _170.Response): _170.ResponseSDKType;
        };
        ResponseException: {
            encode(message: _170.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.ResponseException;
            fromPartial(object: {
                error?: string;
            }): _170.ResponseException;
            fromSDK(object: _170.ResponseExceptionSDKType): _170.ResponseException;
            toSDK(message: _170.ResponseException): _170.ResponseExceptionSDKType;
        };
        ResponseEcho: {
            encode(message: _170.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.ResponseEchoSDKType;
            fromPartial(object: {
                message?: string;
            }): _170.ResponseEcho;
            fromSDK(object: _170.ResponseEchoSDKType): _170.ResponseEcho;
            toSDK(message: _170.ResponseEcho): _170.ResponseEchoSDKType;
        };
        ResponseFlush: {
            encode(_: _170.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.ResponseFlushSDKType;
            fromPartial(_: {}): _170.ResponseFlush;
            fromSDK(_: _170.ResponseFlushSDKType): _170.ResponseFlush;
            toSDK(_: _170.ResponseFlush): _170.ResponseFlushSDKType;
        };
        ResponseInfo: {
            encode(message: _170.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.ResponseInfoSDKType;
            fromPartial(object: {
                data?: string;
                version?: string;
                appVersion?: any;
                lastBlockHeight?: any;
                lastBlockAppHash?: Uint8Array;
            }): _170.ResponseInfo;
            fromSDK(object: _170.ResponseInfoSDKType): _170.ResponseInfo;
            toSDK(message: _170.ResponseInfo): _170.ResponseInfoSDKType;
        };
        ResponseSetOption: {
            encode(message: _170.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.ResponseSetOptionSDKType;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
            }): _170.ResponseSetOption;
            fromSDK(object: _170.ResponseSetOptionSDKType): _170.ResponseSetOption;
            toSDK(message: _170.ResponseSetOption): _170.ResponseSetOptionSDKType;
        };
        ResponseInitChain: {
            encode(message: _170.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.ResponseInitChainSDKType;
            fromPartial(object: {
                consensusParams?: {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        maxBytes?: any;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: any;
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[];
                appHash?: Uint8Array;
            }): _170.ResponseInitChain;
            fromSDK(object: _170.ResponseInitChainSDKType): _170.ResponseInitChain;
            toSDK(message: _170.ResponseInitChain): _170.ResponseInitChainSDKType;
        };
        ResponseQuery: {
            encode(message: _170.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.ResponseQuerySDKType;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
                index?: any;
                key?: Uint8Array;
                value?: Uint8Array;
                proofOps?: {
                    ops?: {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                };
                height?: any;
                codespace?: string;
            }): _170.ResponseQuery;
            fromSDK(object: _170.ResponseQuerySDKType): _170.ResponseQuery;
            toSDK(message: _170.ResponseQuery): _170.ResponseQuerySDKType;
        };
        ResponseBeginBlock: {
            encode(message: _170.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.ResponseBeginBlockSDKType;
            fromPartial(object: {
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _170.ResponseBeginBlock;
            fromSDK(object: _170.ResponseBeginBlockSDKType): _170.ResponseBeginBlock;
            toSDK(message: _170.ResponseBeginBlock): _170.ResponseBeginBlockSDKType;
        };
        ResponseCheckTx: {
            encode(message: _170.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.ResponseCheckTxSDKType;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: any;
                gasUsed?: any;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _170.ResponseCheckTx;
            fromSDK(object: _170.ResponseCheckTxSDKType): _170.ResponseCheckTx;
            toSDK(message: _170.ResponseCheckTx): _170.ResponseCheckTxSDKType;
        };
        ResponseDeliverTx: {
            encode(message: _170.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.ResponseDeliverTxSDKType;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: any;
                gasUsed?: any;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _170.ResponseDeliverTx;
            fromSDK(object: _170.ResponseDeliverTxSDKType): _170.ResponseDeliverTx;
            toSDK(message: _170.ResponseDeliverTx): _170.ResponseDeliverTxSDKType;
        };
        ResponseEndBlock: {
            encode(message: _170.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.ResponseEndBlockSDKType;
            fromPartial(object: {
                validatorUpdates?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[];
                consensusParamUpdates?: {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        maxBytes?: any;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: any;
                    };
                };
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _170.ResponseEndBlock;
            fromSDK(object: _170.ResponseEndBlockSDKType): _170.ResponseEndBlock;
            toSDK(message: _170.ResponseEndBlock): _170.ResponseEndBlockSDKType;
        };
        ResponseCommit: {
            encode(message: _170.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.ResponseCommitSDKType;
            fromPartial(object: {
                data?: Uint8Array;
                retainHeight?: any;
            }): _170.ResponseCommit;
            fromSDK(object: _170.ResponseCommitSDKType): _170.ResponseCommit;
            toSDK(message: _170.ResponseCommit): _170.ResponseCommitSDKType;
        };
        ResponseListSnapshots: {
            encode(message: _170.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.ResponseListSnapshotsSDKType;
            fromPartial(object: {
                snapshots?: {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[];
            }): _170.ResponseListSnapshots;
            fromSDK(object: _170.ResponseListSnapshotsSDKType): _170.ResponseListSnapshots;
            toSDK(message: _170.ResponseListSnapshots): _170.ResponseListSnapshotsSDKType;
        };
        ResponseOfferSnapshot: {
            encode(message: _170.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.ResponseOfferSnapshotSDKType;
            fromPartial(object: {
                result?: _170.ResponseOfferSnapshot_Result;
            }): _170.ResponseOfferSnapshot;
            fromSDK(object: _170.ResponseOfferSnapshotSDKType): _170.ResponseOfferSnapshot;
            toSDK(message: _170.ResponseOfferSnapshot): _170.ResponseOfferSnapshotSDKType;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _170.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.ResponseLoadSnapshotChunkSDKType;
            fromPartial(object: {
                chunk?: Uint8Array;
            }): _170.ResponseLoadSnapshotChunk;
            fromSDK(object: _170.ResponseLoadSnapshotChunkSDKType): _170.ResponseLoadSnapshotChunk;
            toSDK(message: _170.ResponseLoadSnapshotChunk): _170.ResponseLoadSnapshotChunkSDKType;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _170.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.ResponseApplySnapshotChunkSDKType;
            fromPartial(object: {
                result?: _170.ResponseApplySnapshotChunk_Result;
                refetchChunks?: number[];
                rejectSenders?: string[];
            }): _170.ResponseApplySnapshotChunk;
            fromSDK(object: _170.ResponseApplySnapshotChunkSDKType): _170.ResponseApplySnapshotChunk;
            toSDK(message: _170.ResponseApplySnapshotChunk): _170.ResponseApplySnapshotChunkSDKType;
        };
        ConsensusParams: {
            encode(message: _170.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.ConsensusParams;
            fromPartial(object: {
                block?: {
                    maxBytes?: any;
                    maxGas?: any;
                };
                evidence?: {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    maxBytes?: any;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: any;
                };
            }): _170.ConsensusParams;
            fromSDK(object: _170.ConsensusParamsSDKType): _170.ConsensusParams;
            toSDK(message: _170.ConsensusParams): _170.ConsensusParamsSDKType;
        };
        BlockParams: {
            encode(message: _170.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.BlockParams;
            fromPartial(object: {
                maxBytes?: any;
                maxGas?: any;
            }): _170.BlockParams;
            fromSDK(object: _170.BlockParamsSDKType): _170.BlockParams;
            toSDK(message: _170.BlockParams): _170.BlockParamsSDKType;
        };
        LastCommitInfo: {
            encode(message: _170.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.LastCommitInfo;
            fromPartial(object: {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    signedLastBlock?: boolean;
                }[];
            }): _170.LastCommitInfo;
            fromSDK(object: _170.LastCommitInfoSDKType): _170.LastCommitInfo;
            toSDK(message: _170.LastCommitInfo): _170.LastCommitInfoSDKType;
        };
        Event: {
            encode(message: _170.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.Event;
            fromPartial(object: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }): _170.Event;
            fromSDK(object: _170.EventSDKType): _170.Event;
            toSDK(message: _170.Event): _170.EventSDKType;
        };
        EventAttribute: {
            encode(message: _170.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.EventAttribute;
            fromPartial(object: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }): _170.EventAttribute;
            fromSDK(object: _170.EventAttributeSDKType): _170.EventAttribute;
            toSDK(message: _170.EventAttribute): _170.EventAttributeSDKType;
        };
        TxResult: {
            encode(message: _170.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.TxResult;
            fromPartial(object: {
                height?: any;
                index?: number;
                tx?: Uint8Array;
                result?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
            }): _170.TxResult;
            fromSDK(object: _170.TxResultSDKType): _170.TxResult;
            toSDK(message: _170.TxResult): _170.TxResultSDKType;
        };
        Validator: {
            encode(message: _170.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.Validator;
            fromPartial(object: {
                address?: Uint8Array;
                power?: any;
            }): _170.Validator;
            fromSDK(object: _170.ValidatorSDKType): _170.Validator;
            toSDK(message: _170.Validator): _170.ValidatorSDKType;
        };
        ValidatorUpdate: {
            encode(message: _170.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.ValidatorUpdate;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: any;
            }): _170.ValidatorUpdate;
            fromSDK(object: _170.ValidatorUpdateSDKType): _170.ValidatorUpdate;
            toSDK(message: _170.ValidatorUpdate): _170.ValidatorUpdateSDKType;
        };
        VoteInfo: {
            encode(message: _170.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.VoteInfo;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                };
                signedLastBlock?: boolean;
            }): _170.VoteInfo;
            fromSDK(object: _170.VoteInfoSDKType): _170.VoteInfo;
            toSDK(message: _170.VoteInfo): _170.VoteInfoSDKType;
        };
        Evidence: {
            encode(message: _170.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.Evidence;
            fromPartial(object: {
                type?: _170.EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                };
                height?: any;
                time?: Date;
                totalVotingPower?: any;
            }): _170.Evidence;
            fromSDK(object: _170.EvidenceSDKType): _170.Evidence;
            toSDK(message: _170.Evidence): _170.EvidenceSDKType;
        };
        Snapshot: {
            encode(message: _170.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.Snapshot;
            fromPartial(object: {
                height?: any;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            }): _170.Snapshot;
            fromSDK(object: _170.SnapshotSDKType): _170.Snapshot;
            toSDK(message: _170.Snapshot): _170.SnapshotSDKType;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _172.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.Proof;
            fromPartial(object: {
                total?: any;
                index?: any;
                leafHash?: Uint8Array;
                aunts?: Uint8Array[];
            }): _172.Proof;
            fromSDK(object: _172.ProofSDKType): _172.Proof;
            toSDK(message: _172.Proof): _172.ProofSDKType;
        };
        ValueOp: {
            encode(message: _172.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.ValueOp;
            fromPartial(object: {
                key?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _172.ValueOp;
            fromSDK(object: _172.ValueOpSDKType): _172.ValueOp;
            toSDK(message: _172.ValueOp): _172.ValueOpSDKType;
        };
        DominoOp: {
            encode(message: _172.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.DominoOp;
            fromPartial(object: {
                key?: string;
                input?: string;
                output?: string;
            }): _172.DominoOp;
            fromSDK(object: _172.DominoOpSDKType): _172.DominoOp;
            toSDK(message: _172.DominoOp): _172.DominoOpSDKType;
        };
        ProofOp: {
            encode(message: _172.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.ProofOp;
            fromPartial(object: {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            }): _172.ProofOp;
            fromSDK(object: _172.ProofOpSDKType): _172.ProofOp;
            toSDK(message: _172.ProofOp): _172.ProofOpSDKType;
        };
        ProofOps: {
            encode(message: _172.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.ProofOps;
            fromPartial(object: {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[];
            }): _172.ProofOps;
            fromSDK(object: _172.ProofOpsSDKType): _172.ProofOps;
            toSDK(message: _172.ProofOps): _172.ProofOpsSDKType;
        };
        PublicKey: {
            encode(message: _171.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.PublicKey;
            fromPartial(object: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            }): _171.PublicKey;
            fromSDK(object: _171.PublicKeySDKType): _171.PublicKey;
            toSDK(message: _171.PublicKey): _171.PublicKeySDKType;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _173.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.BitArray;
                fromPartial(object: {
                    bits?: any;
                    elems?: any[];
                }): _173.BitArray;
                fromSDK(object: _173.BitArraySDKType): _173.BitArray;
                toSDK(message: _173.BitArray): _173.BitArraySDKType;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _174.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ProtocolVersion;
            fromPartial(object: {
                p2p?: any;
                block?: any;
                app?: any;
            }): _174.ProtocolVersion;
            fromSDK(object: _174.ProtocolVersionSDKType): _174.ProtocolVersion;
            toSDK(message: _174.ProtocolVersion): _174.ProtocolVersionSDKType;
        };
        NodeInfo: {
            encode(message: _174.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.NodeInfo;
            fromPartial(object: {
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
            }): _174.NodeInfo;
            fromSDK(object: _174.NodeInfoSDKType): _174.NodeInfo;
            toSDK(message: _174.NodeInfo): _174.NodeInfoSDKType;
        };
        NodeInfoOther: {
            encode(message: _174.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.NodeInfoOther;
            fromPartial(object: {
                txIndex?: string;
                rpcAddress?: string;
            }): _174.NodeInfoOther;
            fromSDK(object: _174.NodeInfoOtherSDKType): _174.NodeInfoOther;
            toSDK(message: _174.NodeInfoOther): _174.NodeInfoOtherSDKType;
        };
        PeerInfo: {
            encode(message: _174.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.PeerInfo;
            fromPartial(object: {
                id?: string;
                addressInfo?: {
                    address?: string;
                    lastDialSuccess?: Date;
                    lastDialFailure?: Date;
                    dialFailures?: number;
                }[];
                lastConnected?: Date;
            }): _174.PeerInfo;
            fromSDK(object: _174.PeerInfoSDKType): _174.PeerInfo;
            toSDK(message: _174.PeerInfo): _174.PeerInfoSDKType;
        };
        PeerAddressInfo: {
            encode(message: _174.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.PeerAddressInfo;
            fromPartial(object: {
                address?: string;
                lastDialSuccess?: Date;
                lastDialFailure?: Date;
                dialFailures?: number;
            }): _174.PeerAddressInfo;
            fromSDK(object: _174.PeerAddressInfoSDKType): _174.PeerAddressInfo;
            toSDK(message: _174.PeerAddressInfo): _174.PeerAddressInfoSDKType;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _179.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.ValidatorSet;
            fromPartial(object: {
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
            }): _179.ValidatorSet;
            fromSDK(object: _179.ValidatorSetSDKType): _179.ValidatorSet;
            toSDK(message: _179.ValidatorSet): _179.ValidatorSetSDKType;
        };
        Validator: {
            encode(message: _179.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.Validator;
            fromPartial(object: {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: any;
                proposerPriority?: any;
            }): _179.Validator;
            fromSDK(object: _179.ValidatorSDKType): _179.Validator;
            toSDK(message: _179.Validator): _179.ValidatorSDKType;
        };
        SimpleValidator: {
            encode(message: _179.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.SimpleValidator;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: any;
            }): _179.SimpleValidator;
            fromSDK(object: _179.SimpleValidatorSDKType): _179.SimpleValidator;
            toSDK(message: _179.SimpleValidator): _179.SimpleValidatorSDKType;
        };
        blockIDFlagFromJSON(object: any): _178.BlockIDFlag;
        blockIDFlagToJSON(object: _178.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _178.SignedMsgType;
        signedMsgTypeToJSON(object: _178.SignedMsgType): string;
        BlockIDFlag: typeof _178.BlockIDFlag;
        BlockIDFlagSDKType: typeof _178.BlockIDFlagSDKType;
        SignedMsgType: typeof _178.SignedMsgType;
        SignedMsgTypeSDKType: typeof _178.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _178.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.PartSetHeader;
            fromPartial(object: {
                total?: number;
                hash?: Uint8Array;
            }): _178.PartSetHeader;
            fromSDK(object: _178.PartSetHeaderSDKType): _178.PartSetHeader;
            toSDK(message: _178.PartSetHeader): _178.PartSetHeaderSDKType;
        };
        Part: {
            encode(message: _178.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.Part;
            fromPartial(object: {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _178.Part;
            fromSDK(object: _178.PartSDKType): _178.Part;
            toSDK(message: _178.Part): _178.PartSDKType;
        };
        BlockID: {
            encode(message: _178.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.BlockID;
            fromPartial(object: {
                hash?: Uint8Array;
                partSetHeader?: {
                    total?: number;
                    hash?: Uint8Array;
                };
            }): _178.BlockID;
            fromSDK(object: _178.BlockIDSDKType): _178.BlockID;
            toSDK(message: _178.BlockID): _178.BlockIDSDKType;
        };
        Header: {
            encode(message: _178.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.Header;
            fromPartial(object: {
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
            }): _178.Header;
            fromSDK(object: _178.HeaderSDKType): _178.Header;
            toSDK(message: _178.Header): _178.HeaderSDKType;
        };
        Data: {
            encode(message: _178.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.Data;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _178.Data;
            fromSDK(object: _178.DataSDKType): _178.Data;
            toSDK(message: _178.Data): _178.DataSDKType;
        };
        Vote: {
            encode(message: _178.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.Vote;
            fromPartial(object: {
                type?: _178.SignedMsgType;
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
            }): _178.Vote;
            fromSDK(object: _178.VoteSDKType): _178.Vote;
            toSDK(message: _178.Vote): _178.VoteSDKType;
        };
        Commit: {
            encode(message: _178.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.Commit;
            fromPartial(object: {
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
                    blockIdFlag?: _178.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[];
            }): _178.Commit;
            fromSDK(object: _178.CommitSDKType): _178.Commit;
            toSDK(message: _178.Commit): _178.CommitSDKType;
        };
        CommitSig: {
            encode(message: _178.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.CommitSig;
            fromPartial(object: {
                blockIdFlag?: _178.BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            }): _178.CommitSig;
            fromSDK(object: _178.CommitSigSDKType): _178.CommitSig;
            toSDK(message: _178.CommitSig): _178.CommitSigSDKType;
        };
        Proposal: {
            encode(message: _178.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.Proposal;
            fromPartial(object: {
                type?: _178.SignedMsgType;
                height?: any;
                round?: number;
                polRound?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: Date;
                signature?: Uint8Array;
            }): _178.Proposal;
            fromSDK(object: _178.ProposalSDKType): _178.Proposal;
            toSDK(message: _178.Proposal): _178.ProposalSDKType;
        };
        SignedHeader: {
            encode(message: _178.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.SignedHeader;
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
                        blockIdFlag?: _178.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _178.SignedHeader;
            fromSDK(object: _178.SignedHeaderSDKType): _178.SignedHeader;
            toSDK(message: _178.SignedHeader): _178.SignedHeaderSDKType;
        };
        LightBlock: {
            encode(message: _178.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.LightBlock;
            fromPartial(object: {
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
                            blockIdFlag?: _178.BlockIDFlag;
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
            }): _178.LightBlock;
            fromSDK(object: _178.LightBlockSDKType): _178.LightBlock;
            toSDK(message: _178.LightBlock): _178.LightBlockSDKType;
        };
        BlockMeta: {
            encode(message: _178.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.BlockMeta;
            fromPartial(object: {
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                blockSize?: any;
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
                numTxs?: any;
            }): _178.BlockMeta;
            fromSDK(object: _178.BlockMetaSDKType): _178.BlockMeta;
            toSDK(message: _178.BlockMeta): _178.BlockMetaSDKType;
        };
        TxProof: {
            encode(message: _178.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.TxProof;
            fromPartial(object: {
                rootHash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _178.TxProof;
            fromSDK(object: _178.TxProofSDKType): _178.TxProof;
            toSDK(message: _178.TxProof): _178.TxProofSDKType;
        };
        ConsensusParams: {
            encode(message: _177.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.ConsensusParams;
            fromPartial(object: {
                block?: {
                    maxBytes?: any;
                    maxGas?: any;
                    timeIotaMs?: any;
                };
                evidence?: {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    maxBytes?: any;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: any;
                };
            }): _177.ConsensusParams;
            fromSDK(object: _177.ConsensusParamsSDKType): _177.ConsensusParams;
            toSDK(message: _177.ConsensusParams): _177.ConsensusParamsSDKType;
        };
        BlockParams: {
            encode(message: _177.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.BlockParams;
            fromPartial(object: {
                maxBytes?: any;
                maxGas?: any;
                timeIotaMs?: any;
            }): _177.BlockParams;
            fromSDK(object: _177.BlockParamsSDKType): _177.BlockParams;
            toSDK(message: _177.BlockParams): _177.BlockParamsSDKType;
        };
        EvidenceParams: {
            encode(message: _177.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.EvidenceParams;
            fromPartial(object: {
                maxAgeNumBlocks?: any;
                maxAgeDuration?: {
                    seconds?: any;
                    nanos?: number;
                };
                maxBytes?: any;
            }): _177.EvidenceParams;
            fromSDK(object: _177.EvidenceParamsSDKType): _177.EvidenceParams;
            toSDK(message: _177.EvidenceParams): _177.EvidenceParamsSDKType;
        };
        ValidatorParams: {
            encode(message: _177.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.ValidatorParams;
            fromPartial(object: {
                pubKeyTypes?: string[];
            }): _177.ValidatorParams;
            fromSDK(object: _177.ValidatorParamsSDKType): _177.ValidatorParams;
            toSDK(message: _177.ValidatorParams): _177.ValidatorParamsSDKType;
        };
        VersionParams: {
            encode(message: _177.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.VersionParams;
            fromPartial(object: {
                appVersion?: any;
            }): _177.VersionParams;
            fromSDK(object: _177.VersionParamsSDKType): _177.VersionParams;
            toSDK(message: _177.VersionParams): _177.VersionParamsSDKType;
        };
        HashedParams: {
            encode(message: _177.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.HashedParams;
            fromPartial(object: {
                blockMaxBytes?: any;
                blockMaxGas?: any;
            }): _177.HashedParams;
            fromSDK(object: _177.HashedParamsSDKType): _177.HashedParams;
            toSDK(message: _177.HashedParams): _177.HashedParamsSDKType;
        };
        Evidence: {
            encode(message: _176.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.Evidence;
            fromPartial(object: {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: _178.SignedMsgType;
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
                        type?: _178.SignedMsgType;
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
                                    blockIdFlag?: _178.BlockIDFlag;
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
            }): _176.Evidence;
            fromSDK(object: _176.EvidenceSDKType): _176.Evidence;
            toSDK(message: _176.Evidence): _176.EvidenceSDKType;
        };
        DuplicateVoteEvidence: {
            encode(message: _176.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.DuplicateVoteEvidence;
            fromPartial(object: {
                voteA?: {
                    type?: _178.SignedMsgType;
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
                    type?: _178.SignedMsgType;
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
            }): _176.DuplicateVoteEvidence;
            fromSDK(object: _176.DuplicateVoteEvidenceSDKType): _176.DuplicateVoteEvidence;
            toSDK(message: _176.DuplicateVoteEvidence): _176.DuplicateVoteEvidenceSDKType;
        };
        LightClientAttackEvidence: {
            encode(message: _176.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.LightClientAttackEvidence;
            fromPartial(object: {
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
                                blockIdFlag?: _178.BlockIDFlag;
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
            }): _176.LightClientAttackEvidence;
            fromSDK(object: _176.LightClientAttackEvidenceSDKType): _176.LightClientAttackEvidence;
            toSDK(message: _176.LightClientAttackEvidence): _176.LightClientAttackEvidenceSDKType;
        };
        EvidenceList: {
            encode(message: _176.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.EvidenceList;
            fromPartial(object: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _178.SignedMsgType;
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
                            type?: _178.SignedMsgType;
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
                                        blockIdFlag?: _178.BlockIDFlag;
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
            }): _176.EvidenceList;
            fromSDK(object: _176.EvidenceListSDKType): _176.EvidenceList;
            toSDK(message: _176.EvidenceList): _176.EvidenceListSDKType;
        };
        Block: {
            encode(message: _175.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.Block;
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
                data?: {
                    txs?: Uint8Array[];
                };
                evidence?: {
                    evidence?: {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _178.SignedMsgType;
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
                                type?: _178.SignedMsgType;
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
                                            blockIdFlag?: _178.BlockIDFlag;
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
                        blockIdFlag?: _178.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _175.Block;
            fromSDK(object: _175.BlockSDKType): _175.Block;
            toSDK(message: _175.Block): _175.BlockSDKType;
        };
    };
    const version: {
        App: {
            encode(message: _180.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.App;
            fromPartial(object: {
                protocol?: any;
                software?: string;
            }): _180.App;
            fromSDK(object: _180.AppSDKType): _180.App;
            toSDK(message: _180.App): _180.AppSDKType;
        };
        Consensus: {
            encode(message: _180.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.Consensus;
            fromPartial(object: {
                block?: any;
                app?: any;
            }): _180.Consensus;
            fromSDK(object: _180.ConsensusSDKType): _180.Consensus;
            toSDK(message: _180.Consensus): _180.ConsensusSDKType;
        };
    };
}
