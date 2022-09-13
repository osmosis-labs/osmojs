import * as _175 from "./abci/types";
import * as _176 from "./crypto/keys";
import * as _177 from "./crypto/proof";
import * as _178 from "./libs/bits/types";
import * as _179 from "./p2p/types";
import * as _180 from "./types/block";
import * as _181 from "./types/evidence";
import * as _182 from "./types/params";
import * as _183 from "./types/types";
import * as _184 from "./types/validator";
import * as _185 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _175.CheckTxType;
        checkTxTypeToJSON(object: _175.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _175.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _175.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _175.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _175.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _175.EvidenceType;
        evidenceTypeToJSON(object: _175.EvidenceType): string;
        CheckTxType: typeof _175.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _175.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _175.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _175.EvidenceType;
        Request: {
            encode(message: _175.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.Request;
            fromJSON(object: any): _175.Request;
            toJSON(message: _175.Request): unknown;
            fromPartial(object: {
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    version?: string;
                    block_version?: any;
                    p2p_version?: any;
                };
                set_option?: {
                    key?: string;
                    value?: string;
                };
                init_chain?: {
                    time?: Date;
                    chain_id?: string;
                    consensus_params?: {
                        block?: {
                            max_bytes?: any;
                            max_gas?: any;
                        };
                        evidence?: {
                            max_age_num_blocks?: any;
                            max_age_duration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            max_bytes?: any;
                        };
                        validator?: {
                            pub_key_types?: string[];
                        };
                        version?: {
                            app_version?: any;
                        };
                    };
                    validators?: {
                        pub_key?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    app_state_bytes?: Uint8Array;
                    initial_height?: any;
                };
                query?: {
                    data?: Uint8Array;
                    path?: string;
                    height?: any;
                    prove?: boolean;
                };
                begin_block?: {
                    hash?: Uint8Array;
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
                    last_commit_info?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: any;
                            };
                            signed_last_block?: boolean;
                        }[];
                    };
                    byzantine_validators?: {
                        type?: _175.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        height?: any;
                        time?: Date;
                        total_voting_power?: any;
                    }[];
                };
                check_tx?: {
                    tx?: Uint8Array;
                    type?: _175.CheckTxType;
                };
                deliver_tx?: {
                    tx?: Uint8Array;
                };
                end_block?: {
                    height?: any;
                };
                commit?: {};
                list_snapshots?: {};
                offer_snapshot?: {
                    snapshot?: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    };
                    app_hash?: Uint8Array;
                };
                load_snapshot_chunk?: {
                    height?: any;
                    format?: number;
                    chunk?: number;
                };
                apply_snapshot_chunk?: {
                    index?: number;
                    chunk?: Uint8Array;
                    sender?: string;
                };
            }): _175.Request;
        };
        RequestEcho: {
            encode(message: _175.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.RequestEcho;
            fromJSON(object: any): _175.RequestEcho;
            toJSON(message: _175.RequestEcho): unknown;
            fromPartial(object: {
                message?: string;
            }): _175.RequestEcho;
        };
        RequestFlush: {
            encode(_: _175.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.RequestFlush;
            fromJSON(_: any): _175.RequestFlush;
            toJSON(_: _175.RequestFlush): unknown;
            fromPartial(_: {}): _175.RequestFlush;
        };
        RequestInfo: {
            encode(message: _175.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.RequestInfo;
            fromJSON(object: any): _175.RequestInfo;
            toJSON(message: _175.RequestInfo): unknown;
            fromPartial(object: {
                version?: string;
                block_version?: any;
                p2p_version?: any;
            }): _175.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _175.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.RequestSetOption;
            fromJSON(object: any): _175.RequestSetOption;
            toJSON(message: _175.RequestSetOption): unknown;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _175.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _175.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.RequestInitChain;
            fromJSON(object: any): _175.RequestInitChain;
            toJSON(message: _175.RequestInitChain): unknown;
            fromPartial(object: {
                time?: Date;
                chain_id?: string;
                consensus_params?: {
                    block?: {
                        max_bytes?: any;
                        max_gas?: any;
                    };
                    evidence?: {
                        max_age_num_blocks?: any;
                        max_age_duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        max_bytes?: any;
                    };
                    validator?: {
                        pub_key_types?: string[];
                    };
                    version?: {
                        app_version?: any;
                    };
                };
                validators?: {
                    pub_key?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[];
                app_state_bytes?: Uint8Array;
                initial_height?: any;
            }): _175.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _175.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.RequestQuery;
            fromJSON(object: any): _175.RequestQuery;
            toJSON(message: _175.RequestQuery): unknown;
            fromPartial(object: {
                data?: Uint8Array;
                path?: string;
                height?: any;
                prove?: boolean;
            }): _175.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _175.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.RequestBeginBlock;
            fromJSON(object: any): _175.RequestBeginBlock;
            toJSON(message: _175.RequestBeginBlock): unknown;
            fromPartial(object: {
                hash?: Uint8Array;
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
                last_commit_info?: {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        signed_last_block?: boolean;
                    }[];
                };
                byzantine_validators?: {
                    type?: _175.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    height?: any;
                    time?: Date;
                    total_voting_power?: any;
                }[];
            }): _175.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _175.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.RequestCheckTx;
            fromJSON(object: any): _175.RequestCheckTx;
            toJSON(message: _175.RequestCheckTx): unknown;
            fromPartial(object: {
                tx?: Uint8Array;
                type?: _175.CheckTxType;
            }): _175.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _175.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.RequestDeliverTx;
            fromJSON(object: any): _175.RequestDeliverTx;
            toJSON(message: _175.RequestDeliverTx): unknown;
            fromPartial(object: {
                tx?: Uint8Array;
            }): _175.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _175.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.RequestEndBlock;
            fromJSON(object: any): _175.RequestEndBlock;
            toJSON(message: _175.RequestEndBlock): unknown;
            fromPartial(object: {
                height?: any;
            }): _175.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _175.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.RequestCommit;
            fromJSON(_: any): _175.RequestCommit;
            toJSON(_: _175.RequestCommit): unknown;
            fromPartial(_: {}): _175.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _175.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.RequestListSnapshots;
            fromJSON(_: any): _175.RequestListSnapshots;
            toJSON(_: _175.RequestListSnapshots): unknown;
            fromPartial(_: {}): _175.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _175.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.RequestOfferSnapshot;
            fromJSON(object: any): _175.RequestOfferSnapshot;
            toJSON(message: _175.RequestOfferSnapshot): unknown;
            fromPartial(object: {
                snapshot?: {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                };
                app_hash?: Uint8Array;
            }): _175.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _175.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.RequestLoadSnapshotChunk;
            fromJSON(object: any): _175.RequestLoadSnapshotChunk;
            toJSON(message: _175.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: {
                height?: any;
                format?: number;
                chunk?: number;
            }): _175.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _175.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.RequestApplySnapshotChunk;
            fromJSON(object: any): _175.RequestApplySnapshotChunk;
            toJSON(message: _175.RequestApplySnapshotChunk): unknown;
            fromPartial(object: {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            }): _175.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _175.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.Response;
            fromJSON(object: any): _175.Response;
            toJSON(message: _175.Response): unknown;
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
                    app_version?: any;
                    last_block_height?: any;
                    last_block_app_hash?: Uint8Array;
                };
                set_option?: {
                    code?: number;
                    log?: string;
                    info?: string;
                };
                init_chain?: {
                    consensus_params?: {
                        block?: {
                            max_bytes?: any;
                            max_gas?: any;
                        };
                        evidence?: {
                            max_age_num_blocks?: any;
                            max_age_duration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            max_bytes?: any;
                        };
                        validator?: {
                            pub_key_types?: string[];
                        };
                        version?: {
                            app_version?: any;
                        };
                    };
                    validators?: {
                        pub_key?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    app_hash?: Uint8Array;
                };
                query?: {
                    code?: number;
                    log?: string;
                    info?: string;
                    index?: any;
                    key?: Uint8Array;
                    value?: Uint8Array;
                    proof_ops?: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    };
                    height?: any;
                    codespace?: string;
                };
                begin_block?: {
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                check_tx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gas_wanted?: any;
                    gas_used?: any;
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
                deliver_tx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gas_wanted?: any;
                    gas_used?: any;
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
                end_block?: {
                    validator_updates?: {
                        pub_key?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    consensus_param_updates?: {
                        block?: {
                            max_bytes?: any;
                            max_gas?: any;
                        };
                        evidence?: {
                            max_age_num_blocks?: any;
                            max_age_duration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            max_bytes?: any;
                        };
                        validator?: {
                            pub_key_types?: string[];
                        };
                        version?: {
                            app_version?: any;
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
                    retain_height?: any;
                };
                list_snapshots?: {
                    snapshots?: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[];
                };
                offer_snapshot?: {
                    result?: _175.ResponseOfferSnapshot_Result;
                };
                load_snapshot_chunk?: {
                    chunk?: Uint8Array;
                };
                apply_snapshot_chunk?: {
                    result?: _175.ResponseApplySnapshotChunk_Result;
                    refetch_chunks?: number[];
                    reject_senders?: string[];
                };
            }): _175.Response;
        };
        ResponseException: {
            encode(message: _175.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ResponseException;
            fromJSON(object: any): _175.ResponseException;
            toJSON(message: _175.ResponseException): unknown;
            fromPartial(object: {
                error?: string;
            }): _175.ResponseException;
        };
        ResponseEcho: {
            encode(message: _175.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ResponseEcho;
            fromJSON(object: any): _175.ResponseEcho;
            toJSON(message: _175.ResponseEcho): unknown;
            fromPartial(object: {
                message?: string;
            }): _175.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _175.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ResponseFlush;
            fromJSON(_: any): _175.ResponseFlush;
            toJSON(_: _175.ResponseFlush): unknown;
            fromPartial(_: {}): _175.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _175.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ResponseInfo;
            fromJSON(object: any): _175.ResponseInfo;
            toJSON(message: _175.ResponseInfo): unknown;
            fromPartial(object: {
                data?: string;
                version?: string;
                app_version?: any;
                last_block_height?: any;
                last_block_app_hash?: Uint8Array;
            }): _175.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _175.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ResponseSetOption;
            fromJSON(object: any): _175.ResponseSetOption;
            toJSON(message: _175.ResponseSetOption): unknown;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
            }): _175.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _175.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ResponseInitChain;
            fromJSON(object: any): _175.ResponseInitChain;
            toJSON(message: _175.ResponseInitChain): unknown;
            fromPartial(object: {
                consensus_params?: {
                    block?: {
                        max_bytes?: any;
                        max_gas?: any;
                    };
                    evidence?: {
                        max_age_num_blocks?: any;
                        max_age_duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        max_bytes?: any;
                    };
                    validator?: {
                        pub_key_types?: string[];
                    };
                    version?: {
                        app_version?: any;
                    };
                };
                validators?: {
                    pub_key?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[];
                app_hash?: Uint8Array;
            }): _175.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _175.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ResponseQuery;
            fromJSON(object: any): _175.ResponseQuery;
            toJSON(message: _175.ResponseQuery): unknown;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
                index?: any;
                key?: Uint8Array;
                value?: Uint8Array;
                proof_ops?: {
                    ops?: {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                };
                height?: any;
                codespace?: string;
            }): _175.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _175.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ResponseBeginBlock;
            fromJSON(object: any): _175.ResponseBeginBlock;
            toJSON(message: _175.ResponseBeginBlock): unknown;
            fromPartial(object: {
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _175.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _175.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ResponseCheckTx;
            fromJSON(object: any): _175.ResponseCheckTx;
            toJSON(message: _175.ResponseCheckTx): unknown;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gas_wanted?: any;
                gas_used?: any;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _175.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _175.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ResponseDeliverTx;
            fromJSON(object: any): _175.ResponseDeliverTx;
            toJSON(message: _175.ResponseDeliverTx): unknown;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gas_wanted?: any;
                gas_used?: any;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _175.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _175.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ResponseEndBlock;
            fromJSON(object: any): _175.ResponseEndBlock;
            toJSON(message: _175.ResponseEndBlock): unknown;
            fromPartial(object: {
                validator_updates?: {
                    pub_key?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[];
                consensus_param_updates?: {
                    block?: {
                        max_bytes?: any;
                        max_gas?: any;
                    };
                    evidence?: {
                        max_age_num_blocks?: any;
                        max_age_duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        max_bytes?: any;
                    };
                    validator?: {
                        pub_key_types?: string[];
                    };
                    version?: {
                        app_version?: any;
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
            }): _175.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _175.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ResponseCommit;
            fromJSON(object: any): _175.ResponseCommit;
            toJSON(message: _175.ResponseCommit): unknown;
            fromPartial(object: {
                data?: Uint8Array;
                retain_height?: any;
            }): _175.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _175.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ResponseListSnapshots;
            fromJSON(object: any): _175.ResponseListSnapshots;
            toJSON(message: _175.ResponseListSnapshots): unknown;
            fromPartial(object: {
                snapshots?: {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[];
            }): _175.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _175.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ResponseOfferSnapshot;
            fromJSON(object: any): _175.ResponseOfferSnapshot;
            toJSON(message: _175.ResponseOfferSnapshot): unknown;
            fromPartial(object: {
                result?: _175.ResponseOfferSnapshot_Result;
            }): _175.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _175.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _175.ResponseLoadSnapshotChunk;
            toJSON(message: _175.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: {
                chunk?: Uint8Array;
            }): _175.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _175.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ResponseApplySnapshotChunk;
            fromJSON(object: any): _175.ResponseApplySnapshotChunk;
            toJSON(message: _175.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: {
                result?: _175.ResponseApplySnapshotChunk_Result;
                refetch_chunks?: number[];
                reject_senders?: string[];
            }): _175.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _175.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ConsensusParams;
            fromJSON(object: any): _175.ConsensusParams;
            toJSON(message: _175.ConsensusParams): unknown;
            fromPartial(object: {
                block?: {
                    max_bytes?: any;
                    max_gas?: any;
                };
                evidence?: {
                    max_age_num_blocks?: any;
                    max_age_duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    max_bytes?: any;
                };
                validator?: {
                    pub_key_types?: string[];
                };
                version?: {
                    app_version?: any;
                };
            }): _175.ConsensusParams;
        };
        BlockParams: {
            encode(message: _175.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.BlockParams;
            fromJSON(object: any): _175.BlockParams;
            toJSON(message: _175.BlockParams): unknown;
            fromPartial(object: {
                max_bytes?: any;
                max_gas?: any;
            }): _175.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _175.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.LastCommitInfo;
            fromJSON(object: any): _175.LastCommitInfo;
            toJSON(message: _175.LastCommitInfo): unknown;
            fromPartial(object: {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    signed_last_block?: boolean;
                }[];
            }): _175.LastCommitInfo;
        };
        Event: {
            encode(message: _175.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.Event;
            fromJSON(object: any): _175.Event;
            toJSON(message: _175.Event): unknown;
            fromPartial(object: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }): _175.Event;
        };
        EventAttribute: {
            encode(message: _175.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.EventAttribute;
            fromJSON(object: any): _175.EventAttribute;
            toJSON(message: _175.EventAttribute): unknown;
            fromPartial(object: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }): _175.EventAttribute;
        };
        TxResult: {
            encode(message: _175.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.TxResult;
            fromJSON(object: any): _175.TxResult;
            toJSON(message: _175.TxResult): unknown;
            fromPartial(object: {
                height?: any;
                index?: number;
                tx?: Uint8Array;
                result?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gas_wanted?: any;
                    gas_used?: any;
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
            }): _175.TxResult;
        };
        Validator: {
            encode(message: _175.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.Validator;
            fromJSON(object: any): _175.Validator;
            toJSON(message: _175.Validator): unknown;
            fromPartial(object: {
                address?: Uint8Array;
                power?: any;
            }): _175.Validator;
        };
        ValidatorUpdate: {
            encode(message: _175.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ValidatorUpdate;
            fromJSON(object: any): _175.ValidatorUpdate;
            toJSON(message: _175.ValidatorUpdate): unknown;
            fromPartial(object: {
                pub_key?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: any;
            }): _175.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _175.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.VoteInfo;
            fromJSON(object: any): _175.VoteInfo;
            toJSON(message: _175.VoteInfo): unknown;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                };
                signed_last_block?: boolean;
            }): _175.VoteInfo;
        };
        Evidence: {
            encode(message: _175.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.Evidence;
            fromJSON(object: any): _175.Evidence;
            toJSON(message: _175.Evidence): unknown;
            fromPartial(object: {
                type?: _175.EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                };
                height?: any;
                time?: Date;
                total_voting_power?: any;
            }): _175.Evidence;
        };
        Snapshot: {
            encode(message: _175.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.Snapshot;
            fromJSON(object: any): _175.Snapshot;
            toJSON(message: _175.Snapshot): unknown;
            fromPartial(object: {
                height?: any;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            }): _175.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _177.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.Proof;
            fromJSON(object: any): _177.Proof;
            toJSON(message: _177.Proof): unknown;
            fromPartial(object: {
                total?: any;
                index?: any;
                leaf_hash?: Uint8Array;
                aunts?: Uint8Array[];
            }): _177.Proof;
        };
        ValueOp: {
            encode(message: _177.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.ValueOp;
            fromJSON(object: any): _177.ValueOp;
            toJSON(message: _177.ValueOp): unknown;
            fromPartial(object: {
                key?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leaf_hash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _177.ValueOp;
        };
        DominoOp: {
            encode(message: _177.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.DominoOp;
            fromJSON(object: any): _177.DominoOp;
            toJSON(message: _177.DominoOp): unknown;
            fromPartial(object: {
                key?: string;
                input?: string;
                output?: string;
            }): _177.DominoOp;
        };
        ProofOp: {
            encode(message: _177.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.ProofOp;
            fromJSON(object: any): _177.ProofOp;
            toJSON(message: _177.ProofOp): unknown;
            fromPartial(object: {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            }): _177.ProofOp;
        };
        ProofOps: {
            encode(message: _177.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.ProofOps;
            fromJSON(object: any): _177.ProofOps;
            toJSON(message: _177.ProofOps): unknown;
            fromPartial(object: {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[];
            }): _177.ProofOps;
        };
        PublicKey: {
            encode(message: _176.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.PublicKey;
            fromJSON(object: any): _176.PublicKey;
            toJSON(message: _176.PublicKey): unknown;
            fromPartial(object: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            }): _176.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _178.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.BitArray;
                fromJSON(object: any): _178.BitArray;
                toJSON(message: _178.BitArray): unknown;
                fromPartial(object: {
                    bits?: any;
                    elems?: any[];
                }): _178.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _179.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.ProtocolVersion;
            fromJSON(object: any): _179.ProtocolVersion;
            toJSON(message: _179.ProtocolVersion): unknown;
            fromPartial(object: {
                p2p?: any;
                block?: any;
                app?: any;
            }): _179.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _179.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.NodeInfo;
            fromJSON(object: any): _179.NodeInfo;
            toJSON(message: _179.NodeInfo): unknown;
            fromPartial(object: {
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
            }): _179.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _179.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.NodeInfoOther;
            fromJSON(object: any): _179.NodeInfoOther;
            toJSON(message: _179.NodeInfoOther): unknown;
            fromPartial(object: {
                tx_index?: string;
                rpc_address?: string;
            }): _179.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _179.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.PeerInfo;
            fromJSON(object: any): _179.PeerInfo;
            toJSON(message: _179.PeerInfo): unknown;
            fromPartial(object: {
                id?: string;
                address_info?: {
                    address?: string;
                    last_dial_success?: Date;
                    last_dial_failure?: Date;
                    dial_failures?: number;
                }[];
                last_connected?: Date;
            }): _179.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _179.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.PeerAddressInfo;
            fromJSON(object: any): _179.PeerAddressInfo;
            toJSON(message: _179.PeerAddressInfo): unknown;
            fromPartial(object: {
                address?: string;
                last_dial_success?: Date;
                last_dial_failure?: Date;
                dial_failures?: number;
            }): _179.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _184.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.ValidatorSet;
            fromJSON(object: any): _184.ValidatorSet;
            toJSON(message: _184.ValidatorSet): unknown;
            fromPartial(object: {
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
            }): _184.ValidatorSet;
        };
        Validator: {
            encode(message: _184.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.Validator;
            fromJSON(object: any): _184.Validator;
            toJSON(message: _184.Validator): unknown;
            fromPartial(object: {
                address?: Uint8Array;
                pub_key?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                voting_power?: any;
                proposer_priority?: any;
            }): _184.Validator;
        };
        SimpleValidator: {
            encode(message: _184.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.SimpleValidator;
            fromJSON(object: any): _184.SimpleValidator;
            toJSON(message: _184.SimpleValidator): unknown;
            fromPartial(object: {
                pub_key?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                voting_power?: any;
            }): _184.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _183.BlockIDFlag;
        blockIDFlagToJSON(object: _183.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _183.SignedMsgType;
        signedMsgTypeToJSON(object: _183.SignedMsgType): string;
        BlockIDFlag: typeof _183.BlockIDFlag;
        SignedMsgType: typeof _183.SignedMsgType;
        PartSetHeader: {
            encode(message: _183.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.PartSetHeader;
            fromJSON(object: any): _183.PartSetHeader;
            toJSON(message: _183.PartSetHeader): unknown;
            fromPartial(object: {
                total?: number;
                hash?: Uint8Array;
            }): _183.PartSetHeader;
        };
        Part: {
            encode(message: _183.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.Part;
            fromJSON(object: any): _183.Part;
            toJSON(message: _183.Part): unknown;
            fromPartial(object: {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leaf_hash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _183.Part;
        };
        BlockID: {
            encode(message: _183.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.BlockID;
            fromJSON(object: any): _183.BlockID;
            toJSON(message: _183.BlockID): unknown;
            fromPartial(object: {
                hash?: Uint8Array;
                part_set_header?: {
                    total?: number;
                    hash?: Uint8Array;
                };
            }): _183.BlockID;
        };
        Header: {
            encode(message: _183.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.Header;
            fromJSON(object: any): _183.Header;
            toJSON(message: _183.Header): unknown;
            fromPartial(object: {
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
            }): _183.Header;
        };
        Data: {
            encode(message: _183.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.Data;
            fromJSON(object: any): _183.Data;
            toJSON(message: _183.Data): unknown;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _183.Data;
        };
        Vote: {
            encode(message: _183.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.Vote;
            fromJSON(object: any): _183.Vote;
            toJSON(message: _183.Vote): unknown;
            fromPartial(object: {
                type?: _183.SignedMsgType;
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
            }): _183.Vote;
        };
        Commit: {
            encode(message: _183.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.Commit;
            fromJSON(object: any): _183.Commit;
            toJSON(message: _183.Commit): unknown;
            fromPartial(object: {
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
                    block_id_flag?: _183.BlockIDFlag;
                    validator_address?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[];
            }): _183.Commit;
        };
        CommitSig: {
            encode(message: _183.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.CommitSig;
            fromJSON(object: any): _183.CommitSig;
            toJSON(message: _183.CommitSig): unknown;
            fromPartial(object: {
                block_id_flag?: _183.BlockIDFlag;
                validator_address?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            }): _183.CommitSig;
        };
        Proposal: {
            encode(message: _183.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.Proposal;
            fromJSON(object: any): _183.Proposal;
            toJSON(message: _183.Proposal): unknown;
            fromPartial(object: {
                type?: _183.SignedMsgType;
                height?: any;
                round?: number;
                pol_round?: number;
                block_id?: {
                    hash?: Uint8Array;
                    part_set_header?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: Date;
                signature?: Uint8Array;
            }): _183.Proposal;
        };
        SignedHeader: {
            encode(message: _183.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.SignedHeader;
            fromJSON(object: any): _183.SignedHeader;
            toJSON(message: _183.SignedHeader): unknown;
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
                        block_id_flag?: _183.BlockIDFlag;
                        validator_address?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _183.SignedHeader;
        };
        LightBlock: {
            encode(message: _183.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.LightBlock;
            fromJSON(object: any): _183.LightBlock;
            toJSON(message: _183.LightBlock): unknown;
            fromPartial(object: {
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
                            block_id_flag?: _183.BlockIDFlag;
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
            }): _183.LightBlock;
        };
        BlockMeta: {
            encode(message: _183.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.BlockMeta;
            fromJSON(object: any): _183.BlockMeta;
            toJSON(message: _183.BlockMeta): unknown;
            fromPartial(object: {
                block_id?: {
                    hash?: Uint8Array;
                    part_set_header?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                block_size?: any;
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
                num_txs?: any;
            }): _183.BlockMeta;
        };
        TxProof: {
            encode(message: _183.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.TxProof;
            fromJSON(object: any): _183.TxProof;
            toJSON(message: _183.TxProof): unknown;
            fromPartial(object: {
                root_hash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leaf_hash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _183.TxProof;
        };
        ConsensusParams: {
            encode(message: _182.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.ConsensusParams;
            fromJSON(object: any): _182.ConsensusParams;
            toJSON(message: _182.ConsensusParams): unknown;
            fromPartial(object: {
                block?: {
                    max_bytes?: any;
                    max_gas?: any;
                    time_iota_ms?: any;
                };
                evidence?: {
                    max_age_num_blocks?: any;
                    max_age_duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    max_bytes?: any;
                };
                validator?: {
                    pub_key_types?: string[];
                };
                version?: {
                    app_version?: any;
                };
            }): _182.ConsensusParams;
        };
        BlockParams: {
            encode(message: _182.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.BlockParams;
            fromJSON(object: any): _182.BlockParams;
            toJSON(message: _182.BlockParams): unknown;
            fromPartial(object: {
                max_bytes?: any;
                max_gas?: any;
                time_iota_ms?: any;
            }): _182.BlockParams;
        };
        EvidenceParams: {
            encode(message: _182.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.EvidenceParams;
            fromJSON(object: any): _182.EvidenceParams;
            toJSON(message: _182.EvidenceParams): unknown;
            fromPartial(object: {
                max_age_num_blocks?: any;
                max_age_duration?: {
                    seconds?: any;
                    nanos?: number;
                };
                max_bytes?: any;
            }): _182.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _182.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.ValidatorParams;
            fromJSON(object: any): _182.ValidatorParams;
            toJSON(message: _182.ValidatorParams): unknown;
            fromPartial(object: {
                pub_key_types?: string[];
            }): _182.ValidatorParams;
        };
        VersionParams: {
            encode(message: _182.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.VersionParams;
            fromJSON(object: any): _182.VersionParams;
            toJSON(message: _182.VersionParams): unknown;
            fromPartial(object: {
                app_version?: any;
            }): _182.VersionParams;
        };
        HashedParams: {
            encode(message: _182.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.HashedParams;
            fromJSON(object: any): _182.HashedParams;
            toJSON(message: _182.HashedParams): unknown;
            fromPartial(object: {
                block_max_bytes?: any;
                block_max_gas?: any;
            }): _182.HashedParams;
        };
        Evidence: {
            encode(message: _181.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.Evidence;
            fromJSON(object: any): _181.Evidence;
            toJSON(message: _181.Evidence): unknown;
            fromPartial(object: {
                duplicate_vote_evidence?: {
                    vote_a?: {
                        type?: _183.SignedMsgType;
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
                        type?: _183.SignedMsgType;
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
                                    block_id_flag?: _183.BlockIDFlag;
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
            }): _181.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _181.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.DuplicateVoteEvidence;
            fromJSON(object: any): _181.DuplicateVoteEvidence;
            toJSON(message: _181.DuplicateVoteEvidence): unknown;
            fromPartial(object: {
                vote_a?: {
                    type?: _183.SignedMsgType;
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
                    type?: _183.SignedMsgType;
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
            }): _181.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _181.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.LightClientAttackEvidence;
            fromJSON(object: any): _181.LightClientAttackEvidence;
            toJSON(message: _181.LightClientAttackEvidence): unknown;
            fromPartial(object: {
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
                                block_id_flag?: _183.BlockIDFlag;
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
            }): _181.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _181.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.EvidenceList;
            fromJSON(object: any): _181.EvidenceList;
            toJSON(message: _181.EvidenceList): unknown;
            fromPartial(object: {
                evidence?: {
                    duplicate_vote_evidence?: {
                        vote_a?: {
                            type?: _183.SignedMsgType;
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
                            type?: _183.SignedMsgType;
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
                                        block_id_flag?: _183.BlockIDFlag;
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
            }): _181.EvidenceList;
        };
        Block: {
            encode(message: _180.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.Block;
            fromJSON(object: any): _180.Block;
            toJSON(message: _180.Block): unknown;
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
                data?: {
                    txs?: Uint8Array[];
                };
                evidence?: {
                    evidence?: {
                        duplicate_vote_evidence?: {
                            vote_a?: {
                                type?: _183.SignedMsgType;
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
                                type?: _183.SignedMsgType;
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
                                            block_id_flag?: _183.BlockIDFlag;
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
                        block_id_flag?: _183.BlockIDFlag;
                        validator_address?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _180.Block;
        };
    };
    const version: {
        App: {
            encode(message: _185.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.App;
            fromJSON(object: any): _185.App;
            toJSON(message: _185.App): unknown;
            fromPartial(object: {
                protocol?: any;
                software?: string;
            }): _185.App;
        };
        Consensus: {
            encode(message: _185.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.Consensus;
            fromJSON(object: any): _185.Consensus;
            toJSON(message: _185.Consensus): unknown;
            fromPartial(object: {
                block?: any;
                app?: any;
            }): _185.Consensus;
        };
    };
}
