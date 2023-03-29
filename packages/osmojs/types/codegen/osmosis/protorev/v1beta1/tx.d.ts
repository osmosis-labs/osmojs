import { TokenPairArbRoutes, TokenPairArbRoutesSDKType, PoolWeights, PoolWeightsSDKType, BaseDenom, BaseDenomSDKType } from "./protorev";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */
export interface MsgSetHotRoutes {
    /** admin is the account that is authorized to set the hot routes. */
    admin: string;
    /** hot_routes is the list of hot routes to set. */
    hotRoutes: TokenPairArbRoutes[];
}
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */
export interface MsgSetHotRoutesSDKType {
    /** admin is the account that is authorized to set the hot routes. */
    admin: string;
    /** hot_routes is the list of hot routes to set. */
    hot_routes: TokenPairArbRoutesSDKType[];
}
/** MsgSetHotRoutesResponse defines the Msg/SetHotRoutes response type. */
export interface MsgSetHotRoutesResponse {
}
/** MsgSetHotRoutesResponse defines the Msg/SetHotRoutes response type. */
export interface MsgSetHotRoutesResponseSDKType {
}
/** MsgSetDeveloperAccount defines the Msg/SetDeveloperAccount request type. */
export interface MsgSetDeveloperAccount {
    /** admin is the account that is authorized to set the developer account. */
    admin: string;
    /**
     * developer_account is the account that will receive a portion of the profits
     * from the protorev module.
     */
    developerAccount: string;
}
/** MsgSetDeveloperAccount defines the Msg/SetDeveloperAccount request type. */
export interface MsgSetDeveloperAccountSDKType {
    /** admin is the account that is authorized to set the developer account. */
    admin: string;
    /**
     * developer_account is the account that will receive a portion of the profits
     * from the protorev module.
     */
    developer_account: string;
}
/**
 * MsgSetDeveloperAccountResponse defines the Msg/SetDeveloperAccount response
 * type.
 */
export interface MsgSetDeveloperAccountResponse {
}
/**
 * MsgSetDeveloperAccountResponse defines the Msg/SetDeveloperAccount response
 * type.
 */
export interface MsgSetDeveloperAccountResponseSDKType {
}
/** MsgSetPoolWeights defines the Msg/SetPoolWeights request type. */
export interface MsgSetPoolWeights {
    /** admin is the account that is authorized to set the pool weights. */
    admin: string;
    /** pool_weights is the list of pool weights to set. */
    poolWeights?: PoolWeights;
}
/** MsgSetPoolWeights defines the Msg/SetPoolWeights request type. */
export interface MsgSetPoolWeightsSDKType {
    /** admin is the account that is authorized to set the pool weights. */
    admin: string;
    /** pool_weights is the list of pool weights to set. */
    pool_weights?: PoolWeightsSDKType;
}
/** MsgSetPoolWeightsResponse defines the Msg/SetPoolWeights response type. */
export interface MsgSetPoolWeightsResponse {
}
/** MsgSetPoolWeightsResponse defines the Msg/SetPoolWeights response type. */
export interface MsgSetPoolWeightsResponseSDKType {
}
/** MsgSetMaxPoolPointsPerTx defines the Msg/SetMaxPoolPointsPerTx request type. */
export interface MsgSetMaxPoolPointsPerTx {
    /** admin is the account that is authorized to set the max pool points per tx. */
    admin: string;
    /**
     * max_pool_points_per_tx is the maximum number of pool points that can be
     * consumed per transaction.
     */
    maxPoolPointsPerTx: Long;
}
/** MsgSetMaxPoolPointsPerTx defines the Msg/SetMaxPoolPointsPerTx request type. */
export interface MsgSetMaxPoolPointsPerTxSDKType {
    /** admin is the account that is authorized to set the max pool points per tx. */
    admin: string;
    /**
     * max_pool_points_per_tx is the maximum number of pool points that can be
     * consumed per transaction.
     */
    max_pool_points_per_tx: Long;
}
/**
 * MsgSetMaxPoolPointsPerTxResponse defines the Msg/SetMaxPoolPointsPerTx
 * response type.
 */
export interface MsgSetMaxPoolPointsPerTxResponse {
}
/**
 * MsgSetMaxPoolPointsPerTxResponse defines the Msg/SetMaxPoolPointsPerTx
 * response type.
 */
export interface MsgSetMaxPoolPointsPerTxResponseSDKType {
}
/**
 * MsgSetMaxPoolPointsPerBlock defines the Msg/SetMaxPoolPointsPerBlock request
 * type.
 */
export interface MsgSetMaxPoolPointsPerBlock {
    /**
     * admin is the account that is authorized to set the max pool points per
     * block.
     */
    admin: string;
    /**
     * max_pool_points_per_block is the maximum number of pool points that can be
     * consumed per block.
     */
    maxPoolPointsPerBlock: Long;
}
/**
 * MsgSetMaxPoolPointsPerBlock defines the Msg/SetMaxPoolPointsPerBlock request
 * type.
 */
export interface MsgSetMaxPoolPointsPerBlockSDKType {
    /**
     * admin is the account that is authorized to set the max pool points per
     * block.
     */
    admin: string;
    /**
     * max_pool_points_per_block is the maximum number of pool points that can be
     * consumed per block.
     */
    max_pool_points_per_block: Long;
}
/**
 * MsgSetMaxPoolPointsPerBlockResponse defines the
 * Msg/SetMaxPoolPointsPerBlock response type.
 */
export interface MsgSetMaxPoolPointsPerBlockResponse {
}
/**
 * MsgSetMaxPoolPointsPerBlockResponse defines the
 * Msg/SetMaxPoolPointsPerBlock response type.
 */
export interface MsgSetMaxPoolPointsPerBlockResponseSDKType {
}
/** MsgSetBaseDenoms defines the Msg/SetBaseDenoms request type. */
export interface MsgSetBaseDenoms {
    /** admin is the account that is authorized to set the base denoms. */
    admin: string;
    /** base_denoms is the list of base denoms to set. */
    baseDenoms: BaseDenom[];
}
/** MsgSetBaseDenoms defines the Msg/SetBaseDenoms request type. */
export interface MsgSetBaseDenomsSDKType {
    /** admin is the account that is authorized to set the base denoms. */
    admin: string;
    /** base_denoms is the list of base denoms to set. */
    base_denoms: BaseDenomSDKType[];
}
/** MsgSetBaseDenomsResponse defines the Msg/SetBaseDenoms response type. */
export interface MsgSetBaseDenomsResponse {
}
/** MsgSetBaseDenomsResponse defines the Msg/SetBaseDenoms response type. */
export interface MsgSetBaseDenomsResponseSDKType {
}
export declare const MsgSetHotRoutes: {
    encode(message: MsgSetHotRoutes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetHotRoutes;
    fromPartial(object: Partial<MsgSetHotRoutes>): MsgSetHotRoutes;
};
export declare const MsgSetHotRoutesResponse: {
    encode(_: MsgSetHotRoutesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetHotRoutesResponse;
    fromPartial(_: Partial<MsgSetHotRoutesResponse>): MsgSetHotRoutesResponse;
};
export declare const MsgSetDeveloperAccount: {
    encode(message: MsgSetDeveloperAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetDeveloperAccount;
    fromPartial(object: Partial<MsgSetDeveloperAccount>): MsgSetDeveloperAccount;
};
export declare const MsgSetDeveloperAccountResponse: {
    encode(_: MsgSetDeveloperAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetDeveloperAccountResponse;
    fromPartial(_: Partial<MsgSetDeveloperAccountResponse>): MsgSetDeveloperAccountResponse;
};
export declare const MsgSetPoolWeights: {
    encode(message: MsgSetPoolWeights, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPoolWeights;
    fromPartial(object: Partial<MsgSetPoolWeights>): MsgSetPoolWeights;
};
export declare const MsgSetPoolWeightsResponse: {
    encode(_: MsgSetPoolWeightsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPoolWeightsResponse;
    fromPartial(_: Partial<MsgSetPoolWeightsResponse>): MsgSetPoolWeightsResponse;
};
export declare const MsgSetMaxPoolPointsPerTx: {
    encode(message: MsgSetMaxPoolPointsPerTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMaxPoolPointsPerTx;
    fromPartial(object: Partial<MsgSetMaxPoolPointsPerTx>): MsgSetMaxPoolPointsPerTx;
};
export declare const MsgSetMaxPoolPointsPerTxResponse: {
    encode(_: MsgSetMaxPoolPointsPerTxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMaxPoolPointsPerTxResponse;
    fromPartial(_: Partial<MsgSetMaxPoolPointsPerTxResponse>): MsgSetMaxPoolPointsPerTxResponse;
};
export declare const MsgSetMaxPoolPointsPerBlock: {
    encode(message: MsgSetMaxPoolPointsPerBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMaxPoolPointsPerBlock;
    fromPartial(object: Partial<MsgSetMaxPoolPointsPerBlock>): MsgSetMaxPoolPointsPerBlock;
};
export declare const MsgSetMaxPoolPointsPerBlockResponse: {
    encode(_: MsgSetMaxPoolPointsPerBlockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMaxPoolPointsPerBlockResponse;
    fromPartial(_: Partial<MsgSetMaxPoolPointsPerBlockResponse>): MsgSetMaxPoolPointsPerBlockResponse;
};
export declare const MsgSetBaseDenoms: {
    encode(message: MsgSetBaseDenoms, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetBaseDenoms;
    fromPartial(object: Partial<MsgSetBaseDenoms>): MsgSetBaseDenoms;
};
export declare const MsgSetBaseDenomsResponse: {
    encode(_: MsgSetBaseDenomsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetBaseDenomsResponse;
    fromPartial(_: Partial<MsgSetBaseDenomsResponse>): MsgSetBaseDenomsResponse;
};
