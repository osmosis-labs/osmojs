import { TokenPairArbRoutes, TokenPairArbRoutesAmino, TokenPairArbRoutesSDKType, PoolWeights, PoolWeightsAmino, PoolWeightsSDKType, BaseDenom, BaseDenomAmino, BaseDenomSDKType } from "./protorev";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */
export interface MsgSetHotRoutes {
    /** admin is the account that is authorized to set the hot routes. */
    admin: string;
    /** hot_routes is the list of hot routes to set. */
    hotRoutes: TokenPairArbRoutes[];
}
export interface MsgSetHotRoutesProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutes";
    value: Uint8Array;
}
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */
export interface MsgSetHotRoutesAmino {
    /** admin is the account that is authorized to set the hot routes. */
    admin: string;
    /** hot_routes is the list of hot routes to set. */
    hot_routes: TokenPairArbRoutesAmino[];
}
export interface MsgSetHotRoutesAminoMsg {
    type: "osmosis/MsgSetHotRoutes";
    value: MsgSetHotRoutesAmino;
}
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */
export interface MsgSetHotRoutesSDKType {
    admin: string;
    hot_routes: TokenPairArbRoutesSDKType[];
}
/** MsgSetHotRoutesResponse defines the Msg/SetHotRoutes response type. */
export interface MsgSetHotRoutesResponse {
}
export interface MsgSetHotRoutesResponseProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutesResponse";
    value: Uint8Array;
}
/** MsgSetHotRoutesResponse defines the Msg/SetHotRoutes response type. */
export interface MsgSetHotRoutesResponseAmino {
}
export interface MsgSetHotRoutesResponseAminoMsg {
    type: "osmosis/protorev/set-hot-routes-response";
    value: MsgSetHotRoutesResponseAmino;
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
export interface MsgSetDeveloperAccountProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount";
    value: Uint8Array;
}
/** MsgSetDeveloperAccount defines the Msg/SetDeveloperAccount request type. */
export interface MsgSetDeveloperAccountAmino {
    /** admin is the account that is authorized to set the developer account. */
    admin: string;
    /**
     * developer_account is the account that will receive a portion of the profits
     * from the protorev module.
     */
    developer_account: string;
}
export interface MsgSetDeveloperAccountAminoMsg {
    type: "osmosis/MsgSetDeveloperAccount";
    value: MsgSetDeveloperAccountAmino;
}
/** MsgSetDeveloperAccount defines the Msg/SetDeveloperAccount request type. */
export interface MsgSetDeveloperAccountSDKType {
    admin: string;
    developer_account: string;
}
/**
 * MsgSetDeveloperAccountResponse defines the Msg/SetDeveloperAccount response
 * type.
 */
export interface MsgSetDeveloperAccountResponse {
}
export interface MsgSetDeveloperAccountResponseProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccountResponse";
    value: Uint8Array;
}
/**
 * MsgSetDeveloperAccountResponse defines the Msg/SetDeveloperAccount response
 * type.
 */
export interface MsgSetDeveloperAccountResponseAmino {
}
export interface MsgSetDeveloperAccountResponseAminoMsg {
    type: "osmosis/protorev/set-developer-account-response";
    value: MsgSetDeveloperAccountResponseAmino;
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
export interface MsgSetPoolWeightsProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetPoolWeights";
    value: Uint8Array;
}
/** MsgSetPoolWeights defines the Msg/SetPoolWeights request type. */
export interface MsgSetPoolWeightsAmino {
    /** admin is the account that is authorized to set the pool weights. */
    admin: string;
    /** pool_weights is the list of pool weights to set. */
    pool_weights?: PoolWeightsAmino;
}
export interface MsgSetPoolWeightsAminoMsg {
    type: "osmosis/protorev/set-pool-weights";
    value: MsgSetPoolWeightsAmino;
}
/** MsgSetPoolWeights defines the Msg/SetPoolWeights request type. */
export interface MsgSetPoolWeightsSDKType {
    admin: string;
    pool_weights?: PoolWeightsSDKType;
}
/** MsgSetPoolWeightsResponse defines the Msg/SetPoolWeights response type. */
export interface MsgSetPoolWeightsResponse {
}
export interface MsgSetPoolWeightsResponseProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetPoolWeightsResponse";
    value: Uint8Array;
}
/** MsgSetPoolWeightsResponse defines the Msg/SetPoolWeights response type. */
export interface MsgSetPoolWeightsResponseAmino {
}
export interface MsgSetPoolWeightsResponseAminoMsg {
    type: "osmosis/protorev/set-pool-weights-response";
    value: MsgSetPoolWeightsResponseAmino;
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
export interface MsgSetMaxPoolPointsPerTxProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx";
    value: Uint8Array;
}
/** MsgSetMaxPoolPointsPerTx defines the Msg/SetMaxPoolPointsPerTx request type. */
export interface MsgSetMaxPoolPointsPerTxAmino {
    /** admin is the account that is authorized to set the max pool points per tx. */
    admin: string;
    /**
     * max_pool_points_per_tx is the maximum number of pool points that can be
     * consumed per transaction.
     */
    max_pool_points_per_tx: string;
}
export interface MsgSetMaxPoolPointsPerTxAminoMsg {
    type: "osmosis/protorev/set-max-pool-points-per-tx";
    value: MsgSetMaxPoolPointsPerTxAmino;
}
/** MsgSetMaxPoolPointsPerTx defines the Msg/SetMaxPoolPointsPerTx request type. */
export interface MsgSetMaxPoolPointsPerTxSDKType {
    admin: string;
    max_pool_points_per_tx: Long;
}
/**
 * MsgSetMaxPoolPointsPerTxResponse defines the Msg/SetMaxPoolPointsPerTx
 * response type.
 */
export interface MsgSetMaxPoolPointsPerTxResponse {
}
export interface MsgSetMaxPoolPointsPerTxResponseProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTxResponse";
    value: Uint8Array;
}
/**
 * MsgSetMaxPoolPointsPerTxResponse defines the Msg/SetMaxPoolPointsPerTx
 * response type.
 */
export interface MsgSetMaxPoolPointsPerTxResponseAmino {
}
export interface MsgSetMaxPoolPointsPerTxResponseAminoMsg {
    type: "osmosis/protorev/set-max-pool-points-per-tx-response";
    value: MsgSetMaxPoolPointsPerTxResponseAmino;
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
export interface MsgSetMaxPoolPointsPerBlockProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock";
    value: Uint8Array;
}
/**
 * MsgSetMaxPoolPointsPerBlock defines the Msg/SetMaxPoolPointsPerBlock request
 * type.
 */
export interface MsgSetMaxPoolPointsPerBlockAmino {
    /**
     * admin is the account that is authorized to set the max pool points per
     * block.
     */
    admin: string;
    /**
     * max_pool_points_per_block is the maximum number of pool points that can be
     * consumed per block.
     */
    max_pool_points_per_block: string;
}
export interface MsgSetMaxPoolPointsPerBlockAminoMsg {
    type: "osmosis/protorev/set-max-pool-points-per-block";
    value: MsgSetMaxPoolPointsPerBlockAmino;
}
/**
 * MsgSetMaxPoolPointsPerBlock defines the Msg/SetMaxPoolPointsPerBlock request
 * type.
 */
export interface MsgSetMaxPoolPointsPerBlockSDKType {
    admin: string;
    max_pool_points_per_block: Long;
}
/**
 * MsgSetMaxPoolPointsPerBlockResponse defines the
 * Msg/SetMaxPoolPointsPerBlock response type.
 */
export interface MsgSetMaxPoolPointsPerBlockResponse {
}
export interface MsgSetMaxPoolPointsPerBlockResponseProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlockResponse";
    value: Uint8Array;
}
/**
 * MsgSetMaxPoolPointsPerBlockResponse defines the
 * Msg/SetMaxPoolPointsPerBlock response type.
 */
export interface MsgSetMaxPoolPointsPerBlockResponseAmino {
}
export interface MsgSetMaxPoolPointsPerBlockResponseAminoMsg {
    type: "osmosis/protorev/set-max-pool-points-per-block-response";
    value: MsgSetMaxPoolPointsPerBlockResponseAmino;
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
export interface MsgSetBaseDenomsProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetBaseDenoms";
    value: Uint8Array;
}
/** MsgSetBaseDenoms defines the Msg/SetBaseDenoms request type. */
export interface MsgSetBaseDenomsAmino {
    /** admin is the account that is authorized to set the base denoms. */
    admin: string;
    /** base_denoms is the list of base denoms to set. */
    base_denoms: BaseDenomAmino[];
}
export interface MsgSetBaseDenomsAminoMsg {
    type: "osmosis/protorev/set-base-denoms";
    value: MsgSetBaseDenomsAmino;
}
/** MsgSetBaseDenoms defines the Msg/SetBaseDenoms request type. */
export interface MsgSetBaseDenomsSDKType {
    admin: string;
    base_denoms: BaseDenomSDKType[];
}
/** MsgSetBaseDenomsResponse defines the Msg/SetBaseDenoms response type. */
export interface MsgSetBaseDenomsResponse {
}
export interface MsgSetBaseDenomsResponseProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetBaseDenomsResponse";
    value: Uint8Array;
}
/** MsgSetBaseDenomsResponse defines the Msg/SetBaseDenoms response type. */
export interface MsgSetBaseDenomsResponseAmino {
}
export interface MsgSetBaseDenomsResponseAminoMsg {
    type: "osmosis/protorev/set-base-denoms-response";
    value: MsgSetBaseDenomsResponseAmino;
}
/** MsgSetBaseDenomsResponse defines the Msg/SetBaseDenoms response type. */
export interface MsgSetBaseDenomsResponseSDKType {
}
export declare const MsgSetHotRoutes: {
    typeUrl: string;
    encode(message: MsgSetHotRoutes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetHotRoutes;
    fromPartial(object: Partial<MsgSetHotRoutes>): MsgSetHotRoutes;
    fromAmino(object: MsgSetHotRoutesAmino): MsgSetHotRoutes;
    toAmino(message: MsgSetHotRoutes): MsgSetHotRoutesAmino;
    fromAminoMsg(object: MsgSetHotRoutesAminoMsg): MsgSetHotRoutes;
    toAminoMsg(message: MsgSetHotRoutes): MsgSetHotRoutesAminoMsg;
    fromProtoMsg(message: MsgSetHotRoutesProtoMsg): MsgSetHotRoutes;
    toProto(message: MsgSetHotRoutes): Uint8Array;
    toProtoMsg(message: MsgSetHotRoutes): MsgSetHotRoutesProtoMsg;
};
export declare const MsgSetHotRoutesResponse: {
    typeUrl: string;
    encode(_: MsgSetHotRoutesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetHotRoutesResponse;
    fromPartial(_: Partial<MsgSetHotRoutesResponse>): MsgSetHotRoutesResponse;
    fromAmino(_: MsgSetHotRoutesResponseAmino): MsgSetHotRoutesResponse;
    toAmino(_: MsgSetHotRoutesResponse): MsgSetHotRoutesResponseAmino;
    fromAminoMsg(object: MsgSetHotRoutesResponseAminoMsg): MsgSetHotRoutesResponse;
    toAminoMsg(message: MsgSetHotRoutesResponse): MsgSetHotRoutesResponseAminoMsg;
    fromProtoMsg(message: MsgSetHotRoutesResponseProtoMsg): MsgSetHotRoutesResponse;
    toProto(message: MsgSetHotRoutesResponse): Uint8Array;
    toProtoMsg(message: MsgSetHotRoutesResponse): MsgSetHotRoutesResponseProtoMsg;
};
export declare const MsgSetDeveloperAccount: {
    typeUrl: string;
    encode(message: MsgSetDeveloperAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetDeveloperAccount;
    fromPartial(object: Partial<MsgSetDeveloperAccount>): MsgSetDeveloperAccount;
    fromAmino(object: MsgSetDeveloperAccountAmino): MsgSetDeveloperAccount;
    toAmino(message: MsgSetDeveloperAccount): MsgSetDeveloperAccountAmino;
    fromAminoMsg(object: MsgSetDeveloperAccountAminoMsg): MsgSetDeveloperAccount;
    toAminoMsg(message: MsgSetDeveloperAccount): MsgSetDeveloperAccountAminoMsg;
    fromProtoMsg(message: MsgSetDeveloperAccountProtoMsg): MsgSetDeveloperAccount;
    toProto(message: MsgSetDeveloperAccount): Uint8Array;
    toProtoMsg(message: MsgSetDeveloperAccount): MsgSetDeveloperAccountProtoMsg;
};
export declare const MsgSetDeveloperAccountResponse: {
    typeUrl: string;
    encode(_: MsgSetDeveloperAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetDeveloperAccountResponse;
    fromPartial(_: Partial<MsgSetDeveloperAccountResponse>): MsgSetDeveloperAccountResponse;
    fromAmino(_: MsgSetDeveloperAccountResponseAmino): MsgSetDeveloperAccountResponse;
    toAmino(_: MsgSetDeveloperAccountResponse): MsgSetDeveloperAccountResponseAmino;
    fromAminoMsg(object: MsgSetDeveloperAccountResponseAminoMsg): MsgSetDeveloperAccountResponse;
    toAminoMsg(message: MsgSetDeveloperAccountResponse): MsgSetDeveloperAccountResponseAminoMsg;
    fromProtoMsg(message: MsgSetDeveloperAccountResponseProtoMsg): MsgSetDeveloperAccountResponse;
    toProto(message: MsgSetDeveloperAccountResponse): Uint8Array;
    toProtoMsg(message: MsgSetDeveloperAccountResponse): MsgSetDeveloperAccountResponseProtoMsg;
};
export declare const MsgSetPoolWeights: {
    typeUrl: string;
    encode(message: MsgSetPoolWeights, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPoolWeights;
    fromPartial(object: Partial<MsgSetPoolWeights>): MsgSetPoolWeights;
    fromAmino(object: MsgSetPoolWeightsAmino): MsgSetPoolWeights;
    toAmino(message: MsgSetPoolWeights): MsgSetPoolWeightsAmino;
    fromAminoMsg(object: MsgSetPoolWeightsAminoMsg): MsgSetPoolWeights;
    toAminoMsg(message: MsgSetPoolWeights): MsgSetPoolWeightsAminoMsg;
    fromProtoMsg(message: MsgSetPoolWeightsProtoMsg): MsgSetPoolWeights;
    toProto(message: MsgSetPoolWeights): Uint8Array;
    toProtoMsg(message: MsgSetPoolWeights): MsgSetPoolWeightsProtoMsg;
};
export declare const MsgSetPoolWeightsResponse: {
    typeUrl: string;
    encode(_: MsgSetPoolWeightsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPoolWeightsResponse;
    fromPartial(_: Partial<MsgSetPoolWeightsResponse>): MsgSetPoolWeightsResponse;
    fromAmino(_: MsgSetPoolWeightsResponseAmino): MsgSetPoolWeightsResponse;
    toAmino(_: MsgSetPoolWeightsResponse): MsgSetPoolWeightsResponseAmino;
    fromAminoMsg(object: MsgSetPoolWeightsResponseAminoMsg): MsgSetPoolWeightsResponse;
    toAminoMsg(message: MsgSetPoolWeightsResponse): MsgSetPoolWeightsResponseAminoMsg;
    fromProtoMsg(message: MsgSetPoolWeightsResponseProtoMsg): MsgSetPoolWeightsResponse;
    toProto(message: MsgSetPoolWeightsResponse): Uint8Array;
    toProtoMsg(message: MsgSetPoolWeightsResponse): MsgSetPoolWeightsResponseProtoMsg;
};
export declare const MsgSetMaxPoolPointsPerTx: {
    typeUrl: string;
    encode(message: MsgSetMaxPoolPointsPerTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMaxPoolPointsPerTx;
    fromPartial(object: Partial<MsgSetMaxPoolPointsPerTx>): MsgSetMaxPoolPointsPerTx;
    fromAmino(object: MsgSetMaxPoolPointsPerTxAmino): MsgSetMaxPoolPointsPerTx;
    toAmino(message: MsgSetMaxPoolPointsPerTx): MsgSetMaxPoolPointsPerTxAmino;
    fromAminoMsg(object: MsgSetMaxPoolPointsPerTxAminoMsg): MsgSetMaxPoolPointsPerTx;
    toAminoMsg(message: MsgSetMaxPoolPointsPerTx): MsgSetMaxPoolPointsPerTxAminoMsg;
    fromProtoMsg(message: MsgSetMaxPoolPointsPerTxProtoMsg): MsgSetMaxPoolPointsPerTx;
    toProto(message: MsgSetMaxPoolPointsPerTx): Uint8Array;
    toProtoMsg(message: MsgSetMaxPoolPointsPerTx): MsgSetMaxPoolPointsPerTxProtoMsg;
};
export declare const MsgSetMaxPoolPointsPerTxResponse: {
    typeUrl: string;
    encode(_: MsgSetMaxPoolPointsPerTxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMaxPoolPointsPerTxResponse;
    fromPartial(_: Partial<MsgSetMaxPoolPointsPerTxResponse>): MsgSetMaxPoolPointsPerTxResponse;
    fromAmino(_: MsgSetMaxPoolPointsPerTxResponseAmino): MsgSetMaxPoolPointsPerTxResponse;
    toAmino(_: MsgSetMaxPoolPointsPerTxResponse): MsgSetMaxPoolPointsPerTxResponseAmino;
    fromAminoMsg(object: MsgSetMaxPoolPointsPerTxResponseAminoMsg): MsgSetMaxPoolPointsPerTxResponse;
    toAminoMsg(message: MsgSetMaxPoolPointsPerTxResponse): MsgSetMaxPoolPointsPerTxResponseAminoMsg;
    fromProtoMsg(message: MsgSetMaxPoolPointsPerTxResponseProtoMsg): MsgSetMaxPoolPointsPerTxResponse;
    toProto(message: MsgSetMaxPoolPointsPerTxResponse): Uint8Array;
    toProtoMsg(message: MsgSetMaxPoolPointsPerTxResponse): MsgSetMaxPoolPointsPerTxResponseProtoMsg;
};
export declare const MsgSetMaxPoolPointsPerBlock: {
    typeUrl: string;
    encode(message: MsgSetMaxPoolPointsPerBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMaxPoolPointsPerBlock;
    fromPartial(object: Partial<MsgSetMaxPoolPointsPerBlock>): MsgSetMaxPoolPointsPerBlock;
    fromAmino(object: MsgSetMaxPoolPointsPerBlockAmino): MsgSetMaxPoolPointsPerBlock;
    toAmino(message: MsgSetMaxPoolPointsPerBlock): MsgSetMaxPoolPointsPerBlockAmino;
    fromAminoMsg(object: MsgSetMaxPoolPointsPerBlockAminoMsg): MsgSetMaxPoolPointsPerBlock;
    toAminoMsg(message: MsgSetMaxPoolPointsPerBlock): MsgSetMaxPoolPointsPerBlockAminoMsg;
    fromProtoMsg(message: MsgSetMaxPoolPointsPerBlockProtoMsg): MsgSetMaxPoolPointsPerBlock;
    toProto(message: MsgSetMaxPoolPointsPerBlock): Uint8Array;
    toProtoMsg(message: MsgSetMaxPoolPointsPerBlock): MsgSetMaxPoolPointsPerBlockProtoMsg;
};
export declare const MsgSetMaxPoolPointsPerBlockResponse: {
    typeUrl: string;
    encode(_: MsgSetMaxPoolPointsPerBlockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMaxPoolPointsPerBlockResponse;
    fromPartial(_: Partial<MsgSetMaxPoolPointsPerBlockResponse>): MsgSetMaxPoolPointsPerBlockResponse;
    fromAmino(_: MsgSetMaxPoolPointsPerBlockResponseAmino): MsgSetMaxPoolPointsPerBlockResponse;
    toAmino(_: MsgSetMaxPoolPointsPerBlockResponse): MsgSetMaxPoolPointsPerBlockResponseAmino;
    fromAminoMsg(object: MsgSetMaxPoolPointsPerBlockResponseAminoMsg): MsgSetMaxPoolPointsPerBlockResponse;
    toAminoMsg(message: MsgSetMaxPoolPointsPerBlockResponse): MsgSetMaxPoolPointsPerBlockResponseAminoMsg;
    fromProtoMsg(message: MsgSetMaxPoolPointsPerBlockResponseProtoMsg): MsgSetMaxPoolPointsPerBlockResponse;
    toProto(message: MsgSetMaxPoolPointsPerBlockResponse): Uint8Array;
    toProtoMsg(message: MsgSetMaxPoolPointsPerBlockResponse): MsgSetMaxPoolPointsPerBlockResponseProtoMsg;
};
export declare const MsgSetBaseDenoms: {
    typeUrl: string;
    encode(message: MsgSetBaseDenoms, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetBaseDenoms;
    fromPartial(object: Partial<MsgSetBaseDenoms>): MsgSetBaseDenoms;
    fromAmino(object: MsgSetBaseDenomsAmino): MsgSetBaseDenoms;
    toAmino(message: MsgSetBaseDenoms): MsgSetBaseDenomsAmino;
    fromAminoMsg(object: MsgSetBaseDenomsAminoMsg): MsgSetBaseDenoms;
    toAminoMsg(message: MsgSetBaseDenoms): MsgSetBaseDenomsAminoMsg;
    fromProtoMsg(message: MsgSetBaseDenomsProtoMsg): MsgSetBaseDenoms;
    toProto(message: MsgSetBaseDenoms): Uint8Array;
    toProtoMsg(message: MsgSetBaseDenoms): MsgSetBaseDenomsProtoMsg;
};
export declare const MsgSetBaseDenomsResponse: {
    typeUrl: string;
    encode(_: MsgSetBaseDenomsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetBaseDenomsResponse;
    fromPartial(_: Partial<MsgSetBaseDenomsResponse>): MsgSetBaseDenomsResponse;
    fromAmino(_: MsgSetBaseDenomsResponseAmino): MsgSetBaseDenomsResponse;
    toAmino(_: MsgSetBaseDenomsResponse): MsgSetBaseDenomsResponseAmino;
    fromAminoMsg(object: MsgSetBaseDenomsResponseAminoMsg): MsgSetBaseDenomsResponse;
    toAminoMsg(message: MsgSetBaseDenomsResponse): MsgSetBaseDenomsResponseAminoMsg;
    fromProtoMsg(message: MsgSetBaseDenomsResponseProtoMsg): MsgSetBaseDenomsResponse;
    toProto(message: MsgSetBaseDenomsResponse): Uint8Array;
    toProtoMsg(message: MsgSetBaseDenomsResponse): MsgSetBaseDenomsResponseProtoMsg;
};
